
// quiz_pack376.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Hi-de-Hi! (1980-1988) and Never the Twain (1981-1991).
// Complete WordPad-ready CommonJS file. No dependencies.
// Seven bespoke question-specific tags per row, plus core metadata.
// Fact references: British Comedy Guide, David Croft site, TVmaze, ITVX.

const FIRST_ID = 19395;

// question | correct answer | three distractors | difficulty | seven bespoke tags
const hiFacts = `Who played Maplin's entertainment manager Jeffrey Fairbrother in Hi-de-Hi!?|Simon Cadell|Jeffrey Holland|David Griffin|Paul Shane|Easy|Jeffrey Fairbrother|Simon Cadell|Entertainment Manager|Original Lead|Casting|Maplins Staff|1980s Sitcom
What academic subject had Jeffrey Fairbrother taught before working at Maplin's?|Archaeology|Mathematics|Modern languages|Physics|Medium|Jeffrey Fairbrother|Cambridge University|Archaeology Professor|Former Career|Holiday Camp Manager|Pilot Premise|Academic Background
What is the fictional holiday camp company called in Hi-de-Hi!?|Maplin's|Haven|Butlin's|Pontin's|Easy|Maplins Holiday Camp|Fictional Company|Camp Setting|Joe Maplin|Holiday Industry|1950s Britain|Entertainment Staff
What is the name of the fictional seaside town where Maplin's camp is located?|Crimpton-on-Sea|Bognor Regis|Walton-on-the-Naze|Clacton-on-Sea|Hard|Crimpton On Sea|Fictional Resort|Seaside Setting|Maplins Camp|Holiday Town|British Coast|Location Trivia
In which year is the pilot of Hi-de-Hi! set?|1959|1947|1966|1974|Medium|1959 Setting|Pilot Episode|Postwar Holidays|Maplins Opening|Period Sitcom|Holiday Season|Series Timeline
Who played the Welsh Yellowcoat Gladys Pugh?|Ruth Madoc|Su Pollard|Diane Holland|Nikki Kelly|Easy|Ruth Madoc|Gladys Pugh|Yellowcoat|Welsh Character|BBC Casting|Sports Organiser|Radio Maplins
Which Hi-de-Hi! character makes announcements over Radio Maplin's?|Gladys Pugh|Peggy Ollerenshaw|Yvonne Stuart-Hargreaves|Sylvia Garnsey|Easy|Gladys Pugh|Radio Maplins|Public Announcements|Sports Organiser|Holiday Camp Radio|Welsh Accent|Yellowcoat
Which actor played the camp host Ted Bovis?|Paul Shane|Jeffrey Holland|Felix Bowness|Leslie Dwyer|Easy|Paul Shane|Ted Bovis|Camp Host|Comedian|Money Schemes|Entertainment Team|Lead Cast
Which member of the camp staff is often trying to make extra money through questionable schemes?|Ted Bovis|Jeffrey Fairbrother|Fred Quilley|Spike Dixon|Easy|Ted Bovis|Money Making Schemes|Camp Host|Paul Shane|Extra Income|Staff Rivalries|Holiday Camp
Who played comic Spike Dixon in Hi-de-Hi!?|Jeffrey Holland|Simon Cadell|Kenneth Connor|David Griffin|Easy|Jeffrey Holland|Spike Dixon|Camp Comic|Ted Sidekick|Main Cast|Actor Casting|Entertainment Team
Which character is Ted Bovis's younger comedy sidekick?|Spike Dixon|Fred Quilley|Barry Stuart-Hargreaves|Clive Dempster|Easy|Spike Dixon|Ted Bovis|Comedy Partnership|Camp Entertainment|Jeffrey Holland|Show Business|Stage Acts
Which actress played Peggy Ollerenshaw?|Su Pollard|Ruth Madoc|Nikki Kelly|Linda Regan|Easy|Su Pollard|Peggy Ollerenshaw|Chalet Maid|Yellowcoat Ambition|Character Casting|Camp Staff|BBC Sitcom
What job does Peggy Ollerenshaw initially do at the holiday camp?|Chalet maid|Swimming instructor|Reception manager|Dance teacher|Easy|Peggy Ollerenshaw|Chalet Cleaning|Camp Housekeeping|Low Ranking Staff|Career Ambition|Staff Hierarchy|Su Pollard
Which camp uniformed entertainment team does Peggy dream of joining?|The Yellowcoats|The Redcoats|The Bluebirds|The Green Jackets|Easy|Peggy Ollerenshaw|Yellowcoat Ambition|Entertainers|Camp Uniform|Auditions|Holiday Camp Jobs|Career Goal
Who played former jockey Fred Quilley?|Felix Bowness|Barry Howard|Leslie Dwyer|David Griffin|Medium|Felix Bowness|Fred Quilley|Ex Jockey|Horse Riding|Camp Staff|Character Casting|Equestrian Activities
What sport was Fred Quilley professionally involved in before his camp job?|Horse racing|Greyhound racing|Motor racing|Cycling|Medium|Fred Quilley|Former Jockey|Horse Racing|Riding Stable|Sporting Past|Camp Horses|Felix Bowness
Who played the Punch and Judy performer Mr Partridge?|Leslie Dwyer|Felix Bowness|Kenneth Connor|Barry Howard|Medium|Leslie Dwyer|Mr Partridge|Punch And Judy|Camp Entertainer|Heavy Drinking|Actor Casting|Early Series
What traditional seaside puppet show was Mr Partridge employed to perform?|Punch and Judy|The Muppets|A marionette opera|A shadow-puppet ballet|Medium|Mr Partridge|Punch And Judy|Seaside Entertainment|Childrens Shows|Puppetry|Camp Attractions|Leslie Dwyer
Which actor played ballroom dancer Barry Stuart-Hargreaves?|Barry Howard|David Griffin|Jeffrey Holland|Paul Shane|Medium|Barry Howard|Barry Stuart Hargreaves|Ballroom Dancing|Yvonne Partner|Actor Casting|Camp Entertainment|Original Cast
Who played Barry's dancing partner and wife Yvonne?|Diane Holland|Nikki Kelly|Rikki Howard|Linda Regan|Medium|Diane Holland|Yvonne Stuart Hargreaves|Ballroom Instructor|Barry Wife|Dance Couple|Character Casting|Yellowcoats
What form of entertainment do Barry and Yvonne Stuart-Hargreaves specialise in?|Ballroom dancing|Stand-up comedy|Magic tricks|Acrobatics|Easy|Barry Stuart Hargreaves|Yvonne Stuart Hargreaves|Ballroom Dance|Dance Instructors|Married Performers|Camp Ballroom|Entertainment Act
Which actress played Yellowcoat Sylvia Garnsey throughout Hi-de-Hi!?|Nikki Kelly|Ruth Madoc|Linda Regan|Rikki Howard|Medium|Nikki Kelly|Sylvia Garnsey|Yellowcoat|Main Ensemble|Series One To End|Television Casting|Entertainment Staff
Which actress played Yellowcoat April Wingate in the later series?|Linda Regan|Nikki Kelly|Su Pollard|Susan Beagley|Medium|Linda Regan|April Wingate|Later Yellowcoat|1980s Cast|Spike Romance|Casting|Series Five Onwards
Which camp comic becomes romantically involved with April Wingate?|Spike Dixon|Ted Bovis|Fred Quilley|Sammy|Medium|Spike Dixon|April Wingate|Romantic Relationship|Camp Comic|Engagement|Later Series|Jeffrey Holland
Which actor portrayed Squadron Leader Clive Dempster after Jeffrey's departure?|David Griffin|Simon Cadell|Barry Howard|Kenneth Connor|Medium|David Griffin|Clive Dempster|Replacement Manager|Former RAF Officer|Later Series|Actor Casting|Gladys Romance
What military rank forms part of Clive Dempster's title?|Squadron Leader|Wing Commander|Flight Lieutenant|Air Commodore|Medium|Clive Dempster|Squadron Leader|RAF Background|Military Title|Entertainment Manager|David Griffin|Character History
Which character replaces Jeffrey Fairbrother as entertainment manager?|Clive Dempster|Ted Bovis|Alec Foster|Mr Partridge|Medium|Clive Dempster|Jeffrey Departure|Replacement Manager|1960 Season|New Leadership|Maplins Staff|Series Five
Which actor played the entertainer Sammy in later episodes of Hi-de-Hi!?|Kenneth Connor|Leslie Dwyer|Felix Bowness|Barry Howard|Medium|Kenneth Connor|Sammy|Later Series Cast|Camp Entertainer|Carry On Actor|Character Casting|Series Six To Eight
Who created and wrote Hi-de-Hi!?|Jimmy Perry and David Croft|John Esmonde and Bob Larbey|Vince Powell and Harry Driver|Ray Galton and Alan Simpson|Medium|Jimmy Perry|David Croft|Writing Partnership|Sitcom Creators|BBC Comedy|Holiday Camp Inspiration|Programme Origins
Which broadcaster first screened Hi-de-Hi!?|BBC One|ITV|BBC Two|Channel 4|Easy|BBC One|Original Channel|Television Broadcasting|1980 Debut|BBC Comedy|UK Television|Programme Premiere
In which year was Hi-de-Hi! first broadcast?|1980|1977|1983|1986|Easy|1980 Debut|Pilot Episode|New Year Broadcast|BBC One|Programme Timeline|First Transmission|Holiday Camp Comedy
In which year did Hi-de-Hi! finish its original television run?|1988|1984|1990|1993|Easy|1988 Final Episode|Programme Finale|BBC One|Television Timeline|End Of Run|Last Series|Final Season
According to the British Comedy Guide, how many broadcast episodes of Hi-de-Hi! were made, including the pilot?|58|45|67|72|Medium|Fifty Eight Episodes|Episode Count|Pilot Included|BBC Catalogue|Production Figures|1980 To 1988|Series Total
Who sang the Hi-de-Hi! theme tune Holiday Rock?|Ken Barrie|Paul Shane|Jimmy Perry|Jeffrey Holland|Hard|Ken Barrie|Holiday Rock|Theme Song Singer|Opening Titles|Television Music|Vocal Performance|BBC Theme
Which co-creator wrote the words and music for the Hi-de-Hi! theme tune Holiday Rock?|Jimmy Perry|David Croft|Ronnie Hazlehurst|Mike Batt|Hard|Jimmy Perry|Holiday Rock|Theme Music|Songwriting Credit|Programme Opening|Theme Composer|Co Creator
What had Jeffrey's predecessor Mr Baverstock been caught stealing from in the pilot?|The camp wishing well|The booking office safe|The bar cash register|The swimming pool kiosk|Medium|Mr Baverstock|Pilot Episode|Wishing Well|Charity Money|Dismissed Manager|Jeffrey Arrival|Maplins Staff
Which competition is Jeffrey asked to judge in The Beauty Queen Affair?|Holiday Princess|Knobbly Knees|Best Dressed Chalet|Holiday Talent Night|Medium|The Beauty Queen Affair|Series One|Jeffrey Fairbrother|Holiday Princess|Beauty Contest|Camp Competition|1981 Episode
Which employee's drinking worries Jeffrey in The Partridge Season?|Mr Partridge|Fred Quilley|Ted Bovis|Barry Stuart-Hargreaves|Easy|The Partridge Season|Series One|Mr Partridge|Alcohol Problems|Jeffrey Fairbrother|Staff Management|1981 Story
What weekday does Joe Maplin designate Sunshine Smile Day?|Thursday|Monday|Saturday|Wednesday|Hard|Charity Begins At Home|Sunshine Smile Day|Thursday|Joe Maplin|Ted Bovis|Camp Promotion|1981 Episode
What problem forces activities into the ballroom in If Wet - In the Ballroom?|Heavy rainfall|A power cut|A food shortage|An outbreak of illness|Medium|If Wet In The Ballroom|Series Two|Persistent Rain|Hawaiian Ballroom|Camp Activities|Wet Weather|1981 Plot
Which character gets a chance to perform in a swimming-pool event in Peggy's Big Chance?|Peggy Ollerenshaw|Gladys Pugh|Sylvia Garnsey|Yvonne Stuart-Hargreaves|Medium|Peggys Big Chance|Series Two|Peggy Ollerenshaw|Swimming Pool Stunt|Yellowcoat Ambition|Camp Activities|1981 Story
What unusual contest does Jeffrey object to in Lift Up Your Minds?|Who's Got The Wrong Trousers On?|Holiday Princess|Best Holiday Chalet|The Talent Parade|Hard|Lift Up Your Minds|Series Two|Wrong Trousers Contest|Jeffrey Fairbrother|Cultural Standards|Camper Competitions|1981 Episode
At what kind of venue does Ted hope to perform in On With The Motley?|Local golf club dinners|A theatre in London|A television studio|A village church|Medium|On With The Motley|Series Two|Ted Bovis|Golf Club Dinners|Outside Engagements|Comedy Career|Stage Performances
What event needs a float from Maplin's in Carnival Time?|The town carnival|A royal procession|A wedding parade|A school sports day|Medium|Carnival Time|Series Three|Town Carnival|Maplins Float|Ted Bovis|Jeffrey Fairbrother|Community Event
What proposed public building causes a conflict with Joe Maplin's plans in A Matter of Conscience?|A hospital|A new police station|A public library|A university|Medium|A Matter Of Conscience|Series Three|Proposed Hospital|Town Council|Joe Maplin|Camp Expansion|Local Planning
What position is Gladys awarded in the episode Stripes?|Head Yellowcoat|Assistant Manager|Chief Accountant|Swimming Pool Manager|Medium|Stripes|Series Three|Gladys Pugh|Head Yellowcoat|Joe Maplin|Camp Promotion|Staff Hierarchy
In Maplin Intercontinental, where is the company opening another holiday camp?|The Bahamas|Spain|Cyprus|Malta|Medium|Maplin Intercontinental|Series Three|Bahamas Camp|Joe Maplin|Overseas Expansion|Yellowcoat Competition|New Post
What building does Joe Maplin want demolished for camp expansion in Save Our Heritage?|A nearby cottage|An old railway station|A public school|A village cinema|Medium|Save Our Heritage|Series Four|Cottage Demolition|Joe Maplin|Camp Extension|Jeffrey Fairbrother|Local Heritage
Which camp employee is upset when Joe Maplin makes a decision about the horses in Empty Saddles?|Fred Quilley|Spike Dixon|Barry Stuart-Hargreaves|Mr Partridge|Medium|Empty Saddles|Series Four|Fred Quilley|Camp Horses|Former Jockey|Stables|1983 Story
Whose statue is due to be unveiled in The Graven Image?|Joe Maplin's|Jeffrey Fairbrother's|Ted Bovis's|Gladys Pugh's|Medium|The Graven Image|Series Four|Joe Maplin|Statue Unveiling|Camp Ceremony|Spike Dixon|1984 Episode
What job does Peggy gain in Off With The Motley?|Stores supervisor|Head receptionist|Senior dance instructor|Swimming coach|Medium|Off With The Motley|Series Five|Peggy Ollerenshaw|Stores Supervisor|Staff Promotion|Camp Supplies|1984 Episode
Which camp entertainer is found dead in the swimming pool during the sixth series?|Mr Partridge|Ted Bovis|Fred Quilley|Sammy|Easy|Who Killed Mr Partridge|Series Six|Swimming Pool|Mystery Death|Punch And Judy Man|Camp Staff|1986 Episode
Who sacks Peggy in the episode Orphan of the Storm?|Alec Foster|Clive Dempster|Jeffrey Fairbrother|Joe Maplin|Medium|Orphan Of The Storm|Series Seven|Alec Foster|Peggy Dismissal|Camp Controller|Staff Solidarity|1986 Episode
Whose departure leaves Yvonne without her original ballroom partner in Pigs Might Fly?|Barry Stuart-Hargreaves|Fred Quilley|Spike Dixon|Ted Bovis|Medium|Pigs Might Fly|Series Seven|Barry Departure|Yvonne Stuart Hargreaves|Dance Partnership|Camp Entertainment|1986 Episode
Which character's family tries to prevent his wedding to Gladys in Wedding Bells?|Clive Dempster|Spike Dixon|Ted Bovis|Fred Quilley|Medium|Wedding Bells|Series Eight|Clive Dempster|Gladys Pugh|Wedding Plans|Family Objections|1988 Episode
Who needs replacing after falling ill in the final Hi-de-Hi! episode The Wind of Change?|Dawn Freshwater|Gladys Pugh|Yvonne Stuart-Hargreaves|Peggy Ollerenshaw|Hard|The Wind Of Change|Series Eight Finale|Dawn Freshwater|Staff Illness|Camp Programme|Replacement Performer|1988 Ending`;

