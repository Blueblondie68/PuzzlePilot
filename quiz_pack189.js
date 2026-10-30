// quiz_pack189.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Emmerdale - 1992 to 1994
// 100 questions: tv_2801 to tv_2900
// Complete subject, decade, year, character and storyline tag audit.
// quiz_bank.js remains unchanged.

const facts = [
    // 1992
    ["What caused the explosion and power cut at Home Farm?", "A digger cut an electrical cable", ["A gas cylinder caught fire", "A transformer was struck by lightning", "A boiler overheated"], "Medium", "1992", "Storylines", ["Home Farm", "Electrical Cable", "JCB Digger", "Power Cut"]],
    ["At which estate was an electrical cable accidentally severed by machinery in January 1992?", "Home Farm", ["Emmerdale Farm", "Crossgill Farm", "Whiteley's Farm"], "Medium", "1992", "Locations", ["Home Farm", "JCB", "Severed Cable", "January 1992"]],
    ["Which woman had a drink thrown over her by Sarah Connolly in February 1992?", "Lynn Whiteley", ["Kim Tate", "Kathy Tate", "Carol Nelson"], "Hard", "1992", "Storylines", ["Sarah Connolly", "Lynn Whiteley", "Drink Thrown", "Woolpack Dispute"]],
    ["What knocked Seth Armstrong unconscious in February 1992?", "Falling crates", ["A runaway horse", "A collapsing ladder", "A falling branch"], "Hard", "1992", "Storylines", ["Seth Armstrong", "Falling Crates", "Unconsciousness", "Accident"]],
    ["Whose party led to Jack Sugden being attacked by unwelcome visitors in March 1992?", "Mark Hughes's", ["Nick Bates's", "Michael Feldmann's", "Scott Windsor's"], "Medium", "1992", "Storylines", ["Mark Hughes", "Jack Sugden", "Uninvited Guests", "House Party"]],
    ["Who threw out the unwanted guests from Mark Hughes's party?", "Michael Feldmann", ["Chris Tate", "Eric Pollard", "Archie Brooks"], "Hard", "1992", "Storylines", ["Michael Feldmann", "Mark Hughes", "Unwanted Guests", "Party Dispute"]],
    ["Which two women owned ponies that escaped into the road in April 1992?", "Kim and Kathy Tate", ["Sarah Connolly and Kate Sugden", "Caroline Bates and Elsa Feldmann", "Lynn Whiteley and Rachel Hughes"], "Medium", "1992", "Animals", ["Kim Tate", "Kathy Tate", "Escaped Ponies", "Horse Accident"]],
    ["What vehicle struck the escaped ponies in a 1992 Emmerdale storyline?", "A lorry", ["A tractor", "A motorcycle", "A bus"], "Medium", "1992", "Storylines", ["Kim And Kathy Tate", "Escaped Ponies", "Lorry Collision", "Road Accident"]],
    ["Which stockbroker became romantically involved with Kim Tate?", "Neil Kincaid", ["Josh Lewis", "Denis Rigg", "David Hughes"], "Easy", "1992", "Relationships", ["Kim Tate", "Neil Kincaid", "Stockbroker", "Extramarital Affair"]],
    ["What tragedy followed Kim Tate's fall from a horse in June 1992?", "She suffered a miscarriage", ["She lost her sight", "She broke both legs", "She suffered memory loss"], "Medium", "1992", "Storylines", ["Kim Tate", "Horse Riding Fall", "Miscarriage", "June 1992"]],
    ["Who was unaware that Kim Tate was pregnant before her riding accident?", "Frank Tate", ["Chris Tate", "Zoe Tate", "Neil Kincaid"], "Medium", "1992", "Families", ["Frank Tate", "Kim Tate", "Unannounced Pregnancy", "Riding Accident"]],
    ["To whom did Eric Pollard propose marriage in June 1992?", "Elizabeth Feldmann", ["Caroline Bates", "Kim Tate", "Lorraine Nelson"], "Easy", "1992", "Relationships", ["Eric Pollard", "Elizabeth Feldmann", "Proposal", "June 1992"]],
    ["Which young child was briefly abducted by a woman in July 1992?", "Alice Bates", ["Donna Windsor", "Victoria Sugden", "Louise Merrick"], "Medium", "1992", "Storylines", ["Alice Bates", "Child Abduction", "Nick Bates", "July 1992"]],
    ["What did the woman who abducted Alice Bates falsely claim?", "Alice was not Nick and Elsa's child", ["Alice was her long-lost sister", "Nick had adopted Alice abroad", "Elsa had sold Alice to her"], "Hard", "1992", "Storylines", ["Alice Bates", "False Parentage Claim", "Kidnapper", "Elsa Feldmann"]],
    ["Which man did Rachel Hughes break off her engagement to in July 1992?", "Michael Feldmann", ["Chris Tate", "Mark Hughes", "Josh Lewis"], "Medium", "1992", "Relationships", ["Rachel Hughes", "Michael Feldmann", "Broken Engagement", "July 1992"]],
    ["Which pair robbed Home Farm in September 1992?", "Michael Feldmann and Steve Marshal", ["Nick Bates and Archie Brooks", "Chris Tate and Neil Kincaid", "Eric Pollard and Alan Turner"], "Hard", "1992", "Crime", ["Michael Feldmann", "Steve Marshal", "Home Farm", "Armed Robbery"]],
    ["Who was badly injured during the Home Farm robbery in September 1992?", "Joe Sugden", ["Jack Sugden", "Frank Tate", "Alan Turner"], "Medium", "1992", "Crime", ["Joe Sugden", "Home Farm Robbery", "Serious Injury", "September 1992"]],
    ["Who reported concerns about Alice Bates to social services?", "Carol Nelson", ["Dolly Skilbeck", "Lorraine Nelson", "Kathy Tate"], "Hard", "1992", "Characters", ["Carol Nelson", "Alice Bates", "Social Services", "Child Welfare Report"]],
    ["Who dismissed Carol Nelson from The Woolpack in September 1992?", "Alan Turner", ["Frank Tate", "Joe Sugden", "Eric Pollard"], "Medium", "1992", "Jobs", ["Alan Turner", "Carol Nelson", "The Woolpack", "Dismissal"]],
    ["Which Home Farm robber was arrested after Eric Pollard set him up in October 1992?", "Steve Marshal", ["Chris Tate", "Archie Brooks", "Nick Bates"], "Hard", "1992", "Crime", ["Steve Marshal", "Eric Pollard", "Home Farm Robbery", "Police Arrest"]],
    ["Which couple married in Emmerdale in October 1992?", "Eric Pollard and Elizabeth Feldmann", ["Frank and Kim Tate", "Jack Sugden and Sarah Connolly", "Chris Tate and Rachel Hughes"], "Easy", "1992", "Marriages", ["Eric Pollard", "Elizabeth Feldmann", "Wedding", "October 1992"]],
    ["Which character disclosed abuse by her father in Emmerdale's first five-character episode?", "Lorraine Nelson", ["Rachel Hughes", "Kathy Tate", "Elsa Feldmann"], "Hard", "1992", "Storylines", ["Lorraine Nelson", "Childhood Abuse", "Five Hander", "Family Disclosure"]],
    ["Which Tate family member discovered Kim's affair with Neil Kincaid in November 1992?", "Kathy Tate", ["Zoe Tate", "Chris Tate", "Frank Tate"], "Medium", "1992", "Relationships", ["Kathy Tate", "Kim Tate", "Neil Kincaid", "Affair Exposed"]],
    ["Who threw Kim Tate out of Home Farm on Christmas Eve 1992?", "Frank Tate", ["Chris Tate", "Zoe Tate", "Alan Turner"], "Easy", "1992", "Storylines", ["Frank Tate", "Kim Tate", "Home Farm", "Christmas Eve"]],
    ["Which man did Frank Tate attack after discovering his wife's affair in December 1992?", "Neil Kincaid", ["Josh Lewis", "Eric Pollard", "Joe Sugden"], "Medium", "1992", "Storylines", ["Frank Tate", "Neil Kincaid", "Marriage Betrayal", "Violent Confrontation"]],
    ["Which friend of Amos Brearly arrived in Beckindale in December 1992?", "Leonard Kempinski", ["Bernard McAllister", "Reg Dawson", "Bill Whiteley"], "Medium", "1992", "Characters", ["Leonard Kempinski", "Amos Brearly", "New Arrival", "December 1992"]],
    ["What changed about Emmerdale's presentation in September 1992?", "Its opening titles and theme music", ["Its broadcast channel", "Its programme title", "Its filming location"], "Medium", "1992", "Production", ["Opening Titles", "Theme Tune", "September 1992", "Production Rebrand"]],

    // 1993
    ["Which woman arrived and became romantically involved with Alan Turner?", "Shirley Foster", ["Betty Eagleton", "Viv Windsor", "Angharad McAllister"], "Medium", "1993", "Characters", ["Shirley Foster", "Alan Turner", "New Arrival", "Romance"]],
    ["Which actress played Shirley Foster, later Shirley Turner?", "Rachel Davies", ["Deena Payne", "Paula Tilbrook", "Sally Knyvette"], "Medium", "1993", "Actors", ["Rachel Davies", "Shirley Foster", "Actress", "Casting"]],
    ["At what kind of organisation did Shirley Foster work before joining The Woolpack?", "A drop-in centre", ["A veterinary surgery", "A travel agency", "A nursery school"], "Medium", "1993", "Jobs", ["Shirley Foster", "Drop In Centre", "Community Work", "The Woolpack"]],
    ["Which family took over the Beckindale village shop and post office?", "The Windsors", ["The Dingles", "The Glovers", "The McAllisters"], "Easy", "1993", "Families", ["Windsor Family", "Village Shop", "Post Office", "New Owners"]],
    ["Which actor played shopkeeper Vic Windsor?", "Alun Lewis", ["Johnny Leeze", "Norman Bowler", "Brendan Price"], "Easy", "1993", "Actors", ["Alun Lewis", "Vic Windsor", "Actor", "Village Shopkeeper"]],
    ["Which actress played Viv Windsor when she arrived?", "Deena Payne", ["Claire King", "Malandra Burrows", "Paula Tilbrook"], "Easy", "1993", "Actors", ["Deena Payne", "Viv Windsor", "Actress", "First Appearance"]],
    ["Which Windsor child was Viv's son from her first marriage?", "Scott Windsor", ["Roy Windsor", "Mark Windsor", "Robert Windsor"], "Medium", "1993", "Families", ["Scott Windsor", "Viv Windsor", "Reg Dawson", "Family Parentage"]],
    ["Which Windsor daughter was Vic's child from his previous marriage?", "Kelly Windsor", ["Donna Windsor", "Alice Windsor", "Rachel Windsor"], "Medium", "1993", "Families", ["Kelly Windsor", "Vic Windsor", "First Marriage", "Family Parentage"]],
    ["Which Windsor daughter was the child of both Vic and Viv?", "Donna Windsor", ["Kelly Windsor", "Alice Windsor", "Tina Windsor"], "Easy", "1993", "Families", ["Donna Windsor", "Viv Windsor", "Vic Windsor", "Family Parentage"]],
    ["To which county did Vic Windsor initially tell his family they were moving, rather than Yorkshire?", "Devon", ["Kent", "Norfolk", "Cumbria"], "Hard", "1993", "Storylines", ["Vic Windsor", "Devon", "Yorkshire", "Moving Secret"]],
    ["Which American wine merchant became involved with Kathy Tate?", "Josh Lewis", ["Neil Kincaid", "Steve Marshal", "Bernard McAllister"], "Medium", "1993", "Relationships", ["Josh Lewis", "Kathy Tate", "American Wine Merchant", "Affair"]],
    ["Which actor played American wine merchant Josh Lewis?", "Peter Warnock", ["Peter Amory", "Noah Huntley", "Stuart Wade"], "Hard", "1993", "Actors", ["Peter Warnock", "Josh Lewis", "Actor", "Casting"]],
    ["Which character dated Mark Hughes before the 1993 plane crash?", "Debbie Buttershaw", ["Dolores Sharp", "Tina Dingle", "Kelly Windsor"], "Hard", "1993", "Relationships", ["Debbie Buttershaw", "Mark Hughes", "Teenage Romance", "Plane Crash"]],
    ["Which family arrived from London in December 1993?", "The McAllisters", ["The Dingles", "The Glovers", "The Windsors"], "Medium", "1993", "Families", ["McAllister Family", "London", "New Arrivals", "December 1993"]],
    ["Which McAllister family member opened a doctor's surgery?", "Bernard McAllister", ["Luke McAllister", "Jessica McAllister", "Angharad McAllister"], "Medium", "1993", "Jobs", ["Bernard McAllister", "Village Surgery", "Doctor", "New Arrival"]],
    ["What was Angharad McAllister's profession?", "Teacher", ["Solicitor", "Veterinary surgeon", "Police officer"], "Medium", "1993", "Jobs", ["Angharad McAllister", "Teacher", "Local School", "McAllister Family"]],
    ["Which actor played Luke McAllister?", "Noah Huntley", ["Stuart Wade", "Paul Loughran", "Ian Kelsey"], "Medium", "1993", "Actors", ["Noah Huntley", "Luke McAllister", "Actor", "Original Casting"]],
    ["Which actress portrayed Jessica McAllister?", "Camilla Power", ["Samantha Hurst", "Adele Silva", "Jacqueline Pirie"], "Hard", "1993", "Actors", ["Camilla Power", "Jessica McAllister", "Actress", "Original Casting"]],
    ["Which actress played Angharad McAllister?", "Amanda Wenban", ["Sally Knyvette", "Rachel Davies", "Roberta Kerr"], "Hard", "1993", "Actors", ["Amanda Wenban", "Angharad McAllister", "Actress", "Original Casting"]],
    ["Which actor played Dr Bernard McAllister?", "Brendan Price", ["Norman Bowler", "Alun Lewis", "Christopher Chittell"], "Hard", "1993", "Actors", ["Brendan Price", "Bernard McAllister", "Actor", "Village Doctor"]],
    ["Whom did Annie Sugden marry in October 1993?", "Leonard Kempinski", ["Amos Brearly", "Alan Turner", "Henry Wilks"], "Easy", "1993", "Marriages", ["Annie Sugden", "Leonard Kempinski", "Wedding", "October 1993"]],
    ["What problem forced the Sugdens to leave the old Emmerdale farmhouse?", "Subsidence", ["Flooding", "A lightning strike", "An electrical fire"], "Medium", "1993", "Locations", ["Sugden Family", "Farmhouse Subsidence", "Forced Relocation", "Emmerdale Farm"]],
    ["Which date in December 1993 saw the devastating air disaster at Beckindale?", "30 December", ["24 December", "26 December", "31 December"], "Easy", "1993", "Storylines", ["Beckindale Air Disaster", "30 December 1993", "Plane Crash", "Broadcast Date"]],
    ["Which character was left paralysed after being buried in wreckage during the plane crash?", "Chris Tate", ["Frank Tate", "Jack Sugden", "Nick Bates"], "Easy", "1993", "Storylines", ["Chris Tate", "Paralysis", "Plane Crash", "Debris Injuries"]],
    ["Which woman was left in a coma after the plane crash?", "Annie Sugden", ["Kim Tate", "Sarah Connolly", "Viv Windsor"], "Medium", "1993", "Storylines", ["Annie Sugden", "Coma", "Plane Crash", "Serious Injuries"]],
    ["Which Sugden family member suffered a broken leg in the 1993 plane crash?", "Joe Sugden", ["Jack Sugden", "Robert Sugden", "Matt Skilbeck"], "Medium", "1993", "Storylines", ["Joe Sugden", "Broken Leg", "Plane Crash", "Airport Journey"]],
    ["Whose horses and stables were destroyed by fire during the 1993 plane crash?", "Kim Tate's", ["Kathy Tate's", "Sarah Connolly's", "Viv Windsor's"], "Medium", "1993", "Locations", ["Kim Tate", "Stables Fire", "Horses", "Plane Crash"]],
    ["Which two men helped rebuild a bridge so emergency vehicles could reach Beckindale after the crash?", "Jack Sugden and Frank Tate", ["Joe Sugden and Eric Pollard", "Alan Turner and Vic Windsor", "Nick Bates and Seth Armstrong"], "Medium", "1993", "Storylines", ["Jack Sugden", "Frank Tate", "Bridge Rebuilding", "Emergency Access"]],
    ["Which bridge was destroyed by the 1993 air disaster?", "Skipdale Bridge", ["Beckindale Bridge", "Stoneleigh Bridge", "Home Farm Bridge"], "Hard", "1993", "Locations", ["Skipdale Bridge", "Plane Crash", "Destroyed Bridge", "Emergency Access"]],
    ["Which Hughes family member was killed in the plane crash?", "Mark Hughes", ["Rachel Hughes", "Kate Hughes", "David Hughes"], "Easy", "1993", "Deaths", ["Mark Hughes", "Plane Crash", "Fatality", "Hughes Family"]],
    ["Which Woolpack regular died in the 1993 plane crash?", "Archie Brooks", ["Seth Armstrong", "Alan Turner", "Amos Brearly"], "Medium", "1993", "Deaths", ["Archie Brooks", "Plane Crash", "Fatality", "Woolpack Regular"]],
    ["Which wife of Eric Pollard was killed in the 1993 plane crash?", "Elizabeth Pollard", ["Eileen Pollock", "Val Pollard", "Brenda Walker"], "Easy", "1993", "Deaths", ["Elizabeth Pollard", "Eric Pollard", "Plane Crash Death", "Falling Debris"]],
    ["Which man, newly married to Annie Sugden, died in the 1993 plane crash?", "Leonard Kempinski", ["Amos Brearly", "Joe Sugden", "Bernard McAllister"], "Medium", "1993", "Deaths", ["Leonard Kempinski", "Annie Sugden", "Plane Crash", "Newlywed Death"]],
    ["Approximately how many people watched the famous 1993 plane crash episode?", "18 million", ["8 million", "12 million", "25 million"], "Medium", "1993", "Production", ["18 Million Viewers", "Plane Crash Episode", "Audience Ratings", "ITV Milestone"]],

    // 1994
    ["What new name replaced Beckindale following the plane crash?", "Emmerdale", ["Hotten", "Skipdale", "Crossgill"], "Easy", "1994", "Locations", ["Beckindale", "Village Renamed", "New Village Name", "Crash Aftermath"]],
    ["Which long-established farming family was honoured when Beckindale was renamed?", "The Sugdens", ["The Tates", "The Windsors", "The Dingles"], "Medium", "1994", "Families", ["Sugden Family", "Annie Sugden", "Village Renaming", "Community Tribute"]],
    ["Which couple married in May 1994?", "Jack Sugden and Sarah Connolly", ["Frank and Kim Tate", "Chris Tate and Rachel Hughes", "Nick Bates and Elsa Feldmann"], "Easy", "1994", "Marriages", ["Jack Sugden", "Sarah Connolly", "Wedding", "May 1994"]],
    ["What was the name of Jack and Sarah Sugden's daughter born in March 1994?", "Victoria", ["Alice", "Donna", "Kelly"], "Easy", "1994", "Births", ["Victoria Sugden", "Jack Sugden", "Sarah Connolly", "March 1994"]],
    ["What woke Annie Sugden from her coma after the plane crash?", "Her newborn granddaughter's cries", ["A telephone ringing", "A visit from Amos", "A radio playing music"], "Medium", "1994", "Storylines", ["Annie Sugden", "Victoria Sugden", "Coma Recovery", "Newborn Crying"]],
    ["What health problem required baby Victoria Sugden to have surgery?", "A hole in her heart", ["A broken collarbone", "A lung infection", "A blocked kidney"], "Medium", "1994", "Storylines", ["Victoria Sugden", "Hole In Heart", "Heart Surgery", "Baby Health"]],
    ["Which woman married Woolpack landlord Alan Turner in February 1994?", "Shirley Foster", ["Betty Eagleton", "Viv Windsor", "Kim Tate"], "Medium", "1994", "Marriages", ["Shirley Foster", "Alan Turner", "The Woolpack", "February 1994"]],
    ["Which woman arrived claiming to be Eric Pollard's first wife?", "Eileen Pollock", ["Elizabeth Feldmann", "Val Lambert", "Caroline Bates"], "Medium", "1994", "Families", ["Eileen Pollock", "Eric Pollard", "First Wife", "March 1994"]],
    ["What secret did Eileen Pollock threaten to expose?", "Eric had committed bigamy", ["Eric had stolen from Home Farm", "Eric had faked his death", "Eric had a secret twin"], "Medium", "1994", "Storylines", ["Eileen Pollock", "Eric Pollard", "Bigamy Secret", "Marriage History"]],
    ["Which actress played Eileen Pollock?", "Arbel Jones", ["Rachel Davies", "Deena Payne", "Paula Tilbrook"], "Hard", "1994", "Actors", ["Arbel Jones", "Eileen Pollock", "Actress", "Casting"]],
    ["Which actress became known for playing Betty Eagleton?", "Paula Tilbrook", ["Roberta Kerr", "Sheila Mercier", "Diana Davies"], "Easy", "1994", "Actors", ["Paula Tilbrook", "Betty Eagleton", "Actress", "Casting"]],
    ["Which criminal took Viv Windsor and Shirley Turner hostage at Home Farm?", "Reg Dawson", ["Denis Rigg", "Jim Latimer", "Steve Marshal"], "Easy", "1994", "Crime", ["Reg Dawson", "Viv Windsor", "Shirley Turner", "Home Farm Siege"]],
    ["How was Reg Dawson related to Viv Windsor?", "He was her former husband", ["He was her brother", "He was her uncle", "He was her father"], "Medium", "1994", "Families", ["Reg Dawson", "Viv Windsor", "Former Husband", "Family History"]],
    ["Which Windsor child was Reg Dawson's biological son?", "Scott Windsor", ["Donna Windsor", "Kelly Windsor", "Roy Windsor"], "Medium", "1994", "Families", ["Scott Windsor", "Reg Dawson", "Viv Windsor", "Biological Father"]],
    ["Which actor played Reg Dawson in the 1994 siege storyline?", "Niven Boyd", ["Alun Lewis", "Brendan Price", "Johnny Leeze"], "Hard", "1994", "Actors", ["Niven Boyd", "Reg Dawson", "Actor", "Hostage Siege"]],
    ["What business did Reg Dawson's gang rob before the 1994 hostage siege?", "The village post office", ["The Woolpack", "Hotten Market", "The Home Farm stables"], "Medium", "1994", "Crime", ["Reg Dawson", "Village Post Office", "Armed Robbery", "Hostage Siege"]],
    ["Who was shot dead after shielding Viv Windsor during the Home Farm siege?", "Shirley Turner", ["Caroline Bates", "Kathy Tate", "Elsa Feldmann"], "Easy", "1994", "Deaths", ["Shirley Turner", "Viv Windsor", "Reg Dawson", "Fatal Shooting"]],
    ["How did Reg Dawson die at the end of the 1994 hostage siege?", "He was shot by a police marksman", ["He fell from a roof", "He was stabbed by an accomplice", "He died in a car crash"], "Medium", "1994", "Deaths", ["Reg Dawson", "Police Marksman", "Home Farm Siege", "Death"]],
    ["Which of Reg Dawson's own accomplices did he shoot by mistake during the siege?", "Simmy", ["Colin Long", "John Francis", "Harry Barker"], "Hard", "1994", "Crime", ["Simmy", "Reg Dawson", "Mistaken Identity", "Siege Shooting"]],
    ["Which couple remarried in December 1994 after an earlier divorce?", "Frank and Kim Tate", ["Jack and Sarah Sugden", "Chris and Kathy Tate", "Vic and Viv Windsor"], "Easy", "1994", "Marriages", ["Frank Tate", "Kim Tate", "Remarriage", "December 1994"]],
    ["At which cathedral did Frank and Kim Tate remarry?", "Ripon Cathedral", ["York Minster", "Leeds Cathedral", "Bradford Cathedral"], "Medium", "1994", "Locations", ["Ripon Cathedral", "Frank Tate", "Kim Tate", "Wedding Venue"]],
    ["Who ended up giving Kim Tate away when she remarried Frank?", "Seth Armstrong", ["Chris Tate", "Jack Sugden", "Alan Turner"], "Hard", "1994", "Marriages", ["Seth Armstrong", "Kim Tate", "Wedding Escort", "Giving Away Bride"]],
    ["Which relative was originally supposed to give Kim Tate away at her second wedding?", "Her uncle Harry Barker", ["Her brother Chris Tate", "Her father Joe Sugden", "Her cousin Michael Feldmann"], "Hard", "1994", "Families", ["Harry Barker", "Kim Tate", "Uncle", "Wedding Plans"]],
    ["Which member of the Dingle family appeared first, in August 1994?", "Ben Dingle", ["Zak Dingle", "Butch Dingle", "Tina Dingle"], "Easy", "1994", "Characters", ["Ben Dingle", "First Dingle", "August 1994", "New Arrival"]],
    ["Which actor played Ben Dingle?", "Steve Fury", ["Paul Loughran", "Steve Halliwell", "Noah Huntley"], "Medium", "1994", "Actors", ["Steve Fury", "Ben Dingle", "Actor", "Casting"]],
    ["With which teenager did Ben Dingle fight shortly before his death?", "Luke McAllister", ["Scott Windsor", "Roy Glover", "Mark Hughes"], "Medium", "1994", "Storylines", ["Ben Dingle", "Luke McAllister", "Fight", "Fatal Collapse"]],
    ["What underlying health problem contributed to Ben Dingle's death?", "A heart defect", ["Epilepsy", "Diabetes", "Asthma"], "Medium", "1994", "Deaths", ["Ben Dingle", "Congenital Heart Defect", "Sudden Death", "Dingle Family"]],
    ["Which actor played Butch Dingle when the character was introduced?", "Paul Loughran", ["Steve Fury", "Stuart Wade", "Ian Kelsey"], "Medium", "1994", "Actors", ["Paul Loughran", "Butch Dingle", "Actor", "Original Casting"]],
    ["Which actor became famous for playing Zak Dingle?", "Steve Halliwell", ["Johnny Leeze", "Norman Bowler", "Alun Lewis"], "Easy", "1994", "Actors", ["Steve Halliwell", "Zak Dingle", "Actor", "Dingle Patriarch"]],
    ["Which actress originally played Tina Dingle when she arrived at the end of 1994?", "Jacqueline Pirie", ["Lisa Riley", "Sandra Gough", "Tonicha Jeronimo"], "Medium", "1994", "Actors", ["Jacqueline Pirie", "Tina Dingle", "Actress", "Original Casting"]],
    ["Which farming family arrived in Emmerdale in August 1994 after losing their home?", "The Glovers", ["The Kings", "The Windsors", "The Tates"], "Easy", "1994", "Families", ["Glover Family", "Farm Eviction", "August 1994", "New Arrival"]],
    ["Which actor played Ned Glover?", "Johnny Leeze", ["Ian Kelsey", "Nicky Evans", "Steve Halliwell"], "Medium", "1994", "Actors", ["Johnny Leeze", "Ned Glover", "Actor", "Family Patriarch"]],
    ["Which actress played Ned Glover's wife Jan?", "Roberta Kerr", ["Deena Payne", "Rachel Davies", "Paula Tilbrook"], "Hard", "1994", "Actors", ["Roberta Kerr", "Jan Glover", "Actress", "Glover Family"]],
    ["Which actor played the eldest Glover son, Dave?", "Ian Kelsey", ["Nicky Evans", "Paul Loughran", "Noah Huntley"], "Medium", "1994", "Actors", ["Ian Kelsey", "Dave Glover", "Actor", "Eldest Son"]],
    ["Which actress played Ned and Jan Glover's daughter Linda?", "Tonicha Jeronimo", ["Adele Silva", "Samantha Hurst", "Camilla Power"], "Hard", "1994", "Actors", ["Tonicha Jeronimo", "Linda Glover", "Actress", "Glover Family"]],
    ["Which actor played the youngest Glover son, Roy?", "Nicky Evans", ["Ian Kelsey", "Toby Cockerell", "Paul Loughran"], "Hard", "1994", "Actors", ["Nicky Evans", "Roy Glover", "Actor", "Youngest Son"]],
    ["Where did the Glover family initially live when they arrived in Emmerdale?", "In a caravan", ["Above The Woolpack", "At Home Farm", "In the village schoolhouse"], "Medium", "1994", "Locations", ["Glover Family", "Caravan", "Emmerdale Farm Land", "Initial Housing"]],
    ["Which actor played the teenage biker Biff Fowler when he arrived?", "Stuart Wade", ["Noah Huntley", "Peter Amory", "Steve Fury"], "Medium", "1994", "Actors", ["Stuart Wade", "Biff Fowler", "Actor", "Teenage Biker"]],
    ["Which actress played Dolores Sharp, a school friend of Luke McAllister?", "Samantha Hurst", ["Camilla Power", "Jacqueline Pirie", "Malandra Burrows"], "Hard", "1994", "Actors", ["Samantha Hurst", "Dolores Sharp", "Actress", "Luke McAllister"]]
];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, detailTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(2801 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Emmerdale', 'ITV', '1990s', year, topic, ...detailTags])],
        dailyEligible: true
    };
});

// =====================================================
// VALIDATION
// =====================================================

if (
    questions.length !== 100 ||
    questions[0].id !== 'tv_2801' ||
    questions[99].id !== 'tv_2900' ||
    questions.filter(q => q.tags.includes('1992')).length !== 27 ||
    questions.filter(q => q.tags.includes('1993')).length !== 34 ||
    questions.filter(q => q.tags.includes('1994')).length !== 39
) {
    throw new Error('Pack 189: invalid count, IDs or year distribution');
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
        throw new Error('Pack 189: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
