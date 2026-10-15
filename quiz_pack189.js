 // quiz_pack189.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Emmerdale - 1992 to 1994
// 100 questions: tv_2801 to tv_2900
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [
    // 1992 - The Feldmanns, Tates and village upheavals
    ["What caused an explosion and a power cut at Home Farm early in 1992?", "A digger cut an electrical cable", ["A gas cylinder caught fire", "A transformer was struck by lightning", "A boiler overheated"], "Medium", "1992", "Storylines"],
    ["At which estate was an electrical cable accidentally severed by machinery in January 1992?", "Home Farm", ["Emmerdale Farm", "Crossgill Farm", "Whiteley's Farm"], "Medium", "1992", "Locations"],
    ["Which woman had a drink thrown over her by Sarah Connolly in February 1992?", "Lynn Whiteley", ["Kim Tate", "Kathy Tate", "Carol Nelson"], "Hard", "1992", "Storylines"],
    ["What knocked Seth Armstrong unconscious in February 1992?", "Falling crates", ["A runaway horse", "A collapsing ladder", "A falling branch"], "Hard", "1992", "Storylines"],
    ["Whose party led to Jack Sugden being attacked by unwelcome visitors in March 1992?", "Mark Hughes's", ["Nick Bates's", "Michael Feldmann's", "Scott Windsor's"], "Medium", "1992", "Storylines"],
    ["Who threw out the unwanted guests from Mark Hughes's party in 1992?", "Michael Feldmann", ["Chris Tate", "Eric Pollard", "Archie Brooks"], "Hard", "1992", "Storylines"],
    ["Which two women owned ponies that escaped into the road in April 1992?", "Kim and Kathy Tate", ["Sarah Connolly and Kate Sugden", "Caroline Bates and Elsa Feldmann", "Lynn Whiteley and Rachel Hughes"], "Medium", "1992", "Animals"],
    ["What vehicle struck the escaped ponies in a 1992 Emmerdale storyline?", "A lorry", ["A tractor", "A motorcycle", "A bus"], "Medium", "1992", "Storylines"],
    ["Which stockbroker became romantically involved with Kim Tate in 1992?", "Neil Kincaid", ["Josh Lewis", "Denis Rigg", "David Hughes"], "Easy", "1992", "Relationships"],
    ["What tragedy followed Kim Tate's fall from a horse in June 1992?", "She suffered a miscarriage", ["She lost her sight", "She broke both legs", "She suffered memory loss"], "Medium", "1992", "Storylines"],
    ["Who was unaware that Kim Tate was pregnant before her riding accident in 1992?", "Frank Tate", ["Chris Tate", "Zoe Tate", "Neil Kincaid"], "Medium", "1992", "Families"],
    ["To whom did Eric Pollard propose marriage in June 1992?", "Elizabeth Feldmann", ["Caroline Bates", "Kim Tate", "Lorraine Nelson"], "Easy", "1992", "Relationships"],
    ["Which young child was briefly abducted by a woman in July 1992?", "Alice Bates", ["Donna Windsor", "Victoria Sugden", "Louise Merrick"], "Medium", "1992", "Storylines"],
    ["What did the woman who abducted Alice Bates falsely claim in 1992?", "Alice was not Nick and Elsa's child", ["Alice was her long-lost sister", "Nick had adopted Alice abroad", "Elsa had sold Alice to her"], "Hard", "1992", "Storylines"],
    ["Which man did Rachel Hughes break off her engagement to in July 1992?", "Michael Feldmann", ["Chris Tate", "Mark Hughes", "Josh Lewis"], "Medium", "1992", "Relationships"],
    ["Which pair robbed Home Farm in September 1992?", "Michael Feldmann and Steve Marshal", ["Nick Bates and Archie Brooks", "Chris Tate and Neil Kincaid", "Eric Pollard and Alan Turner"], "Hard", "1992", "Crime"],
    ["Who was badly injured during the Home Farm robbery in September 1992?", "Joe Sugden", ["Jack Sugden", "Frank Tate", "Alan Turner"], "Medium", "1992", "Crime"],
    ["Who reported concerns about Alice Bates to social services in 1992?", "Carol Nelson", ["Dolly Skilbeck", "Lorraine Nelson", "Kathy Tate"], "Hard", "1992", "Characters"],
    ["Who dismissed Carol Nelson from The Woolpack in September 1992?", "Alan Turner", ["Frank Tate", "Joe Sugden", "Eric Pollard"], "Medium", "1992", "Jobs"],
    ["Which Home Farm robber was arrested after Eric Pollard set him up in October 1992?", "Steve Marshal", ["Chris Tate", "Archie Brooks", "Nick Bates"], "Hard", "1992", "Crime"],
    ["Which couple married in Emmerdale in October 1992?", "Eric Pollard and Elizabeth Feldmann", ["Frank and Kim Tate", "Jack Sugden and Sarah Connolly", "Chris Tate and Rachel Hughes"], "Easy", "1992", "Marriages"],
    ["Which character disclosed abuse by her father in Emmerdale's first five-character episode in 1992?", "Lorraine Nelson", ["Rachel Hughes", "Kathy Tate", "Elsa Feldmann"], "Hard", "1992", "Storylines"],
    ["Which Tate family member discovered Kim's affair with Neil Kincaid in November 1992?", "Kathy Tate", ["Zoe Tate", "Chris Tate", "Frank Tate"], "Medium", "1992", "Relationships"],
    ["Who threw Kim Tate out of Home Farm on Christmas Eve 1992?", "Frank Tate", ["Chris Tate", "Zoe Tate", "Alan Turner"], "Easy", "1992", "Storylines"],
    ["Which man did Frank Tate attack after discovering his wife's affair in December 1992?", "Neil Kincaid", ["Josh Lewis", "Eric Pollard", "Joe Sugden"], "Medium", "1992", "Storylines"],
    ["Which friend of Amos Brearly arrived in Beckindale in December 1992?", "Leonard Kempinski", ["Bernard McAllister", "Reg Dawson", "Bill Whiteley"], "Medium", "1992", "Characters"],
    ["What changed about Emmerdale's presentation in September 1992?", "Its opening titles and theme music", ["Its broadcast channel", "Its programme title", "Its filming location"], "Medium", "1992", "Production"],

    // 1993 - New families and the devastating plane crash
    ["Which woman arrived in 1993 and became romantically involved with Alan Turner?", "Shirley Foster", ["Betty Eagleton", "Viv Windsor", "Angharad McAllister"], "Medium", "1993", "Characters"],
    ["Which actress played Shirley Foster, later Shirley Turner?", "Rachel Davies", ["Deena Payne", "Paula Tilbrook", "Sally Knyvette"], "Medium", "1993", "Actors"],
    ["At what kind of organisation did Shirley Foster work before joining The Woolpack?", "A drop-in centre", ["A veterinary surgery", "A travel agency", "A nursery school"], "Medium", "1993", "Jobs"],
    ["Which family took over the Beckindale village shop and post office in 1993?", "The Windsors", ["The Dingles", "The Glovers", "The McAllisters"], "Easy", "1993", "Families"],
    ["Which actor played shopkeeper Vic Windsor?", "Alun Lewis", ["Johnny Leeze", "Norman Bowler", "Brendan Price"], "Easy", "1993", "Actors"],
    ["Which actress played Viv Windsor when she arrived in 1993?", "Deena Payne", ["Claire King", "Malandra Burrows", "Paula Tilbrook"], "Easy", "1993", "Actors"],
    ["Which Windsor child was Viv's son from her first marriage?", "Scott Windsor", ["Roy Windsor", "Mark Windsor", "Robert Windsor"], "Medium", "1993", "Families"],
    ["Which Windsor daughter was Vic's child from his previous marriage?", "Kelly Windsor", ["Donna Windsor", "Alice Windsor", "Rachel Windsor"], "Medium", "1993", "Families"],
    ["Which Windsor daughter was the child of both Vic and Viv?", "Donna Windsor", ["Kelly Windsor", "Alice Windsor", "Tina Windsor"], "Easy", "1993", "Families"],
    ["To which county did Vic Windsor initially tell his family they were moving, rather than Yorkshire?", "Devon", ["Kent", "Norfolk", "Cumbria"], "Hard", "1993", "Storylines"],
    ["Which American wine merchant became involved with Kathy Tate in 1993?", "Josh Lewis", ["Neil Kincaid", "Steve Marshal", "Bernard McAllister"], "Medium", "1993", "Relationships"],
    ["Which actor played American wine merchant Josh Lewis?", "Peter Warnock", ["Peter Amory", "Noah Huntley", "Stuart Wade"], "Hard", "1993", "Actors"],
    ["Which character dated Mark Hughes before the 1993 plane crash?", "Debbie Buttershaw", ["Dolores Sharp", "Tina Dingle", "Kelly Windsor"], "Hard", "1993", "Relationships"],
    ["Which family arrived from London in December 1993?", "The McAllisters", ["The Dingles", "The Glovers", "The Windsors"], "Medium", "1993", "Families"],
    ["Which McAllister family member opened a doctor's surgery?", "Bernard McAllister", ["Luke McAllister", "Jessica McAllister", "Angharad McAllister"], "Medium", "1993", "Jobs"],
    ["What was Angharad McAllister's profession?", "Teacher", ["Solicitor", "Veterinary surgeon", "Police officer"], "Medium", "1993", "Jobs"],
    ["Which actor played Luke McAllister?", "Noah Huntley", ["Stuart Wade", "Paul Loughran", "Ian Kelsey"], "Medium", "1993", "Actors"],
    ["Which actress portrayed Jessica McAllister?", "Camilla Power", ["Samantha Hurst", "Adele Silva", "Jacqueline Pirie"], "Hard", "1993", "Actors"],
    ["Which actress played Angharad McAllister?", "Amanda Wenban", ["Sally Knyvette", "Rachel Davies", "Roberta Kerr"], "Hard", "1993", "Actors"],
    ["Which actor played Dr Bernard McAllister?", "Brendan Price", ["Norman Bowler", "Alun Lewis", "Christopher Chittell"], "Hard", "1993", "Actors"],
    ["Whom did Annie Sugden marry in October 1993?", "Leonard Kempinski", ["Amos Brearly", "Alan Turner", "Henry Wilks"], "Easy", "1993", "Marriages"],
    ["What problem forced the Sugdens to leave the old Emmerdale farmhouse in 1993?", "Subsidence", ["Flooding", "A lightning strike", "An electrical fire"], "Medium", "1993", "Locations"],
    ["Which date in December 1993 saw the devastating air disaster at Beckindale?", "30 December", ["24 December", "26 December", "31 December"], "Easy", "1993", "Storylines"],
    ["Which character was left paralysed after being buried in wreckage during the plane crash?", "Chris Tate", ["Frank Tate", "Jack Sugden", "Nick Bates"], "Easy", "1993", "Storylines"],
    ["Which woman was left in a coma after the 1993 plane crash?", "Annie Sugden", ["Kim Tate", "Sarah Connolly", "Viv Windsor"], "Medium", "1993", "Storylines"],
    ["Which Sugden family member suffered a broken leg in the 1993 plane crash?", "Joe Sugden", ["Jack Sugden", "Robert Sugden", "Matt Skilbeck"], "Medium", "1993", "Storylines"],
    ["Whose horses and stables were destroyed by fire during the 1993 plane crash?", "Kim Tate's", ["Kathy Tate's", "Sarah Connolly's", "Viv Windsor's"], "Medium", "1993", "Locations"],
    ["Which two men helped rebuild a bridge so emergency vehicles could reach Beckindale after the crash?", "Jack Sugden and Frank Tate", ["Joe Sugden and Eric Pollard", "Alan Turner and Vic Windsor", "Nick Bates and Seth Armstrong"], "Medium", "1993", "Storylines"],
    ["Which bridge was destroyed by the 1993 air disaster?", "Skipdale Bridge", ["Beckindale Bridge", "Stoneleigh Bridge", "Home Farm Bridge"], "Hard", "1993", "Locations"],
    ["Which Hughes family member was killed in the plane crash?", "Mark Hughes", ["Rachel Hughes", "Kate Hughes", "David Hughes"], "Easy", "1993", "Deaths"],
    ["Which Woolpack regular died in the 1993 plane crash?", "Archie Brooks", ["Seth Armstrong", "Alan Turner", "Amos Brearly"], "Medium", "1993", "Deaths"],
    ["Which wife of Eric Pollard was killed in the 1993 plane crash?", "Elizabeth Pollard", ["Eileen Pollock", "Val Pollard", "Brenda Walker"], "Easy", "1993", "Deaths"],
    ["Which man, newly married to Annie Sugden, died in the 1993 plane crash?", "Leonard Kempinski", ["Amos Brearly", "Joe Sugden", "Bernard McAllister"], "Medium", "1993", "Deaths"],
    ["Approximately how many people watched the famous 1993 plane crash episode?", "18 million", ["8 million", "12 million", "25 million"], "Medium", "1993", "Production"],

    // 1994 - Recovery, the Windsors, the Glovers and the Dingles
    ["What new name replaced Beckindale following the 1993 plane crash?", "Emmerdale", ["Hotten", "Skipdale", "Crossgill"], "Easy", "1994", "Locations"],
    ["Which long-established farming family was honoured when Beckindale was renamed in 1994?", "The Sugdens", ["The Tates", "The Windsors", "The Dingles"], "Medium", "1994", "Families"],
    ["Which couple married in May 1994?", "Jack Sugden and Sarah Connolly", ["Frank and Kim Tate", "Chris Tate and Rachel Hughes", "Nick Bates and Elsa Feldmann"], "Easy", "1994", "Marriages"],
    ["What was the name of Jack and Sarah Sugden's daughter born in March 1994?", "Victoria", ["Alice", "Donna", "Kelly"], "Easy", "1994", "Births"],
    ["What woke Annie Sugden from her coma after the plane crash?", "Her newborn granddaughter's cries", ["A telephone ringing", "A visit from Amos", "A radio playing music"], "Medium", "1994", "Storylines"],
    ["What health problem required baby Victoria Sugden to have surgery in 1994?", "A hole in her heart", ["A broken collarbone", "A lung infection", "A blocked kidney"], "Medium", "1994", "Storylines"],
    ["Which woman married Woolpack landlord Alan Turner in February 1994?", "Shirley Foster", ["Betty Eagleton", "Viv Windsor", "Kim Tate"], "Medium", "1994", "Marriages"],
    ["Which woman arrived in 1994 claiming to be Eric Pollard's first wife?", "Eileen Pollock", ["Elizabeth Feldmann", "Val Lambert", "Caroline Bates"], "Medium", "1994", "Families"],
    ["What secret did Eileen Pollock threaten to expose in 1994?", "Eric had committed bigamy", ["Eric had stolen from Home Farm", "Eric had faked his death", "Eric had a secret twin"], "Medium", "1994", "Storylines"],
    ["Which actress played Eileen Pollock?", "Arbel Jones", ["Rachel Davies", "Deena Payne", "Paula Tilbrook"], "Hard", "1994", "Actors"],
    ["Which actress became known for playing Betty Eagleton?", "Paula Tilbrook", ["Roberta Kerr", "Sheila Mercier", "Diana Davies"], "Easy", "1994", "Actors"],
    ["Which criminal took Viv Windsor and Shirley Turner hostage at Home Farm in 1994?", "Reg Dawson", ["Denis Rigg", "Jim Latimer", "Steve Marshal"], "Easy", "1994", "Crime"],
    ["How was Reg Dawson related to Viv Windsor?", "He was her former husband", ["He was her brother", "He was her uncle", "He was her father"], "Medium", "1994", "Families"],
    ["Which Windsor child was Reg Dawson's biological son?", "Scott Windsor", ["Donna Windsor", "Kelly Windsor", "Roy Windsor"], "Medium", "1994", "Families"],
    ["Which actor played Reg Dawson in the 1994 siege storyline?", "Niven Boyd", ["Alun Lewis", "Brendan Price", "Johnny Leeze"], "Hard", "1994", "Actors"],
    ["What business did Reg Dawson's gang rob before the 1994 hostage siege?", "The village post office", ["The Woolpack", "Hotten Market", "The Home Farm stables"], "Medium", "1994", "Crime"],
    ["Who was shot dead after shielding Viv Windsor during the Home Farm siege?", "Shirley Turner", ["Caroline Bates", "Kathy Tate", "Elsa Feldmann"], "Easy", "1994", "Deaths"],
    ["How did Reg Dawson die at the end of the 1994 hostage siege?", "He was shot by a police marksman", ["He fell from a roof", "He was stabbed by an accomplice", "He died in a car crash"], "Medium", "1994", "Deaths"],
    ["Which of Reg Dawson's own accomplices did he shoot by mistake during the siege?", "Simmy", ["Colin Long", "John Francis", "Harry Barker"], "Hard", "1994", "Crime"],
    ["Which couple remarried in December 1994 after an earlier divorce?", "Frank and Kim Tate", ["Jack and Sarah Sugden", "Chris and Kathy Tate", "Vic and Viv Windsor"], "Easy", "1994", "Marriages"],
    ["At which cathedral did Frank and Kim Tate remarry in 1994?", "Ripon Cathedral", ["York Minster", "Leeds Cathedral", "Bradford Cathedral"], "Medium", "1994", "Locations"],
    ["Who ended up giving Kim Tate away when she remarried Frank in 1994?", "Seth Armstrong", ["Chris Tate", "Jack Sugden", "Alan Turner"], "Hard", "1994", "Marriages"],
    ["Which relative was originally supposed to give Kim Tate away at her second wedding?", "Her uncle Harry Barker", ["Her brother Chris Tate", "Her father Joe Sugden", "Her cousin Michael Feldmann"], "Hard", "1994", "Families"],
    ["Which member of the Dingle family appeared first, in August 1994?", "Ben Dingle", ["Zak Dingle", "Butch Dingle", "Tina Dingle"], "Easy", "1994", "Characters"],
    ["Which actor played Ben Dingle in 1994?", "Steve Fury", ["Paul Loughran", "Steve Halliwell", "Noah Huntley"], "Medium", "1994", "Actors"],
    ["With which teenager did Ben Dingle fight shortly before his death?", "Luke McAllister", ["Scott Windsor", "Roy Glover", "Mark Hughes"], "Medium", "1994", "Storylines"],
    ["What underlying health problem contributed to Ben Dingle's death?", "A heart defect", ["Epilepsy", "Diabetes", "Asthma"], "Medium", "1994", "Deaths"],
    ["Which actor played Butch Dingle, introduced in 1994?", "Paul Loughran", ["Steve Fury", "Stuart Wade", "Ian Kelsey"], "Medium", "1994", "Actors"],
    ["Which actor became famous for playing Zak Dingle?", "Steve Halliwell", ["Johnny Leeze", "Norman Bowler", "Alun Lewis"], "Easy", "1994", "Actors"],
    ["Which actress originally played Tina Dingle when she arrived at the end of 1994?", "Jacqueline Pirie", ["Lisa Riley", "Sandra Gough", "Tonicha Jeronimo"], "Medium", "1994", "Actors"],
    ["Which farming family arrived in Emmerdale in August 1994 after losing their home?", "The Glovers", ["The Kings", "The Windsors", "The Tates"], "Easy", "1994", "Families"],
    ["Which actor played Ned Glover?", "Johnny Leeze", ["Ian Kelsey", "Nicky Evans", "Steve Halliwell"], "Medium", "1994", "Actors"],
    ["Which actress played Ned Glover's wife Jan?", "Roberta Kerr", ["Deena Payne", "Rachel Davies", "Paula Tilbrook"], "Hard", "1994", "Actors"],
    ["Which actor played the eldest Glover son, Dave?", "Ian Kelsey", ["Nicky Evans", "Paul Loughran", "Noah Huntley"], "Medium", "1994", "Actors"],
    ["Which actress played Ned and Jan Glover's daughter Linda?", "Tonicha Jeronimo", ["Adele Silva", "Samantha Hurst", "Camilla Power"], "Hard", "1994", "Actors"],
    ["Which actor played the youngest Glover son, Roy?", "Nicky Evans", ["Ian Kelsey", "Toby Cockerell", "Paul Loughran"], "Hard", "1994", "Actors"],
    ["Where did the Glover family initially live when they arrived in Emmerdale?", "In a caravan", ["Above The Woolpack", "At Home Farm", "In the village schoolhouse"], "Medium", "1994", "Locations"],
    ["Which actor played the teenage biker Biff Fowler when he arrived in 1994?", "Stuart Wade", ["Noah Huntley", "Peter Amory", "Steve Fury"], "Medium", "1994", "Actors"],
    ["Which actress played Dolores Sharp, a school friend of Luke McAllister?", "Samantha Hurst", ["Camilla Power", "Jacqueline Pirie", "Malandra Burrows"], "Hard", "1994", "Actors"]
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(2801 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Emmerdale', '1990s', year, topic],
        dailyEligible: true
    };
});

module.exports = questions;