const twainFacts = `Who played antique dealer Simon Peel in Never the Twain?|Donald Sinden|Windsor Davies|John Thaw|Richard Wilson|Easy|Donald Sinden|Simon Peel|Lead Actor|Antiques Dealer|Rivalry|Thames Television|1980s Sitcom
Which actor portrayed Simon Peel's rival Oliver Smallbridge?|Windsor Davies|Donald Sinden|Derek Deadman|Teddy Turner|Easy|Windsor Davies|Oliver Smallbridge|Lead Actor|Antique Shop|Simon Rival|Actor Casting|Main Cast
What trade do Simon Peel and Oliver Smallbridge work in?|Antiques dealing|Used-car sales|Property management|Book publishing|Easy|Antiques Trade|Simon Peel|Oliver Smallbridge|Competing Shops|Collectors|Period Objects|Workplace Rivalry
What business relationship did Simon and Oliver have before they became enemies?|They were partners|They were employer and apprentice|They were rival auctioneers|They were landlord and tenant|Medium|Former Business Partners|Antique Dealers|Simon Peel|Oliver Smallbridge|Broken Partnership|Backstory|Neighbour Feud
How are Simon's and Oliver's antique shops positioned?|Next door to each other|On opposite sides of town|In different counties|In the same department store|Easy|Adjacent Shops|Simon Peel|Oliver Smallbridge|Neighbour Businesses|Antique Retail|Rival Premises|Series Setting
Which family relationship between their children frustrates Simon and Oliver?|Their children fall in love|Their children become business rivals|Their children go to the same boarding school|Their children run away together as friends|Easy|David Peel|Lyn Smallbridge|Young Couple|Fathers Rivalry|Romantic Plot|Family Links|Series Premise
Who is Oliver Smallbridge's daughter in Never the Twain?|Lyn|Rita|Eleanor|Veronica|Easy|Lyn Smallbridge|Oliver Daughter|Julia Watson|Family Cast|David Peel|Wedding Story|First Series
Who is Simon Peel's son in the opening series?|David|Albert|Ringo|Martin|Easy|David Peel|Simon Son|Robin Kermode|Family Relationships|Lyn Smallbridge|Marriage Story|Young Adult
Which actress played Lyn Smallbridge in the first three series?|Julia Watson|Maria Charles|Zara Nutley|Honor Blackman|Medium|Julia Watson|Lyn Smallbridge|Original Performer|Series One To Three|Actor Casting|David Wife|Thames Sitcom
Who played David Peel in the first three series of Never the Twain?|Robin Kermode|Derek Deadman|Teddy Turner|Christopher Morris|Medium|Robin Kermode|David Peel|Original Performer|Series One To Three|Simon Son|Actor Casting|Young Couple
Who played shop assistant Ringo in Never the Twain?|Derek Deadman|Teddy Turner|Robin Kermode|Donald Sinden|Medium|Derek Deadman|Ringo|Shop Assistant|Supporting Cast|Series Regular|Actor Casting|Comedic Mishaps
Which actor played the older helper Albert Banks?|Teddy Turner|Derek Deadman|Robin Kermode|Christopher Morris|Hard|Teddy Turner|Albert Banks|Series One To Seven|Supporting Actor|Simon Household|Actor Casting|Long Running Character
Who portrayed Oliver's cleaner Rita Sadler?|Maria Charles|Zara Nutley|Honor Blackman|Julia Watson|Medium|Maria Charles|Rita Sadler|Mrs Sadler|Cleaner|Oliver Household|Actor Casting|Supporting Character
Which actress appeared as Simon's formidable Aunt Eleanor in the later series?|Zara Nutley|Honor Blackman|Maria Charles|Julia Watson|Medium|Zara Nutley|Aunt Eleanor|Series Nine To Eleven|Simon Family|Late Series Cast|Actor Casting|Supporting Role
Which actress played the widow Veronica Barton, whose porcelain collection interests both dealers?|Honor Blackman|Zara Nutley|Maria Charles|Julia Watson|Hard|Honor Blackman|Veronica Barton|Meissen Porcelain|Widow|Romantic Competition|Guest Casting|Series One
Who played Lyn Peel when the character returned in series eight?|Tacy Kneale|Julia Watson|Maria Charles|Zara Nutley|Hard|Tacy Kneale|Lyn Peel|Series Eight|Character Recasting|Daughter Of Oliver|1988 Revival Role|Cast Change
Which actor took over the role of David Peel in the eighth series?|Christopher Morris|Robin Kermode|Derek Deadman|Teddy Turner|Hard|Christopher Morris|David Peel|Series Eight Recast|Simon Son|Actor Casting|1988 Series|Return Of Couple
Who created the sitcom Never the Twain?|Johnnie Mortimer|Jimmy Perry|Richard Curtis|David Renwick|Medium|Johnnie Mortimer|Series Creator|British Television Writing|Sitcom Origin|Antique Dealers|Programme Credits|ITV Comedy
Which television company produced Never the Twain?|Thames Television|Granada Television|Yorkshire Television|London Weekend Television|Medium|Thames Television|Production Company|ITV|1980s Comedy|Programme Maker|Studio Sitcom|Broadcast History
On which television network did Never the Twain first appear?|ITV|BBC One|BBC Two|Channel 4|Easy|ITV|Original Channel|British Television|1981 Premiere|Thames Television|Broadcast Network|Sitcom Scheduling
In what year did Never the Twain begin on television?|1981|1977|1984|1988|Easy|1981 Debut|First Series|Original Broadcast|ITV|Series Timeline|Programme Premiere|Television History
In which year did Never the Twain end its original run?|1991|1986|1994|1998|Easy|1991 Finale|Eleventh Series|Last Broadcast|ITV|Programme Timeline|End Of Run|Series Completion
How many series of Never the Twain were broadcast?|Eleven|Seven|Nine|Thirteen|Medium|Eleven Series|Series Count|1981 To 1991|ITV Catalogue|Long Running Sitcom|Programme Statistics|Broadcast Run
How many episodes of Never the Twain were made, including the Christmas special?|67|58|74|82|Medium|Sixty Seven Episodes|Episode Count|Christmas Special|Eleven Series|Production Statistics|Broadcast Total|Programme Catalogue
What is the title of Never the Twain's first episode?|Families at War|Taking Stock|A Home of Your Own|Father of the Groom|Medium|Families At War|1981 Premiere|First Episode|Fathers Rivalry|David And Lyn|Episode Title|Series One
What valuable type of china do Simon and Oliver compete to buy from Veronica Barton?|Meissen porcelain|Wedgwood jasperware|Royal Doulton figurines|Worcester bone china|Hard|Of Meissen Men|Veronica Barton|Meissen Porcelain|Antique Collection|Simon And Oliver|Bargain Hunting|Series One
Which Scottish city is the destination for an opera weekend with Veronica in A Night at the Opera?|Edinburgh|Glasgow|Aberdeen|Dundee|Medium|A Night At The Opera|Edinburgh|Veronica Barton|Opera Weekend|Simon Peel|Oliver Smallbridge|Series One
Whose antiques shop is burgled in A Matched Pair?|Oliver Smallbridge's|Simon Peel's|Ringo's|Veronica Barton's|Medium|A Matched Pair|Oliver Shop|Burglary|Stolen Antiques|Simon Peel|Series One|Police Trouble
What kind of objects cause trouble after Oliver's burglary in A Matched Pair?|Antique pistols|Silver candlesticks|Porcelain vases|Gold watches|Hard|A Matched Pair|Pair Of Pistols|Oliver Smallbridge|Simon Shop Window|Insurance Claim|Arrest|Antique Objects
Which pair get married in the first-series finale Father of the Groom?|David and Lyn|Simon and Veronica|Oliver and Rita|Albert and Eleanor|Easy|Father Of The Groom|David Peel|Lyn Smallbridge|Wedding|Series One Finale|Fathers Feud|Marriage Ceremony
What sporting club does Simon help Oliver try to join in the second series?|Golf club|Tennis club|Cricket club|Sailing club|Medium|Whos Been Sleeping In My Bed|Golf Club|Oliver Smallbridge|Simon Peel|Membership Nomination|Social Standing|Series Two
Who rescues Simon in the episode Blood Brothers?|Oliver Smallbridge|David Peel|Ringo|Albert Banks|Medium|Blood Brothers|Series Two|Oliver Smallbridge|Simon Peel|Life Saving|Unexpected Gratitude|Family Feud
Which of Simon's relatives attracts Oliver's attention in If You Knew Susan?|His younger sister|His aunt|His cousin|His daughter-in-law|Medium|If You Knew Susan|Simon Sister Susan|Oliver Smallbridge|Romantic Interest|Family Boundaries|Series Two|1982 Episode
What business do Simon and Oliver attempt to run together again in series three?|An antiques partnership|A restaurant|A travel agency|A car dealership|Medium|Taking Stock|Series Three|Antiques Partnership|Former Rivals|Business Reconciliation|Profits|1983 Episodes
Why do Simon and Oliver interfere in David and Lyn's plans in The End of the Line?|They want grandchildren|They want the couple to move abroad|They want the couple to open a shop|They want the couple to buy a horse|Medium|The End Of The Line|Series Three|Grandchildren|David Peel|Lyn Peel|Fathers Interference|Family Planning
What type of public broadcast unsettles Simon and Oliver in Not on the Same Wavelength?|A local radio interview|A television election debate|A televised auction|A public-address announcement|Medium|Not On The Same Wavelength|Series Three|Local Radio|Expectant Lyn|Simon And Oliver|Public Interview|1983 Episode
To which country do David and Lyn move before Never the Twain's fourth series?|Canada|Australia|Ireland|New Zealand|Medium|A Home Of Your Own|Series Four|Canada Move|David Peel|Lyn Peel|Fathers Alone|1984 Episode
What kind of stage performance does Simon plan in response to Oliver's singing in Words and Music?|A dramatic recitation|A stand-up comedy act|A juggling routine|A magic show|Medium|Words And Music|Series Four|Simon Peel|Dramatic Recitation|Oliver Singing|Charity Event|1984 Episode
Which country do Simon and Oliver plan to fly to in Come Fly with Me to visit their children?|Canada|France|Spain|Italy|Medium|Come Fly With Me|Series Four|Canada Visit|Air Travel|David And Lyn|Cheap Flights|1984 Finale
Which martial art does Oliver try after a challenge from Simon in Kung Who?|Judo|Karate|Aikido|Taekwondo|Medium|Kung Who|Series Five|Judo Challenge|Oliver Smallbridge|Simon Peel|Physical Rivalry|1986 Plot
Which sport do the two dealers play alongside unusually elderly teammates in series five?|Cricket|Rugby|Golf|Lawn bowls|Medium|Definitely Not Cricket|Series Five|Local Cricket|Veteran Team|Simon And Oliver|Sporting Adventure|1986 Episode
Which character becomes involved in a library visit that frustrates a property developer in Reading Between the Lines?|Ringo|Albert Banks|David Peel|Veronica Barton|Hard|Reading Between The Lines|Series Five|Ringo|Library Visit|Property Developer|Local Neighbourhood|1986 Story
Who nurses Simon when he catches a cold in Feed a Cold?|Oliver Smallbridge|Albert Banks|David Peel|Ringo|Medium|Feed A Cold|Series Six|Simon Illness|Oliver Kindness|Rival Friendship|1987 Episode|Unwanted Care
Which host invites Simon and Oliver to the ill-fated dinner party in Going to Pot?|Ringo|Aunt Eleanor|Veronica Barton|Lady Deveraux|Medium|Going To Pot|Series Six|Ringo Dinner Party|Antique Pottery|Simon Peel|Oliver Smallbridge|1987 Episode
What period of British history is re-enacted in The Battle of Deveraux Dale?|The English Civil War|The Wars of the Roses|The Norman Conquest|The Jacobite rising|Hard|The Battle Of Deveraux Dale|Series Six|English Civil War|Lady Deveraux|Village Fete|Historical Reenactment|1987 Plot
Who arrives in Affair of the Heart and worries her former husband Simon?|Stephanie|Veronica|Eleanor|Rita|Medium|Affair Of The Heart|Series Six|Stephanie Peel|Simon Ex Wife|Oliver Smallbridge|Family History|1987 Episode
Which employee proposes marriage to Mrs Sadler in Betrothed, Bothered and Bewildered?|Albert Banks|Ringo|David Peel|Simon Peel|Medium|Betrothed Bothered And Bewildered|Series Seven|Albert Banks|Mrs Sadler|Marriage Proposal|Romantic Story|1988 Episode
Which country do Simon and Oliver fly to in Fasten Your Seat Belts to see their grandson?|Canada|Spain|France|Ireland|Medium|Fasten Your Seat Belts|Series Seven|Canada Trip|Grandson Visit|Simon Peel|Oliver Smallbridge|1988 Plot
What is the first name of Simon and Oliver's grandson in the eighth series?|Martin|David|Albert|Peter|Hard|Grandfathers In Law|Series Eight|Baby Martin|Lyn Peel|David Peel|Grandfather Rivalry|1988 Return
What kind of occasion causes disagreement in Whose Baby? when David approaches his father?|Their baby's christening|An anniversary dinner|A first birthday party|A school admission|Medium|Whose Baby|Series Eight|Baby Christening|David Peel|Simon Peel|Oliver Smallbridge|Family Dispute
What organisation does Simon call a meeting of in the episode Neighbours?|Residents' association|Historical society|Chamber of commerce|Local cricket club|Medium|Neighbours|Series Nine|Residents Association|Simon Peel|New Neighbour|Community Meeting|1989 Episode
Which European capital do the rivals visit during a troubled trip in series nine?|Paris|Brussels|Vienna|Rome|Easy|Bonjour Paris|Series Nine|Paris|French Restaurant|Police Incident|Embassy Official|1989 Episode
What building do Simon and Oliver watch overnight in the Christmas special A Winter's Tale?|The local church|A museum|An antiques warehouse|A school|Medium|A Winters Tale|1989 Christmas Special|Church Watch|Simon And Oliver|Community Volunteers|Night Duty|Festive Episode
Which elected body do both rivals try to join in X Marks the Spot?|The local council|The parish church committee|The county cricket board|The school governors|Medium|X Marks The Spot|Series Ten|Local Council|Election Candidates|Simon Peel|Oliver Smallbridge|1990 Episode
What kind of romantic correspondence occupies Simon in S.W.A.L.K.?|Letters from a pen-pal|Anonymous telephone calls|Messages by carrier pigeon|Notes from an old diary|Medium|SWALK|Series Ten|Simon Peel|Female Pen Pal|Marriage Hopes|Correspondence|1990 Plot
What gambling competition do the two dealers enter in Who Wants to Be a Millionaire?|The football pools|The National Lottery|A horse-race sweepstake|A bingo jackpot|Medium|Who Wants To Be A Millionaire|Series Ten|Football Pools|Simon Peel|Oliver Smallbridge|Lottery Style Game|1990 Episode
Where is the holiday cottage used in Happy Holiday linked to?|Ringo's mother|Simon's aunt|Oliver's sister|Veronica's daughter|Medium|Happy Holiday|Series Ten|Ringo Mother|Country Cottage|Mistimed Visit|Weekend Away|1990 Episode
What destination does Ringo win a holiday to in Viva Espana?|Spain|France|Portugal|Greece|Medium|Viva Espana|Series Eleven|Ringo Competition|Spain Holiday|Travel Prize|Group Trip|1991 Episode
Which relative announces plans to marry in There Goes the Bride?|Aunt Eleanor|Lyn Peel|Mrs Sadler|Veronica Barton|Medium|There Goes The Bride|Series Eleven|Aunt Eleanor|Whirlwind Romance|Wedding Plans|Simon Family|1991 Plot
Whose help do Simon and Oliver seek when both have financial troubles in Two Fools and Their Money?|Their bank manager|Their local councillor|A solicitor|A rich American collector|Medium|Two Fools And Their Money|Series Eleven|Bank Manager|Financial Trouble|Simon Peel|Oliver Smallbridge|1991 Episode
What are the rivals desperate to be first in line for during Never the Twain's final episode?|A bargain at a shop|A concert ticket|A wedding reception|A flight abroad|Medium|The First Of The Queue|Series Eleven Finale|Shop Bargain|Queue Rivalry|Oliver Smallbridge|Simon Peel|1991 Ending`;

