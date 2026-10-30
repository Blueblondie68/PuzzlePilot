// quiz_pack187.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Emmerdale Farm - The 1980s (1983-1988)
// 100 questions: tv_2601 to tv_2700
// Audited questions, answers and complete topic / character tags.
// quiz_bank.js remains unchanged.

const facts = [

    // 1983
    ["Which Merrick family member faced an unplanned pregnancy?", "Sandie Merrick", ["Jackie Merrick", "Pat Sugden", "Janie Harker"], "Easy", "1983", "Families", ["Sandie Merrick", "Teenage Pregnancy", "Merrick Family", "Unexpected Baby"]],
    ["Who was the father of Sandie Merrick's baby Louise?", "Andy Longthorn", ["David Blakemore", "Graham Jelks", "Archie Brooks"], "Medium", "1983", "Families", ["Andy Longthorn", "Sandie Merrick", "Louise Merrick", "Biological Father"]],
    ["What was the name of Sandie Merrick's daughter?", "Louise", ["Rachel", "Sonia", "Diane"], "Medium", "1983", "Births", ["Louise Merrick", "Sandie Merrick", "Baby Daughter", "Childbirth"]],
    ["In which Scottish city did Sandie Merrick give birth to her daughter?", "Aberdeen", ["Edinburgh", "Glasgow", "Dundee"], "Hard", "1983", "Locations", ["Sandie Merrick", "Louise Merrick", "Aberdeen", "Scotland"]],
    ["Which parent did Sandie go to stay with when she left Beckindale during her pregnancy?", "Her father, Tom Merrick", ["Her mother, Pat Sugden", "Her stepfather, Jack Sugden", "Her grandfather, Sam Pearson"], "Medium", "1983", "Families", ["Sandie Merrick", "Tom Merrick", "Aberdeen", "Pregnancy"]],
    ["What decision did Sandie Merrick make about baby Louise after the birth?", "She placed her for adoption", ["She left her with Dolly", "She sent her to France", "She gave custody to Jackie"], "Medium", "1983", "Storylines", ["Sandie Merrick", "Louise Merrick", "Adoption", "Motherhood"]],
    ["Which married daughter of the Reverend Donald Hinton became romantically involved with Joe Sugden?", "Barbara Peters", ["Caroline Bates", "Karen Moore", "Alison Caswell"], "Medium", "1983", "Relationships", ["Barbara Peters", "Joe Sugden", "Donald Hinton", "Affair"]],
    ["Who played Barbara Peters in Emmerdale Farm?", "Rosie Kerslake", ["Diana Davies", "Annie Hulley", "Mamta Kash"], "Hard", "1983", "Actors", ["Rosie Kerslake", "Barbara Peters", "Actress", "Casting"]],
    ["To which country did Joe Sugden go after his unsuccessful romance?", "France", ["Italy", "Spain", "Canada"], "Easy", "1983", "Characters", ["Joe Sugden", "Barbara Peters", "France", "Departure"]],
    ["Which future village regular arrived in Beckindale in November 1983?", "Archie Brooks", ["Eric Pollard", "Nick Bates", "Phil Pearce"], "Medium", "1983", "Characters", ["Archie Brooks", "Beckindale", "First Appearance", "November 1983"]],
    ["Which actor played Archie Brooks?", "Tony Pitts", ["Cy Chadwick", "Peter Alexander", "Richard Thorp"], "Medium", "1983", "Actors", ["Tony Pitts", "Archie Brooks", "Actor", "Original Casting"]],
    ["What was one of Archie Brooks's earliest jobs in Beckindale?", "Road sweeper", ["Postman", "School caretaker", "Milkman"], "Hard", "1983", "Characters", ["Archie Brooks", "Road Sweeper", "First Job", "Beckindale"]],
    ["Which Merrick briefly went out with Archie Brooks after his arrival?", "Sandie Merrick", ["Pat Merrick", "Janie Merrick", "Louise Merrick"], "Hard", "1983", "Relationships", ["Sandie Merrick", "Archie Brooks", "Brief Romance", "Courtship"]],
    ["Which friend arrived in Beckindale alongside Archie Brooks?", "Mike Conrad", ["Phil Pearce", "Derek Warner", "Tony Marchant"], "Hard", "1983", "Characters", ["Mike Conrad", "Archie Brooks", "New Arrival", "Friendship"]],
    ["What holiday destination did Sam Pearson win a cruise to?", "The Canary Islands", ["The Greek Islands", "The Caribbean", "The Norwegian fjords"], "Hard", "1983", "Storylines", ["Sam Pearson", "Canary Islands", "Cruise Prize", "Competition"]],
    ["What prize did Amos Brearly win in the 1983 competition entered by Sam Pearson?", "A tricycle", ["A caravan", "A television", "A fishing rod"], "Hard", "1983", "Storylines", ["Amos Brearly", "Tricycle", "Competition Prize", "Sam Pearson"]],

    // 1984
    ["With whom did married Jack Sugden have an affair?", "Karen Moore", ["Caroline Bates", "Sita Sharma", "Alison Caswell"], "Easy", "1984", "Relationships", ["Karen Moore", "Jack Sugden", "Extramarital Affair", "Pat Sugden"]],
    ["Which actress played Karen Moore in Emmerdale Farm?", "Annie Hulley", ["Diana Davies", "Malandra Burrows", "Jean Rogers"], "Hard", "1984", "Actors", ["Annie Hulley", "Karen Moore", "Actress", "Casting"]],
    ["Who started working as Alan Turner's secretary at NY Estates?", "Caroline Bates", ["Karen Moore", "Dolly Skilbeck", "Sandie Merrick"], "Medium", "1984", "Characters", ["Caroline Bates", "Alan Turner", "NY Estates", "Secretary"]],
    ["Which actress portrayed Caroline Bates?", "Diana Davies", ["Annie Hulley", "Sally Knyvette", "Helen Weir"], "Hard", "1984", "Actors", ["Diana Davies", "Caroline Bates", "Actress", "Casting"]],
    ["What was the name of Caroline Bates's dog that Jackie shot?", "Bundle", ["Snip", "Shep", "Bess"], "Hard", "1984", "Characters", ["Bundle", "Caroline Bates", "Dog", "Jackie Merrick"]],
    ["Who shot Caroline Bates's dog during a controversial storyline?", "Jackie Merrick", ["Harry Mowlam", "Archie Brooks", "Tom Merrick"], "Medium", "1984", "Storylines", ["Jackie Merrick", "Bundle", "Caroline Bates", "Dog Shooting"]],
    ["Which pub suffered an explosion involving Amos Brearly's cooker?", "The Woolpack", ["The Malt Shovel", "The Royal Oak", "The King's Arms"], "Medium", "1984", "Locations", ["The Woolpack", "Amos Brearly", "Cooker Explosion", "Pub Damage"]],
    ["Who made an unreliable repair to The Woolpack's boiler during the mid-1980s?", "Archie Brooks", ["Matt Skilbeck", "Alan Turner", "Donald Hinton"], "Medium", "1984", "Storylines", ["Archie Brooks", "The Woolpack", "Faulty Boiler", "Handyman"]],
    ["Whose car brakes did Archie Brooks tamper with while carrying out a repair?", "Alan Turner's", ["Jack Sugden's", "Henry Wilks's", "Joe Sugden's"], "Hard", "1984", "Storylines", ["Archie Brooks", "Alan Turner", "Car Brakes", "Faulty Repair"]],
    ["Whose motorbike did Jackie, Archie and Mike steal after a dispute?", "Harry Mowlam's", ["Seth Armstrong's", "Tom Merrick's", "Jock MacDonald's"], "Hard", "1984", "Storylines", ["Harry Mowlam", "Jackie Merrick", "Archie Brooks", "Mike Conrad"]],
    ["Which elderly member of the Sugden family died in his sleep?", "Sam Pearson", ["Amos Brearly", "Henry Wilks", "Donald Hinton"], "Easy", "1984", "Deaths", ["Sam Pearson", "Death In Sleep", "Sugden Family", "Original Character"]],
    ["Which original cast actor, who played Sam Pearson, died?", "Toke Townley", ["Ronald Magill", "Arthur Pentelow", "Stan Richards"], "Medium", "1984", "Actors", ["Toke Townley", "Sam Pearson", "Actor Death", "Original Cast"]],
    ["Which creator of Emmerdale Farm wrote his last script for the programme?", "Kevin Laffan", ["Tony Hatch", "Michael Russell", "Keith Richardson"], "Medium", "1984", "Production", ["Kevin Laffan", "Final Script", "Programme Creator", "Writer"]],
    ["What problem at Alan Turner's dam threatened Beckindale's water supply?", "A blockage", ["A chemical spill", "A burst main", "A drought"], "Hard", "1984", "Storylines", ["Alan Turner", "Dam", "Water Supply", "Blockage"]],
    ["Which NY Estates executive warned Alan Turner about his conduct?", "Christopher Meadows", ["Denis Rigg", "Frank Tate", "George Verney"], "Hard", "1984", "Characters", ["Christopher Meadows", "Alan Turner", "NY Estates", "Executive Warning"]],

    // 1985
    ["Whose Land Rover struck Jackie Merrick's motorbike?", "Alan Turner's Land Rover", ["Jack Sugden's tractor", "Seth Armstrong's van", "Joe Sugden's car"], "Easy", "1985", "Storylines", ["Jackie Merrick", "Alan Turner", "Land Rover", "Motorbike Collision"]],
    ["In which month did Jackie Merrick suffer his serious motorbike accident in 1985?", "April", ["February", "July", "November"], "Medium", "1985", "Storylines", ["Jackie Merrick", "April 1985", "Road Accident", "Motorbike"]],
    ["Where did Jackie Merrick spend several months after his accident?", "Hospital", ["Prison", "France", "A rehabilitation centre in Scotland"], "Medium", "1985", "Storylines", ["Jackie Merrick", "Hospital Recovery", "Broken Bones", "Motorbike Accident"]],
    ["Which nurse did Jackie Merrick fall for while recovering from his crash?", "Sita Sharma", ["Karen Moore", "Caroline Bates", "Alison Caswell"], "Medium", "1985", "Relationships", ["Sita Sharma", "Jackie Merrick", "Nurse", "Romance"]],
    ["Which actress played nurse Sita Sharma?", "Mamta Kash", ["Diana Davies", "Rosie Kerslake", "Jane Hutcheson"], "Hard", "1985", "Actors", ["Mamta Kash", "Sita Sharma", "Actress", "Casting"]],
    ["What commitment did Jackie Merrick make to Sita Sharma after their romance began?", "They became engaged", ["They bought a pub", "They adopted a child", "They moved to France"], "Medium", "1985", "Relationships", ["Jackie Merrick", "Sita Sharma", "Engagement", "Hospital Romance"]],
    ["Which woman had Jackie Merrick dated earlier before meeting Sita?", "Alison Caswell", ["Kate Hughes", "Karen Moore", "Sandie Merrick"], "Hard", "1985", "Relationships", ["Alison Caswell", "Jackie Merrick", "Earlier Romance", "Courtship"]],
    ["Which Home Farm operation was Kathy Bates put in charge of after joining NY Estates?", "The poultry unit", ["The dairy herd", "The sheep flock", "The forestry unit"], "Medium", "1985", "Characters", ["Kathy Bates", "Home Farm", "Poultry Unit", "NY Estates"]],
    ["Which actor played Nick Bates when he arrived in Emmerdale Farm?", "Cy Chadwick", ["Tony Pitts", "Ian Sharrock", "Peter Alexander"], "Medium", "1985", "Actors", ["Cy Chadwick", "Nick Bates", "Actor", "New Arrival"]],
    ["Which actress played Kathy Bates?", "Malandra Burrows", ["Jean Rogers", "Sally Knyvette", "Helen Weir"], "Easy", "1985", "Actors", ["Malandra Burrows", "Kathy Bates", "Actress", "Casting"]],
    ["How were Nick and Kathy Bates related?", "Brother and sister", ["Husband and wife", "Cousins", "Stepfather and daughter"], "Easy", "1985", "Families", ["Nick Bates", "Kathy Bates", "Siblings", "Bates Family"]],
    ["Who was the mother of Kathy and Nick Bates?", "Caroline Bates", ["Annie Sugden", "Dolly Skilbeck", "Pat Sugden"], "Medium", "1985", "Families", ["Caroline Bates", "Nick Bates", "Kathy Bates", "Motherhood"]],
    ["What was the first name of Nick Bates's troubled father?", "Malcolm", ["Martin", "Michael", "Maurice"], "Hard", "1985", "Families", ["Malcolm Bates", "Nick Bates", "Caroline Bates", "Fatherhood"]],
    ["With which villager did Nick Bates move in after arriving in Beckindale?", "Archie Brooks", ["Seth Armstrong", "Jackie Merrick", "Alan Turner"], "Hard", "1985", "Characters", ["Nick Bates", "Archie Brooks", "Shared Home", "Friendship"]],
    ["Which farmer was involved in an armed security-van robbery?", "Harry Mowlam", ["Enoch Tolly", "Jim Gimbel", "George Verney"], "Medium", "1985", "Crime", ["Harry Mowlam", "Security Van Robbery", "Crime Gang", "1985 Robbery"]],
    ["Which of Harry Mowlam's accomplices was later revealed as his killer?", "Derek Warner", ["Phil Pearce", "John Tuplin", "Bill Middleton"], "Medium", "1985", "Crime", ["Derek Warner", "Harry Mowlam", "Robbery Accomplice", "Future Murder"]],
    ["Which milestone did Emmerdale Farm reach?", "Its 1,000th episode", ["Its 500th episode", "Its 2,000th episode", "Its 25th anniversary"], "Easy", "1985", "Production", ["Thousandth Episode", "1985 Milestone", "Anniversary Celebration", "ITV History"]],
    ["Which television presenter hosted a special celebrating Emmerdale Farm's 1,000th episode?", "Richard Whiteley", ["Michael Aspel", "Des O'Connor", "Terry Wogan"], "Hard", "1985", "Production", ["Richard Whiteley", "Emmerdale Farm Celebrates", "Thousandth Episode", "Television Presenter"]],

    // 1986
    ["Which child was born to Jack and Pat Sugden in April 1986?", "Robert Sugden", ["Andy Sugden", "Samuel Skilbeck", "Jackie Merrick"], "Easy", "1986", "Births", ["Robert Sugden", "Jack Sugden", "Pat Sugden", "April 1986"]],
    ["What change did Emmerdale Farm make to its summer broadcasting schedule in 1986?", "It no longer took a summer break", ["It became a weekly programme", "It moved to Sunday mornings", "It stopped filming in Yorkshire"], "Medium", "1986", "Production", ["Continuous Broadcast", "Summer Break", "Scheduling Change", "Production History"]],
    ["Where had Pat Sugden just dropped off her sister before her fatal car crash?", "At a railway station", ["At a hospital", "At The Woolpack", "At Hotten Market"], "Hard", "1986", "Storylines", ["Pat Sugden", "Janie Harker", "Railway Station", "Final Journey"]],
    ["How did Pat Sugden die?", "In a car crash", ["In a house fire", "After a fall from a horse", "In a tractor accident"], "Easy", "1986", "Deaths", ["Pat Sugden", "Fatal Car Crash", "Jack Sugden", "August 1986"]],
    ["What did Pat Sugden swerve to avoid immediately before her fatal accident?", "A flock of sheep", ["A deer", "An oncoming lorry", "A fallen tree"], "Medium", "1986", "Storylines", ["Pat Sugden", "Flock Of Sheep", "Fatal Car Accident", "Road Hazard"]],
    ["Which relative of Pat Sugden returned for her funeral?", "Her sister Janie", ["Her daughter Sandie", "Her father Robert Sharp", "Her ex-husband Tom"], "Medium", "1986", "Families", ["Janie Harker", "Pat Sugden", "Funeral", "Family Return"]],
    ["Which actress played Janie Harker when she returned for Pat's funeral?", "Lesley Duff", ["Rosie Kerslake", "Annie Hulley", "Diana Davies"], "Hard", "1986", "Actors", ["Lesley Duff", "Janie Harker", "Actress", "Recasting"]],
    ["Which character was murdered after a violent quarrel?", "Harry Mowlam", ["Jackie Merrick", "Phil Pearce", "Bill Middleton"], "Medium", "1986", "Deaths", ["Harry Mowlam", "Derek Warner", "River Murder", "Violent Assault"]],
    ["Who was responsible for Harry Mowlam's death?", "Derek Warner", ["Matt Skilbeck", "Jack Sugden", "Alan Turner"], "Medium", "1986", "Crime", ["Derek Warner", "Harry Mowlam", "Murderer", "River Crime"]],
    ["Who discovered Harry Mowlam badly injured by the river?", "Henry Wilks", ["Amos Brearly", "Joe Sugden", "Donald Hinton"], "Hard", "1986", "Storylines", ["Henry Wilks", "Harry Mowlam", "Body Discovery", "Riverside"]],
    ["Which innocent farmer was charged with Harry Mowlam's murder?", "Matt Skilbeck", ["Jack Sugden", "Seth Armstrong", "Joe Sugden"], "Medium", "1986", "Crime", ["Matt Skilbeck", "Harry Mowlam", "Wrongful Murder Charge", "Police Investigation"]],
    ["What did the post-mortem establish as Harry Mowlam's cause of death?", "Drowning", ["A gunshot wound", "Poisoning", "A fractured skull"], "Hard", "1986", "Crime", ["Harry Mowlam", "Drowning", "Post-Mortem", "River Death"]],
    ["Who was promoted to regional manager of NY Estates when he returned to Beckindale?", "Joe Sugden", ["Alan Turner", "Matt Skilbeck", "Henry Wilks"], "Medium", "1986", "Characters", ["Joe Sugden", "NY Estates", "Regional Manager", "Promotion"]],
    ["Which Home Farm manager was annoyed at Joe Sugden's promotion?", "Alan Turner", ["Richard Anstey", "Trevor Thatcher", "Maurice Westrop"], "Medium", "1986", "Relationships", ["Alan Turner", "Joe Sugden", "NY Estates", "Promotion Rivalry"]],
    ["Which of Jack Sugden's former lovers went on to date Joe Sugden?", "Karen Moore", ["Caroline Bates", "Kathy Gimbel", "Sita Sharma"], "Medium", "1986", "Relationships", ["Karen Moore", "Joe Sugden", "Jack Sugden", "Former Lover"]],
    ["What was the name of Dolly Skilbeck's son from an earlier relationship who appeared?", "Graham Lodsworth", ["Nick Bates", "Mark Hughes", "Archie Brooks"], "Hard", "1986", "Families", ["Graham Lodsworth", "Dolly Skilbeck", "Earlier Relationship", "Son"]],
    ["How was Graham Lodsworth related to young Samuel Skilbeck?", "He was Samuel's half-brother", ["He was Samuel's uncle", "He was Samuel's cousin", "He was Samuel's grandfather"], "Medium", "1986", "Families", ["Graham Lodsworth", "Samuel Skilbeck", "Half-Brothers", "Dolly Skilbeck"]],
    ["Who was attacked and left for dead by badger baiters?", "Seth Armstrong", ["Amos Brearly", "Alan Turner", "Henry Wilks"], "Medium", "1986", "Storylines", ["Seth Armstrong", "Badger Baiters", "Violent Assault", "Wildlife Crime"]],
    ["Which Merrick family member began an affair with married builder Phil Pearce?", "Sandie Merrick", ["Jackie Merrick", "Pat Sugden", "Janie Harker"], "Medium", "1986", "Relationships", ["Sandie Merrick", "Phil Pearce", "Extramarital Affair", "Builder"]],
    ["Which actor played builder Phil Pearce?", "Peter Alexander", ["Richard Franklin", "Cy Chadwick", "Tony Pitts"], "Hard", "1986", "Actors", ["Peter Alexander", "Phil Pearce", "Actor", "Builder"]],
    ["What was the name of Phil Pearce's wife when he began seeing Sandie Merrick?", "Lesley", ["Caroline", "Karen", "Dolly"], "Hard", "1986", "Families", ["Lesley Pearce", "Phil Pearce", "Sandie Merrick", "Marriage"]],
    ["What was the name of Phil and Lesley Pearce's daughter?", "Diane", ["Louise", "Rachel", "Sonia"], "Hard", "1986", "Families", ["Diane Pearce", "Phil Pearce", "Lesley Pearce", "Daughter"]],
    ["Which future Emmerdale regular first appeared in September 1986?", "Eric Pollard", ["Frank Tate", "Chris Tate", "Denis Rigg"], "Easy", "1986", "Characters", ["Eric Pollard", "First Appearance", "September 1986", "Antiques Dealer"]],
    ["Which actor joined Emmerdale Farm as Eric Pollard?", "Christopher Chittell", ["Richard Thorp", "Norman Bowler", "Stan Richards"], "Easy", "1986", "Actors", ["Christopher Chittell", "Eric Pollard", "Actor", "Original Casting"]],
    ["What business did Eric Pollard manage in his early Emmerdale days?", "Hotten Market", ["The Woolpack", "Home Farm", "The village post office"], "Medium", "1986", "Characters", ["Eric Pollard", "Hotten Market", "Market Manager", "Occupation"]],
    ["Which producer took over from Richard Handford in September 1986?", "Michael Russell", ["Stuart Doughty", "Kevin Laffan", "David Goddard"], "Hard", "1986", "Production", ["Michael Russell", "Richard Handford", "Producer Succession", "Production Change"]],

    // 1987
    ["What proposed facility sparked protests in Beckindale in 1987?", "A nuclear waste dump", ["A motorway service station", "An airport runway", "A coal-fired power station"], "Easy", "1987", "Storylines", ["Nuclear Waste Dump", "Beckindale Protest", "Environmental Campaign", "Waste Disposal"]],
    ["Which fell was threatened by the proposed nuclear waste dump?", "Pencross Fell", ["Ilkley Moor", "Cross Fell", "Kinder Scout"], "Hard", "1987", "Locations", ["Pencross Fell", "Nuclear Waste", "Village Protest", "Yorkshire Location"]],
    ["Which character fell into an old mine shaft?", "Jackie Merrick", ["Nick Bates", "Archie Brooks", "Seth Armstrong"], "Medium", "1987", "Storylines", ["Jackie Merrick", "Disused Mine Shaft", "Falling Accident", "Rescue Attempt"]],
    ["What was Jackie Merrick trying to rescue when he fell down the mine shaft?", "A sheep", ["A dog", "A child", "A calf"], "Medium", "1987", "Storylines", ["Jackie Merrick", "Stray Sheep", "Mine Shaft", "Animal Rescue"]],
    ["How long was Jack Sugden imprisoned during the nuclear dump protests?", "Seven days in prison", ["A year of community service", "A fine only", "A suspended six-month sentence"], "Medium", "1987", "Crime", ["Jack Sugden", "Seven Days Imprisonment", "Court Order", "Anti-Nuclear Protest"]],
    ["Why was Jack Sugden jailed during the nuclear waste protest?", "He defied an order to stay away from the fell", ["He assaulted the vicar", "He set fire to Home Farm", "He stole government files"], "Medium", "1987", "Crime", ["Jack Sugden", "Pencross Fell", "Contempt Of Court", "Court Order"]],
    ["Who helped the Reverend Hinton organise the village campaign against the nuclear dump?", "Dolly Skilbeck", ["Caroline Bates", "Karen Moore", "Sita Sharma"], "Hard", "1987", "Storylines", ["Donald Hinton", "Dolly Skilbeck", "Anti-Nuclear Campaign", "Village Resistance"]],
    ["Who drew up the village petition opposing the nuclear dump?", "Henry Wilks", ["Amos Brearly", "Alan Turner", "Jackie Merrick"], "Hard", "1987", "Storylines", ["Henry Wilks", "Village Petition", "Nuclear Waste", "Community Campaign"]],
    ["What ultimately happened to the proposal for a nuclear waste dump near Beckindale?", "It was abandoned", ["Construction began", "It was moved to Home Farm", "It was approved by the council"], "Easy", "1987", "Storylines", ["Nuclear Waste Dump", "Abandoned Proposal", "Village Campaign", "September 1987"]],
    ["Whom did Kathy Bates date in 1987, making Jackie Merrick jealous?", "Tony Marchant", ["Phil Pearce", "Derek Warner", "Frank Tate"], "Medium", "1987", "Relationships", ["Kathy Bates", "Tony Marchant", "Jackie Merrick", "Jealousy"]],
    ["What did Jackie Merrick vandalise in a jealous rage over Kathy's new boyfriend?", "Tony Marchant's van", ["The Woolpack windows", "A tractor", "Nick Bates's motorbike"], "Hard", "1987", "Storylines", ["Jackie Merrick", "Tony Marchant", "Van Vandalism", "Jealousy"]],
    ["What weapon did a drunken Eric Pollard use to threaten Sandie Merrick?", "A poker", ["A shotgun", "An axe", "A kitchen knife"], "Hard", "1987", "Storylines", ["Eric Pollard", "Sandie Merrick", "Fireplace Poker", "Threats"]],
    ["Which character qualified as an auctioneer and took over Eric Pollard's job?", "Sandie Merrick", ["Dolly Skilbeck", "Caroline Bates", "Kathy Bates"], "Medium", "1987", "Characters", ["Sandie Merrick", "Eric Pollard", "Auctioneer", "Hotten Market"]],
    ["Which member of the Rosetti family accidentally shot himself in a 1987 storyline?", "Paolo Rosetti", ["Nicolo Rosetti", "Marian Rosetti", "Tom Merrick"], "Hard", "1987", "Storylines", ["Paolo Rosetti", "Accidental Shooting", "Rosetti Family", "Gun Injury"]],

    // 1988
    ["Which couple married in February 1988?", "Jackie Merrick and Kathy Bates", ["Jack Sugden and Sarah Connolly", "Joe Sugden and Kate Hughes", "Archie Brooks and Rachel Hughes"], "Easy", "1988", "Marriages", ["Jackie Merrick", "Kathy Bates", "Wedding", "February 1988"]],
    ["In which country did Jackie and Kathy honeymoon?", "Tunisia", ["Spain", "Italy", "France"], "Medium", "1988", "Locations", ["Jackie Merrick", "Kathy Bates", "Tunisia", "Honeymoon"]],
    ["What was historic about filming Jackie and Kathy's honeymoon?", "It was the programme's first overseas location filming", ["It was filmed entirely in a studio", "It was performed live", "It was filmed without dialogue"], "Hard", "1988", "Production", ["Tunisia", "Overseas Filming", "Jackie Merrick", "Kathy Bates"]],
    ["Which two characters bought Home Farm after NY Estates withdrew?", "Alan Turner and Joe Sugden", ["Jack Sugden and Matt Skilbeck", "Amos Brearly and Henry Wilks", "Eric Pollard and Phil Pearce"], "Medium", "1988", "Locations", ["Alan Turner", "Joe Sugden", "Home Farm", "NY Estates Sale"]],
    ["Which crooked businessman acquired Home Farm after outmanoeuvring Alan Turner and Joe Sugden?", "Denis Rigg", ["Frank Tate", "Harry Mowlam", "Christopher Meadows"], "Medium", "1988", "Characters", ["Denis Rigg", "Alan Turner", "Joe Sugden", "Home Farm Takeover"]],
    ["Who became a village hero after foiling a post office robbery?", "Nick Bates", ["Archie Brooks", "Jackie Merrick", "Seth Armstrong"], "Medium", "1988", "Storylines", ["Nick Bates", "Post Office Robbery", "Local Hero", "Robbery Foiled"]],
    ["Which timber consultant did Dolly Skilbeck have an affair with?", "Stephen Fuller", ["Denis Rigg", "Tony Marchant", "Phil Pearce"], "Medium", "1988", "Relationships", ["Dolly Skilbeck", "Stephen Fuller", "Timber Consultant", "Affair"]],
    ["How did timber consultant Stephen Fuller die?", "A tree fell on him", ["He drowned in the river", "He was shot", "He died in a plane crash"], "Medium", "1988", "Deaths", ["Stephen Fuller", "Falling Tree", "Fatal Accident", "Timber Work"]],
    ["Who was trapped inside Crossgill Farm during a serious fire?", "Annie Sugden", ["Caroline Bates", "Pat Sugden", "Kathy Bates"], "Easy", "1988", "Storylines", ["Annie Sugden", "Crossgill Farm", "Fire", "Trapped In Building"]],
    ["Which family arrived in Beckindale with Kate and her children Rachel and Mark?", "The Hughes family", ["The Tate family", "The Windsor family", "The Dingle family"], "Easy", "1988", "Families", ["Kate Hughes", "Rachel Hughes", "Mark Hughes", "New Family"]],
    ["Which actress played Kate Hughes when she arrived in Beckindale?", "Sally Knyvette", ["Malandra Burrows", "Glenda McKay", "Diana Davies"], "Medium", "1988", "Actors", ["Sally Knyvette", "Kate Hughes", "Actress", "Casting"]]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, detailTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(2601 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Emmerdale', 'Emmerdale Farm', '1980s', year, topic, ...detailTags])],
        dailyEligible: true
    };
});

// =====================================================
// VALIDATION
// =====================================================

if (
    questions.length !== 100 ||
    questions[0].id !== 'tv_2601' ||
    questions[99].id !== 'tv_2700' ||
    !questions.every(q => q.tags.some(t => /^198[3-8]$/.test(t)))
) {
    throw new Error('Pack 187: incorrect count, years or ID range');
}

const seenIds = new Set();
const seenQuestions = new Set();

for (const q of questions) {
    const key = q.question.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();

    if (
        seenIds.has(q.id) ||
        seenQuestions.has(key) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        q.category !== 'Television' ||
        !q.dailyEligible ||
        q.tags.length !== 10 ||
        q.tags.some(t => typeof t !== 'string' || !t.trim())
    ) {
        throw new Error('Pack 187: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
