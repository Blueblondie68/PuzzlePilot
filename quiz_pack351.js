
// quiz_pack351.js — PuzzlePilot Bigggggg Quiz
// Keeping Up Appearances (1990–1995), four Christmas specials,
// and the connected 2016 one-off prequel Young Hyacinth.
// Seven individually chosen specialist tags per question.

const facts = `
Who plays Hyacinth Bucket in Keeping Up Appearances?|Patricia Routledge|Judy Cornwell|Josephine Tewson|Mary Millar|Easy|Patricia Routledge|Hyacinth Bucket|Lead Actress|Main Character|BBC Sitcom|Original Cast|1990 To 1995
Which actor portrays Hyacinth's husband Richard?|Clive Swift|Geoffrey Hughes|David Griffin|Jeremy Gittins|Easy|Clive Swift|Richard Bucket|Long Suffering Husband|Male Lead|Actor Casting|Bucket Household|Original Series
Who wrote the original sitcom Keeping Up Appearances?|Roy Clarke|David Croft|John Sullivan|Carla Lane|Easy|Roy Clarke|Writer|BBC Comedy|Series Creator|Scripts|1990 Premiere|British Sitcom
Who directed and produced the original Keeping Up Appearances series?|Harold Snoad|John Lloyd|Gareth Edwards|Oliver Postgate|Medium|Harold Snoad|Producer|Director|BBC Television|Production Credits|Sitcom Crew|1990s
In which year did Keeping Up Appearances first air?|1990|1986|1993|1997|Easy|1990 Premiere|29 October|BBC One|Original Broadcast|Series One|Television Timeline|Sitcom Debut
Which BBC channel first broadcast Keeping Up Appearances?|BBC One|BBC Two|BBC Three|BBC Four|Easy|BBC One|Original Network|British Broadcasting|1990 Debut|Comedy Scheduling|BBC Sitcom|Television Channel
How many series of Keeping Up Appearances were produced in its original run?|Five|Three|Four|Six|Easy|Five Series|1990 To 1995|Original Run|Series Count|Broadcast History|British Comedy|Programme Format
How many broadcast episodes make up the original run including four Christmas specials?|Forty-four|Forty|Forty-six|Fifty-two|Medium|Forty Four Episodes|Four Christmas Specials|Original Run|Broadcast Count|Five Series|BBC One|Episode Total
Which pronunciation does Hyacinth insist on for her surname?|Bouquet|Book-it|Boo-kay|Boo-chet|Easy|Bouquet Pronunciation|Hyacinth Bucket|Social Pretensions|Family Name|Signature Joke|Snobbery|Phone Etiquette
What is Hyacinth's favourite name for her formal evening gatherings?|Candlelight suppers|Garden breakfasts|Midnight banquets|Tea dances|Easy|Candlelight Supper|Hyacinth Entertaining|Dinner Invitations|Social Climbing|Hostess|Formal Occasions|Recurring Phrase
Which famous china manufacturer does Hyacinth boast about owning?|Royal Doulton|Wedgwood|Royal Worcester|Spode|Easy|Royal Doulton|Hyacinth China|Hand Painted Periwinkles|Tableware|Tea Service|Status Symbol|Fine Crockery
Which flowers decorate the china Hyacinth is always eager to mention?|Periwinkles|Roses|Daffodils|Poppies|Medium|Hand Painted Periwinkles|Royal Doulton|Hyacinth Tea Cups|Flower Pattern|Fine China|Status Anxiety|Recurring Joke
What kind of telephone does Hyacinth proudly distinguish from her ordinary one?|A white slimline telephone|A red cordless telephone|A brass wall telephone|A black rotary telephone|Medium|White Slimline Telephone|Hyacinth Telephone|Incoming Calls|Household Possessions|Status Display|Phone Routine|Recurring Prop
What is the first name of Hyacinth's son who regularly telephones home?|Sheridan|Simon|Stephen|Sebastian|Easy|Sheridan Bucket|Unseen Son|Family Phone Calls|College Student|Hyacinth Pride|Money Requests|Family Relationship
What do viewers generally see of Sheridan throughout the original series?|He remains off-screen|He appears only at Christmas|He plays at a church concert|He is seen in a wedding scene|Medium|Sheridan|Never Seen|Telephone Conversations|Unseen Character|Mother And Son|Running Joke|Off Screen Role
What does Sheridan often want when he calls his parents?|Money|A lift to work|Advice about farming|A new bicycle|Medium|Sheridan Phone Calls|Financial Requests|Hyacinth And Richard|College Expenses|Family Comedy|Unseen Son|Regular Plot
Which sister of Hyacinth is married to Onslow?|Daisy|Violet|Rose|Elizabeth|Easy|Daisy|Onslow Wife|Hyacinth Sister|Family Relationship|Council Estate|Regular Character|Marriage
Who portrays the scruffy and laid-back Onslow?|Geoffrey Hughes|Clive Swift|George Webb|David Griffin|Easy|Geoffrey Hughes|Onslow|Actor Casting|Daisy Husband|Working Class Family|Original Sitcom|Comic Character
Which actress plays Daisy throughout Keeping Up Appearances?|Judy Cornwell|Shirley Stelfox|Mary Millar|Anna Dawson|Easy|Judy Cornwell|Daisy|Hyacinth Sister|Onslow Wife|Recurring Cast|British Actress|Family Scenes
Which of Hyacinth's sisters is known for her frequent romantic entanglements?|Rose|Daisy|Violet|Elizabeth|Easy|Rose|Romantic Adventures|Hyacinth Sister|Family Embarrassment|Dating|Recurring Character|Sister Relationships
Who played Rose during the first television series?|Shirley Stelfox|Mary Millar|Judy Cornwell|Marion Barron|Medium|Shirley Stelfox|Rose|Series One|Original Casting|1990|Cast Change|Actress
Which actress took over the role of Rose from the second series?|Mary Millar|Shirley Stelfox|Josephine Tewson|Miriam Margolyes|Medium|Mary Millar|Rose|Series Two To Five|Recasting|1991|Actress|Later Cast
Which sister does Hyacinth boast has a Mercedes and a swimming pool?|Violet|Daisy|Rose|Elizabeth|Easy|Violet|Wealthy Sister|Mercedes|Swimming Pool|Social Status|Family Boasting|Recurring Reference
What kind of animal could supposedly be kept in the grounds of Violet's home?|A pony|A peacock|A llama|A deer|Medium|Violet Home|Room For A Pony|Wealthy Sister|Luxury Property|Hyacinth Boasting|House Grounds|Family Status
What is the first name of Violet's husband?|Bruce|Michael|Richard|Emmet|Medium|Bruce|Violet Husband|Marriage Difficulties|Family Relatives|Wealthy Household|Recurring Phone Calls|Character Name
Who plays Hyacinth's accident-prone next-door neighbour Elizabeth?|Josephine Tewson|Judy Cornwell|Patricia Routledge|Anna Dawson|Easy|Josephine Tewson|Elizabeth Warden|Next Door Neighbour|Liz|Tea Visits|Actress|Original Cast
What mishap frequently happens when Elizabeth has tea in Hyacinth's house?|She spills coffee or breaks china|She falls asleep on the sofa|She loses her handbag|She turns off the electricity|Medium|Elizabeth Nervousness|Spilt Coffee|Broken Crockery|Hyacinth Tea Visits|Social Anxiety|Running Gag|Neighbour Comedy
Which relative moves in with Elizabeth following his divorce?|Her brother Emmet|Her uncle Richard|Her cousin Bruce|Her father George|Medium|Emmet Hawksworth|Elizabeth Brother|Divorce|Neighbour Household|Series Two Arrival|Character Introduction|Family Link
Who plays Emmet Hawksworth from the second series onwards?|David Griffin|Jeremy Gittins|Geoffrey Hughes|Clive Swift|Medium|David Griffin|Emmet Hawksworth|Musical Director|Actor Casting|Series Two To Five|Elizabeth Brother|Supporting Cast
Why does Emmet often try to avoid Hyacinth?|He fears she will sing at him|She asks him to mend his car|She keeps stealing his newspaper|She always criticises his cooking|Medium|Emmet Hawksworth|Hyacinth Singing|Musical Director|Audition Ambitions|Avoidance|Neighbour Anxiety|Running Joke
What is the job of Michael, a frequent visitor to the Bucket household?|Vicar|Postman|Doctor|Policeman|Easy|Michael The Vicar|Parish Church|Clergy|Regular Visitor|Hyacinth Impressions|Church Activities|Character Occupation
Which actor plays the vicar Michael?|Jeremy Gittins|David Griffin|Clive Swift|George Webb|Medium|Jeremy Gittins|Michael The Vicar|Clergy Casting|Church Scenes|Recurring Guest|Sitcom Actor|Parish Minister
Who plays Hyacinth's elderly father known as Daddy?|George Webb|Geoffrey Hughes|Harold Snoad|Peter Cellier|Medium|George Webb|Daddy|Family Patriarch|Elderly Father|Actor Casting|Wartime Memories|Recurring Role
Which earlier conflict does Daddy frequently imagine he is reliving?|The Second World War|The Crimean War|The Boer War|The Napoleonic Wars|Medium|Daddy|World War Two|Wartime Flashbacks|Family History|Military Memories|Escapades|Elderly Character
With which couple does Daddy usually live?|Daisy and Onslow|Hyacinth and Richard|Elizabeth and Emmet|Violet and Bruce|Easy|Daddy Residence|Daisy|Onslow|Family Home|Shared Household|Elderly Relative|Local Estate
Which organisation's shop does Hyacinth help out at in the first series?|A charity shop|An antique auction house|A travel agency|A garden centre|Medium|Charity Shop|Series One|Volunteering|Mrs Nugent|Community Activities|Hyacinth Duties|Town Centre
What is Daddy doing when he suffers an accident in the first episode?|Chasing the milkwoman on his bicycle|Cleaning the kitchen windows|Playing football with Onslow|Mending a garden fence|Medium|Daddys Accident|First Episode|Milk Woman|Bicycle Mishap|Series One 1990|Family Crisis|Opening Plot
Whom does Hyacinth invite for tea in the second episode of the first series?|The new vicar|The local mayor|A television producer|An army colonel|Easy|The New Vicar|Church Tea|Series One|Formal Hospitality|Guest Visit|Hyacinth Plans|1990 Episode
What kind of property does Hyacinth visit hoping to mix with aristocratic society in the first series?|A stately home|A railway station|A luxury yacht|A golf clubhouse|Medium|Stately Home|Aristocratic Setting|Series One|Cultural Outing|Social Climbing|Richard Bucket|1990 Story
What does Daisy take up in the first series to make Onslow jealous?|A younger boyfriend|Singing lessons|A job in a hotel|Horse riding|Medium|Daisys Toyboy|Onslow Jealousy|Series One|Family Romance|Church Function|Marriage Troubles|1990 Episode
What family ceremony brings Hyacinth to Daisy's household in the first-series finale?|A christening|A wedding|A golden anniversary|A funeral|Medium|The Christening|Series One Finale|Daisy Family|Baby Kylie|Family Gathering|1990 Broadcast|Relatives
What is the first name of Daisy and Onslow's granddaughter christened in series one?|Kylie|Poppy|Stephanie|Laura|Hard|Kylie|The Christening|Daisy Granddaughter|Onslow Granddaughter|Baby|Series One|Family Tree
What discovery initially distresses Hyacinth when a man emerges from Elizabeth's house in a towel?|She assumes Elizabeth has a scandalous visitor|She thinks the house is being burgled|She believes a plumber has flooded the street|She fears a missing family member is hiding there|Medium|A Strange Man|Elizabeth Warden|Man In Towel|Series Two Premiere|Neighbour Suspicions|Wrong Impression|1991
Which wealthy woman accepts a lift into town from the Buckets in series two?|Mrs Fortescue|Mrs Nugent|Mrs Councillor Baker|Lady Whiteadder|Medium|Driving Mrs Fortescue|Wealthy Passenger|Hyacinth Ambition|Series Two|Car Journey|Social Contacts|1991 Episode
What game does Mrs Fortescue end up playing with Onslow after a disastrous outing?|Darts|Snooker|Bingo|Bridge|Medium|Mrs Fortescue|Onslow|Pub Darts|Driving Outing|Series Two|Class Contrast|Unexpected Friendship
What does Hyacinth want to demonstrate to Emmet during an elaborate supper in the second series?|Her singing ability|Her painting skills|Her knowledge of chess|Her skill at card tricks|Medium|Candlelight Supper|Emmet Hawksworth|Hyacinth Singing|Series Two|Musical Ambition|Dinner Party|1991
Which sport is involved when Hyacinth and Richard spend a weekend with the Major in series two?|Golf|Tennis|Cricket|Sailing|Medium|Golfing With The Major|Luxury Hotel|Series Two|Sports Weekend|Major Wilton Smythe|Social Climbing|1991
At whose birthday party does Hyacinth expect to arrive in a glamorous limousine?|Onslow's|Emmet's|Richard's|The vicar's|Medium|Onslows Birthday|Limousine Expectations|Series Two|Rose Boyfriend|Social Embarrassment|Family Celebration|1991
What vehicle unexpectedly arrives instead of the luxury car Hyacinth has been boasting about?|A hearse|A police van|An ambulance|A tractor|Medium|Onslows Birthday|Hearse Arrival|Limousine Confusion|Series Two|Hyacinth Embarrassment|Rose Boyfriend|1991
Where does Daddy cause trouble by altering toys with a screwdriver?|A toy shop|A school classroom|A museum|A supermarket|Medium|Toy Store|Daddy|Screwdriver|Series Two|1991 Episode|Shop Damage|Family Rescue
Which royal residence provides the model for Hyacinth's expensive new furniture?|Sandringham House|Buckingham Palace|Balmoral Castle|Windsor Castle|Medium|Three Piece Suite|Sandringham Replica|New Furniture|Series Two|Household Display|Delivery|Royal Connection
What gift does Hyacinth intend Daisy and Onslow to receive when new furniture arrives?|Her old three-piece suite|Richard's bicycle|Her previous dinner service|A second-hand television|Medium|Three Piece Suite|Old Furniture|Daisy And Onslow|Series Two|Household Reuse|Delivery Fiasco|Family Gift
Which costume does Richard wear to deliver Christmas gifts to elderly people in the 1991 special?|Father Christmas|A Roman centurion|A Victorian policeman|A medieval knight|Easy|Father Christmas Suit|1991 Special|Richard Bucket|Christmas Charity|Costume|Church Hall|Festive Episode
Who becomes tipsy with Richard while he is wearing his festive costume?|Emmet Hawksworth|Onslow|The vicar|Daddy|Medium|Father Christmas Suit|Emmet|Richard|Festive Drinks|1991 Special|Neighbour House|Christmas Mishap
What important change to Richard's working life begins the third series?|He takes early retirement|He becomes a councillor|He opens a restaurant|He joins the police|Easy|Early Retirement|Richard Bucket|Series Three|1992|Job Change|Hyacinth Plans|Household Routine
What archaeological period do Hyacinth and Richard investigate in the countryside after his retirement?|The Iron Age|The Bronze Age|The Roman period|The Stone Age|Medium|Iron Age Remains|Richard Retirement|Countryside Outing|Series Three|1992 Episode|Archaeology|Hyacinth Activity
Which sister's country cottage do Hyacinth and Richard borrow for a short stay?|Violet's|Daisy's|Rose's|Elizabeth's|Medium|Violets Country Cottage|Violet|Weekend Visit|Series Three|Rural Home|Social Display|1992
Where does Hyacinth go in series three to obtain impressive holiday brochures?|A travel agent|A railway museum|A tourist information hut|A bookshop|Medium|Holiday Brochures|Travel Agent|Delia Wheelright|Series Three|1992|Status Competition|Holiday Planning
What retirement gift does Hyacinth insist Richard should start using as a new hobby?|A video camera|A set of golf clubs|An electric keyboard|A fishing rod|Medium|Richards New Hobby|Video Camera|Retirement Gift|Series Three|Film Producer Pretence|1992|Leisure Activity
At what cultural event does Daddy cause additional embarrassment in the third series?|An art exhibition|A poetry recital|A film premiere|An opera rehearsal|Medium|Art Exhibition|Daddy Escape|Series Three|1992|Hyacinth Social Plans|Gallery|Cultural Aspirations
What recreational outing exposes Hyacinth and Richard's lack of nautical experience in series three?|A weekend on a yacht|A canoeing lesson|A fishing trawler trip|A sailing race|Medium|What To Wear When Yachting|Yacht Weekend|Series Three|Boating|Hyacinth Wardrobe|1992|Leisure Trip
What position does Hyacinth want Richard to pursue in the opening of the fourth series?|An executive post|A school caretaker role|A local taxi licence|A football coaching job|Medium|A Job For Richard|Executive Career|Series Four|Hyacinth Ambition|Early Retirement Aftermath|1993|Employment
Who does Hyacinth ask to act like a thug as part of her scheme to boost Richard's prospects?|Onslow|Emmet|Daddy|The vicar|Medium|A Job For Richard|Onslow Disguise|Golf Course|Series Four|1993|Hyacinth Scheme|Job Interview
What type of second home does Hyacinth dream of acquiring during the fourth series?|A country retreat|A seaside caravan|A canal boat|A city flat|Easy|Country Retreat|Second Home|Rural Aspirations|Series Four|1993|Property Search|Social Status
What kind of celebrity does Hyacinth hope will impress guests at an indoor-outdoor barbecue?|A television personality|A professional footballer|A classical sculptor|A racing driver|Medium|Celebrity For Barbecue|TV Personality|Series Four|Party Planning|Indoor Outdoor Event|1993|Social Ambition
Which shop does Hyacinth visit to fill the house with greenery for her grand party?|A garden centre|A furniture warehouse|A florist's auction|An antiques shop|Medium|Celebrity Barbecue|Garden Centre|Living Room Plants|Series Four|Hyacinth Party|Indoor Outdoor Entertaining|1993
What is the rank of the naval guest Hyacinth insists on collecting from the station for a ladies' luncheon?|Commodore|Admiral of the Fleet|Lieutenant|Midshipman|Medium|The Commodore|Naval Guest|Ladies Luncheon|Railway Station|Series Four|1993|Important Visitor
Who accompanies Hyacinth on a property-viewing trip while Richard must deal with Daddy in series four?|Elizabeth|Rose|Violet|Madame Cholet|Medium|Looking At Properties|Elizabeth Warden|Richard And Daddy|Country Property|Series Four|1993|House Hunting
Which task does Hyacinth volunteer Richard to perform at church despite his lack of expertise?|Repairing the electrics|Tuning the organ|Painting a mural|Repairing the roof|Medium|Let There Be Light|Church Electrics|Richard Bucket|Vicar|Series Four|1993|Unwanted Volunteering
Which famous ocean liner carries Hyacinth and Richard in the 1993 Christmas special?|Queen Elizabeth 2|Queen Mary 2|SS Canberra|RMS Britannic|Easy|Sea Fever|QE2|Ocean Cruise|1993 Christmas|Richard And Hyacinth|Luxury Travel|Special Episode
Who does Hyacinth fear may be stowaways aboard the QE2 during her cruise?|Daisy and Onslow|The mayor and his wife|Sheridan and Tarquin|The vicar and his wife|Medium|Sea Fever|Daisy|Onslow|Cruise Stowaways|1993 Special|Family Embarrassment|Class Anxiety
Which room of the Bucket home does Hyacinth wish to replace in the 1994 Christmas special?|The kitchen|The bathroom|The conservatory|The dining room|Medium|1994 Christmas Special|Kitchen Showroom|Home Renovation|Richard Bucket|Interior Design|Festive Episode|House Improvements
Which medical complaint does Hyacinth find insufficiently distinguished in the 1994 special?|Richard's foot infection|Onslow's sprained wrist|Daddy's backache|Emmet's sore throat|Medium|1994 Christmas Special|Richard Foot|Hyacinth Snobbery|Medical Embarrassment|Mundane Complaint|Festive Story|Health
What group does Hyacinth volunteer to take on an outing to a seaside attraction in the fifth series?|Senior citizens|Young scouts|Parish choirboys|Local councillors|Medium|Senior Citizens Outing|Church Volunteers|Seaside Trip|Series Five|1995|Organised Excursion|Elderly Guests
Which historical queen does Hyacinth dress as for the mayor's fancy dress ball?|Marie Antoinette|Queen Victoria|Elizabeth I|Mary Queen Of Scots|Medium|Mayors Fancy Dress Ball|Marie Antoinette|Costume|Series Five|1995|Social Invitation|French Royalty
What gift does Richard buy after forgetting his wedding anniversary in the fifth series?|A burglar alarm|A pearl necklace|A new washing machine|A holiday in France|Medium|Hyacinth Is Alarmed|Wedding Anniversary|Home Security|Series Five|1995|Richard Bucket|Forgotten Date
Which setting does Hyacinth choose for an elaborate family picnic in the fifth series?|Beside a river|On a railway platform|At a football ground|In a shopping centre|Medium|Riverside Picnic|Outdoor Entertaining|Series Five|1995|Riverbank|Family Outing|Hyacinth Planning
Which type of winter sports equipment does Hyacinth give Richard for his birthday in 1995?|Skis|Ice skates|A snowboard|Snowshoes|Medium|Skis|Richard Birthday|Series Five|1995|Surprise Gift|Outdoor Leisure|Winter Sport
What kind of event tempts Hyacinth to risk an extravagant purchase in series five?|A country house sale|A car-boot sale|A charity raffle|An art-school exhibition|Medium|Country House Sale|Expensive Purchases|Series Five|1995|Auction|Social Aspirations|Richard Anxiety
Which musical is Emmet involved in when Hyacinth tries to audition in the fifth series?|The Boy Friend|My Fair Lady|Oklahoma!|The Sound of Music|Medium|The Boy Friend|Emmet Production|Amateur Musical|Series Five|1995|Hyacinth Audition|Theatre
Where does Hyacinth arrange another barbecue while trying to impress Emmet in series five?|Violet's house|Daisy's garden|The vicarage|Elizabeth's house|Medium|Barbecue At Violets|Violet Home|Emmet|Series Five|1995|Musical Ambition|Family Party
What prestigious car does Hyacinth persuade Richard to test-drive to impress a rival?|A Rolls-Royce|A Bentley Continental|An Aston Martin|A Jaguar E-Type|Medium|Rolls Royce|Luxury Test Drive|Lydia Hawksworth|Series Five|1995|Status Competition|Motor Car
What does Hyacinth offer to teach through a newspaper advert in the final regular episode?|Social etiquette|Ballroom dancing|Piano playing|Flower arranging|Medium|The Hostess|Newspaper Advertisement|Social Etiquette|Series Five|1995|Teaching Offer|Unexpected Enquiries
Which historical conflict is the basis for Hyacinth's pageant in the final Christmas special?|The English Civil War|The War of the Roses|The Crimean War|The Hundred Years War|Medium|The Pageant|English Civil War|1995 Christmas|Final Broadcast|Costume Event|Historical Reenactment|Hyacinth Organising
In which year did the final episode of the original sitcom first air?|1995|1993|1996|1998|Easy|1995 Finale|Christmas Special|Original Series End|BBC One|Broadcast Date|Television History|End Of Run
What is the title of the one-off 2016 prequel to Keeping Up Appearances?|Young Hyacinth|The Bucket Years|Hyacinth at Home|Before the Bouquet|Easy|Young Hyacinth|2016 Prequel|Related Production|One Off Episode|BBC One|Early Life|Television Spin Off
Which actress plays the younger Hyacinth in the 2016 prequel?|Kerry Howard|Patricia Routledge|Katherine Pearce|Tamla Kari|Medium|Kerry Howard|Young Hyacinth|2016|Casting|Prequel Leading Role|1950s Setting|Character Origins
In which decade is the story of Young Hyacinth set?|The 1950s|The 1930s|The 1970s|The 1980s|Medium|Late 1950s|Young Hyacinth|Period Setting|Prequel Timeline|Postwar Britain|2016 Production|Family Backstory
What kind of home do the sisters share with Daddy in Young Hyacinth?|A canal cottage|A suburban bungalow|A city penthouse|A converted schoolhouse|Medium|Canal Cottage|Young Hyacinth|Family Home|1950s|Modest Upbringing|Sisters|Early Life
What is Daddy's part-time occupation in Young Hyacinth?|Brush salesman|Milkman|Bus driver|Coal merchant|Medium|Brush Salesman|Daddy|Young Hyacinth|Tricycle|Financial Struggles|1950s|Working Life
What job does the young Hyacinth do for the Cooper-Smith household?|Maid|Private tutor|Gardener|Secretary|Medium|Cooper Smith Household|Maid|Young Hyacinth|Employer|Class Ambition|1950s|Domestic Service
Which actor plays Daddy in the 2016 prequel?|Mark Addy|Geoffrey Hughes|George Webb|Tony Gardner|Medium|Mark Addy|Daddy|Young Hyacinth|2016 Prequel|Actor Casting|Family Father|Older Generation
Who plays young Violet in Young Hyacinth?|Tamla Kari|Katie Redford|Katherine Pearce|Debra Stephenson|Hard|Tamla Kari|Violet|Young Hyacinth|2016 Cast|Younger Sister|Wealth Dreams|Prequel
Who plays young Daisy in the 2016 prequel?|Katherine Pearce|Katie Redford|Tamla Kari|Kerry Howard|Hard|Katherine Pearce|Daisy|Young Hyacinth|Prequel Cast|2016|Sister Role|Character Casting
Who plays young Rose in Young Hyacinth?|Katie Redford|Tamla Kari|Katherine Pearce|Mary Millar|Hard|Katie Redford|Rose|2016 Prequel|Actress|Sister Cast|Romantic Dreams|Character Casting
Who plays ex-Squadron Leader Claude Cooper-Smith in Young Hyacinth?|Tony Gardner|Mark Addy|Tim Downie|David Griffin|Hard|Tony Gardner|Claude Cooper Smith|Young Hyacinth|2016 Guest Cast|Ex Squadron Leader|Employer Household|Prequel
What did Young Hyacinth form part of on BBC One in 2016?|The Landmark Sitcom Season|The Comic Relief Marathon|The Children in Need Telethon|The BBC Shakespeare Festival|Medium|Landmark Sitcom Season|2016 BBC|Young Hyacinth|Comedy Anniversary|One Off Prequel|Programme Strand|Broadcast Context
`;

