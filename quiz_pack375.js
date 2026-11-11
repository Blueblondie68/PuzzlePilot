
// quiz_pack375.js
// PuzzlePilot - The Bigggggg Quiz
// Television: The Liver Birds (1969-1979; 1996 revival), Please Sir! (1968-1972),
// The Fenn Street Gang (1971-1973) and Bowler (1973).
// Complete WordPad-ready CommonJS module. No external dependencies.
// Seven accurate question-specific tags per question, plus programme metadata.
// Sources: British Comedy Guide cast and episode guides; film credits.

const FIRST_ID = 19278;

// Question | correct answer | three wrong answers | difficulty | seven bespoke tags
const liverFacts = `Which actress played Sandra Hutchinson in The Liver Birds?|Nerys Hughes|Polly James|Elizabeth Estensen|Pauline Collins|Easy|Nerys Hughes|Sandra Hutchinson|Lead Actress|Liverpool Flatmates|1970s Cast|Character Casting|Main Role
Who portrayed Beryl Hennessey in The Liver Birds?|Polly James|Nerys Hughes|Mollie Sugden|Sheila Fay|Easy|Polly James|Beryl Hennessey|Original Flatmate|Lead Actress|1969 Series|1996 Return|Television Casting
Which actress played the original flatmate Dawn in The Liver Birds?|Pauline Collins|Elizabeth Estensen|Carmel McSharry|Nerys Hughes|Medium|Pauline Collins|Dawn|Original Flatmate|Series One|1969 Pilot|Character Casting|Early Episodes
What is the surname of Sandra's flatmate Carol in The Liver Birds?|Boswell|Hennessey|Hutchinson|Paynton|Easy|Carol Boswell|Sandra Flatmate|Fifth Series|Family Surname|Elizabeth Estensen|1975 Character|Liverpool
Who played Carol Boswell in The Liver Birds?|Elizabeth Estensen|Polly James|Pauline Collins|Nerys Hughes|Easy|Elizabeth Estensen|Carol Boswell|Second Main Pair|1975 Introduction|1970s Actress|Casting|Sandra Flatmate
Which city is the main setting for The Liver Birds?|Liverpool|Birmingham|Manchester|Newcastle|Easy|Liverpool|Merseyside|Flatsharing|Northern England|Comedy Setting|Young Women|BBC Location
Which two writers created The Liver Birds?|Carla Lane and Myra Taylor|Esmonde and Larbey|Galton and Simpson|Marks and Gran|Medium|Carla Lane|Myra Taylor|Comedy Creators|Writing Partnership|1969 Debut|BBC Writers|Series Origin
Which BBC anthology first featured The Liver Birds as a pilot?|Comedy Playhouse|Play for Today|The Wednesday Play|The Two Ronnies|Medium|Comedy Playhouse|Pilot Episode|1969|BBC Anthology|Sitcom Launch|Programme Origins|Early Broadcast
In which year did The Liver Birds pilot first air?|1969|1971|1974|1978|Easy|1969 Pilot|First Broadcast|Comedy Playhouse|BBC One|Television Timeline|Original Run|Series Premiere
Which year saw the return of The Liver Birds for a reunion series?|1996|1986|1991|2001|Easy|1996 Revival|Tenth Series|Beryl Return|Sandra Return|BBC Comeback|Television Timeline|Reunion
How many numbered television series of The Liver Birds were made including the 1996 revival?|Ten|Eight|Nine|Eleven|Medium|Ten Series|1996 Revival|Series Count|1969 To 1996|BBC Catalogue|Sitcom Statistics|Programme Run
Who portrayed Sandra's overbearing mother Thelma Hutchinson?|Mollie Sugden|Doris Hare|Liz Smith|Gretchen Franklin|Easy|Mollie Sugden|Thelma Hutchinson|Sandra Mother|Recurring Character|Family Comedy|Television Casting|Maternal Role
Which actress played Beryl's mother Ethel in the earlier series of The Liver Birds?|Sheila Fay|Carmel McSharry|Mollie Sugden|Elizabeth Estensen|Hard|Sheila Fay|Ethel Hennessey|Beryl Mother|Early Series|Family Casting|1970s BBC|Supporting Actress
Which actor played Sandra's boyfriend Paul in The Liver Birds?|John Nettles|Michael Angelis|Tom Chadbon|Jonathan Lynn|Medium|John Nettles|Paul|Sandra Boyfriend|Series Three To Seven|Actor Casting|Romantic Storyline|Pre Bergerac
Who played Carol's rabbit-loving brother Lucien in The Liver Birds?|Michael Angelis|John Nettles|Ray Dunbobbin|Tom Chadbon|Medium|Michael Angelis|Lucien Boswell|Rabbit Hobby|Carol Brother|Series Five Onwards|Supporting Actor|Boswell Family
What animals does Lucien Boswell particularly love in The Liver Birds?|Rabbits|Pigeons|Dogs|Horses|Medium|Lucien Boswell|Rabbits|Michael Angelis|Animal Lover|Boswell Family|Character Hobby|1970s Episodes
What is the name of Beryl's husband whom she marries before leaving the flat?|Robert|Derek|Paul|Rex|Medium|Beryl Hennessey|Robert|Beryl Marriage|Series Four|Newlywed|Departure|Romantic Storyline
Who portrayed Robert, Beryl's romantic partner in the earlier episodes?|Jonathan Lynn|John Nettles|Michael Angelis|Tom Chadbon|Hard|Jonathan Lynn|Robert|Beryl Boyfriend|Series Four|Television Casting|Marriage Plot|1974 Story
In which series did Carol first become Sandra's flatmate?|Series five|Series three|Series seven|Series nine|Medium|Series Five|1975|Carol Boswell|Beryl Departure|Sandra Hutchinson|Flatmate Change|New Cast
What is the first name of Carol Boswell's brother in The Liver Birds?|Lucien|Robert|Rex|Derek|Easy|Lucien Boswell|Carol Brother|Boswell Siblings|Michael Angelis|Family Relationship|Rabbits|Character Name
Which character marries the vet Derek Paynton in the eighth series?|Sandra Hutchinson|Beryl Hennessey|Carol Boswell|Dawn|Medium|Sandra Hutchinson|Derek Paynton|Series Eight|1977 Wedding|Veterinary Surgery|Marriage|Romantic Arc
What is Derek Paynton's profession in The Liver Birds?|Veterinarian|Journalist|Solicitor|Accountant|Medium|Derek Paynton|Veterinary Surgeon|Sandra Husband|Kennels|Series Eight|Employment|Character Occupation
Who played Sandra's husband Derek Paynton?|Tom Chadbon|John Nettles|Michael Angelis|Geoffrey Leesley|Hard|Tom Chadbon|Derek Paynton|Sandra Husband|Series Eight And Nine|Actor Casting|Vet Character|1977 Wedding
Who sang the theme music for The Liver Birds?|The Scaffold|The Beatles|The Searchers|The Merseybeats|Medium|The Scaffold|Theme Song|Liverpool Group|Programme Music|BBC Credits|1960s Pop|Opening Titles
Which series of The Liver Birds was first broadcast in 1975?|Series five|Series four|Series seven|Series nine|Hard|1975|Series Five|Carol Boswell Introduction|BBC Scheduling|Programme Chronology|Beryl Exit|Television Timeline
Whom is Sandra living with when Beryl returns in the 1996 revival?|Her mother|Carol Boswell|Her son|Her employer|Medium|1996 Revival|Sandra Hutchinson|Thelma Hutchinson|Mother Daughter|Reunion Premise|Divorce Era|Home Life
Which original main character returns to share Sandra's home in 1996?|Beryl Hennessey|Dawn|Carol Boswell|Gloria Titlark|Easy|1996 Revival|Beryl Hennessey|Polly James|Flatmates Reunion|Tenth Series|BBC Comeback|Main Characters
What is the name of Beryl's son introduced in the 1996 revival?|Gwyn|Paul|Lucien|Derek|Hard|Gwyn|Beryl Son|1996 Series|Hennessey Family|Revival Cast|Mother Son|New Character
What is the first name of Sandra's boyfriend in the 1996 revival?|Rex|Robert|Paul|Henry|Medium|Rex|Sandra Hutchinson|1996 Revival|Geoffrey Leesley|Romantic Partner|Later Series|Reunion Plot
Which actress who had played Carol's mother returned in 1996 as Beryl's mother?|Carmel McSharry|Mollie Sugden|Sheila Fay|Eileen Kennally|Hard|Carmel McSharry|1996 Revival|Mrs Hennessey|Mrs Boswell|Double Casting|Recast Parent|Continuity Change
Whom did Michael Angelis portray in the 1996 Liver Birds revival?|Beryl's brother Lucien|Sandra's husband Derek|Carol's father|Beryl's son Gwyn|Hard|Michael Angelis|Lucien Hennessey|1996 Revival|Beryl Brother|Continuity Change|Former Lucien Boswell|Reused Actor
What happens to Sandra's marriage by the time of the 1996 revival?|She is divorced|She has just married|She is widowed|She moves abroad with her husband|Medium|Sandra Hutchinson|1996 Revival|Divorce|Derek Paynton|Later Life|Relationship Update|Reunion Story
Which 1972 Liver Birds episode is named after a football rivalry between two Merseyside clubs?|Liverpool Or Everton|Birds On Strike|The Parrot|The Driving Test|Medium|Liverpool Or Everton|Series Three|1972 Episode|Football Rivalry|Merseyside Derby|Episode Title|BBC Comedy
Which 1972 episode of The Liver Birds takes its name from an examination for motorists?|The Driving Test|The Christening|The Flat|Promotion|Medium|The Driving Test|Series Three|1972 Episode|Driving Licence|Episode Title|Transport|Comedy Story`;