const questions = [];

function addBlock(block, programme, era) {
  const rows = block.trim().split('\n');
  for (const [i, row] of rows.entries()) {
    const parts = row.split('|').map(s => s.trim());
    if (parts.length !== 13 || parts.some(s => !s)) {
      throw new Error(`${programme}, row ${i + 1}: invalid number of fields`);
    }
    const [rawQuestion, correctAnswer, a, b, c, difficulty, ...specificTags] = parts;
    const question = rawQuestion.toLowerCase().includes(programme.toLowerCase())
      ? rawQuestion : `In ${programme}, ${rawQuestion[0].toLowerCase()}${rawQuestion.slice(1)}`;
    const answers = [a, b, c];
    answers.splice(questions.length % 4, 0, correctAnswer);
    const item = {
      id: `tv_${FIRST_ID + questions.length}`,
      category: 'Television',
      question,
      answers,
      correctAnswer,
      difficulty,
      tags: [...new Set(['Television', 'British Sitcom', programme, era, correctAnswer, ...specificTags])],
      dailyEligible: true
    };
    if (new Set(answers.map(x => x.toLowerCase())).size !== 4 ||
        !answers.includes(correctAnswer) ||
        !['Easy','Medium','Hard'].includes(difficulty) ||
        item.tags.length < 10) throw new Error(`Invalid question: ${item.id}`);
    questions.push(item);
  }
}
addBlock(hiFacts, 'Hi-de-Hi!', '1980-1988');
addBlock(twainFacts, 'Never the Twain', '1981-1991');
const unique = new Set(questions.map(q => q.question.toLowerCase().replace(/[^a-z0-9]/g, '')));
if (unique.size !== questions.length) throw new Error('Duplicate question text');
module.exports = questions;
