// quiz_pack249.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2011
// 100 questions: tv_8784 to tv_8883
// Full question-level tags from creation.
// Do not change quiz_bank.js until the agreed bank connection.

const topicTags = {
    "Ronnie And Tommy": ["Ronnie Branning", "Kat Moon", "Alfie Moon", "Tommy Moon", "Baby Swap Resolution"],
    "Yusef And Zainab": ["Yusef Khan", "Zainab Masood", "Masood Ahmed", "Tamwar Masood", "Christmas 2011 Bed And Breakfast Fire"],
    "Tanya And Brannings": ["Tanya Branning", "Max Branning", "Lauren Branning", "Greg Jessop", "2011 Cervical Cancer Storyline"],
    "Whitney And Rob": ["Whitney Dean", "Rob Grayson", "Lauren Branning", "Janine Butcher", "Comic Relief Sexual Exploitation Storyline"],
    "Billy Lola And Ben": ["Billy Mitchell", "Lola Pearce", "Julie Perkins", "Ben Mitchell", "2011 Mitchell Family"],
    "Moon Family Arrivals": ["Eddie Moon", "Michael Moon", "Tyler Moon", "Anthony Moon", "2011 Moon Family Expansion"],
    "Syed Amira And Afia": ["Syed Masood", "Christian Clarke", "Amira Shah", "Tamwar Masood", "2011 Weddings And Family Secrets"],
    "Janine Pat And Mandy": ["Janine Butcher", "Pat Evans", "Mandy Salter", "Ian Beale", "2011 Returns And Illness"],
    "Phil Stalker And Custody": ["Phil Mitchell", "Ben Mitchell", "Shirley Carter", "Roxy Mitchell", "Jack Branning", "2011 Blackmail And Custody Dispute"],
    "Walford New Faces": ["Fatboy Chubb", "Mercy Olubunmi", "Derek Branning", "Dot Branning", "2011 Walford Arrivals And Departures"]
};

