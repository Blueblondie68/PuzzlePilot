// quiz_pack231.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 1993, new families and hard truths
// 100 questions: tv_6904 to tv_7003
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [
    // NICK COTTON AND DOT (8)
    ["Which Walford villain stood trial for the murder of Eddie Royle?", "Nick Cotton", ["Grant Mitchell", "Clyde Tavernier", "Richard Cole"], "Easy", "Nick and Dot"],
    ["What verdict did the jury return at Nick Cotton's murder trial?", "Not guilty", ["Guilty of murder", "Guilty of manslaughter", "No verdict after a hung jury"], "Easy", "Nick and Dot"],
    ["Which former Walford chef testified about seeing Nick outside on the night of Eddie's death?", "Joe Wallace", ["Steve Elliot", "Ian Beale", "Aidan Brosnan"], "Medium", "Nick and Dot"],
    ["What did Nick claim about Eddie Royle's stabbing when giving evidence in court?", "It was an accident", ["Eddie had stabbed himself", "Clyde had paid him to do it", "He was nowhere near the Square"], "Medium", "Nick and Dot"],
    ["Which relative of Nick Cotton gave evidence during his murder trial?", "Dot Cotton", ["Ashley Cotton", "Charlie Cotton", "Joan Cotton"], "Medium", "Nick and Dot"],
    ["What was the name of Nick Cotton's partner who arrived with their child?", "Zoe Newton", ["Debbie Tyler", "Rose Chapman", "Gita Kapoor"], "Medium", "Nick and Dot"],
    ["Which previously unknown grandson did Dot Cotton meet?", "Ashley Cotton", ["Robbie Jackson", "Kofi Tavernier", "Steven Beale"], "Easy", "Nick and Dot"],
    ["To which Kent town did Dot move with Nick, Zoe and Ashley?", "Gravesend", ["Maidstone", "Dartford", "Canterbury"], "Medium", "Nick and Dot"],

    // VICKI, SAM AND DANNY (8)
    ["Which troubled woman abducted young Vicki Fowler outside school?", "Audrey Whittingham", ["Rose Chapman", "Christine Hewitt", "Lorraine Salter"], "Medium", "Vicki, Sam and Danny"],
    ["Which relative was Vicki Fowler's mother during the kidnapping ordeal?", "Michelle Fowler", ["Pauline Fowler", "Sharon Mitchell", "Kathy Beale"], "Easy", "Vicki, Sam and Danny"],
    ["Which student was initially suspected of kidnapping Vicki because of his fixation on Michelle?", "Jack Woodman", ["Danny Taurus", "Steve Elliot", "Sanjay Kapoor"], "Medium", "Vicki, Sam and Danny"],
    ["What purchase helped police trace the woman who had abducted Vicki?", "Toys bought with a cheque", ["A train ticket paid by card", "Clothes bought with cash", "A taxi booked by telephone"], "Medium", "Vicki, Sam and Danny"],
    ["Which Butcher daughter left her husband Ricky and departed Walford?", "Sam Butcher", ["Diane Butcher", "Janine Butcher", "Clare Butcher"], "Easy", "Vicki, Sam and Danny"],
    ["What sort of job did Sam Butcher take after leaving Ricky?", "Work on a cruise ship", ["Teaching at a primary school", "Driving a minicab", "Serving in the army"], "Medium", "Vicki, Sam and Danny"],
    ["Which veteran singer revisited Pete and Pauline under the stage name Danny Taurus?", "Danny Travis", ["Alfie Chapman", "Greg Hewitt", "Jerry McKenzie"], "Medium", "Vicki, Sam and Danny"],
    ["Which married Fowler did singer Danny Taurus invite to go away with him?", "Pauline Fowler", ["Michelle Fowler", "Kathy Beale", "Cindy Beale"], "Medium", "Vicki, Sam and Danny"],

    // SANJAY AND GITA KAPOOR (12)
    ["Which lively new market trader arrived with a weakness for gambling?", "Sanjay Kapoor", ["Richard Cole", "Danny Taurus", "Liam Tyler"], "Easy", "The Kapoors"],
    ["What was the first name of Sanjay Kapoor's wife?", "Gita", ["Meena", "Sufia", "Naima"], "Easy", "The Kapoors"],
    ["What merchandise did the Kapoors sell on their market stall?", "Clothing", ["Flowers", "Electrical goods", "Fruit and vegetables"], "Easy", "The Kapoors"],
    ["Which market inspector gave Sanjay a pitch that had belonged to Rachel Kominski?", "Richard Cole", ["Pete Beale", "Frank Butcher", "Arthur Fowler"], "Medium", "The Kapoors"],
    ["What activity caused Sanjay to lose the money saved for a flat deposit?", "Poker", ["Horse racing", "Bingo", "Fruit machines"], "Medium", "The Kapoors"],
    ["Whose home did Sanjay and Gita lodge in while looking for their own flat?", "Richard Cole's", ["Dot Cotton's", "Nigel Bates'", "Pat Butcher's"], "Medium", "The Kapoors"],
    ["What did Sanjay and Gita name their baby daughter?", "Sharmilla", ["Meena", "Hattie", "Sonia"], "Easy", "The Kapoors"],
    ["Which faith was practised by the Kapoor family?", "Hinduism", ["Sikhism", "Christianity", "Islam"], "Medium", "The Kapoors"],
    ["Who was Gita Kapoor's sister who came to visit the family?", "Meena McKenzie", ["Sylvia Weng-Chung", "Debbie Tyler", "Rose Chapman"], "Medium", "The Kapoors"],
    ["What mental health difficulty did Gita experience after Sharmilla's birth?", "Postnatal depression", ["Agoraphobia", "Amnesia", "A gambling addiction"], "Medium", "The Kapoors"],
    ["Which woman did Gita wrongly suspect of having an affair with Sanjay?", "Michelle Fowler", ["Sharon Mitchell", "Pat Butcher", "Kathy Beale"], "Medium", "The Kapoors"],
    ["What did Gita do near the end of the year when she needed a break?", "Stayed with relatives, leaving Sharmilla with Sanjay", ["Joined a touring theatre", "Moved permanently to France", "Left her daughter with Dot and emigrated"], "Medium", "The Kapoors"],

    // PAULINE, ARTHUR AND CHRISTINE (11)
    ["Whose affair with Christine Hewitt threatened to break up the Fowler marriage?", "Arthur Fowler", ["Pete Beale", "Ian Beale", "Mark Fowler"], "Easy", "The Fowler Marriage"],
    ["What job did Christine Hewitt take at Kathy's new evening bistro?", "Cook", ["Bookkeeper", "Waitress", "Cleaner"], "Medium", "The Fowler Marriage"],
    ["What crime did Christine pretend had happened to lure Arthur to her home?", "A burglary", ["A car theft", "A mugging", "A break-in at the Queen Vic"], "Medium", "The Fowler Marriage"],
    ["Who finally confessed his own affair to Pauline Fowler?", "Arthur Fowler", ["Christine Hewitt", "Dot Cotton", "Pete Beale"], "Easy", "The Fowler Marriage"],
    ["What kitchen object did Pauline famously hit Arthur with after his confession?", "A frying pan", ["A rolling pin", "A kettle", "A chopping board"], "Easy", "The Fowler Marriage"],
    ["What did Pauline do to Arthur after discovering his infidelity?", "Threw him out of their home", ["Booked them a holiday", "Took over his allotment", "Sold their house to Ian"], "Easy", "The Fowler Marriage"],
    ["What was the name of Christine Hewitt's estranged husband who confronted Arthur?", "Greg Hewitt", ["Danny Travis", "Alfie Chapman", "Jerry McKenzie"], "Medium", "The Fowler Marriage"],
    ["Who did Christine demand Arthur choose between?", "Christine and Pauline", ["Christine and Rachel", "Pauline and Kathy", "Michelle and Sharon"], "Medium", "The Fowler Marriage"],
    ["Which member of Arthur's family was given inappropriate presents by an increasingly insistent Christine?", "Martin Fowler", ["Vicki Fowler", "Steven Beale", "Kofi Tavernier"], "Medium", "The Fowler Marriage"],
    ["Which couple finally reconciled following the discovery of Arthur's affair?", "Arthur and Pauline Fowler", ["Ricky and Sam Butcher", "Pete and Kathy Beale", "Grant and Sharon Mitchell"], "Easy", "The Fowler Marriage"],
    ["Which tragedy helped bring Arthur and Pauline back together at the end of the year?", "Pete Beale's death", ["Eddie Royle's murder", "Mo Butcher's death", "Gill Fowler's death"], "Medium", "The Fowler Marriage"],

    // PETE AND ROSE (11)
    ["Which old school acquaintance became Pete Beale's new love interest?", "Rose Chapman", ["Gita Kapoor", "Debbie Tyler", "Nadia Borovac"], "Easy", "Pete and Rose"],
    ["Whose school friend had Rose Chapman originally been?", "Pauline Fowler's", ["Michelle Fowler's", "Sharon Mitchell's", "Cindy Beale's"], "Medium", "Pete and Rose"],
    ["What secret did Rose Chapman eventually admit about her marriage?", "She was still married", ["She had never been married", "Her husband was a police officer", "She had married Pete before"], "Medium", "Pete and Rose"],
    ["What was the name of Rose Chapman's imprisoned husband?", "Alfie Chapman", ["Liam Tyler", "Greg Hewitt", "Jack Woodman"], "Medium", "Pete and Rose"],
    ["Why did Pete and Rose fear the Chapman family?", "They were violent gangsters", ["They ran the local council", "They were undercover police", "They owned Pete's market stall"], "Medium", "Pete and Rose"],
    ["Which relative of Alfie Chapman warned Rose to stay away from Pete?", "His sister Annie", ["His mother Ethel", "His daughter Carol", "His aunt Pauline"], "Medium", "Pete and Rose"],
    ["What serious illness was Alfie Chapman suffering from in prison?", "Terminal cancer", ["Kidney failure", "Multiple sclerosis", "Tuberculosis"], "Medium", "Pete and Rose"],
    ["What happened to Rose after Alfie's brothers learned she was still seeing Pete?", "They beat her and she was hospitalised", ["They gave her money to leave", "They bought her a café", "They had her arrested"], "Medium", "Pete and Rose"],
    ["Which Walford businessman helped Pete take Rose away from hospital?", "Frank Butcher", ["Richard Cole", "Phil Mitchell", "Sanjay Kapoor"], "Medium", "Pete and Rose"],
    ["How did Pete Beale and Rose Chapman die after planning to return to Walford?", "In a staged car crash", ["In a house fire", "In a boating accident", "In a train derailment"], "Easy", "Pete and Rose"],
    ["What did Pauline place in the press to encourage her missing brother Pete to return?", "A newspaper advert", ["A personal letter from Ian", "An official missing-person notice", "A photograph of his old market stall"], "Medium", "Pete and Rose"],

    // AIDAN AND MANDY (11)
    ["Which Irish teenager arrived hoping to make a career in football?", "Aidan Brosnan", ["Jack Woodman", "Robbie Jackson", "Steve Elliot"], "Easy", "Aidan and Mandy"],
    ["Which actor played Aidan Brosnan?", "Sean Maguire", ["Paul Bradley", "Mark Monero", "Sid Owen"], "Easy", "Aidan and Mandy"],
    ["Which fictional football club had taken on Aidan as an apprentice?", "Walford Town", ["West Ham United", "Millwall", "Leyton Orient"], "Medium", "Aidan and Mandy"],
    ["What physical setback ended Aidan's hopes of a football career?", "A knee injury", ["A broken wrist", "A shoulder dislocation", "A head injury"], "Medium", "Aidan and Mandy"],
    ["Which family initially took Aidan in as a lodger?", "The Fowlers", ["The Butchers", "The Mitchells", "The Kapoors"], "Medium", "Aidan and Mandy"],
    ["Which troubled teenager became Aidan Brosnan's girlfriend?", "Mandy Salter", ["Bianca Jackson", "Hattie Tavernier", "Sam Butcher"], "Easy", "Aidan and Mandy"],
    ["What illegal substance put Aidan in hospital after he took a bad tablet?", "Ecstasy", ["Cannabis", "Heroin", "Cocaine"], "Medium", "Aidan and Mandy"],
    ["How did Aidan and Mandy survive after they became homeless?", "They slept rough and squatted", ["They lived in a hotel", "They moved into a university hall", "They bought a houseboat"], "Easy", "Aidan and Mandy"],
    ["Who stirred up hostility by accusing Aidan and Mandy of local thefts?", "Richard Cole", ["Nigel Bates", "Clyde Tavernier", "Arthur Fowler"], "Medium", "Aidan and Mandy"],
    ["Who stopped Aidan from jumping from a tower block at Christmas?", "Mandy Salter", ["Michelle Fowler", "Kathy Beale", "Dot Cotton"], "Easy", "Aidan and Mandy"],
    ["Which country did Aidan return to after leaving Mandy at the end of the year?", "Ireland", ["Scotland", "France", "Australia"], "Medium", "Aidan and Mandy"],

    // PHIL, KATHY AND NADIA (10)
    ["Which woman became Phil Mitchell's first wife in a marriage of convenience?", "Nadia Borovac", ["Kathy Beale", "Sharon Mitchell", "Anne Howes"], "Easy", "Phil and Nadia"],
    ["What was Nadia's maiden surname before marrying Phil Mitchell?", "Borovac", ["Hanley", "Kominski", "Tyler"], "Medium", "Phil and Nadia"],
    ["From which European country had Nadia come to Britain?", "Romania", ["Poland", "Hungary", "Bulgaria"], "Medium", "Phil and Nadia"],
    ["Why did Phil agree to marry Nadia?", "To help her avoid deportation", ["To inherit a family business", "To win a bet with Grant", "To gain custody of a child"], "Easy", "Phil and Nadia"],
    ["In which port city did Phil meet Nadia while waiting for Hattie?", "Southampton", ["Portsmouth", "Dover", "Bristol"], "Medium", "Phil and Nadia"],
    ["What was the name of Nadia's boyfriend, whom she planned to rejoin?", "Marku", ["Kevin", "Aidan", "Greg"], "Medium", "Phil and Nadia"],
    ["Which long-standing Walford resident started dating Phil while Nadia was away?", "Kathy Beale", ["Pat Butcher", "Pauline Fowler", "Rachel Kominski"], "Easy", "Phil and Nadia"],
    ["Which government department investigated whether Phil and Nadia's marriage was genuine?", "The Home Office", ["The Department of Transport", "The Treasury", "The Foreign Office"], "Medium", "Phil and Nadia"],
    ["What did Nadia insist on doing when she returned and needed Phil to act like a husband?", "Moving into his home", ["Managing the Queen Victoria", "Working at the launderette", "Buying the market stall"], "Medium", "Phil and Nadia"],
    ["What revelation did Nadia make to Kathy after Christmas?", "She had slept with Phil", ["She owned the Queen Victoria", "She was Grant's daughter", "She was leaving for Australia"], "Medium", "Phil and Nadia"],

    // HATTIE AND THE TAVERNIERS (9)
    ["Which young cook became engaged to Hattie Tavernier but then ran away from the wedding?", "Steve Elliot", ["Aidan Brosnan", "Sanjay Kapoor", "Joe Wallace"], "Easy", "Hattie and the Taverniers"],
    ["What work lured Steve Elliot away from Hattie Tavernier?", "A chef's job on a cruise ship", ["A driving job in a taxi firm", "A role in a touring band", "An apprenticeship at the Arches"], "Medium", "Hattie and the Taverniers"],
    ["To which coastal city did Hattie pursue Steve before he sailed away?", "Southampton", ["Brighton", "Portsmouth", "Plymouth"], "Medium", "Hattie and the Taverniers"],
    ["What secret did Hattie hesitate to tell Steve before he left?", "She was pregnant", ["She had won the lottery", "She was already married", "She was moving to New Zealand"], "Medium", "Hattie and the Taverniers"],
    ["What tragedy ended Hattie's pregnancy after she decided to keep the baby?", "A miscarriage", ["A car accident", "An adoption order", "A premature birth"], "Medium", "Hattie and the Taverniers"],
    ["Which previously unknown relative visited Jules Tavernier from Trinidad?", "Gidea Thompson", ["Meena McKenzie", "Zoe Newton", "Rose Chapman"], "Medium", "Hattie and the Taverniers"],
    ["Who was the grandfather Gidea Thompson came to meet?", "Jules Tavernier", ["Celestine Tavernier", "Pete Beale", "Arthur Fowler"], "Medium", "Hattie and the Taverniers"],
    ["Which Tavernier man began a romance with his distant cousin Gidea?", "Clyde Tavernier", ["Lloyd Tavernier", "Celestine Tavernier", "Jules Tavernier"], "Medium", "Hattie and the Taverniers"],
    ["Where did Clyde and Gidea start a new life with Clyde's son Kofi?", "Trinidad", ["Jamaica", "New Zealand", "Canada"], "Medium", "Hattie and the Taverniers"],

    // NIGEL, DEBBIE AND CLARE (6)
    ["Which woman became Nigel Bates' girlfriend after meeting him at his birthday party?", "Debbie Tyler", ["Nadia Borovac", "Christine Hewitt", "Meena McKenzie"], "Easy", "Nigel and Debbie"],
    ["Which actress played Nigel's new girlfriend Debbie?", "Nicola Duffett", ["Gemma Bissix", "Jacquetta May", "Petra Markham"], "Medium", "Nigel and Debbie"],
    ["What was the first name of Debbie Tyler's young daughter?", "Clare", ["Sonia", "Janine", "Bianca"], "Easy", "Nigel and Debbie"],
    ["Which actress first played Debbie's daughter Clare?", "Gemma Bissix", ["Natalie Cassidy", "Patsy Palmer", "Sophie Lawrence"], "Medium", "Nigel and Debbie"],
    ["Which abusive former partner followed Debbie and Clare to Walford?", "Liam Tyler", ["Danny Taurus", "Richard Cole", "Jack Woodman"], "Medium", "Nigel and Debbie"],
    ["Which pub barmaid was Debbie's friend when she first visited Walford?", "Tracey", ["Sharon", "Mandy", "Diane"], "Medium", "Nigel and Debbie"],

    // THE JACKSON FAMILY ARRIVE (7)
    ["Which actress originally played Jackson family mother Carol?", "Lindsey Coulson", ["Patsy Palmer", "Nicola Duffett", "Michelle Gayle"], "Easy", "The Jacksons"],
    ["Which man was Carol Jackson's partner when the family first appeared?", "Alan Jackson", ["David Wicks", "Terry Cant", "Gary Bolton"], "Easy", "The Jacksons"],
    ["Which actor portrayed Carol's partner Alan Jackson?", "Howard Antony", ["Deepak Verma", "Steven Woodcock", "Leroy Golding"], "Medium", "The Jacksons"],
    ["Which actress played Carol Jackson's eldest daughter Bianca?", "Patsy Palmer", ["Natalie Cassidy", "Gemma Bissix", "Danniella Westbrook"], "Easy", "The Jacksons"],
    ["Which Jackson son was played by Dean Gaffney?", "Robbie Jackson", ["Billie Jackson", "Lloyd Tavernier", "Kofi Tavernier"], "Easy", "The Jacksons"],
    ["Which of Carol's children was the youngest when the family arrived?", "Billie Jackson", ["Robbie Jackson", "Bianca Jackson", "Sonia Jackson"], "Medium", "The Jacksons"],
    ["Where did the Jackson family live before moving into Albert Square?", "Walford Towers", ["Dickens Hill", "The Arches", "The Queen Victoria"], "Medium", "The Jacksons"],

    // IAN, CINDY AND ROLY (7)
    ["What were the names of Ian and Cindy Beale's twins?", "Peter and Lucy", ["Steven and Lucy", "Peter and Sonia", "Robbie and Bianca"], "Easy", "Ian and Cindy"],
    ["Which parent of Ian Beale died on the very day his twins were born?", "Pete Beale", ["Kathy Beale", "Pauline Fowler", "Lou Beale"], "Easy", "Ian and Cindy"],
    ["After which relative did Ian name his newborn son Peter?", "His father Pete", ["His grandfather Albert", "His uncle Kenny", "His cousin Mark"], "Medium", "Ian and Cindy"],
    ["Which Queen Vic dog died after being hit by a lorry?", "Roly", ["Willy", "Wellard", "Sugar"], "Easy", "Ian and Cindy"],
    ["Who was walking Roly when he ran into the road?", "Mandy Salter", ["Dot Cotton", "Sharon Mitchell", "Cindy Beale"], "Medium", "Ian and Cindy"],
    ["Which young waitress did Kathy hire for her café before having to let her go?", "Sylvia Weng-Chung", ["Meena McKenzie", "Zoe Newton", "Debbie Tyler"], "Medium", "Ian and Cindy"],
    ["Why did Kathy have to let café worker Sylvia go?", "Ian returned to work there, leaving too many staff", ["Sylvia bought a rival café", "Sylvia inherited a house abroad", "Sylvia left to become a nurse"], "Medium", "Ian and Cindy"],
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(6904 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['British Television', 'Soaps', 'EastEnders', '1993', topic],
        dailyEligible: true
    };
});

module.exports = questions;
