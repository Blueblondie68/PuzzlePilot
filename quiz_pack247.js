// quiz_pack247.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2009
// 100 questions: tv_8584 to tv_8683
// Comprehensive per-question tagging from creation.
// Do not change quiz_bank.js until the agreed bank connection.

const topicTags = {
    "Sean And The Jacksons": ["Sean Slater", "Roxy Mitchell", "Amy Mitchell", "Ricky Butcher", "Bianca Jackson", "January 2009 Exit And Family Secrets"],
    "Danielle And Archie": ["Danielle Jones", "Ronnie Mitchell", "Archie Mitchell", "Peggy Mitchell", "April 2009 Wedding And Tragedy"],
    "Stacey Mental Health": ["Stacey Slater", "Jean Slater", "Bradley Branning", "Bipolar Disorder", "2009 Mental Health Storyline"],
    "Syed And Christian": ["Syed Masood", "Christian Clarke", "Amira Shah", "Zainab Masood", "Masood Family And Secret Romance"],
    "Heather And George": ["Heather Trott", "George Michael Trott", "Darren Miller", "Shirley Carter", "October 2009 Birth And Paternity"],
    "Lucas And The Foxes": ["Lucas Johnson", "Denise Fox", "Trina Johnson", "Owen Turner", "2009 Deaths And November Wedding"],
    "Nick And Dotty": ["Nick Cotton", "Dot Branning", "Dotty Cotton", "Bradley Branning", "June 2009 Cafe Explosion"],
    "Whitney Ryan And Tony": ["Whitney Dean", "Ryan Malloy", "Debra Dean", "Tony King", "December 2009 Trial And Family Discovery"],
    "Dawn Garry And Sam": ["Dawn Swann", "Garry Hobbs", "Phil Mitchell", "Sam Mitchell", "August Departures And September Return"],
    "Archies Last Christmas": ["Archie Mitchell", "Janine Butcher", "Peggy Mitchell", "Queen Victoria Pub", "Christmas 2009 Whodunit"]
};

