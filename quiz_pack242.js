
// quiz_pack242.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2004
// 110 questions: tv_8034 to tv_8143
// Fully tagged from creation. Do not update quiz_bank.js until the agreed bank update.

const topicTags = {
    "Barry And Janine": ["Barry Evans", "Janine Butcher", "New Years Day 2004", "Clifftop Death"],
    "Laura And Janine": ["Laura Beale", "Janine Butcher", "Pat Evans", "April 2004 Death And Investigation"],
    "Little Mo And Freddie": ["Little Mo Mitchell", "Graham Foster", "Freddie Slater", "Pregnancy And Trial"],
    "Chrissie And Kate": ["Chrissie Watts", "Den Watts", "Kate Mitchell", "Marriage And Hair Salon Betrayal"],
    "Sharon Dennis And Zoe": ["Sharon Watts", "Dennis Rickman", "Zoe Slater", "Den Watts Family Conflict"],
    "Kat Alfie And Nana": ["Kat Moon", "Alfie Moon", "Andy Hunter", "Nana Moon And Wilfred Atkins"],
    "Martin Sonia And Sarah": ["Martin Fowler", "Sonia Jackson", "Sarah Cairns", "June Wedding And Stalking"],
    "Fairground And Jane": ["June 2004 Fairground Disaster", "Lynne Hobbs", "Jane Collins", "Ian Beale"],
    "Patrick Dot And Ferreiras": ["Patrick Trueman", "Yolande Duke", "Dot Branning", "Ferreira Kidney Transplant"],
    "Millers And Stacey": ["Miller Family", "Stacey Slater", "September And November 2004 Arrivals", "Walford New Generation"],
    "Sam Paul And The Vic": ["Sam Mitchell", "Andy Hunter", "Den Watts", "Christmas 2004 Queen Vic And Gangland Crime"]
};

