 // quiz_pack230.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 1992, loyalties and secrets
// 100 questions: tv_6804 to tv_6903
// Audit: contextual and individual tags added to all questions.
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [
    // SHARON, GRANT AND PHIL
    ["What did Grant Mitchell want Sharon to have while she was focused on running the Queen Vic?", "A baby", ["A second pub", "A holiday home", "A restaurant"], "Easy", "Sharon and the Mitchells"],
    ["What did Grant discover Sharon was still using despite his wish to start a family?", "Contraception", ["A false passport", "A secret bank account", "A dating agency"], "Medium", "Sharon and the Mitchells"],
    ["How did Grant react when he realised Sharon did not want a baby yet?", "He smashed up the pub", ["He sold his garage", "He moved to Scotland", "He resigned from the army"], "Easy", "Sharon and the Mitchells"],
    ["Which Mitchell brother comforted Sharon during Grant's disappearance?", "Phil Mitchell", ["Billy Mitchell", "Jamie Mitchell", "Archie Mitchell"], "Easy", "Sharon and the Mitchells"],
    ["With whom did Sharon begin a secret affair behind Grant's back?", "Phil Mitchell", ["Ricky Butcher", "Nigel Bates", "Ian Beale"], "Easy", "Sharon and the Mitchells"],
    ["Where were Sharon and Phil when their attraction finally led them to sleep together?", "The Queen Victoria", ["The launderette", "The Arches garage", "The market office"], "Medium", "Sharon and the Mitchells"],
    ["What did Grant secretly do to the Queen Victoria to try to claim insurance money?", "Set it on fire", ["Flooded the cellar", "Faked a robbery", "Sold it twice"], "Easy", "Sharon and the Mitchells"],
    ["What problem was Grant trying to solve through his insurance scam?", "Serious debts", ["A missing inheritance", "An unpaid council fine", "A stolen wedding ring"], "Medium", "Sharon and the Mitchells"],
    ["On what personal occasion did Grant set the Queen Victoria ablaze?", "Sharon's birthday", ["Their wedding anniversary", "Phil's birthday", "New Year's Eve"], "Medium", "Sharon and the Mitchells"],
    ["Which dog was nearly killed alongside Sharon in the Queen Vic fire?", "Roly", ["Willy", "Wellard", "Sugar"], "Medium", "Sharon and the Mitchells"],
    ["When forced to decide between Phil and Grant, whom did Sharon ultimately choose?", "Grant Mitchell", ["Phil Mitchell", "Nigel Bates", "Ian Beale"], "Easy", "Sharon and the Mitchells"],

    // MARK AND GILL
    ["Which former girlfriend did Mark Fowler marry during her final illness?", "Gill Robinson", ["Rachel Kominski", "Disa O'Brien", "Shelley Lewis"], "Easy", "Mark and Gill"],
    ["What surname did Gill Robinson take when she married Mark?", "Fowler", ["Mitchell", "Butcher", "Beale"], "Easy", "Mark and Gill"],
    ["Which serious illness was Gill battling when she married Mark?", "AIDS", ["Tuberculosis", "Multiple sclerosis", "Diabetes"], "Easy", "Mark and Gill"],
    ["Where was Gill being cared for during the final stages of her illness?", "A hospice", ["The Queen Victoria", "The Walford surgery", "Her parents' shop"], "Medium", "Mark and Gill"],
    ["How soon after marrying Mark did Gill die?", "The following day", ["A month later", "Six months later", "Three years later"], "Medium", "Mark and Gill"],
    ["Which member of Mark's family attended his wedding to Gill?", "Michelle Fowler", ["Lou Beale", "Pete Beale", "Janine Butcher"], "Medium", "Mark and Gill"],
    ["Which of Mark's former girlfriends also attended his wedding to Gill?", "Rachel Kominski", ["Sharon Mitchell", "Cindy Beale", "Mandy Salter"], "Medium", "Mark and Gill"],
    ["Where did Mark and Gill spend their very brief honeymoon?", "A hotel", ["A cruise ship", "A farmhouse", "A caravan park"], "Medium", "Mark and Gill"],

    // ARTHUR AND CHRISTINE
    ["Which lonely woman employed Arthur Fowler to look after her garden?", "Christine Hewitt", ["Carol Hanley", "Anne Howes", "Lilian Kominski"], "Easy", "Arthur and Christine"],
    ["Which actress played Christine Hewitt?", "Elizabeth Power", ["Louise Plowright", "Jacquetta May", "Pat Coombs"], "Medium", "Arthur and Christine"],
    ["What work initially brought Arthur Fowler and Christine Hewitt together?", "Gardening", ["Catering", "Driving taxis", "Decorating the pub"], "Easy", "Arthur and Christine"],
    ["What was the name of Christine Hewitt's son?", "Jonathan", ["Steven", "Martin", "Lloyd"], "Medium", "Arthur and Christine"],
    ["Which actor played Christine Hewitt's son Jonathan?", "Jonny Lee Miller", ["Ewan McGregor", "Robert Carlyle", "Kevin McKidd"], "Medium", "Arthur and Christine"],
    ["What had Christine's son Jonathan abandoned before becoming Arthur's gardening assistant?", "College", ["A career in medicine", "An army posting", "A chef's apprenticeship"], "Medium", "Arthur and Christine"],
    ["Why did Arthur lose Jonathan Hewitt as his gardening assistant?", "He stopped turning up for work", ["He was sent to prison", "He broke his leg", "He joined the police"], "Medium", "Arthur and Christine"],
    ["Where did Jonathan Hewitt go with his friends after abandoning the gardening job?", "A festival in Scotland", ["A football match in Spain", "A holiday in France", "A wedding in Wales"], "Medium", "Arthur and Christine"],
    ["Who took over Jonathan Hewitt's gardening duties for Arthur?", "Christine Hewitt", ["Pauline Fowler", "Dot Cotton", "Mandy Salter"], "Medium", "Arthur and Christine"],
    ["Which country did Pauline Fowler visit to care for her injured brother Kenny?", "New Zealand", ["Australia", "Canada", "Ireland"], "Easy", "Arthur and Christine"],
    ["What had happened to Kenny Beale that prompted Pauline's journey abroad?", "A car crash", ["A house fire", "A heart attack", "A boating accident"], "Medium", "Arthur and Christine"],
    ["Which market trader briefly took Christine Hewitt out while she was drawn to Arthur?", "Pete Beale", ["Frank Butcher", "Richard Cole", "Nigel Bates"], "Medium", "Arthur and Christine"],
    ["What did Pauline find that showed Christine Hewitt had feelings for Arthur?", "A letter and photograph", ["A wedding invitation", "A signed confession", "A hotel bill"], "Medium", "Arthur and Christine"],
    ["On which holiday eve did Arthur's relationship with Christine become an affair?", "Christmas Eve", ["New Year's Eve", "Easter Saturday", "Bonfire Night"], "Medium", "Arthur and Christine"],

    // PAT, FRANK AND THE BUTCHERS
    ["What was the name of Pat Butcher's new taxi business?", "Pat Cabs", ["Walford Cars", "Butcher Taxis", "East End Express"], "Easy", "Pat and Frank"],
    ["Which family business did the Butchers have to sell as their finances worsened?", "Their bed and breakfast", ["The Queen Victoria", "The launderette", "The Arches"], "Easy", "Pat and Frank"],
    ["Which property investor bought Frank Butcher's house and bed and breakfast?", "Charles Raymond", ["Richard Cole", "Kevin Masters", "Gregory Mantel"], "Medium", "Pat and Frank"],
    ["Which expensive car did Frank Butcher try to sell during his money troubles?", "A Mercedes", ["A Rolls-Royce", "A Porsche", "A Jaguar"], "Medium", "Pat and Frank"],
    ["Where did Pat initially run her cab firm's office?", "A Portakabin", ["The launderette", "A market stall", "The Queen Victoria cellar"], "Medium", "Pat and Frank"],
    ["Which young woman was knocked down by Pat Butcher's car at Christmas?", "Stephanie Watson", ["Mandy Salter", "Hattie Tavernier", "Disa O'Brien"], "Easy", "Pat and Frank"],
    ["What work was Pat doing when she struck a pedestrian with her car?", "Driving a taxi", ["Delivering newspapers", "Driving an ambulance", "Taking a driving test"], "Easy", "Pat and Frank"],
    ["What did the breathalyser test show after Pat's collision?", "She was over the drink-driving limit", ["She had taken illegal drugs", "She had not consumed alcohol", "She had no driving licence"], "Medium", "Pat and Frank"],
    ["What happened to Stephanie Watson after she was taken to hospital?", "She died from her injuries", ["She moved to America", "She made a full recovery", "She lost her memory and disappeared"], "Medium", "Pat and Frank"],
    ["Which elderly Butcher relative died after a long illness?", "Mo Butcher", ["Joan Garwood", "Pat Butcher", "Clare Butcher"], "Easy", "Pat and Frank"],

    // MANDY SALTER
    ["Which troubled teenage newcomer was left in Pat Butcher's care by her mother?", "Mandy Salter", ["Diane Butcher", "Disa O'Brien", "Hattie Tavernier"], "Easy", "Mandy Salter"],
    ["Which actress first portrayed Mandy Salter?", "Nicola Stapleton", ["Sophie Lawrence", "Michelle Gayle", "Danniella Westbrook"], "Easy", "Mandy Salter"],
    ["Which of the Butchers was Mandy Salter's first friend in Walford?", "Sam Butcher", ["Janine Butcher", "Ricky Butcher", "Clare Butcher"], "Medium", "Mandy Salter"],
    ["What was the name of Mandy Salter's mother?", "Lorraine Salter", ["Lorraine Stevens", "Christine Hewitt", "Carol Hanley"], "Medium", "Mandy Salter"],
    ["Why did Mandy's mother initially leave her with Pat?", "She was in hospital", ["She was working abroad", "She had joined the army", "She had moved to Scotland"], "Medium", "Mandy Salter"],
    ["What secret about Ian Beale did Mandy threaten to reveal unless he gave her a job?", "He visited sex workers", ["He owned stolen cars", "He was secretly married", "He had sold the café"], "Medium", "Mandy Salter"],
    ["Where did Mandy Salter live after leaving the Butcher household?", "In a squat", ["In a boarding school", "On a houseboat", "In a student hall"], "Easy", "Mandy Salter"],
    ["Which Beale woman temporarily let homeless Mandy sleep on her sofa?", "Kathy Beale", ["Cindy Beale", "Pauline Fowler", "Ethel Skinner"], "Medium", "Mandy Salter"],
    ["What false accusation did Mandy spread about Kathy Beale?", "That Kathy was mistreating her", ["That Kathy had robbed the market", "That Kathy was secretly married", "That Kathy had sold the café"], "Medium", "Mandy Salter"],
    ["Where was Mandy forced to sleep after she lost her temporary homes?", "A makeshift shanty", ["The Arches office", "A hospital waiting room", "The Queen Victoria cellar"], "Medium", "Mandy Salter"],
    ["Which actress played Mandy Salter's mother before later playing Shirley Carter?", "Linda Henry", ["Pam St Clement", "June Brown", "Wendy Richard"], "Medium", "Mandy Salter"],

    // NIGEL BATES
    ["Which future Walford favourite arrived as an old friend of the Mitchell brothers?", "Nigel Bates", ["Sanjay Kapoor", "Eddie Royle", "Paul Priestly"], "Easy", "Nigel Bates"],
    ["Which actor originally played Nigel Bates?", "Paul Bradley", ["Ian Reddington", "Nick Pickard", "Perry Fenwick"], "Medium", "Nigel Bates"],
    ["What car did Nigel Bates buy from Frank Butcher?", "A Mercedes", ["A Mini", "A Ford Escort", "A Rolls-Royce"], "Medium", "Nigel Bates"],
    ["Whose death preceded Nigel Bates moving to Walford permanently?", "His mother's", ["His father's", "His wife's", "His brother's"], "Medium", "Nigel Bates"],
    ["Which older Walford resident took Nigel Bates in as a lodger?", "Dot Cotton", ["Ethel Skinner", "Kathy Beale", "Pauline Fowler"], "Easy", "Nigel Bates"],
    ["Which two local men did Nigel already know when he first visited Albert Square?", "Phil and Grant Mitchell", ["Ian and Pete Beale", "Arthur and Mark Fowler", "Frank and Ricky Butcher"], "Medium", "Nigel Bates"],

    // TRICKY DICKY AND RACHEL
    ["Which new market inspector became known as Tricky Dicky?", "Richard Cole", ["Laurie Bates", "Jackie Stone", "Kevin Masters"], "Easy", "Tricky Dicky"],
    ["Which actor played Tricky Dicky Cole?", "Ian Reddington", ["Paul Bradley", "Mark Monero", "Ross Kemp"], "Medium", "Tricky Dicky"],
    ["What was Richard Cole's job in Walford?", "Market inspector", ["Garage mechanic", "Pub landlord", "Police sergeant"], "Easy", "Tricky Dicky"],
    ["Which university lecturer and market stallholder became involved with Richard Cole?", "Rachel Kominski", ["Michelle Fowler", "Sharon Mitchell", "Pat Butcher"], "Medium", "Tricky Dicky"],
    ["What nickname did residents give womanising market inspector Richard Cole?", "Tricky Dicky", ["Nasty Nick", "Dirty Den", "Lofty"], "Easy", "Tricky Dicky"],
    ["Which EastEnders scriptwriter created the character of Richard Cole?", "Tony Jordan", ["Tony Holland", "Julia Smith", "Simon Ashdown"], "Medium", "Tricky Dicky"],
    ["What sort of conduct earned Richard Cole distrust among Walford traders?", "Corruption and favouritism", ["Refusing to collect rent", "Closing the pub early", "Destroying customers' cars"], "Medium", "Tricky Dicky"],

    // KATHY AND WILLMOTT-BROWN
    ["Which man returned to Walford after serving a prison sentence for attacking Kathy Beale?", "James Willmott-Brown", ["Nick Cotton", "Brian Wicks", "Gregory Mantel"], "Easy", "Kathy Beale"],
    ["What did James Willmott-Brown send Kathy in an effort to contact her after his release?", "A cassette tape", ["A wedding ring", "A postcard from Spain", "A bouquet of lilies"], "Medium", "Kathy Beale"],
    ["Which friend accompanied Kathy to a hotel meeting with Willmott-Brown?", "Rachel Kominski", ["Ethel Skinner", "Pat Butcher", "Sharon Mitchell"], "Medium", "Kathy Beale"],
    ["What did Willmott-Brown threaten to do when Kathy refused to forgive him?", "Take his own life", ["Burn down the café", "Kidnap Ian", "Sue the market traders"], "Medium", "Kathy Beale"],
    ["What did Kathy urge Willmott-Brown to do after confronting him?", "Leave Walford", ["Buy her café", "Open another wine bar", "Visit Ian in Devon"], "Medium", "Kathy Beale"],
    ["Who did Kathy tell that their marriage was definitely over after Willmott-Brown's return?", "Pete Beale", ["Ian Beale", "Frank Butcher", "Grant Mitchell"], "Medium", "Kathy Beale"],

    // MICHELLE, CLYDE AND JACK
    ["Which Tavernier man was Michelle Fowler dating while attending college?", "Clyde Tavernier", ["Lloyd Tavernier", "Jules Tavernier", "Celestine Tavernier"], "Easy", "Michelle and Clyde"],
    ["Which student began flirting with Michelle Fowler at a college gig?", "Jack Woodman", ["Joe Wallace", "Jonathan Hewitt", "Gary Phillips"], "Medium", "Michelle and Clyde"],
    ["What did Clyde discover when he followed Michelle to a university event?", "Michelle in bed with Jack Woodman", ["Michelle working in a nightclub", "Michelle gambling with Richard", "Michelle leaving for France"], "Medium", "Michelle and Clyde"],
    ["Which of Clyde's friends accompanied him when he followed Michelle to campus?", "Grant Mitchell", ["Frank Butcher", "Arthur Fowler", "Pete Beale"], "Medium", "Michelle and Clyde"],
    ["On what festive day did Jack Woodman unexpectedly turn up to see Michelle again?", "Christmas Day", ["Easter Sunday", "New Year's Eve", "Bonfire Night"], "Medium", "Michelle and Clyde"],
    ["Which college friend of Michelle Fowler first arrived in Walford late in the year?", "Shelley Lewis", ["Eibhlin O'Donnell", "Lorraine Stevens", "Anne Howes"], "Medium", "Michelle and Clyde"],
    ["Which relationship ended after Clyde discovered Michelle's encounter with Jack?", "Michelle and Clyde's", ["Sharon and Grant's", "Frank and Pat's", "Ricky and Sam's"], "Medium", "Michelle and Clyde"],

    // PHIL AND ANNE
    ["Which woman became Phil Mitchell's girlfriend after meeting him in a curry house?", "Anne Howes", ["Christine Hewitt", "Rachel Kominski", "Shelley Lewis"], "Medium", "Phil and Anne"],
    ["Which actress played Phil Mitchell's girlfriend Anne Howes?", "Cassie Stuart", ["Elizabeth Power", "Linda Henry", "Sheila White"], "Medium", "Phil and Anne"],
    ["Where did Phil Mitchell first meet Anne Howes?", "A curry house", ["A nightclub in Soho", "The launderette", "The Walford surgery"], "Medium", "Phil and Anne"],
    ["What was the name of Anne Howes's husband?", "Terry", ["Russell", "Jonathan", "Gary"], "Medium", "Phil and Anne"],
    ["Who did Anne initially claim Terry was when Phil spotted them arguing?", "Her former boyfriend", ["Her brother", "Her employer", "Her neighbour"], "Medium", "Phil and Anne"],
    ["Why did Anne say she could not leave her husband Terry?", "She claimed he was suicidal", ["He owned the Queen Victoria", "She was expecting twins", "He had hidden her passport"], "Medium", "Phil and Anne"],
    ["What other family secret did Terry reveal to Phil about Anne?", "They had a young daughter", ["They had adopted a son", "She was his sister", "They owned a second home"], "Medium", "Phil and Anne"],
    ["Why did Phil end his relationship with Anne Howes?", "He discovered her repeated lies", ["She emigrated to Australia", "She bought a restaurant", "She had joined the police"], "Medium", "Phil and Anne"],

    // LLOYD'S TROUBLES
    ["Which Tavernier teenager was caught joyriding in a stolen car?", "Lloyd Tavernier", ["Clyde Tavernier", "Kofi Tavernier", "Hattie Tavernier"], "Easy", "Lloyd Tavernier"],
    ["Which friend stole the car taken on a joyride with Lloyd and Wesley?", "Gary Phillips", ["Nigel Bates", "Jack Woodman", "Jonathan Hewitt"], "Medium", "Lloyd Tavernier"],
    ["Which other young friend was involved in Lloyd Tavernier's joyride?", "Wesley", ["Sam Butcher", "Steve Elliot", "Mark Fowler"], "Medium", "Lloyd Tavernier"],
    ["What happened to Lloyd Tavernier after a stolen car attracted police attention?", "He was arrested", ["He escaped abroad", "He drove into the canal", "He was given a driving job"], "Medium", "Lloyd Tavernier"],
    ["What punishment did Lloyd receive after the car theft case?", "A suspended sentence", ["Life imprisonment", "A community football ban", "Deportation"], "Medium", "Lloyd Tavernier"],
    ["To which city did Lloyd Tavernier move with his parents?", "Norwich", ["Bristol", "Liverpool", "Leicester"], "Medium", "Lloyd Tavernier"],

    // OTHER WALFORD STORIES
    ["Which much-loved pet did Ethel Skinner lose after a long illness?", "Willy the dog", ["Roly the dog", "Wellard the dog", "Crush the snake"], "Easy", "Walford Neighbours"],
    ["How did Ethel respond when neighbours offered to buy her another dog?", "She refused the replacement", ["She adopted three puppies", "She gave it to Dot", "She moved to the country"], "Medium", "Walford Neighbours"],
    ["What business did Mr Papadopolous visit after inheriting it from his father?", "The launderette", ["The Queen Victoria", "The Arches garage", "The café"], "Medium", "Walford Neighbours"],
    ["Who was the long-serving launderette employee who struggled to pronounce Papadopolous?", "Dot Cotton", ["Sharon Mitchell", "Pat Butcher", "Mandy Salter"], "Easy", "Walford Neighbours"],
    ["Which demanding visitor from Rachel Kominski's family arrived unexpectedly?", "Her mother Lilian", ["Her father Joseph", "Her brother Greg", "Her aunt Joan"], "Medium", "Walford Neighbours"],
    ["What did Lilian Kominski reveal she had pressured Rachel into doing as a teenager?", "Having an abortion", ["Leaving the country", "Giving up music", "Joining the army"], "Medium", "Walford Neighbours"],
];

