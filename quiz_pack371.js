
// quiz_pack371.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Brush Strokes (1986-1991) and May to December (1989-1994).
// Complete WordPad-ready CommonJS module; no dependencies.
// Seven question-specific tags per question plus programme and era tags.
// Sources checked: British Comedy Guide programme, cast and episode guides.

const FIRST_ID = 18821;

// Question | correct answer | three distractors | difficulty | seven specific tags
const brushFacts = `Which actor played the womanising painter and decorator Jacko in Brush Strokes?|Karl Howman|Gary Waldhorn|Mike Walling|Howard Lew Lewis|Easy|Karl Howman|Jacko|Main Character|Lead Actor|Painter Decorator|South London|1980s Sitcom
What is Jacko's trade in Brush Strokes?|Painter and decorator|Plumber|Electrician|Carpenter|Easy|Jacko|House Painting|Decorating Trade|Manual Work|Bainbridge Firm|Workplace|Series Premise
In which part of London is Brush Strokes chiefly set?|South London|North London|West London|Central London|Easy|South London|Setting|Jacko Neighbourhood|Bainbridges|London Comedy|Local Community|1980s Britain
Who plays Jacko's formidable employer Lionel Bainbridge?|Gary Waldhorn|Karl Howman|Mike Walling|Sean Barrett|Easy|Gary Waldhorn|Lionel Bainbridge|Business Owner|Original Cast|Employer|Jacko Rivalry|Series One Three
What is the surname of Jacko's boss Lionel?|Bainbridge|Morella|Putney|Wheatcroft|Easy|Lionel Bainbridge|Surname|Decorating Firm|Employer|Boss Character|Business Owner|Character Identity
Which actress played Lionel's wife Veronica?|Elizabeth Counsell|Jackie Lye|Kim Thomson|Nicky Croydon|Medium|Elizabeth Counsell|Veronica Bainbridge|Lionel Wife|Actress Casting|Family Business|Recurring Character|Main Cast
Which character is Lionel Bainbridge's daughter?|Lesley|Sandra|Jean|Lucia|Easy|Lesley Bainbridge|Lionel Daughter|Veronica Daughter|Family Relationship|Jacko Romance|Early Series|Character Identity
Which actress first played Lesley Bainbridge in series one?|Kim Thomson|Erika Hoffman|Jackie Lye|Louise English|Medium|Kim Thomson|Lesley Bainbridge|Original Actress|Series One|Casting Change|Bainbridge Daughter|Role History
Which actress took over as Lesley Bainbridge from series two?|Erika Hoffman|Kim Thomson|Elizabeth Counsell|Nicky Croydon|Medium|Erika Hoffman|Lesley Bainbridge|Recast Actress|Series Two Five|Casting Change|Bainbridge Family|Later Series
Who played Jacko's workmate and brother-in-law Eric?|Mike Walling|Howard Lew Lewis|Gary Waldhorn|Karl Howman|Medium|Mike Walling|Eric|Brother In Law|Work Colleague|Actor Casting|Painter Decorator|Family Link
What is Eric's family relationship to Jacko?|Brother-in-law|Uncle|Cousin|Stepfather|Easy|Eric|Jacko|Married To Jean|Family Relationships|Workmates|Shared Home|Brother In Law
Which character is Jacko's sister and Eric's wife?|Jean|Veronica|Sandra|Lesley|Medium|Jean|Jacko Sister|Eric Wife|Family Relationships|Shared House|Household|Character Name
Which actress played Jean in series three to five?|Nicky Croydon|Elizabeth Counsell|Jackie Lye|Erika Hoffman|Hard|Nicky Croydon|Jean|Actor Casting|Series Three Five|Jacko Sister|Eric Wife|Later Seasons
Who played the secretary Sandra, one of Jacko's major romantic interests?|Jackie Lye|Elizabeth Counsell|Kim Thomson|Louise English|Medium|Jackie Lye|Sandra|Secretary|Actress Casting|Jacko Romance|Bainbridges|Main Ensemble
Which character works as Lionel's secretary and later becomes engaged to Jacko?|Sandra|Lucia|Jean|Paulette|Medium|Sandra|Jacko Engagement|Lionel Secretary|Workplace Romance|Series Two|Wedding Plans|Character Role
Which actor played pub landlord Elmo Putney?|Howard Lew Lewis|Mike Walling|Gary Waldhorn|Sean Barrett|Medium|Howard Lew Lewis|Elmo Putney|Publican|Actor Casting|Jacko Friend|Local Pub|Recurring Comic Role
What is Elmo Putney's occupation when Brush Strokes begins?|Pub landlord|Solicitor|Accountant|Bookmaker|Easy|Elmo Putney|Publican|Pub Business|Jacko Local|Workplace Setting|Licensed Premises|Early Series
What exclamation does Elmo use instead of swearing?|Chisel!|Smeg!|Gordon Bennett!|Oh my giddy aunt!|Medium|Elmo Putney|Chisel|Catchphrase|Comic Language|Pub Landlord|Character Quirk|Signature Expression
Which writing duo created Brush Strokes?|John Esmonde and Bob Larbey|Ray Galton and Alan Simpson|Laurence Marks and Maurice Gran|David Croft and Jimmy Perry|Medium|John Esmonde|Bob Larbey|Writers|Comedy Partnership|Sitcom Creators|BBC Television|Production Credits
Which other sitcom was written by the Brush Strokes duo John Esmonde and Bob Larbey?|The Good Life|Bread|Only Fools and Horses|Keeping Up Appearances|Medium|Esmonde And Larbey|The Good Life|Writers Career|Comedy Credits|British Sitcom|Production Link|1970s Television
Which group performed the Brush Strokes theme song Because of You?|Dexys Midnight Runners|Madness|The Style Council|The Housemartins|Medium|Dexys Midnight Runners|Because Of You|Opening Theme|1986 Single|TV Music|Comedy Soundtrack|Band Performance
On which channel was Brush Strokes first shown?|BBC One|ITV|BBC Two|Channel 4|Easy|BBC One|Original Broadcaster|Broadcast Channel|British Television|1986 Premiere|BBC Comedy|Programme History
In what year did Brush Strokes begin?|1986|1983|1989|1992|Easy|1986 Debut|Series One|First Broadcast|Programme Timeline|BBC One|Television History|Sitcom Premiere
In what year did the final episodes of Brush Strokes air?|1991|1988|1993|1996|Easy|1991 Finale|Series Five|Final Broadcast|Programme Timeline|BBC One|End Of Run|Television History
How many series of Brush Strokes were broadcast on BBC One?|Five|Four|Six|Seven|Medium|Five Broadcast Series|1986 To 1991|Series Count|Programme History|Broadcast Grouping|DVD Numbering|Sitcom Run
How many episodes of Brush Strokes were broadcast in total?|40|36|42|48|Medium|Forty Episodes|Series Count|Programme Catalogue|BBC Broadcast|Episode Total|Five Series|1986 To 1991
In the opening episode, what dating blunder causes Jacko trouble?|Arranging two dates for the same night|Forgetting his own wedding|Sending flowers to the wrong town|Booking two honeymoons|Medium|Episode One|Double Booking|Two Dates|Series One|Jacko Love Life|Pub Meeting|1986 Plot
In an early episode, which religious novice does Jacko encounter?|A trainee nun|A novice monk|A trainee rabbi|A choirboy|Medium|Series One|Trainee Nun|Jacko Encounter|Religious Vocation|Episode Two|Dating Trouble|Celia Storyline
What is the name of the runaway nun who later needs somewhere to stay?|Celia|Sandra|Veronica|Paulette|Medium|Celia|Runaway Nun|Series One|Jacko Lodger|Episode Nine|Religious Calling|Temporary Accommodation
Which relative turns up to confront Jacko in an early episode of Brush Strokes?|His brother Reg|His uncle Percy|His father Lionel|His cousin Shifty|Medium|Reg|Jacko Brother|Series One|Family Encounter|Episode Five|Past Incident|Pub Visit
What is the occupation of Gaynor, a woman Jacko dates in the first series?|Air stewardess|Nurse|Police officer|Librarian|Medium|Gaynor|Air Stewardess|Series One|Jacko Girlfriend|Flying Schedule|Episode Eleven|Romantic Misadventure
What is the surname of Sandra's suspicious boyfriend Roy in the first series?|Hooper|Putney|Morella|Bainbridge|Hard|Roy Hooper|Sandra Boyfriend|Series One|Episode Twelve|Jacko Past|Romantic Rival|Character Surname
Where does Jacko's former friend return from in series two with a changed lifestyle?|Canada|Spain|Australia|France|Medium|Series Two|Friend Returns|Canada|Lifestyle Change|Marriage Debate|Jacko Past|Episode Four
What kind of training opportunity does Lionel offer Jacko in series two?|Management course|Driving instructor course|Journalism course|Catering diploma|Medium|Lionel Bainbridge|Management Course|Series Two|Career Development|Episode Five|Jacko Future|Workplace Responsibility
Where do Jacko and Sandra travel for their unusual honeymoon in series three?|Barbados|Cyprus|Malta|Portugal|Medium|Jacko And Sandra|Barbados|Honeymoon|Series Three|Wedding Cancelled|Holiday|Episode Two
What happens to Jacko and Sandra's wedding plans in series three?|They call off the wedding|They marry secretly|They postpone it until Christmas|They marry in Las Vegas|Medium|Jacko And Sandra|Cancelled Wedding|Series Three|Romantic Decision|Engagement Ends|Mutual Agreement|Episode Three
What is the name of Jacko's rival decorating company?|Splosh|Splash|Fresh Coat|Quickbrush|Medium|Splosh|Jacko Business|Decorating Company|Series Three|Competition|Lionel Bainbridge|Self Employment
Which former employer becomes worried about competition from Jacko's decorating business?|Lionel Bainbridge|Elmo Putney|Eric|Mr Morella|Medium|Lionel Bainbridge|Splosh|Series Three|Rival Firms|Business Competition|Decorating Trade|Employer Conflict
What kind of establishment does Elmo open in series four?|A wine bar|A nightclub|A restaurant|A coffee shop|Easy|Elmo Putney|Wine Bar|Series Four|New Venture|Business Change|Jacko Social Life|Pub To Bar
Who takes charge of Bainbridges after Lionel's death?|Veronica Bainbridge|Lesley Bainbridge|Sandra|Jean|Medium|Veronica Bainbridge|Lionel Death|Bainbridge Firm|Series Four|Business Succession|Jacko Employer|Family Company
What is the first name of the Italian woman Jacko pursues in series four?|Lucia|Paulette|Gaynor|Celia|Medium|Lucia|Italian Romance|Jacko Girlfriend|Series Four|Morella Family|Family Photos|Courtship
Which actress played Lucia in the later series of Brush Strokes?|Louise English|Jackie Lye|Erika Hoffman|Elizabeth Counsell|Hard|Louise English|Lucia|Italian Character|Actress Casting|Series Four Five|Jacko Romance|Morella Family
Which character is pressured by Paulette to buy a country mansion in the final series?|Elmo|Eric|Jacko|Lionel|Medium|Elmo Putney|Paulette|Country Mansion|Gold Digger|Series Five|Property Scheme|Episode Two
What animal helps Jacko meet a new woman during the final series?|A budgie|A cat|A horse|A rabbit|Medium|Series Five|Budgie|New Romance|Jacko|Episode Three|Chance Meeting|Pet Bird
In the final series, who helps Elmo make a promotional video?|Jacko|Lionel|Eric|Lesley|Medium|Elmo Putney|Jacko|Promotional Video|Series Five|Wine Bar|Episode Five|Publicity Stunt
Which Surrey town are Eric and Jean moving to in the final episode?|Reigate|Guildford|Epsom|Woking|Hard|Eric And Jean|Reigate|Series Finale|Moving House|Surrey|Final Episode|Family Departure
Where does Veronica head with Marcello in the final episode?|Sicily|Majorca|Greece|Portugal|Hard|Veronica|Marcello|Sicily|Final Episode|Series Five|Overseas Departure|Romance`;

