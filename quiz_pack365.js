
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

  
// Pack 365 narrative audit (22 November 2026): preserve 117 original IDs.
// The Legacy of Reginald Perrin is labelled separately from the 1976-79 original.
// Verified reference guides: https://www.comedy.co.uk/tv/the_new_statesman/episodes/all/
// https://www.thetvdb.com/series/the-fall-and-rise-of-reginald-perrin/allseasons/official
// https://www.comedy.co.uk/tv/legacy_of_reginald_perrin/episodes/
// https://www.comedy.co.uk/tv/reggie_perrin/episodes/all/
const auditAdditions = [
  {
    "id": "tv_39430",
    "category": "Television",
    "programme": "The New Statesman",
    "question": "In The New Statesman's special Who Shot Alan B'Stard?, what punishment does Alan publicly campaign to bring back?",
    "answers": [
      "Corporal punishment in schools",
      "Capital punishment",
      "Compulsory military service",
      "Public flogging for tax evasion"
    ],
    "correctAnswer": "Capital punishment",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The New Statesman",
      "Programme: The New Statesman",
      "Political satire",
      "Episode: 1990 Who Shot Alan BStard",
      "Story fact: Alan BStard Campaign To Restore Capital Punishment",
      "Answer: Capital punishment",
      "Character event: Alan BStard Campaign To Restore Capital Punishment",
      "Scene context: 1990 Who Shot Alan BStard",
      "Plotline: Alan BStard Campaign To Restore Capital Punishment",
      "Series period: 1987-1994",
      "Narrative detail: Alan BStard Campaign To Restore Capital Punishment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39431",
    "category": "Television",
    "programme": "The New Statesman",
    "question": "In The New Statesman's Who Shot Alan B'Stard?, where does the hapless MP end up despite being innocent of the particular crime?",
    "answers": [
      "In a witness protection house",
      "In a psychiatric clinic",
      "On death row",
      "In exile in Brussels"
    ],
    "correctAnswer": "On death row",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The New Statesman",
      "Programme: The New Statesman",
      "Political satire",
      "Episode: 1990 Who Shot Alan BStard",
      "Story fact: Alan BStard Unjust Death Row Sentence",
      "Answer: On death row",
      "Character event: Alan BStard Unjust Death Row Sentence",
      "Scene context: 1990 Who Shot Alan BStard",
      "Plotline: Alan BStard Unjust Death Row Sentence",
      "Series period: 1987-1994",
      "Narrative detail: Alan BStard Unjust Death Row Sentence"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39432",
    "category": "Television",
    "programme": "The New Statesman",
    "question": "Which comedian impersonated Margaret Thatcher in The New Statesman's 1990 special Who Shot Alan B'Stard??",
    "answers": [
      "Harry Enfield",
      "Jan Ravens",
      "Rory Bremner",
      "Steve Nallon"
    ],
    "correctAnswer": "Steve Nallon",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The New Statesman",
      "Programme: The New Statesman",
      "Political satire",
      "Episode: 1990 Who Shot Alan BStard",
      "Story fact: Steve Nallon Margaret Thatcher Impersonation",
      "Answer: Steve Nallon",
      "Character event: Steve Nallon Margaret Thatcher Impersonation",
      "Scene context: 1990 Who Shot Alan BStard",
      "Plotline: Steve Nallon Margaret Thatcher Impersonation",
      "Series period: 1987-1994",
      "Narrative detail: Steve Nallon Margaret Thatcher Impersonation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39433",
    "category": "Television",
    "programme": "The New Statesman",
    "question": "In The New Statesman's Keeping Mum, which family event leaves Piers facing a crisis alongside Alan's mother problems?",
    "answers": [
      "His father's death",
      "His sister's wedding",
      "His mother's remarriage",
      "The birth of his first child"
    ],
    "correctAnswer": "His father's death",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The New Statesman",
      "Programme: The New Statesman",
      "Political satire",
      "Episode: Series 3 Keeping Mum",
      "Story fact: Piers Father Dies During Keeping Mum",
      "Answer: His father's death",
      "Character event: Piers Father Dies During Keeping Mum",
      "Scene context: Series 3 Keeping Mum",
      "Plotline: Piers Father Dies During Keeping Mum",
      "Series period: 1987-1994",
      "Narrative detail: Piers Father Dies During Keeping Mum"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39434",
    "category": "Television",
    "programme": "The New Statesman",
    "question": "In The New Statesman's H*A*S*H, which profession is Alan practising among Brussels's wealthy elite?",
    "answers": [
      "Diplomatic translation",
      "High-class prostitution",
      "Corporate accountancy",
      "Private detective work"
    ],
    "correctAnswer": "High-class prostitution",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The New Statesman",
      "Programme: The New Statesman",
      "Political satire",
      "Episode: Series 4 HASH",
      "Story fact: Alan Works As High Class Prostitute In Brussels",
      "Answer: High-class prostitution",
      "Character event: Alan Works As High Class Prostitute In Brussels",
      "Scene context: Series 4 HASH",
      "Plotline: Alan Works As High Class Prostitute In Brussels",
      "Series period: 1987-1994",
      "Narrative detail: Alan Works As High Class Prostitute In Brussels"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39435",
    "category": "Television",
    "programme": "The New Statesman",
    "question": "In The New Statesman's H*A*S*H, what policy area leaves commissioner Piers under great pressure?",
    "answers": [
      "Agricultural subsidies",
      "Fishing quotas",
      "Drugs legislation",
      "Immigration controls"
    ],
    "correctAnswer": "Drugs legislation",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The New Statesman",
      "Programme: The New Statesman",
      "Political satire",
      "Episode: Series 4 HASH",
      "Story fact: Piers Handles Brussels Drugs Laws",
      "Answer: Drugs legislation",
      "Character event: Piers Handles Brussels Drugs Laws",
      "Scene context: Series 4 HASH",
      "Plotline: Piers Handles Brussels Drugs Laws",
      "Series period: 1987-1994",
      "Narrative detail: Piers Handles Brussels Drugs Laws"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39436",
    "category": "Television",
    "programme": "The New Statesman",
    "question": "In The New Statesman's Speaking In Tongues, what replaces Brussels's striking translation service?",
    "answers": [
      "Volunteer interpreters",
      "Diplomats from Westminster",
      "A new language academy",
      "A computerised system"
    ],
    "correctAnswer": "A computerised system",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The New Statesman",
      "Programme: The New Statesman",
      "Political satire",
      "Episode: Series 4 Speaking In Tongues",
      "Story fact: Computerised EU Translation System",
      "Answer: A computerised system",
      "Character event: Computerised EU Translation System",
      "Scene context: Series 4 Speaking In Tongues",
      "Plotline: Computerised EU Translation System",
      "Series period: 1987-1994",
      "Narrative detail: Computerised EU Translation System"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39437",
    "category": "Television",
    "programme": "The New Statesman",
    "question": "In The New Statesman's Speaking In Tongues, an MEP from which country lobbies Alan about a motorway?",
    "answers": [
      "Germany",
      "France",
      "Spain",
      "Belgium"
    ],
    "correctAnswer": "Germany",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The New Statesman",
      "Programme: The New Statesman",
      "Political satire",
      "Episode: Series 4 Speaking In Tongues",
      "Story fact: German Green MEP Autobahn Lobby",
      "Answer: Germany",
      "Character event: German Green MEP Autobahn Lobby",
      "Scene context: Series 4 Speaking In Tongues",
      "Plotline: German Green MEP Autobahn Lobby",
      "Series period: 1987-1994",
      "Narrative detail: German Green MEP Autobahn Lobby"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39438",
    "category": "Television",
    "programme": "The New Statesman",
    "question": "Which Only Fools and Horses actor plays General Giray in The New Statesman's A Bigger Splash?",
    "answers": [
      "David Jason",
      "John Challis",
      "Nicholas Lyndhurst",
      "Roger Lloyd-Pack"
    ],
    "correctAnswer": "John Challis",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The New Statesman",
      "Programme: The New Statesman",
      "Political satire",
      "Episode: Series 4 A Bigger Splash",
      "Story fact: John Challis Guest Role As General Giray",
      "Answer: John Challis",
      "Character event: John Challis Guest Role As General Giray",
      "Scene context: Series 4 A Bigger Splash",
      "Plotline: John Challis Guest Role As General Giray",
      "Series period: 1987-1994",
      "Narrative detail: John Challis Guest Role As General Giray"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39439",
    "category": "Television",
    "programme": "The New Statesman",
    "question": "Which political interviewer challenges Alan B'Stard in The New Statesman's 1994 special A. B'Stard Exposed?",
    "answers": [
      "Robin Day",
      "Jeremy Paxman",
      "Brian Walden",
      "David Frost"
    ],
    "correctAnswer": "Brian Walden",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The New Statesman",
      "Programme: The New Statesman",
      "Political satire",
      "Episode: 1994 ABStard Exposed",
      "Story fact: Brian Walden Interviews Alan BStard",
      "Answer: Brian Walden",
      "Character event: Brian Walden Interviews Alan BStard",
      "Scene context: 1994 ABStard Exposed",
      "Plotline: Brian Walden Interviews Alan BStard",
      "Series period: 1987-1994",
      "Narrative detail: Brian Walden Interviews Alan BStard"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39440",
    "category": "Television",
    "programme": "The New Statesman",
    "question": "Which television channel aired The New Statesman's final special A. B'Stard Exposed?",
    "answers": [
      "ITV",
      "BBC Two",
      "Channel 4",
      "BBC One"
    ],
    "correctAnswer": "BBC One",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The New Statesman",
      "Programme: The New Statesman",
      "Political satire",
      "Episode: 1994 ABStard Exposed",
      "Story fact: BBC One Broadcast Of Final Special",
      "Answer: BBC One",
      "Character event: BBC One Broadcast Of Final Special",
      "Scene context: 1994 ABStard Exposed",
      "Plotline: BBC One Broadcast Of Final Special",
      "Series period: 1987-1994",
      "Narrative detail: BBC One Broadcast Of Final Special"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39441",
    "category": "Television",
    "programme": "The Fall and Rise of Reginald Perrin",
    "question": "In The Fall and Rise of Reginald Perrin, what does Reggie experiment with after faking his death but before returning as Martin Wellbourne?",
    "answers": [
      "Different national identities",
      "Joining the Foreign Legion",
      "Various disguises as a policeman",
      "Working as a taxi driver"
    ],
    "correctAnswer": "Different national identities",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Fall and Rise of Reginald Perrin",
      "Programme: The Fall and Rise of Reginald Perrin",
      "Original BBC sitcom",
      "Episode: Original Series 1 Episode 6",
      "Story fact: Reggie Tests French Welsh Scottish And Italian Identities",
      "Answer: Different national identities",
      "Character event: Reggie Tests French Welsh Scottish And Italian Identities",
      "Scene context: Original Series 1 Episode 6",
      "Plotline: Reggie Tests French Welsh Scottish And Italian Identities",
      "Series period: 1976-1982",
      "Narrative detail: Reggie Tests French Welsh Scottish And Italian Identities"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39442",
    "category": "Television",
    "programme": "The Fall and Rise of Reginald Perrin",
    "question": "In The Fall and Rise of Reginald Perrin, who welcomes Reggie back after he attends his own memorial service in disguise?",
    "answers": [
      "C.J.",
      "Elizabeth",
      "Joan",
      "Jimmy"
    ],
    "correctAnswer": "Elizabeth",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Fall and Rise of Reginald Perrin",
      "Programme: The Fall and Rise of Reginald Perrin",
      "Original BBC sitcom",
      "Episode: Original Series 1 Episode 7",
      "Story fact: Elizabeth Reunites With Husband",
      "Answer: Elizabeth",
      "Character event: Elizabeth Reunites With Husband",
      "Scene context: Original Series 1 Episode 7",
      "Plotline: Elizabeth Reunites With Husband",
      "Series period: 1976-1982",
      "Narrative detail: Elizabeth Reunites With Husband"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39443",
    "category": "Television",
    "programme": "The Fall and Rise of Reginald Perrin",
    "question": "In The Fall and Rise of Reginald Perrin, what employer does Elizabeth falsely claim to work for while secretly at Sunshine Desserts?",
    "answers": [
      "A department store",
      "The National Savings Bank",
      "The British Basket Company",
      "A local travel agency"
    ],
    "correctAnswer": "The British Basket Company",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Fall and Rise of Reginald Perrin",
      "Programme: The Fall and Rise of Reginald Perrin",
      "Original BBC sitcom",
      "Episode: Original Series 2 Episode 2",
      "Story fact: Elizabeth Invents British Basket Company",
      "Answer: The British Basket Company",
      "Character event: Elizabeth Invents British Basket Company",
      "Scene context: Original Series 2 Episode 2",
      "Plotline: Elizabeth Invents British Basket Company",
      "Series period: 1976-1982",
      "Narrative detail: Elizabeth Invents British Basket Company"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39444",
    "category": "Television",
    "programme": "The Fall and Rise of Reginald Perrin",
    "question": "In The Fall and Rise of Reginald Perrin, who has been stockpiling firearms under his bed when Reggie visits?",
    "answers": [
      "C.J.",
      "Tony Webster",
      "David Harris-Jones",
      "Jimmy Anderson"
    ],
    "correctAnswer": "Jimmy Anderson",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Fall and Rise of Reginald Perrin",
      "Programme: The Fall and Rise of Reginald Perrin",
      "Original BBC sitcom",
      "Episode: Original Series 2 Episode 3",
      "Story fact: Jimmy Keeps Guns Under Bed",
      "Answer: Jimmy Anderson",
      "Character event: Jimmy Keeps Guns Under Bed",
      "Scene context: Original Series 2 Episode 3",
      "Plotline: Jimmy Keeps Guns Under Bed",
      "Series period: 1976-1982",
      "Narrative detail: Jimmy Keeps Guns Under Bed"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39445",
    "category": "Television",
    "programme": "The Fall and Rise of Reginald Perrin",
    "question": "Which novelty hoop becomes a surprise hit in The Fall and Rise of Reginald Perrin's Grot shops?",
    "answers": [
      "Square hula hoops",
      "Triangular Frisbees",
      "Hexagonal tennis rackets",
      "Inflatable bicycles"
    ],
    "correctAnswer": "Square hula hoops",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Fall and Rise of Reginald Perrin",
      "Programme: The Fall and Rise of Reginald Perrin",
      "Original BBC sitcom",
      "Episode: Original Series 2 Episode 4",
      "Story fact: Grot Sells Square Hula Hoops",
      "Answer: Square hula hoops",
      "Character event: Grot Sells Square Hula Hoops",
      "Scene context: Original Series 2 Episode 4",
      "Plotline: Grot Sells Square Hula Hoops",
      "Series period: 1976-1982",
      "Narrative detail: Grot Sells Square Hula Hoops"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39446",
    "category": "Television",
    "programme": "The Fall and Rise of Reginald Perrin",
    "question": "In The Fall and Rise of Reginald Perrin, who lends Reggie the money to get his Grot business started?",
    "answers": [
      "Jimmy Anderson",
      "C.J.",
      "Joan Greengross",
      "Doc Morrissey"
    ],
    "correctAnswer": "C.J.",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Fall and Rise of Reginald Perrin",
      "Programme: The Fall and Rise of Reginald Perrin",
      "Original BBC sitcom",
      "Episode: Original Series 2 Episode 4",
      "Story fact: CJ Provides Grot Start Up Loan",
      "Answer: C.J.",
      "Character event: CJ Provides Grot Start Up Loan",
      "Scene context: Original Series 2 Episode 4",
      "Plotline: CJ Provides Grot Start Up Loan",
      "Series period: 1976-1982",
      "Narrative detail: CJ Provides Grot Start Up Loan"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39447",
    "category": "Television",
    "programme": "The Fall and Rise of Reginald Perrin",
    "question": "In The Fall and Rise of Reginald Perrin, how many branches of Grot is Reggie about to open when he recruits old colleagues?",
    "answers": [
      "Ten",
      "Twenty",
      "Fifty",
      "One hundred"
    ],
    "correctAnswer": "Fifty",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Fall and Rise of Reginald Perrin",
      "Programme: The Fall and Rise of Reginald Perrin",
      "Original BBC sitcom",
      "Episode: Original Series 2 Episode 5",
      "Story fact: Fiftieth Grot Branch Opens",
      "Answer: Fifty",
      "Character event: Fiftieth Grot Branch Opens",
      "Scene context: Original Series 2 Episode 5",
      "Plotline: Fiftieth Grot Branch Opens",
      "Series period: 1976-1982",
      "Narrative detail: Fiftieth Grot Branch Opens"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39448",
    "category": "Television",
    "programme": "The Fall and Rise of Reginald Perrin",
    "question": "In The Fall and Rise of Reginald Perrin, which former employee creates a useless machine that boosts Grot's popularity?",
    "answers": [
      "Tony Webster",
      "C.J.",
      "Joan Greengross",
      "Jimmy Anderson"
    ],
    "correctAnswer": "Jimmy Anderson",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Fall and Rise of Reginald Perrin",
      "Programme: The Fall and Rise of Reginald Perrin",
      "Original BBC sitcom",
      "Episode: Original Series 2 Episode 6",
      "Story fact: Jimmy Useless Machine Becomes Bestseller",
      "Answer: Jimmy Anderson",
      "Character event: Jimmy Useless Machine Becomes Bestseller",
      "Scene context: Original Series 2 Episode 6",
      "Plotline: Jimmy Useless Machine Becomes Bestseller",
      "Series period: 1976-1982",
      "Narrative detail: Jimmy Useless Machine Becomes Bestseller"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39449",
    "category": "Television",
    "programme": "The Fall and Rise of Reginald Perrin",
    "question": "In The Fall and Rise of Reginald Perrin, what does Reggie do in public to try to ruin Grot's reputation?",
    "answers": [
      "Dress in women's clothes",
      "Burn a branch to the ground",
      "Give away every product",
      "Paint the shop signs black"
    ],
    "correctAnswer": "Dress in women's clothes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Fall and Rise of Reginald Perrin",
      "Programme: The Fall and Rise of Reginald Perrin",
      "Original BBC sitcom",
      "Episode: Original Series 2 Episode 7",
      "Story fact: Reggie Cross Dresses To Undermine Grot",
      "Answer: Dress in women's clothes",
      "Character event: Reggie Cross Dresses To Undermine Grot",
      "Scene context: Original Series 2 Episode 7",
      "Plotline: Reggie Cross Dresses To Undermine Grot",
      "Series period: 1976-1982",
      "Narrative detail: Reggie Cross Dresses To Undermine Grot"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39450",
    "category": "Television",
    "programme": "The Fall and Rise of Reginald Perrin",
    "question": "In The Fall and Rise of Reginald Perrin, what unusual advertising result finally brings more guests to Perrin's retreat?",
    "answers": [
      "All the staff resign",
      "A new guest arrives",
      "The local council closes it",
      "A documentary crew moves in"
    ],
    "correctAnswer": "A new guest arrives",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Fall and Rise of Reginald Perrin",
      "Programme: The Fall and Rise of Reginald Perrin",
      "Original BBC sitcom",
      "Episode: Original Series 3 Episode 3",
      "Story fact: Advertising Attracts Another Retreat Guest",
      "Answer: A new guest arrives",
      "Character event: Advertising Attracts Another Retreat Guest",
      "Scene context: Original Series 3 Episode 3",
      "Plotline: Advertising Attracts Another Retreat Guest",
      "Series period: 1976-1982",
      "Narrative detail: Advertising Attracts Another Retreat Guest"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39451",
    "category": "Television",
    "programme": "The Fall and Rise of Reginald Perrin",
    "question": "In The Fall and Rise of Reginald Perrin, which valuables begin disappearing from the self-improvement retreat?",
    "answers": [
      "Cars and bicycles",
      "Rare books and art",
      "Money and jewellery",
      "Food and kitchen equipment"
    ],
    "correctAnswer": "Money and jewellery",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Fall and Rise of Reginald Perrin",
      "Programme: The Fall and Rise of Reginald Perrin",
      "Original BBC sitcom",
      "Episode: Original Series 3 Episode 5",
      "Story fact: Perrins Retreat Jewellery And Money Missing",
      "Answer: Money and jewellery",
      "Character event: Perrins Retreat Jewellery And Money Missing",
      "Scene context: Original Series 3 Episode 5",
      "Plotline: Perrins Retreat Jewellery And Money Missing",
      "Series period: 1976-1982",
      "Narrative detail: Perrins Retreat Jewellery And Money Missing"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39452",
    "category": "Television",
    "programme": "The Fall and Rise of Reginald Perrin",
    "question": "In The Fall and Rise of Reginald Perrin's final regular episode, Reggie's new employer again brings him face to face with which old boss?",
    "answers": [
      "Jimmy Anderson",
      "Doc Morrissey",
      "Tony Webster",
      "C.J."
    ],
    "correctAnswer": "C.J.",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Fall and Rise of Reginald Perrin",
      "Programme: The Fall and Rise of Reginald Perrin",
      "Original BBC sitcom",
      "Episode: Original Series 3 Episode 7",
      "Story fact: Reggie New Job Again Under CJ",
      "Answer: C.J.",
      "Character event: Reggie New Job Again Under CJ",
      "Scene context: Original Series 3 Episode 7",
      "Plotline: Reggie New Job Again Under CJ",
      "Series period: 1976-1982",
      "Narrative detail: Reggie New Job Again Under CJ"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39453",
    "category": "Television",
    "programme": "The Fall and Rise of Reginald Perrin",
    "question": "In The Fall and Rise of Reginald Perrin, what are the initials of C.J.'s brother, also involved at Reggie's new workplace?",
    "answers": [
      "F.J.",
      "A.J.",
      "D.J.",
      "G.J."
    ],
    "correctAnswer": "F.J.",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Fall and Rise of Reginald Perrin",
      "Programme: The Fall and Rise of Reginald Perrin",
      "Original BBC sitcom",
      "Episode: Original Series 3 Episode 7",
      "Story fact: CJ Brother FJ Joins Final Workplace",
      "Answer: F.J.",
      "Character event: CJ Brother FJ Joins Final Workplace",
      "Scene context: Original Series 3 Episode 7",
      "Plotline: CJ Brother FJ Joins Final Workplace",
      "Series period: 1976-1982",
      "Narrative detail: CJ Brother FJ Joins Final Workplace"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39454",
    "category": "Television",
    "programme": "The Fall and Rise of Reginald Perrin",
    "question": "In The Fall and Rise of Reginald Perrin's 1982 Christmas sketch, what type of visitor joins the relatives and colleagues interrupting Reggie and Elizabeth?",
    "answers": [
      "A police inspector",
      "A tramp",
      "A news reporter",
      "A travelling salesman"
    ],
    "correctAnswer": "A tramp",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Fall and Rise of Reginald Perrin",
      "Programme: The Fall and Rise of Reginald Perrin",
      "Original BBC sitcom",
      "Episode: 1982 Christmas Sketch",
      "Story fact: Christmas Sketch Includes Unexpected Tramp",
      "Answer: A tramp",
      "Character event: Christmas Sketch Includes Unexpected Tramp",
      "Scene context: 1982 Christmas Sketch",
      "Plotline: Christmas Sketch Includes Unexpected Tramp",
      "Series period: 1976-1982",
      "Narrative detail: Christmas Sketch Includes Unexpected Tramp"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39455",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, what event reunites Reggie's friends and relatives at the start of the series?",
    "answers": [
      "His retirement party",
      "His second wedding",
      "His funeral",
      "His birthday dinner"
    ],
    "correctAnswer": "His funeral",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 1",
      "Story fact: Reggie Perrin Funeral",
      "Answer: His funeral",
      "Character event: Reggie Perrin Funeral",
      "Scene context: 1996 Episode 1",
      "Plotline: Reggie Perrin Funeral",
      "Series period: 1996",
      "Narrative detail: Reggie Perrin Funeral"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39456",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, who explains the conditions attached to Reggie's will?",
    "answers": [
      "His daughter Linda",
      "C.J.",
      "His old secretary Joan",
      "His solicitor"
    ],
    "correctAnswer": "His solicitor",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 1",
      "Story fact: Solicitor Reads Absurd Inheritance Condition",
      "Answer: His solicitor",
      "Character event: Solicitor Reads Absurd Inheritance Condition",
      "Scene context: 1996 Episode 1",
      "Plotline: Solicitor Reads Absurd Inheritance Condition",
      "Series period: 1996",
      "Narrative detail: Solicitor Reads Absurd Inheritance Condition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39457",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, what sort of unusual proposals do the beneficiaries make to strangers to meet the terms of the will?",
    "answers": [
      "Marriage proposals",
      "Business partnerships",
      "House purchases",
      "Holiday arrangements"
    ],
    "correctAnswer": "Marriage proposals",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 2",
      "Story fact: Absurd Marriage Proposals To Strangers",
      "Answer: Marriage proposals",
      "Character event: Absurd Marriage Proposals To Strangers",
      "Scene context: 1996 Episode 2",
      "Plotline: Absurd Marriage Proposals To Strangers",
      "Series period: 1996",
      "Narrative detail: Absurd Marriage Proposals To Strangers"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39458",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, whom do the beneficiaries elect to lead their new joint campaign?",
    "answers": [
      "C.J.",
      "Jimmy Anderson",
      "Elizabeth Perrin",
      "Doc Morrissey"
    ],
    "correctAnswer": "Jimmy Anderson",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 2",
      "Story fact: Jimmy Anderson Elected Movement Leader",
      "Answer: Jimmy Anderson",
      "Character event: Jimmy Anderson Elected Movement Leader",
      "Scene context: 1996 Episode 2",
      "Plotline: Jimmy Anderson Elected Movement Leader",
      "Series period: 1996",
      "Narrative detail: Jimmy Anderson Elected Movement Leader"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39459",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, where do the beneficiaries plan to stage their protest for elderly and redundant people?",
    "answers": [
      "Hyde Park",
      "The Houses of Parliament chamber",
      "Whitehall",
      "Trafalgar Square"
    ],
    "correctAnswer": "Whitehall",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 2",
      "Story fact: Campaign March On Whitehall",
      "Answer: Whitehall",
      "Character event: Campaign March On Whitehall",
      "Scene context: 1996 Episode 2",
      "Plotline: Campaign March On Whitehall",
      "Series period: 1996",
      "Narrative detail: Campaign March On Whitehall"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39460",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, whose unemployed boyfriend joins the campaign and helps swell its ranks?",
    "answers": [
      "Linda's",
      "Elizabeth's",
      "Miss Hackstraw's",
      "Joan's"
    ],
    "correctAnswer": "Joan's",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 3",
      "Story fact: Joan Boyfriend Hank Made Redundant",
      "Answer: Joan's",
      "Character event: Joan Boyfriend Hank Made Redundant",
      "Scene context: 1996 Episode 3",
      "Plotline: Joan Boyfriend Hank Made Redundant",
      "Series period: 1996",
      "Narrative detail: Joan Boyfriend Hank Made Redundant"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39461",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, which two men are rivals for Miss Hackstraw's affection?",
    "answers": [
      "C.J. and Doc Morrissey",
      "Jimmy and Tom",
      "Tony and David",
      "Hank and F.J."
    ],
    "correctAnswer": "C.J. and Doc Morrissey",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 3",
      "Story fact: CJ And Doc Morrissey Compete For Miss Hackstraw",
      "Answer: C.J. and Doc Morrissey",
      "Character event: CJ And Doc Morrissey Compete For Miss Hackstraw",
      "Scene context: 1996 Episode 3",
      "Plotline: CJ And Doc Morrissey Compete For Miss Hackstraw",
      "Series period: 1996",
      "Narrative detail: CJ And Doc Morrissey Compete For Miss Hackstraw"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39462",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, who proposes setting up a think tank and policy research unit?",
    "answers": [
      "Joan Greengross",
      "Elizabeth Perrin",
      "Linda Patterson",
      "Miss Hackstraw"
    ],
    "correctAnswer": "Elizabeth Perrin",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 4",
      "Story fact: Elizabeth Proposes Policy Think Tank",
      "Answer: Elizabeth Perrin",
      "Character event: Elizabeth Proposes Policy Think Tank",
      "Scene context: 1996 Episode 4",
      "Plotline: Elizabeth Proposes Policy Think Tank",
      "Series period: 1996",
      "Narrative detail: Elizabeth Proposes Policy Think Tank"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39463",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, which group faces the age discrimination that inspires the think tank's policy ideas?",
    "answers": [
      "Teenagers",
      "New parents",
      "Older people",
      "International students"
    ],
    "correctAnswer": "Older people",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 4",
      "Story fact: Policy Research Against Ageism",
      "Answer: Older people",
      "Character event: Policy Research Against Ageism",
      "Scene context: 1996 Episode 4",
      "Plotline: Policy Research Against Ageism",
      "Series period: 1996",
      "Narrative detail: Policy Research Against Ageism"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39464",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, which couple decide to remarry as the campaign takes shape?",
    "answers": [
      "Reggie and Elizabeth",
      "C.J. and Miss Hackstraw",
      "Jimmy and Joan",
      "Tom and Linda"
    ],
    "correctAnswer": "Tom and Linda",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 4",
      "Story fact: Tom Linda Reconciliation Remarriage",
      "Answer: Tom and Linda",
      "Character event: Tom Linda Reconciliation Remarriage",
      "Scene context: 1996 Episode 4",
      "Plotline: Tom Linda Reconciliation Remarriage",
      "Series period: 1996",
      "Narrative detail: Tom Linda Reconciliation Remarriage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39465",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, whose surprisingly agreeable behaviour prompts Jimmy to order surveillance?",
    "answers": [
      "C.J.'s",
      "Doc Morrissey's",
      "Tony Webster's",
      "Joan Greengross's"
    ],
    "correctAnswer": "C.J.'s",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 5",
      "Story fact: Jimmy Suspects CJ Sudden Kindness",
      "Answer: C.J.'s",
      "Character event: Jimmy Suspects CJ Sudden Kindness",
      "Scene context: 1996 Episode 5",
      "Plotline: Jimmy Suspects CJ Sudden Kindness",
      "Series period: 1996",
      "Narrative detail: Jimmy Suspects CJ Sudden Kindness"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39466",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, which journalist is injured in a car accident after learning about the group?",
    "answers": [
      "Welton Ormsby",
      "Morton Radstock",
      "David Harris-Jones",
      "Tom Patterson"
    ],
    "correctAnswer": "Morton Radstock",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 5",
      "Story fact: Journalist Morton Radstock Road Accident",
      "Answer: Morton Radstock",
      "Character event: Journalist Morton Radstock Road Accident",
      "Scene context: 1996 Episode 5",
      "Plotline: Journalist Morton Radstock Road Accident",
      "Series period: 1996",
      "Narrative detail: Journalist Morton Radstock Road Accident"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39467",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, which journalist joins the group after losing his job?",
    "answers": [
      "Morton Radstock",
      "Brian Walden",
      "Welton Ormsby",
      "Jimmy Anderson"
    ],
    "correctAnswer": "Welton Ormsby",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 5",
      "Story fact: Sacked Reporter Welton Ormsby Joins",
      "Answer: Welton Ormsby",
      "Character event: Sacked Reporter Welton Ormsby Joins",
      "Scene context: 1996 Episode 5",
      "Plotline: Sacked Reporter Welton Ormsby Joins",
      "Series period: 1996",
      "Narrative detail: Sacked Reporter Welton Ormsby Joins"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39468",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, whose wedding takes place as Jimmy and Miss Hackstraw grow closer?",
    "answers": [
      "C.J. and Joan's",
      "Tony and Elizabeth's",
      "Hank and Miss Hackstraw's",
      "Tom and Linda's"
    ],
    "correctAnswer": "Tom and Linda's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 5",
      "Story fact: Tom Linda Marry In Episode Five",
      "Answer: Tom and Linda's",
      "Character event: Tom Linda Marry In Episode Five",
      "Scene context: 1996 Episode 5",
      "Plotline: Tom Linda Marry In Episode Five",
      "Series period: 1996",
      "Narrative detail: Tom Linda Marry In Episode Five"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39469",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, what transport does Jimmy want booked across Britain to take supporters to Whitehall?",
    "answers": [
      "Coaches",
      "Private jets",
      "River boats",
      "Motorcycle taxis"
    ],
    "correctAnswer": "Coaches",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 6",
      "Story fact: Jimmy Orders Coaches For Whitehall March",
      "Answer: Coaches",
      "Character event: Jimmy Orders Coaches For Whitehall March",
      "Scene context: 1996 Episode 6",
      "Plotline: Jimmy Orders Coaches For Whitehall March",
      "Series period: 1996",
      "Narrative detail: Jimmy Orders Coaches For Whitehall March"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39470",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, which reluctant figure offers to fund the growing campaign?",
    "answers": [
      "Tom Patterson",
      "C.J.",
      "F.J.",
      "Joan's boyfriend Hank"
    ],
    "correctAnswer": "C.J.",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 6",
      "Story fact: CJ Agrees To Donate To Protest",
      "Answer: C.J.",
      "Character event: CJ Agrees To Donate To Protest",
      "Scene context: 1996 Episode 6",
      "Plotline: CJ Agrees To Donate To Protest",
      "Series period: 1996",
      "Narrative detail: CJ Agrees To Donate To Protest"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39471",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, which broadcaster's news studio does Jimmy commandeer to promote the demonstration?",
    "answers": [
      "ITV",
      "Sky News",
      "The BBC",
      "Channel 4"
    ],
    "correctAnswer": "The BBC",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 7",
      "Story fact: Jimmy Takes Over BBC News Studio",
      "Answer: The BBC",
      "Character event: Jimmy Takes Over BBC News Studio",
      "Scene context: 1996 Episode 7",
      "Plotline: Jimmy Takes Over BBC News Studio",
      "Series period: 1996",
      "Narrative detail: Jimmy Takes Over BBC News Studio"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39472",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, how do police learn in advance about the group's planned demonstrations?",
    "answers": [
      "Jimmy calls the police himself",
      "C.J. publicly confesses",
      "A secret recording is broadcast",
      "Morton Radstock tells them"
    ],
    "correctAnswer": "Morton Radstock tells them",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 7",
      "Story fact: Morton Radstock Warns Police",
      "Answer: Morton Radstock tells them",
      "Character event: Morton Radstock Warns Police",
      "Scene context: 1996 Episode 7",
      "Plotline: Morton Radstock Warns Police",
      "Series period: 1996",
      "Narrative detail: Morton Radstock Warns Police"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39473",
    "category": "Television",
    "programme": "The Legacy of Reginald Perrin",
    "question": "In The Legacy of Reginald Perrin, where does the group return to establish whether its actions satisfy the will?",
    "answers": [
      "Miss Hackstraw",
      "Reggie's old office",
      "Sunshine Desserts",
      "The courts"
    ],
    "correctAnswer": "Miss Hackstraw",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "The Legacy of Reginald Perrin",
      "Programme: The Legacy of Reginald Perrin",
      "1996 BBC sequel",
      "Episode: 1996 Episode 7",
      "Story fact: Beneficiaries Return To Miss Hackstraw",
      "Answer: Miss Hackstraw",
      "Character event: Beneficiaries Return To Miss Hackstraw",
      "Scene context: 1996 Episode 7",
      "Plotline: Beneficiaries Return To Miss Hackstraw",
      "Series period: 1996",
      "Narrative detail: Beneficiaries Return To Miss Hackstraw"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39474",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "In the 2009 Reggie Perrin revival, how many years has Reggie worked at Groomtech when the opening episode begins?",
    "answers": [
      "Five",
      "Ten",
      "Fifteen",
      "Twenty"
    ],
    "correctAnswer": "Ten",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2009 Series 1 Episode 1",
      "Story fact: Ten Years Working At Groomtech",
      "Answer: Ten",
      "Character event: Ten Years Working At Groomtech",
      "Scene context: 2009 Series 1 Episode 1",
      "Plotline: Ten Years Working At Groomtech",
      "Series period: 2009-2010",
      "Narrative detail: Ten Years Working At Groomtech"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39475",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "In the 2009 Reggie Perrin, what department is Jasmine Strauss recruited to head at Groomtech?",
    "answers": [
      "Food and beverages",
      "Sales and training",
      "Balms and lubricants",
      "Human resources"
    ],
    "correctAnswer": "Balms and lubricants",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2009 Series 1 Episode 1",
      "Story fact: Jasmine Head Of Balms And Lubricants",
      "Answer: Balms and lubricants",
      "Character event: Jasmine Head Of Balms And Lubricants",
      "Scene context: 2009 Series 1 Episode 1",
      "Plotline: Jasmine Head Of Balms And Lubricants",
      "Series period: 2009-2010",
      "Narrative detail: Jasmine Head Of Balms And Lubricants"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39476",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "In the 2009 Reggie Perrin, which new career does Reggie consider after speaking at Nicola's school?",
    "answers": [
      "Acting",
      "Journalism",
      "Solicitor work",
      "Teaching"
    ],
    "correctAnswer": "Teaching",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2009 Series 1 Episode 3",
      "Story fact: Reggie Considers Teaching Career",
      "Answer: Teaching",
      "Character event: Reggie Considers Teaching Career",
      "Scene context: 2009 Series 1 Episode 3",
      "Plotline: Reggie Considers Teaching Career",
      "Series period: 2009-2010",
      "Narrative detail: Reggie Considers Teaching Career"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39477",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "In the 2009 Reggie Perrin, whom does Reggie invite to visit Groomtech after enjoying a school talk?",
    "answers": [
      "A class of schoolchildren",
      "A television news crew",
      "A group of investors",
      "A team of apprentices"
    ],
    "correctAnswer": "A class of schoolchildren",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2009 Series 1 Episode 3",
      "Story fact: Reggie Invites School Class To Groomtech",
      "Answer: A class of schoolchildren",
      "Character event: Reggie Invites School Class To Groomtech",
      "Scene context: 2009 Series 1 Episode 3",
      "Plotline: Reggie Invites School Class To Groomtech",
      "Series period: 2009-2010",
      "Narrative detail: Reggie Invites School Class To Groomtech"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39478",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "In the 2009 Reggie Perrin, to which European capital does Reggie travel on business with Jasmine?",
    "answers": [
      "Paris",
      "Helsinki",
      "Rome",
      "Brussels"
    ],
    "correctAnswer": "Helsinki",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2009 Series 1 Episode 4",
      "Story fact: Business Trip With Jasmine To Helsinki",
      "Answer: Helsinki",
      "Character event: Business Trip With Jasmine To Helsinki",
      "Scene context: 2009 Series 1 Episode 4",
      "Plotline: Business Trip With Jasmine To Helsinki",
      "Series period: 2009-2010",
      "Narrative detail: Business Trip With Jasmine To Helsinki"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39479",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "In the 2009 Reggie Perrin, what alternative to commuting by train does Reggie try with painful consequences?",
    "answers": [
      "Driving a motorbike",
      "Using a taxi",
      "Cycling",
      "Running"
    ],
    "correctAnswer": "Cycling",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2009 Series 1 Episode 5",
      "Story fact: Reggie Attempts Bicycle Commute",
      "Answer: Cycling",
      "Character event: Reggie Attempts Bicycle Commute",
      "Scene context: 2009 Series 1 Episode 5",
      "Plotline: Reggie Attempts Bicycle Commute",
      "Series period: 2009-2010",
      "Narrative detail: Reggie Attempts Bicycle Commute"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39480",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "In the 2009 Reggie Perrin, which Groomtech figure invites himself to Reggie's home to work for the weekend?",
    "answers": [
      "Colin",
      "Anthony",
      "Steve",
      "Chris Jackson"
    ],
    "correctAnswer": "Chris Jackson",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2009 Series 1 Episode 5",
      "Story fact: Boss Chris Joins Weekend At Home",
      "Answer: Chris Jackson",
      "Character event: Boss Chris Joins Weekend At Home",
      "Scene context: 2009 Series 1 Episode 5",
      "Plotline: Boss Chris Joins Weekend At Home",
      "Series period: 2009-2010",
      "Narrative detail: Boss Chris Joins Weekend At Home"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39481",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "In the 2009 Reggie Perrin, how much notice does boss Chris give Reggie to prepare a conference speech?",
    "answers": [
      "Twenty-four hours",
      "Three days",
      "A week",
      "Two weeks"
    ],
    "correctAnswer": "Twenty-four hours",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2009 Series 1 Episode 6",
      "Story fact: Chris Gives One Day Conference Speech Deadline",
      "Answer: Twenty-four hours",
      "Character event: Chris Gives One Day Conference Speech Deadline",
      "Scene context: 2009 Series 1 Episode 6",
      "Plotline: Chris Gives One Day Conference Speech Deadline",
      "Series period: 2009-2010",
      "Narrative detail: Chris Gives One Day Conference Speech Deadline"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39482",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "In the 2009 Reggie Perrin, which colleague does Reggie catch embracing boss Chris at an office party?",
    "answers": [
      "Vicky",
      "Jasmine Strauss",
      "Sue",
      "Nicola"
    ],
    "correctAnswer": "Jasmine Strauss",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2009 Series 1 Episode 6",
      "Story fact: Jasmine In Clinch With Chris",
      "Answer: Jasmine Strauss",
      "Character event: Jasmine In Clinch With Chris",
      "Scene context: 2009 Series 1 Episode 6",
      "Plotline: Jasmine In Clinch With Chris",
      "Series period: 2009-2010",
      "Narrative detail: Jasmine In Clinch With Chris"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39483",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "In the 2010 Reggie Perrin, where has Reggie gone after breaking down at a sales conference?",
    "answers": [
      "The Scottish Highlands",
      "A remote farmhouse",
      "The beach",
      "An airport hotel"
    ],
    "correctAnswer": "The beach",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2010 Series 2 Episode 1",
      "Story fact: Reggie Goes To Beach After Conference",
      "Answer: The beach",
      "Character event: Reggie Goes To Beach After Conference",
      "Scene context: 2010 Series 2 Episode 1",
      "Plotline: Reggie Goes To Beach After Conference",
      "Series period: 2009-2010",
      "Narrative detail: Reggie Goes To Beach After Conference"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39484",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "In the 2010 Reggie Perrin, what sort of business does Reggie unsuccessfully attempt while looking for a new career?",
    "answers": [
      "Running a mobile hair salon",
      "Repairing televisions",
      "Selling garden furniture",
      "Selling homemade bread"
    ],
    "correctAnswer": "Selling homemade bread",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2010 Series 2 Episode 2",
      "Story fact: Reggie Tries Homemade Bread Sales",
      "Answer: Selling homemade bread",
      "Character event: Reggie Tries Homemade Bread Sales",
      "Scene context: 2010 Series 2 Episode 2",
      "Plotline: Reggie Tries Homemade Bread Sales",
      "Series period: 2009-2010",
      "Narrative detail: Reggie Tries Homemade Bread Sales"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39485",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "Which actor plays the new neighbour David in the 2010 Reggie Perrin?",
    "answers": [
      "Alexander Armstrong",
      "Neil Stuke",
      "Geoffrey Whitehead",
      "Nick Mohammed"
    ],
    "correctAnswer": "Alexander Armstrong",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2010 Series 2 Episode 2",
      "Story fact: Alexander Armstrong Plays Neighbour David",
      "Answer: Alexander Armstrong",
      "Character event: Alexander Armstrong Plays Neighbour David",
      "Scene context: 2010 Series 2 Episode 2",
      "Plotline: Alexander Armstrong Plays Neighbour David",
      "Series period: 2009-2010",
      "Narrative detail: Alexander Armstrong Plays Neighbour David"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39486",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "In the 2010 Reggie Perrin, which visitor draws Nicola's attention while Reggie takes charge at Groomtech?",
    "answers": [
      "Reggie's old school friend",
      "Their new neighbour David",
      "A television producer",
      "A customer from abroad"
    ],
    "correctAnswer": "Their new neighbour David",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2010 Series 2 Episode 3",
      "Story fact: Neighbour David Courts Nicola",
      "Answer: Their new neighbour David",
      "Character event: Neighbour David Courts Nicola",
      "Scene context: 2010 Series 2 Episode 3",
      "Plotline: Neighbour David Courts Nicola",
      "Series period: 2009-2010",
      "Narrative detail: Neighbour David Courts Nicola"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39487",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "In the 2010 Reggie Perrin, where does neighbour David show his real intentions towards Nicola?",
    "answers": [
      "At the office Christmas party",
      "At a restaurant",
      "At the swimming baths",
      "At the railway station"
    ],
    "correctAnswer": "At the swimming baths",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2010 Series 2 Episode 4",
      "Story fact: David Reveals Himself At Swimming Pool",
      "Answer: At the swimming baths",
      "Character event: David Reveals Himself At Swimming Pool",
      "Scene context: 2010 Series 2 Episode 4",
      "Plotline: David Reveals Himself At Swimming Pool",
      "Series period: 2009-2010",
      "Narrative detail: David Reveals Himself At Swimming Pool"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39488",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "In the 2010 Reggie Perrin, which two relatives plan to marry as William tries to escape the wedding?",
    "answers": [
      "Reggie's sister and Nicola's brother",
      "Reggie's daughter and David",
      "Jasmine and Chris",
      "Reggie's mother and Nicola's father"
    ],
    "correctAnswer": "Reggie's mother and Nicola's father",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2010 Series 2 Episode 4",
      "Story fact: Marion And William Prepare Wedding",
      "Answer: Reggie's mother and Nicola's father",
      "Character event: Marion And William Prepare Wedding",
      "Scene context: 2010 Series 2 Episode 4",
      "Plotline: Marion And William Prepare Wedding",
      "Series period: 2009-2010",
      "Narrative detail: Marion And William Prepare Wedding"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39489",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "In the 2010 Reggie Perrin, what happens to Reggie's deliberately unpromising Grot range?",
    "answers": [
      "It becomes a hit",
      "It is banned by regulators",
      "It is recalled immediately",
      "It is stolen by a rival"
    ],
    "correctAnswer": "It becomes a hit",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2010 Series 2 Episode 5",
      "Story fact: Grot Product Range Becomes Success",
      "Answer: It becomes a hit",
      "Character event: Grot Product Range Becomes Success",
      "Scene context: 2010 Series 2 Episode 5",
      "Plotline: Grot Product Range Becomes Success",
      "Series period: 2009-2010",
      "Narrative detail: Grot Product Range Becomes Success"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39490",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "In the final episode of the 2010 Reggie Perrin, what do Reggie and Nicola finally confront openly?",
    "answers": [
      "Jasmine's promotion",
      "Nicola's affair with David",
      "A stolen company van",
      "A failed restaurant venture"
    ],
    "correctAnswer": "Nicola's affair with David",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2010 Series 2 Episode 6",
      "Story fact: Nicola Affair With David Exposed",
      "Answer: Nicola's affair with David",
      "Character event: Nicola Affair With David Exposed",
      "Scene context: 2010 Series 2 Episode 6",
      "Plotline: Nicola Affair With David Exposed",
      "Series period: 2009-2010",
      "Narrative detail: Nicola Affair With David Exposed"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39491",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "In the final episode of the 2010 Reggie Perrin, what is the Groomtech chairman planning to do with the company?",
    "answers": [
      "Merge it with Sunshine Desserts",
      "Close it to open a hotel",
      "Sell it",
      "Give it to the staff"
    ],
    "correctAnswer": "Sell it",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2010 Series 2 Episode 6",
      "Story fact: Chairman Plans To Sell Groomtech",
      "Answer: Sell it",
      "Character event: Chairman Plans To Sell Groomtech",
      "Scene context: 2010 Series 2 Episode 6",
      "Plotline: Chairman Plans To Sell Groomtech",
      "Series period: 2009-2010",
      "Narrative detail: Chairman Plans To Sell Groomtech"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39492",
    "category": "Television",
    "programme": "Reggie Perrin",
    "question": "In the 2010 Reggie Perrin finale, which two employees are shown planning a wedding alongside Reggie's marriage problems?",
    "answers": [
      "Jasmine and Chris",
      "Anthony and Vicky",
      "Steve and Sue",
      "Marion and William"
    ],
    "correctAnswer": "Marion and William",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Reggie Perrin",
      "Programme: Reggie Perrin",
      "BBC One revival",
      "Episode: 2010 Series 2 Episode 6",
      "Story fact: Marion William Wedding Preparation",
      "Answer: Marion and William",
      "Character event: Marion William Wedding Preparation",
      "Scene context: 2010 Series 2 Episode 6",
      "Plotline: Marion William Wedding Preparation",
      "Series period: 2009-2010",
      "Narrative detail: Marion William Wedding Preparation"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if (new Set(questions.map(q=>q.id)).size!==questions.length ||
    new Set(questions.map(q=>normalise(q.question))).size!==questions.length ||
    questions.some(q=>q.answers.length!==4 || new Set(q.answers.map(normalise)).size!==4 ||
      q.answers.filter(a=>a===q.correctAnswer).length!==1 ||
      q.tags.length<14 || !q.tags.includes('Programme: '+q.programme) ||
      q.dailyEligible!==true)) {
  throw Error('Pack 365 narrative audit validation failed');
}
module.exports = questions;

