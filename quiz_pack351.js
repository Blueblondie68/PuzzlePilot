
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

module.exports = questions;
