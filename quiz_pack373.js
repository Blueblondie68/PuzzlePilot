

// quiz_pack373.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Bless This House (1971-1976; 1972 film)
// and The Vicar of Dibley (1994-2007; later specials to 2020).
// Full WordPad-ready CommonJS module; no external dependencies.
// Seven question-specific tags per source row; four answer choices.
// Research: British Comedy Guide episode/cast guides and film credits.

const FIRST_ID = 19028;

// Question | correct answer | three wrong choices | difficulty | seven specific tags
const blessFacts = `Who played family man Sid Abbott in Bless This House?|Sid James|Terry Scott|Richard Briers|Leslie Phillips|Easy|Sid Abbott|Sid James|Lead Actor|1970s Family Comedy|Main Character|Television Casting|Abbott Household
Which actress portrayed Sid Abbott's wife Jean?|Diana Coupland|Patsy Rowlands|June Whitfield|Sally Geeson|Easy|Jean Abbott|Diana Coupland|Wife Character|Mother|Main Cast|Marriage|Female Lead
What is the first name of Sid and Jean Abbott's son?|Mike|Trevor|Ronald|Robin|Easy|Mike Abbott|Sid Son|Jean Son|Family Relationships|Young Adult|Abbott Children|Character Name
Which actress played the Abbott family's daughter Sally?|Sally Geeson|Diana Coupland|Patsy Rowlands|Carol Hawkins|Easy|Sally Geeson|Sally Abbott|Daughter Character|Actor Casting|Main Ensemble|Family Generation Gap|ITV Comedy
Which actor played Mike Abbott in the original television series?|Robin Stewart|Robin Askwith|Anthony Jackson|Terry Scott|Medium|Robin Stewart|Mike Abbott|Television Casting|Abbott Son|Original Series|Film Cast Difference|1970s Actor
Who portrayed Sid's next-door neighbour and friend Trevor Lewis on television?|Anthony Jackson|Peter Butterworth|Terry Scott|Bill Maynard|Medium|Anthony Jackson|Trevor Lewis|Neighbour Character|Best Friend|Television Casting|Lewis Family|Regular Actor
Which actress played neighbour Betty Lewis in Bless This House?|Patsy Rowlands|Diana Coupland|June Whitfield|Jean Alexander|Medium|Patsy Rowlands|Betty Lewis|Neighbour Actress|Trevor Wife|Supporting Cast|Lewis Household|Television Role
What was Sid Abbott's line of work in Bless This House?|Office supplies salesman|Bus conductor|Bank manager|Motor mechanic|Easy|Sid Abbott|Sales Representative|Office Supplies|Day Job|Stationery Trade|Family Breadwinner|Occupation
Which football club does Sid Abbott support in Bless This House?|Chelsea|Arsenal|West Ham United|Tottenham Hotspur|Medium|Chelsea FC|Sid Abbott|Football Supporter|London Club|Sporting Interest|Character Hobby|1970s Football
Which two writers created Bless This House?|Vince Powell and Harry Driver|John Esmonde and Bob Larbey|Ray Galton and Alan Simpson|Laurence Marks and Maurice Gran|Medium|Vince Powell|Harry Driver|Comedy Creators|Writing Partnership|Series Origins|ITV Sitcom|Production History
Who produced and directed the original Bless This House television series?|William G. Stewart|Gerald Thomas|Peter Rogers|David Askey|Hard|William G Stewart|Producer|Television Director|Thames Television|Programme Credits|Six Series|Behind The Scenes
Which ITV production company made Bless This House?|Thames Television|Yorkshire Television|Granada Television|ATV|Medium|Thames Television|Production Company|ITV Regions|1970s Sitcom|Broadcaster History|Programme Maker|Television Studio
On which television network did Bless This House originally appear?|ITV|BBC One|BBC Two|Channel 4|Easy|ITV|Original Broadcaster|British Television|1970s Scheduling|Programme Premiere|Thames Television|Channel Identity
In what year did Bless This House begin its television run?|1971|1968|1974|1977|Easy|1971 Premiere|First Series|Television Timeline|Programme Debut|ITV|Original Broadcast|Opening Year
In what year did the television run of Bless This House finish?|1976|1972|1978|1981|Easy|1976 Final Series|Television Finale|Programme Timeline|Last Broadcast|Sixth Series|ITV Comedy|End Of Run
How many series of Bless This House were made for television?|Six|Four|Five|Seven|Easy|Six Series|Series Count|1971 To 1976|Programme Run|Television Catalogue|British Sitcom|Production Facts
How many television episodes of Bless This House were produced?|65|52|72|80|Medium|Sixty Five Episodes|Episode Count|Six Series|ITV Catalogue|Programme Statistics|1970s Comedy|Broadcast Total
In what year was the cinema adaptation of Bless This House released?|1972|1970|1975|1978|Medium|1972 Film|Cinema Adaptation|Feature Release|Television Spin Off|Film Chronology|British Comedy Cinema|Sid James
Who took over the role of Mike Abbott in the 1972 film?|Robin Askwith|Robin Stewart|Anthony Jackson|John Alderton|Medium|Robin Askwith|Mike Abbott|1972 Film|Casting Change|Robin Stewart|Son Character|Cinema Version
Which actor played Trevor Lewis in the 1972 film rather than the television regular?|Peter Butterworth|Anthony Jackson|Terry Scott|Bernard Bresslaw|Medium|Peter Butterworth|Trevor Lewis|Film Recasting|1972 Adaptation|Neighbour Character|Cinema Cast|Original Television Actor
Which actor played the new neighbour Ronald Baines in the 1972 film?|Terry Scott|Sid James|Peter Butterworth|Bill Maynard|Medium|Terry Scott|Ronald Baines|Movie Neighbour|1972 Film|Actor Casting|Baines Family|Comedy Cinema
Who portrayed Ronald Baines's wife Vera in the 1972 film?|June Whitfield|Patsy Rowlands|Diana Coupland|Sally Geeson|Medium|June Whitfield|Vera Baines|Film Actress|Ronald Wife|1972 Spin Off|Neighbour Couple|Movie Cast
Who directed the cinema version of Bless This House?|Gerald Thomas|William G. Stewart|Peter Rogers|Joseph McGrath|Hard|Gerald Thomas|Film Director|1972 Adaptation|British Comedy Film|Behind Camera|Sid James Film|Cinema Production
Who wrote the screenplay for the 1972 Bless This House film?|Dave Freeman|Carla Lane|Eric Chappell|John Sullivan|Hard|Dave Freeman|Film Screenplay|1972 Film|Writer Credit|Television Adaptation|British Cinema|Script Author
In the opening episode of Bless This House, whose struggles to understand modern youth cause trouble at home?|Sid Abbott's|Trevor Lewis's|Jean Abbott's|Mike Abbott's|Easy|Sid Abbott|The Generation Gap|Series One|Changing Times|Teenage Children|Household Misunderstandings|Premiere Plot
Which Abbott family member leaves home after Sid insists he should find work?|Mike|Sally|Jean|Trevor|Medium|Mike Abbott|Be It Ever So Humble|Series One|Leaving Home|Father Son Conflict|Work Search|Family Argument
What job does Jean take in the Bless This House episode A Woman's Place?|Bookshop assistant|Hospital receptionist|School cleaner|Travel agent|Medium|Jean Abbott|A Womans Place|Bookshop Job|Series One|Household Roles|New Employment|Marriage Conflict
What charitable activity does Mike persuade the family to join in the first series?|An Oxfam fast|A sponsored cycle ride|A jumble sale for the RNLI|A charity car wash|Medium|Oxfam|Charity Begins At Home|Series One|Fundraising Fast|Mike Abbott|Family Participation|1971 Episode
What type of pet does Sally bring home in an early Bless This House episode, upsetting Sid?|A dog|A cat|A rabbit|A tortoise|Easy|Sally Abbott|Pet Dog|If The Dog Collar Fits|Series One|Sid Objections|Missing Animal|Family Pet
What sort of street item turns up after Sid and Trevor's drunken night out?|A road sign|A parking meter|A traffic light|A phone box|Medium|Sid Abbott|Trevor Lewis|The Morning After The Night Before|Series One|Drunken Night|Unexplained Souvenirs|Street Signage
What valuable item belonging to his boss goes missing in Another Fine Mess?|A mink coat|A diamond necklace|A gold watch|An antique painting|Medium|Another Fine Mess|Series One|Boss Wife|Mink Coat|Missing Present|Sid Abbott|Misplaced Property
What does Sid mistakenly suspect after hearing about Jean's medical tests in Mum's The Word?|That she is pregnant|That she is emigrating|That she has broken her arm|That she has lost her hearing|Medium|Mums The Word|Series One|Jean Abbott|Doctors Tests|Wrong Conclusion|Sid Abbott|Family Misunderstanding
Which musical composer does Sid try to listen to while Trevor and Betty argue next door?|Tchaikovsky|Beethoven|Mozart|Elgar|Hard|Make Love Not War|Series One|Tchaikovsky|Classical Music|Neighbour Row|Trevor And Betty|Sid Quiet Evening
What does Sid accidentally damage in Two Heads Are Better Than One?|Mike's sculpture|Jean's sewing machine|Sally's bicycle|Trevor's television|Medium|Two Heads Are Better Than One|Series Two|Mike Sculpture|Art Competition|College Project|Clay And Fibreglass|Sid Abbott
What kind of tree causes a feud between the Abbott and Lewis families?|A cherry tree|An apple tree|An oak tree|A willow tree|Medium|Love Me Love My Tree|Series Two|Cherry Tree|Neighbour Dispute|Trevor Lewis|Garden Pruning|Property Row
Whose visit ruins Sid and Trevor's proposed fishing weekend in Another Lost Weekend?|Jean's father|Sid's sister|Mike's headmaster|Betty's uncle|Medium|Another Lost Weekend|Series Two|Jean Father|Fishing Weekend|Missing Visitor|Sid And Trevor|Family Guest
In Get Me To The Match On Time, which two football clubs are due to play?|Liverpool and Arsenal|Chelsea and Everton|Leeds and Tottenham|Manchester United and West Ham|Hard|Get Me To The Match On Time|Series Two|Liverpool|Arsenal|Football Tickets|Trevor Lewis|Wedding Clash
Where do Sid and Jean overhear guests talking about them during Mike's birthday party?|In the greenhouse|Behind the garage|In the attic|Under the stairs|Medium|People In Glass Houses|Series Two|Mike Twentieth Birthday|Greenhouse|Overheard Remarks|Family Party|Sid And Jean
What luxury car belonging to his boss does Sid get to drive in A Rolls By Any Other Name?|A Rolls-Royce|A Bentley|A Jaguar|An Aston Martin|Medium|A Rolls By Any Other Name|Series Two|Boss Car|Rolls Royce|Anti Car Protest|Mike And Sally|Traffic Hold Up
What kind of gathering do Jean and Betty organise in A Touch Of The Unknown?|A seance|A bingo night|A book club|A dance rehearsal|Medium|A Touch Of The Unknown|Series Two|Seance|Jean Abbott|Betty Lewis|Ghostly Noises|Fortune Telling
What pet of Sally's causes concern in It Comes To Us All In The End?|A budgerigar|A goldfish|A puppy|A guinea pig|Medium|It Comes To Us All In The End|Series Three|Sally Abbott|Pet Budgie|Animal Illness|Sid Morning|Family Worry
What unusual detail shocks Sid and Jean about Mike's admirer in Tea For Two And Four For Tea?|She is older than they are|She is a famous singer|She is Trevor's niece|She is a police officer|Medium|Tea For Two And Four For Tea|Series Three|Mike Abbott|Older Woman|Love Note|Romantic Interest|Parents Surprise
From which country does Sid's long-lost cousin arrive in Blood Is Thicker Than Water?|The United States|Australia|Canada|New Zealand|Medium|Blood Is Thicker Than Water|Series Three|American Cousin|Sid Family|Unexpected Visitor|Police Arrival|Overseas Relative
What precious object does Sid guard at home for his boss in One Good Turn Deserves A Bother?|A silver tea set|A jewelled clock|A gold trophy|A pearl necklace|Medium|One Good Turn Deserves A Bother|Series Three|Silver Tea Set|Boss Antique|Household Security|Crimewave|Sid Paranoia
Which two cities are linked by the sponsored walk Sid and Trevor attempt?|London and Brighton|Bristol and Bath|Oxford and Reading|Manchester and Liverpool|Hard|The Loneliness Of The Short Distance Walker|Series Three|London To Brighton|Sponsored Walk|Exercise Challenge|Sid Abbott|Trevor Lewis
What business does Mike start from the Abbott family garage in Watch The Birdie?|Photography|Bicycle repair|Car washing|Flower arranging|Medium|Watch The Birdie|Series Three|Mike Abbott|Photography Business|Family Garage|Customers|Sid Helps
To which city are Sid and Jean invited by a French couple in Entente Not So Cordiale?|Paris|Lyon|Nice|Marseille|Medium|Entente Not So Cordiale|Series Three|Paris|French Couple|Henri And Odette|Wartime Friendship|European Visit
What religious vocation does Sally announce she wants in A Girl's Worst Friend Is Her Father?|To become a nun|To become a missionary|To become a choir director|To become a chaplain|Medium|A Girls Worst Friend Is Her Father|Series Three|Sally Abbott|Nun|Failed Job Interview|Father Daughter Tension|New Career
In Who's Minding The Baby, what is the name of the infant Sid agrees to look after?|Dominic|Oliver|Timothy|Philip|Hard|Whos Minding The Baby|Series Four|Baby Dominic|Trevor And Betty|Babysitting|Sid Abbott|Family Favour
In The Bells Are Ringing, what arrangement do Mike and Sally separately announce?|A double wedding|A double house move|A joint holiday|A shared business|Medium|The Bells Are Ringing|Series Four|Mike Abbott|Sally Abbott|Double Wedding|Marriage Plans|Family Shock
What business do Mike and Sally launch in The First 25 Years Are The Worst?|An employment agency|A taxi firm|A newsagent's|A catering service|Medium|The First 25 Years Are The Worst|Series Four|Employment Agency|Abbott Siblings|New Business|Job Hunting|Wedding Anniversary
What competition prize tempts Sid and Trevor to write a pop song?|Three thousand pounds|Five hundred pounds|A new car|A holiday in Spain|Hard|They Dont Write Songs Like That Anymore|Series Five|Songwriting Contest|Three Thousand Pounds|Sid And Trevor|Pop Music|Prize Money
What sort of business do Mike and Sally set up in Home Tweet Home?|Pet-sitting|Window cleaning|Furniture removal|Gardening|Medium|Home Tweet Home|Series Five|Pet Sitting|Mike And Sally|Family Enterprise|Animal Care|Extra Income
Which Gilbert and Sullivan operetta features in The Policeman The Paint And The Pirates?|The Pirates of Penzance|The Mikado|HMS Pinafore|The Gondoliers|Medium|The Policeman The Paint And The Pirates|Series Five|Gilbert And Sullivan|Amateur Dramatics|Pirates Of Penzance|Sid Boss|Sally Rehearsals
What birthday gift causes Sid an allergic reaction in Happy Birthday Sid?|A faux-fur coat|A woolly scarf|A leather hat|A new aftershave|Medium|Happy Birthday Sid|Series Five|Sid Abbott|Fake Fur Coat|Allergic Reaction|Family Gift|Birthday Surprise
What local group does Sid unexpectedly become chairman of in Mr Chairman?|The residents' association|The football supporters' club|The gardening society|The school governors|Medium|Mr Chairman|Series Five|Howard Road|Residents Association|Sid Abbott|Chairmanship|Local Rates
What household appliance does Sally's boyfriend persuade Jean to buy in The Frozen Limit?|A chest freezer|A dishwasher|A tumble dryer|A microwave oven|Medium|The Frozen Limit|Series Six|Chest Freezer|Sally Boyfriend|Jean Abbott|Household Purchase|Sid Disapproval
What does Sid appear to predict while talking in his sleep in Beautiful Dreamer?|A horse-race result|A general election result|A lottery number|A cricket score|Medium|Beautiful Dreamer|Series Six|Sleep Talking|Horse Racing|Sid Abbott|Trevor And Betty|Unexpected Prediction
What happens to Sid's memory in the episode Remember Me?|He temporarily loses it|He can recall everyone's dreams|He remembers an old treasure map|He suddenly remembers a secret twin|Easy|Remember Me|Series Six|Sid Abbott|Concussion|Memory Loss|Jean Abbott|Family Advantage
Who moves into Trevor and Betty's house while they are away in Friends And Neighbours?|Squatters|A visiting football team|A film crew|Travelling circus performers|Medium|Friends And Neighbours|Series Six|Trevor Lewis|Betty Lewis|Squatters|House Occupation|Holiday Return
Why do archaeologists arrive at the Abbott home in Well Well Well?|A water leak leads to a discovery|Mike digs a swimming pool|Sid buys an ancient statue|A Roman coin is found in the garden|Hard|Well Well Well|Series Six|Water Leak|Archaeologists|Abbott Living Room|Water Board|Excavation
What missing document takes Sid to court in A Matter Of Principle?|A television licence|A driving licence|A passport|A fishing permit|Medium|A Matter Of Principle|Series Six|TV Licence|Court Case|Sid Abbott|Family Spending|Legal Trouble
What occasion does Sid appear to forget in the final television episode Some Enchanted Evening?|The anniversary of his first proposal|Mike's birthday|Sally's graduation|His own retirement|Medium|Some Enchanted Evening|Series Six Finale|Sid And Jean|First Proposal|Anniversary|Last Episode|1976 Farewell
Which actress played Kate Baines in the 1972 Bless This House film?|Carol Hawkins|Sally Geeson|Wendy Richard|Patsy Rowlands|Hard|Carol Hawkins|Kate Baines|1972 Film|Ronald Baines|Vera Baines|Film Cast|Cinema Character
Which actress appeared as Carol in the 1972 Bless This House film?|Wendy Richard|June Whitfield|Diana Coupland|Liz Fraser|Hard|Wendy Richard|Carol Character|1972 Film|Supporting Cast|British Screen Actress|Film Credit|Sid James Comedy`;

