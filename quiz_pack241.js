// quiz_pack241.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 2003
// 110 questions: tv_7924 to tv_8033
// Fully tagged from creation.
// Do not update quiz_bank.js until the agreed bank update.

const topicTags = {
    "Mark And Vicki": ["Mark Fowler", "Vicki Fowler", "Fowler Family", "Departures And Returns"],
    "Evans Family": ["Roy Evans", "Barry Evans", "Natalie Evans", "Ricky Butcher And Family Breakdown"],
    "Phil Kate And Lisa": ["Phil Mitchell", "Kate Morton", "Lisa Fowler", "Police Investigation And Custody"],
    "Dennis And Dalton": ["Dennis Rickman", "Jack Dalton", "The Firm", "Gangland Crime"],
    "Den Returns": ["Den Watts", "Sharon Watts", "Vicki Fowler", "Return From The Dead"],
    "Kat Alfie And Andy": ["Kat Slater", "Alfie Moon", "Andy Hunter", "Christmas Wedding"],
    "Laura And Bobby": ["Laura Beale", "Ian Beale", "Bobby Beale", "Paternity And Family Conflict"],
    "Little Mo And Graham": ["Little Mo Mitchell", "Billy Mitchell", "Graham Foster", "Sexual Assault Storyline"],
    "Janine And Barry": ["Janine Butcher", "Barry Evans", "Paul Trueman", "Deception And New Year Wedding"],
    "Ferreira Family": ["Ferreira Family", "Dan Ferreira", "Walford New Arrivals", "Family Conflict"],
    "Other Walford Stories": ["Patrick Trueman", "Yolande Duke", "Martin Fowler", "2003 Walford Residents"]
};

