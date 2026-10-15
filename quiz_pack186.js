// quiz_pack186.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Emmerdale Farm - The Early Years (1975-1982)
// 100 questions: tv_2501 to tv_2600
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [
    // 1975 - The Gimbels and the changing programme
    ["Which neighbouring farming family clashed with the Sugdens during the mid-1970s?", "The Gimbels", ["The Tates", "The Dingles", "The Kings"], "Easy", "1975", "Families"],
    ["Which actor played the domineering farmer Jim Gimbel?", "John Atkinson", ["Frederick Pyne", "Arthur Pentelow", "Ronald Magill"], "Hard", "1975", "Actors"],
    ["What was the first name of Jim Gimbel's wife?", "Freda", ["Nellie", "Laura", "Dolly"], "Medium", "1975", "Families"],
    ["Which actress played Kathy Gimbel, Joe Sugden's early girlfriend?", "Polly Hemingway", ["Katharine Barker", "Mary Henry", "Gail Harrison"], "Hard", "1975", "Actors"],
    ["Which of Jim Gimbel's sons did he throw out after an argument in 1975?", "Martin", ["Jackie", "Jimmy", "Clive"], "Hard", "1975", "Storylines"],
    ["Which future film and television composer played Martin Gimbel?", "George Fenton", ["Tony Hatch", "Carl Davis", "John Barry"], "Hard", "1975", "Actors"],
    ["What nickname was given to Emmerdale Farm's opening titles introduced in October 1975?", "The Sunset titles", ["The Harvest titles", "The River titles", "The Moorland titles"], "Hard", "1975", "Production"],

    // 1976 - A tragedy and a change of scenery
    ["What happened to Matt Skilbeck's twins in January 1976?", "They were killed in a road accident", ["They were taken into care", "They moved to Scotland", "They were abducted"], "Medium", "1976", "Storylines"],
    ["Where did the fatal 1976 accident involving Matt Skilbeck's children take place?", "At a railway level crossing", ["On a moorland bridge", "At a farm entrance", "Outside The Woolpack"], "Medium", "1976", "Storylines"],
    ["Which relative was looking after Matt Skilbeck's twins when she died alongside them?", "Aunt Beattie Dowton", ["Aunt Jessie Renfrew", "Aunt Nellie Ratcliffe", "Aunt Laura Verney"], "Hard", "1976", "Families"],
    ["What caused The Woolpack to move to different premises in 1976?", "Subsidence", ["A flood", "A fire", "A compulsory purchase"], "Medium", "1976", "Locations"],
    ["What had the new Woolpack building been used as before becoming a pub in 1976?", "A corn chandler's", ["A police station", "A village school", "A railway office"], "Hard", "1976", "Locations"],
    ["In which month of 1976 did The Woolpack open in its new building?", "February", ["May", "August", "November"], "Hard", "1976", "Locations"],
    ["Which Yorkshire village took over from Arncliffe for Emmerdale's village location filming in 1976?", "Esholt", ["Haworth", "Grassington", "Otley"], "Medium", "1976", "Production"],
    ["What was the real-life name of the Esholt pub used as the new Woolpack exterior?", "The Commercial Inn", ["The Royal Oak", "The King's Arms", "The White Hart"], "Hard", "1976", "Production"],
    ["Which real-life inn had originally stood in for The Woolpack during filming at Arncliffe?", "The Falcon Inn", ["The Black Horse", "The Bay Horse", "The George Inn"], "Hard", "1976", "Production"],
    ["What was the name of Christine Sharp's father, who became involved in her divorce from Joe Sugden?", "Robert Sharp", ["George Sharp", "Frank Sharp", "Albert Sharp"], "Hard", "1976", "Families"],
    ["What sort of farm did Christine Sharp's father run?", "A dairy farm", ["A sheep farm", "A poultry farm", "A pig farm"], "Hard", "1976", "Characters"],
    ["Which woman briefly became romantically involved with widower Matt Skilbeck in 1976?", "Beth Openshaw", ["Kathy Gimbel", "Marian Wilks", "Laura Verney"], "Hard", "1976", "Relationships"],

    // 1977 - Dolly arrives and trouble brews
    ["Which future Mrs Skilbeck arrived in Beckindale as a barmaid in 1977?", "Dolly Acaster", ["Pat Merrick", "Meg Armstrong", "Judy Westrop"], "Easy", "1977", "Characters"],
    ["Who originally played Dolly Acaster when she joined Emmerdale Farm in 1977?", "Katharine Barker", ["Jean Rogers", "Helen Weir", "Elizabeth Mickery"], "Medium", "1977", "Actors"],
    ["From which town did Dolly Acaster move to Beckindale?", "Darlington", ["Leeds", "Harrogate", "Ripon"], "Hard", "1977", "Characters"],
    ["Which widowed farmer began a romance with Dolly Acaster in 1977?", "Matt Skilbeck", ["Joe Sugden", "Jack Sugden", "Henry Wilks"], "Easy", "1977", "Relationships"],
    ["Which couple caused gossip by living together unmarried in Beckindale in 1977?", "Joe Sugden and Kathy Gimbel", ["Matt Skilbeck and Dolly Acaster", "Amos Brearly and Marian Wilks", "Jack Sugden and Pat Merrick"], "Medium", "1977", "Relationships"],
    ["On which Beckindale street did Joe Sugden and Kathy Gimbel set up home together?", "Demdyke Row", ["Main Street", "Connelton Road", "Mill Lane"], "Hard", "1977", "Locations"],
    ["Which troubled farmer took his own life in 1977?", "Jim Gimbel", ["George Verney", "Enoch Tolly", "Trevor Thatcher"], "Medium", "1977", "Storylines"],
    ["How did Jim Gimbel die in 1977?", "He shot himself", ["He drowned", "He fell from a roof", "He was hit by a train"], "Hard", "1977", "Storylines"],
    ["Which new vicar arrived in Beckindale in October 1977?", "Donald Hinton", ["Bob Jerome", "Ashley Thomas", "Charles Anderson"], "Medium", "1977", "Characters"],
    ["Which actor played the Reverend Donald Hinton?", "Hugh Manning", ["Richard Howard", "Patrick Holt", "Toke Townley"], "Hard", "1977", "Actors"],
    ["What was the first name of the Reverend Donald Hinton's son?", "Clive", ["Martin", "Jackie", "Richard"], "Hard", "1977", "Families"],
    ["Who was Sam Pearson's old flame, whom he later tried to help keep her cottage?", "Nellie Ratcliffe", ["Freda Gimbel", "Meg Armstrong", "Mary Hinton"], "Hard", "1977", "Relationships"],
    ["Which couple sheltered at Emmerdale Farm after a storm destroyed their cottage in 1977?", "Ray and Sarah Oswell", ["Matt and Dolly Skilbeck", "Jim and Freda Gimbel", "Seth and Meg Armstrong"], "Hard", "1977", "Storylines"],
    ["What destroyed Ray and Sarah Oswell's cottage during a 1977 storm?", "A falling tree", ["A landslide", "A lightning strike", "An overflowing river"], "Hard", "1977", "Storylines"],
    ["Which field caught fire in an October 1977 Emmerdale Farm storyline?", "Parker's Field", ["Butler's Field", "Mowlam's Field", "Merrick's Field"], "Hard", "1977", "Storylines"],
    ["What kind of team helped fight the 1977 field fire in Beckindale?", "A volunteer fire brigade", ["An army unit", "A team of miners", "A forestry patrol"], "Medium", "1977", "Storylines"],

    // 1978 - Marriages, robberies, discoveries and Seth
    ["Which couple married in Emmerdale Farm in June 1978?", "Matt Skilbeck and Dolly Acaster", ["Joe Sugden and Kathy Gimbel", "Jack Sugden and Pat Merrick", "Henry Wilks and Meg Armstrong"], "Easy", "1978", "Marriages"],
    ["Which vicar conducted Matt and Dolly Skilbeck's wedding?", "Donald Hinton", ["Bob Jerome", "William Hockley", "Ashley Thomas"], "Hard", "1978", "Marriages"],
    ["What was the name of the church where Matt and Dolly married in 1978?", "St Mary's", ["St John's", "St Peter's", "All Saints'"], "Hard", "1978", "Locations"],
    ["Which vicar's son became trapped in a mine explosion in 1978?", "Clive Hinton", ["Jimmy Armstrong", "Martin Gimbel", "Jackie Merrick"], "Medium", "1978", "Storylines"],
    ["Which of Clive Hinton's companions escaped the 1978 mine explosion with cuts and bruises?", "Ian Hepton", ["Rod Blake", "Steve Hawker", "Richard Anstey"], "Hard", "1978", "Storylines"],
    ["Which two people carried out an armed robbery at The Woolpack in May 1978?", "Steve Hawker and Pip Coulter", ["Tom Merrick and Fred Armstrong", "Joe Sugden and Ian Hepton", "George Verney and Rod Blake"], "Hard", "1978", "Crime"],
    ["Where did the armed robbers lock Amos Brearly and Henry Wilks in 1978?", "In The Woolpack cellar", ["In the village shop", "In a farmhouse barn", "In an upstairs bedroom"], "Medium", "1978", "Crime"],
    ["Which elderly Emmerdale Farm resident was held at gunpoint after the 1978 Woolpack robbery?", "Sam Pearson", ["George Verney", "Amos Brearly", "Donald Hinton"], "Medium", "1978", "Crime"],
    ["Who provided a getaway car to protect her father during the 1978 siege at Emmerdale Farm?", "Annie Sugden", ["Dolly Skilbeck", "Meg Armstrong", "Marian Wilks"], "Hard", "1978", "Crime"],
    ["Which much-loved village character made his first appearance in May 1978?", "Seth Armstrong", ["Alan Turner", "Eric Pollard", "Archie Brooks"], "Easy", "1978", "Characters"],
    ["Which actor played Seth Armstrong for more than twenty years?", "Stan Richards", ["Arthur Pentelow", "Richard Thorp", "Ronald Magill"], "Easy", "1978", "Actors"],
    ["What job did Seth Armstrong have at Beckindale's school when he first appeared?", "Boilerman", ["Headteacher", "Dinner supervisor", "School secretary"], "Medium", "1978", "Characters"],
    ["Which illegal countryside activity was Seth Armstrong particularly fond of?", "Poaching", ["Smuggling", "Illegal fishing trawls", "Horse theft"], "Easy", "1978", "Characters"],
    ["Which teacher helped Seth Armstrong learn to read in 1978?", "Antony Moeketsi", ["Donald Hinton", "Richard Anstey", "Trevor Thatcher"], "Hard", "1978", "Characters"],
    ["Which actor played teacher Antony Moeketsi in Emmerdale Farm?", "Oscar James", ["Hugh Manning", "Carl Rigg", "Drew Dawson"], "Hard", "1978", "Actors"],
    ["To which country did teacher Antony Moeketsi leave after being offered another job?", "Wales", ["Scotland", "Ireland", "Canada"], "Hard", "1978", "Characters"],
    ["Which local squire died in 1978, leading to changes at his estate?", "George Verney", ["Henry Wilks", "Jim Gimbel", "Harry Mowlam"], "Medium", "1978", "Deaths"],
    ["Which company bought the Verney estate in 1978?", "NY Estates", ["Miffield Holdings", "Yorkshire Dales Trust", "Northern Properties"], "Medium", "1978", "Locations"],
    ["What new name was given to the former Verney manor house after the estate changed hands?", "Home Farm", ["Butler's Farm", "Crossgill Farm", "Inglebrook House"], "Medium", "1978", "Locations"],
    ["Which estate manager was among the first to run Home Farm for NY Estates?", "Trevor Thatcher", ["Alan Turner", "Richard Anstey", "Maurice Westrop"], "Hard", "1978", "Characters"],
    ["What was discovered beneath The Woolpack during building work in 1978?", "A human skeleton", ["A buried chest of coins", "A secret tunnel", "An old well"], "Medium", "1978", "Storylines"],
    ["The skeleton discovered near The Woolpack in 1978 was linked to which villager's ancestry?", "Sam Pearson", ["Amos Brearly", "Henry Wilks", "George Verney"], "Hard", "1978", "Storylines"],
    ["What valuable item was discovered at the Verney estate during 1978?", "A rare painting", ["A gold crown", "A medieval sword", "A silver chalice"], "Hard", "1978", "Storylines"],

    // 1979 - A testing year
    ["Which character announced in 1979 that she was expecting Matt Skilbeck's baby?", "Dolly Skilbeck", ["Pat Merrick", "Meg Armstrong", "Marian Wilks"], "Easy", "1979", "Families"],
    ["Which woman was attacked in a serious Emmerdale Farm storyline in 1979?", "Wendy Hotson", ["Judy Westrop", "Dolly Skilbeck", "Kathy Gimbel"], "Hard", "1979", "Storylines"],
    ["Whom did Joe Sugden accidentally shoot in the leg in 1979?", "Phil Fletcher", ["Tom Merrick", "Jim Gimbel", "Clive Hinton"], "Hard", "1979", "Storylines"],
    ["Which character suffered drinking problems and depression in a 1979 storyline?", "Judy Westrop", ["Freda Gimbel", "Meg Armstrong", "Nellie Ratcliffe"], "Hard", "1979", "Storylines"],
    ["What industrial dispute disrupted ITV and delayed Emmerdale Farm's return in 1979?", "An ITV staff strike", ["A miners' strike", "A railway strike", "A postal strike"], "Medium", "1979", "Production"],
    ["Which year did Emmerdale Farm return to the screen after the long break following the 1979 ITV strike?", "1980", ["1978", "1981", "1982"], "Medium", "1979", "Production"],
    ["What was the first name of Seth Armstrong's wife, first seen in 1979?", "Meg", ["Mary", "Molly", "Marian"], "Medium", "1979", "Families"],
    ["What were the names of Seth and Meg Armstrong's two sons?", "Jimmy and Fred", ["Joe and Jack", "Clive and Martin", "Richard and Ian"], "Hard", "1979", "Families"],

    // 1980 - Returns and new faces
    ["Which actor took over the role of Jack Sugden when he returned in 1980?", "Clive Hornby", ["Andrew Burt", "Frazer Hines", "Frederick Pyne"], "Easy", "1980", "Actors"],
    ["In which country had Jack Sugden been living before his return to Beckindale in 1980?", "Italy", ["Spain", "France", "Australia"], "Medium", "1980", "Characters"],
    ["Which former sweetheart returned to Beckindale in 1980 and rekindled her romance with Jack Sugden?", "Pat Merrick", ["Kathy Gimbel", "Dolly Acaster", "Marian Wilks"], "Medium", "1980", "Relationships"],
    ["Which actress played Pat Merrick when she returned to Emmerdale Farm in 1980?", "Helen Weir", ["Jean Rogers", "Gail Harrison", "Katharine Barker"], "Hard", "1980", "Actors"],
    ["Under what first name had Pat Merrick previously been known?", "Ruth", ["Rose", "Rachel", "Rebecca"], "Hard", "1980", "Characters"],
    ["What was Pat Merrick's surname before she married Tom Merrick?", "Harker", ["Acaster", "Wilks", "Gimbel"], "Hard", "1980", "Characters"],
    ["Which actor played Pat Merrick's son Jackie?", "Ian Sharrock", ["Edward Peel", "Carl Rigg", "Drew Dawson"], "Medium", "1980", "Actors"],
    ["Which actress played Pat Merrick's daughter Sandie?", "Jane Hutcheson", ["Polly Hemingway", "Ruth Holden", "Elizabeth Mickery"], "Hard", "1980", "Actors"],
    ["Which actor played the troublesome Tom Merrick during his 1980 return?", "Edward Peel", ["David Hill", "Clive Hornby", "Arthur Pentelow"], "Hard", "1980", "Actors"],
    ["Which actress took over as Dolly Skilbeck in 1980?", "Jean Rogers", ["Katharine Barker", "Sheila Mercier", "Helen Weir"], "Medium", "1980", "Actors"],
    ["What tragedy befell Matt and Dolly Skilbeck during 1980?", "Dolly suffered a miscarriage", ["Their farmhouse burned down", "Matt was imprisoned", "They lost their home in a flood"], "Medium", "1980", "Storylines"],
    ["Where did Dolly Skilbeck begin working after losing her baby in 1980?", "The village playgroup", ["The village surgery", "The post office", "The local library"], "Hard", "1980", "Characters"],
    ["What did Tom Merrick steal from an NY Estates plantation in 1980?", "Christmas trees", ["Fence posts", "Cattle feed", "Garden statues"], "Hard", "1980", "Crime"],
    ["Which pub did Seth Armstrong leave behind when he became a regular at The Woolpack in 1980?", "The Malt Shovel", ["The Royal Oak", "The Falcon Inn", "The King's Arms"], "Hard", "1980", "Locations"],

    // 1981 - Disputes in Beckindale
    ["Which character started a rival village newspaper called the Beckindale Bugle in 1981?", "Amos Brearly", ["Henry Wilks", "Seth Armstrong", "Jack Sugden"], "Medium", "1981", "Characters"],
    ["Which newspaper had dismissed Amos Brearly before he launched the Beckindale Bugle?", "The Hotten Courier", ["The Yorkshire Post", "The Dales Gazette", "The Beckindale Herald"], "Hard", "1981", "Characters"],
    ["Which farm dog was fatally run over during a burglary at Emmerdale Farm in 1981?", "Snip", ["Bess", "Fly", "Shep"], "Hard", "1981", "Storylines"],
    ["Which estranged husband tried to frame Jack Sugden for an arson attack in 1981?", "Tom Merrick", ["Richard Anstey", "Joe Sugden", "Trevor Thatcher"], "Medium", "1981", "Crime"],
    ["Who helped drive Tom Merrick away from Beckindale following his arson plot?", "Seth Armstrong", ["Amos Brearly", "Matt Skilbeck", "Donald Hinton"], "Hard", "1981", "Crime"],
    ["Which farmer was killed in a tractor accident in February 1981?", "Enoch Tolly", ["George Verney", "Trevor Thatcher", "Jim Gimbel"], "Hard", "1981", "Deaths"],
    ["Which NY Estates manager had an affair with Virginia Lattimore in 1981?", "Richard Anstey", ["Alan Turner", "Maurice Westrop", "Trevor Thatcher"], "Hard", "1981", "Relationships"],
    ["Which actor played NY Estates worker Jock MacDonald, who first appeared in 1981?", "Drew Dawson", ["Carl Rigg", "Stan Richards", "Edward Peel"], "Hard", "1981", "Actors"],
    ["A strike at which television company disrupted production of Emmerdale Farm in late 1981?", "Yorkshire Television", ["Granada Television", "Thames Television", "Central Television"], "Medium", "1981", "Production"],

    // 1982 - A Sugden wedding, and the arrival of Alan Turner
    ["Who arrived to manage the NY Estates operation at Home Farm in 1982?", "Alan Turner", ["Trevor Thatcher", "Richard Anstey", "Maurice Westrop"], "Easy", "1982", "Characters"],
    ["Which actor played Alan Turner in Emmerdale?", "Richard Thorp", ["Stan Richards", "Clive Hornby", "Arthur Pentelow"], "Easy", "1982", "Actors"],
    ["What family secret about Jackie Merrick was confirmed in 1982?", "Jack Sugden was his biological father", ["Matt Skilbeck was his brother", "Henry Wilks was his grandfather", "Joe Sugden was his uncle by marriage"], "Medium", "1982", "Families"],
    ["Which troublesome teenager set fire to a caravan in 1982?", "Jackie Merrick", ["Clive Hinton", "Jimmy Armstrong", "Martin Gimbel"], "Medium", "1982", "Storylines"],
    ["Which couple got married in October 1982?", "Jack Sugden and Pat Merrick", ["Joe Sugden and Kathy Gimbel", "Seth Armstrong and Meg Armstrong", "Amos Brearly and Marian Wilks"], "Medium", "1982", "Marriages"],
    ["Who was best man at Jack Sugden's wedding to Pat in 1982?", "Matt Skilbeck", ["Henry Wilks", "Joe Sugden", "Seth Armstrong"], "Hard", "1982", "Marriages"],
    ["What was the name of Matt and Dolly Skilbeck's son, born in December 1982?", "Samuel", ["Jackie", "Robert", "Martin"], "Medium", "1982", "Births"],
    ["On which date in December 1982 was baby Samuel Skilbeck born?", "23 December", ["8 December", "16 December", "30 December"], "Hard", "1982", "Births"],
    ["What farm building did Matt and Dolly Skilbeck convert into their home in 1982?", "A barn", ["A stable", "A granary", "A milking parlour"], "Hard", "1982", "Locations"],
    ["Which anniversary did Emmerdale Farm celebrate in October 1982?", "Its tenth", ["Its fifth", "Its fifteenth", "Its twentieth"], "Easy", "1982", "Production"],
    ["Who did Alan Turner frequently blame for his mistakes at NY Estates during 1982?", "Joe Sugden", ["Amos Brearly", "Matt Skilbeck", "Jackie Merrick"], "Hard", "1982", "Characters"]
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(2501 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Emmerdale', year.startsWith('197') ? '1970s' : '1980s', year, topic],
        dailyEligible: true
    };
});

module.exports = questions;
