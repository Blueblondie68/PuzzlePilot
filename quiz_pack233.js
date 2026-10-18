 // quiz_pack233.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 1995
// 100 questions: tv_7104 to tv_7203
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [
    // TIFFANY ARRIVES (6)
    ["Which future Queen Vic barmaid arrived as an old school friend of Bianca Jackson?", "Tiffany Raymond", ["Natalie Price", "Sarah Hills", "Della Alexander"], "Easy", "Tiffany Raymond"],
    ["Which actress made her EastEnders debut as Tiffany Raymond?", "Martine McCutcheon", ["Lucy Speed", "Patsy Palmer", "Daniela Denby-Ashe"], "Easy", "Tiffany Raymond"],
    ["What was Tiffany's surname when she first arrived in Walford?", "Raymond", ["Mitchell", "Price", "Hills"], "Easy", "Tiffany Raymond"],
    ["Where did Tiffany find work as a barmaid?", "The Queen Victoria", ["The Dagmar", "The Prince Albert", "The Café"], "Easy", "Tiffany Raymond"],
    ["Which Jackson teenager hosted the party during which Tiffany arrived?", "Bianca Jackson", ["Sonia Jackson", "Robbie Jackson", "Billie Jackson"], "Medium", "Tiffany Raymond"],
    ["Which of Bianca's friends felt pushed aside when Tiffany arrived?", "Natalie Price", ["Ruth Aitken", "Binnie Roberts", "Sarah Hills"], "Medium", "Tiffany Raymond"],

    // RICKY, NATALIE AND BIANCA (7)
    ["With whom did Ricky Butcher betray Bianca early in the year?", "Natalie Price", ["Tiffany Raymond", "Sam Mitchell", "Della Alexander"], "Easy", "Ricky and Natalie"],
    ["Which character deliberately arranged for Bianca to catch her kissing Ricky?", "Natalie Price", ["Tiffany Raymond", "Cindy Beale", "Ruth Fowler"], "Medium", "Ricky and Natalie"],
    ["What did an angry Bianca do to Ricky's clothes after discovering his betrayal?", "Cut them up", ["Sold them at the market", "Threw them in the canal", "Dyed them pink"], "Easy", "Ricky and Natalie"],
    ["Which character left Walford after Ricky rejected her following their affair?", "Natalie Price", ["Bianca Jackson", "Tiffany Raymond", "Sam Mitchell"], "Medium", "Ricky and Natalie"],
    ["To which town was Natalie sent to stay with relatives after the trouble with Ricky?", "Basingstoke", ["Brighton", "Southend", "Canterbury"], "Medium", "Ricky and Natalie"],
    ["What was the first name of Natalie Price's mother, who appeared during the fallout?", "Andrea", ["Irene", "Maureen", "Maxine"], "Medium", "Ricky and Natalie"],
    ["Which actress played Natalie's mother Andrea Price?", "Cindy O'Callaghan", ["Elizabeth Kelly", "Roberta Taylor", "Nicola Duffett"], "Medium", "Ricky and Natalie"],

    // BIANCA LEARNS THE TRUTH (7)
    ["Who finally told Bianca that he was her biological father?", "David Wicks", ["Roy Evans", "Alan Jackson", "Frank Butcher"], "Easy", "Bianca's Parentage"],
    ["Which member of the Jackson family had kept Bianca's paternity secret?", "Carol Jackson", ["Blossom Jackson", "Sonia Jackson", "Billie Jackson"], "Easy", "Bianca's Parentage"],
    ["What had Bianca drunkenly tried to do to David shortly before he revealed their true relationship?", "Kiss him", ["Slap him", "Rob him", "Propose to him"], "Medium", "Bianca's Parentage"],
    ["How did Bianca initially react to David after discovering he was her father?", "With anger and resentment", ["By moving in with him immediately", "By proposing a business partnership", "By leaving for Australia"], "Medium", "Bianca's Parentage"],
    ["Who gave Bianca driving lessons as they gradually grew closer?", "David Wicks", ["Phil Mitchell", "Grant Mitchell", "Arthur Fowler"], "Medium", "Bianca's Parentage"],
    ["Which actress played Bianca's mother Carol Jackson?", "Lindsey Coulson", ["Patsy Palmer", "Pam St Clement", "Mona Hammond"], "Easy", "Bianca's Parentage"],
    ["Which nightclub had Bianca visited before David rescued her from an attempted assault?", "The Black Hole", ["Strokes", "The Dagmar", "The Prince Albert"], "Medium", "Bianca's Parentage"],

    // PHIL AND KATHY'S WEDDING (6)
    ["Which Mitchell brother married Kathy Beale?", "Phil Mitchell", ["Grant Mitchell", "Billy Mitchell", "Jamie Mitchell"], "Easy", "Phil and Kathy's Wedding"],
    ["Which Beale family member became Phil Mitchell's stepson after the wedding?", "Ian Beale", ["David Wicks", "Mark Fowler", "Robbie Jackson"], "Easy", "Phil and Kathy's Wedding"],
    ["Which actress played Kathy at her wedding to Phil?", "Gillian Taylforth", ["Wendy Richard", "Letitia Dean", "Pam St Clement"], "Easy", "Phil and Kathy's Wedding"],
    ["Which actor played the groom, Phil Mitchell?", "Steve McFadden", ["Ross Kemp", "Paul Bradley", "Michael French"], "Easy", "Phil and Kathy's Wedding"],
    ["Which woman's affair with Phil had nearly ruined his relationship with Kathy before their wedding?", "Sharon Mitchell", ["Cindy Beale", "Carol Jackson", "Pat Butcher"], "Easy", "Phil and Kathy's Wedding"],
    ["Which Mitchell matriarch became Kathy's mother-in-law when she married Phil?", "Peggy Mitchell", ["Pat Butcher", "Angie Watts", "Ethel Skinner"], "Easy", "Phil and Kathy's Wedding"],

    // MARK AND RUTH MARRY (8)
    ["Who did Mark Fowler marry in a major Walford wedding?", "Ruth Aitken", ["Michelle Fowler", "Shelley Lewis", "Rachel Kominski"], "Easy", "Mark and Ruth's Wedding"],
    ["Where did Mark and Ruth hold their wedding ceremony?", "A register office", ["The Queen Victoria", "A cathedral", "The Walford town hall ballroom"], "Medium", "Mark and Ruth's Wedding"],
    ["Which condition led Ruth's family to oppose her marriage to Mark?", "Mark's HIV-positive status", ["Mark's gambling debts", "Mark's previous prison sentence", "Mark's unemployment"], "Easy", "Mark and Ruth's Wedding"],
    ["What was the first name of Ruth Aitken's father, who refused to attend the wedding?", "Hugh", ["John", "James", "Douglas"], "Medium", "Mark and Ruth's Wedding"],
    ["What was the first name of Ruth's mother, who came to the register office?", "Maureen", ["Maxine", "Pauline", "Nellie"], "Medium", "Mark and Ruth's Wedding"],
    ["Which actress portrayed Mark Fowler's new wife Ruth?", "Caroline Paterson", ["Susan Tully", "Sophie Langham", "Lucy Speed"], "Medium", "Mark and Ruth's Wedding"],
    ["Which family member gave a speech at Mark and Ruth's wedding reception?", "Arthur Fowler", ["Grant Mitchell", "David Wicks", "Roy Evans"], "Medium", "Mark and Ruth's Wedding"],
    ["Whose planned wedding to Geoff Barnes fell apart on the day Mark and Ruth married?", "Michelle Fowler's", ["Sharon Mitchell's", "Kathy Beale's", "Carol Jackson's"], "Medium", "Mark and Ruth's Wedding"],

    // SHARON LEAVES (6)
    ["Which former Queen Vic landlady left Walford in a black cab after her marriage to Grant collapsed?", "Sharon Watts", ["Peggy Mitchell", "Pat Butcher", "Kathy Mitchell"], "Easy", "Sharon's Departure"],
    ["Which Mitchell brother tried to win Sharon back before she left Walford?", "Grant Mitchell", ["Phil Mitchell", "Billy Mitchell", "Jamie Mitchell"], "Easy", "Sharon's Departure"],
    ["Which pub had Sharon planned to humiliate Grant in before deciding against it?", "The Queen Victoria", ["The Arches", "The launderette", "The market"], "Medium", "Sharon's Departure"],
    ["Which country did Sharon move to when she left Albert Square?", "The United States", ["Australia", "Canada", "Spain"], "Easy", "Sharon's Departure"],
    ["Which Mitchell matriarch took over Sharon's interest in the Queen Victoria?", "Peggy Mitchell", ["Sam Mitchell", "Kathy Mitchell", "Michelle Fowler"], "Easy", "Sharon's Departure"],
    ["Which actress played Sharon during her departure?", "Letitia Dean", ["Susan Tully", "Gillian Taylforth", "Wendy Richard"], "Easy", "Sharon's Departure"],

    // NIGEL AND CLARE LOSE DEBBIE (9)
    ["Which much-loved Walford resident lost his wife Debbie in a road accident?", "Nigel Bates", ["Arthur Fowler", "Grant Mitchell", "Roy Evans"], "Easy", "Debbie's Death"],
    ["How was Debbie Bates killed?", "In a hit-and-run accident", ["In a house fire", "In a train crash", "In a robbery"], "Easy", "Debbie's Death"],
    ["Where was Nigel working when police came to tell him about Debbie's death?", "His video shop", ["The Queen Victoria", "The Arches", "The launderette"], "Medium", "Debbie's Death"],
    ["Where did Nigel gently break the news of Debbie's death to Clare?", "At a playground", ["At the school gates", "At the hospital", "At the Queen Vic"], "Medium", "Debbie's Death"],
    ["Which young girl was left without her mother after Debbie's accident?", "Clare", ["Janine", "Sonia", "Vicki"], "Easy", "Debbie's Death"],
    ["Which man returned and tried to gain custody of Clare after Debbie died?", "Liam Tyler", ["David Wicks", "Roy Evans", "Stan Dougan"], "Medium", "Debbie's Death"],
    ["Whose testimony about Liam's violence helped Nigel win the fight to keep Clare?", "Caroline Webber's", ["Tiffany Raymond's", "Ruth Fowler's", "Kathy Mitchell's"], "Medium", "Debbie's Death"],
    ["Which betting-shop boss had been harassing Debbie before her death?", "Stan Dougan", ["Willy Roper", "Richard Cole", "Ted Hills"], "Medium", "Debbie's Death"],
    ["Which actress portrayed Debbie Bates?", "Nicola Duffett", ["Gemma Bissix", "Caroline Paterson", "Sophie Langham"], "Medium", "Debbie's Death"],

    // MICHELLE AND GRANT'S SECRET (8)
    ["Which unlikely pair had a one-night stand after Sharon left Walford?", "Michelle Fowler and Grant Mitchell", ["Kathy Beale and David Wicks", "Carol Jackson and Phil Mitchell", "Pat Butcher and Ian Beale"], "Easy", "Michelle's Departure"],
    ["Which Mitchell brother was the father of Michelle's unborn baby when she left Walford?", "Grant Mitchell", ["Phil Mitchell", "Billy Mitchell", "Jamie Mitchell"], "Easy", "Michelle's Departure"],
    ["Who did Michelle keep in the dark about the father of her unborn baby?", "Grant Mitchell", ["Mark Fowler", "Arthur Fowler", "Ruth Fowler"], "Medium", "Michelle's Departure"],
    ["Which country did Michelle choose for a new start with Vicki?", "The United States", ["France", "Australia", "Spain"], "Easy", "Michelle's Departure"],
    ["Which US state was Michelle moving to for work?", "Alabama", ["Florida", "California", "New York"], "Medium", "Michelle's Departure"],
    ["Which daughter left Albert Square with Michelle?", "Vicki Fowler", ["Sonia Jackson", "Clare Bates", "Sarah Hills"], "Easy", "Michelle's Departure"],
    ["Which actress ended her original run playing Michelle Fowler?", "Susan Tully", ["Letitia Dean", "Wendy Richard", "Lindsey Coulson"], "Easy", "Michelle's Departure"],
    ["Which Fowler parent reconciled with Michelle at the launderette before her departure?", "Pauline Fowler", ["Arthur Fowler", "Mark Fowler", "Nellie Ellis"], "Medium", "Michelle's Departure"],

    // THE SPANISH HOLIDAY AND SAM (6)
    ["In which country did Phil and Grant unexpectedly find their sister Sam?", "Spain", ["Portugal", "France", "Italy"], "Easy", "Sam's Return"],
    ["Which Walford car dealer was found in bed with Sam during the holiday?", "David Wicks", ["Roy Evans", "Ricky Butcher", "Ian Beale"], "Easy", "Sam's Return"],
    ["Which two brothers brought Sam back to Walford?", "Phil and Grant Mitchell", ["Ian and David Wicks", "Mark and Martin Fowler", "Ricky and David Butcher"], "Easy", "Sam's Return"],
    ["What sort of work had Sam ended up doing in Spain after her modelling hopes failed?", "Bar hostess", ["Hospital nurse", "School teacher", "Police officer"], "Medium", "Sam's Return"],
    ["Which former husband did Sam try to win back after returning home?", "Ricky Butcher", ["Grant Mitchell", "Ian Beale", "Nigel Bates"], "Easy", "Sam's Return"],
    ["Which actress returned to the role of Sam Mitchell?", "Danniella Westbrook", ["Martine McCutcheon", "Lucy Speed", "Michelle Joseph"], "Easy", "Sam's Return"],

    // CINDY AND DAVID (5)
    ["Which man began an affair with Cindy Beale while she was married to Ian?", "David Wicks", ["Roy Evans", "Phil Mitchell", "Grant Mitchell"], "Easy", "Cindy and David"],
    ["Which businessman was Cindy betraying during her affair with David?", "Ian Beale", ["Ricky Butcher", "Nigel Bates", "Sanjay Kapoor"], "Easy", "Cindy and David"],
    ["Which actress played Cindy Beale during her affair with David?", "Michelle Collins", ["Patsy Palmer", "Pam St Clement", "Gillian Taylforth"], "Easy", "Cindy and David"],
    ["Which woman warned David about Cindy's past relationship with his brother Simon?", "Pat Butcher", ["Kathy Beale", "Carol Jackson", "Peggy Mitchell"], "Medium", "Cindy and David"],
    ["Which returning Mitchell woman made Cindy jealous when David showed an interest in her?", "Sam Mitchell", ["Peggy Mitchell", "Sharon Mitchell", "Kathy Mitchell"], "Medium", "Cindy and David"],

    // ARTHUR AND WILLY ROPER (10)
    ["Who was falsely blamed for stealing money raised for a Walford community project?", "Arthur Fowler", ["Mark Fowler", "Ian Beale", "Grant Mitchell"], "Easy", "Arthur's Ordeal"],
    ["What was the name of the fundraising project whose money vanished?", "Flowering Wilderness Fund", ["Walford Sports Appeal", "Queen Vic Restoration Fund", "East End Youth Trust"], "Medium", "Arthur's Ordeal"],
    ["Which community committee had elected Arthur as its secretary?", "The allotment committee", ["The school governors", "The market traders' association", "The pub darts league"], "Medium", "Arthur's Ordeal"],
    ["How much money was missing from Arthur's community fund?", "£20,000", ["£2,000", "£5,000", "£50,000"], "Medium", "Arthur's Ordeal"],
    ["Which old acquaintance set Arthur up to take the blame for the missing money?", "Willy Roper", ["Ted Hills", "Roy Evans", "Richard Cole"], "Easy", "Arthur's Ordeal"],
    ["Why did Willy Roper need money so desperately?", "To pay for his mother's care", ["To buy a pub", "To cover gambling losses", "To repair a stolen car"], "Medium", "Arthur's Ordeal"],
    ["Which actor played the scheming Willy Roper?", "Michael Tudor Barnes", ["Brian Croucher", "Tony Caunter", "Paul Bradley"], "Medium", "Arthur's Ordeal"],
    ["What criminal offence was Arthur accused of after the funds disappeared?", "Embezzlement", ["Blackmail", "Assault", "Burglary"], "Medium", "Arthur's Ordeal"],
    ["Where did Arthur spend Christmas after being refused bail?", "In prison", ["In hospital", "In Scotland", "In a police safe house"], "Easy", "Arthur's Ordeal"],
    ["Which Fowler family member insisted that Arthur had been framed?", "Pauline Fowler", ["Michelle Fowler", "Martin Fowler", "Vicki Fowler"], "Easy", "Arthur's Ordeal"],

    // THE HILLS FAMILY (7)
    ["Which man arrived in Walford with his children Tony and Sarah?", "Ted Hills", ["Roy Evans", "Willy Roper", "Geoff Barnes"], "Easy", "The Hills Family"],
    ["How was Ted Hills related to Kathy Beale?", "He was her brother", ["He was her cousin", "He was her former husband", "He was her uncle"], "Easy", "The Hills Family"],
    ["Which actor portrayed Ted Hills?", "Brian Croucher", ["Michael Tudor Barnes", "Tony Caunter", "Howard Antony"], "Medium", "The Hills Family"],
    ["What was the name of Ted Hills' son?", "Tony", ["Barry", "Robbie", "Steven"], "Easy", "The Hills Family"],
    ["What was the name of Ted Hills' daughter?", "Sarah", ["Clare", "Sonia", "Natalie"], "Easy", "The Hills Family"],
    ["Which actress played Sarah Hills?", "Daniela Denby-Ashe", ["Lucy Speed", "Gemma Bissix", "Nicola Duffett"], "Medium", "The Hills Family"],
    ["Which county had Tony and Sarah Hills come from before moving to Walford?", "Norfolk", ["Kent", "Surrey", "Essex"], "Medium", "The Hills Family"],

    // GITA AND GUPPY (4)
    ["Which clothing supplier arrived offering Gita Kapoor cut-price stock?", "Guppy Sharma", ["Sanjay Kapoor", "Willy Roper", "Steve Elliot"], "Medium", "Gita and Guppy"],
    ["What kind of goods did Guppy offer Gita for her market stall?", "Imitation designer clothes", ["Second-hand furniture", "Imported electrical goods", "Handmade jewellery"], "Medium", "Gita and Guppy"],
    ["Which husband was away tending a sick relative while Gita became close to Guppy?", "Sanjay Kapoor", ["Roy Evans", "David Wicks", "Phil Mitchell"], "Easy", "Gita and Guppy"],
    ["Who was Guppy's secret fiancée and business associate?", "Meena McKenzie", ["Natalie Price", "Ruth Fowler", "Tiffany Raymond"], "Medium", "Gita and Guppy"],

    // FRANK'S CHRISTMAS RETURN (6)
    ["Which missing Walford businessman suddenly reappeared at Christmas?", "Frank Butcher", ["Pete Beale", "Den Watts", "Eddie Royle"], "Easy", "Frank's Return"],
    ["Whose Christmas celebrations did Frank interrupt with his unexpected return?", "Pat Butcher's", ["Pauline Fowler's", "Kathy Mitchell's", "Carol Jackson's"], "Easy", "Frank's Return"],
    ["Which man was living with Pat when Frank unexpectedly returned?", "Roy Evans", ["David Wicks", "Grant Mitchell", "Arthur Fowler"], "Easy", "Frank's Return"],
    ["Which young Butcher answered the door when Frank arrived on Christmas Day?", "Ricky Butcher", ["Janine Butcher", "Diane Butcher", "David Wicks"], "Medium", "Frank's Return"],
    ["Which young daughter of Frank and Pat's household was sent upstairs after his return?", "Janine Butcher", ["Bianca Jackson", "Sonia Jackson", "Clare Bates"], "Medium", "Frank's Return"],
    ["What did Frank demand back after finding Roy installed in his former home?", "His family, home and business", ["The Queen Victoria", "The allotment committee", "The market inspector's job"], "Medium", "Frank's Return"],

    // DELLA, BINNIE AND LYDIA (5)
    ["Which couple left Walford together after making plans to travel abroad?", "Della Alexander and Binnie Roberts", ["Mark Fowler and Ruth Aitken", "Ricky Butcher and Bianca Jackson", "Pat Butcher and Roy Evans"], "Medium", "Della and Binnie"],
    ["Which region were Della and Binnie planning to visit when they left?", "The Mediterranean", ["Scandinavia", "The Caribbean", "The Scottish Highlands"], "Medium", "Della and Binnie"],
    ["Which apprentice hairdresser worked for Della before her departure?", "Lydia", ["Tiffany", "Sonia", "Natalie"], "Medium", "Della and Binnie"],
    ["What did Della rewrite after her troublesome apprentice Lydia asked for a signature?", "Lydia's job reference", ["A rental contract", "A pub licence", "A wedding invitation"], "Medium", "Della and Binnie"],
    ["Whose market stall later employed Lydia after her time at the hair salon?", "Sanjay and Gita Kapoor's", ["Arthur and Pauline Fowler's", "Pat and Frank Butcher's", "Tony and Sarah Hills'"], "Medium", "Della and Binnie"],
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(7104 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['British Television', 'Soaps', 'EastEnders', '1995', topic],
        dailyEligible: true
    };
});

module.exports = questions;