const FIRST_ID = 17103;
const EXPECTED_COUNT = 97;

const normalise = value =>
  String(value).normalize('NFKC').trim().toLocaleLowerCase('en-GB');

const questions = facts.trim().split('\n')
  .map(line => line.trim())
  .filter(Boolean)
  .map((line, index) => {
    const id = `tv_${FIRST_ID + index}`;
    const fields = line.split('|').map(value => value.trim());

    if (fields.length !== 13 || fields.some(value => !value)) {
      throw new Error(`Pack 351: invalid fields at ${id} (${fields.length})`);
    }

    const [question, correctAnswer, wrong1, wrong2, wrong3,
      difficulty, ...specificTags] = fields;

    if (
      !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
      specificTags.length !== 7 ||
      new Set(specificTags.map(normalise)).size !== 7
    ) {
      throw new Error(`Pack 351: invalid difficulty or tags at ${id}`);
    }

    const answers = [wrong1, wrong2, wrong3];
    if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4) {
      throw new Error(`Pack 351: duplicate answer choices at ${id}`);
    }
    answers.splice(index % 4, 0, correctAnswer);

    const tags = [...new Map([
      'Television', 'British Television', 'British Sitcom',
      'Family Comedy', 'BBC One', '1990s Television',
      'Keeping Up Appearances', 'Programme: Keeping Up Appearances',
      ...specificTags, correctAnswer
    ].map(tag => [normalise(tag), tag])).values()];

    return {
      id,
      category: 'Television',
      programme: 'Keeping Up Appearances',
      question,
      answers,
      correctAnswer,
      difficulty,
      tags,
      dailyEligible: true
    };
  });