// Context for each storyline group.
const topicContextTags = {
    'Sharon and the Mitchells': [
        'Sharon Mitchell', 'Phil And Grant Mitchell',
        'Queen Victoria Fire And Affair'
    ],
    'Mark and Gill': [
        'Mark Fowler', 'Gill Robinson',
        'HIV And AIDS Storyline'
    ],
    'Arthur and Christine': [
        'Arthur Fowler', 'Christine Hewitt',
        'Gardening And Affair'
    ],
    'Pat and Frank': [
        'Pat Butcher', 'Frank Butcher',
        'Financial Trouble And Road Accident'
    ],
    'Mandy Salter': [
        'Mandy Salter', 'Homeless Teenager',
        'Butcher Family And Kathy Beale'
    ],
    'Nigel Bates': [
        'Nigel Bates', 'Mitchell Family Friend',
        'New Walford Arrival'
    ],
    'Tricky Dicky': [
        'Richard Cole', 'Walford Market',
        'Market Inspector Corruption'
    ],
    'Kathy Beale': [
        'Kathy Beale', 'James Willmott Brown',
        'Prison Release And Confrontation'
    ],
    'Michelle and Clyde': [
        'Michelle Fowler', 'Clyde Tavernier',
        'College Romance And Betrayal'
    ],
    'Phil and Anne': [
        'Phil Mitchell', 'Anne Howes',
        'Marriage Secrets And Romance'
    ],
    'Lloyd Tavernier': [
        'Lloyd Tavernier', 'Tavernier Family',
        'Stolen Car And Court Case'
    ],
    'Walford Neighbours': [
        'Dot Cotton', 'Ethel Skinner',
        'Walford Community And Family'
    ]
};