const dibleyFacts = `Which actress played Geraldine Grainger in The Vicar of Dibley?|Dawn French|Jennifer Saunders|Caroline Quentin|Victoria Wood|Easy|Dawn French|Geraldine Grainger|Female Vicar|Lead Actress|BBC Sitcom|Church Of England|Rural Comedy
What job does Alice Tinker hold at the church in The Vicar of Dibley?|Verger|Organist|Choir director|Church treasurer|Easy|Alice Tinker|Verger|Emma Chambers|Church Staff|Parish Work|Geraldine Friend|Village Church
Which actress portrayed Alice Tinker?|Emma Chambers|Liz Smith|Kathy Burke|Sue Johnston|Easy|Emma Chambers|Alice Tinker|Verger|Actress Casting|Geraldine Friend|Dibley Ensemble|BBC Comedy
Who played strict parish council chairman David Horton?|Gary Waldhorn|James Fleet|Roger Lloyd Pack|John Bluthal|Easy|Gary Waldhorn|David Horton|Parish Council Chairman|Landowner|Traditionalist|Main Cast|Television Casting
What is the name of David Horton's son in The Vicar of Dibley?|Hugo|Harry|Simon|Frank|Easy|Hugo Horton|David Horton|Father And Son|Horton Family|James Fleet|Village Resident|Character Name
Which actor played the mild-mannered Hugo Horton?|James Fleet|Gary Waldhorn|Clive Mantle|John Bluthal|Easy|James Fleet|Hugo Horton|Character Casting|David Son|Alice Husband|Parish Council|BBC Comedy
Which actor portrayed the long-winded parish clerk Frank Pickle?|John Bluthal|Trevor Peacock|Roger Lloyd Pack|Peter Capaldi|Medium|John Bluthal|Frank Pickle|Parish Clerk|Council Minutes|Supporting Actor|Verbose Character|Dibley Cast
Which character repeatedly begins his sentences with 'No, no, no, no'?|Jim Trott|Frank Pickle|Owen Newitt|David Horton|Easy|Jim Trott|No No No Catchphrase|Trevor Peacock|Village Councillor|Speech Habit|Character Quirk|Comedy Catchphrase
Which actor played Jim Trott?|Trevor Peacock|Roger Lloyd Pack|John Bluthal|James Fleet|Medium|Trevor Peacock|Jim Trott|Village Resident|Catchphrase|Actor Casting|Parish Council|Ensemble
Which Dibley resident works as a farmer and frequently shocks the others with crude stories?|Owen Newitt|Frank Pickle|Hugo Horton|David Horton|Easy|Owen Newitt|Local Farmer|Roger Lloyd Pack|Village Eccentric|Parish Council|Rural Life|Comic Character
Who played the farmer Owen Newitt in The Vicar of Dibley?|Roger Lloyd Pack|Trevor Peacock|James Fleet|Gary Waldhorn|Easy|Roger Lloyd Pack|Owen Newitt|Farmer|Casting|Parish Council|Rural Comedy|British Actor
Which actress played eccentric cook Letitia Cropley?|Liz Smith|Emma Chambers|Judi Dench|Miriam Margolyes|Medium|Liz Smith|Letitia Cropley|Unusual Recipes|Elderly Villager|Series One|Supporting Actress|Church Community
Which production company made The Vicar of Dibley?|Tiger Aspect Productions|Thames Television|Hat Trick Productions|Granada Television|Hard|Tiger Aspect Productions|Television Production|BBC Commission|Programme Credits|British Comedy|Behind The Scenes|Sitcom Company
Which writers are credited with The Vicar of Dibley?|Richard Curtis and Paul Mayhew-Archer|John Sullivan and Ben Elton|Carla Lane and Myra Taylor|Vince Powell and Harry Driver|Medium|Richard Curtis|Paul Mayhew Archer|Comedy Writers|Series Scripts|BBC Production|Sitcom Creation|Writing Credits
Which composer provided the music for The Vicar of Dibley?|Howard Goodall|Ronnie Hazlehurst|Alan Hawkshaw|Mike Batt|Hard|Howard Goodall|Theme Music|Television Composer|BBC Comedy Soundtrack|Programme Credits|Musical Score|Production Team
On which channel did The Vicar of Dibley first air?|BBC One|ITV|Channel 4|BBC Two|Easy|BBC One|1994 Debut|Original Channel|British Television|Comedy Scheduling|BBC Sitcom|Broadcast History
In which year did The Vicar of Dibley first appear on television?|1994|1989|1997|2001|Easy|1994 Premiere|Series One|First Broadcast|British Comedy History|Programme Launch|BBC One|Original Run
What is the title of the first episode of The Vicar of Dibley?|The Arrival|The Election|The Proposal|Community Spirit|Medium|The Arrival|Pilot Episode|1994|Geraldine Grainger|Female Vicar Arrives|Series One|Episode Title
Which recently deceased clergyman does Geraldine replace when she arrives in Dibley?|Reverend Pottle|Reverend Kennedy|Reverend Pickle|Reverend Trott|Medium|Reverend Pottle|The Arrival|Previous Vicar|1994|Geraldine Grainger|Parish Vacancy|Clergy Succession
Which real Buckinghamshire village provided outdoor scenes for The Vicar of Dibley?|Turville|Amersham|Lacock|Bourton-on-the-Water|Medium|Turville|Buckinghamshire|Filming Location|English Village|Rural Setting|Outdoor Scenes|Location Trivia
What is Geraldine Grainger's favourite comfort food, often eaten in large quantities?|Chocolate|Cheese|Popcorn|Marmalade|Easy|Geraldine Grainger|Chocolate|Comfort Eating|Character Habit|Confectionery|Food Jokes|Vicar Personality
Which BBC religious television programme arranges to film in Dibley during the first series?|Songs of Praise|Question Time|Blue Peter|Antiques Roadshow|Easy|Songs Of Praise|Series One|BBC Television|Village Filming|Church Music|Tristan Producer|Geraldine Grainger
What is the first name of the television producer Geraldine fancies in Songs Of Praise?|Tristan|Harry|Simon|Jeremy|Hard|Tristan|Songs Of Praise|Series One|TV Producer|Geraldine Crush|BBC Crew|Romantic Interest
In The Vicar of Dibley's Community Spirit, which pop star does Geraldine mistakenly believe Alice's cousin Reg Dwight to be?|Elton John|Rod Stewart|Cliff Richard|Mick Jagger|Medium|Community Spirit|Reg Dwight|Elton John|Alice Tinker|Autumn Fayre|Celebrity Guest|Birth Name
What kind of window is damaged by a fallen tree in The Window And The Weather?|A stained-glass window|A shopfront window|A greenhouse window|A conservatory window|Medium|The Window And The Weather|Series One|Storm Damage|Stained Glass|Village Church|Fundraising|Fallen Tree
Who is David Horton's opponent in the village election story after residents encourage her to stand?|Geraldine Grainger|Alice Tinker|Letitia Cropley|Owen Newitt|Medium|Election Episode|Series One|Geraldine Grainger|David Horton|Parish Council|Local Election|Political Rivalry
What unusual church event causes press ridicule in the Dibley episode Animals?|A service blessing animals|A wedding for two dogs|A sermon delivered by a parrot|A donkey nativity in summer|Medium|Animals Episode|Series One|Animal Blessing|Village Church|Tabloid Attention|Geraldine Grainger|Rural Parish
Which Christian festival is central to the 1996 Dibley special in which Mrs Cropley becomes ill?|Easter|Harvest Festival|Halloween|Bonfire Night|Easy|The Easter Bunny|1996 Special|Easter|Lent|Letitia Cropley|Church Calendar|Special Episode
Which Dibley character dies during the Easter special in 1996?|Letitia Cropley|Alice Tinker|Frank Pickle|Owen Newitt|Medium|Letitia Cropley|The Easter Bunny|1996 Special|Liz Smith|Character Farewell|Village Loss|Easter Episode
How many separate Christmas dinners does Geraldine agree to eat in The Christmas Lunch Incident?|Three|Two|Four|Five|Medium|The Christmas Lunch Incident|1996 Christmas|Three Dinners|Geraldine Grainger|Festive Meals|Village Invitations|Comedy Plot
What unusual garment does Alice hope her mother will finish in time for her wedding to Hugo?|A knitted wedding dress|A silk bridal veil|A feathered wedding cape|A lace wedding shawl|Medium|Alice Tinker|Hugo Horton|Love And Marriage|1998 Wedding|Knitted Dress|Bride Outfit|Alice Mother
In which Vicar of Dibley episode do Alice and Hugo become engaged?|Engagement|Love And Marriage|Spring|The Arrival|Medium|Engagement|1997 Christmas|Alice Tinker|Hugo Horton|Marriage Proposal|David Horton|Relationship Milestone
What name does the village give its temporary local radio station?|Radio Dibley|Dibley FM|Dibley Sound|Radio Horton|Medium|Dibley Live|1998|Radio Dibley|Community Broadcasting|Village Anniversary|Parish Volunteers|Local Radio
Which parish clerk reveals that he is gay during the village radio broadcasts?|Frank Pickle|Jim Trott|Owen Newitt|David Horton|Medium|Frank Pickle|Dibley Live|Radio Dibley|Coming Out|1998 Episode|Village Broadcast|John Bluthal
In The Vicar of Dibley's Dibley Live, how many years since the church's founding are being celebrated?|650|500|750|900|Hard|Dibley Live|1998|Village Anniversary|Six Hundred And Fifty|Local History|Radio Station|Celebration
What makes Geraldine temporarily neglect village duties in Celebrity Vicar?|Her newfound media fame|Her gardening business|A holiday in France|A new teaching job|Medium|Celebrity Vicar|1998|Geraldine Grainger|Media Appearances|Fame|Parish Duties|Celebrity Culture
Who marries Alice Tinker in the episode Love And Marriage?|Hugo Horton|Simon Horton|Harry Kennedy|Tristan|Easy|Love And Marriage|1998|Alice Tinker|Hugo Horton|Village Wedding|Romantic Storyline|Marriage
What is the name of David Horton's younger brother who visits Dibley in Love And Marriage?|Simon|Harry|Jeremy|Ronald|Medium|Simon Horton|David Horton|Love And Marriage|1998|Horton Family|Guest Character|Geraldine Romance
Which actor played David Horton's brother Simon?|Clive Mantle|Richard Armitage|Hugh Bonneville|Stephen Tompkinson|Hard|Clive Mantle|Simon Horton|David Brother|Guest Actor|1998 Storyline|Geraldine Romance|Television Casting
What part of the year gives the first episode of Dibley's third series its title?|Autumn|Summer|Winter|Spring|Medium|Autumn|Series Three|1999|Simon Horton|Seasonal Episodes|Episode Title|Geraldine Grainger
Who plays the Virgin Mary in Dibley's Millennium nativity performance?|Alice Horton|Geraldine Grainger|Letitia Cropley|David Horton|Medium|Winter|1999 Christmas|Nativity Play|Alice Horton|Pregnancy|Village Performance|Virgin Mary
Which problem disrupts Dibley during a heatwave in the episode Summer?|The village loses running water|The church roof collapses|A plague of locusts arrives|The village hall burns down|Medium|Summer|2000|Water Shortage|Heatwave|Local Utilities|Water Company|Village Crisis
What sort of occasion is being arranged for Alice and Hugo's baby in the episode Spring?|A christening|A wedding|A birthday party|A graduation|Medium|Spring|1999|Alice And Hugo|Baby Christening|New Parents|Village Church|Family Celebration
What significant anniversary of Geraldine's arrival is celebrated in Merry Christmas?|Ten years|Five years|Fifteen years|Twenty years|Medium|Merry Christmas|2004 Special|Ten Year Anniversary|Geraldine Grainger|Dibley Community|Christmas Celebration|Village Gratitude
Which senior Church figure is among those involved in Geraldine's anniversary celebrations in Merry Christmas?|The Archbishop of Canterbury|The Pope|The Archbishop of York|The Bishop of Rome|Hard|Merry Christmas|2004|Archbishop Of Canterbury|Geraldine Anniversary|Church Hierarchy|Celebrations|Festive Special
What birthday is Geraldine approaching in the 2005 special Happy New Year?|Her 40th|Her 30th|Her 50th|Her 60th|Medium|Happy New Year|2005 Special|Geraldine Grainger|Fortieth Birthday|Party Plans|Village Friends|Romance
What kind of dating event do the villagers arrange for Geraldine in Happy New Year?|Speed dating|A blind-date television show|An online dating workshop|A village barn dance|Medium|Happy New Year|2005|Speed Dating|Geraldine Grainger|Friends Intervention|Loneliness|Birthday Gift
Which television programme visits Dibley in a 2005 Comic Relief sketch?|Antiques Roadshow|Bargain Hunt|Cash in the Attic|Flog It!|Medium|Comic Relief 2005|Antiques Roadshow|TV Crossover|Dibley Village|Charity Sketch|BBC Programme|Guest Format
Which toy does Alice ask experts to value in the Dibley Antiques Roadshow sketch?|A Papa Smurf figure|A Barbie doll|A teddy bear|A model Dalek|Hard|Comic Relief 2005|Papa Smurf|Alice Tinker|Antiques Roadshow|Toy Valuation|Charity Sketch|Collectable Figure
Which newcomer to Dibley eventually marries Geraldine Grainger?|Harry Kennedy|Simon Horton|Tristan|Jeremy Ogilvy|Easy|Harry Kennedy|Geraldine Grainger|2006 Christmas|Romantic Lead|Village Newcomer|Marriage|New Relationship
Which actor played Geraldine's eventual husband Harry Kennedy?|Richard Armitage|Hugh Bonneville|Clive Mantle|Rufus Sewell|Medium|Richard Armitage|Harry Kennedy|Geraldine Husband|2006 Special|Actor Casting|Romance|BBC Drama Actor
What is the title of the 2006 Christmas special that introduces Harry Kennedy?|The Handsome Stranger|The Vicar In White|Love And Marriage|Happy New Year|Medium|The Handsome Stranger|2006 Christmas|Harry Kennedy|Geraldine Grainger|Episode Title|Romantic Comedy|New Arrival
Which actress played Rosie Kennedy, the woman Geraldine mistakes for Harry's partner?|Keeley Hawes|Samantha Bond|Sarah Lancashire|Anna Friel|Hard|Keeley Hawes|Rosie Kennedy|Harry Kennedy|The Handsome Stranger|2006|Mistaken Romance|Guest Actress
Which novel inspires Alice's unusual theory about her ancestry in The Handsome Stranger?|The Da Vinci Code|The Name of the Rose|The Secret History|The Holy Blood and the Holy Grail|Medium|The Handsome Stranger|2006|The Da Vinci Code|Alice Tinker|Book Club|Religious Theory|Contemporary Novel
What is the title of the special in which Geraldine's own wedding takes place?|The Vicar In White|The Christmas Lunch Incident|The Easter Bunny|Engagement|Easy|The Vicar In White|2007|Geraldine Wedding|Harry Kennedy|Marriage Ceremony|New Year Special|Episode Title
Who played the clergyman Jeremy Ogilvy in The Vicar In White?|Hugh Bonneville|Richard Armitage|Clive Mantle|Adrian Scarborough|Hard|Hugh Bonneville|Jeremy Ogilvy|The Vicar In White|2007|Wedding Clergyman|Guest Actor|Ceremony
Which celebrity is offered as Geraldine's partner in the 2007 Comic Relief Wife Swap sketch?|Sting|Bono|Robbie Williams|Mick Hucknall|Medium|Comic Relief 2007|Wife Swap|Sting|Geraldine Grainger|Celebrity Crossover|Charity Sketch|Parish Council
What major change in church leadership is the subject of Geraldine's 2013 Comic Relief campaign?|Allowing women to become bishops|Introducing married priests|Ending Sunday services|Creating a new diocese|Medium|Comic Relief 2013|Women Bishops|Church Reform|Geraldine Grainger|Equality Campaign|Parishioners|Clergy Policy
Which actor appeared as a vicar alongside Geraldine in the 2013 Comic Relief sketch?|Damian Lewis|Richard Armitage|Hugh Bonneville|Martin Clunes|Hard|Damian Lewis|Comic Relief 2013|Guest Vicar|Dawn French|Church Campaign|Charity Special|Guest Star
In the 2015 Comic Relief special, what Church role does Geraldine hope to gain?|Bishop|Archdeacon|Dean|Canon|Medium|The Bishop Of Dibley|Comic Relief 2015|Geraldine Grainger|Female Bishops|Church Promotion|Clergy Ambition|Special Sketch
Which actress from Harry Potter appeared as Reverend Iris in the 2015 Comic Relief sketch?|Emma Watson|Bonnie Wright|Evanna Lynch|Katie Leung|Hard|Emma Watson|Reverend Iris|Comic Relief 2015|The Bishop Of Dibley|Guest Actress|Harry Potter|Church Rival
During which fundraising television event did Geraldine appear in an April 2020 sketch?|The Big Night In|Children in Need|Sport Relief|The Royal Variety Performance|Medium|The Big Night In|April 2020|Geraldine Grainger|Pandemic Broadcast|Charity Television|BBC Special|Lockdown Sketch
What subject does Geraldine encourage her flock to read during the first 2020 lockdown episode?|The Bible|The complete works of Shakespeare|A gardening manual|The parish accounts|Easy|Dibley In Lockdown|Episode One|2020|Bible Reading|Social Distancing|Parish Advice|Geraldine Sermon
Which late church helper does Geraldine remember in the second 2020 lockdown episode?|Alice|Letitia|David|Frank|Medium|Dibley In Lockdown|Episode Two|2020|Alice Horton|Remembrance|Geraldine Grainger|Verger Tribute
What competition result is announced during the third Dibley lockdown episode?|A face-mask competition|A flower-arranging contest|A cake competition|A village scarecrow competition|Medium|Dibley In Lockdown|Episode Three|2020|Face Masks|Village Competition|COVID Era|Christmas Approaches
How many new short instalments aired before the compilation of The Vicar of Dibley in Lockdown in December 2020?|Three|Two|Four|Six|Medium|Dibley In Lockdown|2020 Episodes|Three Shorts|December Broadcasting|BBC One|Compilation Special|Episode Count
Which charity has been closely associated with several special Vicar of Dibley sketches?|Comic Relief|Children in Need|Macmillan Cancer Support|The Salvation Army|Easy|Comic Relief|Charity Sketches|Red Nose Day|2013 Special|2015 Special|2005 Special|British TV Fundraising
Which British comedy actor played Peter Clifford in the Ballykissangel crossover sketch?|Stephen Tompkinson|James Nesbitt|Martin Clunes|John Thomson|Hard|Ballykissdibley|Comic Relief 1997|Peter Clifford|Stephen Tompkinson|Ballykissangel|BBC Crossover|Guest Star
Which well-known film actor made a guest appearance in the Vicar of Dibley Comic Relief special Celebrity Party?|Johnny Depp|Hugh Grant|Colin Firth|Ewan McGregor|Hard|Celebrity Party|Comic Relief 1999|Johnny Depp|Film Star Cameo|Charity Special|Guest Appearance|Dibley Celebrity
What is the surname of Alice before she marries Hugo Horton?|Tinker|Cropley|Pickle|Newitt|Easy|Alice Tinker|Alice Horton|Maiden Surname|Hugo Horton|1998 Wedding|Family Name|Village Verger`;