const pleaseFacts = `Which actor played teacher Bernard Hedges in Please Sir!?|John Alderton|Deryck Guyler|Richard Davies|Noel Howlett|Easy|John Alderton|Bernard Hedges|Lead Actor|Teacher Role|First Three Series|Main Character|Casting
What is the name of the school where Please Sir! is set?|Fenn Street Secondary School|Waterloo Road School|Grange Hill School|Summerhill Academy|Easy|Fenn Street|Secondary Modern|School Setting|Bernard Hedges|London Education|ITV Classroom|Fictional Institution
Which notoriously troublesome class is Bernard Hedges assigned?|5C|4B|6A|3D|Easy|Form 5C|Bernard Hedges|Unruly Pupils|Teaching Assignment|Fenn Street|Class Identity|1968 Pilot
Who played caretaker Norman Potter in Please Sir!?|Deryck Guyler|John Alderton|Erik Chitty|Richard Davies|Easy|Deryck Guyler|Norman Potter|School Caretaker|Cast Member|Staff Rivalry|Fenn Street|Character Casting
What job does Norman Potter hold at Fenn Street School?|Caretaker|Headmaster|PE teacher|School doctor|Easy|Norman Potter|Caretaker|Deryck Guyler|School Maintenance|Bernard Hedges|Staff Relations|Fenn Street
Who played headmaster Morris Cromwell in Please Sir!?|Noel Howlett|Richard Davies|John Alderton|Philip Casson|Medium|Noel Howlett|Morris Cromwell|Headmaster|School Management|Actor Casting|ITV Cast|Academic Authority
Which actress played school secretary Doris Ewell in Please Sir!?|Joan Sanderson|Penny Spencer|Liz Gebhardt|Jill Kerman|Medium|Joan Sanderson|Doris Ewell|School Secretary|School Office|Actor Casting|Fenn Street Staff|Supporting Lead
Which actor played teacher Mr Price in Please Sir!?|Richard Davies|John Alderton|Deryck Guyler|Erik Chitty|Medium|Richard Davies|Mr Price|Teaching Staff|Welsh Actor|Character Casting|Fenn Street School|School Colleague
Which actor portrayed elderly staff member Mr Smith in Please Sir!?|Erik Chitty|Noel Howlett|Richard Davies|Deryck Guyler|Hard|Erik Chitty|Mr Smith|School Staff|Supporting Cast|Original Series|Television Actor|Character Role
Which pupil was played by David Barry in Please Sir!?|Frankie Abbott|Eric Duffy|Peter Craven|Dennis Dunstable|Medium|David Barry|Frankie Abbott|Form 5C|Pupil Casting|Original Class|Schoolboy Character|Spin Off Role
Who played the pupil Eric Duffy in Please Sir!?|Peter Cleall|David Barry|Peter Denyer|Malcolm McFee|Medium|Peter Cleall|Eric Duffy|Form 5C|Television Casting|Original Class|Student Role|1970s Spin Off
Which actress played Maureen Bullock in Please Sir!?|Liz Gebhardt|Penny Spencer|Jill Kerman|Joan Sanderson|Medium|Liz Gebhardt|Maureen Bullock|Form 5C|Female Pupil|Actor Casting|Original Class|School Sitcom
Which actor played Dennis Dunstable in Please Sir!?|Peter Denyer|Peter Cleall|David Barry|Malcolm McFee|Medium|Peter Denyer|Dennis Dunstable|Form 5C|School Pupil|Original Cast|1970s ITV|Actor Casting
Who played pupil Peter Craven in the original Please Sir! series?|Malcolm McFee|Leon Vitali|Peter Cleall|John Alderton|Hard|Malcolm McFee|Peter Craven|Form 5C|Original Performer|1970s Recast|Student Role|Television Casting
Who portrayed Sharon Eversleigh in the original television series of Please Sir!?|Penny Spencer|Carol Hawkins|Liz Gebhardt|Jill Kerman|Medium|Penny Spencer|Sharon Eversleigh|Original Television Cast|Form 5C|Female Pupil|Casting Difference|1968 Series
Which writing partnership created Please Sir!?|John Esmonde and Bob Larbey|Vince Powell and Harry Driver|Galton and Simpson|Carla Lane and Myra Taylor|Medium|John Esmonde|Bob Larbey|Sitcom Creators|Scriptwriting|1968 Debut|Writing Duo|Programme Origin
Which ITV company made Please Sir!?|London Weekend Television|Thames Television|Granada Television|Yorkshire Television|Medium|London Weekend Television|LWT|ITV Producer|1960s Television|Programme Maker|London Studios|Production Company
In which year did Please Sir! first appear on television?|1968|1966|1970|1973|Easy|1968 Premiere|First Episode|Fenn Street|Television History|ITV|Series Debut|Opening Year
In which year did the Please Sir! television run end?|1972|1969|1974|1976|Easy|1972 Finale|Fourth Series|ITV Comedy|Programme End|Broadcast Timeline|Last Season|Television History
How many series of Please Sir! were produced?|Four|Three|Five|Six|Medium|Four Series|Original Run|1968 To 1972|Production Statistics|ITV Sitcom|Television Catalogue|Programme Length
What was the title of the first Please Sir! television episode?|The Welcome Mat|The Pruning Of Hedges|The School Captain|A Picture Of Innocence|Medium|The Welcome Mat|Series One|1968 Premiere|Bernard Hedges|First Day|Episode Title|Fenn Street
What goes wrong for Bernard Hedges at the start of his first day at Fenn Street?|He arrives late|He loses his voice|He gets locked in a cupboard|He goes to the wrong school|Easy|The Welcome Mat|Bernard Hedges|Late Arrival|First Day|Series One|New Teacher|Opening Plot
Which teacher takes over as the central focus after Bernard Hedges leaves in series four?|David Ffitchett-Brown|Morris Cromwell|Norman Potter|Mr Smith|Medium|David Ffitchett Brown|Fourth Series|Richard Warwick|New Teacher|Hedges Departure|Staff Change|1971 Cast
Which actor played David Ffitchett-Brown in the fourth series of Please Sir!?|Richard Warwick|Richard Davies|John Alderton|Noel Howlett|Hard|Richard Warwick|David Ffitchett Brown|Series Four|New Lead|1971 Episodes|Actor Casting|Teacher Role
What happens to the original Form 5C at the end of Please Sir!'s third series?|They leave school for work|They all repeat the year|They transfer to a boarding school|They become teachers|Medium|Form 5C|Third Series|Leaving School|Working Life|Class Farewell|Fenn Street Gang|Graduation
What system does the headmaster introduce in the episode The School Captain?|School houses|A pupil parliament|A school uniform lottery|A prefect-free timetable|Medium|The School Captain|Series Two|Morris Cromwell|House System|School Captains|Five C|1969 Episode
What activity does Hedges arrange for 5C in Enter Mister Sibley?|Mock job interviews|A camping expedition|A football tournament|A science fair|Medium|Enter Mister Sibley|Series Three|Mock Interviews|Career Advice|Bernard Hedges|1970 Episode|Employment Preparation
What type of recruiting officer is called to Fenn Street in Enter Mister Sibley?|Army|Navy|Police|Fire service|Medium|Enter Mister Sibley|Series Three|Army Recruitment|Norman Potter|Careers Advice|School Visitor|Employment
What is the surname of Penny, Bernard Hedges's romantic partner and later wife?|Wheeler|Eversleigh|Bullock|Ewell|Medium|Penny Wheeler|Penny Hedges|Jill Kerman|Romantic Partner|Marriage|Third Series|Character Surname
Which actress played Penny Wheeler in Please Sir!?|Jill Kerman|Penny Spencer|Joan Sanderson|Liz Gebhardt|Medium|Jill Kerman|Penny Wheeler|Bernard Hedges|Actor Casting|Wedding Story|Third Series|Romance
In what year did the Please Sir! cinema film appear?|1971|1968|1973|1975|Easy|1971 Film|Cinema Adaptation|Movie Release|Fenn Street|John Alderton|ITV Spin Off|Film History
Where does Hedges take Form 5C in the 1971 film version of Please Sir!?|A holiday camp|A castle in Scotland|A London museum|A seaside boarding school|Medium|1971 Film|Holiday Camp|Form 5C|Bernard Hedges|School Outing|Film Plot|Cinema Version
Who directed the 1971 Please Sir! film?|Mark Stuart|Gerald Thomas|Peter Rogers|John Howard Davies|Hard|Mark Stuart|Film Director|1971 Adaptation|Cinema Credits|Behind Camera|British Comedy|Fenn Street
Who took over the role of Sharon Eversleigh in the 1971 film?|Carol Hawkins|Penny Spencer|Jill Kerman|Liz Gebhardt|Medium|Carol Hawkins|Sharon Eversleigh|1971 Film|Penny Spencer|Film Recasting|Female Pupil|Cinema Cast
Which composer wrote the Please Sir! television theme music?|Sam Fonteyn|Ronnie Hazlehurst|Howard Goodall|Denis King|Hard|Sam Fonteyn|Theme Music|Series Credits|Television Soundtrack|Opening Titles|LWT|Music Composition`;

