// quiz_pack244.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2006
// 110 questions: tv_8254 to tv_8363
// Comprehensive question tags included from creation.
// Leave quiz_bank.js unchanged until the agreed bank update.

const topicTags = {
    "Pauline And Joe": ["Pauline Fowler", "Joe Macer", "Fowler Family", "Wedding And Christmas 2006", "Death And Deception"],
    "Get Johnny Week": ["Johnny Allen", "Phil Mitchell", "Grant Mitchell", "Danny Moon", "Gangland Showdown"],
    "Bradley And Stacey": ["Bradley Branning", "Stacey Slater", "Max Branning", "Pregnancy And Abortion", "2006 Relationship Breakdown"],
    "Billy Honey And Janet": ["Billy Mitchell", "Honey Edwards", "Janet Mitchell", "September 2006 Birth", "Down Syndrome Storyline"],
    "Wicks Family": ["Kevin Wicks", "Deano Wicks", "Carly Wicks", "Pat Evans", "New Arrivals And Family History"],
    "Fox Family": ["Denise Fox", "Chelsea Fox", "Libby Fox", "Owen Turner", "Abduction And Family Relationships"],
    "Sonia Martin And Rebecca": ["Sonia Fowler", "Martin Fowler", "Naomi Julien", "Rebecca Fowler", "Marriage And Family Conflict"],
    "Ben Little Mo And Oliver": ["Ben Mitchell", "Little Mo Mitchell", "Freddie Slater", "Oliver Cousins", "2006 Walford Departures"],
    "Sean Ruby And Brannings": ["Sean Slater", "Ruby Allen", "Max Branning", "Tanya Branning", "Arrivals And Secrets"],
    "Dawn Rob And May": ["Dawn Swann", "Rob Minter", "May Wright", "Pregnancy And Infidelity", "Late 2006"],
    "Other 2006 Stories": ["Pat Evans", "Patrick Trueman", "Ian Beale", "Jane Collins", "Newcomers And Walford Businesses"]
};

