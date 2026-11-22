
// quiz_pack369.js
// PuzzlePilot — The Bigggggg Quiz
// Television: Episodes (2011-2017 US / 2011-2018 UK) and Sorry! (1981-1988).
// Two previously outstanding sitcoms. Full WordPad-ready CommonJS module.
// Researched against British Comedy Guide, TVmaze, Showtime and Golden Globes.
// Seven question-specific tags per item plus programme and era metadata.
// No external dependencies; answers are deliberately rotated.

const FIRST_ID = 18623;

// question | correct answer | three distinct distractors | difficulty | 7 bespoke tags
const episodesFacts = `Which two British screenwriters are the married central couple in Episodes?|Sean and Beverly Lincoln|Tim and Carol Whittick|Merc and Jamie Lapidus|Matt and Morning LeBlanc|Easy|Sean Lincoln|Beverly Lincoln|Married Writers|British Couple|Main Protagonists|Hollywood Relocation|Marriage And Work
Who played Beverly Lincoln in Episodes?|Tamsin Greig|Daisy Haggard|Kathleen Rose Perkins|Mircea Monroe|Easy|Tamsin Greig|Beverly Lincoln|Lead Actress|British Screenwriter|Casting|Comedy Performance|Female Protagonist
Which actor portrayed screenwriter Sean Lincoln in Episodes?|Stephen Mangan|Matt LeBlanc|John Pankow|Joseph May|Easy|Stephen Mangan|Sean Lincoln|Lead Actor|Screenwriter Husband|Casting|British Comedy|Male Protagonist
Which former Friends star played a fictionalised version of himself in Episodes?|Matt LeBlanc|David Schwimmer|Matthew Perry|Courteney Cox|Easy|Matt LeBlanc|Self Portrayal|Friends Connection|Hollywood Star|Fictionalised Persona|Lead Casting|Celebrity Comedy
What was the name of Sean and Beverly's successful original British sitcom?|Lyman's Boys|Pucks!|The Opposite of Us|The Box|Medium|Lymans Boys|Original British Show|Programme Within Programme|UK Success|Screenwriting Career|American Remake|Adaptation Source
What name was given to the heavily altered American remake of Lyman's Boys?|Pucks!|The Box|The Opposite of Us|Lyman's Girls|Easy|Pucks|American Remake|Show Within Show|Hockey Theme|Network Interference|British To US Adaptation|Programme Retitling
Which sport became the focus of the American sitcom Pucks! in Episodes?|Ice hockey|Baseball|Basketball|American football|Medium|Pucks|Ice Hockey|Sitcom Remake|Sports Setting|Americanisation|Creative Changes|Show Premise
To which US city do Sean and Beverly move to remake their television comedy?|Los Angeles|New York|Chicago|Boston|Easy|Los Angeles|Hollywood|British Writers Abroad|American Television|Show Remake|Relocation|California
Which US premium cable network originally aired Episodes in America?|Showtime|HBO|Starz|FX|Medium|Showtime|American Broadcaster|US Premiere|Cable Network|Television Distribution|2011 Launch|Co Production
Which BBC channel broadcast Episodes in the United Kingdom?|BBC Two|BBC One|BBC Three|BBC Four|Easy|BBC Two|UK Broadcaster|British Screening|Channel Identity|BBC Comedy|Anglo American Production|Television Network
In which year did Episodes first premiere in the United States?|2011|2007|2014|2018|Easy|2011 US Premiere|Showtime|First Series|Programme Timeline|January Debut|Television Launch|American Broadcast
How many series of Episodes were made altogether?|Five|Three|Four|Six|Easy|Five Series|2011 To 2017|Comedy Run|Series Count|British American Comedy|Final Series|Production History
How many episodes were produced across all five series of Episodes?|41|36|42|50|Medium|Forty One Episodes|Five Series|Total Output|Episode Count|Television Catalogue|Showtime Run|Programme History
Who were the two co-creators and writers of Episodes?|David Crane and Jeffrey Klarik|Ricky Gervais and Stephen Merchant|Armando Iannucci and Jesse Armstrong|Sharon Horgan and Rob Delaney|Medium|David Crane|Jeffrey Klarik|Comedy Creators|Writing Partners|Executive Producers|Programme Origins|Screenwriting Credits
Which earlier American sitcom did Episodes co-creator David Crane also help create?|Friends|Frasier|Seinfeld|The Office US|Easy|David Crane|Friends Co Creator|Career Connection|American Sitcom|Comedy Writing|Television History|Producer Credits
Which actor was originally associated with the leading role in Lyman's Boys before the US remake cast Matt LeBlanc?|Richard Griffiths|Richard Wilson|Peter Capaldi|Hugh Laurie|Hard|Richard Griffiths|Lymans Boys|Original Leading Man|RSC Actor|Casting Change|British Programme|Remake Dispute
Who played the American television executive Merc Lapidus?|John Pankow|Joseph May|Roger Bart|Michael Brandon|Medium|John Pankow|Merc Lapidus|Network Boss|Executive Casting|Supporting Actor|Studio Politics|American Television
Which character is the powerful US television executive who persuades the Lincolns to bring their show to America?|Merc Lapidus|Andy Button|Roger Riskin|Elliot Salad|Medium|Merc Lapidus|Network President|Original Deal|Hollywood Negotiations|Sean And Beverly|American Remake|Character Role
Which actress played television executive Carol Rance?|Kathleen Rose Perkins|Tamsin Greig|Andrea Savage|Daisy Haggard|Medium|Kathleen Rose Perkins|Carol Rance|Executive Actress|Network Staff|Supporting Cast|Hollywood Career|Casting Credit
What is the name of Merc Lapidus's wife in Episodes?|Jamie Lapidus|Carol Rance|Helen Basch|Myra Licht|Medium|Jamie Lapidus|Merc Marriage|Executive Family|Relationship|Recurring Character|Series One To Three|Character Identity
Which actress portrayed Jamie Lapidus?|Genevieve O'Reilly|Mircea Monroe|Andrea Rosen|Kathleen Rose Perkins|Hard|Genevieve OReilly|Jamie Lapidus|Actress Casting|Merc Wife|Supporting Cast|Blind Character|Television Credits
Who played the actress Morning Randolph in Episodes?|Mircea Monroe|Daisy Haggard|Andrea Rosen|Tamsin Greig|Medium|Mircea Monroe|Morning Randolph|Actress Within Show|Pucks Casting|Supporting Role|Hollywood Glamour|Character Actress
Which Episodes character is an actress involved in the sitcom Pucks!?|Morning Randolph|Helen Basch|Muriel Lumsden|Carol Rance|Medium|Morning Randolph|Pucks Actress|Hollywood Performer|Casting Within Plot|American Sitcom|Supporting Character|Acting Career
Which actress played the pessimistic network employee Myra Licht?|Daisy Haggard|Mircea Monroe|Andrea Savage|Genevieve O'Reilly|Hard|Daisy Haggard|Myra Licht|Network Employee|Actress Casting|Production Office|Recurring Character|Supporting Ensemble
Who played the television network employee Andy Button?|Joseph May|John Pankow|Bruce Mackinnon|Roger Bart|Hard|Joseph May|Andy Button|Network Staff|Actor Casting|Supporting Character|Comedy Ensemble|Television Workplace
Who portrayed Matt LeBlanc's agent Eileen Jaffee?|Andrea Rosen|Andrea Savage|Kathleen Rose Perkins|Daisy Haggard|Hard|Andrea Rosen|Eileen Jaffee|Agent Character|Casting|Series Three To Five|Hollywood Representation|Matt Career
Who played the television executive Helen Basch in Episodes?|Andrea Savage|Andrea Rosen|Tamsin Greig|Mircea Monroe|Hard|Andrea Savage|Helen Basch|Network Executive|Actress Casting|Later Series|Hollywood Power|Supporting Role
Which character becomes Carol Rance's romantic partner in the later series?|Helen Basch|Jamie Lapidus|Morning Randolph|Myra Licht|Medium|Carol Rance|Helen Basch|Workplace Romance|Later Series|Network Executive|Personal Relationship|Comedy Storyline
Which actor played Sean's former writing partner Tim Whittick?|Bruce Mackinnon|Stephen Mangan|Joseph May|Michael Brandon|Hard|Bruce Mackinnon|Tim Whittick|Former Writing Partner|Actor Casting|Series Four Five|Creative Rival|Supporting Role
Who becomes the showrunner on Sean and Beverly's new project The Opposite of Us?|Tim Whittick|Merc Lapidus|Andy Button|Roger Riskin|Medium|Tim Whittick|The Opposite Of Us|Showrunner|Ex Writing Partner|Series Five|Creative Frustration|Writers Room
What is the title of Sean and Beverly's later television project that suffers interference from Tim?|The Opposite of Us|Lyman's Boys|Pucks!|The Box|Medium|The Opposite Of Us|Sean And Beverly|New Television Project|Showrunner Trouble|Tim Whittick|Later Series|Programme Development
What damaging event involving Matt threatens Sean and Beverly's marriage at the end of the first series?|Beverly has an affair with Matt|Sean secretly marries Carol|Matt steals Sean's screenplay|Beverly joins Merc's network|Medium|Beverly And Matt|Affair Plot|Sean Marriage|Series One Finale|Romantic Betrayal|Marriage Crisis|Fictional LeBlanc
Which character is dating Merc Lapidus's wife in the third series?|Matt LeBlanc|Sean Lincoln|Tim Whittick|Andy Button|Medium|Matt LeBlanc|Jamie Lapidus|Series Three|Merc Marriage|Romantic Affair|Character Relationships|Hollywood Scandal
What sort of programme does Matt end up hosting successfully in the final series?|A game show|A cooking competition|A late-night news bulletin|A home renovation show|Medium|Matt LeBlanc|Game Show Host|The Box|Final Series|Career Shift|Television Celebrity|Unexpected Hit
What is the name of the successful game show Matt presents in the final series of Episodes?|The Box|Pucks!|The Opposite of Us|Lyman's Boys|Medium|The Box|Matt LeBlanc|Game Show Title|Series Five|Television Hosting|Career Detour|Ratings Success
Which major award did Matt LeBlanc win in 2012 for his performance in Episodes?|Golden Globe for TV comedy actor|BAFTA for Best Drama Actor|Emmy for Outstanding Supporting Actor|Tony Award for Best Actor|Medium|Matt LeBlanc|2012 Golden Globes|Comedy Actor Award|Television Acting|Awards History|Fictionalised Self|Critical Recognition
In which year did the fifth and final series of Episodes premiere in the US?|2017|2014|2015|2019|Medium|2017 Final Series|Showtime|Series Five|August Premiere|Final Season|American Scheduling|Programme Conclusion
Which executive producer was associated with Episodes through Hat Trick Productions?|Jimmy Mulville|John Lloyd|Lorne Michaels|Andy Harries|Hard|Jimmy Mulville|Hat Trick Productions|Executive Producer|British Production|Showtime BBC|Industry Credit|Behind The Scenes
Which member of the Episodes creative team directed its entire fifth series?|Jeffrey Klarik|David Crane|James Griffiths|Jim Field Smith|Hard|Jeffrey Klarik|Series Five Director|Show Creator|Final Season|Television Direction|2017 Episodes|Behind The Camera
Which actor played American television executive Elliot Salad in Episodes?|Michael Brandon|John Pankow|Roger Bart|Joseph May|Hard|Michael Brandon|Elliot Salad|Actor Casting|Hollywood Executive|Series Three To Five|Television Network|Supporting Role
What is unusual about the sitcom Sean and Beverly create at the very end of the series?|It retells their own Hollywood experiences|It is a fantasy set on another planet|It is a period drama set in Victorian London|It follows a fictional royal family|Hard|Series Finale|Meta Ending|Show Within Show|Sean And Beverly|Hollywood Experiences|Self Referential Comedy|Final Writing Project
Which real-life former couple are portrayed as Sean and Beverly in the show-within-a-show revealed at the end of Episodes?|Kenneth Branagh and Emma Thompson|Stephen Fry and Emma Thompson|Hugh Laurie and Jo Green|David Tennant and Georgia Tennant|Hard|Kenneth Branagh|Emma Thompson|Finale Cameo Concept|Meta Casting|Fictional Episodes|Show Within Show|Celebrity Casting`;

