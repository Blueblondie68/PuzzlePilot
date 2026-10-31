// quiz_pack243.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2005
// 110 questions: tv_8144 to tv_8253
// Comprehensive tags included from creation.
// Do not change quiz_bank.js until the agreed bank update.

const topicTags = {
    "Zoe And Den": ["Zoe Slater", "Den Watts", "Dennis Rickman", "Pregnancy And Deception", "Early 2005"],
    "Den Murder": ["Den Watts", "Chrissie Watts", "Sam Mitchell", "Zoe Slater", "Twentieth Anniversary Murder"],
    "Johnny Andy And Paul": ["Johnny Allen", "Andy Hunter", "Paul Trueman", "Walford Gangland", "February 2005"],
    "Chrissie Cover Up": ["Chrissie Watts", "Sam Mitchell", "Den Watts Murder Investigation", "Queen Victoria Cellar", "Autumn 2005"],
    "Mitchell Returns": ["Peggy Mitchell", "Phil Mitchell", "Grant Mitchell", "Sam Mitchell", "Mitchell Family Reunion"],
    "Sharon And Dennis": ["Sharon Watts", "Dennis Rickman", "Wedding And Tragedy", "Johnny Allen", "New Year 2005"],
    "Kat Alfie And Little Mo": ["Kat Moon", "Alfie Moon", "Little Mo Mitchell", "Love Triangle And Reconciliation", "Slater Family"],
    "Nana Moon": ["Nana Moon", "Alfie Moon", "William Moon", "Normandy Visit", "December 2005 Farewell"],
    "Millers And Leo": ["Demi Miller", "Leo Taylor", "Aleesha Miller", "Miller Taylor Feud", "August 2005 Tragedy"],
    "Ruby Stacey And Johnny": ["Ruby Allen", "Stacey Slater", "Johnny Allen", "Juley Smith", "New Generation"],
    "Other Walford Stories": ["Walford Residents", "2005 Arrivals", "Sonia Fowler", "Pauline Fowler", "Billy Mitchell"]
};

