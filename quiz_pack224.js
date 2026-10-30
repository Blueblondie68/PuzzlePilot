// quiz_pack224.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 1986, the second year in Albert Square
// 100 questions: tv_6204 to tv_6303
// Audit: 1987 timeline question corrected; two redundant facts replaced.
// Every exported question has ten individually validated tags.
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [
    // EARLY 1986
    ["In which seaside town did Arthur and Pauline finally find their runaway son Mark?", "Southend-on-Sea", ["Brighton", "Margate", "Blackpool"], "Medium", "Early 1986"],
    ["Which Swedish woman was Mark Fowler living with when his family found him in Southend?", "Ingrid", ["Jan", "Sheena", "Hannah"], "Medium", "Early 1986"],
    ["What was the name of the Welsh friend who accompanied Mark on a visit home?", "Owen", ["Barry", "Eddie", "Harry"], "Medium", "Early 1986"],
    ["What motoring offence landed Angie Watts in court early in the year?", "Drink-driving", ["Speeding", "Driving without insurance", "Using a stolen vehicle"], "Medium", "Early 1986"],
    // DEN AND ANGIE
    ["Which woman arrived unexpectedly at the Queen Vic and caused trouble between Den and Angie?", "Jan Hammond", ["Pat Wicks", "Debbie Wilkins", "Carmel Roberts"], "Easy", "Den and Angie"],
    ["Which actress played Den Watts' mistress Jan Hammond?", "Jane How", ["Pam St. Clement", "Judith Jacob", "Shirley Cheriton"], "Medium", "Den and Angie"],

    ["What kind of workplace employed Jan Hammond?", "An art gallery", ["A hospital", "A solicitor's office", "A television studio"], "Medium", "Den and Angie"],
    ["What sort of entertainment was taking place at the Queen Vic when Jan first turned up?", "A drag performance", ["A karaoke contest", "A charity auction", "A darts tournament"], "Medium", "Den and Angie"],
    ["Which character hired drag performer John Fisher to entertain Queen Vic customers?", "Angie Watts", ["Lou Beale", "Kathy Beale", "Pauline Fowler"], "Medium", "Den and Angie"],
    ["Which Queen Vic landlady made a suicide attempt as her marriage deteriorated?", "Angie Watts", ["Pat Wicks", "Sue Osman", "Naima Jeffery"], "Medium", "Den and Angie"],
    ["What did Angie falsely claim about her health to stop Den leaving her?", "That she was terminally ill", ["That she was pregnant", "That she had lost her memory", "That she needed emergency surgery on her leg"], "Easy", "Den and Angie"],
    ["How long did Angie claim she had left to live?", "Six months", ["Six weeks", "One year", "Two months"], "Easy", "Den and Angie"],

    ["Which couple featured in EastEnders' first two-character episode?", "Den and Angie Watts", ["Arthur and Pauline Fowler", "Ali and Sue Osman", "Pete and Kathy Beale"], "Easy", "Den and Angie"],
    ["Which Italian city did Den and Angie visit on their second honeymoon?", "Venice", ["Rome", "Florence", "Naples"], "Easy", "Den and Angie"],
    ["On which famous train did Angie admit that her terminal illness was a lie?", "The Orient Express", ["The Flying Scotsman", "The Eurostar", "The Royal Scotsman"], "Medium", "Den and Angie"],
    ["Who overheard Angie's confession that she was not dying?", "Den Watts", ["Sharon Watts", "Jan Hammond", "Pete Beale"], "Easy", "Den and Angie"],
    ["What did Den hand Angie during the soap's famous Christmas episode?", "Divorce papers", ["The deeds to the pub", "A plane ticket", "An adoption certificate"], "Easy", "Den and Angie"],
    ["Which famous line did Den deliver when he handed Angie her Christmas surprise?", "Happy Christmas, Ange", ["Here's to the future, Ange", "Time to go, Angie", "Cheers to us, Ange"], "Easy", "Den and Angie"],

    ["Which family member chose to leave the Queen Vic with Angie after the Christmas divorce confrontation?", "Sharon Watts", ["Michelle Fowler", "Jan Hammond", "Kathy Beale"], "Medium", "Den and Angie"],
    // MICHELLE AND LOFTY
    ["What was the name of Michelle Fowler's baby daughter?", "Vicki", ["Annie", "Cassie", "Donna"], "Easy", "Michelle and Lofty"],
    ["Which Albert Square barman offered to marry Michelle and help raise her daughter?", "Lofty Holloway", ["Simon Wicks", "Kelvin Carpenter", "Roy Quick"], "Easy", "Michelle and Lofty"],
    ["Which medical condition prevented Lofty from becoming a traffic warden?", "Asthma", ["Epilepsy", "Arthritis", "Diabetes"], "Medium", "Michelle and Lofty"],
    ["Which friend of Michelle's was set to be a bridesmaid at her wedding to Lofty?", "Sharon Watts", ["Mary Smith", "Naima Jeffery", "Sue Osman"], "Easy", "Michelle and Lofty"],
    ["Who was Lofty Holloway's beloved aunt who attended his wedding celebrations?", "Aunt Irene", ["Aunt Ethel", "Aunt Lou", "Aunt Hannah"], "Medium", "Michelle and Lofty"],

    ["Which actress played Lofty Holloway's Aunt Irene?", "Katherine Parr", ["Anna Wing", "Gretchen Franklin", "June Brown"], "Medium", "Michelle and Lofty"],
    ["What did Michelle do when she was supposed to marry Lofty in front of their families?", "She left him at the altar", ["She married Den instead", "She fainted and was hospitalised", "She announced she was moving abroad"], "Easy", "Michelle and Lofty"],
    ["What did Michelle and Lofty later do after their first wedding was abandoned?", "They married quietly in secret", ["They moved to Spain together", "They adopted a second child", "They agreed never to see each other again"], "Easy", "Michelle and Lofty"],
    ["Which man visited Michelle before her planned wedding and gave her a necklace?", "Den Watts", ["Pete Beale", "Roy Quick", "Ali Osman"], "Medium", "Michelle and Lofty"],
    ["Which venue did Den offer the Fowlers for Michelle's wedding reception?", "The Queen Victoria", ["The café", "The community centre", "The Dagmar"], "Medium", "Michelle and Lofty"],
    ["Which song did heartbroken Lofty repeatedly play after Michelle jilted him?", "Every Loser Wins", ["Something Outa Nothing", "Anyone Can Fall in Love", "True Blue"], "Medium", "Michelle and Lofty"],

    ["Who realised that Den was Vicki's father after seeing him give money to Michelle?", "Pauline Fowler", ["Angie Watts", "Ethel Skinner", "Kathy Beale"], "Medium", "Michelle and Lofty"],
    // ARTHUR'S CRISIS
    ["What savings fund did Arthur Fowler take money from to help pay family expenses?", "The Christmas Club", ["The Market Traders' Fund", "The Youth Club", "The Pub Lottery"], "Easy", "Arthur's Crisis"],
    ["Which family celebration contributed to Arthur's financial troubles?", "Michelle's wedding", ["Mark's engagement", "Lou's birthday", "Martin's christening abroad"], "Medium", "Arthur's Crisis"],
    ["Who had been trusted to look after the neighbours' Christmas savings?", "Arthur Fowler", ["Pete Beale", "Ali Osman", "Den Watts"], "Easy", "Arthur's Crisis"],
    ["What did Arthur pretend had happened to explain why Christmas Club money was missing?", "A burglary", ["A bank closure", "A house fire", "A lost wallet"], "Easy", "Arthur's Crisis"],
    ["What crime led to Arthur Fowler's arrest?", "Stealing the Christmas Club money", ["Robbing the Queen Vic", "Forging a passport", "Selling stolen cars"], "Medium", "Arthur's Crisis"],

    ["What mental health crisis overwhelmed Arthur as the pressure became unbearable?", "A nervous breakdown", ["Memory loss", "A panic about flying", "A fear of open spaces"], "Easy", "Arthur's Crisis"],
    ["What did Arthur do to the family's living room during his Christmas breakdown?", "He smashed up the decorations and furniture", ["He painted the walls black", "He set up a market stall", "He filled it with soil"], "Medium", "Arthur's Crisis"],
    ["Which Beale family matriarch's home was the scene of Arthur's Christmas breakdown?", "Lou Beale's", ["Ethel Skinner's", "Pat Wicks'", "Naima Jeffery's"], "Medium", "Arthur's Crisis"],
    ["Which new elderly resident became Arthur's rival over vegetables grown on the allotments?", "Tom Clements", ["Charlie Cotton", "James Willmott-Brown", "Roy Quick"], "Medium", "Arthur's Crisis"],
    ["Which vegetable did Tom Clements take from Arthur Fowler's allotment and enter in a show?", "Leeks", ["Potatoes", "Carrots", "Cabbages"], "Medium", "Arthur's Crisis"],
    // PAT WICKS
    ["Which future EastEnders legend first arrived in Albert Square as Pat Wicks?", "Pat Butcher", ["Dot Cotton", "Cindy Beale", "Peggy Mitchell"], "Easy", "Pat Wicks"],

    ["Which actress played Pat Wicks from her first appearance?", "Pam St. Clement", ["Gillian Taylforth", "Anita Dobson", "Wendy Richard"], "Easy", "Pat Wicks"],
    ["Who was Pat Wicks' former husband among the original Walford residents?", "Pete Beale", ["Arthur Fowler", "Den Watts", "Tony Carpenter"], "Easy", "Pat Wicks"],
    ["Which young musician was Pat Wicks' son?", "Simon Wicks", ["Kelvin Carpenter", "Ian Beale", "Harry Reynolds"], "Easy", "Pat Wicks"],
    ["What revelation did Pat make to Pete Beale about her son Simon?", "That Pete was not Simon's father", ["That Simon had secretly married", "That Simon had joined the police", "That Simon owned the Queen Vic"], "Easy", "Pat Wicks"],
    ["Which Beale relative did Lou suspect might be Simon Wicks' father?", "Kenny Beale", ["Arthur Fowler", "Ian Beale", "Tom Clements"], "Medium", "Pat Wicks"],
    ["Which local cab operator became involved in exploiting Pat after her return to Walford?", "Mehmet Osman", ["Ali Osman", "Roy Quick", "Pete Beale"], "Medium", "Pat Wicks"],

    ["Which young mother did Pat encourage to become involved in sex work?", "Mary Smith", ["Sue Osman", "Michelle Fowler", "Sharon Watts"], "Medium", "Pat Wicks"],
    ["Which Queen Vic landlord had been romantically involved with Pat before she came to the Square?", "Den Watts", ["Eddie Royle", "Grant Mitchell", "Frank Butcher"], "Medium", "Pat Wicks"],
    ["Which brewery manager did Pat repeatedly try to charm after he arrived in Walford?", "James Willmott-Brown", ["Charlie Cotton", "Dr Legg", "Roy Quick"], "Medium", "Pat Wicks"],
    // THE BANNED
    ["What was the name of the pop group formed by the younger Walford residents?", "The Banned", ["The Eastenders", "The Square", "The Locals"], "Easy", "The Banned"],
    ["Which pub hosted the band's troublesome early performance?", "The Queen Victoria", ["The Dagmar", "The Rovers Return", "The Albert"], "Easy", "The Banned"],
    ["Why did the musicians adopt the name The Banned?", "Den threw them out of the Queen Vic", ["They were banned from the charts", "They were banned from a school contest", "They had lost their instruments"], "Medium", "The Banned"],

    ["Which young Walford resident was the group's singer before going solo?", "Simon Wicks", ["Lofty Holloway", "Mark Fowler", "Nick Cotton"], "Easy", "The Banned"],
    ["Who played lead guitar in The Banned?", "Eddie Hunter", ["Harry Reynolds", "Ian Beale", "Kelvin Carpenter"], "Medium", "The Banned"],
    ["Which Carpenter family member belonged to The Banned?", "Kelvin Carpenter", ["Tony Carpenter", "Hannah Carpenter", "Cassie Carpenter"], "Easy", "The Banned"],
    ["Which Watts family member joined The Banned?", "Sharon Watts", ["Angie Watts", "Den Watts", "Jan Hammond"], "Easy", "The Banned"],
    ["Which politically outspoken band member clashed repeatedly with Simon Wicks?", "Harry Reynolds", ["Eddie Hunter", "Ian Beale", "Lofty Holloway"], "Medium", "The Banned"],
    ["Which song did Simon Wicks write for the band before leaving the group?", "Something Outa Nothing", ["Every Loser Wins", "Anyone Can Fall in Love", "Let's Get Together"], "Medium", "The Banned"],

    ["Who sabotaged The Banned's performance at a music competition?", "Harry Reynolds", ["Kelvin Carpenter", "Sharon Watts", "Ian Beale"], "Medium", "The Banned"],
    ["Which song sung by Wicksy became a real-life number-one hit for Nick Berry?", "Every Loser Wins", ["Anyone Can Fall in Love", "Something Outa Nothing", "True Blue"], "Easy", "The Banned"],
    // ANDY AND DEBBIE
    ["Which nurse died while saving a child from an oncoming lorry?", "Andy O'Brien", ["Dr Legg", "Tony Carpenter", "Roy Quick"], "Easy", "Andy and Debbie"],
    ["What kind of vehicle struck and killed Andy O'Brien?", "A lorry", ["A motorbike", "A bus", "A taxi"], "Easy", "Andy and Debbie"],
    ["Whose life was Andy trying to save when he was killed?", "A young child", ["His girlfriend", "An elderly neighbour", "A fellow nurse"], "Easy", "Andy and Debbie"],
    ["Which woman was engaged to Andy O'Brien before his death?", "Debbie Wilkins", ["Sue Osman", "Carmel Roberts", "Naima Jeffery"], "Easy", "Andy and Debbie"],

    ["Which police officer had been trying to win Debbie Wilkins' affection?", "Roy Quick", ["Terry Rich", "Jack Branning", "Charlie Cotton"], "Medium", "Andy and Debbie"],
    ["What bitter phrase had Debbie said to Andy shortly before his fatal accident?", "Drop dead", ["Don't come back", "Get lost forever", "I never loved you"], "Medium", "Andy and Debbie"],
    ["What happened to Andy O'Brien's kidneys after he died?", "They were donated for transplant", ["They were donated to medical research", "They were sent overseas for testing", "They were preserved by the hospital"], "Medium", "Andy and Debbie"],
    ["Which young mother did Andy O'Brien help learn to read?", "Mary Smith", ["Michelle Fowler", "Sharon Watts", "Naima Jeffery"], "Medium", "Andy and Debbie"],
    ["Which shopkeeper took Debbie Wilkins in after Andy's death?", "Naima Jeffery", ["Kathy Beale", "Sue Osman", "Angie Watts"], "Medium", "Andy and Debbie"],
    // SUE OSMAN
    ["What type of pregnancy did Sue Osman experience while grieving for her son Hassan?", "A phantom pregnancy", ["A multiple pregnancy", "An ectopic pregnancy", "A concealed pregnancy"], "Medium", "Sue Osman"],

    ["To whom did Sue confide that she had experienced a phantom pregnancy?", "Michelle Fowler", ["Angie Watts", "Pat Wicks", "Lou Beale"], "Medium", "Sue Osman"],
    ["Whose daughter did Sue Osman desperately want to raise after losing Hassan?", "Michelle Fowler's", ["Kathy Beale's", "Hannah Carpenter's", "Naima Jeffery's"], "Medium", "Sue Osman"],
    ["How did Michelle react when Sue became possessive about baby Vicki?", "She slapped Sue", ["She called the police", "She handed Vicki over", "She moved abroad"], "Medium", "Sue Osman"],
    ["What was the name of the cab firm Ali and Mehmet Osman opened?", "Ozcabs", ["Walford Cars", "Metro Cabs", "Capital Taxis"], "Medium", "Sue Osman"],
    ["What did Ali and Sue consider doing after struggling to have another child?", "Adopting a child", ["Moving to Australia", "Closing the café permanently", "Opening a nursery"], "Easy", "Sue Osman"],
    // COLIN AND BARRY
    ["Which new Walford resident became one of British soap's early openly gay male characters?", "Colin Russell", ["Simon Wicks", "Tony Carpenter", "James Willmott-Brown"], "Easy", "Colin and Barry"],

    ["Which actor played Colin Russell?", "Michael Cashman", ["Gary Hailes", "William Boyde", "Donald Tandy"], "Medium", "Colin and Barry"],
    ["What was Colin Russell's profession?", "Graphic designer", ["Solicitor", "Doctor", "Taxi driver"], "Medium", "Colin and Barry"],
    ["What was the name of Colin Russell's younger boyfriend?", "Barry Clark", ["Harry Reynolds", "Eddie Hunter", "Kelvin Carpenter"], "Easy", "Colin and Barry"],
    ["Which actor played Barry Clark?", "Gary Hailes", ["Michael Cashman", "John Altman", "Nick Berry"], "Medium", "Colin and Barry"],
    ["What sort of work did Barry Clark do when he first appeared?", "Market trader", ["Bank manager", "Police constable", "Schoolteacher"], "Medium", "Colin and Barry"],
    ["Where had Colin met Barry before Barry's first appearance in Walford?", "At a gay club", ["At a hospital", "On a train", "At a football match"], "Medium", "Colin and Barry"],

    // CARMEL AND KELVIN
    ["Which health visitor became involved with teenager Kelvin Carpenter?", "Carmel Roberts", ["Jan Hammond", "Debbie Wilkins", "Pat Wicks"], "Medium", "Carmel and Kelvin"],
    ["Which actress played health visitor Carmel Roberts?", "Judith Jacob", ["Pam St. Clement", "Jane How", "Shirley Cheriton"], "Medium", "Carmel and Kelvin"],
    // 1986 MILESTONES
    ["Which Fowler family member won Walford's Glamorous Granny competition?", "Pauline Fowler", ["Lou Beale", "Ethel Skinner", "Dot Cotton"], "Medium", "1986 Milestones"],
    ["Which actress released the EastEnders theme-based single 'Anyone Can Fall in Love'?", "Anita Dobson", ["Wendy Richard", "Susan Tully", "Gillian Taylforth"], "Medium", "1986 Milestones"],
    // CARMEL AND KELVIN
    ["Which politically radical college friend also dated Kelvin Carpenter?", "Tessa Parker", ["Jan Hammond", "Mary Smith", "Naima Jeffery"], "Medium", "Carmel and Kelvin"],
    // CHARLIE COTTON
    ["What was the name of Dot Cotton's estranged husband who appeared in Walford?", "Charlie Cotton", ["Tom Clements", "James Willmott-Brown", "Harry Reynolds"], "Easy", "Charlie Cotton"],

    ["Which actor played Charlie Cotton?", "Christopher Hancock", ["John Altman", "Donald Tandy", "Ross Davidson"], "Medium", "Charlie Cotton"],
    ["Which notorious Walford resident was Charlie Cotton's son?", "Nick Cotton", ["Simon Wicks", "Mark Fowler", "Kelvin Carpenter"], "Easy", "Charlie Cotton"],
    ["What kind of dishonest behaviour was Charlie Cotton notorious for?", "Conning people and bigamy", ["Counterfeiting paintings", "Running illegal horse races", "Forging exam results"], "Medium", "Charlie Cotton"],
    // NEW ARRIVALS
    ["Which brewery manager arrived in Walford and later bought Debbie Wilkins' house?", "James Willmott-Brown", ["Brad Williams", "Charlie Cotton", "Brian Wicks"], "Medium", "New Arrivals"],
    ["Which actor played James Willmott-Brown?", "William Boyde", ["Michael Cashman", "Donald Tandy", "Christopher Hancock"], "Medium", "New Arrivals"],
    ["What was the name of the brewery that employed James Willmott-Brown?", "Luxford and Copley", ["Newton and Ridley", "Davenport's", "Hopkins and Sons"], "Medium", "New Arrivals"],

    ["Which army veteran began working as a potman at the Queen Vic?", "Tom Clements", ["Charlie Cotton", "Roy Quick", "Pete Beale"], "Medium", "New Arrivals"],
    ["Which actor played potman Tom Clements?", "Donald Tandy", ["Bill Treacher", "William Boyde", "Peter Dean"], "Medium", "New Arrivals"],
    ["Which doctor joined Dr Legg's surgery as a locum?", "Dr Jaggat Singh", ["Dr Yusef Khan", "Dr May Wright", "Dr Anthony Trueman"], "Medium", "New Arrivals"],
    ["Which cousin arrived to help Naima Jeffery run First til Last?", "Rezaul Kabir", ["Farrukh Khan", "Saeed Jeffery", "Mehmet Osman"], "Medium", "New Arrivals"],
];