const facts = [
    // SEAN'S NEW YEAR EXIT AND THE JACKSON FAMILY (10)
    ["Which Slater brother took baby Amy after discovering he was not her biological father?", "Sean Slater", ["Bradley Branning", "Charlie Slater", "Ryan Malloy"], "Easy", "Sean And The Jacksons", ["Sean Takes Amy", "New Year Crisis"]],
    ["Where did Sean take Roxy during his final New Year's Day confrontation?", "To a frozen lake", ["To a seaside pier", "To a railway tunnel", "To the Queen Vic roof"], "Easy", "Sean And The Jacksons", ["Frozen Lake", "January Exit"]],
    ["Who plunged into the freezing water to rescue Roxy from the lake?", "Ronnie Mitchell", ["Peggy Mitchell", "Stacey Slater", "Janine Butcher"], "Easy", "Sean And The Jacksons", ["Ronnie Rescues Roxy", "Sisters In Lake"]],
    ["What happened to Sean Slater after escaping the icy lake?", "He left Walford", ["He was jailed for life", "He took over the Queen Vic", "He married Stacey's friend"], "Easy", "Sean And The Jacksons", ["Sean Survives", "Departure January 2009"]],
    ["Who was revealed to be Tiffany Dean's biological father during 2009?", "Ricky Butcher", ["Tony King", "Nathan Dean", "Garry Hobbs"], "Easy", "Sean And The Jacksons", ["Tiffany Paternity", "Ricky Is Father"]],
    ["What test confirmed Ricky's relationship to Tiffany?", "A DNA test", ["A blood pressure test", "An ultrasound", "A hospital allergy test"], "Easy", "Sean And The Jacksons", ["Ricky Tiffany DNA", "Paternity Confirmation"]],
    ["Which child was celebrating her birthday when Bianca first admitted Ricky might be her father?", "Tiffany", ["Whitney", "Lauren", "Abi"], "Medium", "Sean And The Jacksons", ["Tiffany Birthday", "Bianca Confession"]],
    ["What did Sean use to send Roxy a photograph of Amy while he was on the run?", "His mobile phone", ["A disposable camera", "A postcard", "An email from a library"], "Medium", "Sean And The Jacksons", ["Sean Sends Amy Photo", "Mobile Phone Message"]],
    ["Which man proposed to Bianca at the end of 2009?", "Ricky Butcher", ["Garry Hobbs", "Phil Mitchell", "Jack Branning"], "Easy", "Sean And The Jacksons", ["Ricky Bianca Proposal", "December Engagement"]],
    ["When was Ricky and Bianca's reunion wedding planned to take place?", "In 2010", ["On Christmas Day 2009", "In 2008", "On New Year's Eve 2009"], "Medium", "Sean And The Jacksons", ["Wedding Planned For 2010", "Chronology"]],

    // DANIELLE'S SECRET AND PEGGY'S WEDDING TO ARCHIE (10)
    ["Which Mitchell matriarch married Archie in a dramatic spring wedding?", "Peggy Mitchell", ["Ronnie Mitchell", "Roxy Mitchell", "Pat Evans"], "Easy", "Danielle And Archie", ["Peggy Archie Wedding", "April 2009"]],
    ["In which English town had Danielle grown up with her adoptive family?", "Telford", ["Taunton", "Truro", "Tunbridge Wells"], "Medium", "Danielle And Archie", ["Telford Childhood", "Adoptive Home"]],
    ["What was the name of Danielle's adoptive father, who visited Walford?", "Andy Jones", ["Jack Branning", "Ian Beale", "Bert Atkinson"], "Medium", "Danielle And Archie", ["Andy Jones", "Adoptive Father"]],
    ["What was the first name of Danielle's adoptive brother, whose wedding brought her family together?", "Gareth", ["George", "Garry", "Graham"], "Medium", "Danielle And Archie", ["Gareth Jones", "Adoptive Family Wedding"]],
    ["What difficult decision did Danielle make about her own pregnancy early in the year?", "She had an abortion", ["She adopted twins", "She gave birth in secret", "She left to marry the father"], "Medium", "Danielle And Archie", ["Danielle Pregnancy", "February Decision"]],
    ["What keepsake helped Ronnie realise that Danielle was telling the truth about their relationship?", "A locket", ["An old school photograph", "A wedding invitation", "A silver bracelet from Peggy"], "Medium", "Danielle And Archie", ["Danielle Locket", "Identity Realisation"]],
    ["Which Walford resident was driving the car that struck Danielle?", "Janine Butcher", ["Pat Evans", "Bianca Jackson", "Roxy Mitchell"], "Easy", "Danielle And Archie", ["Janine Drives Car", "Fatal Collision"]],
    ["On what occasion did Danielle finally tell Ronnie she was her daughter?", "Peggy and Archie's wedding day", ["Roxy's birthday", "Ronnie and Jack's wedding", "Christmas Day"], "Easy", "Danielle And Archie", ["Wedding Day Revelation", "April Tragedy"]],
    ["In whose arms did Danielle die after the road accident?", "Ronnie's", ["Peggy's", "Stacey's", "Roxy's"], "Easy", "Danielle And Archie", ["Danielle Death", "Ronnie Farewell"]],
    ["What did Peggy do after discovering Archie's lies about Danielle?", "Ended her marriage to him", ["Moved with him to France", "Made him manager of the pub", "Agreed to renew their vows"], "Easy", "Danielle And Archie", ["Peggy Leaves Archie", "Marriage Breakup"]],

    // STACEY AND JEAN'S BIPOLAR STORYLINE (10)
    ["Which Slater was diagnosed with bipolar disorder during 2009?", "Stacey Slater", ["Kat Slater", "Zoe Slater", "Little Mo Mitchell"], "Easy", "Stacey Mental Health", ["Stacey Diagnosis", "Bipolar Disorder"]],
    ["Which member of Stacey's family recognised her symptoms because she had the same condition?", "Jean Slater", ["Mo Harris", "Charlie Slater", "Sean Slater"], "Easy", "Stacey Mental Health", ["Jean Recognises Symptoms", "Family Mental Health"]],
    ["Which actress played Stacey during the 2009 bipolar storyline?", "Lacey Turner", ["Gillian Wright", "Jessie Wallace", "Kacey Ainsworth"], "Easy", "Stacey Mental Health", ["Lacey Turner", "Storyline Performance"]],
    ["Whose tragic death contributed to Stacey's distress before her diagnosis?", "Danielle Jones's", ["Heather Trott's", "Peggy Mitchell's", "Tanya Branning's"], "Medium", "Stacey Mental Health", ["Grief After Danielle", "Trigger And Symptoms"]],
    ["What kind of business did Stacey struggle to manage as her condition worsened?", "Her market stall", ["A minicab firm", "A nightclub", "A car showroom"], "Medium", "Stacey Mental Health", ["Market Stall Work", "Manic Behaviour"]],
    ["Which relative tried to persuade Stacey to seek medical help?", "Jean Slater", ["Ronnie Mitchell", "Pat Evans", "Peggy Mitchell"], "Easy", "Stacey Mental Health", ["Jean Urges Treatment", "Family Support"]],
    ["What happened to Stacey in October when her mental health deteriorated?", "She was sectioned in hospital", ["She joined the police", "She emigrated to Spain", "She was sent to prison for robbery"], "Easy", "Stacey Mental Health", ["October Sectioning", "Psychiatric Care"]],
    ["Which organisation was among the mental health charities consulted about Stacey's storyline?", "Mind", ["The RSPCA", "Shelter", "The National Trust"], "Medium", "Stacey Mental Health", ["Mind Charity", "Storyline Research"]],
    ["Which former husband reconciled with Stacey near the end of 2009?", "Bradley Branning", ["Max Branning", "Sean Slater", "Ryan Malloy"], "Easy", "Stacey Mental Health", ["Bradley Reconciliation", "December Return"]],
    ["What news did Stacey give Bradley shortly before Christmas?", "She was pregnant", ["She had inherited the pub", "She had married someone else", "She was moving to France"], "Easy", "Stacey Mental Health", ["December Pregnancy", "Bradley Shock"]],

    // SYED MASOOD AND CHRISTIAN CLARKE (10)
    ["Which estranged Masood son first arrived in Walford during the spring?", "Syed Masood", ["Tamwar Masood", "Kamil Masood", "Ash Ferreira"], "Easy", "Syed And Christian", ["Syed April Debut", "Estranged Son"]],
    ["Which actor played Syed Masood?", "Marc Elliott", ["Himesh Patel", "Nitin Ganatra", "John Partridge"], "Medium", "Syed And Christian", ["Marc Elliott", "Syed Casting"]],
    ["Which openly gay Walford caterer began a secret romance with Syed?", "Christian Clarke", ["Jack Branning", "Ian Beale", "Ryan Malloy"], "Easy", "Syed And Christian", ["Christian Syed Relationship", "Chryed"]],
    ["Which month featured the first on-screen kiss between Syed and Christian?", "June", ["January", "September", "December"], "Medium", "Syed And Christian", ["June 2009 Kiss", "Romance Starts"]],
    ["What was the name of Syed's girlfriend who later became his fiancée?", "Amira Shah", ["Shabnam Masood", "Chelsea Fox", "Libby Fox"], "Easy", "Syed And Christian", ["Amira Fiancee", "Love Triangle"]],
    ["Which actress portrayed Amira Shah on her arrival?", "Preeya Kalidas", ["Nina Wadia", "Zahra Ahmadi", "Diane Parish"], "Medium", "Syed And Christian", ["Preeya Kalidas", "Amira Casting"]],
    ["Which Masood family member was Syed's mother?", "Zainab Masood", ["Shabnam Masood", "Jane Beale", "Denise Fox"], "Easy", "Syed And Christian", ["Zainab Mother", "Family Expectations"]],
    ["What was the name of the family catering firm where Syed and Christian worked?", "Masala Queen", ["Fit for a Queen", "Booty", "Scarlet"], "Medium", "Syed And Christian", ["Masala Queen", "Catering Business"]],
    ["Which month did Syed propose to Amira?", "July", ["March", "October", "December"], "Medium", "Syed And Christian", ["July Engagement", "Amira Proposal"]],
    ["When did Syed and Amira's wedding finally take place?", "New Year's Day 2010", ["Christmas Day 2009", "August 2009", "Easter 2009"], "Medium", "Syed And Christian", ["Wedding Scheduled 2010", "Year Boundary"]],

    // HEATHER AND BABY GEORGE MICHAEL (10)
    ["Which resident discovered she was expecting a baby in May 2009?", "Heather Trott", ["Shirley Carter", "Roxy Mitchell", "Denise Fox"], "Easy", "Heather And George", ["Heather Pregnancy", "May Discovery"]],
    ["What did Heather name her son after her favourite pop star?", "George Michael", ["David Bowie", "Robbie Williams", "Elton John"], "Easy", "Heather And George", ["George Michael Trott", "Musical Namesake"]],
    ["Which young Miller was revealed as Heather's baby's father?", "Darren Miller", ["Mickey Miller", "Garry Hobbs", "Minty Peterson"], "Easy", "Heather And George", ["Darren Paternity Reveal", "October 2009"]],
    ["How old was Heather when she discovered she was pregnant in 2009?", "Forty-one", ["Twenty-one", "Thirty-one", "Fifty-one"], "Medium", "Heather And George", ["Heather Age Forty One", "Unexpected Pregnancy"]],
    ["Which friend supported Heather throughout her pregnancy and met baby George in hospital?", "Shirley Carter", ["Janine Butcher", "Bianca Jackson", "Roxy Mitchell"], "Easy", "Heather And George", ["Shirley Supports Heather", "Baby George First Visit"]],
    ["Which vehicle was used to rush Heather to hospital when labour began?", "An ice-cream van", ["A police car", "A minibus", "An ambulance helicopter"], "Medium", "Heather And George", ["Ice Cream Van Transport", "October Labour"]],
    ["Who drove the ice-cream van to the hospital when Heather went into labour?", "Pat Evans", ["Peggy Mitchell", "Shirley Carter", "Jane Beale"], "Medium", "Heather And George", ["Pat Drives Van", "Hospital Journey"]],
    ["Which resident stayed with Heather during the delivery while Pat and Peggy argued?", "Patrick Trueman", ["Billy Mitchell", "Minty Peterson", "Phil Mitchell"], "Medium", "Heather And George", ["Patrick Birth Partner", "Hospital Scene"]],
    ["Which month did Heather give birth to George?", "October", ["February", "June", "December"], "Medium", "Heather And George", ["October 2009 Birth", "Baby George"]],
    ["Which Fox daughter was dating Darren when he was revealed as George's father?", "Libby Fox", ["Chelsea Fox", "Denise Fox", "Dawn Swann"], "Medium", "Heather And George", ["Darren Libby Relationship", "Paternity Fallout"]],

    // LUCAS, TRINA, OWEN AND DENISE (10)
    ["Which preacher was involved in the deaths of Trina Johnson and Owen Turner?", "Lucas Johnson", ["Patrick Trueman", "Kevin Wicks", "Ryan Malloy"], "Easy", "Lucas And The Foxes", ["Lucas Killing Spree", "Walford Villain"]],
    ["Which former wife of Lucas returned to challenge his relationship with Denise?", "Trina Johnson", ["Tina Stewart", "May Wright", "Shirley Carter"], "Easy", "Lucas And The Foxes", ["Trina Returns", "Ex Wife Conflict"]],
    ["Which actress played Trina Johnson?", "Sharon Duncan-Brewster", ["Diane Parish", "Petra Letang", "Angela Wynter"], "Medium", "Lucas And The Foxes", ["Sharon Duncan Brewster", "Trina Casting"]],
    ["On what garden tool was Trina fatally injured during a confrontation with Lucas?", "A rake", ["A spade", "A pitchfork", "A hedge trimmer"], "Medium", "Lucas And The Foxes", ["Trina Rake Injury", "Allotment Shed"]],
    ["Where was Trina's body discovered after her death?", "In an allotment shed", ["In the Queen Vic cellar", "At the car lot", "In the canal"], "Easy", "Lucas And The Foxes", ["Trina Body Found", "Allotments"]],
    ["Which two youngsters discovered Trina's body?", "Jordan and Abi", ["Tiffany and Liam", "Ben and Jay", "Lauren and Lucy"], "Medium", "Lucas And The Foxes", ["Jordan Johnson", "Abi Branning", "Discovery September"]],
    ["What cause of death did Lucas encourage the police to believe in Trina's case?", "An accidental drug-related death", ["A deliberate shooting", "A traffic accident", "Drowning"], "Medium", "Lucas And The Foxes", ["Lucas Stages Accident", "Trina Death Cover Up"]],
    ["Whom did Lucas Johnson marry in November 2009?", "Denise Fox", ["Chelsea Fox", "Shirley Carter", "Pat Evans"], "Easy", "Lucas And The Foxes", ["Lucas Denise Wedding", "November 2009"]],
    ["Which of Denise's former husbands became Lucas's next victim?", "Owen Turner", ["Kevin Wicks", "Joe Macer", "Johnny Allen"], "Easy", "Lucas And The Foxes", ["Owen Killed", "Denise Former Husband"]],
    ["How did Lucas kill Owen Turner after his wedding to Denise?", "By strangling him", ["By pushing him off a cliff", "By poisoning his drink", "By shooting him"], "Medium", "Lucas And The Foxes", ["Owen Strangled", "November Murder"]],

    // NICK COTTON, DOTTY AND THE CAFE EXPLOSION (10)
    ["Which notorious son of Dot returned with a young daughter called Dotty?", "Nick Cotton", ["Ashley Cotton", "Jack Branning", "Charlie Cotton"], "Easy", "Nick And Dotty", ["Nick Dotty Scheme", "Dot Son"]],
    ["What was Dotty Cotton's real first name?", "Kirsty", ["Kerry", "Katie", "Kelly"], "Medium", "Nick And Dotty", ["Kirsty Cotton", "Dotty Real Name"]],
    ["Which young actress first played Dotty Cotton?", "Molly Conlin", ["Maisie Smith", "Lorna Fitzgerald", "Madeline Duggan"], "Medium", "Nick And Dotty", ["Molly Conlin", "Dotty Casting"]],
    ["Why did Nick want Dotty to help him harm Dot?", "To gain Dot's money", ["To take control of the nightclub", "To secure a job at the Arches", "To win custody of Ben"], "Easy", "Nick And Dotty", ["Nick Inheritance Plot", "Financial Motive"]],
    ["What did Nick intend Dotty to put in Dot's food or drink?", "Crushed pills", ["Rat poison", "Sleeping herbs", "Bleach"], "Medium", "Nick And Dotty", ["Poison Plot", "Crushed Tablets"]],
    ["Who did Dotty drug instead after changing her mind about the plan?", "Nick Cotton", ["Dot Branning", "Bradley Branning", "Ryan Malloy"], "Easy", "Nick And Dotty", ["Dotty Betrays Nick", "Change Of Heart"]],
    ["Which Walford business went up in flames during Nick's hostage drama?", "The café", ["The Queen Vic", "The launderette", "The Arches"], "Easy", "Nick And Dotty", ["Cafe Explosion", "June 2009"]],
    ["Which newcomer fought Nick during the café hostage crisis?", "Ryan Malloy", ["Syed Masood", "Christian Clarke", "Garry Hobbs"], "Medium", "Nick And Dotty", ["Ryan Fights Nick", "Hostage Rescue"]],
    ["Which Branning tried to save Nick and was injured when the café exploded?", "Bradley Branning", ["Max Branning", "Jack Branning", "Jim Branning"], "Easy", "Nick And Dotty", ["Bradley Injured", "Explosion Rescue"]],
    ["What did Dot do after Nick survived the café explosion?", "Disowned him again", ["Made him manager of the café", "Left Walford with him", "Gave him the Queen Vic"], "Medium", "Nick And Dotty", ["Dot Disowns Nick", "June Exit"]],

    // WHITNEY DISCOVERS HER FAMILY AND TONY FACES TRIAL (10)
    ["Which woman returned as Whitney Dean's estranged biological mother?", "Debra Dean", ["Bianca Jackson", "Shirley Carter", "Dawn Swann"], "Easy", "Whitney Ryan And Tony", ["Debra Mother", "January Arrival"]],
    ["Which actress portrayed Whitney's mother Debra Dean?", "Ruth Gemmell", ["Patsy Palmer", "Linda Henry", "Diane Parish"], "Medium", "Whitney Ryan And Tony", ["Ruth Gemmell", "Debra Casting"]],
    ["Which newcomer was revealed to be Whitney's maternal half-brother?", "Ryan Malloy", ["Deano Wicks", "Jay Brown", "Peter Beale"], "Easy", "Whitney Ryan And Tony", ["Ryan Whitney Siblings", "Family Secret"]],
    ["Which actor played Ryan Malloy on his arrival?", "Neil McDermott", ["Matt Di Angelo", "Marc Elliott", "Charlie Clements"], "Medium", "Whitney Ryan And Tony", ["Neil McDermott", "Ryan Casting"]],
    ["What item did Whitney throw into the canal after learning about Ryan's violent past?", "A knife", ["A wallet", "A suitcase", "A mobile phone"], "Medium", "Whitney Ryan And Tony", ["Ryan Hidden Knife", "Canal Disposal"]],
    ["Which former partner of Bianca stood trial for abusing Whitney?", "Tony King", ["Rob Minter", "Phil Mitchell", "Lucas Johnson"], "Easy", "Whitney Ryan And Tony", ["Tony Abuse Trial", "December 2009"]],
    ["Which month saw Tony King's trial reach its conclusion?", "December", ["February", "June", "September"], "Medium", "Whitney Ryan And Tony", ["December 2009 Verdict", "Trial Date"]],
    ["What was the jury's verdict in Tony King's abuse trial?", "Guilty", ["Not guilty", "Trial abandoned", "Hung jury"], "Easy", "Whitney Ryan And Tony", ["Tony Convicted", "Whitney Justice"]],
    ["How long was Tony King sentenced to prison for?", "Thirteen years", ["Five years", "Eight years", "Twenty-five years"], "Medium", "Whitney Ryan And Tony", ["Thirteen Year Sentence", "Court Punishment"]],
    ["Which woman encouraged Whitney to give evidence against Tony?", "Bianca Jackson", ["Janine Butcher", "Stacey Slater", "Roxy Mitchell"], "Easy", "Whitney Ryan And Tony", ["Bianca Supports Whitney", "Trial Testimony"]],

    // DAWN AND GARRY LEAVE; SAM RETURNS (10)
    ["Which mechanic's long-term love for Dawn finally led to an engagement in 2009?", "Garry Hobbs", ["Minty Peterson", "Phil Mitchell", "Ian Beale"], "Easy", "Dawn Garry And Sam", ["Garry Dawn Engagement", "2009 Romance"]],
    ["With which Mitchell did Dawn have an affair while involved with Garry?", "Phil Mitchell", ["Grant Mitchell", "Billy Mitchell", "Ben Mitchell"], "Easy", "Dawn Garry And Sam", ["Dawn Phil Affair", "Summer Infidelity"]],
    ["Which of Garry's friends told him about Dawn's affair with Phil?", "Minty Peterson", ["Christian Clarke", "Ryan Malloy", "Ian Beale"], "Easy", "Dawn Garry And Sam", ["Minty Exposes Affair", "Friend Loyalty"]],
    ["How did Garry, Dawn and Summer finally leave Walford together?", "By boat", ["By aeroplane", "By train", "By motorcycle"], "Easy", "Dawn Garry And Sam", ["Garry Dawn Boat Departure", "August 2009"]],
    ["Which little girl accompanied Dawn and Garry on their departure?", "Summer", ["Amy", "Janet", "Tiffany"], "Easy", "Dawn Garry And Sam", ["Summer Swann Leaves", "Family Exit"]],
    ["Which Mitchell woman returned to Walford in September after living abroad?", "Sam Mitchell", ["Louise Mitchell", "Kate Mitchell", "Lisa Fowler"], "Easy", "Dawn Garry And Sam", ["Sam September Return", "Mitchell Homecoming"]],
    ["Which actress returned to the role of Sam Mitchell in 2009?", "Danniella Westbrook", ["Kim Medcalf", "Barbara Windsor", "Samantha Womack"], "Medium", "Dawn Garry And Sam", ["Danniella Westbrook", "Sam Recasting"]],
    ["From which country had Sam Mitchell originally fled to avoid further legal trouble?", "Brazil", ["Spain", "France", "Australia"], "Medium", "Dawn Garry And Sam", ["Sam Brazil Escape", "Fugitive Return"]],
    ["Which former rival alerted the police to Sam's presence in Walford?", "Bianca Jackson", ["Roxy Mitchell", "Jane Beale", "Janine Butcher"], "Medium", "Dawn Garry And Sam", ["Bianca Reports Sam", "September Arrest"]],
    ["What unresolved criminal charge made Sam's return dangerous?", "Perverting the course of justice", ["Armed robbery", "Arson", "Identity theft"], "Medium", "Dawn Garry And Sam", ["Sam Legal History", "Den Watts Case Aftermath"]],

    // ARCHIE'S TAKEOVER AND THE CHRISTMAS MURDER MYSTERY (10)
    ["Which Mitchell patriarch was murdered inside the Queen Vic on Christmas Day 2009?", "Archie Mitchell", ["Phil Mitchell", "Grant Mitchell", "Billy Mitchell"], "Easy", "Archies Last Christmas", ["Archie Christmas Death", "Whodunit Begins"]],
    ["What object was used to deliver the fatal blow to Archie?", "A bust of Queen Victoria", ["A brass candlestick", "A champagne bottle", "A poker trophy"], "Easy", "Archies Last Christmas", ["Queen Victoria Bust", "Murder Weapon"]],
    ["Which Butcher woman joined Archie in a plot to seize the Queen Vic?", "Janine Butcher", ["Bianca Jackson", "Pat Evans", "Diane Butcher"], "Easy", "Archies Last Christmas", ["Janine Archie Alliance", "Pub Takeover"]],
    ["Which Beale businessman was blackmailed by Janine during the Queen Vic takeover scheme?", "Ian Beale", ["Peter Beale", "Steven Beale", "Bobby Beale"], "Easy", "Archies Last Christmas", ["Ian Blackmail", "Mitchell Pub Loan"]],
    ["What did Janine secretly record to gain leverage over Ian?", "Their sexual encounter", ["His bank PIN", "A forged will", "His confession to stealing cars"], "Medium", "Archies Last Christmas", ["Janine Records Ian", "Blackmail Evidence"]],
    ["Which family lost control of the Queen Vic shortly before Christmas?", "The Mitchells", ["The Slaters", "The Masoods", "The Jacksons"], "Easy", "Archies Last Christmas", ["Mitchells Evicted", "December Pub Takeover"]],
    ["Which woman did Archie propose to shortly before his death?", "Janine Butcher", ["Pat Evans", "Ronnie Mitchell", "Shirley Carter"], "Easy", "Archies Last Christmas", ["Archie Janine Engagement", "December Proposal"]],
    ["What happened to Janine's engagement on Christmas Day?", "Archie threw her out", ["She married Archie in secret", "They moved to Spain", "She discovered she was pregnant"], "Medium", "Archies Last Christmas", ["Janine Rejected", "Christmas Betrayal"]],
    ["Which Mitchell daughter was arrested on Boxing Day as the police investigated Archie's murder?", "Ronnie Mitchell", ["Roxy Mitchell", "Sam Mitchell", "Peggy Mitchell"], "Medium", "Archies Last Christmas", ["Ronnie Arrested", "Boxing Day Suspect"]],
    ["In which year did viewers finally learn the identity of Archie's killer?", "2010", ["2009", "2008", "2011"], "Medium", "Archies Last Christmas", ["Live Anniversary Reveal", "Mystery Year Boundary"]]
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic, detailTags], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: "tv_" + String(8584 + index).padStart(4, "0"),
        category: "Television",
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set([
            "British Television", "Soaps", "EastEnders", "2009",
            topic, ...topicTags[topic], correctAnswer, ...detailTags
        ])],
        dailyEligible: true
    };
});

module.exports = questions;