const mayFacts = `Which actor portrayed solicitor Alec Callender in May to December?|Anton Rodgers|Clive Francis|Paul Venables|Ronnie Stevens|Easy|Anton Rodgers|Alec Callender|Lead Actor|Solicitor Character|Age Gap Romance|Casting|1989 Sitcom
What is Alec Callender's profession in May to December?|Solicitor|Doctor|Accountant|Headmaster|Easy|Alec Callender|Legal Career|Solicitor|Law Firm|Pinner|Professional Life|Series Premise
Which actress first played Zoë Angell?|Eve Matheson|Lesley Dunlop|Carolyn Pickles|Rebecca Lacey|Medium|Eve Matheson|Zoe Angell|Original Lead|Series One Two|Casting|Romantic Lead|1989 Debut
Which actress took over the role of Zoë from the third series?|Lesley Dunlop|Eve Matheson|Kate Williams|Frances White|Medium|Lesley Dunlop|Zoe Angell|Series Three Six|Recast Lead|Actress Change|1991 Onwards|Romance
What subject does Zoë teach at school?|Physical education|History|English|Art|Easy|Zoe Angell|PE Teacher|School|Teaching Career|Sport|Workplace|Character Occupation
In which London suburb is May to December mainly set?|Pinner|Hampstead|Dulwich|Wimbledon|Medium|Pinner|North West London|Alec Law Firm|Setting|Suburban Sitcom|Middlesex|Local Community
Which BBC channel originally showed May to December?|BBC One|BBC Two|ITV|Channel 4|Easy|BBC One|Original Broadcast|1989 Launch|UK Channel|Sitcom Scheduling|BBC Comedy|Programme History
In which year did May to December begin its television run?|1989|1986|1992|1996|Easy|1989 Premiere|Series One|BBC One|Programme Timeline|April Debut|British Comedy|Opening Year
In which year did May to December finish its original television run?|1994|1991|1996|1999|Easy|1994 Finale|Series Six|BBC One|May Last Broadcast|End Of Run|Programme History|Final Year
How many series of May to December were produced for television?|Six|Four|Five|Seven|Medium|Six Series|1989 To 1994|Series Count|Sitcom Run|Production History|BBC One|Catalogue
How many television episodes of May to December were made in total?|39|36|40|42|Medium|Thirty Nine Episodes|Episode Total|Six Series|Programme Catalogue|BBC Sitcom|Broadcast History|Production Facts
Who created May to December?|Paul Mendelson|John Sullivan|Carla Lane|David Croft|Medium|Paul Mendelson|Sitcom Creator|Original Writer|Production Credits|Programme Origins|1989|Comedy Writing
Which actress played Alec's secretary Miss Flood?|Frances White|Kate Williams|Rebecca Lacey|Chrissie Cotterill|Medium|Frances White|Miss Flood|Vera Flood|Secretary|Law Office|Actor Casting|Supporting Lead
What is Miss Flood's first name?|Vera|Hilary|Dorothy|Simone|Medium|Vera Flood|Miss Flood|First Name|Alec Secretary|Law Firm|Recurring Role|Character Identity
Which actress played the junior secretary Hilary?|Rebecca Lacey|Frances White|Carolyn Pickles|Ashley Jensen|Medium|Rebecca Lacey|Hilary|Junior Secretary|Office Comedy|Series One Five|Cast|Legal Practice
Which actor played Alec's son Jamie?|Paul Venables|Clive Francis|Paul Raynor|Anton Rodgers|Medium|Paul Venables|Jamie Callender|Alec Son|Actor Casting|Legal Career|Family Character|Recurring Role
Which character is Alec's daughter and Jamie's sister?|Simone|Debbie|Hilary|Rosie|Easy|Simone|Alec Daughter|Jamie Sister|Family Relationships|Age Gap Opposition|Vicar Wife|Character Role
Which actress portrayed Alec's daughter Simone?|Carolyn Pickles|Kate Williams|Isabelle Lucas|Chrissie Cotterill|Medium|Carolyn Pickles|Simone|Alec Daughter|Actor Casting|Family Opposition|Vicar Wife|Recurring Character
What is Zoë's sister's first name?|Debbie|Simone|Hilary|Rosie|Easy|Debbie Burgess|Zoe Sister|Family Relationships|Dorothy Daughter|Romance Advice|Supporting Character|Character Name
Who played Zoë's sister Debbie?|Chrissie Cotterill|Kate Williams|Rebecca Lacey|Carolyn Pickles|Medium|Chrissie Cotterill|Debbie Burgess|Actress Casting|Sister Character|Zoe Family|Recurring Role|Supporting Cast
Who played Zoë's mother Dorothy Burgess?|Kate Williams|Frances White|Lesley Dunlop|Carolyn Pickles|Medium|Kate Williams|Dorothy Burgess|Dot|Zoe Mother|Actress Casting|Family Objections|Greengrocer Family
What kind of shop do Zoë's parents run?|Greengrocer's|Bookshop|Florist's|Hardware shop|Medium|Dorothy Burgess|Greengrocers|Zoe Parents|Family Business|Fruit And Vegetables|Local Shop|Household
Which actor played Alec's law firm partner Miles Henty in the first two series?|Clive Francis|Paul Venables|Anton Rodgers|Paul Raynor|Hard|Clive Francis|Miles Henty|Legal Partner|Law Firm|Series One Two|Actor Casting|Supporting Character
Which woman brings a divorce case to Alec's office in the first episode?|Zoë Angell|Miss Flood|Simone|Hilary|Easy|Zoe Angell|Divorce Case|Alec Solicitor|Series One Premiere|First Meeting|Kevin Affair|Romance Begins
What was the name of Zoë's unfaithful first husband?|Kevin|Jamie|Roy|Gerald|Medium|Kevin|Zoe First Husband|Divorce|Affair|Series One|Marriage Breakdown|Client Case
What shared interest helps Alec and Zoë connect despite their age difference?|Musical theatre|Motor racing|Fishing|Football|Easy|Alec And Zoe|Musical Theatre|Shared Interests|Age Difference|Courtship|Stage Musicals|Romantic Bond
Which fictional American lawyer does Alec particularly admire?|Perry Mason|Matlock|Atticus Finch|Rumpole of the Bailey|Medium|Perry Mason|Alec Idol|Fictional Lawyer|Legal Drama|Raymond Burr|Office Portrait|Law Career
What is the surname of Zoë's athletic on-and-off boyfriend Roy?|Morgan Jones|Henty|Tipple|Semple|Hard|Roy Morgan Jones|Zoe Boyfriend|Fitness|Romantic Rival|Character Surname|Exercise|Relationship
Which actor portrayed Zoë's fitness-loving admirer Roy?|Paul Raynor|Paul Venables|Clive Francis|Bernard Brown|Hard|Paul Raynor|Roy Morgan Jones|Actor Casting|Exercise|Zoe Admirer|Recurring Character|Romance
What is the name of Alec's son who starts work at his father's firm after Miles leaves?|Jamie|Gerald|Kevin|Anthony|Medium|Jamie Callender|Miles Departure|Legal Firm|Series Two|Alec Son|Career|Succession
Which character is Miss Flood's nephew who becomes involved with Hilary?|Anthony|Gerald|Kevin|Miles|Medium|Anthony|Hilary Romance|Miss Flood Nephew|Series Three|Newcastle|Office Relationships|Engagement
Under what pen name does Miss Flood write romantic fiction?|Elvira Storm|Clara Nightingale|Daisy Blake|Violet Winter|Hard|Miss Flood|Elvira Storm|Secret Novelist|Romantic Fiction|Writing Alias|Office Secretary|Character Hobby
What is Gerald Tipple's job when Miss Flood meets him?|Putting plaster casts on patients|Teaching history|Selling insurance|Running a bakery|Hard|Gerald Tipple|Hospital|Plaster Casts|Miss Flood Romance|Job Description|Supporting Character|Future Husband
Where do Alec and Zoë elope to get married?|Gretna Green|Las Vegas|Brighton|Paris|Medium|Alec And Zoe|Gretna Green|Elopement|Wedding|Scottish Border|Marriage Story|Series Three Four
In the 1990 Christmas special, which fictional detective-lawyer does Alec imagine emulating?|Perry Mason|Sherlock Holmes|Hercule Poirot|Inspector Morse|Medium|Alec Callender|Perry Mason|Christmas Special|Dream Sequence|Legal Hero|Ill See You In My Dreams|1990
Which episode features Alec and Zoë house-hunting while Jamie sleeps on their sofa?|Too Close for Comfort|Baby Love|Fools Rush In|Take Good Care of My Baby|Medium|Too Close For Comfort|House Hunting|Jamie On Sofa|Series Three|Alec And Zoe|New Home|Episode Title
Which school post does Zoë seek in the third series?|Head of PE department|Headteacher|Drama coordinator|Deputy headteacher|Medium|Zoe Angell|Head Of PE|School Promotion|Series Three|Its All In The Game|Teaching Career|Staff Appointment
Which character's marriage to a vicar helps explain her initial objections to Alec's relationship?|Simone|Debbie|Hilary|Dorothy|Medium|Simone|Vicar Husband|Alec Daughter|Moral Objection|Age Gap Romance|Family Conflict|Character Motivation
What type of party game does Alec buy at a church jumble sale in series four?|Murder mystery game|Charades set|Board-game chess|Trivial Pursuit|Medium|Alec Callender|Murder Mystery|Church Jumble Sale|Series Four|The Partys Over|The Crying Game|Party Game
What sad event happens to Zoë during The Crying Game in series four?|She suffers a miscarriage|She loses her teaching job|She breaks her ankle|She misses her wedding|Medium|Zoe Callender|Miscarriage|The Crying Game|Series Four|Hospital|Marriage Tested|Pregnancy Storyline
Who is Miss Flood preparing to marry in series four?|Gerald Tipple|Miles Henty|Kevin|Roy Morgan Jones|Medium|Miss Flood|Gerald Tipple|Wedding Plans|Series Four|Catch The Bouquet|Marriage|Office Romance
What form of childbirth does Zoë consider in the fifth-series episode Splish Splash?|Water birth|Home birth without assistance|Caesarean section|Hypnobirthing|Medium|Zoe Pregnancy|Water Birth|Splish Splash|Series Five|Childbirth|Alec Concern|Parenthood
What is the first name of Alec and Zoë's daughter?|Fleur|Simone|Rosie|Debbie|Easy|Fleur Callender|Alec And Zoe|Daughter|Baby|Series Five|Family Expansion|Character Name
What does Alec arrange for infant Fleur in School Days?|A place on a private school's waiting list|A swimming lesson|A passport|A christening rehearsal|Medium|Alec Callender|Fleur|Private School|School Days|Series Five|Planning Ahead|Parenting
Who proposes to Debbie in the fifth-series episode Who Can I Turn To?|Roy Morgan Jones|Jamie Callender|Gerald Tipple|Miles Henty|Medium|Debbie Burgess|Roy Morgan Jones|Proposal|Series Five|Who Can I Turn To|Romance|Zoe Reaction
Which two relatives do Alec and Zoë disagree over as possible godmothers for Fleur?|Simone and Debbie|Hilary and Rosie|Dorothy and Miss Flood|Jenny and Sonia|Medium|Fleur|Godmother Dispute|Simone|Debbie|Series Five|Best Is Yet To Come|Family Relationships
Which actress joined the cast as Rosie MacConnachy in the final series?|Ashley Jensen|Rebecca Lacey|Eve Matheson|Kate Williams|Hard|Ashley Jensen|Rosie MacConnachy|Series Six|New Cast Member|1994|Actress Casting|Supporting Role
Which character plans a This Is Your Life-style celebration for Miss Flood in the finale?|Jamie|Alec|Gerald|Roy|Medium|Jamie Callender|Miss Flood|Office Tribute|Series Six Finale|Until Its Time For You To Go|Celebration|Farewell
What concern causes Alec to consider leaving Zoë near the end of the series?|He believes a younger man might suit her better|He wants to move abroad for a job|He suspects she is a spy|He plans to become a priest|Medium|Alec Callender|Age Gap|Final Episode|Leaving Zoe|Marriage Crisis|Self Doubt|Series Six
Which producer was the executive producer of May to December through Cinema Verity?|Verity Lambert|Sydney Lotterby|Sharon Bloom|Mark Warman|Hard|Verity Lambert|Cinema Verity|Executive Producer|Production Company|BBC Co Production|Industry History|Sitcom Credits
Who wrote the final two series of May to December?|Geoffrey Deane|Paul Mendelson|Bob Larbey|John Esmonde|Hard|Geoffrey Deane|Series Five Six|Scriptwriter|Writing Credits|Later Seasons|Programme Production|BBC Comedy`;

