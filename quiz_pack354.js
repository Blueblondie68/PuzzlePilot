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
What type of specialist does Frank visit in The Psychiatrist?|A psychiatrist|An orthodontist|A dermatologist|An audiologist|Easy|The Psychiatrist|Mental Health Consultation|Frank Self Doubt|First Series|Medical Appointment|1973 Episode|Unsuccessful Jobs
Which office does Frank repeatedly return to in The Employment Exchange?|The labour exchange|The passport office|The tax office|The local library|Hard|Employment Exchange|Labour Exchange|Unemployment|Job Hunting|Mr Bradshaw|First Series Finale|Frank Employment
During a picnic in Cliffhanger, what sort of landscape do Frank and Betty visit?|Clifftops|A desert dune|A forest clearing|A mountain glacier|Medium|Cliffhanger|Clifftop Picnic|Betty Spencer|Second Series|Outdoor Location|1973 Episode|Heights And Danger
Which former military organisation holds a reunion in a second-series episode?|The RAF|The Royal Navy|The Royal Marines|The Home Guard|Medium|RAF Reunion|Military Gathering|Frank Spencer Past|Second Series|1973 Episode|Ex Service Friends|Sleep Trouble
What kind of training does Frank undertake in The Public Relations Course?|Public relations|Firefighting|First aid|Bookkeeping|Medium|Public Relations Course|Training Session|Career Development|Second Series|1973 Episode|Adult Education|Frank Employment
What kind of act does Frank attempt with a puppet named Marvin?|Ventriloquism|Magic escapology|Mime|Shadow puppetry|Medium|Frank And Marvin|Ventriloquist Act|Marvin The Monkey|Showbusiness Ambition|Second Series|Stage Performance|Puppet Comedy
What physical activity causes problems in the episode Father's Clinic?|Roller skating|Ice hockey|Scuba diving|Horse riding|Medium|Fathers Clinic|Roller Skating|Expectant Father|Second Series|1973 Episode|Training Class|Physical Mishaps
In which episode is Frank and Betty's daughter born?|The Baby Arrives|The Hospital Visit|Moving House|Jessica's First Christmas|Medium|The Baby Arrives|Jessica Birth|Frank And Betty|Second Series Finale|New Parenthood|December 1973|Baby Delivery
In Jessica's First Christmas, which church event does Frank join?|A nativity play|A choir competition|A harvest auction|A bell-ringing contest|Medium|Jessicas First Christmas|Nativity Play|Church Production|1974 Special|Holiday Episode|Frank Performs|Christmas Celebration
Which vehicle skill does Frank try to learn in the 1975 Christmas special?|Driving a car|Sailing a yacht|Riding a motorcycle|Operating a forklift|Easy|Learning To Drive|1975 Christmas Special|Driving Lessons|Frank Motoring|Career Prospects|Driving Licence|Vehicle Comedy
Which vehicle does Frank attempt to control in the 1978 Christmas special Learning to Fly?|An aeroplane|A helicopter|A hot-air balloon|A glider|Easy|Learning To Fly|1978 Christmas Special|Aeroplane|Flying Lesson|Pilot Instructor|Frank In Cockpit|Aviation Chaos
What do Frank and Betty do in the first episode of the third series?|Move house|Open a restaurant|Travel to France|Buy a holiday caravan|Medium|Moving House|Third Series Opening|1978 Episode|Family Relocation|New Home|Household Change|Frank And Betty
What does Frank try to build for Jessica in the episode Wendy House?|A child's playhouse|A treehouse|A garden shed|A rabbit hutch|Easy|Wendy House|Jessicas Playhouse|Home DIY|Third Series|1978 Episode|Childrens Toy Building|Construction Mishap
Which traditional dance does Frank take part in during a third-series episode?|Scottish dancing|Flamenco|Irish step dancing|Ballet|Medium|Scottish Dancing|Exhibition|Frank Dance Routine|Third Series|1978 Episode|Social Dancing|Physical Comedy
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

module.exports = questions;