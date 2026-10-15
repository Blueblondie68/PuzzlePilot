 // quiz_pack188.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Emmerdale - From late 1988 through 1991
// 100 questions: tv_2701 to tv_2800
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [
    // 1988 - The closing months of the Emmerdale Farm era
    ["Which property company withdrew from Beckindale in 1988, putting Home Farm up for sale?", "NY Estates", ["Tate Haulage", "Skipdale Breweries", "Miffield Holdings"], "Medium", "1988", "Businesses"],
    ["Which former husband unexpectedly appeared at Jackie Merrick's stag night in 1988?", "Tom Merrick", ["Malcolm Bates", "David Hughes", "Denis Rigg"], "Hard", "1988", "Families"],
    ["What driving offence led to Alan Turner's arrest in March 1988?", "Drink-driving", ["Driving without insurance", "Dangerous overtaking", "Driving a stolen car"], "Medium", "1988", "Storylines"],
    ["Which future partner of Jack Sugden first appeared in April 1988?", "Sarah Connolly", ["Kate Hughes", "Elsa Feldmann", "Elizabeth Feldmann"], "Medium", "1988", "Characters"],
    ["Which actress originally played Sarah Connolly in Emmerdale?", "Madeleine Howard", ["Sally Knyvette", "Glenda McKay", "Naomi Lewis"], "Medium", "1988", "Actors"],
    ["Who rescued Annie Sugden from the fire at Crossgill Farm in 1988?", "Phil Pearce", ["Denis Rigg", "Chris Tate", "David Hughes"], "Medium", "1988", "Storylines"],
    ["Who accidentally drove a tractor into Archie Brooks's caravan in 1988?", "Nick Bates", ["Joe Sugden", "Alan Turner", "Seth Armstrong"], "Hard", "1988", "Storylines"],
    ["Which member of the Merrick family suffered a miscarriage in March 1988?", "Sandie Merrick", ["Kathy Merrick", "Pat Sugden", "Janie Harker"], "Medium", "1988", "Storylines"],
    ["Which country did Jack Sugden leave for with Marian Rosetti and Robert in 1988?", "Italy", ["France", "Spain", "Portugal"], "Medium", "1988", "Locations"],
    ["What was the first name of Amos Brearly's brother, who visited in August 1988?", "Ezra", ["Edgar", "Ernest", "Eric"], "Hard", "1988", "Families"],
    ["Who joined Nick Bates and Phil Pearce in a burglary at Home Farm in December 1988?", "Eric Pollard", ["Archie Brooks", "Derek Warner", "Jackie Merrick"], "Hard", "1988", "Crime"],
    ["Which producer succeeded Michael Russell on Emmerdale Farm in March 1988?", "Stuart Doughty", ["Morag Bain", "Kevin Laffan", "Keith Richardson"], "Hard", "1988", "Production"],

    // 1989 - The arrival of the Tates and major departures
    ["Which villager was arrested in January 1989 over his part in Eric Pollard's antique frauds?", "Phil Pearce", ["Nick Bates", "Alan Turner", "Matt Skilbeck"], "Medium", "1989", "Crime"],
    ["Which of Kate Hughes's children disappeared briefly in January 1989?", "Mark Hughes", ["Rachel Hughes", "Robert Sugden", "Samuel Skilbeck"], "Medium", "1989", "Storylines"],
    ["Which married couple first appeared in Beckindale in January 1989?", "Pete and Lynn Whiteley", ["Frank and Kim Tate", "Joe and Kate Sugden", "Matt and Dolly Skilbeck"], "Medium", "1989", "Characters"],
    ["Which actor played Pete Whiteley?", "Jim Millea", ["Peter Amory", "Norman Bowler", "Craig McKay"], "Hard", "1989", "Actors"],
    ["Which actress played Lynn Whiteley?", "Fionnuala Ellwood", ["Sally Knyvette", "Diana Davies", "Kate Dove"], "Hard", "1989", "Actors"],
    ["What was Pete Whiteley's grandfather's first name?", "Bill", ["Bert", "Frank", "Henry"], "Medium", "1989", "Families"],
    ["Which actor portrayed Bill Whiteley?", "Teddy Turner", ["Arthur Pentelow", "Ronald Magill", "Stan Richards"], "Hard", "1989", "Actors"],
    ["What was the name of Kate Hughes's ex-husband, who appeared in 1989?", "David Hughes", ["Tony Charlton", "Denis Rigg", "Peter Whiteley"], "Medium", "1989", "Families"],
    ["Which actor played David Hughes?", "Martyn Whitby", ["Frazer Hines", "Tony Pitts", "Richard Franklin"], "Hard", "1989", "Actors"],
    ["Which couple married in April 1989?", "Joe Sugden and Kate Hughes", ["Jack Sugden and Sarah Connolly", "Chris Tate and Kathy Merrick", "Archie Brooks and Lynn Whiteley"], "Easy", "1989", "Marriages"],
    ["Which woman miscarried in April 1989 after marrying Jackie the year before?", "Kathy Merrick", ["Kate Sugden", "Dolly Skilbeck", "Elsa Feldmann"], "Medium", "1989", "Storylines"],
    ["Which Merrick family member left Beckindale for good in May 1989?", "Sandie Merrick", ["Jackie Merrick", "Kathy Merrick", "Tom Merrick"], "Medium", "1989", "Departures"],
    ["Which ruthless businessman was killed by a bull in July 1989?", "Denis Rigg", ["Frank Tate", "David Hughes", "Richard Anstey"], "Easy", "1989", "Deaths"],
    ["What had Denis Rigg been threatening to do to the Sugdens before his fatal encounter with the bull?", "Evict them from their farm", ["Sell their livestock abroad", "Close down The Woolpack", "Burn their farmhouse"], "Medium", "1989", "Storylines"],
    ["Which character accidentally shot himself while out hunting in August 1989?", "Jackie Merrick", ["Nick Bates", "Archie Brooks", "Matt Skilbeck"], "Easy", "1989", "Deaths"],
    ["What animal had Jackie Merrick gone out to hunt when his gun accidentally discharged?", "A fox", ["A rabbit", "A deer", "A badger"], "Medium", "1989", "Storylines"],
    ["Who found Jackie Merrick's body after the shooting accident?", "Seth Armstrong", ["Jack Sugden", "Alan Turner", "Henry Wilks"], "Medium", "1989", "Storylines"],
    ["Which vicar left Beckindale in August 1989?", "Donald Hinton", ["Ashley Thomas", "Tony Charlton", "Bob Jerome"], "Medium", "1989", "Departures"],
    ["Which long-serving farmer departed Beckindale for Norfolk in December 1989?", "Matt Skilbeck", ["Joe Sugden", "Jack Sugden", "Jock MacDonald"], "Easy", "1989", "Departures"],
    ["Which wealthy family arrived at Home Farm near the end of 1989?", "The Tates", ["The Dingles", "The Kings", "The Windsors"], "Easy", "1989", "Families"],
    ["Which Tate family member made his first appearance before Frank in November 1989?", "Chris Tate", ["Zoe Tate", "Kim Tate", "Joseph Tate"], "Medium", "1989", "Characters"],
    ["Which actor originally played Frank Tate?", "Norman Bowler", ["Peter Amory", "Richard Thorp", "Ian Sharrock"], "Medium", "1989", "Actors"],
    ["Which actor played Frank Tate's son Chris?", "Peter Amory", ["Norman Bowler", "Tony Pitts", "Cy Chadwick"], "Medium", "1989", "Actors"],
    ["Which actress played Kim Tate when she arrived in 1989?", "Claire King", ["Leah Bracknell", "Sally Knyvette", "Malandra Burrows"], "Easy", "1989", "Actors"],
    ["Which actress portrayed Zoe Tate?", "Leah Bracknell", ["Claire King", "Kate Dove", "Glenda McKay"], "Medium", "1989", "Actors"],
    ["How was Kim Tate related to Frank Tate when she moved into Home Farm?", "She was his wife", ["She was his daughter", "She was his sister", "She was his cousin"], "Easy", "1989", "Families"],
    ["How was Zoe Tate related to Chris Tate?", "She was his sister", ["She was his wife", "She was his aunt", "She was his cousin"], "Easy", "1989", "Families"],
    ["What was Frank Tate's principal business before he took over Home Farm?", "Haulage", ["Brewing", "Newspaper publishing", "Shipbuilding"], "Medium", "1989", "Businesses"],
    ["In which month of 1989 did Emmerdale Farm drop the word 'Farm' from its title?", "November", ["April", "August", "December"], "Medium", "1989", "Production"],
    ["What was the programme called after its 1989 title change?", "Emmerdale", ["Beckindale", "The Dales", "Home Farm"], "Easy", "1989", "Production"],
    ["Which kind of shop did Jack Sugden briefly work in during late 1989?", "A fish-and-chip shop", ["A butcher's shop", "A bakery", "A newsagent's"], "Medium", "1989", "Jobs"],
    ["What food did Jack Sugden pour over his boss Sid Flower when he quit his shop job?", "Baked beans", ["Tomato soup", "Custard", "Mashed potatoes"], "Hard", "1989", "Storylines"],
    ["Which Hughes family member was seen kissing Pete Whiteley in November 1989, angering her father?", "Rachel Hughes", ["Kate Hughes", "Sandie Merrick", "Kathy Merrick"], "Medium", "1989", "Relationships"],
    ["Which two characters appeared in December 1989 to complete the original Tate household?", "Kim and Zoe Tate", ["Rachel and Mark Hughes", "Elsa and Elizabeth Feldmann", "Lynn and Pete Whiteley"], "Medium", "1989", "Families"],
    ["Who was Jack Sugden's boss at the Hotten fish-and-chip shop in 1989?", "Sid Flower", ["Alan Turner", "Bill Whiteley", "Frank Tate"], "Hard", "1989", "Jobs"],

    // 1990 - The Feldmanns, the Whiteleys and Kate's trial
    ["Which new family arrived in Emmerdale in 1990, including Michael, Elsa and Elizabeth?", "The Feldmanns", ["The Dingles", "The Glover family", "The Windsor family"], "Easy", "1990", "Families"],
    ["Which Feldmann siblings appeared in February 1990?", "Michael and Elsa", ["Frank and Zoe", "Nick and Kathy", "Rachel and Mark"], "Medium", "1990", "Families"],
    ["What was the first name of Michael and Elsa Feldmann's mother?", "Elizabeth", ["Caroline", "Annie", "Marian"], "Medium", "1990", "Families"],
    ["Which actress originally played Elsa Feldmann?", "Naomi Lewis", ["Malandra Burrows", "Claire King", "Diana Davies"], "Hard", "1990", "Actors"],
    ["Which actor played Michael Feldmann?", "Matthew Vaughan", ["Craig McKay", "Peter Amory", "Tony Pitts"], "Hard", "1990", "Actors"],
    ["Which actress played Elizabeth Feldmann?", "Kate Dove", ["Sheila Mercier", "Sally Knyvette", "Fionnuala Ellwood"], "Hard", "1990", "Actors"],
    ["Which Bates family member became Elsa Feldmann's boyfriend?", "Nick Bates", ["Malcolm Bates", "Chris Tate", "Archie Brooks"], "Medium", "1990", "Relationships"],
    ["How did Elsa respond when Nick Bates proposed marriage in June 1990?", "She turned him down", ["She accepted immediately", "She left him at the altar", "She asked to wait until Christmas"], "Medium", "1990", "Relationships"],
    ["Which woman became pregnant with Nick Bates's child in 1990?", "Elsa Feldmann", ["Kathy Merrick", "Rachel Hughes", "Lynn Whiteley"], "Medium", "1990", "Births"],
    ["Which local councillor became a love interest for Dolly Skilbeck in 1990?", "Charlie Aindow", ["Tony Charlton", "Denis Rigg", "Bill Middleton"], "Medium", "1990", "Relationships"],
    ["Which actor played councillor Charlie Aindow?", "David Fleeshman", ["Martyn Whitby", "Richard Franklin", "Norman Bowler"], "Hard", "1990", "Actors"],
    ["Which two schoolboys set traps to catch and sell wild mink in 1990?", "Gary and Dan", ["Mark and Michael", "Chris and Nick", "Archie and Jackie"], "Hard", "1990", "Storylines"],
    ["Whose dog Lucy was caught in a mink trap set by Mark Hughes's friends?", "Kate Sugden's", ["Kim Tate's", "Annie Sugden's", "Dolly Skilbeck's"], "Hard", "1990", "Storylines"],
    ["Which character collapsed with alcohol poisoning after a party where the punch was spiked?", "Rachel Hughes", ["Elsa Feldmann", "Kathy Merrick", "Kim Tate"], "Medium", "1990", "Storylines"],
    ["Which former husband tried to disrupt Joe and Kate Sugden's marriage in 1990?", "David Hughes", ["Tom Merrick", "Malcolm Bates", "Harry Mowlam"], "Medium", "1990", "Relationships"],
    ["What did David Hughes release on New Year's Eve to make Joe Sugden late for a party?", "Joe's sheep", ["Joe's chickens", "Joe's cattle", "Joe's horses"], "Hard", "1990", "Storylines"],
    ["Which barrister defended Kate Sugden at her trial in 1990?", "Harriet Buchan", ["Caroline Bates", "Judy Westrop", "Virginia Lattimore"], "Hard", "1990", "Crime"],
    ["Which character suffered a miscarriage in May 1990 after becoming pregnant by Joe Sugden?", "Kate Sugden", ["Kathy Merrick", "Elsa Feldmann", "Lynn Whiteley"], "Medium", "1990", "Storylines"],
    ["Which Whiteley family member was killed by a car in August 1990?", "Pete Whiteley", ["Bill Whiteley", "Lynn Whiteley", "Peter Whiteley"], "Easy", "1990", "Deaths"],
    ["Who was driving the car that fatally struck Pete Whiteley?", "Kate Sugden", ["Rachel Hughes", "Fran", "Sarah Connolly"], "Easy", "1990", "Storylines"],
    ["What was the name of Kate Sugden's friend who was in the car with her when she hit Pete?", "Fran", ["Lynn", "Elsa", "Dolly"], "Hard", "1990", "Storylines"],
    ["What punishment did Kate Sugden receive after Pete Whiteley's death?", "A two-year prison sentence", ["A fine only", "Six months' probation", "Community service"], "Medium", "1990", "Crime"],
    ["Which Hughes family member had been having a relationship with married Pete Whiteley?", "Rachel Hughes", ["Mark Hughes", "Kate Sugden", "David Hughes"], "Medium", "1990", "Relationships"],
    ["What was the name of Pete and Lynn Whiteley's son, born in August 1990?", "Peter", ["Robert", "Michael", "Mark"], "Medium", "1990", "Births"],
    ["Which member of the Tate family started a romance with widowed Kathy Merrick in 1990?", "Chris Tate", ["Frank Tate", "Zoe Tate", "Nick Bates"], "Easy", "1990", "Relationships"],
    ["Which member of the Tate family horsewhipped Jock MacDonald after he was cruel to a horse?", "Zoe Tate", ["Kim Tate", "Chris Tate", "Frank Tate"], "Medium", "1990", "Storylines"],
    ["Which Home Farm worker was implicated in a barn fire during 1990?", "Jock MacDonald", ["Alan Turner", "Seth Armstrong", "Eric Pollard"], "Hard", "1990", "Storylines"],
    ["Which Woolpack stalwart suffered a stroke during 1990?", "Amos Brearly", ["Henry Wilks", "Alan Turner", "Seth Armstrong"], "Medium", "1990", "Storylines"],
    ["What was the name of the official Emmerdale fan club launched in 1990?", "The Emmerdale Club", ["The Woolpack Society", "The Dales Circle", "The Beckindale Friends"], "Hard", "1990", "Production"],
    ["Where was the official Emmerdale fan club launched in January 1990?", "London Zoo", ["The Woolpack", "York Minster", "Leeds Town Hall"], "Hard", "1990", "Production"],

    // 1991 - The Woolpack changes hands and new generations arrive
    ["Which former Home Farm manager bought Amos Brearly's share of The Woolpack in 1991?", "Alan Turner", ["Frank Tate", "Eric Pollard", "Joe Sugden"], "Easy", "1991", "Businesses"],
    ["Which brewery helped finance Alan Turner's purchase of The Woolpack?", "Skipdale Breweries", ["Ephraim Monks", "Northern Ales", "Dales Brewery"], "Hard", "1991", "Businesses"],
    ["Which long-serving Woolpack landlord retired from regular village life in January 1991?", "Amos Brearly", ["Alan Turner", "Henry Wilks", "Seth Armstrong"], "Easy", "1991", "Departures"],
    ["Which company removed The Woolpack's beer pumps and pipes after Alan changed suppliers?", "Ephraim Monks", ["Skipdale Breweries", "NY Estates", "Tate Haulage"], "Hard", "1991", "Businesses"],
    ["In which month of 1991 did The Woolpack reopen after renovations?", "March", ["January", "June", "September"], "Medium", "1991", "Locations"],
    ["Who led a customer walkout over the beer served at Alan Turner's Woolpack?", "Seth Armstrong", ["Joe Sugden", "Chris Tate", "Eric Pollard"], "Medium", "1991", "Storylines"],
    ["What did Alan Turner plan to open in The Woolpack's old taproom in 1991?", "A gourmet restaurant", ["A bowling alley", "A betting shop", "A gym"], "Medium", "1991", "Businesses"],
    ["Where did Henry Wilks move after leaving his accommodation at The Woolpack in 1991?", "Emmerdale Farm", ["Home Farm", "Whiteley's Farm", "Victoria Cottage"], "Medium", "1991", "Locations"],
    ["Which beloved former co-owner of The Woolpack died in 1991?", "Henry Wilks", ["Amos Brearly", "Seth Armstrong", "Alan Turner"], "Easy", "1991", "Deaths"],
    ["Which actor's death led to Henry Wilks being written out of Emmerdale?", "Arthur Pentelow", ["Ronald Magill", "Richard Thorp", "Stan Richards"], "Medium", "1991", "Actors"],
    ["What was the name of the daughter born to Nick Bates and Elsa Feldmann in February 1991?", "Alice", ["Louise", "Sonia", "Victoria"], "Easy", "1991", "Births"],
    ["On which date in February 1991 was Alice Bates born?", "14 February", ["3 February", "22 February", "28 February"], "Hard", "1991", "Births"],
    ["Which village vet helped deliver baby Alice Bates in 1991?", "Zoe Tate", ["Dolly Skilbeck", "Caroline Bates", "Kim Tate"], "Medium", "1991", "Births"],
    ["Who eventually took responsibility for raising Alice Bates after Elsa Feldmann left Beckindale?", "Nick Bates", ["Michael Feldmann", "Chris Tate", "Archie Brooks"], "Medium", "1991", "Families"],
    ["Which city did Elsa Feldmann move to after leaving Beckindale in 1991?", "Leeds", ["Sheffield", "York", "Bradford"], "Medium", "1991", "Locations"],
    ["Which Tate family member married Kathy Merrick in November 1991?", "Chris Tate", ["Frank Tate", "Zoe Tate", "Kim Tate"], "Easy", "1991", "Marriages"],
    ["What did Chris Tate lose to Alan Turner in a poker game before marrying Kathy?", "His motorbike", ["His car", "His watch", "His horse"], "Medium", "1991", "Storylines"],
    ["Which new barmaid began working at The Woolpack during 1991?", "Carol Nelson", ["Elsa Feldmann", "Kate Sugden", "Sita Sharma"], "Medium", "1991", "Jobs"],
    ["Which convicted criminal returned in 1991 and kidnapped Sarah Connolly?", "Jim Latimer", ["Harry Mowlam", "Denis Rigg", "Derek Warner"], "Medium", "1991", "Crime"],
    ["Which Sugden family member was the target of Jim Latimer's revenge in 1991?", "Jack Sugden", ["Joe Sugden", "Robert Sugden", "Annie Sugden"], "Medium", "1991", "Crime"],
    ["Which actress left her long-running role as Dolly Skilbeck in 1991?", "Jean Rogers", ["Sheila Mercier", "Sally Knyvette", "Diana Davies"], "Medium", "1991", "Actors"],
    ["Which university did Rachel Hughes attend after leaving school?", "Leeds University", ["York University", "Sheffield University", "Bradford University"], "Medium", "1991", "Education"],
    ["Which Yorkshire city did Kate Sugden return to after leaving Beckindale in 1991?", "Sheffield", ["Leeds", "Harrogate", "York"], "Medium", "1991", "Departures"]
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(2701 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Emmerdale', year.startsWith('198') ? '1980s' : '1990s', year, topic],
        dailyEligible: true
    };
});

module.exports = questions;
