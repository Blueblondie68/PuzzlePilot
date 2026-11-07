
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

 module.exports = questions;


