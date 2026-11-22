
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
Which writer contributed several scripts to the final two series of May to December?|Geoffrey Deane|Bob Larbey|John Esmonde|Carla Lane|Hard|Geoffrey Deane|Series Five Six|Script Contributor|Writing Credits|Later Seasons|Programme Production|BBC Comedy`;

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


// Pack 371 storyline audit, 22 November 2026: original IDs preserved.
// Corrected misleading Geoffrey Deane sole-writer wording in original question.
// Programme guides: https://www.comedy.co.uk/tv/brush_strokes/episodes/all/
// https://www.tvmaze.com/shows/8744/brush-strokes/episodeguide
// https://www.phill.co.uk/comedy/maydec/guide.html
// https://www.phill.co.uk/comedy/maydec/guide2.html through guide6.html
const auditAdditions = [
  {
    "id": "tv_39798",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, which sporting venue introduces Jacko to a mysterious woman early in the first series?",
    "answers": [
      "A football stadium",
      "A boxing gym",
      "A tennis club",
      "A cricket pavilion"
    ],
    "correctAnswer": "A tennis club",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 1 Episode 2",
      "Storyline: Tennis Club Mystery Woman",
      "Correct fact: A tennis club",
      "Character incident: Tennis Club Mystery Woman",
      "Episode subject: Tennis Club Mystery Woman",
      "Plot detail: Tennis Club Mystery Woman",
      "Episode or period: Series 1 Episode 2",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39799",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, whose daughter secretly becomes romantically involved with Jacko in the first series?",
    "answers": [
      "Elmo Putney's",
      "Eric's",
      "Sandra's",
      "Lionel Bainbridge's"
    ],
    "correctAnswer": "Lionel Bainbridge's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 1 Episode 3",
      "Storyline: Jacko Dates Employer Daughter",
      "Correct fact: Lionel Bainbridge's",
      "Character incident: Jacko Dates Employer Daughter",
      "Episode subject: Jacko Dates Employer Daughter",
      "Plot detail: Jacko Dates Employer Daughter",
      "Episode or period: Series 1 Episode 3",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39800",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, which colleague's date with Jacko ends badly while his interest in Lesley causes further complications?",
    "answers": [
      "Sandra",
      "Jean",
      "Veronica",
      "Gaynor"
    ],
    "correctAnswer": "Sandra",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 1 Episode 4",
      "Storyline: Sandra Date Goes Badly",
      "Correct fact: Sandra",
      "Character incident: Sandra Date Goes Badly",
      "Episode subject: Sandra Date Goes Badly",
      "Plot detail: Sandra Date Goes Badly",
      "Episode or period: Series 1 Episode 4",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39801",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, which country is Lesley sent to when Lionel tries to separate her from Jacko?",
    "answers": [
      "Canada",
      "The United States",
      "Italy",
      "Australia"
    ],
    "correctAnswer": "The United States",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 1 Episode 6",
      "Storyline: Lesley Sent To America",
      "Correct fact: The United States",
      "Character incident: Lesley Sent To America",
      "Episode subject: Lesley Sent To America",
      "Plot detail: Lesley Sent To America",
      "Episode or period: Series 1 Episode 6",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39802",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, where has Jacko been staying before returning to work in the sixth episode?",
    "answers": [
      "Prison",
      "A monastery",
      "Hospital",
      "A seaside hotel"
    ],
    "correctAnswer": "Hospital",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 1 Episode 6",
      "Storyline: Jacko Returns From Hospital",
      "Correct fact: Hospital",
      "Character incident: Jacko Returns From Hospital",
      "Episode subject: Jacko Returns From Hospital",
      "Plot detail: Jacko Returns From Hospital",
      "Episode or period: Series 1 Episode 6",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39803",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, whose apparent romantic overtures make Jacko nervous while Lesley continues pursuing him?",
    "answers": [
      "Jean's",
      "Sandra's",
      "Celia's",
      "Veronica Bainbridge's"
    ],
    "correctAnswer": "Veronica Bainbridge's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 1 Episode 7",
      "Storyline: Veronica Ambiguous Overtures",
      "Correct fact: Veronica Bainbridge's",
      "Character incident: Veronica Ambiguous Overtures",
      "Episode subject: Veronica Ambiguous Overtures",
      "Plot detail: Veronica Ambiguous Overtures",
      "Episode or period: Series 1 Episode 7",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39804",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, who has a serious falling-out with Lionel and turns to Jacko for comfort?",
    "answers": [
      "Veronica",
      "Sandra",
      "Lesley",
      "Jean"
    ],
    "correctAnswer": "Veronica",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 1 Episode 8",
      "Storyline: Veronica Quarrels With Lionel",
      "Correct fact: Veronica",
      "Character incident: Veronica Quarrels With Lionel",
      "Episode subject: Veronica Quarrels With Lionel",
      "Plot detail: Veronica Quarrels With Lionel",
      "Episode or period: Series 1 Episode 8",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39805",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, what does Jacko do when runaway novice Celia moves into his flat?",
    "answers": [
      "He proposes marriage",
      "He moves out himself",
      "He tells Lionel to employ her",
      "He opens a second decorating shop"
    ],
    "correctAnswer": "He moves out himself",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 1 Episode 9",
      "Storyline: Jacko Flees Celia Flatmate",
      "Correct fact: He moves out himself",
      "Character incident: Jacko Flees Celia Flatmate",
      "Episode subject: Jacko Flees Celia Flatmate",
      "Plot detail: Jacko Flees Celia Flatmate",
      "Episode or period: Series 1 Episode 9",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39806",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, what is the name of the woman Jacko meets while developing other interests?",
    "answers": [
      "Lucia",
      "Paulette",
      "Linda",
      "Carmen"
    ],
    "correctAnswer": "Linda",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 1 Episode 10",
      "Storyline: Jacko Meets Linda",
      "Correct fact: Linda",
      "Character incident: Jacko Meets Linda",
      "Episode subject: Jacko Meets Linda",
      "Plot detail: Jacko Meets Linda",
      "Episode or period: Series 1 Episode 10",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39807",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, what is the occupation of Jacko's new girlfriend Gaynor?",
    "answers": [
      "Nurse",
      "Journalist",
      "Teacher",
      "Air stewardess"
    ],
    "correctAnswer": "Air stewardess",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 1 Episode 11",
      "Storyline: Gaynor Airline Job",
      "Correct fact: Air stewardess",
      "Character incident: Gaynor Airline Job",
      "Episode subject: Gaynor Airline Job",
      "Plot detail: Gaynor Airline Job",
      "Episode or period: Series 1 Episode 11",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39808",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, whose new boyfriend has a dubious past known to Jacko?",
    "answers": [
      "Sandra's",
      "Lesley's",
      "Jean's",
      "Veronica's"
    ],
    "correctAnswer": "Sandra's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 1 Episode 12",
      "Storyline: Sandra New Boyfriend Trouble",
      "Correct fact: Sandra's",
      "Character incident: Sandra New Boyfriend Trouble",
      "Episode subject: Sandra New Boyfriend Trouble",
      "Plot detail: Sandra New Boyfriend Trouble",
      "Episode or period: Series 1 Episode 12",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39809",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, who finally returns to Lionel's home after the couple's separation?",
    "answers": [
      "Lesley",
      "Veronica",
      "Sandra",
      "Celia"
    ],
    "correctAnswer": "Veronica",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 1 Episode 13",
      "Storyline: Veronica Returns Home",
      "Correct fact: Veronica",
      "Character incident: Veronica Returns Home",
      "Episode subject: Veronica Returns Home",
      "Plot detail: Veronica Returns Home",
      "Episode or period: Series 1 Episode 13",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39810",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, who is unhappy when Lionel and Veronica reunite?",
    "answers": [
      "Elmo",
      "Eric",
      "Lesley",
      "Sandra"
    ],
    "correctAnswer": "Lesley",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 2 Episode 1",
      "Storyline: Lesley Dislikes Parents Reconciliation",
      "Correct fact: Lesley",
      "Character incident: Lesley Dislikes Parents Reconciliation",
      "Episode subject: Lesley Dislikes Parents Reconciliation",
      "Plot detail: Lesley Dislikes Parents Reconciliation",
      "Episode or period: Series 2 Episode 1",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39811",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, what colour hair does the woman have whom Jacko takes to a party, upsetting Sandra?",
    "answers": [
      "Blonde",
      "Black",
      "Silver",
      "Red"
    ],
    "correctAnswer": "Red",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 2 Episode 2",
      "Storyline: Sandra Jealous Of Redhead",
      "Correct fact: Red",
      "Character incident: Sandra Jealous Of Redhead",
      "Episode subject: Sandra Jealous Of Redhead",
      "Plot detail: Sandra Jealous Of Redhead",
      "Episode or period: Series 2 Episode 2",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39812",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, who recruits Jacko for an unusual secret painting assignment?",
    "answers": [
      "Lionel",
      "Elmo",
      "Lesley",
      "Jean"
    ],
    "correctAnswer": "Lionel",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 2 Episode 3",
      "Storyline: Secret Decorating Job For Lionel",
      "Correct fact: Lionel",
      "Character incident: Secret Decorating Job For Lionel",
      "Episode subject: Secret Decorating Job For Lionel",
      "Plot detail: Secret Decorating Job For Lionel",
      "Episode or period: Series 2 Episode 3",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39813",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, where has Jacko's old friend been living before returning with a new outlook on life?",
    "answers": [
      "New Zealand",
      "Canada",
      "France",
      "The Netherlands"
    ],
    "correctAnswer": "Canada",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 2 Episode 4",
      "Storyline: Returned Friend From Canada",
      "Correct fact: Canada",
      "Character incident: Returned Friend From Canada",
      "Episode subject: Returned Friend From Canada",
      "Plot detail: Returned Friend From Canada",
      "Episode or period: Series 2 Episode 4",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39814",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, what does Lionel advertise when he believes Sandra is leaving his business?",
    "answers": [
      "A new decorating shop",
      "A company car",
      "A replacement secretary",
      "An apprenticeship"
    ],
    "correctAnswer": "A replacement secretary",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 2 Episode 6",
      "Storyline: Lionel Advertises Secretary Vacancy",
      "Correct fact: A replacement secretary",
      "Character incident: Lionel Advertises Secretary Vacancy",
      "Episode subject: Lionel Advertises Secretary Vacancy",
      "Plot detail: Lionel Advertises Secretary Vacancy",
      "Episode or period: Series 2 Episode 6",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39815",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, whose unsuccessful job prompts Lionel to interfere in her affairs?",
    "answers": [
      "Sandra's",
      "Veronica's",
      "Jean's",
      "Lesley's"
    ],
    "correctAnswer": "Lesley's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 2 Episode 7",
      "Storyline: Lionel Interferes With Lesley Job",
      "Correct fact: Lesley's",
      "Character incident: Lionel Interferes With Lesley Job",
      "Episode subject: Lionel Interferes With Lesley Job",
      "Plot detail: Lionel Interferes With Lesley Job",
      "Episode or period: Series 2 Episode 7",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39816",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, what Caribbean island do Jacko and Sandra travel to for an unconventional honeymoon?",
    "answers": [
      "Barbados",
      "Jamaica",
      "St Lucia",
      "Antigua"
    ],
    "correctAnswer": "Barbados",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 3 Episode 2",
      "Storyline: Jacko Sandra Barbados Trip",
      "Correct fact: Barbados",
      "Character incident: Jacko Sandra Barbados Trip",
      "Episode subject: Jacko Sandra Barbados Trip",
      "Plot detail: Jacko Sandra Barbados Trip",
      "Episode or period: Series 3 Episode 2",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39817",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, how does Lionel react to Jacko and Sandra jointly cancelling their wedding?",
    "answers": [
      "He celebrates with Elmo",
      "He blames Jacko",
      "He thanks Jacko",
      "He offers to fund their honeymoon"
    ],
    "correctAnswer": "He blames Jacko",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 3 Episode 3",
      "Storyline: Lionel Blames Jacko Breakup",
      "Correct fact: He blames Jacko",
      "Character incident: Lionel Blames Jacko Breakup",
      "Episode subject: Lionel Blames Jacko Breakup",
      "Plot detail: Lionel Blames Jacko Breakup",
      "Episode or period: Series 3 Episode 3",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39818",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, whose employees begin deserting his firm for Jacko's new decorating business?",
    "answers": [
      "Elmo's",
      "Eric's",
      "Lionel's",
      "Sandra's"
    ],
    "correctAnswer": "Lionel's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 3 Episode 5",
      "Storyline: Bainbridges Staff Defect To Jacko",
      "Correct fact: Lionel's",
      "Character incident: Bainbridges Staff Defect To Jacko",
      "Episode subject: Bainbridges Staff Defect To Jacko",
      "Plot detail: Bainbridges Staff Defect To Jacko",
      "Episode or period: Series 3 Episode 5",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39819",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, who tries to take action when Lionel becomes obsessed with Jacko's competing business?",
    "answers": [
      "Sandra",
      "Lesley",
      "Jean",
      "Veronica"
    ],
    "correctAnswer": "Veronica",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 3 Episode 6",
      "Storyline: Veronica Tackles Lionels Paranoia",
      "Correct fact: Veronica",
      "Character incident: Veronica Tackles Lionels Paranoia",
      "Episode subject: Veronica Tackles Lionels Paranoia",
      "Plot detail: Veronica Tackles Lionels Paranoia",
      "Episode or period: Series 3 Episode 6",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39820",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, which former employer takes Jacko back on as he also runs into legal trouble?",
    "answers": [
      "Veronica Bainbridge",
      "Elmo Putney",
      "Lesley Bainbridge",
      "Sandra"
    ],
    "correctAnswer": "Veronica Bainbridge",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 4 Episode 2",
      "Storyline: Jacko Returns To Veronica Business",
      "Correct fact: Veronica Bainbridge",
      "Character incident: Jacko Returns To Veronica Business",
      "Episode subject: Jacko Returns To Veronica Business",
      "Plot detail: Jacko Returns To Veronica Business",
      "Episode or period: Series 4 Episode 2",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39821",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, what type of establishment is Elmo opening when Jacko and Eric first make an Italian connection?",
    "answers": [
      "A sandwich shop",
      "A wine bar",
      "A theatre",
      "A nightclub"
    ],
    "correctAnswer": "A wine bar",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 4 Episode 3",
      "Storyline: Elmo New Wine Bar",
      "Correct fact: A wine bar",
      "Character incident: Elmo New Wine Bar",
      "Episode subject: Elmo New Wine Bar",
      "Plot detail: Elmo New Wine Bar",
      "Episode or period: Series 4 Episode 3",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39822",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, what does Jacko have to endure when visiting Lucia's family home?",
    "answers": [
      "An opera audition",
      "A full Italian cookery class",
      "Hundreds of family photographs",
      "A long church service"
    ],
    "correctAnswer": "Hundreds of family photographs",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 4 Episode 4",
      "Storyline: Lucia Endless Family Photos",
      "Correct fact: Hundreds of family photographs",
      "Character incident: Lucia Endless Family Photos",
      "Episode subject: Lucia Endless Family Photos",
      "Plot detail: Lucia Endless Family Photos",
      "Episode or period: Series 4 Episode 4",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39823",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, where does Lesley find employment as Jacko continues dating Lucia?",
    "answers": [
      "A local school",
      "A travel agency",
      "A record shop",
      "A wine bar"
    ],
    "correctAnswer": "A wine bar",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 4 Episode 5",
      "Storyline: Lesley Job In Wine Bar",
      "Correct fact: A wine bar",
      "Character incident: Lesley Job In Wine Bar",
      "Episode subject: Lesley Job In Wine Bar",
      "Plot detail: Lesley Job In Wine Bar",
      "Episode or period: Series 4 Episode 5",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39824",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, which country's way of life does Jacko decide does not suit him?",
    "answers": [
      "Italy",
      "France",
      "Spain",
      "Greece"
    ],
    "correctAnswer": "Italy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 5 Episode 1",
      "Storyline: Jacko Rejects Italian Life",
      "Correct fact: Italy",
      "Character incident: Jacko Rejects Italian Life",
      "Episode subject: Jacko Rejects Italian Life",
      "Plot detail: Jacko Rejects Italian Life",
      "Episode or period: Series 5 Episode 1",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39825",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, what expensive property does Paulette pressure Elmo to buy?",
    "answers": [
      "A seaside cottage",
      "A country mansion",
      "A city-centre flat",
      "A converted barn"
    ],
    "correctAnswer": "A country mansion",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 5 Episode 2",
      "Storyline: Paulette Seeks Mansion",
      "Correct fact: A country mansion",
      "Character incident: Paulette Seeks Mansion",
      "Episode subject: Paulette Seeks Mansion",
      "Plot detail: Paulette Seeks Mansion",
      "Episode or period: Series 5 Episode 2",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39826",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, what sport rekindles Jacko's interest, much to Eric and Jean's amusement?",
    "answers": [
      "Cricket",
      "Golf",
      "Football",
      "Rugby"
    ],
    "correctAnswer": "Football",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 5 Episode 4",
      "Storyline: Jacko Football Enthusiasm Returns",
      "Correct fact: Football",
      "Character incident: Jacko Football Enthusiasm Returns",
      "Episode subject: Jacko Football Enthusiasm Returns",
      "Plot detail: Jacko Football Enthusiasm Returns",
      "Episode or period: Series 5 Episode 4",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39827",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, which two things does Jacko lose before Elmo offers him accommodation above the wine bar?",
    "answers": [
      "His car and driving licence",
      "His business and his passport",
      "His television and savings",
      "His home and his job"
    ],
    "correctAnswer": "His home and his job",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 5 Episode 6",
      "Storyline: Jacko Loses Home And Job",
      "Correct fact: His home and his job",
      "Character incident: Jacko Loses Home And Job",
      "Episode subject: Jacko Loses Home And Job",
      "Plot detail: Jacko Loses Home And Job",
      "Episode or period: Series 5 Episode 6",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39828",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, who accompanies Jacko to a nightclub after both men need cheering up?",
    "answers": [
      "Elmo",
      "Lionel",
      "Eric",
      "Sandra"
    ],
    "correctAnswer": "Elmo",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 5 Episode 7",
      "Storyline: Jacko Elmo Nightclub Outing",
      "Correct fact: Elmo",
      "Character incident: Jacko Elmo Nightclub Outing",
      "Episode subject: Jacko Elmo Nightclub Outing",
      "Plot detail: Jacko Elmo Nightclub Outing",
      "Episode or period: Series 5 Episode 7",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39829",
    "category": "Television",
    "programme": "Brush Strokes",
    "question": "In Brush Strokes, which Italian island does Veronica plan to visit with Marcello in the finale?",
    "answers": [
      "Sardinia",
      "Sicily",
      "Capri",
      "Elba"
    ],
    "correctAnswer": "Sicily",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Brush Strokes",
      "Programme: Brush Strokes",
      "BBC One",
      "1986-1991",
      "Episode: Series 5 Episode 8",
      "Storyline: Veronica Marcello Sicily Departure",
      "Correct fact: Sicily",
      "Character incident: Veronica Marcello Sicily Departure",
      "Episode subject: Veronica Marcello Sicily Departure",
      "Plot detail: Veronica Marcello Sicily Departure",
      "Episode or period: Series 5 Episode 8",
      "Jacko and Bainbridge's"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39830",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, who is revealed to be expecting a baby with Zoë's unfaithful husband Kevin?",
    "answers": [
      "Zoë's sister",
      "Miss Flood",
      "His mistress",
      "Alec's daughter"
    ],
    "correctAnswer": "His mistress",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S1E1 It Never Entered My Mind",
      "Storyline: Kevin Pregnant Mistress",
      "Correct fact: His mistress",
      "Character incident: Kevin Pregnant Mistress",
      "Episode subject: Kevin Pregnant Mistress",
      "Plot detail: Kevin Pregnant Mistress",
      "Episode or period: S1E1 It Never Entered My Mind",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39831",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, what earlier tragedy explains why Alec Callender understands bereavement?",
    "answers": [
      "His son died in a road accident",
      "His brother died at sea",
      "His parents died together",
      "His wife died after a long illness"
    ],
    "correctAnswer": "His wife died after a long illness",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S1E1 It Never Entered My Mind",
      "Storyline: Alec Widowed After Wife Illness",
      "Correct fact: His wife died after a long illness",
      "Character incident: Alec Widowed After Wife Illness",
      "Episode subject: Alec Widowed After Wife Illness",
      "Plot detail: Alec Widowed After Wife Illness",
      "Episode or period: S1E1 It Never Entered My Mind",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39832",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, which kind of show does Alec invite Zoë to see after their awkward family encounters?",
    "answers": [
      "A musical based on A Midsummer Night's Dream",
      "An opera about Oliver Twist",
      "A ballet of Romeo and Juliet",
      "A pantomime of Cinderella"
    ],
    "correctAnswer": "A musical based on A Midsummer Night's Dream",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S1E2 Fools Rush In",
      "Storyline: Alec Invites Zoe Shakespeare Musical",
      "Correct fact: A musical based on A Midsummer Night's Dream",
      "Character incident: Alec Invites Zoe Shakespeare Musical",
      "Episode subject: Alec Invites Zoe Shakespeare Musical",
      "Plot detail: Alec Invites Zoe Shakespeare Musical",
      "Episode or period: S1E2 Fools Rush In",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39833",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, whom does Simone invite to Sunday lunch hoping to pair her with her widowed father?",
    "answers": [
      "Miss Flood",
      "Mrs Dawlish",
      "Zoë's mother",
      "Hilary"
    ],
    "correctAnswer": "Mrs Dawlish",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S1E2 Fools Rush In",
      "Storyline: Simone Tries Matchmaking Widow",
      "Correct fact: Mrs Dawlish",
      "Character incident: Simone Tries Matchmaking Widow",
      "Episode subject: Simone Tries Matchmaking Widow",
      "Plot detail: Simone Tries Matchmaking Widow",
      "Episode or period: S1E2 Fools Rush In",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39834",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, who accompanies Alec to the theatre when Zoë sprains her ankle and cannot go?",
    "answers": [
      "Simone",
      "Hilary",
      "Miss Flood",
      "Debbie"
    ],
    "correctAnswer": "Miss Flood",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S1E3 Send In The Clowns",
      "Storyline: Alec Goes Theatre With Vera",
      "Correct fact: Miss Flood",
      "Character incident: Alec Goes Theatre With Vera",
      "Episode subject: Alec Goes Theatre With Vera",
      "Plot detail: Alec Goes Theatre With Vera",
      "Episode or period: S1E3 Send In The Clowns",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39835",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, what theatrical animal costume does Alec put on to amuse Zoë?",
    "answers": [
      "A lion's mask",
      "A stag's antlers",
      "A horse's tail",
      "An ass's head"
    ],
    "correctAnswer": "An ass's head",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S1E3 Send In The Clowns",
      "Storyline: Alec Wears Ass Head",
      "Correct fact: An ass's head",
      "Character incident: Alec Wears Ass Head",
      "Episode subject: Alec Wears Ass Head",
      "Plot detail: Alec Wears Ass Head",
      "Episode or period: S1E3 Send In The Clowns",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39836",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, which game does Alec take up to seem more athletic for Zoë?",
    "answers": [
      "Squash",
      "Badminton",
      "Tennis",
      "Basketball"
    ],
    "correctAnswer": "Squash",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S1E4 Anything You Can Do",
      "Storyline: Alec Tries Squash To Impress Zoe",
      "Correct fact: Squash",
      "Character incident: Alec Tries Squash To Impress Zoe",
      "Episode subject: Alec Tries Squash To Impress Zoe",
      "Plot detail: Alec Tries Squash To Impress Zoe",
      "Episode or period: S1E4 Anything You Can Do",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39837",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, whom does Simone mistakenly believe Zoë is dating at Alec's birthday tea?",
    "answers": [
      "Roy",
      "Jamie",
      "Miles",
      "Gerald"
    ],
    "correctAnswer": "Jamie",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S1E5 They Didn't Believe Me",
      "Storyline: Simone Assumes Zoe Dates Jamie",
      "Correct fact: Jamie",
      "Character incident: Simone Assumes Zoe Dates Jamie",
      "Episode subject: Simone Assumes Zoe Dates Jamie",
      "Plot detail: Simone Assumes Zoe Dates Jamie",
      "Episode or period: S1E5 They Didn't Believe Me",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39838",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, which birthday is Alec celebrating when Zoë first meets his family?",
    "answers": [
      "His fortieth",
      "His sixtieth",
      "His fifty-fourth",
      "His forty-fifth"
    ],
    "correctAnswer": "His fifty-fourth",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S1E5 They Didn't Believe Me",
      "Storyline: Alec Fifty Fourth Birthday",
      "Correct fact: His fifty-fourth",
      "Character incident: Alec Fifty Fourth Birthday",
      "Episode subject: Alec Fifty Fourth Birthday",
      "Plot detail: Alec Fifty Fourth Birthday",
      "Episode or period: S1E5 They Didn't Believe Me",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39839",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, where do Alec and Zoë spend the night instead of staying at the hotel Alec loses confidence about?",
    "answers": [
      "A railway station",
      "A roadside motel",
      "Jamie's flat",
      "An all-night cinema"
    ],
    "correctAnswer": "An all-night cinema",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S1E6 There's A Small Hotel",
      "Storyline: Alec Zoe End Up At All Night Cinema",
      "Correct fact: An all-night cinema",
      "Character incident: Alec Zoe End Up At All Night Cinema",
      "Episode subject: Alec Zoe End Up At All Night Cinema",
      "Plot detail: Alec Zoe End Up At All Night Cinema",
      "Episode or period: S1E6 There's A Small Hotel",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39840",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, what kind of property does Miles Henty offer to lend Hilary and her boyfriend?",
    "answers": [
      "A country cottage",
      "A seaside hotel",
      "A London townhouse",
      "A holiday caravan"
    ],
    "correctAnswer": "A country cottage",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S1E6 There's A Small Hotel",
      "Storyline: Miles Offers Country Cottage",
      "Correct fact: A country cottage",
      "Character incident: Miles Offers Country Cottage",
      "Episode subject: Miles Offers Country Cottage",
      "Plot detail: Miles Offers Country Cottage",
      "Episode or period: S1E6 There's A Small Hotel",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39841",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, which document's arrival causes Alec to visit Zoë expecting to celebrate her divorce?",
    "answers": [
      "A marriage certificate",
      "A decree nisi",
      "A passport",
      "An adoption order"
    ],
    "correctAnswer": "A decree nisi",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S2E1 What Kind Of Fool Am I",
      "Storyline: Zoe Decree Nisi Arrives",
      "Correct fact: A decree nisi",
      "Character incident: Zoe Decree Nisi Arrives",
      "Episode subject: Zoe Decree Nisi Arrives",
      "Plot detail: Zoe Decree Nisi Arrives",
      "Episode or period: S2E1 What Kind Of Fool Am I",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39842",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, with what sort of tradesman has Miles Henty's wife Annabel run away?",
    "answers": [
      "An electrician",
      "A painter",
      "A stonemason",
      "A plumber"
    ],
    "correctAnswer": "A stonemason",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S2E1 What Kind Of Fool Am I",
      "Storyline: Miles Wife Runs Away With Stonemason",
      "Correct fact: A stonemason",
      "Character incident: Miles Wife Runs Away With Stonemason",
      "Episode subject: Miles Wife Runs Away With Stonemason",
      "Plot detail: Miles Wife Runs Away With Stonemason",
      "Episode or period: S2E1 What Kind Of Fool Am I",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39843",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, why does Zoë regret introducing Alec to her parents?",
    "answers": [
      "He argues with her father about money",
      "He announces their engagement",
      "He refuses to speak at dinner",
      "He seems closer to their generation than hers"
    ],
    "correctAnswer": "He seems closer to their generation than hers",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S2E2 I Remember It Well",
      "Storyline: Alec Too Comfortable With Zoe Parents",
      "Correct fact: He seems closer to their generation than hers",
      "Character incident: Alec Too Comfortable With Zoe Parents",
      "Episode subject: Alec Too Comfortable With Zoe Parents",
      "Plot detail: Alec Too Comfortable With Zoe Parents",
      "Episode or period: S2E2 I Remember It Well",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39844",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, what practical skill does Alec attempt to teach Zoë, with frustrating results?",
    "answers": [
      "Driving",
      "Cooking",
      "Typing",
      "Swimming"
    ],
    "correctAnswer": "Driving",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S2E3 You're Driving Me Crazy",
      "Storyline: Alec Teaches Zoe To Drive",
      "Correct fact: Driving",
      "Character incident: Alec Teaches Zoe To Drive",
      "Episode subject: Alec Teaches Zoe To Drive",
      "Plot detail: Alec Teaches Zoe To Drive",
      "Episode or period: S2E3 You're Driving Me Crazy",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39845",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, what illegal activity does Alec mistakenly suspect Miss Flood of in Time After Time?",
    "answers": [
      "Forging wills",
      "Drug dealing",
      "Tax evasion",
      "Stolen car sales"
    ],
    "correctAnswer": "Drug dealing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S2E4 Time After Time",
      "Storyline: Alec Misjudges Vera As Drug Dealer",
      "Correct fact: Drug dealing",
      "Character incident: Alec Misjudges Vera As Drug Dealer",
      "Episode subject: Alec Misjudges Vera As Drug Dealer",
      "Plot detail: Alec Misjudges Vera As Drug Dealer",
      "Episode or period: S2E4 Time After Time",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39846",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, who moves in with Miss Flood after quarrelling with her parents?",
    "answers": [
      "Debbie",
      "Simone",
      "Hilary",
      "Zoë"
    ],
    "correctAnswer": "Hilary",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S2E5 There's A Place For Us",
      "Storyline: Hilary Moves In With Vera",
      "Correct fact: Hilary",
      "Character incident: Hilary Moves In With Vera",
      "Episode subject: Hilary Moves In With Vera",
      "Plot detail: Hilary Moves In With Vera",
      "Episode or period: S2E5 There's A Place For Us",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39847",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, whom does Alec envy when Zoë befriends a new teacher from abroad?",
    "answers": [
      "A French chef",
      "An Australian athlete",
      "A German musician",
      "An American teacher"
    ],
    "correctAnswer": "An American teacher",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S2E6 No Other Love",
      "Storyline: Alec Jealous Of American Teacher",
      "Correct fact: An American teacher",
      "Character incident: Alec Jealous Of American Teacher",
      "Episode subject: Alec Jealous Of American Teacher",
      "Plot detail: Alec Jealous Of American Teacher",
      "Episode or period: S2E6 No Other Love",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39848",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, who arranges a Valentine's dinner to try to bring separated Alec and Zoë back together?",
    "answers": [
      "Hilary",
      "Jamie",
      "Simone",
      "Miss Flood"
    ],
    "correctAnswer": "Hilary",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S2E7 My Funny Valentine",
      "Storyline: Hilary Arranges Valentine Reconciliation",
      "Correct fact: Hilary",
      "Character incident: Hilary Arranges Valentine Reconciliation",
      "Episode subject: Hilary Arranges Valentine Reconciliation",
      "Plot detail: Hilary Arranges Valentine Reconciliation",
      "Episode or period: S2E7 My Funny Valentine",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39849",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December's Christmas special, what series of crimes gives Alec the large case he has long wanted?",
    "answers": [
      "Theft of paintings from museums",
      "Burglaries at local solicitors' offices",
      "A string of bank robberies",
      "Fraud involving railway tickets"
    ],
    "correctAnswer": "Burglaries at local solicitors' offices",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: 1990 Christmas I'll See You In My Dreams",
      "Storyline: Alec Investigates Solicitor Break Ins",
      "Correct fact: Burglaries at local solicitors' offices",
      "Character incident: Alec Investigates Solicitor Break Ins",
      "Episode subject: Alec Investigates Solicitor Break Ins",
      "Plot detail: Alec Investigates Solicitor Break Ins",
      "Episode or period: 1990 Christmas I'll See You In My Dreams",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39850",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, what does Alec propose to Zoë after they have been together for a year?",
    "answers": [
      "Moving abroad",
      "Starting a business",
      "Marriage",
      "Buying a holiday cottage"
    ],
    "correctAnswer": "Marriage",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S3E1 That'll Be The Day",
      "Storyline: Alec Proposes Marriage After Year Together",
      "Correct fact: Marriage",
      "Character incident: Alec Proposes Marriage After Year Together",
      "Episode subject: Alec Proposes Marriage After Year Together",
      "Plot detail: Alec Proposes Marriage After Year Together",
      "Episode or period: S3E1 That'll Be The Day",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39851",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, whose death does Miss Flood mark by buying flowers in That'll Be The Day?",
    "answers": [
      "Elvis Presley's",
      "John Lennon's",
      "Frank Sinatra's",
      "Buddy Holly's"
    ],
    "correctAnswer": "Buddy Holly's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S3E1 That'll Be The Day",
      "Storyline: Vera Commemorates Buddy Holly",
      "Correct fact: Buddy Holly's",
      "Character incident: Vera Commemorates Buddy Holly",
      "Episode subject: Vera Commemorates Buddy Holly",
      "Plot detail: Vera Commemorates Buddy Holly",
      "Episode or period: S3E1 That'll Be The Day",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39852",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, who temporarily runs Alec's office when Miss Flood goes to care for her mother?",
    "answers": [
      "Hilary",
      "Jamie",
      "Simone",
      "Zoë"
    ],
    "correctAnswer": "Hilary",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S3E2 The Look Of Love",
      "Storyline: Hilary Runs Office During Vera Absence",
      "Correct fact: Hilary",
      "Character incident: Hilary Runs Office During Vera Absence",
      "Episode subject: Hilary Runs Office During Vera Absence",
      "Plot detail: Hilary Runs Office During Vera Absence",
      "Episode or period: S3E2 The Look Of Love",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39853",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, what type of tradesman gives Alec and Zoë trouble after they buy a house?",
    "answers": [
      "A roofer who refuses to quote",
      "A cowboy builder",
      "A landscape gardener",
      "A locksmith"
    ],
    "correctAnswer": "A cowboy builder",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S3E3 Too Close For Comfort",
      "Storyline: Cowboy Builder During House Move",
      "Correct fact: A cowboy builder",
      "Character incident: Cowboy Builder During House Move",
      "Episode subject: Cowboy Builder During House Move",
      "Plot detail: Cowboy Builder During House Move",
      "Episode or period: S3E3 Too Close For Comfort",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39854",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, which younger relative of Miss Flood arrives and distracts Hilary in It's All In The Game?",
    "answers": [
      "Her son Peter",
      "Her grandson Jamie",
      "Her nephew Anthony",
      "Her cousin Kevin"
    ],
    "correctAnswer": "Her nephew Anthony",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S3E4 It's All In The Game",
      "Storyline: Vera Nephew Anthony Arrives",
      "Correct fact: Her nephew Anthony",
      "Character incident: Vera Nephew Anthony Arrives",
      "Episode subject: Vera Nephew Anthony Arrives",
      "Plot detail: Vera Nephew Anthony Arrives",
      "Episode or period: S3E4 It's All In The Game",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39855",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, whose approaching visit makes Zoë worry about comparisons with Alec's late wife?",
    "answers": [
      "His American cousin",
      "His sister-in-law from Wales",
      "His former colleague from Oxford",
      "His French brother-in-law"
    ],
    "correctAnswer": "His French brother-in-law",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S3E5 The Way You Look Tonight",
      "Storyline: French Brother In Law Visit",
      "Correct fact: His French brother-in-law",
      "Character incident: French Brother In Law Visit",
      "Episode subject: French Brother In Law Visit",
      "Plot detail: French Brother In Law Visit",
      "Episode or period: S3E5 The Way You Look Tonight",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39856",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, which hospital event makes Alec understand why Jamie's office work has been poor?",
    "answers": [
      "Jamie's operation",
      "Alec's routine check-up",
      "A car crash involving Zoë",
      "Simone's premature delivery"
    ],
    "correctAnswer": "Jamie's operation",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S3E6 Feelings",
      "Storyline: Jamie Medical Operation Reveals Cause",
      "Correct fact: Jamie's operation",
      "Character incident: Jamie Medical Operation Reveals Cause",
      "Episode subject: Jamie Medical Operation Reveals Cause",
      "Plot detail: Jamie Medical Operation Reveals Cause",
      "Episode or period: S3E6 Feelings",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39857",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, which relative admits to himself that he has developed feelings for Zoë while staying with the couple?",
    "answers": [
      "Miles",
      "Jamie",
      "Gerald",
      "Roy"
    ],
    "correctAnswer": "Jamie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S3E7 I Guess I'll Have To Change My Plans",
      "Storyline: Jamie Falls For Zoe",
      "Correct fact: Jamie",
      "Character incident: Jamie Falls For Zoe",
      "Episode subject: Jamie Falls For Zoe",
      "Plot detail: Jamie Falls For Zoe",
      "Episode or period: S3E7 I Guess I'll Have To Change My Plans",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39858",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, who announces a pregnancy shortly after Alec and Zoë return from honeymoon?",
    "answers": [
      "Hilary",
      "Debbie",
      "Simone",
      "Miss Flood"
    ],
    "correctAnswer": "Simone",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S4E1 This Could Be The Start Of Something Big",
      "Storyline: Simone Pregnant When Couple Return",
      "Correct fact: Simone",
      "Character incident: Simone Pregnant When Couple Return",
      "Episode subject: Simone Pregnant When Couple Return",
      "Plot detail: Simone Pregnant When Couple Return",
      "Episode or period: S4E1 This Could Be The Start Of Something Big",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39859",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, what nationality is Clothilde, the new au pair who attracts Jamie's interest?",
    "answers": [
      "Italian",
      "Spanish",
      "German",
      "French"
    ],
    "correctAnswer": "French",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S4E2 Just Like A Woman",
      "Storyline: Clothilde French Au Pair",
      "Correct fact: French",
      "Character incident: Clothilde French Au Pair",
      "Episode subject: Clothilde French Au Pair",
      "Plot detail: Clothilde French Au Pair",
      "Episode or period: S4E2 Just Like A Woman",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39860",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, whom does Miss Flood nervously prepare to meet as her relationship with Gerald develops?",
    "answers": [
      "His grown-up daughters",
      "His parents",
      "His former business partner",
      "His godson"
    ],
    "correctAnswer": "His grown-up daughters",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S4E3 I'm Old Fashioned",
      "Storyline: Vera Prepares To Meet Gerald Daughters",
      "Correct fact: His grown-up daughters",
      "Character incident: Vera Prepares To Meet Gerald Daughters",
      "Episode subject: Vera Prepares To Meet Gerald Daughters",
      "Plot detail: Vera Prepares To Meet Gerald Daughters",
      "Episode or period: S4E3 I'm Old Fashioned",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39861",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, what stray animal is welcomed into Alec and Zoë's home after their miscarriage?",
    "answers": [
      "A cat",
      "A dog",
      "A parrot",
      "A rabbit"
    ],
    "correctAnswer": "A dog",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S4E5 The Crying Game",
      "Storyline: Stray Dog Finds Home With Callenders",
      "Correct fact: A dog",
      "Character incident: Stray Dog Finds Home With Callenders",
      "Episode subject: Stray Dog Finds Home With Callenders",
      "Plot detail: Stray Dog Finds Home With Callenders",
      "Episode or period: S4E5 The Crying Game",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39862",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, which couple reconcile as Miss Flood prepares for her wedding?",
    "answers": [
      "Simone and Jamie",
      "Roy and Debbie",
      "Hilary and Derek",
      "Zoë and Kevin"
    ],
    "correctAnswer": "Hilary and Derek",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S4E6 Catch The Bouquet",
      "Storyline: Hilary Derek Reunite",
      "Correct fact: Hilary and Derek",
      "Character incident: Hilary Derek Reunite",
      "Episode subject: Hilary Derek Reunite",
      "Plot detail: Hilary Derek Reunite",
      "Episode or period: S4E6 Catch The Bouquet",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39863",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, who decides to start a business while Miss Flood is preparing to marry?",
    "answers": [
      "Hilary",
      "Simone",
      "Zoë",
      "Debbie"
    ],
    "correctAnswer": "Debbie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S4E6 Catch The Bouquet",
      "Storyline: Debbie Starts Own Business",
      "Correct fact: Debbie",
      "Character incident: Debbie Starts Own Business",
      "Episode subject: Debbie Starts Own Business",
      "Plot detail: Debbie Starts Own Business",
      "Episode or period: S4E6 Catch The Bouquet",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39864",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, what extended leave does Alec take after baby Fleur's birth, to Zoë's frustration?",
    "answers": [
      "Paternity leave",
      "Unpaid study leave",
      "A sabbatical abroad",
      "Medical leave"
    ],
    "correctAnswer": "Paternity leave",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S5E2 Baby Love",
      "Storyline: Alec Extended Paternity Leave",
      "Correct fact: Paternity leave",
      "Character incident: Alec Extended Paternity Leave",
      "Episode subject: Alec Extended Paternity Leave",
      "Plot detail: Alec Extended Paternity Leave",
      "Episode or period: S5E2 Baby Love",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39865",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, which other man is Debbie seeing when Roy Morgan Jones proposes?",
    "answers": [
      "Derek",
      "Trevor",
      "Gerald",
      "Jamie"
    ],
    "correctAnswer": "Trevor",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S5E4 Who Can I Turn To",
      "Storyline: Debbie Boyfriend Trevor And Roy Proposal",
      "Correct fact: Trevor",
      "Character incident: Debbie Boyfriend Trevor And Roy Proposal",
      "Episode subject: Debbie Boyfriend Trevor And Roy Proposal",
      "Plot detail: Debbie Boyfriend Trevor And Roy Proposal",
      "Episode or period: S5E4 Who Can I Turn To",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39866",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, what condition troubles Zoë after the birth of Fleur?",
    "answers": [
      "Appendicitis",
      "Pneumonia",
      "Post-natal depression",
      "A broken ankle"
    ],
    "correctAnswer": "Post-natal depression",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S5E5 Let There Be Love",
      "Storyline: Zoe Postnatal Depression",
      "Correct fact: Post-natal depression",
      "Character incident: Zoe Postnatal Depression",
      "Episode subject: Zoe Postnatal Depression",
      "Plot detail: Zoe Postnatal Depression",
      "Episode or period: S5E5 Let There Be Love",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39867",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, which secretary suspects she may be pregnant in The Best Is Yet To Come?",
    "answers": [
      "Miss Flood",
      "Simone",
      "Debbie",
      "Hilary"
    ],
    "correctAnswer": "Hilary",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S5E6 The Best Is Yet To Come",
      "Storyline: Hilary Suspects Pregnancy",
      "Correct fact: Hilary",
      "Character incident: Hilary Suspects Pregnancy",
      "Episode subject: Hilary Suspects Pregnancy",
      "Plot detail: Hilary Suspects Pregnancy",
      "Episode or period: S5E6 The Best Is Yet To Come",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39868",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, who temporarily fills in at Alec's office after Hilary leaves?",
    "answers": [
      "Simone",
      "Debbie",
      "Zoë",
      "Rosie"
    ],
    "correctAnswer": "Simone",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S6E1 Nice Work If You Can Get It",
      "Storyline: Simone Temp At Alec Office",
      "Correct fact: Simone",
      "Character incident: Simone Temp At Alec Office",
      "Episode subject: Simone Temp At Alec Office",
      "Plot detail: Simone Temp At Alec Office",
      "Episode or period: S6E1 Nice Work If You Can Get It",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39869",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, what childcare worker do Alec and Zoë struggle to find after Zoë goes back to work?",
    "answers": [
      "A schoolteacher",
      "A nanny",
      "A childminder at a nursery",
      "A live-in tutor"
    ],
    "correctAnswer": "A nanny",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S6E2 Take Good Care Of My Baby",
      "Storyline: Couple Search For Nanny",
      "Correct fact: A nanny",
      "Character incident: Couple Search For Nanny",
      "Episode subject: Couple Search For Nanny",
      "Plot detail: Couple Search For Nanny",
      "Episode or period: S6E2 Take Good Care Of My Baby",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39870",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, who is asked to give a careers talk at Zoë's school?",
    "answers": [
      "Jamie",
      "Gerald",
      "Alec",
      "Roy"
    ],
    "correctAnswer": "Alec",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S6E3 Son Of My Father",
      "Storyline: Alec Asked To Speak Careers",
      "Correct fact: Alec",
      "Character incident: Alec Asked To Speak Careers",
      "Episode subject: Alec Asked To Speak Careers",
      "Plot detail: Alec Asked To Speak Careers",
      "Episode or period: S6E3 Son Of My Father",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39871",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, what career does Rosie hope to pursue against Miss Flood's better judgement?",
    "answers": [
      "Singing",
      "Law",
      "Journalism",
      "Modelling"
    ],
    "correctAnswer": "Modelling",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S6E4 Cherry Pink And Apple Blossom White",
      "Storyline: Rosie Modelling Agency",
      "Correct fact: Modelling",
      "Character incident: Rosie Modelling Agency",
      "Episode subject: Rosie Modelling Agency",
      "Plot detail: Rosie Modelling Agency",
      "Episode or period: S6E4 Cherry Pink And Apple Blossom White",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39872",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, which relative does Zoë attempt to find a new date for in the penultimate episode?",
    "answers": [
      "Debbie",
      "Simone",
      "Rosie",
      "Hilary"
    ],
    "correctAnswer": "Debbie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S6E5 Let The Heartaches Begin",
      "Storyline: Zoe Tries Matchmaking Debbie",
      "Correct fact: Debbie",
      "Character incident: Zoe Tries Matchmaking Debbie",
      "Episode subject: Zoe Tries Matchmaking Debbie",
      "Plot detail: Zoe Tries Matchmaking Debbie",
      "Episode or period: S6E5 Let The Heartaches Begin",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39873",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, how many years of employment at Alec's firm is Miss Flood celebrating in the finale?",
    "answers": [
      "Twenty",
      "Thirty",
      "Twenty-five",
      "Forty"
    ],
    "correctAnswer": "Thirty",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S6E6 Until It's Time For You To Go",
      "Storyline: Vera Thirty Years At Law Firm",
      "Correct fact: Thirty",
      "Character incident: Vera Thirty Years At Law Firm",
      "Episode subject: Vera Thirty Years At Law Firm",
      "Plot detail: Vera Thirty Years At Law Firm",
      "Episode or period: S6E6 Until It's Time For You To Go",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39874",
    "category": "Television",
    "programme": "May to December",
    "question": "In May to December, what is the first name of the man Alec suspects Zoë is seeing in the series finale?",
    "answers": [
      "Miles",
      "Derek",
      "Mark",
      "Kevin"
    ],
    "correctAnswer": "Mark",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "May to December",
      "Programme: May to December",
      "BBC One",
      "1989-1994",
      "Episode: S6E6 Until It's Time For You To Go",
      "Storyline: Alec Suspects Zoe And Mark",
      "Correct fact: Mark",
      "Character incident: Alec Suspects Zoe And Mark",
      "Episode subject: Alec Suspects Zoe And Mark",
      "Plot detail: Alec Suspects Zoe And Mark",
      "Episode or period: S6E6 Until It's Time For You To Go",
      "Alec Callender and Zoe Angell"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if (new Set(questions.map(q=>q.id)).size!==questions.length ||
    new Set(questions.map(q=>normalise(q.question))).size!==questions.length ||
    questions.some(q=>q.answers.length!==4 || new Set(q.answers.map(normalise)).size!==4 ||
      q.answers.filter(a=>a===q.correctAnswer).length!==1 ||
      q.tags.length<14 || !q.tags.includes('Programme: '+q.programme) || q.dailyEligible!==true))
  throw Error('Pack 371 storyline audit validation failed');
module.exports = questions;
