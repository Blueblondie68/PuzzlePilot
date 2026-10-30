// quiz_pack186.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Emmerdale Farm - The Early Years (1975-1982)
// 100 questions: tv_2501 to tv_2600
// Complete question metadata, era, year, character and storyline tags.
// quiz_bank.js remains unchanged.

const facts = [

    // 1975
    ["Which neighbouring farming family clashed with the Sugdens during the mid-1970s?", "The Gimbels", ["The Tates", "The Dingles", "The Kings"], "Easy", "1975", "Families", ["Gimbel Family", "Jim Gimbel", "Sugden Family", "Neighbouring Farm"]],
    ["Which actor played the domineering farmer Jim Gimbel?", "John Atkinson", ["Frederick Pyne", "Arthur Pentelow", "Ronald Magill"], "Hard", "1975", "Actors", ["John Atkinson", "Jim Gimbel", "Actor", "Original Cast"]],
    ["What was the first name of Jim Gimbel's wife?", "Freda", ["Nellie", "Laura", "Dolly"], "Medium", "1975", "Families", ["Freda Gimbel", "Jim Gimbel", "Marriage", "Gimbel Family"]],
    ["Which actress played Kathy Gimbel, Joe Sugden's early girlfriend?", "Polly Hemingway", ["Katharine Barker", "Mary Henry", "Gail Harrison"], "Hard", "1975", "Actors", ["Polly Hemingway", "Kathy Gimbel", "Actress", "Joe Sugden"]],
    ["Which of Jim Gimbel's sons did he throw out following an argument?", "Martin", ["Jackie", "Jimmy", "Clive"], "Hard", "1975", "Storylines", ["Martin Gimbel", "Jim Gimbel", "Family Dispute", "Expulsion"]],
    ["Which future film and television composer played Martin Gimbel?", "George Fenton", ["Tony Hatch", "Carl Davis", "John Barry"], "Hard", "1975", "Actors", ["George Fenton", "Martin Gimbel", "Composer", "Acting Career"]],
    ["What nickname was given to the opening titles introduced for Emmerdale Farm in October 1975?", "The Sunset titles", ["The Harvest titles", "The River titles", "The Moorland titles"], "Hard", "1975", "Production", ["Sunset Titles", "Opening Credits", "October 1975", "Title Sequence"]],

    // 1976
    ["What happened to Matt Skilbeck's twins in the January 1976 railway tragedy?", "They were killed in a road accident", ["They were taken into care", "They moved to Scotland", "They were abducted"], "Medium", "1976", "Storylines", ["Matt Skilbeck", "Sam And Sally Skilbeck", "Train Collision", "Death"]],
    ["Where did the fatal 1976 accident involving Matt Skilbeck's children take place?", "At a railway level crossing", ["On a moorland bridge", "At a farm entrance", "Outside The Woolpack"], "Medium", "1976", "Storylines", ["Sam And Sally Skilbeck", "Level Crossing", "Railway Accident", "January 1976"]],
    ["Which relative was looking after Matt Skilbeck's twins when she died alongside them?", "Aunt Beattie Dowton", ["Aunt Jessie Renfrew", "Aunt Nellie Ratcliffe", "Aunt Laura Verney"], "Hard", "1976", "Families", ["Beattie Dowton", "Sam And Sally Skilbeck", "Matt Skilbeck", "Train Accident"]],
    ["What caused The Woolpack to move to different premises?", "Subsidence", ["A flood", "A fire", "A compulsory purchase"], "Medium", "1976", "Locations", ["The Woolpack", "Subsidence", "Pub Relocation", "Beckindale"]],
    ["What had the new Woolpack building been used as before becoming a pub?", "A corn chandler's", ["A police station", "A village school", "A railway office"], "Hard", "1976", "Locations", ["The Woolpack", "Corn Chandlers", "New Premises", "Beckindale"]],
    ["In which month of 1976 did The Woolpack reopen in its new building?", "February", ["May", "August", "November"], "Hard", "1976", "Locations", ["The Woolpack", "February 1976", "Pub Opening", "Relocation"]],
    ["Which Yorkshire village took over from Arncliffe for Emmerdale's village location filming?", "Esholt", ["Haworth", "Grassington", "Otley"], "Medium", "1976", "Production", ["Esholt", "Arncliffe", "Village Filming", "Yorkshire Locations"]],
    ["What was the real-life name of the Esholt pub used as the new Woolpack exterior?", "The Commercial Inn", ["The Royal Oak", "The King's Arms", "The White Hart"], "Hard", "1976", "Production", ["Esholt", "The Commercial Inn", "Woolpack Exterior", "Real Pub"]],
    ["Which real-life inn had originally stood in for The Woolpack during filming at Arncliffe?", "The Falcon Inn", ["The Black Horse", "The Bay Horse", "The George Inn"], "Hard", "1976", "Production", ["Arncliffe", "The Falcon Inn", "Original Woolpack", "Filming Location"]],
    ["What was the name of Christine Sharp's father, who became involved in her divorce from Joe Sugden?", "Robert Sharp", ["George Sharp", "Frank Sharp", "Albert Sharp"], "Hard", "1976", "Families", ["Robert Sharp", "Christine Sharp", "Joe Sugden", "Divorce"]],
    ["What sort of farm did Christine Sharp's father run?", "A dairy farm", ["A sheep farm", "A poultry farm", "A pig farm"], "Hard", "1976", "Characters", ["Robert Sharp", "Dairy Farm", "Christine Sharp", "Farming"]],
    ["Which woman briefly became romantically involved with widower Matt Skilbeck?", "Beth Openshaw", ["Kathy Gimbel", "Marian Wilks", "Laura Verney"], "Hard", "1976", "Relationships", ["Beth Openshaw", "Matt Skilbeck", "Widower", "Romance"]],

    // 1977
    ["Which future Mrs Skilbeck arrived in Beckindale as a barmaid?", "Dolly Acaster", ["Pat Merrick", "Meg Armstrong", "Judy Westrop"], "Easy", "1977", "Characters", ["Dolly Acaster", "The Woolpack", "Barmaid", "New Arrival"]],
    ["Who originally played Dolly Acaster when she joined Emmerdale Farm?", "Katharine Barker", ["Jean Rogers", "Helen Weir", "Elizabeth Mickery"], "Medium", "1977", "Actors", ["Katharine Barker", "Dolly Acaster", "Original Actress", "Casting"]],
    ["From which town did Dolly Acaster move to Beckindale?", "Darlington", ["Leeds", "Harrogate", "Ripon"], "Hard", "1977", "Characters", ["Dolly Acaster", "Darlington", "Beckindale", "New Resident"]],
    ["Which widowed farmer began a romance with Dolly Acaster?", "Matt Skilbeck", ["Joe Sugden", "Jack Sugden", "Henry Wilks"], "Easy", "1977", "Relationships", ["Matt Skilbeck", "Dolly Acaster", "Courtship", "Romance"]],
    ["Which couple caused gossip by living together unmarried in Beckindale?", "Joe Sugden and Kathy Gimbel", ["Matt Skilbeck and Dolly Acaster", "Amos Brearly and Marian Wilks", "Jack Sugden and Pat Merrick"], "Medium", "1977", "Relationships", ["Joe Sugden", "Kathy Gimbel", "Cohabitation", "Village Gossip"]],
    ["On which Beckindale street did Joe Sugden and Kathy Gimbel set up home together?", "Demdyke Row", ["Main Street", "Connelton Road", "Mill Lane"], "Hard", "1977", "Locations", ["Demdyke Row", "Joe Sugden", "Kathy Gimbel", "Shared Home"]],
    ["Which troubled farmer took his own life?", "Jim Gimbel", ["George Verney", "Enoch Tolly", "Trevor Thatcher"], "Medium", "1977", "Storylines", ["Jim Gimbel", "Suicide", "Freda Gimbel", "Family Tragedy"]],
    ["How did Jim Gimbel die?", "He shot himself", ["He drowned", "He fell from a roof", "He was hit by a train"], "Hard", "1977", "Storylines", ["Jim Gimbel", "Gunshot", "Suicide", "Death"]],
    ["Which new vicar arrived in Beckindale?", "Donald Hinton", ["Bob Jerome", "Ashley Thomas", "Charles Anderson"], "Medium", "1977", "Characters", ["Donald Hinton", "Reverend", "Village Vicar", "New Arrival"]],
    ["Which actor played the Reverend Donald Hinton?", "Hugh Manning", ["Richard Howard", "Patrick Holt", "Toke Townley"], "Hard", "1977", "Actors", ["Hugh Manning", "Donald Hinton", "Actor", "Vicar"]],
    ["What was the first name of the Reverend Donald Hinton's son?", "Clive", ["Martin", "Jackie", "Richard"], "Hard", "1977", "Families", ["Donald Hinton", "Clive Hinton", "Father And Son", "Family"]],
    ["Who was Sam Pearson's old flame, whom he later tried to help keep her cottage?", "Nellie Ratcliffe", ["Freda Gimbel", "Meg Armstrong", "Mary Hinton"], "Hard", "1977", "Relationships", ["Sam Pearson", "Nellie Ratcliffe", "Former Romance", "Cottage Dispute"]],
    ["Which couple sheltered at Emmerdale Farm after a storm destroyed their cottage?", "Ray and Sarah Oswell", ["Matt and Dolly Skilbeck", "Jim and Freda Gimbel", "Seth and Meg Armstrong"], "Hard", "1977", "Storylines", ["Ray Oswell", "Sarah Oswell", "Storm Damage", "Farmhouse Shelter"]],
    ["What destroyed Ray and Sarah Oswell's cottage during a 1977 storm?", "A falling tree", ["A landslide", "A lightning strike", "An overflowing river"], "Hard", "1977", "Storylines", ["Ray And Sarah Oswell", "Falling Tree", "Storm", "Destroyed Cottage"]],
    ["Which Beckindale field caught fire during the 1977 blaze?", "Parker's Field", ["Butler's Field", "Mowlam's Field", "Merrick's Field"], "Hard", "1977", "Storylines", ["Parkers Field", "Field Fire", "October 1977", "Beckindale"]],
    ["What kind of team helped fight the fire at Beckindale?", "A volunteer fire brigade", ["An army unit", "A team of miners", "A forestry patrol"], "Medium", "1977", "Storylines", ["Volunteer Fire Brigade", "Field Fire", "Beckindale", "Firefighting"]],

    // 1978
    ["Which couple married in Emmerdale Farm in June 1978?", "Matt Skilbeck and Dolly Acaster", ["Joe Sugden and Kathy Gimbel", "Jack Sugden and Pat Merrick", "Henry Wilks and Meg Armstrong"], "Easy", "1978", "Marriages", ["Matt Skilbeck", "Dolly Acaster", "Wedding", "June 1978"]],
    ["Which vicar conducted Matt and Dolly Skilbeck's wedding?", "Donald Hinton", ["Bob Jerome", "William Hockley", "Ashley Thomas"], "Hard", "1978", "Marriages", ["Donald Hinton", "Matt Skilbeck", "Dolly Acaster", "Wedding Ceremony"]],
    ["What was the name of the church where Matt and Dolly married?", "St Mary's", ["St John's", "St Peter's", "All Saints'"], "Hard", "1978", "Locations", ["St Marys Church", "Matt Skilbeck", "Dolly Acaster", "Village Wedding"]],
    ["Which vicar's son became trapped in a mine explosion?", "Clive Hinton", ["Jimmy Armstrong", "Martin Gimbel", "Jackie Merrick"], "Medium", "1978", "Storylines", ["Clive Hinton", "Mine Explosion", "Rod Blake", "Ian Hepton"]],
    ["Which of Clive Hinton's companions escaped the mine explosion with cuts and bruises?", "Ian Hepton", ["Rod Blake", "Steve Hawker", "Richard Anstey"], "Hard", "1978", "Storylines", ["Ian Hepton", "Clive Hinton", "Mine Explosion", "Minor Injuries"]],
    ["Which two people carried out an armed robbery at The Woolpack?", "Steve Hawker and Pip Coulter", ["Tom Merrick and Fred Armstrong", "Joe Sugden and Ian Hepton", "George Verney and Rod Blake"], "Hard", "1978", "Crime", ["Steve Hawker", "Pip Coulter", "Armed Robbery", "The Woolpack"]],
    ["Where did the armed robbers lock Amos Brearly and Henry Wilks?", "In The Woolpack cellar", ["In the village shop", "In a farmhouse barn", "In an upstairs bedroom"], "Medium", "1978", "Crime", ["Amos Brearly", "Henry Wilks", "The Woolpack", "Cellar Hostages"]],
    ["Which elderly Emmerdale Farm resident was held at gunpoint after the Woolpack robbery?", "Sam Pearson", ["George Verney", "Amos Brearly", "Donald Hinton"], "Medium", "1978", "Crime", ["Sam Pearson", "Armed Robbery", "Farmhouse Siege", "Hostage"]],
    ["Who supplied a getaway car to protect her father during the siege at Emmerdale Farm?", "Annie Sugden", ["Dolly Skilbeck", "Meg Armstrong", "Marian Wilks"], "Hard", "1978", "Crime", ["Annie Sugden", "Sam Pearson", "Getaway Car", "Hostage Rescue"]],
    ["Which much-loved village character made his first appearance?", "Seth Armstrong", ["Alan Turner", "Eric Pollard", "Archie Brooks"], "Easy", "1978", "Characters", ["Seth Armstrong", "First Appearance", "Village Character", "May 1978"]],
    ["Which actor played Seth Armstrong for more than twenty years?", "Stan Richards", ["Arthur Pentelow", "Richard Thorp", "Ronald Magill"], "Easy", "1978", "Actors", ["Stan Richards", "Seth Armstrong", "Actor", "Long Running Role"]],
    ["What job did Seth Armstrong have at Beckindale's school when he first appeared?", "Boilerman", ["Headteacher", "Dinner supervisor", "School secretary"], "Medium", "1978", "Characters", ["Seth Armstrong", "School Boilerman", "Beckindale School", "Occupation"]],
    ["Which illegal countryside activity was Seth Armstrong particularly fond of?", "Poaching", ["Smuggling", "Illegal fishing trawls", "Horse theft"], "Easy", "1978", "Characters", ["Seth Armstrong", "Poaching", "Countryside", "Rural Crime"]],
    ["Which teacher helped Seth Armstrong learn to read?", "Antony Moeketsi", ["Donald Hinton", "Richard Anstey", "Trevor Thatcher"], "Hard", "1978", "Characters", ["Antony Moeketsi", "Seth Armstrong", "Adult Literacy", "Schoolteacher"]],
    ["Which actor played teacher Antony Moeketsi in Emmerdale Farm?", "Oscar James", ["Hugh Manning", "Carl Rigg", "Drew Dawson"], "Hard", "1978", "Actors", ["Oscar James", "Antony Moeketsi", "Actor", "Teacher"]],
    ["To which country did teacher Antony Moeketsi move for a new job?", "Wales", ["Scotland", "Ireland", "Canada"], "Hard", "1978", "Characters", ["Antony Moeketsi", "Wales", "Teaching Job", "Departure"]],
    ["Which local squire died, leading to changes at his estate?", "George Verney", ["Henry Wilks", "Jim Gimbel", "Harry Mowlam"], "Medium", "1978", "Deaths", ["George Verney", "Miffield Hall", "Estate Inheritance", "Death"]],
    ["Which company bought the Verney estate?", "NY Estates", ["Miffield Holdings", "Yorkshire Dales Trust", "Northern Properties"], "Medium", "1978", "Locations", ["NY Estates", "Miffield Hall", "Estate Sale", "Gerald Verney"]],
    ["What new name was given to the former Verney manor house after the estate changed hands?", "Home Farm", ["Butler's Farm", "Crossgill Farm", "Inglebrook House"], "Medium", "1978", "Locations", ["Home Farm", "Miffield Hall", "NY Estates", "Renaming"]],
    ["Which estate manager was among the first to run Home Farm for NY Estates?", "Trevor Thatcher", ["Alan Turner", "Richard Anstey", "Maurice Westrop"], "Hard", "1978", "Characters", ["Trevor Thatcher", "NY Estates", "Home Farm", "Estate Manager"]],
    ["What was discovered beneath The Woolpack during building work?", "A human skeleton", ["A buried chest of coins", "A secret tunnel", "An old well"], "Medium", "1978", "Storylines", ["The Woolpack", "Skeleton Discovery", "Human Remains", "Building Work"]],
    ["The skeleton discovered near The Woolpack was linked to which villager's ancestry?", "Sam Pearson", ["Amos Brearly", "Henry Wilks", "George Verney"], "Hard", "1978", "Storylines", ["Sam Pearson", "Ancestry", "Human Skeleton", "The Woolpack"]],
    ["What valuable item was discovered at the Verney estate?", "A rare painting", ["A gold crown", "A medieval sword", "A silver chalice"], "Hard", "1978", "Storylines", ["Verney Estate", "Rare Painting", "Artwork Discovery", "Valuable Item"]],

    // 1979
    ["Which character announced that she was expecting Matt Skilbeck's baby?", "Dolly Skilbeck", ["Pat Merrick", "Meg Armstrong", "Marian Wilks"], "Easy", "1979", "Families", ["Dolly Skilbeck", "Matt Skilbeck", "Pregnancy", "Family News"]],
    ["Which woman was sexually assaulted in a serious Emmerdale Farm storyline?", "Wendy Hotson", ["Judy Westrop", "Dolly Skilbeck", "Kathy Gimbel"], "Hard", "1979", "Storylines", ["Wendy Hotson", "Sexual Assault", "Serious Storyline", "Victim"]],
    ["Which man falsely blamed Joe Sugden after his own gun accidentally discharged?", "Phil Fletcher", ["Tom Merrick", "Jim Gimbel", "Clive Hinton"], "Hard", "1979", "Storylines", ["Phil Fletcher", "Joe Sugden", "Accidental Shooting", "False Accusation"]],
    ["Which character suffered drinking problems and depression in a 1979 storyline?", "Judy Westrop", ["Freda Gimbel", "Meg Armstrong", "Nellie Ratcliffe"], "Hard", "1979", "Storylines", ["Judy Westrop", "Depression", "Alcohol Misuse", "Personal Crisis"]],
    ["What industrial dispute disrupted ITV and delayed Emmerdale Farm's return?", "An ITV staff strike", ["A miners' strike", "A railway strike", "A postal strike"], "Medium", "1979", "Production", ["ITV Strike", "Industrial Action", "Television Production", "1979 Shutdown"]],
    ["In which year did Emmerdale Farm return to television after the 1979 ITV strike?", "1980", ["1978", "1981", "1982"], "Medium", "1979", "Production", ["ITV Strike", "Programme Return", "January 1980", "Broadcast Hiatus"]],
    ["What was the first name of Seth Armstrong's wife, first seen in 1979?", "Meg", ["Mary", "Molly", "Marian"], "Medium", "1979", "Families", ["Meg Armstrong", "Seth Armstrong", "Marriage", "1979 Arrival"]],
    ["What were the names of Seth and Meg Armstrong's two sons?", "Jimmy and Fred", ["Joe and Jack", "Clive and Martin", "Richard and Ian"], "Hard", "1979", "Families", ["Seth Armstrong", "Meg Armstrong", "Jimmy Armstrong", "Fred Armstrong"]],

    // 1980
    ["Which actor took over the role of Jack Sugden when he returned?", "Clive Hornby", ["Andrew Burt", "Frazer Hines", "Frederick Pyne"], "Easy", "1980", "Actors", ["Clive Hornby", "Jack Sugden", "Actor Recasting", "Return"]],
    ["In which country had Jack Sugden been living before his return to Beckindale?", "Italy", ["Spain", "France", "Australia"], "Medium", "1980", "Characters", ["Jack Sugden", "Italy", "Writing Career", "Return To Beckindale"]],
    ["Which former sweetheart returned to Beckindale and rekindled her romance with Jack Sugden?", "Pat Merrick", ["Kathy Gimbel", "Dolly Acaster", "Marian Wilks"], "Medium", "1980", "Relationships", ["Pat Merrick", "Jack Sugden", "Former Sweethearts", "Reunion"]],
    ["Which actress played Pat Merrick when she returned to Emmerdale Farm?", "Helen Weir", ["Jean Rogers", "Gail Harrison", "Katharine Barker"], "Hard", "1980", "Actors", ["Helen Weir", "Pat Merrick", "Actress", "Casting"]],
    ["Under what first name had Pat Merrick previously been known?", "Ruth", ["Rose", "Rachel", "Rebecca"], "Hard", "1980", "Characters", ["Pat Merrick", "Ruth Harker", "Earlier Name", "Character History"]],
    ["What was Pat Merrick's surname before she married Tom Merrick?", "Harker", ["Acaster", "Wilks", "Gimbel"], "Hard", "1980", "Characters", ["Pat Merrick", "Harker Family", "Tom Merrick", "Maiden Name"]],
    ["Which actor played Pat Merrick's son Jackie?", "Ian Sharrock", ["Edward Peel", "Carl Rigg", "Drew Dawson"], "Medium", "1980", "Actors", ["Ian Sharrock", "Jackie Merrick", "Actor", "Merrick Family"]],
    ["Which actress played Pat Merrick's daughter Sandie?", "Jane Hutcheson", ["Polly Hemingway", "Ruth Holden", "Elizabeth Mickery"], "Hard", "1980", "Actors", ["Jane Hutcheson", "Sandie Merrick", "Actress", "Merrick Family"]],
    ["Which actor played the troublesome Tom Merrick during his 1980 return?", "Edward Peel", ["David Hill", "Clive Hornby", "Arthur Pentelow"], "Hard", "1980", "Actors", ["Edward Peel", "Tom Merrick", "Actor", "Character Return"]],
    ["Which actress took over as Dolly Skilbeck?", "Jean Rogers", ["Katharine Barker", "Sheila Mercier", "Helen Weir"], "Medium", "1980", "Actors", ["Jean Rogers", "Dolly Skilbeck", "Recasting", "Actress"]],
    ["What tragedy befell Matt and Dolly Skilbeck?", "Dolly suffered a miscarriage", ["Their farmhouse burned down", "Matt was imprisoned", "They lost their home in a flood"], "Medium", "1980", "Storylines", ["Dolly Skilbeck", "Matt Skilbeck", "Miscarriage", "February 1980"]],
    ["Where did Dolly Skilbeck begin working after losing her baby?", "The village playgroup", ["The village surgery", "The post office", "The local library"], "Hard", "1980", "Characters", ["Dolly Skilbeck", "Village Playgroup", "Community Work", "Pregnancy Loss"]],
    ["What did Tom Merrick steal from an NY Estates plantation?", "Christmas trees", ["Fence posts", "Cattle feed", "Garden statues"], "Hard", "1980", "Crime", ["Tom Merrick", "NY Estates", "Christmas Trees", "Theft"]],
    ["Which pub did Seth Armstrong leave behind when he became a regular at The Woolpack?", "The Malt Shovel", ["The Royal Oak", "The Falcon Inn", "The King's Arms"], "Hard", "1980", "Locations", ["Seth Armstrong", "The Malt Shovel", "The Woolpack", "Pub Loyalty"]],

    // 1981
    ["Which character started a rival village newspaper called the Beckindale Bugle?", "Amos Brearly", ["Henry Wilks", "Seth Armstrong", "Jack Sugden"], "Medium", "1981", "Characters", ["Amos Brearly", "Beckindale Bugle", "Village Newspaper", "Editor"]],
    ["Which newspaper had dismissed Amos Brearly before he launched the Beckindale Bugle?", "The Hotten Courier", ["The Yorkshire Post", "The Dales Gazette", "The Beckindale Herald"], "Hard", "1981", "Characters", ["Amos Brearly", "Hotten Courier", "Journalism", "Rival Newspaper"]],
    ["Which sheepdog was killed by a speeding car driven by a man who had burgled Emmerdale Farm?", "Snip", ["Bess", "Fly", "Shep"], "Hard", "1981", "Storylines", ["Snip", "Farm Dog", "Road Accident", "Burglary"]],
    ["Which estranged husband tried to frame Jack Sugden for an arson attack?", "Tom Merrick", ["Richard Anstey", "Joe Sugden", "Trevor Thatcher"], "Medium", "1981", "Crime", ["Tom Merrick", "Jack Sugden", "Arson Plot", "False Accusation"]],
    ["Who helped drive Tom Merrick away from Beckindale following his arson plot?", "Seth Armstrong", ["Amos Brearly", "Matt Skilbeck", "Donald Hinton"], "Hard", "1981", "Crime", ["Seth Armstrong", "Tom Merrick", "Arson Plot", "Leaving Beckindale"]],
    ["Which farmer was killed in a tractor accident?", "Enoch Tolly", ["George Verney", "Trevor Thatcher", "Jim Gimbel"], "Hard", "1981", "Deaths", ["Enoch Tolly", "Tractor Accident", "Farmer", "February 1981"]],
    ["Which NY Estates manager had an affair with Virginia Lattimore?", "Richard Anstey", ["Alan Turner", "Maurice Westrop", "Trevor Thatcher"], "Hard", "1981", "Relationships", ["Richard Anstey", "Virginia Lattimore", "NY Estates", "Affair"]],
    ["Which actor played NY Estates worker Jock MacDonald, introduced in 1981?", "Drew Dawson", ["Carl Rigg", "Stan Richards", "Edward Peel"], "Hard", "1981", "Actors", ["Drew Dawson", "Jock MacDonald", "Actor", "NY Estates"]],
    ["A strike at which television company disrupted production of Emmerdale Farm?", "Yorkshire Television", ["Granada Television", "Thames Television", "Central Television"], "Medium", "1981", "Production", ["Yorkshire Television", "Industrial Dispute", "Electricians Strike", "Programme Disruption"]],

    // 1982
    ["Who arrived to manage the NY Estates operation at Home Farm?", "Alan Turner", ["Trevor Thatcher", "Richard Anstey", "Maurice Westrop"], "Easy", "1982", "Characters", ["Alan Turner", "NY Estates", "Home Farm", "Estate Management"]],
    ["Which actor played Alan Turner in Emmerdale?", "Richard Thorp", ["Stan Richards", "Clive Hornby", "Arthur Pentelow"], "Easy", "1982", "Actors", ["Richard Thorp", "Alan Turner", "Actor", "Long Running Role"]],
    ["What was revealed about Jackie Merrick's biological father?", "Jack Sugden was his biological father", ["Matt Skilbeck was his brother", "Henry Wilks was his grandfather", "Joe Sugden was his uncle by marriage"], "Medium", "1982", "Families", ["Jackie Merrick", "Jack Sugden", "Biological Father", "Paternity Secret"]],
    ["Which troublesome teenager set fire to a caravan?", "Jackie Merrick", ["Clive Hinton", "Jimmy Armstrong", "Martin Gimbel"], "Medium", "1982", "Storylines", ["Jackie Merrick", "NY Estates", "Caravan Fire", "Arson"]],
    ["Which couple married in October 1982?", "Jack Sugden and Pat Merrick", ["Joe Sugden and Kathy Gimbel", "Seth Armstrong and Meg Armstrong", "Amos Brearly and Marian Wilks"], "Medium", "1982", "Marriages", ["Jack Sugden", "Pat Merrick", "Marriage", "October 1982"]],
    ["Who was best man at Jack Sugden's wedding to Pat?", "Matt Skilbeck", ["Henry Wilks", "Joe Sugden", "Seth Armstrong"], "Hard", "1982", "Marriages", ["Matt Skilbeck", "Jack Sugden", "Pat Merrick", "Best Man"]],
    ["What name did Matt and Dolly Skilbeck give their son born in December 1982?", "Samuel", ["Jackie", "Robert", "Martin"], "Medium", "1982", "Births", ["Samuel Skilbeck", "Matt Skilbeck", "Dolly Skilbeck", "Birth"]],
    ["On which date was Matt and Dolly Skilbeck's son Samuel born?", "23 December", ["8 December", "16 December", "30 December"], "Hard", "1982", "Births", ["Samuel Skilbeck", "23 December 1982", "Birth Date", "Matt And Dolly"]],
    ["What farm building did Matt and Dolly Skilbeck convert into their home?", "A barn", ["A stable", "A granary", "A milking parlour"], "Hard", "1982", "Locations", ["Matt Skilbeck", "Dolly Skilbeck", "Converted Barn", "Cottage"]],
    ["Which anniversary did Emmerdale Farm celebrate in October 1982?", "Its tenth", ["Its fifth", "Its fifteenth", "Its twentieth"], "Easy", "1982", "Production", ["Ten Years On Air", "Tenth Anniversary", "October 1982", "ITV History"]],
    ["Who did Alan Turner frequently blame for his mistakes at NY Estates?", "Joe Sugden", ["Amos Brearly", "Matt Skilbeck", "Jackie Merrick"], "Hard", "1982", "Characters", ["Alan Turner", "Joe Sugden", "NY Estates", "Workplace Blame"]]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, detailTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(2501 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Emmerdale', 'Emmerdale Farm', year.startsWith('197') ? '1970s' : '1980s', year, topic, ...detailTags])],
        dailyEligible: true
    };
});

// =====================================================
// VALIDATION
// =====================================================

if (
    questions.length !== 100 ||
    questions[0].id !== 'tv_2501' ||
    questions[99].id !== 'tv_2600'
) {
    throw new Error('Pack 186: incorrect count or ID range');
}

const seenIds = new Set();
const seenQuestions = new Set();

for (const q of questions) {
    const key = q.question.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
    const year = q.tags.find(t => /^19(?:7[5-9]|8[0-2])$/.test(t));

    if (
        seenIds.has(q.id) ||
        seenQuestions.has(key) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        q.category !== 'Television' ||
        !q.dailyEligible ||
        !year ||
        q.tags.length !== 10 ||
        q.tags.some(t => typeof t !== 'string' || !t.trim())
    ) {
        throw new Error('Pack 186: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