// Category and storyline context tags are shared; individual fact tags are
// assigned by question index and expanded before export.
const topicContextTags = {
    "Early 1986": ["Second Series", "Walford Winter Events"],
    "Den and Angie": ["Watts Marriage Crisis", "Queen Victoria Household"],
    "Michelle and Lofty": ["Michelle Fowler And Lofty Holloway", "Marriage And Parenthood"],
    "Arthur's Crisis": ["Arthur Fowler Breakdown", "Christmas Club Scandal"],
    "Pat Wicks": ["Pat Wicks Arrival", "Beale And Wicks Family"],
    "The Banned": ["Walford Pop Group", "Wicksy Music Storyline"],
    "Andy and Debbie": ["Andy OBrien Death", "Debbie Wilkins Grief"],
    "Sue Osman": ["Ali And Sue Osman", "Hassan Osman Aftermath"],
    "Colin and Barry": ["Colin Russell And Barry Clark", "Early Gay Representation"],
    "Carmel and Kelvin": ["Carmel Roberts And Kelvin Carpenter", "Age Gap Relationship"],
    "1986 Milestones": ["Walford Local Events", "EastEnders Music And Culture"],
    "Charlie Cotton": ["Dot Cotton Estranged Husband", "Cotton Family"],
    "New Arrivals": ["Walford New Residents", "1986 Supporting Cast"],
};