const facts = [
    // RONNIE'S BABY-SWAP STORY REACHES ITS END (10)
    ["Which woman finally confessed that she had taken Kat Moon's baby?", "Ronnie Branning", ["Roxy Mitchell", "Janine Butcher", "Shirley Carter"], "Easy", "Ronnie And Tommy", ["Ronnie Confession", "April 2011"]],
    ["What was the name of the baby returned to Kat and Alfie?", "Tommy", ["James", "Richard", "George"], "Easy", "Ronnie And Tommy", ["Tommy Returned", "Baby Reunited"]],
    ["What was the name of Ronnie's own son, who had died shortly after birth?", "James", ["Tommy", "Oscar", "Freddie"], "Easy", "Ronnie And Tommy", ["James Branning", "Sudden Infant Death"]],
    ["In which month did the baby-swap storyline conclude with Tommy's return?", "April", ["February", "July", "November"], "Medium", "Ronnie And Tommy", ["April Resolution", "2011 Storyline End"]],
    ["Which Queen Vic landlord was reunited with Tommy alongside Kat?", "Alfie Moon", ["Michael Moon", "Jack Branning", "Phil Mitchell"], "Easy", "Ronnie And Tommy", ["Alfie Reunited", "Moon Family"]],
    ["Which husband had unknowingly been raising Tommy as his own son?", "Jack Branning", ["Max Branning", "Bradley Branning", "Ian Beale"], "Easy", "Ronnie And Tommy", ["Jack Misled", "False Fatherhood"]],
    ["What kind of test helped establish the baby's true identity after Ronnie confessed?", "A DNA test", ["An eye examination", "A hearing test", "A blood pressure test"], "Easy", "Ronnie And Tommy", ["Baby Identity Confirmed", "Hospital Records"]],
    ["What did Ronnie do after admitting that she had taken Tommy?", "Handed herself in to the police", ["Fled to Spain", "Moved in with Kat", "Took a job at the café"], "Easy", "Ronnie And Tommy", ["Police Surrender", "Ronnie Accepts Responsibility"]],
    ["How long was Ronnie's prison sentence for taking baby Tommy?", "Three years", ["Six months", "Ten years", "Five years"], "Medium", "Ronnie And Tommy", ["Three Year Sentence", "July Trial"]],
    ["Who publicly forgave Ronnie during her sentencing hearing?", "Kat Moon", ["Peggy Mitchell", "Amira Shah", "Jane Beale"], "Easy", "Ronnie And Tommy", ["Kat Forgives Ronnie", "Courtroom Scene"]],

    // YUSEF, ZAINAB AND CHRISTMAS AT THE B&B (10)
    ["Which doctor had been married to Zainab before she married Masood?", "Yusef Khan", ["Lucas Johnson", "Qadim Shah", "Oliver Cousins"], "Easy", "Yusef And Zainab", ["Zainab First Husband", "Yusef Past"]],
    ["Which young woman was Yusef Khan's daughter?", "Afia", ["Amira", "Shabnam", "Libby"], "Easy", "Yusef And Zainab", ["Afia Khan", "Father Daughter Relationship"]],
    ["Who was eventually revealed to have started the fire that scarred Zainab years earlier?", "Yusef Khan", ["Masood Ahmed", "Qadim Shah", "Inzamam Ahmed"], "Medium", "Yusef And Zainab", ["Zainab Historical Burns", "Yusef Fire Confession"]],
    ["Which country did Yusef try to force Zainab and Kamil to move to?", "Pakistan", ["Bangladesh", "India", "Turkey"], "Easy", "Yusef And Zainab", ["Forced Pakistan Move", "Christmas Threat"]],
    ["Which of Zainab's children did Yusef use to force her to obey him?", "Kamil", ["Syed", "Tamwar", "Shabnam"], "Easy", "Yusef And Zainab", ["Kamil Abducted", "Coercion"]],
    ["What business was engulfed by the fire Yusef started at Christmas?", "The bed and breakfast", ["The café", "The Queen Victoria", "The car lot"], "Easy", "Yusef And Zainab", ["Bed And Breakfast Fire", "Boxing Day 2011"]],
    ["Whom did Yusef initially intend to kill in the Christmas fire?", "Masood Ahmed", ["Tamwar Masood", "Syed Masood", "Phil Mitchell"], "Medium", "Yusef And Zainab", ["Masood Targeted", "Arson Motive"]],
    ["Which relative did Zainab falsely say was trapped inside the burning building?", "Afia", ["Shabnam", "Amira", "Denise"], "Medium", "Yusef And Zainab", ["Zainab Tricks Yusef", "Daughter In Fire Lie"]],
    ["Who died after entering the burning bed and breakfast and falling through the floor?", "Yusef Khan", ["Masood Ahmed", "Phil Mitchell", "Tamwar Masood"], "Easy", "Yusef And Zainab", ["Yusef Death", "Boxing Day Fire"]],
    ["Which Masood son suffered severe burns when he entered the blazing building?", "Tamwar", ["Syed", "Kamil", "Ali"], "Easy", "Yusef And Zainab", ["Tamwar Burns", "Skin Grafts"]],

    // TANYA'S ILLNESS AND THE BRANNING AFFAIRS (10)
    ["Which builder did Tanya Branning marry in the spring?", "Greg Jessop", ["Jack Branning", "Max Branning", "Ryan Malloy"], "Easy", "Tanya And Brannings", ["Tanya Greg Wedding", "April Marriage"]],
    ["Which actor played Tanya's husband Greg Jessop?", "Stefan Booth", ["Jake Wood", "Scott Maslen", "Jamie Foreman"], "Medium", "Tanya And Brannings", ["Stefan Booth", "Greg Casting"]],
    ["With which ex-husband did Tanya have an affair during her marriage to Greg?", "Max Branning", ["Jack Branning", "Derek Branning", "Ian Beale"], "Easy", "Tanya And Brannings", ["Max Tanya Affair", "Secret Bedsit"]],
    ["Which woman was Max dating when he resumed his affair with Tanya?", "Vanessa Gold", ["Mandy Salter", "Shirley Carter", "Denise Fox"], "Easy", "Tanya And Brannings", ["Vanessa Betrayed", "Max Relationship"]],
    ["What type of cancer was Tanya diagnosed with?", "Cervical cancer", ["Breast cancer", "Ovarian cancer", "Pancreatic cancer"], "Easy", "Tanya And Brannings", ["Cervical Cancer Diagnosis", "Autumn 2011"]],
    ["Which teenage daughter struggled after learning about Tanya's illness?", "Lauren Branning", ["Abi Branning", "Lucy Beale", "Whitney Dean"], "Easy", "Tanya And Brannings", ["Lauren Worries For Tanya", "Mother Daughter Story"]],
    ["What was the name of Tanya's mother who became a regular Walford resident?", "Cora Cross", ["Mo Harris", "Glenda Mitchell", "Pat Evans"], "Easy", "Tanya And Brannings", ["Cora Cross Arrival", "Tanya Mother"]],
    ["Which actress played Tanya's outspoken mother Cora?", "Ann Mitchell", ["Annette Badland", "Pam St Clement", "Gillian Wright"], "Medium", "Tanya And Brannings", ["Ann Mitchell", "Cora Casting"]],
    ["Who interrupted Darren and Jodie's wedding plans after sleeping with Darren?", "Lauren Branning", ["Whitney Dean", "Lucy Beale", "Abi Branning"], "Medium", "Tanya And Brannings", ["Lauren Darren Encounter", "Wedding Fallout"]],
    ["Which Branning returned to Walford in the autumn as Tanya faced cancer treatment?", "Max Branning", ["Bradley Branning", "Jim Branning", "Jack Branning"], "Easy", "Tanya And Brannings", ["Max Returns", "Tanya Treatment Support"]],

    // WHITNEY AND ROB GRAYSON (10)
    ["Which man lured Whitney Dean away from her family and sexually exploited her?", "Rob Grayson", ["Tony King", "Connor Stanley", "Tyler Moon"], "Easy", "Whitney And Rob", ["Rob Exploits Whitney", "Grooming"]],
    ["Which actor portrayed the manipulative Rob Grayson?", "Jody Latham", ["Chris Coghill", "Tony Discipline", "Neil McDermott"], "Medium", "Whitney And Rob", ["Jody Latham", "Rob Actor"]],
    ["Which charity telethon featured the special episode showing Whitney's escape?", "Comic Relief", ["Children in Need", "Sport Relief", "Red Nose Day USA"], "Easy", "Whitney And Rob", ["Comic Relief Special", "March 2011"]],
    ["How did Whitney escape from the room in which Rob held her?", "She smashed a window and climbed out", ["She escaped through a secret tunnel", "She hid in a wardrobe", "She climbed down a chimney"], "Medium", "Whitney And Rob", ["Whitney Breaks Window", "Escape Scene"]],
    ["Which friend tracked Whitney down when she went missing?", "Lauren Branning", ["Abi Branning", "Lucy Beale", "Mercy Olubunmi"], "Easy", "Whitney And Rob", ["Lauren Searches For Whitney", "Friendship"]],
    ["Which woman joined Lauren in trying to help Whitney escape Rob?", "Janine Butcher", ["Peggy Mitchell", "Zainab Masood", "Tanya Branning"], "Medium", "Whitney And Rob", ["Janine Helps Search", "Comic Relief Drama"]],
    ["Which Kent town did Lauren visit when she tracked Whitney down at Rob's flat?", "Dartford", ["Brighton", "Leeds", "Oxford"], "Medium", "Whitney And Rob", ["Whitney Dartford", "Rob Flat Location"]],
    ["Which family member of Whitney was jailed after attacking Connor Stanley?", "Bianca Jackson", ["Carol Jackson", "Ricky Butcher", "Pat Evans"], "Easy", "Whitney And Rob", ["Bianca Prison Sentence", "Connor Attack"]],
    ["Which older Jackson woman was secretly involved with Whitney's boyfriend Connor?", "Carol Jackson", ["Bianca Jackson", "Pat Evans", "Sonia Fowler"], "Easy", "Whitney And Rob", ["Carol Connor Affair", "Whitney Betrayal"]],
    ["Which Moon brother began a romance with Whitney later in the year?", "Tyler Moon", ["Michael Moon", "Anthony Moon", "Alfie Moon"], "Easy", "Whitney And Rob", ["Whitney Tyler Romance", "Later 2011"]],

    // BILLY'S GRANDDAUGHTER AND BEN'S TROUBLES (10)
    ["Which teenage girl arrived as Billy Mitchell's previously unknown granddaughter?", "Lola Pearce", ["Amy Mitchell", "Lucy Beale", "Whitney Dean"], "Easy", "Billy Lola And Ben", ["Lola 2011 Debut", "Billy Granddaughter"]],
    ["Which actress first played Lola Pearce?", "Danielle Harold", ["Maisie Smith", "Shona McGarty", "Jacqueline Jossa"], "Medium", "Billy Lola And Ben", ["Danielle Harold", "Lola Casting"]],
    ["Which woman from Billy's past was Lola's grandmother?", "Julie Perkins", ["Honey Mitchell", "Peggy Mitchell", "Glenda Mitchell"], "Easy", "Billy Lola And Ben", ["Julie Perkins", "Lola Grandmother"]],
    ["What was the name of Billy and Julie's son, who was Lola's father?", "Dan Pearce", ["Jay Brown", "Will Mitchell", "Ben Mitchell"], "Medium", "Billy Lola And Ben", ["Dan Pearce", "Family Discovery"]],
    ["Where had Lola been living before coming to Albert Square?", "In care", ["In a boarding school", "At university", "In a police station"], "Easy", "Billy Lola And Ben", ["Lola In Care", "New Home"]],
    ["Which garage did Lola vandalise in an incident that injured Jay Brown?", "The Arches", ["The Queen Vic", "The café", "Booty"], "Medium", "Billy Lola And Ben", ["Lola Garage Damage", "Jay Injury"]],
    ["Which boy was injured by falling equipment after Lola's outburst in the garage?", "Jay Brown", ["Ben Mitchell", "Peter Beale", "Tyler Moon"], "Easy", "Billy Lola And Ben", ["Jay Hurt At Arches", "Lola Recklessness"]],
    ["Which former partner of Billy left Walford amid tensions with Lola?", "Julie Perkins", ["Honey Mitchell", "Little Mo Mitchell", "Tina Stewart"], "Easy", "Billy Lola And Ben", ["Julie Departure", "Billy Lola Loyalty"]],
    ["Which teenager falsely accused Christian Clarke of sexually assaulting him?", "Ben Mitchell", ["Jay Brown", "Peter Beale", "Liam Butcher"], "Easy", "Billy Lola And Ben", ["Ben False Allegation", "Christian Clarke"]],
    ["Which character played by Joshua Pascoe was struggling with his sexuality?", "Ben Mitchell", ["Jay Brown", "Fatboy Chubb", "Tyler Moon"], "Medium", "Billy Lola And Ben", ["Joshua Pascoe", "Ben Sexuality Story"]],

    // EDDIE MOON AND HIS SONS (10)
    ["Which singer joined EastEnders as the charming Eddie Moon?", "David Essex", ["David Bowie", "David Cassidy", "David Soul"], "Easy", "Moon Family Arrivals", ["David Essex Casting", "Eddie Moon Debut"]],
    ["Which established Moon character was Eddie's eldest son?", "Michael Moon", ["Alfie Moon", "Spencer Moon", "Jake Moon"], "Easy", "Moon Family Arrivals", ["Michael Eddie Father Son", "Family Conflict"]],
    ["Which two younger Moon brothers joined their father in Walford?", "Tyler and Anthony", ["Jake and Danny", "Alfie and Spencer", "Michael and Spencer"], "Easy", "Moon Family Arrivals", ["Tyler Anthony Arrive", "Half Brothers"]],
    ["Which actor played Tyler Moon?", "Tony Discipline", ["Matt Lapinskas", "Steve John Shepherd", "Shane Richie"], "Medium", "Moon Family Arrivals", ["Tony Discipline", "Tyler Casting"]],
    ["Which actor played Anthony Moon?", "Matt Lapinskas", ["Tony Discipline", "David Essex", "Neil McDermott"], "Medium", "Moon Family Arrivals", ["Matt Lapinskas", "Anthony Casting"]],
    ["What was the name of Eddie Moon's second-hand goods business?", "Moon & Sons", ["Masala Queen", "Butcher's Joints", "Fit for a Queen"], "Medium", "Moon Family Arrivals", ["Moon And Sons", "Eddie Antiques Business"]],
    ["Which Moon son tried to manipulate the others into turning against Eddie?", "Michael Moon", ["Anthony Moon", "Tyler Moon", "Alfie Moon"], "Easy", "Moon Family Arrivals", ["Michael Revenge Against Eddie", "Family Manipulation"]],
    ["What had happened to Michael Moon's mother during his childhood?", "She died by suicide", ["She had left for Australia", "She died in a car crash", "She disappeared at sea"], "Medium", "Moon Family Arrivals", ["Michael Mother Death", "Family Backstory"]],
    ["What sport brought Tyler Moon into conflict with his family over his safety?", "Boxing", ["Motor racing", "Rugby", "Cricket"], "Easy", "Moon Family Arrivals", ["Tyler Boxing", "Fight Risk"]],
    ["Which wealthy Walford woman began a romance with Michael Moon?", "Janine Butcher", ["Roxy Mitchell", "Tanya Branning", "Jane Beale"], "Easy", "Moon Family Arrivals", ["Michael Janine Couple", "Late 2011 Romance"]],

    // SYED, AMIRA, TAMWAR AND AFIA (10)
    ["Which Masood son secretly married Afia Khan before their public wedding celebration?", "Tamwar Masood", ["Syed Masood", "Kamil Masood", "Masood Ahmed"], "Easy", "Syed Amira And Afia", ["Tamwar Afia Secret Marriage", "April 2011"]],
    ["At what wedding celebration did Tamwar reveal that he and Afia were already married?", "Their mehndi", ["Their christening", "A civil partnership party", "A retirement dinner"], "Medium", "Syed Amira And Afia", ["Mehndi Revelation", "June 2011"]],
    ["Who was initially barred from Tamwar and Afia's wedding celebrations?", "Masood Ahmed", ["Qadim Shah", "Lucas Johnson", "Phil Mitchell"], "Medium", "Syed Amira And Afia", ["Masood Barred From Ceremony", "Wedding Family Tension"]],
    ["Which returning wife revealed that Syed had a young daughter?", "Amira Shah", ["Shabnam Masood", "Afia Khan", "Denise Fox"], "Easy", "Syed Amira And Afia", ["Amira October Return", "Syed Father Revelation"]],
    ["What name did Amira give her daughter with Syed?", "Yasmin", ["Afia", "Shabnam", "Ayesha"], "Easy", "Syed Amira And Afia", ["Yasmin Masood", "Syed Daughter"]],
    ["Which man did Syed become engaged to while Amira was away?", "Christian Clarke", ["Ryan Malloy", "Jack Branning", "Anthony Moon"], "Easy", "Syed Amira And Afia", ["Syed Christian Engagement", "Civil Partnership Plans"]],
    ["What family-related plan did Syed and Christian explore before Amira returned?", "Adopting a child", ["Opening a children's home", "Fostering Ben Mitchell", "Moving to New Zealand"], "Medium", "Syed Amira And Afia", ["Syed Christian Adoption Plan", "Future Family"]],
    ["Who falsified a paternity test to cast doubt on Syed being Yasmin's father?", "Yusef Khan", ["Qadim Shah", "Masood Ahmed", "Tamwar Masood"], "Medium", "Syed Amira And Afia", ["Yusef Switches DNA Samples", "False Paternity Result"]],
    ["Which relative was initially determined to keep Christian away from baby Yasmin?", "Amira Shah", ["Afia Khan", "Zainab Masood", "Shabnam Masood"], "Easy", "Syed Amira And Afia", ["Amira Christian Rivalry", "Yasmin Access Dispute"]],
    ["Which of Amira's family members opposed Syed's relationship with Christian?", "Qadim Shah", ["Patrick Trueman", "Eddie Moon", "Greg Jessop"], "Medium", "Syed Amira And Afia", ["Qadim Disapproval", "Amira Father"]],

    // JANINE'S INHERITANCE, PAT'S ILLNESS AND MANDY'S RETURN (10)
    ["Which wealthy grandmother left Janine Butcher a large inheritance?", "Lydia Simmonds", ["Mo Harris", "Cora Cross", "Grace Olubunmi"], "Easy", "Janine Pat And Mandy", ["Lydia Simmonds", "Janine Fortune"]],
    ["Whom did Pat suspect of being responsible for Lydia Simmonds's death?", "Janine Butcher", ["Ricky Butcher", "Bianca Jackson", "Michael Moon"], "Medium", "Janine Pat And Mandy", ["Lydia Death Suspicion", "Janine Questioned"]],
    ["What became Janine's financial position after Lydia's will was settled?", "She became a millionaire", ["She was declared bankrupt", "She lost her market stall", "She inherited the Queen Vic only"], "Easy", "Janine Pat And Mandy", ["Janine Inherits Millions", "2011 Fortune"]],
    ["Which actress portrayed Janine's grandmother Lydia Simmonds?", "Margaret Tyzack", ["Pam St Clement", "Ann Mitchell", "Barbara Windsor"], "Medium", "Janine Pat And Mandy", ["Margaret Tyzack", "Lydia Casting"]],
    ["Which former Walford troublemaker returned after seventeen years away?", "Mandy Salter", ["Michelle Fowler", "Mel Owen", "Sharon Watts"], "Easy", "Janine Pat And Mandy", ["Mandy Salter Return", "August 2011"]],
    ["Which actress reprised her role as Mandy Salter?", "Nicola Stapleton", ["Danniella Westbrook", "Tamzin Outhwaite", "Natalie Cassidy"], "Medium", "Janine Pat And Mandy", ["Nicola Stapleton", "Mandy Recast Not"]],
    ["Which Walford businessman found Mandy working in a lap-dancing club?", "Ian Beale", ["Phil Mitchell", "Jack Branning", "Max Branning"], "Medium", "Janine Pat And Mandy", ["Ian Finds Mandy", "Club Encounter"]],
    ["Which long-serving Walford resident was diagnosed with pancreatic cancer in December?", "Pat Evans", ["Dot Branning", "Cora Cross", "Peggy Mitchell"], "Easy", "Janine Pat And Mandy", ["Pat Pancreatic Cancer", "December Diagnosis"]],
    ["Which actress had played Pat Evans since 1986 and was preparing to leave the soap?", "Pam St Clement", ["June Brown", "Lindsey Coulson", "Diane Parish"], "Easy", "Janine Pat And Mandy", ["Pam St Clement", "Pat Long Serving Performer"]],
    ["What treatment did Pat decline when doctors said her cancer had spread too far for a cure?", "Chemotherapy", ["A dental operation", "A heart transplant", "Dialysis"], "Medium", "Janine Pat And Mandy", ["Pat Declines Palliative Chemotherapy", "December Cancer Diagnosis"]],

    // PHIL'S STALKER, AMY'S CUSTODY AND BLACKMAIL (10)
    ["Who was secretly sending Phil Mitchell threatening anonymous letters?", "Ben Mitchell", ["Jack Branning", "Ian Beale", "Derek Branning"], "Easy", "Phil Stalker And Custody", ["Ben Phil Stalker", "Black Envelope Campaign"]],
    ["What colour were the envelopes used by Phil's mystery tormentor?", "Black", ["Red", "Blue", "Green"], "Medium", "Phil Stalker And Custody", ["Black Envelopes", "Anonymous Messages"]],
    ["Which of Shirley's friends was wrongly suspected of being Phil's stalker?", "Heather Trott", ["Roxy Mitchell", "Jane Beale", "Tanya Branning"], "Easy", "Phil Stalker And Custody", ["Heather False Accusation", "Envelopes In Bag"]],
    ["Who finally realised that Ben was behind the messages to his father?", "Shirley Carter", ["Peggy Mitchell", "Kat Moon", "Vanessa Gold"], "Easy", "Phil Stalker And Custody", ["Shirley Finds Ben Out", "Christmas Revelation"]],
    ["Which old car-related scandal was exposed in a Christmas message sent to Denise?", "Kevin Wicks's fatal crash", ["Jase Dyer's stabbing", "Bradley Branning's fall", "Danielle Jones's accident"], "Medium", "Phil Stalker And Custody", ["Kevin Cut And Shut Evidence", "Phil Past Crime"]],
    ["What device accompanied the model car in the incriminating Christmas parcel?", "A USB memory stick", ["A cassette tape", "A camera film", "A DVD player"], "Medium", "Phil Stalker And Custody", ["Denise Christmas Parcel", "USB Recording"]],
    ["Which Branning brother fought Roxy Mitchell for custody of their daughter Amy?", "Jack Branning", ["Max Branning", "Derek Branning", "Jim Branning"], "Easy", "Phil Stalker And Custody", ["Jack Roxy Custody Dispute", "Amy Mitchell"]],
    ["What was the name of the daughter at the centre of Roxy and Jack's custody battle?", "Amy", ["Janet", "Lily", "Yasmin"], "Easy", "Phil Stalker And Custody", ["Amy Custody Case", "Roxy Daughter"]],
    ["Who won custody of Amy at the end of the court battle in November?", "Jack Branning", ["Roxy Mitchell", "Phil Mitchell", "Glenda Mitchell"], "Medium", "Phil Stalker And Custody", ["Jack Awarded Custody", "November Court Decision"]],
    ["What did Denise Fox smash after watching evidence about Phil's role in Kevin's fatal crash?", "The windscreen of Phil's car", ["The windows of the Queen Vic", "A computer at the café", "A television in the launderette"], "Easy", "Phil Stalker And Custody", ["Denise Smashes Phil Windscreen", "Christmas Revelation"]],

    // WALFORD'S OTHER ARRIVALS AND DEPARTURES (10)
    ["Which Walford resident nicknamed Fatboy married Mercy Olubunmi?", "Arthur Chubb", ["Ryan Malloy", "Leon Small", "Tyler Moon"], "Easy", "Walford New Faces", ["Fatboy Mercy Wedding", "Arthur Chubb"]],
    ["Why did Fatboy and Mercy agree to marry?", "To prevent Mercy's deportation", ["To inherit a pub", "To get a television contract", "To win a competition"], "Easy", "Walford New Faces", ["Marriage For Immigration", "Mercy Visa"]],
    ["To which country was Mercy threatened with deportation?", "Nigeria", ["Ghana", "Jamaica", "Kenya"], "Easy", "Walford New Faces", ["Mercy Nigeria", "Immigration Story"]],
    ["Which actress played Mercy Olubunmi?", "Bunmi Mojekwu", ["Modupe Adeyeye", "Nina Wadia", "Tameka Empson"], "Medium", "Walford New Faces", ["Bunmi Mojekwu", "Mercy Casting"]],
    ["Which younger sister of Mercy visited the Square later in the year?", "Faith Olubunmi", ["Grace Olubunmi", "Libby Fox", "Shabnam Masood"], "Medium", "Walford New Faces", ["Faith Olubunmi", "September Arrival"]],
    ["Which elder Branning brother returned to Walford in November?", "Derek Branning", ["Bradley Branning", "Jim Branning", "Jack Branning"], "Easy", "Walford New Faces", ["Derek Returns", "Branning Family"]],
    ["Which actor took over the part of Derek Branning on his return?", "Jamie Foreman", ["Terence Beesley", "Jake Wood", "Scott Maslen"], "Medium", "Walford New Faces", ["Jamie Foreman", "Derek Recast"]],
    ["Which two Branning men were Derek's younger brothers?", "Max and Jack", ["Bradley and Jim", "Oscar and Bradley", "Phil and Grant"], "Easy", "Walford New Faces", ["Derek Brother Relationships", "Branning Siblings"]],
    ["Which elderly Branning resident moved permanently into residential care?", "Jim Branning", ["Max Branning", "Derek Branning", "Patrick Trueman"], "Easy", "Walford New Faces", ["Jim Care Home", "2011 Departure"]],
    ["Which Walford woman struggled with Jim Branning's move into care?", "Dot Branning", ["Peggy Mitchell", "Pat Evans", "Zainab Masood"], "Easy", "Walford New Faces", ["Dot Jim Separation", "Care Home Storyline"]]
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic, detailTags], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: "tv_" + String(8784 + index).padStart(4, "0"),
        category: "Television",
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set([
            "British Television", "Soaps", "EastEnders", "2011",
            topic, ...topicTags[topic], correctAnswer, ...detailTags
        ])],
        dailyEligible: true
    };
});

module.exports = questions;
