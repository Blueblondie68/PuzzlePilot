
// quiz_pack378.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Drop the Dead Donkey (1990-1998) and The Fast Show (1994-2001).
// WordPad-ready CommonJS module; no imports or external files.
// Seven individually chosen topic tags per question, plus programme metadata.
// Sources for factual review: British Comedy Guide, Hat Trick Productions,
// TVmaze episode guides and Royal Television Society.

const FIRST_ID = 19620;

// question | correct answer | wrong answer 1 | wrong answer 2 | wrong answer 3
// | difficulty | seven question-specific search tags
const donkeyFacts = `Which fictional television news organisation is the setting of Drop the Dead Donkey?|GlobeLink News|WorldWide News|Channel West News|British News Network|Easy|GlobeLink|Fictional Newsroom|Television News|News Channel|Office Setting|Journalistic Satire|1990s Media
Which media tycoon takes over the newsroom at the start of Drop the Dead Donkey?|Sir Roysten Merchant|Gus Hedges|Henry Davenport|George Dent|Easy|Sir Roysten Merchant|Media Owner|Company Takeover|Press Baron|Corporate Control|Newsroom Politics|Series Premise
What new direction does the news organisation's owner demand?|More sensationalist reporting|Exclusively sports bulletins|Only regional weather coverage|A move into children's television|Easy|Sensationalism|Editorial Policy|Sir Roysten Merchant|Ratings Pressure|News Ethics|Media Ownership|Tabloid Journalism
Which actor played news editor George Dent?|Jeff Rawle|Robert Duncan|Neil Pearson|David Swift|Easy|Jeff Rawle|George Dent|Editor|Lead Casting|GlobeLink Staff|Newsroom Management|British Actor
What job does George Dent hold in the newsroom?|News editor|Camera operator|Sports presenter|Advertising executive|Easy|George Dent|News Editor|Jeff Rawle|Editorial Decisions|Management|GlobeLink|Staff Hierarchy
Who portrayed chief executive Gus Hedges?|Robert Duncan|Jeff Rawle|Stephen Tompkinson|David Swift|Easy|Robert Duncan|Gus Hedges|Chief Executive|Management Jargon|Actor Casting|Corporate Representative|Newsroom Boss
Which character constantly uses fashionable corporate buzzwords and management jargon?|Gus Hedges|Dave Charnley|Henry Davenport|Damien Day|Easy|Gus Hedges|Boardroom Buzzwords|Management Speak|Corporate Satire|Robert Duncan|Sir Roysten Merchant|Catchphrases
Who played veteran newsreader Henry Davenport?|David Swift|Neil Pearson|Robert Duncan|Jeff Rawle|Easy|David Swift|Henry Davenport|Veteran Presenter|Actor Casting|Television Newsreader|News Desk|Long Career
Which newsreader is regularly at odds with Sally Smedley?|Henry Davenport|George Dent|Dave Charnley|Gus Hedges|Easy|Henry Davenport|Sally Smedley|Newsroom Rivalry|Co Presenters|David Swift|Victoria Wicks|Broadcast Desk
Which actress portrayed Sally Smedley?|Victoria Wicks|Haydn Gwynne|Susannah Doyle|Ingrid Lacey|Easy|Victoria Wicks|Sally Smedley|Newsreader|Actor Casting|GlobeLink News|Television Presenter|Main Ensemble
Who joins Henry as a new on-air newsreading partner early in the first series?|Sally Smedley|Helen Cooper|Alex Pates|Joy Merryweather|Easy|Sally Smedley|Henry Davenport|News Desk|Series One|New Hire|Gus Hedges|Broadcast Pair
Which actor played unscrupulous field reporter Damien Day?|Stephen Tompkinson|Neil Pearson|Jeff Rawle|Robert Duncan|Easy|Stephen Tompkinson|Damien Day|Field Reporter|Actor Casting|Sensational Footage|News Ethics|On Location
Which GlobeLink reporter is infamous for arranging sensational footage at almost any cost?|Damien Day|Dave Charnley|Henry Davenport|George Dent|Medium|Damien Day|Unethical Reporting|Staged News|Field Reporting|Stephen Tompkinson|Television Footage|Media Satire
What is the first name of Damien Day's frequently endangered cameraman?|Jerry|Terry|Barry|Larry|Medium|Jerry Cameraman|Damien Day|Camera Crew|Location Reporting|Unsafe Assignments|Recurring Colleague|Production Team
Which actor and co-creator provided the voice of Damien's cameraman Jerry?|Andy Hamilton|Guy Jenkin|Neil Pearson|David Swift|Hard|Andy Hamilton|Jerry Cameraman|Voice Role|Series Creator|Behind The Scenes|Unseen Colleague|Voice Casting
Who portrayed deputy sub-editor Dave Charnley?|Neil Pearson|David Swift|Jeff Rawle|Robert Duncan|Easy|Neil Pearson|Dave Charnley|Deputy Sub Editor|Actor Casting|Gambling|Newsroom Staff|Series Regular
What newsroom role does Dave Charnley perform?|Deputy sub-editor|Weather forecaster|Chief executive|Foreign correspondent|Medium|Dave Charnley|Deputy Sub Editor|News Editing|Neil Pearson|Editorial Team|Job Title|GlobeLink Staff
Which GlobeLink employee is particularly associated with gambling and womanising?|Dave Charnley|George Dent|Helen Cooper|Joy Merryweather|Medium|Dave Charnley|Gambling|Womanising|Neil Pearson|Character Habits|Office Culture|1990s Comedy
Who played the efficient assistant editor Alex Pates?|Haydn Gwynne|Ingrid Lacey|Victoria Wicks|Susannah Doyle|Hard|Haydn Gwynne|Alex Pates|Assistant Editor|Original Cast|Series One And Two|Actor Casting|Editorial Team
Who takes Alex Pates's place on the editorial team from the third series?|Helen Cooper|Joy Merryweather|Sally Smedley|Jenny|Medium|Helen Cooper|Alex Pates|Series Three|Assistant Editor Change|New Staff Member|Workplace Transition|GlobeLink
Which actress played Helen Cooper?|Ingrid Lacey|Haydn Gwynne|Susannah Doyle|Victoria Wicks|Hard|Ingrid Lacey|Helen Cooper|Assistant Editor|Series Three Onwards|Actor Casting|GlobeLink Staff|1990s Television
Which employee develops feelings for Helen Cooper despite her not sharing his romantic interest?|George Dent|Henry Davenport|Gus Hedges|Damien Day|Medium|George Dent|Helen Cooper|Unrequited Love|Editor Relationship|Workplace Romance|Series Three|Character Arc
Who played formidable office assistant Joy Merryweather?|Susannah Doyle|Victoria Wicks|Haydn Gwynne|Ingrid Lacey|Medium|Susannah Doyle|Joy Merryweather|Office Assistant|Actor Casting|Hostile Temper|GlobeLink Staff|Supporting Lead
From which series does Joy Merryweather join the main newsroom cast?|Series two|Series one|Series four|Series six|Hard|Joy Merryweather|Series Two|1991 Arrival|Office Assistant|Susannah Doyle|New Character|Programme Timeline
Which two writers created Drop the Dead Donkey?|Andy Hamilton and Guy Jenkin|Charlie Higson and Paul Whitehouse|David Croft and Jimmy Perry|Ray Galton and Alan Simpson|Medium|Andy Hamilton|Guy Jenkin|Show Creators|Writing Partnership|1990 Debut|British Satire|Programme Origins
Which production company made Drop the Dead Donkey?|Hat Trick Productions|Thames Television|Granada Television|Hartswood Films|Medium|Hat Trick Productions|Production Company|Andy Hamilton|Guy Jenkin|Television Credits|Channel Four|Behind Camera
Which television channel originally broadcast Drop the Dead Donkey?|Channel 4|BBC One|ITV|BBC Two|Easy|Channel Four|Original Broadcaster|British Television|Sitcom Network|1990s Broadcasting|UK Channel|Programme Launch
In what year did Drop the Dead Donkey make its television debut?|1990|1988|1993|1996|Easy|1990 Debut|First Broadcast|Channel Four|Opening Year|British Satire|Series One|Broadcast History
In which year did the original television run of Drop the Dead Donkey end?|1998|1994|2001|2004|Easy|1998 Finale|Last Series|Programme Timeline|Channel Four|Original Run|Newsroom Closure|Television History
How many regular television series of Drop the Dead Donkey were made?|Six|Four|Five|Seven|Medium|Six Series|1990 To 1998|Series Count|Channel Four|Production History|Broadcast Run|Sitcom Statistics
Which award did Drop the Dead Donkey win for Best Comedy Programme or Series in 1994?|BAFTA|Emmy for drama|Golden Globe|Olivier Award|Medium|1994 BAFTA|Best Comedy|Television Award|Programme Recognition|British Academy|Hat Trick Productions|Critical Success
Which phrase was considered as a possible working title for Drop the Dead Donkey?|Dead Belgians Don't Count|The News at Ten|The Office Floor|GlobeLink Tonight|Hard|Dead Belgians Dont Count|Working Title|Andy Hamilton|Guy Jenkin|Development History|Alternative Name|Show Naming
What is the title of the first broadcast episode of Drop the Dead Donkey?|A New Dawn|The Gulf Report|In Place of Alex|The Newsmakers|Medium|A New Dawn|Series One|First Episode|1990 Premiere|Media Takeover|Episode Title|Broadcast Chronology
Which character is appointed to implement the new owner's plans in the opening episode?|Gus Hedges|Henry Davenport|Alex Pates|Dave Charnley|Medium|Gus Hedges|A New Dawn|Series One|New Chief Executive|Corporate Orders|Management Change|1990 Episode
Whose former husband is drawn into a scandal in the first-series episode A Blast from the Past?|Alex Pates's|Sally Smedley's|Helen Cooper's|Joy Merryweather's|Hard|Alex Pates|A Blast From The Past|Ex Husband|Series One|Journalistic Scandal|Haydn Gwynne|1990 Plot
Which government organisation raids the newsroom in the first-series episode Sex, Lies and Audiotape?|Special Branch|MI6|The Inland Revenue|The Serious Fraud Office|Hard|Special Branch|Sex Lies And Audiotape|Police Raid|Series One|1990 Episode|GlobeLink Offices|State Security
What financial policy does Gus try to introduce in the first-series episode The Root of All Evil?|An austerity drive|A staff-wide pay rise|A profit-sharing scheme|A free equipment budget|Medium|The Root Of All Evil|Cost Cutting|Gus Hedges|Series One|Budget Pressure|Office Management|1990 Episode
Which event does Damien hope will make dramatic footage in the first-series episode Death, Disaster 'n' Damien?|An execution|A royal wedding|A lunar eclipse|A football final|Medium|Damien Day|Death Disaster N Damien|Execution Coverage|Series One|Sensational Journalism|Camera Crew|1990 Episode
With which public figure does GlobeLink secure an interview at the end of the first series?|The Prime Minister|The Archbishop of Canterbury|The Queen|The Governor of the Bank of England|Medium|The Big Day|Prime Minister Interview|Series One Finale|Exclusive Access|Newsroom Assignment|1990 Episode|Political Interview
Which international conflict is the focus of the opening episode of the second series?|The Gulf War|The Falklands War|The Korean War|The Suez Crisis|Medium|The Gulf Report|Gulf War|Series Two|1991 Return|War Coverage|News Reporting|International Politics
Which character undergoes a religious awakening during the second series?|Sally Smedley|Helen Cooper|Joy Merryweather|Alex Pates|Medium|Sally Smedley|Religious Conversion|Second Series|Faith Story|Newsreader|1991 Episodes|Character Change
Which GlobeLink worker seeks psychiatric help during the second-series episode centred on his day?|Dave Charnley|Gus Hedges|Damien Day|Henry Davenport|Hard|Daves Day|Dave Charnley|Psychiatric Help|Series Two|Mental Health Appointment|Neil Pearson|1991 Episode
Which newsroom employee refuses government demands to reveal sources in a third-series episode?|Helen Cooper|Sally Smedley|Joy Merryweather|Alex Pates|Medium|Helen Cooper|Journalistic Sources|Government Pressure|Series Three|Editorial Integrity|1993 Episode|Press Freedom
What outdoor activity does Gus arrange as a team-building exercise in the third series?|Paintball|Rock climbing|Sailing|Orienteering|Medium|Paintball|Team Building|Gus Hedges|Series Three|Staff Retreat|1993 Episode|Workplace Relationships
Which member of the team has to deal with an invitation to his former wife's wedding in series four?|George Dent|Gus Hedges|Henry Davenport|Dave Charnley|Medium|George Dent|The Day Of The Mum|Ex Wife Wedding|Series Four|Family Conflict|1994 Episode|Divorce Story
Which two staff members refuse to join the newsroom strike during the fourth series?|Sally and Damien|Helen and George|Henry and Dave|Gus and Joy|Medium|Sally Smedley|Damien Day|Staff Strike|Series Four|Workplace Dispute|1994 Episode|Industrial Action
Which newspaper-style subject is Henry preparing a book about in the fourth series?|His own life|The history of television|A royal family|The British Empire|Medium|Henry Davenport|Autobiography|Series Four|Memoir|1994 Episode|Newsreader Career|Book Writing
Which politician's visit alarms the newsroom in the fifth-series episode What Are Friends For?|John Major|Tony Blair|Margaret Thatcher|Gordon Brown|Medium|John Major|What Are Friends For|Series Five|Prime Minister Visit|1996 Episode|Political Comedy|Government
Which overseas delegation does Gus hope will provide financing in the fifth series?|Japanese investors|French broadcasters|Canadian producers|Spanish bankers|Hard|Japanese Delegation|The Godless Society|Series Five|Gus Hedges|News Financing|Corporate Funding|1996 Episode
What television format features the GlobeLink staff in the last series' opening episode?|A fly-on-the-wall documentary soap|A Saturday morning quiz|A fictional detective drama|A televised cooking contest|Medium|The Newsmakers|Docusoap|Series Six|1998 Episode|Reality Television|GlobeLink Staff|Media Satire
What threat hangs over the newsroom throughout the final series?|The company's closure|A compulsory move to Scotland|A ban on broadcasting the weather|A studio fire inquiry|Medium|Series Six|GlobeLink Closure|1998 Finale|Company Demise|Newsroom Jobs|Corporate Crisis|Final Storyline
What is the title of the last regular episode of Drop the Dead Donkey?|The Final Chapter|The Newsmakers|The Big Day|The Christmas Party|Medium|The Final Chapter|Series Six Finale|1998 Broadcast|Last Episode|GlobeLink Closure|Episode Title|Television Farewell`;