const facts = [
    // PAULINE, JOE AND THE CHRISTMAS DEATH (10)
    ["Which long-standing Albert Square matriarch married Joe Macer in February?", "Pauline Fowler", ["Dot Branning", "Pat Evans", "Peggy Mitchell"], "Easy", "Pauline And Joe", ["Pauline Wedding", "February 2006"]],
    ["Which surname did Pauline keep after marrying Joe Macer?", "Fowler", ["Macer", "Beale", "Branning"], "Medium", "Pauline And Joe", ["Pauline Married Name", "Refused Name Change"]],
    ["Which secret about Joe Macer's past created tension in his marriage to Pauline?", "He had been in prison", ["He had been a police officer", "He had been married to Peggy", "He had owned the Queen Vic"], "Medium", "Pauline And Joe", ["Joe Criminal Past", "Marriage Breakdown"]],
    ["Which elderly friend of Joe Macer arrived in Walford and knew about his criminal past?", "Bert Atkinson", ["Wilfred Atkins", "Jack Edwards", "Terry Raymond"], "Medium", "Pauline And Joe", ["Bert Atkinson Arrival", "Old Prison Friend"]],
    ["Which illness did Pauline falsely claim to have towards the end of 2006?", "A brain tumour", ["Lung cancer", "Diabetes", "A heart condition"], "Easy", "Pauline And Joe", ["Pauline False Illness", "Family Manipulation"]],
    ["Which Queen Vic landlady publicly exposed Pauline's false illness claim?", "Peggy Mitchell", ["Pat Evans", "Sharon Rickman", "Chrissie Watts"], "Medium", "Pauline And Joe", ["Peggy Reveals Truth", "Queen Vic Confrontation"]],
    ["On which festive day did Pauline Fowler die in Albert Square?", "Christmas Day", ["Christmas Eve", "Boxing Day", "New Year's Eve"], "Easy", "Pauline And Joe", ["Pauline Christmas Death", "25 December 2006"]],
    ["Where did Pauline collapse at the end of her final Christmas episode?", "In Albert Square gardens", ["On the Queen Vic stairs", "Inside the launderette", "At the railway station"], "Easy", "Pauline And Joe", ["Albert Square Gardens", "Snowy Final Scene"]],
    ["Which actress ended her long run as Pauline Fowler at Christmas 2006?", "Wendy Richard", ["June Brown", "Barbara Windsor", "Pam St Clement"], "Easy", "Pauline And Joe", ["Wendy Richard Exit", "Original Cast Member"]],
    ["What was the name of Pauline Fowler's pet dog in her final year?", "Betty", ["Wellard", "Genghis", "Terrence"], "Medium", "Pauline And Joe", ["Betty The Dog", "Pauline Pet"]],

    // GET JOHNNY WEEK AND GANGSTER AFTERMATH (10)
    ["Which two Mitchell brothers pursued gangster Johnny Allen during the spring showdown?", "Phil and Grant", ["Billy and Jamie", "Phil and Ben", "Grant and Billy"], "Easy", "Get Johnny Week", ["Mitchell Brothers", "Get Johnny Week March"]],
    ["Whose murder motivated Phil Mitchell to seek a confession from Johnny Allen?", "Dennis Rickman's", ["Steve Owen's", "Paul Trueman's", "Barry Evans's"], "Easy", "Get Johnny Week", ["Justice For Dennis", "Johnny Ordered Stabbing"]],
    ["Which Moon cousin had actually stabbed Dennis Rickman on Johnny Allen's orders?", "Danny Moon", ["Jake Moon", "Alfie Moon", "Spencer Moon"], "Easy", "Get Johnny Week", ["Danny Murderer Revealed", "Dennis Killer"]],
    ["Who fatally shot Danny Moon while saving the Mitchell brothers?", "Jake Moon", ["Phil Mitchell", "Grant Mitchell", "Ruby Allen"], "Easy", "Get Johnny Week", ["Jake Kills Danny", "Rescue In Woods"]],
    ["Where was Danny Moon killed during the confrontation with the Mitchells?", "In woodland", ["Inside the Queen Vic", "On a nightclub roof", "At the railway station"], "Medium", "Get Johnny Week", ["Woodland Shooting", "March 2006 Finale"]],
    ["What weapon did Danny carry when ordered to execute Phil and Grant?", "A shotgun", ["A sword", "A crossbow", "A baseball bat"], "Medium", "Get Johnny Week", ["Danny Shotgun", "Execution Threat"]],
    ["Which daughter pressed Johnny Allen to face the police after learning the truth?", "Ruby Allen", ["Chelsea Fox", "Stacey Slater", "Demi Miller"], "Easy", "Get Johnny Week", ["Ruby Confronts Johnny", "Father Daughter"]],
    ["Which gangster confessed to ordering Dennis's death and killing Andy Hunter?", "Johnny Allen", ["Jack Dalton", "Den Watts", "Danny Moon"], "Easy", "Get Johnny Week", ["Johnny Police Confession", "Double Murder Accountability"]],
    ["What happened to Johnny Allen while serving his prison sentence in October?", "He suffered a fatal heart attack", ["He escaped in a laundry van", "He was shot by Phil", "He was transferred abroad"], "Medium", "Get Johnny Week", ["Johnny October Death", "Prison Heart Attack"]],
    ["Which troubled Slater brother visited Johnny in prison shortly before his death?", "Sean Slater", ["Charlie Slater", "Garry Hobbs", "Bradley Branning"], "Medium", "Get Johnny Week", ["Sean Visits Johnny", "October Prison Visit"]],

    // BRADLEY AND STACEY'S EVENTFUL YEAR (10)
    ["Which new Branning grandson moved in with Jim and Dot early in 2006?", "Bradley Branning", ["Max Branning", "Jack Branning", "Oscar Branning"], "Easy", "Bradley And Stacey", ["Bradley January Arrival", "Jim Grandson"]],
    ["Which actor began playing Bradley Branning in 2006?", "Charlie Clements", ["Jake Wood", "Robert Kazinsky", "James Alexandrou"], "Easy", "Bradley And Stacey", ["Charlie Clements", "Bradley Casting"]],
    ["Which Slater teenager became Bradley's girlfriend?", "Stacey Slater", ["Zoe Slater", "Little Mo Slater", "Belinda Slater"], "Easy", "Bradley And Stacey", ["Stacey Bradley Courtship", "Young Couple"]],
    ["Which married newcomer was Bradley Branning's father?", "Max Branning", ["Jim Branning", "Kevin Wicks", "Patrick Trueman"], "Easy", "Bradley And Stacey", ["Max Bradley Father Son", "Estranged Parent"]],
    ["Which relative of Bradley Branning had married Dot Cotton four years earlier?", "Jim Branning", ["Max Branning", "Jack Branning", "Bert Atkinson"], "Easy", "Bradley And Stacey", ["Jim Branning Grandfather", "Bradley Family Connection"]],
    ["What unexpected news did Stacey reveal to Bradley during the summer?", "She was pregnant", ["She had inherited a pub", "She was moving to Spain", "She was getting married to Sean"], "Easy", "Bradley And Stacey", ["Stacey Pregnancy", "August Revelation"]],
    ["What decision did Bradley pressure Stacey to make about their pregnancy?", "Have an abortion", ["Have the baby adopted", "Move to Portugal", "Leave her job"], "Medium", "Bradley And Stacey", ["Bradley Pressures Abortion", "Relationship Turning Point"]],
    ["Which family member encouraged Bradley to consider ending the pregnancy?", "Max Branning", ["Jim Branning", "Dot Branning", "Sean Slater"], "Medium", "Bradley And Stacey", ["Max Interferes", "Father Advice"]],
    ["Which man did Stacey kiss at Christmas after her relationship with Bradley collapsed?", "Max Branning", ["Sean Slater", "Jake Moon", "Kevin Wicks"], "Easy", "Bradley And Stacey", ["Stacey Max First Kiss", "Christmas 2006 Affair Begins"]],
    ["In which later year was Max and Stacey's affair famously exposed on a wedding DVD?", "2007", ["2006", "2008", "2010"], "Medium", "Bradley And Stacey", ["Affair Reveal 2007", "Chronology Distinction"]],

    // BILLY, HONEY AND BABY JANET (10)
    ["Which Mitchell married Honey Edwards during a surprise ceremony in September?", "Billy Mitchell", ["Phil Mitchell", "Grant Mitchell", "Ben Mitchell"], "Easy", "Billy Honey And Janet", ["Billy Honey Wedding", "September 2006"]],
    ["Who arranged Billy and Honey's surprise wedding?", "Peggy Mitchell", ["Dot Branning", "Pat Evans", "Pauline Fowler"], "Easy", "Billy Honey And Janet", ["Peggy Plans Wedding", "Third Ceremony Attempt"]],
    ["How many attempts did it take for Billy and Honey to marry successfully?", "Three", ["One", "Two", "Four"], "Medium", "Billy Honey And Janet", ["Three Wedding Attempts", "Ceremony Mishaps"]],
    ["What happened to Honey immediately after her wedding vows?", "She went into labour", ["She fainted from heat", "She flew abroad", "She was arrested"], "Easy", "Billy Honey And Janet", ["Wedding Day Labour", "Baby Arrival"]],
    ["What first name had Billy and Honey originally chosen for their baby girl?", "Janet", ["Scarlett", "Rebecca", "Aleesha"], "Medium", "Billy Honey And Janet", ["Janet Original Name", "Named After Grandmothers"]],
    ["What nickname did Billy use for his newborn daughter?", "Petal", ["Princess", "Poppy", "Sunshine"], "Easy", "Billy Honey And Janet", ["Baby Petal", "Janet Nickname"]],
    ["Which condition was Janet Mitchell diagnosed with shortly after birth?", "Down syndrome", ["Cystic fibrosis", "Epilepsy", "Type 1 diabetes"], "Easy", "Billy Honey And Janet", ["Down Syndrome Diagnosis", "Newborn Disability Story"]],
    ["What additional medical treatment was Janet found to need?", "Heart surgery", ["A kidney transplant", "A hip replacement", "An eye operation"], "Medium", "Billy Honey And Janet", ["Janet Heart Operation", "September Medical Crisis"]],
    ["Which parent initially struggled to bond with baby Janet and considered adoption?", "Honey Mitchell", ["Peggy Mitchell", "Pat Evans", "Demi Miller"], "Medium", "Billy Honey And Janet", ["Honey Postnatal Struggles", "Adoption Considered"]],
    ["What was the name of Honey's father, who lived on a canal boat?", "Jack Edwards", ["Jim Branning", "Bert Atkinson", "Joe Macer"], "Medium", "Billy Honey And Janet", ["Jack Edwards", "Honey Father Canal Boat"]],

    // THE WICKS FAMILY ARRIVES (10)
    ["Which young Wicks arrived in Walford in the first episode of 2006?", "Deano Wicks", ["Kevin Wicks", "Carly Wicks", "David Wicks"], "Easy", "Wicks Family", ["Deano January Debut", "First Episode 2006"]],
    ["Which actress played Deano's sister Carly Wicks?", "Kellie Shirley", ["Kara Tointon", "Laurie Brett", "Diane Parish"], "Medium", "Wicks Family", ["Kellie Shirley", "Carly Casting"]],
    ["Which actor played the newcomers' father Kevin Wicks?", "Phil Daniels", ["Ray Brooks", "Jake Wood", "Steve McFadden"], "Easy", "Wicks Family", ["Phil Daniels", "Kevin Casting"]],
    ["Who took Deano Wicks into her home when he first arrived in Walford?", "Pat Evans", ["Peggy Mitchell", "Dot Branning", "Pauline Fowler"], "Easy", "Wicks Family", ["Pat Welcomes Deano", "Wicks Family Connection"]],
    ["What false story did Deano tell Pat about his father Kevin?", "That Kevin had died", ["That Kevin was in prison", "That Kevin had gone to Brazil", "That Kevin was a policeman"], "Medium", "Wicks Family", ["Deano False Death Claim", "January Deception"]],
    ["What business did Kevin Wicks begin working in after arriving?", "The car lot", ["The launderette", "The Queen Vic", "The post office"], "Easy", "Wicks Family", ["Kevin Car Dealer", "Walford Motors"]],
    ["Which former husband did Carly Wicks separate from before moving to Walford?", "Nico Pappas", ["Jake Moon", "Martin Fowler", "Garry Hobbs"], "Medium", "Wicks Family", ["Carly Nico Marriage", "Family Arrival Background"]],
    ["Which woman was revealed as the estranged mother of Deano and Carly?", "Shirley Carter", ["Denise Fox", "Jane Collins", "Rosie Miller"], "Easy", "Wicks Family", ["Shirley Wicks Mother", "December Reunion"]],
    ["Which actress made her debut as Shirley Carter in December 2006?", "Linda Henry", ["Gerry Cowper", "June Brown", "Tracy-Ann Oberman"], "Medium", "Wicks Family", ["Linda Henry", "Shirley Debut"]],
    ["Which seaside county provided the setting for the Wicks family's December holiday and Shirley's return?", "Dorset", ["Cornwall", "Kent", "Norfolk"], "Medium", "Wicks Family", ["Dorset Family Holiday", "Shirley Arrival"]],

    // DENISE, CHELSEA, LIBBY AND OWEN (10)
    ["Which actress joined the cast as Denise Fox in 2006?", "Diane Parish", ["Angela Wynter", "Tiana Benjamin", "Petra Letang"], "Easy", "Fox Family", ["Diane Parish", "Denise Debut"]],
    ["What were the first names of Denise Fox's two daughters?", "Chelsea and Libby", ["Ruby and Stacey", "Demi and Dawn", "Lauren and Abi"], "Easy", "Fox Family", ["Chelsea Libby Sisters", "Fox Household"]],
    ["Which actress originally played Chelsea Fox on her arrival?", "Tiana Benjamin", ["Zaraah Abrahams", "Lacey Turner", "Belinda Owusu"], "Medium", "Fox Family", ["Tiana Benjamin", "Original Chelsea Casting"]],
    ["Which actress played the younger Fox daughter Libby?", "Belinda Owusu", ["Louisa Lytton", "Kellie Shirley", "Emma Barton"], "Medium", "Fox Family", ["Belinda Owusu", "Libby Casting"]],
    ["Which car dealer became romantically involved with Denise Fox?", "Kevin Wicks", ["Ian Beale", "Garry Hobbs", "Patrick Trueman"], "Easy", "Fox Family", ["Denise Kevin Romance", "New Couple"]],
    ["What was the name of Denise's abusive former husband who arrived seeking Libby?", "Owen Turner", ["Rob Minter", "Johnny Allen", "Joe Macer"], "Easy", "Fox Family", ["Owen Turner Arrival", "Domestic Abuse Storyline"]],
    ["Which actor portrayed Denise's ex-husband Owen Turner?", "Lee Ross", ["Phil Daniels", "Robert Kazinsky", "Stuart Laing"], "Medium", "Fox Family", ["Lee Ross", "Owen Casting"]],
    ["Where did Owen Turner take Libby after abducting her?", "Epping Forest", ["Brighton Pier", "Dorset beach", "Canvey Island"], "Medium", "Fox Family", ["Owen Abducts Libby", "Epping Forest"]],
    ["Which former musical group was linked to the mystery of Denise Fox's father?", "The Five Hectors", ["The Banned", "The Firm", "The Moonlighters"], "Medium", "Fox Family", ["Denise Father Mystery", "Trinidad Band"]],
    ["Which Walford resident took a DNA test that ruled him out as Denise's father?", "Patrick Trueman", ["Jim Branning", "Kevin Wicks", "Bert Atkinson"], "Medium", "Fox Family", ["Patrick DNA Test", "False Paternity Hope"]],

    // SONIA, MARTIN AND THEIR DAUGHTER (10)
    ["Which nurse left her marriage to Martin Fowler after developing feelings for Naomi?", "Sonia Fowler", ["Jane Collins", "Honey Mitchell", "Chelsea Fox"], "Easy", "Sonia Martin And Rebecca", ["Sonia Leaves Martin", "New Relationship"]],
    ["What was the surname of Sonia's nursing friend and romantic partner Naomi?", "Julien", ["Turner", "Cairns", "Morton"], "Medium", "Sonia Martin And Rebecca", ["Naomi Julien", "Sonia Naomi Romance"]],
    ["Which mother-in-law fiercely criticised Sonia during her separation from Martin?", "Pauline Fowler", ["Peggy Mitchell", "Dot Branning", "Yolande Trueman"], "Easy", "Sonia Martin And Rebecca", ["Pauline Sonia Feud", "Marriage Breakdown"]],
    ["Which couple's divorce became final in October 2006?", "Martin and Sonia Fowler", ["Ian and Jane Beale", "Max and Tanya Branning", "Billy and Honey Mitchell"], "Medium", "Sonia Martin And Rebecca", ["October Decree Absolute", "Fowler Divorce"]],
    ["What name was Chloe, Sonia and Martin's daughter, now known by?", "Rebecca", ["Aleesha", "Janet", "Courtney"], "Easy", "Sonia Martin And Rebecca", ["Rebecca Fowler", "Chloe Renamed"]],
    ["Which woman was Rebecca's adoptive grandmother?", "Margaret Wilson", ["Betty Skinner", "Mo Harris", "Rosie Miller"], "Medium", "Sonia Martin And Rebecca", ["Margaret Wilson", "Rebecca Adoptive Family"]],
    ["Which grandmother was determined to have more control over Rebecca's upbringing?", "Pauline Fowler", ["Peggy Mitchell", "Pat Evans", "Dot Branning"], "Easy", "Sonia Martin And Rebecca", ["Pauline Rebecca Custody", "Grandmother Interference"]],
    ["Which two people were Rebecca's biological parents?", "Sonia and Martin", ["Naomi and Martin", "Pauline and Joe", "Jane and Ian"], "Easy", "Sonia Martin And Rebecca", ["Rebecca Biological Parents", "Fowler Jackson Family"]],
    ["Who asked Sonia to marry him again on Christmas Day 2006?", "Martin Fowler", ["Gus Smith", "Mickey Miller", "Bradley Branning"], "Easy", "Sonia Martin And Rebecca", ["Martin Christmas Proposal", "Reconciliation Attempt"]],
    ["Which Walford resident was initially suspected of involvement in Pauline's Christmas death after a confrontation?", "Sonia Fowler", ["Naomi Julien", "Honey Mitchell", "Jane Collins"], "Medium", "Sonia Martin And Rebecca", ["Sonia Suspected", "Pauline Death Investigation"]],

    // BEN, LITTLE MO AND DR OLIVER (10)
    ["Which Mitchell son arrived in Walford from South Africa after his mother was reported dead?", "Ben Mitchell", ["Jamie Mitchell", "Billy Mitchell", "Darren Miller"], "Easy", "Ben Little Mo And Oliver", ["Ben South Africa Return", "March 2006"]],
    ["Which woman was Ben Mitchell's mother, presumed dead in 2006?", "Kathy Beale", ["Sharon Rickman", "Kate Mitchell", "Peggy Mitchell"], "Easy", "Ben Little Mo And Oliver", ["Kathy Presumed Dead", "Ben Mother"]],
    ["Which Beale man was Ben Mitchell's older half-brother?", "Ian Beale", ["Martin Fowler", "Steven Beale", "Peter Beale"], "Easy", "Ben Little Mo And Oliver", ["Ian Ben Half Brothers", "Mixed Family"]],
    ["Which actor played the young Ben Mitchell when he returned in 2006?", "Charlie Jones", ["Joshua Pascoe", "Harry Reid", "Max Bowden"], "Medium", "Ben Little Mo And Oliver", ["Charlie Jones Actor", "2006 Ben Casting"]],
    ["Which Walford doctor began a relationship with Little Mo?", "Oliver Cousins", ["Anthony Trueman", "May Wright", "Dan Ferreira"], "Easy", "Ben Little Mo And Oliver", ["Oliver Little Mo Romance", "Local GP"]],
    ["Which actor portrayed Dr Oliver Cousins?", "Tom Ellis", ["David Spinx", "Phil Daniels", "Jake Wood"], "Medium", "Ben Little Mo And Oliver", ["Tom Ellis", "Doctor Casting"]],
    ["Which child was suspected of hurting Freddie during Little Mo's hospital ordeal?", "Ben Mitchell", ["Bobby Beale", "Darren Miller", "Jay Brown"], "Easy", "Ben Little Mo And Oliver", ["Freddie Injury Suspicion", "Ben And Freddie"]],
    ["What medical issue made Freddie unusually vulnerable to bleeding and bruising?", "A low platelet count", ["An inherited bone disease", "Diabetes", "A heart murmur"], "Medium", "Ben Little Mo And Oliver", ["Freddie Blood Platelets", "Medical Investigation"]],
    ["Which city did Oliver plan to move to for a new doctor's job?", "Leeds", ["Bristol", "Oxford", "Cardiff"], "Medium", "Ben Little Mo And Oliver", ["Oliver Leeds Job", "Departure Plans"]],
    ["Which Devon town did Little Mo move to with Freddie when she left Walford in May?", "Barnstaple", ["Torquay", "Exeter", "Paignton"], "Medium", "Ben Little Mo And Oliver", ["Little Mo Barnstaple", "May 2006 Exit"]],

    // THE BRANNING FAMILY, SEAN AND RUBY (10)
    ["Which actor arrived as Max Branning in 2006?", "Jake Wood", ["Charlie Clements", "John Bardon", "Phil Daniels"], "Easy", "Sean Ruby And Brannings", ["Jake Wood", "Max Casting"]],
    ["Which actress joined the cast as Tanya Branning?", "Jo Joyner", ["Laurie Brett", "Diane Parish", "Gillian Wright"], "Medium", "Sean Ruby And Brannings", ["Jo Joyner", "Tanya Casting"]],
    ["What were the names of Max and Tanya Branning's daughters on arrival?", "Lauren and Abi", ["Chelsea and Libby", "Demi and Dawn", "Stacey and Zoe"], "Easy", "Sean Ruby And Brannings", ["Lauren Branning", "Abi Branning", "Branning Daughters"]],
    ["Which business did Tanya Branning establish in Walford?", "A beauty salon", ["A minicab firm", "A car dealership", "A bookmaker's"], "Easy", "Sean Ruby And Brannings", ["Tanya Salon Booty", "New Business"]],
    ["Which woman, the mother of Bradley, arrived and challenged Tanya about Max?", "Rachel Branning", ["Carol Jackson", "Jane Collins", "Denise Fox"], "Medium", "Sean Ruby And Brannings", ["Rachel Bradley Mother", "Max First Wife"]],
    ["Which Slater brother made his first appearance in the summer?", "Sean Slater", ["Charlie Slater", "Harry Slater", "Garry Hobbs"], "Easy", "Sean Ruby And Brannings", ["Sean Arrival", "Slater Son"]],
    ["Which actor portrayed Sean Slater?", "Robert Kazinsky", ["Michael Higgs", "Joe Swash", "Charlie Clements"], "Easy", "Sean Ruby And Brannings", ["Robert Kazinsky", "Sean Casting"]],
    ["Which member of the Slater family was Sean's younger sister?", "Stacey Slater", ["Zoe Slater", "Kat Slater", "Little Mo Mitchell"], "Easy", "Sean Ruby And Brannings", ["Sean Stacey Siblings", "Jean Children"]],
    ["Which nightclub did Ruby Allen inherit following her father Johnny's death?", "Scarlet", ["E20", "The Dagmar", "R and R"], "Medium", "Sean Ruby And Brannings", ["Ruby Inherits Scarlet", "Johnny Estate"]],
    ["Which new boyfriend caused trouble for Ruby Allen and her friendship with Stacey?", "Sean Slater", ["Bradley Branning", "Jake Moon", "Juley Smith"], "Easy", "Sean Ruby And Brannings", ["Ruby Sean Relationship", "Friendship Strain"]],

    // DAWN, ROB AND MAY: THE BABY STORY BEGINS (10)
    ["Which Miller family relative became romantically involved with businessman Rob Minter?", "Dawn Swann", ["Demi Miller", "Rosie Miller", "Stacey Slater"], "Easy", "Dawn Rob And May", ["Dawn Rob Romance", "2006 Relationship"]],
    ["Which actor played Rob Minter?", "Stuart Laing", ["Phil Daniels", "Lee Ross", "Charlie Clements"], "Medium", "Dawn Rob And May", ["Stuart Laing", "Rob Casting"]],
    ["Which Walford businessman introduced Rob Minter to Dawn's social circle?", "Ian Beale", ["Barry Evans", "Den Watts", "Andy Hunter"], "Medium", "Dawn Rob And May", ["Rob Business Connections", "Ian Charity Events"]],
    ["Who did Dawn pretend to be during Ian Beale's charity functions?", "Ian's wife Jane", ["Ian's sister", "A local councillor", "His solicitor"], "Medium", "Dawn Rob And May", ["Dawn Poses As Jane", "Charity Function Deception"]],
    ["Which profession did Rob Minter's estranged wife May have?", "Doctor", ["Police officer", "Solicitor", "Hairdresser"], "Easy", "Dawn Rob And May", ["Dr May Wright", "Walford GP"]],
    ["Which actress made her debut as Dr May Wright?", "Amanda Drew", ["Laurie Brett", "Jill Halfpenny", "Tracy-Ann Oberman"], "Medium", "Dawn Rob And May", ["Amanda Drew", "May Casting"]],
    ["Which woman was revealed as Rob Minter's wife in November?", "May Wright", ["Denise Fox", "Jane Collins", "Tanya Branning"], "Easy", "Dawn Rob And May", ["Rob Married To May", "November Revelation"]],
    ["What unexpected news did Dawn learn after Rob returned to May?", "She was pregnant", ["She had inherited the Queen Vic", "She had won the lottery", "She had been offered a job overseas"], "Easy", "Dawn Rob And May", ["Dawn Pregnancy", "December 2006"]],
    ["Why did May Wright take a particular interest in Dawn's unborn child?", "May could not conceive a child herself", ["May was Dawn's sister", "Rob had promised May a promotion", "May was the baby's godmother"], "Medium", "Dawn Rob And May", ["May Infertility", "Baby Obsession Begins"]],
    ["What arrangement did Rob and May offer Dawn about her baby?", "They would pay her to give them the baby", ["They would take her to Spain", "They would pay for her wedding", "They would hire her as a nurse"], "Medium", "Dawn Rob And May", ["Baby Buying Proposal", "Early Custody Scheme"]],

    // PAT, PATRICK, IAN, JANE AND OTHER NEWCOMERS (10)
    ["Which married Walford resident had an affair with Pat Evans during 2006?", "Patrick Trueman", ["Jim Branning", "Joe Macer", "Kevin Wicks"], "Easy", "Other 2006 Stories", ["Pat Patrick Affair", "Marriage Betrayal"]],
    ["Which woman was married to Patrick when his affair with Pat emerged?", "Yolande Trueman", ["Denise Fox", "Peggy Mitchell", "Pauline Fowler"], "Easy", "Other 2006 Stories", ["Patrick Yolande Marriage", "Affair Fallout"]],
    ["Which Mitchell brother had a brief affair with Jane Collins?", "Grant Mitchell", ["Phil Mitchell", "Billy Mitchell", "Ben Mitchell"], "Easy", "Other 2006 Stories", ["Grant Jane Affair", "2006 Love Triangle"]],
    ["Which Walford businessman was Jane Collins's partner when her affair with Grant came to light?", "Ian Beale", ["Martin Fowler", "Kevin Wicks", "Max Branning"], "Easy", "Other 2006 Stories", ["Jane Ian Romance", "Ian Learns About Grant"]],
    ["Which woman called SJ took advantage of Minty Peterson's feelings for her?", "SJ Fletcher", ["Stella Crawford", "Shirley Carter", "Sarah Cairns"], "Medium", "Other 2006 Stories", ["SJ Exploits Minty", "Money And Romance"]],
    ["Which actress played SJ Fletcher?", "Natasha Beaumont", ["Emma Barton", "Gerry Cowper", "Kellie Shirley"], "Medium", "Other 2006 Stories", ["Natasha Beaumont", "SJ Casting"]],
    ["Which solicitor began dating Phil Mitchell late in 2006?", "Stella Crawford", ["Ritchie Scott", "Kate Morton", "Amanda Parry"], "Easy", "Other 2006 Stories", ["Stella Crawford Introduction", "Phil New Girlfriend"]],
    ["Which actress made her first appearance as Stella Crawford?", "Sophie Thompson", ["Diane Parish", "Gillian Wright", "Laurie Brett"], "Medium", "Other 2006 Stories", ["Sophie Thompson", "Stella Casting"]],
    ["Which boy arrived in Walford as Bert Atkinson's grandson?", "Jay Brown", ["Bobby Beale", "Freddie Slater", "Ben Mitchell"], "Easy", "Other 2006 Stories", ["Jay Brown Debut", "Bert Grandson"]],
    ["Which actor began playing Jay Brown in 2006?", "Jamie Borthwick", ["Charlie Jones", "Charlie Clements", "James Alexandrou"], "Medium", "Other 2006 Stories", ["Jamie Borthwick", "Jay Casting"]]
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic, detailTags], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: "tv_" + String(8254 + index).padStart(4, "0"),
        category: "Television",
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set([
            "British Television", "Soaps", "EastEnders", "2006",
            topic, ...topicTags[topic], correctAnswer, ...detailTags
        ])],
        dailyEligible: true
    };
});

module.exports = questions;
