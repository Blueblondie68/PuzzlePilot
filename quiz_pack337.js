
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

 module.exports = questions;