const fennFacts = `Which earlier school sitcom was followed by The Fenn Street Gang?|Please Sir!|Mind Your Language|The Fenn Street Academy|The Clitheroe Kid|Easy|Please Sir|Prequel Series|Form 5C|Former Pupils|Spin Off|ITV Sitcom|Story Continuation
What major life change does The Fenn Street Gang follow?|Leaving school for work|Starting university abroad|Joining the armed forces|Opening a boarding school|Easy|Former Form 5C|School Leavers|Employment|Young Adults|Working Life|Spin Off Premise|1971 Debut
In what year did The Fenn Street Gang begin?|1971|1968|1973|1976|Easy|1971 Debut|First Series|ITV Premiere|Fenn Street School|Television Timeline|British Sitcom|Series Launch
In what year did The Fenn Street Gang end?|1973|1971|1975|1978|Easy|1973 Finale|Third Series|ITV Run|Last Broadcast|Sitcom History|Production Timeline|Programme Ending
How many series of The Fenn Street Gang were produced?|Three|Two|Four|Five|Medium|Three Series|1971 To 1973|Series Count|Programme Catalogue|ITV History|Spin Off|Production Facts
How many regular episodes of The Fenn Street Gang were made?|47|26|36|52|Medium|Forty Seven Episodes|Three Series|Episode Count|ITV Catalogue|Programme Run|London Weekend Television|1970s Series
Which actor returned as Eric Duffy in The Fenn Street Gang?|Peter Cleall|Peter Denyer|David Barry|Malcolm McFee|Easy|Peter Cleall|Eric Duffy|Former Pupil|Repeat Casting|Main Ensemble|Class Five C|Spin Off Cast
Who played Sharon Eversleigh in The Fenn Street Gang?|Carol Hawkins|Penny Spencer|Liz Gebhardt|Jill Kerman|Medium|Carol Hawkins|Sharon Eversleigh|Film Actress|Original TV Recast|Eric Duffy|Lead Character|ITV Casting
Which former Fenn Street pupil is played by David Barry?|Frankie Abbott|Dennis Dunstable|Eric Duffy|Peter Craven|Medium|David Barry|Frankie Abbott|Former Five C|Actor Casting|Working Life|School Friend|Main Cast
Which actor reprised the role of Dennis Dunstable in The Fenn Street Gang?|Peter Denyer|Leon Vitali|Peter Cleall|John Alderton|Medium|Peter Denyer|Dennis Dunstable|Original Cast|Supporting Lead|Student Transition|Early Series|Television Casting
Who returned as Maureen Bullock in The Fenn Street Gang?|Liz Gebhardt|Carol Hawkins|Penny Spencer|Joan Sanderson|Medium|Liz Gebhardt|Maureen Bullock|Original Form 5C|Female Lead|Working Woman|Series One And Two|Actor Casting
Which two actors played Peter Craven across the run of The Fenn Street Gang?|Leon Vitali and Malcolm McFee|John Alderton and David Barry|Peter Cleall and Peter Denyer|Fred Beauman and George Baker|Hard|Leon Vitali|Malcolm McFee|Peter Craven|Cast Change|Series One|Series Two And Three|Recasting
Who played Peter Craven in the first series of The Fenn Street Gang?|Leon Vitali|Malcolm McFee|David Barry|Peter Denyer|Hard|Leon Vitali|Peter Craven|Series One|Actor Recasting|Former Pupil|Spin Off Cast|1971 Role
Which actor returned to the role of Peter Craven for the later Fenn Street Gang series?|Malcolm McFee|Leon Vitali|Peter Cleall|Richard Warwick|Hard|Malcolm McFee|Peter Craven|Series Two|Series Three|Original Please Sir Actor|Casting Return|1972 Role
Which former teacher occasionally appears among the ex-pupils in the first series?|Bernard Hedges|David Ffitchett-Brown|Mr Price|Morris Cromwell|Medium|Bernard Hedges|John Alderton|Former Teacher|Series One|Guest Appearance|Form 5C|Spin Off Continuity
Which company produced The Fenn Street Gang?|London Weekend Television|Thames Television|Granada Television|Yorkshire Television|Medium|London Weekend Television|ITV Production|LWT|Series Credits|1970s Comedy|Studio Sitcom|Programme Maker
Which writing duo created The Fenn Street Gang?|John Esmonde and Bob Larbey|Carla Lane and Myra Taylor|Galton and Simpson|Vince Powell and Harry Driver|Medium|John Esmonde|Bob Larbey|Sitcom Writers|Creators|Please Sir Connection|1971 Series|Comedy Partnership
What is the title of The Fenn Street Gang's first episode?|Should Auld Acquaintance|The Start Of Something Big|Horses For Courses|The Thin Yellow Line|Medium|Should Auld Acquaintance|1971 Premiere|Series One|School Friendships|First Episode|Working Life|Episode Title
Which Fenn Street Gang character tries becoming a private detective in The Start of Something Big?|Frankie Abbott|Eric Duffy|Peter Craven|Dennis Dunstable|Medium|Frankie Abbott|Private Detective|The Start Of Something Big|Series One|1971 Plot|First Case|Amateur Sleuth
Which pair face relationship troubles in The Start of Something Big?|Eric and Sharon|Dennis and Maureen|Peter and Penny|Frankie and Doris|Medium|Eric Duffy|Sharon Eversleigh|The Start Of Something Big|Series One|Couple Problems|1971 Episode|Relationship Plot
Which former Fenn Street teacher joins the group in Leave It To Me Darling?|Bernard Hedges|Norman Potter|Mr Price|Morris Cromwell|Medium|Bernard Hedges|Leave It To Me Darling|Series One|Former Teacher|School Reunion|John Alderton|New Member
Which character gets involved with shady boss Stanley Bowler?|Peter Craven|Bernard Hedges|Dennis Dunstable|Sharon Eversleigh|Medium|Peter Craven|Stanley Bowler|Questionable Work|Criminal Associate|Third Series|Working Life|Spin Off Link
Who played the criminal Stanley Bowler before he got his own spin-off?|George Baker|Fred Beauman|John Alderton|Leon Vitali|Easy|George Baker|Stanley Bowler|Fenn Street Guest|Crime Boss|1973 Spin Off|British Actor|Character Casting`;

