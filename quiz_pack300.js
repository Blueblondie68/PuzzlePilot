
 // quiz_pack300.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: 30 Rock - Series Five (2010-2011)
 // Covers all 23 broadcast episodes; the two-part 100th episode is included.
 // Seven individually chosen, question-specific tags per item.
 // Pack 300 already loads through quiz_bank.js (range 1–558).
 // Row: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven specific tags

 const groups = [
   {
     topic: 'The Fabian Strategy, When It Rains It Pours and Lets Stay Together',
     year: '2010',
     facts: `Which pilot is Liz dating at the beginning of the fifth series of 30 Rock?|Carol Burnett|Floyd DeBarber|Dennis Duffy|Wesley Snipes|Easy|Liz Lemon|Carol Burnett|The Fabian Strategy|Airline Pilot|Romantic Relationship|Season Premiere|2010 Story
 Whose relationship with Liz does Jack interfere with in The Fabian Strategy?|Carol Burnett's|Floyd DeBarber's|Dennis Duffy's|Drew Baird's|Easy|Jack Donaghy|Liz Lemon|Carol Burnett|The Fabian Strategy|Unwanted Advice|Dating Interference|Couple Conflict
 Which woman wants to redecorate Jack's apartment in The Fabian Strategy?|Avery Jessup|Nancy Donovan|Colleen Donaghy|Jenna Maroney|Easy|Avery Jessup|Jack Donaghy|Apartment Redecoration|The Fabian Strategy|Couple Compromise|Home Life|2010 Episode
 Which TGS performer unexpectedly becomes a producer in The Fabian Strategy?|Jenna Maroney|Tracy Jordan|Danny Baker|Josh Girard|Easy|Jenna Maroney|TGS Producer|The Fabian Strategy|New Responsibilities|Show Production|Season Five|Workplace Comedy
 Whose absence from the page programme does Tracy struggle with in The Fabian Strategy?|Kenneth Parcell's|Jonathan's|Cerie Xerox's|Toofer Spurlock's|Easy|Tracy Jordan|Kenneth Parcell|Former NBC Page|The Fabian Strategy|Workplace Separation|Friendship|Season Five
 What boosts Liz's confidence with other men in When It Rains It Pours?|Her relationship with Carol|A promotion to network president|A successful singing audition|Winning the lottery|Easy|Liz Lemon|Carol Burnett|New Confidence|When It Rains It Pours|Dating Life|Personal Charisma|2010 Episode
 What does Jack begin creating for his unborn child in When It Rains It Pours?|Recorded advice videos|A handwritten atlas|A collection of lullabies|A family cookbook|Medium|Jack Donaghy|Avery Jessup|Future Child|Video Messages|When It Rains It Pours|Fatherhood Preparation|Family Legacy
 Who is determined to be present at the birth of his next child in When It Rains It Pours?|Tracy Jordan|Jack Donaghy|Pete Hornberger|Floyd DeBarber|Easy|Tracy Jordan|Angie Jordan|Childbirth|When It Rains It Pours|Family Responsibilities|Expectant Father|2010 Plot
 What problem at TGS does Liz use her newfound confidence to solve in When It Rains It Pours?|A difficult editor|An equipment theft|A missing costume|A studio power cut|Medium|Liz Lemon|Pete Hornberger|Difficult Editor|When It Rains It Pours|Post Production|Workplace Confidence|Staff Problem
 Where must Jack testify about NBC and Kabletown in Lets Stay Together?|Before Congress|At the United Nations|In a New York court|At the White House|Easy|Jack Donaghy|Congressional Hearing|Lets Stay Together|NBC Kabletown Merger|Washington DC|Corporate Accountability|2010 Story
 What does Congresswoman Regina Bookman demand from NBC in Lets Stay Together?|Greater diversity in programmes|An end to all advertising|A new sports channel|More foreign-language news|Medium|Regina Bookman|NBC Programming|Lets Stay Together|Representation|Congressional Hearing|Diversity|Kabletown Merger
 Who helps Kenneth try to rejoin NBC's competitive page programme?|Jenna Maroney|Avery Jessup|Angie Jordan|Nancy Donovan|Easy|Kenneth Parcell|Jenna Maroney|NBC Page Programme|Lets Stay Together|Reapplication|Staff Support|2010 Episode`,
   },
   {
     topic: 'Live Show, Reaganing and Gentlemans Intermission',
     year: '2010',
     facts: `Which milestone birthday does Liz think her colleagues have forgotten in Live Show?|Her fortieth|Her thirtieth|Her fiftieth|Her thirty-fifth|Easy|Liz Lemon|Fortieth Birthday|Live Show|Forgotten Celebration|2010 Episode|Cast And Crew|Personal Milestone
 What was unusual about the production of 30 Rock's fifth-series episode Live Show?|It was performed live|It was entirely animated|It contained no dialogue|It was filmed underwater|Easy|Live Show|Live Television|Production Format|Season Five|Broadcast Experiment|NBC|2010 Special
 Why were two versions of the episode Live Show produced for American viewers?|To serve East and West Coast broadcasts|To offer two different endings for a competition|To replace a lost recording|To add subtitles to one version|Medium|Live Show|East Coast Version|West Coast Version|Time Zones|Live Broadcast|2010 Television|Production History
 What habit does Jack attempt to give up to support pregnant Avery in Live Show?|Drinking alcohol|Playing golf|Eating meat|Watching sports|Easy|Jack Donaghy|Avery Jessup|Live Show|Alcohol Abstinence|Pregnancy Support|Lifestyle Change|2010 Story
 Which performer deliberately keeps laughing and breaking character in Live Show?|Tracy Jordan|Danny Baker|Kenneth Parcell|Jenna Maroney|Easy|Tracy Jordan|Live Show|Breaking Character|TGS Sketches|Jenna Maroney|Disruptive Performance|Live Comedy
 Which US president inspires the title Reaganing, describing Jack's run of success?|Ronald Reagan|Richard Nixon|Bill Clinton|John F Kennedy|Medium|Reaganing|Ronald Reagan|Jack Donaghy|Perfect Day|Presidential Reference|Episode Title|2010 Story
 Which Frasier actor helps Jenna and Kenneth with a scheme in Reaganing?|Kelsey Grammer|David Hyde Pierce|John Mahoney|Dan Butler|Easy|Kelsey Grammer|Jenna Maroney|Kenneth Parcell|Reaganing|Guest Star|Confidence Trick|Frasier Cast
 For which youth organisation is Tracy filming an advertisement in Reaganing?|Boys and Girls Club|The Scouts|YMCA Swim School|Junior Achievement|Medium|Tracy Jordan|Boys And Girls Club|Reaganing|Charity Advertisement|Commercial Filming|Youth Organisation|2010 Episode
 Who insists Jack establish boundaries in his close friendship with Liz in Gentlemans Intermission?|Avery Jessup|Nancy Donovan|Colleen Donaghy|Elisa Pedreira|Easy|Avery Jessup|Jack Donaghy|Liz Lemon|Gentlemans Intermission|Friendship Boundaries|Romantic Jealousy|2010 Plot
 What nightlife activity does Liz's visiting father pursue in Gentlemans Intermission?|Visiting singles bars|Attending rock concerts|Gambling in casinos|Going ballroom dancing|Easy|Dick Lemon|Liz Lemon|Gentlemans Intermission|New York Visit|Singles Bars|Family Relationships|2010 Episode
 What television production upsets Jenna when she learns Tracy has one but she does not?|A pre-recorded obituary|A documentary series|A wedding video|A late-night interview|Medium|Jenna Maroney|Tracy Jordan|Video Obituary|Gentlemans Intermission|Celebrity Vanity|Network Archives|2010 Plot`,
   },
   {
     topic: 'Brooklyn Without Limits to Christmas Attack Zone',
     year: '2010',
     facts: `What item of clothing does Liz discover at a boutique in Brooklyn Without Limits?|A flattering pair of jeans|A fur coat|An evening gown|A designer hat|Easy|Liz Lemon|Brooklyn Without Limits|Jeans|Clothing Boutique|Shopping|Personal Confidence|2010 Episode
 What political contest does Jack try to influence in Brooklyn Without Limits?|A congressional election|A presidential primary|A mayoral referendum|A governors recall|Easy|Jack Donaghy|Congressional Election|Brooklyn Without Limits|Political Influence|NBC Interests|Campaign Politics|2010 Story
 Which award nomination does Jenna help Tracy pursue in Brooklyn Without Limits?|Golden Globe|Tony Award|BAFTA|Peabody Award|Easy|Tracy Jordan|Jenna Maroney|Golden Globe Nomination|Brooklyn Without Limits|Awards Campaign|Showbusiness Publicity|2010 Episode
 What does Liz win in College that leaves her trying to buy the crew's affection?|A crew lottery|A television quiz jackpot|An inheritance|A poker tournament|Easy|Liz Lemon|College Episode|Crew Lottery|Unexpected Winnings|Colleague Approval|Money|2010 Story
 Which former corporate speciality causes Jack anxiety when sales rise without him in College?|Microwave ovens|Passenger aircraft|Motor vehicles|Industrial printers|Easy|Jack Donaghy|GE Microwave Ovens|College Episode|Sales Figures|Professional Pride|Corporate Career|2010 Episode
 What unusual recording of Jack do the writers discover in College?|His voice on an online dictionary|His singing on a country album|His narration of a children's film|His speech on an answering machine|Medium|Jack Donaghy|Online Dictionary|Pronunciation Guide|TGS Writers|College Episode|Voice Recording|Office Mischief
 What professional does Jack advise Liz to consult in Chain Reaction of Mental Anguish?|A therapist|A driving instructor|A financial adviser|A personal trainer|Easy|Jack Donaghy|Liz Lemon|Therapy Advice|Chain Reaction Of Mental Anguish|Relationship Worry|Carol Burnett|2010 Story
 Who becomes Liz's unwilling listener when she starts sharing her relationship anxieties in Chain Reaction of Mental Anguish?|Kenneth Parcell|Jenna Maroney|Frank Rossitano|Danny Baker|Easy|Liz Lemon|Kenneth Parcell|Chain Reaction Of Mental Anguish|Personal Confession|Informal Therapy|Workplace Friendship|2010 Episode
 In which Manhattan destination does Tracy want Jack to invest in a theme restaurant for his son?|Times Square|Central Park|Wall Street|Greenwich Village|Medium|Tracy Jordan|Times Square|Theme Restaurant|Chain Reaction Of Mental Anguish|Son Business|Jack Donaghy|2010 Plot
 Which two characters celebrate six months together in Chain Reaction of Mental Anguish?|Jenna and Paul|Liz and Carol|Jack and Avery|Tracy and Angie|Easy|Jenna Maroney|Paul Lastname|Six Month Anniversary|Chain Reaction Of Mental Anguish|Unusual Romance|Relationship Milestone|2010 Story
 Whose Christmas visit forces Jack to confront family secrets in Christmas Attack Zone?|His mother Colleen's|His brother Eddie's|His father Milton's|His cousin Randy's|Easy|Colleen Donaghy|Jack Donaghy|Christmas Attack Zone|Family Secrets|Holiday Visit|Mother Son Relationship|2010 Episode
 Why does Tracy buy the rights to one of his own films in Christmas Attack Zone?|To stop it being released|To remake it in 3D|To sell it to Netflix|To give it to his children|Medium|Tracy Jordan|Film Rights|Christmas Attack Zone|Protecting Reputation|Serious Actor Image|Suppressed Movie|2010 Plot`,
   },
   {
     topic: 'Mrs Donaghy through Double-Edged Sword',
     year: '2011',
     facts: `Whom does Jack accidentally marry because of a mix-up at his wedding to Avery?|Liz Lemon|Colleen Donaghy|Jenna Maroney|Nancy Donovan|Easy|Jack Donaghy|Liz Lemon|Mrs Donaghy|Wedding Mix Up|Marriage Certificate|Avery Jessup|2011 Episode
 Why was Liz standing beside Jack during the mistaken wedding ceremony in Mrs Donaghy?|She was filling in as best man|She was the wedding photographer|She was officiating the wedding|She was Avery's bridesmaid|Medium|Liz Lemon|Jack Donaghy|Mrs Donaghy|Substitute Best Man|Wedding Ceremony|Avery Jessup|Marriage Confusion
 What workplace arrangement causes Jenna and Danny to quarrel in Mrs Donaghy?|Sharing a dressing room|Sharing a writing desk|Taking the same acting role|Working alternating night shifts|Easy|Jenna Maroney|Danny Baker|Shared Dressing Room|Mrs Donaghy|Studio Space|Workplace Argument|2011 Story
 Which TGS star receives worrying medical news in Mrs Donaghy?|Tracy Jordan|Jenna Maroney|Liz Lemon|Danny Baker|Easy|Tracy Jordan|Leo Spaceman|Health Scare|Mrs Donaghy|Angie Jordan|Career Anxiety|2011 Episode
 What does Jack pre-record in Operation Righteous Cowboy Lightning to profit from future emergencies?|Disaster relief telethons|Election victory speeches|Award ceremony tributes|Emergency weather forecasts|Easy|Jack Donaghy|Disaster Telethons|Operation Righteous Cowboy Lightning|Pre Recorded Benefits|Profit Scheme|Network Programming|2011 Story
 Whose reality television cameras does Liz try to use to her advantage in Operation Righteous Cowboy Lightning?|Angie Jordan's|Avery Jessup's|Jenna Maroney's|Nancy Donovan's|Easy|Angie Jordan|Reality Camera Crew|Liz Lemon|Operation Righteous Cowboy Lightning|TGS Publicity|Tracy Family|2011 Episode
 Which TGS writer tells an untruth to seem valuable in a future apocalypse in Operation Righteous Cowboy Lightning?|J D Lutz|Frank Rossitano|Toofer Spurlock|Sue Laroche Van der Hout|Medium|J D Lutz|Apocalypse Survival|Operation Righteous Cowboy Lightning|Writers Room|False Claim|Staff Status|2011 Plot
 Whose business ideas does Jack appropriate to impress Kabletown executives in Que Sorpresa?|Kenneth Parcell's|Liz Lemon's|Tracy Jordan's|Pete Hornberger's|Easy|Jack Donaghy|Kenneth Parcell|Que Sorpresa|Stolen Ideas|Corporate Impression|Kabletown Executives|2011 Story
 What does Liz pretend to be in Que Sorpresa to help Avery?|Pregnant|Engaged|A television executive|A qualified doctor|Easy|Liz Lemon|Avery Jessup|Fake Pregnancy|Que Sorpresa|Workplace Deception|Helping Friend|2011 Episode
 To which country do Jack and Avery travel immediately before their baby arrives in Double-Edged Sword?|Canada|Mexico|France|Ireland|Easy|Jack Donaghy|Avery Jessup|Canada|Double Edged Sword|Expectant Parents|Foreign Getaway|2011 Episode
 Why do Jack and Avery desperately seek to leave Canada in Double-Edged Sword?|Avery goes into labour|They lose their passports|Jack is arrested|A winter storm closes their hotel|Easy|Avery Jessup|Childbirth|Canada|Double Edged Sword|Jack Donaghy|Citizenship Anxiety|2011 Plot
 What prevents Liz's holiday flight with Carol from departing in Double-Edged Sword?|The plane is stuck on the tarmac|The pilot misses his train|The plane is diverted to Iceland|A volcano closes the airport|Easy|Liz Lemon|Carol Burnett|Grounded Flight|Double Edged Sword|Airport Tarmac|Romantic Getaway|2011 Story
 Which combination of four entertainment awards has Tracy finally achieved in Double-Edged Sword?|Emmy Grammy Oscar and Tony|Emmy BAFTA Oscar and Tony|Grammy Pulitzer Oscar and Tony|Emmy Grammy Olivier and Tony|Medium|Tracy Jordan|EGOT|Double Edged Sword|Entertainment Awards|Career Achievement|Celebrity Status|2011 Episode`,
   },
   {
     topic: 'Never Too Late, TGS Hates Women and Queen of Jordan',
     year: '2011',
     facts: `Who tries to find Liz a new romantic interest after her breakup in Its Never Too Late for Now?|Jenna Maroney|Avery Jessup|Colleen Donaghy|Angie Jordan|Easy|Jenna Maroney|Liz Lemon|Its Never Too Late For Now|Matchmaking|Breakup Recovery|Friendship|2011 Episode
 Which two TGS employees start a rock band in Its Never Too Late for Now?|Pete and Frank|Tracy and Kenneth|Toofer and Lutz|Danny and Jack|Easy|Pete Hornberger|Frank Rossitano|Rock Band|Its Never Too Late For Now|Office Musicians|New Hobby|2011 Story
 Which financial negotiation becomes difficult for Jack because he is sleep-deprived as a new father?|His nanny's salary|A mortgage renewal|A sports broadcasting contract|His mother's rent|Medium|Jack Donaghy|Nanny Salary|Sleep Deprivation|Its Never Too Late For Now|New Fatherhood|Negotiation|2011 Episode
 Which new female comedy writer does Liz hire in TGS Hates Women?|Abby Flynn|Nancy Donovan|Claire Harper|Cerie Xerox|Easy|Abby Flynn|Liz Lemon|New Comedy Writer|TGS Hates Women|Writers Room|Gender Stereotypes|2011 Episode
 What criticism of TGS prompts Liz to recruit a new female writer?|The show is sexist|The show has no live audience|The show is too expensive|The show has too many musical sketches|Easy|TGS Hates Women|Misogyny Criticism|Liz Lemon|Blog Accusation|Comedy Writing|New Hire|2011 Story
 Who is Jack's young rival for a future Kabletown leadership role in TGS Hates Women?|Kaylie Hooper|Kathy Geiss|Cerie Xerox|Phoebe|Medium|Kaylie Hooper|Jack Donaghy|Kabletown Succession|TGS Hates Women|Family Heir|Corporate Ambition|2011 Episode
 Which reality television programme gives its name to an episode of 30 Rock Series Five?|Queen of Jordan|The Real TGS|House of Donaghy|The Page Diaries|Easy|Queen Of Jordan|Reality Television|Angie Jordan|Tracy Family|Show Within Show|Episode Title|2011 Story
 Which actress plays Angie Jordan, the star of Queen of Jordan?|Sherri Shepherd|Regina Hall|Taraji P Henson|Vivica A Fox|Easy|Sherri Shepherd|Angie Jordan|Queen Of Jordan|Guest Actress|Tracy Wife|Reality TV Star|2011 Casting
 Where is Tracy staying while Liz schemes to bring him back during Queen of Jordan?|Africa|Canada|Iceland|Australia|Easy|Tracy Jordan|Africa|Queen Of Jordan|Liz Lemon|Return To TGS|Missing Performer|2011 Episode
 Who feels especially embarrassed by Angie's reality programme filming at TGS?|Jack Donaghy|Danny Baker|Floyd DeBarber|Don Geiss|Easy|Jack Donaghy|Queen Of Jordan|Reality Cameras|Public Embarrassment|Angie Jordan|Workplace Image|2011 Plot
 Which TGS writer reconnects with a former love in Queen of Jordan?|Frank Rossitano|Toofer Spurlock|J D Lutz|Josh Girard|Easy|Frank Rossitano|Queen Of Jordan|Past Romance|Relationship Reconnection|Writers Room|Personal Life|2011 Story`,
   },
   {
     topic: 'Plan B, I Heart Connecticut and the 100th TGS',
     year: '2011',
     facts: `What happens to TGS that sends its employees searching for alternative jobs in Plan B?|It goes on hiatus|It moves to London|It changes to a news programme|It loses all its actors|Easy|TGS Hiatus|Plan B|Staff Careers|Job Insecurity|Liz Lemon|Production Break|2011 Episode
 Whose return does Jack engineer to help save a troubled cable network in Plan B?|Devon Banks|Don Geiss|Dennis Duffy|Floyd DeBarber|Easy|Jack Donaghy|Devon Banks|Plan B|Cable Network|Former Rival|Corporate Rescue|2011 Plot
 Who tries to reassure the TGS team that its interruption is only temporary in Plan B?|Liz Lemon|Jenna Maroney|Angie Jordan|Avery Jessup|Easy|Liz Lemon|TGS Staff|Plan B|Forced Hiatus|Job Security|Team Leadership|2011 Story
 Which missing cast member do Liz and Kenneth search New York for in I Heart Connecticut?|Tracy Jordan|Danny Baker|Jenna Maroney|Josh Girard|Easy|Liz Lemon|Kenneth Parcell|Tracy Jordan|I Heart Connecticut|Missing Star|New York Search|2011 Episode
 Which US state is the setting for Jenna's horror film project in I Heart Connecticut?|Connecticut|Maine|Vermont|New Jersey|Easy|Jenna Maroney|Connecticut|Horror Film|I Heart Connecticut|Production Location|Film Career|2011 Story
 Who challenges the TGS writers and crew to a strength competition in I Heart Connecticut?|Pete Hornberger|Jack Donaghy|Tracy Jordan|Devon Banks|Medium|Pete Hornberger|Strength Contest|I Heart Connecticut|TGS Crew|Workplace Competition|Personal Pride|2011 Plot
 Which Kabletown executive threatens to cancel TGS before its milestone broadcast?|Hank Hooper|Don Geiss|Devon Banks|Milton Greene|Easy|Hank Hooper|Kabletown Executive|100 Part One|TGS Cancellation|Network Ownership|Corporate Decision|2011 Episode
 What broadcast milestone is TGS preparing to celebrate in the two-part episode 100?|Its hundredth episode|Its tenth anniversary|Its five-hundredth sketch|Its first international broadcast|Easy|TGS One Hundred|100 Part One|Centenary Episode|Milestone Broadcast|Liz Lemon|Show History|2011 Story
 Who persuades Hank Hooper to allow TGS one more opportunity to prove itself?|Jack Donaghy|Kenneth Parcell|Tracy Jordan|Pete Hornberger|Easy|Jack Donaghy|Hank Hooper|100 Part One|Final Chance|TGS Survival|Executive Persuasion|2011 Episode
 Which TGS performer considers becoming a mother during the hundredth-episode crisis?|Jenna Maroney|Liz Lemon|Cerie Xerox|Angie Jordan|Easy|Jenna Maroney|Motherhood Question|100 Part Two|Family Future|TGS Milestone|Personal Reflection|2011 Story
 What dangerous building problem interrupts production of the TGS hundredth episode?|A gas leak|A burst water main|A lift failure|An electrical fire|Medium|Gas Leak|TGS Studio|100 Part One|Workplace Hazard|Production Disruption|Building Evacuation|2011 Episode
 On what date did the two-part 100th-episode story originally air in the US?|21 April 2011|5 May 2011|17 March 2011|20 January 2011|Medium|21 April 2011|100 Part One|100 Part Two|Original Airdate|NBC Broadcast|Series Five|Television History`,
   },
   {
     topic: 'Everything Sunny and Respawn: Season Finale',
     year: '2011',
     facts: `Which member of Jack's family is held hostage abroad late in the fifth series?|Avery Jessup|Colleen Donaghy|Nancy Donovan|Bianca Donaghy|Easy|Avery Jessup|Jack Donaghy|Everything Sunny All The Time Always|Hostage Crisis|Family Separation|2011 Story|Season Finale Arc
 What home-improvement project occupies Liz in Everything Sunny All the Time Always?|Renovating her dream apartment|Building a garden shed|Repainting the TGS studio|Buying a beach house|Easy|Liz Lemon|Dream Apartment|Renovation Plans|Everything Sunny All The Time Always|Home Project|Personal Independence|2011 Episode
 Who discovers that Kenneth, Dot Com and Grizz have become close friends without him?|Tracy Jordan|Jack Donaghy|Danny Baker|Pete Hornberger|Easy|Tracy Jordan|Kenneth Parcell|Dot Com Slattery|Grizz Griswold|Everything Sunny All The Time Always|Friendship Jealousy|2011 Story
 Which former US secretary of state appears as herself in Everything Sunny All the Time Always?|Condoleezza Rice|Madeleine Albright|Hillary Clinton|Colin Powell|Medium|Condoleezza Rice|Political Cameo|Everything Sunny All The Time Always|Guest Appearance|Jack Donaghy|Former Secretary Of State|2011 Episode
 Who spoils Liz's attempted summer holiday by turning up in Respawn?|Tracy Jordan|Floyd DeBarber|Devon Banks|Don Geiss|Easy|Liz Lemon|Tracy Jordan|Respawn|Interrupted Holiday|Season Finale|2011 Story|Unwanted Visitor
 Who becomes Jack's companion when he feels lonely in Respawn?|Kenneth Parcell|Dennis Duffy|Floyd DeBarber|Frank Rossitano|Easy|Jack Donaghy|Kenneth Parcell|Respawn|Loneliness|Friendship|Avery Jessup|Season Finale
 What commercial role complicates Jenna's romance with Paul in Respawn?|Wool Council spokeswoman|Insurance company spokesperson|Airline safety presenter|Soft drink ambassador|Medium|Jenna Maroney|Wool Council|Paul Lastname|Respawn|Advertising Job|Romantic Conflict|2011 Finale
 How many regular episodes were broadcast during the fifth series of 30 Rock?|23|15|19|26|Easy|Series Five|Twenty Three Episodes|NBC Comedy|2010 To 2011|Episode Count|Television Production|Broadcast History
 In which month and year did 30 Rock's fifth series conclude its original American run?|May 2011|December 2010|September 2011|January 2012|Easy|May 2011|Respawn|Season Five Finale|NBC Broadcast|Original Airdate|Television Timeline|2011 Ending`,
   },
 ];

 const FIRST_ID = 12830;
 let index = 0;
 const questions = groups.flatMap(group =>
   group.facts.trim().split('\n').map(line => {
     const parts = line.trim().split('|').map(part => part.trim());
     const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
     if (parts.length !== 13) {
       throw new Error(`Expected seven specialist tags at ${id}; got ${parts.length - 6}`);
     }
     const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
     const wrongAnswers = [wrong1, wrong2, wrong3];
     if (!question || !correctAnswer || wrongAnswers.some(answer => !answer)) {
       throw new Error(`Missing question or answer at ${id}`);
     }
     if (new Set([correctAnswer, ...wrongAnswers].map(answer => answer.toLowerCase())).size !== 4) {
       throw new Error(`Repeated answer option at ${id}`);
     }
     if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.length !== 7 || specificTags.some(tag => !tag)) {
       throw new Error(`Invalid difficulty or specialist tags at ${id}`);
     }
     const answers = [...wrongAnswers];
     answers.splice(index % 4, 0, correctAnswer);
     const tags = [...new Map([
       'American Television', 'American Sitcom', '30 Rock', 'NBC',
       '2010-2011', group.year, '2010s', 'Season Five', 'Workplace Comedy',
       'Sketch Comedy', 'Comedy Series', group.topic, correctAnswer, ...specificTags
     ].map(tag => [tag.toLowerCase(), tag])).values()];
     const item = { id, category: 'Television', question, answers, correctAnswer, difficulty, tags, dailyEligible: true };
     index++;
     return item;
   })
 );

 const EXPECTED_COUNT = 80;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_12830' ||
     questions[questions.length - 1].id !== 'tv_12909') {
   throw new Error('Unexpected question ID range');
 }
 if (new Set(questions.map(q => q.id)).size !== questions.length ||
     new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
   throw new Error('Duplicate question IDs or wording');
 }
 if (questions.some(q => q.category !== 'Television' || q.answers.length !== 4 ||
     !q.answers.includes(q.correctAnswer) || q.tags.length < 16 ||
     q.tags.some(tag => !tag) || q.dailyEligible !== true)) {
   throw new Error('Incomplete exported question metadata');
 }