const normalise = v => String(v).normalize('NFKC').trim().toLocaleLowerCase('en-GB');
const tagKey = v => normalise(v).replace(/[^\p{L}\p{N}]/gu, '');
function parseFacts(block, programme, era) {
  return block.trim().split('\n').map((line, index) => {
    const parts = line.split('|');
    if (parts.length !== 13) {
      throw new Error(`${programme} row ${index + 1}: expected 13 fields, got ${parts.length}`);
    }
    const [rawQuestion, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
    // Each question must make sense when served alone in a mixed television quiz.
    const question = rawQuestion.toLowerCase().includes(programme.toLowerCase())
      ? rawQuestion
      : 'In ' + programme + ', ' + rawQuestion[0].toLowerCase() + rawQuestion.slice(1);
    const answers = [wrong1, wrong2, wrong3];
    answers.splice((questions.length + index) % 4, 0, correctAnswer);
    return {
      id: 'tv_' + String(FIRST_ID + questions.length + index).padStart(4, '0'),
      category: 'Television',
      question,
      answers,
      correctAnswer,
      difficulty,
      programme,
      tags: [...new Map([
        'Television', 'British Television', 'British Sitcom', 'Comedy', 'Sitcom',
        programme, 'Programme: ' + programme, era,
        programme === 'Bless This House' ? 'ITV' : 'BBC One',
        'Television comedy series', correctAnswer, ...specificTags
      ].map(tag => [tagKey(tag), tag])).values()],
      dailyEligible: true
    };
  });
}

const questions = [];
questions.push(...parseFacts(blessFacts, 'Bless This House', '1970s Television'));
questions.push(...parseFacts(dibleyFacts, 'The Vicar of Dibley', '1990s-2020s Television'));

// Fail loudly if a row ever becomes malformed during editing.
const seenQuestions = new Set();
for (const q of questions) {
  const key = q.question.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (seenQuestions.has(key)) throw new Error('Duplicate question: ' + q.question);
  seenQuestions.add(key);
  if (q.answers.length !== 4 || new Set(q.answers.map(x => x.toLowerCase())).size !== 4 ||
      !q.answers.includes(q.correctAnswer)) throw new Error('Invalid answers: ' + q.id);
  if (!['Easy', 'Medium', 'Hard'].includes(q.difficulty)) throw new Error('Bad difficulty: ' + q.id);
  if (q.tags.length < 10) throw new Error('Insufficient tags: ' + q.id);
}

// Pack 373 TV audit: preserve all 135 original IDs, restore programme metadata,
// correct Elton John mistaken-identity and Dibley church-anniversary wording.
// Episode research: https://en.wikipedia.org/wiki/List_of_Bless_This_House_episodes
// https://en.wikipedia.org/wiki/List_of_The_Vicar_of_Dibley_episodes
// https://www.comedy.co.uk/tv/the_vicar_of_dibley/episodes/
const auditAdditions = [
  {
    "id": "tv_39941",
    "category": "Television",
    "programme": "Bless This House",
    "question": "Why were the first seven Bless This House episodes shown in black and white?",
    "answers": [
      "The studio had no colour cameras",
      "The scripts specified monochrome filming",
      "They were commissioned for radio",
      "An ITV colour technicians' strike"
    ],
    "correctAnswer": "An ITV colour technicians' strike",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Colour history",
      "Plot: Early ITV colour strike",
      "Answer: An ITV colour technicians' strike",
      "Storyline: Early ITV colour strike",
      "Incident: Early ITV colour strike",
      "Episode context: Colour history",
      "Subject: Early ITV colour strike"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39942",
    "category": "Television",
    "programme": "Bless This House",
    "question": "Which Bless This House episode was the first to be broadcast in colour?",
    "answers": [
      "The Day of Rest",
      "The Generation Gap",
      "Mum's the Word",
      "A Woman's Place"
    ],
    "correctAnswer": "The Day of Rest",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 1 The Day of Rest",
      "Plot: First colour episode",
      "Answer: The Day of Rest",
      "Storyline: First colour episode",
      "Incident: First colour episode",
      "Episode context: Series 1 The Day of Rest",
      "Subject: First colour episode"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39943",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's Be It Ever So Humble, what does Sally decide after Mike announces he is leaving home?",
    "answers": [
      "She will join the Army",
      "She will leave home too",
      "She will start a business with Trevor",
      "She will train as a nurse"
    ],
    "correctAnswer": "She will leave home too",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 1 Be It Ever So Humble",
      "Plot: Sally also moves out",
      "Answer: She will leave home too",
      "Storyline: Sally also moves out",
      "Incident: Sally also moves out",
      "Episode context: Series 1 Be It Ever So Humble",
      "Subject: Sally also moves out"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39944",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's For Whom the Bells Toll, what moral question starts an Abbott family debate over dinner?",
    "answers": [
      "Whether betting should be banned",
      "Whether teenagers should vote",
      "Whether people should eat meat",
      "Whether pubs should open on Sunday"
    ],
    "correctAnswer": "Whether people should eat meat",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 1 For Whom the Bells Toll",
      "Plot: Meat eating debate",
      "Answer: Whether people should eat meat",
      "Storyline: Meat eating debate",
      "Incident: Meat eating debate",
      "Episode context: Series 1 For Whom the Bells Toll",
      "Subject: Meat eating debate"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39945",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's A Woman's Place, whom does Jean hire while she is working outside the home?",
    "answers": [
      "A cook",
      "A live-in nanny",
      "A gardener",
      "A cleaner"
    ],
    "correctAnswer": "A cleaner",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 1 A Womans Place",
      "Plot: Jean hires cleaner",
      "Answer: A cleaner",
      "Storyline: Jean hires cleaner",
      "Incident: Jean hires cleaner",
      "Episode context: Series 1 A Womans Place",
      "Subject: Jean hires cleaner"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39946",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's The Day of Rest, which plumbing problem ruins Sid's plans for a relaxing Sunday?",
    "answers": [
      "A blocked sink",
      "A burst water main",
      "A broken shower",
      "A leaking radiator"
    ],
    "correctAnswer": "A blocked sink",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 1 The Day of Rest",
      "Plot: Blocked kitchen sink",
      "Answer: A blocked sink",
      "Storyline: Blocked kitchen sink",
      "Incident: Blocked kitchen sink",
      "Episode context: Series 1 The Day of Rest",
      "Subject: Blocked kitchen sink"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39947",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's Make Love...Not War!, which neighbour moves into the Abbott house after a row with his wife?",
    "answers": [
      "Ronald Baines",
      "Trevor Lewis",
      "Sid's employer",
      "Jean's father"
    ],
    "correctAnswer": "Trevor Lewis",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 1 Make Love Not War",
      "Plot: Trevor row with Betty",
      "Answer: Trevor Lewis",
      "Storyline: Trevor row with Betty",
      "Incident: Trevor row with Betty",
      "Episode context: Series 1 Make Love Not War",
      "Subject: Trevor row with Betty"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39948",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House, what is the name of the mongrel Sally brings home in If the Dog Collar Fits...Wear It!?",
    "answers": [
      "Mongy",
      "Vienna",
      "Fred",
      "Monty"
    ],
    "correctAnswer": "Fred",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 1 Dog Collar",
      "Plot: Dog named Fred",
      "Answer: Fred",
      "Storyline: Dog named Fred",
      "Incident: Dog named Fred",
      "Episode context: Series 1 Dog Collar",
      "Subject: Dog named Fred"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39949",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's The Morning After the Night Before, what does Mike advertise for sale to raise money?",
    "answers": [
      "His football boots",
      "His music collection",
      "His father's car",
      "His sculptures"
    ],
    "correctAnswer": "His sculptures",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 1 Morning After",
      "Plot: Mike sells sculpture",
      "Answer: His sculptures",
      "Storyline: Mike sells sculpture",
      "Incident: Mike sells sculpture",
      "Episode context: Series 1 Morning After",
      "Subject: Mike sells sculpture"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39950",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's Two Heads Are Better Than One, what is Mike hoping his sculpture will win?",
    "answers": [
      "An art competition",
      "A television quiz",
      "A village raffle",
      "A local auction"
    ],
    "correctAnswer": "An art competition",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 2 Two Heads",
      "Plot: Mike art competition",
      "Answer: An art competition",
      "Storyline: Mike art competition",
      "Incident: Mike art competition",
      "Episode context: Series 2 Two Heads",
      "Subject: Mike art competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39951",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House, what is the first name of Sally's new fiancé in Parents Should Be Seen and Not Heard?",
    "answers": [
      "Dominic",
      "Geoffrey",
      "Henri",
      "Graham"
    ],
    "correctAnswer": "Geoffrey",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 2 Parents Seen",
      "Plot: Sally fiancé Geoffrey",
      "Answer: Geoffrey",
      "Storyline: Sally fiancé Geoffrey",
      "Incident: Sally fiancé Geoffrey",
      "Episode context: Series 2 Parents Seen",
      "Subject: Sally fiancé Geoffrey"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39952",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House, which wartime naval service did Jean Abbott belong to when she met Sid?",
    "answers": [
      "The Royal Marines",
      "The merchant navy",
      "The WRNS",
      "The Royal Naval Reserve as an officer"
    ],
    "correctAnswer": "The WRNS",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 2 Strangers Night",
      "Plot: Jean served as WREN",
      "Answer: The WRNS",
      "Storyline: Jean served as WREN",
      "Incident: Jean served as WREN",
      "Episode context: Series 2 Strangers Night",
      "Subject: Jean served as WREN"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39953",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's Wives and Lovers, how does Jean test whether Sid would flirt with another woman?",
    "answers": [
      "She hires a private detective",
      "She gets a friend to follow him",
      "She reads his work diary",
      "She pretends to be an admirer"
    ],
    "correctAnswer": "She pretends to be an admirer",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 2 Wives Lovers",
      "Plot: Jean poses as admirer",
      "Answer: She pretends to be an admirer",
      "Storyline: Jean poses as admirer",
      "Incident: Jean poses as admirer",
      "Episode context: Series 2 Wives Lovers",
      "Subject: Jean poses as admirer"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39954",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's Never Again on Sunday!, what outing ends with the Abbotts getting lost?",
    "answers": [
      "A picnic",
      "A fishing trip",
      "A theatre visit",
      "A football match"
    ],
    "correctAnswer": "A picnic",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 2 Never Again Sunday",
      "Plot: Abbotts lost on picnic",
      "Answer: A picnic",
      "Storyline: Abbotts lost on picnic",
      "Incident: Abbotts lost on picnic",
      "Episode context: Series 2 Never Again Sunday",
      "Subject: Abbotts lost on picnic"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39955",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's People in Glass Houses, whose twentieth birthday prompts a party that Sid and Jean are not invited to?",
    "answers": [
      "Sally's",
      "Mike's",
      "Trevor's",
      "Betty's"
    ],
    "correctAnswer": "Mike's",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 2 People Glass Houses",
      "Plot: Mike twentieth birthday",
      "Answer: Mike's",
      "Storyline: Mike twentieth birthday",
      "Incident: Mike twentieth birthday",
      "Episode context: Series 2 People Glass Houses",
      "Subject: Mike twentieth birthday"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39956",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's A Rolls by Any Other Name, which issue are Mike and Sally campaigning about?",
    "answers": [
      "A proposed motorway toll",
      "Petrol rationing",
      "Pollution caused by cars",
      "The price of bus fares"
    ],
    "correctAnswer": "Pollution caused by cars",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 2 Rolls Royce",
      "Plot: Car pollution protest",
      "Answer: Pollution caused by cars",
      "Storyline: Car pollution protest",
      "Incident: Car pollution protest",
      "Episode context: Series 2 Rolls Royce",
      "Subject: Car pollution protest"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39957",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's To Tell or Not to Tell, which neighbour does Jean suspect is having an affair?",
    "answers": [
      "Sally Abbott",
      "Jean's cousin",
      "Vera Baines",
      "Betty Lewis"
    ],
    "correctAnswer": "Betty Lewis",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 3 To Tell or Not",
      "Plot: Jean suspects Betty",
      "Answer: Betty Lewis",
      "Storyline: Jean suspects Betty",
      "Incident: Jean suspects Betty",
      "Episode context: Series 3 To Tell or Not",
      "Subject: Jean suspects Betty"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39958",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's The Loneliness of the Short Distance Walker, what sport does Mike take up for a hospital fundraiser?",
    "answers": [
      "Running",
      "Swimming",
      "Cycling",
      "Rowing"
    ],
    "correctAnswer": "Running",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 3 Walker",
      "Plot: Mike charity run",
      "Answer: Running",
      "Storyline: Mike charity run",
      "Incident: Mike charity run",
      "Episode context: Series 3 Walker",
      "Subject: Mike charity run"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39959",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's Atishoo! Atishoo! We All Fall Down, what illness leaves Sid managing a household of sick relatives?",
    "answers": [
      "Measles",
      "Influenza",
      "Food poisoning",
      "Chickenpox"
    ],
    "correctAnswer": "Influenza",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 3 Atishoo",
      "Plot: Abbott family influenza",
      "Answer: Influenza",
      "Storyline: Abbott family influenza",
      "Incident: Abbott family influenza",
      "Episode context: Series 3 Atishoo",
      "Subject: Abbott family influenza"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39960",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's Will the Real Sid Abbott Please Stand Up, what creates trouble for Sid's reputation?",
    "answers": [
      "A newspaper report of a bank robbery",
      "A mistaken identity at a wedding",
      "A womanising lookalike",
      "An old schoolfriend's prank"
    ],
    "correctAnswer": "A womanising lookalike",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 3 Real Sid",
      "Plot: Sid has lookalike",
      "Answer: A womanising lookalike",
      "Storyline: Sid has lookalike",
      "Incident: Sid has lookalike",
      "Episode context: Series 3 Real Sid",
      "Subject: Sid has lookalike"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39961",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's The First 25 Years Are the Worst, what is wrong with the anniversary party invitations?",
    "answers": [
      "They list the wrong venue",
      "They name the wrong couple",
      "They have been posted without stamps",
      "They give the wrong date"
    ],
    "correctAnswer": "They give the wrong date",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 4 First 25 Years",
      "Plot: Anniversary wrong date",
      "Answer: They give the wrong date",
      "Storyline: Anniversary wrong date",
      "Incident: Anniversary wrong date",
      "Episode context: Series 4 First 25 Years",
      "Subject: Anniversary wrong date"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39962",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's The Gipsy's Warning, which hobby does Jean try to stop Sid pursuing after a prediction involving water?",
    "answers": [
      "Fishing",
      "Swimming",
      "Sailing",
      "Water skiing"
    ],
    "correctAnswer": "Fishing",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 5 Gypsy Warning",
      "Plot: Jean stops fishing",
      "Answer: Fishing",
      "Storyline: Jean stops fishing",
      "Incident: Jean stops fishing",
      "Episode context: Series 5 Gypsy Warning",
      "Subject: Jean stops fishing"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39963",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's The Biggest Woodworm in the World, which item of furniture worries Jean and Sally?",
    "answers": [
      "A wardrobe",
      "A chair",
      "A desk",
      "A bed frame"
    ],
    "correctAnswer": "A chair",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 5 Woodworm",
      "Plot: Chair suspected woodworm",
      "Answer: A chair",
      "Storyline: Chair suspected woodworm",
      "Incident: Chair suspected woodworm",
      "Episode context: Series 5 Woodworm",
      "Subject: Chair suspected woodworm"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39964",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's Freedom Is, what is the name of the tramp Mike and Sally invite to stay?",
    "answers": [
      "Geoffrey",
      "Dominic",
      "Wally",
      "Henri"
    ],
    "correctAnswer": "Wally",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 5 Freedom Is",
      "Plot: Tramp Wally visits",
      "Answer: Wally",
      "Storyline: Tramp Wally visits",
      "Incident: Tramp Wally visits",
      "Episode context: Series 5 Freedom Is",
      "Subject: Tramp Wally visits"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39965",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's Fish with Everything, which pets absorb Sid's attention?",
    "answers": [
      "Budgerigars",
      "Guinea pigs",
      "Tortoises",
      "Tropical fish"
    ],
    "correctAnswer": "Tropical fish",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 6 Fish Everything",
      "Plot: Sid tropical fish",
      "Answer: Tropical fish",
      "Storyline: Sid tropical fish",
      "Incident: Sid tropical fish",
      "Episode context: Series 6 Fish Everything",
      "Subject: Sid tropical fish"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39966",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's The Naked Paperhanger, which word causes confusion because it can mean two different occupations?",
    "answers": [
      "Stripper",
      "Painter",
      "Model",
      "Driver"
    ],
    "correctAnswer": "Stripper",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 6 Naked Paperhanger",
      "Plot: Different meanings stripper",
      "Answer: Stripper",
      "Storyline: Different meanings stripper",
      "Incident: Different meanings stripper",
      "Episode context: Series 6 Naked Paperhanger",
      "Subject: Different meanings stripper"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39967",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's Something of Value, what item must Sid find to claim an inheritance from Uncle Percy?",
    "answers": [
      "A missing war medal",
      "An old photograph",
      "A handwritten recipe",
      "A theatre ticket"
    ],
    "correctAnswer": "An old photograph",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 6 Something of Value",
      "Plot: Uncle Percy old photograph",
      "Answer: An old photograph",
      "Storyline: Uncle Percy old photograph",
      "Incident: Uncle Percy old photograph",
      "Episode context: Series 6 Something of Value",
      "Subject: Uncle Percy old photograph"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39968",
    "category": "Television",
    "programme": "Bless This House",
    "question": "In Bless This House's Skin Deep, to which city does Sid travel with his new secretary?",
    "answers": [
      "Manchester",
      "Leeds",
      "Birmingham",
      "Cardiff"
    ],
    "correctAnswer": "Birmingham",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "Bless This House",
      "Programme: Bless This House",
      "ITV",
      "1971-1976",
      "Episode: Series 6 Skin Deep",
      "Plot: Sid Birmingham secretary",
      "Answer: Birmingham",
      "Storyline: Sid Birmingham secretary",
      "Incident: Sid Birmingham secretary",
      "Episode context: Series 6 Skin Deep",
      "Subject: Sid Birmingham secretary"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39969",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's opening episode, how old is the deceased Reverend Pottle?",
    "answers": [
      "92",
      "88",
      "110",
      "102"
    ],
    "correctAnswer": "102",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: Series 1 Arrival",
      "Plot: Former vicar Reverend Pottle age",
      "Answer: 102",
      "Storyline: Former vicar Reverend Pottle age",
      "Incident: Former vicar Reverend Pottle age",
      "Episode context: Series 1 Arrival",
      "Subject: Former vicar Reverend Pottle age"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39970",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "Which actor plays Tristan Campbell, the Songs of Praise producer in The Vicar of Dibley?",
    "answers": [
      "Peter Capaldi",
      "Richard Armitage",
      "Hugh Bonneville",
      "Clive Mantle"
    ],
    "correctAnswer": "Peter Capaldi",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: Series 1 Songs Praise",
      "Plot: Peter Capaldi Tristan",
      "Answer: Peter Capaldi",
      "Storyline: Peter Capaldi Tristan",
      "Incident: Peter Capaldi Tristan",
      "Episode context: Series 1 Songs Praise",
      "Subject: Peter Capaldi Tristan"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39971",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's Songs of Praise, who attracts David Horton's romantic interest?",
    "answers": [
      "Pam Rhodes",
      "Ruth the camera operator",
      "Alice Tinker",
      "The producer's assistant"
    ],
    "correctAnswer": "Ruth the camera operator",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: Series 1 Songs Praise",
      "Plot: David fancies Ruth",
      "Answer: Ruth the camera operator",
      "Storyline: David fancies Ruth",
      "Incident: David fancies Ruth",
      "Episode context: Series 1 Songs Praise",
      "Subject: David fancies Ruth"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39972",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "Which singer appears as herself at the fête in The Vicar of Dibley's Community Spirit?",
    "answers": [
      "Annie Lennox",
      "Madonna",
      "Kylie Minogue",
      "Celine Dion"
    ],
    "correctAnswer": "Kylie Minogue",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: Series 1 Community Spirit",
      "Plot: Kylie Minogue village fête",
      "Answer: Kylie Minogue",
      "Storyline: Kylie Minogue village fête",
      "Incident: Kylie Minogue village fête",
      "Episode context: Series 1 Community Spirit",
      "Subject: Kylie Minogue village fête"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39973",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's Community Spirit, how much money did the village fête raise the previous year?",
    "answers": [
      "£27",
      "£2,700",
      "£1,270",
      "£270"
    ],
    "correctAnswer": "£270",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: Series 1 Community Spirit",
      "Plot: Fete raised 270 pounds",
      "Answer: £270",
      "Storyline: Fete raised 270 pounds",
      "Incident: Fete raised 270 pounds",
      "Episode context: Series 1 Community Spirit",
      "Subject: Fete raised 270 pounds"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39974",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's The Window and the Weather, what is the estimated cost to replace the stained-glass church window?",
    "answers": [
      "£11,000",
      "£1,100",
      "£110",
      "£110,000"
    ],
    "correctAnswer": "£11,000",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: Series 1 Window Weather",
      "Plot: Church window eleven thousand",
      "Answer: £11,000",
      "Storyline: Church window eleven thousand",
      "Incident: Church window eleven thousand",
      "Episode context: Series 1 Window Weather",
      "Subject: Church window eleven thousand"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39975",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's The Window and the Weather, whom does Geraldine approach to fund the church window?",
    "answers": [
      "Tristan Campbell",
      "Daniel Frobisher",
      "Harry Kennedy",
      "Jeremy Ogilvy"
    ],
    "correctAnswer": "Daniel Frobisher",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: Series 1 Window Weather",
      "Plot: Wealthy Daniel Frobisher",
      "Answer: Daniel Frobisher",
      "Storyline: Wealthy Daniel Frobisher",
      "Incident: Wealthy Daniel Frobisher",
      "Episode context: Series 1 Window Weather",
      "Subject: Wealthy Daniel Frobisher"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39976",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's Election, why does Geraldine agree not to stand against David Horton?",
    "answers": [
      "He offers her a job at the council",
      "He resigns as churchwarden",
      "He promises to improve village affairs",
      "He offers to pay for her holiday"
    ],
    "correctAnswer": "He promises to improve village affairs",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: Series 1 Election",
      "Plot: David promises election concessions",
      "Answer: He promises to improve village affairs",
      "Storyline: David promises election concessions",
      "Incident: David promises election concessions",
      "Episode context: Series 1 Election",
      "Subject: David promises election concessions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39977",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's Animals, what event prompts Geraldine to organise a special service for pets?",
    "answers": [
      "The arrival of a new puppy",
      "An escaped cow",
      "A veterinary inspection",
      "The death of a pet bird"
    ],
    "correctAnswer": "The death of a pet bird",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: Series 1 Animals",
      "Plot: Pet bird funeral",
      "Answer: The death of a pet bird",
      "Storyline: Pet bird funeral",
      "Incident: Pet bird funeral",
      "Episode context: Series 1 Animals",
      "Subject: Pet bird funeral"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39978",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's The Easter Bunny, what does Geraldine give up for Lent?",
    "answers": [
      "Chocolate",
      "Tea",
      "Television",
      "Coffee"
    ],
    "correctAnswer": "Chocolate",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 1996 Easter Bunny",
      "Plot: Geraldine gives up chocolate",
      "Answer: Chocolate",
      "Storyline: Geraldine gives up chocolate",
      "Incident: Geraldine gives up chocolate",
      "Episode context: 1996 Easter Bunny",
      "Subject: Geraldine gives up chocolate"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39979",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's Easter Bunny, what does David Horton promise to stop doing for Lent?",
    "answers": [
      "Driving",
      "Being unpleasant",
      "Attending parish meetings",
      "Working"
    ],
    "correctAnswer": "Being unpleasant",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 1996 Easter Bunny",
      "Plot: David gives up unpleasantness",
      "Answer: Being unpleasant",
      "Storyline: David gives up unpleasantness",
      "Incident: David gives up unpleasantness",
      "Episode context: 1996 Easter Bunny",
      "Subject: David gives up unpleasantness"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39980",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's The Christmas Lunch Incident, what does TV producer Tristan Campbell ask Geraldine to do?",
    "answers": [
      "Become his wife",
      "Host a television series",
      "Conduct his wedding",
      "Move to London"
    ],
    "correctAnswer": "Conduct his wedding",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 1996 Christmas Lunch",
      "Plot: Tristan needs vicar to conduct wedding",
      "Answer: Conduct his wedding",
      "Storyline: Tristan needs vicar to conduct wedding",
      "Incident: Tristan needs vicar to conduct wedding",
      "Episode context: 1996 Christmas Lunch",
      "Subject: Tristan needs vicar to conduct wedding"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39981",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's Engagement, who proposes after Geraldine gives him a sympathetic kiss?",
    "answers": [
      "David Horton",
      "Frank Pickle",
      "Jim Trott",
      "Owen Newitt"
    ],
    "correctAnswer": "Owen Newitt",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 1997 Engagement",
      "Plot: Owen proposes after pity kiss",
      "Answer: Owen Newitt",
      "Storyline: Owen proposes after pity kiss",
      "Incident: Owen proposes after pity kiss",
      "Episode context: 1997 Engagement",
      "Subject: Owen proposes after pity kiss"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39982",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's Dibley Live, who is the only listener to Frank Pickle's personal revelation?",
    "answers": [
      "Geraldine",
      "Alice",
      "David",
      "Hugo"
    ],
    "correctAnswer": "Geraldine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 1998 Dibley Live",
      "Plot: Geraldine only listener to Frank",
      "Answer: Geraldine",
      "Storyline: Geraldine only listener to Frank",
      "Incident: Geraldine only listener to Frank",
      "Episode context: 1998 Dibley Live",
      "Subject: Geraldine only listener to Frank"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39983",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's Celebrity Vicar, which BBC radio feature brings Geraldine unexpected fame?",
    "answers": [
      "Desert Island Discs",
      "Pause for Thought",
      "Woman's Hour",
      "The Archers"
    ],
    "correctAnswer": "Pause for Thought",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 1998 Celebrity Vicar",
      "Plot: Geraldine Pause for Thought",
      "Answer: Pause for Thought",
      "Storyline: Geraldine Pause for Thought",
      "Incident: Geraldine Pause for Thought",
      "Episode context: 1998 Celebrity Vicar",
      "Subject: Geraldine Pause for Thought"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39984",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "Which ballerina meets Geraldine during her radio visit in The Vicar of Dibley's Celebrity Vicar?",
    "answers": [
      "Margot Fonteyn",
      "Sylvie Guillem",
      "Darcey Bussell",
      "Tamara Rojo"
    ],
    "correctAnswer": "Darcey Bussell",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 1998 Celebrity Vicar",
      "Plot: Darcey Bussell cameo",
      "Answer: Darcey Bussell",
      "Storyline: Darcey Bussell cameo",
      "Incident: Darcey Bussell cameo",
      "Episode context: 1998 Celebrity Vicar",
      "Subject: Darcey Bussell cameo"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39985",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's Love and Marriage, which children's television characters feature among the wedding attendants?",
    "answers": [
      "The Clangers",
      "The Wombles",
      "The Flower Pot Men",
      "The Teletubbies"
    ],
    "correctAnswer": "The Teletubbies",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 1998 Love and Marriage",
      "Plot: Teletubbies Alice Hugo wedding",
      "Answer: The Teletubbies",
      "Storyline: Teletubbies Alice Hugo wedding",
      "Incident: Teletubbies Alice Hugo wedding",
      "Episode context: 1998 Love and Marriage",
      "Subject: Teletubbies Alice Hugo wedding"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39986",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's Winter, where is the Nativity play staged?",
    "answers": [
      "Owen's farm",
      "David's garden",
      "The vicarage",
      "The village hall"
    ],
    "correctAnswer": "Owen's farm",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 1999 Winter",
      "Plot: Nativity on Owen farm",
      "Answer: Owen's farm",
      "Storyline: Nativity on Owen farm",
      "Incident: Nativity on Owen farm",
      "Episode context: 1999 Winter",
      "Subject: Nativity on Owen farm"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39987",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's Winter, what happens to Alice while she is playing Mary in the Nativity?",
    "answers": [
      "She is taken ill with flu",
      "She gives birth",
      "She loses her voice",
      "She finds a lost lamb"
    ],
    "correctAnswer": "She gives birth",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 1999 Winter",
      "Plot: Alice gives birth during Nativity",
      "Answer: She gives birth",
      "Storyline: Alice gives birth during Nativity",
      "Incident: Alice gives birth during Nativity",
      "Episode context: 1999 Winter",
      "Subject: Alice gives birth during Nativity"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39988",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's Winter, what is Alice and Hugo's newborn daughter named after the vicar?",
    "answers": [
      "Ruth",
      "Letitia",
      "Geraldine",
      "Rosie"
    ],
    "correctAnswer": "Geraldine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 1999 Winter",
      "Plot: Baby named Geraldine",
      "Answer: Geraldine",
      "Storyline: Baby named Geraldine",
      "Incident: Baby named Geraldine",
      "Episode context: 1999 Winter",
      "Subject: Baby named Geraldine"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39989",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's Spring, who makes a surprise marriage proposal to Geraldine?",
    "answers": [
      "Owen Newitt",
      "Simon Horton",
      "Frank Pickle",
      "David Horton"
    ],
    "correctAnswer": "David Horton",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 1999 Spring",
      "Plot: David proposes to vicar",
      "Answer: David Horton",
      "Storyline: David proposes to vicar",
      "Incident: David proposes to vicar",
      "Episode context: 1999 Spring",
      "Subject: David proposes to vicar"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39990",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's Spring, which actor appears in Geraldine's romantic dream as himself?",
    "answers": [
      "Sean Bean",
      "Hugh Grant",
      "Richard Armitage",
      "Colin Firth"
    ],
    "correctAnswer": "Sean Bean",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 1999 Spring",
      "Plot: Sean Bean dream cameo",
      "Answer: Sean Bean",
      "Storyline: Sean Bean dream cameo",
      "Incident: Sean Bean dream cameo",
      "Episode context: 1999 Spring",
      "Subject: Sean Bean dream cameo"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39991",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's Summer, what building does Geraldine chain herself to in protest against a reservoir?",
    "answers": [
      "The village hall",
      "The church",
      "The vicarage",
      "David's house"
    ],
    "correctAnswer": "The church",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 2000 Summer",
      "Plot: Geraldine chained to church",
      "Answer: The church",
      "Storyline: Geraldine chained to church",
      "Incident: Geraldine chained to church",
      "Episode context: 2000 Summer",
      "Subject: Geraldine chained to church"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39992",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's Merry Christmas, what type of contest do parishioners hold?",
    "answers": [
      "Baking a cake",
      "Decorating windows",
      "Writing a Christmas carol",
      "Designing festive costumes"
    ],
    "correctAnswer": "Writing a Christmas carol",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 2004 Merry Christmas",
      "Plot: Village carol contest",
      "Answer: Writing a Christmas carol",
      "Storyline: Village carol contest",
      "Incident: Village carol contest",
      "Episode context: 2004 Merry Christmas",
      "Subject: Village carol contest"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39993",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's Happy New Year, which anti-poverty campaign does Geraldine ask the villagers to support?",
    "answers": [
      "Band Aid",
      "Children in Need",
      "Red Nose Day",
      "Make Poverty History"
    ],
    "correctAnswer": "Make Poverty History",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 2005 Happy New Year",
      "Plot: Geraldine poverty campaign",
      "Answer: Make Poverty History",
      "Storyline: Geraldine poverty campaign",
      "Incident: Geraldine poverty campaign",
      "Episode context: 2005 Happy New Year",
      "Subject: Geraldine poverty campaign"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39994",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's The Handsome Stranger, how is Rosie related to Harry Kennedy?",
    "answers": [
      "She is his sister",
      "She is his wife",
      "She is his daughter",
      "She is his cousin"
    ],
    "correctAnswer": "She is his sister",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 2006 Handsome Stranger",
      "Plot: Harry sister Rosie",
      "Answer: She is his sister",
      "Storyline: Harry sister Rosie",
      "Incident: Harry sister Rosie",
      "Episode context: 2006 Handsome Stranger",
      "Subject: Harry sister Rosie"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39995",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's The Vicar in White, whose This Is Your Life-style tribute to Geraldine goes badly?",
    "answers": [
      "David's",
      "Hugo's",
      "Owen's",
      "Jim's"
    ],
    "correctAnswer": "Hugo's",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 2007 Vicar in White",
      "Plot: Hugo failed tribute",
      "Answer: Hugo's",
      "Storyline: Hugo failed tribute",
      "Incident: Hugo failed tribute",
      "Episode context: 2007 Vicar in White",
      "Subject: Hugo failed tribute"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39996",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's The Vicar in White, what does Geraldine wear at her wedding after a muddy accident?",
    "answers": [
      "A cassock",
      "A red gown",
      "Pyjamas",
      "A trouser suit"
    ],
    "correctAnswer": "Pyjamas",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 2007 Vicar in White",
      "Plot: Geraldine wedding pyjamas",
      "Answer: Pyjamas",
      "Storyline: Geraldine wedding pyjamas",
      "Incident: Geraldine wedding pyjamas",
      "Episode context: 2007 Vicar in White",
      "Subject: Geraldine wedding pyjamas"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39997",
    "category": "Television",
    "programme": "The Vicar of Dibley",
    "question": "In The Vicar of Dibley's The Vicar in White, which science-fiction TV character does Alice dress as at the wedding?",
    "answers": [
      "Davros",
      "A Cyberman",
      "A Dalek",
      "The Tenth Doctor"
    ],
    "correctAnswer": "The Tenth Doctor",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "Sitcom",
      "The Vicar of Dibley",
      "Programme: The Vicar of Dibley",
      "BBC One",
      "1994-2020",
      "Episode: 2007 Vicar in White",
      "Plot: Alice dresses as Doctor Who",
      "Answer: The Tenth Doctor",
      "Storyline: Alice dresses as Doctor Who",
      "Incident: Alice dresses as Doctor Who",
      "Episode context: 2007 Vicar in White",
      "Subject: Alice dresses as Doctor Who"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
const fullKey = v => String(v).normalize('NFKC').toLocaleLowerCase('en-GB').replace(/[^\p{L}\p{N}]/gu, '');
const auditIds = new Set(); const auditQuestions = new Set();
for (const q of questions) {
 if (q.category !== 'Television' || !q.programme ||
    q.answers.length !== 4 || new Set(q.answers.map(fullKey)).size !== 4 ||
    q.answers.filter(a=>a===q.correctAnswer).length !== 1 ||
    q.tags.length < 14 || new Set(q.tags.map(fullKey)).size !== q.tags.length ||
    !q.tags.includes('Programme: '+q.programme) || q.dailyEligible !== true ||
    auditIds.has(q.id) || auditQuestions.has(fullKey(q.question)))
    throw Error('Pack 373 audit invalid at '+q.id);
 auditIds.add(q.id); auditQuestions.add(fullKey(q.question));
}
module.exports = questions;