const fastFacts = `Which two comedians created The Fast Show?|Charlie Higson and Paul Whitehouse|Steve Coogan and Rob Brydon|David Walliams and Matt Lucas|Harry Enfield and Kathy Burke|Easy|Charlie Higson|Paul Whitehouse|Programme Creators|Sketch Comedy|Writing Partnership|1994 Launch|BBC Two
Which television channel originally aired The Fast Show?|BBC Two|BBC One|ITV|Channel 4|Easy|BBC Two|Original Broadcaster|1994 Premiere|British Television|Sketch Series|Broadcast Network|Programme History
In what year did The Fast Show begin its regular television run?|1994|1991|1997|2000|Easy|1994 Debut|Television Timeline|BBC Two|First Series|Opening Year|Sketch Comedy|Programme Premiere
How many regular series did The Fast Show have before its later specials?|Three|Two|Four|Five|Medium|Three Series|1994 To 1997|Programme Structure|BBC Catalogue|Sketch Episodes|Broadcast Count|Production History
What style of humour gives The Fast Show its name?|Very short rapidly changing sketches|One continuous sitcom storyline|A live improvised panel game|Long monologues without cuts|Easy|Rapid Fire Sketches|Comedy Format|Short Scenes|Fast Editing|Catchphrases|BBC Innovation|Programme Style
Who played the estate worker Ted in the Ted and Ralph sketches?|Paul Whitehouse|Charlie Higson|John Thomson|Simon Day|Medium|Paul Whitehouse|Ted|Estate Worker|Country Estate|Sketch Casting|Ralph Mayhew|Unspoken Affection
Who portrayed aristocratic landowner Ralph in the recurring country-estate sketches?|Charlie Higson|Paul Whitehouse|Mark Williams|John Thomson|Medium|Charlie Higson|Ralph Mayhew|Aristocrat|Country Squire|Sketch Casting|Ted|Country House
What is Ted's occupation in the sketches with the aristocrat Ralph?|Estate groundskeeper|Village policeman|Land agent|Local schoolmaster|Medium|Ted|Gardener|Groundskeeper|Ralph Mayhew|Country Estate|Paul Whitehouse|Work Relationship
What does Ralph struggle to communicate to his loyal employee Ted?|His romantic feelings|A plan to sell the land|A request for a pay cut|News of a missing horse|Medium|Ralph Mayhew|Ted|Unspoken Love|Emotional Restraint|Country Estate|Sketch Premise|Unrequited Affection
Which 1998 television special concentrated on the awkward relationship between two countryside characters?|Ted & Ralph|The Last Fast Show Ever|Jazz Club Live|Country Matters Special|Medium|Ted And Ralph|1998 Special|Country Estate|Paul Whitehouse|Charlie Higson|Standalone Comedy|Programme Expansion
Which actor played the smooth-talking car salesman Swiss Toni?|Charlie Higson|Simon Day|John Thomson|Paul Whitehouse|Medium|Swiss Toni|Charlie Higson|Used Car Dealer|Character Casting|Relationship Advice|Sketch Comedy|1997 Characters
What trade does Swiss Toni work in?|Car sales|Estate agency|Antique dealing|Restaurant management|Easy|Swiss Toni|Car Salesman|Showroom|Motor Trade|Charlie Higson|Sales Pitch|Recurring Sketch
Swiss Toni repeatedly compares everyday experiences with which activity?|Making love to a beautiful woman|Playing golf with a champion|Cooking a Sunday roast|Going on a seaside holiday|Medium|Swiss Toni|Romantic Analogies|Car Sales Advice|Inappropriate Comparisons|Charlie Higson|Recurring Line|Character Style
Which actor played the host of the fictional music programme Jazz Club?|John Thomson|Mark Williams|Simon Day|Charlie Higson|Medium|John Thomson|Louis Balfour|Jazz Club|Presenter Casting|Music Parody|1990s Sketches|Nightclub Programme
What type of music is the focus of Louis Balfour's spoof television show?|Jazz|Classical opera|Country and western|Heavy metal|Easy|Louis Balfour|Jazz Club|Music Television|Music Genre|John Thomson|Band Introductions|Programme Spoof
Which Fast Show character is famous for elongated praise of the acts on Jazz Club?|Louis Balfour|Ron Manager|Tommy Cockles|Colin Hunt|Medium|Louis Balfour|Jazz Club|Presenter Catchphrase|John Thomson|Music Appreciation|Sketch Host|Comic Delivery
Which actor played rambling football pundit Ron Manager?|Paul Whitehouse|Simon Day|Charlie Higson|Mark Williams|Hard|Ron Manager|Paul Whitehouse|Football Pundit|Sports Commentary|Character Casting|Nostalgia|BBC Sketch
Which sport is discussed by Ron Manager and his fellow pundits?|Football|Cricket|Rugby|Tennis|Easy|Ron Manager|Football|Sports Punditry|Match Analysis|Soccer|BBC Sketch|Commentary Panel
Which two actors played the suggestive tailoring duo Ken and Kenneth?|Paul Whitehouse and Mark Williams|Charlie Higson and Simon Day|John Thomson and Simon Day|Paul Whitehouse and John Thomson|Hard|Ken And Kenneth|Paul Whitehouse|Mark Williams|Suit Shop|Double Act|Sketch Casting|Menswear
Where do Ken and Kenneth work in The Fast Show?|A gentlemen's outfitters|A hotel reception|A car showroom|A barbershop|Easy|Ken And Kenneth|Menswear Shop|Tailors|Suit Fitting|Customers|Innuendo|Retail Comedy
Which phrase is most closely associated with the two intrusive men's clothing assistants?|Suits you sir|Brilliant|Scorchio|Which was nice|Medium|Ken And Kenneth|Suits You Sir|Tailoring Sketch|Catchphrase|Menswear|Comic Innuendo|Paul Whitehouse
Which film star appeared as a customer of the tailors in a 2000 special?|Johnny Depp|Hugh Grant|Sean Connery|Michael Caine|Medium|Johnny Depp|2000 Christmas Special|Tailors Sketch|Celebrity Guest|Suit Shop|The Last Fast Show Ever|Guest Appearance
Who played the elderly barrister Rowley Birkin QC?|Paul Whitehouse|Charlie Higson|John Thomson|Simon Day|Hard|Rowley Birkin|Paul Whitehouse|QC|Barrister|Character Casting|Drunken Stories|Recurring Sketch
What is Rowley Birkin's profession, indicated by the letters QC after his name?|Barrister|Surgeon|Architect|Vicar|Medium|Rowley Birkin|Queens Counsel|Lawyer|Legal Profession|Paul Whitehouse|Rambling Anecdotes|Profession
Which Fast Show character is known for barely intelligible tales of his past drinking exploits?|Rowley Birkin QC|Competitive Dad|Ringo|Ron Manager|Medium|Rowley Birkin|Drunken Anecdotes|Paul Whitehouse|Posh Mumble|Recurring Character|Comic Monologues|Elderly Barrister
Who played self-styled environmental campaigner Dave Angel?|Simon Day|Charlie Higson|John Thomson|Mark Williams|Medium|Simon Day|Dave Angel|Eco Warrior|Environmental Satire|Character Casting|Leather Jacket|1997 Series
What cause does Dave Angel claim to champion?|Environmental protection|Road safety|Animal racing|Political monarchy|Easy|Dave Angel|Eco Warrior|Environment|Green Issues|Simon Day|Campaigning|Sketch Theme
Which Fast Show actor portrayed the irritating office joker Colin Hunt?|Charlie Higson|Paul Whitehouse|Simon Day|Mark Williams|Hard|Charlie Higson|Colin Hunt|Office Joker|Workplace Comedy|Character Casting|Unfunny Pranks|Series Two
What kind of behaviour makes Colin Hunt so unpopular with his colleagues?|Relentless unfunny practical jokes|Constantly falling asleep at work|Refusing ever to speak|Arriving in historical costumes|Medium|Colin Hunt|Office Pranks|Workplace Irritation|Charlie Higson|Resources Department|Unfunny Humour|Character Traits
Who portrayed the perpetually coughing countryside presenter Bob Fleming?|Charlie Higson|John Thomson|Paul Whitehouse|Mark Williams|Medium|Charlie Higson|Bob Fleming|Country Matters|Television Presenter|Coughing Gag|Actor Casting|Rural Television
What physical problem repeatedly disrupts Bob Fleming's television presentations?|A severe cough|A broken leg|Sudden sneezing fits|Frequent hiccups|Easy|Bob Fleming|Coughing|Country Matters|Presenter Difficulty|Running Gag|Charlie Higson|Health Complaint
What is the name of Bob Fleming's fictional countryside television programme?|Country Matters|Gardeners' World|Nature Watch|Country Tracks|Medium|Country Matters|Bob Fleming|Rural TV|Programme Within Programme|Fishing|Village Life|Sketch Setting
Who played the accident-prone and pessimistic Unlucky Alf?|Paul Whitehouse|Simon Day|John Thomson|Charlie Higson|Medium|Unlucky Alf|Paul Whitehouse|Bad Luck|Character Casting|Northern Character|Recurring Sketch|Comedy Misfortune
What usually happens after Unlucky Alf predicts that something will go wrong?|His bad luck comes true|He wins an unexpected fortune|Someone gives him a prize|Nothing unusual happens|Medium|Unlucky Alf|Pessimism|Accidents|Self Fulfilling Fears|Running Gag|Paul Whitehouse|Character Premise
Which performer played the insecure woman who worries about how clothes make her look?|Arabella Weir|Caroline Aherne|Maria McErlane|Eryl Maynard|Medium|Arabella Weir|Insecure Woman|Appearance Anxiety|Clothes Shopping|Sketch Casting|Body Image|Recurring Line
What common personal concern drives Arabella Weir's Insecure Woman sketches?|Whether clothes make her look larger|Whether her voice sounds too deep|Whether she has missed the bus|Whether her hair is naturally curly|Easy|Insecure Woman|Arabella Weir|Clothing Fit|Body Image|Fashion Anxiety|Mirrors|Sketch Premise
Which actress played the weather presenter associated with the word Scorchio?|Caroline Aherne|Arabella Weir|Maria McErlane|Michelle Collins|Medium|Caroline Aherne|Poula Fisch|Chanel Nine|Weather Forecast|Scorchio|European TV Spoof|Character Casting
Which fictional television channel features the exaggerated foreign-language weather forecasts?|Chanel 9|Newsnight|Channel 4 News|World Service TV|Medium|Chanel Nine|Foreign Language Spoof|Weather Forecast|Poula Fisch|Caroline Aherne|Television Parody|Channel Name
What type of programme does Professor Denzil Dexter present in The Fast Show?|Science demonstrations|Cooking lessons|Art auctions|Travel documentaries|Medium|Professor Denzil Dexter|Science Experiments|John Thomson|Professor|Laboratory Sketch|Educational Television|Comic Failure
Which actor played science presenter Professor Denzil Dexter?|John Thomson|Simon Day|Charlie Higson|Mark Williams|Hard|John Thomson|Professor Denzil Dexter|Science Show|Actor Casting|Experiments|BBC Character|Laboratory Comedy
Which recurring character gets wildly excited about ordinary everyday experiences?|Brilliant Kid|Colin Hunt|Ron Manager|Swiss Toni|Easy|Brilliant Kid|Enthusiasm|Paul Whitehouse|Northern Accent|Everyday Objects|Catchphrase|Sketch Character
Which performer played the character known as the Brilliant Kid?|Paul Whitehouse|Simon Day|Mark Williams|John Thomson|Medium|Paul Whitehouse|Brilliant Kid|Character Casting|Northern Youth|Enthusiastic Lists|Catchphrase|Comic Monologues
Which actor portrayed the oddly competitive father who insists on defeating his children?|Simon Day|Charlie Higson|Paul Whitehouse|John Thomson|Hard|Simon Day|Competitive Dad|Family Games|Parental Rivalry|Character Casting|Sketch Comedy|Sporting Contest
What is Competitive Dad's defining habit?|Trying to beat his own children at everything|Avoiding all family holidays|Changing jobs every week|Forgetting his children's names|Easy|Competitive Dad|Parental Rivalry|Simon Day|Board Games|Sports Contests|Family Satire|Character Traits
Who portrayed the stage comedian Arthur Atkinson?|Paul Whitehouse|John Thomson|Charlie Higson|Mark Williams|Medium|Paul Whitehouse|Arthur Atkinson|Music Hall|Vintage Comedy|Character Casting|Retro Performer|Show Business
What era of entertainment does Arthur Atkinson parody?|Old-fashioned music hall|1970s punk rock|Modern reality television|Silent newsreels|Medium|Arthur Atkinson|Music Hall|Old Comedy Acts|Vintage Entertainment|Paul Whitehouse|Stage Performance|Sketch Spoof
Who played Arthur Atkinson's nostalgic television biographer Tommy Cockles?|Simon Day|John Thomson|Charlie Higson|Paul Whitehouse|Hard|Simon Day|Tommy Cockles|Arthur Atkinson|Documentary Presenter|Actor Casting|Show Business History|Sketch Host
Which recurring character suffers a dramatic emotional outburst when a certain colour is mentioned?|Johnny Nice Painter|Bob Fleming|Professor Denzil Dexter|Louis Balfour|Medium|Johnny Nice Painter|Landscape Art|Charlie Higson|Emotional Outburst|Outdoor Painting|Colour Trigger|Recurring Sketch
Which colour triggers Johnny Nice Painter's dark spirals?|Black|Blue|Yellow|Green|Medium|Johnny Nice Painter|Black Colour|Charlie Higson|Painter Meltdown|Emotional Trigger|Landscape Painting|Colour Association
Who played the elderly-fashioned character Jesse who lists his unusual weekly eating plans?|Mark Williams|Simon Day|Paul Whitehouse|John Thomson|Hard|Mark Williams|Jesse|Food Lists|Character Casting|Weekly Meals|Strange Diet|Recurring Sketch
Which prominent real-life snooker player made a guest appearance in the second series?|Steve Davis|Stephen Hendry|Ronnie O'Sullivan|Jimmy White|Medium|Steve Davis|1996 Episode|Series Two|Snooker|Celebrity Cameo|Guest Appearance|Sports Star
In which year was The Fast Show's Christmas special broadcast during its second series?|1996|1994|1998|2001|Medium|1996 Christmas|Festive Special|Series Two|BBC Two|Television Timeline|Holiday Episode|Ron Manager
What activity do the Off-Roaders try in a 1996 sketch?|Paintballing|Ski jumping|Hang-gliding|Water skiing|Medium|Off Roaders|Paintball|Series Two|Extreme Sports|March 1996|Sketch Adventure|Outdoor Pursuits
What water sport do the Off-Roaders attempt in the final regular series?|White-water rafting|Sailing a yacht|Scuba diving|Synchronised swimming|Medium|Off Roaders|White Water Rafting|Series Three|Extreme Sports|1997 Finale|Outdoor Sketch|River Adventure
What kind of danger does deaf stuntman Chip Cobb face because he misunderstands instructions?|Performing the wrong stunt|Forgetting the film location|Misplacing his costume|Failing to learn a dance routine|Medium|Chip Cobb|Deaf Stuntman|Misheard Orders|Film Stunts|Comic Danger|1997 Sketch|Character Premise
Which recurring music programme performs a festive version of We Wish You a Merry Christmas in the 1996 special?|Jazz Club|Country Matters|That's Amazing|Chanel 9 News|Medium|Jazz Club|1996 Christmas|Festive Music|Louis Balfour|Holiday Special|Jazz Parody|BBC Sketch
What unusual customer confronts the suggestive tailors during a later third-series sketch?|One more uninhibited than themselves|A government tax inspector|A rival tailor with a uniform|A child seeking school shoes|Medium|Ken And Kenneth|Series Three|Outrageous Customer|Innuendo Reversed|Menswear Shop|1997 Episode|Sketch Twist
Which real-life writer was referenced as the author of a play starring Arthur Atkinson in the third series?|Samuel Beckett|Alan Bennett|Noel Coward|Harold Pinter|Hard|Samuel Beckett|Arthur Atkinson|Series Three|Absurdist Theatre|1997 Episode|Stage Play|High Culture Spoof
What is the title used for the trio of farewell specials screened in December 2000?|The Last Fast Show Ever|Return of the Fast Show|The Fast Show Rewind|Even Faster|Medium|The Last Fast Show Ever|December 2000|Farewell Specials|BBC Two|Three Part Event|Programme Finale|Broadcast History`;

