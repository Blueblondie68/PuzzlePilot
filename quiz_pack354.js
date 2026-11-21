// quiz_pack354.js
// PuzzlePilot — The Bigggggg Quiz
// Television / physical comedy: Mr Bean and Some Mothers Do 'Ave 'Em.
// Both were outstanding in the master workbook through Pack 351.
// Original television programmes, with separately identified charity sketches.
// Sources checked: ITVX, British Comedy Guide episode and cast guides, Kent Film Office.
// No disputed episode totals; seven individual fact-specific tags for every question.
// WordPad-ready CommonJS module; zero dependencies.

const FIRST_ID = 17327;

const mrBeanFacts = `Who played the title character in the original live-action Mr Bean television series?|Rowan Atkinson|Richard Briers|Ben Elton|Robin Driscoll|Easy|Rowan Atkinson|Title Character|Live Action|Leading Actor|Physical Comedy|Mr Bean Performance|ITV Casting
Which British television network first broadcast Mr Bean?|ITV|BBC Two|Channel 4|Channel 5|Easy|ITV Original Broadcast|British Television|Programme Network|1990 Premiere|Commercial Channel|Live Action Comedy|Series Launch
In which year did the original Mr Bean television series begin?|1990|1986|1994|2002|Easy|1990 Launch|Original Series|First Broadcast|Television Debut|Early Nineties|Live Action Version|ITV Premiere
On which holiday did the first episode of Mr Bean air?|New Year's Day|Christmas Day|Boxing Day|Easter Sunday|Medium|1 January 1990|First Episode Date|New Years Day|Bank Holiday Premiere|Original Transmission|ITV Schedule|Series Debut
What kind of test does Mr Bean struggle with in his first television episode?|A mathematics examination|A driving theory test|A geography quiz|A spelling competition|Easy|Mathematics Exam|Opening Episode|Examination Hall|Cheating Attempt|Written Test|Invigilator|Student Rival
Which actor played Mr Sprout, the man beside Bean at church in the first episode?|Richard Briers|John Cleese|Michael Crawford|Ronnie Barker|Hard|Richard Briers|Mr Sprout|Church Scene|Guest Actor|First Episode|Hymn Singing|Awkward Neighbour
Which composer provided music for the original Mr Bean television series?|Howard Goodall|Ronnie Hazlehurst|Mike Batt|Ron Grainer|Hard|Howard Goodall|Theme Composer|Television Music|Production Credits|Original Score|Mr Bean Music|British Composers
Which comedy writer was among the co-creators and writers of the original Mr Bean series?|Richard Curtis|John Sullivan|Jimmy Perry|Roy Clarke|Hard|Richard Curtis|Mr Bean Writers|Creative Team|Rowan Atkinson Collaboration|British Screenwriter|Original Sitcom|Script Credits
Which writer regularly worked with Rowan Atkinson on Mr Bean episodes?|Robin Driscoll|Simon Nye|David Croft|Johnny Speight|Hard|Robin Driscoll|Comedy Writer|Atkinson Collaborator|Mr Bean Script|Creative Credits|1990s Television|Sketch Comedy
Which production company made the original live-action Mr Bean series?|Tiger Aspect Productions|Ragdoll Productions|Cosgrove Hall Films|Hat Trick Productions|Hard|Tiger Aspect Productions|Series Producer|Live Action Programme|Production Company|ITV Sitcom|Mr Bean Credits|British Comedy Studio
What is the name of Mr Bean's much-loved teddy bear?|Teddy|Bungle|Rupert|Paddington|Easy|Teddy Bear|Bean Companion|Stuffed Toy|Personal Possession|Recurring Prop|Character Relationship|Comedic Sidekick
What type of small car is most closely associated with Mr Bean?|A Mini|A Fiat 500|A Volkswagen Beetle|A Ford Fiesta|Easy|Mini Car|Mr Bean Driving|British Motoring|Vehicle Prop|Recurring Car|Road Gags|Character Transport
What is the name of Mr Bean's recurring girlfriend?|Irma Gobb|Betty Spencer|Hyacinth Bucket|Daisy Steiner|Hard|Irma Gobb|Recurring Girlfriend|Romantic Relationship|Mr Bean Dates|Character Name|Supporting Role|1990s Comedy
In Mr Bean's first episode, where does he try to change into his swimming costume discreetly?|On a beach|In a department store|At a railway station|Inside a church|Easy|Beach Scene|Swimming Costume|Modesty Gag|Opening Episode|Clothes Changing|Seaside Setting|Physical Comedy
Where does Mr Bean try to enjoy a birthday meal in The Return of Mr Bean?|A fancy restaurant|A school canteen|A hospital cafeteria|A camping site|Medium|The Return Of Mr Bean|Birthday Meal|Restaurant Scene|Fine Dining|Second Episode|Awkward Eating|Public Embarrassment
Which sporting activity causes Bean trouble in The Curse of Mr Bean?|Diving at a swimming pool|Horse racing|Cricket batting|Mountain climbing|Easy|The Curse Of Mr Bean|Swimming Pool|Diving Board|Sports Mishap|Water Scene|Third Episode|Physical Comedy
What food-preparation task becomes a spectacle in The Curse of Mr Bean?|Making a sandwich|Baking a birthday cake|Cooking a roast dinner|Preparing a fruit salad|Medium|The Curse Of Mr Bean|Sandwich Making|Outdoor Lunch|Food Preparation Gag|Puppet Free Comedy|1990 Episode|Mr Bean Antics
In Mr Bean Goes to Town, which two new items does Bean buy?|A television and a camera|A radio and a bicycle|A computer and a printer|A piano and a telephone|Medium|Mr Bean Goes To Town|New Purchases|Television Set|Camera|Shopping Mishap|1991 Episode|Household Technology
In The Trouble with Mr Bean, which medical professional does Bean visit?|A dentist|An optician|A physiotherapist|A surgeon|Easy|The Trouble With Mr Bean|Dentist Appointment|Oversleeping|Dental Chair|1992 Episode|Medical Visit|Comedic Disaster
Which child's toy causes trouble for Bean in a park in The Trouble with Mr Bean?|A remote-controlled boat|A model helicopter|A skipping rope|A skateboard|Medium|Remote Controlled Boat|Park Scene|The Trouble With Mr Bean|Child Encounter|Outdoor Mishap|1992 Storyline|Toy Trouble
In Mr Bean Rides Again, what medical emergency does Bean try to help with?|A heart attack|A broken ankle|A toothache|An allergic rash|Medium|Mr Bean Rides Again|Heart Attack Victim|Emergency Response|Failed Assistance|1992 Episode|First Aid|Physical Comedy
Which everyday communication task goes badly wrong in Mr Bean Rides Again?|Posting a letter|Sending a fax|Using a pager|Recording a voicemail|Medium|Mr Bean Rides Again|Posting Letter|Mail Service|Everyday Errand|Communication Mishap|1992 Episode|British Post
In Merry Christmas Mr Bean, what large bird becomes stuck on Bean's head?|A turkey|A goose|A duck|A chicken|Easy|Merry Christmas Mr Bean|Turkey On Head|Festive Cooking|Christmas Dinner|Kitchen Disaster|1992 Special|Famous Gag
Which famous London department store features in Bean's Christmas shopping escapade?|Harrods|Selfridges|Liberty|Fortnum and Mason|Hard|Harrods|Christmas Shopping|Merry Christmas Mr Bean|London Store|Festive Episode|Retail Setting|1992 Special
In Mr Bean in Room 426, where does Bean get locked out while improperly dressed?|His hotel room|A railway carriage|A swimming-pool changing room|His office|Easy|Room 426|Hotel Room|Locked Out|Embarrassing Situation|1993 Episode|Accommodation|Mr Bean Antics
In Do-It-Yourself Mr Bean, which annual shopping event attracts Bean?|The New Year sales|Black Friday|A summer car-boot sale|A Christmas market|Medium|Do It Yourself Mr Bean|New Year Sales|January Shopping|Bargain Hunting|1994 Episode|Furniture Purchase|Department Store
In Do-It-Yourself Mr Bean, what home-improvement activity goes disastrously wrong?|Decorating his room|Repairing a garden fence|Installing a shower|Replacing roof tiles|Easy|Do It Yourself Mr Bean|Interior Decorating|Home Improvement|Painting Mishap|1994 Episode|Flat Interior|Disaster Comedy
Where does Bean unexpectedly have to look after an infant in Mind the Baby Mr Bean?|At a funfair|At an airport|In a library|At a football stadium|Easy|Mind The Baby Mr Bean|Funfair|Unexpected Babysitting|Infant Companion|1994 Episode|Amusement Rides|Childcare Chaos
At a school open day in Back to School Mr Bean, which martial art does Bean try?|Judo|Karate|Taekwondo|Aikido|Medium|Back To School Mr Bean|School Open Day|Judo|Martial Arts Demonstration|1994 Episode|Sports Activity|Clumsy Participant
In Tee Off Mr Bean, what game leads Bean to follow the rules too literally?|Crazy golf|Ten-pin bowling|Table tennis|Snooker|Easy|Tee Off Mr Bean|Crazy Golf|Putting Rules|1995 Episode|Miniature Course|Stubborn Player|Sporting Comedy
Which public facility also features in Tee Off Mr Bean?|A laundrette|A post office|A museum|A police station|Medium|Tee Off Mr Bean|Laundrette Scene|Washing Clothes|1995 Episode|Lost Trousers|Everyday Errands|Public Laundry
In Hair by Mr Bean of London, where does Bean end up cutting other people's hair?|A barber's shop|A theatre dressing room|A hospital ward|A school classroom|Easy|Hair By Mr Bean Of London|Barbershop|Unwanted Haircuts|Customer Mixups|Salon Gag|Final Original Episode|Hairstyling
Which TV dating programme did Mr Bean appear on in a 1993 Comic Relief sketch?|Blind Date|Take Me Out|First Dates|The Bachelor|Hard|Comic Relief 1993|Blind Date|Cilla Black Programme|Charity Sketch|Television Dating|Guest Appearance|Mr Bean Special
What did Bean agree not to do in his 1991 Red Nose Day police-station sketch?|Speak|Drive|Eat|Sing|Hard|Comic Relief 1991|Sponsored Silence|Police Station|Red Nose Day|Charity Fundraising|Stolen Items|Silent Sketch`;

