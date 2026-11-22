
  // quiz_pack364.js
  // PuzzlePilot — The Bigggggg Quiz
  // Television: Man About the House (1973–1976) / Robin's Nest (1977–1981).
  // Extended coverage of all six series of each ITV comedy, with no filler questions.
  // References: British Comedy Guide episode/cast guides, TheTVDB episode synopses,
  // and TVmaze programme guides. Seven bespoke question-specific tags per question.
  // Complete WordPad-ready CommonJS file. No external dependencies.

  const FIRST_ID = 18078;

  // question | correct answer | three wrong answers | difficulty | seven specific tags
  const manFacts = `Who played Robin Tripp in Man About the House?|Richard O'Sullivan|Doug Fisher|Brian Murphy|Norman Eshley|Easy|Lead Performer Richard O Sullivan|Robin Tripp|Male Flatmate|Principal Cast|Actor Role|London Flat|Series Lead
  Which actress played Chrissy Plummer?|Paula Wilcox|Sally Thomsett|Yootha Joyce|Tessa Wyatt|Easy|Paula Wilcox|Chrissy Plummer|Flatmate|Lead Actress|Household Cast|1970s ITV|Character Casting
  Who portrayed Robin and Chrissy's flatmate Jo?|Sally Thomsett|Paula Wilcox|Yootha Joyce|Jenny Hanley|Easy|Sally Thomsett|Jo Flatmate|Principal Actress|London Household|Three Tenants|Character Casting|Sitcom Cast
  Who played landlord George Roper?|Brian Murphy|Richard O'Sullivan|Doug Fisher|Roy Kinnear|Easy|Brian Murphy|George Roper|Landlord|Downstairs Neighbour|Husband Of Mildred|Actor Casting|Recurring Character
  Who played George's wife Mildred Roper?|Yootha Joyce|Paula Wilcox|Sally Thomsett|Daphne Oxenford|Easy|Yootha Joyce|Mildred Roper|George Wife|Landlord Couple|Supporting Lead|1970s Actress|Roper Household
  What is the name of Robin's womanising friend played by Doug Fisher?|Larry Simmonds|Norman Tripp|Jim|Ian Cross|Medium|Doug Fisher|Larry Simmonds|Robin Friend|Frequent Visitor|Dating Mishaps|Supporting Cast|Friend Character
  Which London area is home to the three main flatmates?|Earl's Court|Peckham|Tooting|Hampstead|Easy|West London District|London Setting|Shared Flat|Chrissy And Jo|Robin Tripp|Western London|Neighbourhood
  What is the street address of Robin's flat in Man About the House?|6 Myddleton Terrace|46 Peacock Crescent|14 Nelson Mandela House|15 Albert Square|Hard|Six Myddleton Terrace|Flat Address|Earls Court|London Property|Roper Landlords|Home Setting|Tenants
  Which broadcaster originally showed Man About the House?|ITV|BBC One|BBC Two|Channel 4|Easy|ITV|Original Broadcaster|Thames Television|Seventies Network|Comedy Programme|Broadcast History|First Transmission
  In which year did Man About the House begin?|1973|1970|1976|1981|Easy|1973 Premiere|August Launch|First Series|UK Television History|Sitcom Debut|Thames Television|Programme Era
  How many regular television series were made of Man About the House?|Six|Four|Five|Seven|Medium|Six Series|1973 To 1976|Programme Total|Production Run|Thames Comedy|Sitcom History|Original Series
  How many regular episodes aired, excluding the short 1973 Christmas insert?|39|40|36|48|Medium|Thirty Nine Episodes|Regular Episode Total|Six Series|Christmas Insert Excluded|1973 To 1976|ITV Archive|Broadcast Count
  Which company produced Man About the House?|Thames Television|Granada Television|Yorkshire Television|London Weekend Television|Medium|Thames Television|Production Company|ITV Contractor|Studio Credits|British Comedy|Seventies Sitcom|Programme Production
  Which pair created and wrote Man About the House?|Johnnie Mortimer and Brian Cooke|John Sullivan and Ray Butt|David Croft and Jimmy Perry|Richard Curtis and Ben Elton|Medium|Johnnie Mortimer|Brian Cooke|Writing Partners|Series Creators|Scripts|Thames Television|Comedy Writers
  Who directed and produced Man About the House?|Peter Frazer-Jones|Ray Butt|David Croft|Bob Spiers|Hard|Production Director Credit|Director|Producer|Sitcom Production|Thames Credits|Studio Programme|Production Team
  What kind of work is Robin studying for when he first joins the flat?|Catering|Architecture|Medicine|Journalism|Easy|Robin Tripp|Catering Student|Aspiring Chef|Flatsharing Premise|London Studies|Career Goal|Food Training
  Why do Chrissy and Jo accept Robin as a flatmate?|They need another rent-paying tenant|He is their landlord's son|He has inherited the property|He is married to Jo|Easy|Chrissy And Jo|Third Tenant|Sharing Rent|Mixed Household|First Episode|New Arrival|Accommodation Costs
  Which US sitcom was adapted from Man About the House?|Three's Company|Happy Days|The Golden Girls|Taxi|Medium|American Three Roommates|American Adaptation|US Sitcom|Transatlantic Remake|Original British Show|1977 Television|Programme Legacy
  Which follow-up sitcom continues the story of Robin Tripp?|Robin's Nest|Duty Free|Dear John|The Liver Birds|Easy|Sequel Restaurant Sitcom|Robin Tripp|Richard O Sullivan|Sequel Series|Restaurant Venture|Related Sitcom|ITV Spin Off
  In Three's a Crowd, where do Chrissy and Jo find Robin after their party?|Asleep in the bath|On the kitchen floor|In the garden shed|Behind the sofa|Easy|Threes A Crowd|Robin In Bath|New Flatmate|Farewell Party|Series One Premiere|1973 Story|Unexpected Guest
  Who was the departing flatmate whose wedding leads to the opening party?|Eleanor|Susan|Liz|Angela|Medium|Eleanor|Newly Married Flatmate|Farewell Party|Series One Episode One|Tenant Vacancy|Chrissy And Jo|Opening Premise
  In And Mother Makes Four, whose visit makes Robin's presence awkward?|Chrissy's mother|Jo's brother|George's cousin|Larry's father|Easy|And Mother Makes Four|Mrs Plummer|Parental Visit|Robin Hidden|Series One|1973 Episode|Household Secret
  Which actress played Chrissy's mother in Man About the House?|Daphne Oxenford|Yootha Joyce|Tessa Wyatt|Sheila Fearn|Hard|Daphne Oxenford|Mrs Plummer|Chrissy Mother|Guest Actress|Parental Objection|Supporting Cast|Series One
  In Some Enchanted Evening, what does Robin prepare to help Jo impress her date?|A romantic dinner|A musical performance|A flower arrangement|A surprise party|Medium|Some Enchanted Evening|Robin Cooking|Jo Date|Romantic Meal|Series One|1973 Episode|Kitchen Skills
  Which recurring friend goes for a drink with Robin in And Then There Were Two?|Larry|Norman|George|Ian|Medium|And Then There Were Two|Larry Simmonds|Robin Tripp|Pub Outing|Series One|Flatmate Tension|1973 Plot
  In It's Only Money, how much missing rent money alarms the flatmates?|£80|£20|£150|£300|Medium|Its Only Money|Eighty Pounds|Missing Rent|Police Called|Series One|George Roper|1973 Episode
  In Man About the House's Match of the Day, which sport is Robin surprised to discover he has been recruited to play?|Rugby|Football|Cricket|Tennis|Easy|Match Of The Day|Unexpected Rugby Match|Robin Tripp|George Passes On A Cold|Series One|Sports Mixup|1973 Episode
  What animal must the tenants hide from George in No Children No Dogs?|A puppy|A kitten|A rabbit|A parrot|Easy|No Children No Dogs|Larry Puppy|No Pets Rule|George Roper|Series One|Secret Animal|Flat Regulations
  What gathering do the tenants host while the Ropers are away in While the Cat's Away?|A party|A formal dinner for investors|A wedding ceremony|A charity auction|Medium|While The Cats Away|Flat Party|Ropers Overnight Absence|Series Two Premiere|1974|Robin And Chrissy|Neighbour Trouble
  While the flat is being redecorated in Colour Me Yellow, where does Robin confront a much bigger man?|In a pub|At a railway station|In a supermarket|At the cinema|Medium|Colour Me Yellow|Pub Confrontation|Robin Tripp|Decorating Break|Series Two|1974|Show Of Courage
  What is unusual about Chrissy's boyfriend Ian in In Praise of Older Men?|He is married|He is a professional footballer|He is Robin's cousin|He is an airline pilot|Medium|In Praise Of Older Men|Ian Cross|Married Boyfriend|Chrissy Plummer|Mildred Knows Wife|Series Two|Romance Trouble
  Which anniversary is being marked in Did You Ever Meet Rommel?|The Ropers' twentieth wedding anniversary|Chrissy's thirtieth birthday|Jo's first work anniversary|Robin's parents' silver wedding|Medium|Did You Ever Meet Rommel|Twenty Years Married|George And Mildred|Anniversary Dinner|German Guest|Series Two|1974 Story
  In Two Foot Two Eyes of Blue, which task brings Robin and Chrissy together?|Babysitting|Painting a kitchen|Cleaning a pub|Collecting charity donations|Medium|Two Foot Two|Robin And Chrissy|Babysitting|Jo Double Booking|Series Two|Romantic Tension|1974 Episode
  After failing a qualification in Carry Me Back to Old Southampton, where does Robin consider returning?|Southampton|Birmingham|Cardiff|Brighton|Easy|Carry Me Back|Southampton|Failed Catering Diploma|Robin Family Home|Series Two Finale|Career Crisis|1974
  Which friend overstays on the sofa in Cuckoo in the Nest?|Larry Simmonds|Norman Tripp|Ian Cross|Jerry|Medium|Cuckoo In The Nest|Larry Staying Over|Sofa Sleeper|Chrissy Jo Robin|Series Three Premiere|Flatmate Friction|1974
  In Come Into My Parlour, who turns out to be Chrissy's old school friend?|Angie|Liz|Jo|Eleanor|Medium|Come Into My Parlour|Angie|Angela School Friend|Robin Date|Chrissy Plummer|Series Three|1974 Story
  Where does Chrissy ask Robin to accompany her in I Won't Dance Don't Ask Me?|Her works' formal dance|A football awards dinner|A family wedding in Scotland|A theatre audition|Medium|I Wont Dance|Works Formal|Chrissy And Robin|Slow Dance Lessons|Series Three|1974|Dance Partner
  What animal runs through Jo's bedroom in Of Mice and Women?|A mouse|A rat|A squirrel|A hamster|Easy|Of Mice And Women|Mouse In Bedroom|Jo Fright|Robin And Chrissy|Series Three|George Roper|1974 Episode
  What anonymous gifts worry Chrissy in Somebody Out There Likes Me?|Flowers and chocolates|Tickets and a watch|A scarf and perfume|A book and a handbag|Medium|Somebody Out There Likes Me|Anonymous Admirer|Flowers|Chocolates|Chrissy Plummer|Series Three|Mildred Roper
  Into what does George plan to divide the tenants' flat in We Shall Not Be Moved?|Six small living units|Two large family suites|A dance school|A medical surgery|Hard|We Shall Not Be Moved|Six Living Units|George Roper|Eviction Plan|Mildred Away|Series Three|Property Scheme
  What operation sends Robin into hospital in Three of a Kind?|Tonsil removal|Appendix removal|Knee surgery|A hernia repair|Medium|Three Of A Kind|Tonsil Operation|Robin Hospitalised|Chrissy Poker|Series Three Finale|1974|Flatmate Absence
  Which city do Robin and Chrissy attempt to reach in Home and Away?|Southampton|Bristol|Oxford|Brighton|Medium|Home And Away|Southampton Football|Ropers Car|Breakdown|Series Four|West Ham|Away Match
  Which item does George begin brewing at home in One for the Road?|Beer|Cider|Wine|Lemonade|Medium|One For The Road|Home Brewing|George Roper|Chrissy Driving Lessons|Series Four|1975|Hobby
  What problem makes George have the upstairs flat fumigated in All in the Game?|Suspected woodworm|A burst water pipe|A wasp nest|A gas leak|Medium|All In The Game|Woodworm Fear|Fumigation|Ropers Flat|Jerry|Series Four|1975 Episode
  What misleading habit of Larry's causes trouble for Robin in Never Give Your Real Name?|Using a false name when dating|Pretending to be a doctor|Lending Robin's car|Borrowing money from George|Medium|Never Give Your Real Name|Larry Simmonds|False Name|Girlfriend Pregnancy Scare|Robin Blamed|Series Four|Dating Trouble
  Why do Robin and Chrissy visit her family in The Tender Trap?|Her nephew's christening|Her grandmother's funeral|Her parents' anniversary|A university graduation|Medium|The Tender Trap|Nephew Christening|Sussex Trip|Chrissy Parents|Engagement Pressure|Series Four|Family Gathering
  What imaginary child's name has George used in a tax claim in My Son My Son?|Leslie|Norman|Tristram|Larry|Hard|My Son My Son|Leslie|Invented Son|Tax Relief|George Roper|Series Four Finale|1975 Fraud
  Which birthday present inspires Chrissy to film things in The Last Picture Show?|A cine camera|A record player|A typewriter|A portable television|Medium|Last Picture Show|Chrissy Birthday|Cine Camera|Film Making|Series Five Premiere|1975|New Hobby
  In Man About the House's Right Said George, which instrument does George sell to Robin?|Piano|Guitar|Harmonium|Violin|Easy|Right Said George|Ropers Piano|Sold By George|Robin Tripp|Series Five|Crane Accident|Georges Car
  What job does Robin consider in A Little Knowledge?|Door-to-door encyclopaedia salesman|Bus conductor|Estate agent|Hotel receptionist|Medium|A Little Knowledge|Encyclopaedia Sales|Door To Door Work|Robin Job Search|Chrissy Helps|Series Five|Money Shortage
  In Man About the House's How Does Your Garden Grow, which plant does Larry mistakenly think Chrissy has found?|Cannabis|Rosemary|Lavender|Basil|Medium|How Does Your Garden Grow|Mistaken Cannabis|Larry Simmonds|Flower Arranging|Series Five|Chrissy Plummer|Not Cannabis Reveal
  Whose concert tickets is Chrissy offering in Come Fly with Me?|Frank Sinatra's|Elton John's|David Bowie's|Tom Jones's|Medium|Come Fly With Me|Frank Sinatra Tickets|Chrissy Plummer|Budgie Sitting|Series Five Finale|Robin Tripp|1975 Music
  Who leaves the Roper home after George tries to stop a party in The Party's Over?|Mildred|Jo|Chrissy|Larry|Medium|The Partys Over|Mildred Leaves|Party Dispute|George Roper|Series Six Premiere|1976|Marriage Row
  How many tenants do Robin, Chrissy and Jo consider sharing the flat with in One More for the Pot?|A fourth tenant|A fifth tenant|Two couples|No extra tenant|Medium|One More For The Pot|Fourth Flatmate|Rent Increase|Lease Renewal|George Roper|Series Six|1976 Episode
  In Man About the House's The Generation Game, what event does Mildred ask George to attend with her?|A Floral Society dinner dance|A riverboat party|A seaside coach trip|An outdoor concert|Medium|The Generation Game|Floral Society|Dinner Dance|Mildred Roper|George Locks Bathroom|Series Six|Robin Escorts Mildred
  Which unused household gadget does George try to sell in The Sunshine Boys?|A sun-lamp|A food mixer|A vacuum cleaner|A record player|Medium|Sunshine Boys|Sun Lamp|George Savings|Mildred Property|Series Six|1976|Second Hand Sale
  Which relative of Robin's wins Chrissy's attention in Mum Always Liked You Best?|His brother Norman|His father|His cousin Larry|His uncle George|Medium|Mum Always Liked You Best|Norman Tripp|Robin Brother|Chrissy Attraction|Series Six|1976|Family Rivalry
  Which actor played Robin's brother Norman in the final series?|Norman Eshley|Doug Fisher|Roy Kinnear|Glynn Edwards|Hard|Norman Eshley|Norman Tripp|Robin Brother|Series Six Cast|Actor Role|Chrissy Romance|Recurring Guest
  Whose wedding is the centre of the final episode Another Bride Another Groom?|Chrissy and Norman's|Jo and Larry's|Robin and Chrissy's|George and Mildred's|Easy|Another Bride Another Groom|Chrissy Plummer|Norman Tripp|Final Episode|Wedding|Robin Jealousy|1976 Finale
  Which actor had earlier appeared as Ian Cross before playing Norman Tripp?|Norman Eshley|Richard O Sullivan|Doug Fisher|Roy Kinnear|Hard|Norman Eshley|Ian Cross|Norman Tripp|Two Characters|Cast Return|Series Two|Series Six
  Which company made the 1974 cinema film of Man About the House?|Hammer Films|Ealing Studios|Rankin Bass|Aardman Animations|Hard|Hammer Films|1974 Film|Cinema Spin Off|Richard O Sullivan|Film Production|Sitcom Adaptation|British Movie
  Who composed the instrumental title theme Up to Date for Man About the House?|Johnny Hawksworth|Ronnie Hazlehurst|Anne Dudley|Howard Goodall|Hard|Johnny Hawksworth|Up To Date|Theme Music|Production Library|Opening Credits|British Composer|Sitcom Soundtrack`;

  const robinFacts = `Who reprised the role of Robin Tripp in Robin's Nest?|Richard O'Sullivan|Tony Britton|David Kelly|Doug Fisher|Easy|Returning Main Actor|Robin Tripp|Returning Actor|Man About House Sequel|Lead Cast|1977 Sitcom|Chef Character
  Which actress played Robin's partner Vicky Nicholls?|Tessa Wyatt|Paula Wilcox|Sally Thomsett|Yootha Joyce|Easy|Tessa Wyatt|Vicky Nicholls|Robin Partner|Lead Actress|Bistro Co Owner|Character Casting|1970s ITV
  Who played Vicky's businessman father James Nicholls?|Tony Britton|Brian Murphy|David Kelly|Norman Eshley|Easy|Tony Britton|James Nicholls|Vicky Father|Financial Backer|Main Actor|Family Interference|Bistro Partner
  Who portrayed the one-armed restaurant worker Albert Riddle?|David Kelly|Tony Britton|Richard O'Sullivan|George Layton|Medium|David Kelly|Albert Riddle|Restaurant Employee|One Armed Character|Actor Casting|Kitchen Staff|Bistro Regular
  Which actress played Gertrude in the later series?|Peggy Aitchison|Barbara Murray|Honor Blackman|Tessa Wyatt|Medium|Peggy Aitchison|Gertrude|Series Five Six|Albert Partner|Supporting Actress|Later Cast|Restaurant Story
  What sort of business do Robin and Vicky establish?|A French bistro|A newsagent's|An estate agency|A farm shop|Easy|Robins Nest Bistro|Restaurant Opening|French Cuisine|Robin Chef|Vicky Nicholls|Small Business|Fulham Setting
  In which London district is Robin's Nest mainly set?|Fulham|Tooting|Peckham|Camden|Easy|Fulham|West London|Bistro Setting|Robin Tripp|James Nicholls|Restaurant District|Series Location
  What is the bistro called?|Robin's Nest|La Maison Vicky|Chez James|The Roper Arms|Easy|Robins Nest Restaurant|Business Name|Robin Tripp|Bistro Front|Fulham Establishment|Title Reference|Series Premise
  Who is Robin's partner in both the business and his personal life at the start?|Vicky Nicholls|Chrissy Plummer|Jo|Mildred Roper|Easy|Vicky Nicholls|Robin Partner|Live In Couple|Bistro Partnership|New Relationship|Series One|Character Dynamics
  Which member of Vicky's family helps finance the bistro?|Her father James|Her aunt Marion|Her brother Norman|Her grandfather|Easy|James Nicholls|Bistro Funding|Vicky Father|Silent Partner|Money Investment|Business Stake|Family Tension
  Which original sitcom provided the character Robin Tripp for Robin's Nest?|Man About the House|George and Mildred|Citizen Smith|The Good Life|Easy|Man About The House|Robin Tripp|Sitcom Sequel|Character Continuity|Richard O Sullivan|Spin Off|Previous Flatshare
  Which broadcaster originally transmitted Robin's Nest?|ITV|BBC One|BBC Two|Channel 4|Easy|ITV|Thames Television|1977 Premiere|Original Broadcaster|British Comedy|Network|Programme History
  Which company made Robin's Nest?|Thames Television|Granada Television|Yorkshire Television|BBC Television|Medium|Thames Television|Production Company|British ITV|Seventies Sitcom|Studio Programme|Production Credit|Bistro Comedy
  What year did Robin's Nest first air?|1977|1974|1979|1983|Easy|1977 Debut|January Premiere|Original Series|ITV Schedule|Robin Tripp Sequel|Series One|Broadcast Year
  What year did Robin's Nest finish its television run?|1981|1978|1984|1986|Medium|1981 Finale|March Ending|Last Broadcast|Sixth Series|ITV History|Original Run|Programme Timeline
  How many series of Robin's Nest were made?|Six|Four|Five|Seven|Medium|Six Series|1977 To 1981|Programme Count|Production History|Sitcom Run|Thames Television|Series Total
  How many television episodes aired in Robin's Nest, including Christmas instalments?|48|39|40|56|Medium|Forty Eight Episodes|Six Series|Christmas Instalments|Episode Count|Original Run|ITV Catalogue|Programme Total
  Who created Robin's Nest with Johnnie Mortimer?|Brian Cooke|John Sullivan|Ray Butt|Simon Nye|Medium|Brian Cooke|Johnnie Mortimer|Co Creators|Sequel Sitcom|Scriptwriters|Thames TV|Creative Credits
  Which writer joined the Robin's Nest scripting team for the later series?|George Layton|Jimmy Perry|David Croft|Eric Chappell|Hard|George Layton|Later Series Writer|Series Four To Six|Script Credits|Bistro Comedy|Production Team|British Sitcom
  Which producer-director also worked on Man About the House and Robin's Nest?|Peter Frazer-Jones|Ray Butt|Bob Spiers|Ronnie Hazlehurst|Hard|Cross Programme Director|Producer Director|Both Sitcoms|Thames Television|Creative Continuity|Production Credits|Behind The Scenes
  Who wrote the theme music to Robin's Nest?|Richard O'Sullivan|Brian Bennett|Tony Britton|Johnnie Mortimer|Hard|Star Composer Credit|Theme Composer|Robin Actor|Music Credit|Sitcom Theme|Brian Bennett Arrangement|Opening Sequence
  Which musician arranged and performed the Robin's Nest theme?|Brian Bennett|Johnny Hawksworth|Ronnie Hazlehurst|Mike Batt|Hard|Brian Bennett|The Shadows|Theme Arrangement|Performed Music|Richard O Sullivan|Soundtrack|British Drummer
  In Sleeping Partners, which family member owns the vacant premises for the bistro?|Vicky's father|Robin's uncle|Albert's brother|Vicky's cousin|Medium|Sleeping Partners|James Nicholls|Vacant Premises|Restaurant Premise|Series One|1977|Property Ownership
  What official visits as the bistro gets ready to open in The Bistro Kids?|An inspector|A magistrate|A tax collector|A police detective|Medium|The Bistro Kids|Official Inspection|Restaurant Opening|Early Dinner Guest|Series One|1977|Food Business
  Who owns the neighbouring steakhouse in A Little Competition?|Vicky's former boyfriend|Robin's father|Albert's cousin|James's accountant|Medium|A Little Competition|Steakhouse Neighbour|Vicky Ex Boyfriend|Robin Jealousy|Series One|1977|Restaurant Rivalry
  Whose mother meets Robin for the first time in The Maternal Triangle?|Vicky's|Robin's|Albert's|James's|Medium|Maternal Triangle|Marion Nicholls|Vicky Mother|Robin Tripp|Family Introduction|Series One|1977
  Who becomes romantically interested in a young artist in Piggy in the Middle?|James Nicholls|Albert Riddle|Robin Tripp|Larry Simmonds|Medium|Piggy In The Middle|James Nicholls|Young Artist|Romantic Interest|Series One|1977|Age Gap
  What triggers an identity parade in A Matter of Note?|A counterfeit banknote|A stolen wine bottle|A missing wedding ring|A forged cheque book|Medium|A Matter Of Note|Counterfeit Note|Identity Parade|James Nicholls|Robin Witness|Series One|1977
  Who finally agrees to marriage in Oh Happy Day?|Vicky|Chrissy|Jo|Marion|Easy|Oh Happy Day|Vicky Nicholls|Robin Proposal|Wedding Agreement|Series One Finale|Guest List|1977
  What medical problem allows James to keep Vicky at his side in As Long as He Needs Me?|A bad back|A broken arm|A sprained wrist|A fractured ankle|Medium|As Long As He Needs Me|James Back Pain|Vicky Nursing|Family Dependence|Series Two|1978|Robin Conflict
  How much money disappears from the restaurant till in The Seven Pound Fiddle?|Seven pounds|Seventy pounds|Seventeen pounds|Seven hundred pounds|Medium|Seven Pound Fiddle|Seven Pounds Missing|Bistro Till|Albert Accused|James Nicholls|Series Two|1978
  Where do Robin and James become trapped in Ups and Downs?|A hidden cellar|A locked freezer|A wine delivery van|A restaurant lift|Medium|Ups And Downs|Hidden Cellar|Kitchen Trapdoor|Robin And James|Series Two|1978|Restaurant Floor
  What kind of nearby business wants to expand in Three Times Table?|A steakhouse|A bookshop|A bakery|A hardware shop|Medium|Three Times Table|Neighbour Steakhouse|Expansion Threat|James Relocation Plan|Series Two|1978|Business Rival
  Whose suspected pregnancy drives Great Expectations in series two?|Vicky's|Chrissy's|Marion's|Gertrude's|Medium|Great Expectations|Vicky Suspects Pregnancy|James Future Grandchild|Series Two|1978|Family Plans|Robin Tripp
  Which item do Robin and Vicky choose in place of James's wedding gift in Love and Marriage?|A freezer|A sports car|A washing machine|An upright piano|Medium|Love And Marriage|Robin Vicky Wedding|Freezer|Wedding Present|James Nicholls|Series Two Finale|1978
  In You Need Hands, what injury puts Robin's cooking at risk?|A hurt hand|A broken leg|A sprained neck|A burnt foot|Medium|You Need Hands|Robin Injury|Busy Restaurant|Kitchen Work|Series Three Premiere|1978|Chef Problem
  What position does James seek in The Candidate?|Political office|A restaurant inspection post|The presidency of a golf club|A new banking job|Medium|The Candidate|James Nicholls|Political Campaign|Bistro Headquarters|Series Three|1978|Election Plans
  Whose previous girlfriend arrives and upsets Vicky in Just Desserts?|Robin's|James's|Albert's|Vicky's brother's|Medium|Just Desserts|Robin Ex Girlfriend|Vicky Jealousy|Former Romance|Series Three|1978|Restaurant Visitor
  To which English county do Robin and Vicky plan to escape in Away from All What?|Cornwall|Kent|Shropshire|Norfolk|Medium|Away From All What|Cornwall Holiday|Robin Pretends Ill|Vicky And Robin|James Nicholls|Series Three|1978
  What sort of reunion does James arrange in England Expects?|A regimental reunion|A school reunion|A university graduation|A family christening|Medium|England Expects|Regimental Reunion|James Nicholls|Military Past|Series Three|1978|Old Colleagues
  Which seaside city does Robin consider opening another restaurant in during Once Two Is Three?|Brighton|Blackpool|Southend|Portsmouth|Medium|Once Two Is Three|Brighton Venture|New Restaurant|James Sabotage|Series Three|1978|Business Expansion
  Which relative's love life worries Vicky in Dinner Date?|Her father James's|Her uncle's|Her brother's|Her grandfather's|Medium|Dinner Date|James Nicholls|New Romance|Vicky Disapproval|Series Three|1978|Family Involvement
  Who receives a generous bonus from Robin in Everything You Wish Yourself?|Albert|James|Vicky|Marion|Medium|Everything You Wish Yourself|Albert Bonus|Robin Employer|Restaurant Staff|Series Three|1978|Money Reward
  Which employee resigns in Be It Ever So Humble?|Albert Riddle|Gertrude|Robin Tripp|Marion Nicholls|Medium|Be It Ever So Humble|Albert Resignation|Bistro Staffing|Breaking Law|Robin And Vicky|Series Three|1978
  What leisurely outing do Robin and Vicky arrange in Day Trippers?|A picnic|A cinema matinee|A theatre gala|A fishing expedition|Medium|Day Trippers|Couple Picnic|Day Off|Robin And Vicky|Series Three|1978|Outdoor Break
  Whose presumed infidelity worries Vicky in At Harm's Length?|Her uncle's|Robin's father's|Albert's brother's|James's accountant's|Medium|At Harms Length|Vicky Uncle|Suspected Affair|Family Investigation|Series Three|1978|Misunderstanding
  What new type of eatery does James open in The Happy Hen?|An omelette house|A seafood restaurant|A pizzeria|A tea room|Medium|The Happy Hen|Omelette House|James Nicholls|Neighbouring Property|Rival Venture|Series Three Finale|1978
  Who has an uncomfortable encounter with an underdressed woman in Should Auld Acquaintance?|Albert|Robin|James|Vicky|Medium|Should Auld Acquaintance|Albert Riddle|Unexpected Visitor|Series Four Premiere|1979|Restaurant Comedy|Social Embarrassment
  What does Vicky worry is hurting her marriage in Person Friday Required?|Working alongside Robin|Living too close to James|Caring for a pet|Studying for a degree|Medium|Person Friday Required|Vicky Tripp|Working Together|Marriage Strain|Series Four|1979|Bistro Partnership
  What does Albert win in Lost Weekend?|A weekend holiday|A new car|A year's free meals|A television set|Medium|Lost Weekend|Albert Riddle|Prize Holiday|Series Four|1979|Winning Trip|Time Off
  What change creates complications in Too Many Waiters Spoil the Bistro?|Additional dining tables|A second kitchen|A new licence|A new building entrance|Medium|Too Many Waiters|More Tables|Bistro Expansion|Waiting Staff|Series Four|1979|Service Problems
  Which sport does James play in Sorry Partner?|Badminton|Tennis|Squash|Golf|Medium|Sorry Partner|Badminton Court|James Nicholls|Competitive Sport|Series Four|1979|Romantic Interest
  Whose anniversary celebration is disrupted in Albert's Ball?|Albert's|James's|Robin's|Vicky's|Medium|Alberts Ball|Albert Riddle|Anniversary Party|Unwanted Pest|Series Four|1979|Bistro Crisis
  In A Man of Property, what important family event are Robin and Vicky preparing for?|The birth of their child|Their wedding|James's retirement|A move abroad|Medium|A Man Of Property|New Baby Expected|Robin And Vicky|Family Preparation|Series Five|1980|Property Concerns
  What new business threatens the bistro in If You Pass Go Collect £200?|A snack bar parked outside|A new cinema|A butcher's shop|A roadside petrol station|Medium|If You Pass Go|Snack Bar|Robin Tripp|Restaurant Competition|James Nicholls|Series Five|1980
  Who is excited at the prospect of becoming a grandmother in Never Look a Gift Horse?|Marion Nicholls|Mildred Roper|Chrissy Plummer|Gertrude|Medium|Never Look A Gift Horse|Marion Nicholls|Grandmother Expectation|Vicky Pregnancy|Series Five|1980|Family Anticipation
  In Just an Old-Fashioned Girl, what social role do Robin and Vicky take on?|Romantic go-betweens|Jury members|Wedding photographers|Estate agents|Medium|Just An Old Fashioned Girl|Couple Matchmaking|Robin And Vicky|Series Five|1980|Would Be Lovers|Interrupted Privacy
  What worries Robin in the later episode Great Expectations?|Being present at the birth|Giving a speech at a wedding|Opening a new branch|Meeting a tax inspector|Medium|Great Expectations Series Five|Robin Anxiety|Vicky Childbirth|Pregnancy|Series Five|1980|Hospital Preparation
  What meal causes family tension in No Room at the Inn?|Christmas dinner|A birthday breakfast|A wedding buffet|An anniversary tea|Easy|No Room At The Inn|Christmas Dinner|1980 Special|Three Men And Turkey|Bistro|Family Holiday|Festive Episode
  Who takes charge of cooking when Robin visits Vicky in hospital in Move Over Darling?|Gertrude|James|Albert|Marion|Medium|Move Over Darling|Gertrude Cooks|Robin Hospital Visit|Vicky Recovery|Series Six Premiere|1981|Kitchen Cover
  What do Robin and James disagree over in The Homecoming?|How to bring Vicky home|Whether to hire a chef|Where to send Albert on holiday|Which wine to serve|Medium|The Homecoming|Vicky Coming Home|Transport Dispute|Robin And James|Series Six|1981|Family Argument
  Whom does Albert suspect Gertrude is seeing in No Smoke Without Fire?|Another man|A business investor|Robin's father|A private detective|Medium|No Smoke Without Fire|Albert Jealousy|Gertrude|Suspected Affair|Series Six|1981|Marriage Concern
  Who hosts Robin and Vicky during their intended break in When Irish Eyes Are Smiling?|Grandad|James Nicholls|Chrissy Plummer|Albert Riddle|Medium|When Irish Eyes Are Smiling|Grandad Visit|Robin Vicky Rest|Failed Break|Series Six|1981|Family Trip
  What cooking shortcut allows Robin time with Vicky in Anniversary Waltz?|Preparing the party food in advance|Ordering takeaway meals|Hiring a private chef|Serving only cold snacks|Medium|Anniversary Waltz|Pre Cooked Food|Private Bistro Party|Robin Tripp|Vicky Time|Series Six|1981
  What job does James suggest temporarily filling in Wish You Weren't Here?|A chef|A driver|A bookkeeper|A waiter|Medium|Wish You Werent Here|Temporary Chef|James Nicholls|Robin And Vicky|Holiday Cover|Series Six|1981
  What new opportunity tempts Robin in the last episode The Headhunters of SW6?|An international job offer|A place at university|A role in local politics|A television quiz contract|Medium|Headhunters Of SW6|International Company|Robin New Job|Bistro Sale|James Nicholls|Series Finale|1981
  What does Vicky reveal to Robin at the end of the final episode?|She is pregnant again|She has sold the bistro|She is returning to school|She has inherited a hotel|Hard|Robin Vicky|Second Pregnancy|Final Revelation|Headhunters Of SW6|1981 Ending|Family Future|Series Conclusion
  How many babies does Vicky give birth to before the final episode?|Twins|One child|Triplets|Four children|Medium|Vicky Motherhood|Twins|Robin Family|Childbirth|Later Series|1981|Parenthood`;

  const normalise = value => value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
  const questions = [];

  function addProgramme(programme, sharedTags, data) {
    for (const line of data.trim().split('\n')) {
      const id = 'tv_' + String(FIRST_ID + questions.length).padStart(5, '0');
      const fields = line.trim().split('|').map(value => value.trim());

      if (fields.length !== 13) {
        throw new Error('Pack 364: wrong field count in ' + id + ': ' + fields.length);
      }

      const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;

      if ([question, correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(x => !x)) {
        throw new Error('Pack 364: blank content in ' + id);
      }

      if (!['Easy', 'Medium', 'Hard'].includes(difficulty) ||
          specificTags.length !== 7 ||
          new Set(specificTags.map(normalise)).size !== 7) {
        throw new Error('Pack 364: difficulty or specific tags invalid in ' + id);
      }

      const answers = [wrong1, wrong2, wrong3];

      if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4) {
        throw new Error('Pack 364: repeated answer choice in ' + id);
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

  addProgramme('Man About the House',
    ['ITV', 'Thames Television', '1973-1976', 'Flatshare Comedy'],
    manFacts);

  addProgramme("Robin's Nest",
    ['ITV', 'Thames Television', '1977-1981', 'Restaurant Comedy', 'Robin Tripp'],
    robinFacts);

  // Validate the actual exported question objects, not just the raw text.
  if (!questions.length ||
      questions[0].id !== 'tv_18078' ||
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
        new Set(q.tags.map(normalise)).size !== q.tags.length ||
        !q.tags.includes('Programme: ' + q.programme) ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        q.dailyEligible !== true)) {
    throw new Error('Pack 364: invalid exported object');
  }

  
// Pack 364 historical storyline audit, 22 November 2026.
// Four original questions corrected in place, preserving all 130 original IDs.
// Episode fact references: https://en.wikipedia.org/wiki/List_of_Man_About_the_House_episodes
// Episode fact references: https://www.thetvdb.com/series/robins-nest/allseasons/official
// Additional episode synopses: https://en.wikipedia.org/wiki/List_of_Robin%27s_Nest_episodes
const auditAdditions = [
  {
    "id": "tv_39379",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House's first episode, what does Chrissy falsely tell landlord George about Robin?",
    "answers": [
      "That Robin is her cousin",
      "That Robin is already married",
      "That Robin is gay",
      "That Robin is a doctor"
    ],
    "correctAnswer": "That Robin is gay",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S1E1 Three's a Crowd",
      "Series: S1",
      "Story fact: Chrissy Misleads George About Robin",
      "Character/incident: Chrissy Misleads George About Robin",
      "Answer: That Robin is gay",
      "Plot topic: Chrissy Misleads George About Robin",
      "Episode storyline: S1E1 Three's a Crowd",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39380",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House, what skill makes Robin attractive as a replacement flatmate when Gabrielle fails to impress?",
    "answers": [
      "Gardening",
      "Carpentry",
      "Accountancy",
      "Cooking"
    ],
    "correctAnswer": "Cooking",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S1E1 Three's a Crowd",
      "Series: S1",
      "Story fact: Robin Cooking Wins Flatmates",
      "Character/incident: Robin Cooking Wins Flatmates",
      "Answer: Cooking",
      "Plot topic: Robin Cooking Wins Flatmates",
      "Episode storyline: S1E1 Three's a Crowd",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39381",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House, whose date David is accidentally served food he cannot eat in Some Enchanted Evening?",
    "answers": [
      "Jo's",
      "Chrissy's",
      "Mildred's",
      "Larry's"
    ],
    "correctAnswer": "Jo's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S1E3 Some Enchanted Evening",
      "Series: S1",
      "Story fact: Jo Date David Special Dinner",
      "Character/incident: Jo Date David Special Dinner",
      "Answer: Jo's",
      "Plot topic: Jo Date David Special Dinner",
      "Episode storyline: S1E3 Some Enchanted Evening",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39382",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House, what pretence does Chrissy use to scare away Robin's girlfriend Liz?",
    "answers": [
      "She says Robin is already engaged",
      "She claims to be pregnant by Robin",
      "She says Robin owns the building",
      "She claims Robin is moving abroad"
    ],
    "correctAnswer": "She claims to be pregnant by Robin",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S1E4 And Then There Were Two",
      "Series: S1",
      "Story fact: Chrissy Pretends Pregnancy To Scare Liz",
      "Character/incident: Chrissy Pretends Pregnancy To Scare Liz",
      "Answer: She claims to be pregnant by Robin",
      "Plot topic: Chrissy Pretends Pregnancy To Scare Liz",
      "Episode storyline: S1E4 And Then There Were Two",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39383",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House's It's Only Money, who actually took the rent money the flatmates think has vanished?",
    "answers": [
      "Larry Simmonds",
      "Jo",
      "George Roper",
      "An unknown burglar"
    ],
    "correctAnswer": "George Roper",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S1E5 It's Only Money",
      "Series: S1",
      "Story fact: George Took Rent From Sideboard",
      "Character/incident: George Took Rent From Sideboard",
      "Answer: George Roper",
      "Plot topic: George Took Rent From Sideboard",
      "Episode storyline: S1E5 It's Only Money",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39384",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House, who passes the cold on to Robin before his sporting mishap in Match of the Day?",
    "answers": [
      "Larry Simmonds",
      "Jo",
      "Chrissy's mother",
      "George Roper"
    ],
    "correctAnswer": "George Roper",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S1E6 Match of the Day",
      "Series: S1",
      "Story fact: George Infects Robin With Cold",
      "Character/incident: George Infects Robin With Cold",
      "Answer: George Roper",
      "Plot topic: George Infects Robin With Cold",
      "Episode storyline: S1E6 Match of the Day",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39385",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House's No Children No Dogs, how many puppies is Larry originally trying to find homes for?",
    "answers": [
      "Three",
      "One",
      "Two",
      "Five"
    ],
    "correctAnswer": "Three",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S1E7 No Children No Dogs",
      "Series: S1",
      "Story fact: Larry Has Three Puppies",
      "Character/incident: Larry Has Three Puppies",
      "Answer: Three",
      "Plot topic: Larry Has Three Puppies",
      "Episode storyline: S1E7 No Children No Dogs",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39386",
    "category": "Television",
    "programme": "Man About the House",
    "question": "Which actor plays the vain performer Mark at the flatmates' party in Man About the House?",
    "answers": [
      "Derek Nimmo",
      "Ian Lavender",
      "Norman Eshley",
      "Richard O'Sullivan"
    ],
    "correctAnswer": "Ian Lavender",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S2E1 While the Cat's Away",
      "Series: S2",
      "Story fact: Ian Lavender As Party Guest Mark",
      "Character/incident: Ian Lavender As Party Guest Mark",
      "Answer: Ian Lavender",
      "Plot topic: Ian Lavender As Party Guest Mark",
      "Episode storyline: S2E1 While the Cat's Away",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39387",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House, which seaside resort does Ian Cross propose as the destination for his supposed business trip with Chrissy?",
    "answers": [
      "Brighton",
      "Southend",
      "Bournemouth",
      "Blackpool"
    ],
    "correctAnswer": "Bournemouth",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S2E3 In Praise of Older Men",
      "Series: S2",
      "Story fact: Ian Cross Bournemouth Excuse",
      "Character/incident: Ian Cross Bournemouth Excuse",
      "Answer: Bournemouth",
      "Plot topic: Ian Cross Bournemouth Excuse",
      "Episode storyline: S2E3 In Praise of Older Men",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39388",
    "category": "Television",
    "programme": "Man About the House",
    "question": "Which actor plays Robin's German friend Franz Wasserman in Man About the House's Did You Ever Meet Rommel?",
    "answers": [
      "Norman Eshley",
      "Ian Lavender",
      "Doug Fisher",
      "Dennis Waterman"
    ],
    "correctAnswer": "Dennis Waterman",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S2E4 Did You Ever Meet Rommel",
      "Series: S2",
      "Story fact: Dennis Waterman As Franz Wasserman",
      "Character/incident: Dennis Waterman As Franz Wasserman",
      "Answer: Dennis Waterman",
      "Plot topic: Dennis Waterman As Franz Wasserman",
      "Episode storyline: S2E4 Did You Ever Meet Rommel",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39389",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House, which newly converted space does Larry move into after overcrowding the upstairs flat in Cuckoo in the Nest?",
    "answers": [
      "The attic",
      "The cellar",
      "A garage",
      "A garden shed"
    ],
    "correctAnswer": "The attic",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S3E1 Cuckoo in the Nest",
      "Series: S3",
      "Story fact: Larry Moves To Attic",
      "Character/incident: Larry Moves To Attic",
      "Answer: The attic",
      "Plot topic: Larry Moves To Attic",
      "Episode storyline: S3E1 Cuckoo in the Nest",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39390",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House, who gives Robin dancing lessons for Chrissy's staff dinner dance?",
    "answers": [
      "Jo",
      "Mildred Roper",
      "Chrissy's mother",
      "Larry Simmonds"
    ],
    "correctAnswer": "Mildred Roper",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S3E3 I Won't Dance Don't Ask Me",
      "Series: S3",
      "Story fact: Mildred Teaches Robin To Dance",
      "Character/incident: Mildred Teaches Robin To Dance",
      "Answer: Mildred Roper",
      "Plot topic: Mildred Teaches Robin To Dance",
      "Episode storyline: S3E3 I Won't Dance Don't Ask Me",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39391",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House, whose bedroom does Jo swap into while trying to avoid the mouse?",
    "answers": [
      "Chrissy's",
      "George's",
      "Robin's",
      "Larry's"
    ],
    "correctAnswer": "Robin's",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S3E4 Of Mice and Women",
      "Series: S3",
      "Story fact: Jo Swaps Bedrooms With Robin",
      "Character/incident: Jo Swaps Bedrooms With Robin",
      "Answer: Robin's",
      "Plot topic: Jo Swaps Bedrooms With Robin",
      "Episode storyline: S3E4 Of Mice and Women",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39392",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House, who was the secret admirer actually trying to impress in Somebody Out There Likes Me?",
    "answers": [
      "Mildred",
      "Chrissy",
      "Larry",
      "Jo"
    ],
    "correctAnswer": "Jo",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S3E5 Somebody Out There Likes Me",
      "Series: S3",
      "Story fact: Admirer Gets Chrissy Jo Mixed Up",
      "Character/incident: Admirer Gets Chrissy Jo Mixed Up",
      "Answer: Jo",
      "Plot topic: Admirer Gets Chrissy Jo Mixed Up",
      "Episode storyline: S3E5 Somebody Out There Likes Me",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39393",
    "category": "Television",
    "programme": "Man About the House",
    "question": "Which card game does Chrissy attempt to play in Robin's place in Man About the House's Three of a Kind?",
    "answers": [
      "Poker",
      "Bridge",
      "Canasta",
      "Rummy"
    ],
    "correctAnswer": "Poker",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S3E7 Three of a Kind",
      "Series: S3",
      "Story fact: Chrissy Poker While Robin In Hospital",
      "Character/incident: Chrissy Poker While Robin In Hospital",
      "Answer: Poker",
      "Plot topic: Chrissy Poker While Robin In Hospital",
      "Episode storyline: S3E7 Three of a Kind",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39394",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House's Home and Away, what new item causes George embarrassment at the pub?",
    "answers": [
      "A hearing aid",
      "A toupee",
      "A new bow tie",
      "A pocket watch"
    ],
    "correctAnswer": "A toupee",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S4E1 Home and Away",
      "Series: S4",
      "Story fact: George Bought Toupee",
      "Character/incident: George Bought Toupee",
      "Answer: A toupee",
      "Plot topic: George Bought Toupee",
      "Episode storyline: S4E1 Home and Away",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39395",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House, which driving-related ordeal does Chrissy face in One for the Road?",
    "answers": [
      "A motorway speed trial",
      "A parking appeal",
      "Her driving test",
      "A driving instructor interview"
    ],
    "correctAnswer": "Her driving test",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S4E2 One for the Road",
      "Series: S4",
      "Story fact: Chrissy Takes Driving Test",
      "Character/incident: Chrissy Takes Driving Test",
      "Answer: Her driving test",
      "Plot topic: Chrissy Takes Driving Test",
      "Episode storyline: S4E2 One for the Road",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39396",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House, what really causes the marks that George mistakes for woodworm in All in the Game?",
    "answers": [
      "Mouse damage",
      "Water stains",
      "Loose plaster",
      "Dart holes"
    ],
    "correctAnswer": "Dart holes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S4E3 All in the Game",
      "Series: S4",
      "Story fact: Dart Holes Mistaken For Woodworm",
      "Character/incident: Dart Holes Mistaken For Woodworm",
      "Answer: Dart holes",
      "Plot topic: Dart Holes Mistaken For Woodworm",
      "Episode storyline: S4E3 All in the Game",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39397",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House, which organisation's concert does George hope to perform at in The Tender Trap?",
    "answers": [
      "The British Legion",
      "The Salvation Army",
      "The Women's Institute",
      "The Scouts"
    ],
    "correctAnswer": "The British Legion",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S4E5 The Tender Trap",
      "Series: S4",
      "Story fact: George Sings At Legion Concert",
      "Character/incident: George Sings At Legion Concert",
      "Answer: The British Legion",
      "Plot topic: George Sings At Legion Concert",
      "Episode storyline: S4E5 The Tender Trap",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39398",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House, what happens to George's car when Jerry uses a crane to hoist a piano upstairs?",
    "answers": [
      "The crane lifts the car away",
      "The piano falls onto its roof",
      "The piano breaks its windscreen only",
      "The car is towed into a pond"
    ],
    "correctAnswer": "The piano falls onto its roof",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S5E2 Right Said George",
      "Series: S5",
      "Story fact: Falling Piano Crushes George Car",
      "Character/incident: Falling Piano Crushes George Car",
      "Answer: The piano falls onto its roof",
      "Plot topic: Falling Piano Crushes George Car",
      "Episode storyline: S5E2 Right Said George",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39399",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House's Come Fly with Me, what anniversary gift does George originally buy Mildred?",
    "answers": [
      "A gold necklace",
      "A cuckoo clock",
      "A budgerigar",
      "A pair of theatre tickets"
    ],
    "correctAnswer": "A budgerigar",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S5E6 Come Fly with Me",
      "Series: S5",
      "Story fact: Budgerigar Intended For Mildred",
      "Character/incident: Budgerigar Intended For Mildred",
      "Answer: A budgerigar",
      "Plot topic: Budgerigar Intended For Mildred",
      "Episode storyline: S5E6 Come Fly with Me",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39400",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House, what covers Norman and Chrissy just before he can propose in Fire Down Below?",
    "answers": [
      "Flour",
      "Falling ceiling plaster",
      "Burst water pipes",
      "Chimney soot"
    ],
    "correctAnswer": "Chimney soot",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S6E6 Fire Down Below",
      "Series: S6",
      "Story fact: Soot Interrupts Norman Proposal",
      "Character/incident: Soot Interrupts Norman Proposal",
      "Answer: Chimney soot",
      "Plot topic: Soot Interrupts Norman Proposal",
      "Episode storyline: S6E6 Fire Down Below",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39401",
    "category": "Television",
    "programme": "Man About the House",
    "question": "In Man About the House's final episode, why does George secretly keep the wedding invitation from Mildred?",
    "answers": [
      "He would rather attend a darts match",
      "He has booked a fishing trip",
      "He dislikes the bride's relatives",
      "He has arranged a surprise party"
    ],
    "correctAnswer": "He would rather attend a darts match",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Man About the House",
      "Programme: Man About the House",
      "ITV",
      "Episode: S6E7 Another Bride Another Groom",
      "Series: S6",
      "Story fact: George Hides Wedding Invitation",
      "Character/incident: George Hides Wedding Invitation",
      "Answer: He would rather attend a darts match",
      "Plot topic: George Hides Wedding Invitation",
      "Episode storyline: S6E7 Another Bride Another Groom",
      "1970s Flatshare Comedy",
      "Thames Television Flatmates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39402",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, what type of restaurant had previously occupied the premises beneath Robin and Vicky's flat?",
    "answers": [
      "An Italian pizzeria",
      "A Chinese restaurant",
      "A fish and chip shop",
      "An Indian restaurant"
    ],
    "correctAnswer": "A Chinese restaurant",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S1E1 Sleeping Partners",
      "Series: S1",
      "Story fact: Former Chinese Restaurant Closes",
      "Character/incident: Former Chinese Restaurant Closes",
      "Answer: A Chinese restaurant",
      "Plot topic: Former Chinese Restaurant Closes",
      "Episode storyline: S1E1 Sleeping Partners",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39403",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, what second use does James suggest for the bistro as he tries to improve its appearance in Piggy in the Middle?",
    "answers": [
      "Hosting dance lessons",
      "Selling antique furniture",
      "Displaying works of art",
      "Running a book exchange"
    ],
    "correctAnswer": "Displaying works of art",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S1E5 Piggy in the Middle",
      "Series: S1",
      "Story fact: Bistro Doubles As Art Gallery",
      "Character/incident: Bistro Doubles As Art Gallery",
      "Answer: Displaying works of art",
      "Plot topic: Bistro Doubles As Art Gallery",
      "Episode storyline: S1E5 Piggy in the Middle",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39404",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, who is unexpectedly among the suspects in the counterfeit-note identity parade?",
    "answers": [
      "Albert Riddle",
      "Vicky Tripp",
      "Robin's brother Norman",
      "James Nicholls"
    ],
    "correctAnswer": "James Nicholls",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S1E6 A Matter of Note",
      "Series: S1",
      "Story fact: James Among Suspects In Identity Parade",
      "Character/incident: James Among Suspects In Identity Parade",
      "Answer: James Nicholls",
      "Plot topic: James Among Suspects In Identity Parade",
      "Episode storyline: S1E6 A Matter of Note",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39405",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, why does James exaggerate his back injury in As Long as He Needs Me?",
    "answers": [
      "To keep Vicky looking after him",
      "To claim insurance for the bistro",
      "To miss an election meeting",
      "To avoid a wedding"
    ],
    "correctAnswer": "To keep Vicky looking after him",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S2E1 As Long as He Needs Me",
      "Series: S2",
      "Story fact: James Exaggerates Back Injury",
      "Character/incident: James Exaggerates Back Injury",
      "Answer: To keep Vicky looking after him",
      "Plot topic: James Exaggerates Back Injury",
      "Episode storyline: S2E1 As Long as He Needs Me",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39406",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, whom does James suspect when seven pounds goes missing from the bistro till?",
    "answers": [
      "Vicky Tripp",
      "Albert Riddle",
      "Robin's brother Norman",
      "Gertrude"
    ],
    "correctAnswer": "Albert Riddle",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S2E2 The Seven Pound Fiddle",
      "Series: S2",
      "Story fact: James Suspects Albert Of Missing Money",
      "Character/incident: James Suspects Albert Of Missing Money",
      "Answer: Albert Riddle",
      "Plot topic: James Suspects Albert Of Missing Money",
      "Episode storyline: S2E2 The Seven Pound Fiddle",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39407",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, which rival business attempts to steal a customer sitting at an outdoor table?",
    "answers": [
      "A nearby pub",
      "A new fish restaurant",
      "The steakhouse next door",
      "A roadside café"
    ],
    "correctAnswer": "The steakhouse next door",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S2E4 Three Times Table",
      "Series: S2",
      "Story fact: Steakhouse Poaches Outdoor Customer",
      "Character/incident: Steakhouse Poaches Outdoor Customer",
      "Answer: The steakhouse next door",
      "Plot topic: Steakhouse Poaches Outdoor Customer",
      "Episode storyline: S2E4 Three Times Table",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39408",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, what coin-operated machine causes tension inside the bistro during Great Expectations?",
    "answers": [
      "A jukebox",
      "A pinball machine",
      "A coffee vending machine",
      "A fruit machine"
    ],
    "correctAnswer": "A fruit machine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S2E5 Great Expectations",
      "Series: S2",
      "Story fact: Bistro Fruit Machine Causes Tension",
      "Character/incident: Bistro Fruit Machine Causes Tension",
      "Answer: A fruit machine",
      "Plot topic: Bistro Fruit Machine Causes Tension",
      "Episode storyline: S2E5 Great Expectations",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39409",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, what kitchen equipment jams and leaves Robin with an injured hand?",
    "answers": [
      "The waste disposal unit",
      "The electric mixer",
      "The dishwasher",
      "The oven fan"
    ],
    "correctAnswer": "The waste disposal unit",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S3E1 You Need Hands",
      "Series: S3",
      "Story fact: Jammed Waste Disposal Hurts Robin",
      "Character/incident: Jammed Waste Disposal Hurts Robin",
      "Answer: The waste disposal unit",
      "Plot topic: Jammed Waste Disposal Hurts Robin",
      "Episode storyline: S3E1 You Need Hands",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39410",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, what sort of broadcast does Robin join while James campaigns for political office in The Candidate?",
    "answers": [
      "A television cookery demonstration",
      "A radio debate",
      "A sports commentary",
      "A music request show"
    ],
    "correctAnswer": "A radio debate",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S3E2 The Candidate",
      "Series: S3",
      "Story fact: Robin Joins Radio Debate",
      "Character/incident: Robin Joins Radio Debate",
      "Answer: A radio debate",
      "Plot topic: Robin Joins Radio Debate",
      "Episode storyline: S3E2 The Candidate",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39411",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, what illness does Robin pretend to have to get time away for a Cornwall break?",
    "answers": [
      "Influenza",
      "Appendicitis",
      "An unspecified illness",
      "Food poisoning"
    ],
    "correctAnswer": "An unspecified illness",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S3E4 Away from All What",
      "Series: S3",
      "Story fact: Robin Feigns Illness For Cornwall Trip",
      "Character/incident: Robin Feigns Illness For Cornwall Trip",
      "Answer: An unspecified illness",
      "Plot topic: Robin Feigns Illness For Cornwall Trip",
      "Episode storyline: S3E4 Away from All What",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39412",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, whom does Albert fear meeting at James's regimental reunion?",
    "answers": [
      "His former school headmaster",
      "A rival chef",
      "His estranged brother",
      "His former sergeant"
    ],
    "correctAnswer": "His former sergeant",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S3E5 England Expects",
      "Series: S3",
      "Story fact: Albert Old Sergeant Reappears",
      "Character/incident: Albert Old Sergeant Reappears",
      "Answer: His former sergeant",
      "Plot topic: Albert Old Sergeant Reappears",
      "Episode storyline: S3E5 England Expects",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39413",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, what do Robin and Vicky offer a homeless person in Be It Ever So Humble?",
    "answers": [
      "A bed inside the bistro",
      "A free coach ticket",
      "A weekend at the seaside",
      "A job in James's office"
    ],
    "correctAnswer": "A bed inside the bistro",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S3E9 Be It Ever So Humble",
      "Series: S3",
      "Story fact: Vicky Makes Bed For Homeless",
      "Character/incident: Vicky Makes Bed For Homeless",
      "Answer: A bed inside the bistro",
      "Plot topic: Vicky Makes Bed For Homeless",
      "Episode storyline: S3E9 Be It Ever So Humble",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39414",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, what is Robin secretly earning extra money to buy in The Long Distance Runner?",
    "answers": [
      "A second-hand car",
      "An anniversary gift",
      "A television set",
      "A piano"
    ],
    "correctAnswer": "An anniversary gift",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S3E11 The Long Distance Runner",
      "Series: S3",
      "Story fact: Robin Secret Job Buys Anniversary Gift",
      "Character/incident: Robin Secret Job Buys Anniversary Gift",
      "Answer: An anniversary gift",
      "Plot topic: Robin Secret Job Buys Anniversary Gift",
      "Episode storyline: S3E11 The Long Distance Runner",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39415",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, to which Portuguese holiday destination does Albert win a trip in Lost Weekend?",
    "answers": [
      "Madeira",
      "Lisbon",
      "The Algarve",
      "The Azores"
    ],
    "correctAnswer": "The Algarve",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S4E3 Lost Weekend",
      "Series: S4",
      "Story fact: Albert Wins Holiday To Algarve",
      "Character/incident: Albert Wins Holiday To Algarve",
      "Answer: The Algarve",
      "Plot topic: Albert Wins Holiday To Algarve",
      "Episode storyline: S4E3 Lost Weekend",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39416",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, which church club's annual dinner is booked at the bistro in Too Many Waiters Spoil the Bistro?",
    "answers": [
      "St George's Society",
      "St Patrick's Club",
      "St Martin's Fellowship",
      "St Ignatius Club"
    ],
    "correctAnswer": "St Ignatius Club",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S4E4 Too Many Waiters Spoil the Bistro",
      "Series: S4",
      "Story fact: St Ignatius Club Annual Dinner",
      "Character/incident: St Ignatius Club Annual Dinner",
      "Answer: St Ignatius Club",
      "Plot topic: St Ignatius Club Annual Dinner",
      "Episode storyline: S4E4 Too Many Waiters Spoil the Bistro",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39417",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest's September Song, what does Vicky see Robin and her father doing in the street?",
    "answers": [
      "Fighting",
      "Dancing",
      "Carrying furniture",
      "Repairing a car"
    ],
    "correctAnswer": "Fighting",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S4E5 September Song",
      "Series: S4",
      "Story fact: Robin And James Fight In Street",
      "Character/incident: Robin And James Fight In Street",
      "Answer: Fighting",
      "Plot topic: Robin And James Fight In Street",
      "Episode storyline: S4E5 September Song",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39418",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, what legal danger troubles the Tripps when James's old friend is injured at the bistro in Albert's Ball?",
    "answers": [
      "A licensing prosecution",
      "A lawsuit",
      "A planning appeal",
      "A burglary charge"
    ],
    "correctAnswer": "A lawsuit",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S4E7 Albert's Ball",
      "Series: S4",
      "Story fact: Bistro Injury Lawsuit Threat",
      "Character/incident: Bistro Injury Lawsuit Threat",
      "Answer: A lawsuit",
      "Plot topic: Bistro Injury Lawsuit Threat",
      "Episode storyline: S4E7 Albert's Ball",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39419",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest's 1979 Christmas special, what does Albert do after an unexpected windfall?",
    "answers": [
      "He buys a boat",
      "He takes a restaurant management course",
      "He tenders his resignation",
      "He decides to emigrate"
    ],
    "correctAnswer": "He tenders his resignation",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: 1979 Christmas Christmas at Robins Nest",
      "Series: Christmas Special",
      "Story fact: Albert Unexpected Windfall Quits",
      "Character/incident: Albert Unexpected Windfall Quits",
      "Answer: He tenders his resignation",
      "Plot topic: Albert Unexpected Windfall Quits",
      "Episode storyline: 1979 Christmas Christmas at Robins Nest",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39420",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, where does Albert announce he has opened a venture of his own in Pastures New?",
    "answers": [
      "Brighton",
      "Reading",
      "Croydon",
      "Watford"
    ],
    "correctAnswer": "Watford",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S5E1 Pastures New",
      "Series: S5",
      "Story fact: Albert Starts Own Nest In Watford",
      "Character/incident: Albert Starts Own Nest In Watford",
      "Answer: Watford",
      "Plot topic: Albert Starts Own Nest In Watford",
      "Episode storyline: S5E1 Pastures New",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39421",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, what expensive baby-related item arrives unexpectedly during Never Look a Gift Horse?",
    "answers": [
      "A pram",
      "A cot",
      "A christening gown",
      "A rocking horse"
    ],
    "correctAnswer": "A pram",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S5E4 Never Look a Gift Horse",
      "Series: S5",
      "Story fact: Unexpected Expensive Pram Delivery",
      "Character/incident: Unexpected Expensive Pram Delivery",
      "Answer: A pram",
      "Plot topic: Unexpected Expensive Pram Delivery",
      "Episode storyline: S5E4 Never Look a Gift Horse",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39422",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, what kind of professional is James's latest romantic interest in Just an Old-Fashioned Girl?",
    "answers": [
      "A journalist",
      "An estate agent",
      "An airline steward",
      "A music teacher"
    ],
    "correctAnswer": "An estate agent",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S5E5 Just an Old-Fashioned Girl",
      "Series: S5",
      "Story fact: James New Partner Estate Agent",
      "Character/incident: James New Partner Estate Agent",
      "Answer: An estate agent",
      "Plot topic: James New Partner Estate Agent",
      "Episode storyline: S5E5 Just an Old-Fashioned Girl",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39423",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, what two details about Vicky's baby attract wagers at the bistro in Great Expectations?",
    "answers": [
      "Its height and birth date",
      "Its first name and hair colour",
      "Its sex and weight",
      "Its eye colour and time of birth"
    ],
    "correctAnswer": "Its sex and weight",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S5E6 Great Expectations",
      "Series: S5",
      "Story fact: Bets On Sex And Weight Of Baby",
      "Character/incident: Bets On Sex And Weight Of Baby",
      "Answer: Its sex and weight",
      "Plot topic: Bets On Sex And Weight Of Baby",
      "Episode storyline: S5E6 Great Expectations",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39424",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest's 1980 Christmas special, why does Vicky have to spend Christmas in hospital?",
    "answers": [
      "She is recovering from a broken leg",
      "She has appendicitis",
      "She is visiting an ill relative",
      "She has just given birth to twins"
    ],
    "correctAnswer": "She has just given birth to twins",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: 1980 Christmas No Room at the Inn",
      "Series: Christmas Special",
      "Story fact: Vicky Hospital After Twins Birth",
      "Character/incident: Vicky Hospital After Twins Birth",
      "Answer: She has just given birth to twins",
      "Plot topic: Vicky Hospital After Twins Birth",
      "Episode storyline: 1980 Christmas No Room at the Inn",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39425",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, where does Albert become trapped while worrying about Gertrude in No Smoke Without Fire?",
    "answers": [
      "In the loft",
      "In the cellar",
      "In a walk-in freezer",
      "On the roof"
    ],
    "correctAnswer": "In the loft",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S6E3 No Smoke Without Fire",
      "Series: S6",
      "Story fact: Albert Trapped In Loft",
      "Character/incident: Albert Trapped In Loft",
      "Answer: In the loft",
      "Plot topic: Albert Trapped In Loft",
      "Episode storyline: S6E3 No Smoke Without Fire",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39426",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, what household emergency keeps the twins and their parents awake in When Irish Eyes Are Smiling?",
    "answers": [
      "A blocked chimney",
      "A burst water main",
      "A broken lift",
      "A power cut"
    ],
    "correctAnswer": "A burst water main",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S6E4 When Irish Eyes Are Smiling",
      "Series: S6",
      "Story fact: Burst Water Main Keeps Twins Awake",
      "Character/incident: Burst Water Main Keeps Twins Awake",
      "Answer: A burst water main",
      "Plot topic: Burst Water Main Keeps Twins Awake",
      "Episode storyline: S6E4 When Irish Eyes Are Smiling",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39427",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, what unexpected arrival forces changes to Robin's prepared menu in Anniversary Waltz?",
    "answers": [
      "A visiting food critic",
      "A group of wedding guests",
      "A coach party",
      "A delegation of chefs"
    ],
    "correctAnswer": "A coach party",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S6E5 Anniversary Waltz",
      "Series: S6",
      "Story fact: Coach Party Arrives For Anniversary",
      "Character/incident: Coach Party Arrives For Anniversary",
      "Answer: A coach party",
      "Plot topic: Coach Party Arrives For Anniversary",
      "Episode storyline: S6E5 Anniversary Waltz",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39428",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest, what Spanish island does James arrange a week's holiday on in Wish You Weren't Here?",
    "answers": [
      "Majorca",
      "Ibiza",
      "Gran Canaria",
      "Tenerife"
    ],
    "correctAnswer": "Tenerife",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S6E6 Wish You Weren't Here",
      "Series: S6",
      "Story fact: James Offers Tenerife Holiday",
      "Character/incident: James Offers Tenerife Holiday",
      "Answer: Tenerife",
      "Plot topic: James Offers Tenerife Holiday",
      "Episode storyline: S6E6 Wish You Weren't Here",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39429",
    "category": "Television",
    "programme": "Robin's Nest",
    "question": "In Robin's Nest's finale, what unusual subject does Albert receive advice about serving?",
    "answers": [
      "A bottle of wine",
      "A birthday cake",
      "An expensive cheese",
      "A flambé dessert"
    ],
    "correctAnswer": "A bottle of wine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "British Sitcom",
      "Robin's Nest",
      "Programme: Robin's Nest",
      "ITV",
      "Episode: S6E7 The Headhunters of SW6",
      "Series: S6",
      "Story fact: Albert Wine Service Advice",
      "Character/incident: Albert Wine Service Advice",
      "Answer: A bottle of wine",
      "Plot topic: Albert Wine Service Advice",
      "Episode storyline: S6E7 The Headhunters of SW6",
      "1970s-1980s Restaurant Comedy",
      "Thames Television Bistro"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if (new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => normalise(q.question))).size !== questions.length ||
    questions.some(q => !q.question || q.answers.length !== 4 ||
      new Set(q.answers.map(normalise)).size !== 4 ||
      q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
      q.tags.length < 14 || !q.tags.includes('Programme: ' + q.programme) ||
      q.dailyEligible !== true)) {
  throw new Error('Pack 364 audited questions validation failed');
}
module.exports = questions;
