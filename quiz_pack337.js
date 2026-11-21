
 // quiz_pack337.js
 // PuzzlePilot — The Bigggggg Quiz
 // Porridge (1973 pilot; 1974–1977 series; 1979 film)
 // Going Straight (1978)
 // 92 questions: Porridge 62, Going Straight 30.
 // IDs tv_15902–tv_15993.
 // Seven individually chosen specialist tags per question.

 const facts = `
 Porridge|Who played Norman Stanley Fletcher?|Ronnie Barker|Ronnie Corbett|Richard Beckinsale|Brian Wilde|Easy|Norman Stanley Fletcher|Ronnie Barker|Lead Role|Veteran Prisoner|Character Casting|Prison Sitcom|Fletch
 Porridge|Who played Fletcher's young cellmate Lennie Godber?|Richard Beckinsale|Nicholas Lyndhurst|Sam Kelly|Tony Osoba|Easy|Lennie Godber|Richard Beckinsale|Cellmate|Young Prisoner|Character Casting|Prison Friendship|Main Cast
 Porridge|Which actor portrayed the strict prison officer Mr Mackay?|Fulton Mackay|Brian Wilde|Peter Vaughan|Michael Barrington|Easy|Mr Mackay|Fulton Mackay|Senior Prison Officer|Prison Discipline|Character Casting|Scottish Warder|Slade Staff
 Porridge|Who played the kindly prison officer Mr Barrowclough?|Brian Wilde|Fulton Mackay|Ronnie Barker|Peter Vaughan|Easy|Mr Barrowclough|Brian Wilde|Prison Officer|Rehabilitation|Character Casting|Kindly Warder|Slade Staff
 Porridge|What is the name of the prison where Fletcher serves his sentence?|HMP Slade|HMP Wentworth|HMP Larkhall|HMP Barfield|Easy|HMP Slade|Fictional Prison|Prison Setting|Cumbria|Fletcher Sentence|Institution Name|Series Location
 Porridge|Which writing duo created Porridge?|Dick Clement and Ian La Frenais|Galton and Simpson|Jimmy Perry and David Croft|John Sullivan and Ray Galton|Medium|Dick Clement|Ian La Frenais|Series Creators|Writing Partnership|BBC Comedy|Production Credits|Sitcom Writers
 Porridge|Which Ronnie Barker anthology series first featured Fletcher in 1973?|Seven of One|The Two Ronnies|Open All Hours|The Frost Report|Medium|Seven Of One|1973 Pilot|Ronnie Barker|Anthology Series|Porridge Origins|Television Development|Series History
 Porridge|What was the title of the original 1973 Porridge pilot?|Prisoner and Escort|A Night In|New Faces Old Hands|Going Home|Medium|Prisoner And Escort|Pilot Episode|Seven Of One|1973 Broadcast|Fletcher Introduction|Prison Journey|Episode Title
 Porridge|What is Fletcher's full first and middle name?|Norman Stanley|Leonard Arthur|Harold James|Raymond Henry|Easy|Norman Stanley Fletcher|Character Full Name|Ronnie Barker|Fletch|Prisoner Identity|Main Character|Naming Trivia
 Porridge|Which prisoner does Fletcher take under his wing as a mentor?|Lennie Godber|Harry Grout|Ives|Judge Rawley|Easy|Lennie Godber|Fletcher Mentor|Prison Friendship|First Time Prisoner|Cellmates|Character Relationship|Main Storyline
 Porridge|What is the surname of the feared prison fixer nicknamed Grouty?|Grout|Glover|Godber|Gordon|Easy|Harry Grout|Grouty|Prison Fixer|Inmate Power|Slade Prison|Character Nickname|Prison Hierarchy
 Porridge|Which actor played prison fixer Harry Grout?|Peter Vaughan|Brian Glover|Fulton Mackay|Michael Barrington|Medium|Peter Vaughan|Harry Grout|Grouty|Recurring Cast|Character Casting|Criminal Influence|Prison Power
 Porridge|Which actress played Fletcher's daughter Ingrid?|Patricia Brake|Pauline Quirke|Wendy Richard|Prunella Scales|Medium|Patricia Brake|Ingrid Fletcher|Family Visits|Character Casting|Fletcher Daughter|Prison Family|Supporting Cast
 Porridge|What is the name of Fletcher's daughter who becomes close to Godber?|Ingrid|Marion|Denise|Isobel|Easy|Ingrid Fletcher|Lennie Godber|Romantic Relationship|Fletcher Family|Character Name|Family Link|Future Marriage
 Porridge|What was the first regular episode of Porridge called?|New Faces, Old Hands|The Hustler|Just Desserts|Final Stretch|Medium|New Faces Old Hands|Series One Premiere|1974 Broadcast|Episode Title|Prison Intake|Godber Arrival|Fletcher Return
 Porridge|In which year did Porridge begin its first regular series?|1974|1971|1977|1980|Easy|1974 Premiere|BBC Television|Series One|Original Broadcast|Prison Sitcom|Programme History|Television Year
 Porridge|How many regular series of the original Porridge were made?|Three|Two|Four|Five|Easy|Three Series|Original Porridge|1974 To 1977|Programme Run|British Sitcom|Production History|Series Count
 Porridge|Which officer does Fletcher find easier to manipulate because of his sympathetic nature?|Mr Barrowclough|Mr Mackay|Mr Wainwright|The Governor|Easy|Mr Barrowclough|Brian Wilde|Sympathetic Officer|Prison Discipline|Fletcher Schemes|Warders|Character Contrast
 Porridge|What is Mr Mackay's attitude towards the prisoners?|Strict and authoritarian|Relaxed and forgiving|Indifferent to discipline|Eager to help escapes|Easy|Mr Mackay|Strict Discipline|Fulton Mackay|Prison Authority|Warder Character|Fletcher Rivalry|Behaviour
 Porridge|Where is Fletcher originally from in North London?|Muswell Hill|Camden Town|Peckham|Hampstead Heath|Medium|Muswell Hill|North London|Fletcher Background|Character Origins|London Geography|Prisoner Biography|Family Home
 Porridge|Which character is a first-time inmate when Fletcher first meets him?|Lennie Godber|Norman Fletcher|Harry Grout|Blanco|Easy|Lennie Godber|First Sentence|Prison Newcomer|Richard Beckinsale|Character Background|Mentorship|Slade Prison
 Porridge|Which actor portrayed prisoner McLaren?|Tony Osoba|Sam Kelly|Christopher Biggins|Brian Glover|Medium|Tony Osoba|McLaren|Prisoner Casting|Supporting Cast|Short Temper|Slade Inmates|Actor Identification
 Porridge|Which actor played the prisoner Lukewarm?|Christopher Biggins|Sam Kelly|Brian Wilde|Ken Jones|Medium|Christopher Biggins|Lukewarm|Prisoner Role|Character Casting|Slade Inmates|Supporting Cast|Actor Identification
 Porridge|Which actor played the inmate Warren?|Sam Kelly|Richard Beckinsale|Tony Osoba|Ronald Lacey|Medium|Sam Kelly|Warren|Slade Inmate|Character Casting|Supporting Cast|Prisoner Role|Actor Identification
 Porridge|What is the nickname of the prisoner played by Christopher Biggins?|Lukewarm|Grouty|Fletch|Blanco|Easy|Lukewarm|Christopher Biggins|Character Nickname|Prisoner Identity|Inmate Cast|Slade Prison|Supporting Character
 Porridge|Which episode sees Fletcher organise a secret gambling game?|The Hustler|A Night In|Pardon Me|Heartbreak Hotel|Medium|The Hustler|Series One|Prison Gambling|Fletcher Scheme|Episode Title|1974 Episodes|Secret Game
 Porridge|In which episode does Godber move into Fletcher's cell and discuss his fears?|A Night In|A Day Out|Happy Release|A Test of Character|Medium|A Night In|Godber Cellmate|Fletcher Advice|Series One|1974 Episodes|Prison Night|Episode Plot
 Porridge|In A Day Out, what work does the prison party do away from Slade?|Dig drainage ditches|Paint railway stations|Repair a bridge|Clean a seaside pier|Medium|A Day Out|Drainage Ditches|Work Party|Series One|Prison Labour|Countryside Trip|Episode Storyline
 Porridge|Which officer supervises the work party with Barrowclough in A Day Out?|Mr Mackay|Mr Wainwright|Judge Rawley|Harry Grout|Medium|A Day Out|Mr Mackay|Mr Barrowclough|Work Party|Series One|Prison Warders|Episode Characters
 Porridge|In Ways and Means, which prison job does Fletcher hope to obtain?|Library work|Kitchen washing-up|Coal delivery|Vehicle repair|Medium|Ways And Means|Prison Library|Fletcher Ambition|Series One|Job Transfer|Prison Work|Episode Plot
 Porridge|Which prisoner stages a rooftop protest in Ways and Means?|McLaren|Godber|Blanco|Ives|Medium|Ways And Means|McLaren|Rooftop Protest|Series One|Prison Dispute|Tony Osoba|Episode Storyline
 Porridge|In Men Without Women, who visits Fletcher at the prison?|His daughter Ingrid|His wife Isobel|His son Raymond|His brother|Medium|Men Without Women|Ingrid Fletcher|Prison Visit|Family Relations|Series One Finale|1974 Episodes|Episode Event
 Porridge|Which episode features Fletcher's stolen tin of pineapple chunks?|Just Desserts|The Hustler|Happy Release|Poetic Justice|Medium|Just Desserts|Pineapple Chunks|Prison Theft|Series Two|1975 Episodes|Stolen Food|Episode Title
 Porridge|What food is stolen from Fletcher in Just Desserts?|Pineapple chunks|Chocolate biscuits|Corned beef|Tinned peaches|Medium|Pineapple Chunks|Just Desserts|Fletcher Possessions|Prison Theft|Series Two|Food Contraband|Episode Detail
 Porridge|In Heartbreak Hotel, which woman sends Godber upsetting romantic news?|Denise|Ingrid|Marion|Isobel|Medium|Heartbreak Hotel|Denise|Godber Engagement|Romantic Letter|Series Two|Relationship Breakdown|Episode Storyline
 Porridge|Which episode features a particularly tough replacement for Mr Mackay?|Disturbing the Peace|A Night In|Final Stretch|Men Without Women|Medium|Disturbing The Peace|Mr Wainwright|Mr Mackay Absence|Series Two|Prison Officer Replacement|1975 Episodes|Episode Title
 Porridge|What is the surname of the tough warder temporarily replacing Mackay?|Wainwright|Barrowclough|Banyard|Rawley|Medium|Wainwright|Disturbing The Peace|Prison Warder|Mr Mackay|Series Two|Officer Replacement|Warder Identity
 Porridge|In No Peace for the Wicked, what does Fletcher want on a Saturday afternoon?|Quiet time alone in his cell|A boxing match|A visit to the governor|A prison football game|Medium|No Peace For The Wicked|Saturday Afternoon|Fletcher Cell|Series Two|Unwanted Visitors|Quiet Reading|Episode Plot
 Porridge|In Happy Release, what injury puts Fletcher in the prison hospital?|A broken ankle|A dislocated shoulder|A broken arm|A sprained wrist|Medium|Happy Release|Broken Ankle|Prison Hospital|Fletcher Injury|Series Two|Blanco|Episode Storyline
 Porridge|Which elderly prisoner shares Fletcher's hospital ward in Happy Release?|Blanco|Grouty|Harris|Jarvis|Medium|Happy Release|Blanco|Prison Hospital|Elderly Prisoner|Series Two|Inmate Friendship|Episode Detail
 Porridge|In The Harder They Fall, which inmate competes in a boxing final?|Lennie Godber|Norman Fletcher|Harry Grout|Ives|Medium|The Harder They Fall|Lennie Godber|Prison Boxing|Inter Wing Tournament|Series Two|Sports Plot|Episode Title
 Porridge|Which prisoner tries to profit from the boxing final through a gambling operation?|Harry Grout|Lennie Godber|Blanco|Judge Rawley|Medium|The Harder They Fall|Harry Grout|Gambling Syndicate|Boxing Tournament|Series Two|Prison Power|Episode Storyline
 Porridge|Which Porridge Christmas special first aired in 1975?|No Way Out|The Desperate Hours|A Christmassy Ted|Final Stretch|Medium|No Way Out|Christmas 1975|Porridge Special|Prison Escape Plot|Festive Television|Episode Title|Broadcast Date
 Porridge|Which 1976 Porridge special features a hostage-taking incident?|The Desperate Hours|No Way Out|A Storm in a Teacup|Poetic Justice|Medium|The Desperate Hours|1976 Special|Hostage Crisis|Prison Drama|Christmas Television|Episode Title|Slade Prison
 Porridge|In A Storm in a Teacup, what goes missing after Harris steals from the medical officer?|Pills|A cash box|A bunch of keys|A radio|Medium|A Storm In A Teacup|Harris|Medical Officer|Stolen Pills|Series Three|Grouty|Episode Storyline
 Porridge|Which episode introduces the judge who had sentenced Fletcher as a new cellmate?|Poetic Justice|A Test of Character|Just Desserts|The Hustler|Medium|Poetic Justice|Judge Rawley|New Cellmate|Fletcher Sentence|Series Three|1977 Episodes|Episode Title
 Porridge|What is the surname of the judge who shares Fletcher's cell in series three?|Rawley|Brennan|Wainwright|Sutcliffe|Medium|Judge Rawley|Poetic Justice|Rough Justice|Prison Cell|Series Three|Fletcher Past|Judicial Character
 Porridge|In Rough Justice, what possession is stolen from Judge Rawley?|His watch|His wallet|His spectacles|His fountain pen|Medium|Rough Justice|Judge Rawley|Stolen Watch|Prison Theft|Series Three|Inmate Court|Episode Plot
 Porridge|Which prisoner is accused when Judge Rawley's watch goes missing?|Harris|Godber|McLaren|Warren|Medium|Rough Justice|Harris|Judge Rawley|Watch Theft|Series Three|Accusation|Episode Plot
 Porridge|Which elderly prisoner refuses parole because he insists he is innocent?|Blanco|Ives|Harris|Warren|Medium|Blanco|Pardon Me|Wrongful Conviction|Parole Refusal|Series Three|Murder Case|Character Storyline
 Porridge|What outcome does Blanco want instead of accepting parole in Pardon Me?|A full pardon|A transfer to another prison|A retrial abroad|An early-release licence|Medium|Blanco|Pardon Me|Full Pardon|Wrongful Conviction|Series Three|Justice Campaign|Episode Plot
 Porridge|In A Test of Character, which subject is Godber studying for an O-level?|History|Mathematics|Biology|French|Medium|A Test Of Character|Godber Exam|History O Level|Series Three|Prison Education|Academic Ambition|Episode Detail
 Porridge|Which episode sees Fletcher arrange to obtain an examination paper for Godber?|A Test of Character|Heartbreak Hotel|A Night In|Going Home|Medium|A Test Of Character|Exam Paper|Lennie Godber|Fletcher Help|Series Three|Prison Education|Episode Plot
 Porridge|In Final Stretch, which important hearing is Godber preparing for?|A parole hearing|A disciplinary appeal|A court retrial|A prison-transfer hearing|Medium|Final Stretch|Lennie Godber|Parole Hearing|Series Three Finale|Release Prospects|Prison Justice|Episode Plot
 Porridge|What is the title of the final episode of the original Porridge series?|Final Stretch|Pardon Me|A Test of Character|Happy Release|Medium|Final Stretch|1977 Finale|Series Three|Original Programme Ending|Episode Title|Godber Release|Final Broadcast
 Porridge|Which film released in 1979 continued the original Porridge characters?|Porridge|Going Straight|The Long Good Friday|The Prisoner|Easy|1979 Film|Porridge Feature|Ronnie Barker|Richard Beckinsale|Cinema Adaptation|Original Characters|Film Title
 Porridge|Who directed the 1979 Porridge feature film?|Dick Clement|Sydney Lotterby|Ian La Frenais|Alan Clarke|Medium|Dick Clement|1979 Film|Film Director|Porridge Cinema|Production Credits|Prison Comedy|Feature Adaptation
 Porridge|What sporting event masks an escape attempt in the 1979 Porridge film?|A football match|A cricket tournament|A rugby match|A boxing contest|Medium|1979 Film|Football Match|Escape Diversion|Harry Grout|Fletcher And Godber|Prison Plot|Cinema Storyline
 Porridge|In the Porridge film, what do Fletcher and Godber desperately try to do after escaping?|Break back into prison|Flee to France|Surrender to the police|Hide in a hotel|Medium|1979 Film|Prison Break In|Fletcher|Godber|Escape Plot|Avoid Extra Sentence|Film Ending
 Porridge|Which inmate organises the escape plan in the 1979 film?|Harry Grout|Lennie Godber|Blanco|Harris|Medium|1979 Film|Harry Grout|Oakes Escape|Football Diversion|Prison Fixer|Feature Film|Plot Scheme
 Porridge|Which prisoner is intended to escape during the film's football match?|Oakes|Godber|Blanco|McLaren|Hard|Oakes|1979 Film|Football Escape|Harry Grout|Featured Prisoner|Planned Breakout|Film Character
 Porridge|What is the title of the later sitcom that follows Fletcher after his release?|Going Straight|Open All Hours|Citizen Smith|The Fall and Rise of Reginald Perrin|Easy|Going Straight|1978 Sequel|Norman Fletcher|After Prison|Programme Continuity|BBC Sitcom|Related Series

 Going Straight|Which actor returned as Norman Stanley Fletcher in Going Straight?|Ronnie Barker|Ronnie Corbett|Richard Beckinsale|Brian Wilde|Easy|Ronnie Barker|Norman Fletcher|Lead Cast|Sequel Casting|Porridge Continuation|1978 Sitcom|Character Return
 Going Straight|What earlier BBC sitcom did Going Straight continue?|Porridge|Open All Hours|Citizen Smith|The Likely Lads|Easy|Porridge|Sequel Series|Programme Connection|Fletcher Released|BBC Comedy|Series Continuity|1978 Television
 Going Straight|In what year did Going Straight first air?|1978|1975|1980|1983|Easy|1978 Premiere|BBC One|Broadcast Year|Sequel Launch|Programme History|Television Timeline|Series One
 Going Straight|How many episodes were made of Going Straight?|Six|Four|Eight|Twelve|Easy|Six Episodes|One Series|1978 Broadcast|Programme Length|British Sitcom|Completed Run|Episode Count
 Going Straight|Which BBC channel originally broadcast Going Straight?|BBC One|BBC Two|BBC Three|BBC Four|Easy|BBC One|Original Broadcaster|1978 Sitcom|Television Network|Programme Launch|BBC Comedy|Series Transmission
 Going Straight|Which actor played Raymond Fletcher, Fletch's son?|Nicholas Lyndhurst|Richard Beckinsale|David Jason|Gary Holton|Easy|Nicholas Lyndhurst|Raymond Fletcher|Son Of Fletch|Casting|Family Role|1978 Sitcom|Young Actor
 Going Straight|Who portrayed Fletcher's daughter Ingrid in Going Straight?|Patricia Brake|Wendy Richard|Pauline Quirke|Lynda Baron|Easy|Patricia Brake|Ingrid Fletcher|Fletch Daughter|Character Casting|Family Relationship|Sequel Cast|Main Role
 Going Straight|Which Porridge character is engaged to Ingrid in Going Straight?|Lennie Godber|Harry Grout|Mr Mackay|Judge Rawley|Easy|Lennie Godber|Ingrid Fletcher|Engagement|Prison Friendship|Family Relationship|Romantic Arc|Sequel Continuity
 Going Straight|Which actor returned as Lennie Godber?|Richard Beckinsale|Sam Kelly|Nicholas Lyndhurst|Christopher Biggins|Easy|Richard Beckinsale|Lennie Godber|Sequel Casting|Former Prisoner|Ingrid Fiance|Returning Actor|Main Cast
 Going Straight|What is the first episode of Going Straight called?|Going Home|Going Sour|Going to Work|Going Off the Rails|Medium|Going Home|Series Premiere|1978 Broadcast|Fletcher Release|Episode Title|Train Journey|Programme Opening
 Going Straight|Which former prison officer does Fletcher meet on the train home in Going Home?|Mr Mackay|Mr Barrowclough|Mr Wainwright|The Governor|Medium|Going Home|Mr Mackay|Fletcher Train Journey|Former Warder|1978 Episode|Porridge Reunion|Episode Plot
 Going Straight|Which episode features Fletcher's first meeting with his parole officer?|Going to Be Alright|Going Home|Going Sour|Going to Work|Medium|Going To Be Alright|Parole Officer|Reintegration|1978 Episode|Fletcher Supervision|Episode Plot|Second Episode
 Going Straight|What is the name of Fletcher's estranged wife?|Isobel|Ingrid|Marion|Denise|Medium|Isobel Fletcher|Fletcher Marriage|Family Separation|Going To Be Alright|Domestic Backstory|1978 Storyline|Character Name
 Going Straight|What business does Reg Jessop run, according to Fletcher's family news?|A cardboard box factory|A fish-and-chip shop|A taxi company|A furniture warehouse|Hard|Reg Jessop|Cardboard Box Factory|Isobel Fletcher|Going To Be Alright|Family Separation|Sequel Details|Storyline Fact
 Going Straight|What does Fletcher discover has been built over his hidden criminal proceeds?|A housing development|A football stadium|A shopping centre|A prison extension|Medium|Going To Be Alright|Buried Nest Egg|Housing Development|Old Crime|Fletcher Temptation|Second Episode|Plot Twist
 Going Straight|What kind of vehicle does Godber drive for a living after leaving prison?|A lorry|A taxi|A bus|An ambulance|Medium|Lennie Godber|Lorry Driver|Honest Employment|Former Prisoner|1978 Sequel|Going To Be Alright|Character Occupation
 Going Straight|Which episode features Fletcher helping a teenage runaway who steals?|Going Sour|Going Home|Going to Work|Going, Going, Gone|Medium|Going Sour|Teenage Runaway|Petty Theft|Fletcher Compassion|Third Episode|1978 Episode|Storyline
 Going Straight|Which episode sees Fletcher begin work as a hotel night porter?|Going to Work|Going Home|Going Sour|Going Off the Rails|Medium|Going To Work|Night Porter|Hotel Employment|First Job|Fletcher Work|Fourth Episode|Episode Title
 Going Straight|What job does Fletcher find during the series?|Hotel night porter|Bus conductor|Factory foreman|Taxi driver|Easy|Hotel Night Porter|Fletcher Employment|Honest Work|Going To Work|Sequel Premise|Workplace Story|New Career
 Going Straight|Who helps make sure Fletcher actually starts his new hotel job?|Lennie Godber|Mr Mackay|Harry Grout|Mr Barrowclough|Medium|Going To Work|Lennie Godber|Hotel Job|Fletcher Encouragement|Ingrid Fletcher|Fourth Episode|Family Support
 Going Straight|What item of footwear is Fletcher wearing in the pub before his first hotel shift?|Carpet slippers|Wellington boots|Football boots|Ice skates|Hard|Going To Work|Carpet Slippers|Fletcher Pub|First Job Nerves|Hotel Shift|Fourth Episode|Clothing Detail
 Going Straight|Which episode involves Fletcher spotting a possible criminal scheme at his hotel?|Going, Going, Gone|Going Sour|Going Home|Going Off the Rails|Medium|Going Going Gone|Hotel Scam|Suspicious Guest|Crime Prevention|Fifth Episode|Fletcher Dilemma|1978 Episode
 Going Straight|Which episode is the final instalment of Going Straight?|Going Off the Rails|Going Home|Going Sour|Going to Work|Medium|Going Off The Rails|Series Finale|Ingrid Wedding|1978 Ending|Sixth Episode|Episode Title|Programme Conclusion
 Going Straight|Who marries Ingrid Fletcher in the final episode?|Lennie Godber|Raymond Fletcher|Reg Jessop|Mr Mackay|Easy|Ingrid Fletcher|Lennie Godber|Wedding|Going Off The Rails|Series Finale|Romantic Conclusion|Sequel Storyline
 Going Straight|At whose wedding does Fletcher serve as both father of the bride and best man?|Ingrid and Lennie's|Isobel and Reg's|Marion and Raymond's|Denise and Lennie's|Medium|Going Off The Rails|Ingrid Wedding|Lennie Godber|Norman Fletcher|Best Man|Father Of Bride|Final Episode
 Going Straight|What temptation threatens Fletcher's progress before Ingrid's wedding?|Taking part in a major crime|Returning to the prison farm|Selling his hotel job|Leaving the country permanently|Medium|Going Off The Rails|Criminal Temptation|Fletcher Conscience|Ingrid Wedding|Final Episode|Honest Living|Plot Conflict
 Going Straight|Which writing partnership also wrote Going Straight after creating Porridge?|Dick Clement and Ian La Frenais|Galton and Simpson|John Sullivan and Roy Clarke|Jimmy Perry and David Croft|Medium|Dick Clement|Ian La Frenais|Sequel Writers|BBC Comedy|Television Credits|Porridge Creators|Production History
 Going Straight|Who directed the television sitcom Going Straight?|Sydney Lotterby|Dick Clement|John Howard Davies|Harold Snoad|Hard|Sydney Lotterby|Director|1978 Production|BBC Comedy|Programme Credits|Television Direction|Sitcom Production
 Going Straight|What was Fletcher trying to avoid after his release from Slade Prison?|Returning to criminal life|Getting a regular job|Seeing his children|Attending a wedding|Easy|Rehabilitation|Going Straight Premise|Norman Fletcher|Life After Prison|Honest Living|Character Goal|Sequel Theme
 Going Straight|Who sang the theme tune for Going Straight?|Ronnie Barker|Richard Beckinsale|Max Harris|Fulton Mackay|Medium|Ronnie Barker|Theme Song Vocal|Opening Music|Going Straight Theme|Production Detail|1978 Soundtrack|Series Music
 `;

 const FIRST_ID = 15902;

 const programmeYears = {
   'Porridge': '1973-1979',
   'Going Straight': '1978'
 };

 const normalise = value =>
   String(value).normalize('NFKC')
     .trim().toLocaleLowerCase('en-GB');

 const questions = facts.trim().split('\n')
   .map(line => line.trim())
   .filter(Boolean)
   .map((line, index) => {
     const id = 'tv_' + (FIRST_ID + index);
     const fields = line.split('|').map(value => value.trim());

     if (fields.length !== 14) {
       throw new Error(
         `Pack 337: ${id} has ${fields.length} fields, expected 14`
       );
     }

     const [
       programme,
       question,
       correctAnswer,
       wrong1,
       wrong2,
       wrong3,
       difficulty,
       ...specificTags
     ] = fields;

     if (!Object.prototype.hasOwnProperty.call(
       programmeYears, programme
     )) {
       throw new Error(`Pack 337: unknown programme at ${id}`);
     }

     if (
       [programme, question, correctAnswer, wrong1, wrong2, wrong3,
         difficulty, ...specificTags].some(value => !value)
     ) {
       throw new Error(`Pack 337: missing field at ${id}`);
     }

     if (
       !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
       specificTags.length !== 7
     ) {
       throw new Error(`Pack 337: invalid difficulty or tags at ${id}`);
     }

     const answers = [wrong1, wrong2, wrong3];

     if (
       new Set([correctAnswer, ...answers].map(normalise)).size !== 4
     ) {
       throw new Error(`Pack 337: repeated answer option at ${id}`);
     }

     answers.splice(index % 4, 0, correctAnswer);

     const tags = [...new Map([
       'Television',
       'British Television',
       'British Comedy',
       'Sitcom',
       'Classic Sitcom',
       'Completed Series',
       'Porridge and Going Straight Collection',
       'BBC',
       programmeYears[programme],
       programme,
       `Programme: ${programme}`,
       ...specificTags,
       correctAnswer
     ].map(tag => [normalise(tag), tag])).values()];

     return {
       id,
       category: 'Television',
       programme,
       question,
       answers,
       correctAnswer,
       difficulty,
       tags,
       dailyEligible: true
     };
   });

 // Validate the actual exported question objects.

 const expectedProgrammes = {
   'Porridge': 62,
   'Going Straight': 30
 };

 if (
   questions.length !== 92 ||
   questions[0].id !== 'tv_15902' ||
   questions[questions.length - 1].id !== 'tv_15993'
 ) {
   throw new Error('Pack 337: incorrect count or ID range');
 }

 for (const [programme, count] of Object.entries(expectedProgrammes)) {
   if (
     questions.filter(q => q.programme === programme).length !== count
   ) {
     throw new Error(`Pack 337: incorrect ${programme} count`);
   }
 }

 const seenQuestions = new Set();

 for (let index = 0; index < questions.length; index++) {
   const q = questions[index];
   const wordingKey = normalise(q.programme + '|' + q.question);

   if (
     q.id !== 'tv_' + (FIRST_ID + index) ||
     q.category !== 'Television' ||
     seenQuestions.has(wordingKey) ||
     q.answers.length !== 4 ||
     new Set(q.answers.map(normalise)).size !== 4 ||
     !q.answers.includes(q.correctAnswer) ||
     q.tags.length < 17 ||
     !q.tags.includes(`Programme: ${q.programme}`) ||
     q.dailyEligible !== true
   ) {
     throw new Error(
       `Pack 337: exported-object check failed at ${q.id}`
     );
   }

   seenQuestions.add(wordingKey);
 }