const sorryFacts = `Who played librarian Timothy Lumsden in the BBC sitcom Sorry!?|Ronnie Corbett|Ronnie Barker|Richard Briers|John Inman|Easy|Ronnie Corbett|Timothy Lumsden|Lead Actor|BBC Sitcom|Librarian Character|1980s Comedy|Casting
What was Timothy Lumsden's occupation in Sorry!?|Librarian|Schoolteacher|Bank clerk|Solicitor|Easy|Timothy Lumsden|Public Library|Workplace|Character Occupation|Books|1980s Sitcom|Employment
Who played Timothy's domineering mother Phyllis Lumsden?|Barbara Lott|Patricia Routledge|Mollie Sugden|Thora Hird|Easy|Barbara Lott|Phyllis Lumsden|Mother Character|Lead Actress|Family Sitcom|Control Of Timothy|Casting
What is the first name of Timothy's overprotective mother in Sorry!?|Phyllis|Muriel|Jennifer|Pippa|Easy|Phyllis Lumsden|Timothy Mother|Family Relationship|Dominant Parent|Main Character|Household|Character Identity
Who portrayed Timothy's long-suffering father Sidney Lumsden?|William Moore|Richard Briers|Roy Holder|Derek Fuke|Medium|William Moore|Sidney Lumsden|Father Character|Actor Casting|Henpecked Husband|Family Dynamic|Supporting Lead
What is the first name of Timothy Lumsden's father?|Sidney|Kevin|Frank|Victor|Easy|Sidney Lumsden|Father Character|Family Relationship|Phyllis Husband|Main Household|Character Identity|Parent
What recurring warning does Sidney Lumsden direct at his son?|Language, Timothy!|Don't panic, Timothy!|You stupid boy!|Mind the gap, Timothy!|Easy|Language Timothy|Sidney Lumsden|Catchphrase|Timothy And Father|Verbal Reprimand|Family Comedy|Signature Line
Which actress played Timothy's sister Muriel in Sorry!?|Marguerite Hardiman|Wendy Allnutt|Bridget Brice|Sheila Fearn|Medium|Marguerite Hardiman|Muriel|Sister Character|Casting|Lumsden Family|Supporting Actress|Recurring Role
What relationship does Muriel have to Timothy in Sorry!?|She is his sister|She is his cousin|She is his aunt|She is his stepmother|Easy|Muriel|Timothy Lumsden|Brother And Sister|Family Links|Household Pressure|Sibling Support|Character Relationship
Who played Timothy's friend Frank in Sorry!?|Roy Holder|William Moore|Derek Fuke|John Leeson|Medium|Roy Holder|Frank Baker|Timothy Friend|Actor Casting|Supporting Character|Wedding Stories|1980s Comedy
Which character in Sorry! is married to Timothy's sister Muriel?|Kevin|Frank|Sidney|Victor|Medium|Kevin|Muriel Husband|Lumsden In Laws|Family Marriage|Phyllis Disapproval|Character Relationships|Series Two Onward
Which actor portrayed Muriel's husband Kevin?|Derek Fuke|Roy Holder|John Leeson|William Moore|Hard|Derek Fuke|Kevin|Muriel Husband|Supporting Actor|Casting Credit|In Law Character|Series Two To Seven
Which actress played Timothy's girlfriend Jennifer in the sixth series?|Wendy Allnutt|Bridget Brice|Marguerite Hardiman|Barbara Lott|Medium|Wendy Allnutt|Jennifer|Series Six|Girlfriend Character|Romance|Actress Casting|Wedding Plans
Who played Pippa, Timothy's love interest in the final series?|Bridget Brice|Wendy Allnutt|Sheila Fearn|Marguerite Hardiman|Medium|Bridget Brice|Pippa|Series Seven|Romantic Interest|Actress Casting|Later Romance|Final Season
Who jointly created and wrote Sorry! for Ronnie Corbett?|Ian Davidson and Peter Vincent|John Sullivan and Ray Galton|Clement and La Frenais|David Croft and Jimmy Perry|Medium|Ian Davidson|Peter Vincent|Writing Partnership|BBC Sitcom Creation|Comedy Scripts|Production History|1980s Writers
Which other television sketch show had Sorry! writers Ian Davidson and Peter Vincent worked on?|The Two Ronnies|Not the Nine O'Clock News|The Fast Show|Little Britain|Medium|The Two Ronnies|Ian Davidson|Peter Vincent|Comedy Writing|Ronnie Corbett|Sketch Show Connection|Career History
Who directed and produced Sorry! for the BBC?|David Askey|David Croft|John Howard Davies|Gareth Gwenlan|Hard|David Askey|Director|Producer|BBC Television|Production Credits|Studio Sitcom|Behind The Scenes
On which television channel was Sorry! first broadcast?|BBC One|ITV|BBC Two|Channel 4|Easy|BBC One|Original Broadcaster|1981 Debut|UK Television|BBC Sitcom|Channel History|Programme Launch
In what year did Sorry! first appear on British television?|1981|1976|1985|1990|Easy|1981 Premiere|March First Broadcast|BBC One|Series One|Television Timeline|Ronnie Corbett|Programme Beginning
In what year was the final series of Sorry! shown?|1988|1982|1986|1991|Medium|1988 Final Series|Series Seven|BBC One|Programme Ending|Television Timeline|Autumn Broadcast|Sitcom Finale
How many regular series of Sorry! were made?|Seven|Five|Six|Eight|Easy|Seven Series|1981 To 1988|Sitcom Run|BBC Programme|Series Count|Production History|1980s Comedy
How many regular episodes were produced for Sorry!, excluding its short insert?|42|36|43|48|Medium|Forty Two Episodes|Seven Series|Six Per Series|Short Insert Excluded|Episode Count|Broadcast History|Sitcom Catalogue
What is Timothy most determined to escape from throughout Sorry!?|Living under his mother's control|His boarding school|A prison sentence|An unwanted career in politics|Easy|Timothy Lumsden|Phyllis Control|Leaving Home|Family Interference|Main Plot|Adult Independence|Mother Son Comedy
What pastime brings Timothy into contact with a woman in the first episode For Love or Mummy?|Amateur dramatics|Competitive rowing|A chess club|A photography course|Medium|For Love Or Mummy|Amateur Dramatics|Series One Premiere|Romantic Meeting|Theatre Group|1981 Story|Timothy Courtship
In the first Sorry! episode, what kind of outing does Timothy try to arrange with a new acquaintance?|A riverboat shuffle|A seaside coach trip|A museum opening|A cricket match|Medium|For Love Or Mummy|Riverboat Shuffle|Annette|Series One|Romantic Outing|Phyllis Interference|Episode Plot
In Buttons, who causes trouble for Timothy by being jealous over Vanessa?|Tiny Heseltine|Kevin|Frank Baker|Brinsley|Medium|Buttons Episode|Tiny Heseltine|Vanessa|Jealous Boyfriend|Series One|Romantic Complication|1981 Episode
What problem involving his godson does Timothy try to solve in The Godfather?|School bullying|A missing bicycle|A stolen examination paper|A school uniform dispute|Medium|The Godfather Episode|Timothy Godson|School Bullying|Series One|Family Duty|Confrontation|Episode Story
In Bachelor Seeks Anywhere, what does Timothy try to find?|A flat of his own|A new library job|An allotment|A replacement car|Easy|Bachelor Seeks Anywhere|Looking For A Flat|Leaving Home|Series One|Independent Living|Housing Search|Phyllis Resistance
Which film does Timothy hope to see at the cinema in Does Your Mother Know You're Out??|Gone with the Wind|Casablanca|Brief Encounter|The Sound of Music|Medium|Does Your Mother Know Youre Out|Gone With The Wind|Cinema Visit|Series One|Film Screening|Maternal Interference|1981 Story
Which relative tries to persuade Timothy to leave home in Curse of the Mummy?|His sister Muriel|His cousin Brinsley|His uncle Claud|His father-in-law|Medium|Curse Of The Mummy|Muriel Visit|Sister Encouragement|Series One Finale|Leaving Home|Family Support|1981 Plot
What does Timothy try to arrange for his parents in Cromer or Bust! so he can enjoy the house alone?|A second honeymoon|A retirement party|A shopping weekend|A family reunion|Medium|Cromer Or Bust|Second Honeymoon|Parents Away|Series Two Premiere|House Party Plan|Timothy Freedom|1982 Episode
What unusual nighttime behaviour threatens Timothy's promotion chances in Perchance to Dream?|Sleepwalking|Talking in his sleep|Loud snoring|Night-time gardening|Medium|Perchance To Dream|Sleepwalking|Job Promotion|Series Two|Unconscious Behaviour|Work Interview|Episode Plot
Which relative comes to stay and wins Phyllis's affection in Sons and Lovers?|Cousin Brinsley|Uncle Barstable|Sister Muriel|Aunt Esme|Medium|Sons And Lovers|Brinsley|Cousin Visit|Phyllis Favour|Series Two|Family Rivalry|1982 Story
Whose money does Phyllis hope Timothy will receive in Great Expectations?|Aunt Esme's|Uncle Claud's|Frank's|Jennifer's|Medium|Great Expectations Episode|Aunt Esme|Inheritance Scheming|Phyllis Plans|Series Two|Family Money|1982 Plot
At whose wedding is Timothy asked to be best man in The Next Best Man?|His friend Frank's|His sister Muriel's|His cousin Brinsley's|His uncle Claud's|Medium|The Next Best Man|Frank Wedding|Best Man|Series Two|Marriage Ceremony|Timothy Responsibility|1982 Story
Which bridesmaid attracts Timothy's interest around Frank's wedding in Could Do Better?|Liz|Pippa|Jennifer|Vanessa|Hard|Could Do Better|Liz Bridesmaid|Frank Wedding|Timothy Courtship|Series Two Finale|Wedding Party|1982 Episode
Which Shakespeare play does Timothy perform in during Bottom of the Class?|A Midsummer Night's Dream|Hamlet|Macbeth|Twelfth Night|Medium|Bottom Of The Class|A Midsummer Nights Dream|Amateur Theatre|Timothy As Bottom|Series Three|Shakespeare|1982 Episode
What goes wrong with Timothy's work vehicle in Spellbound?|The library van breaks down|His bicycle is stolen|The school bus loses a wheel|His taxi runs out of fuel|Medium|Spellbound Episode|Library Van|Vehicle Breakdown|Series Three|Mobile Library|Job Interview|1982 Plot
Where does Timothy end up after collapsing in The Big Sleep?|Hospital casualty department|A police station|A railway waiting room|A health spa|Medium|The Big Sleep Episode|Hospital Casualty|Timothy Collapses|Series Three Finale|Medical Mix Up|Misread Charts|1982 Story
What type of trade does Timothy dabble in during Move Over, Mrs. Lumsden?|Antiques|Motorcycles|Second-hand books|Insurance|Medium|Move Over Mrs Lumsden|Antique Trade|Series Four|Timothy Business|Pianola|Father Mishap|1985 Episode
Which Shakespeare tragedy is Timothy's drama group performing when he works as a prompter in the fifth series of Sorry!?|Hamlet|Othello|Macbeth|King Lear|Medium|Every Clown Wants To Play Hamlet|Hamlet Production|Prompter|Series Five|Amateur Dramatics|Shakespeare|1986 Plot
What instrument does Timothy study with Miss Clanger in Bells for Uncle Barstable?|Piano|Violin|Flute|Clarinet|Medium|Bells For Uncle Barstable|Miss Clanger|Piano Lessons|Series Five|Musical Tuition|Uncle Note|1986 Episode
What type of theatrical work does Fenella run in My Family and Other Monsters?|A children's theatre|An opera company|A puppet museum|A touring ballet school|Medium|My Family And Other Monsters|Fenella|Childrens Theatre|Narrow Boat|Series Five|Arts Organisation|1986 Plot
Who helps bring Timothy and Jennifer together in Dream Time?|His sister Muriel|His mother Phyllis|His friend Frank|His cousin Brinsley|Medium|Dream Time|Jennifer Reunion|Muriel Matchmaking|Series Six|Romance|Timothy Dating|1987 Episode
What course does Timothy take to help him stand up to his mother in Amaze Your Friends!?|Assertiveness training|A computer programming course|A public speaking degree|A cookery course|Easy|Amaze Your Friends|Assertiveness Training|Standing Up To Phyllis|Series Six|Confidence Building|Mother Son Conflict|1987 Plot
Who is Timothy preparing to marry in Do You Take This Man - and His Mother??|Jennifer|Pippa|Vanessa|Annette|Medium|Do You Take This Man|Jennifer Wedding|Series Six Finale|Engagement|Timothy Marriage|Phyllis Opposition|1987 Plot
What type of property does Muriel encourage Timothy to buy in Mothers and Brothers?|A cottage|A houseboat|A town-centre flat|A seaside hotel|Medium|Mothers And Brothers|Buying A Cottage|Muriel Advice|Series Seven Premiere|Independent Home|Escaping Phyllis|1988 Story
What does Timothy receive in Every Day in Every Way that appears to influence his fortunes?|A lucky charm|A lottery ticket|An antique clock|A silver medal|Medium|Every Day In Every Way|Lucky Charm|Series Seven|Fate Versus Mother|Timothy Destiny|1988 Plot|Superstition
Which girlfriend visits Timothy's new home with his parents in Winter's Tales?|Pippa|Jennifer|Annette|Liz|Medium|Winters Tales|Pippa|New Home Visit|Series Seven|Phyllis Disapproval|Timothy Romance|1988 Plot
What finally happens to Timothy in the last episode Up, Up and Away??|He leaves home|He becomes a headmaster|He emigrates to Canada|He sells the library|Easy|Up Up And Away|Series Finale|Timothy Leaves Home|1988 Ending|Breaking Free|Phyllis Control|Final Departure`;