const questions = [];
function addFacts(block, programme, era, genre) {
  const rows = block.trim().split('\n');
  for (const [index, row] of rows.entries()) {
    const fields = row.split('|').map(s => s.trim());
    if (fields.length !== 13 || fields.some(x => !x)) {
      throw new Error(`${programme}: invalid fact row ${index + 1} (${fields.length} fields)`);
    }
    const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
    const question = stem.toLowerCase().includes(programme.toLowerCase())
      ? stem : `In ${programme}, ${stem[0].toLowerCase()}${stem.slice(1)}`;
    const answers = [wrong1, wrong2, wrong3];
    answers.splice(questions.length % 4, 0, correctAnswer);
    const tags = [...new Map(['Television', 'British Television', genre, 'Comedy', programme, 'Programme: '+programme, era, correctAnswer, ...specificTags]
      .map(tag => [tag.toLowerCase(), tag])).values()];
    const entry = {
      id: `tv_${FIRST_ID + questions.length}`,
      category: 'Television',
      programme,
      question, answers, correctAnswer, difficulty, tags, dailyEligible: true
    };
    if (new Set(answers.map(a => a.toLowerCase())).size !== 4 ||
        !answers.includes(correctAnswer) ||
        !['Easy', 'Medium', 'Hard'].includes(difficulty) || tags.length < 9) {
      throw new Error(`Bad metadata in ${entry.id}`);
    }
    questions.push(entry);
  }
}
addFacts(donkeyFacts, 'Drop the Dead Donkey', '1990-1998', 'Satirical Sitcom');
addFacts(fastFacts, 'The Fast Show', '1994-2001', 'Sketch Comedy');
const wordings = new Set();
for (const q of questions) {
  const k = q.question.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (wordings.has(k)) throw new Error(`Duplicate question wording in ${q.id}`);
  wordings.add(k);
  const normalizedQuestion = q.question.toLowerCase().replace(/[^a-z0-9]/g, '');
  const normalizedAnswer = q.correctAnswer.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (normalizedQuestion.includes(normalizedAnswer)) {
    throw new Error(`Answer giveaway in ${q.id}: ${q.correctAnswer}`);
  }
}