const mothersFacts = `Who played the accident-prone Frank Spencer in Some Mothers Do 'Ave 'Em?|Michael Crawford|Rowan Atkinson|John Cleese|David Jason|Easy|Michael Crawford|Frank Spencer|Lead Actor|Accident Prone Husband|BBC Sitcom|Character Casting|Physical Stunts
Who played Frank's long-suffering wife Betty Spencer?|Michele Dotrice|Wendy Richard|Felicity Kendal|Pauline Quirke|Easy|Michele Dotrice|Betty Spencer|Wife Character|Leading Actress|Marriage|BBC Comedy Cast|Spencer Family
On which broadcaster did Some Mothers Do 'Ave 'Em originally air?|BBC One|ITV|Channel 4|BBC Three|Easy|BBC One|Original Broadcaster|1973 Transmission|British Sitcom|Public Service Television|BBC Comedy|First Series
In which year did Some Mothers Do 'Ave 'Em first appear on television?|1973|1968|1978|1983|Easy|1973 Premiere|15 February 1973|BBC Launch|First Transmission|Seventies Comedy|Original Series|Programme Timeline
Who created and wrote Some Mothers Do 'Ave 'Em?|Raymond Allen|Richard Curtis|Roy Clarke|John Sullivan|Medium|Raymond Allen|Series Creator|Sitcom Writer|BBC Production|Comedy Script|Original Concept|Television Credits
Who composed the theme music for Some Mothers Do 'Ave 'Em?|Ronnie Hazlehurst|Howard Goodall|Mike Batt|Tony Hatch|Hard|Ronnie Hazlehurst|Theme Tune|BBC Comedy Music|Composer|Television Soundtrack|Opening Credits|Seventies Sitcom
How many series were made during the original 1970s run of Some Mothers Do 'Ave 'Em?|Three|Two|Four|Six|Medium|Three Series|1973 To 1978|Original Run|BBC Sitcom History|Series Count|Production Timeline|British Comedy
What is the name of Frank and Betty Spencer's baby daughter?|Jessica|Sophie|Katie|Charlotte|Easy|Jessica Spencer|Daughter|Frank And Betty|New Baby|Family Character|Spencer Household|Second Series Finale
What is the name of Betty's mother, who often disapproves of Frank?|Beryl Fisher|Mabel Smith|Edith Arkwright|Ena Sharples|Hard|Beryl Fisher|Betty Mother|Frank Mother In Law|Family Conflict|Character Name|Spencer Relatives|Sitcom Relationships
Which characteristic item of headwear is associated with Frank Spencer?|A beret|A bowler hat|A baseball cap|A top hat|Easy|Frank Beret|Iconic Costume|Character Appearance|1970s Fashion|Michael Crawford|Recognisable Outfit|Comedy Wardrobe
Where does Frank get stuck on the way to a job interview in the first episode?|In a lift|On an escalator|Inside a revolving door|In a telephone box|Medium|First Episode|Job Interview|Lift Mishap|Employment Trouble|1973 Debut|Workplace Visit|Frank Spencer
Whose high-tech house does Frank cause havoc in during George's House?|Betty's brother George's|His own father's|His new employer's|His next-door neighbour's|Medium|Georges House|Betty Brother|Modern Gadgets|High Tech Home|First Series|Family Visit|Property Damage
In Love Thy Neighbour, who is unwell and needs a doctor?|Betty's mother|Frank's grandfather|Their baby daughter|The next-door neighbour's son|Medium|Love Thy Neighbour|Beryl Fisher|Doctor Needed|Ill Relative|First Series|Medical Errand|Mother In Law
What occasion takes Frank and Betty away in Have a Break Take a Husband?|Their second honeymoon|Their first wedding anniversary|A school reunion|A business conference|Medium|Have A Break Take A Husband|Second Honeymoon|Married Couple|Holiday Trip|Series One|Coastal Stay|Relationship Comedy
Which family member is in hospital in The Hospital Visit?|Betty|Jessica|George|Frank's grandfather|Easy|Hospital Visit|Betty Hospitalised|Visiting Wife|Family Concern|First Series|Hospital Ward|Frank Errands
During a visit to the psychiatrist in Some Mothers Do 'Ave 'Em, what does Frank recall Betty's mother mistaking him for?|A gas engineer|A window cleaner|A taxi driver|A milkman|Medium|The Psychiatrist|Mr Webster|Frank and Betty First Meeting|Mrs Fisher Mistaken Identity|Gas Engineer Confusion|1973 Episode Flashback|Frank Spencer Memories
Which office does Frank repeatedly return to in The Employment Exchange?|The labour exchange|The passport office|The tax office|The local library|Hard|Employment Exchange|Labour Exchange|Unemployment|Job Hunting|Mr Bradshaw|First Series Finale|Frank Employment
During Frank and Betty's picnic in Some Mothers Do 'Ave 'Em, what happens to their company car?|Frank reverses it halfway over the edge of a cliff|It is stolen from the picnic area|It catches fire after a short circuit|It rolls into the river|Medium|Cliffhanger|Frank Spencer Driving|Company Car Disaster|Clifftop Picnic|Car Half Over Edge|Betty Spencer|1973 Episode Stunt
Which former military organisation holds a reunion in a second-series episode?|The RAF|The Royal Navy|The Royal Marines|The Home Guard|Medium|RAF Reunion|Military Gathering|Frank Spencer Past|Second Series|1973 Episode|Ex Service Friends|Sleep Trouble
What kind of training does Frank undertake in The Public Relations Course?|Public relations|Firefighting|First aid|Bookkeeping|Medium|Public Relations Course|Training Session|Career Development|Second Series|1973 Episode|Adult Education|Frank Employment
What kind of act does Frank attempt with a puppet named Marvin?|Ventriloquism|Magic escapology|Mime|Shadow puppetry|Medium|Frank And Marvin|Ventriloquist Act|Marvin The Monkey|Showbusiness Ambition|Second Series|Stage Performance|Puppet Comedy
What physical activity causes problems in the episode Father's Clinic?|Roller skating|Ice hockey|Scuba diving|Horse riding|Medium|Fathers Clinic|Roller Skating|Expectant Father|Second Series|1973 Episode|Training Class|Physical Mishaps
In which episode is Frank and Betty's daughter born?|The Baby Arrives|The Hospital Visit|Moving House|Jessica's First Christmas|Medium|The Baby Arrives|Jessica Birth|Frank And Betty|Second Series Finale|New Parenthood|December 1973|Baby Delivery
In Jessica's First Christmas, which church event does Frank join?|A nativity play|A choir competition|A harvest auction|A bell-ringing contest|Medium|Jessicas First Christmas|Nativity Play|Church Production|1974 Special|Holiday Episode|Frank Performs|Christmas Celebration
Which vehicle skill does Frank try to learn in the 1975 Christmas special?|Driving a car|Sailing a yacht|Riding a motorcycle|Operating a forklift|Easy|Learning To Drive|1975 Christmas Special|Driving Lessons|Frank Motoring|Career Prospects|Driving Licence|Vehicle Comedy
What happens to Frank's flying instructor during the 1978 Some Mothers Do 'Ave 'Em Christmas special?|He loses consciousness in mid-flight|He parachutes out before taking off|He breaks his arm opening the cockpit|He refuses to board the aircraft|Medium|Learning To Fly|Christmas 1978 Special|Flying Instructor Unconscious|Aerial Mishap|Frank Spencer At Controls|Flight School|1978 Finale
What do Frank and Betty do in the first episode of the third series?|Move house|Open a restaurant|Travel to France|Buy a holiday caravan|Medium|Moving House|Third Series Opening|1978 Episode|Family Relocation|New Home|Household Change|Frank And Betty
What does Frank try to build for Jessica in the episode Wendy House?|A child's playhouse|A treehouse|A garden shed|A rabbit hutch|Easy|Wendy House|Jessicas Playhouse|Home DIY|Third Series|1978 Episode|Childrens Toy Building|Construction Mishap
In Some Mothers Do 'Ave 'Em, which political party is Frank involved with while preparing for a gala dinner?|The Liberal Party|The Conservative Party|The Labour Party|The Social Democratic Party|Medium|Scottish Dancing|Liberal Party Candidate|Gala Dinner|Frank Spencer Politics|1978 Series Three|Dancing Committee|Political Embarrassment
What job lands Frank in court in King of the Road?|Despatch rider|Taxi driver|Train guard|Bus conductor|Medium|King Of The Road|Despatch Rider|Court Appearance|Motorcycle Delivery|Third Series|1978 Episode|Employment Trouble
To which country does Frank consider emigrating in Australia House?|Australia|Canada|New Zealand|South Africa|Easy|Australia House|Emigration Plan|Australian Grandfather|Third Series Finale|1978 Episode|Moving Abroad|Spencer Family
For which charity event did Some Mothers Do 'Ave 'Em return in a 2016 sketch?|Sport Relief|Comic Relief Red Nose Day|Children in Need|Stand Up to Cancer|Easy|Sport Relief 2016|Charity Sketch|Frank Spencer Return|Michael Crawford|BBC Special|Television Revival|Fundraising
Who played the adult Jessica Spencer in the 2016 Sport Relief sketch?|Gemma Arterton|Jessica Forte|Michele Dotrice|Helen Mirren|Hard|Gemma Arterton|Adult Jessica Spencer|Sport Relief Special|2016 Cast|Spencer Daughter|Guest Actress|Generational Return
Which Olympic cycling champion appeared alongside Frank in the 2016 special?|Bradley Wiggins|Chris Boardman|Jason Kenny|Mark Cavendish|Medium|Bradley Wiggins|Cycling Champion|Sport Relief 2016|Lee Valley Velodrome|Frank Spencer|Athlete Cameo|Comic Encounter
Which former Formula One world champion also appeared in the 2016 Sport Relief sketch?|Jenson Button|Lewis Hamilton|Damon Hill|Nigel Mansell|Medium|Jenson Button|Formula One|Sport Relief 2016|Guest Appearance|British Racing Driver|Michael Crawford|Charity Sketch`;

