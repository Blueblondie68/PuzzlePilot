// quiz_pack188.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Emmerdale - From 1988 through 1991
// 100 questions: tv_2701 to tv_2800
// Complete tag audit; quiz_bank.js remains unchanged.

const facts = [
    // 1988
    ["Which property company withdrew from Beckindale, putting Home Farm up for sale?", "NY Estates", ["Tate Haulage", "Skipdale Breweries", "Miffield Holdings"], "Medium", "1988", "Businesses", ["NY Estates", "Home Farm Sale", "Property Company", "Company Withdrawal"]],
    ["Which former husband unexpectedly appeared at Jackie Merrick's stag night?", "Tom Merrick", ["Malcolm Bates", "David Hughes", "Denis Rigg"], "Hard", "1988", "Families", ["Tom Merrick", "Jackie Merrick", "Stag Night", "Unexpected Guest"]],
    ["What driving offence led to Alan Turner's arrest?", "Drink-driving", ["Driving without insurance", "Dangerous overtaking", "Driving a stolen car"], "Medium", "1988", "Storylines", ["Alan Turner", "Drink Driving", "Police Arrest", "Motoring Offence"]],
    ["Which future partner of Jack Sugden first appeared?", "Sarah Connolly", ["Kate Hughes", "Elsa Feldmann", "Elizabeth Feldmann"], "Medium", "1988", "Characters", ["Sarah Connolly", "Jack Sugden", "First Appearance", "Mobile Librarian"]],
    ["Which actress originally played Sarah Connolly in Emmerdale?", "Madeleine Howard", ["Sally Knyvette", "Glenda McKay", "Naomi Lewis"], "Medium", "1988", "Actors", ["Madeleine Howard", "Sarah Connolly", "Original Actress", "Casting"]],
    ["Who rescued Annie Sugden from the fire at Crossgill Farm?", "Phil Pearce", ["Denis Rigg", "Chris Tate", "David Hughes"], "Medium", "1988", "Storylines", ["Phil Pearce", "Annie Sugden", "Crossgill Farm", "Fire Rescue"]],
    ["Who accidentally drove a tractor into Archie Brooks's caravan?", "Nick Bates", ["Joe Sugden", "Alan Turner", "Seth Armstrong"], "Hard", "1988", "Storylines", ["Nick Bates", "Archie Brooks", "Tractor Accident", "Damaged Caravan"]],
    ["Which Merrick family member suffered a miscarriage in March 1988?", "Sandie Merrick", ["Kathy Merrick", "Pat Sugden", "Janie Harker"], "Medium", "1988", "Storylines", ["Sandie Merrick", "Phil Pearce", "Miscarriage", "Pregnancy Loss"]],
    ["Which country did Jack Sugden leave for with Marian Rosetti and Robert?", "Italy", ["France", "Spain", "Portugal"], "Medium", "1988", "Locations", ["Jack Sugden", "Marian Rosetti", "Robert Sugden", "Italy Departure"]],
    ["What was the first name of Amos Brearly's visiting brother?", "Ezra", ["Edgar", "Ernest", "Eric"], "Hard", "1988", "Families", ["Ezra Brearly", "Amos Brearly", "Visiting Brother", "Family Visit"]],
    ["Who joined Nick Bates and Phil Pearce in a burglary at Home Farm?", "Eric Pollard", ["Archie Brooks", "Derek Warner", "Jackie Merrick"], "Hard", "1988", "Crime", ["Eric Pollard", "Nick Bates", "Phil Pearce", "Home Farm Burglary"]],
    ["Which producer succeeded Michael Russell on Emmerdale Farm?", "Stuart Doughty", ["Morag Bain", "Kevin Laffan", "Keith Richardson"], "Hard", "1988", "Production", ["Stuart Doughty", "Michael Russell", "New Producer", "Production Change"]],

    // 1989
    ["Which villager was arrested in January 1989 over his part in Eric Pollard's antique frauds?", "Phil Pearce", ["Nick Bates", "Alan Turner", "Matt Skilbeck"], "Medium", "1989", "Crime", ["Phil Pearce", "Eric Pollard", "Antique Fraud", "Police Arrest"]],
    ["Which of Kate Hughes's children disappeared briefly?", "Mark Hughes", ["Rachel Hughes", "Robert Sugden", "Samuel Skilbeck"], "Medium", "1989", "Storylines", ["Mark Hughes", "Kate Hughes", "Missing Child", "Search"]],
    ["Which married couple first appeared in Beckindale in January 1989?", "Pete and Lynn Whiteley", ["Frank and Kim Tate", "Joe and Kate Sugden", "Matt and Dolly Skilbeck"], "Medium", "1989", "Characters", ["Pete Whiteley", "Lynn Whiteley", "New Couple", "Village Arrivals"]],
    ["Which actor played Pete Whiteley?", "Jim Millea", ["Peter Amory", "Norman Bowler", "Craig McKay"], "Hard", "1989", "Actors", ["Jim Millea", "Pete Whiteley", "Actor", "Original Casting"]],
    ["Which actress played Lynn Whiteley?", "Fionnuala Ellwood", ["Sally Knyvette", "Diana Davies", "Kate Dove"], "Hard", "1989", "Actors", ["Fionnuala Ellwood", "Lynn Whiteley", "Actress", "Original Casting"]],
    ["What was Pete Whiteley's grandfather's first name?", "Bill", ["Bert", "Frank", "Henry"], "Medium", "1989", "Families", ["Bill Whiteley", "Pete Whiteley", "Grandfather", "Family Relationship"]],
    ["Which actor portrayed Bill Whiteley?", "Teddy Turner", ["Arthur Pentelow", "Ronald Magill", "Stan Richards"], "Hard", "1989", "Actors", ["Teddy Turner", "Bill Whiteley", "Actor", "Original Casting"]],
    ["Who was Kate Hughes's ex-husband?", "David Hughes", ["Tony Charlton", "Denis Rigg", "Peter Whiteley"], "Medium", "1989", "Families", ["David Hughes", "Kate Hughes", "Former Husband", "Divorce"]],
    ["Which actor played David Hughes?", "Martyn Whitby", ["Frazer Hines", "Tony Pitts", "Richard Franklin"], "Hard", "1989", "Actors", ["Martyn Whitby", "David Hughes", "Actor", "New Arrival"]],
    ["Which couple married in Beckindale in April 1989?", "Joe Sugden and Kate Hughes", ["Jack Sugden and Sarah Connolly", "Chris Tate and Kathy Merrick", "Archie Brooks and Lynn Whiteley"], "Easy", "1989", "Marriages", ["Joe Sugden", "Kate Hughes", "Wedding", "April 1989"]],
    ["Which woman suffered a miscarriage after marrying Jackie Merrick?", "Kathy Merrick", ["Kate Sugden", "Dolly Skilbeck", "Elsa Feldmann"], "Medium", "1989", "Storylines", ["Kathy Merrick", "Jackie Merrick", "Miscarriage", "Pregnancy Loss"]],
    ["Which Merrick family member left Beckindale for good?", "Sandie Merrick", ["Jackie Merrick", "Kathy Merrick", "Tom Merrick"], "Medium", "1989", "Departures", ["Sandie Merrick", "Village Departure", "Merrick Family", "May 1989"]],
    ["Which ruthless businessman was killed by a bull?", "Denis Rigg", ["Frank Tate", "David Hughes", "Richard Anstey"], "Easy", "1989", "Deaths", ["Denis Rigg", "Bull Attack", "Home Farm", "Fatal Accident"]],
    ["What had Denis Rigg been threatening to do to the Sugdens before his fatal encounter with the bull?", "Evict them from their farm", ["Sell their livestock abroad", "Close down The Woolpack", "Burn their farmhouse"], "Medium", "1989", "Storylines", ["Denis Rigg", "Sugden Family", "Eviction Threat", "Family Farm"]],
    ["Which character accidentally shot himself while out hunting?", "Jackie Merrick", ["Nick Bates", "Archie Brooks", "Matt Skilbeck"], "Easy", "1989", "Deaths", ["Jackie Merrick", "Accidental Shooting", "Hunting Accident", "Fatality"]],
    ["What animal had Jackie Merrick gone out to hunt when his gun accidentally discharged?", "A fox", ["A rabbit", "A deer", "A badger"], "Medium", "1989", "Storylines", ["Jackie Merrick", "Fox Hunting", "Shotgun", "Accident"]],
    ["Who found Jackie Merrick's body after the shooting accident?", "Seth Armstrong", ["Jack Sugden", "Alan Turner", "Henry Wilks"], "Medium", "1989", "Storylines", ["Seth Armstrong", "Jackie Merrick", "Body Discovery", "Hunting Accident"]],
    ["Which vicar left Beckindale in August 1989?", "Donald Hinton", ["Ashley Thomas", "Tony Charlton", "Bob Jerome"], "Medium", "1989", "Departures", ["Reverend Donald Hinton", "Village Vicar", "Departure", "August 1989"]],
    ["Which long-serving farmer departed Beckindale for Norfolk?", "Matt Skilbeck", ["Joe Sugden", "Jack Sugden", "Jock MacDonald"], "Easy", "1989", "Departures", ["Matt Skilbeck", "Norfolk", "Farm Retirement", "Leaving Beckindale"]],
    ["Which wealthy family arrived at Home Farm?", "The Tates", ["The Dingles", "The Kings", "The Windsors"], "Easy", "1989", "Families", ["Tate Family", "Home Farm", "New Owners", "Wealthy Arrivals"]],
    ["Which Tate family member made his first appearance before Frank?", "Chris Tate", ["Zoe Tate", "Kim Tate", "Joseph Tate"], "Medium", "1989", "Characters", ["Chris Tate", "Frank Tate", "November 1989", "First Appearance"]],
    ["Which actor originally played Frank Tate?", "Norman Bowler", ["Peter Amory", "Richard Thorp", "Ian Sharrock"], "Medium", "1989", "Actors", ["Norman Bowler", "Frank Tate", "Actor", "Original Casting"]],
    ["Which actor played Frank Tate's son Chris?", "Peter Amory", ["Norman Bowler", "Tony Pitts", "Cy Chadwick"], "Medium", "1989", "Actors", ["Peter Amory", "Chris Tate", "Actor", "Original Casting"]],
    ["Which actress played Kim Tate when she arrived?", "Claire King", ["Leah Bracknell", "Sally Knyvette", "Malandra Burrows"], "Easy", "1989", "Actors", ["Claire King", "Kim Tate", "Actress", "Original Casting"]],
    ["Which actress portrayed Zoe Tate?", "Leah Bracknell", ["Claire King", "Kate Dove", "Glenda McKay"], "Medium", "1989", "Actors", ["Leah Bracknell", "Zoe Tate", "Actress", "Original Casting"]],
    ["How was Kim Tate related to Frank Tate when she moved into Home Farm?", "She was his wife", ["She was his daughter", "She was his sister", "She was his cousin"], "Easy", "1989", "Families", ["Kim Tate", "Frank Tate", "Husband And Wife", "Home Farm"]],
    ["How was Zoe Tate related to Chris Tate?", "She was his sister", ["She was his wife", "She was his aunt", "She was his cousin"], "Easy", "1989", "Families", ["Zoe Tate", "Chris Tate", "Brother And Sister", "Tate Family"]],
    ["What was Frank Tate's principal business before he took over Home Farm?", "Haulage", ["Brewing", "Newspaper publishing", "Shipbuilding"], "Medium", "1989", "Businesses", ["Frank Tate", "Haulage Business", "Tate Haulage", "Home Farm Purchase"]],
    ["In which month of 1989 did Emmerdale Farm drop the word 'Farm' from its title?", "November", ["April", "August", "December"], "Medium", "1989", "Production", ["Original Programme Title", "Title Change", "November 1989", "Programme Rebrand"]],
    ["What was the programme called after dropping the word Farm from its title?", "Emmerdale", ["Beckindale", "The Dales", "Home Farm"], "Easy", "1989", "Production", ["New Programme Title", "Original Programme Title", "Title Change", "Programme Rebrand"]],
    ["What kind of shop did Jack Sugden briefly work in before quitting after a row with Sid Flower?", "A fish-and-chip shop", ["A butcher's shop", "A bakery", "A newsagent's"], "Medium", "1989", "Jobs", ["Jack Sugden", "Hotten", "Fish And Chip Shop", "Temporary Job"]],
    ["What food did Jack Sugden pour over his boss Sid Flower when he quit his shop job?", "Baked beans", ["Tomato soup", "Custard", "Mashed potatoes"], "Hard", "1989", "Storylines", ["Jack Sugden", "Sid Flower", "Baked Beans", "Workplace Protest"]],
    ["Which Hughes family member was seen kissing Pete Whiteley in November 1989, angering her father?", "Rachel Hughes", ["Kate Hughes", "Sandie Merrick", "Kathy Merrick"], "Medium", "1989", "Relationships", ["Rachel Hughes", "Pete Whiteley", "David Hughes", "Affair Discovered"]],
    ["Which two characters appeared in December 1989 to complete the original Tate household?", "Kim and Zoe Tate", ["Rachel and Mark Hughes", "Elsa and Elizabeth Feldmann", "Lynn and Pete Whiteley"], "Medium", "1989", "Families", ["Kim Tate", "Zoe Tate", "Tate Household", "December 1989"]],
    ["Who was Jack Sugden's boss at the Hotten fish-and-chip shop?", "Sid Flower", ["Alan Turner", "Bill Whiteley", "Frank Tate"], "Hard", "1989", "Jobs", ["Sid Flower", "Jack Sugden", "Chip Shop Manager", "Hotten"]],

    // 1990
    ["Which new family arrived in Emmerdale, including Michael, Elsa and Elizabeth?", "The Feldmanns", ["The Dingles", "The Glover family", "The Windsor family"], "Easy", "1990", "Families", ["Feldmann Family", "Michael Feldmann", "Elsa Feldmann", "Elizabeth Feldmann"]],
    ["Which Feldmann siblings appeared?", "Michael and Elsa", ["Frank and Zoe", "Nick and Kathy", "Rachel and Mark"], "Medium", "1990", "Families", ["Michael Feldmann", "Elsa Feldmann", "Brother And Sister", "Family Arrivals"]],
    ["What was the first name of Michael and Elsa Feldmann's mother?", "Elizabeth", ["Caroline", "Annie", "Marian"], "Medium", "1990", "Families", ["Elizabeth Feldmann", "Michael Feldmann", "Elsa Feldmann", "Motherhood"]],
    ["Which actress originally played Elsa Feldmann?", "Naomi Lewis", ["Malandra Burrows", "Claire King", "Diana Davies"], "Hard", "1990", "Actors", ["Naomi Lewis", "Elsa Feldmann", "Actress", "Original Casting"]],
    ["Which actor played Michael Feldmann?", "Matthew Vaughan", ["Craig McKay", "Peter Amory", "Tony Pitts"], "Hard", "1990", "Actors", ["Matthew Vaughan", "Michael Feldmann", "Actor", "Original Casting"]],
    ["Which actress played Elizabeth Feldmann?", "Kate Dove", ["Sheila Mercier", "Sally Knyvette", "Fionnuala Ellwood"], "Hard", "1990", "Actors", ["Kate Dove", "Elizabeth Feldmann", "Actress", "Original Casting"]],
    ["Which Bates family member became Elsa Feldmann's boyfriend?", "Nick Bates", ["Malcolm Bates", "Chris Tate", "Archie Brooks"], "Medium", "1990", "Relationships", ["Nick Bates", "Elsa Feldmann", "Young Romance", "Courtship"]],
    ["How did Elsa respond when Nick Bates proposed marriage?", "She turned him down", ["She accepted immediately", "She left him at the altar", "She asked to wait until Christmas"], "Medium", "1990", "Relationships", ["Nick Bates", "Elsa Feldmann", "Rejected Proposal", "June 1990"]],
    ["Which woman became pregnant with Nick Bates's child?", "Elsa Feldmann", ["Kathy Merrick", "Rachel Hughes", "Lynn Whiteley"], "Medium", "1990", "Births", ["Elsa Feldmann", "Nick Bates", "Pregnancy", "Alice Bates"]],
    ["Which local councillor became a love interest for Dolly Skilbeck?", "Charlie Aindow", ["Tony Charlton", "Denis Rigg", "Bill Middleton"], "Medium", "1990", "Relationships", ["Charlie Aindow", "Dolly Skilbeck", "Local Councillor", "Romance"]],
    ["Which actor played councillor Charlie Aindow?", "David Fleeshman", ["Martyn Whitby", "Richard Franklin", "Norman Bowler"], "Hard", "1990", "Actors", ["David Fleeshman", "Charlie Aindow", "Actor", "Local Councillor"]],
    ["Which two schoolboys set traps to catch and sell wild mink?", "Gary and Dan", ["Mark and Michael", "Chris and Nick", "Archie and Jackie"], "Hard", "1990", "Storylines", ["Gary And Dan", "Wild Mink", "Animal Traps", "Schoolboys"]],
    ["Whose dog Lucy was caught in a mink trap set by Mark Hughes's friends?", "Kate Sugden's", ["Kim Tate's", "Annie Sugden's", "Dolly Skilbeck's"], "Hard", "1990", "Storylines", ["Kate Sugden", "Lucy The Dog", "Mink Trap", "Animal Injury"]],
    ["Which character collapsed with alcohol poisoning after a party where the punch was spiked?", "Rachel Hughes", ["Elsa Feldmann", "Kathy Merrick", "Kim Tate"], "Medium", "1990", "Storylines", ["Rachel Hughes", "Spiked Punch", "Alcohol Poisoning", "Party"]],
    ["Which former husband tried to disrupt Joe and Kate Sugden's marriage?", "David Hughes", ["Tom Merrick", "Malcolm Bates", "Harry Mowlam"], "Medium", "1990", "Relationships", ["David Hughes", "Joe Sugden", "Kate Sugden", "Marriage Interference"]],
    ["What did David Hughes release on New Year's Eve to make Joe Sugden late for a party?", "Joe's sheep", ["Joe's chickens", "Joe's cattle", "Joe's horses"], "Hard", "1990", "Storylines", ["David Hughes", "Joe Sugden", "Escaped Sheep", "New Years Eve"]],
    ["Which barrister defended Kate Sugden at her trial?", "Harriet Buchan", ["Caroline Bates", "Judy Westrop", "Virginia Lattimore"], "Hard", "1990", "Crime", ["Harriet Buchan", "Kate Sugden", "Trial Barrister", "Court Defence"]],
    ["Which character suffered a miscarriage after becoming pregnant by Joe Sugden?", "Kate Sugden", ["Kathy Merrick", "Elsa Feldmann", "Lynn Whiteley"], "Medium", "1990", "Storylines", ["Kate Sugden", "Joe Sugden", "Miscarriage", "May 1990"]],
    ["Which Whiteley family member was killed by a car?", "Pete Whiteley", ["Bill Whiteley", "Lynn Whiteley", "Peter Whiteley"], "Easy", "1990", "Deaths", ["Pete Whiteley", "Road Accident", "Hit And Run", "August 1990"]],
    ["Who was driving the car that fatally struck Pete Whiteley?", "Kate Sugden", ["Rachel Hughes", "Fran", "Sarah Connolly"], "Easy", "1990", "Storylines", ["Kate Sugden", "Pete Whiteley", "Fatal Car Collision", "Drink Driving"]],
    ["What was the name of Kate Sugden's friend who was in the car with her when she hit Pete?", "Fran", ["Lynn", "Elsa", "Dolly"], "Hard", "1990", "Storylines", ["Fran", "Kate Sugden", "Pete Whiteley", "Car Passenger"]],
    ["What punishment did Kate Sugden receive after Pete Whiteley's death?", "A two-year prison sentence", ["A fine only", "Six months' probation", "Community service"], "Medium", "1990", "Crime", ["Kate Sugden", "Pete Whiteley", "Manslaughter", "Two Year Sentence"]],
    ["Which Hughes family member had been having a relationship with married Pete Whiteley?", "Rachel Hughes", ["Mark Hughes", "Kate Sugden", "David Hughes"], "Medium", "1990", "Relationships", ["Rachel Hughes", "Pete Whiteley", "Extramarital Affair", "Secret Romance"]],
    ["What was the name of Pete and Lynn Whiteley's baby son?", "Peter", ["Robert", "Michael", "Mark"], "Medium", "1990", "Births", ["Peter Whiteley", "Pete Whiteley", "Lynn Whiteley", "Newborn Son"]],
    ["Which member of the Tate family started a romance with widowed Kathy Merrick?", "Chris Tate", ["Frank Tate", "Zoe Tate", "Nick Bates"], "Easy", "1990", "Relationships", ["Chris Tate", "Kathy Merrick", "Widowed Lover", "Romance"]],
    ["Which member of the Tate family horsewhipped Jock MacDonald after he was cruel to a horse?", "Zoe Tate", ["Kim Tate", "Chris Tate", "Frank Tate"], "Medium", "1990", "Storylines", ["Zoe Tate", "Jock MacDonald", "Horsewhipping", "Animal Cruelty"]],
    ["Which Home Farm worker was implicated in a barn fire?", "Jock MacDonald", ["Alan Turner", "Seth Armstrong", "Eric Pollard"], "Hard", "1990", "Storylines", ["Jock MacDonald", "Home Farm", "Barn Fire", "Suspicion"]],
    ["Which Woolpack stalwart suffered a stroke?", "Amos Brearly", ["Henry Wilks", "Alan Turner", "Seth Armstrong"], "Medium", "1990", "Storylines", ["Amos Brearly", "The Woolpack", "Stroke", "Health Crisis"]],
    ["What was the name of Emmerdale's first official fan club?", "The Emmerdale Club", ["The Woolpack Society", "The Dales Circle", "The Beckindale Friends"], "Hard", "1990", "Production", ["The Emmerdale Club", "Official Fan Club", "1990 Launch", "Soap Fandom"]],
    ["Where was the official Emmerdale fan club launched?", "London Zoo", ["The Woolpack", "York Minster", "Leeds Town Hall"], "Hard", "1990", "Production", ["London Zoo", "The Emmerdale Club", "Fan Club Launch", "January 1990"]],

    // 1991
    ["Which former Home Farm manager bought Amos Brearly's share of The Woolpack?", "Alan Turner", ["Frank Tate", "Eric Pollard", "Joe Sugden"], "Easy", "1991", "Businesses", ["Alan Turner", "Amos Brearly", "The Woolpack", "Pub Ownership"]],
    ["Which brewery helped finance Alan Turner's purchase of The Woolpack?", "Skipdale Breweries", ["Ephraim Monks", "Northern Ales", "Dales Brewery"], "Hard", "1991", "Businesses", ["Skipdale Breweries", "Alan Turner", "The Woolpack", "Pub Finance"]],
    ["Which long-serving Woolpack landlord retired from regular village life?", "Amos Brearly", ["Alan Turner", "Henry Wilks", "Seth Armstrong"], "Easy", "1991", "Departures", ["Amos Brearly", "The Woolpack", "Retirement", "January 1991"]],
    ["Which company removed The Woolpack's beer pumps and pipes after Alan changed suppliers?", "Ephraim Monks", ["Skipdale Breweries", "NY Estates", "Tate Haulage"], "Hard", "1991", "Businesses", ["Ephraim Monks", "Beer Pumps", "The Woolpack", "Brewery Dispute"]],
    ["In which month of 1991 did The Woolpack reopen after renovations?", "March", ["January", "June", "September"], "Medium", "1991", "Locations", ["The Woolpack", "March 1991", "Reopening", "Refurbishment"]],
    ["Who led a customer walkout over the beer served at Alan Turner's Woolpack?", "Seth Armstrong", ["Joe Sugden", "Chris Tate", "Eric Pollard"], "Medium", "1991", "Storylines", ["Seth Armstrong", "Alan Turner", "Beer Boycott", "Customer Walkout"]],
    ["What did Alan Turner plan to open in The Woolpack's old taproom?", "A gourmet restaurant", ["A bowling alley", "A betting shop", "A gym"], "Medium", "1991", "Businesses", ["Alan Turner", "Gourmet Restaurant", "The Woolpack", "Old Taproom"]],
    ["Where did Henry Wilks move after leaving his accommodation at The Woolpack?", "Emmerdale Farm", ["Home Farm", "Whiteley's Farm", "Victoria Cottage"], "Medium", "1991", "Locations", ["Henry Wilks", "Sugden Farmhouse", "Pub Accommodation", "Change Of Home"]],
    ["Which beloved former co-owner of The Woolpack died?", "Henry Wilks", ["Amos Brearly", "Seth Armstrong", "Alan Turner"], "Easy", "1991", "Deaths", ["Henry Wilks", "The Woolpack", "Heart Attack", "Death"]],
    ["Which actor's death led to Henry Wilks being written out of Emmerdale?", "Arthur Pentelow", ["Ronald Magill", "Richard Thorp", "Stan Richards"], "Medium", "1991", "Actors", ["Arthur Pentelow", "Henry Wilks", "Actor Death", "Character Exit"]],
    ["What was the name of the daughter born to Nick Bates and Elsa Feldmann?", "Alice", ["Louise", "Sonia", "Victoria"], "Easy", "1991", "Births", ["Alice Bates", "Nick Bates", "Elsa Feldmann", "Newborn Daughter"]],
    ["On which date in February 1991 was Alice Bates born?", "14 February", ["3 February", "22 February", "28 February"], "Hard", "1991", "Births", ["Alice Bates", "14 February 1991", "Valentines Day", "Date Of Birth"]],
    ["Which village vet helped deliver baby Alice Bates?", "Zoe Tate", ["Dolly Skilbeck", "Caroline Bates", "Kim Tate"], "Medium", "1991", "Births", ["Zoe Tate", "Alice Bates", "Premature Birth", "Veterinary Delivery"]],
    ["Who eventually took responsibility for raising Alice Bates after Elsa Feldmann left Beckindale?", "Nick Bates", ["Michael Feldmann", "Chris Tate", "Archie Brooks"], "Medium", "1991", "Families", ["Nick Bates", "Alice Bates", "Elsa Feldmann", "Fatherhood"]],
    ["Which city did Elsa Feldmann move to after leaving Beckindale?", "Leeds", ["Sheffield", "York", "Bradford"], "Medium", "1991", "Locations", ["Elsa Feldmann", "Leeds", "Alice Bates", "Departure"]],
    ["Which Tate family member married Kathy Merrick?", "Chris Tate", ["Frank Tate", "Zoe Tate", "Kim Tate"], "Easy", "1991", "Marriages", ["Chris Tate", "Kathy Merrick", "Wedding", "November 1991"]],
    ["What did Chris Tate lose to Alan Turner in a poker game before marrying Kathy?", "His motorbike", ["His car", "His watch", "His horse"], "Medium", "1991", "Storylines", ["Chris Tate", "Alan Turner", "Poker Loss", "Motorbike"]],
    ["Which new barmaid began working at The Woolpack?", "Carol Nelson", ["Elsa Feldmann", "Kate Sugden", "Sita Sharma"], "Medium", "1991", "Jobs", ["Carol Nelson", "The Woolpack", "New Barmaid", "Employment"]],
    ["Which convicted criminal returned in 1991 and kidnapped Sarah Connolly?", "Jim Latimer", ["Harry Mowlam", "Denis Rigg", "Derek Warner"], "Medium", "1991", "Crime", ["Jim Latimer", "Sarah Connolly", "Kidnapping", "Prison Release"]],
    ["Which Sugden family member was the target of Jim Latimer's revenge?", "Jack Sugden", ["Joe Sugden", "Robert Sugden", "Annie Sugden"], "Medium", "1991", "Crime", ["Jack Sugden", "Jim Latimer", "Revenge Plot", "Sarah Connolly"]],
    ["Which actress left her long-running role as Dolly Skilbeck?", "Jean Rogers", ["Sheila Mercier", "Sally Knyvette", "Diana Davies"], "Medium", "1991", "Actors", ["Jean Rogers", "Dolly Skilbeck", "Actress Departure", "Long Running Role"]],
    ["Which university did Rachel Hughes attend after leaving school?", "Leeds University", ["York University", "Sheffield University", "Bradford University"], "Medium", "1991", "Education", ["Rachel Hughes", "University Of Leeds", "Higher Education", "Student Life"]],
    ["Which Yorkshire city did Kate Sugden return to after leaving Beckindale?", "Sheffield", ["Leeds", "Harrogate", "York"], "Medium", "1991", "Departures", ["Kate Sugden", "Sheffield", "Joe Sugden", "Village Departure"]]
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, detailTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(2701 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Emmerdale', 'Emmerdale Farm', year.startsWith('198') ? '1980s' : '1990s', year, topic, ...detailTags])],
        dailyEligible: true
    };
});

// =====================================================
// VALIDATION
// =====================================================

if (
    questions.length !== 100 ||
    questions[0].id !== 'tv_2701' ||
    questions[99].id !== 'tv_2800' ||
    questions.filter(q => q.tags.includes('1988')).length !== 12 ||
    questions.filter(q => q.tags.includes('1989')).length !== 35 ||
    questions.filter(q => q.tags.includes('1990')).length !== 30 ||
    questions.filter(q => q.tags.includes('1991')).length !== 23
) {
    throw new Error('Pack 188: invalid count, ID range or year distribution');
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
        throw new Error('Pack 188: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
