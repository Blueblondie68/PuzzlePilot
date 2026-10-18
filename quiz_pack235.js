 // quiz_pack235.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 1997
// 100 questions: tv_7304 to tv_7403
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [
    // COURTNEY MITCHELL (8)
    ["What did Grant and Tiffany Mitchell name their baby daughter?", "Courtney", ["Louise", "Vicki", "Clare"], "Easy", "Courtney Mitchell"],
    ["How was Tiffany Mitchell's daughter Courtney delivered after a premature labour?", "By caesarean section", ["By forceps delivery", "At home without a midwife", "By an emergency water birth"], "Medium", "Courtney Mitchell"],
    ["Which infant actress first portrayed Courtney Mitchell?", "Charlotte Michaels", ["Gemma Bissix", "Natalie Cassidy", "Casey Anne Rothery"], "Medium", "Courtney Mitchell"],
    ["What test eventually confirmed that Grant Mitchell was Courtney's father?", "A DNA test", ["A blood-pressure test", "An ultrasound scan", "A hearing test"], "Easy", "Courtney Mitchell"],
    ["Which Mitchell brother became an uncle when Tiffany gave birth?", "Phil Mitchell", ["Billy Mitchell", "Jamie Mitchell", "Eric Mitchell"], "Easy", "Courtney Mitchell"],
    ["Who was Courtney Mitchell's grandmother and landlady of the Queen Vic?", "Peggy Mitchell", ["Pat Evans", "Pauline Fowler", "Kathy Mitchell"], "Easy", "Courtney Mitchell"],
    ["Which baby boy was Courtney Mitchell's cousin through her father Grant?", "Ben Mitchell", ["Peter Beale", "Steven Beale", "Martin Fowler"], "Easy", "Courtney Mitchell"],
    ["Which friend did Tiffany choose as baby Courtney's godmother?", "Bianca Butcher", ["Kathy Mitchell", "Ruth Fowler", "Carol Jackson"], "Easy", "Courtney Mitchell"],

    // RICKY AND BIANCA'S WEDDING (8)
    ["Which Walford couple finally married after their turbulent romance?", "Ricky Butcher and Bianca Jackson", ["Robbie Jackson and Sarah Hills", "Ian Beale and Cindy Williams", "Grant Mitchell and Lorraine Wicks"], "Easy", "Ricky and Bianca's Wedding"],
    ["Who made a surprise appearance at Ricky Butcher's wedding after being away?", "Frank Butcher", ["Pete Beale", "Den Watts", "Arthur Fowler"], "Easy", "Ricky and Bianca's Wedding"],
    ["Which three men spent Ricky's disastrous stag night with him?", "Phil, Grant and Nigel", ["Ian, Barry and Sanjay", "Mark, Robbie and Tony", "Roy, Alan and George"], "Medium", "Ricky and Bianca's Wedding"],
    ["In which English county did Ricky and his friends wake up after his stag night?", "Kent", ["Surrey", "Essex", "Sussex"], "Medium", "Ricky and Bianca's Wedding"],
    ["Which country did Ricky's confused stag-party companions mistakenly think they had reached?", "France", ["Belgium", "Spain", "Ireland"], "Medium", "Ricky and Bianca's Wedding"],
    ["Which member of the stag party tried speaking French at a farmhouse?", "Nigel Bates", ["Grant Mitchell", "Phil Mitchell", "Ricky Butcher"], "Medium", "Ricky and Bianca's Wedding"],
    ["Which Fowler was asked to rescue the wedding morning suits from Kathy's house?", "Mark Fowler", ["Martin Fowler", "Pauline Fowler", "Michelle Fowler"], "Medium", "Ricky and Bianca's Wedding"],
    ["Where did Ricky and Bianca exchange their wedding vows?", "In a church", ["In the Queen Vic", "At a register office", "At the Cobra Club"], "Easy", "Ricky and Bianca's Wedding"],

    // BIANCA AND RICKY'S LOSS (7)
    ["What name did Ricky and Bianca choose for their unborn daughter?", "Natasha", ["Rebecca", "Courtney", "Louise"], "Medium", "Bianca and Ricky's Loss"],
    ["Which condition affecting the spine was diagnosed in Bianca and Ricky's unborn baby?", "Spina bifida", ["Cystic fibrosis", "Scoliosis", "Muscular dystrophy"], "Medium", "Bianca and Ricky's Loss"],
    ["Which condition involving fluid around the brain was also diagnosed in their unborn baby?", "Hydrocephalus", ["Meningitis", "Epilepsy", "Encephalitis"], "Hard", "Bianca and Ricky's Loss"],
    ["What hospital examination revealed the serious problems affecting Bianca's pregnancy?", "A prenatal scan", ["A hearing test", "A chest X-ray", "A routine eye test"], "Easy", "Bianca and Ricky's Loss"],
    ["What heartbreaking decision did Ricky and Bianca make after learning of their baby's conditions?", "To end the pregnancy", ["To give the baby up for adoption", "To separate immediately", "To move to Australia"], "Medium", "Bianca and Ricky's Loss"],
    ["Which partner struggled to see and hold baby Natasha after the pregnancy ended?", "Ricky Butcher", ["Bianca Butcher", "Carol Jackson", "Pat Evans"], "Medium", "Bianca and Ricky's Loss"],
    ["Which disability organisation advised the makers of EastEnders about Bianca's pregnancy storyline?", "The Association for Spina Bifida and Hydrocephalus", ["The National Autistic Society", "The Muscular Dystrophy Campaign", "The British Epilepsy Association"], "Medium", "Bianca and Ricky's Loss"],

    // PHIL, KATHY AND LORNA (9)
    ["Which addiction caused Phil Mitchell's marriage to Kathy to deteriorate?", "Alcohol", ["Gambling", "Prescription painkillers", "Cocaine"], "Easy", "Phil and Kathy"],
    ["Which recovery fellowship did Phil Mitchell attend to tackle his drinking?", "Alcoholics Anonymous", ["Gamblers Anonymous", "Narcotics Anonymous", "A smoking-cessation group"], "Medium", "Phil and Kathy"],
    ["Which woman did Phil meet at a recovery meeting before beginning an affair?", "Lorna Cartwright", ["Polly Becker", "Irene Raymond", "Annie Palmer"], "Easy", "Phil and Kathy"],
    ["Which actress portrayed Phil's lover Lorna Cartwright?", "Janet Dibley", ["Roberta Taylor", "Victoria Gould", "Karen Henthorn"], "Medium", "Phil and Kathy"],
    ["Which city did Phil take Kathy to in an attempt to save their marriage?", "Paris", ["Dublin", "Rome", "Edinburgh"], "Easy", "Phil and Kathy"],
    ["Into which river did Kathy throw her wedding ring after Phil admitted his affair?", "The Seine", ["The Thames", "The Loire", "The Rhine"], "Medium", "Phil and Kathy"],
    ["What had Lorna Cartwright sent Phil before he confessed to Kathy?", "A handwritten letter", ["A videotape", "A wedding invitation", "A court summons"], "Medium", "Phil and Kathy"],
    ["What happened to Phil and Kathy's relationship after the Paris revelation?", "They separated", ["They renewed their vows", "They moved to Spain", "They bought a new pub"], "Easy", "Phil and Kathy"],
    ["Which member of the Mitchell family accompanied Kathy home after the trouble in Paris?", "Grant Mitchell", ["Sam Mitchell", "Peggy Mitchell", "Billy Mitchell"], "Medium", "Phil and Kathy"],

    // IAN'S SEARCH FOR CINDY AND THE BOYS (10)
    ["Which private detective did Ian Beale hire to find his missing sons?", "Ros Thorne", ["Polly Becker", "Annie Palmer", "Vanessa Carlton"], "Easy", "Ian and Cindy"],
    ["Which Scottish singer and actress portrayed private investigator Ros Thorne?", "Clare Grogan", ["Lulu", "Shirley Manson", "Lorraine McIntosh"], "Medium", "Ian and Cindy"],
    ["Which country did Ian Beale travel to after discovering where Cindy was living?", "Italy", ["France", "Spain", "Greece"], "Easy", "Ian and Cindy"],
    ["Which two Mitchell brothers helped Ian recover his sons from Cindy?", "Phil and Grant", ["Grant and Billy", "Phil and Jamie", "Billy and Jamie"], "Easy", "Ian and Cindy"],
    ["Which two boys did Ian bring back from Cindy's home abroad?", "Steven and Peter", ["Ben and Martin", "Peter and Bobby", "Joe and Tony"], "Easy", "Ian and Cindy"],
    ["Where did the Mitchell brothers take Ian's sons to reunite them with their father?", "An airport", ["A ferry terminal", "A police station", "A railway depot"], "Medium", "Ian and Cindy"],
    ["Which wealthy businessman became Cindy's partner and supported her custody fight?", "Nick Holland", ["George Palmer", "Roy Evans", "Willy Roper"], "Medium", "Ian and Cindy"],
    ["Which actor played Cindy's new partner Nick Holland?", "Dominic Taylor", ["Shaun Williamson", "Paul Moriarty", "Richard Driscoll"], "Medium", "Ian and Cindy"],
    ["Which holiday brought Cindy Beale back to Ian's house for a surprise visit?", "Christmas", ["Easter", "Halloween", "Bonfire Night"], "Easy", "Ian and Cindy"],
    ["What was Cindy demanding when she unexpectedly turned up at Ian Beale's home?", "To have her children back", ["To buy his café", "To move into the Queen Vic", "To sell his market stall"], "Easy", "Ian and Cindy"],

    // THE FOWLERS GO TO IRELAND (13)
    ["Which long-lost sister did Pauline Fowler discover she had in Ireland?", "Maggie Flaherty", ["Irene Raymond", "Neelam Kapoor", "Lorraine Wicks"], "Easy", "Ireland and the Flahertys"],
    ["Which woman had given up Pauline's sister Maggie for adoption?", "Lou Beale", ["Pauline Fowler", "Ethel Skinner", "Nellie Ellis"], "Medium", "Ireland and the Flahertys"],
    ["Which country did Pauline travel to when she found her long-lost family?", "Ireland", ["Scotland", "Wales", "France"], "Easy", "Ireland and the Flahertys"],
    ["Which actress played Pauline Fowler's sister Maggie?", "Olivia Shanley", ["Janet Behan", "Roberta Taylor", "Tilly Vosburgh"], "Medium", "Ireland and the Flahertys"],
    ["What was the first name of Maggie Flaherty's husband?", "Sean", ["Conor", "Eamonn", "Gerry"], "Medium", "Ireland and the Flahertys"],
    ["Which actor played Maggie's husband Sean Flaherty?", "Pat Laffin", ["Seán Gleeson", "Maurice O'Donoghue", "Simon O'Gorman"], "Medium", "Ireland and the Flahertys"],
    ["Which son of Maggie Flaherty moved to Walford after Pauline's visit?", "Conor Flaherty", ["Eamonn Flaherty", "Sean Flaherty", "John Flaherty"], "Easy", "Ireland and the Flahertys"],
    ["Which actress played newcomer Mary Flaherty?", "Melanie Clark Pullen", ["Caroline Paterson", "Sophie Lawrence", "Patsy Palmer"], "Medium", "Ireland and the Flahertys"],
    ["Who was Mary Flaherty's father?", "Conor Flaherty", ["Sean Flaherty", "Eamonn Flaherty", "Gerry McCrae"], "Easy", "Ireland and the Flahertys"],
    ["Which married man was secretly involved with Mary Flaherty in Ireland?", "Gerry McCrae", ["George Palmer", "Roy Evans", "Michael Rose"], "Medium", "Ireland and the Flahertys"],
    ["Which member of the Fowler family had a brief holiday romance with Colette Flaherty?", "Martin Fowler", ["Mark Fowler", "Ian Beale", "Robbie Jackson"], "Medium", "Ireland and the Flahertys"],
    ["Which Flaherty relative was fiercely loyal to his father Sean, despite Sean's bullying?", "Eamonn Flaherty", ["Conor Flaherty", "Martin Fowler", "Gerry McCrae"], "Medium", "Ireland and the Flahertys"],
    ["Which Walford family did Mary Flaherty join after leaving Ireland with her father?", "The Fowlers", ["The Mitchells", "The Evanses", "The Brannings"], "Easy", "Ireland and the Flahertys"],

    // NEELAM AND THE KAPOORS (7)
    ["Which relative did Sanjay Kapoor bring back from India after his father's death?", "His mother Neelam", ["His sister Meena", "His cousin Naima", "His aunt Sufia"], "Easy", "Neelam Kapoor"],
    ["Which actress played Sanjay's mother Neelam Kapoor?", "Jamila Massey", ["Shobu Kapoor", "Nina Wadia", "Mina Anwar"], "Medium", "Neelam Kapoor"],
    ["Which country had Neelam Kapoor been living in before returning with Sanjay?", "India", ["Pakistan", "Kenya", "Bangladesh"], "Easy", "Neelam Kapoor"],
    ["What was the name of the grocery shop Neelam Kapoor bought?", "First Til Last", ["The Minute Mart", "Deals on Wheels", "The Arches"], "Medium", "Neelam Kapoor"],
    ["Which Jackson woman lost her job when Neelam took over the shop?", "Carol Jackson", ["Bianca Butcher", "Blossom Jackson", "Sonia Jackson"], "Medium", "Neelam Kapoor"],
    ["Which child did Gita Kapoor take with her when she left Walford for a break?", "Sharmilla", ["Clare", "Vicki", "Sonia"], "Easy", "Neelam Kapoor"],
    ["What family relationship made Neelam Kapoor particularly difficult for Gita to live with?", "She was Gita's mother-in-law", ["She was Gita's sister", "She was Gita's aunt", "She was Gita's grandmother"], "Easy", "Neelam Kapoor"],

    // POLLY, ALEX AND ANNIE (11)
    ["Which journalist arrived to report on Albert Square for the Walford Gazette?", "Polly Becker", ["Ros Thorne", "Irene Raymond", "Annie Palmer"], "Easy", "New Faces"],
    ["Which actress played journalist Polly Becker?", "Victoria Gould", ["Nadia Sawalha", "Janet Dibley", "Clare Grogan"], "Medium", "New Faces"],
    ["Which two men became involved in a love triangle with journalist Polly Becker?", "Tony Hills and Simon Raymond", ["Phil Mitchell and Grant Mitchell", "Ricky Butcher and Robbie Jackson", "Joe Wicks and Matthew Rose"], "Medium", "New Faces"],
    ["Which clergyman arrived in Walford and established a homeless shelter?", "Alex Healy", ["Geoff Barnes", "Ted Hills", "Willy Roper"], "Easy", "New Faces"],
    ["Which actor portrayed vicar Alex Healy?", "Richard Driscoll", ["Russell Floyd", "Paul Bradley", "Mark Homer"], "Medium", "New Faces"],
    ["Which Hills family member helped Reverend Alex Healy with his homeless shelter?", "Sarah Hills", ["Tony Hills", "Ted Hills", "Irene Raymond"], "Medium", "New Faces"],
    ["Which married Walford woman became romantically involved with vicar Alex Healy?", "Kathy Mitchell", ["Pat Evans", "Carol Jackson", "Ruth Fowler"], "Easy", "New Faces"],
    ["Which businessman's daughter arrived to help run his enterprises in Walford?", "Annie Palmer", ["Polly Becker", "Vanessa Carlton", "Lorna Cartwright"], "Easy", "New Faces"],
    ["Which actress played tough businesswoman Annie Palmer?", "Nadia Sawalha", ["Victoria Gould", "Roberta Taylor", "Tilly Vosburgh"], "Easy", "New Faces"],
    ["Which nightclub owner was Annie Palmer's father?", "George Palmer", ["Roy Evans", "Michael Rose", "Frank Butcher"], "Easy", "New Faces"],
    ["Which public office did Ian Beale seek when he lost an election to Melanie Thomas?", "A seat on Walford Council", ["A seat in Parliament", "The mayoralty of London", "The market inspector's post"], "Medium", "New Faces"],

    // THE ROSE FAMILY (5)
    ["Which teenager arrived in Albert Square as the son of market inspector Michael Rose?", "Matthew Rose", ["Josh Saunders", "Joe Wicks", "Tony Hills"], "Easy", "The Rose Family"],
    ["Which actor played Matthew Rose?", "Joe Absolom", ["Paul Nicholls", "Jon Lee", "Mark Homer"], "Easy", "The Rose Family"],
    ["Who was Matthew Rose's mother?", "Susan Rose", ["Julie Haye", "Polly Becker", "Irene Raymond"], "Easy", "The Rose Family"],
    ["Which condition did Susan Rose live with when she came to Walford?", "Multiple sclerosis", ["Parkinson's disease", "Epilepsy", "Rheumatoid arthritis"], "Medium", "The Rose Family"],
    ["Which actress portrayed Susan Rose?", "Tilly Vosburgh", ["Janet Dibley", "Karen Henthorn", "Clare Grogan"], "Medium", "The Rose Family"],

    // DOT'S RETURN (5)
    ["Which much-loved Walford resident returned after several years away?", "Dot Cotton", ["Angie Watts", "Ethel Skinner", "Lou Beale"], "Easy", "Dot Cotton"],
    ["Which former lodger visited Dot Cotton ahead of her return to Walford?", "Nigel Bates", ["Ian Beale", "Phil Mitchell", "Mark Fowler"], "Easy", "Dot Cotton"],
    ["Which criminal son of Dot Cotton was back in prison when she returned?", "Nick Cotton", ["Charlie Cotton", "Ashley Cotton", "Andrew Cotton"], "Easy", "Dot Cotton"],
    ["Which of Nick Cotton's prison associates held Dot hostage?", "Damian Spinks", ["Dan Zappieri", "Willy Roper", "John Valecue"], "Medium", "Dot Cotton"],
    ["Which actress returned to the role of Dot Cotton?", "June Brown", ["Wendy Richard", "Gretchen Franklin", "Elizabeth Kelly"], "Easy", "Dot Cotton"],

    // MARK AND RUTH FOSTER (4)
    ["Which married couple took young Jessie Moore into foster care?", "Mark and Ruth Fowler", ["Phil and Kathy Mitchell", "Nigel and Julie Bates", "Ricky and Bianca Butcher"], "Easy", "Jessie Moore"],
    ["What was the surname of the foster child who moved in with Mark and Ruth?", "Moore", ["Flaherty", "Hills", "Rose"], "Medium", "Jessie Moore"],
    ["Why was Jessie Moore's mother unable to care for her when she arrived in Walford?", "She was in prison", ["She had emigrated", "She was serving abroad", "She had joined the police"], "Medium", "Jessie Moore"],
    ["Which actress played foster child Jessie Moore?", "Chelsey Paden", ["Gemma Bissix", "Natalie Cassidy", "Daniela Denby-Ashe"], "Medium", "Jessie Moore"],

    // IRENE AND TERRY (4)
    ["Which woman arrived in Walford as the estranged mother of Tony and Sarah Hills?", "Irene Hills", ["Julie Haye", "Susan Rose", "Polly Becker"], "Easy", "Irene and Terry"],
    ["Which actress played the outspoken Irene Hills?", "Roberta Taylor", ["Janet Dibley", "Victoria Gould", "Nadia Sawalha"], "Medium", "Irene and Terry"],
    ["Which man was Irene Hills's former husband and the father of Tony and Sarah?", "Ted Hills", ["Terry Raymond", "Alex Healy", "Michael Rose"], "Easy", "Irene and Terry"],
    ["Which man became romantically involved with Irene Hills after her arrival?", "Terry Raymond", ["Frank Butcher", "Roy Evans", "George Palmer"], "Easy", "Irene and Terry"],

    // NIGEL, CLARE AND JULIE (5)
    ["Which teacher became close to Nigel Bates while trying to help Clare?", "Julie Haye", ["Susan Rose", "Irene Raymond", "Ros Thorne"], "Easy", "Nigel and Clare"],
    ["Which actress played teacher Julie Haye?", "Karen Henthorn", ["Tilly Vosburgh", "Janet Dibley", "Roberta Taylor"], "Medium", "Nigel and Clare"],
    ["Which boy rescued Clare Bates when former friends began bullying her?", "Josh Saunders", ["Matthew Rose", "Joe Wicks", "Martin Fowler"], "Medium", "Nigel and Clare"],
    ["Which future S Club 7 singer played Josh Saunders?", "Jon Lee", ["Bradley McIntosh", "Paul Cattermole", "Jo O'Meara"], "Medium", "Nigel and Clare"],
    ["What was the unexpected connection between Josh Saunders and Clare's teacher Julie?", "Julie was Josh's mother", ["Julie was Josh's aunt", "Julie was Josh's sister", "Julie was Josh's cousin"], "Medium", "Nigel and Clare"],

    // BARRY'S NEW ROMANCE (4)
    ["Which businesswoman arrived at Deals on Wheels and caught Barry Evans's eye?", "Vanessa Carlton", ["Lorna Cartwright", "Polly Becker", "Ros Thorne"], "Medium", "Barry and Vanessa"],
    ["Which actress played Barry Evans's new girlfriend Vanessa Carlton?", "Adele Salem", ["Janet Dibley", "Victoria Gould", "Nadia Sawalha"], "Medium", "Barry and Vanessa"],
    ["Which businessman handed Barry the day-to-day running of his enterprises?", "Roy Evans", ["George Palmer", "Frank Butcher", "Sanjay Kapoor"], "Easy", "Barry and Vanessa"],
    ["Which executive transport business helped Barry impress Vanessa Carlton?", "Evans Executive Cars", ["Walford Taxis", "The Arches", "Palmer's Cars"], "Medium", "Barry and Vanessa"],
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(7304 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['British Television', 'Soaps', 'EastEnders', '1997', topic],
        dailyEligible: true
    };
});

module.exports = questions;
