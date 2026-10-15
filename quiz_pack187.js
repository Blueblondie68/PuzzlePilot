// quiz_pack187.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Emmerdale Farm - The 1980s (1983-1988)
// 100 questions: tv_2601 to tv_2700
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [
    // 1983
    ["Which Merrick family member faced an unplanned pregnancy in 1983?", "Sandie Merrick", ["Jackie Merrick", "Pat Sugden", "Janie Harker"], "Easy", "1983", "Families"],
    ["Who was the father of Sandie Merrick's baby born in 1983?", "Andy Longthorn", ["David Blakemore", "Graham Jelks", "Archie Brooks"], "Medium", "1983", "Families"],
    ["What was the name of Sandie Merrick's daughter, born in 1983?", "Louise", ["Rachel", "Sonia", "Diane"], "Medium", "1983", "Births"],
    ["In which Scottish city did Sandie Merrick give birth to her daughter?", "Aberdeen", ["Edinburgh", "Glasgow", "Dundee"], "Hard", "1983", "Locations"],
    ["Which parent did Sandie go to stay with when she left Beckindale during her pregnancy?", "Her father, Tom Merrick", ["Her mother, Pat Sugden", "Her stepfather, Jack Sugden", "Her grandfather, Sam Pearson"], "Medium", "1983", "Families"],
    ["What decision did Sandie Merrick make about baby Louise after the birth?", "She placed her for adoption", ["She left her with Dolly", "She sent her to France", "She gave custody to Jackie"], "Medium", "1983", "Storylines"],
    ["Which vicar's married daughter did Joe Sugden become involved with in 1983?", "Barbara Peters", ["Caroline Bates", "Karen Moore", "Alison Caswell"], "Medium", "1983", "Relationships"],
    ["Who played Barbara Peters in Emmerdale Farm?", "Rosie Kerslake", ["Diana Davies", "Annie Hulley", "Mamta Kash"], "Hard", "1983", "Actors"],
    ["To which country did Joe Sugden go after his unsuccessful romance in 1983?", "France", ["Italy", "Spain", "Canada"], "Easy", "1983", "Characters"],
    ["Which future village regular arrived in Beckindale in November 1983?", "Archie Brooks", ["Eric Pollard", "Nick Bates", "Phil Pearce"], "Medium", "1983", "Characters"],
    ["Which actor played Archie Brooks from 1983?", "Tony Pitts", ["Cy Chadwick", "Peter Alexander", "Richard Thorp"], "Medium", "1983", "Actors"],
    ["What was one of Archie Brooks's earliest jobs in Beckindale?", "Road sweeper", ["Postman", "School caretaker", "Milkman"], "Hard", "1983", "Characters"],
    ["Which Merrick briefly went out with Archie Brooks after his arrival?", "Sandie Merrick", ["Pat Merrick", "Janie Merrick", "Louise Merrick"], "Hard", "1983", "Relationships"],
    ["Which friend arrived alongside Archie Brooks in Beckindale in 1983?", "Mike Conrad", ["Phil Pearce", "Derek Warner", "Tony Marchant"], "Hard", "1983", "Characters"],
    ["What holiday destination did Sam Pearson win a cruise to in 1983?", "The Canary Islands", ["The Greek Islands", "The Caribbean", "The Norwegian fjords"], "Hard", "1983", "Storylines"],
    ["What prize did Amos Brearly win in the 1983 competition entered by Sam Pearson?", "A tricycle", ["A caravan", "A television", "A fishing rod"], "Hard", "1983", "Storylines"],

    // 1984
    ["With whom did married Jack Sugden have an affair in 1984?", "Karen Moore", ["Caroline Bates", "Sita Sharma", "Alison Caswell"], "Easy", "1984", "Relationships"],
    ["Which actress played Karen Moore in Emmerdale Farm?", "Annie Hulley", ["Diana Davies", "Malandra Burrows", "Jean Rogers"], "Hard", "1984", "Actors"],
    ["Who started working as Alan Turner's secretary at NY Estates in 1984?", "Caroline Bates", ["Karen Moore", "Dolly Skilbeck", "Sandie Merrick"], "Medium", "1984", "Characters"],
    ["Which actress portrayed Caroline Bates?", "Diana Davies", ["Annie Hulley", "Sally Knyvette", "Helen Weir"], "Hard", "1984", "Actors"],
    ["What was the name of Caroline Bates's dog that Jackie shot in 1984?", "Bundle", ["Snip", "Shep", "Bess"], "Hard", "1984", "Characters"],
    ["Who shot Caroline Bates's dog during a controversial 1984 storyline?", "Jackie Merrick", ["Harry Mowlam", "Archie Brooks", "Tom Merrick"], "Medium", "1984", "Storylines"],
    ["Which pub suffered an explosion involving Amos Brearly's cooker in 1984?", "The Woolpack", ["The Malt Shovel", "The Royal Oak", "The King's Arms"], "Medium", "1984", "Locations"],
    ["Who made an unreliable repair to The Woolpack's boiler during the mid-1980s?", "Archie Brooks", ["Matt Skilbeck", "Alan Turner", "Donald Hinton"], "Medium", "1984", "Storylines"],
    ["Whose car brakes did Archie Brooks tamper with after being asked to repair the motor?", "Alan Turner's", ["Jack Sugden's", "Henry Wilks's", "Joe Sugden's"], "Hard", "1984", "Storylines"],
    ["Whose motorbike did Jackie, Archie and Mike steal after a dispute early in 1984?", "Harry Mowlam's", ["Seth Armstrong's", "Tom Merrick's", "Jock MacDonald's"], "Hard", "1984", "Storylines"],
    ["Which elderly member of the Sugden family died in his sleep in 1984?", "Sam Pearson", ["Amos Brearly", "Henry Wilks", "Donald Hinton"], "Easy", "1984", "Deaths"],
    ["Which original cast actor, who played Sam Pearson, died in 1984?", "Toke Townley", ["Ronald Magill", "Arthur Pentelow", "Stan Richards"], "Medium", "1984", "Actors"],
    ["Which creator of Emmerdale Farm wrote his last script for the programme in 1984?", "Kevin Laffan", ["Tony Hatch", "Michael Russell", "Keith Richardson"], "Medium", "1984", "Production"],
    ["What type of threat to Beckindale's water supply was linked to Alan Turner's dam in 1984?", "A blockage", ["A chemical spill", "A burst main", "A drought"], "Hard", "1984", "Storylines"],
    ["Which NY Estates executive warned Alan Turner about his conduct in early 1984?", "Christopher Meadows", ["Denis Rigg", "Frank Tate", "George Verney"], "Hard", "1984", "Characters"],

    // 1985
    ["Whose vehicle collided with Jackie Merrick's motorbike in 1985?", "Alan Turner's Land Rover", ["Jack Sugden's tractor", "Seth Armstrong's van", "Joe Sugden's car"], "Easy", "1985", "Storylines"],
    ["In which month of 1985 did Jackie Merrick suffer his serious road accident?", "April", ["February", "July", "November"], "Medium", "1985", "Storylines"],
    ["Where did Jackie Merrick spend several months after his 1985 accident?", "Hospital", ["Prison", "France", "A rehabilitation centre in Scotland"], "Medium", "1985", "Storylines"],
    ["Which nurse did Jackie Merrick fall for while recovering from his crash?", "Sita Sharma", ["Karen Moore", "Caroline Bates", "Alison Caswell"], "Medium", "1985", "Relationships"],
    ["Which actress played nurse Sita Sharma?", "Mamta Kash", ["Diana Davies", "Rosie Kerslake", "Jane Hutcheson"], "Hard", "1985", "Actors"],
    ["What commitment did Jackie Merrick make to Sita Sharma after their romance began?", "They became engaged", ["They bought a pub", "They adopted a child", "They moved to France"], "Medium", "1985", "Relationships"],
    ["Which woman had Jackie Merrick dated earlier in 1985 before meeting Sita?", "Alison Caswell", ["Kate Hughes", "Karen Moore", "Sandie Merrick"], "Hard", "1985", "Relationships"],
    ["Which Home Farm operation was Kathy Bates put in charge of after joining NY Estates?", "The poultry unit", ["The dairy herd", "The sheep flock", "The forestry unit"], "Medium", "1985", "Characters"],
    ["Which actor played Nick Bates when he arrived in Emmerdale Farm?", "Cy Chadwick", ["Tony Pitts", "Ian Sharrock", "Peter Alexander"], "Medium", "1985", "Actors"],
    ["Which actress played Kathy Bates?", "Malandra Burrows", ["Jean Rogers", "Sally Knyvette", "Helen Weir"], "Easy", "1985", "Actors"],
    ["How were Nick and Kathy Bates related?", "Brother and sister", ["Husband and wife", "Cousins", "Stepfather and daughter"], "Easy", "1985", "Families"],
    ["Who was the mother of Kathy and Nick Bates?", "Caroline Bates", ["Annie Sugden", "Dolly Skilbeck", "Pat Sugden"], "Medium", "1985", "Families"],
    ["What was the first name of Nick Bates's troubled father?", "Malcolm", ["Martin", "Michael", "Maurice"], "Hard", "1985", "Families"],
    ["With which villager did Nick Bates move in after arriving in Beckindale?", "Archie Brooks", ["Seth Armstrong", "Jackie Merrick", "Alan Turner"], "Hard", "1985", "Characters"],
    ["Which criminal farmer took part in an armed security-van robbery in 1985?", "Harry Mowlam", ["Enoch Tolly", "Jim Gimbel", "George Verney"], "Medium", "1985", "Crime"],
    ["Which of Harry Mowlam's accomplices was later revealed as his killer?", "Derek Warner", ["Phil Pearce", "John Tuplin", "Bill Middleton"], "Medium", "1985", "Crime"],
    ["Which milestone did Emmerdale Farm reach in 1985?", "Its 1,000th episode", ["Its 500th episode", "Its 2,000th episode", "Its 25th anniversary"], "Easy", "1985", "Production"],
    ["Which television presenter hosted a 1985 special marking Emmerdale Farm's 1,000th episode?", "Richard Whiteley", ["Michael Aspel", "Des O'Connor", "Terry Wogan"], "Hard", "1985", "Production"],

    // 1986
    ["Which child was born to Jack and Pat Sugden in April 1986?", "Robert Sugden", ["Andy Sugden", "Samuel Skilbeck", "Jackie Merrick"], "Easy", "1986", "Births"],
    ["What scheduling change did Emmerdale Farm make in 1986?", "It no longer took a summer break", ["It became a weekly programme", "It moved to Sunday mornings", "It stopped filming in Yorkshire"], "Medium", "1986", "Production"],
    ["Where had Pat Sugden just dropped off her sister before her fatal 1986 crash?", "At a railway station", ["At a hospital", "At The Woolpack", "At Hotten Market"], "Hard", "1986", "Storylines"],
    ["How did Pat Sugden die in 1986?", "In a car crash", ["In a house fire", "After a fall from a horse", "In a tractor accident"], "Easy", "1986", "Deaths"],
    ["What did Pat Sugden swerve to avoid immediately before her fatal accident?", "A flock of sheep", ["A deer", "An oncoming lorry", "A fallen tree"], "Medium", "1986", "Storylines"],
    ["Which relative of Pat Sugden returned for her funeral in 1986?", "Her sister Janie", ["Her daughter Sandie", "Her father Robert Sharp", "Her ex-husband Tom"], "Medium", "1986", "Families"],
    ["Which actress played Janie Harker when she returned for Pat's funeral?", "Lesley Duff", ["Rosie Kerslake", "Annie Hulley", "Diana Davies"], "Hard", "1986", "Actors"],
    ["Which character was murdered after a violent quarrel in early 1986?", "Harry Mowlam", ["Jackie Merrick", "Phil Pearce", "Bill Middleton"], "Medium", "1986", "Deaths"],
    ["Who was responsible for Harry Mowlam's death?", "Derek Warner", ["Matt Skilbeck", "Jack Sugden", "Alan Turner"], "Medium", "1986", "Crime"],
    ["Who discovered Harry Mowlam badly injured by the river?", "Henry Wilks", ["Amos Brearly", "Joe Sugden", "Donald Hinton"], "Hard", "1986", "Storylines"],
    ["Which innocent farmer was charged with Harry Mowlam's murder?", "Matt Skilbeck", ["Jack Sugden", "Seth Armstrong", "Joe Sugden"], "Medium", "1986", "Crime"],
    ["What did the post-mortem establish as Harry Mowlam's cause of death?", "Drowning", ["A gunshot wound", "Poisoning", "A fractured skull"], "Hard", "1986", "Crime"],
    ["Who became regional manager for NY Estates on returning to Beckindale in 1986?", "Joe Sugden", ["Alan Turner", "Matt Skilbeck", "Henry Wilks"], "Medium", "1986", "Characters"],
    ["Which Home Farm manager was annoyed at Joe Sugden's promotion in 1986?", "Alan Turner", ["Richard Anstey", "Trevor Thatcher", "Maurice Westrop"], "Medium", "1986", "Relationships"],
    ["Which of Jack Sugden's former lovers went on to date Joe Sugden in 1986?", "Karen Moore", ["Caroline Bates", "Kathy Gimbel", "Sita Sharma"], "Medium", "1986", "Relationships"],
    ["What was the name of Dolly Skilbeck's son from an earlier relationship who appeared in 1986?", "Graham Lodsworth", ["Nick Bates", "Mark Hughes", "Archie Brooks"], "Hard", "1986", "Families"],
    ["How was Graham Lodsworth related to young Samuel Skilbeck?", "He was Samuel's half-brother", ["He was Samuel's uncle", "He was Samuel's cousin", "He was Samuel's grandfather"], "Medium", "1986", "Families"],
    ["Who was attacked and left for dead by badger baiters in 1986?", "Seth Armstrong", ["Amos Brearly", "Alan Turner", "Henry Wilks"], "Medium", "1986", "Storylines"],
    ["Which Merrick family member began an affair with married builder Phil Pearce in 1986?", "Sandie Merrick", ["Jackie Merrick", "Pat Sugden", "Janie Harker"], "Medium", "1986", "Relationships"],
    ["Which actor played builder Phil Pearce?", "Peter Alexander", ["Richard Franklin", "Cy Chadwick", "Tony Pitts"], "Hard", "1986", "Actors"],
    ["What was the name of Phil Pearce's wife when he began seeing Sandie Merrick?", "Lesley", ["Caroline", "Karen", "Dolly"], "Hard", "1986", "Families"],
    ["What was the name of Phil and Lesley Pearce's daughter?", "Diane", ["Louise", "Rachel", "Sonia"], "Hard", "1986", "Families"],
    ["Which notorious future Emmerdale regular first appeared in September 1986?", "Eric Pollard", ["Frank Tate", "Chris Tate", "Denis Rigg"], "Easy", "1986", "Characters"],
    ["Which actor joined Emmerdale Farm as Eric Pollard in 1986?", "Christopher Chittell", ["Richard Thorp", "Norman Bowler", "Stan Richards"], "Easy", "1986", "Actors"],
    ["What business did Eric Pollard manage in his early Emmerdale days?", "Hotten Market", ["The Woolpack", "Home Farm", "The village post office"], "Medium", "1986", "Characters"],
    ["Which producer took over from Richard Handford in September 1986?", "Michael Russell", ["Stuart Doughty", "Kevin Laffan", "David Goddard"], "Hard", "1986", "Production"],

    // 1987
    ["Which type of facility did Beckindale residents campaign against in 1987?", "A nuclear waste dump", ["A motorway service station", "An airport runway", "A coal-fired power station"], "Easy", "1987", "Storylines"],
    ["What was the name of the fell threatened by a nuclear waste dump proposal in 1987?", "Pencross Fell", ["Ilkley Moor", "Cross Fell", "Kinder Scout"], "Hard", "1987", "Locations"],
    ["Which character fell into an old mine shaft in 1987?", "Jackie Merrick", ["Nick Bates", "Archie Brooks", "Seth Armstrong"], "Medium", "1987", "Storylines"],
    ["What was Jackie Merrick trying to rescue when he fell down the mine shaft?", "A sheep", ["A dog", "A child", "A calf"], "Medium", "1987", "Storylines"],
    ["What punishment did Jack Sugden receive during the nuclear dump protests?", "Seven days in prison", ["A year of community service", "A fine only", "A suspended six-month sentence"], "Medium", "1987", "Crime"],
    ["Why was Jack Sugden jailed during the 1987 protest?", "He defied an order to stay away from the fell", ["He assaulted the vicar", "He set fire to Home Farm", "He stole government files"], "Medium", "1987", "Crime"],
    ["Who helped the Reverend Hinton organise the village campaign against the nuclear dump?", "Dolly Skilbeck", ["Caroline Bates", "Karen Moore", "Sita Sharma"], "Hard", "1987", "Storylines"],
    ["Who drew up the village petition opposing the nuclear dump?", "Henry Wilks", ["Amos Brearly", "Alan Turner", "Jackie Merrick"], "Hard", "1987", "Storylines"],
    ["What happened to the nuclear waste dump proposal by September 1987?", "It was abandoned", ["Construction began", "It was moved to Home Farm", "It was approved by the council"], "Easy", "1987", "Storylines"],
    ["Whom did Kathy Bates date in 1987, making Jackie Merrick jealous?", "Tony Marchant", ["Phil Pearce", "Derek Warner", "Frank Tate"], "Medium", "1987", "Relationships"],
    ["What did Jackie Merrick vandalise in a jealous rage over Kathy's new boyfriend?", "Tony Marchant's van", ["The Woolpack windows", "A tractor", "Nick Bates's motorbike"], "Hard", "1987", "Storylines"],
    ["What weapon did a drunken Eric Pollard use to threaten Sandie Merrick in 1987?", "A poker", ["A shotgun", "An axe", "A kitchen knife"], "Hard", "1987", "Storylines"],
    ["Which character qualified as an auctioneer and took over Eric Pollard's job?", "Sandie Merrick", ["Dolly Skilbeck", "Caroline Bates", "Kathy Bates"], "Medium", "1987", "Characters"],
    ["Which member of the Rosetti family accidentally shot himself in a 1987 storyline?", "Paolo Rosetti", ["Nicolo Rosetti", "Marian Rosetti", "Tom Merrick"], "Hard", "1987", "Storylines"],

    // 1988
    ["Which couple married in February 1988?", "Jackie Merrick and Kathy Bates", ["Jack Sugden and Sarah Connolly", "Joe Sugden and Kate Hughes", "Archie Brooks and Rachel Hughes"], "Easy", "1988", "Marriages"],
    ["In which country did Jackie and Kathy honeymoon in 1988?", "Tunisia", ["Spain", "Italy", "France"], "Medium", "1988", "Locations"],
    ["What was unusual about filming Jackie and Kathy's 1988 honeymoon?", "It was the programme's first overseas location filming", ["It was filmed entirely in a studio", "It was performed live", "It was filmed without dialogue"], "Hard", "1988", "Production"],
    ["Which two characters bought Home Farm when NY Estates withdrew in 1988?", "Alan Turner and Joe Sugden", ["Jack Sugden and Matt Skilbeck", "Amos Brearly and Henry Wilks", "Eric Pollard and Phil Pearce"], "Medium", "1988", "Locations"],
    ["Which crooked businessman acquired Home Farm after outmanoeuvring Alan Turner and Joe Sugden?", "Denis Rigg", ["Frank Tate", "Harry Mowlam", "Christopher Meadows"], "Medium", "1988", "Characters"],
    ["Who became a local hero after disrupting an attempted post office robbery in 1988?", "Nick Bates", ["Archie Brooks", "Jackie Merrick", "Seth Armstrong"], "Medium", "1988", "Storylines"],
    ["Which timber consultant did Dolly Skilbeck have an affair with in 1988?", "Stephen Fuller", ["Denis Rigg", "Tony Marchant", "Phil Pearce"], "Medium", "1988", "Relationships"],
    ["How did timber consultant Stephen Fuller die in 1988?", "A tree fell on him", ["He drowned in the river", "He was shot", "He died in a plane crash"], "Medium", "1988", "Deaths"],
    ["Who was trapped inside Crossgill Farm during a serious fire in 1988?", "Annie Sugden", ["Caroline Bates", "Pat Sugden", "Kathy Bates"], "Easy", "1988", "Storylines"],
    ["Which family arrived in Beckindale in 1988, including Kate and her children Rachel and Mark?", "The Hughes family", ["The Tate family", "The Windsor family", "The Dingle family"], "Easy", "1988", "Families"],
    ["Which actress played Kate Hughes when she arrived in the late 1980s?", "Sally Knyvette", ["Malandra Burrows", "Glenda McKay", "Diana Davies"], "Medium", "1988", "Actors"]
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(2601 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Emmerdale', '1980s', year, topic],
        dailyEligible: true
    };
});

module.exports = questions;