const bowlerFacts = `Which actor starred as Stanley Bowler in the 1973 sitcom Bowler?|George Baker|Fred Beauman|Peter Cleall|John Alderton|Easy|George Baker|Stanley Bowler|Lead Actor|Cockney Spiv|Main Character|ITV Sitcom|Television Casting
Which programme introduced Stanley Bowler before his solo series?|The Fenn Street Gang|Please Sir!|The Sweeney|On The Buses|Easy|Fenn Street Gang|Spin Off Origins|Stanley Bowler|1970s ITV|Series Connection|Shared Characters|Programme History
What is Stanley Bowler's background before he pursues high society?|A criminal recently released from prison|A retired headmaster|A former football manager|A successful concert pianist|Medium|Stanley Bowler|Ex Criminal|Prison Release|Social Climbing|Cockney Character|1973 Premise|Personal Reinvention
Which actor played Bowler's friend and valet Reg?|Fred Beauman|George Baker|Christopher Benjamin|Johnny Briggs|Medium|Fred Beauman|Reg|Valet|Longtime Friend|Actor Casting|Bowler Household|1973 Cast
Who portrayed Stanley's former wife Doreen Bowler?|Renny Lister|Gretchen Franklin|Wendy Richard|Carol Hawkins|Medium|Renny Lister|Doreen Bowler|Ex Wife|Character Casting|Former Marriage|Family Relationships|Supporting Actress
Which actress played Stanley Bowler's mother?|Gretchen Franklin|Mollie Sugden|Doris Hare|Liz Smith|Medium|Gretchen Franklin|Mrs Bowler|Stanley Mother|Family Cast|1973 Comedy|Character Casting|Maternal Role
Which actor played Superintendent Chamberlain in Bowler?|Christopher Benjamin|Johnnie Wade|Michael Bilton|Fred Beauman|Hard|Christopher Benjamin|Superintendent Chamberlain|Police Role|Supporting Actor|Criminal Past|1973 Episodes|Guest Casting
Which production company made the television sitcom Bowler?|London Weekend Television|Thames Television|Granada Television|ATV|Medium|London Weekend Television|LWT|1973 Production|ITV Company|Programme Maker|Studio Comedy|Production Credits
Which pair wrote the sitcom Bowler?|John Esmonde and Bob Larbey|Carla Lane and Myra Taylor|Galton and Simpson|Vince Powell and Harry Driver|Medium|John Esmonde|Bob Larbey|Comedy Writers|Please Sir Connection|Spin Off Creators|British Scripts|Writing Credits
In which year was Bowler first broadcast on ITV?|1973|1969|1971|1976|Easy|1973 Premiere|ITV|Television Timeline|Series One|First Broadcast|British Comedy|Programme Debut
How many series of Bowler were made?|One|Two|Three|Four|Easy|One Series|Single Season|1973 Run|Programme Length|ITV Catalogue|Production Facts|Short Lived Sitcom
How many episodes of Bowler were broadcast?|13|6|26|39|Medium|Thirteen Episodes|Episode Count|1973|ITV Comedy|Single Series|Broadcast Catalogue|Production History
What is the title of the first episode of Bowler?|The Ides Of March|Members Only|Family Tree|On The Fiddle|Medium|The Ides Of March|Series Premiere|29 July 1973|Prison Release|Social Ambition|Episode Title|Stanley Bowler
What sort of exclusive establishment refuses Bowler membership in Members Only?|A gentlemen's club|A golf club|A yacht club|A theatre society|Medium|Members Only|Exclusive Club|Social Status|Second Episode|1973|Class Barriers|Private Membership
What sporting world does Bowler try to profit from in They Never Comeback?|Boxing|Horse racing|Football|Greyhound racing|Medium|They Never Comeback|Boxing|Fight Game|Fixed Result|Betting Scheme|Episode Four|1973 Story
Who begins seeing a sailor in the Bowler episode Faithfully Yours?|Doreen|Mrs Bowler|Jane|A visiting maid|Medium|Faithfully Yours|Doreen Bowler|New Romance|Sailor|Ex Wife|Stanley Jealousy|Episode Five
What musical instrument is played by Bowler's protege in On The Fiddle?|Violin|Cello|Clarinet|Trumpet|Medium|On The Fiddle|Violinist|Music Patronage|Festival Hall|Artist Sponsorship|Episode Six|1973 Plot
Which country does Bowler consider moving to so he can become a laird?|Scotland|Wales|Ireland|France|Medium|The Monarch Of The Glen|Scottish House|Laird Ambition|Social Climbing|Episode Seven|Kilt|1973 Story
Whose attempts to find work does Bowler repeatedly sabotage in Thou Shalt Not Grass?|Doreen's|Reg's|His mother's|Chamberlain's|Medium|Thou Shalt Not Grass|Doreen Bowler|Jobs Sabotaged|Stanley Bowler|Ex Wife|Episode Eight|Employment
What kind of institution does Stanley support in Sweet And Sour Charity?|A children's home|An animal shelter|A school library|A retirement home|Medium|Sweet And Sour Charity|Childrens Home|Benefactor|Charity Status|Social Ambition|Episode Nine|1973 Plot
Which relative's death triggers the funeral plans in Bowler's episode R.I.P.?|His uncle|His father|His cousin|His brother|Medium|RIP Episode|Stanley Uncle|Funeral Arrangements|High Class Ceremony|Episode Ten|Family Death|1973 Plot
What ancestral title does Bowler believe he has discovered in Family Tree?|Duke|Baron|Earl|Knight|Hard|Family Tree|Duke De Bouleur|Ancestry|Blue Blood|Social Pretensions|Episode Eleven|Genealogy
Which specialist does Bowler employ in Bowler's Analysis?|A psychiatrist|A personal trainer|An art historian|A speech therapist|Medium|Bowlers Analysis|Psychiatrist|Delusions Of Grandeur|Doreen Bowler|Self Improvement|Episode Twelve|Therapy
To which country does Stanley propose a pony-trekking holiday in the final Bowler episode?|Peru|Spain|Morocco|Switzerland|Hard|Without Let Or Hindrance|Peru|Pony Trekking|Travel Plans|Episode Thirteen|Finale Plot|Stanley Bowler
Which Spanish holiday region do Reg and Doreen prefer to Stanley's adventurous plan?|Costa Brava|Costa del Sol|Canary Islands|Balearic Islands|Hard|Without Let Or Hindrance|Costa Brava|Reg|Doreen Bowler|Holiday Compromise|Final Episode|Spain`;