const normalise = value => value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
const tagKey = value => normalise(value).replace(/[^\p{L}\p{N}]/gu, '');
const questions = [];

function addProgramme(programme, sharedTags, facts) {
  for (const line of facts.trim().split('\n')) {
    const id = 'tv_' + String(FIRST_ID + questions.length).padStart(5, '0');
    const fields = line.trim().split('|').map(value => value.trim());
    if (fields.length !== 13)
      throw new Error('Pack 369: expected 13 fields at ' + id + ', found ' + fields.length);
    const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...bespokeTags] = fields;
    if ([question, correctAnswer, wrong1, wrong2, wrong3, ...bespokeTags].some(value => !value))
      throw new Error('Pack 369: missing field at ' + id);
    if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || bespokeTags.length !== 7 ||
        new Set(bespokeTags.map(tagKey)).size !== 7)
      throw new Error('Pack 369: invalid difficulty or bespoke tags at ' + id);
    const answers = [wrong1, wrong2, wrong3];
    if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4)
      throw new Error('Pack 369: repeated answer choice at ' + id);
    answers.splice(questions.length % 4, 0, correctAnswer);
    const tags = [...new Map([
      'Television', 'British Television', 'Comedy', 'Sitcom',
      ...sharedTags, programme, 'Programme: ' + programme,
      correctAnswer, ...bespokeTags
    ].map(tag => [tagKey(tag), tag])).values()];
    questions.push({ id, category: 'Television', programme, question, answers,
      correctAnswer, difficulty, tags, dailyEligible: true });
  }
}

addProgramme('Episodes',
  ['Showtime', 'BBC Two', '2011-2017', 'Hollywood', 'Satire', 'David Crane', 'Jeffrey Klarik'],
  episodesFacts);
addProgramme('Sorry!',
  ['BBC One', '1981-1988', 'Family Sitcom', 'Ronnie Corbett', 'Timothy Lumsden', 'Phyllis Lumsden'],
  sorryFacts);

// Validate the actual exported question objects before GitHub submission.
if (!questions.length || questions[0].id !== 'tv_18623' ||
    new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => normalise(q.question))).size !== questions.length ||
    questions.some((q, index) =>
      q.id !== 'tv_' + String(FIRST_ID + index).padStart(5, '0') ||
      q.category !== 'Television' || !q.programme ||
      !Array.isArray(q.answers) || q.answers.length !== 4 ||
      !q.answers.includes(q.correctAnswer) ||
      new Set(q.answers.map(normalise)).size !== 4 ||
      !Array.isArray(q.tags) || q.tags.length < 14 ||
      new Set(q.tags.map(tagKey)).size !== q.tags.length ||
      !q.tags.includes('Programme: ' + q.programme) ||
      !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
      q.dailyEligible !== true))
  throw new Error('Pack 369: exported question validation failed');