// 21 November 2026: Season-five (23 episode) cast, plot and production audit.
// Original questions tv_12830–tv_12909 and IDs remain exactly as before.
// 30 distinct researched questions follow, tv_35825–tv_35854.
// References: https://en.wikipedia.org/wiki/30_Rock_season_5
// https://thetvdb.com/series/30-rock/allseasons/official
// https://tv.apple.com/gb/episode/queen-of-jordan/umc.cmc.6w35doy55q2nh6qmmaic5lvi5
// https://www.tvmaze.com/episodes/49252/30-rock-5x23-respawn
const auditAdditions = [
  {
    "id": "tv_35825",
    "category": "Television",
    "question": "Which actor plays the difficult TGS editor Ritchie in 30 Rock's When It Rains, It Pours?",
    "answers": [
      "Paul Giamatti",
      "Steve Buscemi",
      "Will Arnett",
      "Jon Hamm"
    ],
    "correctAnswer": "Paul Giamatti",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: When It Rains, It Pours",
      "Subject: Ritchie the television editor",
      "Storyline: Liz and Pete confront the editor",
      "Detail: Guest actor Paul Giamatti",
      "Correct answer: Paul Giamatti",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which actor plays the difficult TGS editor Ritchie in 30 Rock's When It Rains, It Pours?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35826",
    "category": "Television",
    "question": "Which performer plays Congresswoman Regina Bookman in the 30 Rock episode Let's Stay Together?",
    "answers": [
      "Angela Bassett",
      "Queen Latifah",
      "Whoopi Goldberg",
      "Vivica A. Fox"
    ],
    "correctAnswer": "Queen Latifah",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Let's Stay Together",
      "Subject: Regina Bookman guest casting",
      "Storyline: Jack's diversity hearing",
      "Detail: Political satire casting",
      "Correct answer: Queen Latifah",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which performer plays Congresswoman Regina Bookman in the 30 Rock episode Let's Stay Together?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35827",
    "category": "Television",
    "question": "Which actor appears in 30 Rock as the star of a proposed sitcom called Let's Stay Together?",
    "answers": [
      "Ken Howard",
      "James Earl Jones",
      "John Amos",
      "Richard Roundtree"
    ],
    "correctAnswer": "John Amos",
    "difficulty": "Hard",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Let's Stay Together",
      "Subject: Fictional programme's lead actor",
      "Storyline: NBC diversity programming",
      "Detail: John Amos cameo",
      "Correct answer: John Amos",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which actor appears in 30 Rock as the star of a proposed sitcom called Let's Stay Together?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35828",
    "category": "Television",
    "question": "Which actress plays a flashback version of Liz Lemon in 30 Rock's live fifth-season episode?",
    "answers": [
      "Amy Poehler",
      "Jane Lynch",
      "Rachel Dratch",
      "Julia Louis-Dreyfus"
    ],
    "correctAnswer": "Julia Louis-Dreyfus",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Live Show",
      "Subject: Flashback Liz Lemon portrayal",
      "Storyline: Live Show guest appearance",
      "Detail: Julia Louis-Dreyfus",
      "Correct answer: Julia Louis-Dreyfus",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which actress plays a flashback version of Liz Lemon in 30 Rock's live fifth-season episode?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35829",
    "category": "Television",
    "question": "Which Saturday Night Live performer plays Carol's co-pilot Kevin in 30 Rock's Live Show?",
    "answers": [
      "Bill Hader",
      "Andy Samberg",
      "Seth Meyers",
      "Will Forte"
    ],
    "correctAnswer": "Bill Hader",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Live Show",
      "Subject: Carol's co-pilot actor",
      "Storyline: Live television production",
      "Detail: Bill Hader portrays Kevin",
      "Correct answer: Bill Hader",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which Saturday Night Live performer plays Carol's co-pilot Kevin in 30 Rock's Live Show?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35830",
    "category": "Television",
    "question": "What type of elaborate scam involves Jenna, Kenneth and Kelsey Grammer in 30 Rock's Reaganing?",
    "answers": [
      "A fake art auction",
      "An ice-cream scam",
      "A lottery-ticket scheme",
      "A counterfeit autograph business"
    ],
    "correctAnswer": "An ice-cream scam",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Reaganing",
      "Subject: Kelsey Grammer confidence trick",
      "Storyline: Jenna and Kenneth collaborate",
      "Detail: Ice cream con",
      "Correct answer: An ice-cream scam",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: What type of elaborate scam involves Jenna, Kenneth and Kelsey Grammer in 30 Rock's Reaganing?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35831",
    "category": "Television",
    "question": "Which Mad Men actor plays political candidate Steve Austin in 30 Rock?",
    "answers": [
      "Jon Hamm",
      "Vincent Kartheiser",
      "John Slattery",
      "Rich Sommer"
    ],
    "correctAnswer": "John Slattery",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Brooklyn Without Limits",
      "Subject: Steve Austin political casting",
      "Storyline: Jack backs a congressional candidate",
      "Detail: John Slattery guest appearance",
      "Correct answer: John Slattery",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which Mad Men actor plays political candidate Steve Austin in 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35832",
    "category": "Television",
    "question": "Which actor plays Kabletown owner Hank Hooper during the fifth season of 30 Rock?",
    "answers": [
      "Rip Torn",
      "Alan Alda",
      "John Amos",
      "Ken Howard"
    ],
    "correctAnswer": "Ken Howard",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Season Five",
      "Subject: Kabletown chief executive casting",
      "Storyline: Hank Hooper",
      "Detail: Jack's corporate boss",
      "Correct answer: Ken Howard",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which actor plays Kabletown owner Hank Hooper during the fifth season of 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35833",
    "category": "Television",
    "question": "Which Oscar-winning actor appears as himself in 30 Rock's pre-recorded disaster telethon storyline?",
    "answers": [
      "Robert De Niro",
      "Al Pacino",
      "Robert Duvall",
      "Dustin Hoffman"
    ],
    "correctAnswer": "Robert De Niro",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Operation Righteous Cowboy Lightning",
      "Subject: Disaster telethon celebrity",
      "Storyline: Jack's pre-recorded benefit",
      "Detail: Robert De Niro cameo",
      "Correct answer: Robert De Niro",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which Oscar-winning actor appears as himself in 30 Rock's pre-recorded disaster telethon storyline?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35834",
    "category": "Television",
    "question": "Which fictional island suffers a storm in 30 Rock after Jack pre-records a disaster telethon?",
    "answers": [
      "San Esmeralda",
      "Mago",
      "Parador",
      "Naboombu"
    ],
    "correctAnswer": "Mago",
    "difficulty": "Hard",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Operation Righteous Cowboy Lightning",
      "Subject: Mago storm",
      "Storyline: Disaster relief broadcast misfires",
      "Detail: Fictional island affected",
      "Correct answer: Mago",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which fictional island suffers a storm in 30 Rock after Jack pre-records a disaster telethon?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35835",
    "category": "Television",
    "question": "Which actress portrays Carmen Chao, Avery's journalistic rival, in 30 Rock?",
    "answers": [
      "Elizabeth Banks",
      "Tiffani Thiessen",
      "Vanessa Minnillo",
      "Anna Chlumsky"
    ],
    "correctAnswer": "Vanessa Minnillo",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: ¡Qué Sorpresa!",
      "Subject: Carmen Chao performer",
      "Storyline: Avery and Liz's pregnancy deception",
      "Detail: Vanessa Minnillo guest star",
      "Correct answer: Vanessa Minnillo",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which actress portrays Carmen Chao, Avery's journalistic rival, in 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35836",
    "category": "Television",
    "question": "Characters from which police drama make a crossover appearance in 30 Rock's ¡Qué Sorpresa!?",
    "answers": [
      "CSI: Miami",
      "NYPD Blue",
      "The Wire",
      "Law & Order: Special Victims Unit"
    ],
    "correctAnswer": "Law & Order: Special Victims Unit",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: ¡Qué Sorpresa!",
      "Subject: Munch and Tutuola crossover",
      "Storyline: Detectives played by Richard Belzer and Ice-T",
      "Detail: Police procedural guest characters",
      "Correct answer: Law & Order: Special Victims Unit",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Characters from which police drama make a crossover appearance in 30 Rock's ¡Qué Sorpresa!?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35837",
    "category": "Television",
    "question": "Which Kabletown promotional gift causes a rivalry between Jenna and Tracy in 30 Rock's ¡Qué Sorpresa!?",
    "answers": [
      "A single sweater",
      "A company mobile phone",
      "A pair of concert tickets",
      "A signed television script"
    ],
    "correctAnswer": "A single sweater",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: ¡Qué Sorpresa!",
      "Subject: Kabletown gift dispute",
      "Storyline: Tracy and Jenna compete",
      "Detail: One corporate sweater",
      "Correct answer: A single sweater",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which Kabletown promotional gift causes a rivalry between Jenna and Tracy in 30 Rock's ¡Qué Sorpresa!?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35838",
    "category": "Television",
    "question": "What name do Jack and Avery give their baby daughter in 30 Rock's Double-Edged Sword?",
    "answers": [
      "Margaret 'Maggie' Donaghy",
      "Elizabeth 'Liddy' Donaghy",
      "Colleen 'Connie' Donaghy",
      "Regina 'Gina' Donaghy"
    ],
    "correctAnswer": "Elizabeth 'Liddy' Donaghy",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Double-Edged Sword",
      "Subject: Jack and Avery's daughter named",
      "Storyline: Canadian-American birth",
      "Detail: Elizabeth Liddy Donaghy",
      "Correct answer: Elizabeth 'Liddy' Donaghy",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: What name do Jack and Avery give their baby daughter in 30 Rock's Double-Edged Sword?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35839",
    "category": "Television",
    "question": "Which actor plays the Canadian smuggler Lorne in 30 Rock's Double-Edged Sword?",
    "answers": [
      "Daniel Dae Kim",
      "Steven Yeun",
      "John Cho",
      "Ken Jeong"
    ],
    "correctAnswer": "John Cho",
    "difficulty": "Hard",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Double-Edged Sword",
      "Subject: Lorne guest performer",
      "Storyline: Canadian border storyline",
      "Detail: John Cho cameo",
      "Correct answer: John Cho",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which actor plays the Canadian smuggler Lorne in 30 Rock's Double-Edged Sword?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35840",
    "category": "Television",
    "question": "Which actor plays Anders, the man hired to seduce Liz in 30 Rock's It's Never Too Late for Now?",
    "answers": [
      "Jason Sudeikis",
      "Val Emmich",
      "Michael Sheen",
      "Eion Bailey"
    ],
    "correctAnswer": "Eion Bailey",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: It's Never Too Late for Now",
      "Subject: Anders guest casting",
      "Storyline: Liz's friends arrange an encounter",
      "Detail: Swiss escort",
      "Correct answer: Eion Bailey",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which actor plays Anders, the man hired to seduce Liz in 30 Rock's It's Never Too Late for Now?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35841",
    "category": "Television",
    "question": "Which actress plays new writer Abby Flynn in 30 Rock's TGS Hates Women?",
    "answers": [
      "Cristin Milioti",
      "Anna Chlumsky",
      "Ellie Kemper",
      "Alison Brie"
    ],
    "correctAnswer": "Cristin Milioti",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: TGS Hates Women",
      "Subject: Abby Flynn performer",
      "Storyline: Liz hires a new writer",
      "Detail: Cristin Milioti",
      "Correct answer: Cristin Milioti",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which actress plays new writer Abby Flynn in 30 Rock's TGS Hates Women?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35842",
    "category": "Television",
    "question": "Which actress plays Jack's young succession rival Kaylie Hooper in 30 Rock?",
    "answers": [
      "Kiernan Shipka",
      "Chloë Grace Moretz",
      "Hailee Steinfeld",
      "Elle Fanning"
    ],
    "correctAnswer": "Chloë Grace Moretz",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: TGS Hates Women",
      "Subject: Kaylie Hooper casting",
      "Storyline: Hank Hooper's granddaughter",
      "Detail: Chloë Grace Moretz",
      "Correct answer: Chloë Grace Moretz",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which actress plays Jack's young succession rival Kaylie Hooper in 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35843",
    "category": "Television",
    "question": "Which actor portrays Angie's stylist D'Fwan in 30 Rock's Queen of Jordan?",
    "answers": [
      "Billy Porter",
      "Leslie Odom Jr.",
      "Tituss Burgess",
      "Wayne Brady"
    ],
    "correctAnswer": "Tituss Burgess",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Queen of Jordan",
      "Subject: D'Fwan guest actor",
      "Storyline: Angie's reality-show entourage",
      "Detail: Tituss Burgess",
      "Correct answer: Tituss Burgess",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which actor portrays Angie's stylist D'Fwan in 30 Rock's Queen of Jordan?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35844",
    "category": "Television",
    "question": "Which actress plays Frank's former teacher Lynn Onkman in the 30 Rock episode Queen of Jordan?",
    "answers": [
      "Sigourney Weaver",
      "Geena Davis",
      "Sissy Spacek",
      "Susan Sarandon"
    ],
    "correctAnswer": "Susan Sarandon",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Queen of Jordan",
      "Subject: Lynn Onkman actor",
      "Storyline: Frank reconnects with a former love",
      "Detail: Susan Sarandon",
      "Correct answer: Susan Sarandon",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which actress plays Frank's former teacher Lynn Onkman in the 30 Rock episode Queen of Jordan?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35845",
    "category": "Television",
    "question": "Which television writer and creator appears as himself during the 30 Rock episode Plan B?",
    "answers": [
      "Aaron Sorkin",
      "David E. Kelley",
      "Chuck Lorre",
      "Joss Whedon"
    ],
    "correctAnswer": "Aaron Sorkin",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Plan B",
      "Subject: Aaron Sorkin appearance",
      "Storyline: Television writers seeking work",
      "Detail: Showrunner cameo",
      "Correct answer: Aaron Sorkin",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which television writer and creator appears as himself during the 30 Rock episode Plan B?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35846",
    "category": "Television",
    "question": "Which actor portrays Reggie, the TGS crew member who bullies Pete in 30 Rock?",
    "answers": [
      "Rob Corddry",
      "Rob Riggle",
      "Bill Hader",
      "Paul Scheer"
    ],
    "correctAnswer": "Rob Riggle",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: I Heart Connecticut",
      "Subject: Reggie guest casting",
      "Storyline: Pete's strength contest",
      "Detail: Rob Riggle",
      "Correct answer: Rob Riggle",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which actor portrays Reggie, the TGS crew member who bullies Pete in 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35847",
    "category": "Television",
    "question": "Which Oscar-winning actor guest-stars as himself in the two-part 30 Rock episode 100?",
    "answers": [
      "Tom Cruise",
      "Michael Douglas",
      "Tom Hanks",
      "Nicolas Cage"
    ],
    "correctAnswer": "Tom Hanks",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: 100",
      "Subject: 100th episode celebrity appearance",
      "Storyline: TGS milestone special",
      "Detail: Tom Hanks",
      "Correct answer: Tom Hanks",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which Oscar-winning actor guest-stars as himself in the two-part 30 Rock episode 100?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35848",
    "category": "Television",
    "question": "Which Batman actor plays maintenance worker Tom in 30 Rock's two-part 100th-episode story?",
    "answers": [
      "Val Kilmer",
      "Christian Bale",
      "George Clooney",
      "Michael Keaton"
    ],
    "correctAnswer": "Michael Keaton",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: 100",
      "Subject: Tom the maintenance worker",
      "Storyline: Gas leak at Rockefeller Plaza",
      "Detail: Michael Keaton",
      "Correct answer: Michael Keaton",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which Batman actor plays maintenance worker Tom in 30 Rock's two-part 100th-episode story?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35849",
    "category": "Television",
    "question": "Which actress portrays North Korean leader Kim Jong-il in 30 Rock's Everything Sunny All the Time Always?",
    "answers": [
      "Margaret Cho",
      "Sandra Oh",
      "Lucy Liu",
      "Ali Wong"
    ],
    "correctAnswer": "Margaret Cho",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Everything Sunny All the Time Always",
      "Subject: Kim Jong-il impersonation",
      "Storyline: Avery's hostage storyline",
      "Detail: Margaret Cho",
      "Correct answer: Margaret Cho",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which actress portrays North Korean leader Kim Jong-il in 30 Rock's Everything Sunny All the Time Always?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35850",
    "category": "Television",
    "question": "In which country is Avery held hostage during the fifth season of 30 Rock?",
    "answers": [
      "Russia",
      "North Korea",
      "China",
      "Iran"
    ],
    "correctAnswer": "North Korea",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Everything Sunny All the Time Always",
      "Subject: Avery kidnapped abroad",
      "Storyline: Hostage involving Kim Jong-il",
      "Detail: North Korea storyline",
      "Correct answer: North Korea",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: In which country is Avery held hostage during the fifth season of 30 Rock?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35851",
    "category": "Television",
    "question": "Which actor portrays Wool Council chairman Eugene Gremby in 30 Rock's Respawn?",
    "answers": [
      "Alan Alda",
      "Ken Howard",
      "Victor Garber",
      "Michael Keaton"
    ],
    "correctAnswer": "Victor Garber",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Respawn",
      "Subject: Wool Council chairman actor",
      "Storyline: Jenna's advertising contract",
      "Detail: Victor Garber",
      "Correct answer: Victor Garber",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which actor portrays Wool Council chairman Eugene Gremby in 30 Rock's Respawn?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35852",
    "category": "Television",
    "question": "Which TV chef and cookery author makes a cameo appearance as herself in 30 Rock's Respawn?",
    "answers": [
      "Martha Stewart",
      "Rachael Ray",
      "Giada De Laurentiis",
      "Ina Garten"
    ],
    "correctAnswer": "Ina Garten",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Respawn",
      "Subject: Cookery celebrity cameo",
      "Storyline: Fifth-season finale",
      "Detail: Ina Garten",
      "Correct answer: Ina Garten",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which TV chef and cookery author makes a cameo appearance as herself in 30 Rock's Respawn?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35853",
    "category": "Television",
    "question": "Which comedian co-wrote the 30 Rock fifth-season finale Respawn with Ron Weiner?",
    "answers": [
      "Hannibal Buress",
      "Donald Glover",
      "John Mulaney",
      "Aziz Ansari"
    ],
    "correctAnswer": "Hannibal Buress",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Respawn",
      "Subject: Respawn co-writer",
      "Storyline: Season-five finale credits",
      "Detail: Hannibal Buress",
      "Correct answer: Hannibal Buress",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: Which comedian co-wrote the 30 Rock fifth-season finale Respawn with Ron Weiner?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35854",
    "category": "Television",
    "question": "How many Primetime Emmy Award nominations did 30 Rock's fifth season receive at the 2011 ceremony?",
    "answers": [
      "Six",
      "Nine",
      "Fourteen",
      "Twenty-two"
    ],
    "correctAnswer": "Nine",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Five",
      "American Television",
      "American Sitcom",
      "NBC",
      "2010-2011",
      "TGS with Tracy Jordan",
      "Television Comedy",
      "Workplace Satire",
      "Episode: Awards and production",
      "Subject: 2011 Primetime Emmy nominations",
      "Storyline: Fifth-season awards recognition",
      "Detail: Nine nominations",
      "Correct answer: Nine",
      "Season Five Character Stories",
      "Original 23 Episode Season",
      "Cast and Episode Trivia",
      "2010s Comedy",
      "Editorial TV Audit November 2026",
      "Question focus: How many Primetime Emmy Award nominations did 30 Rock's fifth season receive at the 2011 ceremony?"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if (questions.length !== 110 ||
    new Set(questions.map(q=>q.id)).size!==questions.length ||
    new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length ||
    questions.some(q=>q.answers.length!==4||
      new Set(q.answers.map(a=>a.trim().toLowerCase())).size!==4||
      q.answers.filter(a=>a===q.correctAnswer).length!==1||
      q.tags.length<16||!q.tags.includes('30 Rock')||q.dailyEligible!==true))
    throw Error('Pack 300 season-five audit validation failed');

 module.exports = questions;
