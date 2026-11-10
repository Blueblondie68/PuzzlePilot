
  // quiz_pack365.js
  // PuzzlePilot — The Bigggggg Quiz
  // Television: The New Statesman (1987–1994) / The Fall and Rise of Reginald Perrin (1976–1979),
  // plus the 1996 Legacy sequel and the 2009–2010 Reggie Perrin revival.
  // Two outstanding master-list titles, plus coverage of the separate revival.
  // Sources: British Comedy Guide cast and episode guides, BBC programme history,
  // and cross-checked television episode listings.
  // Seven bespoke, question-specific tags per question, plus programme metadata.
  // Complete WordPad-ready CommonJS module. No external dependencies.

  const FIRST_ID = 18208;

  // question | correct answer | three wrong answers | difficulty | seven specific tags
  const statesmanFacts = `Who played the MP Alan B'Stard in The New Statesman?|Rik Mayall|Michael Troughton|John Nettleton|Terence Alexander|Easy|Rik Mayall|Alan BStard|Lead Actor|Conservative MP|Character Casting|Parliamentary Satire|Main Character
  Which political party does Alan B'Stard represent at the start of The New Statesman?|The Conservative Party|The Labour Party|The Liberal Democrats|The Green Party|Easy|Alan BStard|Conservative MP|Tory Politics|Westminster Setting|1987 Series|Fictional Politician|Political Affiliation
  What is the name of Alan B'Stard's fictional parliamentary constituency?|Haltemprice|Tooting|Weatherfield|Royston Vasey|Medium|Haltemprice|Fictional Constituency|Alan BStard|Parliamentary Seat|Electoral Politics|Local Voters|Series Setting
  Who played the MP Piers Fletcher-Dervish?|Michael Troughton|Rik Mayall|Berwick Kaler|Victor Lucas|Easy|Michael Troughton|Piers Fletcher Dervish|Parliamentary Colleague|Supporting Lead|Actor Casting|Political Sidekick|House Of Commons
  What is the surname of Alan's fellow MP Piers in The New Statesman?|Fletcher-Dervish|Gidleigh-Park|Bormann|McDonald|Medium|Piers Fletcher Dervish|Character Surname|Alan Colleague|Aristocratic MP|Westminster|Michael Troughton|Character Identity
  Who played Alan B'Stard's wife Sarah?|Marsha Fitzalan|Rowena Cooper|Celia Imrie|Janine Duvitski|Medium|Marsha Fitzalan|Sarah BStard|Alan Wife|Main Actress|Marriage Conflict|Actor Casting|Regular Cast
  Which two writers created The New Statesman?|Laurence Marks and Maurice Gran|John Sullivan and David Nobbs|Richard Curtis and Ben Elton|Johnnie Mortimer and Brian Cooke|Medium|Laurence Marks|Maurice Gran|Writing Partnership|Series Creators|Political Comedy|Screenplay Credits|Original Writers
  Which broadcaster originally showed the regular series of The New Statesman?|ITV|BBC One|Channel 4|BBC Two|Easy|ITV Broadcast|Yorkshire Television|Original Network|1987 Premiere|British Comedy|Television Channel|Programme History
  In which year did The New Statesman first air?|1987|1982|1991|1995|Easy|1987 Debut|September Premiere|First Series|ITV Schedule|Rik Mayall|Programme Timeline|Original Run
  How many regular series of The New Statesman were made?|Four|Two|Three|Five|Medium|Four Series|1987 To 1992|Regular Runs|Series Count|British Sitcom|Production History|Television Catalogue
  In which year was the final television special A. B'Stard Exposed broadcast?|1994|1988|1990|1998|Medium|1994 Special|A BStard Exposed|Final Television Programme|December Broadcast|BBC One|Alan BStard|Later Episode
  Which production company was the original ITV regional producer of The New Statesman?|Yorkshire Television|Thames Television|Granada Television|Central Television|Medium|Yorkshire Television|ITV Regional Company|Programme Production|Political Sitcom|1987 Series|Behind The Scenes|Broadcaster Credits
  Which performer played Norman Bormann in series one?|Rowena Cooper|Marsha Fitzalan|Celia Imrie|Michelle Gomez|Hard|Rowena Cooper|Norman Bormann|Series One Character|Actor Casting|Alan Associate|Recurring Cast|1987 Episodes
  Who played Sir Stephen Baxter in the early series?|John Nettleton|Terence Alexander|Tony Britton|Geoffrey Palmer|Medium|John Nettleton|Sir Stephen Baxter|Series One And Two|Supporting Actor|Political Figure|Character Casting|ITV Cast
  Who played Sir Greville McDonald in the later series?|Terence Alexander|John Nettleton|Charles Gray|Michael Troughton|Medium|Terence Alexander|Sir Greville McDonald|Series Two To Four|Actor Casting|Political Establishment|Recurring Role|Parliamentary Comedy
  Which actor played Geoff Dicquead in the second series?|Berwick Kaler|Victor Lucas|John Nettleton|Rik Mayall|Hard|Berwick Kaler|Geoff Dicquead|Series Two|Supporting Actor|Character Casting|1989 Episodes|Political Sitcom
  Who directed the first two series of The New Statesman?|Geoffrey Sax|Graeme Harper|Ray Butt|Gareth Gwenlan|Hard|Geoffrey Sax|Series One Director|Series Two Director|1987 And 1989|Production Credits|ITV Direction|Comedy Crew
  Who directed the third and fourth series of The New Statesman?|Graeme Harper|Geoffrey Sax|Bob Spiers|John Howard Davies|Hard|Graeme Harper|Series Three Director|Series Four Director|1991 And 1992|Production Team|Director Change|Programme Credits
  Which composer is credited for music on The New Statesman?|Alan Hawkshaw|Ronnie Hazlehurst|Anne Dudley|Howard Goodall|Hard|Alan Hawkshaw|Programme Composer|Theme Music|Production Credits|Musical Score|Political Comedy|Television Soundtrack
  Which television award did The New Statesman win in 1991?|BAFTA Best Comedy Series|Emmy Outstanding Drama|National Television Award Best Soap|Royal Television Society Best Documentary|Hard|1991 BAFTA|Best Comedy Series|Programme Award|British Academy|Television Comedy|Critical Recognition|Award History
  What institution is the main political workplace in The New Statesman?|The House of Commons|The House of Lords only|The European Court of Justice|The London Assembly|Easy|House Of Commons|Westminster|Alan BStard|Member Of Parliament|British Legislature|Political Workplace|Sitcom Setting
  What policy does Alan exploit for a gun-dealing profit in Happiness Is A Warm Gun?|Arming the police|Banning private cars|Compulsory recycling|Closing public libraries|Medium|Happiness Is A Warm Gun|Arming Police|Gun Sales|Series One Premiere|Alan BStard|Profit Scheme|1987 Episode
  What newly inherited asset threatens Alan's control over Sarah in Passport To Freedom?|A large sum of money|A seaside hotel|A newspaper company|A racehorse stable|Medium|Passport To Freedom|Sarah Inheritance|Divorce Threat|Financial Independence|Alan BStard|Series One|1987 Plot
  What kind of campaign does Alan join for financial advantage in Sex Is Wrong?|A moral crusade|A railway preservation campaign|An animal rescue appeal|A road safety campaign|Medium|Sex Is Wrong|Moral Campaign|Public Virtue|Alan Hypocrisy|Series One|1987 Episode|Political Fundraising
  What hazardous material causes trouble for Alan in Waste Not Want Not?|Nuclear waste|Asbestos roofing|Chemical fertiliser|Radioactive medical equipment|Medium|Waste Not Want Not|Nuclear Waste|Illegal Dumping|Argentinian Payment|Series One|Environmental Scandal|Alan BStard
  What sort of territory supplies Alan with a business opportunity in Friends Of St. James?|A small Caribbean island|A Pacific research station|An Alpine ski resort|A Scottish island|Medium|Friends Of St James|Caribbean Island|Island President|School Acquaintance|Series One|Foreign Venture|Money Making
  Which television format exposes Alan's ignorance of a by-election result in Three Line Whipping?|Breakfast television|A late-night chat show|A televised courtroom trial|A children's news programme|Medium|Three Line Whipping|Breakfast TV|By Election Result|Parliamentary Whip|Alan BStard|Series One|Public Embarrassment
  What kind of fast-food business does Alan hope to attract in Baa Baa Black Sheep?|A lamb-burger chain|A pizza franchise|A fried-chicken chain|A doughnut shop|Medium|Baa Baa Black Sheep|Lamb Burger Factory|American Franchise|Constituency Jobs|Series One Finale|Alan BStard|1987 Plot
  Which broadcaster does Alan propose to close in a 1988 Comic Relief special?|The BBC|ITV|Channel 4|Sky Television|Medium|1988 Comic Relief|Alan BStard Closes Down The BBC|BBC Closure Plan|Charity Special|Margaret Thatcher|Television Satire|Special Episode
  What is the title of the 1990 special built around an attack on Alan?|Who Shot Alan B'Stard?|The Haltemprice Bunker|Back From The Mort|Keeping Mum|Medium|1990 Special|Gunshot Mystery|Assassination Mystery|Programme Special|Alan BStard|Broadcast Timeline|Political Comedy
  Where does Alan discover valuable oil in Fatal Extraction?|Under Hackney Marshes|Beneath Buckingham Palace|Under Hyde Park|Off the Isle of Wight|Medium|Fatal Extraction|Hackney Marshes|Oil Discovery|Series Two Premiere|1989 Episode|Constitutional Scheme|Alan BStard
  Who decides Alan has become too prominent in Live From Westminster?|Margaret Thatcher|Sarah B'Stard|The Speaker|Piers Fletcher-Dervish|Medium|Live From Westminster|Margaret Thatcher|Party Leadership|Alan Fame|Series Two|Prime Minister|Political Rivalry
  What threatens Alan's romantic schemes in A Wapping Conspiracy?|A newspaper scandal|A failed driving test|A stolen engagement ring|A lost passport|Medium|A Wapping Conspiracy|Press Scandal|Alan BStard|Media Trouble|Series Two|1989 Episode|Personal Reputation
  What kind of fugitive does Alan seek to expose in The Haltemprice Bunker?|A hidden Nazi|A bank robber|A runaway spy from France|A fugitive art thief|Medium|Haltemprice Bunker|Nazi Fugitive|Alan Investigation|Series Two|1989 Story|Publicity Scheme|Wartime Secrets
  In which American state does Alan try to sell a Westminster television series?|California|Texas|Florida|Nevada|Easy|California Here I Come|US Trip|Television Pitch|American Producer|Alan And Piers|Series Two|Hollywood Venture
  What is unusual about the aristocrat to whom Piers becomes engaged in May The Best Man Win?|She rides a motorcycle|She is a professional boxer|She owns a football club|She is a famous chef|Medium|May The Best Man Win|Piers Engagement|Motorcycling Aristocrat|Alan Jealousy|Series Two|Marriage Plans|1989 Episode
  To which ministerial post is Piers promoted while Alan is away?|Junior Housing Minister|Foreign Secretary|Health Secretary|Chancellor of the Exchequer|Medium|Piers Of The Realm|Junior Housing Minister|Piers Promotion|Alan Absence|Series Two Finale|Political Career|1989 Episode
  In Labour Of Love, which party does Alan secretly help to undermine a Conservative rival?|Labour|The Liberal Democrats|The Green Party|The Scottish National Party|Medium|Labour Of Love|Conservative Rival|Labour Assistance|Alan BStard|Series Three Premiere|1991 Episode|Political Sabotage
  What natural resource is predicted to run out in The Party's Over?|North Sea oil|North Sea gas only|Welsh coal|Cornish tin|Medium|The Partys Over|North Sea Oil|Economic Threat|Series Three|General Election|Alan Scheme|1991 Episode
  What sort of activists target Alan after a television interview in Let Them Sniff Cake?|Animal rights campaigners|Anti-motorway campaigners|Public transport campaigners|Pensioners' groups|Medium|Let Them Sniff Cake|Animal Rights|Television Interview|Militant Campaigners|Series Three|Alan BStard|1991 Story
  Which family member comes to confront Alan after new residential-care legislation in Keeping Mum?|His biological mother|His estranged brother|His grandfather|His teenage daughter|Medium|Keeping Mum|Alan Mother|Care Of Elderly|New Legislation|Series Three|Family Arrival|1991 Episode
  What sort of tradesman threatens Alan's hold on his seat in Natural Selection?|A builder|A plumber|A butcher|An electrician|Medium|Natural Selection|Builder Challenger|Haltemprice|Constituency Rival|Budget Plans|Series Three|1991 Story
  Which two intelligence services approach Alan in Profit Of Boom?|MI5 and the KGB|MI6 and the CIA|Interpol and Europol|The FBI and Mossad|Hard|Profit Of Boom|MI5|KGB|Cold War Revival|Series Three Finale|Intelligence Agents|1991 Episode
  Where has Alan been imprisoned before returning in Back From The Mort?|A Russian gulag|An American federal prison|A French military jail|A Swiss detention centre|Medium|Back From The Mort|Russian Gulag|Alan Return|Series Four Premiere|Lost Parliamentary Seat|1992 Episode|Imprisonment
  What new European post does Piers hold in the fourth series?|European commissioner|European Parliament president|Ambassador to Japan|NATO secretary-general|Medium|Piers Fletcher Dervish|European Commissioner|Brussels|Series Four|1992 Episodes|Career Progression|EU Politics
  Which service goes on strike in Brussels in Speaking In Tongues?|The translation service|The postal service|The police service|The airport baggage service|Medium|Speaking In Tongues|Brussels Translators|European Institutions|Service Strike|Series Four|Piers Commissioner|1992 Episode
  What extremist political group does Alan infiltrate in Heil And Farewell?|A resurgent Nazi party|A communist youth league|An anarchist theatre group|A royalist restoration society|Medium|Heil And Farewell|Nazi Party|Alan Infiltration|Series Four|1992 Episode|Extremist Politics|Political Scheme
  Whose former yacht does Alan accidentally buy in A Bigger Splash?|Robert Maxwell's|Richard Branson's|Rupert Murdoch's|Alan Sugar's|Medium|A Bigger Splash|Robert Maxwell Yacht|Accidental Purchase|War Profiteering|Series Four|1992 Story|Boat Scheme
  What office is Alan trying to reach in The Irresistible Rise Of Alan B'Stard?|Prime Minister|Lord Mayor of London|Speaker of the House|President of the European Commission|Medium|Irresistible Rise|Downing Street|Prime Minister Ambition|Europe Splits|Series Four Finale|1992 Episode|Political Power`;

  const perrinFacts = `Who played Reginald Perrin in the original BBC sitcom?|Leonard Rossiter|Geoffrey Palmer|John Barron|Bruce Bould|Easy|Leonard Rossiter|Reginald Perrin|Lead Actor|Midlife Crisis|BBC Cast|Main Character|1976 Comedy
  What is Reginald Perrin's unusual middle name?|Iolanthe|Augustus|Ebenezer|Cuthbert|Medium|Reginald Iolanthe Perrin|Middle Name|Character Identity|Reggie Perrin|Full Name|David Nobbs Fiction|Sitcom Trivia
  Who portrayed Reggie's wife Elizabeth?|Pauline Yates|Sue Nicholls|Theresa Watson|Sally-Jane Spencer|Easy|Pauline Yates|Elizabeth Perrin|Wife Character|Lead Actress|Perrin Marriage|BBC Casting|Family Life
  Who played Reggie's formidable boss C.J.?|John Barron|John Horsley|Geoffrey Palmer|Trevor Adams|Easy|John Barron|CJ Boss|Sunshine Desserts|Actor Casting|Management|Reggie Employer|Office Comedy
  What do the initials C.J. stand for in the name of Reggie's boss?|Charles Jefferson|Christopher James|Cyril John|Clifford Joseph|Hard|Charles Jefferson|CJ Full Name|Sunshine Desserts Boss|John Barron|Character Identity|Office Management|BBC Sitcom
  What is the name of the company where Reggie works at the start?|Sunshine Desserts|Grot|Perrin's|Gloomy Foods|Easy|Sunshine Desserts|Sales Office|Reginald Perrin|Food Company|Original Workplace|First Series|Commercial Career
  Who played Reggie's secretary Joan Greengross?|Sue Nicholls|Pauline Yates|Theresa Watson|Marsha Fitzalan|Medium|Sue Nicholls|Joan Greengross|Secretary Character|Office Attraction|Actress Role|Sunshine Desserts|BBC Casting
  Who wrote the original The Fall and Rise of Reginald Perrin television series?|David Nobbs|John Sullivan|Laurence Marks|Roy Clarke|Easy|David Nobbs|Programme Writer|Novel Adaptation|Reggie Character|BBC Screenplay|Series Creator|British Comedy
  Which novel by David Nobbs was adapted for the television series?|The Death of Reginald Perrin|The Life of Reggie Perrin|The Legacy of Reginald Perrin|A Man Called Grot|Medium|Death Of Reginald Perrin|David Nobbs Novel|Literary Source|1970s Adaptation|Original Fiction|Sitcom Origin|Book Title
  Which channel originally broadcast The Fall and Rise of Reginald Perrin?|BBC One|ITV|BBC Two|Channel 4|Easy|BBC One|Original Broadcaster|1976 Premiere|British Sitcom|Television Network|Programme Launch|Broadcast History
  In which year did the first series of The Fall and Rise of Reginald Perrin begin?|1976|1972|1979|1983|Easy|1976 Debut|September Premiere|First Series|Leonard Rossiter|BBC Schedule|Television Timeline|Programme History
  How many regular series were made of The Fall and Rise of Reginald Perrin?|Three|Two|Four|Five|Medium|Three Regular Series|1976 To 1979|Production Run|Series Count|BBC Sitcom|Original Episodes|Programme History
  How many regular episodes did the three original series contain?|21|18|24|28|Medium|Twenty One Episodes|Seven Per Series|Original Run|Episode Count|BBC Catalogue|Three Series|1976 To 1979
  Who directed most episodes after the first episode of the original series?|Gareth Gwenlan|John Howard Davies|Ray Butt|Geoffrey Sax|Hard|Gareth Gwenlan|Series Director|Programme Producer|Production Credits|After Premiere|BBC Television|Original Run
  Who directed the opening episode in September 1976?|John Howard Davies|Gareth Gwenlan|Bob Spiers|David Nobbs|Hard|John Howard Davies|First Episode Director|1976 Premiere|Production Crew|Initial Broadcast|BBC Comedy|Direction Credit
  Where was the beach scene used for Reggie's disappearance filmed?|West Bay in Dorset|Brighton in Sussex|Blackpool in Lancashire|Whitby in Yorkshire|Hard|West Bay|Dorset|Opening Title Beach|Faked Suicide|Filming Location|English Coast|Series Imagery
  What image flashes into Reggie's mind when he thinks of his mother-in-law?|A hippopotamus|A lion|A giraffe|A camel|Easy|Hippopotamus Vision|Mother In Law|Reggie Daydream|Recurring Joke|Mental Escape|Animal Image|Family Irritation
  What type of job does Reggie have at Sunshine Desserts?|Senior sales executive|Factory security guard|Television producer|Restaurant chef|Easy|Sales Executive|Sunshine Desserts|Reggie Occupation|Office Work|Midlife Crisis|1976 Opening|Career Role
  Which new product line is Reggie asked to promote at the start of the series?|Exotic ice creams|Frozen pizzas|Canned soup|Luxury chocolates|Medium|Exotic Ices|Sunshine Desserts|Marketing Project|Reggie Perrin|Series One|Workplace Stress|Food Product
  Which actor played Reggie's brother-in-law Jimmy Anderson?|Geoffrey Palmer|John Horsley|John Barron|Trevor Adams|Medium|Geoffrey Palmer|Jimmy Anderson|Elizabeth Brother|Former Army Officer|Actor Casting|Family Interference|Perrin Relations
  Who played the office colleague Tony Webster?|Trevor Adams|Bruce Bould|John Horsley|Tim Preece|Medium|Trevor Adams|Tony Webster|Sunshine Desserts|Office Colleague|Actor Casting|Reggie Coworker|Regular Cast
  Who played the colleague David Harris-Jones?|Bruce Bould|Trevor Adams|John Barron|Leslie Schofield|Medium|Bruce Bould|David Harris Jones|Sunshine Desserts|Management Colleague|Actor Casting|Office Staff|Regular Character
  Which actor played Reggie's old friend Doc Morrissey?|John Horsley|Geoffrey Palmer|Tim Preece|John Barron|Medium|John Horsley|Doc Morrissey|Old Friend|Actor Casting|Medical Character|Reggie Circle|Original Cast
  What is the name of Reggie's daughter?|Linda|Joan|Prue|Davina|Easy|Linda Patterson|Reggie Daughter|Perrin Family|Sally Jane Spencer|Family Relationship|Supporting Character|Sitcom Household
  Who portrayed Reggie's daughter Linda?|Sally-Jane Spencer|Sue Nicholls|Pauline Yates|Theresa Watson|Medium|Actress Sally Jane Spencer|Linda Patterson|Daughter Role|Actress Casting|Perrin Family|Tom Wife|Recurring Character
  Which actor played Tom Patterson in the first two series?|Tim Preece|Leslie Schofield|Bruce Bould|Trevor Adams|Hard|Tim Preece|Tom Patterson|Linda Husband|Series One And Two|Actor Casting|Original Performer|Family Character
  Who took over the role of Tom Patterson in the third series?|Leslie Schofield|Tim Preece|Geoffrey Palmer|John Horsley|Hard|Leslie Schofield|Tom Patterson|Series Three|Role Recasting|Linda Husband|1978 Episodes|Actor Change
  What kind of family day out ends badly for Reggie early in the first series?|A safari park visit|A trip to the zoo|A seaside picnic|A visit to an aquarium|Medium|Safari Park|Reggie Perrin|Family Outing|Series One Episode Two|Grandchildren|Stressful Holiday|Lion Encounter
  Who does Reggie invite over while Elizabeth is away in the third episode?|His secretary Joan|His boss C.J.|His daughter Linda|His brother-in-law Jimmy|Medium|Joan Greengross|Elizabeth Away|Sunday Visit|Series One Episode Three|Secret Romance|Interruptions|Reggie Perrin
  What goes conspicuously missing from Reggie's bizarre dinner party?|The food|The cutlery|The guests|The furniture|Medium|Dinner Party Without Food|Series One Episode Four|Elizabeth Away|Office Guests|Reggie Behaviour|Social Satire|Household Gathering
  Which professional association hears Reggie's disastrous speech?|The British Fruit Association|The National Farmers Union|The British Cheese Board|The Institute of Directors|Medium|British Fruit Association|Reggie Speech|Series One Episode Five|Public Breakdown|Sunshine Desserts|Business Event|1976 Plot
  How does Reggie convince people he has died in the first series?|He leaves his clothes on a beach|He arranges a fake obituary abroad|He stages a car crash|He sends a forged hospital letter|Easy|Fake Suicide|Clothes On Beach|Reggie Disappearance|Series One|Identity Escape|Midlife Crisis|Coastal Scene
  What name does Reggie use when he returns in disguise?|Martin Wellbourne|Charles Jefferson|Tom Patterson|Henry Possett|Medium|Martin Wellbourne|False Identity|Disguised Return|Reggie Perrin|Series One Finale|Memorial Service|Alternative Life
  Which solemn occasion does Reggie secretly attend under his new identity?|His own memorial service|His daughter's wedding|His boss's funeral|His retirement dinner|Medium|Own Memorial Service|Martin Wellbourne|Series One Episode Seven|Fake Death|Family Reaction|1976 Finale|Disguise
  What happens when C.J. learns that Martin is really Reggie?|He fires Reggie|He promotes Reggie|He sells Reggie the company|He moves abroad|Medium|CJ Discovers Truth|Reggie Identity Revealed|Dismissal|Series Two Opening|Sunshine Desserts|1977 Episode|Boss Reaction
  What sort of farm employs Reggie briefly after leaving Sunshine Desserts?|A pig farm|A dairy farm|A turkey farm|A sheep farm|Medium|Pig Farm|Reggie New Job|Mr Pelham|Series Two|Unemployment|Failed Career|1977 Story
  What kind of shop does Reggie open in the second series?|A shop selling useless goods|A specialist bookshop|A luxury clothing boutique|A pet shop|Easy|Grot Shop|Useless Goods|Reggie Enterprise|Series Two|Satire Of Consumerism|New Business|Odd Merchandise
  What name does Reggie give his chain of shops selling rubbish?|Grot|Perrin's|Sunshine Essentials|The Reject Shop|Easy|Grot Brand|Retail Empire|Reggie Perrin|Novelty Products|Second Series|Shop Chain|Business Success
  What novelty item is a well-known example of Grot merchandise?|Round dice|Chocolate teapots|Square footballs|Wooden batteries|Medium|Round Dice|Grot Products|Useless Novelties|Reggie Business|Unexpected Popularity|Series Two|Comic Merchandise
  What happens to Reggie's deliberately useless retail business?|It becomes very successful|It closes on its first day|It is nationalised|It moves entirely overseas|Easy|Grot Unexpected Success|Retail Boom|Reggie Frustration|Series Two|Novelty Demand|Commercial Satire|Business Fortune
  What happens to Sunshine Desserts while Grot is growing?|It goes bankrupt|It merges with Grot|It opens a foreign branch|It becomes a government department|Medium|Sunshine Desserts Bankruptcy|Grot Growth|Former Employer|Series Two|Business Failure|CJ|1977 Episodes
  Whom does Reggie recruit into his expanding Grot business?|Former Sunshine Desserts colleagues|A team of professional footballers|Only his school friends|A group of foreign investors|Medium|Former Colleagues|Grot Employment|CJ And Staff|Reggie Perrin|Series Two|Workplace Reunion|Recruitment
  How does Reggie try to ruin Grot after tiring of its success?|He appoints unsuitable employees|He begins selling luxury jewellery|He raises the prices tenfold|He closes every shop overnight|Medium|Grot Sabotage|Unsuitable Staff|Reggie Boredom|Series Two|Business Reversal|Management Scheme|1977 Finale
  What sort of establishment do Reggie and Elizabeth create in the third series?|A communal retreat|A fast-food restaurant|A detective agency|A health-food factory|Medium|Perrins Retreat|New Age Community|Reggie And Elizabeth|Series Three|Self Improvement|Middle Class Guests|1978 Plot
  What do Reggie and Elizabeth call their self-improvement retreat?|Perrin's|Grot|The Haven Club|Sunshine House|Medium|Perrins Name|Communal Retreat|Peace And Happiness|Series Three|Reggie Business|Former Staff|Country House
  What new surname do Reggie and Elizabeth briefly adopt before starting their retreat?|Gossamer|Wellbourne|Harris-Jones|Timpkins|Hard|Gossamer Alias|Reggie And Elizabeth|New Identities|Series Three Premiere|Fresh Start|Post Grot Life|Character Reinvention
  Who makes up much of the staff recruited for Perrin's retreat?|Reggie's former workmates|Professional athletes|Visiting university students|Former police officers|Medium|Old Colleagues|Retreat Staff|Sunshine Desserts Alumni|Perrins Community|Series Three|Reggie Management|Workplace Reunions
  Which organisation does Reggie establish to enforce order at the retreat?|A Peacekeeping Force|The Territorial Army|A Residents Council|A Citizens Jury|Medium|Peacekeeping Force|Perrins Retreat|Series Three|Staff Discipline|Community Conflict|McBlane|Unusual Organisation
  What kind of charitable group faces trouble from McBlane during the third series?|The Salvation Army|The Red Cross|The RNLI|The Samaritans|Medium|Salvation Army|McBlane|Peacekeeping Force|Series Three Episode Six|Community Backlash|Perrins Retreat|Conflict
  What happens to Perrin's community by the end of the third series?|It closes down|It becomes a university|It moves to Scotland|It is sold to a hotel chain|Medium|Perrins Closure|Series Three Finale|Community Ends|Reggie Perrin|Retreat Experiment|1979 Episode|New Departure
  What short festive programme brought Reggie back on television in 1982?|A Christmas sketch|A feature-length cinema film|A six-part miniseries|A live theatre broadcast|Medium|1982 Christmas|Funny Side Of Christmas|Short Sketch|Reggie And Elizabeth|BBC Special|Family Visits|Programme Return
  What is the title of the 1996 follow-up series set after Reggie's death?|The Legacy of Reginald Perrin|The Return of Reginald Perrin|Grot Reborn|The Second Life of Reginald Perrin|Medium|Legacy Of Reginald Perrin|1996 Sequel|Reggie Absent|Family And Friends|BBC Series|Later Follow Up|Television Franchise
  How much money does Reggie leave to each beneficiary in the 1996 sequel, subject to a condition?|One million pounds|Ten thousand pounds|A hundred thousand pounds|Five million pounds|Hard|1996 Legacy|Reggie Will|One Million Pounds|Inheritance Condition|Absurd Acts|Family Beneficiaries|Sequel Premise
  Which movement do Reggie's friends form in The Legacy of Reginald Perrin?|BROSCOR|Grot United|The Tooting Popular Front|The Sunshine League|Hard|BROSCOR|Bloodless Revolution|Senior Citizens|Occupationally Rejected|1996 Sequel|Political Protest|Reggie Legacy`;

  // The 2009–2010 revival is a separate programme, not a fourth original series.
  const revivalFacts = `Which actor took over the title role in the 2009 revival Reggie Perrin?|Martin Clunes|Leonard Rossiter|Geoffrey Palmer|David Nobbs|Easy|Martin Clunes|Reginald Perrin Recast|2009 Revival|BBC One Lead|Updated Sitcom|New Adaptation|Character Return
  What was the title of the 2009 BBC revival of The Fall and Rise of Reginald Perrin?|Reggie Perrin|The Legacy of Reginald Perrin|Grot Forever|The Return of Sunshine Desserts|Easy|Reggie Perrin 2009|Revival Title|BBC One Series|Updated Story|Martin Clunes Role|Sitcom Relaunch|Official Programme Name
  In which year did Martin Clunes first appear as Reggie Perrin?|2009|1996|2004|2014|Easy|2009 Premiere|Martin Clunes|New Reggie Portrayal|BBC One Broadcast|Series One|Modern Reimagining|24 April
  How many television series were produced of the Martin Clunes version of Reggie Perrin?|Two|One|Three|Four|Medium|Two Revival Series|2009 And 2010|Twelve Episodes|Modern Version|BBC One Comedy|Programme Run|Later Adaptation
  Who co-wrote the 2009 Reggie Perrin series with original creator David Nobbs?|Simon Nye|John Sullivan|Rik Mayall|Ben Elton|Medium|Simon Nye|David Nobbs|Writing Partnership|Reboot Screenplays|Men Behaving Badly Writer|BBC Comedy|2009 Scripts
  Which actress played Reggie's wife Nicola in the Martin Clunes series?|Fay Ripley|Wendy Craig|Lucy Liemann|Kerry Howard|Easy|Fay Ripley|Nicola Perrin|Reggie Wife|Updated Marriage|Lead Actress|2009 Casting|Domestic Storyline
  What is the name of the grooming-products company employing Reggie in the 2009 revival?|Groomtech|Sunshine Desserts|Grot Enterprises|Sunshine Foods|Medium|Groomtech|Grooming Products|Reggie Workplace|Disposable Razors|Office Frustration|Modern Setting|2009 Series
  Who played Reggie's boss Chris Jackson in the 2009 revival?|Neil Stuke|Geoffrey Whitehead|Jim Howick|Nick Mohammed|Medium|Neil Stuke|Chris Jackson|Reggie Boss|Office Hierarchy|Actor Casting|Groomtech|Management Character
  Who portrayed Reggie's colleague Jasmine Strauss in the 2009 revival?|Lucy Liemann|Fay Ripley|Wendy Craig|Kerry Howard|Medium|Lucy Liemann|Jasmine Strauss|Groomtech Colleague|Actress Casting|Reggie Attraction|Office Relationship|2009 Cast
  Who played Reggie's mother Marion Perrin in the revival?|Wendy Craig|Fay Ripley|Lucy Liemann|Penelope Wilton|Medium|Wendy Craig|Marion Perrin|Reggie Mother|Revival Cast|Family Visits|Parental Relationship|Actress Role
  Which character is played by Geoffrey Whitehead in the Martin Clunes Reggie Perrin?|William|Chris Jackson|Anthony|Steve|Hard|Geoffrey Whitehead|William|Nicola Father|Revival Ensemble|Older Relative|2009 Cast|Family Relations
  What job does Reggie take at Groomtech during the second series of the revival?|Managing Director|Company chauffeur|Head of security|Chief accountant|Medium|Groomtech Managing Director|Reggie Promotion|Series Two|New Company Boss|Office Leadership|2010 Plot|Workplace Power
  What brand does Reggie launch at Groomtech in the revival's second series?|Grot|Sunshine Desserts|Nabootique|Burger Me|Medium|Grot Product Line|Series Two|Reggie Perrin|Revived Business Idea|Groomtech Products|2010 Episodes|Unexpected Success
  How many episodes were broadcast of the 2009–2010 Reggie Perrin revival altogether?|Twelve|Six|Eighteen|Twenty-four|Medium|Twelve Revival Episodes|Six Per Series|BBC One|Two Series|2009 And 2010|Broadcast Total|Programme Catalogue`;

  const normalise = value => value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
  const questions = [];

  function addProgramme(programme, sharedTags, facts) {
    for (const line of facts.trim().split('\n')) {
      const id = 'tv_' + String(FIRST_ID + questions.length).padStart(5, '0');
      const fields = line.trim().split('|').map(value => value.trim());

      if (fields.length !== 13) {
        throw new Error('Pack 365: expected 13 fields in ' + id + ', got ' + fields.length);
      }

      const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;

      if ([question, correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(value => !value)) {
        throw new Error('Pack 365: empty field in ' + id);
      }

      if (!['Easy', 'Medium', 'Hard'].includes(difficulty) ||
          specificTags.length !== 7 ||
          new Set(specificTags.map(normalise)).size !== 7) {
        throw new Error('Pack 365: invalid difficulty or bespoke tags in ' + id);
      }

      const answers = [wrong1, wrong2, wrong3];

      if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4) {
        throw new Error('Pack 365: repeated answer option in ' + id);
      }

      answers.splice(questions.length % 4, 0, correctAnswer);

      const tags = [...new Map([
        'Television', 'British Television', 'Comedy', 'Sitcom',
        ...sharedTags, programme, 'Programme: ' + programme,
        correctAnswer, ...specificTags
      ].map(tag => [normalise(tag), tag])).values()];

      questions.push({
        id,
        category: 'Television',
        programme,
        question,
        answers,
        correctAnswer,
        difficulty,
        tags,
        dailyEligible: true
      });
    }
  }

  addProgramme('The New Statesman',
    ['ITV', '1987-1994', 'Rik Mayall', 'Political Satire', 'Westminster'],
    statesmanFacts);

  addProgramme('The Fall and Rise of Reginald Perrin',
    ['BBC One', '1976-1982', 'David Nobbs', 'Midlife Crisis Comedy', 'Reggie Perrin'],
    perrinFacts);

  addProgramme('Reggie Perrin',
    ['BBC One', '2009-2010', 'Martin Clunes', 'David Nobbs', 'Simon Nye', 'Revival Comedy'],
    revivalFacts);

  // Audit the exported objects, including punctuation-insensitive tag comparison.
  const tagKey = value => normalise(value).replace(/[^\p{L}\p{N}]/gu, '');

  if (!questions.length ||
      questions[0].id !== 'tv_18208' ||
      new Set(questions.map(q => q.id)).size !== questions.length ||
      new Set(questions.map(q => normalise(q.question))).size !== questions.length ||
      questions.some((q, i) =>
        q.id !== 'tv_' + String(FIRST_ID + i).padStart(5, '0') ||
        q.category !== 'Television' ||
        !q.programme ||
        !Array.isArray(q.answers) ||
        q.answers.length !== 4 ||
        !q.answers.includes(q.correctAnswer) ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        !Array.isArray(q.tags) ||
        q.tags.length < 14 ||
        new Set(q.tags.map(tagKey)).size !== q.tags.length ||
        !q.tags.includes('Programme: ' + q.programme) ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        q.dailyEligible !== true)) {
    throw new Error('Pack 365: invalid exported question object');
  }

  module.exports = questions;

