
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
  What is the surname of the character Vince in Just Good Friends?|Pinner|Warrender|Lacey|Glover|Easy|Vince Pinner|Character Surname|Paul Nicholas Role|Main Character|Romantic Lead|Family Name|Cast Identity
  What is Penny's surname in Just Good Friends?|Warrender|Pinner|Binns|Cochran|Easy|Penny Warrender|Character Surname|Jan Francis Role|Family Name|Female Lead|Character Identity|BBC Comedy
  What did Vince do to Penny on the day they were supposed to marry?|Left her waiting at the church|Missed their flight to Paris|Forgot the wedding rings|Married her sister instead|Easy|Abandoned Wedding|Vince Pinner|Penny Warrender|Jilted Bride|Relationship History|Wedding Day|Broken Engagement
  At what kind of concert did Vince first meet Penny before their broken engagement?|A Rolling Stones concert|A Beatles reunion concert|A Queen concert|A David Bowie concert|Medium|Rolling Stones|First Meeting|1976 Concert|Vince And Penny|Romantic Backstory|Music Event|Courtship
  Approximately how long had Vince and Penny been apart when they met again at the series' start?|Five years|Six months|Ten years|One year|Medium|Five Year Separation|Former Couple|Chance Reunion|Series Premise|Old Relationship|1983 Storyline|Jilted Wedding
  Who is Penny Warrender's mother?|Daphne Warrender|Rita Pinner|Gina Pinner|Louise|Easy|Daphne Warrender|Penny Mother|Warrender Family|Parent Daughter|Family Relations|Character Name|BBC Sitcom
  Which actress portrayed Penny's mother Daphne Warrender?|Sylvia Kay|Ann Lynn|Charlotte Seeley|Rachel Bell|Medium|Sylvia Kay|Daphne Warrender|Character Casting|Penny Mother|Supporting Actress|Warrender Household|Programme Credits
  Who is Penny Warrender's father in Just Good Friends?|Norman Warrender|Les Pinner|Graham|Clifford Pinner|Medium|Norman Warrender|Penny Father|Warrender Parents|Family Character|Daphne Husband|Character Relationships|BBC Comedy
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
  What kind of new staff member arrives in Adam's Rib?|A young female doctor|A new hospital chaplain|A specialist dentist|A retired army nurse|Medium|Adams Rib|Female Doctor|Medical Staffing|Ward Reception|Series Three|1981 Episode|Clinical Team
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

  module.exports = questions;