const facts = [
    // ZOE, DEN AND THE PREGNANCY SCANDAL (10)
    ["Which man did Dennis catch in bed with Zoe Slater early in 2005?", "Den Watts", ["Andy Hunter", "Alfie Moon", "Johnny Allen"], "Easy", "Zoe And Den", ["Dennis Discovers Affair", "January Betrayal"]],
    ["Which character left Walford in January after discovering Zoe's betrayal?", "Dennis Rickman", ["Spencer Moon", "Martin Fowler", "Garry Hobbs"], "Easy", "Zoe And Den", ["Dennis January Departure", "Zoe Den Affair"]],
    ["Who was the biological father of the baby Zoe discovered she was expecting?", "Den Watts", ["Dennis Rickman", "Alfie Moon", "Andy Hunter"], "Easy", "Zoe And Den", ["Den Zoe Pregnancy", "Paternity"]],
    ["Which birthday was Zoe Slater celebrating when she discovered her pregnancy?", "Her 21st", ["Her 18th", "Her 25th", "Her 30th"], "Medium", "Zoe And Den", ["Zoe Twenty First Birthday", "February Pregnancy Test"]],
    ["Who persuaded Zoe to terminate her pregnancy with Den's baby?", "Chrissie Watts", ["Kat Slater", "Sharon Watts", "Peggy Mitchell"], "Medium", "Zoe And Den", ["Chrissie Pressures Zoe", "Abortion Decision"]],
    ["What did Chrissie tell Den had happened to Zoe's pregnancy?", "She had miscarried", ["She was expecting twins", "She had left the country", "Dennis was the father"], "Medium", "Zoe And Den", ["False Miscarriage Story", "Chrissie Deception"]],
    ["Which solicitor helped Chrissie obtain an ownership stake in the Queen Vic?", "Amanda Parry", ["Ritchie Scott", "Kate Morton", "Jill Marsden"], "Medium", "Zoe And Den", ["Amanda Parry Solicitor", "Pub Ownership Papers"]],
    ["Which couple renewed their wedding vows shortly before the anniversary murder?", "Den and Chrissie Watts", ["Kat and Alfie Moon", "Billy and Little Mo Mitchell", "Martin and Sonia Fowler"], "Easy", "Zoe And Den", ["Watts Vow Renewal", "February Ceremony"]],
    ["Which three women formed an alliance to confront Den in the Queen Vic?", "Chrissie, Zoe and Sam", ["Kat, Sharon and Peggy", "Pat, Dot and Pauline", "Lisa, Vicki and Kate"], "Easy", "Zoe And Den", ["Three Women Alliance", "Den Confrontation"]],
    ["Who overheard Den boasting about his behaviour from behind the Queen Vic's bar?", "Sharon Watts", ["Vicki Fowler", "Pat Evans", "Peggy Mitchell"], "Medium", "Zoe And Den", ["Sharon Overhears Den", "Family Rejection"]],

    // THE TWENTIETH-ANNIVERSARY MURDER (10)
    ["Which legendary EastEnders character was murdered during the show's twentieth-anniversary episode?", "Den Watts", ["Andy Hunter", "Phil Mitchell", "Frank Butcher"], "Easy", "Den Murder", ["Den Dies Again", "Twentieth Anniversary Episode"]],
    ["On which date did Den Watts's final murder episode air?", "18 February 2005", ["1 January 2005", "25 December 2005", "18 March 2005"], "Medium", "Den Murder", ["Eighteenth February", "Broadcast Date"]],
    ["Which Slater initially struck Den with a heavy doorstop?", "Zoe Slater", ["Kat Slater", "Little Mo Mitchell", "Stacey Slater"], "Easy", "Den Murder", ["Zoe First Blow", "Doorstop Attack"]],
    ["What was unusual about the heavy object used in Den's murder?", "It was shaped like a dog", ["It was made of glass", "It played music", "It was a silver trophy"], "Medium", "Den Murder", ["Dog Shaped Doorstop", "Murder Weapon"]],
    ["Which Walford resident originally owned the doorstop used against Den?", "Pauline Fowler", ["Peggy Mitchell", "Pat Evans", "Dot Branning"], "Medium", "Den Murder", ["Pauline Dog Doorstop", "Weapon Provenance"]],
    ["Who delivered the fatal blow to Den after he regained consciousness?", "Chrissie Watts", ["Zoe Slater", "Sam Mitchell", "Sharon Watts"], "Easy", "Den Murder", ["Chrissie Kills Den", "Second Blow"]],
    ["Which witness saw Chrissie strike Den the second time?", "Sam Mitchell", ["Sharon Watts", "Kat Moon", "Vicki Fowler"], "Medium", "Den Murder", ["Sam Witnesses Murder", "Hidden Truth"]],
    ["Who was wrongly led to believe that she had killed Den?", "Zoe Slater", ["Peggy Mitchell", "Pat Evans", "Kate Mitchell"], "Easy", "Den Murder", ["Zoe Believes She Killed Den", "Chrissie Cover Story"]],
    ["Where did the three women hide Den's body?", "Beneath the Queen Vic's cellar floor", ["In the canal", "Inside the Arches garage", "Under the market stalls"], "Easy", "Den Murder", ["Vic Cellar Burial", "Body Concealment"]],
    ["What building material was used to conceal Den's body beneath the floor?", "Concrete", ["Sand", "Wooden boards", "Gravel"], "Medium", "Den Murder", ["Concrete Covered Grave", "Cellar Floor"]],

    // JOHNNY, ANDY AND PAUL (10)
    ["Which gangster arrived in Walford at the beginning of 2005 and challenged Andy Hunter?", "Johnny Allen", ["Jack Dalton", "Dan Sullivan", "George Palmer"], "Easy", "Johnny Andy And Paul", ["Johnny January Debut", "Gangland Rivalry"]],
    ["Which actor portrayed gangster Johnny Allen?", "Billy Murray", ["Michael Higgs", "Hywel Bennett", "Leslie Grantham"], "Medium", "Johnny Andy And Paul", ["Billy Murray", "Johnny Casting"]],
    ["Who killed Andy Hunter on the same night as Den's murder?", "Johnny Allen", ["Dennis Rickman", "Phil Mitchell", "Jake Moon"], "Easy", "Johnny Andy And Paul", ["Johnny Kills Andy", "February Double Death"]],
    ["How did Andy Hunter die at Johnny Allen's hands?", "He was pushed from a bridge", ["He was shot in his office", "He drowned in the canal", "He was poisoned"], "Easy", "Johnny Andy And Paul", ["Andy Bridge Death", "Gangster Murder"]],
    ["Which Trueman father identified his murdered son's remains in January?", "Patrick Trueman", ["Anthony Trueman", "Paul Trueman", "Jim Branning"], "Medium", "Johnny Andy And Paul", ["Patrick Identifies Paul", "January Discovery"]],
    ["Whose funeral brought Anthony Trueman briefly back to Albert Square?", "Paul Trueman's", ["Roy Evans's", "Andy Hunter's", "Den Watts's"], "Medium", "Johnny Andy And Paul", ["Paul Funeral", "Anthony February Return"]],
    ["Which nightclub did Johnny Allen take over and rename Scarlet?", "Angie's Den", ["E20", "The Dagmar", "The Albert"], "Easy", "Johnny Andy And Paul", ["Angies Den Rebranded", "Nightclub Takeover"]],
    ["After whom did Johnny Allen name his nightclub Scarlet?", "His late daughter", ["His former wife", "His mother", "His sister"], "Medium", "Johnny Andy And Paul", ["Scarlett Allen Memorial", "Nightclub Name"]],
    ["Which Moon cousins worked for Johnny Allen during his rise in Walford?", "Jake and Danny", ["Alfie and Spencer", "Garry and Mickey", "Phil and Grant"], "Easy", "Johnny Andy And Paul", ["Jake Moon", "Danny Moon", "Johnny Employees"]],
    ["Which man saw Johnny kill Andy Hunter and later told Chrissie?", "Jake Moon", ["Alfie Moon", "Billy Mitchell", "Martin Fowler"], "Medium", "Johnny Andy And Paul", ["Jake Murder Witness", "Andy Death Secret"]],

    // CHRISSIE'S COVER-UP UNRAVELS (10)
    ["What explanation did Chrissie give for Den's sudden disappearance?", "He had left with another woman", ["He had died in Spain", "He had gone to prison", "He had entered hospital"], "Easy", "Chrissie Cover Up", ["Chrissie Den Missing Lie", "False Departure"]],
    ["Which Moon cousin became Chrissie's boyfriend after Den disappeared?", "Jake Moon", ["Danny Moon", "Alfie Moon", "Spencer Moon"], "Easy", "Chrissie Cover Up", ["Chrissie Jake Relationship", "Post Murder Romance"]],
    ["Who dug up Den's body on Sharon and Dennis's wedding day?", "Sam Mitchell", ["Peggy Mitchell", "Zoe Slater", "Chrissie Watts"], "Easy", "Chrissie Cover Up", ["Sam Unearths Den", "August Wedding Day"]],
    ["Which long-serving Queen Vic barmaid did Sam knock unconscious before digging up Den?", "Tracey", ["Kat", "Sharon", "Little Mo"], "Medium", "Chrissie Cover Up", ["Tracey Knocked Out", "Cellar Discovery"]],
    ["Who was charged with Den's murder while Chrissie tried to conceal her guilt?", "Sam Mitchell", ["Zoe Slater", "Sharon Watts", "Peggy Mitchell"], "Easy", "Chrissie Cover Up", ["Sam Wrongly Charged", "Frame Up"]],
    ["Which Slater teenager initially gave Chrissie a false alibi?", "Stacey Slater", ["Kat Slater", "Zoe Slater", "Little Mo Mitchell"], "Medium", "Chrissie Cover Up", ["Stacey False Alibi", "Police Investigation"]],
    ["What type of recording finally provided proof of Chrissie's confession?", "CCTV footage", ["A radio interview", "A cassette from Den", "A telephone voicemail"], "Easy", "Chrissie Cover Up", ["CCTV Confession", "Video Evidence"]],
    ["Which woman confronted and punched Chrissie at the airport?", "Sharon Rickman", ["Peggy Mitchell", "Kat Moon", "Pat Evans"], "Easy", "Chrissie Cover Up", ["Sharon Airport Confrontation", "Chrissie Arrest"]],
    ["Which month did the police arrest Chrissie at the airport?", "November", ["February", "June", "September"], "Medium", "Chrissie Cover Up", ["November 2005 Arrest", "Attempted Escape"]],
    ["What sentence did Chrissie receive after admitting Den's murder?", "Life imprisonment", ["A suspended sentence", "Five years' probation", "Community service"], "Easy", "Chrissie Cover Up", ["Chrissie Guilty Plea", "Life Sentence"]],

    // THE MITCHELLS FIGHT BACK (10)
    ["Which Mitchell escaped from prison and returned to Walford in April?", "Phil Mitchell", ["Grant Mitchell", "Billy Mitchell", "Jamie Mitchell"], "Easy", "Mitchell Returns", ["Phil Prison Escape", "April 2005"]],
    ["Which Mitchell matriarch returned in September to fight for her daughter Sam?", "Peggy Mitchell", ["Kathy Mitchell", "Louise Mitchell", "Kate Mitchell"], "Easy", "Mitchell Returns", ["Peggy September Return", "Sam Support"]],
    ["Which two Mitchell brothers reunited in Walford in October?", "Phil and Grant", ["Billy and Jamie", "Phil and Ben", "Grant and Billy"], "Easy", "Mitchell Returns", ["Mitchell Brothers October Return", "Family Reunion"]],
    ["Which country had Grant Mitchell been living in before his return?", "Brazil", ["Spain", "Australia", "Canada"], "Medium", "Mitchell Returns", ["Grant Brazil Home", "October Homecoming"]],
    ["Which gangster did Peggy clash with while attempting to reclaim the Queen Vic?", "Johnny Allen", ["Jack Dalton", "Dan Sullivan", "George Palmer"], "Easy", "Mitchell Returns", ["Peggy Johnny Feud", "Pub Ownership"]],
    ["Who rescued Peggy after a man working for Johnny threatened her?", "Phil and Grant Mitchell", ["Ian and Martin Fowler", "Jake and Danny Moon", "Garry and Minty"], "Easy", "Mitchell Returns", ["Peggy Rescued", "Brothers Intervene"]],
    ["Which lawyer became associated with the Mitchells' legal battles in 2005?", "Ritchie Scott", ["Amanda Parry", "Marcus Christie", "Kate Morton"], "Medium", "Mitchell Returns", ["Ritchie Scott First Appearance", "Mitchell Solicitor"]],
    ["Which woman was cleared of Den's murder but still faced trouble for concealing evidence?", "Sam Mitchell", ["Chrissie Watts", "Zoe Slater", "Sharon Rickman"], "Medium", "Mitchell Returns", ["Sam Exonerated", "Perverting Course Of Justice"]],
    ["Where did Sam flee after being freed from prison and facing further charges?", "Brazil", ["Scotland", "Portugal", "France"], "Medium", "Mitchell Returns", ["Sam Brazil Flight", "November Departure"]],
    ["Which woman finally regained control of the Queen Vic for the Mitchell family?", "Peggy Mitchell", ["Sam Mitchell", "Kate Mitchell", "Louise Mitchell"], "Easy", "Mitchell Returns", ["Peggy Pub Return", "Queen Vic Reclaimed"]],

    // SHARON AND DENNIS: WEDDING AND NEW YEAR (10)
    ["Which couple returned to Walford together in June after reuniting away from the Square?", "Sharon and Dennis", ["Kat and Alfie", "Lisa and Mark", "Vicki and Spencer"], "Easy", "Sharon And Dennis", ["Shannis June Return", "Reunited Couple"]],
    ["Which month did Sharon Watts and Dennis Rickman marry?", "August", ["March", "June", "December"], "Medium", "Sharon And Dennis", ["August 2005 Wedding", "Shannis Marriage"]],
    ["Which family secret was uncovered on Sharon and Dennis's wedding day?", "Den's body was hidden under the Queen Vic", ["Sharon had a twin brother", "Peggy was moving abroad", "Dennis had bought the Arches"], "Easy", "Sharon And Dennis", ["Wedding Day Body Discovery", "Den Murder Revealed"]],
    ["What news did Sharon receive in hospital on Christmas Day?", "She was pregnant", ["She had inherited a house", "She needed surgery", "She had lost her job"], "Easy", "Sharon And Dennis", ["Sharon Pregnancy Christmas", "Unexpected Baby"]],
    ["Which country were Sharon and Dennis planning to move to at New Year?", "The United States", ["Portugal", "New Zealand", "Spain"], "Easy", "Sharon And Dennis", ["Plan To Move To America", "New Start"]],
    ["Which gangster threatened Dennis unless he and Sharon left Walford?", "Johnny Allen", ["Andy Hunter", "Jack Dalton", "Paul Trueman"], "Easy", "Sharon And Dennis", ["Johnny Threatens Dennis", "New Year Ultimatum"]],
    ["Who told Dennis about Johnny's threat despite promising Sharon he would not?", "Phil Mitchell", ["Grant Mitchell", "Alfie Moon", "Ian Beale"], "Medium", "Sharon And Dennis", ["Phil Warns Dennis", "Broken Promise"]],
    ["Whom did Dennis severely beat just before the New Year's celebration?", "Johnny Allen", ["Phil Mitchell", "Jake Moon", "Ian Beale"], "Easy", "Sharon And Dennis", ["Dennis Attacks Johnny", "Club Office Confrontation"]],
    ["Which Moon cousin stabbed Dennis in the final New Year storyline?", "Danny Moon", ["Jake Moon", "Alfie Moon", "Spencer Moon"], "Medium", "Sharon And Dennis", ["Danny Kills Dennis", "New Year Stabbing"]],
    ["In whose arms did Dennis Rickman die as the New Year began?", "Sharon Rickman's", ["Peggy Mitchell's", "Chrissie Watts's", "Kat Moon's"], "Easy", "Sharon And Dennis", ["Dennis Dies With Sharon", "New Year Tragedy"]],

    // KAT, ALFIE AND LITTLE MO (10)
    ["Which Slater sister grew close to Alfie Moon while Kat was away?", "Little Mo", ["Zoe", "Lynne", "Belinda"], "Easy", "Kat Alfie And Little Mo", ["Alfie Little Mo Romance", "Molfie"]],
    ["Which Mitchell had been married to Little Mo before her relationship with Alfie?", "Billy Mitchell", ["Phil Mitchell", "Grant Mitchell", "Jamie Mitchell"], "Easy", "Kat Alfie And Little Mo", ["Little Mo Billy Split", "Marriage Fallout"]],
    ["Which of Little Mo's children did Alfie help care for?", "Freddie", ["Jamie", "Louise", "Bobby"], "Easy", "Kat Alfie And Little Mo", ["Alfie Cares For Freddie", "Baby Slater"]],
    ["Which month did Kat return unexpectedly to Walford in 2005?", "May", ["February", "August", "November"], "Medium", "Kat Alfie And Little Mo", ["Kat May Return", "Slater Homecoming"]],
    ["Where was Kat living when Big Mo found her ahead of her return?", "In a hostel", ["In a hotel in Spain", "On a houseboat", "In a hospital"], "Medium", "Kat Alfie And Little Mo", ["Kat Hostel", "Big Mo Finds Kat"]],
    ["What had led to Kat serving time in prison before she returned?", "Assaulting a police officer", ["Shoplifting", "Driving without insurance", "Tax fraud"], "Medium", "Kat Alfie And Little Mo", ["Kat Police Assault", "Prison Term"]],
    ["Which man drunkenly revealed the romance between Alfie and Little Mo in the Queen Vic?", "Billy Mitchell", ["Charlie Slater", "Garry Hobbs", "Minty Peterson"], "Easy", "Kat Alfie And Little Mo", ["Billy Reveals Molfie", "September 2005"]],
    ["Which Slater left for Ibiza after learning the truth about Den's murder?", "Zoe Slater", ["Stacey Slater", "Little Mo", "Kat Slater"], "Easy", "Kat Alfie And Little Mo", ["Zoe Ibiza Exit", "June Departure"]],
    ["What keepsake did Kat give Zoe as she left Walford?", "Her baby hospital bracelet", ["A wedding ring", "A photograph of Den", "A silver locket from Peggy"], "Medium", "Kat Alfie And Little Mo", ["Kat Gives Birth Bracelet", "Mother Daughter Goodbye"]],
    ["Which couple drove away from Walford together on Christmas Day?", "Kat and Alfie Moon", ["Billy and Little Mo Mitchell", "Sharon and Dennis Rickman", "Garry and Lynne Hobbs"], "Easy", "Kat Alfie And Little Mo", ["Kalfie Christmas Departure", "Reconciliation"]],

    // NANA MOON'S FINAL WISHES (10)
    ["Which elderly member of the Moon family learned she had an aortic aneurysm?", "Nana Moon", ["Rosie Miller", "Mo Harris", "Dot Branning"], "Easy", "Nana Moon", ["Nana Terminal Diagnosis", "Aortic Aneurysm"]],
    ["What treatment did Nana Moon decide against because of its risks?", "Major surgery", ["A course of antibiotics", "Physiotherapy", "Radiotherapy"], "Medium", "Nana Moon", ["Declines Operation", "End Of Life Decision"]],
    ["Which grandson took Nana Moon to France to fulfil a final wish?", "Alfie Moon", ["Spencer Moon", "Jake Moon", "Danny Moon"], "Easy", "Nana Moon", ["Alfie Normandy Journey", "Grandmother Grandson"]],
    ["In which French region did Nana visit her late husband's war grave?", "Normandy", ["Provence", "Brittany", "Alsace"], "Easy", "Nana Moon", ["Normandy War Grave", "Remembrance Visit"]],
    ["What was the first name of Nana Moon's husband who died during the Second World War?", "William", ["Alfred", "Sidney", "George"], "Medium", "Nana Moon", ["William Moon", "War Widow"]],
    ["On which remembrance occasion did Nana and Alfie visit France?", "Armistice Day", ["VE Day", "D-Day anniversary", "Remembrance Sunday"], "Medium", "Nana Moon", ["Eleventh November 2005", "Armistice Special"]],
    ["Which London attraction let Nana fulfil her wish to have tea with 'the Queen'?", "Madame Tussauds", ["The London Eye", "Buckingham Palace", "The British Museum"], "Medium", "Nana Moon", ["Queen Waxwork Tea", "Final Wish List"]],
    ["What game did Nana Moon try as part of her list of final experiences?", "Poker", ["Bingo", "Snooker", "Backgammon"], "Medium", "Nana Moon", ["Nana Plays Poker", "Bucket List"]],
    ["Which month did Nana Moon die peacefully at home?", "December", ["May", "August", "October"], "Easy", "Nana Moon", ["Nana December Death", "Family Bereavement"]],
    ["What battery-operated Christmas decoration was part of Nana's final scene?", "A dancing snowman", ["A singing robin", "A flashing reindeer", "A musical star"], "Medium", "Nana Moon", ["Dancing Snowman", "Nana Final Scene"]],

    // THE MILLER AND TAYLOR FAMILIES (10)
    ["Which Miller teenager was reunited with the father of her baby Aleesha?", "Demi Miller", ["Dawn Swann", "Stacey Slater", "Ruby Allen"], "Easy", "Millers And Leo", ["Demi And Leo Reunion", "Teenage Parents"]],
    ["What was the name of Leo Taylor's mother, who was involved in the feud with the Millers?", "Trisha Taylor", ["Rosie Miller", "Tina Stewart", "Nora Swann"], "Medium", "Millers And Leo", ["Trisha Taylor", "Taylor Family Feud"]],
    ["What was the first name of Leo Taylor's father, who opposed his relationship with Demi?", "Ray", ["Keith", "Clint", "Jim"], "Medium", "Millers And Leo", ["Ray Taylor", "Families Feud"]],
    ["Which ceremony for Aleesha was disrupted by Leo's angry father?", "Her christening", ["Her birthday party", "Her school assembly", "Her parents' wedding"], "Easy", "Millers And Leo", ["Aleesha Christening", "Ray Interrupts"]],
    ["Which month brought the fatal outcome of Demi and Leo's runaway storyline?", "August", ["March", "June", "December"], "Medium", "Millers And Leo", ["August 2005", "Leo Tragedy"]],
    ["What drug was involved in the fatal overdose of Leo Taylor?", "Heroin", ["Cocaine", "Cannabis", "Ecstasy"], "Medium", "Millers And Leo", ["Heroin Overdose", "Leo Death"]],
    ["Whom did Leo mistakenly believe had died before taking the fatal overdose?", "Demi Miller", ["Rosie Miller", "Trisha Taylor", "Aleesha Miller"], "Medium", "Millers And Leo", ["Leo Believes Demi Dead", "Runaway Tragedy"]],
    ["Which Miller father had his benefits questioned after being filmed playing football?", "Keith Miller", ["Mickey Miller", "Darren Miller", "Clint Taylor"], "Medium", "Millers And Leo", ["Keith Benefits Investigation", "Football Evidence"]],
    ["Which Slater reported the Miller family for benefit fraud after a dispute with Darren?", "Stacey Slater", ["Kat Slater", "Zoe Slater", "Little Mo"], "Medium", "Millers And Leo", ["Stacey Reports Millers", "Benefit Investigation"]],
    ["Which older Miller brother helped Darren search for Demi when she ran away?", "Mickey Miller", ["Gus Smith", "Keith Miller", "Billy Mitchell"], "Easy", "Millers And Leo", ["Mickey Searches For Demi", "Family Rescue"]],

    // RUBY, STACEY AND JOHNNY (10)
    ["Which teenage daughter of Johnny Allen arrived from boarding school?", "Ruby Allen", ["Stacey Slater", "Demi Miller", "Vicki Fowler"], "Easy", "Ruby Stacey And Johnny", ["Ruby Arrival", "Johnny Daughter"]],
    ["Which actress made her debut as Ruby Allen?", "Louisa Lytton", ["Lacey Turner", "Shana Swash", "Petra Letang"], "Medium", "Ruby Stacey And Johnny", ["Louisa Lytton", "Ruby Casting"]],
    ["Which Slater girl became Ruby Allen's close friend?", "Stacey Slater", ["Kat Slater", "Zoe Slater", "Little Mo"], "Easy", "Ruby Stacey And Johnny", ["Ruby Stacey Friendship", "Teenage Pair"]],
    ["What was the name of Ruby's older sister who had died in a fire?", "Scarlett", ["Louise", "Stephanie", "Courtney"], "Medium", "Ruby Stacey And Johnny", ["Scarlett Allen", "Family Fire Tragedy"]],
    ["Which woman was Johnny Allen's girlfriend during much of 2005?", "Tina Stewart", ["Chrissie Watts", "Pat Evans", "Kate Mitchell"], "Medium", "Ruby Stacey And Johnny", ["Tina Stewart", "Johnny Romance"]],
    ["Which actress portrayed Johnny Allen's girlfriend Tina Stewart?", "Charlotte Avery", ["Tracy-Ann Oberman", "Laurie Brett", "Angela Wynter"], "Medium", "Ruby Stacey And Johnny", ["Charlotte Avery", "Tina Casting"]],
    ["Which younger Smith brother began dating Ruby Allen late in the year?", "Juley Smith", ["Gus Smith", "Mickey Miller", "Spencer Moon"], "Easy", "Ruby Stacey And Johnny", ["Juley Ruby Romance", "November 2005"]],
    ["Who secretly paid Juley to pursue Ruby in order to antagonise Johnny?", "Phil Mitchell", ["Grant Mitchell", "Dennis Rickman", "Jake Moon"], "Medium", "Ruby Stacey And Johnny", ["Phil Pays Juley", "Johnny Revenge Plot"]],
    ["Which serious mental health condition affected Stacey Slater's mother Jean?", "Bipolar disorder", ["Obsessive-compulsive disorder", "Dementia", "Anorexia nervosa"], "Medium", "Ruby Stacey And Johnny", ["Jean Bipolar Disorder", "December 2005 Story"]],
    ["Which actress portrayed Stacey's mother Jean during the 2005 breakdown storyline?", "Gillian Wright", ["Gerry Cowper", "Laila Morse", "June Brown"], "Medium", "Ruby Stacey And Johnny", ["Gillian Wright", "Jean Casting"]],

    // OTHER WALFORD STORYLINES AND ARRIVALS (10)
    ["Which new friend from nursing helped Sonia Fowler through marriage difficulties?", "Naomi Julien", ["Honey Edwards", "Shirley Benson", "Jane Collins"], "Easy", "Other Walford Stories", ["Naomi Sonia Friendship", "Nursing Colleagues"]],
    ["Which actress played Sonia's friend Naomi Julien?", "Petra Letang", ["Louisa Lytton", "Emma Barton", "Gillian Wright"], "Medium", "Other Walford Stories", ["Petra Letang", "Naomi Casting"]],
    ["Which married woman shared a kiss with Naomi Julien in November?", "Sonia Fowler", ["Jane Collins", "Kat Moon", "Sharon Rickman"], "Easy", "Other Walford Stories", ["Sonia Naomi Kiss", "November 2005"]],
    ["Which man was Sonia still married to during her growing friendship with Naomi?", "Martin Fowler", ["Gus Smith", "Dennis Rickman", "Alfie Moon"], "Easy", "Other Walford Stories", ["Martin Sonia Marriage", "Naomi Love Triangle"]],
    ["Which newcomer began courting Pauline Fowler after meeting her at salsa classes?", "Joe Macer", ["Jim Branning", "Patrick Trueman", "Terry Raymond"], "Easy", "Other Walford Stories", ["Joe Pauline Romance", "Salsa Dance Meeting"]],
    ["Which actor played Pauline's new admirer Joe Macer?", "Ray Brooks", ["John Bardon", "Tony Caunter", "Leslie Grantham"], "Medium", "Other Walford Stories", ["Ray Brooks", "Joe Macer Casting"]],
    ["Which woman known as Honey arrived in Walford in November?", "Honey Edwards", ["Nora Swann", "Ruby Allen", "Tina Stewart"], "Easy", "Other Walford Stories", ["Honey Edwards Debut", "November Arrival"]],
    ["Which actress began playing Honey Edwards in 2005?", "Emma Barton", ["Petra Letang", "Gerry Cowper", "Laurie Brett"], "Medium", "Other Walford Stories", ["Emma Barton", "Honey Casting"]],
    ["Which Mitchell began a romance with Honey Edwards late in the year?", "Billy Mitchell", ["Phil Mitchell", "Grant Mitchell", "Ben Mitchell"], "Easy", "Other Walford Stories", ["Billy Honey Relationship", "2005 Romance"]],
    ["Which family operating a minicab firm departed Walford in March?", "The Ferreiras", ["The Millers", "The Truemans", "The Moons"], "Medium", "Other Walford Stories", ["Ferreira Family Exit", "March 2005"]]
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic, detailTags], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: "tv_" + String(8144 + index).padStart(4, "0"),
        category: "Television",
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set([
            "British Television", "Soaps", "EastEnders", "2005",
            topic, ...topicTags[topic], correctAnswer, ...detailTags
        ])],
        dailyEligible: true
    };
});

module.exports = questions;
