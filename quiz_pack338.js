
 // quiz_pack338.js
 // PuzzlePilot — The Bigggggg Quiz
 // The Likely Lads Collection
 //
 // The Likely Lads (1964–1966)
 // Whatever Happened to the Likely Lads? (1973–1974)
 // The Likely Lads film (1976)
 //
 // 99 questions: 36 + 51 + 12.
 // IDs tv_15994–tv_16092.
 // Seven individually selected specialist tags per question.

 const facts = `
 The Likely Lads|Who played Terry Collier in The Likely Lads?|James Bolam|Rodney Bewes|Bill Owen|Brian Wilde|Easy|Terry Collier|James Bolam|Leading Actor|Character Casting|Working Class|Main Cast|1960s Comedy
 The Likely Lads|Which actor portrayed Bob Ferris?|Rodney Bewes|James Bolam|Fulton Mackay|Peter Vaughan|Easy|Bob Ferris|Rodney Bewes|Leading Actor|Character Casting|Best Friend|Main Cast|1960s Comedy
 The Likely Lads|Which writers created The Likely Lads?|Dick Clement and Ian La Frenais|Galton and Simpson|Perry and Croft|John Sullivan and Roy Clarke|Medium|Dick Clement|Ian La Frenais|Writing Partnership|Series Creators|BBC Comedy|Production Credits|Sitcom History
 The Likely Lads|In which year did The Likely Lads first appear on television?|1964|1961|1968|1973|Easy|1964 Premiere|First Broadcast|BBC Two|Original Series|Television History|1960s Television|Debut Year
 The Likely Lads|Which BBC channel originally showed The Likely Lads?|BBC Two|BBC One|BBC Three|ITV|Medium|BBC Two|Original Broadcaster|1964 Television|BBC Network|Programme Launch|Black And White|Broadcast History
 The Likely Lads|How many regular series of the original The Likely Lads were produced?|Three|Two|Four|Five|Easy|Three Series|Original Run|1964 To 1966|BBC Television|Series Count|Programme History|Production Run
 The Likely Lads|How many regular episodes of the original The Likely Lads were made, excluding its Christmas sketch?|Twenty|Sixteen|Twenty-Six|Thirty|Medium|Twenty Episodes|Regular Episodes|Original Series|1964 To 1966|Episode Count|BBC Sitcom|Programme History
 The Likely Lads|Was the original 1960s television series produced in colour or black and white?|Black and white|Colour|A mixture of both|Sepia|Easy|Black And White|1960s Television|Original Production|BBC Two|Picture Format|Series History|Television Technology
 The Likely Lads|At which factory do Bob and Terry work in the original sitcom?|Ellison's Electrical|Slade Engineering|Chambers Construction|Collier Motors|Medium|Ellisons Electrical|Factory Employment|Bob Ferris|Terry Collier|Working Class|Original Series|Workplace Setting
 The Likely Lads|Which English region provides the main setting of The Likely Lads?|North East England|South West England|East Anglia|West Midlands|Easy|North East England|Newcastle Area|Regional Comedy|Series Setting|Working Class|Geography|British Television
 The Likely Lads|What is the first name of Terry Collier's sister?|Audrey|Thelma|Susan|Christine|Medium|Audrey Collier|Terry Sister|Collier Family|Character Name|Family Relationship|Supporting Cast|1960s Sitcom
 The Likely Lads|Which actress played Terry's sister Audrey?|Sheila Fearn|Brigit Forsyth|Joan Hickson|Patricia Brake|Medium|Sheila Fearn|Audrey Collier|Character Casting|Terry Sister|Collier Family|Supporting Actress|Original Series
 The Likely Lads|Which actress played Thelma Chambers in the original series?|Brigit Forsyth|Sheila Fearn|Mary Tamm|Anita Carey|Medium|Brigit Forsyth|Thelma Chambers|Character Casting|Bob Romance|Supporting Cast|Original Series|Returning Character
 The Likely Lads|Which character is most determined to improve his social position?|Bob Ferris|Terry Collier|Cloughie|Jack|Easy|Bob Ferris|Social Ambition|Class Mobility|Rodney Bewes|Character Motivation|Working Class|Friendship Contrast
 The Likely Lads|Which of the two lads joins the army at the end of the original series?|Terry Collier|Bob Ferris|Both of them|Neither of them|Easy|Terry Collier|Army Enlistment|Series Three|1966 Ending|Military Service|Character Departure|Final Storyline
 The Likely Lads|Why is Bob rejected when he attempts to join the army?|He has flat feet|He fails a written test|He is too young|He refuses basic training|Medium|Bob Ferris|Flat Feet|Army Rejection|1966 Finale|Medical Examination|Enlistment|Character Storyline
 The Likely Lads|What is the title of the original programme's first episode?|Entente Cordiale|Double Date|Rocker|The Suitor|Medium|Entente Cordiale|Series Premiere|1964 Broadcast|Episode Title|Original Series|First Episode|Sitcom History
 The Likely Lads|From which country have the lads returned in Entente Cordiale?|Spain|France|Italy|Greece|Medium|Entente Cordiale|Spanish Holiday|Foreign Travel|Series One|1964 Premiere|Holiday Romance|Episode Setting
 The Likely Lads|Which early episode features Bob being cheered up by a double date?|Double Date|The Suitor|Rocker|A Star Is Born|Medium|Double Date|1964 Episode|Bob Ferris|Romantic Outing|Series One|Dating Storyline|Episode Title
 The Likely Lads|Which episode contrasts Terry's older girlfriend with Bob's younger one?|Older Women Are More Experienced|Far Away Places|The Talk of the Town|Goodbye to All That|Medium|Older Women Are More Experienced|Dating|Age Difference|Bob Ferris|Terry Collier|Series One|Episode Title
 The Likely Lads|In The Other Side of the Fence, what career opportunity is offered to Bob?|A management job|A job in the army|A professional football contract|A television presenting role|Medium|Other Side Of The Fence|Management Job|Bob Ferris|Career Ambition|Factory Work|Series One|Episode Plot
 The Likely Lads|Which country might Bob and Terry emigrate to in Chance of a Lifetime?|Australia|Canada|New Zealand|South Africa|Medium|Chance Of A Lifetime|Australia|Emigration|Series One|Overseas Opportunity|1965 Episode|Episode Plot
 The Likely Lads|In The Suitor, Terry objects to the boyfriend of which family member?|His sister Audrey|His mother|His cousin|His aunt|Medium|The Suitor|Audrey Collier|Italian Boyfriend|Terry Collier|Family Interference|Series One|Episode Storyline
 The Likely Lads|In A Star Is Born, what kind of competition do the lads enter?|A pub talent contest|A football tournament|A dance marathon|A television quiz|Medium|A Star Is Born|Pub Talent Night|1965 Episode|Series Two|Entertainment Contest|Bob And Terry|Episode Storyline
 The Likely Lads|Which episode features rumours of Bob's engagement to Thelma?|The Talk of the Town|Double Date|Rocker|Far Away Places|Medium|Talk Of The Town|Bob Ferris|Thelma Chambers|Engagement Rumours|Series Two|1965 Episode|Episode Title
 The Likely Lads|In The Last of the Big Spenders, where do the two girls the lads meet come from?|London|Manchester|Glasgow|Birmingham|Medium|Last Of The Big Spenders|London Girls|1965 Episode|Night Out|Dating|Series Two|Episode Storyline
 The Likely Lads|What prevents the lads easily arranging another foreign holiday in Far Away Places?|Lack of money|Lost passports|An airline strike|A broken-down car|Medium|Far Away Places|Holiday Savings|Money Problems|1965 Episode|Foreign Travel|Series Two|Episode Plot
 The Likely Lads|What occasion prompts the lads to reflect on their unmarried status in Where Have All the Flowers Gone?|A friend's wedding|A school reunion|A birthday party|A christening|Medium|Where Have All The Flowers Gone|Friends Wedding|Remaining Bachelors|Series Two|1965 Episode|Marriage Theme|Episode Storyline
 The Likely Lads|What vehicle does Bob buy in Rocker?|A moped|A sports car|A bicycle|A motorcycle with sidecar|Medium|Rocker|Bob Ferris|Moped|Series Three|1966 Episode|Vehicle Purchase|Episode Plot
 The Likely Lads|In Goodbye to All That, which institution does Bob attempt to join?|The army|The navy|The police|The fire service|Medium|Goodbye To All That|Bob Ferris|Army Recruitment|Final Episode|Series Three|1966 Broadcast|Episode Storyline
 The Likely Lads|In which year did the original series finish?|1966|1964|1969|1972|Easy|1966 Finale|Original Series|Final Broadcast|BBC Two|Programme History|Series Three|Broadcast Year
 The Likely Lads|Which youth organisation had Bob and Terry belonged to together?|The Scouts|The Sea Cadets|The Boys Brigade|The Air Training Corps|Medium|Scouts|Childhood Friendship|Bob Ferris|Terry Collier|Shared History|North East Childhood|Character Background
 The Likely Lads|What is Bob Ferris's first name in full?|Robert|Robin|Ronald|Roger|Easy|Robert Ferris|Bob Ferris|Full First Name|Rodney Bewes|Character Identity|Main Cast|Naming Trivia
 The Likely Lads|What is Terry Collier's first name in full?|Terence|Terrence|Theodore|Thomas|Medium|Terence Collier|Terry Collier|Full First Name|James Bolam|Character Identity|Main Cast|Naming Trivia
 The Likely Lads|Why are some episodes of the original series no longer available in the BBC archives?|They were wiped or lost|They were never filmed|They were banned before broadcast|They were made only for radio|Medium|Missing Episodes|BBC Archive|Tape Wiping|1960s Television|Preservation History|Lost Programmes|Broadcast Heritage
 The Likely Lads|Which other medium featured adaptations of episodes using the original cast?|Radio|Stage ballet|Silent film|Animated shorts|Medium|Radio Adaptations|BBC Radio|Original Cast|Programme Adaptation|1960s Comedy|Audio Drama|Broadcast History

 Whatever Happened to the Likely Lads?|In which year did Whatever Happened to the Likely Lads? first air?|1973|1966|1970|1977|Easy|1973 Premiere|Colour Sequel|BBC One|Series One|Broadcast History|Television Debut|Programme Year
 Whatever Happened to the Likely Lads?|Which channel broadcast the 1970s sequel?|BBC One|BBC Two|ITV|Channel 4|Easy|BBC One|Original Broadcaster|1973 Television|Colour Sitcom|Network History|Programme Launch|Transmission
 Whatever Happened to the Likely Lads?|How did the sequel's television picture format differ from the original?|It was made in colour|It was filmed entirely in black and white|It was silent|It used only animation|Easy|Colour Television|1970s Sequel|Production Change|Original Comparison|Picture Format|BBC One|Programme History
 Whatever Happened to the Likely Lads?|How many regular series did the sequel have?|Two|Three|Four|One|Easy|Two Series|1973 To 1974|Series Count|BBC Sitcom|Programme Run|Production History|Completed Series
 Whatever Happened to the Likely Lads?|How many episodes of the sequel were broadcast including its Christmas special?|Twenty-seven|Twenty|Thirty-two|Twenty-four|Medium|Twenty Seven Episodes|Episode Count|Christmas Special|1973 To 1974|BBC One|Series History|Programme Length
 Whatever Happened to the Likely Lads?|In which year was the sequel's Christmas special broadcast?|1974|1972|1976|1978|Medium|1974 Christmas|Christmas Special|BBC One|Festive Broadcast|Episode History|Series Conclusion|Broadcast Year
 Whatever Happened to the Likely Lads?|Which character returns from military service at the beginning of the sequel?|Terry Collier|Bob Ferris|Jack|Cloughie|Easy|Terry Collier|Army Return|Demobilisation|1973 Premiere|James Bolam|Character Return|Sequel Premise
 Whatever Happened to the Likely Lads?|Where do Bob and Terry unexpectedly meet again in the first episode?|On a train|At a football ground|In a restaurant|At a wedding|Easy|Strangers On A Train|Reunion|Railway Journey|Bob And Terry|1973 Premiere|Episode Setting|Friendship
 Whatever Happened to the Likely Lads?|To whom is Bob engaged when Terry returns?|Thelma Chambers|Audrey Collier|Susan Chambers|Christina|Easy|Bob Ferris|Thelma Chambers|Engagement|Wedding Plans|Returning Characters|Romance|Series One
 Whatever Happened to the Likely Lads?|Which actress played Thelma Chambers Ferris?|Brigit Forsyth|Sheila Fearn|Mary Tamm|Anita Carey|Easy|Brigit Forsyth|Thelma Ferris|Character Casting|Bob Wife|Regular Cast|Marriage Storyline|Actress Identification
 Whatever Happened to the Likely Lads?|Who played Terry's sister Audrey?|Sheila Fearn|Brigit Forsyth|Joan Hickson|Susan Jameson|Medium|Sheila Fearn|Audrey Collier|Terry Sister|Character Casting|Returning Cast|Family Relationship|Supporting Actress
 Whatever Happened to the Likely Lads?|What is the name of Thelma's sister?|Susan|Audrey|Marion|Irene|Medium|Susan Chambers|Thelma Sister|Family Relationship|Terry Romance|Supporting Character|Chambers Family|Character Name
 Whatever Happened to the Likely Lads?|Which surname belongs to Terry?|Collier|Ferris|Chambers|Scaife|Easy|Terry Collier|Character Surname|James Bolam|Best Friend|Main Character|Family Name|Sequel Cast
 Whatever Happened to the Likely Lads?|Which surname belongs to Bob?|Ferris|Collier|Chambers|Hargreaves|Easy|Bob Ferris|Character Surname|Rodney Bewes|Best Friend|Main Character|Family Name|Sequel Cast
 Whatever Happened to the Likely Lads?|What type of company employs Bob after he leaves factory work?|A construction company|A shipping company|An insurance company|A car manufacturer|Medium|Bob Ferris|Construction Industry|Father In Law Employer|Career Progress|Middle Class Ambition|White Collar Work|Character Occupation
 Whatever Happened to the Likely Lads?|What is Thelma's occupation?|Librarian|Nurse|Teacher|Secretary|Medium|Thelma Chambers|Librarian|Brigit Forsyth|Character Occupation|Bob Fiancee|Workplace|Marriage Storyline
 Whatever Happened to the Likely Lads?|Which social class does Bob increasingly aspire to join?|Middle class|Aristocracy|Working class|Royal family|Easy|Bob Ferris|Middle Class Ambition|Social Mobility|Class Conflict|Terry Collier|1970s Society|Character Motivation
 Whatever Happened to the Likely Lads?|What is the title of the sequel's theme song?|Whatever Happened to You?|Those Were the Days|Goodbye to All That|The Boys Are Back|Medium|Whatever Happened To You|Theme Song|Opening Music|Series Identity|1970s Sitcom|Musical Credits|Programme Soundtrack
 Whatever Happened to the Likely Lads?|Which musician composed the theme music for the sequel?|Mike Hugg|Ronnie Hazlehurst|Tony Hatch|John Barry|Medium|Mike Hugg|Theme Composer|Opening Music|Production Credits|Soundtrack|1970s Television|Music Trivia
 Whatever Happened to the Likely Lads?|Which television award did the sequel win in 1974?|BAFTA for Best Situation Comedy|Emmy for Best Drama|Golden Globe for Best Musical|Olivier for Best Comedy|Medium|1974 BAFTA|Best Situation Comedy|Television Awards|Critical Recognition|BBC Sitcom|Programme Achievement|British Comedy
 Whatever Happened to the Likely Lads?|What is the first episode of the sequel called?|Strangers on a Train|Home Is the Hero|Cold Feet|Moving On|Medium|Strangers On A Train|Series Premiere|1973 Broadcast|Reunion Episode|Episode Title|Rail Journey|BBC One
 Whatever Happened to the Likely Lads?|At which railway station does Bob become stranded in Strangers on a Train?|Doncaster|York|Durham|Leeds|Hard|Doncaster Station|Strangers On A Train|Bob Ferris|Railway Mishap|1973 Premiere|Travel Problem|Episode Detail
 Whatever Happened to the Likely Lads?|In Home Is the Hero, who offers Terry somewhere to stay?|Bob Ferris|Thelma's father|Susan Chambers|A former army officer|Medium|Home Is The Hero|Bob Ferris|Terry Homecoming|Temporary Accommodation|Series One|Friendship Help|Episode Storyline
 Whatever Happened to the Likely Lads?|Which episode explores Bob's doubts about his approaching wedding?|Cold Feet|Birthday Boy|The Great Race|Absent Friends|Medium|Cold Feet|Bob Ferris|Wedding Doubts|Thelma Chambers|Series One|Premarital Anxiety|Episode Title
 Whatever Happened to the Likely Lads?|In Moving On, which old army friend does Terry seek out?|Hughie McClaren|Douggie Scaife|Joe Hargreaves|Cloughie|Hard|Moving On|Hughie McClaren|Army Friendship|Terry Collier|Berwickshire|Series One|Episode Storyline
 Whatever Happened to the Likely Lads?|Which episode features Terry trying to contact former girlfriends using an old address book?|I'll Never Forget What's-Her-Name?|The Old Magic|Between Ourselves|Heart to Heart|Medium|Ill Never Forget Whats Her Name|Old Address Book|Former Girlfriends|Terry Collier|Series One|Dating|Episode Plot
 Whatever Happened to the Likely Lads?|What event does Bob organise for Terry in Birthday Boy?|A surprise birthday party|An engagement dinner|A football match|A farewell party|Medium|Birthday Boy|Surprise Party|Terry Birthday|Bob Ferris|Series One|Friendship Gesture|Episode Plot
 Whatever Happened to the Likely Lads?|In No Hiding Place, which sport's result do Bob and Terry try to avoid hearing?|Football|Cricket|Rugby|Tennis|Easy|No Hiding Place|Football Result|Television Highlights|Sports Spoilers|Series One|Bob And Terry|Episode Storyline
 Whatever Happened to the Likely Lads?|Which country is England playing in the match featured in No Hiding Place?|Bulgaria|Poland|Italy|Scotland|Medium|No Hiding Place|England Bulgaria|Football International|Sports Result|1973 Episode|Match Spoiler|Episode Detail
 Whatever Happened to the Likely Lads?|Which episode concerns Bob trying to broaden Terry's circle of friends?|Guess Who's Coming to Dinner?|The Expert|Cold Feet|The Great Race|Medium|Guess Whos Coming To Dinner|New Friends|Social Circle|Bob Ferris|Terry Collier|Series One|Episode Plot
 Whatever Happened to the Likely Lads?|In Storm in a Tea Chest, what does Bob want to move to his new home?|His treasured possessions|His father's car|A boat|A football goal|Medium|Storm In A Tea Chest|Moving House|Bob Possessions|Thelma Ferris|Series One|Old Belongings|Episode Storyline
 Whatever Happened to the Likely Lads?|Why does Bob take Terry out for a meal in The Old Magic?|He did not choose him as best man|He forgot his birthday|He lost Terry's wages|He sold Terry's car|Medium|The Old Magic|Best Man Disappointment|Bob Ferris|Terry Collier|Restaurant Meal|Series One|Episode Plot
 Whatever Happened to the Likely Lads?|In Count Down, what formal clothing causes disagreement over the wedding?|Top hat and tails|Dinner jackets|Military uniforms|Fancy-dress costumes|Medium|Count Down|Wedding Clothing|Top Hat And Tails|Mrs Chambers|Formal Wedding|Series One|Episode Detail
 Whatever Happened to the Likely Lads?|In Boys' Night In, what board game does Bob suggest instead of a stag night?|Ludo|Monopoly|Scrabble|Cluedo|Medium|Boys Night In|Ludo|Stag Night|Bob Ferris|Wedding Eve|Series One|Episode Detail
 Whatever Happened to the Likely Lads?|Which episode features Bob and Thelma's wedding?|The End of an Era|Cold Feet|Absent Friends|The Expert|Easy|End Of An Era|Bob And Thelma Wedding|Series One Finale|1973 Episodes|Marriage Ceremony|Episode Title|Character Relationship
 Whatever Happened to the Likely Lads?|Where do Bob and Thelma spend their honeymoon?|Norway|Spain|France|Greece|Medium|Absent Friends|Norway|Skiing Honeymoon|Bob And Thelma|Series Two|1974 Premiere|Episode Setting
 Whatever Happened to the Likely Lads?|Which woman does Terry become interested in while Bob and Thelma are away?|Susan Chambers|Audrey Collier|Thelma Ferris|Christina|Medium|Absent Friends|Susan Chambers|Thelma Sister|Terry Romance|Series Two|Honeymoon Absence|Episode Storyline
 Whatever Happened to the Likely Lads?|What injury does Bob have after returning from his honeymoon in Heart to Heart?|A broken leg|A broken arm|A sprained wrist|A fractured rib|Medium|Heart To Heart|Broken Leg|Bob Ferris|Aircraft Steps|Series Two|Honeymoon Accident|Episode Plot
 Whatever Happened to the Likely Lads?|Which episode contrasts Bob's domestic chores with Terry's carefree lifestyle?|The Ant and the Grasshopper|One for the Road|The Old Magic|Moving On|Medium|Ant And Grasshopper|Married Life|Domestic Chores|Terry Leisure|Bob Ferris|Series Two|Episode Theme
 Whatever Happened to the Likely Lads?|In One for the Road, what roadside test must Bob undergo?|A breathalyser test|An eyesight test|A vehicle noise test|A driving theory test|Medium|One For The Road|Breathalyser|Bob Ferris|Police Stop|Driving Licence|Series Two|Episode Plot
 Whatever Happened to the Likely Lads?|What vehicles do the lads race in The Great Race?|Bicycles|Motorcycles|Sports cars|Go-karts|Medium|The Great Race|Cycle Race|Bob Ferris|Terry Collier|Cross Country Competition|Series Two|Episode Storyline
 Whatever Happened to the Likely Lads?|In Some Day We'll Laugh About This, what work is Terry supposed to do at Bob's house?|DIY jobs|Gardening for a neighbour|Cooking for a party|Painting a pub sign|Medium|Some Day Well Laugh About This|DIY Jobs|Terry Collier|Bob House|Weekend Away|Series Two|Episode Plot
 Whatever Happened to the Likely Lads?|In In Harm's Way, where does Bob encounter further trouble after his accident?|A hospital outpatient department|A railway station|A football ground|A supermarket|Medium|In Harms Way|Hospital Outpatients|Bob Ferris|Injury|Terry Collier|Series Two|Episode Setting
 Whatever Happened to the Likely Lads?|What activity takes Bob and Terry away together in Affairs and Relations?|Fishing|Camping|Sailing|Hill climbing|Medium|Affairs And Relations|Fishing Weekend|Bob And Terry|Thelma Ferris|Hotel|Series Two|Episode Storyline
 Whatever Happened to the Likely Lads?|In The Expert, who leaves Bob after a marital argument?|Thelma|Susan|Audrey|Christina|Medium|The Expert|Thelma Ferris|Marriage Separation|Bob Ferris|Relationship Trouble|Series Two|Episode Plot
 Whatever Happened to the Likely Lads?|Who moves in with Bob while Thelma is away in Between Ourselves?|Terry Collier|Thelma's father|Susan Chambers|Hughie McClaren|Medium|Between Ourselves|Terry Moves In|Bob Ferris|Marriage Separation|Household Tension|Series Two|Episode Plot
 Whatever Happened to the Likely Lads?|In The Go-Between, what does Terry try to cook in Bob's toaster?|Chops|Bacon|Fish fingers|Sausages|Hard|The Go Between|Chops In Toaster|Terry Collier|Domestic Chaos|Bob Ferris|Series Two|Episode Detail
 Whatever Happened to the Likely Lads?|Which local hard man is involved in Terry's court trouble in Conduct Unbecoming?|Scaife|Cloughie|Hughie|Jacob|Medium|Conduct Unbecoming|Scaife|Terry Collier|Assault Charge|Local Rivalry|Series Two|Episode Plot
 Whatever Happened to the Likely Lads?|Whose death prompts Terry to contemplate his future in The Shape of Things to Come?|Uncle Jacob|Bob's father|Hughie McClaren|Thelma's grandfather|Medium|Shape Of Things To Come|Uncle Jacob|Collier Family|Funeral|Terry Future|Series Two|Episode Storyline
 Whatever Happened to the Likely Lads?|What type of party are Bob and Thelma attending in the 1974 Christmas special?|Fancy-dress party|Garden party|Wedding reception|Retirement dinner|Medium|Christmas Special 1974|Fancy Dress|Bob And Thelma|Festive Event|BBC One|Special Episode|Party Setting
 Whatever Happened to the Likely Lads?|What job does Terry take in the sequel's Christmas special?|Minicab driver|Bus conductor|Hotel porter|Factory manager|Medium|Christmas Special 1974|Terry Collier|Minicab Driver|Christmas Eve|Employment|Festive Episode|Character Storyline

 The Likely Lads (1976 film)|In which year was The Likely Lads feature film released?|1976|1973|1979|1982|Easy|1976 Film|Cinema Release|Feature Adaptation|British Comedy Film|Film History|Bob And Terry|Release Year
 The Likely Lads (1976 film)|Who directed the 1976 Likely Lads film?|Michael Tuchner|Dick Clement|Sydney Lotterby|John Howard Davies|Medium|Michael Tuchner|Film Director|1976 Production|Cinema Credits|British Film|Feature Adaptation|Production Team
 The Likely Lads (1976 film)|Which writing duo wrote the 1976 film?|Dick Clement and Ian La Frenais|Galton and Simpson|Perry and Croft|John Sullivan and Roy Clarke|Medium|Dick Clement|Ian La Frenais|Film Screenplay|Original Writers|1976 Film|Cinema Credits|Writing Partnership
 The Likely Lads (1976 film)|What is the nationality of Terry's girlfriend Christina in the film?|Finnish|Swedish|French|German|Medium|Christina|Finnish Girlfriend|Terry Collier|Romantic Relationship|1976 Film|Character Background|Film Storyline
 The Likely Lads (1976 film)|Which actress played Christina, Terry's girlfriend?|Mary Tamm|Brigit Forsyth|Sheila Fearn|Anita Carey|Medium|Mary Tamm|Christina|Character Casting|Terry Girlfriend|Film Actress|1976 Cinema|Supporting Cast
 The Likely Lads (1976 film)|At what kind of shop does Christina work?|A women's fashion boutique|A bookshop|A travel agency|A florist|Medium|Christina|Fashion Boutique|Mary Tamm|Character Occupation|Retail Work|Terry Romance|Film Detail
 The Likely Lads (1976 film)|What type of holiday do the couples take in the film?|A caravanning holiday|A cruise|A skiing holiday|A package holiday in Spain|Easy|Caravanning Holiday|Bob Ferris|Terry Collier|Thelma Ferris|Christina|1976 Film|Holiday Plot
 The Likely Lads (1976 film)|Which region of England provides the setting for the caravan holiday?|Northumbria|Cornwall|Norfolk|Devon|Medium|Northumbria|Caravan Site|Holiday Location|North East England|1976 Film|Countryside Trip|Film Setting
 The Likely Lads (1976 film)|What is the name of Bob and Terry's favourite pub that has been demolished?|The Fat Ox|The Red Lion|The Crown and Anchor|The Bull's Head|Medium|Fat Ox|Demolished Pub|Bob And Terry|Nostalgia|1976 Film|Changing Neighbourhood|Film Storyline
 The Likely Lads (1976 film)|What kind of vessel does Terry plan to work aboard after his romantic difficulties?|A cargo ship|A fishing trawler|A passenger ferry|A riverboat|Medium|Cargo Ship|Terry Collier|Sailor Job|Christina Breakup|1976 Film|Sea Journey|Plot Development
 The Likely Lads (1976 film)|To which country is the ship travelling when Bob accidentally remains aboard?|Bahrain|Spain|Canada|Norway|Hard|Bahrain|Cargo Ship|Bob Ferris|Accidental Voyage|Film Ending|1976 Film|Travel Mishap
 The Likely Lads (1976 film)|What is the title of the song associated with the 1976 film?|Remember When|Whatever Happened to You?|Those Were the Days|Two of a Kind|Medium|Remember When|Film Theme Song|Ian La Frenais|Mike Hugg|1976 Soundtrack|Cinema Music|Musical Credits
 `;

 const FIRST_ID = 15994;

 const programmeYears = {
   'The Likely Lads': '1964-1966',
   'Whatever Happened to the Likely Lads?': '1973-1974',
   'The Likely Lads (1976 film)': '1976'
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
         `Pack 338: ${id} has ${fields.length} fields, expected 14`
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
       throw new Error(`Pack 338: unknown programme at ${id}`);
     }

     if (
       [programme, question, correctAnswer, wrong1, wrong2,
         wrong3, difficulty, ...specificTags].some(value => !value)
     ) {
       throw new Error(`Pack 338: missing field at ${id}`);
     }

     if (
       !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
       specificTags.length !== 7
     ) {
       throw new Error(`Pack 338: invalid difficulty or tags at ${id}`);
     }

     const answers = [wrong1, wrong2, wrong3];

     if (
       new Set([correctAnswer, ...answers].map(normalise)).size !== 4
     ) {
       throw new Error(`Pack 338: repeated answer option at ${id}`);
     }

     answers.splice(index % 4, 0, correctAnswer);

     const tags = [...new Map([
       'Television',
       'British Television',
       'British Comedy',
       'Sitcom',
       'Classic Sitcom',
       'Completed Series',
       'The Likely Lads Collection',
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
   'The Likely Lads': 36,
   'Whatever Happened to the Likely Lads?': 51,
   'The Likely Lads (1976 film)': 12
 };

 if (
   questions.length !== 99 ||
   questions[0].id !== 'tv_15994' ||
   questions[questions.length - 1].id !== 'tv_16092'
 ) {
   throw new Error('Pack 338: incorrect count or ID range');
 }

 for (const [programme, count] of Object.entries(expectedProgrammes)) {
   if (
     questions.filter(q => q.programme === programme).length !== count
   ) {
     throw new Error(`Pack 338: incorrect ${programme} count`);
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
       `Pack 338: exported-object check failed at ${q.id}`
     );
   }

   seenQuestions.add(wordingKey);
 }
// 21 November 2026 — storyline audit of the Likely Lads collection.
// All 99 original entries with IDs tv_15994–tv_16092 remain unchanged.
// Additional episode-specific plots for the 1964–66 original, 1973–74
// sequel and 1976 film. Christmas sketches/specials are distinguished.
// Source URLs and episode/film sections are included in question tags.
const auditAdditions = [
  {
    "id": "tv_37601",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, which French girl is Bob too shy to approach on holiday but later discovers is coming to visit?",
    "answers": [
      "Louise",
      "Freda",
      "Helen",
      "Ursula"
    ],
    "correctAnswer": "Louise",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S1E1 Entente Cordiale",
      "Answer: Louise",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/1/",
      "Louise",
      "First Holiday",
      "Bob Shyness",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37602",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, who gives Louise an address without telling Bob?",
    "answers": [
      "Bob Ferris",
      "Terry Collier",
      "Audrey Collier",
      "Jack"
    ],
    "correctAnswer": "Terry Collier",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S1E1 Entente Cordiale",
      "Answer: Terry Collier",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/1/",
      "Terry Meddling",
      "Holiday Acquaintance",
      "Visiting Girl",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37603",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, where do the lads meet the two women Terry encourages Bob to pursue?",
    "answers": [
      "A cinema",
      "A bookshop",
      "A café",
      "A seaside pier"
    ],
    "correctAnswer": "A café",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S1E2 Double Date",
      "Answer: A café",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/1/",
      "Café Encounter",
      "Terry Persuades Bob",
      "Dating",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37604",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, what problem do their new girlfriends create during the double date?",
    "answers": [
      "They refuse to visit the town",
      "They both know Thelma",
      "They are leaving for Australia",
      "Their dates prove expensive"
    ],
    "correctAnswer": "Their dates prove expensive",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S1E2 Double Date",
      "Answer: Their dates prove expensive",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/1/",
      "Costly Evening",
      "Girls Dating",
      "Bob Terry",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37605",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, which comic-book bear is the subject of Bob and Terry's Christmas argument?",
    "answers": [
      "Rupert Bear",
      "Paddington Bear",
      "Winnie-the-Pooh",
      "Bungle"
    ],
    "correctAnswer": "Rupert Bear",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "1964 Christmas sketch",
      "Answer: Rupert Bear",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/1/",
      "Christmas Night With The Stars",
      "Comic Annual",
      "Childhood Knowledge",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37606",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, what job does Freda hold when Terry becomes attracted to her?",
    "answers": [
      "Office secretary",
      "Factory canteen manageress",
      "Hospital receptionist",
      "Hairdresser"
    ],
    "correctAnswer": "Factory canteen manageress",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S1E3 Older Women Are More Experienced",
      "Answer: Factory canteen manageress",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/1/",
      "Freda",
      "Factory Canteen",
      "Older Girlfriend",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37607",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, which factory department exposes Bob to the management lifestyle he craves?",
    "answers": [
      "The packing line",
      "The boiler room",
      "The drawing office",
      "The loading bay"
    ],
    "correctAnswer": "The drawing office",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S1E4 Other Side of the Fence",
      "Answer: The drawing office",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/1/",
      "Drawing Office",
      "Bob Aspirations",
      "Factory Work",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37608",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, from which Australian city does Ralph come when he encourages the lads to emigrate?",
    "answers": [
      "Sydney",
      "Melbourne",
      "Perth",
      "Adelaide"
    ],
    "correctAnswer": "Adelaide",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S1E5 Chance of a Lifetime",
      "Answer: Adelaide",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/1/",
      "Ralph Visitor",
      "Hotel Bar",
      "Emigration Plans",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37609",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, what trade does Audrey's boyfriend Mario follow?",
    "answers": [
      "Hairdressing",
      "Car repairs",
      "Teaching",
      "Plumbing"
    ],
    "correctAnswer": "Hairdressing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S1E6 The Suitor",
      "Answer: Hairdressing",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/1/",
      "Mario Suitor",
      "Audrey Collier",
      "Terry Objections",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37610",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, what is the real first name of Audrey's supposedly Italian boyfriend Mario?",
    "answers": [
      "Tony",
      "Ernie",
      "Walter",
      "Albert"
    ],
    "correctAnswer": "Ernie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S1E6 The Suitor",
      "Answer: Ernie",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/1/",
      "Ernie From Hull",
      "Pretended Italian",
      "Audrey Suitor",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37611",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, what do the lads agree to do so they can entertain two nurses in a borrowed flat?",
    "answers": [
      "Paint the flat",
      "Look after a dog",
      "Babysit for Jack",
      "Repair a window"
    ],
    "correctAnswer": "Babysit for Jack",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S2E1 Baby It's Cold Outside",
      "Answer: Babysit for Jack",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/2/",
      "Nurses On Dates",
      "Jack Flat",
      "Babysitting",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37612",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, what interrupts the lads' efforts to pass the borrowed flat off as their own?",
    "answers": [
      "An unexpected landlord",
      "A telephone call from work",
      "A power cut",
      "A crying baby"
    ],
    "correctAnswer": "A crying baby",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S2E1 Baby It's Cold Outside",
      "Answer: A crying baby",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/2/",
      "Jack Baby",
      "Romantic Pretence",
      "Flat",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37613",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, how much money is offered as the prize in the pub talent competition?",
    "answers": [
      "£25",
      "£10",
      "£50",
      "£100"
    ],
    "correctAnswer": "£25",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S2E2 A Star Is Born",
      "Answer: £25",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/2/",
      "Talent Night",
      "Cash Prize",
      "Pub Challenge",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37614",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, which pub employee is Terry chiefly trying to impress during the talent contest?",
    "answers": [
      "Freda the canteen manageress",
      "Rhona the barmaid",
      "Louise",
      "Audrey Collier"
    ],
    "correctAnswer": "Rhona the barmaid",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S2E2 A Star Is Born",
      "Answer: Rhona the barmaid",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/2/",
      "Rhona",
      "Barmaid",
      "Terry Ambition",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37615",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, which woman does Bob drunkenly propose to before word spreads around the factory?",
    "answers": [
      "Thelma",
      "Freda",
      "Helen",
      "Louise"
    ],
    "correctAnswer": "Helen",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S2E3 The Talk of the Town",
      "Answer: Helen",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/2/",
      "Helen",
      "Accidental Proposal",
      "Office Gossip",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37616",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, where do Bob and Terry meet two women by buying merchandise to impress them?",
    "answers": [
      "A seaside amusement arcade",
      "A nightclub",
      "A railway café",
      "A department store"
    ],
    "correctAnswer": "A department store",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S2E4 The Last of the Big Spenders",
      "Answer: A department store",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/2/",
      "Department Store",
      "Expensive Dates",
      "Sales Demonstrators",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37617",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, which organisation do the lads visit while trying to raise holiday money?",
    "answers": [
      "The job centre",
      "A travel agency",
      "A bank",
      "A union meeting"
    ],
    "correctAnswer": "The job centre",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S2E5 Far Away Places",
      "Answer: The job centre",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/2/",
      "Part Time Work",
      "Job Centre",
      "Foreign Holiday",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37618",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, who favours a traditional British seaside holiday rather than going abroad?",
    "answers": [
      "Bob Ferris",
      "Terry Collier",
      "Audrey Collier",
      "Jack"
    ],
    "correctAnswer": "Terry Collier",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S2E5 Far Away Places",
      "Answer: Terry Collier",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/2/",
      "Terry Seaside",
      "Travel Disagreement",
      "Holiday Plans",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37619",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, what makes Bob and Terry feel old at a wedding?",
    "answers": [
      "They meet their primary teachers",
      "They cannot remember the songs",
      "They realise most school friends are married",
      "They are mistaken for the groom's uncles"
    ],
    "correctAnswer": "They realise most school friends are married",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S2E6 Where Have All the Flowers Gone",
      "Answer: They realise most school friends are married",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/2/",
      "Friends Married",
      "Unmarried Lads",
      "Wedding",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37620",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, what happens when the lads arrive at their intended campsite?",
    "answers": [
      "The site is flooded",
      "The gates are locked for a wedding",
      "Their tents have been stolen",
      "The site has been demolished"
    ],
    "correctAnswer": "The site has been demolished",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S3E1 Outward Bound",
      "Answer: The site has been demolished",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/3/",
      "Demolished Campsite",
      "Camping Trip",
      "No Way Home",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37621",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, what is the name of the girl whose family feuds with Terry's grandfather?",
    "answers": [
      "Lorna Perrin",
      "Ursula Dean",
      "Freda Wilson",
      "Helen Chambers"
    ],
    "correctAnswer": "Lorna Perrin",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S3E2 Friends and Neighbours",
      "Answer: Lorna Perrin",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/3/",
      "Lorna Perrin",
      "Terry Grandfather",
      "Neighbour Feud",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37622",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, what practical riding skill creates difficulty for Bob after he buys his scooter?",
    "answers": [
      "Starting the engine",
      "Emergency stopping",
      "Using the indicators",
      "Finding the petrol tank"
    ],
    "correctAnswer": "Emergency stopping",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S3E3 Rocker",
      "Answer: Emergency stopping",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/3/",
      "Bob Learner",
      "Scooter Mishap",
      "Road Safety",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37623",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, which woman are Bob and Terry unknowingly dating at the same time?",
    "answers": [
      "Helen",
      "Louise",
      "Ursula",
      "Freda"
    ],
    "correctAnswer": "Ursula",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S3E4 Brief Encounter",
      "Answer: Ursula",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/3/",
      "Ursula",
      "Love Triangle",
      "Dance Hall",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37624",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, what illness has Bob recently recovered from when Terry sees his new beard?",
    "answers": [
      "Mumps",
      "Measles",
      "Influenza",
      "Chickenpox"
    ],
    "correctAnswer": "Chickenpox",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S3E5 The Razor's Edge",
      "Answer: Chickenpox",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/3/",
      "Bob Beard",
      "Chickenpox",
      "Workplace Dispute",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37625",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, on which waterways do the lads take a boating holiday?",
    "answers": [
      "Norfolk Broads",
      "Lake District",
      "River Thames",
      "River Tyne"
    ],
    "correctAnswer": "Norfolk Broads",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S3E6 Anchors Aweigh",
      "Answer: Norfolk Broads",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/3/",
      "Boating Trip",
      "Terry Reluctance",
      "Holiday",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37626",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, who works at the boatyard and attracts Terry's attention?",
    "answers": [
      "Louise",
      "Sally",
      "Helen",
      "Thelma"
    ],
    "correctAnswer": "Sally",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S3E6 Anchors Aweigh",
      "Answer: Sally",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/3/",
      "Sally",
      "Boatyard",
      "Terry Date",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37627",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, which married friend with a baby meets the lads before a stag night?",
    "answers": [
      "Hughie",
      "Jack",
      "Duggie",
      "Ralph"
    ],
    "correctAnswer": "Duggie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S3E7 Love and Marriage",
      "Answer: Duggie",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/3/",
      "Duggie",
      "Marriage Fears",
      "Stag Night",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37628",
    "category": "Television",
    "programme": "The Likely Lads",
    "question": "In The Likely Lads, whose split from Thelma contributes to his desire to join the Army?",
    "answers": [
      "Terry Collier",
      "Jack",
      "Duggie",
      "Bob Ferris"
    ],
    "correctAnswer": "Bob Ferris",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads",
      "Programme: The Likely Lads",
      "TV Pack 338",
      "Storyline and character development",
      "S3E8 Goodbye to All That",
      "Answer: Bob Ferris",
      "Episode source: https://www.comedy.co.uk/tv/the_likely_lads/episodes/3/",
      "Bob Enlistment",
      "Thelma Breakup",
      "Series Ending",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37629",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, what is Bob doing in London before unexpectedly encountering Terry on the train home?",
    "answers": [
      "Buying a wedding present",
      "Attending an acting audition",
      "Visiting his mother",
      "Collecting a new car"
    ],
    "correctAnswer": "Buying a wedding present",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S1E1 Strangers on a Train",
      "Answer: Buying a wedding present",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/1/",
      "Bob London Trip",
      "Train Reunion",
      "Wedding Plans",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37630",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, from which Mediterranean island has Terry recently returned after Army service?",
    "answers": [
      "Malta",
      "Cyprus",
      "Crete",
      "Sicily"
    ],
    "correctAnswer": "Cyprus",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S1E1 Strangers on a Train",
      "Answer: Cyprus",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/1/",
      "Terry Army",
      "Cyprus Return",
      "Old Friends",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37631",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, who is most worried that Terry's return will derail Bob's marriage plans?",
    "answers": [
      "Audrey Collier",
      "Bob's mother",
      "Thelma Chambers",
      "Susan Chambers"
    ],
    "correctAnswer": "Thelma Chambers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S1E2 Home Is the Hero",
      "Answer: Thelma Chambers",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/1/",
      "Thelma Concern",
      "Terry Return",
      "Engagement",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37632",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, how far back does Bob's romance with Thelma extend?",
    "answers": [
      "Their first factory job",
      "A holiday in Spain",
      "A Christmas party in the Army",
      "Schooldays in form 4B"
    ],
    "correctAnswer": "Schooldays in form 4B",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S1E3 Cold Feet",
      "Answer: Schooldays in form 4B",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/1/",
      "Bob Thelma",
      "School Romance",
      "Wedding Doubts",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37633",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, what most upsets Terry when he explores the town after returning from the Army?",
    "answers": [
      "Old haunts have been demolished or redeveloped",
      "No pubs will serve him",
      "His factory has moved to London",
      "His sister has sold his belongings"
    ],
    "correctAnswer": "Old haunts have been demolished or redeveloped",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S1E4 Moving On",
      "Answer: Old haunts have been demolished or redeveloped",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/1/",
      "Terry Nostalgia",
      "Urban Change",
      "Civilian Return",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37634",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, what does Terry use in an unsuccessful effort to reconnect with past girlfriends?",
    "answers": [
      "A school photograph",
      "An old address book",
      "A telephone directory of doctors",
      "A wedding guest list"
    ],
    "correctAnswer": "An old address book",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S1E5 I'll Never Forget Whats Her Name",
      "Answer: An old address book",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/1/",
      "Past Girlfriends",
      "Old Addresses",
      "Dating Failure",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37635",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, who tries to teach Terry new chat-up lines?",
    "answers": [
      "George Chambers",
      "Audrey Collier",
      "Bob Ferris",
      "Hughie McClaren"
    ],
    "correctAnswer": "Bob Ferris",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S1E5 I'll Never Forget Whats Her Name",
      "Answer: Bob Ferris",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/1/",
      "Bob Coaching",
      "Dating Advice",
      "Terry Romantic Life",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37636",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, why does Terry become miserable before Bob arranges a celebration?",
    "answers": [
      "He has failed a driving test",
      "He has lost his wallet",
      "His football club has been relegated",
      "Everyone seems to have forgotten his birthday"
    ],
    "correctAnswer": "Everyone seems to have forgotten his birthday",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S1E6 Birthday Boy",
      "Answer: Everyone seems to have forgotten his birthday",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/1/",
      "Terry Birthday",
      "Feeling Forgotten",
      "Bob Surprise",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37637",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, which loudmouth bets against the lads avoiding the England football score all day?",
    "answers": [
      "Flint",
      "Scaife",
      "Duggie",
      "Hughie"
    ],
    "correctAnswer": "Flint",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S1E7 No Hiding Place",
      "Answer: Flint",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/1/",
      "Flint Bet",
      "Football Results",
      "1973 Classic Episode",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37638",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, what do Bob and Terry hope to watch before they know the football result?",
    "answers": [
      "A radio commentary at lunchtime",
      "Televised highlights that evening",
      "A replay at the stadium",
      "A friend's amateur film"
    ],
    "correctAnswer": "Televised highlights that evening",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S1E7 No Hiding Place",
      "Answer: Televised highlights that evening",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/1/",
      "Avoiding Score",
      "Match Highlights",
      "Self Imposed Challenge",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37639",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, which couple host the dinner party Bob hopes will improve Terry's social circle?",
    "answers": [
      "George and Mrs Chambers",
      "Hughie and Audrey",
      "Alan and Brenda",
      "Bob and Thelma"
    ],
    "correctAnswer": "Alan and Brenda",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S1E8 Guess Who's Coming to Dinner",
      "Answer: Alan and Brenda",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/1/",
      "Alan Brenda",
      "Middle Class Dinner",
      "Terry Socialising",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37640",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, who objects to Bob bringing a box of old possessions into their new marital home?",
    "answers": [
      "Audrey Collier",
      "Susan Chambers",
      "Bob's mother",
      "Thelma Chambers"
    ],
    "correctAnswer": "Thelma Chambers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S1E9 Storm in a Tea Chest",
      "Answer: Thelma Chambers",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/1/",
      "Memorabilia",
      "Tea Chest",
      "Thelma Objects",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37641",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, what illness strikes Terry around the time Bob takes him for a conciliatory dinner?",
    "answers": [
      "Chilean flu",
      "German measles",
      "Mumps",
      "Whooping cough"
    ],
    "correctAnswer": "Chilean flu",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S1E10 The Old Magic",
      "Answer: Chilean flu",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/1/",
      "Terry Flu",
      "Dinner With Bob",
      "Wedding Friendship",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37642",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, which member of Thelma's family is especially determined to control the wedding arrangements?",
    "answers": [
      "Susan Chambers",
      "Mrs Chambers",
      "George Chambers",
      "Aunt Audrey"
    ],
    "correctAnswer": "Mrs Chambers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S1E11 Count Down",
      "Answer: Mrs Chambers",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/1/",
      "Mrs Chambers",
      "Wedding Plans",
      "Family Pressure",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37643",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, what item does Bob accidentally stain with ink before the wedding?",
    "answers": [
      "The wedding cake",
      "Thelma's veil",
      "His wedding trousers",
      "His best man's shoes"
    ],
    "correctAnswer": "His wedding trousers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S1E12 Boys Night In",
      "Answer: His wedding trousers",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/1/",
      "Ink Stain",
      "Wedding Clothes",
      "Failed Quiet Evening",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37644",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, which personal gift does Bob give Terry on his wedding day?",
    "answers": [
      "His old bicycle",
      "His wristwatch",
      "His childhood scout badge",
      "His photograph album"
    ],
    "correctAnswer": "His photograph album",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S1E13 The End of an Era",
      "Answer: His photograph album",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/1/",
      "Bob Friendship",
      "Photo Album",
      "Wedding Gift",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37645",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, who looks after Bob and Thelma's house during their honeymoon?",
    "answers": [
      "Terry Collier",
      "Audrey Collier",
      "George Chambers",
      "Hughie McClaren"
    ],
    "correctAnswer": "Terry Collier",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S2E1 Absent Friends",
      "Answer: Terry Collier",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Terry House Sitting",
      "Norway Honeymoon",
      "Susan",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37646",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, how does Bob break his leg at the end of his honeymoon?",
    "answers": [
      "He falls while skiing",
      "He falls on the aircraft steps",
      "He slips on a hotel floor",
      "He trips over a suitcase at home"
    ],
    "correctAnswer": "He falls on the aircraft steps",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S2E2 Heart to Heart",
      "Answer: He falls on the aircraft steps",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Bob Injury",
      "Aircraft Steps",
      "Honeymoon Return",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37647",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, which change in Terry's behaviour makes Bob suspect he has fallen in love?",
    "answers": [
      "He buys a sports car",
      "He starts attending church",
      "He stops drinking beer and becomes thoughtful",
      "He signs up for night classes"
    ],
    "correctAnswer": "He stops drinking beer and becomes thoughtful",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S2E2 Heart to Heart",
      "Answer: He stops drinking beer and becomes thoughtful",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Terry In Love",
      "No Beer",
      "Susan",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37648",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, which leisure activities does Terry enjoy while Bob struggles with domestic duties?",
    "answers": [
      "Fishing and golf",
      "Sailing and hiking",
      "Tennis and ballroom dancing",
      "Billiards and cinema trips"
    ],
    "correctAnswer": "Billiards and cinema trips",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S2E3 The Ant and the Grasshopper",
      "Answer: Billiards and cinema trips",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Terry Leisure",
      "Bob Chores",
      "Lifestyle Contrast",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37649",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, why is Terry already in a police cell when Bob is breathalysed?",
    "answers": [
      "He has been involved in football violence",
      "He has refused to pay a restaurant bill",
      "He has been caught speeding",
      "He has stolen a bicycle"
    ],
    "correctAnswer": "He has been involved in football violence",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S2E4 One for the Road",
      "Answer: He has been involved in football violence",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Terry Police Custody",
      "Football Fight",
      "Drink Driving",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37650",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, what kind of tactics do both Bob and Terry resort to as their fitness challenge intensifies?",
    "answers": [
      "They rely strictly on fair play",
      "Underhand tactics to gain an advantage",
      "They bring in substitute riders",
      "They agree to cancel the contest"
    ],
    "correctAnswer": "Underhand tactics to gain an advantage",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S2E5 The Great Race",
      "Answer: Underhand tactics to gain an advantage",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Sneaky Competition",
      "Getting Older",
      "Underhand Tactics",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37651",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, what is Terry supposed to complete while staying in Bob and Thelma's house?",
    "answers": [
      "Their annual tax return",
      "A garden landscaping plan",
      "A list of DIY repairs",
      "A new wallpaper design"
    ],
    "correctAnswer": "A list of DIY repairs",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S2E6 Some Day We'll Laugh About This",
      "Answer: A list of DIY repairs",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Terry House Sitting",
      "DIY Tasks",
      "Holiday Away",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37652",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, where are Bob and Thelma spending their weekend when Terry is left with their house?",
    "answers": [
      "Norway",
      "Wales",
      "Northern Ireland",
      "Scotland"
    ],
    "correctAnswer": "Scotland",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S2E6 Some Day We'll Laugh About This",
      "Answer: Scotland",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Bob Thelma",
      "Weekend Skiing",
      "Terry House Care",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37653",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, what hospital job does Terry conceal from Bob when he appears in disguise?",
    "answers": [
      "Porter",
      "Surgeon",
      "Ambulance driver",
      "Pharmacist"
    ],
    "correctAnswer": "Porter",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S2E7 In Harms Way",
      "Answer: Porter",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Terry Secret Job",
      "Hospital Porter",
      "Bob Injury",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37654",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, what injury does Bob suffer after Terry's botched DIY work?",
    "answers": [
      "He cuts his hand with a saw",
      "He puts his foot through the ceiling",
      "He dislocates his shoulder moving a wardrobe",
      "He burns his arm on a radiator"
    ],
    "correctAnswer": "He puts his foot through the ceiling",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S2E7 In Harms Way",
      "Answer: He puts his foot through the ceiling",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Bob House Repairs",
      "Foot Through Ceiling",
      "Hospital Visit",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37655",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, which person from Thelma's family is caught staying at the same hotel with a secretary?",
    "answers": [
      "Her sister Susan",
      "Her mother",
      "Her father George",
      "Her uncle Walter"
    ],
    "correctAnswer": "Her father George",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S2E8 Affairs and Relations",
      "Answer: Her father George",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "George Chambers",
      "Secret Affair",
      "Fishing Hotel",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37656",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, what sentimental object reminds Bob of Thelma after she goes to her mother's?",
    "answers": [
      "Their honeymoon photograph",
      "Her wedding bouquet",
      "A birthday card from Susan",
      "His teddy bear Norman"
    ],
    "correctAnswer": "His teddy bear Norman",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S2E9 The Expert",
      "Answer: His teddy bear Norman",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Norman Teddy Bear",
      "Marital Row",
      "Thelma Fragrance",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37657",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, where does Terry try to deliver Bob's letter to the estranged Thelma?",
    "answers": [
      "At the library",
      "At a hospital",
      "At her office in a factory",
      "At the railway station"
    ],
    "correctAnswer": "At the library",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S2E10 Between Ourselves",
      "Answer: At the library",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Bob Love Letter",
      "Thelma Library",
      "Terry Go Between",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37658",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, what unusual item has Terry put in Bob's toaster and broken it?",
    "answers": [
      "Bacon rolls",
      "Chops",
      "A boiled egg",
      "A sandwich wrapped in foil"
    ],
    "correctAnswer": "Chops",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S2E11 The Go-Between",
      "Answer: Chops",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Chops In Toaster",
      "Housemate Chaos",
      "Bob Marriage",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37659",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, what does Terry decide to do to help end Bob's separation?",
    "answers": [
      "Move Bob to another town",
      "Put the house up for sale",
      "Visit Thelma and persuade her to return",
      "Arrange a secret divorce"
    ],
    "correctAnswer": "Visit Thelma and persuade her to return",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S2E11 The Go-Between",
      "Answer: Visit Thelma and persuade her to return",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Terry Intervenes",
      "Thelma Return",
      "Marriage Reconciliation",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37660",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, what does Terry eventually agree with local hard man Scaife despite their earlier fight?",
    "answers": [
      "A formal boxing match",
      "An apology in court",
      "A joint building project",
      "A truce over a drink and cigarette"
    ],
    "correctAnswer": "A truce over a drink and cigarette",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S2E12 Conduct Unbecoming",
      "Answer: A truce over a drink and cigarette",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Scaife",
      "Terry Court Case",
      "Unexpected Truce",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37661",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, which relative's funeral leads Bob to worry about his own future?",
    "answers": [
      "Terry's Uncle Jacob",
      "Thelma's Uncle Walter",
      "Bob's father",
      "Susan's aunt"
    ],
    "correctAnswer": "Terry's Uncle Jacob",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "S2E13 The Shape of Things to Come",
      "Answer: Terry's Uncle Jacob",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Uncle Jacob",
      "Family Funeral",
      "Bob Self Reflection",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37662",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, which pirate character does Bob dress as for the Christmas fancy-dress party?",
    "answers": [
      "Long John Silver",
      "Captain Hook",
      "Captain Flint",
      "Captain Blood"
    ],
    "correctAnswer": "Captain Hook",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "1974 Christmas Special",
      "Answer: Captain Hook",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Bob Costume",
      "Captain Hook",
      "Christmas Party",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37663",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, which fictional boy does Thelma dress as to complement Bob's costume?",
    "answers": [
      "Pinocchio",
      "Robin Hood",
      "Peter Pan",
      "Oliver Twist"
    ],
    "correctAnswer": "Peter Pan",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "1974 Christmas Special",
      "Answer: Peter Pan",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Thelma Costume",
      "Peter Pan",
      "Festive Disguise",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37664",
    "category": "Television",
    "programme": "Whatever Happened to the Likely Lads?",
    "question": "In Whatever Happened to the Likely Lads?, which industrial vehicle does Terry use to get Bob home after the festive celebrations?",
    "answers": [
      "A tractor",
      "A fire engine",
      "A milk float",
      "A forklift truck"
    ],
    "correctAnswer": "A forklift truck",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "Whatever Happened to the Likely Lads?",
      "Programme: Whatever Happened to the Likely Lads?",
      "TV Pack 338",
      "Storyline and character development",
      "1974 Christmas Special",
      "Answer: A forklift truck",
      "Episode source: https://www.comedy.co.uk/tv/whatever_happened_likely_lads/episodes/2/",
      "Terry Driver",
      "Forklift Truck",
      "Christmas Rescue",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37665",
    "category": "Television",
    "programme": "The Likely Lads (1976 film)",
    "question": "In The Likely Lads (1976 film), whose old childhood house has been demolished and causes him to contemplate his life?",
    "answers": [
      "Bob Ferris's",
      "Terry Collier's",
      "Thelma's",
      "Audrey's"
    ],
    "correctAnswer": "Bob Ferris's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads (1976 film)",
      "Programme: The Likely Lads (1976 film)",
      "TV Pack 338",
      "Storyline and character development",
      "Feature film 1976",
      "Answer: Bob Ferris's",
      "Episode source: https://www.comedy.co.uk/film/the_likely_lads/",
      "Bob Midlife Crisis",
      "Old Home Demolished",
      "Redevelopment",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37666",
    "category": "Television",
    "programme": "The Likely Lads (1976 film)",
    "question": "In The Likely Lads (1976 film), who arranges a caravan weekend hoping Terry will settle down with Christina?",
    "answers": [
      "Audrey Collier",
      "Thelma Ferris",
      "Bob Ferris",
      "Mrs Collier"
    ],
    "correctAnswer": "Thelma Ferris",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads (1976 film)",
      "Programme: The Likely Lads (1976 film)",
      "TV Pack 338",
      "Storyline and character development",
      "Feature film 1976",
      "Answer: Thelma Ferris",
      "Episode source: https://www.comedy.co.uk/film/the_likely_lads/",
      "Thelma Matchmaking",
      "Christina Terry",
      "Caravan Holiday",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37667",
    "category": "Television",
    "programme": "The Likely Lads (1976 film)",
    "question": "In The Likely Lads (1976 film), which family home's top-floor flat do Terry and Christina share while the parents are away?",
    "answers": [
      "The Ferrises'",
      "The Chambers'",
      "The Colliers'",
      "The Perrins'"
    ],
    "correctAnswer": "The Colliers'",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads (1976 film)",
      "Programme: The Likely Lads (1976 film)",
      "TV Pack 338",
      "Storyline and character development",
      "Feature film 1976",
      "Answer: The Colliers'",
      "Episode source: https://www.comedy.co.uk/film/the_likely_lads/",
      "Terry Cohabiting",
      "Christina",
      "Parents Away",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37668",
    "category": "Television",
    "programme": "The Likely Lads (1976 film)",
    "question": "In The Likely Lads (1976 film), which two men become separated from their partners during the camping holiday?",
    "answers": [
      "George and Bob",
      "Terry and Hughie",
      "Bob and Duggie",
      "Bob and Terry"
    ],
    "correctAnswer": "Bob and Terry",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads (1976 film)",
      "Programme: The Likely Lads (1976 film)",
      "TV Pack 338",
      "Storyline and character development",
      "Feature film 1976",
      "Answer: Bob and Terry",
      "Episode source: https://www.comedy.co.uk/film/the_likely_lads/",
      "Caravan Chaos",
      "Holiday Separation",
      "Friendship",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37669",
    "category": "Television",
    "programme": "The Likely Lads (1976 film)",
    "question": "In The Likely Lads (1976 film), what kind of weather adds to the problems of the countryside camping trip?",
    "answers": [
      "Torrential rain",
      "Heavy snowfall",
      "A summer heatwave",
      "Thick freezing fog"
    ],
    "correctAnswer": "Torrential rain",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads (1976 film)",
      "Programme: The Likely Lads (1976 film)",
      "TV Pack 338",
      "Storyline and character development",
      "Feature film 1976",
      "Answer: Torrential rain",
      "Episode source: https://www.comedy.co.uk/film/the_likely_lads/",
      "Caravan Holiday",
      "Heavy Rain",
      "Holiday Disaster",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37670",
    "category": "Television",
    "programme": "The Likely Lads (1976 film)",
    "question": "In The Likely Lads (1976 film), what happens between Terry and Christina after the disastrous trip?",
    "answers": [
      "They marry",
      "They split up",
      "They move to Finland",
      "They buy a caravan together"
    ],
    "correctAnswer": "They split up",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads (1976 film)",
      "Programme: The Likely Lads (1976 film)",
      "TV Pack 338",
      "Storyline and character development",
      "Feature film 1976",
      "Answer: They split up",
      "Episode source: https://www.comedy.co.uk/film/the_likely_lads/",
      "Terry Christina",
      "Relationship Breakdown",
      "Post Holiday",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37671",
    "category": "Television",
    "programme": "The Likely Lads (1976 film)",
    "question": "In The Likely Lads (1976 film), what makes Bob miss the chance to leave the ship before it sets sail for Bahrain?",
    "answers": [
      "He loses his passport",
      "The captain locks him in a cabin",
      "He passes out drunk on board",
      "The ship departs during a storm"
    ],
    "correctAnswer": "He passes out drunk on board",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads (1976 film)",
      "Programme: The Likely Lads (1976 film)",
      "TV Pack 338",
      "Storyline and character development",
      "Feature film 1976",
      "Answer: He passes out drunk on board",
      "Episode source: https://www.comedy.co.uk/film/the_likely_lads/",
      "Bob Accidental Voyage",
      "Ship Departure",
      "Farewell Drinking",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37672",
    "category": "Television",
    "programme": "The Likely Lads (1976 film)",
    "question": "In The Likely Lads (1976 film), what is the first name of Terry's Finnish girlfriend Christina as she is commonly called?",
    "answers": [
      "Tina",
      "Christie",
      "Kit",
      "Chris"
    ],
    "correctAnswer": "Chris",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Classic Sitcom",
      "BBC",
      "The Likely Lads Collection",
      "The Likely Lads (1976 film)",
      "Programme: The Likely Lads (1976 film)",
      "TV Pack 338",
      "Storyline and character development",
      "Feature film 1976",
      "Answer: Chris",
      "Episode source: https://www.comedy.co.uk/film/the_likely_lads/",
      "Christina Nickname",
      "Mary Tamm",
      "Fashion Shop",
      "UK English",
      "2026 Audit"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
const auditedProgrammeTotals = {"The Likely Lads":64,"Whatever Happened to the Likely Lads?":87,"The Likely Lads (1976 film)":20};
if (questions.length !== 171 ||
 questions[0].id !== 'tv_15994' || questions[98].id !== 'tv_16092' ||
 auditAdditions[0].id !== 'tv_37601' ||
 auditAdditions[auditAdditions.length-1].id !== 'tv_37672' ||
 new Set(questions.map(q=>q.id)).size !== questions.length ||
 new Set(questions.map(q=>normalise(q.programme+'|'+q.question))).size !== questions.length ||
 Object.entries(auditedProgrammeTotals).some(([p,n])=>questions.filter(q=>q.programme===p).length!==n) ||
 questions.some(q=>q.answers.length!==4 ||
 new Set(q.answers.map(a=>normalise(a))).size!==4 ||
 q.answers.filter(a=>a===q.correctAnswer).length!==1 ||
 !q.tags.includes('Programme: '+q.programme) ||
 q.tags.length<17 || q.dailyEligible!==true) ||
 auditAdditions.some(q=>!q.question.startsWith('In '+q.programme+', ')||q.tags.length<17))
 throw Error('Pack 338 post-audit verification failed');
module.exports = questions;