const facts = [
    // BARRY, JANINE AND THE NEW YEAR (10)
    ["Which Walford businessman died after falling from a cliff on New Year's Day?", "Barry Evans", ["Roy Evans", "Steve Owen", "Paul Trueman"], "Easy", "Barry And Janine", ["Barry Death", "January 2004"]],
    ["Which newlywed pushed Barry Evans over the cliff?", "Janine Butcher", ["Natalie Evans", "Pat Evans", "Laura Beale"], "Easy", "Barry And Janine", ["Janine Pushes Barry", "Honeymoon Murder"]],
    ["In which country did Barry Evans die during his honeymoon?", "Scotland", ["Wales", "Ireland", "Spain"], "Easy", "Barry And Janine", ["Scottish Honeymoon", "Cliff Location"]],
    ["What did Janine admit to Barry immediately before his fatal fall?", "She had never loved him", ["She had won the lottery", "She was leaving with Ricky", "She had sold his car lot"], "Medium", "Barry And Janine", ["Janine Confession", "False Marriage"]],
    ["What did Janine do when she reached Barry after his fall?", "Watched him die without helping", ["Called an ambulance immediately", "Carried him to safety", "Ran to fetch a doctor"], "Medium", "Barry And Janine", ["Janine Withholds Help", "Barry Final Moments"]],
    ["Which Trueman brother had helped Janine plot to exploit Barry?", "Paul Trueman", ["Anthony Trueman", "Patrick Trueman", "Juley Smith"], "Medium", "Barry And Janine", ["Paul Janine Conspiracy", "Barry Money Plot"]],
    ["Which Butcher brother did Janine eventually tell she had killed Barry?", "Ricky Butcher", ["Liam Butcher", "Frank Butcher", "David Wicks"], "Easy", "Barry And Janine", ["Ricky Learns Truth", "Janine Confesses"]],
    ["How did Ricky react when he discovered Janine was responsible for Barry's death?", "He disowned her", ["He became her accomplice", "He proposed to Natalie", "He bought her a house"], "Medium", "Barry And Janine", ["Ricky Disowns Janine", "Family Break"]],
    ["Which former wife of Barry demanded answers about his suspicious death?", "Natalie Evans", ["Laura Beale", "Sharon Watts", "Kate Mitchell"], "Easy", "Barry And Janine", ["Natalie Suspects Janine", "Barry Aftermath"]],
    ["What type of shoes did Janine famously suggest Barry should have worn?", "Slip-on shoes", ["Wellington boots", "Trainers", "Hiking sandals"], "Medium", "Barry And Janine", ["Slip On Shoes Remark", "Janine Callous Comment"]],

    // LAURA'S DEATH AND JANINE'S ARREST (10)
    ["Which former wife of Ian Beale died after falling down the stairs in April?", "Laura Beale", ["Melanie Owen", "Cindy Beale", "Natalie Evans"], "Easy", "Laura And Janine", ["Laura Death", "April 2004"]],
    ["What caused Laura Beale to trip before her fatal fall?", "One of Bobby's toys", ["A loose stair carpet", "A spilled drink", "A broken banister"], "Medium", "Laura And Janine", ["Bobby Toy", "Accidental Fall"]],
    ["Which Walford resident found Laura's body?", "Pat Evans", ["Peggy Mitchell", "Pauline Fowler", "Dot Branning"], "Medium", "Laura And Janine", ["Pat Finds Laura", "Death Discovery"]],
    ["Which woman had a fierce confrontation with Laura shortly before Laura died?", "Janine Butcher", ["Kate Mitchell", "Yolande Trueman", "Sharon Watts"], "Easy", "Laura And Janine", ["Laura Janine Fight", "Police Suspicion"]],
    ["Was Laura's fatal fall ultimately an accident or a deliberate killing?", "An accident", ["A planned murder", "A staged suicide", "A robbery gone wrong"], "Medium", "Laura And Janine", ["Accidental Death", "False Murder Charge"]],
    ["Which woman was arrested on suspicion of murdering Laura?", "Janine Butcher", ["Pat Evans", "Kate Mitchell", "Kat Moon"], "Easy", "Laura And Janine", ["Janine Arrested", "Laura Murder Accusation"]],
    ["Which month saw Janine arrested following Laura's death?", "May", ["January", "July", "November"], "Medium", "Laura And Janine", ["May 2004 Arrest", "Janine Departure"]],
    ["Who gave misleading evidence that helped put Janine under suspicion for Laura's death?", "Pat Evans", ["Pauline Fowler", "Dot Branning", "Sonia Fowler"], "Medium", "Laura And Janine", ["Pat Misleads Police", "Evidence Against Janine"]],
    ["What earlier crime had Janine confessed to Pat before Laura's death?", "Killing Barry Evans", ["Robbing the Queen Vic", "Setting fire to E20", "Kidnapping Louise"], "Medium", "Laura And Janine", ["Janine Confesses Barry Death", "Pat Knows Truth"]],
    ["Which baby was left without his mother after Laura's fatal fall?", "Bobby Beale", ["Jack Evans", "Freddie Slater", "Louise Mitchell"], "Easy", "Laura And Janine", ["Bobby Loses Mother", "Beale Family Tragedy"]],

    // LITTLE MO, GRAHAM AND FREDDIE (10)
    ["Which Slater family member discovered she was pregnant following Graham Foster's assault?", "Little Mo", ["Kat", "Zoe", "Lynne"], "Easy", "Little Mo And Freddie", ["Little Mo Pregnancy", "Assault Aftermath"]],
    ["Who was the biological father of Little Mo's baby Freddie?", "Graham Foster", ["Billy Mitchell", "Trevor Morgan", "Alfie Moon"], "Easy", "Little Mo And Freddie", ["Freddie Biological Father", "Graham Foster"]],
    ["What decision did Little Mo make about her pregnancy despite family opposition?", "She decided to keep the baby", ["She decided to leave the country", "She arranged an adoption abroad", "She told no one about it"], "Medium", "Little Mo And Freddie", ["Pregnancy Decision", "Little Mo Determination"]],
    ["Which Mitchell struggled to accept Little Mo's decision about her baby?", "Billy Mitchell", ["Phil Mitchell", "Grant Mitchell", "Ben Mitchell"], "Easy", "Little Mo And Freddie", ["Billy Marriage Breakdown", "Pregnancy Conflict"]],
    ["What first name did Little Mo give her baby son?", "Freddie", ["Jamie", "Harry", "Spencer"], "Easy", "Little Mo And Freddie", ["Freddie Birth Name", "Baby Son"]],
    ["During which month was Freddie born?", "September", ["March", "June", "December"], "Medium", "Little Mo And Freddie", ["September 2004 Birth", "Freddie Date"]],
    ["Which month did Little Mo return to Walford for Graham Foster's trial?", "November", ["February", "May", "August"], "Medium", "Little Mo And Freddie", ["November 2004 Trial", "Little Mo Return"]],
    ["For which offence was Graham Foster tried in the autumn?", "Rape", ["Kidnapping", "Arson", "Blackmail"], "Easy", "Little Mo And Freddie", ["Graham Rape Trial", "Court Proceedings"]],
    ["What verdict did the court reach against Graham Foster?", "Guilty", ["Not guilty", "No verdict", "Case dismissed"], "Medium", "Little Mo And Freddie", ["Graham Convicted", "Trial Result"]],
    ["Who was unable to bond with baby Freddie even after Graham's conviction?", "Billy Mitchell", ["Charlie Slater", "Garry Hobbs", "Patrick Trueman"], "Medium", "Little Mo And Freddie", ["Billy Struggles With Freddie", "Marriage Strain"]],

    // CHRISSIE, DEN AND KATE (10)
    ["Which new character arrived in Walford as Den Watts's wife?", "Chrissie Watts", ["Kate Morton", "Yolande Duke", "Jane Collins"], "Easy", "Chrissie And Kate", ["Chrissie Arrival", "Den Wife"]],
    ["Which actress first portrayed Chrissie Watts?", "Tracy-Ann Oberman", ["Jill Halfpenny", "Laurie Brett", "Gerry Cowper"], "Medium", "Chrissie And Kate", ["Tracy Ann Oberman", "Chrissie Casting"]],
    ["Which month did Chrissie Watts make her EastEnders debut?", "April", ["January", "August", "December"], "Medium", "Chrissie And Kate", ["April 2004 Arrival", "Chrissie Debut Date"]],
    ["In which country had Chrissie lived with Den before coming to Walford?", "Spain", ["Portugal", "France", "Australia"], "Easy", "Chrissie And Kate", ["Den And Chrissie Spain", "Marriage Background"]],
    ["What type of business did Chrissie help Kate Mitchell run?", "A beauty salon", ["A car dealership", "A bookmaker's", "A restaurant"], "Easy", "Chrissie And Kate", ["Kate Chrissie Salon", "Hairdressing Business"]],
    ["With which former police officer did Den Watts have an affair?", "Kate Mitchell", ["Sharon Watts", "Yolande Trueman", "Pauline Fowler"], "Easy", "Chrissie And Kate", ["Den Kate Affair", "Betrayal"]],
    ["What did Chrissie do to Kate's hair after discovering the affair?", "Cut most of it off", ["Dyed it green", "Set it on fire", "Shaved a single eyebrow"], "Medium", "Chrissie And Kate", ["Chrissie Ruins Haircut", "July Revenge"]],
    ["What did Chrissie smash while taking revenge at Kate's salon?", "Mirrors", ["Televisions", "Car windows", "Cash registers"], "Medium", "Chrissie And Kate", ["Salon Mirrors Smashed", "Chrissie Revenge"]],
    ["Which business had Den sold in Spain without properly consulting Chrissie?", "Their bar", ["Their car showroom", "Their farm", "Their hotel"], "Medium", "Chrissie And Kate", ["Spanish Bar Sold", "Chrissie Marriage Conflict"]],
    ["What did Chrissie threaten Den with if he was unfaithful again after their reconciliation?", "She would kill him", ["She would report him for tax evasion", "She would buy the Arches", "She would send him to America"], "Medium", "Chrissie And Kate", ["Chrissie Warning", "Reconciliation"]],

    // SHARON, DENNIS, ZOE AND DEN (10)
    ["Which two members of Den's family became romantically involved despite being related through Den?", "Sharon and Dennis", ["Sharon and Vicki", "Dennis and Vicki", "Vicki and Spencer"], "Easy", "Sharon Dennis And Zoe", ["Sharon Dennis Romance", "Adoptive Family Conflict"]],
    ["Which father tried to break up Sharon and Dennis's relationship?", "Den Watts", ["Charlie Slater", "Jim Branning", "Patrick Trueman"], "Easy", "Sharon Dennis And Zoe", ["Den Opposes Romance", "Family Interference"]],
    ["What kind of special episode centred on Den confronting Dennis in the spring?", "A two-hander", ["A musical", "A live episode", "A silent film"], "Medium", "Sharon Dennis And Zoe", ["Den Dennis Two Hander", "April Confrontation"]],
    ["Which Slater daughter became Dennis's girlfriend while he was apart from Sharon?", "Zoe Slater", ["Lynne Slater", "Kat Slater", "Little Mo"], "Easy", "Sharon Dennis And Zoe", ["Dennis Zoe Relationship", "Love Triangle"]],
    ["Which newly arrived Slater warned Zoe about Sharon and Dennis's renewed closeness?", "Stacey Slater", ["Belinda Peacock", "Mo Harris", "Lynne Hobbs"], "Medium", "Sharon Dennis And Zoe", ["Stacey Tells Zoe", "December Secret"]],
    ["Who encouraged Zoe to pretend she was expecting Dennis's baby?", "Den Watts", ["Charlie Slater", "Alfie Moon", "Andy Hunter"], "Medium", "Sharon Dennis And Zoe", ["Den Creates Pregnancy Lie", "Christmas Manipulation"]],
    ["What lie did Zoe tell Dennis to stop him leaving her at Christmas?", "That she was pregnant", ["That she had inherited the pub", "That she had married Andy", "That she was moving to Spain"], "Easy", "Sharon Dennis And Zoe", ["Zoe False Pregnancy", "Dennis Trapped"]],
    ["Which Watts daughter left Walford with Sharon at Christmas?", "Vicki Fowler", ["Michelle Fowler", "Chrissie Watts", "Kate Mitchell"], "Easy", "Sharon Dennis And Zoe", ["Vicki Leaves With Sharon", "Christmas Departure"]],
    ["Which brother remained in Walford when Sharon left at the end of the year?", "Dennis Rickman", ["Spencer Moon", "Mickey Miller", "Martin Fowler"], "Easy", "Sharon Dennis And Zoe", ["Dennis Stays", "Watts Family Split"]],
    ["Which month saw Sharon and Zoe clash over Dennis in the Queen Vic?", "November", ["March", "June", "September"], "Medium", "Sharon Dennis And Zoe", ["November 2004 Fight", "Sharon Zoe Confrontation"]],

    // KAT, ALFIE AND NANA MOON (10)
    ["Which gangster coerced Kat into sleeping with him during her marriage to Alfie?", "Andy Hunter", ["Jack Dalton", "Den Watts", "Paul Trueman"], "Easy", "Kat Alfie And Nana", ["Andy Coerces Kat", "May 2004"]],
    ["Why did Kat agree to Andy Hunter's demand?", "To settle money owed to him", ["To win a singing contest", "To get a job at the Vic", "To buy a car from him"], "Medium", "Kat Alfie And Nana", ["Andy Debt Blackmail", "Kat Protects Alfie"]],
    ["Which Moon discovered Kat's secret involvement with Andy?", "Alfie Moon", ["Spencer Moon", "Jake Moon", "Danny Moon"], "Easy", "Kat Alfie And Nana", ["Alfie Learns Affair", "Marriage Strain"]],
    ["Which episode format focused on Kat and Alfie talking through the revelation in May?", "A two-hander", ["A live episode", "A musical episode", "A documentary"], "Medium", "Kat Alfie And Nana", ["Kat Alfie Two Hander", "May Marriage Fallout"]],
    ["Which man became engaged to Nana Moon after meeting her on holiday?", "Wilfred Atkins", ["Terry Raymond", "Jim Branning", "Patrick Trueman"], "Medium", "Kat Alfie And Nana", ["Wilfred Nana Engagement", "2004 Suitor"]],
    ["Where did Nana Moon first meet her suitor Wilfred?", "On a bus to Eastbourne", ["At the Queen Vic", "At a church wedding", "At the market"], "Medium", "Kat Alfie And Nana", ["Eastbourne Coach Trip", "Wilfred Meeting"]],
    ["Which actor portrayed Nana Moon's fiancé Wilfred Atkins?", "Dudley Sutton", ["John Bardon", "Tony Caunter", "Leslie Grantham"], "Medium", "Kat Alfie And Nana", ["Dudley Sutton", "Wilfred Actor"]],
    ["What did Wilfred steal from Nana Moon's family?", "Her late husband's war medals", ["A wedding cake", "A television set", "The Queen Vic's licence"], "Medium", "Kat Alfie And Nana", ["William Moon Medals", "Wilfred Theft"]],
    ["Who exposed Wilfred's deceit before his wedding to Nana Moon?", "Alfie Moon", ["Charlie Slater", "Den Watts", "Billy Mitchell"], "Easy", "Kat Alfie And Nana", ["Alfie Exposes Wilfred", "Wedding Cancelled"]],
    ["Which Walford resident lost money to Wilfred Atkins's con?", "Pat Evans", ["Sharon Watts", "Dot Branning", "Sonia Fowler"], "Medium", "Kat Alfie And Nana", ["Wilfred Con Pat", "Money Theft"]],

    // MARTIN, SONIA AND SARAH (10)
    ["Which young couple married in June after their unlikely romance developed?", "Martin Fowler and Sonia Jackson", ["Spencer Moon and Vicki Fowler", "Billy Mitchell and Little Mo", "Dennis Rickman and Zoe Slater"], "Easy", "Martin Sonia And Sarah", ["Martin Sonia Wedding", "June 2004"]],
    ["Which month did Martin Fowler and Sonia Jackson marry?", "June", ["February", "September", "December"], "Medium", "Martin Sonia And Sarah", ["June 2004 Marriage", "Wedding Month"]],
    ["Which Fowler mother was notoriously unhappy about her son's marriage to Sonia?", "Pauline Fowler", ["Michelle Fowler", "Kathy Beale", "Vicki Fowler"], "Easy", "Martin Sonia And Sarah", ["Pauline Objects", "Mother In Law Conflict"]],
    ["What did Martin and Sonia decide to do rather than organise a large traditional wedding?", "Elope", ["Marry abroad on television", "Wait five years", "Hold a surprise double wedding"], "Medium", "Martin Sonia And Sarah", ["Martin Sonia Elope", "Small Wedding"]],
    ["Which barmaid became obsessed with Martin Fowler after his wedding?", "Sarah Cairns", ["Sasha Perkins", "Kelly Taylor", "Shirley Benson"], "Easy", "Martin Sonia And Sarah", ["Sarah Stalks Martin", "September 2004 Arrival"]],
    ["At which nightclub did Martin first meet Sarah Cairns?", "Angie's Den", ["E20", "The Dagmar", "R and R"], "Medium", "Martin Sonia And Sarah", ["Angies Den Barmaid", "Martin Meets Sarah"]],
    ["Which woman did Sarah Cairns try to drive away from Martin?", "Sonia Fowler", ["Vicki Fowler", "Jane Collins", "Kat Moon"], "Easy", "Martin Sonia And Sarah", ["Sarah Targets Sonia", "Marriage Sabotage"]],
    ["What weapon did Sarah use to stab Martin during their confrontation?", "A knife", ["A screwdriver", "A broken bottle", "A knitting needle"], "Medium", "Martin Sonia And Sarah", ["Sarah Stabs Martin", "October 2004"]],
    ["What household object did Sonia use to knock Sarah unconscious?", "A fruit bowl", ["A saucepan", "A table lamp", "A vase of flowers"], "Medium", "Martin Sonia And Sarah", ["Sonia Fruit Bowl", "Sarah Stopped"]],
    ["What happened to Sarah Cairns after the attack on Martin?", "She was sent for psychiatric treatment", ["She became manager of the Vic", "She fled to Spain with Dennis", "She joined the police"], "Medium", "Martin Sonia And Sarah", ["Sarah Psychiatric Care", "Stalking Aftermath"]],

    // FAIRGROUND DISASTER, LYNNE AND JANE (10)
    ["What kind of attraction collapsed in Albert Square during June?", "A fairground", ["A circus tent", "A television studio", "A sports stadium"], "Easy", "Fairground And Jane", ["Fairground Disaster", "June 2004"]],
    ["Which month saw the Albert Square fairground disaster?", "June", ["March", "September", "December"], "Medium", "Fairground And Jane", ["June 2004 Fairground", "Disaster Date"]],
    ["Which Slater daughter suffered a miscarriage following the fairground collapse?", "Lynne Hobbs", ["Kat Moon", "Zoe Slater", "Little Mo"], "Easy", "Fairground And Jane", ["Lynne Miscarriage", "Fairground Injuries"]],
    ["Which character was Lynne married to when she lost her baby?", "Garry Hobbs", ["Alfie Moon", "Billy Mitchell", "Andy Hunter"], "Easy", "Fairground And Jane", ["Lynne Garry Marriage", "Family Tragedy"]],
    ["Which resident was trapped beneath fairground wreckage while trying to help children?", "Ian Beale", ["Den Watts", "Andy Hunter", "Phil Mitchell"], "Medium", "Fairground And Jane", ["Ian Trapped", "Fairground Rescue"]],
    ["Which new character was working on a candyfloss stall during the disaster?", "Jane Collins", ["Sasha Perkins", "Sarah Cairns", "Chrissie Watts"], "Medium", "Fairground And Jane", ["Jane Fairground Debut", "Candyfloss Stall"]],
    ["Which actress first played Jane Collins?", "Laurie Brett", ["Jill Halfpenny", "Lacey Turner", "Tracy Ann Oberman"], "Easy", "Fairground And Jane", ["Laurie Brett", "Jane Actress"]],
    ["Which businessman began a romance with newcomer Jane Collins?", "Ian Beale", ["Barry Evans", "Den Watts", "Andy Hunter"], "Easy", "Fairground And Jane", ["Ian Jane Romance", "Jane Arrival"]],
    ["What illness had afflicted Jane Collins's first husband David?", "Huntington's disease", ["Parkinson's disease", "Diabetes", "Tuberculosis"], "Medium", "Fairground And Jane", ["David Collins Illness", "Jane Previous Marriage"]],
    ["Which month saw Lynne Hobbs leave Walford after the tragedy?", "July", ["January", "April", "November"], "Medium", "Fairground And Jane", ["Lynne July Exit", "Slater Departure"]],

    // PATRICK, DOT AND THE FERREIRAS (10)
    ["Which couple married in July after meeting in Trinidad the previous year?", "Patrick Trueman and Yolande Duke", ["Martin Fowler and Sonia Jackson", "Den and Chrissie Watts", "Sam Mitchell and Andy Hunter"], "Easy", "Patrick Dot And Ferreiras", ["Patrick Yolande Wedding", "July 2004"]],
    ["Which month did Patrick and Yolande marry?", "July", ["March", "September", "December"], "Medium", "Patrick Dot And Ferreiras", ["July 2004 Wedding", "Trueman Marriage"]],
    ["Which illness did Dot Branning reveal she was battling?", "Kidney cancer", ["Lung cancer", "Heart disease", "Multiple sclerosis"], "Medium", "Patrick Dot And Ferreiras", ["Dot Cancer Diagnosis", "2004 Health Story"]],
    ["Which husband did Dot tell about her cancer diagnosis?", "Jim Branning", ["Nick Cotton", "Charlie Slater", "Den Watts"], "Easy", "Patrick Dot And Ferreiras", ["Dot Tells Jim", "August 2004 Confession"]],
    ["Which month did Dot undergo an operation during her cancer storyline?", "September", ["January", "May", "December"], "Medium", "Patrick Dot And Ferreiras", ["Dot September Operation", "Hospital Treatment"]],
    ["Which man shared a special two-person episode with Dot as she struggled with her diagnosis?", "Den Watts", ["Alfie Moon", "Phil Mitchell", "Ian Beale"], "Medium", "Patrick Dot And Ferreiras", ["Den Dot Two Hander", "August 2004"]],
    ["Which Ferreira brother needed a kidney transplant after being stabbed?", "Ronny Ferreira", ["Ash Ferreira", "Adi Ferreira", "Tariq Larousi"], "Medium", "Patrick Dot And Ferreiras", ["Ronny Kidney Transplant", "Gang Stabbing"]],
    ["Which friend revealed he was a Ferreira half-brother when he offered to donate a kidney?", "Tariq Larousi", ["Mickey Miller", "Juley Smith", "Spencer Moon"], "Medium", "Patrick Dot And Ferreiras", ["Tariq Half Brother", "Kidney Donation"]],
    ["Which Ferreira patriarch was revealed to be Tariq Larousi's father?", "Dan Ferreira", ["Patrick Trueman", "Roy Evans", "Charlie Slater"], "Medium", "Patrick Dot And Ferreiras", ["Dan Tariq Father", "Family Secret"]],
    ["What new transport business did the Ferreiras launch after their financial troubles?", "A minicab firm", ["A ferry service", "A bicycle shop", "A bus company"], "Medium", "Patrick Dot And Ferreiras", ["Toucan Cars", "Ferreira Business"]],

    // THE MILLERS AND STACEY ARRIVE (10)
    ["Which family moved into Albert Square in September and included Keith, Rosie and Demi?", "The Millers", ["The Masoods", "The Ferreiras", "The di Marcos"], "Easy", "Millers And Stacey", ["Miller Family Arrival", "September 2004"]],
    ["Which actor played Keith Miller on the family's arrival?", "David Spinx", ["Derek Martin", "Cliff Parisi", "Perry Fenwick"], "Medium", "Millers And Stacey", ["David Spinx", "Keith Actor"]],
    ["Which actress portrayed Rosie Miller?", "Gerry Cowper", ["Gerry Sundquist", "Gillian Taylforth", "Gretchen Franklin"], "Medium", "Millers And Stacey", ["Gerry Cowper", "Rosie Actress"]],
    ["Which Miller daughter became a teenage mother during the autumn?", "Demi Miller", ["Dawn Swann", "Stacey Slater", "Vicki Fowler"], "Easy", "Millers And Stacey", ["Demi Teenage Mother", "October Birth"]],
    ["Which actress played Demi Miller?", "Shana Swash", ["Lacey Turner", "Brooke Kinsella", "Natalie Cassidy"], "Medium", "Millers And Stacey", ["Shana Swash", "Demi Actress"]],
    ["What name did Demi give the baby daughter born in October?", "Aleesha", ["Louise", "Chloe", "Courtney"], "Medium", "Millers And Stacey", ["Aleesha Miller Born", "October 2004"]],
    ["Who was the biological father of Demi Miller's baby?", "Leo Taylor", ["Darren Miller", "Mickey Miller", "Spencer Moon"], "Medium", "Millers And Stacey", ["Leo Taylor", "Aleesha Father"]],
    ["Which new Slater teenager arrived in Walford in November?", "Stacey Slater", ["Belinda Slater", "Lynne Slater", "Zoe Slater"], "Easy", "Millers And Stacey", ["Stacey Arrives", "November 2004"]],
    ["Which actress made her EastEnders debut as Stacey Slater?", "Lacey Turner", ["Jessie Wallace", "Michelle Ryan", "Kacey Ainsworth"], "Easy", "Millers And Stacey", ["Lacey Turner", "Stacey Debut Casting"]],
    ["Which troubled mother of Stacey Slater first appeared towards the end of the year?", "Jean Slater", ["Mo Harris", "Rosie Miller", "Pauline Fowler"], "Medium", "Millers And Stacey", ["Jean Slater Debut", "December 2004"]],

    // SAM, DEN, PAUL AND CHRISTMAS AT THE VIC (10)
    ["Which gangster married Sam Mitchell in September?", "Andy Hunter", ["Dennis Rickman", "Jack Dalton", "Paul Trueman"], "Easy", "Sam Paul And The Vic", ["Sam Andy Wedding", "September 2004"]],
    ["Which friend of Sam tried to prevent her wedding to Andy Hunter?", "Minty Peterson", ["Garry Hobbs", "Alfie Moon", "Martin Fowler"], "Medium", "Sam Paul And The Vic", ["Minty Warns Sam", "Wedding Opposition"]],
    ["Which lawyer helped Den deceive Sam about Phil's need for money?", "Marcus Christie", ["Ritchie Stringer", "Jack Dalton", "Wilfred Atkins"], "Medium", "Sam Paul And The Vic", ["Marcus Christie Con", "Pub Sale Scheme"]],
    ["Which woman sold the Queen Vic to Den Watts at a knockdown price?", "Sam Mitchell", ["Peggy Mitchell", "Chrissie Watts", "Sharon Watts"], "Easy", "Sam Paul And The Vic", ["Sam Sells Vic", "Mitchell Pub Loss"]],
    ["Which family did Den evict from the Queen Vic on Christmas Eve?", "The Moons", ["The Slaters", "The Millers", "The Truemans"], "Easy", "Sam Paul And The Vic", ["Moon Family Evicted", "Christmas Eve 2004"]],
    ["Which businessman regained control of the Queen Vic just before Christmas?", "Den Watts", ["Phil Mitchell", "Ian Beale", "Barry Evans"], "Easy", "Sam Paul And The Vic", ["Den Reclaims Vic", "Christmas Pub Takeover"]],
    ["Which Trueman brother became an informant after being caught dealing drugs for Andy?", "Paul Trueman", ["Anthony Trueman", "Patrick Trueman", "Juley Smith"], "Medium", "Sam Paul And The Vic", ["Paul Police Informant", "Andy Drug Operation"]],
    ["Which crime boss ordered Paul Trueman's death after discovering he had informed on him?", "Andy Hunter", ["Jack Dalton", "Den Watts", "Johnny Allen"], "Easy", "Sam Paul And The Vic", ["Andy Orders Paul Killed", "December 2004"]],
    ["What kind of vehicle carried Paul away on his final journey from Walford?", "A taxi", ["A police van", "A motorbike", "A bus"], "Medium", "Sam Paul And The Vic", ["Paul Final Taxi", "Off Screen Death"]],
    ["Which two Moon cousins arrived in Walford at the very end of the year?", "Jake and Danny", ["Alfie and Spencer", "Mickey and Darren", "Peter and Steven"], "Medium", "Sam Paul And The Vic", ["Jake Moon", "Danny Moon", "December 2004 Arrivals"]]
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic, detailTags], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: "tv_" + String(8034 + index).padStart(4, "0"),
        category: "Television",
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set([
            "British Television",
            "Soaps",
            "EastEnders",
            "2004",
            topic,
            ...topicTags[topic],
            correctAnswer,
            ...detailTags
        ])],
        dailyEligible: true
    };
});

module.exports = questions;
