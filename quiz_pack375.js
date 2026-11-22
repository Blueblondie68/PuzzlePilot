
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

const normalise = v => String(v).normalize('NFKC').trim().toLocaleLowerCase('en-GB');
const tagKey = v => normalise(v).replace(/[^\p{L}\p{N}]/gu, '');
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
      programme,
      tags: [...new Map([
        'Television', 'British Television', 'British Sitcom', 'Comedy', 'Sitcom',
        programme, 'Programme: ' + programme, era,
        programme === 'The Liver Birds' ? 'BBC One' : 'ITV',
        correctAnswer, ...specificTags
      ].map(tag => [tagKey(tag), tag])).values()],
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

// Pack 375 audit, 22 November 2026. All 117 original question IDs preserved.
// Fixed missing programme metadata and programme tags in every original question.
// Story sources: https://www.comedy.co.uk/tv/the_liver_birds/episodes/all/
// https://thetvdb.com/series/please-sir/allseasons/official
// https://thetvdb.com/series/the-fenn-street-gang/allseasons/official
// https://www.comedy.co.uk/tv/bowler/episodes/1/
const auditAdditions = [
  {
    "id": "tv_40067",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' An Interesting Condition, what expensive item belonging to Dawn does Beryl use too freely?",
    "answers": [
      "Lipstick",
      "Perfume",
      "Face cream",
      "A silk scarf"
    ],
    "correctAnswer": "Perfume",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1969 An Interesting Condition",
      "Character incident: Beryl overuses Dawn perfume",
      "Narrative detail: Beryl overuses Dawn perfume",
      "Correct answer: Perfume",
      "Episode story: Beryl overuses Dawn perfume",
      "Episode era: 1969 An Interesting Condition",
      "Plot focus: Beryl overuses Dawn perfume"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40068",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' The Photographer, where does Dawn's photograph first appear before shady advertisers recruit her?",
    "answers": [
      "A fashion magazine",
      "A modelling-agency window",
      "The local newspaper",
      "A shop catalogue"
    ],
    "correctAnswer": "The local newspaper",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1969 The Photographer",
      "Character incident: Dawn photographed for local newspaper",
      "Narrative detail: Dawn photographed for local newspaper",
      "Correct answer: The local newspaper",
      "Episode story: Dawn photographed for local newspaper",
      "Episode era: 1969 The Photographer",
      "Plot focus: Dawn photographed for local newspaper"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40069",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' Aristocracy and Crime, what social status do Dawn and Beryl pretend to have?",
    "answers": [
      "Royal appointments",
      "Foreign diplomatic status",
      "A large inheritance",
      "Aristocratic backgrounds"
    ],
    "correctAnswer": "Aristocratic backgrounds",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1969 Aristocracy and Crime",
      "Character incident: Dawn Beryl pretend to be aristocrats",
      "Narrative detail: Dawn Beryl pretend to be aristocrats",
      "Correct answer: Aristocratic backgrounds",
      "Episode story: Dawn Beryl pretend to be aristocrats",
      "Episode era: 1969 Aristocracy and Crime",
      "Plot focus: Dawn Beryl pretend to be aristocrats"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40070",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds, which English seaside town is offered as the cheaper alternative to Torremolinos for a holiday?",
    "answers": [
      "Southport",
      "Blackpool",
      "Brighton",
      "Scarborough"
    ],
    "correctAnswer": "Southport",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1969 Torremolinos",
      "Character incident: Girls compare Southport holiday",
      "Narrative detail: Girls compare Southport holiday",
      "Correct answer: Southport",
      "Episode story: Girls compare Southport holiday",
      "Episode era: 1969 Torremolinos",
      "Plot focus: Girls compare Southport holiday"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40071",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' The Wedding, which relative of Beryl is planning to marry Ernie?",
    "answers": [
      "Her cousin Ethel",
      "Her sister Gloria",
      "Her mother",
      "Her aunt Peggy"
    ],
    "correctAnswer": "Her sister Gloria",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1971 The Wedding",
      "Character incident: Beryl sister Gloria wedding to Ernie",
      "Narrative detail: Beryl sister Gloria wedding to Ernie",
      "Correct answer: Her sister Gloria",
      "Episode story: Beryl sister Gloria wedding to Ernie",
      "Episode era: 1971 The Wedding",
      "Plot focus: Beryl sister Gloria wedding to Ernie"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40072",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' Wilf, what type of business does Sandra's boyfriend Wilf's father own?",
    "answers": [
      "Bicycle shop",
      "Greengrocers",
      "Antiques shop",
      "Newsagents"
    ],
    "correctAnswer": "Antiques shop",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1971 Wilf",
      "Character incident: Wilf father runs antiques shop",
      "Narrative detail: Wilf father runs antiques shop",
      "Correct answer: Antiques shop",
      "Episode story: Wilf father runs antiques shop",
      "Episode era: 1971 Wilf",
      "Plot focus: Wilf father runs antiques shop"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40073",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' Danny and Gerry, which man unexpectedly proposes marriage to Sandra?",
    "answers": [
      "Gerry",
      "Robert",
      "Paul",
      "Danny"
    ],
    "correctAnswer": "Danny",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1971 Danny and Gerry",
      "Character incident: Sandra proposed to by Danny",
      "Narrative detail: Sandra proposed to by Danny",
      "Correct answer: Danny",
      "Episode story: Sandra proposed to by Danny",
      "Episode era: 1971 Danny and Gerry",
      "Plot focus: Sandra proposed to by Danny"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40074",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' Birds on the Dole, how much money do Beryl and Sandra have between them while unemployed?",
    "answers": [
      "50 pence",
      "Five pounds",
      "Ten pounds",
      "One pound"
    ],
    "correctAnswer": "50 pence",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1972 Birds on the Dole",
      "Character incident: Flatmates have only fifty pence",
      "Narrative detail: Flatmates have only fifty pence",
      "Correct answer: 50 pence",
      "Episode story: Flatmates have only fifty pence",
      "Episode era: 1972 Birds on the Dole",
      "Plot focus: Flatmates have only fifty pence"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40075",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' Birds on Strike, what ailment does Beryl falsely claim so she can spend time with her boyfriend?",
    "answers": [
      "Influenza",
      "Tonsillitis",
      "A broken ankle",
      "Food poisoning"
    ],
    "correctAnswer": "Tonsillitis",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1972 Birds on Strike",
      "Character incident: Beryl pretends tonsillitis",
      "Narrative detail: Beryl pretends tonsillitis",
      "Correct answer: Tonsillitis",
      "Episode story: Beryl pretends tonsillitis",
      "Episode era: 1972 Birds on Strike",
      "Plot focus: Beryl pretends tonsillitis"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40076",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds, what pet does Beryl receive for her birthday in Anybody Here Seen Thingy?",
    "answers": [
      "A budgerigar",
      "A cat",
      "A hamster",
      "A guinea pig"
    ],
    "correctAnswer": "A hamster",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1974 Anybody Here Seen Thingy",
      "Character incident: Pregnant hamster birthday present",
      "Narrative detail: Pregnant hamster birthday present",
      "Correct answer: A hamster",
      "Episode story: Pregnant hamster birthday present",
      "Episode era: 1974 Anybody Here Seen Thingy",
      "Plot focus: Pregnant hamster birthday present"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40077",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' Friends at First Sight, from which country does Sandra's brother return?",
    "answers": [
      "Canada",
      "France",
      "The United States",
      "Australia"
    ],
    "correctAnswer": "Australia",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1974 Friends at First Sight",
      "Character incident: Sandra brother returns from Australia",
      "Narrative detail: Sandra brother returns from Australia",
      "Correct answer: Australia",
      "Episode story: Sandra brother returns from Australia",
      "Episode era: 1974 Friends at First Sight",
      "Plot focus: Sandra brother returns from Australia"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40078",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' Girl Saturday, what does Beryl worry she must start wearing?",
    "answers": [
      "Spectacles",
      "A hearing aid",
      "A neck brace",
      "A dental retainer"
    ],
    "correctAnswer": "Spectacles",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1974 Girl Saturday",
      "Character incident: Beryl needs glasses",
      "Narrative detail: Beryl needs glasses",
      "Correct answer: Spectacles",
      "Episode story: Beryl needs glasses",
      "Episode era: 1974 Girl Saturday",
      "Plot focus: Beryl needs glasses"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40079",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' It Takes All Kinds, whom does Sandra initially regard as an unacceptable potential flatmate?",
    "answers": [
      "Her mother Thelma",
      "Carol Boswell",
      "Lucien Boswell",
      "Her friend Beryl"
    ],
    "correctAnswer": "Carol Boswell",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1975 It Takes All Kinds",
      "Character incident: Sandra reluctant to share with Carol",
      "Narrative detail: Sandra reluctant to share with Carol",
      "Correct answer: Carol Boswell",
      "Episode story: Sandra reluctant to share with Carol",
      "Episode era: 1975 It Takes All Kinds",
      "Plot focus: Sandra reluctant to share with Carol"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40080",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' Look After the Children, whose disappearance alarms Sandra?",
    "answers": [
      "Carol's father",
      "Her boyfriend Paul",
      "Her mother Thelma",
      "Her brother"
    ],
    "correctAnswer": "Her mother Thelma",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1975 Look After the Children",
      "Character incident: Sandra mother disappears",
      "Narrative detail: Sandra mother disappears",
      "Correct answer: Her mother Thelma",
      "Episode story: Sandra mother disappears",
      "Episode era: 1975 Look After the Children",
      "Plot focus: Sandra mother disappears"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40081",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' Everybody Is Beautiful, what local contest draws Sandra and Carol's attention?",
    "answers": [
      "A pub quiz",
      "A dog show",
      "A singing competition",
      "A beauty competition"
    ],
    "correctAnswer": "A beauty competition",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1975 Everybody Is Beautiful",
      "Character incident: Flatmates local beauty contest",
      "Narrative detail: Flatmates local beauty contest",
      "Correct answer: A beauty competition",
      "Episode story: Flatmates local beauty contest",
      "Episode era: 1975 Everybody Is Beautiful",
      "Plot focus: Flatmates local beauty contest"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40082",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' Facing Up to Life, who announces plans to remarry?",
    "answers": [
      "Carol's father",
      "Sandra's mother",
      "Beryl's brother",
      "Lucien Boswell"
    ],
    "correctAnswer": "Carol's father",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1976 Facing Up To Life",
      "Character incident: Carol father wedding announcement",
      "Narrative detail: Carol father wedding announcement",
      "Correct answer: Carol's father",
      "Episode story: Carol father wedding announcement",
      "Episode era: 1976 Facing Up To Life",
      "Plot focus: Carol father wedding announcement"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40083",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' The Maypole, which unusual animal do Carol and Sandra acquire during a disastrous trip to London?",
    "answers": [
      "A badger",
      "A goat",
      "An otter",
      "A sheep"
    ],
    "correctAnswer": "A goat",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1976 The Maypole",
      "Character incident: Road trip leaves girls with goat",
      "Narrative detail: Road trip leaves girls with goat",
      "Correct answer: A goat",
      "Episode story: Road trip leaves girls with goat",
      "Episode era: 1976 The Maypole",
      "Plot focus: Road trip leaves girls with goat"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40084",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' Honey, what does Sandra resolve to become after seeing Paul with another woman?",
    "answers": [
      "A professional singer",
      "A vegetarian",
      "Hard and unkind",
      "A travel agent"
    ],
    "correctAnswer": "Hard and unkind",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1976 Honey",
      "Character incident: Sandra vows to be hard and evil",
      "Narrative detail: Sandra vows to be hard and evil",
      "Correct answer: Hard and unkind",
      "Episode story: Sandra vows to be hard and evil",
      "Episode era: 1976 Honey",
      "Plot focus: Sandra vows to be hard and evil"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40085",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' The Never-Ending End, what item belonging to Carol's missing grandfather is discovered at the cemetery?",
    "answers": [
      "His spectacles",
      "His walking stick",
      "His pocket watch",
      "His tobacco tin"
    ],
    "correctAnswer": "His tobacco tin",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1976 The Never-Ending End",
      "Character incident: Grandad tobacco tin by grave",
      "Narrative detail: Grandad tobacco tin by grave",
      "Correct answer: His tobacco tin",
      "Episode story: Grandad tobacco tin by grave",
      "Episode era: 1976 The Never-Ending End",
      "Plot focus: Grandad tobacco tin by grave"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40086",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' Badgers and Otters, what planned council action do Sandra and Carol protest?",
    "answers": [
      "Demolishing homes",
      "Closing a hospital",
      "Selling a public park",
      "Cutting bus services"
    ],
    "correctAnswer": "Demolishing homes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1976 Badgers and Otters",
      "Character incident: Council demolition plan street houses",
      "Narrative detail: Council demolition plan street houses",
      "Correct answer: Demolishing homes",
      "Episode story: Council demolition plan street houses",
      "Episode era: 1976 Badgers and Otters",
      "Plot focus: Council demolition plan street houses"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40087",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' Something Beginning, what animals does Carol accidentally let escape from the kennels?",
    "answers": [
      "Cats",
      "Dogs",
      "Rabbits",
      "Parrots"
    ],
    "correctAnswer": "Dogs",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1977 Something Beginning",
      "Character incident: Carol loses dogs from kennels",
      "Narrative detail: Carol loses dogs from kennels",
      "Correct answer: Dogs",
      "Episode story: Carol loses dogs from kennels",
      "Episode era: 1977 Something Beginning",
      "Plot focus: Carol loses dogs from kennels"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40088",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' The Flower Picker, what mistake costs Carol her job at the kennels?",
    "answers": [
      "Leaving the gates open overnight",
      "Losing the cash takings",
      "Mixing up the dogs' tablets",
      "Feeding the animals the wrong meat"
    ],
    "correctAnswer": "Mixing up the dogs' tablets",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1977 The Flower Picker",
      "Character incident: Carol mixes dog medicine",
      "Narrative detail: Carol mixes dog medicine",
      "Correct answer: Mixing up the dogs' tablets",
      "Episode story: Carol mixes dog medicine",
      "Episode era: 1977 The Flower Picker",
      "Plot focus: Carol mixes dog medicine"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40089",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' God Bless Us and Save Us, which two mothers begin arranging Sandra's wedding?",
    "answers": [
      "Mrs Hennessey and Mrs Paynton",
      "Mrs Boswell and Mrs Hennessey",
      "Mrs Hutchinson and Mrs Hennessey",
      "Mrs Hutchinson and Mrs Boswell"
    ],
    "correctAnswer": "Mrs Hutchinson and Mrs Boswell",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1977 God Bless Us and Save Us",
      "Character incident: Two mothers handle wedding plans",
      "Narrative detail: Two mothers handle wedding plans",
      "Correct answer: Mrs Hutchinson and Mrs Boswell",
      "Episode story: Two mothers handle wedding plans",
      "Episode era: 1977 God Bless Us and Save Us",
      "Plot focus: Two mothers handle wedding plans"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40090",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' 1996 return, at what type of class do Beryl and Sandra first meet again?",
    "answers": [
      "A slimming class",
      "A painting class",
      "A computer course",
      "A yoga class"
    ],
    "correctAnswer": "A slimming class",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1996 Episode One",
      "Character incident: Reunited flatmates slimming class",
      "Narrative detail: Reunited flatmates slimming class",
      "Correct answer: A slimming class",
      "Episode story: Reunited flatmates slimming class",
      "Episode era: 1996 Episode One",
      "Plot focus: Reunited flatmates slimming class"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40091",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' 1996 revival, what environmental cause leads Beryl and Sandra to join a demonstration?",
    "answers": [
      "Stopping a bypass",
      "Saving a tree",
      "Cleaning the River Mersey",
      "Protecting a nature reserve"
    ],
    "correctAnswer": "Saving a tree",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1996 Episode Three",
      "Character incident: 1996 protest to save tree",
      "Narrative detail: 1996 protest to save tree",
      "Correct answer: Saving a tree",
      "Episode story: 1996 protest to save tree",
      "Episode era: 1996 Episode Three",
      "Plot focus: 1996 protest to save tree"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40092",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' 1996 revival, whose disappearance worries Beryl while Sandra visits Rex?",
    "answers": [
      "Her brother Lucien's",
      "Her mother Ethel's",
      "Her son Gwyn's",
      "Her father Robert's"
    ],
    "correctAnswer": "Her son Gwyn's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1996 Episode Five",
      "Character incident: Gwyn runs away in revival",
      "Narrative detail: Gwyn runs away in revival",
      "Correct answer: Her son Gwyn's",
      "Episode story: Gwyn runs away in revival",
      "Episode era: 1996 Episode Five",
      "Plot focus: Gwyn runs away in revival"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40093",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' 1996 revival, what does Mrs Hennessey consult in hopes of winning the lottery?",
    "answers": [
      "A fortune teller",
      "A computer prediction",
      "A newspaper horoscope",
      "God"
    ],
    "correctAnswer": "God",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1996 Episode Six",
      "Character incident: Mrs Hennessey seeks divine lottery numbers",
      "Narrative detail: Mrs Hennessey seeks divine lottery numbers",
      "Correct answer: God",
      "Episode story: Mrs Hennessey seeks divine lottery numbers",
      "Episode era: 1996 Episode Six",
      "Plot focus: Mrs Hennessey seeks divine lottery numbers"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40094",
    "category": "Television",
    "programme": "The Liver Birds",
    "question": "In The Liver Birds' final 1996 episode, why does Beryl threaten to move out of Sandra's home?",
    "answers": [
      "A furious argument about their mothers",
      "A dispute over Sandra's job",
      "An argument about Liverpool FC",
      "A row over household bills"
    ],
    "correctAnswer": "A furious argument about their mothers",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Liver Birds",
      "Programme: The Liver Birds",
      "BBC One",
      "1969-1996",
      "Episode: 1996 Episode Seven",
      "Character incident: Beryl Sandra argument about mothers",
      "Narrative detail: Beryl Sandra argument about mothers",
      "Correct answer: A furious argument about their mothers",
      "Episode story: Beryl Sandra argument about mothers",
      "Episode era: 1996 Episode Seven",
      "Plot focus: Beryl Sandra argument about mothers"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40095",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s A Picture of Innocence, what is unusual about the art class drawings of pupils in 5C?",
    "answers": [
      "They are all upside down",
      "They show the pupils naked",
      "They portray them as animals",
      "They are entirely blank"
    ],
    "correctAnswer": "They show the pupils naked",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1968 A Picture of Innocence",
      "Character incident: Art class drawings nude pupils",
      "Narrative detail: Art class drawings nude pupils",
      "Correct answer: They show the pupils naked",
      "Episode story: Art class drawings nude pupils",
      "Episode era: 1968 A Picture of Innocence",
      "Plot focus: Art class drawings nude pupils"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40096",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s Maureen Bullock Loves Sir, what starts rumours about Bernard Hedges?",
    "answers": [
      "He arrives at school in a sports car",
      "He is seen carrying her schoolbooks",
      "Maureen is seen leaving his flat",
      "He misses a staff meeting"
    ],
    "correctAnswer": "Maureen is seen leaving his flat",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1968 Maureen Bullock Loves Sir",
      "Character incident: Maureen seen exiting teacher flat",
      "Narrative detail: Maureen seen exiting teacher flat",
      "Correct answer: Maureen is seen leaving his flat",
      "Episode story: Maureen seen exiting teacher flat",
      "Episode era: 1968 Maureen Bullock Loves Sir",
      "Plot focus: Maureen seen exiting teacher flat"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40097",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s A Near Greek Tragedy, who temporarily takes charge of the Brown Cow pub?",
    "answers": [
      "Potter",
      "Mr Price",
      "Mr Cromwell",
      "Alf"
    ],
    "correctAnswer": "Alf",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1968 A Near Greek Tragedy",
      "Character incident: Alf takes over Brown Cow",
      "Narrative detail: Alf takes over Brown Cow",
      "Correct answer: Alf",
      "Episode story: Alf takes over Brown Cow",
      "Episode era: 1968 A Near Greek Tragedy",
      "Plot focus: Alf takes over Brown Cow"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40098",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s Barbarian Librarians, which room causes complaints after 5C are given its key?",
    "answers": [
      "The school library",
      "The art classroom",
      "The chemistry laboratory",
      "The sports hall"
    ],
    "correctAnswer": "The school library",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1968 Barbarian Librarians",
      "Character incident: Pupils given school library key",
      "Narrative detail: Pupils given school library key",
      "Correct answer: The school library",
      "Episode story: Pupils given school library key",
      "Episode era: 1968 Barbarian Librarians",
      "Plot focus: Pupils given school library key"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40099",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s Student Princess, whom does Bernard recognise as an old girlfriend?",
    "answers": [
      "The new school nurse",
      "A trainee teacher",
      "A visiting journalist",
      "A university examiner"
    ],
    "correctAnswer": "A trainee teacher",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1968 Student Princess",
      "Character incident: Bernard ex girlfriend trainee teacher",
      "Narrative detail: Bernard ex girlfriend trainee teacher",
      "Correct answer: A trainee teacher",
      "Episode story: Bernard ex girlfriend trainee teacher",
      "Episode era: 1968 Student Princess",
      "Plot focus: Bernard ex girlfriend trainee teacher"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40100",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s It's the Thought That Counts, who is due to return after recovering from an illness?",
    "answers": [
      "The headmaster",
      "The caretaker Potter",
      "5C's former teacher",
      "The school secretary"
    ],
    "correctAnswer": "5C's former teacher",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1968 Its The Thought That Counts",
      "Character incident: Former 5C teacher due back",
      "Narrative detail: Former 5C teacher due back",
      "Correct answer: 5C's former teacher",
      "Episode story: Former 5C teacher due back",
      "Episode era: 1968 Its The Thought That Counts",
      "Plot focus: Former 5C teacher due back"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40101",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s They're Off, which school subject do the pupils discover can make them money?",
    "answers": [
      "History",
      "Biology",
      "French",
      "Mathematics"
    ],
    "correctAnswer": "Mathematics",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1969 Theyre Off",
      "Character incident: 5C maths can be profitable",
      "Narrative detail: 5C maths can be profitable",
      "Correct answer: Mathematics",
      "Episode story: 5C maths can be profitable",
      "Episode era: 1969 Theyre Off",
      "Plot focus: 5C maths can be profitable"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40102",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s Common Law, who is attacked while walking across the common?",
    "answers": [
      "Sharon Eversleigh",
      "Maureen Bullock",
      "Penny Wheeler",
      "Doris Ewell"
    ],
    "correctAnswer": "Sharon Eversleigh",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1969 Common Law",
      "Character incident: Sharon attacked on common",
      "Narrative detail: Sharon attacked on common",
      "Correct answer: Sharon Eversleigh",
      "Episode story: Sharon attacked on common",
      "Episode era: 1969 Common Law",
      "Plot focus: Sharon attacked on common"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40103",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s Panalal Passes By, which school organisation is Bernard trying to interest parents in?",
    "answers": [
      "The school orchestra",
      "The PTA",
      "The football club",
      "The drama society"
    ],
    "correctAnswer": "The PTA",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1969 Panalal Passes By",
      "Character incident: Bernard struggling parents teachers association",
      "Narrative detail: Bernard struggling parents teachers association",
      "Correct answer: The PTA",
      "Episode story: Bernard struggling parents teachers association",
      "Episode era: 1969 Panalal Passes By",
      "Plot focus: Bernard struggling parents teachers association"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40104",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s Norman's Conquest, what small desert animal do pupils decide to adopt?",
    "answers": [
      "A meerkat",
      "A gerbil",
      "A jerboa",
      "A hamster"
    ],
    "correctAnswer": "A jerboa",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1969 Normans Conquest",
      "Character incident: Class adopts jerboa",
      "Narrative detail: Class adopts jerboa",
      "Correct answer: A jerboa",
      "Episode story: Class adopts jerboa",
      "Episode era: 1969 Normans Conquest",
      "Plot focus: Class adopts jerboa"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40105",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s The Decent Thing, whose mother does Bernard find he has spent the night with after a drunken evening?",
    "answers": [
      "Maureen Bullock's",
      "Eric Duffy's",
      "Frankie Abbott's",
      "Sharon Eversleigh's"
    ],
    "correctAnswer": "Sharon Eversleigh's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1969 The Decent Thing",
      "Character incident: Sharon mother unusual encounter",
      "Narrative detail: Sharon mother unusual encounter",
      "Correct answer: Sharon Eversleigh's",
      "Episode story: Sharon mother unusual encounter",
      "Episode era: 1969 The Decent Thing",
      "Plot focus: Sharon mother unusual encounter"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40106",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s The Generation Gap, where does Bernard arrange for pupils in 5C to volunteer?",
    "answers": [
      "An old people's home",
      "An animal shelter",
      "A hospital kitchen",
      "A museum"
    ],
    "correctAnswer": "An old people's home",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1969 The Generation Gap",
      "Character incident: Pupils visit old folks home",
      "Narrative detail: Pupils visit old folks home",
      "Correct answer: An old people's home",
      "Episode story: Pupils visit old folks home",
      "Episode era: 1969 The Generation Gap",
      "Plot focus: Pupils visit old folks home"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40107",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s Life Without Doris, to which country does Miss Ewell consider emigrating?",
    "answers": [
      "Canada",
      "Australia",
      "New Zealand",
      "South Africa"
    ],
    "correctAnswer": "Australia",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1969 Life Without Doris",
      "Character incident: Doris Ewell considers Australia move",
      "Narrative detail: Doris Ewell considers Australia move",
      "Correct answer: Australia",
      "Episode story: Doris Ewell considers Australia move",
      "Episode era: 1969 Life Without Doris",
      "Plot focus: Doris Ewell considers Australia move"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40108",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s Out of the Frying Pan, what prompts the pupils to complain to Bernard?",
    "answers": [
      "The exam timetable",
      "The heating system",
      "The school dinners",
      "Their school uniforms"
    ],
    "correctAnswer": "The school dinners",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1969 Out of the Frying Pan",
      "Character incident: Pupils complain about meals",
      "Narrative detail: Pupils complain about meals",
      "Correct answer: The school dinners",
      "Episode story: Pupils complain about meals",
      "Episode era: 1969 Out of the Frying Pan",
      "Plot focus: Pupils complain about meals"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40109",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s Mixed Doubles, whose identity does Frankie Abbott adopt while chatting up a girl?",
    "answers": [
      "Peter Craven's",
      "Bernard Hedges's",
      "Dennis Dunstable's",
      "Eric Duffy's"
    ],
    "correctAnswer": "Eric Duffy's",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1969 Mixed Doubles",
      "Character incident: Frankie impersonates Duffy",
      "Narrative detail: Frankie impersonates Duffy",
      "Correct answer: Eric Duffy's",
      "Episode story: Frankie impersonates Duffy",
      "Episode era: 1969 Mixed Doubles",
      "Plot focus: Frankie impersonates Duffy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40110",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s Dress Circle, who sends pupils home to change their clothes before a theatre trip?",
    "answers": [
      "Miss Ewell",
      "Mr Price",
      "Mr Cromwell",
      "Miss Wheeler"
    ],
    "correctAnswer": "Miss Ewell",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1969 Dress Circle",
      "Character incident: Doris sends children home for clothes",
      "Narrative detail: Doris sends children home for clothes",
      "Correct answer: Miss Ewell",
      "Episode story: Doris sends children home for clothes",
      "Episode era: 1969 Dress Circle",
      "Plot focus: Doris sends children home for clothes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40111",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s Viva La Revolution, what publication do the pupils decide to produce?",
    "answers": [
      "A school cookbook",
      "A revolutionary magazine",
      "A comic strip",
      "A sports annual"
    ],
    "correctAnswer": "A revolutionary magazine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1971 Viva La Revolution",
      "Character incident: Pupils make revolutionary magazine",
      "Narrative detail: Pupils make revolutionary magazine",
      "Correct answer: A revolutionary magazine",
      "Episode story: Pupils make revolutionary magazine",
      "Episode era: 1971 Viva La Revolution",
      "Plot focus: Pupils make revolutionary magazine"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40112",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s David and Goliath, which bullying member of staff is confronted by Mr Ffitchett-Brown?",
    "answers": [
      "Mr Price",
      "Mr Cromwell",
      "Mr Dix",
      "Mr Potter"
    ],
    "correctAnswer": "Mr Dix",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1971 David and Goliath",
      "Character incident: David challenges gym teacher Dix",
      "Narrative detail: David challenges gym teacher Dix",
      "Correct answer: Mr Dix",
      "Episode story: David challenges gym teacher Dix",
      "Episode era: 1971 David and Goliath",
      "Plot focus: David challenges gym teacher Dix"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40113",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s A.W.O.L., what problem does new teacher Mr Brown attempt to resolve?",
    "answers": [
      "A stolen school trophy",
      "An escaped class pet",
      "A missing school bus",
      "Two habitual truants"
    ],
    "correctAnswer": "Two habitual truants",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1971 AWOL",
      "Character incident: David searches for two truants",
      "Narrative detail: David searches for two truants",
      "Correct answer: Two habitual truants",
      "Episode story: David searches for two truants",
      "Episode era: 1971 AWOL",
      "Plot focus: David searches for two truants"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40114",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s What's a Class Between Friends?, where does Mr Brown lose his class during a trip?",
    "answers": [
      "The cinema",
      "The zoo",
      "The museum",
      "The swimming pool"
    ],
    "correctAnswer": "The cinema",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1971 Whats A Class Between Friends",
      "Character incident: David loses 4C during cinema outing",
      "Narrative detail: David loses 4C during cinema outing",
      "Correct answer: The cinema",
      "Episode story: David loses 4C during cinema outing",
      "Episode era: 1971 Whats A Class Between Friends",
      "Plot focus: David loses 4C during cinema outing"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40115",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s Black Power, whose prejudices are confronted by a new black assistant?",
    "answers": [
      "Headmaster Cromwell's",
      "Caretaker Norman Potter's",
      "Mr Price's",
      "Bernard Hedges's"
    ],
    "correctAnswer": "Caretaker Norman Potter's",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1971 Black Power",
      "Character incident: Potter new black assistant challenges prejudice",
      "Narrative detail: Potter new black assistant challenges prejudice",
      "Correct answer: Caretaker Norman Potter's",
      "Episode story: Potter new black assistant challenges prejudice",
      "Episode era: 1971 Black Power",
      "Plot focus: Potter new black assistant challenges prejudice"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40116",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s United We Sit, which two pupil fashion trends does Mr Cromwell try to ban?",
    "answers": [
      "Short hair and wide trousers",
      "Leather jackets and trainers",
      "Long hair and short skirts",
      "Bright shoes and hats"
    ],
    "correctAnswer": "Long hair and short skirts",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1971 United We Sit",
      "Character incident: Headmaster bans hair and short skirts",
      "Narrative detail: Headmaster bans hair and short skirts",
      "Correct answer: Long hair and short skirts",
      "Episode story: Headmaster bans hair and short skirts",
      "Episode era: 1971 United We Sit",
      "Plot focus: Headmaster bans hair and short skirts"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40117",
    "category": "Television",
    "programme": "Please Sir!",
    "question": "In Please Sir!'s Old Fennians Day, what does Mr Cromwell invite pupils to compose for a prize?",
    "answers": [
      "A school play",
      "A school newspaper",
      "A football chant",
      "A school song"
    ],
    "correctAnswer": "A school song",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Please Sir!",
      "Programme: Please Sir!",
      "ITV",
      "1968-1972",
      "Episode: 1971 Old Fennians Day",
      "Character incident: Cromwell school anthem contest",
      "Narrative detail: Cromwell school anthem contest",
      "Correct answer: A school song",
      "Episode story: Cromwell school anthem contest",
      "Episode era: 1971 Old Fennians Day",
      "Plot focus: Cromwell school anthem contest"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40118",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's Horses for Courses, who takes Dennis Dunstable to a party that ends badly?",
    "answers": [
      "Maureen Bullock",
      "Sharon Eversleigh",
      "Penny Wheeler",
      "Mrs Dunstable"
    ],
    "correctAnswer": "Maureen Bullock",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1971 Horses for Courses",
      "Character incident: Maureen brings Dennis to party",
      "Narrative detail: Maureen brings Dennis to party",
      "Correct answer: Maureen Bullock",
      "Episode story: Maureen brings Dennis to party",
      "Episode era: 1971 Horses for Courses",
      "Plot focus: Maureen brings Dennis to party"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40119",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's Meet the Wizard, what does Penny Hedges conceal from Bernard?",
    "answers": [
      "She has inherited a house",
      "She has taken a job",
      "She is expecting a baby",
      "She has applied for divorce"
    ],
    "correctAnswer": "She has taken a job",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1971 Meet the Wizard",
      "Character incident: Penny secretly works",
      "Narrative detail: Penny secretly works",
      "Correct answer: She has taken a job",
      "Episode story: Penny secretly works",
      "Episode era: 1971 Meet the Wizard",
      "Plot focus: Penny secretly works"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40120",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's Distant Horizons, who attracts Sharon's interest and makes Eric jealous?",
    "answers": [
      "A visiting actor",
      "A local policeman",
      "A sensitive student",
      "A professional footballer"
    ],
    "correctAnswer": "A sensitive student",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1971 Distant Horizons",
      "Character incident: Sharon meets sensitive student",
      "Narrative detail: Sharon meets sensitive student",
      "Correct answer: A sensitive student",
      "Episode story: Sharon meets sensitive student",
      "Episode era: 1971 Distant Horizons",
      "Plot focus: Sharon meets sensitive student"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40121",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's Change Partners, what is Bernard Hedges waiting to begin?",
    "answers": [
      "A teaching post in Scotland",
      "A career in broadcasting",
      "A job as headmaster",
      "A job at London University"
    ],
    "correctAnswer": "A job at London University",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1971 Change Partners",
      "Character incident: Bernard waits for university job",
      "Narrative detail: Bernard waits for university job",
      "Correct answer: A job at London University",
      "Episode story: Bernard waits for university job",
      "Episode era: 1971 Change Partners",
      "Plot focus: Bernard waits for university job"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40122",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's The Thin Yellow Line, which organisation recruits Frankie Abbott after his detective career fails?",
    "answers": [
      "The British Army",
      "The police service",
      "A private security company",
      "The fire brigade"
    ],
    "correctAnswer": "The British Army",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1971 Thin Yellow Line",
      "Character incident: Frankie Abbott Army recruit",
      "Narrative detail: Frankie Abbott Army recruit",
      "Correct answer: The British Army",
      "Episode story: Frankie Abbott Army recruit",
      "Episode era: 1971 Thin Yellow Line",
      "Plot focus: Frankie Abbott Army recruit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40123",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's All Mod Cons, what job does Eric Duffy attempt with Peter Craven?",
    "answers": [
      "Car repairing",
      "Decorating",
      "Window cleaning",
      "Plumbing"
    ],
    "correctAnswer": "Decorating",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1971 All Mod Cons",
      "Character incident: Eric tries decorating with Craven",
      "Narrative detail: Eric tries decorating with Craven",
      "Correct answer: Decorating",
      "Episode story: Eric tries decorating with Craven",
      "Episode era: 1971 All Mod Cons",
      "Plot focus: Eric tries decorating with Craven"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40124",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's The Clean Weekend, where does a day out turn into an overnight stay for Eric and Sharon?",
    "answers": [
      "The countryside",
      "London Zoo",
      "The seaside",
      "A country fair"
    ],
    "correctAnswer": "The seaside",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1971 The Clean Weekend",
      "Character incident: Eric Sharon overnight seaside hotel",
      "Narrative detail: Eric Sharon overnight seaside hotel",
      "Correct answer: The seaside",
      "Episode story: Eric Sharon overnight seaside hotel",
      "Episode era: 1971 The Clean Weekend",
      "Plot focus: Eric Sharon overnight seaside hotel"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40125",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's Tally Ho, which relative's drinking does Dennis Dunstable try to address?",
    "answers": [
      "His brother's",
      "His uncle's",
      "His mother's",
      "His father's"
    ],
    "correctAnswer": "His father's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1972 Tally Ho",
      "Character incident: Dennis tries to reform alcoholic father",
      "Narrative detail: Dennis tries to reform alcoholic father",
      "Correct answer: His father's",
      "Episode story: Dennis tries to reform alcoholic father",
      "Episode era: 1972 Tally Ho",
      "Plot focus: Dennis tries to reform alcoholic father"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40126",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's Horse of the Year, what does Dennis buy with birthday money at an auction?",
    "answers": [
      "A horse",
      "A car",
      "A motorcycle",
      "A rowing boat"
    ],
    "correctAnswer": "A horse",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1972 Horse of the Year",
      "Character incident: Dennis birthday buys horse",
      "Narrative detail: Dennis birthday buys horse",
      "Correct answer: A horse",
      "Episode story: Dennis birthday buys horse",
      "Episode era: 1972 Horse of the Year",
      "Plot focus: Dennis birthday buys horse"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40127",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's Who's Minding the Shop?, what accident forces the former pupils to become shopkeepers?",
    "answers": [
      "A flood",
      "A road accident",
      "A factory fire",
      "A gas leak"
    ],
    "correctAnswer": "A road accident",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1972 Whos Minding Shop",
      "Character incident: Road accident creates shopkeepers",
      "Narrative detail: Road accident creates shopkeepers",
      "Correct answer: A road accident",
      "Episode story: Road accident creates shopkeepers",
      "Episode era: 1972 Whos Minding Shop",
      "Plot focus: Road accident creates shopkeepers"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40128",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's The Great Frock Robbers, which business blames Sharon for not spotting shoplifters?",
    "answers": [
      "A supermarket",
      "A bookshop",
      "A boutique",
      "A shoe shop"
    ],
    "correctAnswer": "A boutique",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1972 Great Frock Robbers",
      "Character incident: Sharon boutique shoplifting blame",
      "Narrative detail: Sharon boutique shoplifting blame",
      "Correct answer: A boutique",
      "Episode story: Sharon boutique shoplifting blame",
      "Episode era: 1972 Great Frock Robbers",
      "Plot focus: Sharon boutique shoplifting blame"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40129",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's The Crunch, which work problem troubles Eric Duffy?",
    "answers": [
      "Finding an acting agent",
      "Passing an exam for the police",
      "Working as a hospital porter",
      "Running a small family business"
    ],
    "correctAnswer": "Running a small family business",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1972 The Crunch",
      "Character incident: Duffy small business difficulties",
      "Narrative detail: Duffy small business difficulties",
      "Correct answer: Running a small family business",
      "Episode story: Duffy small business difficulties",
      "Episode era: 1972 The Crunch",
      "Plot focus: Duffy small business difficulties"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40130",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's The Woman for Dennis, why are Dennis's friends surprised by his new girlfriend?",
    "answers": [
      "She is considerably older than him",
      "She is already married to Hedges",
      "She is the school's headmistress",
      "She has moved to Australia"
    ],
    "correctAnswer": "She is considerably older than him",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1972 Woman for Dennis",
      "Character incident: Dennis girlfriend in her forties",
      "Narrative detail: Dennis girlfriend in her forties",
      "Correct answer: She is considerably older than him",
      "Episode story: Dennis girlfriend in her forties",
      "Episode era: 1972 Woman for Dennis",
      "Plot focus: Dennis girlfriend in her forties"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40131",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's Menagerie a Trois, whose mother finds romance and stops behaving like an invalid?",
    "answers": [
      "Eric Duffy's",
      "Frankie Abbott's",
      "Peter Craven's",
      "Dennis Dunstable's"
    ],
    "correctAnswer": "Frankie Abbott's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1972 Menagerie a Trois",
      "Character incident: Frankie mother newfound romance",
      "Narrative detail: Frankie mother newfound romance",
      "Correct answer: Frankie Abbott's",
      "Episode story: Frankie mother newfound romance",
      "Episode era: 1972 Menagerie a Trois",
      "Plot focus: Frankie mother newfound romance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40132",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's That Sort of Girl, what contest does Sharon enter to earn money for Eric's work equipment?",
    "answers": [
      "A singing competition",
      "A pub quiz",
      "A beauty contest",
      "A darts tournament"
    ],
    "correctAnswer": "A beauty contest",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1972 That Sort of Girl",
      "Character incident: Sharon beauty contest funds ladders",
      "Narrative detail: Sharon beauty contest funds ladders",
      "Correct answer: A beauty contest",
      "Episode story: Sharon beauty contest funds ladders",
      "Episode era: 1972 That Sort of Girl",
      "Plot focus: Sharon beauty contest funds ladders"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40133",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's The Lady with the Lamp, which career does Maureen start after passing her O-levels?",
    "answers": [
      "Teaching",
      "Dentistry",
      "Police work",
      "Nursing"
    ],
    "correctAnswer": "Nursing",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1972 Lady with Lamp",
      "Character incident: Maureen becomes nurse",
      "Narrative detail: Maureen becomes nurse",
      "Correct answer: Nursing",
      "Episode story: Maureen becomes nurse",
      "Episode era: 1972 Lady with Lamp",
      "Plot focus: Maureen becomes nurse"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40134",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's The Loneliest Night of the Week, which lessons does Dennis take to meet women?",
    "answers": [
      "Dancing",
      "Driving",
      "Swimming",
      "Singing"
    ],
    "correctAnswer": "Dancing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1972 Loneliest Night",
      "Character incident: Dennis tries dancing lessons",
      "Narrative detail: Dennis tries dancing lessons",
      "Correct answer: Dancing",
      "Episode story: Dennis tries dancing lessons",
      "Episode era: 1972 Loneliest Night",
      "Plot focus: Dennis tries dancing lessons"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40135",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's Father's Day, who moves in with Dennis following a marital argument?",
    "answers": [
      "His uncle",
      "His father",
      "His brother",
      "His former teacher"
    ],
    "correctAnswer": "His father",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1972 Fathers Day",
      "Character incident: Dennis father moves in",
      "Narrative detail: Dennis father moves in",
      "Correct answer: His father",
      "Episode story: Dennis father moves in",
      "Episode era: 1972 Fathers Day",
      "Plot focus: Dennis father moves in"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40136",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's Is Anybody There?, what unusual subject does Maureen interest the group in?",
    "answers": [
      "Astrology",
      "Ufology",
      "Spiritualism",
      "Hypnosis"
    ],
    "correctAnswer": "Spiritualism",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1973 Is Anybody There",
      "Character incident: Maureen spiritualism group",
      "Narrative detail: Maureen spiritualism group",
      "Correct answer: Spiritualism",
      "Episode story: Maureen spiritualism group",
      "Episode era: 1973 Is Anybody There",
      "Plot focus: Maureen spiritualism group"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40137",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's How to Handle a Woman, which relative does Peter Craven encourage to rebel against his wife?",
    "answers": [
      "His uncle",
      "His cousin",
      "His brother",
      "His father"
    ],
    "correctAnswer": "His father",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1973 How To Handle Woman",
      "Character incident: Peter convinces father to rebel",
      "Narrative detail: Peter convinces father to rebel",
      "Correct answer: His father",
      "Episode story: Peter convinces father to rebel",
      "Episode era: 1973 How To Handle Woman",
      "Plot focus: Peter convinces father to rebel"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40138",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's Absent Friends, which couple celebrate making their engagement official?",
    "answers": [
      "Eric Duffy and Sharon Eversleigh",
      "Frankie Abbott and Maureen Bullock",
      "Dennis Dunstable and Penny Wheeler",
      "Peter Craven and Mrs Abbott"
    ],
    "correctAnswer": "Eric Duffy and Sharon Eversleigh",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1973 Absent Friends",
      "Character incident: Duffy Sharon engagement party",
      "Narrative detail: Duffy Sharon engagement party",
      "Correct answer: Eric Duffy and Sharon Eversleigh",
      "Episode story: Duffy Sharon engagement party",
      "Episode era: 1973 Absent Friends",
      "Plot focus: Duffy Sharon engagement party"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40139",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's An Englishman's Home, who jeopardises Eric and Sharon's chance to buy a house?",
    "answers": [
      "Dennis Dunstable",
      "Frankie Abbott",
      "Peter Craven",
      "Bernard Hedges"
    ],
    "correctAnswer": "Frankie Abbott",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1973 Englishmans Home",
      "Character incident: Frankie spoils house purchase",
      "Narrative detail: Frankie spoils house purchase",
      "Correct answer: Frankie Abbott",
      "Episode story: Frankie spoils house purchase",
      "Episode era: 1973 Englishmans Home",
      "Plot focus: Frankie spoils house purchase"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40140",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's Alone at Last, which couple finally marry?",
    "answers": [
      "Dennis Dunstable and Maureen Bullock",
      "Bernard Hedges and Doris Ewell",
      "Eric Duffy and Sharon Eversleigh",
      "Frankie Abbott and Sharon Eversleigh"
    ],
    "correctAnswer": "Eric Duffy and Sharon Eversleigh",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1973 Alone At Last",
      "Character incident: Eric Sharon finally wed",
      "Narrative detail: Eric Sharon finally wed",
      "Correct answer: Eric Duffy and Sharon Eversleigh",
      "Episode story: Eric Sharon finally wed",
      "Episode era: 1973 Alone At Last",
      "Plot focus: Eric Sharon finally wed"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40141",
    "category": "Television",
    "programme": "The Fenn Street Gang",
    "question": "In The Fenn Street Gang's Making Whoopee, on which Spanish island do Eric and Sharon have their honeymoon?",
    "answers": [
      "Tenerife",
      "Ibiza",
      "Menorca",
      "Majorca"
    ],
    "correctAnswer": "Majorca",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Fenn Street Gang",
      "Programme: The Fenn Street Gang",
      "ITV",
      "1971-1973",
      "Episode: 1973 Making Whoopee",
      "Character incident: Duffy Sharon Majorca honeymoon",
      "Narrative detail: Duffy Sharon Majorca honeymoon",
      "Correct answer: Majorca",
      "Episode story: Duffy Sharon Majorca honeymoon",
      "Episode era: 1973 Making Whoopee",
      "Plot focus: Duffy Sharon Majorca honeymoon"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40142",
    "category": "Television",
    "programme": "Bowler",
    "question": "In Bowler's Members Only, what business does Stanley plan to open after an exclusive club rejects him?",
    "answers": [
      "His own gentlemen's club",
      "A betting shop",
      "A violin academy",
      "A casino"
    ],
    "correctAnswer": "His own gentlemen's club",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bowler",
      "Programme: Bowler",
      "ITV",
      "1973",
      "Episode: 1973 Members Only",
      "Character incident: Stanley forms own gentlemen club",
      "Narrative detail: Stanley forms own gentlemen club",
      "Correct answer: His own gentlemen's club",
      "Episode story: Stanley forms own gentlemen club",
      "Episode era: 1973 Members Only",
      "Plot focus: Stanley forms own gentlemen club"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40143",
    "category": "Television",
    "programme": "Bowler",
    "question": "In Bowler's Come Round Any Old Time, what does Stanley expect after doing someone a favour?",
    "answers": [
      "An honorary doctorate",
      "An enduring friendship",
      "A free holiday",
      "A job offer"
    ],
    "correctAnswer": "An enduring friendship",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bowler",
      "Programme: Bowler",
      "ITV",
      "1973",
      "Episode: 1973 Come Round Any Old Time",
      "Character incident: Stanley expects a grateful friend",
      "Narrative detail: Stanley expects a grateful friend",
      "Correct answer: An enduring friendship",
      "Episode story: Stanley expects a grateful friend",
      "Episode era: 1973 Come Round Any Old Time",
      "Plot focus: Stanley expects a grateful friend"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40144",
    "category": "Television",
    "programme": "Bowler",
    "question": "In Bowler's They Never Comeback, what gives Stanley an unfair advantage when backing a boxer?",
    "answers": [
      "Owning the venue",
      "Coaching both fighters",
      "Knowing the winner in advance",
      "Secretly managing the referee"
    ],
    "correctAnswer": "Knowing the winner in advance",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bowler",
      "Programme: Bowler",
      "ITV",
      "1973",
      "Episode: 1973 They Never Comeback",
      "Character incident: Stanley knows boxing winner",
      "Narrative detail: Stanley knows boxing winner",
      "Correct answer: Knowing the winner in advance",
      "Episode story: Stanley knows boxing winner",
      "Episode era: 1973 They Never Comeback",
      "Plot focus: Stanley knows boxing winner"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40145",
    "category": "Television",
    "programme": "Bowler",
    "question": "In Bowler's On the Fiddle, whose son is the promising violinist Stanley sponsors?",
    "answers": [
      "His chauffeur's",
      "A local policeman's",
      "His bookmaker's",
      "His piano tuner's"
    ],
    "correctAnswer": "His piano tuner's",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bowler",
      "Programme: Bowler",
      "ITV",
      "1973",
      "Episode: 1973 On the Fiddle",
      "Character incident: Stanley sponsors piano tuners son",
      "Narrative detail: Stanley sponsors piano tuners son",
      "Correct answer: His piano tuner's",
      "Episode story: Stanley sponsors piano tuners son",
      "Episode era: 1973 On the Fiddle",
      "Plot focus: Stanley sponsors piano tuners son"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40146",
    "category": "Television",
    "programme": "Bowler",
    "question": "In Bowler's The Monarch of the Glen, what Scottish aristocratic position does Stanley hope to claim by buying a house?",
    "answers": [
      "Laird",
      "Baron",
      "Earl",
      "Sheriff"
    ],
    "correctAnswer": "Laird",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bowler",
      "Programme: Bowler",
      "ITV",
      "1973",
      "Episode: 1973 Monarch of the Glen",
      "Character incident: Stanley wants to be laird",
      "Narrative detail: Stanley wants to be laird",
      "Correct answer: Laird",
      "Episode story: Stanley wants to be laird",
      "Episode era: 1973 Monarch of the Glen",
      "Plot focus: Stanley wants to be laird"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40147",
    "category": "Television",
    "programme": "Bowler",
    "question": "In Bowler's Sweet and Sour Charity, what event first sparks Stanley's interest in supporting a children's home?",
    "answers": [
      "Being asked to fund a new school",
      "Returning a young boy there",
      "Winning a charity raffle",
      "Meeting its manager at the golf club"
    ],
    "correctAnswer": "Returning a young boy there",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bowler",
      "Programme: Bowler",
      "ITV",
      "1973",
      "Episode: 1973 Sweet and Sour Charity",
      "Character incident: Stanley takes boy back to home",
      "Narrative detail: Stanley takes boy back to home",
      "Correct answer: Returning a young boy there",
      "Episode story: Stanley takes boy back to home",
      "Episode era: 1973 Sweet and Sour Charity",
      "Plot focus: Stanley takes boy back to home"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40148",
    "category": "Television",
    "programme": "Bowler",
    "question": "In Bowler's Family Tree, what is the name of the supposed ancestral duke Stanley discovers?",
    "answers": [
      "Duke of Westminster",
      "Duke de Brissac",
      "Duke de Bouleur",
      "Duke of Marlborough"
    ],
    "correctAnswer": "Duke de Bouleur",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bowler",
      "Programme: Bowler",
      "ITV",
      "1973",
      "Episode: 1973 Family Tree",
      "Character incident: Stanley discovers Duke de Bouleur",
      "Narrative detail: Stanley discovers Duke de Bouleur",
      "Correct answer: Duke de Bouleur",
      "Episode story: Stanley discovers Duke de Bouleur",
      "Episode era: 1973 Family Tree",
      "Plot focus: Stanley discovers Duke de Bouleur"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40149",
    "category": "Television",
    "programme": "Bowler",
    "question": "In Bowler's Bowler's Analysis, what change does the psychiatrist advise Stanley to make?",
    "answers": [
      "Return to prison voluntarily",
      "Sell all his possessions",
      "Start a music career",
      "Give up his social pretensions"
    ],
    "correctAnswer": "Give up his social pretensions",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bowler",
      "Programme: Bowler",
      "ITV",
      "1973",
      "Episode: 1973 Bowlers Analysis",
      "Character incident: Psychiatrist advises humility",
      "Narrative detail: Psychiatrist advises humility",
      "Correct answer: Give up his social pretensions",
      "Episode story: Psychiatrist advises humility",
      "Episode era: 1973 Bowlers Analysis",
      "Plot focus: Psychiatrist advises humility"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_40150",
    "category": "Television",
    "programme": "Bowler",
    "question": "In Bowler's final episode, which family member also favours the Costa Brava over Stanley's Peruvian trip?",
    "answers": [
      "His mother",
      "His father",
      "His grandson",
      "His brother"
    ],
    "correctAnswer": "His mother",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bowler",
      "Programme: Bowler",
      "ITV",
      "1973",
      "Episode: 1973 Without Let or Hindrance",
      "Character incident: Mother supports Spain travel",
      "Narrative detail: Mother supports Spain travel",
      "Correct answer: His mother",
      "Episode story: Mother supports Spain travel",
      "Episode era: 1973 Without Let or Hindrance",
      "Plot focus: Mother supports Spain travel"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
const strictKey = v => String(v).normalize('NFKC').toLocaleLowerCase('en-GB').replace(/[^\p{L}\p{N}]/gu, '');
const idAudit = new Set();const questionAudit = new Set();
for(const q of questions){
 if(q.category!=='Television'||!q.programme||!q.tags.includes('Programme: '+q.programme)||
   q.answers.length!==4||new Set(q.answers.map(strictKey)).size!==4||
   q.answers.filter(a=>a===q.correctAnswer).length!==1||q.tags.length<14||
   new Set(q.tags.map(strictKey)).size!==q.tags.length||q.dailyEligible!==true||
   idAudit.has(q.id)||questionAudit.has(strictKey(q.question)))throw Error('Pack 375 validation failed at '+q.id);
 idAudit.add(q.id);questionAudit.add(strictKey(q.question));
}
module.exports = questions;