const normalise = text => text.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
const tagKey = text => normalise(text).replace(/[^\p{L}\p{N}]/gu, '');
const questions = [];

function addProgramme(programme, sharedTags, facts) {
  for (const line of facts.trim().split('\n')) {
    const id = 'tv_' + String(FIRST_ID + questions.length).padStart(5, '0');
    const fields = line.trim().split('|').map(field => field.trim());
    if (fields.length !== 13) {
      throw new Error('Pack 371: expected 13 fields at ' + id + ', got ' + fields.length);
    }
    const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
    if (fields.some(field => !field) || !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
        specificTags.length !== 7 || new Set(specificTags.map(tagKey)).size !== 7) {
      throw new Error('Pack 371: invalid question or specific tags at ' + id);
    }
    const answers = [wrong1, wrong2, wrong3];
    if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4) {
      throw new Error('Pack 371: duplicate answer options at ' + id);
    }
    answers.splice(questions.length % 4, 0, correctAnswer);
    const tags = [...new Map([
      'Television', 'British Television', 'Comedy', 'Sitcom', programme,
      'Programme: ' + programme, ...sharedTags, correctAnswer, ...specificTags
    ].map(tag => [tagKey(tag), tag])).values()];
    questions.push({id, category: 'Television', programme, question,
      answers, correctAnswer, difficulty, tags, dailyEligible: true});
  }
}

addProgramme('Brush Strokes',
  ['BBC One', '1986-1991', 'John Esmonde', 'Bob Larbey', 'South London', 'Decorating'],
  brushFacts);
addProgramme('May to December',
  ['BBC One', '1989-1994', 'Paul Mendelson', 'Pinner', 'Alec Callender', 'Zoe Angell'],
  mayFacts);

// Verify the exported objects rather than trusting only the input rows.
if (!questions.length || questions[0].id !== 'tv_18821' ||
    new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => normalise(q.question))).size !== questions.length ||
    questions.some((q, index) =>
      q.id !== 'tv_' + String(FIRST_ID + index).padStart(5, '0') ||
      q.category !== 'Television' || !q.programme ||
      !Array.isArray(q.answers) || q.answers.length !== 4 ||
      !q.answers.includes(q.correctAnswer) ||
      new Set(q.answers.map(normalise)).size !== 4 ||
      !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
      !Array.isArray(q.tags) || q.tags.length < 14 ||
      new Set(q.tags.map(tagKey)).size !== q.tags.length ||
      !q.tags.includes('Programme: ' + q.programme) ||
      q.dailyEligible !== true)) {
  throw new Error('Pack 371: exported-object validation failed');
}

module.exports = questions;