if (
  questions.length !== EXPECTED_COUNT ||
  questions[0].id !== `tv_${FIRST_ID}` ||
  questions[questions.length - 1].id !==
    `tv_${FIRST_ID + EXPECTED_COUNT - 1}`
) {
  throw new Error(`Pack 351: incorrect count or ID range (${questions.length})`);
}

const seenQuestions = new Set();
for (let i = 0; i < questions.length; i++) {
  const q = questions[i];
  const key = normalise(q.question);
  if (
    q.id !== `tv_${FIRST_ID + i}` ||
    seenQuestions.has(key) ||
    q.category !== 'Television' ||
    q.programme !== 'Keeping Up Appearances' ||
    q.answers.length !== 4 ||
    new Set(q.answers.map(normalise)).size !== 4 ||
    q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
    q.tags.length < 14 ||
    q.dailyEligible !== true
  ) {
    throw new Error(`Pack 351: exported question invalid at ${q.id}`);
  }
  seenQuestions.add(key);
}
// 21 November 2026: detailed Keeping Up Appearances episode audit.
// Preserve all 97 original questions and original IDs tv_17103–tv_17199.
// Added plot questions from all 40 regular episodes, 4 Christmas specials,
// 2016 Young Hyacinth, and three distinct charity/compilation shorts.
// Young Hyacinth remains labelled as a connected prequel, not an original series.
const auditAdditions = [
  {
    "id": "tv_38514",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S1E01 Daddy's Accident), which visitor has a particularly difficult time when he calls at the Bucket home after Daddy's hospitalisation?",
    "answers": [
      "A gas meter reader",
      "The new vicar",
      "A car salesman",
      "An estate agent"
    ],
    "correctAnswer": "A gas meter reader",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S1E01 Daddy's Accident",
      "Episode storyline",
      "Correct: A gas meter reader",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "First episode",
      "Utility visitor",
      "Hyacinth's standards"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38515",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S1E02 The New Vicar), who does Daisy claim has run off with Daddy just as the new vicar comes to tea?",
    "answers": [
      "A retired headmistress",
      "A Romany woman",
      "A foreign heiress",
      "A nightclub singer"
    ],
    "correctAnswer": "A Romany woman",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S1E02 The New Vicar",
      "Episode storyline",
      "Correct: A Romany woman",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Daddy missing",
      "Vicar tea",
      "Daisy's news"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38516",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S1E02 The New Vicar), what dramatic subject does Rose wish to discuss with the vicar when she unexpectedly arrives?",
    "answers": [
      "A wedding at the church",
      "The sale of a family grave",
      "Arrangements for her own funeral",
      "The next charity collection"
    ],
    "correctAnswer": "Arrangements for her own funeral",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S1E02 The New Vicar",
      "Episode storyline",
      "Correct: Arrangements for her own funeral",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Rose dramatic visit",
      "Funeral plan",
      "Vicar"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38517",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S1E03 Stately Home), what nickname does Daddy use while imagining he must protect the post office from aliens?",
    "answers": [
      "Major Tom",
      "General Gordon",
      "Commander Flashheart",
      "Captain Midnight"
    ],
    "correctAnswer": "Captain Midnight",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S1E03 Stately Home",
      "Episode storyline",
      "Correct: Captain Midnight",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Daddy delusion",
      "Post office",
      "Aliens"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38518",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S1E03 Stately Home), how does Daddy escape from Onslow and Daisy's house before Hyacinth's outing?",
    "answers": [
      "He slides down a drainpipe",
      "He hides inside a delivery van",
      "He climbs through the roof tiles",
      "He runs off in a taxi"
    ],
    "correctAnswer": "He slides down a drainpipe",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S1E03 Stately Home",
      "Episode storyline",
      "Correct: He slides down a drainpipe",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Drainpipe escape",
      "Daddy missing",
      "Stately home outing"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38519",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S1E03 Stately Home), what area does Hyacinth take Richard through to avoid being seen with her family at the stately home?",
    "answers": [
      "The servants' quarters",
      "The private gardens",
      "The stables",
      "The estate's old kitchen"
    ],
    "correctAnswer": "The private gardens",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S1E03 Stately Home",
      "Episode storyline",
      "Correct: The private gardens",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Avoiding relatives",
      "Social embarrassment",
      "Country house"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38520",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S1E04 The Charity Shop), who claims to be engaged to Daddy and refuses to leave his bedroom?",
    "answers": [
      "A young nurse from his hospital",
      "The manager of the charity shop",
      "An elderly woman who has moved in",
      "A wealthy woman from the manor"
    ],
    "correctAnswer": "An elderly woman who has moved in",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S1E04 The Charity Shop",
      "Episode storyline",
      "Correct: An elderly woman who has moved in",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Daddy fiancée",
      "Unwanted guest",
      "Bedroom"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38521",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S1E04 The Charity Shop), what unsuitable donation from Rose creates trouble with councillor Mrs Nugent?",
    "answers": [
      "A collection of love letters",
      "A box of broken ornaments",
      "An old wedding dress",
      "Revealing underwear"
    ],
    "correctAnswer": "Revealing underwear",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S1E04 The Charity Shop",
      "Episode storyline",
      "Correct: Revealing underwear",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Rose's donation",
      "Charity shop",
      "Mrs Nugent"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38522",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S1E05 Daisy's Toyboy), what is the approximate age of the young man Daisy claims is her romantic interest?",
    "answers": [
      "Seventeen",
      "Twenty-seven",
      "Thirty-seven",
      "Forty-seven"
    ],
    "correctAnswer": "Seventeen",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S1E05 Daisy's Toyboy",
      "Episode storyline",
      "Correct: Seventeen",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Daisy plan",
      "Young admirer",
      "Onslow jealousy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38523",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S1E05 Daisy's Toyboy), what women's group is expecting a guest speaker when Hyacinth takes charge of preparations?",
    "answers": [
      "The Mothers' Union choir",
      "The Ladies' Circle",
      "The Women's Institute orchestra",
      "The local tennis committee"
    ],
    "correctAnswer": "The Ladies' Circle",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S1E05 Daisy's Toyboy",
      "Episode storyline",
      "Correct: The Ladies' Circle",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Church hall",
      "Guest speaker",
      "Hyacinth organisers"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38524",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S1E06 The Christening), what is the first name of Daisy and Onslow's daughter who has baby Kylie?",
    "answers": [
      "Mariette",
      "Elizabeth",
      "Stephanie",
      "Violet"
    ],
    "correctAnswer": "Stephanie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S1E06 The Christening",
      "Episode storyline",
      "Correct: Stephanie",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Kylie's mother",
      "Family christening",
      "Stephanie"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38525",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S1E06 The Christening), what transport problem causes Hyacinth and Richard to search for the baby's mother on christening day?",
    "answers": [
      "She misses a ferry",
      "Her train is cancelled",
      "She loses her bicycle",
      "Her vehicle breaks down"
    ],
    "correctAnswer": "Her vehicle breaks down",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S1E06 The Christening",
      "Episode storyline",
      "Correct: Her vehicle breaks down",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Christening delay",
      "Stephanie stranded",
      "Family rescue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38526",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S1E06 The Christening), why is Hyacinth especially embarrassed by Stephanie's domestic circumstances?",
    "answers": [
      "Stephanie has not married the baby's father",
      "Stephanie lives overseas",
      "Stephanie has sold the family home",
      "Stephanie refuses to attend church"
    ],
    "correctAnswer": "Stephanie has not married the baby's father",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S1E06 The Christening",
      "Episode storyline",
      "Correct: Stephanie has not married the baby's father",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Unmarried mother",
      "Hyacinth snobbery",
      "Family secret"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38527",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E01 A Strange Man), why has Elizabeth's brother Emmet come to stay with her?",
    "answers": [
      "He is inspecting the house for the council",
      "He has lost his home following a divorce",
      "He is recovering from an operation",
      "He has been appointed the local vicar"
    ],
    "correctAnswer": "He has lost his home following a divorce",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E01 A Strange Man",
      "Episode storyline",
      "Correct: He has lost his home following a divorce",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Emmet divorce",
      "New neighbour",
      "Elizabeth's brother"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38528",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E01 A Strange Man), what profession does Hyacinth learn Emmet has that makes her eager to perform for him?",
    "answers": [
      "Medicine",
      "Architecture",
      "Music",
      "Law"
    ],
    "correctAnswer": "Music",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E01 A Strange Man",
      "Episode storyline",
      "Correct: Music",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Emmet musician",
      "Hyacinth singing",
      "Audition hopes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38529",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E02 Driving Mrs Fortescue), what family connection makes Hyacinth especially keen to impress wealthy Mrs Fortescue?",
    "answers": [
      "Her son is a cabinet minister",
      "Her father owns a castle",
      "Her husband is a duke",
      "Her sister married a baronet"
    ],
    "correctAnswer": "Her sister married a baronet",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E02 Driving Mrs Fortescue",
      "Episode storyline",
      "Correct: Her sister married a baronet",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Mrs Fortescue",
      "Baronet connection",
      "Social climbing"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38530",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E02 Driving Mrs Fortescue), how do Daisy and Rose disrupt Hyacinth's carefully planned trip with Mrs Fortescue?",
    "answers": [
      "They flag down the Buckets' car for a lift",
      "They meet her on the train platform",
      "They accidentally buy her hat",
      "They turn up at the hotel reception"
    ],
    "correctAnswer": "They flag down the Buckets' car for a lift",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E02 Driving Mrs Fortescue",
      "Episode storyline",
      "Correct: They flag down the Buckets' car for a lift",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Daisy and Rose",
      "Unexpected passengers",
      "Town trip"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38531",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E03 The Candlelight Supper), what brings Hyacinth's musical dinner to an embarrassing conclusion on the doorstep?",
    "answers": [
      "The vicar arrives with a live band",
      "Two men arrive and start fighting over Rose",
      "Richard accidentally locks the guests outside",
      "The police ask to inspect the kitchen"
    ],
    "correctAnswer": "Two men arrive and start fighting over Rose",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E03 The Candlelight Supper",
      "Episode storyline",
      "Correct: Two men arrive and start fighting over Rose",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Rose suitors",
      "Doorstep fight",
      "Emmet dinner"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38532",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E04 Golfing with the Major), which hotel hosts the golfing weekend that becomes a nightmare for Hyacinth?",
    "answers": [
      "Grantleigh Hall",
      "The Royal Marine",
      "Chesford Grange",
      "Southampton Palace"
    ],
    "correctAnswer": "Chesford Grange",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E04 Golfing with the Major",
      "Episode storyline",
      "Correct: Chesford Grange",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Luxury hotel",
      "Major weekend",
      "Golfing"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38533",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E04 Golfing with the Major), whose unwanted romantic attention adds to Hyacinth's difficulties during the hotel weekend?",
    "answers": [
      "The hotel manager's",
      "Onslow's",
      "Emmet Hawksworth's",
      "Major Wilton-Smythe's"
    ],
    "correctAnswer": "Major Wilton-Smythe's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E04 Golfing with the Major",
      "Episode storyline",
      "Correct: Major Wilton-Smythe's",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Major's advances",
      "Hyacinth anxious",
      "Golf hotel"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38534",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E05 Problems with Relatives), where does Daddy go in another attempt to get married?",
    "answers": [
      "The register office",
      "The railway ticket office",
      "A hotel in Brighton",
      "The hospital chapel"
    ],
    "correctAnswer": "The register office",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E05 Problems with Relatives",
      "Episode storyline",
      "Correct: The register office",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Daddy wedding",
      "Register office",
      "Family crisis"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38535",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E05 Problems with Relatives), what predicament is Violet's husband Bruce in when Hyacinth hears about his latest antics?",
    "answers": [
      "He is trapped on a railway bridge",
      "He is stuck up a tree",
      "He is locked inside a lift",
      "He is stranded on a roof"
    ],
    "correctAnswer": "He is stuck up a tree",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E05 Problems with Relatives",
      "Episode storyline",
      "Correct: He is stuck up a tree",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Bruce and Violet",
      "Tree",
      "Family embarrassment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38536",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E05 Problems with Relatives), whose home does Hyacinth suggest visiting instead of letting Emmet see Daisy and Onslow's house?",
    "answers": [
      "Mrs Fortescue's",
      "The vicar's",
      "Violet's",
      "The Major's"
    ],
    "correctAnswer": "Violet's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E05 Problems with Relatives",
      "Episode storyline",
      "Correct: Violet's",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Social concealment",
      "Detour",
      "Violet's house"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38537",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E06 Onslow's Birthday), who is supposed to collect Hyacinth and Richard for Onslow's party in an impressive car?",
    "answers": [
      "A local baronet",
      "The chairman of the golf club",
      "Richard's former employer",
      "Rose's wealthy Greek boyfriend"
    ],
    "correctAnswer": "Rose's wealthy Greek boyfriend",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E06 Onslow's Birthday",
      "Episode storyline",
      "Correct: Rose's wealthy Greek boyfriend",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Greek businessman",
      "Party travel",
      "Hyacinth boasts"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38538",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E06 Onslow's Birthday), what event does Hyacinth arrange before leaving for the party to show off her expected grand departure?",
    "answers": [
      "Pre-lunch cocktails",
      "An afternoon croquet match",
      "A charity raffle",
      "A fancy dress competition"
    ],
    "correctAnswer": "Pre-lunch cocktails",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E06 Onslow's Birthday",
      "Episode storyline",
      "Correct: Pre-lunch cocktails",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Cocktail gathering",
      "Impressing neighbours",
      "Luxury car expectation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38539",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E07 Singing for Emmet), what news about Richard's job first raises the prospect of him being at home all day?",
    "answers": [
      "A transfer to London",
      "An offer of early retirement",
      "A promotion overseas",
      "A redundancy tribunal"
    ],
    "correctAnswer": "An offer of early retirement",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E07 Singing for Emmet",
      "Episode storyline",
      "Correct: An offer of early retirement",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Richard career",
      "Early retirement",
      "Hyacinth nearby"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38540",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E07 Singing for Emmet), what new vocation does a sedated and distraught Rose claim she wishes to pursue?",
    "answers": [
      "Joining the police",
      "Being a professional singer",
      "Becoming a nun",
      "Becoming a travel agent"
    ],
    "correctAnswer": "Becoming a nun",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E07 Singing for Emmet",
      "Episode storyline",
      "Correct: Becoming a nun",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Rose upset",
      "Tranquillisers",
      "Nun vocation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38541",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E07 Singing for Emmet), where does Hyacinth insist on rehearsing a performance with Emmet for elderly residents?",
    "answers": [
      "A theatre in London",
      "An art gallery",
      "The golf club",
      "The church hall"
    ],
    "correctAnswer": "The church hall",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E07 Singing for Emmet",
      "Episode storyline",
      "Correct: The church hall",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Emmet rehearsal",
      "Old people concert",
      "Hyacinth singer"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38542",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E08 The Toy Store), what costume is Daddy wearing while he interferes with merchandise in the toy shop?",
    "answers": [
      "An astronaut suit",
      "A military uniform",
      "A pirate costume",
      "A Father Christmas costume"
    ],
    "correctAnswer": "An astronaut suit",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E08 The Toy Store",
      "Episode storyline",
      "Correct: An astronaut suit",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Daddy fancy dress",
      "Toy shop",
      "Screwdriver"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38543",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E08 The Toy Store), how much damage does Daddy cause while modifying toys with a screwdriver?",
    "answers": [
      "£35",
      "£235",
      "£1,235",
      "£535"
    ],
    "correctAnswer": "£235",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E08 The Toy Store",
      "Episode storyline",
      "Correct: £235",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Toys damaged",
      "Shop bill",
      "Daddy alterations"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38544",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E09 The Three-Piece Suite), which formidable social rival is Hyacinth eager to impress when the new furniture arrives?",
    "answers": [
      "Mrs Fortescue",
      "Mrs Nugent",
      "Mrs Barker-Finch",
      "Mrs Braddock"
    ],
    "correctAnswer": "Mrs Barker-Finch",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E09 The Three-Piece Suite",
      "Episode storyline",
      "Correct: Mrs Barker-Finch",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "New furniture",
      "Barker-Finch rivalry",
      "Delivery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38545",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E09 The Three-Piece Suite), what logistical collision threatens Hyacinth's grand furniture delivery?",
    "answers": [
      "The old sofa is accidentally delivered to the vicar",
      "The lorry arrives at an empty house",
      "Richard has ordered the wrong colour suite",
      "Her relatives come to collect the old suite at the same time"
    ],
    "correctAnswer": "Her relatives come to collect the old suite at the same time",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E09 The Three-Piece Suite",
      "Episode storyline",
      "Correct: Her relatives come to collect the old suite at the same time",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Two furniture collections",
      "Daisy Onslow",
      "Social mishap"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38546",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E10 A Picnic for Daddy), what does Daddy unexpectedly do with Richard's vehicle during the proposed family picnic?",
    "answers": [
      "He drives off in it",
      "He tries to sell it",
      "He paints it in camouflage",
      "He removes all its wheels"
    ],
    "correctAnswer": "He drives off in it",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E10 A Picnic for Daddy",
      "Episode storyline",
      "Correct: He drives off in it",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Daddy car theft",
      "Picnic crisis",
      "Chase"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38547",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S2E10 A Picnic for Daddy), who eventually gives the family a lift after Onslow's car breaks down during the chase?",
    "answers": [
      "Mrs Fortescue and the Major",
      "The vicar and his wife",
      "Emmet and Mrs Nugent",
      "Violet and Bruce"
    ],
    "correctAnswer": "The vicar and his wife",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S2E10 A Picnic for Daddy",
      "Episode storyline",
      "Correct: The vicar and his wife",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Onslow breakdown",
      "Vicar assists",
      "Car chase"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38548",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (1991 Christmas The Father Christmas Suit), who has to wear Richard's festive outfit when he becomes too tipsy to complete the charitable delivery?",
    "answers": [
      "Hyacinth",
      "Rose",
      "Elizabeth",
      "Daisy"
    ],
    "correctAnswer": "Elizabeth",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: 1991 Christmas The Father Christmas Suit",
      "Episode storyline",
      "Correct: Elizabeth",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Santa substitution",
      "Elizabeth disguises",
      "Richard drunk"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38549",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (1991 Christmas The Father Christmas Suit), where was Richard meant to distribute gifts in his Father Christmas costume?",
    "answers": [
      "At a seaside funfair",
      "At a private hospital",
      "At a stately home",
      "At the church hall to elderly residents"
    ],
    "correctAnswer": "At the church hall to elderly residents",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: 1991 Christmas The Father Christmas Suit",
      "Episode storyline",
      "Correct: At the church hall to elderly residents",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Church gifts",
      "Elderly residents",
      "Festive duty"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38550",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S3E01 Early Retirement), which important government office does Hyacinth telephone to ask whether Richard is being honoured?",
    "answers": [
      "The Prime Minister's office",
      "The Home Office",
      "The Treasury",
      "The House of Lords clerk's office"
    ],
    "correctAnswer": "The Prime Minister's office",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S3E01 Early Retirement",
      "Episode storyline",
      "Correct: The Prime Minister's office",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Hyacinth ambition",
      "Honours list",
      "Prime Minister"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38551",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S3E01 Early Retirement), what unwelcome visitor occupies the Bucket driveway while Hyacinth prepares for a guest?",
    "answers": [
      "A caravan owned by Onslow",
      "A dog belonging to Rose's latest boyfriend",
      "A dairy delivery lorry",
      "A motorcycle owned by Daddy"
    ],
    "correctAnswer": "A dog belonging to Rose's latest boyfriend",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S3E01 Early Retirement",
      "Episode storyline",
      "Correct: A dog belonging to Rose's latest boyfriend",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Driveway dog",
      "Rose boyfriend",
      "Guest preparations"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38552",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S3E02 Iron Age Remains), what crisis involving Rose interrupts Hyacinth and Richard's search for traces of ancient settlements?",
    "answers": [
      "Rose elopes with the vicar",
      "Rose buys a cottage in the country",
      "Rose locks herself in her room after a breakup",
      "Rose takes a job at the museum"
    ],
    "correctAnswer": "Rose locks herself in her room after a breakup",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S3E02 Iron Age Remains",
      "Episode storyline",
      "Correct: Rose locks herself in her room after a breakup",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Rose heartbreak",
      "Locked bedroom",
      "History trip"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38553",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S3E02 Iron Age Remains), whom does Rose call for help after locking herself away in distress?",
    "answers": [
      "Emmet",
      "Mrs Nugent",
      "The Major",
      "The vicar"
    ],
    "correctAnswer": "The vicar",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S3E02 Iron Age Remains",
      "Episode storyline",
      "Correct: The vicar",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Rose seeks minister",
      "Family emergency",
      "Iron Age outing"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38554",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S3E03 Violet's Country Cottage), who is the lady from a nearby manor house that Hyacinth wants to impress during her cottage stay?",
    "answers": [
      "Bunty",
      "Mrs Fortescue",
      "Mrs Barker-Finch",
      "Lady Whiteadder"
    ],
    "correctAnswer": "Bunty",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S3E03 Violet's Country Cottage",
      "Episode storyline",
      "Correct: Bunty",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Country cottage",
      "Bunty manor",
      "Weekend guests"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38555",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S3E03 Violet's Country Cottage), whose dog does Richard go searching for while Hyacinth tries to impress their fashionable visitor?",
    "answers": [
      "Onslow's",
      "Bunty's",
      "Daddy's",
      "Emmet's"
    ],
    "correctAnswer": "Bunty's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S3E03 Violet's Country Cottage",
      "Episode storyline",
      "Correct: Bunty's",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Lost dog",
      "Richard searches",
      "Cottage visit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38556",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S3E03 Violet's Country Cottage), what new companion does Daddy have during the family commotion around Violet's cottage?",
    "answers": [
      "A young dog trainer",
      "A former army nurse",
      "A Polish girlfriend",
      "A retired actress from London"
    ],
    "correctAnswer": "A Polish girlfriend",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S3E03 Violet's Country Cottage",
      "Episode storyline",
      "Correct: A Polish girlfriend",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Daddy romance",
      "Polish visitor",
      "Family trouble"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38557",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S3E04 How to Go on Holiday Without Really Trying), what false impression does Hyacinth hope to give the neighbours while obtaining glamorous travel brochures?",
    "answers": [
      "That Richard has bought a travel agency",
      "That they have inherited a Mediterranean villa",
      "That Sheridan has become a pilot",
      "That she and Richard are taking an expensive holiday"
    ],
    "correctAnswer": "That she and Richard are taking an expensive holiday",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S3E04 How to Go on Holiday Without Really Trying",
      "Episode storyline",
      "Correct: That she and Richard are taking an expensive holiday",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Pretend vacation",
      "Brochures",
      "Neighbour envy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38558",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S3E04 How to Go on Holiday Without Really Trying), what does Onslow try to teach newly retired Richard during an outing together?",
    "answers": [
      "The joys of being irresponsible",
      "How to play classical piano",
      "How to run a hotel",
      "How to campaign for Parliament"
    ],
    "correctAnswer": "The joys of being irresponsible",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S3E04 How to Go on Holiday Without Really Trying",
      "Episode storyline",
      "Correct: The joys of being irresponsible",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Onslow advice",
      "Retirement",
      "Richard relaxing"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38559",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S3E05 Richard's New Hobby), who is coming to afternoon tea while Hyacinth boasts about Richard's newly acquired film-making skills?",
    "answers": [
      "Mrs Fortescue",
      "Councillor Mrs Nugent",
      "Major Wilton-Smythe",
      "The Commodore"
    ],
    "correctAnswer": "Councillor Mrs Nugent",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S3E05 Richard's New Hobby",
      "Episode storyline",
      "Correct: Councillor Mrs Nugent",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Councillor visit",
      "Video camera",
      "Filmmaker boast"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38560",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S3E05 Richard's New Hobby), what vehicle unexpectedly brings Richard home after Onslow's car breaks down?",
    "answers": [
      "An ambulance",
      "A taxi",
      "A police car",
      "A hearse"
    ],
    "correctAnswer": "A police car",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S3E05 Richard's New Hobby",
      "Episode storyline",
      "Correct: A police car",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Richard returned",
      "Onslow breakdown",
      "Police lift"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38561",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S3E06 The Art Exhibition), which foreign military force does Daddy believe he is about to join when he runs away?",
    "answers": [
      "The Royal Navy",
      "The Swiss Guard",
      "The Spanish Air Force",
      "The French Foreign Legion"
    ],
    "correctAnswer": "The French Foreign Legion",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S3E06 The Art Exhibition",
      "Episode storyline",
      "Correct: The French Foreign Legion",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Daddy fantasy",
      "Foreign Legion",
      "Art gallery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38562",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S3E06 The Art Exhibition), what message does Daddy display on a sign outside his new romantic interest's home?",
    "answers": [
      "If you love me let me know",
      "Marry me tomorrow",
      "Gone to join the army",
      "I have a new home"
    ],
    "correctAnswer": "If you love me let me know",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S3E06 The Art Exhibition",
      "Episode storyline",
      "Correct: If you love me let me know",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Daddy courtship",
      "Sign outside house",
      "Romance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38563",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S3E07 What to Wear When Yachting), what disappoints Hyacinth when she finally sees the boat intended for their glamorous weekend?",
    "answers": [
      "It has no sails but has a powerful engine",
      "It is small and dilapidated",
      "It is a lavish motor yacht with no bedrooms",
      "It has already sailed away"
    ],
    "correctAnswer": "It is small and dilapidated",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S3E07 What to Wear When Yachting",
      "Episode storyline",
      "Correct: It is small and dilapidated",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Tatty yacht",
      "Expectations dashed",
      "Weekend"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38564",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S3E07 What to Wear When Yachting), what attempt to protect their image makes the disastrous yacht outing even worse?",
    "answers": [
      "Asking Onslow to pose as the skipper",
      "Painting the boat's hull during the trip",
      "Moving their shabby boat away from a more impressive yacht",
      "Hiding all their luggage in the engine room"
    ],
    "correctAnswer": "Moving their shabby boat away from a more impressive yacht",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S3E07 What to Wear When Yachting",
      "Episode storyline",
      "Correct: Moving their shabby boat away from a more impressive yacht",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Hyacinth embarrassment",
      "Move boat",
      "Yacht disaster"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38565",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S4E01 A Job for Richard), which type of business does Hyacinth want Richard to join as an executive after he retires?",
    "answers": [
      "A shipping company",
      "An antique dealership",
      "A book publisher",
      "A frozen-foods company"
    ],
    "correctAnswer": "A frozen-foods company",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S4E01 A Job for Richard",
      "Episode storyline",
      "Correct: A frozen-foods company",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Frosticle's",
      "Richard job",
      "Retirement"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38566",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S4E01 A Job for Richard), what unusual new practice has Daddy adopted while Hyacinth plans Richard's job interview?",
    "answers": [
      "Naturism",
      "Beekeeping",
      "Horse racing",
      "Birdwatching"
    ],
    "correctAnswer": "Naturism",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S4E01 A Job for Richard",
      "Episode storyline",
      "Correct: Naturism",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Daddy nude",
      "Naturist",
      "Family worries"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38567",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S4E02 Country Retreat), where does Richard become trapped during one of the country property viewings?",
    "answers": [
      "Inside a cellar",
      "In an attic",
      "On a rooftop",
      "In a locked stable"
    ],
    "correctAnswer": "In an attic",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S4E02 Country Retreat",
      "Episode storyline",
      "Correct: In an attic",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Richard stranded",
      "Property hunt",
      "Attic"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38568",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S4E02 Country Retreat), which farm animals chase Hyacinth during the unsuccessful property hunt?",
    "answers": [
      "Geese",
      "Goats",
      "Sheep",
      "Pigs"
    ],
    "correctAnswer": "Sheep",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S4E02 Country Retreat",
      "Episode storyline",
      "Correct: Sheep",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Farm encounter",
      "Sheep chase",
      "Hyacinth"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38569",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S4E03 A Celebrity for the Barbecue), what is local celebrity C. P. Benedict's everyday occupation?",
    "answers": [
      "Owner of a television studio",
      "Presenter of a news programme",
      "Head chef at a grand hotel",
      "Manager of a garden centre"
    ],
    "correctAnswer": "Manager of a garden centre",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S4E03 A Celebrity for the Barbecue",
      "Episode storyline",
      "Correct: Manager of a garden centre",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "C P Benedict",
      "Garden centre",
      "Television appearances"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38570",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S4E03 A Celebrity for the Barbecue), what does Rose help Daisy do when Daisy becomes convinced Onslow is seeing another woman?",
    "answers": [
      "Give her a makeover",
      "Hire a private detective",
      "Train for a tennis match",
      "Find a job in a hotel"
    ],
    "correctAnswer": "Give her a makeover",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S4E03 A Celebrity for the Barbecue",
      "Episode storyline",
      "Correct: Give her a makeover",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Daisy makeover",
      "Onslow suspicion",
      "Rose helps"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38571",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S4E04 The Commodore), what happens to Richard's car when Hyacinth is collecting a guest speaker from the station?",
    "answers": [
      "Its engine catches fire",
      "It is wheel-clamped",
      "It is mistakenly towed to the docks",
      "It is stolen by Daddy"
    ],
    "correctAnswer": "It is wheel-clamped",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S4E04 The Commodore",
      "Episode storyline",
      "Correct: It is wheel-clamped",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Railway station",
      "Car clamp",
      "Commodore"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38572",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S4E04 The Commodore), what unwelcome attention does the naval visitor show Hyacinth after the awkward journey?",
    "answers": [
      "He demands a financial donation",
      "He asks her to become his chauffeur",
      "He tries to seduce her",
      "He challenges her to a sailing race"
    ],
    "correctAnswer": "He tries to seduce her",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S4E04 The Commodore",
      "Episode storyline",
      "Correct: He tries to seduce her",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Commodore advances",
      "Hyacinth alarm",
      "Lunch guest"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38573",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S4E05 Looking at Properties), why is Daddy taken to the police station before Hyacinth's property-viewing trip?",
    "answers": [
      "He steals a police bicycle",
      "He disrupts a council meeting",
      "He sets off the town hall alarm",
      "He patrols the town hall with a bayonet"
    ],
    "correctAnswer": "He patrols the town hall with a bayonet",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S4E05 Looking at Properties",
      "Episode storyline",
      "Correct: He patrols the town hall with a bayonet",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Daddy wartime fantasy",
      "Bayonet",
      "Police"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38574",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S4E05 Looking at Properties), why does Richard have to disguise himself while Hyacinth views country properties with Elizabeth?",
    "answers": [
      "To collect Daddy from police without embarrassing the family",
      "To masquerade as a wealthy buyer",
      "To sneak into an auction",
      "To avoid the estate agent recognising him"
    ],
    "correctAnswer": "To collect Daddy from police without embarrassing the family",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S4E05 Looking at Properties",
      "Episode storyline",
      "Correct: To collect Daddy from police without embarrassing the family",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Richard disguise",
      "Daddy collection",
      "Police"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38575",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S4E06 Please Mind Your Head), what drink does Elizabeth spill that causes Emmet to become stuck in a low ceiling?",
    "answers": [
      "Hot coffee",
      "Iced lemonade",
      "Tomato juice",
      "A glass of sherry"
    ],
    "correctAnswer": "Iced lemonade",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S4E06 Please Mind Your Head",
      "Episode storyline",
      "Correct: Iced lemonade",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Elizabeth spills",
      "Emmet ceiling",
      "Small apartment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38576",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S4E06 Please Mind Your Head), what pretence does Hyacinth make on meeting her guests near the tiny country apartment?",
    "answers": [
      "That she is the manor's owner",
      "That she is an estate agent",
      "That she is an accomplished horse rider",
      "That Richard is a professional yachtsman"
    ],
    "correctAnswer": "That she is an accomplished horse rider",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S4E06 Please Mind Your Head",
      "Episode storyline",
      "Correct: That she is an accomplished horse rider",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Horse-riding boast",
      "Country retreat",
      "Guests"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38577",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S4E07 Let There Be Light), which kind of church event is endangered by Richard's amateur electrical repairs?",
    "answers": [
      "An organ recital",
      "A church wedding",
      "A harvest supper",
      "A bring-and-buy sale"
    ],
    "correctAnswer": "A bring-and-buy sale",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S4E07 Let There Be Light",
      "Episode storyline",
      "Correct: A bring-and-buy sale",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Church hall",
      "Sale preparations",
      "Failed wiring"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38578",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S4E07 Let There Be Light), who tries to take command when the hall's electrics go wrong while believing he is back in wartime?",
    "answers": [
      "Daddy",
      "The Commodore",
      "Onslow",
      "Emmet"
    ],
    "correctAnswer": "Daddy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S4E07 Let There Be Light",
      "Episode storyline",
      "Correct: Daddy",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "War memories",
      "Daddy leads",
      "Electrical mishap"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38579",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (1993 Christmas Sea Fever), what happens at Southampton that prevents Hyacinth and Richard boarding their planned luxury cruise?",
    "answers": [
      "Their passports have expired",
      "They arrive after the ship has sailed",
      "Their tickets are for the wrong ship",
      "The cruise is cancelled by a storm"
    ],
    "correctAnswer": "They arrive after the ship has sailed",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: 1993 Christmas Sea Fever",
      "Episode storyline",
      "Correct: They arrive after the ship has sailed",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Missed departure",
      "Southampton",
      "Luggage chaos"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38580",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (1993 Christmas Sea Fever), to which European city do Hyacinth and Richard fly to catch up with their departed liner?",
    "answers": [
      "Amsterdam",
      "Hamburg",
      "Copenhagen",
      "Oslo"
    ],
    "correctAnswer": "Copenhagen",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: 1993 Christmas Sea Fever",
      "Episode storyline",
      "Correct: Copenhagen",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Denmark flight",
      "Cruise catching up",
      "Travel"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38581",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (1994 Christmas Angel Gabriel Blue), what more respectable medical diagnosis does Hyacinth insist on giving Richard's athlete's foot?",
    "answers": [
      "Rheumatism",
      "Arthritis",
      "A sprained ankle",
      "Gout"
    ],
    "correctAnswer": "Gout",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: 1994 Christmas Angel Gabriel Blue",
      "Episode storyline",
      "Correct: Gout",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Foot infection",
      "Snobbish diagnosis",
      "Gout"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38582",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (1994 Christmas Angel Gabriel Blue), what discovery about Daddy's bedroom adds to Hyacinth's troubles as she shops for a new kitchen?",
    "answers": [
      "A stranger has taken over his bed",
      "It has been redecorated without consent",
      "His belongings have been sold",
      "A leak has ruined the ceiling"
    ],
    "correctAnswer": "A stranger has taken over his bed",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: 1994 Christmas Angel Gabriel Blue",
      "Episode storyline",
      "Correct: A stranger has taken over his bed",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Stranger in bed",
      "Daddy missing",
      "Kitchen worktop"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38583",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E01 The Senior Citizens' Outing), which difficult older gentleman is assigned to Hyacinth during the seaside trip?",
    "answers": [
      "Mr Millburn",
      "Mr Farrini",
      "Mr Duxberry",
      "Mr Mawsby"
    ],
    "correctAnswer": "Mr Farrini",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E01 The Senior Citizens' Outing",
      "Episode storyline",
      "Correct: Mr Farrini",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Amorous pensioner",
      "Seaside outing",
      "Vicar's choice"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38584",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E01 The Senior Citizens' Outing), what travel difficulty does Mrs Lomax bring to the senior citizens' minibus trip?",
    "answers": [
      "A fear of tunnels",
      "An allergy to sea air",
      "Travel sickness",
      "An inability to walk"
    ],
    "correctAnswer": "Travel sickness",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E01 The Senior Citizens' Outing",
      "Episode storyline",
      "Correct: Travel sickness",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Mrs Lomax",
      "Minibus travel",
      "Seasickness"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38585",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E01 The Senior Citizens' Outing), which amusement-park attraction traps Hyacinth among unnerving reflections?",
    "answers": [
      "The big wheel",
      "The helter-skelter",
      "The dodgems",
      "A hall of mirrors"
    ],
    "correctAnswer": "A hall of mirrors",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E01 The Senior Citizens' Outing",
      "Episode storyline",
      "Correct: A hall of mirrors",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Fairground mishaps",
      "Mirrors",
      "Senior trip"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38586",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E02 The Mayor's Fancy Dress Ball), what discovery disappoints Hyacinth after dressing herself as a historical queen?",
    "answers": [
      "Several guests have chosen similar costumes",
      "The mayor cancels the ball",
      "Richard arrives in the same costume",
      "Her costume has been sent to the wrong address"
    ],
    "correctAnswer": "Several guests have chosen similar costumes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E02 The Mayor's Fancy Dress Ball",
      "Episode storyline",
      "Correct: Several guests have chosen similar costumes",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Costume rivalry",
      "Ball",
      "Duplicate outfits"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38587",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E02 The Mayor's Fancy Dress Ball), which nationality is Rose's latest fiancé in the episode of the mayor's ball?",
    "answers": [
      "Greek",
      "Polish",
      "French",
      "Italian"
    ],
    "correctAnswer": "Polish",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E02 The Mayor's Fancy Dress Ball",
      "Episode storyline",
      "Correct: Polish",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Rose fiancé",
      "Unpronounceable name",
      "Fancy dress"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38588",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E03 Hyacinth Is Alarmed), what colour does Hyacinth want the visible light on her new burglar alarm to be?",
    "answers": [
      "Royal blue",
      "Emerald green",
      "Dusty pink",
      "Cream"
    ],
    "correctAnswer": "Dusty pink",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E03 Hyacinth Is Alarmed",
      "Episode storyline",
      "Correct: Dusty pink",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Alarm colour",
      "Dusty pink",
      "Hyacinth exacting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38589",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E04 A Riverside Picnic), which type of machinery ruins the supposedly idyllic setting of Hyacinth's riverside supper?",
    "answers": [
      "A military tank",
      "A crane lifting a boat",
      "A steamroller",
      "A dredger dumping earth"
    ],
    "correctAnswer": "A dredger dumping earth",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E04 A Riverside Picnic",
      "Episode storyline",
      "Correct: A dredger dumping earth",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Riverside disturbance",
      "Dumped soil",
      "Picnic ruined"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38590",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E04 A Riverside Picnic), which church couple join Elizabeth and Emmet on Hyacinth's reluctant guest list?",
    "answers": [
      "The vicar and his wife",
      "The Major and his wife",
      "The church wardens",
      "The organist and choir leader"
    ],
    "correctAnswer": "The vicar and his wife",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E04 A Riverside Picnic",
      "Episode storyline",
      "Correct: The vicar and his wife",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Unwilling guests",
      "Church family",
      "Riverside entertainment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38591",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E05 Skis), why does Hyacinth buy Richard skis even though a ski trip is not planned?",
    "answers": [
      "He wants to qualify as a skiing instructor",
      "She thinks they will look impressive on the car",
      "He has booked a holiday in Austria",
      "She hopes to enter him in a competition"
    ],
    "correctAnswer": "She thinks they will look impressive on the car",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E05 Skis",
      "Episode storyline",
      "Correct: She thinks they will look impressive on the car",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Skis as status symbol",
      "Richard birthday",
      "Roof rack"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38592",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E05 Skis), what essential accessory do the Buckets travel to Violet and Bruce's house to borrow?",
    "answers": [
      "A travel trailer",
      "Snow chains",
      "A roof rack",
      "A ski lift pass"
    ],
    "correctAnswer": "A roof rack",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E05 Skis",
      "Episode storyline",
      "Correct: A roof rack",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Violet Bruce",
      "Car equipment",
      "Skis display"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38593",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E06 Country Estate Sale), what does Mrs Braddock do when she commandeers Onslow's car during the country auction outing?",
    "answers": [
      "Sells the vehicle to a scrap dealer",
      "Parks it on the country estate lawn",
      "Drives it into the river",
      "Impersonates his missing dog"
    ],
    "correctAnswer": "Impersonates his missing dog",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E06 Country Estate Sale",
      "Episode storyline",
      "Correct: Impersonates his missing dog",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Mrs Braddock",
      "Missing dog",
      "Onslow car"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38594",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E06 Country Estate Sale), what homemade drink does Hyacinth consume too freely after visiting the country estate sale?",
    "answers": [
      "Gooseberry wine",
      "Elderflower cordial",
      "Damson gin",
      "Blackberry juice"
    ],
    "correctAnswer": "Gooseberry wine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E06 Country Estate Sale",
      "Episode storyline",
      "Correct: Gooseberry wine",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Estate wine",
      "Hyacinth tipsy",
      "Dowager Lady Ursula"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38595",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E07 The Boy Friend), what weapon does Daddy carry when he thinks he is once again guarding a military post?",
    "answers": [
      "A ceremonial sword",
      "A bayonet",
      "A wooden spear",
      "A hunting rifle"
    ],
    "correctAnswer": "A bayonet",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E07 The Boy Friend",
      "Episode storyline",
      "Correct: A bayonet",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Daddy wartime",
      "Onslow home",
      "Military guard"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38596",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E07 The Boy Friend), why does Hyacinth become especially eager to sing to Emmet in this episode?",
    "answers": [
      "She has been hired to sing at a wedding",
      "She has entered a national talent contest",
      "He is staging a musical production",
      "She has received a letter from an opera company"
    ],
    "correctAnswer": "He is staging a musical production",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E07 The Boy Friend",
      "Episode storyline",
      "Correct: He is staging a musical production",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Emmet theatre",
      "Hyacinth audition",
      "Musical"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38597",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E08 A Barbecue at Violet's), what does Hyacinth do to distract the guests from Violet and Bruce's escalating quarrel?",
    "answers": [
      "Stages a magic act",
      "Takes them on a garden tour",
      "Turns on the television",
      "Organises a sing-song"
    ],
    "correctAnswer": "Organises a sing-song",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E08 A Barbecue at Violet's",
      "Episode storyline",
      "Correct: Organises a sing-song",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Hostess improvises",
      "Violet Bruce",
      "Family argument"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38598",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E08 A Barbecue at Violet's), what disastrous substance is accidentally emptied over the barbecue food?",
    "answers": [
      "Horse manure",
      "Coal ashes",
      "Garden fertiliser powder",
      "Paint"
    ],
    "correctAnswer": "Horse manure",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E08 A Barbecue at Violet's",
      "Episode storyline",
      "Correct: Horse manure",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Daddy's bucket",
      "Barbecue fire",
      "Food spoiled"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38599",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E09 The Rolls-Royce), whose success at the local craft fair sends Hyacinth into a jealous rage before the luxury car excursion?",
    "answers": [
      "Elizabeth's",
      "Lydia Hawksworth's",
      "Daisy's",
      "Mrs Fortescue's"
    ],
    "correctAnswer": "Lydia Hawksworth's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E09 The Rolls-Royce",
      "Episode storyline",
      "Correct: Lydia Hawksworth's",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Craft fair",
      "Second prize",
      "Lydia rival"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38600",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E09 The Rolls-Royce), what improbable mission does Daddy believe he is undertaking while Hyacinth is busy with the Rolls-Royce?",
    "answers": [
      "Leading a cavalry charge in France",
      "Conducting a royal inspection",
      "Hunting elephants in Africa",
      "Searching for buried pirate treasure"
    ],
    "correctAnswer": "Hunting elephants in Africa",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E09 The Rolls-Royce",
      "Episode storyline",
      "Correct: Hunting elephants in Africa",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Daddy fantasy",
      "Africa",
      "Onslow"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38601",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E10 The Hostess), what business do readers mistakenly think Hyacinth is advertising when she offers lessons in social etiquette?",
    "answers": [
      "A cookery school",
      "A dating agency",
      "A professional cleaning service",
      "A striptease act"
    ],
    "correctAnswer": "A striptease act",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E10 The Hostess",
      "Episode storyline",
      "Correct: A striptease act",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Misread advert",
      "Unexpected clients",
      "Striptease"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38602",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (S5E10 The Hostess), what does Hyacinth send Richard away to do before the awkward would-be clients arrive?",
    "answers": [
      "Collect Daddy",
      "Buy new champagne glasses",
      "Hire a pianist",
      "Collect the vicar"
    ],
    "correctAnswer": "Collect Daddy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: S5E10 The Hostess",
      "Episode storyline",
      "Correct: Collect Daddy",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Richard errand",
      "Daddy collection",
      "Hostess lessons"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38603",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (1995 Christmas The Pageant), which historical queen does Hyacinth choose to portray in her Civil War production?",
    "answers": [
      "Elizabeth I",
      "Henrietta Maria",
      "Anne Boleyn",
      "Mary Queen of Scots"
    ],
    "correctAnswer": "Henrietta Maria",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: 1995 Christmas The Pageant",
      "Episode storyline",
      "Correct: Henrietta Maria",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Civil War pageant",
      "Hyacinth role",
      "Queen consort"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38604",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (1995 Christmas The Pageant), whom does Hyacinth cast to portray King Charles I opposite her?",
    "answers": [
      "Onslow",
      "Emmet",
      "Richard",
      "The vicar"
    ],
    "correctAnswer": "Richard",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: 1995 Christmas The Pageant",
      "Episode storyline",
      "Correct: Richard",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Pageant casting",
      "Richard as king",
      "Church hall"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38605",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (1995 Christmas The Pageant), which neighbour accidentally pulls the wrong stage rope and injures Hyacinth during rehearsal?",
    "answers": [
      "Emmet",
      "Mrs Nugent",
      "Mrs Fortescue",
      "Elizabeth"
    ],
    "correctAnswer": "Elizabeth",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: 1995 Christmas The Pageant",
      "Episode storyline",
      "Correct: Elizabeth",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Rope mishap",
      "Stage accident",
      "Finale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38606",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (1995 Christmas The Pageant), what dance is Daddy performing with another man amid the final episode's chaos?",
    "answers": [
      "A tango",
      "A waltz",
      "A polka",
      "A foxtrot"
    ],
    "correctAnswer": "A tango",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: 1995 Christmas The Pageant",
      "Episode storyline",
      "Correct: A tango",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Daddy dancing",
      "Pageant disruption",
      "Finale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38607",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Young Hyacinth (2016 Young Hyacinth), what does the young Violet hope to gain as she imagines her own future?",
    "answers": [
      "An acting career",
      "Wealth",
      "A job in the army",
      "A life as a sailor"
    ],
    "correctAnswer": "Wealth",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: 2016 Young Hyacinth",
      "Episode storyline",
      "Correct: Wealth",
      "Source: https://www.comedy.co.uk/tv/young_hyacinth/",
      "Violet ambition",
      "Youth prequel",
      "Future luxury",
      "Young Hyacinth",
      "Programme: Young Hyacinth",
      "2016 prequel"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38608",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Young Hyacinth (2016 Young Hyacinth), which dream sets Daisy apart from her more status-conscious elder sister?",
    "answers": [
      "Becoming an opera singer",
      "Marrying a prince",
      "Living a life outdoors",
      "Running a London hotel"
    ],
    "correctAnswer": "Living a life outdoors",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: 2016 Young Hyacinth",
      "Episode storyline",
      "Correct: Living a life outdoors",
      "Source: https://www.comedy.co.uk/tv/young_hyacinth/",
      "Daisy ambitions",
      "Nature",
      "Family contrast",
      "Young Hyacinth",
      "Programme: Young Hyacinth",
      "2016 prequel"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38609",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Young Hyacinth (2016 Young Hyacinth), which sister is particularly interested in film stars and boys?",
    "answers": [
      "Violet",
      "Daisy",
      "Hyacinth",
      "Rose"
    ],
    "correctAnswer": "Rose",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: 2016 Young Hyacinth",
      "Episode storyline",
      "Correct: Rose",
      "Source: https://www.comedy.co.uk/tv/young_hyacinth/",
      "Rose interests",
      "Cinema",
      "Romance",
      "Young Hyacinth",
      "Programme: Young Hyacinth",
      "2016 prequel"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38610",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Young Hyacinth (2016 Young Hyacinth), what household possession does young Hyacinth particularly dream of acquiring?",
    "answers": [
      "A matching set of china",
      "A new motorcar",
      "A swimming pool",
      "A yacht"
    ],
    "correctAnswer": "A matching set of china",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: 2016 Young Hyacinth",
      "Episode storyline",
      "Correct: A matching set of china",
      "Source: https://www.comedy.co.uk/tv/young_hyacinth/",
      "Hyacinth standards",
      "Matching china",
      "Social aspiration",
      "Young Hyacinth",
      "Programme: Young Hyacinth",
      "2016 prequel"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38611",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Young Hyacinth (2016 Young Hyacinth), what contrast between two father figures particularly frustrates Hyacinth?",
    "answers": [
      "Her farmer father and the naval officer next door",
      "Her drinking brush-salesman father and the respectable ex-Squadron Leader she works for",
      "Her teacher father and her employer's actor son",
      "Her wealthy father and the struggling parish vicar"
    ],
    "correctAnswer": "Her drinking brush-salesman father and the respectable ex-Squadron Leader she works for",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: 2016 Young Hyacinth",
      "Episode storyline",
      "Correct: Her drinking brush-salesman father and the respectable ex-Squadron Leader she works for",
      "Source: https://www.comedy.co.uk/tv/young_hyacinth/",
      "Daddy drinking",
      "Cooper-Smith ideal",
      "Maid's viewpoint",
      "Young Hyacinth",
      "Programme: Young Hyacinth",
      "2016 prequel"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38612",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (1995 Children in Need short), what nightmare does Hyacinth have about Daddy in the short charity sketch?",
    "answers": [
      "That he has married Mrs Nugent",
      "That he has joined the navy",
      "That he has died",
      "That he has sold his home"
    ],
    "correctAnswer": "That he has died",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: 1995 Children in Need short",
      "Episode storyline",
      "Correct: That he has died",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Charity sketch",
      "Dream",
      "Daddy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38613",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (1997 The Memoirs of Hyacinth Bucket), what written item do Daisy and Onslow discover before reliving Hyacinth's past disasters?",
    "answers": [
      "A notebook of Sheridan's accounts",
      "Violet's secret diary",
      "A letter from the prime minister",
      "Hyacinth's memoirs manuscript"
    ],
    "correctAnswer": "Hyacinth's memoirs manuscript",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: 1997 The Memoirs of Hyacinth Bucket",
      "Episode storyline",
      "Correct: Hyacinth's memoirs manuscript",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Compilation frame",
      "Daisy Onslow",
      "Memoirs"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38614",
    "category": "Television",
    "programme": "Keeping Up Appearances",
    "question": "In Keeping Up Appearances (2008 Life Lessons from Onslow), what kind of educational programme does Onslow parody while presenting clips and advice?",
    "answers": [
      "An Open University programme",
      "A driving theory course",
      "A cooking masterclass",
      "A language programme"
    ],
    "correctAnswer": "An Open University programme",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Family Comedy",
      "BBC One",
      "Keeping Up Appearances",
      "Programme: Keeping Up Appearances",
      "Episode: 2008 Life Lessons from Onslow",
      "Episode storyline",
      "Correct: An Open University programme",
      "Source: https://en.wikipedia.org/wiki/List_of_Keeping_Up_Appearances_episodes",
      "Onslow host",
      "University spoof",
      "Compilation"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==198 ||
 questions[0].id!=='tv_17103'||questions[96].id!=='tv_17199'||
 auditAdditions[0].id!=='tv_38514' ||
 auditAdditions[auditAdditions.length-1].id!=='tv_38614'||
 new Set(questions.map(q=>q.id)).size!==questions.length||
 new Set(questions.map(q=>normalise(q.question))).size!==questions.length||
 questions.some(q=>q.answers.length!==4||new Set(q.answers.map(normalise)).size!==4||
 q.answers.filter(a=>a===q.correctAnswer).length!==1||
 q.programme!=='Keeping Up Appearances'||
 !q.tags.includes('Programme: Keeping Up Appearances')||
 q.tags.length<14||q.dailyEligible!==true)||
 auditAdditions.some(q=>!q.question.startsWith('In Keeping Up Appearances (')&&
 !q.question.startsWith('In Young Hyacinth (')))
 throw Error('Pack 351 audited question validation failed');
module.exports = questions;
