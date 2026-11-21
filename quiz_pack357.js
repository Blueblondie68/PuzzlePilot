
  // quiz_pack357.js
  // PuzzlePilot — The Bigggggg Quiz
  // British sitcoms: Just Good Friends (1983–1986) / Only When I Laugh (1979–1982).
  // Both were outstanding in PP_Quiz_Master_Through_Pack_351_Corrected.xlsx.
  // Fact checks: British Comedy Guide programme, cast and series episode guides.
  // Each question has seven bespoke, question-specific tags plus programme metadata.
  // CommonJS, no dependencies. Save the entire file in WordPad as quiz_pack357.js.

  const FIRST_ID = 17540;

  // Row layout: question | correct answer | 3 wrong answers | difficulty | 7 specific tags
  const justGoodFriendsFacts = `Who played Vince Pinner in the BBC sitcom Just Good Friends?|Paul Nicholas|Peter Bowles|James Bolam|John Ringham|Easy|Vince Pinner|Paul Nicholas|Lead Actor|Male Lead|BBC Casting|1983 Series|On Off Romance
  Who portrayed Penny Warrender in Just Good Friends?|Jan Francis|Sylvia Kay|Ann Lynn|Belinda Lang|Easy|Penny Warrender|Jan Francis|Lead Actress|Female Lead|BBC Cast|Romantic Comedy|1980s Television
  Who wrote the sitcom Just Good Friends?|John Sullivan|Eric Chappell|David Croft|Roy Clarke|Easy|John Sullivan|Sitcom Creator|Programme Writer|BBC Scripts|Comedy Writing|Original Series|1983 Debut
  Which television channel originally broadcast Just Good Friends?|BBC One|ITV|Channel 4|BBC Two|Easy|BBC One|Original Broadcaster|First Transmission|British Comedy|Television Network|1980s Schedule|Programme Premiere
  In which year did the first series of Just Good Friends air?|1983|1979|1986|1990|Easy|1983 Premiere|22 September 1983|BBC Launch|Series One|First Broadcast|Sitcom Timeline|Eighties Television
  How many series of Just Good Friends were made?|Three|Two|Four|Five|Medium|Three Series|1983 To 1986|Programme Run|Series Count|BBC Sitcom History|Production Schedule|Final Series 1986
  In Just Good Friends, why does Vince have difficulty meeting Penny again at the Red Lion pub?|There is more than one pub called the Red Lion|She has given him an incorrect street address|He has mistaken the date of their meeting|She has moved abroad without telling him|Medium|Red Lion Pub|Multiple Pubs Same Name|Vince Arranging Reunion|Series One Episode Two|John Sullivan Romantic Comedy|Missed Meeting|1983 Episode
  At their unexpected pub reunion in Just Good Friends, what are Vince and Penny each doing with other people?|Enduring unsuccessful dates|Attending a wedding reception|Organising a charity raffle|Celebrating a work promotion|Medium|Series One First Episode|Two Bad Dates|Pub Reunion|Vince Pinner|Penny Warrender|Chance Meeting|1983 Storyline
  What did Vince do to Penny on the day they were supposed to marry?|Left her waiting at the church|Missed their flight to Paris|Forgot the wedding rings|Married her sister instead|Easy|Abandoned Wedding|Vince Pinner|Penny Warrender|Jilted Bride|Relationship History|Wedding Day|Broken Engagement
  At what kind of concert did Vince first meet Penny before their broken engagement?|A Rolling Stones concert|A Beatles reunion concert|A Queen concert|A David Bowie concert|Medium|Rolling Stones|First Meeting|1976 Concert|Vince And Penny|Romantic Backstory|Music Event|Courtship
  Approximately how long had Vince and Penny been apart when they met again at the series' start?|Five years|Six months|Ten years|One year|Medium|Five Year Separation|Former Couple|Chance Reunion|Series Premise|Old Relationship|1983 Storyline|Jilted Wedding
  Who is Penny Warrender's mother?|Daphne Warrender|Rita Pinner|Gina Pinner|Louise|Easy|Daphne Warrender|Penny Mother|Warrender Family|Parent Daughter|Family Relations|Character Name|BBC Sitcom
  Which actress portrayed Penny's mother Daphne Warrender?|Sylvia Kay|Ann Lynn|Charlotte Seeley|Rachel Bell|Medium|Sylvia Kay|Daphne Warrender|Character Casting|Penny Mother|Supporting Actress|Warrender Household|Programme Credits
  In Just Good Friends, whom does Vince visit for advice in the fourth episode of series one?|His father Les|Penny's mother Daphne|His brother Clifford|His friend Lennie|Medium|Series One Episode Four|Vince Asking Advice|Les Pinner|Penny Reconciliation|Family Advice|1983 Script|John Sullivan
  Which actor played Norman Warrender, Penny's father?|John Ringham|Shaun Curry|James Lister|Paul Nicholas|Medium|John Ringham|Norman Warrender|Actor Role|Penny Father|Warrender Family|Supporting Cast|1980s Sitcom
  Who played Vince Pinner's mother Rita?|Ann Lynn|Jan Francis|Sylvia Kay|Charlotte Seeley|Medium|Ann Lynn|Rita Pinner|Mother Character|Vince Family|Actress Casting|Pinner Household|Supporting Cast
  Who played Vince Pinner's father Les?|Shaun Curry|John Ringham|Ray Butt|Peter Bowles|Hard|Shaun Curry|Les Pinner|Vince Father|Actor Casting|Pinner Family|Supporting Cast|Character Relations
  Which actor played Clifford Pinner?|Adam French|Shaun Curry|James Lister|John Ringham|Hard|Adam French|Clifford Pinner|Cast Credit|Supporting Actor|Pinner Surname|Recurring Character|BBC Production
  Who played Gina, Vince's wife in the third series?|Charlotte Seeley|Jan Francis|Ann Lynn|Sylvia Kay|Medium|Charlotte Seeley|Gina|Vince Wife|Series Three|1986 Cast|Marriage Complication|Actress Role
  Who sang the title music for Just Good Friends?|Paul Nicholas|Jan Francis|John Sullivan|Ronnie Hazlehurst|Medium|Paul Nicholas|Title Song Singer|Opening Music|Sitcom Theme|Main Actor|Soundtrack Performance|BBC Credits
  Who wrote the Just Good Friends title music?|John Sullivan|Mike Batt|Howard Goodall|Eric Chappell|Hard|John Sullivan|Theme Song Writer|Title Music|Sitcom Composer|Production Credits|Paul Nicholas Vocal|BBC Soundtrack
  Where do Vince and Penny unexpectedly meet again in the first episode?|In a pub|At a wedding reception|On a train|In a hospital|Easy|First Episode|Pub Reunion|Vince And Penny|Chance Encounter|1983 Opening|Old Flame|Series One
  At what machine do Vince and Penny first notice each other during their pub reunion?|A cigarette machine|An arcade machine|A fruit machine|A coffee machine|Medium|Cigarette Machine|First Episode|Pub Meeting|Chance Encounter|Vince Pinner|Penny Warrender|Reunion Scene
  What is the name of the pub Vince mentions when arranging to meet Penny again?|The Red Lion|The King's Head|The Queen Victoria|The Rover's Return|Medium|Red Lion Pub|Series One Episode Two|Meeting Arrangement|Multiple Pubs|Vince Tracks Penny|1983 Story|Reunion Plan
  What excuse does Vince use to visit Penny at home early in the first series?|Returning a handkerchief|Delivering flowers|Returning a library book|Bringing back a lost dog|Medium|Handkerchief|Series One Episode Two|Vince Visits Home|Penny Warrender|Daphne Encounter|Reconciliation Attempt|1983 Plot
  Which occasion do Penny's parents celebrate shortly before she plans to move in with Vince?|Her birthday|Their silver wedding|His promotion|Christmas Eve|Medium|Penny Birthday|Series One Episode Six|Moving In Decision|Daphne And Norman|Parents Celebration|Vince Relationship|1983 Episode
  What happens to Vince and Penny's new flat in the final episode of the first series?|It is burgled|It catches fire|It is sold at auction|It is flooded by a river|Easy|Burgled Flat|Series One Finale|Penny And Vince|New Home|Unsecured Door|Domestic Setback|1983 Episode
  Which imaginary colleague does Penny invent to make Vince jealous in series two?|Steve|Kevin|Graham|Lennie|Medium|Imaginary Steve|Jealousy Scheme|Series Two Episode Two|Penny Warrender|Vince Pinner|Fictional Colleague|1984 Story
  What is the name of Penny's estranged husband who complicates her divorce?|Graham|Les|Norman|Rupert|Medium|Graham|Penny Estranged Husband|Divorce Proceedings|Series Two Episode Three|Adultery Accusation|Marriage History|1984 Episode
  To which country does Vince suggest a goodbye holiday at his parents' villa in series two?|Portugal|Spain|Italy|Greece|Medium|Portugal Villa|Series Two Episode Five|Goodbye Holiday|Vince Pinner|Penny Warrender|Family Property|1984 Storyline
  What happens to Penny's divorce in the final regular episode of series two?|It is finalised|It is postponed indefinitely|It is declared invalid|It is transferred to France|Medium|Penny Divorce Finalised|Series Two Finale|Marriage Ends|Vince Proposal|1984 Episode|Relationship Turning Point|Legal Separation
  In which city do Vince and Penny reunite at the start of the third series?|Paris|Rome|Amsterdam|Edinburgh|Easy|Paris Reunion|1986 Series Three|Eiffel Tower|Former Lovers|Two Years Apart|Vince And Penny|French Setting
  Who is Vince married to at the beginning of the third series?|Gina|Daphne|Rita|Penny|Medium|Gina|Vince Wife|Series Three|Marriage Disclosure|Penny Jealousy|1986 Story Arc|Love Triangle
  In series three, where is Penny pressured to transfer for work?|The Paris office|The Manchester office|The Glasgow office|The Dublin office|Medium|Paris Office|Penny Transfer|Series Three Episode Four|Gina Interference|Workplace Move|1986 Plot|Career Pressure
  What kind of importing business does Vince run during the third series?|Wine importing|Furniture importing|Coffee importing|Car importing|Medium|Wine Importing Business|Vince Pinner|Series Three|Business Venture|Norman Job Offer|1986 Episodes|Commerce
  Which organisation investigates Vince's firm's sale of German tanks in series three?|The United Nations|NATO|Interpol|The European Parliament|Hard|United Nations Investigation|Scrap German Tanks|Vince Business|Series Three Episode Six|Luanda|Scrap Metal Company|1986 Story
  In the 1986 Christmas finale, who tries to prevent Vince and Penny from marrying?|Gina|Rita|Daphne|Lennie|Medium|1986 Christmas Finale|Gina|Wedding Interference|Vince And Penny|Contract Leverage|Divorce Fallout|Final Special`;

  const onlyWhenILaughFacts = `Which broadcaster originally showed Only When I Laugh?|ITV|BBC One|Channel 4|BBC Two|Easy|ITV Sitcom|Original Network|Yorkshire Television|Hospital Comedy|1979 Premiere|Broadcast Channel|British Television
  In which year did Only When I Laugh first air?|1979|1973|1983|1987|Easy|1979 Debut|29 October 1979|First Episode|ITV Comedy|Programme Timeline|Seventies Television|Hospital Sitcom
  Who wrote the ITV sitcom Only When I Laugh?|Eric Chappell|John Sullivan|Raymond Allen|David Croft|Easy|Eric Chappell|Series Writer|Creator Credit|ITV Scripts|British Comedy|Sitcom Authorship|1979 Production
  Which production company made Only When I Laugh?|Yorkshire Television|Thames Television|Granada Television|BBC Television|Medium|Yorkshire Television|Programme Producer|ITV Regional Company|Television Credits|British Sitcom Studio|Hospital Comedy|1980s Production
  Who directed and produced Only When I Laugh?|Vernon Lawrence|Ray Butt|David Croft|Ronnie Hazlehurst|Hard|Vernon Lawrence|Programme Director|Series Producer|Production Team|Yorkshire Television|Sitcom Credits|Behind The Scenes
  How many series of Only When I Laugh were broadcast?|Four|Three|Five|Six|Medium|Four Series|1979 To 1982|Series Count|Sitcom Run|ITV Production|Hospital Comedy|Programme History
  How many episodes of Only When I Laugh were broadcast including the Christmas special?|29|21|36|42|Hard|29 Episodes|Episode Total|Four Series|Christmas Special|Programme Catalogue|Original Run|1979 To 1982
  Which actor portrayed Roy Figgis?|James Bolam|Peter Bowles|Christopher Strauli|Richard Wilson|Easy|James Bolam|Roy Figgis|Lead Actor|Ward Patient|Hypochondriac|Hospital Regular|Cast Role
  Who played Archie Glover?|Peter Bowles|James Bolam|Derrick Branche|Christopher Strauli|Easy|Peter Bowles|Archie Glover|Lead Actor|Hospital Ward|Patient Role|Main Trio|Programme Cast
  Who played Norman Binns?|Christopher Strauli|Peter Bowles|James Bolam|Derrick Branche|Easy|Christopher Strauli|Norman Binns|Leading Cast|Young Patient|Hospital Sitcom|Ward Member|Actor Character
  Which actor played Dr Gordon Thorpe?|Richard Wilson|James Bolam|Peter Bowles|Ronnie Barker|Easy|Richard Wilson|Dr Gordon Thorpe|Hospital Doctor|Medical Authority|Cast Identification|Ward Physician|Comedy Character
  Who portrayed the ward orderly Gupte during the first three series?|Derrick Branche|Christopher Strauli|Richard Wilson|Peter Denyer|Medium|Derrick Branche|Gupte|Ward Orderly|First Three Series|Hospital Staff|Actor Casting|NHS Ward
  What is the central setting of Only When I Laugh?|A hospital ward|A railway station|A hotel reception|A school staffroom|Easy|Hospital Ward|NHS Setting|Roy Figgis|Norman Binns|Archie Glover|Patient Comedy|Workplace Location
  What recurring attitude to illness unites the three regular patients?|Hypochondria|Complete fearlessness|A passion for surgery|A refusal to take any medicine|Medium|Hypochondriac Patients|Perceived Illness|Roy Figgis|Archie Glover|Norman Binns|Hospital Premise|Character Behaviour
  Which new patient arrives in the first episode A Bed With A View?|Norman Binns|Roy Figgis|Archie Glover|Dr Thorpe|Medium|A Bed With A View|Norman Binns|New Admission|Series One Opening|1979 Episode|Ward Arrival|Hospital Patient
  In A Bed With A View, what do the patients quarrel over?|A bed by the window|An extra television|An unopened parcel|A visiting timetable|Easy|A Bed With A View|Window Bed|Ward Dispute|Norman Binns|Roy Figgis|Archie Glover|1979 Pilot Episode
  What operation is Norman due to have in Operation Norman?|An appendix operation|A hip replacement|A cataract operation|A knee replacement|Medium|Operation Norman|Appendix|Norman Binns|Surgical Anxiety|Series One Episode Two|1979 Story|Medical Procedure
  In The Rumour, whose illness is misunderstood as referring to a patient?|Dr Thorpe's dog|The matron's husband|Norman's mother|A visiting surgeon|Medium|The Rumour|Doctor Thorpe Dog|Misheard Conversation|Roy Figgis|False Diagnosis|Series One Episode Three|Ward Panic
  In The Man With The Face, which foreign suitor does Archie fear will confront him?|A Greek man|An Italian count|A French chef|A Spanish sailor|Medium|The Man With The Face|Archie Glover|Greek Rival|Romantic Complication|Series One|Unwanted Encounter|1979 Episode
  What protest do the patients stage over the food in Let Them Eat Cake?|A hunger strike|A sit-in at reception|A silent march|A petition to the mayor|Easy|Let Them Eat Cake|Hospital Meals|Hunger Strike|Ward Protest|Poor Food|1979 Episode|Patient Revolt
  In Tangled Web, whom do Archie and Norman both take an interest in?|A new nurse|A visiting journalist|A pharmacist|The hospital cook|Medium|Tangled Web|New Nurse|Archie Glover|Norman Binns|Romantic Rivalry|1979 Episode|Ward Flirting
  Who disguises himself as a doctor in Is There A Doctor In The House?|Roy Figgis|Norman Binns|Archie Glover|Gupte|Easy|Is There A Doctor In The House|Roy Figgis|Doctor Disguise|Ward Escape|False Medical Advice|Series One Finale|1979 Story
  What kind of celebrity visits the ward in Whatever Happened To Gloria Robbins?|A film star|A pop singer|A football manager|A politician|Medium|Gloria Robbins Episode|Film Star|Celebrity Patient|Series Two Premiere|1980 Episode|Hospital Visit|Ward Excitement
  In When There's A Will, why does a rich patient attract so much attention?|He is preparing his will|He offers free holidays|He buys the hospital|He gives a television interview|Medium|When Theres A Will|Wealthy Patient|Inheritance Interest|Series Two|1980 Story|Ward Behaviour|Last Will
  What unhealthy habit is the subject of It Can Damage Your Health?|Smoking|Overeating|Staying up all night|Drinking strong coffee|Easy|It Can Damage Your Health|Smoking Risks|Patients Ignore Advice|Hospital Ward|Series Two|1980 Episode|Health Warning
  Who becomes obsessed with signs and omens in The Cosmic Influence?|Roy Figgis|Norman Binns|Dr Thorpe|Archie Glover|Medium|The Cosmic Influence|Roy Figgis|Superstition|Omens|Astrology Interests|Series Two|1980 Episode
  Whose mother brings another potential girlfriend to the ward in The Visitors?|Norman Binns'|Roy Figgis'|Archie Glover's|Dr Thorpe's|Medium|The Visitors|Norman Mother|Arranged Introduction|Potential Girlfriend|Visiting Day|Series Two|1980 Story
  In The Lost Sheep, who admits he has never been christened?|Roy Figgis|Norman Binns|Archie Glover|Dr Thorpe|Medium|The Lost Sheep|Roy Figgis|Not Christened|Meeting Vicar|Religious Questions|1980 Episode|Ward Patient
  What special visitors arrive at the hospital in A Day In The Life Of?|A television crew|A circus troupe|A royal delegation|A touring orchestra|Easy|A Day In The Life Of|TV Crew|Hospital Documentary|Series Three Premiere|Media Attention|1981 Episode|Patients Compete
  How do the established patients react when the young female doctor arrives in Only When I Laugh?|They have mixed feelings about her|They all immediately request discharge|They refuse every treatment|They put on a welcome party|Medium|Adams Rib Episode|Female Doctor Arrival|Mixed Patient Reaction|Third Series|Ward Three|Hospital Comedy Conflict|1981 Storyline
  Who is admitted to the ward in The Right Honourable Gentleman?|A Member of Parliament|A television actor|A local mayor|A police inspector|Medium|Right Honourable Gentleman|Member Of Parliament|NHS Costs|Hospital Petition|Series Three|1981 Episode|Politician Patient
  Which advice columnist receives a letter from Worried of Ward 3 in Postman's Knock?|Clare Butterfield|Deidre|Gloria Robbins|Daphne Warrender|Hard|Postmans Knock|Clare Butterfield|Agony Aunt|Ward Three|Advice Letter|1981 Episode|Confused Response
  Who keeps a diary of life in the ward in Dear Diary?|Norman Binns|Roy Figgis|Archie Glover|Gupte|Medium|Dear Diary|Norman Binns|Patient Journal|Ward Secrets|Series Three|1981 Episode|Private Writing
  What broadcasting service do the patients try to improve in These You Have Loved?|Hospital radio|Local television news|Police radio|The weather forecast|Medium|These You Have Loved|Hospital Radio|Ward Entertainment|Patients Present|Series Three|1981 Episode|Broadcasting Attempt
  What is the title of the 1981 Only When I Laugh Christmas special?|Away For Christmas|A Bed With A View|The Reunion|Winter Ward|Medium|Away For Christmas|1981 Special|Christmas Broadcast|Holiday Episode|New Patient|Ward Festivities|24 December
  In Blood Brothers, what condition leads Archie to consider a blood transfusion?|Anaemia|Diabetes|Appendicitis|Pneumonia|Medium|Blood Brothers|Archie Glover|Anaemia|Blood Transfusion|Series Four Premiere|1982 Episode|Rare Blood Group
  In All In The Mind, which technique does Figgis use to analyse other patients?|Word association|Hypnosis|Palm reading|Handwriting analysis|Medium|All In The Mind|Roy Figgis|Word Association|Amateur Psychiatry|Series Four|1982 Episode|Patient Analysis
  Who is Norman Binns' fiancée in In Sickness And In Health?|Deidre|Gloria|Gina|Rita|Medium|In Sickness And In Health|Deidre|Norman Binns|Wedding Plans|Library Worker|Series Four|1982 Story
  In Escape, what official accompanies an incoming patient?|A prison officer|A customs officer|A fire officer|A probation volunteer|Medium|Escape Episode|Prison Officer|Guarded Patient|Ward Three|Series Four|1982 Episode|New Arrival
  What happens to Figgis, Glover and Norman in the final episode The Reunion?|They are discharged from hospital|They become hospital porters|They open a private clinic|They move to a new ward together|Easy|The Reunion|Series Finale|Patient Discharge|Roy Figgis|Archie Glover|Norman Binns|1982 Ending`;

  const normalise = text => text.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
  const questions = [];

  function addProgramme(programme, sharedTags, facts) {
    for (const line of facts.trim().split('\n')) {
      const id = 'tv_' + String(FIRST_ID + questions.length).padStart(5, '0');
      const fields = line.trim().split('|').map(item => item.trim());
      if (fields.length !== 13) {
        throw new Error('Pack 357: expected 13 fields for ' + id + ', got ' + fields.length);
      }
      const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
      if ([question, correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(x => !x)) {
        throw new Error('Pack 357: blank field for ' + id);
      }
      if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.length !== 7 ||
          new Set(specificTags.map(normalise)).size !== 7) {
        throw new Error('Pack 357: incorrect difficulty or specific tags for ' + id);
      }
      const answers = [wrong1, wrong2, wrong3];
      if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4) {
        throw new Error('Pack 357: repeated answer choices for ' + id);
      }
      answers.splice(questions.length % 4, 0, correctAnswer);
      const tags = [...new Map([
        'Television', 'British Television', 'Comedy', 'Sitcom',
        ...sharedTags, programme, 'Programme: ' + programme,
        correctAnswer, ...specificTags
      ].map(tag => [normalise(tag), tag])).values()];
      questions.push({
        id, category: 'Television', programme, question, answers,
        correctAnswer, difficulty, tags, dailyEligible: true
      });
    }
  }

  addProgramme('Just Good Friends', ['BBC One', '1983-1986', 'John Sullivan', 'Romantic Comedy'], justGoodFriendsFacts);
  addProgramme('Only When I Laugh', ['ITV', '1979-1982', 'Eric Chappell', 'Hospital Comedy'], onlyWhenILaughFacts);

  // Check the actual exported objects, not just the source rows.
  if (!questions.length || questions[0].id !== 'tv_17540' ||
      new Set(questions.map(q => q.id)).size !== questions.length ||
      new Set(questions.map(q => normalise(q.question))).size !== questions.length ||
      questions.some((q, i) =>
        q.id !== 'tv_' + String(FIRST_ID + i).padStart(5, '0') ||
        q.category !== 'Television' || !q.programme ||
        q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        q.tags.length < 14 || new Set(q.tags.map(normalise)).size !== q.tags.length ||
        !q.tags.includes('Programme: ' + q.programme) ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) || q.dailyEligible !== true)) {
    throw new Error('Pack 357: exported object validation failed');
  }

  