// Audited additional story and sketch material.
// Research: https://www.tvmaze.com/shows/6492/drop-the-dead-donkey/episodeguide
// https://thetvdb.com/series/the-fast-show/allseasons/official
// https://www.tvmaze.com/shows/2779/the-fast-show/episodeguide
// Original tv_19620-tv_19730 preserved. New questions begin at tv_40299.
const donkeyAuditRows = `In A Clash of Interests, who must decide whether to broadcast damaging news about the station's owner?|George Dent|Damien Day|Joy Merryweather|Sally Smedley|Series 1|A Clash of Interests|Story about Sir Roysten Merchant
In Old Father Time, which worker's interview with a minister goes badly?|Henry Davenport|Dave Charnley|Gus Hedges|Helen Cooper|Series 1|Old Father Time|Government-minister interview
In The New Approach, what professional principle does George start to question?|Journalistic impartiality|The use of sign-language presenters|The right to strike|Public ownership of television|Series 1|The New Approach|Newsroom ethics
In The Trevorman Cometh, what threatens the survival of the company?|Serious financial difficulties|A fire in the studio|A prolonged national broadcast strike|A loss of broadcast licence|Series 2|The Trevorman Cometh|GlobeLink finances
In Baseball, whom does Gus force into an embarrassing position?|His brother|His former schoolteacher|His nephew|His neighbour|Series 2|Baseball|Gus Hedges's family
In Alex and the Interpreter, which country's official visits the news organisation?|Russia|Japan|France|Canada|Series 2|Alex and the Interpreter|Official diplomatic visitor
In Hoax, why does Damien become furious with another reporter?|The rival invents a story more convincingly|The rival is given a new company car|The rival refuses to take his cameraman|The rival wins a chess competition|Series 2|Hoax|Fabricated reporting
In George's Daughter, whose problems worsen after a documentary crew arrives?|George Dent's|Gus Hedges's|Helen Cooper's|Henry Davenport's|Series 2|George's Daughter|Newsroom documentary
In The Christmas Party, which employee cannot recall what happened during the festivities?|George Dent|Alex Pates|Gus Hedges|Joy Merryweather|Series 2|The Christmas Party|Office festivities
In In Place of Alex, who joins Gus in interviewing candidates for the newsroom vacancy?|George Dent|Henry Davenport|Damien Day|Sally Smedley|Series 3|In Place of Alex|Replacement interviews
In Henry's Lost Love, what news from a former wife leaves Henry distressed?|She is getting married again|She is joining the newsroom|She has won a television award|She has become a sports reporter|Series 3|Henry's Lost Love|Henry Davenport's ex-wife
In Sally's Libel, what legal action does Sally take?|She sues a newspaper|She sues GlobeLink for redundancy|She petitions the courts for custody|She disputes her parking fine|Series 3|Sally's Libel|Defamation claim
In Lady Merchant, which serious workplace issue drives a newsroom storyline?|Sexual harassment|Industrial sabotage|Bribing a court witness|Selling confidential military files|Series 3|Lady Merchant|Office misconduct
In The New Newsreader, what is the first name of the young presenter introduced by Gus?|Jill|Pamela|Barbara|Veronica|Series 3|The New Newsreader|New on-air talent
In Joy, which colleague becomes an unexpected confidante for George after Helen rejects him?|Joy Merryweather|Alex Pates|Sally Smedley|Damien Day|Series 3|Joy|George Dent's disappointment
In Awards, at what ceremony do the GlobeLink employees attend a party?|The British News Awards|The British Film Awards|The Sports Personality Awards|The National Music Awards|Series 3|Awards|News industry ceremony
In The Undiscovered Country, which expensive possession causes problems for Damien?|His Porsche|His yacht|His horse|His motorbike|Series 4|The Undiscovered Country|Damien's car
In Quality Time, which medical scare has Gus recently suffered?|A heart tremor|A broken hip|A collapsed lung|A concussion|Series 4|Quality Time|Gus Hedges recovering
In Births and Deaths, which reporter receives threats against his life?|Damien Day|Dave Charnley|Henry Davenport|George Dent|Series 4|Births and Deaths|Threatening messages
In Helen's Parents, whose visit creates pressure for Helen to be honest about her private life?|Her parents|Her former schoolteachers|Her neighbours|Her cousins from Canada|Series 4|Helen's Parents|Helen Cooper's family
In Sally in T.V. Times, which colleague offers to pose nude for a photographer?|Joy Merryweather|Alex Pates|Helen Cooper|Sally Smedley|Series 4|Sally in T.V. Times|Photographer's request
In No More Mr. Nice Guy, how does George change after repeated romantic disappointments?|He becomes tyrannical|He resigns to become a chef|He joins a religious order|He starts a newspaper|Series 4|No More Mr. Nice Guy|George Dent's conduct
In The Wedding, which manager insists on attending the planned stag night?|Gus Hedges|Sir Roysten Merchant|Henry Davenport|Damien Day|Series 4|The Wedding|Unwanted guest
In Inside the Asylum, which presenter returns following an enforced absence?|Sally Smedley|Helen Cooper|Joy Merryweather|Alex Pates|Series 5|Inside the Asylum|Return to work
In The Bird of Doom, what modern development reaches the newsroom?|New technology|A new brass band|A new catering contract|A new postal delivery scheme|Series 5|The Bird of Doom|Technological change
In The Path of True Love, which manager faces the prospect of romance?|Gus Hedges|George Dent|Dave Charnley|Henry Davenport|Series 5|The Path of True Love|A new relationship
In George's Car, which member of the newsroom goes shopping for a new vehicle?|George Dent|Damien Day|Gus Hedges|Dave Charnley|Series 5|George's Car|Vehicle purchase
In Charnley in Love, which personal event is worrying Dave?|His wedding|His child's first day at school|His mother's retirement|His brother's graduation|Series 5|Charnley in Love|Dave Charnley personal life
In Henry's Diary, in whose honour does Gus arrange a celebrity dinner?|Sir Roysten Merchant|George Dent|Henry Davenport|Damien Day|Series 5|Henry's Diary|Corporate celebrity dinner
In Dave and Diana, which professional is brought in to assess the newsroom team?|A psychologist|An architect|A forensic accountant|A television critic|Series 5|Dave and Diana|Staff mental health assessment
In The Graveyard Shift, which journalist works overnight and finds she has company?|Helen Cooper|Sally Smedley|Alex Pates|Joy Merryweather|Series 5|The Graveyard Shift|Late shift
In Sex 'n Death, which member of the staff is struggling with illness?|George Dent|Damien Day|Henry Davenport|Dave Charnley|Series 5|Sex n Death|George's health
In Beasts Badgers and Bombshells, what announcement sets off rumours in the newsroom?|Job cuts|A new overseas bureau|A national television award|The owner's retirement party|Series 6|Beasts Badgers and Bombshells|Impending redundancies
In The Diaries, who refuses to accept that GlobeLink is about to close?|Gus Hedges|Joy Merryweather|Dave Charnley|Helen Cooper|Series 6|The Diaries|Denial over closure
In But Is It Art?, who looks for a new way to earn money?|Sally Smedley|Alex Pates|Damien Day|Henry Davenport|Series 6|But Is It Art|Alternative income
In George Finds Love, whose wealthy fiancé interests both a presenter and Gus?|Sally Smedley's|Helen Cooper's|Joy Merryweather's|Alex Pates's|Series 6|George Finds Love|Money and romance`;
const fastAuditRows = `In Series 1 Episode 1, what object does Unlucky Alf have an accident with?|A cricket ball|A bowling ball|A tennis racket|A golf club|Series 1|Episode 1|Unlucky Alf sporting accident
In Series 1 Episode 1, what problem is explored by the sketch called The Unpronounceables?|Difficult-to-say names|A lost train ticket|A malfunctioning radio|An embarrassing wedding speech|Series 1|Episode 1|Hard names sketch
In Series 1 Episode 2, what pet does Unlucky Alf buy?|A parrot|A rabbit|A dog|A tortoise|Series 1|Episode 2|Unlucky Alf purchases a bird
In Series 1 Episode 2, which singer does Ralph ask Ted about?|Tina Turner|Celine Dion|Cher|Diana Ross|Series 1|Episode 2|Ralph's awkward conversation
In Series 1 Episode 3, what machine does Professor Denzil Dexter attempt to make?|A time machine|A jukebox|A weather satellite|An electric train|Series 1|Episode 3|Laboratory time travel
In Series 1 Episode 3, which character is shown unsuccessfully trying to catch a bus?|Unlucky Alf|Competitive Dad|Ron Manager|Colin Hunt|Series 1|Episode 3|Bus-stop mishap
In Series 1 Episode 4, which stretch of water does Elsa Richardson investigate for pollution?|The North Sea|The English Channel|The Bristol Channel|The Irish Sea|Series 1|Episode 4|Environmental reporting
In Series 1 Episode 4, which snack is promoted in a fake advertisement?|Cheesy Peas|Spicy Chickpeas|Crunchy Parsnips|Chocolate Beans|Series 1|Episode 4|Spoof food advertising
In Series 1 Episode 4, what kind of vehicle does Indecisive Dave discuss buying?|A BMW|A caravan|A tractor|A motorboat|Series 1|Episode 4|Indecisive consumer
In Series 1 Episode 5, what happens to Unlucky Alf at a friend's funeral?|He is buried by mistake|He loses the funeral car|He becomes the organist|He accidentally sets off fireworks|Series 1|Episode 5|An unfortunate funeral
In Series 1 Episode 5, what unusual creatures interfere with Professor Denzil Dexter's work?|Space bats|Giant ants|Flying fish|Radioactive frogs|Series 1|Episode 5|Professor Denzil Dexter experiment
In Series 1 Episode 6, what dangerous activity do the Off-Roaders attempt?|Shark fishing|Mountain climbing|Skydiving|Cliff diving|Series 1|Episode 6|Extreme hobbyists at sea
In Series 1 Episode 6, which partner does Arthur Atkinson introduce to the audience?|Chester Drawers|Billy Bleach|Tommy Cockles|Ron Manager|Series 1|Episode 6|Music hall double act
In Series 2 Episode 2, what sport does Competitive Dad play?|Cricket|Tennis|Rugby|Badminton|Series 2|Episode 2|Competitive family outing
In Series 2 Episode 2, where does Bob Fleming visit?|A gypsy fair|A boxing arena|A record shop|A football ground|Series 2|Episode 2|Country Matters outing
In Series 2 Episode 3, what wartime radio show stars Arthur Atkinson?|How Queer!|The Night Shift|Victory Parade|A World of Fun|Series 2|Episode 3|Fictional wartime programme
In Series 2 Episode 4, which animal does Bob Fleming go to watch?|Badgers|Otters|Foxes|Deer|Series 2|Episode 4|Country Matters wildlife outing
In Series 2 Episode 5, what romantic step does Unlucky Alf attempt?|A marriage proposal|A first date|A honeymoon booking|A speed-dating evening|Series 2|Episode 5|Alf finds a girlfriend
In Series 2 Episode 6, which fictional hard-boiled police officer appears?|Monkfish|Benton|McLeary|Harper|Series 2|Episode 6|Police drama parody
In Series 2 Episode 6, which Jazz Club performer leads a band called The Jazz Mess?|Piles Soylent|Louis Balfour|Roger Nouveau|Arthur Atkinson|Series 2|Episode 6|Jazz Club guest
In Series 2 Episode 7, what item does Professor Denzil Dexter steal from another laboratory?|A skull|A microscope|A skeleton key|A chemical flask|Series 2|Episode 7|Laboratory theft
In Series 2 Episode 7, what board game does Competitive Dad play?|Monopoly|Scrabble|Cluedo|Risk|Series 2|Episode 7|Family competition
In Series 3 Episode 1, which fashion label does Jesse announce he will mostly wear?|Dolce & Gabbana|Calvin Klein|Hugo Boss|Tommy Hilfiger|Series 3|Episode 1|Jesse's clothing declaration
In Series 3 Episode 2, what office machine does Colin Hunt try to repair?|A photocopier|A fax machine|A coffee machine|A telephone switchboard|Series 3|Episode 2|Colin Hunt fixing office equipment
In Series 3 Episode 3, which creatures does the squeamish zookeeper have to feed?|Penguins|Seals|Flamingos|Meerkats|Series 3|Episode 3|Zookeeper sketch
In Series 3 Episode 3, which underground activity do the Off-Roaders attempt?|Potholing|Gold mining|Caving for fossils|Tunnel building|Series 3|Episode 3|Extreme underground outing
In Series 3 Episode 4, in which fictional film does Arthur Atkinson star?|Confessions of a Door-to-Door Cucumber Salesman|The Great Cucumber Caper|Cucumber Country|Cucumber and the King|Series 3|Episode 4|Parody seventies sex comedy
In Series 3 Episode 7, what fictional music series is presented by Sullivan Rhodes?|Indie Club|Disco Dancefloor|Soul Sessions|Country Corner|Series 3|Episode 7|Alternative music club parody
In Series 3 Episode 8, which character attends Mrs Ted's funeral?|Ralph|Swiss Toni|Gastric|Ron Manager|Series 3|Episode 8|Ted and Ralph bereavement
In The Last Fast Show Ever Part 2, what hobby does Swiss Toni turn into one of his suggestive metaphors?|Fishing|Golf|Cooking|Painting|2000 specials|Part 2|Swiss Toni fishing analogy
In The Last Fast Show Ever Part 3, whose father appears and reveals where Competitive Dad learnt his behaviour?|Competitive Dad's own father|Unlucky Alf's|Colin Hunt's|Ron Manager's|2000 specials|Part 3|Competitive Dad family legacy
In the 1998 Ted & Ralph special, what does Ralph risk losing unless he marries before his next birthday?|His country estate|His television contract|His favourite horse|His motorcar|1998 special|Ted & Ralph|Landowner's marriage condition
In the 2001 Comic Relief sketch, which famous singer joins Ted and Ralph?|Robbie Williams|Gary Barlow|Elton John|George Michael|2001 Comic Relief|Ted and Ralph|Celebrity charity guest`;
const strict378=x=>String(x).normalize('NFKC').toLocaleLowerCase('en-GB')
 .replace(/[^\p{L}\p{N}]/gu,'');