const questions = [];

function appendFacts(block, programme, era) {
  const lines = block.trim().split('\n');
  for (let i = 0; i < lines.length; i++) {
    const parts = lines[i].split('|').map(s => s.trim());
    if (parts.length !== 13 || parts.some(s => !s)) {
      throw new Error(`${programme} question ${i + 1}: expected 13 populated fields, got ${parts.length}`);
    }
    const [rawQuestion, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
    const q = rawQuestion.toLowerCase().includes(programme.toLowerCase())
      ? rawQuestion
      : `In ${programme}, ${rawQuestion[0].toLowerCase()}${rawQuestion.slice(1)}`;
    const answers = [wrong1, wrong2, wrong3];
    answers.splice(questions.length % 4, 0, correctAnswer);
    const item = {
      id: 'tv_' + (FIRST_ID + questions.length),
      category: 'Television',
      question: q,
      answers,
      correctAnswer,
      difficulty,
      tags: [...new Set(['Television', 'British Sitcom', programme, era, correctAnswer, ...specificTags])],
      dailyEligible: true
    };
    if (new Set(answers.map(a => a.toLowerCase())).size !== 4 ||
        !answers.includes(correctAnswer) || !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
        item.tags.length < 10) throw new Error('Metadata failure: ' + item.id);
    questions.push(item);
  }
}

appendFacts(liverFacts, 'The Liver Birds', '1969-1996');
appendFacts(pleaseFacts, 'Please Sir!', '1968-1972');
appendFacts(fennFacts, 'The Fenn Street Gang', '1971-1973');
appendFacts(bowlerFacts, 'Bowler', '1973');

const wording = new Set();
for (const q of questions) {
  const normal = q.question.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (wording.has(normal)) throw new Error('Duplicate question: ' + q.id);
  wording.add(normal);
}
module.exports = questions;
