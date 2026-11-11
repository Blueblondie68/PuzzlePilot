

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
In Community Spirit, which pop star is Alice's cousin Reg Dwight?|Elton John|Rod Stewart|Cliff Richard|Mick Jagger|Medium|Community Spirit|Reg Dwight|Elton John|Alice Tinker|Autumn Fayre|Celebrity Guest|Birth Name
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
How many years since the village's founding does Dibley Live celebrate?|650|500|750|900|Hard|Dibley Live|1998|Village Anniversary|Six Hundred And Fifty|Local History|Radio Station|Celebration
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
      tags: [...new Set(['Television', 'British Sitcom', programme, era, correctAnswer, ...specificTags])],
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
module.exports = questions;

