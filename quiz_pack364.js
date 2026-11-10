
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
  Which sport does Robin agree to play in Match of the Day?|Football|Rugby|Cricket|Tennis|Easy|Match Of The Day|Football Match|Robin Tripp|Illness|Series One|Local Team|Chrissy Nursing
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
  Which musical instrument does Robin try to play in Right Said George?|Guitar|Trumpet|Violin|Drums|Easy|Right Said George|Robin Guitar|Ropers Piano|Music Practice|Series Five|George Car|1975
  What job does Robin consider in A Little Knowledge?|Door-to-door encyclopaedia salesman|Bus conductor|Estate agent|Hotel receptionist|Medium|A Little Knowledge|Encyclopaedia Sales|Door To Door Work|Robin Job Search|Chrissy Helps|Series Five|Money Shortage
  What type of plant does Chrissy unknowingly bring into the flat in How Does Your Garden Grow?|Cannabis|Rosemary|Lavender|Basil|Medium|How Does Your Garden Grow|Cannabis Plant|Garden Clearing|Larry Warning|Series Five|George Roper|Unpaid Rent
  Whose concert tickets is Chrissy offering in Come Fly with Me?|Frank Sinatra's|Elton John's|David Bowie's|Tom Jones's|Medium|Come Fly With Me|Frank Sinatra Tickets|Chrissy Plummer|Budgie Sitting|Series Five Finale|Robin Tripp|1975 Music
  Who leaves the Roper home after George tries to stop a party in The Party's Over?|Mildred|Jo|Chrissy|Larry|Medium|The Partys Over|Mildred Leaves|Party Dispute|George Roper|Series Six Premiere|1976|Marriage Row
  How many tenants do Robin, Chrissy and Jo consider sharing the flat with in One More for the Pot?|A fourth tenant|A fifth tenant|Two couples|No extra tenant|Medium|One More For The Pot|Fourth Flatmate|Rent Increase|Lease Renewal|George Roper|Series Six|1976 Episode
  What kind of outing does Mildred want George to attend in The Generation Game?|A riverboat party|A seaside coach trip|A rugby match|An outdoor concert|Medium|The Generation Game|Riverboat Party|Mildred Roper|George Roper|Robin Chrissy Romance|Series Six|1976
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

  module.exports = questions;