// 21 November 2026 story audit. Keep all 92 original questions and
// IDs tv_15902–tv_15993 unchanged. Episode-scoped questions for Porridge,
// Going Straight, plus original film and 2003 mock-documentary.
// Each new question identifies its programme and credits a source URL.
const auditAdditions = [
  {
    "id": "tv_37540",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what was Fletcher's latest offence before his transfer to Slade?",
    "answers": [
      "Stealing a lorry loaded with alcohol",
      "Robbing a bank",
      "Forging cheques",
      "Stealing a television van"
    ],
    "correctAnswer": "Stealing a lorry loaded with alcohol",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "1973 pilot — Prisoner and Escort",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Stealing a lorry loaded with alcohol",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Five Year Sentence",
      "Latest Crime",
      "Lorry Theft"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37541",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, which pair of officers escort Fletcher from London to Slade?",
    "answers": [
      "Mackay and Wainwright",
      "Mackay and Barrowclough",
      "Barrowclough and Grout",
      "Mackay and Venables"
    ],
    "correctAnswer": "Mackay and Barrowclough",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "1973 pilot — Prisoner and Escort",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Mackay and Barrowclough",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Prison Transport",
      "Two Warders",
      "New Year Journey"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37542",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what mechanical problem does Fletcher deliberately cause with the prison escort van?",
    "answers": [
      "He removes its battery",
      "He punctures the tyres",
      "He contaminates its petrol tank",
      "He loosens the brakes"
    ],
    "correctAnswer": "He contaminates its petrol tank",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "1973 pilot — Prisoner and Escort",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: He contaminates its petrol tank",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Escape Attempt",
      "Van Breaks Down",
      "Fletcher Scheme"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37543",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, which returning inmate arrives at Slade alongside Fletcher and the inexperienced Godber?",
    "answers": [
      "Harry Grout",
      "Judge Rawley",
      "Blanco",
      "Cyril Heslop"
    ],
    "correctAnswer": "Cyril Heslop",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 1 — New Faces, Old Hands",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Cyril Heslop",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Heslop",
      "New Prisoners",
      "Slade Admissions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37544",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what does Mackay ask Fletcher to explain to the prison newcomers?",
    "answers": [
      "What life at Slade is really like",
      "How the prison farm works",
      "How to request compassionate leave",
      "How to join the prison choir"
    ],
    "correctAnswer": "What life at Slade is really like",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 1 — New Faces, Old Hands",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: What life at Slade is really like",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Mackay Orders",
      "Prison Orientation",
      "Fletcher Advice"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37545",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, which board game becomes the centrepiece of Fletcher's secret high-stakes gambling event?",
    "answers": [
      "Monopoly",
      "Snakes and ladders",
      "Backgammon",
      "Chess"
    ],
    "correctAnswer": "Snakes and ladders",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 1 — The Hustler",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Snakes and ladders",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Secret Gambling",
      "Boiler Room",
      "Board Game"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37546",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, in which prison location does Fletcher arrange the high-stakes game?",
    "answers": [
      "The library",
      "The chapel",
      "The boiler room",
      "The exercise yard"
    ],
    "correctAnswer": "The boiler room",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 1 — The Hustler",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: The boiler room",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Fletcher Gambling",
      "Hidden Venue",
      "Mackay Intervention"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37547",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what overnight difficulty prompts Godber and Fletcher to talk at length?",
    "answers": [
      "Fletcher loses his mattress",
      "The lights will not turn off",
      "A cell inspection keeps interrupting them",
      "Godber cannot sleep"
    ],
    "correctAnswer": "Godber cannot sleep",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 1 — A Night In",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Godber cannot sleep",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Insomnia",
      "Cellmates",
      "Late Night Conversation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37548",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what arrangement annoys Fletcher when he first settles into his cell?",
    "answers": [
      "He must share it with Godber",
      "He is moved to solitary confinement",
      "He is given an upper bunk",
      "He must share with the governor"
    ],
    "correctAnswer": "He must share it with Godber",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 1 — A Night In",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: He must share it with Godber",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Fletcher Privacy",
      "Shared Cell",
      "New Roommate"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37549",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, where does Fletcher slip away to while Mackay is absent from the work party?",
    "answers": [
      "A railway station",
      "A local pub",
      "A bookmaker's shop",
      "A market stall"
    ],
    "correctAnswer": "A local pub",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 1 — A Day Out",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: A local pub",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Country Work Party",
      "Barrowclough",
      "Unauthorised Visit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37550",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, where do the other prisoners take shelter during the work party's bad weather?",
    "answers": [
      "An abandoned barn",
      "A village school",
      "A church",
      "A farm shed"
    ],
    "correctAnswer": "A church",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 1 — A Day Out",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: A church",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Bad Weather",
      "Prison Work Party",
      "Church Shelter"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37551",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what incident initially gets the troublesome prisoner McLaren into difficulty?",
    "answers": [
      "He breaks the chapel window",
      "He destroys prison library books",
      "He steals a warder's boots",
      "He clashes with a prison officer over soup"
    ],
    "correctAnswer": "He clashes with a prison officer over soup",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 1 — Ways and Means",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: He clashes with a prison officer over soup",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "McLaren",
      "Soup Incident",
      "Discipline"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37552",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what does McLaren do as part of Fletcher's risky effort to secure a better job?",
    "answers": [
      "Stages a rooftop protest",
      "Escapes in a laundry van",
      "Refuses to attend the canteen",
      "Starts a prison choir"
    ],
    "correctAnswer": "Stages a rooftop protest",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 1 — Ways and Means",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Stages a rooftop protest",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Rooftop Protest",
      "Fletcher Plan",
      "Library Job"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37553",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what service does Fletcher offer inmates struggling with their relationships?",
    "answers": [
      "Arranging secret prison weddings",
      "Writing letters to their wives and girlfriends",
      "Organising visits to a dating agency",
      "Providing marriage counselling by telephone"
    ],
    "correctAnswer": "Writing letters to their wives and girlfriends",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 1 — Men Without Women",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Writing letters to their wives and girlfriends",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Romantic Advice",
      "Prison Letters",
      "Fletcher As Agony Aunt"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37554",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, which difficulty means Warren needs Fletcher's help with letters?",
    "answers": [
      "He has injured both hands",
      "He does not know his wife's address",
      "He cannot read or write well",
      "He is barred from receiving post"
    ],
    "correctAnswer": "He cannot read or write well",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 1 — Men Without Women",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: He cannot read or write well",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Warren",
      "Reading Difficulties",
      "Prison Correspondence"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37555",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what family crisis does Fletcher learn about during a visit from Ingrid?",
    "answers": [
      "His son has joined the army",
      "His mother has lost her house",
      "His daughter is moving to America",
      "His marriage is breaking down"
    ],
    "correctAnswer": "His marriage is breaking down",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 1 — Men Without Women",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: His marriage is breaking down",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Ingrid",
      "Fletcher Marriage",
      "Family Trouble"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37556",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what preserve is mentioned among the other sweet items stolen from inmates?",
    "answers": [
      "Gooseberry preserve",
      "Marmalade",
      "Blackcurrant jam",
      "Lemon curd"
    ],
    "correctAnswer": "Gooseberry preserve",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 2 — Just Desserts",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Gooseberry preserve",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Prison Thefts",
      "Missing Sweet Foods",
      "Inmate Complaints"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37557",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, why does Fletcher believe the thefts point to an unusually sweet-toothed thief?",
    "answers": [
      "The governor bans all sugar",
      "Other inmates have also lost sweet food",
      "The canteen has run out of desserts",
      "The suspect works in a bakery"
    ],
    "correctAnswer": "Other inmates have also lost sweet food",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 2 — Just Desserts",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Other inmates have also lost sweet food",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Pineapple Chunks",
      "Theft Pattern",
      "Fletcher Deduction"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37558",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, how does Godber learn that his girlfriend Denise has ended their relationship?",
    "answers": [
      "In a telephone call",
      "On a prison visit",
      "In a letter",
      "Through a newspaper notice"
    ],
    "correctAnswer": "In a letter",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 2 — Heartbreak Hotel",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: In a letter",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Denise",
      "Dear John Letter",
      "Godber Heartbreak"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37559",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what offence does the upset Godber commit after receiving Denise's message?",
    "answers": [
      "He smashes a cell window",
      "He steals from the canteen",
      "He refuses to work in the laundry",
      "He assaults another inmate"
    ],
    "correctAnswer": "He assaults another inmate",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 2 — Heartbreak Hotel",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: He assaults another inmate",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Godber Violence",
      "Breakup Reaction",
      "Disciplinary Risk"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37560",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, why is Mr Mackay temporarily absent when Wainwright takes charge?",
    "answers": [
      "He is on a promotion course",
      "He is recovering from an operation",
      "He is attending a family funeral",
      "He is transferred to another prison"
    ],
    "correctAnswer": "He is on a promotion course",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 2 — Disturbing the Peace",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: He is on a promotion course",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Mackay Absence",
      "Promotion Training",
      "Temporary Officer"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37561",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what food does Godber accidentally drop on Wainwright's shoe?",
    "answers": [
      "Rice pudding",
      "Mashed potato",
      "Pea soup",
      "Custard"
    ],
    "correctAnswer": "Mashed potato",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 2 — Disturbing the Peace",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Mashed potato",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Godber",
      "Wainwright Bullying",
      "Canteen Incident"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37562",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, which government department sends visitors who interrupt Fletcher's attempt to relax?",
    "answers": [
      "The Treasury",
      "The Foreign Office",
      "The Home Office",
      "The Department of Health"
    ],
    "correctAnswer": "The Home Office",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 2 — No Peace for the Wicked",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: The Home Office",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Official Prison Visit",
      "Government Inquiry",
      "Fletcher Interview"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37563",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what subject do visiting officials ask Fletcher for his opinion on?",
    "answers": [
      "The nation's voting rules",
      "Factory working conditions",
      "The price of television licences",
      "The prison system"
    ],
    "correctAnswer": "The prison system",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 2 — No Peace for the Wicked",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: The prison system",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Home Office",
      "Prison Reform",
      "Fletcher Opinions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37564",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, which fellow prisoner is the target of Fletcher and Blanco's plan for revenge?",
    "answers": [
      "Norris",
      "Lukewarm",
      "Heslop",
      "McLaren"
    ],
    "correctAnswer": "Norris",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 2 — Happy Release",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Norris",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Norris",
      "Prison Hospital",
      "Revenge Plan"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37565",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what had Norris done to Blanco before Fletcher's arrival?",
    "answers": [
      "Assaulted his brother",
      "Stolen his belongings",
      "Ruined his parole application",
      "Reported him for gambling"
    ],
    "correctAnswer": "Stolen his belongings",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 2 — Happy Release",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Stolen his belongings",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Norris Thefts",
      "Blanco Past",
      "Hospital Conspiracy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37566",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what result does Harry Grout demand from Godber's boxing final?",
    "answers": [
      "Godber must win in the first round",
      "The fight must be cancelled",
      "Godber must lose deliberately",
      "The referee must award a draw"
    ],
    "correctAnswer": "Godber must lose deliberately",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 2 — The Harder They Fall",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Godber must lose deliberately",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Harry Grout",
      "Fight Rigging",
      "Gambling"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37567",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what complicates Fletcher's attempts to manipulate Godber's boxing match?",
    "answers": [
      "Godber has broken his wrist",
      "The match is moved outside Slade",
      "Mackay becomes the referee",
      "Godber is also being influenced by Grout's rival"
    ],
    "correctAnswer": "Godber is also being influenced by Grout's rival",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 2 — The Harder They Fall",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Godber is also being influenced by Grout's rival",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Competing Fixers",
      "Godber Boxing",
      "Prison Gambling"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37568",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, where does Fletcher hope to spend some of the Christmas period as an escape plot unfolds?",
    "answers": [
      "The prison infirmary",
      "The governor's office",
      "A relative's house",
      "The prison library"
    ],
    "correctAnswer": "The prison infirmary",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "1975 special — No Way Out",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: The prison infirmary",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Christmas Special",
      "Infirmary Plan",
      "Escape Plot"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37569",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what is the name of the prisoner who takes hostages during the 1976 Christmas special?",
    "answers": [
      "Harry Grout",
      "Reg Urwin",
      "Heslop",
      "Judge Rawley"
    ],
    "correctAnswer": "Reg Urwin",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "1976 special — The Desperate Hours",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Reg Urwin",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Reg Urwin",
      "Hostage Drama",
      "1976 Christmas"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37570",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what sort of weapon does the hostage-taker use?",
    "answers": [
      "A stolen police revolver",
      "A sharpened spoon",
      "A homemade gun",
      "A kitchen knife"
    ],
    "correctAnswer": "A homemade gun",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "1976 special — The Desperate Hours",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: A homemade gun",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Improvised Firearm",
      "Reg Urwin",
      "Escape Demand"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37571",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, which woman is held with Fletcher Godber and Barrowclough?",
    "answers": [
      "Fletcher's daughter Ingrid",
      "A visiting nurse",
      "Mrs Mackay",
      "The governor's secretary"
    ],
    "correctAnswer": "The governor's secretary",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "1976 special — The Desperate Hours",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: The governor's secretary",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Prison Hostages",
      "Governor Secretary",
      "Christmas"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37572",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, where have the missing pills actually ended up?",
    "answers": [
      "In Fletcher's mug of tea",
      "Inside a hollow mattress",
      "Under the chapel floor",
      "In a tin of pineapple"
    ],
    "correctAnswer": "In Fletcher's mug of tea",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 3 — A Storm in a Teacup",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: In Fletcher's mug of tea",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Harris Stolen Pills",
      "Fletcher Tea",
      "Grout Search"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37573",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what personal history makes Fletcher particularly unhappy with his new cellmate Judge Rawley?",
    "answers": [
      "Rawley once stole from his family",
      "Rawley sentenced him to prison",
      "Rawley is his former schoolteacher",
      "Rawley is the governor's brother"
    ],
    "correctAnswer": "Rawley sentenced him to prison",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 3 — Poetic Justice",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Rawley sentenced him to prison",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Judge Rawley",
      "Previous Sentencing",
      "Cell Conflict"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37574",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what sort of unofficial trial is organised over Judge Rawley's missing watch?",
    "answers": [
      "A police tribunal",
      "A public jury trial",
      "A kangaroo court",
      "A parole board hearing"
    ],
    "correctAnswer": "A kangaroo court",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 3 — Rough Justice",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: A kangaroo court",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Missing Watch",
      "Kangaroo Court",
      "Harris Accused"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37575",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what group does Fletcher form to help Blanco challenge his conviction?",
    "answers": [
      "A prison football committee",
      "A trade-union branch",
      "A reading group",
      "An appeal committee"
    ],
    "correctAnswer": "An appeal committee",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 3 — Pardon Me",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: An appeal committee",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Blanco",
      "Pardon Campaign",
      "Fletcher Organises"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37576",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, which fellow inmate does Fletcher ask to steal the history examination papers?",
    "answers": [
      "Warren",
      "Lukewarm",
      "McLaren",
      "Harry Grout"
    ],
    "correctAnswer": "Warren",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 3 — A Test of Character",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Warren",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Warren",
      "Exam Papers",
      "Godber Studies"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37577",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, how does Godber react when offered stolen examination questions?",
    "answers": [
      "He memorises them immediately",
      "He refuses to use them",
      "He sells them to other prisoners",
      "He reports Fletcher to the governor"
    ],
    "correctAnswer": "He refuses to use them",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 3 — A Test of Character",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: He refuses to use them",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Godber Integrity",
      "Exam Cheating",
      "Character Growth"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37578",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, which football hooligan gets into a fight with Godber shortly before his parole hearing?",
    "answers": [
      "Harris",
      "Norris",
      "Jarvis",
      "Heslop"
    ],
    "correctAnswer": "Jarvis",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 3 — Final Stretch",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Jarvis",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Godber",
      "Football Hooligan",
      "Parole Threat"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37579",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what does Fletcher risk to protect Godber after the fight?",
    "answers": [
      "Permanent transfer to another wing",
      "Immediate release from prison",
      "A fine deducted from his wages",
      "Solitary confinement and loss of remission"
    ],
    "correctAnswer": "Solitary confinement and loss of remission",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "Series 3 — Final Stretch",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Solitary confinement and loss of remission",
      "Reference: https://en.wikipedia.org/wiki/List_of_Porridge_episodes",
      "Fletcher Loyalty",
      "Parole Consequences",
      "Friendship"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37580",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what kind of visiting team plays the inmates in the film's football match?",
    "answers": [
      "A celebrity team",
      "A university team",
      "A police football team",
      "A local school team"
    ],
    "correctAnswer": "A celebrity team",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "1979 film",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: A celebrity team",
      "Reference: https://www.comedy.co.uk/film/porridge/",
      "Celebrity Football",
      "Escape Cover",
      "Grouty Scheme"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37581",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, why are Fletcher and Godber determined not to remain outside after becoming caught up in the escape?",
    "answers": [
      "They are due in court that afternoon",
      "They have relatively little of their sentences left",
      "They promised to visit a relative",
      "Their getaway vehicle has been stolen"
    ],
    "correctAnswer": "They have relatively little of their sentences left",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "1979 film",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: They have relatively little of their sentences left",
      "Reference: https://www.comedy.co.uk/film/porridge/",
      "Fletcher Godber",
      "Reluctant Escapees",
      "Prison Return"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37582",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what sort of criminal is Grouty's chosen escapee Oakes?",
    "answers": [
      "A jewel forger",
      "A con artist",
      "An armed bank robber",
      "A car thief"
    ],
    "correctAnswer": "An armed bank robber",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "1979 film",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: An armed bank robber",
      "Reference: https://www.comedy.co.uk/film/porridge/",
      "Oakes",
      "Escape Plan",
      "Armed Robbery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37583",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, what format is the 2003 follow-up about Fletcher's later life presented in?",
    "answers": [
      "A live stage concert",
      "A prison quiz show",
      "A feature-length action film",
      "A spoof documentary"
    ],
    "correctAnswer": "A spoof documentary",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "2003 follow-up — Life Beyond the Box",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: A spoof documentary",
      "Reference: https://en.wikipedia.org/wiki/Life_Beyond_the_Box:_Norman_Stanley_Fletcher",
      "Life Beyond The Box",
      "Mockumentary",
      "Fletcher Later Years"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37584",
    "category": "Television",
    "programme": "Porridge",
    "question": "In Porridge, who narrates the 2003 fictional documentary about Norman Stanley Fletcher?",
    "answers": [
      "Bill Nighy",
      "Ronnie Corbett",
      "David Jason",
      "Michael Caine"
    ],
    "correctAnswer": "Bill Nighy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Porridge",
      "Programme: Porridge",
      "2003 follow-up — Life Beyond the Box",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Bill Nighy",
      "Reference: https://en.wikipedia.org/wiki/Life_Beyond_the_Box:_Norman_Stanley_Fletcher",
      "Bill Nighy",
      "Narration",
      "2003 Retrospective"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37585",
    "category": "Television",
    "programme": "Going Straight",
    "question": "In Going Straight, how long has Fletcher actually served when he is released on parole?",
    "answers": [
      "Six months of his sentence",
      "Three years of his sentence",
      "His entire five-year sentence",
      "One year of his sentence"
    ],
    "correctAnswer": "Three years of his sentence",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Going Straight",
      "Programme: Going Straight",
      "Episode 1 — Going Home",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Three years of his sentence",
      "Reference: https://www.comedy.co.uk/tv/going_straight/episodes/",
      "Fletcher Parole",
      "Early Release",
      "Slade Prison"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37586",
    "category": "Television",
    "programme": "Going Straight",
    "question": "In Going Straight, what has happened to Mr Mackay by the time Fletcher meets him on the train?",
    "answers": [
      "He has become a prison governor",
      "He has moved to Canada",
      "He has retired from the prison service",
      "He has become a police detective"
    ],
    "correctAnswer": "He has retired from the prison service",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Going Straight",
      "Programme: Going Straight",
      "Episode 1 — Going Home",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: He has retired from the prison service",
      "Reference: https://www.comedy.co.uk/tv/going_straight/episodes/",
      "Mackay Retired",
      "Train Encounter",
      "Former Warder"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37587",
    "category": "Television",
    "programme": "Going Straight",
    "question": "In Going Straight, what makes Fletcher's homecoming train ride morally difficult?",
    "answers": [
      "Godber admits to a new offence",
      "Raymond has been arrested",
      "A passenger offers him a job abroad",
      "An old criminal acquaintance reappears"
    ],
    "correctAnswer": "An old criminal acquaintance reappears",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Going Straight",
      "Programme: Going Straight",
      "Episode 1 — Going Home",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: An old criminal acquaintance reappears",
      "Reference: https://www.comedy.co.uk/tv/going_straight/episodes/",
      "Old Criminal Contact",
      "Train Journey",
      "Go Straight Decision"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37588",
    "category": "Television",
    "programme": "Going Straight",
    "question": "In Going Straight, which county does Fletcher visit to retrieve a buried stash of criminal earnings?",
    "answers": [
      "Essex",
      "Kent",
      "Yorkshire",
      "Devon"
    ],
    "correctAnswer": "Essex",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Going Straight",
      "Programme: Going Straight",
      "Episode 2 — Going To Be Alright",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Essex",
      "Reference: https://www.comedy.co.uk/tv/going_straight/episodes/",
      "Hidden Loot",
      "Essex",
      "Past Crimes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37589",
    "category": "Television",
    "programme": "Going Straight",
    "question": "In Going Straight, who is frustrated by Fletcher's attempt to recover his hidden criminal proceeds?",
    "answers": [
      "Mackay and Barrowclough",
      "Ingrid and Godber",
      "Mr Grout and Mr Norris",
      "Raymond and a schoolteacher"
    ],
    "correctAnswer": "Ingrid and Godber",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Going Straight",
      "Programme: Going Straight",
      "Episode 2 — Going To Be Alright",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Ingrid and Godber",
      "Reference: https://www.comedy.co.uk/tv/going_straight/episodes/",
      "Ingrid",
      "Godber",
      "Buried Nest Egg"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37590",
    "category": "Television",
    "programme": "Going Straight",
    "question": "In Going Straight, what change in his family life makes Fletcher's original employment plans awkward for his parole officer?",
    "answers": [
      "His son is moving abroad",
      "His daughter has joined the police",
      "His wife has left him",
      "His mother has become seriously ill"
    ],
    "correctAnswer": "His wife has left him",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Going Straight",
      "Programme: Going Straight",
      "Episode 2 — Going To Be Alright",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: His wife has left him",
      "Reference: https://www.comedy.co.uk/tv/going_straight/episodes/",
      "Isobel Separation",
      "Probation Officer",
      "Homecoming"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37591",
    "category": "Television",
    "programme": "Going Straight",
    "question": "In Going Straight, where does Fletcher encounter the teenage runaway he tries to help?",
    "answers": [
      "At the hotel reception",
      "On a railway platform",
      "At a charity football match",
      "In a local café"
    ],
    "correctAnswer": "In a local café",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Going Straight",
      "Programme: Going Straight",
      "Episode 3 — Going Sour",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: In a local café",
      "Reference: https://www.comedy.co.uk/tv/going_straight/episodes/",
      "Teenage Runaway",
      "Café Meeting",
      "Fletch Helps"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37592",
    "category": "Television",
    "programme": "Going Straight",
    "question": "In Going Straight, what habit makes the runaway's rehabilitation particularly difficult?",
    "answers": [
      "She keeps stealing",
      "She repeatedly misses school",
      "She refuses to speak",
      "She keeps changing her name"
    ],
    "correctAnswer": "She keeps stealing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Going Straight",
      "Programme: Going Straight",
      "Episode 3 — Going Sour",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: She keeps stealing",
      "Reference: https://www.comedy.co.uk/tv/going_straight/episodes/",
      "Runaway Girl",
      "Theft Habit",
      "Moral Lesson"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37593",
    "category": "Television",
    "programme": "Going Straight",
    "question": "In Going Straight, which family member and friend insist he turns up for his first hotel shift?",
    "answers": [
      "Raymond and Mr Mackay",
      "Ingrid and Lennie Godber",
      "Ingrid and Harry Grout",
      "Mr Mackay and Mr Barrowclough"
    ],
    "correctAnswer": "Ingrid and Lennie Godber",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Going Straight",
      "Programme: Going Straight",
      "Episode 4 — Going To Work",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Ingrid and Lennie Godber",
      "Reference: https://www.comedy.co.uk/tv/going_straight/episodes/",
      "Ingrid",
      "Godber",
      "Hotel Employment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37594",
    "category": "Television",
    "programme": "Going Straight",
    "question": "In Going Straight, how does the hotel's manager treat Fletcher compared with the receptionist?",
    "answers": [
      "With greater suspicion",
      "With equal hostility",
      "More sympathetically",
      "As a long-lost relative"
    ],
    "correctAnswer": "More sympathetically",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Going Straight",
      "Programme: Going Straight",
      "Episode 4 — Going To Work",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: More sympathetically",
      "Reference: https://www.comedy.co.uk/tv/going_straight/episodes/",
      "Hotel Staff",
      "Manager Friendly",
      "Receptionist Unkind"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37595",
    "category": "Television",
    "programme": "Going Straight",
    "question": "In Going Straight, which former fellow prisoner does Fletcher recognise at the hotel?",
    "answers": [
      "Harry Grout",
      "Lukewarm",
      "Judge Rawley",
      "Worm Wellings"
    ],
    "correctAnswer": "Worm Wellings",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Going Straight",
      "Programme: Going Straight",
      "Episode 5 — Going Going Gone",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: Worm Wellings",
      "Reference: https://www.comedy.co.uk/tv/going_straight/episodes/",
      "Worm Wellings",
      "Former Inmate",
      "Hotel Con"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37596",
    "category": "Television",
    "programme": "Going Straight",
    "question": "In Going Straight, what valuable object does Fletcher mistakenly hand to Wellings?",
    "answers": [
      "An elderly guest's necklace",
      "A gold pocket watch",
      "A suitcase of cash",
      "A diamond ring"
    ],
    "correctAnswer": "An elderly guest's necklace",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Going Straight",
      "Programme: Going Straight",
      "Episode 5 — Going Going Gone",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: An elderly guest's necklace",
      "Reference: https://www.comedy.co.uk/tv/going_straight/episodes/",
      "Wellings Deception",
      "Elderly Guest",
      "Stolen Jewellery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37597",
    "category": "Television",
    "programme": "Going Straight",
    "question": "In Going Straight, what makes Fletcher realise that Wellings has tricked him?",
    "answers": [
      "Wellings confesses in front of police",
      "The hotel manager says the elderly guest is a regular",
      "The guest admits she owns the hotel",
      "Ingrid identifies Wellings as a fraud"
    ],
    "correctAnswer": "The hotel manager says the elderly guest is a regular",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Going Straight",
      "Programme: Going Straight",
      "Episode 5 — Going Going Gone",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: The hotel manager says the elderly guest is a regular",
      "Reference: https://www.comedy.co.uk/tv/going_straight/episodes/",
      "Hotel Manager",
      "Regular Guest",
      "Fletcher Mistake"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37598",
    "category": "Television",
    "programme": "Going Straight",
    "question": "In Going Straight, which crime offers Fletcher one last temptation before Ingrid's wedding?",
    "answers": [
      "A jewellery shop burglary",
      "A stolen lorry shipment",
      "A bank raid",
      "A counterfeit money scheme"
    ],
    "correctAnswer": "A bank raid",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Going Straight",
      "Programme: Going Straight",
      "Episode 6 — Going Off The Rails",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: A bank raid",
      "Reference: https://www.comedy.co.uk/tv/going_straight/episodes/",
      "Fletcher Last Job",
      "Bank Robbery",
      "Wedding Day"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37599",
    "category": "Television",
    "programme": "Going Straight",
    "question": "In Going Straight, why does Fletcher feel resentful as the wedding approaches?",
    "answers": [
      "Godber refuses to invite him",
      "He has been asked not to attend",
      "Raymond is refusing to buy a suit",
      "His former wife's new partner is paying for the reception"
    ],
    "correctAnswer": "His former wife's new partner is paying for the reception",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Going Straight",
      "Programme: Going Straight",
      "Episode 6 — Going Off The Rails",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: His former wife's new partner is paying for the reception",
      "Reference: https://www.comedy.co.uk/tv/going_straight/episodes/",
      "Fletcher Pride",
      "Reg Jessop",
      "Wedding Finance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37600",
    "category": "Television",
    "programme": "Going Straight",
    "question": "In Going Straight, which everyday shop helps trigger Fletcher's change of heart about the crime?",
    "answers": [
      "A pet shop",
      "A bookshop",
      "A butcher's shop",
      "A flower shop"
    ],
    "correctAnswer": "A pet shop",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Classic Sitcom",
      "BBC",
      "Going Straight",
      "Programme: Going Straight",
      "Episode 6 — Going Off The Rails",
      "Storyline audit",
      "Episode-specific character and plot",
      "Correct answer: A pet shop",
      "Reference: https://www.comedy.co.uk/tv/going_straight/episodes/",
      "Fletcher Epiphany",
      "Pet Shop",
      "Go Straight Promise"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
const auditedProgrammeTotals = {"Porridge":107,"Going Straight":46};
if (questions.length !== 153 ||
 questions[0].id !== 'tv_15902' || questions[91].id !== 'tv_15993' ||
 auditAdditions[0].id !== 'tv_37540' ||
 auditAdditions[auditAdditions.length - 1].id !== 'tv_37600' ||
 new Set(questions.map(q=>q.id)).size !== questions.length ||
 new Set(questions.map(q=>(q.programme+'|'+q.question).trim().toLowerCase())).size !== questions.length ||
 Object.entries(auditedProgrammeTotals).some(([p,n])=>questions.filter(q=>q.programme===p).length!==n) ||
 questions.some(q=>q.answers.length!==4 ||
 new Set(q.answers.map(a=>a.trim().toLowerCase())).size!==4 ||
 q.answers.filter(a=>a===q.correctAnswer).length!==1 ||
 !q.tags.includes('Programme: '+q.programme) ||
 q.tags.length<16 || q.dailyEligible!==true) ||
 auditAdditions.some(q=>!q.question.startsWith('In '+q.programme+', ') ||
 q.tags.length<16))
 throw Error('Pack 337 post-audit validation failed');
module.exports = questions;