function addAudit378(block,programme,era,genre){
 for(const [index,row] of block.trim().split('\n').entries()){
  const parts=row.split('|').map(x=>x.trim());
  if(parts.length!==8||parts.some(x=>!x))throw Error('Invalid Pack 378 added row '+programme+' '+index);
  const [stem,correctAnswer,a,b,c,series,episode,storyline]=parts;
  const episodeIntro=/^In (.+?), (.+)$/.exec(stem);
  let question;
  const special=/^In the (\d{4}) (Ted & Ralph special|Comic Relief sketch), (.+)$/.exec(stem);
  if(special){
   question='In '+programme+' ('+special[1]+' '+special[2]+'), '+special[3];
  }else if(episodeIntro){
   const season=/^Series (\d+) Episode (\d+)$/.exec(episodeIntro[1]);
   if(season){
    question='In '+programme+' (Series '+season[1]+', Episode '+season[2]+'), '+episodeIntro[2];
   }else{
    question='In '+programme+'\'s "'+episodeIntro[1]+'" episode, '+episodeIntro[2];
   }
  }else{
   question=stem.toLocaleLowerCase('en-GB').includes(programme.toLocaleLowerCase('en-GB'))
    ?stem:'In '+programme+', '+stem[0].toLowerCase()+stem.slice(1);
  }
  const answers=[a,b,c];
  answers.splice(questions.length%4,0,correctAnswer);
  const tags=['Television','British Television',genre,'Comedy',programme,'Programme: '+programme,era,
   'Series/special: '+series,'Episode/sketch: '+episode,
   'Storyline: '+storyline,'Answer: '+correctAnswer,
   'Incident: '+storyline,'Episode focus: '+episode,'Programme era: '+era];
  questions.push({id:'tv_'+(40299+questions.length-111),
   category:'Television',programme,question,answers,correctAnswer,difficulty:'Medium',
   tags,dailyEligible:true});
 }
}
addAudit378(donkeyAuditRows,'Drop the Dead Donkey','1990-1998','Satirical Sitcom');
addAudit378(fastAuditRows,'The Fast Show','1994-2001','Sketch Comedy');
const audit378Ids=new Set(),audit378Text=new Set();
for(const q of questions){
 const key=strict378(q.question),a=strict378(q.correctAnswer);
 if(!q.programme||q.category!=='Television'||!q.tags.includes('Programme: '+q.programme)||
 q.answers.length!==4||new Set(q.answers.map(strict378)).size!==4||
 q.answers.filter(x=>x===q.correctAnswer).length!==1||q.tags.length<12||
 q.dailyEligible!==true||key.includes(a)||audit378Ids.has(q.id)||audit378Text.has(key)){
  throw Error('Pack 378 validation failed '+q.id);
 }
 audit378Ids.add(q.id);audit378Text.add(key);
}
module.exports=questions;