// Individual tags, aligned with the questions above.
// Each entry supplies two specific tags.
const factSpecificTags = [
    // Sharon, Grant and Phil
    'Grant Wants Child|Family Planning',
    'Contraception Discovery|Marital Conflict',
    'Queen Vic Destruction|Grant Outburst',
    'Phil Comforts Sharon|Grant Disappears',
    'Phil And Sharon Affair|Infidelity',
    'Queen Victoria Affair|Secret Encounter',
    'Insurance Fraud Arson|Queen Victoria Fire',
    'Financial Debts|Insurance Scam',
    'Sharons Birthday|Pub Arson',
    'Roly Dog|Pub Fire Rescue',
    'Sharon Chooses Grant|Love Triangle',

    // Mark and Gill
    'Gill Robinson Marriage|Terminal Illness',
    'Gill Fowler Married Name|Newlyweds',
    'AIDS Diagnosis|Terminal Illness',
    'Hospice Care|Gill Final Days',
    'Death Day After Wedding|Bereavement',
    'Michelle Fowler|Wedding Guest',
    'Rachel Kominski|Wedding Guest',
    'Brief Honeymoon|Hotel Stay',

    // Arthur and Christine
    'Christine Hewitt|Gardener Employer',
    'Elizabeth Power|Actor Casting',
    'Arthur Gardening Job|First Meeting',
    'Jonathan Hewitt|Christine Son',
    'Jonny Lee Miller|Actor Casting',
    'Jonathan Leaves College|Career Change',
    'Jonathan Misses Work|Gardening Assistant',
    'Scottish Festival|Jonathan Friends',
    'Christine Replaces Jonathan|Gardening Work',
    'Pauline New Zealand Trip|Kenny Beale',
    'Kenny Beale Car Crash|Family Emergency',
    'Pete Beale|Christine Date',
    'Letter And Photograph|Pauline Discovery',
    'Christmas Eve Affair|Arthur Infidelity',

    // Pat and Frank
    'Pat Cabs|Taxi Firm Name',
    'Butcher Bed And Breakfast Sale|Financial Crisis',
    'Charles Raymond|Property Investor',
    'Mercedes Sale|Frank Debt',
    'Portakabin Office|Taxi Business',
    'Stephanie Watson|Pedestrian Collision',
    'Taxi Driving|Pat Car Crash',
    'Drink Driving|Breathalyser',
    'Stephanie Watson Death|Hospital Injuries',
    'Mo Butcher Death|Alzheimers',

    // Mandy Salter
    'Mandy Salter Arrival|Teenage Neglect',
    'Nicola Stapleton|Actor Casting',
    'Sam Butcher Friendship|Young Walford Residents',
    'Lorraine Salter|Mandy Mother',
    'Lorraine Hospitalisation|Pat Temporary Care',
    'Ian Beale|Sex Worker Secret',
    'Squat Living|Teenage Homelessness',
    'Kathy Beale Sofa|Temporary Shelter',
    'False Abuse Allegation|Kathy Beale',
    'Makeshift Shanty|Sleeping Rough',
    'Linda Henry|Lorraine Salter Actress',

    // Nigel Bates
    'Nigel Bates Arrival|Mitchell Friends',
    'Paul Bradley|Actor Casting',
    'Mercedes Purchase|Frank Car Business',
    'Nigel Mother Death|Walford Move',
    'Dot Cotton Lodger|Home Sharing',
    'Phil And Grant Friendship|Old Friends',

    // Tricky Dicky
    'Richard Cole Arrival|Tricky Dicky Nickname',
    'Ian Reddington|Actor Casting',
    'Market Inspector|Walford Council',
    'Rachel Kominski Romance|Market Stallholder',
    'Tricky Dicky|Nickname Origin',
    'Tony Jordan|EastEnders Writer',
    'Market Corruption|Favouritism',

    // Kathy and Willmott-Brown
    'James Willmott Brown|Prison Release',
    'Cassette Tape|Kathy Contact',
    'Rachel Kominski|Hotel Confrontation',
    'Suicide Threat|Willmott Brown',
    'Kathy Asks Him To Leave|Walford Departure',
    'Pete Beale|Marriage Breakdown',

    // Michelle, Clyde and Jack
    'Clyde Tavernier|College Relationship',
    'Jack Woodman|College Gig',
    'Jack Woodman Infidelity|Campus Bedroom',
    'Grant Mitchell|Clyde Companion',
    'Christmas Day|Jack Returns',
    'Shelley Lewis|College Friend Arrival',
    'Michelle And Clyde Split|Affair Consequences',

    // Phil and Anne
    'Anne Howes Arrival|Phil Girlfriend',
    'Cassie Stuart|Actor Casting',
    'Curry House Meeting|Phil Romance',
    'Terry Howes|Secret Husband',
    'Former Boyfriend Lie|Anne Deception',
    'Suicide Claim|Marriage Conflict',
    'Young Daughter Secret|Family Revelation',
    'Phil Ends Romance|Repeated Lies',

    // Lloyd Tavernier
    'Lloyd Tavernier|Joyriding',
    'Gary Phillips|Stolen Vehicle',
    'Wesley|Teenage Friend',
    'Police Arrest|Car Theft',
    'Suspended Sentence|Court Penalty',
    'Norwich Move|Tavernier Departure',

    // Other Walford stories
    'Willy The Dog|Ethel Pet Death',
    'Refuses Replacement Dog|Grief',
    'Mr Papadopolous|Launderette Ownership',
    'Dot Cotton|Name Pronunciation',
    'Lilian Kominski|Family Visit',
    'Teenage Abortion|Rachel Family History'
];

// Build the actual quiz questions with complete metadata.
const questions = facts.map((
    [question, correctAnswer, wrongAnswers, difficulty, topic],
    index
) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(6804 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [
            'British Television',
            'Soaps',
            'EastEnders',
            '1992',
            topic,
            ...topicContextTags[topic],
            correctAnswer,
            ...factSpecificTags[index].split('|')
        ],
        dailyEligible: true
    };
});

module.exports = questions;
