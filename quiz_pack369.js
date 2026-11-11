
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

module.exports = questions;