const factSpecificTags = [
    "Southend-on-Sea | Mark Fowler Found | Runaway Son",
    "Ingrid | Mark Fowler Housemate | Swedish Girlfriend",
    "Owen Hughes | Welsh Friend | Mark Home Visit",
    "Drink-driving | Angie Watts Court Case | Motoring Charge",
    "Jan Hammond | Surprise Queen Vic Visit | Den Mistress",
    "Jane How | Jan Hammond Actress | Character Casting",
    "Art Gallery | Jan Hammond Employment | Working Life",
    "Drag Performance | Jan Hammond Arrival | Pub Entertainment",
    "Angie Watts | John Fisher Drag Act | Queen Vic Booking",
    "Angie Watts Suicide Attempt | Marital Despair | Crisis Storyline",
    "Faked Terminal Illness | Angie Watts Lie | Prevent Den Leaving",
    "Six Months | False Prognosis | Angie Watts Health Claim",
    "Den And Angie Watts | First Two-Hander | Two Character Episode",
    "Venice | Second Honeymoon | Italy Location",
    "Orient Express | Angie's Confession | Homeward Train Journey",
    "Den Watts | Overheard Health Lie | Eavesdropping Husband",
    "Divorce Papers | Christmas Day 1986 | Famous Den And Angie Scene",
    "Happy Christmas Ange | Den Watts Line | Divorce Reveal",
    "Sharon Watts | Leaves Pub With Angie | Adopted Daughter",
    "Vicki Fowler | Michelle Baby Daughter | Den Secret Child",
    "Lofty Holloway | Marriage Proposal | Raising Vicki",
    "Asthma | Lofty Traffic Warden | Medical Obstacle",
    "Sharon Watts | Michelle Bridesmaid | Wedding Plans",
    "Aunt Irene | Lofty Family Relative | Wedding Guest",
    "Katherine Parr | Aunt Irene Actress | 1986 Character",
    "Jilted At Altar | Michelle And Lofty First Wedding | Abandoned Ceremony",
    "Secret Wedding | Michelle And Lofty Later Marriage | Second Attempt",
    "Den Watts | Michelle Wedding Visit | Necklace Gift",
    "Queen Victoria | Wedding Reception Offer | Den Watts Venue",
    "Every Loser Wins | Lofty Heartbreak Song | Nick Berry Record",
    "Pauline Fowler | Learns Vicki Parentage | Den Gives Money",
    "Christmas Club | Arthur Fowler Theft | Community Savings",
    "Michelle Wedding Costs | Fowler Financial Problems | Family Celebration",
    "Arthur Fowler | Savings Fund Treasurer | Neighbour Money",
    "Faked Burglary | Missing Christmas Funds | Arthur Cover Story",
    "Christmas Club Theft | Arthur Arrest | Misappropriation",
    "Nervous Breakdown | Arthur Fowler Mental Health | Crisis Under Pressure",
    "Smashes Furniture | Arthur Christmas Breakdown | Christmas Decorations",
    "Lou Beale Home | Arthur Christmas Scene | Fowler Household",
    "Tom Clements | Allotment Rival | New Elderly Resident",
    "Leeks | Tom Clements Vegetable Theft | Allotment Show",
    "Pat Butcher | Arrived As Pat Wicks | Future Soap Legend",
    "Pam St Clement | Pat Wicks Actress | Original Casting",
    "Pete Beale | Pat Former Husband | Wicks Divorce",
    "Simon Wicks | Pat Son | Young Musician",
    "Pete Not Father | Simon Paternity Secret | Pat Revelation",
    "Kenny Beale | Simon Possible Father | Lou Suspicion",
    "Mehmet Osman | Pat Exploitation | Cab Operator",
    "Mary Smith | Pat Sex Work Suggestion | Young Mother",
    "Den Watts | Former Pat Lover | Past Relationship",
    "James Willmott-Brown | Pat Flirtation | Brewery Manager",
    "Band Called The Banned | Walford Band Name | Youth Music Project",
    "Queen Victoria | Early Band Performance | Pub Gig",
    "Den Throws Out Band | Band Naming Story | Banned From Pub",
    "Simon Wicks | Young Singer | Later Solo Artist",
    "Eddie Hunter | Lead Guitar | Band Instrument",
    "Kelvin Carpenter | Member Of Band | Carpenter Musician",
    "Sharon Watts | Band Member | Watts Singer",
    "Harry Reynolds | Radical Band Member | Dispute With Simon",
    "Something Outa Nothing | Song Composed By Wicksy | Group Original",
    "Harry Reynolds Sabotage | Music Competition | Synthesiser Incident",
    "Every Loser Wins | Nick Berry Hit Single | Wicksy Solo Song",
    "Andy OBrien | Lorry Death | Child Rescue",
    "Lorry | Andy Fatal Accident | Road Vehicle",
    "Young Child | Andy Rescue Attempt | Crossing Road",
    "Debbie Wilkins | Andy Fiancee | Couple Tragedy",
    "Roy Quick | Debbie Police Suitor | Romantic Interest",
    "Drop Dead | Debbie Last Words | Bitter Argument",
    "Kidney Donation | Andy Organ Donor | Posthumous Transplant",
    "Mary Smith | Andy Literacy Lessons | Teaching Reading",
    "Naima Jeffery | Supports Debbie | Lodging After Death",
    "Phantom Pregnancy | Sue Osman Grief | After Hassan Death",
    "Michelle Fowler | Sue Confidence | Phantom Pregnancy Disclosure",
    "Vicki Fowler | Sue Wants To Raise Baby | Michelle Daughter",
    "Slapped Sue | Michelle Angry Reaction | Vicki Custody Dispute",
    "Ozcabs | Osman Brothers Cab Firm | Local Taxi Business",
    "Adoption Plans | Osman Couple | After Hassan Loss",
    "Colin Russell | Original Openly Gay Resident | 1986 New Arrival",
    "Michael Cashman | Colin Russell Actor | Original Casting",
    "Graphic Designer | Colin Russell Occupation | Professional Work",
    "Barry Clark | Colin Younger Boyfriend | Romantic Relationship",
    "Gary Hailes | Barry Clark Actor | Original Casting",
    "Market Trader | Barry Records Stall | Bridge Street",
    "Gay Club | Colin Met Barry | Night Out",
    "Carmel Roberts | Health Visitor | Kelvin Romance",
    "Judith Jacob | Carmel Roberts Actress | Original Casting",
    "Pauline Fowler | Glamorous Granny Winner | Walford Competition",
    "Anita Dobson | Anyone Can Fall In Love | Theme Tune Single",
    "Tessa Parker | Kelvin College Girlfriend | Radical Politics",
    "Charlie Cotton Name | Dot Estranged Husband | Early Arrival",
    "Christopher Hancock | Charlie Cotton Actor | Original Casting",
    "Nick Cotton | Charlie Son | Cotton Family Relation",
    "Conning And Bigamy | Charlie Cotton Scams | Dishonest Husband",
    "James Willmott-Brown | Brewery Manager | Debbie House Buyer",
    "William Boyde | Willmott-Brown Actor | Original Casting",
    "Luxford And Copley | Brewery Name | Willmott-Brown Employer",
    "Tom Clements | Army Veteran | Queen Vic Potman",
    "Donald Tandy | Tom Clements Actor | Original Casting",
    "Dr Jaggat Singh | Locum Doctor | Harold Legg Surgery",
    "Rezaul Kabir | Naima Cousin | First Til Last Helper",
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(6204 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [
            'British Television',
            'Soaps',
            'EastEnders',
            '1986',
            topic,
            ...topicContextTags[topic],
            ...factSpecificTags[index].split(' | ')
        ],
        dailyEligible: true
    };
});

module.exports = questions;