const facts = [
    // MARK'S FAREWELL AND VICKI'S RETURN (10)
    ["Which long-standing Fowler learned that his HIV treatment was no longer working?", "Mark Fowler", ["Martin Fowler", "Ian Beale", "Derek Harkinson"], "Easy", "Mark And Vicki", ["HIV Treatment Failure", "Mark Final Storyline"]],
    ["Which form of transport did Mark Fowler ride when he left Walford?", "A motorbike", ["A taxi", "A train", "A bicycle"], "Easy", "Mark And Vicki", ["Mark Motorbike Exit", "Final Departure"]],
    ["Which month did Mark Fowler leave Albert Square?", "February", ["April", "July", "October"], "Medium", "Mark And Vicki", ["February 2003", "Mark Departure Date"]],
    ["Which actress played Pauline Fowler's daughter Vicki on her return?", "Scarlett Alice Johnson", ["Susan Tully", "Natalie Cassidy", "Michelle Ryan"], "Medium", "Mark And Vicki", ["Scarlett Alice Johnson", "Vicki Recast"]],
    ["Which country had Vicki Fowler been living in before she returned to Walford?", "The United States", ["Australia", "France", "Canada"], "Easy", "Mark And Vicki", ["Vicki Return From America", "Fowler Family"]],
    ["Who was Vicki Fowler's mother?", "Michelle Fowler", ["Pauline Fowler", "Kathy Beale", "Sharon Watts"], "Easy", "Mark And Vicki", ["Michelle Fowler", "Vicki Parentage"]],
    ["Which Moon brother was Vicki Fowler dating when she became pregnant?", "Spencer Moon", ["Alfie Moon", "Danny Moon", "Jake Moon"], "Easy", "Mark And Vicki", ["Spencer And Vicki", "Teenage Pregnancy"]],
    ["What sum did Sharon offer Vicki to let her raise Vicki's unborn baby?", "£10,000", ["£1,000", "£5,000", "£50,000"], "Medium", "Mark And Vicki", ["Sharon Adoption Offer", "Ten Thousand Pounds"]],
    ["What decision did Vicki ultimately make about her pregnancy?", "She had an abortion", ["She gave birth to twins", "She moved to Spain", "She asked Pauline to adopt the baby"], "Medium", "Mark And Vicki", ["Vicki Abortion", "Pregnancy Decision"]],
    ["Which son of Den Watts joined Sharon and Vicki in Walford after they traced their family?", "Dennis Rickman", ["Mickey Miller", "Spencer Moon", "Tariq Larousi"], "Medium", "Mark And Vicki", ["Dennis Family Discovery", "Watts Siblings"]],

    // ROY, NATALIE AND THE EVANSES (10)
    ["Which older Walford resident died after suffering a heart attack in March?", "Roy Evans", ["Terry Raymond", "Frank Butcher", "Jim Branning"], "Easy", "Evans Family", ["Roy Death", "March 2003"]],
    ["Which woman was Roy Evans married to at the time of his death?", "Pat Evans", ["Peggy Mitchell", "Irene Raymond", "Natalie Evans"], "Easy", "Evans Family", ["Pat Roy Marriage", "Widowhood"]],
    ["Which son blamed Pat after Roy Evans died?", "Barry Evans", ["Nathan Williams", "Ricky Butcher", "Ian Beale"], "Easy", "Evans Family", ["Barry Blames Pat", "Family Grief"]],
    ["Which former wife of Ricky Butcher was also a member of the Jackson family?", "Bianca Jackson", ["Sonia Jackson", "Carol Jackson", "Natalie Evans"], "Easy", "Evans Family", ["Ricky Bianca Past Marriage", "Butcher Jackson Family"]],
    ["Who did Barry exclude from Roy Evans's funeral during their feud?", "Pat Evans", ["Natalie Evans", "Janine Butcher", "Peggy Mitchell"], "Medium", "Evans Family", ["Roy Funeral Exclusion", "Barry Pat Feud"]],
    ["Which former couple's affair was exposed to the Square in March?", "Ricky Butcher and Natalie Evans", ["Phil Mitchell and Kate Morton", "Martin Fowler and Sonia Jackson", "Alfie Moon and Kat Slater"], "Medium", "Evans Family", ["Ricky Natalie Affair Exposed", "March Revelation"]],
    ["Which Evans family member was Natalie still married to during her affair with Ricky?", "Barry Evans", ["Roy Evans", "Ian Beale", "Nathan Williams"], "Easy", "Evans Family", ["Natalie Barry Marriage", "Family Breakdown"]],
    ["What was the first name of Barry and Natalie's young son?", "Jack", ["Jamie", "Joe", "Ben"], "Easy", "Evans Family", ["Jack Evans", "Family Child"]],
    ["Which business provided Barry Evans's main livelihood?", "A car dealership", ["A hair salon", "A bookmaker's", "A newsagent's"], "Easy", "Evans Family", ["Barry Car Lot", "Walford Motors"]],
    ["Which woman became increasingly involved in Barry's car business after Natalie left him?", "Janine Butcher", ["Laura Beale", "Kate Morton", "Vicki Fowler"], "Easy", "Evans Family", ["Janine Car Lot", "Barry Manipulation"]],

    // PHIL, KATE AND LISA (10)
    ["Which police officer investigated Phil while pretending to be his girlfriend?", "Kate Morton", ["Jill Marsden", "Shirley Benson", "Joanne Ryan"], "Easy", "Phil Kate And Lisa", ["Kate Undercover", "Phil Investigation"]],
    ["Which detective inspector supervised Kate's investigation into Lisa's disappearance?", "Jill Marsden", ["Dominic Price", "Kate Morton", "Jack Dalton"], "Medium", "Phil Kate And Lisa", ["DCI Jill Marsden", "Police Operation"]],
    ["Which country was the setting for the flashback revealing Phil's confrontation with Lisa?", "Portugal", ["Spain", "France", "Italy"], "Medium", "Phil Kate And Lisa", ["Portugal Flashback", "Phil Lisa Confrontation"]],
    ["What dangerous landscape feature did Lisa approach while Phil followed her in Portugal?", "A cliff edge", ["A railway bridge", "A deep quarry", "A flooded tunnel"], "Medium", "Phil Kate And Lisa", ["Portugal Cliff Scene", "Phil Lisa Flashback"]],
    ["What did Kate wear to record Phil's account for the police?", "A concealed wire", ["A hidden body camera", "A recording wristwatch", "A radio earpiece"], "Medium", "Phil Kate And Lisa", ["Police Wire", "Secret Recording"]],
    ["What unexpected sound helped Phil discover Kate's secret police operation?", "Her mobile phone ringing", ["A police siren", "A car alarm", "A radio playing"], "Medium", "Phil Kate And Lisa", ["Kate Mobile Phone", "Undercover Exposed"]],
    ["What career did Kate give up to remain with Phil?", "Police officer", ["Doctor", "Journalist", "Solicitor"], "Easy", "Phil Kate And Lisa", ["Kate Resigns Police", "Relationship Choice"]],
    ["Which month did Phil Mitchell marry Kate Morton?", "September", ["February", "June", "December"], "Medium", "Phil Kate And Lisa", ["September 2003 Wedding", "Phil Kate Marriage"]],
    ["Who unexpectedly reappeared at Phil and Kate's wedding reception?", "Lisa Fowler", ["Melanie Owen", "Kathy Mitchell", "Sharon Watts"], "Easy", "Phil Kate And Lisa", ["Lisa Returns", "Wedding Reception Surprise"]],
    ["Which former partner tried to regain custody of Louise after returning to Walford?", "Lisa Fowler", ["Sharon Watts", "Kate Morton", "Melanie Owen"], "Easy", "Phil Kate And Lisa", ["Lisa Custody Campaign", "Louise Mitchell"]],

    // DENNIS RICKMAN AND THE FIRM (10)
    ["Which actor joined EastEnders as Dennis Rickman?", "Nigel Harman", ["Michael Higgs", "Joe Swash", "Raji James"], "Easy", "Dennis And Dalton", ["Nigel Harman", "Dennis Casting"]],
    ["Which notorious Walford resident was Dennis Rickman's biological father?", "Den Watts", ["Phil Mitchell", "Jack Dalton", "Frank Butcher"], "Easy", "Dennis And Dalton", ["Dennis Den Father Son", "Rickman Parentage"]],
    ["What was the first name of Dennis Rickman's mother?", "Paula", ["Angie", "Chrissie", "Kathy"], "Medium", "Dennis And Dalton", ["Paula Rickman", "Dennis Mother"]],
    ["Which crime syndicate had Dennis Rickman previously worked for?", "The Firm", ["The Krays", "The Cartel", "The Syndicate"], "Medium", "Dennis And Dalton", ["The Firm", "Dennis Criminal Past"]],
    ["Which gangland boss employed Dennis Rickman before their fatal falling-out?", "Jack Dalton", ["Andy Hunter", "George Palmer", "Dan Sullivan"], "Easy", "Dennis And Dalton", ["Jack Dalton", "Dennis Employer"]],
    ["Which actor played gangland boss Jack Dalton?", "Hywel Bennett", ["Leslie Grantham", "Martin Kemp", "Dalip Tahil"], "Medium", "Dennis And Dalton", ["Hywel Bennett", "Dalton Casting"]],
    ["Who was ordered by Jack Dalton to kill Dennis Rickman?", "Phil Mitchell", ["Ian Beale", "Barry Evans", "Billy Mitchell"], "Medium", "Dennis And Dalton", ["Dalton Orders Phil", "Assassination Order"]],
    ["What sum did Dennis demand from Dalton in the summer?", "£20,000", ["£2,000", "£10,000", "£100,000"], "Medium", "Dennis And Dalton", ["Twenty Thousand Pounds", "Dennis Extortion"]],
    ["Which gangster did Dennis Rickman shoot and kill in July?", "Jack Dalton", ["Andy Hunter", "George Palmer", "Terry Raymond"], "Easy", "Dennis And Dalton", ["Dalton Murder", "July 2003"]],
    ["Who told Dennis that Dalton had ordered the attempt on Den Watts's life years earlier?", "Jack Dalton", ["Sharon Watts", "Kate Morton", "Sam Mitchell"], "Medium", "Dennis And Dalton", ["Dalton Confession", "Den Shooting History"]],

    // DEN WATTS RETURNS FROM THE DEAD (10)
    ["Which former Queen Vic landlord made a sensational return from the dead?", "Den Watts", ["Frank Butcher", "Pete Beale", "Roy Evans"], "Easy", "Den Returns", ["Dirty Den Returns", "September 2003"]],
    ["Which actor returned to play Dirty Den?", "Leslie Grantham", ["Nigel Harman", "Hywel Bennett", "Tony Caunter"], "Easy", "Den Returns", ["Leslie Grantham", "Den Actor"]],
    ["Which of Den's daughters helped bring him back to Walford?", "Vicki Fowler", ["Sharon Watts", "Michelle Fowler", "Sonia Jackson"], "Medium", "Den Returns", ["Vicki Brings Den Home", "Family Reunion"]],
    ["In which country had Den been living while everyone in Walford believed him dead?", "Spain", ["Portugal", "Australia", "Canada"], "Easy", "Den Returns", ["Den Hiding In Spain", "Faked Death"]],
    ["Approximately how long had Den Watts been presumed dead when he returned?", "Fourteen years", ["Five years", "Eight years", "Twenty-five years"], "Medium", "Den Returns", ["Fourteen Year Absence", "1989 To 2003"]],
    ["What affectionate name did Den use when he greeted Sharon on his return?", "Princess", ["Angel", "Sunshine", "Darling girl"], "Easy", "Den Returns", ["Hello Princess", "Den Sharon Reunion"]],
    ["Whose body had been mistakenly identified as Den's in the canal years earlier?", "Mr Vinnicombe's", ["Jack Dalton's", "Pete Beale's", "George Palmer's"], "Medium", "Den Returns", ["Vinnicombe Body", "Canal Identification"]],
    ["Which two characters appeared in the special two-hander following Den's return?", "Den and Sharon Watts", ["Phil and Kate Mitchell", "Kat and Zoe Slater", "Den and Dennis Rickman"], "Medium", "Den Returns", ["Den Sharon Two Hander", "September Reunion Episode"]],
    ["Which Mitchell did Den arrange to have caught during a warehouse robbery?", "Phil Mitchell", ["Billy Mitchell", "Jamie Mitchell", "Grant Mitchell"], "Easy", "Den Returns", ["Phil Framed", "November Warehouse Robbery"]],
    ["Which woman escaped from Walford with Louise after Phil was arrested?", "Lisa Fowler", ["Sharon Watts", "Kate Mitchell", "Sam Mitchell"], "Easy", "Den Returns", ["Lisa Takes Louise", "Custody Escape"]],

    // KAT, ALFIE AND ANDY (10)
    ["Which Queen Vic manager became romantically involved with Kat Slater?", "Alfie Moon", ["Andy Hunter", "Spencer Moon", "Garry Hobbs"], "Easy", "Kat Alfie And Andy", ["Kat And Alfie Romance", "Kalfie"]],
    ["Which gangster began courting Kat while Alfie struggled to admit his feelings?", "Andy Hunter", ["Jack Dalton", "Dennis Rickman", "Dan Sullivan"], "Easy", "Kat Alfie And Andy", ["Andy Courts Kat", "Love Triangle"]],
    ["Which actor portrayed Andy Hunter on his arrival?", "Michael Higgs", ["Nigel Harman", "Hywel Bennett", "Shane Richie"], "Medium", "Kat Alfie And Andy", ["Michael Higgs", "Andy Actor"]],
    ["Which woman did Alfie want to marry despite her engagement to Andy Hunter?", "Kat Slater", ["Sharon Watts", "Zoe Slater", "Janine Butcher"], "Easy", "Kat Alfie And Andy", ["Alfie Loves Kat", "Andy Engagement"]],
    ["Which month did Alfie interrupt Kat and Andy's planned wedding?", "November", ["March", "July", "September"], "Medium", "Kat Alfie And Andy", ["November 2003 Ceremony", "Andy Kat Wedding Stopped"]],
    ["Who interrupted Kat and Andy's wedding ceremony to declare his feelings?", "Alfie Moon", ["Den Watts", "Phil Mitchell", "Charlie Slater"], "Easy", "Kat Alfie And Andy", ["Alfie Stops Wedding", "Kalfie Turning Point"]],
    ["On which day did Kat and Alfie finally marry?", "Christmas Day", ["Christmas Eve", "Boxing Day", "New Year's Eve"], "Easy", "Kat Alfie And Andy", ["Christmas 2003 Wedding", "Kalfie Marriage"]],
    ["Why was Alfie's Christmas wedding initially in danger of being invalid?", "His divorce was not finalised", ["The church was closed", "Kat had lost her passport", "The registrar refused to attend"], "Medium", "Kat Alfie And Andy", ["Alfie Divorce Delay", "Wedding Crisis"]],
    ["Who did Alfie persuade to pretend to be the registrar during his wedding?", "His friend Roy", ["His brother Spencer", "Den Watts", "Jim Branning"], "Medium", "Kat Alfie And Andy", ["Fake Registrar Roy", "Wedding Deception"]],
    ["What document arrived in time to allow Kat and Alfie's genuine marriage ceremony?", "Alfie's divorce papers", ["Kat's birth certificate", "The Queen Vic's licence", "Charlie's passport"], "Medium", "Kat Alfie And Andy", ["Divorce Papers Arrive", "Real Wedding"]],

    // LAURA, BOBBY, IAN AND GARRY (10)
    ["Which woman gave birth to Bobby Beale during the summer?", "Laura Beale", ["Natalie Evans", "Lynne Hobbs", "Kate Mitchell"], "Easy", "Laura And Bobby", ["Bobby Beale Born", "Laura Mother"]],
    ["Which month was Bobby Beale born?", "July", ["February", "April", "November"], "Medium", "Laura And Bobby", ["July 2003", "Bobby Birth Month"]],
    ["Who was eventually established as Bobby Beale's biological father?", "Ian Beale", ["Garry Hobbs", "Phil Mitchell", "Barry Evans"], "Easy", "Laura And Bobby", ["Ian Bobby Paternity", "Beale Family"]],
    ["Which man did Laura initially believe was Bobby's father?", "Garry Hobbs", ["Alfie Moon", "Ricky Butcher", "Steve Owen"], "Easy", "Laura And Bobby", ["Garry Suspected Father", "Paternity Confusion"]],
    ["What medical procedure had made Ian wrongly believe he could not father another child?", "A vasectomy", ["A kidney transplant", "A blood transfusion", "An appendectomy"], "Medium", "Laura And Bobby", ["Ian Vasectomy", "Bobby Paternity Doubt"]],
    ["Which Slater daughter was married to Garry when Laura said he was Bobby's father?", "Lynne Slater", ["Kat Slater", "Zoe Slater", "Little Mo Morgan"], "Easy", "Laura And Bobby", ["Lynne Garry Marriage", "Affair Fallout"]],
    ["What medical treatment for baby Bobby helped reveal his true paternity?", "A blood transfusion", ["An eye operation", "A heart transplant", "An allergy test"], "Medium", "Laura And Bobby", ["Bobby Blood Transfusion", "Paternity Discovery"]],
    ["Which father-of-three rejected Laura's attempts to reconcile after she learned the truth about Bobby?", "Ian Beale", ["Phil Mitchell", "Patrick Trueman", "Barry Evans"], "Medium", "Laura And Bobby", ["Ian Rejects Laura", "Beale Marriage Breakdown"]],
    ["Which two of Ian's children were Laura's stepchildren before her marriage collapsed?", "Peter and Lucy", ["Ben and Louise", "Sonia and Robbie", "Jack and Courtney"], "Easy", "Laura And Bobby", ["Peter Lucy Beale", "Laura Stepmother"]],
    ["Which long-standing Walford resident shared a home with Laura and Garry during their family troubles?", "Pat Evans", ["Peggy Mitchell", "Dot Branning", "Pauline Fowler"], "Medium", "Laura And Bobby", ["Pat Lives With Laura", "Shared Accommodation"]],

    // LITTLE MO AND GRAHAM (10)
    ["Which Walford woman was sexually assaulted by Graham Foster in December?", "Little Mo Mitchell", ["Kat Slater", "Zoe Slater", "Sharon Watts"], "Easy", "Little Mo And Graham", ["Little Mo Rape Storyline", "December 2003"]],
    ["What was the surname of the man who assaulted Little Mo?", "Foster", ["Morgan", "Hunter", "Dalton"], "Medium", "Little Mo And Graham", ["Graham Foster", "Perpetrator Name"]],
    ["Which actor played Graham Foster?", "Alex McSweeney", ["Michael Higgs", "Alex Ferns", "Ricky Groves"], "Medium", "Little Mo And Graham", ["Alex McSweeney", "Graham Casting"]],
    ["Where had Little Mo met Graham Foster through her work?", "The Queen Victoria", ["The Arches", "The market office", "The bookmakers"], "Medium", "Little Mo And Graham", ["Queen Vic Customer", "Groomed Rape Story"]],
    ["Which woman did Little Mo first confide in following Graham's assault?", "Kate Mitchell", ["Sharon Watts", "Pauline Fowler", "Pat Evans"], "Medium", "Little Mo And Graham", ["Kate Supports Little Mo", "Disclosure"]],
    ["What previous profession did Kate have that informed her advice to Little Mo?", "Police officer", ["Social worker", "Doctor", "Teacher"], "Easy", "Little Mo And Graham", ["Kate Police Background", "Supporting Victim"]],
    ["Which Mitchell husband did Little Mo tell about the assault?", "Billy Mitchell", ["Phil Mitchell", "Grant Mitchell", "Jamie Mitchell"], "Easy", "Little Mo And Graham", ["Billy Learns Truth", "Marriage Aftermath"]],
    ["What did Little Mo and Billy do after she told him what Graham had done?", "Reported it to the police", ["Moved to Spain", "Opened a café", "Left the Square permanently"], "Easy", "Little Mo And Graham", ["Police Report", "December Investigation"]],
    ["Which month saw Graham Foster's assault on Little Mo?", "December", ["March", "June", "September"], "Medium", "Little Mo And Graham", ["December 2003", "Assault Episode Date"]],
    ["What happened to Graham after Little Mo reported the assault?", "He was arrested", ["He became a pub landlord", "He married Kat", "He inherited the market"], "Easy", "Little Mo And Graham", ["Graham Arrest", "Police Response"]],

    // JANINE, PAUL AND BARRY (10)
    ["Which woman began manipulating Barry Evans after his marriage collapsed?", "Janine Butcher", ["Laura Beale", "Kate Morton", "Vicki Fowler"], "Easy", "Janine And Barry", ["Janine Targets Barry", "Manipulation"]],
    ["Which Trueman brother secretly worked with Janine to take Barry's money?", "Paul Trueman", ["Anthony Trueman", "Patrick Trueman", "Tariq Larousi"], "Medium", "Janine And Barry", ["Paul Janine Scheme", "Financial Conspiracy"]],
    ["Which business did Janine work in while getting closer to Barry?", "His car lot", ["The launderette", "The Queen Vic", "The Minute Mart"], "Easy", "Janine And Barry", ["Janine Car Lot Employment", "Barry Business"]],
    ["Which medical problem did Barry mistakenly think was terminal?", "A heart condition", ["A brain tumour", "Kidney failure", "Liver disease"], "Medium", "Janine And Barry", ["Barry Heart Murmur", "Misdiagnosis"]],
    ["Which man proposed to Janine after becoming convinced she loved him?", "Barry Evans", ["Paul Trueman", "Ricky Butcher", "Ian Beale"], "Easy", "Janine And Barry", ["Barry Proposes", "Janine Engagement"]],
    ["Which country hosted Janine and Barry's New Year's Eve wedding?", "Scotland", ["Wales", "Ireland", "Spain"], "Easy", "Janine And Barry", ["Scottish Wedding", "New Year 2003"]],
    ["On which date did Janine and Barry get married?", "31 December", ["25 December", "1 November", "14 February"], "Medium", "Janine And Barry", ["31 December 2003", "New Years Eve Wedding"]],
    ["What news about his condition did Barry receive shortly before marrying Janine?", "He was not terminally ill", ["He needed a heart transplant", "He had lost his sight", "He was diagnosed with diabetes"], "Medium", "Janine And Barry", ["Heart Diagnosis False Alarm", "Wedding Crisis"]],
    ["Which former wife had separated from Barry before Janine became his fiancée?", "Natalie Evans", ["Pat Evans", "Lisa Fowler", "Laura Beale"], "Easy", "Janine And Barry", ["Barry Natalie Divorce", "Family Breakdown"]],
    ["Which relative was Janine's brother and Natalie's former lover?", "Ricky Butcher", ["Frank Butcher", "David Wicks", "Simon Wicks"], "Medium", "Janine And Barry", ["Janine Ricky Siblings", "Ricky Natalie Affair"]],

    // FERREIRA ARRIVALS AND SHIRLEY (10)
    ["Which new family arrived in Walford headed by Dan?", "The Ferreiras", ["The Millers", "The Truemans", "The Masoods"], "Easy", "Ferreira Family", ["Ferreira Family Arrival", "June 2003"]],
    ["Which actor played Ferreira family patriarch Dan?", "Dalip Tahil", ["Raji James", "Ameet Chana", "Michael Higgs"], "Medium", "Ferreira Family", ["Dalip Tahil", "Dan Ferreira Casting"]],
    ["Which Ferreira son was a lecturer and had struggled with gambling?", "Ash Ferreira", ["Adi Ferreira", "Ronny Ferreira", "Tariq Larousi"], "Medium", "Ferreira Family", ["Ash Lecturer", "Ash Gambling"]],
    ["Which Ferreira son was a DJ?", "Ronny Ferreira", ["Adi Ferreira", "Ash Ferreira", "Tariq Larousi"], "Medium", "Ferreira Family", ["Ronny DJ", "Ferreira Occupation"]],
    ["Which Ferreira daughter became involved with Tariq Larousi?", "Kareena Ferreira", ["Shirley Benson", "Vicki Fowler", "Kelly Taylor"], "Medium", "Ferreira Family", ["Kareena Tariq Relationship", "Family Romance"]],
    ["What was the first name of Dan Ferreira's estranged wife?", "Pushpa", ["Yolande", "Audrey", "Shirley"], "Medium", "Ferreira Family", ["Pushpa Ferreira", "Dan Separation"]],
    ["What lie did Dan tell Shirley Benson about his estranged wife?", "That she was dead", ["That she had remarried in Spain", "That she was in prison", "That she had joined the police"], "Medium", "Ferreira Family", ["Dan Pretends Widowed", "Pushpa Alive"]],
    ["Which Ferreira son secretly dated Shirley Benson despite his father's interest in her?", "Ash Ferreira", ["Ronny Ferreira", "Adi Ferreira", "Tariq Larousi"], "Medium", "Ferreira Family", ["Ash Shirley Relationship", "Father Son Rivalry"]],
    ["What kind of shop did Shirley Benson work in?", "A bookmaker's", ["A bakery", "A florist's", "A chemist's"], "Easy", "Ferreira Family", ["Shirley Betting Shop", "Bookies Job"]],
    ["Which newcomer living above Shirley Benson terrorised her with loud music?", "Gavin Sharp", ["Andy Hunter", "Mickey Miller", "Dennis Rickman"], "Medium", "Ferreira Family", ["Gavin Loud Music", "Neighbour Harassment"]],

    // OTHER MEMORABLE 2003 STORIES (10)
    ["Which woman came to Walford after meeting Patrick Trueman on holiday?", "Yolande Duke", ["Pushpa Ferreira", "Kate Morton", "Shirley Benson"], "Easy", "Other Walford Stories", ["Yolande Arrival", "Patrick Romance"]],
    ["In which Caribbean country did Patrick meet Yolande?", "Trinidad", ["Jamaica", "Barbados", "Grenada"], "Medium", "Other Walford Stories", ["Patrick Trinidad Holiday", "Yolande First Meeting"]],
    ["Which actress made her debut as Yolande Duke?", "Angela Wynter", ["Madhur Jaffrey", "Robyn Moore", "Lucy Speed"], "Medium", "Other Walford Stories", ["Angela Wynter", "Yolande Casting"]],
    ["Which young Walford resident was sent to prison following Jamie Mitchell's fatal accident?", "Martin Fowler", ["Robbie Jackson", "Gus Smith", "Spencer Moon"], "Easy", "Other Walford Stories", ["Martin Imprisoned", "Jamie Road Death Aftermath"]],
    ["Which woman forgave Martin after Jamie's fatal road accident?", "Sonia Jackson", ["Janine Butcher", "Kat Slater", "Kelly Taylor"], "Medium", "Other Walford Stories", ["Sonia Forgives Martin", "Grief And Reconciliation"]],
    ["Which Walford pensioner was attacked by someone posing as a charity collector?", "Dot Branning", ["Peggy Mitchell", "Pat Evans", "Pauline Fowler"], "Medium", "Other Walford Stories", ["Dot Attacked", "Fake Charity Collector"]],
    ["From which business did Dot briefly retire in the spring?", "The launderette", ["The Queen Victoria", "The café", "The market"], "Easy", "Other Walford Stories", ["Dot Launderette Retirement", "2003 Work"]],
    ["Which actress played bookmaker's assistant Shirley Benson?", "Robyn Moore", ["Angela Wynter", "Madhur Jaffrey", "Hannah Waterman"], "Medium", "Other Walford Stories", ["Robyn Moore", "Shirley Casting"]],
    ["Which actor debuted as streetwise newcomer Mickey Miller?", "Joe Swash", ["Mohammed George", "Nigel Harman", "Christopher Parker"], "Easy", "Other Walford Stories", ["Joe Swash", "Mickey Miller Arrival"]],
    ["Which Trueman brother departed from Walford in the summer?", "Anthony Trueman", ["Paul Trueman", "Patrick Trueman", "Tariq Larousi"], "Medium", "Other Walford Stories", ["Anthony Trueman Departure", "July 2003"]]
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic, detailTags], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: "tv_" + String(7924 + index).padStart(4, "0"),
        category: "Television",
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set([
            "British Television",
            "Soaps",
            "EastEnders",
            "2003",
            topic,
            ...topicTags[topic],
            correctAnswer,
            ...detailTags
        ])],
        dailyEligible: true
    };
});

module.exports = questions;