// Pack 369 narrative audit, 22 November 2026: 92 original IDs preserved.
// Sources: https://www.tvmaze.com/shows/146/episodes/episodeguide
//          https://www.tvmaze.com/shows/7040/sorry/episodeguide
// Distinct episode-specific stories and final-series plotlines.
const auditAdditions = [
  {
    "id": "tv_39649",
    "category": "Television",
    "programme": "Episodes",
    "question": "At whose home do Sean and Beverly attend an uncomfortable dinner party in Episodes?",
    "answers": [
      "Merc Lapidus's",
      "Matt LeBlanc's",
      "Carol Rance's",
      "Morning Randolph's"
    ],
    "correctAnswer": "Merc Lapidus's",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S1E02 2011",
      "Series: S1E02",
      "Character story: Mercs Dinner Party",
      "Plot fact: Mercs Dinner Party",
      "Correct answer: Merc Lapidus's",
      "Narrative detail: Mercs Dinner Party",
      "Episode context: S1E02 2011",
      "Subject: Mercs Dinner Party",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39650",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, which American city do Matt and Sean visit on a trip that strengthens their friendship?",
    "answers": [
      "San Francisco",
      "Las Vegas",
      "Miami",
      "Seattle"
    ],
    "correctAnswer": "Las Vegas",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S1E03 2011",
      "Series: S1E03",
      "Character story: Sean And Matt Visit Las Vegas",
      "Plot fact: Sean And Matt Visit Las Vegas",
      "Correct answer: Las Vegas",
      "Narrative detail: Sean And Matt Visit Las Vegas",
      "Episode context: S1E03 2011",
      "Subject: Sean And Matt Visit Las Vegas",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39651",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, whose home do Sean and Beverly end up visiting when they escort a drunken Matt away from a bar?",
    "answers": [
      "Merc's mother's",
      "Carol's sister's",
      "Matt's ex-wife's",
      "Sean's former colleague's"
    ],
    "correctAnswer": "Matt's ex-wife's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S1E04 2011",
      "Series: S1E04",
      "Character story: Overnight Trip To Matts Former Wife",
      "Plot fact: Overnight Trip To Matts Former Wife",
      "Correct answer: Matt's ex-wife's",
      "Narrative detail: Overnight Trip To Matts Former Wife",
      "Episode context: S1E04 2011",
      "Subject: Overnight Trip To Matts Former Wife",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39652",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, which actress in the fictional show Pucks! becomes the focus of Sean's attraction?",
    "answers": [
      "Helen Basch",
      "Myra Licht",
      "Jamie Lapidus",
      "Morning Randolph"
    ],
    "correctAnswer": "Morning Randolph",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S1E05 2011",
      "Series: S1E05",
      "Character story: Sean Attracted To Morning",
      "Plot fact: Sean Attracted To Morning",
      "Correct answer: Morning Randolph",
      "Narrative detail: Sean Attracted To Morning",
      "Episode context: S1E05 2011",
      "Subject: Sean Attracted To Morning",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39653",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, who shares marijuana with Beverly while they complain about their relationships?",
    "answers": [
      "Carol Rance",
      "Morning Randolph",
      "Jamie Lapidus",
      "Helen Basch"
    ],
    "correctAnswer": "Carol Rance",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S1E05 2011",
      "Series: S1E05",
      "Character story: Beverly And Carol Share Marijuana",
      "Plot fact: Beverly And Carol Share Marijuana",
      "Correct answer: Carol Rance",
      "Narrative detail: Beverly And Carol Share Marijuana",
      "Episode context: S1E05 2011",
      "Subject: Beverly And Carol Share Marijuana",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39654",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, which woman does Beverly suspect Sean is having an affair with before she decides to fly home?",
    "answers": [
      "Carol Rance",
      "Morning Randolph",
      "Jamie Lapidus",
      "Helen Basch"
    ],
    "correctAnswer": "Morning Randolph",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S1E06 2011",
      "Series: S1E06",
      "Character story: Beverly Suspects Morning Affair",
      "Plot fact: Beverly Suspects Morning Affair",
      "Correct answer: Morning Randolph",
      "Narrative detail: Beverly Suspects Morning Affair",
      "Episode context: S1E06 2011",
      "Subject: Beverly Suspects Morning Affair",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39655",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, what stage of production has just finished when Sean and Beverly prepare to leave Hollywood?",
    "answers": [
      "Writing the final Lyman's Boys series",
      "Recording a radio drama",
      "Filming the Pucks! pilot",
      "Releasing the show's first DVD"
    ],
    "correctAnswer": "Filming the Pucks! pilot",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S1E07 2011",
      "Series: S1E07",
      "Character story: Pucks Pilot Wraps At Season End",
      "Plot fact: Pucks Pilot Wraps At Season End",
      "Correct answer: Filming the Pucks! pilot",
      "Narrative detail: Pucks Pilot Wraps At Season End",
      "Episode context: S1E07 2011",
      "Subject: Pucks Pilot Wraps At Season End",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39656",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, what unexpected early result makes Sean and Beverly keep working on Pucks! despite their separation?",
    "answers": [
      "A major award nomination",
      "An overseas film contract",
      "An immediate cancellation",
      "Strong television ratings"
    ],
    "correctAnswer": "Strong television ratings",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S2E01 2012",
      "Series: S2E01",
      "Character story: Pucks Premiere Earns Big Ratings",
      "Plot fact: Pucks Premiere Earns Big Ratings",
      "Correct answer: Strong television ratings",
      "Narrative detail: Pucks Premiere Earns Big Ratings",
      "Episode context: S2E01 2012",
      "Subject: Pucks Premiere Earns Big Ratings",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39657",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, which expensive gift does Matt offer Sean to repair their damaged friendship?",
    "answers": [
      "A convertible car",
      "A sailing yacht",
      "A designer watch",
      "A holiday cottage"
    ],
    "correctAnswer": "A convertible car",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S2E02 2012",
      "Series: S2E02",
      "Character story: Matt Buys Sean Convertible",
      "Plot fact: Matt Buys Sean Convertible",
      "Correct answer: A convertible car",
      "Narrative detail: Matt Buys Sean Convertible",
      "Episode context: S2E02 2012",
      "Subject: Matt Buys Sean Convertible",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39658",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, whose death prompts the awkward funeral attended by Sean and Beverly?",
    "answers": [
      "Matt LeBlanc's mother",
      "Merc Lapidus's father",
      "Carol Rance's brother",
      "Sean Lincoln's grandfather"
    ],
    "correctAnswer": "Merc Lapidus's father",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S2E03 2012",
      "Series: S2E03",
      "Character story: Merc Father Dies",
      "Plot fact: Merc Father Dies",
      "Correct answer: Merc Lapidus's father",
      "Narrative detail: Merc Father Dies",
      "Episode context: S2E03 2012",
      "Subject: Merc Father Dies",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39659",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, which performers receive surprisingly favourable audience feedback despite Pucks! losing viewers?",
    "answers": [
      "Its elderly guest stars",
      "Its British supporting actors",
      "Its younger cast",
      "Its celebrity presenters"
    ],
    "correctAnswer": "Its younger cast",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S2E04 2012",
      "Series: S2E04",
      "Character story: Young Pucks Cast Popular With Viewers",
      "Plot fact: Young Pucks Cast Popular With Viewers",
      "Correct answer: Its younger cast",
      "Narrative detail: Young Pucks Cast Popular With Viewers",
      "Episode context: S2E04 2012",
      "Subject: Young Pucks Cast Popular With Viewers",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39660",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, which social network helps Matt's stalker track Sean down to a restaurant?",
    "answers": [
      "LinkedIn",
      "Myspace",
      "Tumblr",
      "Facebook"
    ],
    "correctAnswer": "Facebook",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S2E05 2012",
      "Series: S2E05",
      "Character story: Matts Stalker Uses Facebook",
      "Plot fact: Matts Stalker Uses Facebook",
      "Correct answer: Facebook",
      "Narrative detail: Matts Stalker Uses Facebook",
      "Episode context: S2E05 2012",
      "Subject: Matts Stalker Uses Facebook",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39661",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, what cosmetic mishap has actress Morning Randolph suffered?",
    "answers": [
      "Botched plastic surgery",
      "A failed hair transplant",
      "A broken dental veneer",
      "A reaction to contact lenses"
    ],
    "correctAnswer": "Botched plastic surgery",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S2E05 2012",
      "Series: S2E05",
      "Character story: Morning Plastic Surgery Mishap",
      "Plot fact: Morning Plastic Surgery Mishap",
      "Correct answer: Botched plastic surgery",
      "Narrative detail: Morning Plastic Surgery Mishap",
      "Episode context: S2E05 2012",
      "Subject: Morning Plastic Surgery Mishap",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39662",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, what kind of public tribute is Matt asked to deliver for his network boss Merc?",
    "answers": [
      "A televised wedding toast",
      "A testimonial dinner speech",
      "A charity auction introduction",
      "A film premiere eulogy"
    ],
    "correctAnswer": "A testimonial dinner speech",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S2E06 2012",
      "Series: S2E06",
      "Character story: Matt Speech At Merc Dinner",
      "Plot fact: Matt Speech At Merc Dinner",
      "Correct answer: A testimonial dinner speech",
      "Narrative detail: Matt Speech At Merc Dinner",
      "Episode context: S2E06 2012",
      "Subject: Matt Speech At Merc Dinner",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39663",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, what change in Matt's appearance does the network ask Sean and Beverly to confront him about?",
    "answers": [
      "A new beard",
      "Grey hair",
      "Weight gain",
      "A visible tattoo"
    ],
    "correctAnswer": "Weight gain",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S2E07 2012",
      "Series: S2E07",
      "Character story: Network Complains About Matts Weight",
      "Plot fact: Network Complains About Matts Weight",
      "Correct answer: Weight gain",
      "Narrative detail: Network Complains About Matts Weight",
      "Episode context: S2E07 2012",
      "Subject: Network Complains About Matts Weight",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39664",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, whose brother does Beverly go on a blind date with?",
    "answers": [
      "Merc Lapidus's",
      "Carol Rance's",
      "Matt LeBlanc's",
      "Morning Randolph's"
    ],
    "correctAnswer": "Morning Randolph's",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S2E07 2012",
      "Series: S2E07",
      "Character story: Beverly Dates Mornings Brother",
      "Plot fact: Beverly Dates Mornings Brother",
      "Correct answer: Morning Randolph's",
      "Narrative detail: Beverly Dates Mornings Brother",
      "Episode context: S2E07 2012",
      "Subject: Beverly Dates Mornings Brother",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39665",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, what old programming mistake threatens Merc Lapidus's career?",
    "answers": [
      "Rejecting a show that became a hit elsewhere",
      "Cancelling a live presidential debate",
      "Accidentally broadcasting an unaired pilot",
      "Selling the rights to Pucks! overseas"
    ],
    "correctAnswer": "Rejecting a show that became a hit elsewhere",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S2E08 2012",
      "Series: S2E08",
      "Character story: Merc Passed On Rival Network Hit",
      "Plot fact: Merc Passed On Rival Network Hit",
      "Correct answer: Rejecting a show that became a hit elsewhere",
      "Narrative detail: Merc Passed On Rival Network Hit",
      "Episode context: S2E08 2012",
      "Subject: Merc Passed On Rival Network Hit",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39666",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, what family dispute occupies Matt LeBlanc when the third series begins?",
    "answers": [
      "A dispute over his late father's will",
      "A custody battle over his children",
      "A disagreement about his brother's wedding",
      "A fight over his parents' house"
    ],
    "correctAnswer": "A custody battle over his children",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S3E01 2014",
      "Series: S3E01",
      "Character story: Matt Child Custody Dispute",
      "Plot fact: Matt Child Custody Dispute",
      "Correct answer: A custody battle over his children",
      "Narrative detail: Matt Child Custody Dispute",
      "Episode context: S3E01 2014",
      "Subject: Matt Child Custody Dispute",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39667",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, what traffic offence damages Matt's attempts to regain custody of his children?",
    "answers": [
      "Driving without valid insurance",
      "Speeding through a school zone",
      "Drink-driving with the children in his car",
      "Parking outside a hospital"
    ],
    "correctAnswer": "Drink-driving with the children in his car",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S3E02 2014",
      "Series: S3E02",
      "Character story: Matt Drink Driving With Children",
      "Plot fact: Matt Drink Driving With Children",
      "Correct answer: Drink-driving with the children in his car",
      "Narrative detail: Matt Drink Driving With Children",
      "Episode context: S3E02 2014",
      "Subject: Matt Drink Driving With Children",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39668",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, why does Matt ask Sean and Beverly to kill off his Pucks! character?",
    "answers": [
      "He plans to retire permanently",
      "He intends to move back to England",
      "He has taken a job as a sports coach",
      "He wants to pursue another acting role"
    ],
    "correctAnswer": "He wants to pursue another acting role",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S3E03 2014",
      "Series: S3E03",
      "Character story: Matt Wants Exit For New Role",
      "Plot fact: Matt Wants Exit For New Role",
      "Correct answer: He wants to pursue another acting role",
      "Narrative detail: Matt Wants Exit For New Role",
      "Episode context: S3E03 2014",
      "Subject: Matt Wants Exit For New Role",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39669",
    "category": "Television",
    "programme": "Episodes",
    "question": "Which troubled network chief struggles with his mental health and falling ratings in Episodes?",
    "answers": [
      "Castor Soto",
      "Elliot Salad",
      "Merc Lapidus",
      "Roger Riskin"
    ],
    "correctAnswer": "Castor Soto",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S3E03 2014",
      "Series: S3E03",
      "Character story: Castor Soto Mental Health Crisis",
      "Plot fact: Castor Soto Mental Health Crisis",
      "Correct answer: Castor Soto",
      "Narrative detail: Castor Soto Mental Health Crisis",
      "Episode context: S3E03 2014",
      "Subject: Castor Soto Mental Health Crisis",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39670",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, what do Sean and Beverly seek professional help with during the third series?",
    "answers": [
      "A tax investigation",
      "Their sexual relationship",
      "A dispute over their visas",
      "Their home mortgage"
    ],
    "correctAnswer": "Their sexual relationship",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S3E05 2014",
      "Series: S3E05",
      "Character story: Sean Beverly Visit Sex Therapist",
      "Plot fact: Sean Beverly Visit Sex Therapist",
      "Correct answer: Their sexual relationship",
      "Narrative detail: Sean Beverly Visit Sex Therapist",
      "Episode context: S3E05 2014",
      "Subject: Sean Beverly Visit Sex Therapist",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39671",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, what does Merc steal from his former wife's house before Matt helps her?",
    "answers": [
      "Her jewellery",
      "Her dog",
      "Her artwork",
      "Her television awards"
    ],
    "correctAnswer": "Her artwork",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S3E05 2014",
      "Series: S3E05",
      "Character story: Merc Steals Ex Wifes Art",
      "Plot fact: Merc Steals Ex Wifes Art",
      "Correct answer: Her artwork",
      "Narrative detail: Merc Steals Ex Wifes Art",
      "Episode context: S3E05 2014",
      "Subject: Merc Steals Ex Wifes Art",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39672",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, what happens to Pucks! during the third series even though the network stops short of formally cancelling it?",
    "answers": [
      "It is sold to the BBC",
      "It moves to a morning slot",
      "It becomes a live stage show",
      "It is pulled from the schedule"
    ],
    "correctAnswer": "It is pulled from the schedule",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S3E06 2014",
      "Series: S3E06",
      "Character story: Pucks Removed From Broadcast Schedule",
      "Plot fact: Pucks Removed From Broadcast Schedule",
      "Correct answer: It is pulled from the schedule",
      "Narrative detail: Pucks Removed From Broadcast Schedule",
      "Episode context: S3E06 2014",
      "Subject: Pucks Removed From Broadcast Schedule",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39673",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, what change in his stalker's attention leaves Matt unexpectedly miserable?",
    "answers": [
      "She is no longer obsessed with him",
      "She has become engaged to his agent",
      "She moves into his house",
      "She writes a book about him"
    ],
    "correctAnswer": "She is no longer obsessed with him",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S3E07 2014",
      "Series: S3E07",
      "Character story: Stalker Stops Obsessing Over Matt",
      "Plot fact: Stalker Stops Obsessing Over Matt",
      "Correct answer: She is no longer obsessed with him",
      "Narrative detail: Stalker Stops Obsessing Over Matt",
      "Episode context: S3E07 2014",
      "Subject: Stalker Stops Obsessing Over Matt",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39674",
    "category": "Television",
    "programme": "Episodes",
    "question": "Which American television network expects Matt to audition for a dramatic role in Episodes?",
    "answers": [
      "CBS",
      "NBC",
      "ABC",
      "Fox"
    ],
    "correctAnswer": "NBC",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S3E09 2014",
      "Series: S3E09",
      "Character story: NBC Requires Matt Audition",
      "Plot fact: NBC Requires Matt Audition",
      "Correct answer: NBC",
      "Narrative detail: NBC Requires Matt Audition",
      "Episode context: S3E09 2014",
      "Subject: NBC Requires Matt Audition",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39675",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, how many further instalments of Pucks! force Sean and Beverly back to Hollywood?",
    "answers": [
      "Two",
      "Ten",
      "Six",
      "Twelve"
    ],
    "correctAnswer": "Six",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S4E01 2015",
      "Series: S4E01",
      "Character story: Six More Pucks Episodes Ordered",
      "Plot fact: Six More Pucks Episodes Ordered",
      "Correct answer: Six",
      "Narrative detail: Six More Pucks Episodes Ordered",
      "Episode context: S4E01 2015",
      "Subject: Six More Pucks Episodes Ordered",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39676",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, whose arrival makes work on Sean and Beverly's new series especially difficult?",
    "answers": [
      "Beverly's younger brother",
      "Merc's father",
      "Matt's former schoolteacher",
      "Sean's former writing partner Tim"
    ],
    "correctAnswer": "Sean's former writing partner Tim",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S4E03 2015",
      "Series: S4E03",
      "Character story: Tim Whittick Returns To Cause Trouble",
      "Plot fact: Tim Whittick Returns To Cause Trouble",
      "Correct answer: Sean's former writing partner Tim",
      "Narrative detail: Tim Whittick Returns To Cause Trouble",
      "Episode context: S4E03 2015",
      "Subject: Tim Whittick Returns To Cause Trouble",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39677",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, whose hospital heart operation forces Matt to spend a day away from the television studio?",
    "answers": [
      "His father's",
      "His brother's",
      "His ex-wife's",
      "His agent's"
    ],
    "correctAnswer": "His father's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S4E06 2015",
      "Series: S4E06",
      "Character story: Matt Father Heart Surgery",
      "Plot fact: Matt Father Heart Surgery",
      "Correct answer: His father's",
      "Narrative detail: Matt Father Heart Surgery",
      "Episode context: S4E06 2015",
      "Subject: Matt Father Heart Surgery",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39678",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, what valuable property does Matt consider selling to resolve his financial difficulties?",
    "answers": [
      "His private aircraft",
      "His beach house",
      "His restaurant",
      "His boat"
    ],
    "correctAnswer": "His beach house",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S4E08 2015",
      "Series: S4E08",
      "Character story: Matt Considers Selling Beach House",
      "Plot fact: Matt Considers Selling Beach House",
      "Correct answer: His beach house",
      "Narrative detail: Matt Considers Selling Beach House",
      "Episode context: S4E08 2015",
      "Subject: Matt Considers Selling Beach House",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39679",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, whose new relationship leads Beverly and Carol to conceal their friendship?",
    "answers": [
      "Sean's relationship with Morning",
      "Matt's relationship with Jamie",
      "Carol's relationship with Helen",
      "Merc's relationship with Myra"
    ],
    "correctAnswer": "Carol's relationship with Helen",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S4E09 2015",
      "Series: S4E09",
      "Character story: Helen Jealous Of Beverly Carol Friendship",
      "Plot fact: Helen Jealous Of Beverly Carol Friendship",
      "Correct answer: Carol's relationship with Helen",
      "Narrative detail: Helen Jealous Of Beverly Carol Friendship",
      "Episode context: S4E09 2015",
      "Subject: Helen Jealous Of Beverly Carol Friendship",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39680",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, which former network president becomes the producer of Matt's hit game show The Box?",
    "answers": [
      "Castor Soto",
      "Elliot Salad",
      "Roger Riskin",
      "Merc Lapidus"
    ],
    "correctAnswer": "Merc Lapidus",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S5E01 2017",
      "Series: S5E01",
      "Character story: Merc Produces Matts Game Show",
      "Plot fact: Merc Produces Matts Game Show",
      "Correct answer: Merc Lapidus",
      "Narrative detail: Merc Produces Matts Game Show",
      "Episode context: S5E01 2017",
      "Subject: Merc Produces Matts Game Show",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39681",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, whose intimate encounter with Matt goes viral and creates a public-relations disaster?",
    "answers": [
      "Danika's",
      "Jamie's",
      "Morning's",
      "Carol's"
    ],
    "correctAnswer": "Danika's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S5E02 2017",
      "Series: S5E02",
      "Character story: Matt Danika Video Goes Viral",
      "Plot fact: Matt Danika Video Goes Viral",
      "Correct answer: Danika's",
      "Narrative detail: Matt Danika Video Goes Viral",
      "Episode context: S5E02 2017",
      "Subject: Matt Danika Video Goes Viral",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39682",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, what oversized stuffed animal does Matt use while trying to lure Sean and Beverly into a new project?",
    "answers": [
      "A panda",
      "A gorilla",
      "A polar bear",
      "A giraffe"
    ],
    "correctAnswer": "A gorilla",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S5E03 2017",
      "Series: S5E03",
      "Character story: Matt Uses Stuffed Gorilla",
      "Plot fact: Matt Uses Stuffed Gorilla",
      "Correct answer: A gorilla",
      "Narrative detail: Matt Uses Stuffed Gorilla",
      "Episode context: S5E03 2017",
      "Subject: Matt Uses Stuffed Gorilla",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39683",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, to whom does Merc become engaged while secretly involved with Carol?",
    "answers": [
      "Myra Licht",
      "Beverly Lincoln",
      "Morning Randolph",
      "Helen Basch"
    ],
    "correctAnswer": "Morning Randolph",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S5E04 2017",
      "Series: S5E04",
      "Character story: Merc Engaged To Morning",
      "Plot fact: Merc Engaged To Morning",
      "Correct answer: Morning Randolph",
      "Narrative detail: Merc Engaged To Morning",
      "Episode context: S5E04 2017",
      "Subject: Merc Engaged To Morning",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39684",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, which wild animal disrupts the creative weekend at Matt's ranch?",
    "answers": [
      "A bear",
      "A cougar",
      "A coyote",
      "A boar"
    ],
    "correctAnswer": "A boar",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S5E04 2017",
      "Series: S5E04",
      "Character story: Boar At Matt Ranch Writing Retreat",
      "Plot fact: Boar At Matt Ranch Writing Retreat",
      "Correct answer: A boar",
      "Narrative detail: Boar At Matt Ranch Writing Retreat",
      "Episode context: S5E04 2017",
      "Subject: Boar At Matt Ranch Writing Retreat",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39685",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, whose child does Carol reveal she is expecting near the end of the series?",
    "answers": [
      "Merc Lapidus's",
      "Matt LeBlanc's",
      "Castor Soto's",
      "Elliot Salad's"
    ],
    "correctAnswer": "Merc Lapidus's",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S5E05 2017",
      "Series: S5E05",
      "Character story: Carol Pregnant With Merc Child",
      "Plot fact: Carol Pregnant With Merc Child",
      "Correct answer: Merc Lapidus's",
      "Narrative detail: Carol Pregnant With Merc Child",
      "Episode context: S5E05 2017",
      "Subject: Carol Pregnant With Merc Child",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39686",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, what writing-related demand triggers Matt's dispute with Sean and Beverly over their new show?",
    "answers": [
      "He wants his name removed as star",
      "He wants a writing credit",
      "He refuses to use a script editor",
      "He insists on a live studio audience"
    ],
    "correctAnswer": "He wants a writing credit",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S5E06 2017",
      "Series: S5E06",
      "Character story: Matt Demands Writing Credit",
      "Plot fact: Matt Demands Writing Credit",
      "Correct answer: He wants a writing credit",
      "Narrative detail: Matt Demands Writing Credit",
      "Episode context: S5E06 2017",
      "Subject: Matt Demands Writing Credit",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39687",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, which American state does Carol plan to move back to while preparing to raise her baby?",
    "answers": [
      "Nevada",
      "Maine",
      "Michigan",
      "Texas"
    ],
    "correctAnswer": "Michigan",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S5E06 2017",
      "Series: S5E06",
      "Character story: Carol Plans Return To Michigan",
      "Plot fact: Carol Plans Return To Michigan",
      "Correct answer: Michigan",
      "Narrative detail: Carol Plans Return To Michigan",
      "Episode context: S5E06 2017",
      "Subject: Carol Plans Return To Michigan",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39688",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, what legal action does Carol consider bringing against Helen and the network?",
    "answers": [
      "A copyright-infringement claim",
      "A property-damage claim",
      "An unfair taxation appeal",
      "A sexual-harassment lawsuit"
    ],
    "correctAnswer": "A sexual-harassment lawsuit",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S5E06 2017",
      "Series: S5E06",
      "Character story: Carol Sues Over Sexual Harassment",
      "Plot fact: Carol Sues Over Sexual Harassment",
      "Correct answer: A sexual-harassment lawsuit",
      "Narrative detail: Carol Sues Over Sexual Harassment",
      "Episode context: S5E06 2017",
      "Subject: Carol Sues Over Sexual Harassment",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39689",
    "category": "Television",
    "programme": "Episodes",
    "question": "In Episodes, what career decision by Matt threatens the new television project Sean and Beverly designed for him?",
    "answers": [
      "He rejects the show",
      "He insists on directing every episode",
      "He leaves to make a radio programme",
      "He signs an exclusive film contract"
    ],
    "correctAnswer": "He rejects the show",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Episodes",
      "Programme: Episodes",
      "British and American Television",
      "Showtime",
      "Episode: S5E07 2017",
      "Series: S5E07",
      "Character story: Matt Rejects Show Sean Beverly Created",
      "Plot fact: Matt Rejects Show Sean Beverly Created",
      "Correct answer: He rejects the show",
      "Narrative detail: Matt Rejects Show Sean Beverly Created",
      "Episode context: S5E07 2017",
      "Subject: Matt Rejects Show Sean Beverly Created",
      "Production era: 2011-2017"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39690",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, what is the name of the woman Timothy tries to woo after meeting her at an amateur dramatics society?",
    "answers": [
      "Jennifer",
      "Annette",
      "Pippa",
      "Liz"
    ],
    "correctAnswer": "Annette",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S1E01 For Love or Mummy",
      "Series: S1E01",
      "Character story: Timothy First Romance With Annette",
      "Plot fact: Timothy First Romance With Annette",
      "Correct answer: Annette",
      "Narrative detail: Timothy First Romance With Annette",
      "Episode context: S1E01 For Love or Mummy",
      "Subject: Timothy First Romance With Annette",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39691",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, what arrangement especially shocks Phyllis when Timothy tries to move out in Bachelor Seeks Anywhere?",
    "answers": [
      "Renting a room in a vicarage",
      "Buying a houseboat",
      "Living in a flat with two women",
      "Staying with Frank's parents"
    ],
    "correctAnswer": "Living in a flat with two women",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S1E04 Bachelor Seeks Anywhere",
      "Series: S1E04",
      "Character story: Timothy Flatshare With Two Women",
      "Plot fact: Timothy Flatshare With Two Women",
      "Correct answer: Living in a flat with two women",
      "Narrative detail: Timothy Flatshare With Two Women",
      "Episode context: S1E04 Bachelor Seeks Anywhere",
      "Subject: Timothy Flatshare With Two Women",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39692",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, what household activity does Phyllis insist Timothy do instead of attending the cinema?",
    "answers": [
      "Cleaning the loft",
      "Repairing a broken fence",
      "Washing the car",
      "Painting"
    ],
    "correctAnswer": "Painting",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S1E05 Does Your Mother Know You're Out?",
      "Series: S1E05",
      "Character story: Mother Requires Painting Instead Of Cinema",
      "Plot fact: Mother Requires Painting Instead Of Cinema",
      "Correct answer: Painting",
      "Narrative detail: Mother Requires Painting Instead Of Cinema",
      "Episode context: S1E05 Does Your Mother Know You're Out?",
      "Subject: Mother Requires Painting Instead Of Cinema",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39693",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, why does Phyllis refuse to speak to Timothy's sister Muriel when she visits?",
    "answers": [
      "She disapproves of Muriel's husband",
      "She has borrowed a large sum of money",
      "She missed their father's birthday",
      "She sold a family heirloom"
    ],
    "correctAnswer": "She disapproves of Muriel's husband",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S1E06 Curse of the Mummy",
      "Series: S1E06",
      "Character story: Phyllis Disapproves Muriel Husband Kevin",
      "Plot fact: Phyllis Disapproves Muriel Husband Kevin",
      "Correct answer: She disapproves of Muriel's husband",
      "Narrative detail: Phyllis Disapproves Muriel Husband Kevin",
      "Episode context: S1E06 Curse of the Mummy",
      "Subject: Phyllis Disapproves Muriel Husband Kevin",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39694",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, what kind of celebration does Timothy plan while arranging a second honeymoon for his parents?",
    "answers": [
      "A surprise engagement dinner for Muriel",
      "A party in the empty house",
      "A garden charity fête",
      "A retirement party at the library"
    ],
    "correctAnswer": "A party in the empty house",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S2E01 Cromer or Bust",
      "Series: S2E01",
      "Character story: Timothy Plans Party While Parents Away",
      "Plot fact: Timothy Plans Party While Parents Away",
      "Correct answer: A party in the empty house",
      "Narrative detail: Timothy Plans Party While Parents Away",
      "Episode context: S2E01 Cromer or Bust",
      "Subject: Timothy Plans Party While Parents Away",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39695",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, what employment opportunity could Timothy's sleepwalking undermine in Perchance to Dream?",
    "answers": [
      "A temporary job as a gardener",
      "A transfer to a theatre company",
      "A promotion at the library",
      "A position as a postman"
    ],
    "correctAnswer": "A promotion at the library",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S2E02 Perchance to Dream",
      "Series: S2E02",
      "Character story: Sleepwalking Threatens Library Promotion",
      "Plot fact: Sleepwalking Threatens Library Promotion",
      "Correct answer: A promotion at the library",
      "Narrative detail: Sleepwalking Threatens Library Promotion",
      "Episode context: S2E02 Perchance to Dream",
      "Subject: Sleepwalking Threatens Library Promotion",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39696",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, what kind of business owner and his animals cause difficulty for Timothy in Great Expectations?",
    "answers": [
      "A pet-shop keeper and his parrots",
      "A farmer and his sheep",
      "A riding-school owner and his horses",
      "A garage owner and his dogs"
    ],
    "correctAnswer": "A garage owner and his dogs",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S2E04 Great Expectations",
      "Series: S2E04",
      "Character story: Garage Owner Dogs Trouble Tim",
      "Plot fact: Garage Owner Dogs Trouble Tim",
      "Correct answer: A garage owner and his dogs",
      "Narrative detail: Garage Owner Dogs Trouble Tim",
      "Episode context: S2E04 Great Expectations",
      "Subject: Garage Owner Dogs Trouble Tim",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39697",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, what piece of wedding jewellery does Timothy risk forgetting while supporting Frank at his wedding?",
    "answers": [
      "The wedding ring",
      "The bride's necklace",
      "A family locket",
      "A silver bracelet"
    ],
    "correctAnswer": "The wedding ring",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S2E06 Could Do Better",
      "Series: S2E06",
      "Character story: Timothy Risks Forgetting Wedding Ring",
      "Plot fact: Timothy Risks Forgetting Wedding Ring",
      "Correct answer: The wedding ring",
      "Narrative detail: Timothy Risks Forgetting Wedding Ring",
      "Episode context: S2E06 Could Do Better",
      "Subject: Timothy Risks Forgetting Wedding Ring",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39698",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, what named object does Timothy search for at the start of the third series?",
    "answers": [
      "The Silver Fox",
      "The Golden Rabbit",
      "The Blue Bird",
      "The Ivory Cat"
    ],
    "correctAnswer": "The Golden Rabbit",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S3E01 The Rabbit and the Pussycat",
      "Series: S3E01",
      "Character story: Timothy Searches Golden Rabbit",
      "Plot fact: Timothy Searches Golden Rabbit",
      "Correct answer: The Golden Rabbit",
      "Narrative detail: Timothy Searches Golden Rabbit",
      "Episode context: S3E01 The Rabbit and the Pussycat",
      "Subject: Timothy Searches Golden Rabbit",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39699",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, which Shakespearean character does Timothy play in the local production of A Midsummer Night's Dream?",
    "answers": [
      "Oberon",
      "Puck",
      "Bottom",
      "Lysander"
    ],
    "correctAnswer": "Bottom",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S3E03 Bottom of the Class",
      "Series: S3E03",
      "Character story: Timothy Plays Bottom Shakespeare",
      "Plot fact: Timothy Plays Bottom Shakespeare",
      "Correct answer: Bottom",
      "Narrative detail: Timothy Plays Bottom Shakespeare",
      "Episode context: S3E03 Bottom of the Class",
      "Subject: Timothy Plays Bottom Shakespeare",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39700",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, who unexpectedly accompanies Timothy to a job interview after the library van breaks down?",
    "answers": [
      "His friend Frank",
      "His sister Muriel",
      "His boss at the library",
      "His mother Phyllis"
    ],
    "correctAnswer": "His mother Phyllis",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S3E04 Spellbound",
      "Series: S3E04",
      "Character story: Phyllis Follows Job Interview",
      "Plot fact: Phyllis Follows Job Interview",
      "Correct answer: His mother Phyllis",
      "Narrative detail: Phyllis Follows Job Interview",
      "Episode context: S3E04 Spellbound",
      "Subject: Phyllis Follows Job Interview",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39701",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, what special visitor does Timothy arrange for Phyllis's birthday in It Never Rained in Those Days?",
    "answers": [
      "An old friend",
      "Her former headmistress",
      "A retired actress",
      "Her cousin from Australia"
    ],
    "correctAnswer": "An old friend",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S3E05 It Never Rained in Those Days",
      "Series: S3E05",
      "Character story: Phyllis Birthday Visitor Old Friend",
      "Plot fact: Phyllis Birthday Visitor Old Friend",
      "Correct answer: An old friend",
      "Narrative detail: Phyllis Birthday Visitor Old Friend",
      "Episode context: S3E05 It Never Rained in Those Days",
      "Subject: Phyllis Birthday Visitor Old Friend",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39702",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, what mistake makes Timothy believe he is dying after collapsing and arriving at casualty?",
    "answers": [
      "He hears a nurse mention another patient's diagnosis",
      "He mixes up medical charts",
      "He misunderstands a doctor's accent",
      "He loses his identity bracelet"
    ],
    "correctAnswer": "He mixes up medical charts",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S3E06 The Big Sleep",
      "Series: S3E06",
      "Character story: Timothy Confuses Hospital Charts",
      "Plot fact: Timothy Confuses Hospital Charts",
      "Correct answer: He mixes up medical charts",
      "Narrative detail: Timothy Confuses Hospital Charts",
      "Episode context: S3E06 The Big Sleep",
      "Subject: Timothy Confuses Hospital Charts",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39703",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, which old-fashioned musical instrument traps Sidney's finger in Move Over, Mrs. Lumsden?",
    "answers": [
      "A harmonium",
      "A pipe organ",
      "A pianola",
      "An accordion"
    ],
    "correctAnswer": "A pianola",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S4E02 Move Over Mrs Lumsden",
      "Series: S4E02",
      "Character story: Sidney Finger Trapped In Pianola",
      "Plot fact: Sidney Finger Trapped In Pianola",
      "Correct answer: A pianola",
      "Narrative detail: Sidney Finger Trapped In Pianola",
      "Episode context: S4E02 Move Over Mrs Lumsden",
      "Subject: Sidney Finger Trapped In Pianola",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39704",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, what kind of book does Timothy try to obtain in One of Our Naughty Bits is Missing?",
    "answers": [
      "A rare poetry anthology",
      "A history of aviation",
      "A book of gardening advice",
      "An adult book"
    ],
    "correctAnswer": "An adult book",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S4E03 One of Our Naughty Bits is Missing",
      "Series: S4E03",
      "Character story: Timothy Pursues Adult Publication",
      "Plot fact: Timothy Pursues Adult Publication",
      "Correct answer: An adult book",
      "Narrative detail: Timothy Pursues Adult Publication",
      "Episode context: S4E03 One of Our Naughty Bits is Missing",
      "Subject: Timothy Pursues Adult Publication",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39705",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, behind which household appliance does Timothy find himself trapped in A Little Something Set Aside?",
    "answers": [
      "A washing machine",
      "A cooker",
      "A fridge-freezer",
      "A dishwasher"
    ],
    "correctAnswer": "A washing machine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S4E05 A Little Something Set Aside",
      "Series: S4E05",
      "Character story: Timothy Trapped Behind Washing Machine",
      "Plot fact: Timothy Trapped Behind Washing Machine",
      "Correct answer: A washing machine",
      "Narrative detail: Timothy Trapped Behind Washing Machine",
      "Episode context: S4E05 A Little Something Set Aside",
      "Subject: Timothy Trapped Behind Washing Machine",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39706",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, what unusual entertainer does Timothy meet in Collapse of a Small Party?",
    "answers": [
      "A sword swallower",
      "A bearded lady",
      "A ventriloquist",
      "A fire eater"
    ],
    "correctAnswer": "A bearded lady",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S4E06 Collapse of a Small Party",
      "Series: S4E06",
      "Character story: Timothy Meets Bearded Lady",
      "Plot fact: Timothy Meets Bearded Lady",
      "Correct answer: A bearded lady",
      "Narrative detail: Timothy Meets Bearded Lady",
      "Episode context: S4E06 Collapse of a Small Party",
      "Subject: Timothy Meets Bearded Lady",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39707",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, what new creative ambition entangles Timothy in a bedroom farce at the start of series five?",
    "answers": [
      "Photography",
      "Painting",
      "Writing",
      "Singing"
    ],
    "correctAnswer": "Writing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S5E01 The Primal Scene So to Speak",
      "Series: S5E01",
      "Character story: Timothy Tries Writing Comedy",
      "Plot fact: Timothy Tries Writing Comedy",
      "Correct answer: Writing",
      "Narrative detail: Timothy Tries Writing Comedy",
      "Episode context: S5E01 The Primal Scene So to Speak",
      "Subject: Timothy Tries Writing Comedy",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39708",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, which relative threatens to start a new life with Phyllis when Sidney disappears during a production of Hamlet?",
    "answers": [
      "Cousin Brinsley",
      "Uncle Barstable",
      "Aunt Esme",
      "Uncle Claud"
    ],
    "correctAnswer": "Uncle Claud",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S5E02 Every Clown Wants to Play Hamlet",
      "Series: S5E02",
      "Character story: Uncle Claud Offers Mother New Life",
      "Plot fact: Uncle Claud Offers Mother New Life",
      "Correct answer: Uncle Claud",
      "Narrative detail: Uncle Claud Offers Mother New Life",
      "Episode context: S5E02 Every Clown Wants to Play Hamlet",
      "Subject: Uncle Claud Offers Mother New Life",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39709",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, what mysterious message does Timothy attempt to decipher while studying piano with Miss Clanger?",
    "answers": [
      "A note from his dead uncle",
      "An anonymous love letter",
      "A government tax notice",
      "An old map left by his father"
    ],
    "correctAnswer": "A note from his dead uncle",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S5E03 Bells for Uncle Barstable",
      "Series: S5E03",
      "Character story: Uncle Barstable Leaves Puzzle Note",
      "Plot fact: Uncle Barstable Leaves Puzzle Note",
      "Correct answer: A note from his dead uncle",
      "Narrative detail: Uncle Barstable Leaves Puzzle Note",
      "Episode context: S5E03 Bells for Uncle Barstable",
      "Subject: Uncle Barstable Leaves Puzzle Note",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39710",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, what sort of home does Fenella live in while running a children's theatre?",
    "answers": [
      "A houseboat made from a bus",
      "A narrowboat",
      "An isolated farmhouse",
      "A converted railway carriage"
    ],
    "correctAnswer": "A narrowboat",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S5E05 My Family and Other Monsters",
      "Series: S5E05",
      "Character story: Fenella Lives On Narrowboat",
      "Plot fact: Fenella Lives On Narrowboat",
      "Correct answer: A narrowboat",
      "Narrative detail: Fenella Lives On Narrowboat",
      "Episode context: S5E05 My Family and Other Monsters",
      "Subject: Fenella Lives On Narrowboat",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39711",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!'s A Chief Inspector Calls, what illicit drink adds to the chaos at the Lumsden home?",
    "answers": [
      "Home-distilled gin",
      "Smuggled rum",
      "Bootleg whisky",
      "Counterfeit vodka"
    ],
    "correctAnswer": "Bootleg whisky",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S6E01 A Chief Inspector Calls",
      "Series: S6E01",
      "Character story: Illegal alcohol in Lumsden home",
      "Plot fact: Bootleg whisky before inspector visit",
      "Correct answer: An inspector",
      "Narrative detail: Illicit drink adds to household chaos",
      "Episode context: S6E01 A Chief Inspector Calls",
      "Subject: Bootleg whisky and visiting inspector",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39712",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, what promise does Phyllis force Timothy to make in Gone But Not Forgotten?",
    "answers": [
      "To leave his job at the library",
      "To give the house to Muriel",
      "To abandon amateur dramatics",
      "Not to marry after her death"
    ],
    "correctAnswer": "Not to marry after her death",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S6E04 Gone But Not Forgotten",
      "Series: S6E04",
      "Character story: Phyllis Demands No Marriage After Death",
      "Plot fact: Phyllis Demands No Marriage After Death",
      "Correct answer: Not to marry after her death",
      "Narrative detail: Phyllis Demands No Marriage After Death",
      "Episode context: S6E04 Gone But Not Forgotten",
      "Subject: Phyllis Demands No Marriage After Death",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39713",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, what alarming event follows Timothy's promise to Phyllis in Gone But Not Forgotten?",
    "answers": [
      "She appears to have taken her own life",
      "She goes abroad without telling him",
      "She sells the house",
      "She disappears on a hiking trip"
    ],
    "correctAnswer": "She appears to have taken her own life",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S6E04 Gone But Not Forgotten",
      "Series: S6E04",
      "Character story: Phyllis Appears To Have Committed Suicide",
      "Plot fact: Phyllis Appears To Have Committed Suicide",
      "Correct answer: She appears to have taken her own life",
      "Narrative detail: Phyllis Appears To Have Committed Suicide",
      "Episode context: S6E04 Gone But Not Forgotten",
      "Subject: Phyllis Appears To Have Committed Suicide",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39714",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, from which country does Sidney return ahead of Timothy's planned wedding to Jennifer?",
    "answers": [
      "New Zealand",
      "Australia",
      "Canada",
      "South Africa"
    ],
    "correctAnswer": "Australia",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S6E06 Do You Take This Man and His Mother",
      "Series: S6E06",
      "Character story: Sidney Returns From Australia For Wedding",
      "Plot fact: Sidney Returns From Australia For Wedding",
      "Correct answer: Australia",
      "Narrative detail: Sidney Returns From Australia For Wedding",
      "Episode context: S6E06 Do You Take This Man and His Mother",
      "Subject: Sidney Returns From Australia For Wedding",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39715",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, whom does Timothy meet again when his gullibility causes trouble in A Fool and His Money?",
    "answers": [
      "A retired inspector",
      "A distant cousin",
      "An old friend",
      "A former teacher"
    ],
    "correctAnswer": "An old friend",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S7E03 A Fool and His Money",
      "Series: S7E03",
      "Character story: Gullible Tim And Old Friend",
      "Plot fact: Gullible Tim And Old Friend",
      "Correct answer: An old friend",
      "Narrative detail: Gullible Tim And Old Friend",
      "Episode context: S7E03 A Fool and His Money",
      "Subject: Gullible Tim And Old Friend",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39716",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, what does Phyllis use to stop Timothy keeping a date with his dream girl in Flying Lessons?",
    "answers": [
      "A fake invitation",
      "A staged burglary",
      "An imaginary illness certificate",
      "Blackmail"
    ],
    "correctAnswer": "Blackmail",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S7E04 Flying Lessons",
      "Series: S7E04",
      "Character story: Mother Blackmails Tim Into Missing Date",
      "Plot fact: Mother Blackmails Tim Into Missing Date",
      "Correct answer: Blackmail",
      "Narrative detail: Mother Blackmails Tim Into Missing Date",
      "Episode context: S7E04 Flying Lessons",
      "Subject: Mother Blackmails Tim Into Missing Date",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39717",
    "category": "Television",
    "programme": "Sorry!",
    "question": "In Sorry!, how does Phyllis respond to Pippa when she visits Timothy's new home in Winter's Tales?",
    "answers": [
      "She tries to put Pippa off Timothy",
      "She immediately offers to pay for the wedding",
      "She offers Pippa a job at the library",
      "She asks Pippa to move in with her"
    ],
    "correctAnswer": "She tries to put Pippa off Timothy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Comedy",
      "Sitcom",
      "Sorry!",
      "Programme: Sorry!",
      "British Television",
      "BBC One",
      "Episode: S7E05 Winters Tales",
      "Series: S7E05",
      "Character story: Phyllis Discourages Pippa From Tim",
      "Plot fact: Phyllis Discourages Pippa From Tim",
      "Correct answer: She tries to put Pippa off Timothy",
      "Narrative detail: Phyllis Discourages Pippa From Tim",
      "Episode context: S7E05 Winters Tales",
      "Subject: Phyllis Discourages Pippa From Tim",
      "Production era: 1981-1988"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if (new Set(questions.map(q=>q.id)).size!==questions.length ||
    new Set(questions.map(q=>normalise(q.question))).size!==questions.length ||
    questions.some(q=>q.answers.length!==4 || new Set(q.answers.map(normalise)).size!==4 ||
      q.answers.filter(a=>a===q.correctAnswer).length!==1 || q.tags.length<14 ||
      !q.tags.includes('Programme: '+q.programme) || q.dailyEligible!==true))
    throw Error('Pack 369 narrative audit validation failed');
module.exports = questions;