const normalise = value => value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
const questions = [];

function addProgramme(programme, commonTags, lines) {
  for (const line of lines.trim().split('\n')) {
    const id = 'tv_' + String(FIRST_ID + questions.length).padStart(5, '0');
    const values = line.trim().split('|').map(text => text.trim());
    if (values.length !== 13) throw new Error(`Pack 354: ${id} has ${values.length} fields; expected 13`);
    const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = values;
    if ([question, correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(x => !x))
      throw new Error(`Pack 354: blank field in ${id}`);
    if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.length !== 7)
      throw new Error(`Pack 354: difficulty or bespoke tags invalid for ${id}`);
    if (new Set(specificTags.map(normalise)).size !== 7)
      throw new Error(`Pack 354: repeated bespoke tag for ${id}`);
    const answers = [wrong1, wrong2, wrong3];
    if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4)
      throw new Error(`Pack 354: duplicate answer option for ${id}`);
    answers.splice(questions.length % 4, 0, correctAnswer);
    const tags = [...new Map([
      'Television', 'British Television', 'Comedy', 'Physical Comedy',
      ...commonTags, programme, `Programme: ${programme}`, correctAnswer, ...specificTags
    ].map(tag => [normalise(tag), tag])).values()];
    questions.push({id, category:'Television', programme, question,
      answers, correctAnswer, difficulty, tags, dailyEligible:true});
  }
}