// 21 November 2026 editorial audit: episode-specific additions, original IDs retained.
const auditAdditions = [
  {
    "id": "tv_39010",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "Who played Sonia, one of the unfortunate dates seen during Vince and Penny's first pub reunion?",
    "answers": [
      "Sylvia Kay",
      "Linda Hayden",
      "Ann Lynn",
      "Belinda Lang"
    ],
    "correctAnswer": "Linda Hayden",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: S1E01",
      "Plot or cast: Sonia's guest actress",
      "Fact answer: Linda Hayden",
      "Episode coverage: Sonia's guest actress",
      "1980s Romantic Comedy",
      "Character story: Sonia's guest actress",
      "Quiz source detail: S1E01",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/1/1/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39011",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "Which actor portrayed Rupert, a date at the pub where Vince and Penny reunite?",
    "answers": [
      "James Lister",
      "Adam French",
      "David Neville",
      "John Ringham"
    ],
    "correctAnswer": "David Neville",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: S1E01",
      "Plot or cast: Rupert's guest actor",
      "Fact answer: David Neville",
      "Episode coverage: Rupert's guest actor",
      "1980s Romantic Comedy",
      "Character story: Rupert's guest actor",
      "Quiz source detail: S1E01",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/1/1/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39012",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "Who produced the BBC sitcom Just Good Friends and directed early episodes?",
    "answers": [
      "David Croft",
      "Robin Nash",
      "Vernon Lawrence",
      "Ray Butt"
    ],
    "correctAnswer": "Ray Butt",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: Production",
      "Plot or cast: Original producer and director",
      "Fact answer: Ray Butt",
      "Episode coverage: Original producer and director",
      "1980s Romantic Comedy",
      "Character story: Original producer and director",
      "Quiz source detail: Production",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/1/1/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39013",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "Who reveals secrets from her own past to warn Penny about Vince in Just Good Friends?",
    "answers": [
      "Daphne Warrender",
      "Rita Pinner",
      "Gina Pinner",
      "Elaine"
    ],
    "correctAnswer": "Daphne Warrender",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: S1E04",
      "Plot or cast: Mother's warning about Vince",
      "Fact answer: Daphne Warrender",
      "Episode coverage: Mother's warning about Vince",
      "1980s Romantic Comedy",
      "Character story: Mother's warning about Vince",
      "Quiz source detail: S1E04",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/1/4/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39014",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "What does Penny begin to suspect when Vince is out of contact for weeks in Just Good Friends?",
    "answers": [
      "He has emigrated permanently",
      "He is seeing another woman",
      "He has been arrested abroad",
      "He has lost his job"
    ],
    "correctAnswer": "He is seeing another woman",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: S1E05",
      "Plot or cast: Penny suspects a new romance",
      "Fact answer: He is seeing another woman",
      "Episode coverage: Penny suspects a new romance",
      "1980s Romantic Comedy",
      "Character story: Penny suspects a new romance",
      "Quiz source detail: S1E05",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/1/5/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39015",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "Who wants his flat back just as Vince and Penny arrange to live together in Just Good Friends?",
    "answers": [
      "Graham",
      "Lennie",
      "Big Ed",
      "Norman Warrender"
    ],
    "correctAnswer": "Big Ed",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: S1E06",
      "Plot or cast: Flat returned to Big Ed",
      "Fact answer: Big Ed",
      "Episode coverage: Flat returned to Big Ed",
      "1980s Romantic Comedy",
      "Character story: Flat returned to Big Ed",
      "Quiz source detail: S1E06",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/1/6/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39016",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "What mistake by Penny makes it possible for burglars to enter the couple's new flat in Just Good Friends?",
    "answers": [
      "She gives a key to a stranger",
      "She leaves a downstairs window open",
      "She leaves the alarm disconnected",
      "She forgets to lock the front door"
    ],
    "correctAnswer": "She forgets to lock the front door",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: S1E07",
      "Plot or cast: Unlocked front door burglary",
      "Fact answer: She forgets to lock the front door",
      "Episode coverage: Unlocked front door burglary",
      "1980s Romantic Comedy",
      "Character story: Unlocked front door burglary",
      "Quiz source detail: S1E07",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/1/7/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39017",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "Why are the police called to the Warrender home after Vince tries to make up with Penny?",
    "answers": [
      "He arrives extremely drunk",
      "He breaks a window while gardening",
      "He is falsely accused of stealing a car",
      "He is mistaken for a missing neighbour"
    ],
    "correctAnswer": "He arrives extremely drunk",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: S2E01",
      "Plot or cast: Drunken reconciliation attempt",
      "Fact answer: He arrives extremely drunk",
      "Episode coverage: Drunken reconciliation attempt",
      "1980s Romantic Comedy",
      "Character story: Drunken reconciliation attempt",
      "Quiz source detail: S2E01",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/2/1/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39018",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "What evidence does Penny's estranged husband Graham present when he accuses her of adultery?",
    "answers": [
      "A recording of a telephone call",
      "Photographs",
      "A signed hotel bill",
      "Letters from a neighbour"
    ],
    "correctAnswer": "Photographs",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: S2E03",
      "Plot or cast: Graham's divorce evidence",
      "Fact answer: Photographs",
      "Episode coverage: Graham's divorce evidence",
      "1980s Romantic Comedy",
      "Character story: Graham's divorce evidence",
      "Quiz source detail: S2E03",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/2/3/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39019",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "At what social event does Penny become suspicious of Vince's behaviour towards another woman in Just Good Friends?",
    "answers": [
      "A school reunion",
      "A christening",
      "A wedding reception",
      "A company awards dinner"
    ],
    "correctAnswer": "A wedding reception",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: S2E04",
      "Plot or cast: Vince and the bride misunderstanding",
      "Fact answer: A wedding reception",
      "Episode coverage: Vince and the bride misunderstanding",
      "1980s Romantic Comedy",
      "Character story: Vince and the bride misunderstanding",
      "Quiz source detail: S2E04",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/2/4/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39020",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "What news does Vince announce when Penny plans to end their relationship again in series two of Just Good Friends?",
    "answers": [
      "He has joined the police",
      "He is moving to Scotland",
      "He has bought a pub",
      "He has become engaged to someone else"
    ],
    "correctAnswer": "He has become engaged to someone else",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: S2E05",
      "Plot or cast: Vince's surprise engagement",
      "Fact answer: He has become engaged to someone else",
      "Episode coverage: Vince's surprise engagement",
      "1980s Romantic Comedy",
      "Character story: Vince's surprise engagement",
      "Quiz source detail: S2E05",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/2/5/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39021",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "What possible development in her personal life shocks Penny in series two of Just Good Friends?",
    "answers": [
      "She thinks she may be pregnant",
      "She inherits a hotel",
      "She learns her sister is engaged",
      "She is offered an overseas promotion"
    ],
    "correctAnswer": "She thinks she may be pregnant",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: S2E06",
      "Plot or cast: Penny's possible pregnancy",
      "Fact answer: She thinks she may be pregnant",
      "Episode coverage: Penny's possible pregnancy",
      "1980s Romantic Comedy",
      "Character story: Penny's possible pregnancy",
      "Quiz source detail: S2E06",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/2/6/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39022",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "What does Vince seriously offer Penny when she jokingly asks him a question during a celebratory lunch?",
    "answers": [
      "A business partnership",
      "A marriage proposal",
      "A trip to New York",
      "A second car"
    ],
    "correctAnswer": "A marriage proposal",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: S2E07",
      "Plot or cast: Vince sincere proposal",
      "Fact answer: A marriage proposal",
      "Episode coverage: Vince sincere proposal",
      "1980s Romantic Comedy",
      "Character story: Vince sincere proposal",
      "Quiz source detail: S2E07",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/2/7/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39023",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "Which vehicle from Vince and Penny's early courtship features in the Just Good Friends 1984 Christmas flashbacks?",
    "answers": [
      "A mobile library",
      "A delivery lorry",
      "An ice-cream van",
      "A London taxi"
    ],
    "correctAnswer": "An ice-cream van",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: Christmas 1984",
      "Plot or cast: Vince's ice cream van",
      "Fact answer: An ice-cream van",
      "Episode coverage: Vince's ice cream van",
      "1980s Romantic Comedy",
      "Character story: Vince's ice cream van",
      "Quiz source detail: Christmas 1984",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/2/8/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39024",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "At which Paris landmark do Vince and Penny meet again at the start of the final series?",
    "answers": [
      "The Louvre Pyramid",
      "Arc de Triomphe",
      "The Moulin Rouge",
      "The Eiffel Tower"
    ],
    "correctAnswer": "The Eiffel Tower",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: S3E01",
      "Plot or cast: Romantic Eiffel Tower meeting",
      "Fact answer: The Eiffel Tower",
      "Episode coverage: Romantic Eiffel Tower meeting",
      "1980s Romantic Comedy",
      "Character story: Romantic Eiffel Tower meeting",
      "Quiz source detail: S3E01",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/3/1/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39025",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "How long had Vince and Penny been apart when their relationship resumes in Paris in series three?",
    "answers": [
      "Two years",
      "Six weeks",
      "Five years",
      "Ten months"
    ],
    "correctAnswer": "Two years",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: S3E01",
      "Plot or cast: Two year separation",
      "Fact answer: Two years",
      "Episode coverage: Two year separation",
      "1980s Romantic Comedy",
      "Character story: Two year separation",
      "Quiz source detail: S3E01",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/3/1/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39026",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "Who insists on questioning Penny and Vince together about their relationship after meeting Penny?",
    "answers": [
      "Daphne",
      "Gina",
      "Rita",
      "Elaine"
    ],
    "correctAnswer": "Gina",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: S3E03",
      "Plot or cast: Vince's wife interrogates them",
      "Fact answer: Gina",
      "Episode coverage: Vince's wife interrogates them",
      "1980s Romantic Comedy",
      "Character story: Vince's wife interrogates them",
      "Quiz source detail: S3E03",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/3/3/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39027",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "Who is responsible for putting pressure on Penny to accept a transfer to the Paris office in Just Good Friends?",
    "answers": [
      "Vince",
      "Graham",
      "Gina",
      "Les Pinner"
    ],
    "correctAnswer": "Gina",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: S3E04",
      "Plot or cast: Engineered Paris transfer",
      "Fact answer: Gina",
      "Episode coverage: Engineered Paris transfer",
      "1980s Romantic Comedy",
      "Character story: Engineered Paris transfer",
      "Quiz source detail: S3E04",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/3/4/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39028",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "Whom does Vince offer a job at his wine importing business in the third series of Just Good Friends?",
    "answers": [
      "Les Pinner",
      "Graham",
      "Clifford Pinner",
      "Norman Warrender"
    ],
    "correctAnswer": "Norman Warrender",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: S3E05",
      "Plot or cast: Employment offer to Penny's father",
      "Fact answer: Norman Warrender",
      "Episode coverage: Employment offer to Penny's father",
      "1980s Romantic Comedy",
      "Character story: Employment offer to Penny's father",
      "Quiz source detail: S3E05",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/3/5/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39029",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "How many supposedly scrap German tanks are implicated in Vince's export scandal in Just Good Friends?",
    "answers": [
      "Six",
      "Three",
      "Twelve",
      "Twenty"
    ],
    "correctAnswer": "Six",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: S3E06",
      "Plot or cast: Six German tanks",
      "Fact answer: Six",
      "Episode coverage: Six German tanks",
      "1980s Romantic Comedy",
      "Character story: Six German tanks",
      "Quiz source detail: S3E06",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/3/6/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39030",
    "category": "Television",
    "programme": "Just Good Friends",
    "question": "Whom does Gina recruit to help derail Vince and Penny's wedding plans in the Just Good Friends finale?",
    "answers": [
      "Rita Pinner",
      "Daphne Warrender",
      "Lennie",
      "Graham"
    ],
    "correctAnswer": "Daphne Warrender",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Just Good Friends",
      "Programme: Just Good Friends",
      "BBC One",
      "John Sullivan",
      "Episode: 1986 Christmas",
      "Plot or cast: Gina enlists Daphne",
      "Fact answer: Daphne Warrender",
      "Episode coverage: Gina enlists Daphne",
      "1980s Romantic Comedy",
      "Character story: Gina enlists Daphne",
      "Quiz source detail: 1986 Christmas",
      "Source: https://www.comedy.co.uk/tv/just_good_friends/episodes/3/7/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39031",
    "category": "Television",
    "programme": "Only When I Laugh",
    "question": "Who does Roy Figgis mistakenly believe is dying after overhearing part of Dr Thorpe's conversation in Only When I Laugh?",
    "answers": [
      "Norman Binns",
      "Archie Glover",
      "Himself",
      "Gupte"
    ],
    "correctAnswer": "Himself",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Only When I Laugh",
      "Programme: Only When I Laugh",
      "ITV",
      "Eric Chappell",
      "Episode: S1E03",
      "Plot or cast: Doctor's dog prognosis misunderstood",
      "Fact answer: Himself",
      "Episode coverage: Doctor's dog prognosis misunderstood",
      "1980s Hospital Comedy",
      "Character story: Doctor's dog prognosis misunderstood",
      "Quiz source detail: S1E03",
      "Source: https://www.tvmaze.com/shows/7823/only-when-i-laugh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39032",
    "category": "Television",
    "programme": "Only When I Laugh",
    "question": "How does Figgis help Archie hide when a jealous Greek man is expected at the hospital in Only When I Laugh?",
    "answers": [
      "He dresses him as a porter",
      "He hides him in a linen trolley",
      "He puts him in a nurse's uniform",
      "He wraps Archie's head in bandages"
    ],
    "correctAnswer": "He wraps Archie's head in bandages",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Only When I Laugh",
      "Programme: Only When I Laugh",
      "ITV",
      "Eric Chappell",
      "Episode: S1E04",
      "Plot or cast: Archie's burn victim disguise",
      "Fact answer: He wraps Archie's head in bandages",
      "Episode coverage: Archie's burn victim disguise",
      "1980s Hospital Comedy",
      "Character story: Archie's burn victim disguise",
      "Quiz source detail: S1E04",
      "Source: https://thetvdb.com/series/only-when-i-laugh/allseasons/official"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39033",
    "category": "Television",
    "programme": "Only When I Laugh",
    "question": "What unexpected problem does Roy Figgis encounter after disguising himself as a doctor in Only When I Laugh?",
    "answers": [
      "People mistake him for a real doctor",
      "Dr Thorpe gives him a written examination",
      "He is transferred to the surgical theatre",
      "He loses his own hospital bed"
    ],
    "correctAnswer": "People mistake him for a real doctor",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Only When I Laugh",
      "Programme: Only When I Laugh",
      "ITV",
      "Eric Chappell",
      "Episode: S1E07",
      "Plot or cast: Figgis mistaken for actual doctor",
      "Fact answer: People mistake him for a real doctor",
      "Episode coverage: Figgis mistaken for actual doctor",
      "1980s Hospital Comedy",
      "Character story: Figgis mistaken for actual doctor",
      "Quiz source detail: S1E07",
      "Source: https://www.tvmaze.com/shows/7823/only-when-i-laugh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39034",
    "category": "Television",
    "programme": "Only When I Laugh",
    "question": "Whose attempt to stop smoking damages his chances at a job interview in Only When I Laugh?",
    "answers": [
      "Roy Figgis's",
      "Archie Glover's",
      "Norman Binns's",
      "Dr Thorpe's"
    ],
    "correctAnswer": "Archie Glover's",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Only When I Laugh",
      "Programme: Only When I Laugh",
      "ITV",
      "Eric Chappell",
      "Episode: S2E03",
      "Plot or cast: Smoking withdrawal at job interview",
      "Fact answer: Archie Glover's",
      "Episode coverage: Smoking withdrawal at job interview",
      "1980s Hospital Comedy",
      "Character story: Smoking withdrawal at job interview",
      "Quiz source detail: S2E03",
      "Source: https://www.comedy.co.uk/features/comedy-rewind/only-when-i-laugh/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39035",
    "category": "Television",
    "programme": "Only When I Laugh",
    "question": "What does Dr Thorpe try to persuade Roy Figgis to stop obsessing over in Only When I Laugh?",
    "answers": [
      "Missing hospital records",
      "A TV audition",
      "Predictions of his own death",
      "A stolen watch"
    ],
    "correctAnswer": "Predictions of his own death",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Only When I Laugh",
      "Programme: Only When I Laugh",
      "ITV",
      "Eric Chappell",
      "Episode: S2E04",
      "Plot or cast: Figgis convinced death is imminent",
      "Fact answer: Predictions of his own death",
      "Episode coverage: Figgis convinced death is imminent",
      "1980s Hospital Comedy",
      "Character story: Figgis convinced death is imminent",
      "Quiz source detail: S2E04",
      "Source: https://thetvdb.com/series/only-when-i-laugh/allseasons/official"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39036",
    "category": "Television",
    "programme": "Only When I Laugh",
    "question": "Which visitor prompts Roy Figgis to become interested in being christened in Only When I Laugh?",
    "answers": [
      "A priest's driver",
      "A visiting politician",
      "A film star",
      "A vicar"
    ],
    "correctAnswer": "A vicar",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Only When I Laugh",
      "Programme: Only When I Laugh",
      "ITV",
      "Eric Chappell",
      "Episode: S2E06",
      "Plot or cast: Roy meets a church minister",
      "Fact answer: A vicar",
      "Episode coverage: Roy meets a church minister",
      "1980s Hospital Comedy",
      "Character story: Roy meets a church minister",
      "Quiz source detail: S2E06",
      "Source: https://www.tvmaze.com/shows/7823/only-when-i-laugh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39037",
    "category": "Television",
    "programme": "Only When I Laugh",
    "question": "What request does the MP patient refuse in Only When I Laugh despite his interest in NHS costs?",
    "answers": [
      "To sign a petition to save the hospital",
      "To meet the hospital's television crew",
      "To attend a fundraising concert",
      "To donate his private car"
    ],
    "correctAnswer": "To sign a petition to save the hospital",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Only When I Laugh",
      "Programme: Only When I Laugh",
      "ITV",
      "Eric Chappell",
      "Episode: S3E03",
      "Plot or cast: Refuses hospital-saving petition",
      "Fact answer: To sign a petition to save the hospital",
      "Episode coverage: Refuses hospital-saving petition",
      "1980s Hospital Comedy",
      "Character story: Refuses hospital-saving petition",
      "Quiz source detail: S3E03",
      "Source: https://www.tvmaze.com/shows/7823/only-when-i-laugh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39038",
    "category": "Television",
    "programme": "Only When I Laugh",
    "question": "Which member of the men's ward witnesses an accident involving Dr Thorpe in Only When I Laugh?",
    "answers": [
      "Roy Figgis",
      "Norman Binns",
      "Archie Glover",
      "Gupte"
    ],
    "correctAnswer": "Norman Binns",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Only When I Laugh",
      "Programme: Only When I Laugh",
      "ITV",
      "Eric Chappell",
      "Episode: S3E05",
      "Plot or cast: Norman witnesses Thorpe accident",
      "Fact answer: Norman Binns",
      "Episode coverage: Norman witnesses Thorpe accident",
      "1980s Hospital Comedy",
      "Character story: Norman witnesses Thorpe accident",
      "Quiz source detail: S3E05",
      "Source: https://www.tvmaze.com/shows/7823/only-when-i-laugh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39039",
    "category": "Television",
    "programme": "Only When I Laugh",
    "question": "Why do the ward patients become anxious about Norman's new hobby in Only When I Laugh?",
    "answers": [
      "They fear he is writing a medical textbook",
      "They think he is secretly composing a musical",
      "They want to read what he has written about them in his diary",
      "They believe he has lost his reading glasses"
    ],
    "correctAnswer": "They want to read what he has written about them in his diary",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Only When I Laugh",
      "Programme: Only When I Laugh",
      "ITV",
      "Eric Chappell",
      "Episode: S3E06",
      "Plot or cast: Ward curiosity about Norman's diary",
      "Fact answer: They want to read what he has written about them in his diary",
      "Episode coverage: Ward curiosity about Norman's diary",
      "1980s Hospital Comedy",
      "Character story: Ward curiosity about Norman's diary",
      "Quiz source detail: S3E06",
      "Source: https://www.tvmaze.com/shows/7823/only-when-i-laugh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39040",
    "category": "Television",
    "programme": "Only When I Laugh",
    "question": "Whom does Dr Thorpe ask for help when he is discovered in a compromising situation in Only When I Laugh?",
    "answers": [
      "The hospital chaplain",
      "The chief pharmacist",
      "The receptionist",
      "The male patients in his ward"
    ],
    "correctAnswer": "The male patients in his ward",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Only When I Laugh",
      "Programme: Only When I Laugh",
      "ITV",
      "Eric Chappell",
      "Episode: S4E02",
      "Plot or cast: Thorpe seeks ward patients' help",
      "Fact answer: The male patients in his ward",
      "Episode coverage: Thorpe seeks ward patients' help",
      "1980s Hospital Comedy",
      "Character story: Thorpe seeks ward patients' help",
      "Quiz source detail: S4E02",
      "Source: https://www.tvmaze.com/shows/7823/only-when-i-laugh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39041",
    "category": "Television",
    "programme": "Only When I Laugh",
    "question": "Which patient does Roy Figgis diagnose as sexually repressed during his amateur psychiatric experiments?",
    "answers": [
      "Norman Binns",
      "Archie Glover",
      "Dr Thorpe",
      "Gupte"
    ],
    "correctAnswer": "Norman Binns",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Only When I Laugh",
      "Programme: Only When I Laugh",
      "ITV",
      "Eric Chappell",
      "Episode: S4E03",
      "Plot or cast: Figgis amateur diagnosis",
      "Fact answer: Norman Binns",
      "Episode coverage: Figgis amateur diagnosis",
      "1980s Hospital Comedy",
      "Character story: Figgis amateur diagnosis",
      "Quiz source detail: S4E03",
      "Source: https://www.tvmaze.com/shows/7823/only-when-i-laugh/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39042",
    "category": "Television",
    "programme": "Only When I Laugh",
    "question": "Where does a mysterious intoxicated visitor collapse before Roy Figgis is asked to investigate in Only When I Laugh?",
    "answers": [
      "A ward lavatory",
      "Hospital reception",
      "An operating theatre",
      "The hospital canteen"
    ],
    "correctAnswer": "Hospital reception",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Only When I Laugh",
      "Programme: Only When I Laugh",
      "ITV",
      "Eric Chappell",
      "Episode: S4E06",
      "Plot or cast: Drunk stranger collapses",
      "Fact answer: Hospital reception",
      "Episode coverage: Drunk stranger collapses",
      "1980s Hospital Comedy",
      "Character story: Drunk stranger collapses",
      "Quiz source detail: S4E06",
      "Source: https://www.tvmaze.com/shows/7823/only-when-i-laugh/episodeguide"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if (new Set(questions.map(q=>q.id)).size!==questions.length ||
 new Set(questions.map(q=>normalise(q.question))).size!==questions.length ||
 questions.some(q=>q.answers.length!==4 ||
 new Set(q.answers.map(normalise)).size!==4 ||
 q.answers.filter(a=>a===q.correctAnswer).length!==1 ||
 q.tags.length<14 || !q.tags.includes('Programme: '+q.programme) ||
 q.dailyEligible!==true)) throw Error('Pack 357 audit validation failed');
module.exports = questions;