addProgramme('Mr Bean', ['ITV', 'Rowan Atkinson', '1990-1995', 'Live Action Sitcom'], mrBeanFacts);
addProgramme("Some Mothers Do 'Ave 'Em", ['BBC One', 'Michael Crawford', '1973-1978', 'Frank Spencer'], mothersFacts);

// Validate the exported question objects, rather than only the source rows.
if (!questions.length || questions[0].id !== 'tv_17327' ||
    new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => normalise(q.question))).size !== questions.length)
  throw new Error('Pack 354: duplicate IDs or question wording');
if (questions.some((q, i) =>
    q.id !== 'tv_' + String(FIRST_ID + i).padStart(5, '0') ||
    q.category !== 'Television' || !q.programme ||
    q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
    new Set(q.answers.map(normalise)).size !== 4 ||
    q.tags.length < 14 || !q.tags.includes(`Programme: ${q.programme}`) ||
    q.dailyEligible !== true || !['Easy','Medium','Hard'].includes(q.difficulty)))
  throw new Error('Pack 354: export object validation failed');


// 21 Nov 2026: verified plot-specific audit; original 69 IDs retained.
const auditAdditions = [
  {
    "id": "tv_38857",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "Which hymn does Bean struggle to join in with during the church scene of his first television episode?",
    "answers": [
      "Jerusalem",
      "All Creatures of Our God and King",
      "Amazing Grace",
      "Abide with Me"
    ],
    "correctAnswer": "All Creatures of Our God and King",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Mr Bean",
      "Episode specific story",
      "Scene or character: Church hymn",
      "Answer fact: All Creatures of Our God and King",
      "Plot event: Church hymn",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38858",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "What does Bean try to do during the mathematics examination without the invigilator noticing?",
    "answers": [
      "Switch his paper for an easier one",
      "Telephone for help",
      "Copy answers from the student beside him",
      "Hide a calculator under his hat"
    ],
    "correctAnswer": "Copy answers from the student beside him",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Mr Bean",
      "Episode specific story",
      "Scene or character: Examination cheating",
      "Answer fact: Copy answers from the student beside him",
      "Plot event: Examination cheating",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38859",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "Which member of the royal family does Bean awkwardly encounter?",
    "answers": [
      "Princess Margaret",
      "Queen Elizabeth II",
      "Princess Anne",
      "Queen Elizabeth The Queen Mother"
    ],
    "correctAnswer": "Queen Elizabeth The Queen Mother",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: The Return of Mr Bean",
      "Episode specific story",
      "Scene or character: Royal meeting",
      "Answer fact: Queen Elizabeth The Queen Mother",
      "Plot event: Royal meeting",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38860",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "Why is Bean so reluctant to jump from the high diving board?",
    "answers": [
      "He is afraid of heights",
      "He has forgotten how to swim",
      "He cannot find his goggles",
      "The pool is being drained"
    ],
    "correctAnswer": "He is afraid of heights",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: The Curse of Mr Bean",
      "Episode specific story",
      "Scene or character: High-diving fear",
      "Answer fact: He is afraid of heights",
      "Plot event: High-diving fear",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38861",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "What type of film does Bean visit with his girlfriend after the swimming-pool mishap?",
    "answers": [
      "A romantic comedy",
      "A horror film",
      "A western",
      "A musical"
    ],
    "correctAnswer": "A horror film",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: The Curse of Mr Bean",
      "Episode specific story",
      "Scene or character: Cinema date",
      "Answer fact: A horror film",
      "Plot event: Cinema date",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38862",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "What does Bean leave on top of another car, sending him hopping around town?",
    "answers": [
      "His wallet",
      "His camera",
      "One of his shoes",
      "Teddy"
    ],
    "correctAnswer": "One of his shoes",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Mr Bean Goes to Town",
      "Episode specific story",
      "Scene or character: Shoe on car roof",
      "Answer fact: One of his shoes",
      "Plot event: Shoe on car roof",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38863",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "What happens to Bean's new camera in a park?",
    "answers": [
      "It falls into a lake",
      "A dog bites through the strap",
      "He leaves it on a bus",
      "Someone steals it"
    ],
    "correctAnswer": "Someone steals it",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Mr Bean Goes to Town",
      "Episode specific story",
      "Scene or character: Stolen camera",
      "Answer fact: Someone steals it",
      "Plot event: Stolen camera",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38864",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "How does Bean inadvertently incapacitate his dentist during an appointment?",
    "answers": [
      "He sedates the dentist",
      "He locks him in the waiting room",
      "He breaks the dental chair",
      "He turns off the clinic's power"
    ],
    "correctAnswer": "He sedates the dentist",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: The Trouble with Mr Bean",
      "Episode specific story",
      "Scene or character: Dentist knocked out",
      "Answer fact: He sedates the dentist",
      "Plot event: Dentist knocked out",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38865",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "What does Bean try to do at the wheel while rushing to the dentist after oversleeping?",
    "answers": [
      "Prepare a hot breakfast",
      "Get dressed and brush his teeth",
      "Read a newspaper aloud",
      "Assemble an alarm clock"
    ],
    "correctAnswer": "Get dressed and brush his teeth",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: The Trouble with Mr Bean",
      "Episode specific story",
      "Scene or character: Getting ready while driving",
      "Answer fact: Get dressed and brush his teeth",
      "Plot event: Getting ready while driving",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38866",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "How does Bean's attempt to restart his Mini create trouble for the ambulance crew?",
    "answers": [
      "He removes its wheels",
      "He breaks its radio antenna",
      "He uses the ambulance to jump-start his car and disables it",
      "He drives it into a brick wall"
    ],
    "correctAnswer": "He uses the ambulance to jump-start his car and disables it",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Mr Bean Rides Again",
      "Episode specific story",
      "Scene or character: Ambulance jump-start",
      "Answer fact: He uses the ambulance to jump-start his car and disables it",
      "Plot event: Ambulance jump-start",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38867",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "Where does Bean accidentally lock himself while posting a letter?",
    "answers": [
      "Inside a telephone kiosk",
      "Inside a railway carriage",
      "Inside a parcel locker",
      "Inside a pillar box"
    ],
    "correctAnswer": "Inside a pillar box",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Mr Bean Rides Again",
      "Episode specific story",
      "Scene or character: Postbox entrapment",
      "Answer fact: Inside a pillar box",
      "Plot event: Postbox entrapment",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38868",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "Which festive display does Bean rearrange while shopping at Harrods?",
    "answers": [
      "A Nativity scene",
      "A model railway",
      "A gingerbread village",
      "A Christmas tree competition"
    ],
    "correctAnswer": "A Nativity scene",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Merry Christmas Mr Bean",
      "Episode specific story",
      "Scene or character: Department store Nativity",
      "Answer fact: A Nativity scene",
      "Plot event: Department store Nativity",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38869",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "Which group does Bean unexpectedly find himself conducting in the street?",
    "answers": [
      "A military pipe band",
      "A Salvation Army band",
      "A school orchestra",
      "A cathedral choir"
    ],
    "correctAnswer": "A Salvation Army band",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Merry Christmas Mr Bean",
      "Episode specific story",
      "Scene or character: Street band conducting",
      "Answer fact: A Salvation Army band",
      "Plot event: Street band conducting",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38870",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "What food makes Bean ill during his hotel stay?",
    "answers": [
      "A burnt pizza",
      "Undercooked eggs",
      "Spoiled oysters",
      "Mouldy cheese"
    ],
    "correctAnswer": "Spoiled oysters",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Mr Bean in Room 426",
      "Episode specific story",
      "Scene or character: Hotel food poisoning",
      "Answer fact: Spoiled oysters",
      "Plot event: Hotel food poisoning",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38871",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "At which hotel does Bean spend his disastrous bank-holiday stay?",
    "answers": [
      "The Savoy",
      "The Grand Brighton",
      "The Imperial Hotel",
      "The Queen's Hotel"
    ],
    "correctAnswer": "The Queen's Hotel",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Mr Bean in Room 426",
      "Episode specific story",
      "Scene or character: Hotel destination",
      "Answer fact: The Queen's Hotel",
      "Plot event: Hotel destination",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38872",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "What are the first names of the two guests who leave Bean's New Year's Eve party?",
    "answers": [
      "Rupert and Hubert",
      "Peter and Paul",
      "Harry and Barry",
      "Tom and Jerry"
    ],
    "correctAnswer": "Rupert and Hubert",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Do-It-Yourself Mr Bean",
      "Episode specific story",
      "Scene or character: New Year party guests",
      "Answer fact: Rupert and Hubert",
      "Plot event: New Year party guests",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38873",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "What bulky item does Bean buy in the January sales before taking it home by an unusual method?",
    "answers": [
      "A dining table",
      "A reclining armchair",
      "A wardrobe",
      "A four-poster bed"
    ],
    "correctAnswer": "A reclining armchair",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Do-It-Yourself Mr Bean",
      "Episode specific story",
      "Scene or character: Armchair delivery",
      "Answer fact: A reclining armchair",
      "Plot event: Armchair delivery",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38874",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "In which English seaside city does Bean end up minding a baby at a funfair?",
    "answers": [
      "Brighton",
      "Blackpool",
      "Portsmouth",
      "Margate"
    ],
    "correctAnswer": "Portsmouth",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Mind the Baby Mr Bean",
      "Episode specific story",
      "Scene or character: Southsea funfair",
      "Answer fact: Portsmouth",
      "Plot event: Southsea funfair",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38875",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "Which military vehicle crushes Bean's Mini at the school open day?",
    "answers": [
      "An armoured personnel carrier",
      "A tracked bulldozer",
      "A military lorry",
      "A tank"
    ],
    "correctAnswer": "A tank",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Back to School Mr Bean",
      "Episode specific story",
      "Scene or character: Mini crushed by tank",
      "Answer fact: A tank",
      "Plot event: Mini crushed by tank",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38876",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "Which rule makes Bean's crazy-golf ball take him on a trip around town?",
    "answers": [
      "He must use his club instead of picking up the ball",
      "He must change clubs at every hole",
      "He must finish before sunset",
      "He cannot look at the hole"
    ],
    "correctAnswer": "He must use his club instead of picking up the ball",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Tee Off Mr Bean",
      "Episode specific story",
      "Scene or character: Mini golf strict rule",
      "Answer fact: He must use his club instead of picking up the ball",
      "Plot event: Mini golf strict rule",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38877",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "What astonishing number of strokes does Bean ultimately record after his disastrous crazy-golf outing?",
    "answers": [
      "247",
      "3427",
      "1073",
      "512"
    ],
    "correctAnswer": "3427",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Tee Off Mr Bean",
      "Episode specific story",
      "Scene or character: Crazy golf score",
      "Answer fact: 3427",
      "Plot event: Crazy golf score",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38878",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "Which ceremonial figure does Bean try to pose beside for a photograph?",
    "answers": [
      "A Chelsea Pensioner",
      "A mounted police officer",
      "A Queen's Guard",
      "A palace tour guide"
    ],
    "correctAnswer": "A Queen's Guard",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Goodnight Mr Bean",
      "Episode specific story",
      "Scene or character: Photo with guard",
      "Answer fact: A Queen's Guard",
      "Plot event: Photo with guard",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38879",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "In what kind of waiting room does Bean try to jump the queue?",
    "answers": [
      "A passport office",
      "A dentist's surgery",
      "An airport check-in desk",
      "A hospital accident and emergency department"
    ],
    "correctAnswer": "A hospital accident and emergency department",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Goodnight Mr Bean",
      "Episode specific story",
      "Scene or character: Hospital queue jumping",
      "Answer fact: A hospital accident and emergency department",
      "Plot event: Hospital queue jumping",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38880",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "How does Bean manage to pass the obedience challenges at a children's pet show with Teddy?",
    "answers": [
      "Teddy stays still until Bean moves him",
      "Teddy responds to every whistle",
      "Teddy fetches the judge's stick",
      "Teddy performs a backflip"
    ],
    "correctAnswer": "Teddy stays still until Bean moves him",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Hair by Mr Bean of London",
      "Episode specific story",
      "Scene or character: Teddy pet show",
      "Answer fact: Teddy stays still until Bean moves him",
      "Plot event: Teddy pet show",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38881",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "What does Bean hide inside while trying to evade railway ticket inspection?",
    "answers": [
      "A luggage trunk",
      "A mail bag",
      "A vending machine",
      "A cleaning trolley"
    ],
    "correctAnswer": "A mail bag",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: Hair by Mr Bean of London",
      "Episode specific story",
      "Scene or character: Railway mail bag",
      "Answer fact: A mail bag",
      "Plot event: Railway mail bag",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38882",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "What does Bean accidentally damage while trying to copy a drawing in a rare book?",
    "answers": [
      "The librarian's desk",
      "A glass display case",
      "The pages of the original book",
      "The library's carpet"
    ],
    "correctAnswer": "The pages of the original book",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: The Library unaired sketch",
      "Episode specific story",
      "Scene or character: Rare-book crayon marks",
      "Answer fact: The pages of the original book",
      "Plot event: Rare-book crayon marks",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38883",
    "category": "Television",
    "programme": "Mr Bean",
    "question": "Why does Bean find himself at the back of the queue despite manoeuvring to its front?",
    "answers": [
      "A policeman orders him to leave the queue",
      "He boards the wrong bus",
      "He drops his ticket",
      "The next bus has an entrance at the rear"
    ],
    "correctAnswer": "The next bus has an entrance at the rear",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Mr Bean",
      "Programme: Mr Bean",
      "ITV",
      "Rowan Atkinson",
      "Episode or sketch: The Bus Stop unaired sketch",
      "Episode specific story",
      "Scene or character: Bus queue reversed",
      "Answer fact: The next bus has an entrance at the rear",
      "Plot event: Bus queue reversed",
      "Original live-action television",
      "1990s British Comedy",
      "Source: https://en.wikipedia.org/wiki/List_of_Mr._Bean_episodes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38884",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "What gift does Betty buy Frank to help him look professional for a job interview?",
    "answers": [
      "A new briefcase",
      "A bicycle",
      "A bowler hat",
      "A pocket watch"
    ],
    "correctAnswer": "A new briefcase",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: The Job Interview",
      "Episode specific story",
      "Scene or character: Interview present",
      "Answer fact: A new briefcase",
      "Plot event: Interview present",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38885",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "What mishap sets off havoc among the automated gadgets in Betty's brother's home?",
    "answers": [
      "An overflowing bath",
      "A leaking toilet cistern",
      "A burst heating radiator",
      "A dripping kitchen tap"
    ],
    "correctAnswer": "A leaking toilet cistern",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: George's House",
      "Episode specific story",
      "Scene or character: Leaking cistern",
      "Answer fact: A leaking toilet cistern",
      "Plot event: Leaking cistern",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38886",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "What sort of prospective client is George trying to impress before Frank ruins the demonstrations?",
    "answers": [
      "A French hotel owner",
      "A Japanese car maker",
      "An American house builder",
      "A Canadian banker"
    ],
    "correctAnswer": "An American house builder",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: George's House",
      "Episode specific story",
      "Scene or character: Housebuilder client",
      "Answer fact: An American house builder",
      "Plot event: Housebuilder client",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38887",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "What does the doctor find after examining Betty's supposedly ill mother?",
    "answers": [
      "She has broken an arm",
      "She needs emergency surgery",
      "She has food poisoning",
      "There is nothing wrong with her"
    ],
    "correctAnswer": "There is nothing wrong with her",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Love Thy Neighbour",
      "Episode specific story",
      "Scene or character: False illness",
      "Answer fact: There is nothing wrong with her",
      "Plot event: False illness",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://www.phill.co.uk/comedy/mothers/guide.html"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38888",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "Why do the police arrive when Frank tries to get back indoors by ladder at night?",
    "answers": [
      "A neighbour takes him for a burglar",
      "A neighbour reports his car missing",
      "Someone reports smoke",
      "Betty calls about a missing pet"
    ],
    "correctAnswer": "A neighbour takes him for a burglar",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Love Thy Neighbour",
      "Episode specific story",
      "Scene or character: Ladder mistaken for burglary",
      "Answer fact: A neighbour takes him for a burglar",
      "Plot event: Ladder mistaken for burglary",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://www.phill.co.uk/comedy/mothers/guide.html"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38889",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "Which part of his hotel room does Frank tear while shifting furniture on his second honeymoon?",
    "answers": [
      "The window curtains",
      "The linoleum flooring",
      "The carpet runner",
      "The ceiling paper"
    ],
    "correctAnswer": "The linoleum flooring",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Have a Break Take a Husband",
      "Episode specific story",
      "Scene or character: Torn lino in hotel",
      "Answer fact: The linoleum flooring",
      "Plot event: Torn lino in hotel",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://www.phill.co.uk/comedy/mothers/guide.html"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38890",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "Where does Frank secretly obtain replacement furniture after damaging his hotel room?",
    "answers": [
      "The hotel reception",
      "A charity shop",
      "Another guest's room",
      "The railway station"
    ],
    "correctAnswer": "Another guest's room",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Have a Break Take a Husband",
      "Episode specific story",
      "Scene or character: Hotel furniture swapping",
      "Answer fact: Another guest's room",
      "Plot event: Hotel furniture swapping",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://www.phill.co.uk/comedy/mothers/guide.html"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38891",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "Which dish explodes while Frank tries cooking at home with Betty in hospital?",
    "answers": [
      "Baked Alaska",
      "Roast chicken",
      "Rice pudding",
      "Steak and kidney pudding"
    ],
    "correctAnswer": "Steak and kidney pudding",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: The Hospital Visit",
      "Episode specific story",
      "Scene or character: Exploding pudding",
      "Answer fact: Steak and kidney pudding",
      "Plot event: Exploding pudding",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://www.phill.co.uk/comedy/mothers/guide.html"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38892",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "What does Frank spill on Betty's bedspread during a hospital visit?",
    "answers": [
      "Fruit juice",
      "Coffee",
      "Tomato soup",
      "Ink"
    ],
    "correctAnswer": "Fruit juice",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: The Hospital Visit",
      "Episode specific story",
      "Scene or character: Stained bedspread",
      "Answer fact: Fruit juice",
      "Plot event: Stained bedspread",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://www.phill.co.uk/comedy/mothers/guide.html"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38893",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "Which guest actor played psychiatrist Mr Webster?",
    "answers": [
      "John Thaw",
      "Bernard Hepton",
      "Richard Briers",
      "Ian Carmichael"
    ],
    "correctAnswer": "Bernard Hepton",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: The Psychiatrist",
      "Episode specific story",
      "Scene or character: Mr Webster performer",
      "Answer fact: Bernard Hepton",
      "Plot event: Mr Webster performer",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38894",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "What does Frank pour into a computer, doing enormous damage to the office?",
    "answers": [
      "A bucket of paint",
      "A pot of glue",
      "The contents of a tea urn",
      "Engine oil"
    ],
    "correctAnswer": "The contents of a tea urn",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: The Employment Exchange",
      "Episode specific story",
      "Scene or character: Tea urn in computer",
      "Answer fact: The contents of a tea urn",
      "Plot event: Tea urn in computer",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://www.phill.co.uk/comedy/mothers/guide.html"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38895",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "Which place does the manager eventually employ Frank after struggling to find him work?",
    "answers": [
      "A local restaurant",
      "A hotel reception",
      "A driving school",
      "The employment exchange itself"
    ],
    "correctAnswer": "The employment exchange itself",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: The Employment Exchange",
      "Episode specific story",
      "Scene or character: Employed at exchange",
      "Answer fact: The employment exchange itself",
      "Plot event: Employed at exchange",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://www.phill.co.uk/comedy/mothers/guide.html"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38896",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "Which job did Frank perform during his brief RAF service, as recalled in a flashback?",
    "answers": [
      "Cook",
      "Navigator",
      "Chaplain",
      "Fighter pilot"
    ],
    "correctAnswer": "Cook",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: The RAF Reunion",
      "Episode specific story",
      "Scene or character: RAF wartime cook",
      "Answer fact: Cook",
      "Plot event: RAF wartime cook",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38897",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "What is the surname of the expert who tries to train Frank in public relations?",
    "answers": [
      "Smedley",
      "Watson",
      "Lewis",
      "Fisher"
    ],
    "correctAnswer": "Watson",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: The Public Relations Course",
      "Episode specific story",
      "Scene or character: Training expert Mr Watson",
      "Answer fact: Watson",
      "Plot event: Training expert Mr Watson",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38898",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "What sort of job does Frank try at a holiday camp after learning he will become a father?",
    "answers": [
      "Lifeguard",
      "Head gardener",
      "Entertainer",
      "Chef"
    ],
    "correctAnswer": "Entertainer",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Frank and Marvin",
      "Episode specific story",
      "Scene or character: Holiday camp performer",
      "Answer fact: Entertainer",
      "Plot event: Holiday camp performer",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38899",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "Which stage effect goes wrong during Frank's holiday-camp performance?",
    "answers": [
      "A disappearing rabbit trick",
      "A trampoline routine",
      "A plate-spinning act",
      "A human volcano act"
    ],
    "correctAnswer": "A human volcano act",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Frank and Marvin",
      "Episode specific story",
      "Scene or character: Human volcano accident",
      "Answer fact: A human volcano act",
      "Plot event: Human volcano accident",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38900",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "What traffic hazard does Frank roller-skate beneath on his uncontrolled journey outside the rink?",
    "answers": [
      "Moving lorries",
      "Railway barriers",
      "A parked aeroplane",
      "A canal bridge"
    ],
    "correctAnswer": "Moving lorries",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Father's Clinic",
      "Episode specific story",
      "Scene or character: Skating under lorries",
      "Answer fact: Moving lorries",
      "Plot event: Skating under lorries",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38901",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "What unfortunate coincidence occurs when a new doctor is called to help with Jessica's birth?",
    "answers": [
      "The doctor once failed Frank's driving test",
      "Frank had reversed into that doctor's car",
      "Frank had flooded his house",
      "The doctor had sacked Frank"
    ],
    "correctAnswer": "Frank had reversed into that doctor's car",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: The Baby Arrives",
      "Episode specific story",
      "Scene or character: Maternity doctor and car",
      "Answer fact: Frank had reversed into that doctor's car",
      "Plot event: Maternity doctor and car",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38902",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "What role does Frank attempt in the church nativity play?",
    "answers": [
      "A shepherd",
      "One of the three kings",
      "An angel",
      "An innkeeper"
    ],
    "correctAnswer": "An angel",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Jessica's First Christmas",
      "Episode specific story",
      "Scene or character: Nativity angel",
      "Answer fact: An angel",
      "Plot event: Nativity angel",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38903",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "How is Frank rescued after crashing through the church roof?",
    "answers": [
      "By a fire engine ladder",
      "By a crane",
      "By a cherry picker",
      "By helicopter"
    ],
    "correctAnswer": "By helicopter",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Jessica's First Christmas",
      "Episode specific story",
      "Scene or character: Church-roof rescue",
      "Answer fact: By helicopter",
      "Plot event: Church-roof rescue",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38904",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "Which festive job has Frank been dismissed from before his driving test exploits?",
    "answers": [
      "Christmas pixie",
      "Father Christmas",
      "Pantomime dame",
      "Christmas tree mascot"
    ],
    "correctAnswer": "Christmas pixie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Learning to Drive",
      "Episode specific story",
      "Scene or character: Festive employment",
      "Answer fact: Christmas pixie",
      "Plot event: Festive employment",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38905",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "What is the title of the BBC show that films Frank's disastrous attempts at DIY?",
    "answers": [
      "Tomorrow's World",
      "Man about the Home",
      "Blue Peter",
      "Pebble Mill at One"
    ],
    "correctAnswer": "Man about the Home",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Learning to Drive",
      "Episode specific story",
      "Scene or character: BBC DIY programme",
      "Answer fact: Man about the Home",
      "Plot event: BBC DIY programme",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38906",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "Where does Frank's driving test end in spectacular fashion?",
    "answers": [
      "In an empty swimming pool",
      "On a golf-course green",
      "Off the end of a pier into the sea",
      "In a railway tunnel"
    ],
    "correctAnswer": "Off the end of a pier into the sea",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Learning to Drive",
      "Episode specific story",
      "Scene or character: Driving off pier",
      "Answer fact: Off the end of a pier into the sea",
      "Plot event: Driving off pier",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38907",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "Into what sticky substance does Frank fall while moving to the Spencers' new home?",
    "answers": [
      "A vat of glue",
      "Wallpaper paste",
      "Motor oil",
      "A barrel of tar"
    ],
    "correctAnswer": "A barrel of tar",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Moving House",
      "Episode specific story",
      "Scene or character: Barrel of tar",
      "Answer fact: A barrel of tar",
      "Plot event: Barrel of tar",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38908",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "Which grumpy neighbour becomes a recurring problem after the Spencers move?",
    "answers": [
      "Mr Lewis",
      "Mr Webster",
      "Mr Faraday",
      "Mr Sprout"
    ],
    "correctAnswer": "Mr Lewis",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Moving House",
      "Episode specific story",
      "Scene or character: Bad-tempered neighbour",
      "Answer fact: Mr Lewis",
      "Plot event: Bad-tempered neighbour",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38909",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "What substance sticks Frank and several other people to a chair during woodwork classes?",
    "answers": [
      "Wet plaster",
      "Super glue",
      "Hot candle wax",
      "Wallpaper paste"
    ],
    "correctAnswer": "Super glue",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Wendy House",
      "Episode specific story",
      "Scene or character: Superglued chair",
      "Answer fact: Super glue",
      "Plot event: Superglued chair",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38910",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "What is the name of Frank's dog introduced in the third series?",
    "answers": [
      "Rover",
      "Bouncer",
      "Columbo",
      "Teddy"
    ],
    "correctAnswer": "Columbo",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Wendy House",
      "Episode specific story",
      "Scene or character: Frank's pet dog",
      "Answer fact: Columbo",
      "Plot event: Frank's pet dog",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38911",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "What does Frank's grandfather invite the Spencers to help him operate in Australia?",
    "answers": [
      "A hotel",
      "A theatre",
      "A toy shop",
      "A farm"
    ],
    "correctAnswer": "A farm",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Men as Women",
      "Episode specific story",
      "Scene or character: Grandfather's farm",
      "Answer fact: A farm",
      "Plot event: Grandfather's farm",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38912",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "What lessons is Frank taking while preparing for a possible move to Australia?",
    "answers": [
      "Elocution lessons",
      "Scuba-diving lessons",
      "Piano lessons",
      "Carpentry classes"
    ],
    "correctAnswer": "Elocution lessons",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Australia House",
      "Episode specific story",
      "Scene or character: Elocution for emigration",
      "Answer fact: Elocution lessons",
      "Plot event: Elocution for emigration",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38913",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "Which actor appears as another learner pilot alongside Frank in the last 1970s Christmas special?",
    "answers": [
      "David Jason",
      "Christopher Biggins",
      "John Cleese",
      "Bernard Cribbins"
    ],
    "correctAnswer": "Christopher Biggins",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Learning to Fly",
      "Episode specific story",
      "Scene or character: Guest learner pilot",
      "Answer fact: Christopher Biggins",
      "Plot event: Guest learner pilot",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38914",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "How does Frank travel to see his grown-up daughter compete in the Sport Relief sketch?",
    "answers": [
      "By boat and taxi",
      "By train and helicopter",
      "By bicycle and roller skates",
      "By scooter and ferry"
    ],
    "correctAnswer": "By bicycle and roller skates",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Frank Relief 2016",
      "Episode specific story",
      "Scene or character: Sport Relief journey",
      "Answer fact: By bicycle and roller skates",
      "Plot event: Sport Relief journey",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38915",
    "category": "Television",
    "programme": "Some Mothers Do 'Ave 'Em",
    "question": "Which former Beatle makes a cameo appearance as himself in the Sport Relief sketch?",
    "answers": [
      "Ringo Starr",
      "George Harrison",
      "John Lennon",
      "Paul McCartney"
    ],
    "correctAnswer": "Paul McCartney",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Physical Comedy",
      "Some Mothers Do 'Ave 'Em",
      "Programme: Some Mothers Do 'Ave 'Em",
      "BBC One",
      "Michael Crawford",
      "Episode or sketch: Frank Relief 2016",
      "Episode specific story",
      "Scene or character: Sport Relief guest musician",
      "Answer fact: Paul McCartney",
      "Plot event: Sport Relief guest musician",
      "Original live-action television",
      "1970s British Sitcom",
      "Source: https://en.wikipedia.org/wiki/Some_Mothers_Do_%27Ave_%27Em"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if (new Set(questions.map(q=>q.id)).size !== questions.length ||
 new Set(questions.map(q=>normalise(q.question))).size !== questions.length ||
 questions.some(q=>q.answers.length!==4 || new Set(q.answers.map(normalise)).size!==4 ||
 q.answers.filter(a=>a===q.correctAnswer).length!==1 ||q.tags.length<14 ||
 !q.tags.includes('Programme: '+q.programme) ||q.dailyEligible!==true))
 throw Error('Pack 354 narrative audit failed');
module.exports = questions;