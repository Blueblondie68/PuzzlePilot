
  // quiz_pack363.js
  // PuzzlePilot — The Bigggggg Quiz
  // Television: George and Mildred (ITV) / The Green Green Grass (BBC One).
  // Both outstanding on the TV master spreadsheet through Pack 351.
  // Verified sources: British Comedy Guide cast, production and episode guides.
  // Seven question-specific tags per item, in addition to programme metadata.
  // Complete WordPad-ready CommonJS file. No external dependencies.

  const FIRST_ID = 17989;

  // Question | correct answer | three wrong answers | difficulty | seven bespoke tags
  const georgeFacts = `Who played George Roper in George and Mildred?|Brian Murphy|Norman Eshley|Roy Kinnear|Reginald Marsh|Easy|Brian Murphy|George Roper|Lead Actor|Husband Character|Thames Television|Main Cast|1970s Sitcom
  Who played Mildred Roper in George and Mildred?|Yootha Joyce|Sheila Fearn|Avril Elgar|Gretchen Franklin|Easy|Yootha Joyce|Mildred Roper|Lead Actress|George Wife|Main Cast|Middle Class Ambitions|1970s Comedy
  Which ITV sitcom did George and Mildred spin off from?|Man About the House|Robin's Nest|Please Sir!|The Lovers|Easy|Man About The House|Spin Off|George Roper|Mildred Roper|Original Characters|ITV Comedy History|Shared Universe
  Which production company made George and Mildred?|Thames Television|Yorkshire Television|Granada Television|London Weekend Television|Medium|Thames Television|ITV Production|Company Credits|Sitcom Studio|British Broadcasting|Seventies Programme|Production History
  Who jointly wrote George and Mildred?|Johnnie Mortimer and Brian Cooke|David Croft and Jimmy Perry|John Sullivan and Ray Butt|Richard Curtis and Ben Elton|Medium|Johnnie Mortimer|Brian Cooke|Writing Partnership|Programme Creators|Sitcom Screenplays|ITV Credits|Comedy Authors
  Who directed and produced the George and Mildred television series?|Peter Frazer-Jones|David Croft|Ray Butt|Tony Dow|Hard|Peter Frazer-Jones Credits|Series Director|Series Producer|Production Team|Thames Television|Camera Direction|Sitcom Credits
  In which year did George and Mildred begin on ITV?|1976|1973|1979|1982|Easy|1976 Premiere|6 September|First Broadcast|ITV Timeline|Series One|British Television|Sitcom Launch
  How many television series of George and Mildred were made?|Five|Three|Four|Six|Medium|Five Series|1976 To 1979|Original Run|Series Count|Thames Television|Programme History|ITV Scheduling
  How many episodes of George and Mildred aired across its five series?|38|24|30|42|Medium|Thirty Eight Episodes|Five Series|Episode Total|ITV Catalogue|Production Run|British Sitcom|Series History
  What is the surname of George and Mildred's snobbish next-door neighbours?|Fourmile|Pumphrey|Roper|Peacock|Easy|Fourmile Family|Next Door Neighbours|Jeffrey And Ann|Hampton Wick|Class Tensions|Recurring Characters|Suburban Setting
  Who portrayed neighbour Jeffrey Fourmile?|Norman Eshley|Brian Murphy|Roy Kinnear|Reginald Marsh|Medium|Norman Eshley|Jeffrey Fourmile|Estate Agent|Snobbish Neighbour|Actor Casting|Roper Rival|Main Ensemble
  Which actress played Ann Fourmile?|Sheila Fearn|Yootha Joyce|Avril Elgar|Gretchen Franklin|Medium|Sheila Fearn|Ann Fourmile|Jeffrey Wife|Mildred Friend|Actress Casting|Neighbour Family|Main Ensemble
  Who played Jeffrey and Ann's son Tristram?|Nicholas Bond-Owen|Simon Lloyd|Brian Murphy|Roy Kinnear|Medium|Nicholas Bond-Owen Casting|Tristram Fourmile|Child Actor|Fourmile Son|Actor Identification|Neighbour Family|Recurring Cast
  What is the first name of the Fourmiles' second child, born during the series?|Tarquin|Tristram|Humphrey|Jerry|Medium|Tarquin Fourmile|Second Son|Ann Gives Birth|Fourmile Children|Series Three|New Baby|Character Name
  What type of pet is Mildred's beloved Truffles?|A dog|A cat|A parrot|A rabbit|Easy|Truffles|Mildred Pet|Companion Animal|Dog Walking|Roper Household|Lost Pet Story|Family Animal
  Who played George's unreliable friend Jerry?|Roy Kinnear|Norman Eshley|Brian Murphy|Peter Vaughan|Medium|Roy Kinnear|Jerry|George Friend|Odd Jobs|Actor Casting|Recurring Guest|Comedy Complications
  What is the name of Mildred's socially competitive sister?|Ethel|Ann|Daphne|Rita|Easy|Ethel Pumphrey|Mildred Sister|Family Rivalry|Wealthier Relative|Recurring Visitor|Social Snobbery|Roper Family
  Which programme did George and Mildred move to the suburbs from?|Man About the House|The Fenn Street Gang|Robin's Nest|On the Buses|Medium|Man About The House|Ropers Previous Home|South Kensington|Spin Off Continuity|Moving On|1976 Television|Programme Connection
  To which London suburb do the Ropers move in the first episode?|Hampton Wick|Hammersmith|Peckham|Tooting|Easy|Hampton Wick|New Neighbourhood|First Episode|Suburban Relocation|Roper Home|London Geography|Moving On
  What is the address of the Ropers' new house?|46 Peacock Crescent|12 Coronation Street|14 Nelson Mandela House|23 Acacia Avenue|Hard|46 Peacock Crescent|New House Address|Hampton Wick|Moving On|Roper Residence|Series Setting|Property Purchase
  Why must the Ropers leave their old home in Moving On?|It is due for demolition|It has been destroyed by fire|The landlord is emigrating|George has been promoted|Medium|Moving On|Demolition Order|Compulsory Relocation|George And Mildred|New House Search|Series Premiere|1976 Story
  What goes wrong when the Ropers first settle into their new house in The Bad Penny?|They lock themselves out|Their roof collapses|They lose their furniture in transit|Their boiler bursts|Easy|The Bad Penny|Locked Out|Ropers Move|Fourmile Dinner Guest|Series One|Neighbour Encounter|1976 Episode
  Who is offered a job when George attends an interview in ...And Women Must Weep?|Mildred|George|Jeffrey|Jerry|Medium|And Women Must Weep|Job Interview|Mildred Roper|Jeffrey Business|Household Role Swap|Series One|Labour Exchange
  What does Mildred investigate in the episode Baby Talk?|Adopting a child|Starting a nursery|Becoming a school governor|Training as a midwife|Easy|Baby Talk|Child Adoption|Mildred Motherhood|Roper Marriage|Series One|Family Plans|1976 Story
  What purchase does George make in Where My Caravan Has Rested?|A caravan|A motorboat|A second television|A racing bicycle|Medium|Where My Caravan Has Rested|Caravan Purchase|George Roper|Old Car Trade|Residents Association|Series One|1976 Episode
  What does George lose while walking in The Little Dog Laughed?|Truffles|His wallet|His watch|The Fourmiles' child|Easy|Little Dog Laughed|Truffles Missing|Dog Walk|George Roper|Mildred Anger|Series One|Park Visit
  What injury does George sustain in Best Foot Forward?|A broken leg|A broken wrist|A dislocated shoulder|A sprained ankle|Medium|Best Foot Forward|Broken Leg|Jeffrey Fourmile|Ladder Accident|Series One|Neighbour Dispute|1976 Episode
  What is George hoping to use next door when his own breaks in My Husband Next Door?|The television|The washing machine|The telephone|The cooker|Medium|My Husband Next Door|Broken Television|Fourmiles On Holiday|House Key|George Roper|Series One|Home Entertainment
  Which family member comes to stay in Family Planning?|Mildred's mother|George's brother|Ann's aunt|Jeffrey's father|Medium|Family Planning|Mildred Mother|Older Relative|House Guest|Family Meeting|Series One Finale|1976 Episode
  What is the name of George's budgerigar that dies in Jumble Pie?|Oscar|Truffles|Moby|Rocky|Medium|Jumble Pie|Oscar Budgie|Pet Death|George Roper|Series Two Premiere|Jumble Sale|1977 Episode
  What gift does George buy Mildred for their anniversary in All Around The Clock?|A carriage clock|A pearl necklace|A weekend break|A silver teapot|Medium|All Around The Clock|Carriage Clock|Wedding Anniversary|George And Mildred|Series Two|1977 Episode|Anniversary Gift
  What does George advertise for in The Travelling Man?|A lodger|A housekeeper|A gardener|A chauffeur|Medium|Travelling Man|Lodger Advert|Spare Room|Roper Home|Series Two|Male Applicant|1977 Episode
  What bill has George failed to pay when Ethel visits in The Unkindest Cut Of All?|The electricity bill|The water bill|The council tax|The telephone bill|Medium|Unkindest Cut Of All|Electricity Bill|Ethel Visit|Dinner Party|George Forgetfulness|Series Two|1977 Episode
  Which Spanish island is the bargain destination in The Right Way To Travel?|Majorca|Ibiza|Tenerife|Menorca|Medium|Right Way To Travel|Majorca|Package Holiday|Conservative Party|Mildred Trip|Series Two|1977 Story
  In The Dorothy Letters, what does Mildred discover among George's possessions?|Love letters addressed to Dorothy|A secret bank account|A theatre contract|A forged passport|Medium|Dorothy Letters|Love Letters|Dorothy|Mildred Suspicions|George Possessions|Series Two|Marriage Anxiety
  Which pantomime role does Mildred take in the 1977 Christmas special?|One of Cinderella's ugly sisters|The Fairy Godmother|The Snow Queen|Mother Goose|Medium|No Business Like Show Business|Ugly Sister|Cinderella Pantomime|Hampton Wick Players|1977 Christmas|Mildred Acting|Stage Role
  Who offers George a business proposition in Opportunity Knocks?|Jerry|Jeffrey|Humphrey|Tristram|Medium|Opportunity Knocks|Jerry Proposal|George Roper|Business Scheme|Series Three Premiere|1978 Story|Old Friend
  What furniture gives way in And So To Bed?|The marital bed|The dining table|The living-room sofa|The wardrobe|Easy|And So To Bed|Broken Bed|Roper Bedroom|Household Repair|Series Three|1978 Episode|Old Furniture
  What unusual vehicle does George use when Ann goes into labour in The Delivery Man?|A motorbike and sidecar|A taxi cab|A farm tractor|A horse-drawn carriage|Medium|The Delivery Man|Motorcycle Sidecar|Ann Fourmile|Labour|George Helps|Series Three|1978 Episode
  What does Mildred ask to have installed after using the Fourmiles' bathroom in You Must Have Showers?|A shower|A sauna|A jacuzzi|An extra sink|Medium|You Must Have Showers|Bathroom Improvement|Mildred Roper|Fourmile Bathroom|Jerry Fitting|Series Four|1978 Episode
  Which neighbour's baby do the Ropers babysit in Nappy Days?|Tarquin Fourmile|Tristram Fourmile|Ethel's grandson|Jerry's nephew|Medium|Nappy Days|Tarquin Fourmile|Babysitting|George And Mildred|Series Four|1978 Episode|Baby Care
  What does George find that causes trouble in Finders Keepers?|A lost credit card|A purse full of coins|A lottery ticket|A diamond necklace|Medium|Finders Keepers|Lost Credit Card|George Roper|Potential Reward|Series Five Premiere|1979 Story|Found Property
  Which country does Mildred consider emigrating to in The Last Straw?|Australia|Canada|New Zealand|South Africa|Medium|The Last Straw|Australia|Mildred Emigration|Jeffrey Fourmile|Series Five|1979 Episode|Fresh Start
  Which pet does Mildred accidentally dispose of in Fishy Business?|George's goldfish Moby|Truffles the dog|Oscar the budgie|Jeffrey's canary|Medium|Fishy Business|Moby Goldfish|Mildred Accident|George Pet|Homing Pigeons|Series Five|1979 Story
  What milestone does George and Mildred's 1980 film centre on?|Their 27th wedding anniversary|Their first honeymoon|The sale of their house|Their son's wedding|Hard|1980 Film|Twenty Seventh Anniversary|London Hotel|Cinema Adaptation|George Roper|Mildred Roper|Big Screen Story`;

  const grassFacts = `Who played Boycie in The Green Green Grass?|John Challis|David Ross|Ivan Kaye|Alan David|Easy|John Challis|Boycie|Lead Actor|Herman Aubrey Boyce|BBC Cast|Spin Off Character|Shropshire Farmer
  Which actress played Boycie's wife Marlene?|Sue Holderness|Ella Kenion|Lisa Diveney|Samantha Sutherland|Easy|Sue Holderness|Marlene Boyce|Lead Actress|Boycie Wife|Original Character|BBC Casting|Farm Family
  Who played Boycie and Marlene's son Tyler?|Jack Doolan|David Ross|Peter Heppelthwaite|Nigel Harrison|Medium|Jack Doolan|Tyler Boyce|Boyce Son|Main Cast|Actor Casting|Young Character|Family Relocation
  Which famous sitcom did The Green Green Grass spin off from?|Only Fools and Horses|The Vicar of Dibley|Open All Hours|Keeping Up Appearances|Easy|Only Fools And Horses|Spin Off Series|Boycie And Marlene|Peckham Connections|John Sullivan|BBC Comedy|Television Franchise
  Who created The Green Green Grass?|John Sullivan|Roy Clarke|Eric Chappell|Richard Curtis|Easy|John Sullivan|Programme Creator|Only Fools And Horses|BBC Scripts|Spin Off Writer|Television Producer|Comedy Credits
  Which channel originally showed The Green Green Grass?|BBC One|BBC Two|ITV|Channel 4|Easy|BBC One|Original Broadcaster|Programme Launch|2005 Debut|Channel Identity|UK Sitcom|BBC Network
  In which year did The Green Green Grass first air?|2005|2001|2007|2010|Easy|2005 Premiere|9 September|Series One|Broadcast Timeline|BBC Comedy|First Transmission|Programme Debut
  How many television series of The Green Green Grass were made?|Four|Two|Three|Five|Medium|Four Series|2005 To 2009|Programme Run|Series Count|BBC Comedy|Production History|Final Series
  How many television episodes of The Green Green Grass were broadcast, including specials?|32|24|28|38|Medium|Thirty Two Episodes|Four Series|Christmas Specials|BBC Programme Catalogue|Episode Total|Original Run|2005 To 2009
  What is Boycie's full given name in The Green Green Grass?|Herman Aubrey Boyce|Harold Arthur Boyce|Henry Albert Boyce|Hector Andrew Boyce|Hard|Herman Aubrey Boyce|Boycie Real Name|Character Identity|John Challis|Boyce Family|Full Name|Peckham Past
  What kind of business did Boycie run before leaving Peckham?|A second-hand car dealership|A pub|A betting shop|A butcher's shop|Easy|Second Hand Cars|Peckham Business|Boycie|Former Dealer|Only Fools Connection|London Life|Trade History
  Which county do Boycie and his family move to?|Shropshire|Kent|Norfolk|Somerset|Easy|Shropshire|Country Relocation|Winterdown Farm|Boyce Family|Rural Setting|English County|Series Premise
  What is the name of Boycie's new farming property?|Winterdown Farm|Home Farm|Butler's Farm|Folly Farm|Medium|Winterdown Farm|Boyce Property|Shropshire|Farmhouse|Rural Business|Series Setting|Land Ownership
  Which feared brothers make Boycie decide to leave London?|The Driscoll Brothers|The Kray Brothers|The Mitchell Brothers|The Trotter Brothers|Easy|Driscoll Brothers|Boycie Fear|Prison Release|Peckham Criminals|Escape To Country|Keep On Running|Series Premise
  Who plays farm manager Elgin Sparrowhawk?|David Ross|Ivan Kaye|Peter Heppelthwaite|Alan David|Medium|David Ross|Elgin Sparrowhawk|Farm Manager|Actor Character|Winterdown Staff|BBC Cast|Rural Work
  Which actor plays the farmhand Bryan?|Ivan Kaye|David Ross|Alan David|Jack Doolan|Medium|Ivan Kaye|Bryan|Farmhand|Actor Casting|Winterdown Farm|Rural Employee|Regular Character
  Who portrays farm worker Jed?|Peter Heppelthwaite|David Ross|Ivan Kaye|Nigel Harrison|Medium|Peter Heppelthwaite|Jed|Farmhand|Supporting Actor|Winterdown Team|Farm Labour|Regular Cast
  Which actress plays housekeeper Mrs Cakeworthy?|Ella Kenion|Sue Holderness|Lisa Diveney|Samantha Sutherland|Medium|Ella Kenion|Imelda Cakeworthy|Housekeeper|Actress Casting|Farm Household|Staff Member|BBC Ensemble
  Who played the neighbouring farmer Llewellyn?|Alan David|David Ross|Ivan Kaye|Peter Heppelthwaite|Medium|Alan David|Llewellyn|Rival Farmer|Actor Casting|Neighbouring Property|Farming Competition|Recurring Character
  Who played Tyler's girlfriend Beth in the first three series?|Lisa Diveney|Ella Kenion|Samantha Sutherland|Sue Holderness|Medium|Lisa Diveney|Beth|Tyler Girlfriend|Young Cast|Series One To Three|Actor Casting|Romance Storyline
  In Keep On Running, what news prompts Boycie to flee Peckham?|The Driscoll Brothers are leaving prison early|The council is taking his house|Marlene has inherited a farm|His car business is bankrupt|Easy|Keep On Running|Driscoll Prison Release|Boycie Panic|Peckham Exit|Shropshire Move|Series Premiere|2005 Episode
  Which farm animal does Boycie buy early in A Rocky Start?|A bull|A sheepdog|A racehorse|A flock of geese|Medium|A Rocky Start|Bull Purchase|Elgin Sparrowhawk|Farm Start Up|Boycie New Life|Series One|Agricultural Investment
  What is the name of Boycie's troublesome breeding bull?|Rocky|Earl|Oscar|Truffles|Medium|Rocky Bull|Winterdown Livestock|Farm Breeding|Boycie Investment|Animal Character|Series One|Rural Comedy
  How many cows do the farmhands bring home in Hay Fever, despite Marlene's limit of six?|300|30|60|600|Medium|Hay Fever|Three Hundred Cows|Marlene Limit|Elgin Bryan Jed|Livestock Purchase|Series One|Farm Accounts
  In Hay Fever, which school-related challenge does Tyler face?|An entrance examination|A school football final|A music scholarship audition|A parents' evening|Medium|Hay Fever|Tyler Boyce|Private School Exam|New School|Series One|2005 Plot|Education
  What is added to Boycie's coffee by Marlene in Sex And The Country?|A bull's virility potion|A sleeping draught|A herbal weight-loss powder|A cough mixture|Medium|Sex And The Country|Virility Potion|Marlene Boyce|Boycie Coffee|Rocky Bull|Series One|Farm Medicine
  Where are Boycie and Marlene invited to spend Christmas in the 2005 special?|Switzerland|Scotland|Ireland|Austria|Medium|One Flew Over The Cuckoo Clock|Switzerland Trip|2005 Christmas Special|Agricultural Ball|High Society|Boyce Couple|Holiday Invitation
  In Testing Times, what alarming change happens to Boycie?|He loses his hair|He loses his voice|He develops a limp|He goes temporarily blind|Medium|Testing Times|Boycie Hair Loss|EU Inspection|Farm Chemicals|Series Two Premiere|2006 Episode|Comic Health Worry
  In Here's To You Mrs Boyce, what new ambition does Boycie consider?|Entering local politics|Becoming an actor|Running a radio station|Opening a hotel|Medium|Heres To You Mrs Boyce|Political Ambition|Boycie Plans|Local Community|Series Two|2006 Plot|Public Office
  Which employee is first dismissed in Bothered And Bewildered?|Mrs Cakeworthy|Elgin|Bryan|Jed|Medium|Bothered And Bewildered|Imelda Cakeworthy|Boycie Threat|Farm Staff|Dismissal|Series Two|2006 Episode
  Which school visitor arrives in Schoolboy French?|A French exchange student|A German music teacher|An Italian football coach|An Irish headteacher|Medium|Schoolboy French|French Exchange Student|Tyler Boyce|House Guest|Series Two|2006 Story|International School Link
  What competition does Llewellyn challenge Boycie to in More Questions Than Answers?|A pub quiz|A ploughing match|A livestock auction|A darts tournament|Medium|More Questions Than Answers|Pub Quiz|Llewellyn|Boycie Rivalry|Five Thousand Pounds|Series Two|2006 Episode
  In From Here To Paternity, what do the farmhands suspect is stalking the farm?|A mythical creature|A poacher's dog|A runaway bull|A travelling circus bear|Medium|From Here To Paternity|Strange Creature|Elgin Jed Bryan|Farm Mystery|Christmas Special|2006 Episode|Winterdown Stories
  In But Is It Art, who are offered a place to stay after a housing crisis?|Bryan and Elgin|Boycie and Tyler|Llewellyn and Beth|Jed and Mrs Cakeworthy|Medium|But Is It Art|Bryan|Elgin|Housing Crisis|Boyce Hospitality|Series Three Premiere|2007 Episode
  Whose mother Dora does the Boyce family visit in The Lonely Herdsman?|Marlene's|Boycie's|Tyler's girlfriend's|Elgin's|Medium|Lonely Herdsman|Dora|Marlene Mother|Boyce Family Visit|Series Three|2007 Episode|Older Relative
  Which animal goes missing alongside Tyler in If You Go Down To The Woods?|Earl the dog|Rocky the bull|A pet rabbit|A farm goat|Medium|If You Go Down To The Woods|Earl Dog|Tyler Missing|Search Party|Haunted Woods|Series Three|2007 Plot
  In Fifteen Minutes, what opportunity tempts the farm staff?|Auditioning for a reality TV programme|Joining a circus|Playing in a rock festival|Entering a cooking contest|Medium|Fifteen Minutes|Reality TV Auditions|Winterdown Staff|Fame Temptation|Series Three|2007 Episode|Television Competition
  What hidden subject does Boycie investigate in The Final Curtain?|His family tree|The farm's water supply|A bank robbery|Marlene's passport|Medium|The Final Curtain|Family Tree|Boycie Ancestry|Tyler Returns|Series Three|2007 Story|Family History
  Which member of the Boyce family seeks marriage counselling in The Path Of True Love?|Marlene|Tyler|Boycie's brother|Dora|Medium|Path Of True Love|Marlene Boyce|Marriage Guidance|Boycie Separation|Series Four Premiere|2009 Episode|Relationship Strain
  What does Boycie discover in old papers and begin producing in Home Brew?|A local alcoholic drink|A new cattle vaccine|A patent for a plough|A brand of cheese|Medium|Home Brew|Medieval Liquor Recipe|Boycie|Farm Enterprise|Old Squire Papers|Series Four|2009 Episode
  Which honour does Boycie dream of receiving in Calendar Boys?|A knighthood|An OBE for acting|A sporting medal|A university doctorate|Hard|Calendar Boys|Sir Aubrey|Boycie Knighthood|Charity Work|Marlene Contacts|Series Four|2009 Ambition
  What is the name of Tyler's band in Animal Instincts?|Puddle of Agony|The Bongo Brothers|Crème Brûlée|Kraftwork Orange|Medium|Animal Instincts|Puddle Of Agony|Tyler Boyce|Music Equipment|Boycie Refuses Loan|Series Four|2009 Episode
  What television antiques programme visits Ludlow in One Man's Junk?|Antiques Roadshow|Bargain Hunt|Cash in the Attic|Flog It!|Easy|One Mans Junk|Antiques Roadshow|Ludlow|Valuation Event|Marlene House Makeover|Series Four|2009 Story
  What anniversary are Boycie and Marlene celebrating in the final episode For Richer For Poorer?|Their ruby wedding anniversary|Their silver wedding anniversary|Their golden wedding anniversary|Their tenth anniversary|Medium|For Richer For Poorer|Ruby Wedding|Forty Years Married|Boycie And Marlene|Series Finale|2009 Ending|Party Plans`;

  const normalise = value => value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
  const questions = [];

  function addProgramme(programme, programmeTags, text) {
    for (const line of text.trim().split('\n')) {
      const id = 'tv_' + String(FIRST_ID + questions.length).padStart(5, '0');
      const parts = line.trim().split('|').map(value => value.trim());
      if (parts.length !== 13) throw new Error('Pack 363: wrong field count for ' + id + ': ' + parts.length);
      const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
      if ([question, correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(value => !value)) {
        throw new Error('Pack 363: blank content for ' + id);
      }
      if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.length !== 7 ||
          new Set(specificTags.map(normalise)).size !== 7) {
        throw new Error('Pack 363: invalid difficulty or bespoke tags for ' + id);
      }
      const answers = [wrong1, wrong2, wrong3];
      if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4) {
        throw new Error('Pack 363: duplicate answers for ' + id);
      }
      answers.splice(questions.length % 4, 0, correctAnswer);
      const tags = [...new Map([
        'Television', 'British Television', 'Comedy', 'Sitcom',
        ...programmeTags, programme, 'Programme: ' + programme,
        correctAnswer, ...specificTags
      ].map(tag => [normalise(tag), tag])).values()];
      questions.push({
        id, category: 'Television', programme, question, answers,
        correctAnswer, difficulty, tags, dailyEligible: true
      });
    }
  }

  addProgramme('George and Mildred', ['ITV', 'Thames Television', '1976-1979', 'Suburban Comedy'], georgeFacts);
  addProgramme('The Green Green Grass', ['BBC One', '2005-2009', 'John Sullivan', 'Country Comedy', 'Shropshire'], grassFacts);

  // Validate exported objects, not merely the template text.
  if (!questions.length || questions[0].id !== 'tv_17989' ||
      new Set(questions.map(q => q.id)).size !== questions.length ||
      new Set(questions.map(q => normalise(q.question))).size !== questions.length ||
      questions.some((q, i) =>
        q.id !== 'tv_' + String(FIRST_ID + i).padStart(5, '0') ||
        q.category !== 'Television' || !q.programme ||
        !Array.isArray(q.answers) || q.answers.length !== 4 ||
        !q.answers.includes(q.correctAnswer) ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        !Array.isArray(q.tags) || q.tags.length < 14 ||
        new Set(q.tags.map(normalise)).size !== q.tags.length ||
        !q.tags.includes('Programme: ' + q.programme) ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) || q.dailyEligible !== true)) {
    throw new Error('Pack 363: exported question validation failed');
  }

  
// Pack 363 storyline audit, 22 November 2026: retain 89 original IDs and questions.
// Episode references: https://www.comedy.co.uk/tv/george_and_mildred/episodes/all/
// Episode references: https://www.comedy.co.uk/tv/the_green_green_grass/episodes/all/
const auditAdditions = [
  {
    "id": "tv_39312",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred, what is Jeffrey Fourmile's profession when he encounters the Ropers' search for a new home?",
    "answers": [
      "Solicitor",
      "Estate agent",
      "Bank manager",
      "School headteacher"
    ],
    "correctAnswer": "Estate agent",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S1E01 Moving On",
      "Series: S1",
      "Story event: Jeffrey Fourmile The Estate Agent",
      "Answer fact: Estate agent",
      "Character context: Jeffrey Fourmile The Estate Agent",
      "Plot detail: Jeffrey Fourmile The Estate Agent",
      "1970s ITV sitcom",
      "TV source episode: S1E01 Moving On",
      "Question topic: Jeffrey Fourmile The Estate Agent"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39313",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's The Bad Penny, what kind of political figure is the Fourmiles' important dinner guest?",
    "answers": [
      "A Labour cabinet minister",
      "An independent mayor",
      "A Conservative MP",
      "A Liberal Party councillor"
    ],
    "correctAnswer": "A Conservative MP",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S1E02 The Bad Penny",
      "Series: S1",
      "Story event: Conservative Member Of Parliament Dinner",
      "Answer fact: A Conservative MP",
      "Character context: Conservative Member Of Parliament Dinner",
      "Plot detail: Conservative Member Of Parliament Dinner",
      "1970s ITV sitcom",
      "TV source episode: S1E02 The Bad Penny",
      "Question topic: Conservative Member Of Parliament Dinner"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39314",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred, what domestic role does George reluctantly take on after Mildred gets a job?",
    "answers": [
      "Professional gardener",
      "Carer for a neighbour",
      "School caretaker",
      "Househusband"
    ],
    "correctAnswer": "Househusband",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S1E03 And Women Must Weep",
      "Series: S1",
      "Story event: George Becomes Househusband",
      "Answer fact: Househusband",
      "Character context: George Becomes Househusband",
      "Plot detail: George Becomes Househusband",
      "1970s ITV sitcom",
      "TV source episode: S1E03 And Women Must Weep",
      "Question topic: George Becomes Househusband"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39315",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's Baby Talk, what personal detail is Mildred reluctant to write on the adoption papers?",
    "answers": [
      "Her true age",
      "Her maiden name",
      "Her birthplace",
      "Her first job"
    ],
    "correctAnswer": "Her true age",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S1E04 Baby Talk",
      "Series: S1",
      "Story event: Mildred Conceals Age On Adoption Application",
      "Answer fact: Her true age",
      "Character context: Mildred Conceals Age On Adoption Application",
      "Plot detail: Mildred Conceals Age On Adoption Application",
      "1970s ITV sitcom",
      "TV source episode: S1E04 Baby Talk",
      "Question topic: Mildred Conceals Age On Adoption Application"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39316",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's Your Money Or Your Life, which financial arrangement makes George worry that his death might benefit Mildred?",
    "answers": [
      "A mortgage transfer",
      "Life insurance",
      "A lottery syndicate",
      "A pension annuity"
    ],
    "correctAnswer": "Life insurance",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S1E05 Your Money Or Your Life",
      "Series: S1",
      "Story event: George Life Insurance Fear",
      "Answer fact: Life insurance",
      "Character context: George Life Insurance Fear",
      "Plot detail: George Life Insurance Fear",
      "1970s ITV sitcom",
      "TV source episode: S1E05 Your Money Or Your Life",
      "Question topic: George Life Insurance Fear"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39317",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred, which local organisation joins Jeffrey in offering to buy George's unwanted caravan?",
    "answers": [
      "The Chamber of Commerce",
      "The Parent Teacher Association",
      "The Residents' Association",
      "The Rotary Club"
    ],
    "correctAnswer": "The Residents' Association",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S1E06 Where My Caravan Has Rested",
      "Series: S1",
      "Story event: Residents Association Caravan Offer",
      "Answer fact: The Residents' Association",
      "Character context: Residents Association Caravan Offer",
      "Plot detail: Residents Association Caravan Offer",
      "1970s ITV sitcom",
      "TV source episode: S1E06 Where My Caravan Has Rested",
      "Question topic: Residents Association Caravan Offer"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39318",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred, what desperate alternative does George consider after misplacing Truffles on a walk?",
    "answers": [
      "Buying a new kennel",
      "Moving to another house",
      "Claiming the dog has gone on holiday",
      "Finding a replacement dog"
    ],
    "correctAnswer": "Finding a replacement dog",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S1E07 The Little Dog Laughed",
      "Series: S1",
      "Story event: George Searches For Replacement Truffles",
      "Answer fact: Finding a replacement dog",
      "Character context: George Searches For Replacement Truffles",
      "Plot detail: George Searches For Replacement Truffles",
      "1970s ITV sitcom",
      "TV source episode: S1E07 The Little Dog Laughed",
      "Question topic: George Searches For Replacement Truffles"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39319",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's Best Foot Forward, what did Jeffrey move that caused George's fall and broken leg?",
    "answers": [
      "A ladder",
      "A garden bench",
      "A roof tile",
      "A stepladder hinge"
    ],
    "correctAnswer": "A ladder",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S1E08 Best Foot Forward",
      "Series: S1",
      "Story event: Jeffrey Moves Ladder",
      "Answer fact: A ladder",
      "Character context: Jeffrey Moves Ladder",
      "Plot detail: Jeffrey Moves Ladder",
      "1970s ITV sitcom",
      "TV source episode: S1E08 Best Foot Forward",
      "Question topic: Jeffrey Moves Ladder"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39320",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred, what embarrassing damage do decorators accidentally inflict while the Fourmiles are away?",
    "answers": [
      "They smash the Fourmiles' conservatory",
      "They strip the Fourmiles' wallpaper",
      "They flood the Fourmiles' cellar",
      "They repaint the wrong car"
    ],
    "correctAnswer": "They strip the Fourmiles' wallpaper",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S1E09 My Husband Next Door",
      "Series: S1",
      "Story event: Decorators Ruin Fourmiles Wallpaper",
      "Answer fact: They strip the Fourmiles' wallpaper",
      "Character context: Decorators Ruin Fourmiles Wallpaper",
      "Plot detail: Decorators Ruin Fourmiles Wallpaper",
      "1970s ITV sitcom",
      "TV source episode: S1E09 My Husband Next Door",
      "Question topic: Decorators Ruin Fourmiles Wallpaper"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39321",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's Family Planning, what future arrangement does Mildred call a family meeting to discuss?",
    "answers": [
      "A wedding reception",
      "A shared family business",
      "Care for her ageing mother",
      "Their holiday accommodation"
    ],
    "correctAnswer": "Care for her ageing mother",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S1E10 Family Planning",
      "Series: S1",
      "Story event: Family Meeting About Mildreds Mother",
      "Answer fact: Care for her ageing mother",
      "Character context: Family Meeting About Mildreds Mother",
      "Plot detail: Family Meeting About Mildreds Mother",
      "1970s ITV sitcom",
      "TV source episode: S1E10 Family Planning",
      "Question topic: Family Meeting About Mildreds Mother"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39322",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred, what event is Mildred collecting unwanted household possessions for in Jumble Pie?",
    "answers": [
      "A school auction",
      "A car boot sale",
      "A charity raffle",
      "A church jumble sale"
    ],
    "correctAnswer": "A church jumble sale",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S2E01 Jumble Pie",
      "Series: S2",
      "Story event: Vicar Church Jumble Sale",
      "Answer fact: A church jumble sale",
      "Character context: Vicar Church Jumble Sale",
      "Plot detail: Vicar Church Jumble Sale",
      "1970s ITV sitcom",
      "TV source episode: S2E01 Jumble Pie",
      "Question topic: Vicar Church Jumble Sale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39323",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred, what happens to the Fourmiles' house during their winter break in All Around The Clock?",
    "answers": [
      "It is burgled",
      "It is flooded",
      "It catches fire",
      "It is sold by mistake"
    ],
    "correctAnswer": "It is burgled",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S2E02 All Around The Clock",
      "Series: S2",
      "Story event: Fourmiles Burglary During Holiday",
      "Answer fact: It is burgled",
      "Character context: Fourmiles Burglary During Holiday",
      "Plot detail: Fourmiles Burglary During Holiday",
      "1970s ITV sitcom",
      "TV source episode: S2E02 All Around The Clock",
      "Question topic: Fourmiles Burglary During Holiday"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39324",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's The Travelling Man, why does Mildred soften her opposition to taking in a lodger?",
    "answers": [
      "The rent is doubled",
      "She likes the male applicant",
      "Her sister recommends him",
      "George promises to move out"
    ],
    "correctAnswer": "She likes the male applicant",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S2E03 The Travelling Man",
      "Series: S2",
      "Story event: Mildred Fancies Male Lodger Applicant",
      "Answer fact: She likes the male applicant",
      "Character context: Mildred Fancies Male Lodger Applicant",
      "Plot detail: Mildred Fancies Male Lodger Applicant",
      "1970s ITV sitcom",
      "TV source episode: S2E03 The Travelling Man",
      "Question topic: Mildred Fancies Male Lodger Applicant"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39325",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "Who accompanies Mildred's sister Ethel to dinner in George and Mildred's The Unkindest Cut Of All?",
    "answers": [
      "Her brother Charlie",
      "Her son Tristram",
      "Her husband Humphrey",
      "Her friend Jerry"
    ],
    "correctAnswer": "Her husband Humphrey",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S2E04 The Unkindest Cut Of All",
      "Series: S2",
      "Story event: Ethel Arrives With Humphrey",
      "Answer fact: Her husband Humphrey",
      "Character context: Ethel Arrives With Humphrey",
      "Plot detail: Ethel Arrives With Humphrey",
      "1970s ITV sitcom",
      "TV source episode: S2E04 The Unkindest Cut Of All",
      "Question topic: Ethel Arrives With Humphrey"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39326",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred, membership of which political party is required for the cheap Majorca holiday in The Right Way To Travel?",
    "answers": [
      "Labour Party",
      "Liberal Party",
      "Scottish National Party",
      "Conservative Party"
    ],
    "correctAnswer": "Conservative Party",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S2E05 The Right Way To Travel",
      "Series: S2",
      "Story event: Conservative Members Package Holiday",
      "Answer fact: Conservative Party",
      "Character context: Conservative Members Package Holiday",
      "Plot detail: Conservative Members Package Holiday",
      "1970s ITV sitcom",
      "TV source episode: S2E05 The Right Way To Travel",
      "Question topic: Conservative Members Package Holiday"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39327",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred, how recent is the newest letter to Dorothy that makes Mildred suspect George of an affair?",
    "answers": [
      "Four months old",
      "Four years old",
      "One week old",
      "Ten years old"
    ],
    "correctAnswer": "Four months old",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S2E06 The Dorothy Letters",
      "Series: S2",
      "Story event: Recent Dorothy Letter Four Months",
      "Answer fact: Four months old",
      "Character context: Recent Dorothy Letter Four Months",
      "Plot detail: Recent Dorothy Letter Four Months",
      "1970s ITV sitcom",
      "TV source episode: S2E06 The Dorothy Letters",
      "Question topic: Recent Dorothy Letter Four Months"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39328",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's 1977 Christmas special, which amateur theatre group casts Mildred in Cinderella?",
    "answers": [
      "Tooting Theatre Club",
      "Hampton Wick Players",
      "Peacock Crescent Players",
      "Kingston Light Opera"
    ],
    "correctAnswer": "Hampton Wick Players",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: 1977 Christmas No Business Like Show Business",
      "Series: Christmas Special",
      "Story event: Hampton Wick Players Pantomime",
      "Answer fact: Hampton Wick Players",
      "Character context: Hampton Wick Players Pantomime",
      "Plot detail: Hampton Wick Players Pantomime",
      "1970s ITV sitcom",
      "TV source episode: 1977 Christmas No Business Like Show Business",
      "Question topic: Hampton Wick Players Pantomime"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39329",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's And So To Bed, what prevents George from easily arranging another bed on credit?",
    "answers": [
      "He has lost his bank card",
      "He has already ordered a new sofa",
      "He is on a hire-purchase blacklist",
      "The furniture shop has closed"
    ],
    "correctAnswer": "He is on a hire-purchase blacklist",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S3E02 And So To Bed",
      "Series: S3",
      "Story event: George Hire Purchase Credit Blacklist",
      "Answer fact: He is on a hire-purchase blacklist",
      "Character context: George Hire Purchase Credit Blacklist",
      "Plot detail: George Hire Purchase Credit Blacklist",
      "1970s ITV sitcom",
      "TV source episode: S3E02 And So To Bed",
      "Question topic: George Hire Purchase Credit Blacklist"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39330",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's I Believe In Yesterday, a letter arrives from a former acquaintance who served in which country's military?",
    "answers": [
      "Canada",
      "Australia",
      "France",
      "United States"
    ],
    "correctAnswer": "United States",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S3E03 I Believe In Yesterday",
      "Series: S3",
      "Story event: Former American Serviceman Letter",
      "Answer fact: United States",
      "Character context: Former American Serviceman Letter",
      "Plot detail: Former American Serviceman Letter",
      "1970s ITV sitcom",
      "TV source episode: S3E03 I Believe In Yesterday",
      "Question topic: Former American Serviceman Letter"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39331",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred, which relation offers George a job then unexpectedly withdraws it in The Four Letter Word?",
    "answers": [
      "Ethel's husband Humphrey",
      "Jeffrey Fourmile",
      "Mildred's mother",
      "George's father"
    ],
    "correctAnswer": "Ethel's husband Humphrey",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S3E04 The Four Letter Word",
      "Series: S3",
      "Story event: Humphrey Withdraws Job Offer",
      "Answer fact: Ethel's husband Humphrey",
      "Character context: Humphrey Withdraws Job Offer",
      "Plot detail: Humphrey Withdraws Job Offer",
      "1970s ITV sitcom",
      "TV source episode: S3E04 The Four Letter Word",
      "Question topic: Humphrey Withdraws Job Offer"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39332",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's Life With Father, why does George's father end up staying with the Ropers?",
    "answers": [
      "His flat is demolished",
      "He is expelled from his retirement home",
      "He loses his passport",
      "He is recovering from a broken leg"
    ],
    "correctAnswer": "He is expelled from his retirement home",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S3E06 Life With Father",
      "Series: S3",
      "Story event: Georges Father Turned Out Of Retirement Home",
      "Answer fact: He is expelled from his retirement home",
      "Character context: Georges Father Turned Out Of Retirement Home",
      "Plot detail: Georges Father Turned Out Of Retirement Home",
      "1970s ITV sitcom",
      "TV source episode: S3E06 Life With Father",
      "Question topic: Georges Father Turned Out Of Retirement Home"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39333",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's Just The Job, what unexpected development initially cheers Mildred?",
    "answers": [
      "George inherits a house",
      "George wins a holiday",
      "George finally gets a job",
      "George starts a degree"
    ],
    "correctAnswer": "George finally gets a job",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S4E01 Just The Job",
      "Series: S4",
      "Story event: George Finds Paid Employment",
      "Answer fact: George finally gets a job",
      "Character context: George Finds Paid Employment",
      "Plot detail: George Finds Paid Employment",
      "1970s ITV sitcom",
      "TV source episode: S4E01 Just The Job",
      "Question topic: George Finds Paid Employment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39334",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred, what wartime celebration is connected to the stranger who claims a link to George in Days Of Beer And Rosie?",
    "answers": [
      "D-Day",
      "Armistice Day 1918",
      "Coronation Day",
      "VE Day"
    ],
    "correctAnswer": "VE Day",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S4E02 Days Of Beer And Rosie",
      "Series: S4",
      "Story event: VE Day Encounter From Georges Past",
      "Answer fact: VE Day",
      "Character context: VE Day Encounter From Georges Past",
      "Plot detail: VE Day Encounter From Georges Past",
      "1970s ITV sitcom",
      "TV source episode: S4E02 Days Of Beer And Rosie",
      "Question topic: VE Day Encounter From Georges Past"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39335",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's You Must Have Showers, which friend does George ask to install Mildred's new bathroom fitting?",
    "answers": [
      "Jerry",
      "Humphrey",
      "George's father",
      "Tristram"
    ],
    "correctAnswer": "Jerry",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S4E03 You Must Have Showers",
      "Series: S4",
      "Story event: Jerry Installs Shower",
      "Answer fact: Jerry",
      "Character context: Jerry Installs Shower",
      "Plot detail: Jerry Installs Shower",
      "1970s ITV sitcom",
      "TV source episode: S4E03 You Must Have Showers",
      "Question topic: Jerry Installs Shower"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39336",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "What kind of job does George resign from in George and Mildred's All Work And No Pay?",
    "answers": [
      "Selling insurance",
      "Traffic control",
      "Running a pub",
      "Driving buses"
    ],
    "correctAnswer": "Traffic control",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S4E04 All Work And No Pay",
      "Series: S4",
      "Story event: George Traffic Control Job",
      "Answer fact: Traffic control",
      "Character context: George Traffic Control Job",
      "Plot detail: George Traffic Control Job",
      "1970s ITV sitcom",
      "TV source episode: S4E04 All Work And No Pay",
      "Question topic: George Traffic Control Job"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39337",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's The Mating Game, why does George change his mind about having Truffles spayed?",
    "answers": [
      "A neighbour offers to walk her",
      "The vet promises a free treatment",
      "The selling price of pedigree puppies",
      "Mildred offers to buy him a cat"
    ],
    "correctAnswer": "The selling price of pedigree puppies",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S4E06 The Mating Game",
      "Series: S4",
      "Story event: Pedigree Puppy Financial Temptation",
      "Answer fact: The selling price of pedigree puppies",
      "Character context: Pedigree Puppy Financial Temptation",
      "Plot detail: Pedigree Puppy Financial Temptation",
      "1970s ITV sitcom",
      "TV source episode: S4E06 The Mating Game",
      "Question topic: Pedigree Puppy Financial Temptation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39338",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's 1978 Christmas special, whose new toy gets George into trouble?",
    "answers": [
      "Jerry's",
      "Mildred's mother's",
      "George's brother's",
      "Tristram Fourmile's"
    ],
    "correctAnswer": "Tristram Fourmile's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: 1978 Christmas On The Second Day Of Christmas",
      "Series: Christmas Special",
      "Story event: Tristram Christmas Toy Mishap",
      "Answer fact: Tristram Fourmile's",
      "Character context: Tristram Christmas Toy Mishap",
      "Plot detail: Tristram Christmas Toy Mishap",
      "1970s ITV sitcom",
      "TV source episode: 1978 Christmas On The Second Day Of Christmas",
      "Question topic: Tristram Christmas Toy Mishap"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39339",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's Finders Keepers, what worries Jeffrey about his son Tristram?",
    "answers": [
      "His new playmates",
      "His school exam marks",
      "His new bicycle",
      "His growing interest in acting"
    ],
    "correctAnswer": "His new playmates",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S5E01 Finders Keepers",
      "Series: S5",
      "Story event: Jeffrey Dislikes Tristram Friends",
      "Answer fact: His new playmates",
      "Character context: Jeffrey Dislikes Tristram Friends",
      "Plot detail: Jeffrey Dislikes Tristram Friends",
      "1970s ITV sitcom",
      "TV source episode: S5E01 Finders Keepers",
      "Question topic: Jeffrey Dislikes Tristram Friends"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39340",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's In Sickness And In Health, what suspected ailment sends Mildred to hospital?",
    "answers": [
      "Pneumonia",
      "Appendicitis",
      "A fractured wrist",
      "Food poisoning"
    ],
    "correctAnswer": "Appendicitis",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S5E02 In Sickness And In Health",
      "Series: S5",
      "Story event: Mildred Suspected Appendicitis",
      "Answer fact: Appendicitis",
      "Character context: Mildred Suspected Appendicitis",
      "Plot detail: Mildred Suspected Appendicitis",
      "1970s ITV sitcom",
      "TV source episode: S5E02 In Sickness And In Health",
      "Question topic: Mildred Suspected Appendicitis"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39341",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's The Last Straw, what local issue has Jeffrey been campaigning about while Mildred considers emigration?",
    "answers": [
      "School dinners",
      "The public library",
      "Lamp-posts",
      "Parking meters"
    ],
    "correctAnswer": "Lamp-posts",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S5E03 The Last Straw",
      "Series: S5",
      "Story event: Jeffrey Fourmile Lamp Post Campaign",
      "Answer fact: Lamp-posts",
      "Character context: Jeffrey Fourmile Lamp Post Campaign",
      "Plot detail: Jeffrey Fourmile Lamp Post Campaign",
      "1970s ITV sitcom",
      "TV source episode: S5E03 The Last Straw",
      "Question topic: Jeffrey Fourmile Lamp Post Campaign"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39342",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's A Driving Ambition, what mistaken suspicion leads George to revive his romantic efforts?",
    "answers": [
      "Mildred plans to join a convent",
      "Mildred has won the pools",
      "Mildred wants to buy a caravan",
      "Mildred is having an affair"
    ],
    "correctAnswer": "Mildred is having an affair",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S5E04 A Driving Ambition",
      "Series: S5",
      "Story event: George Suspects Mildred Infidelity",
      "Answer fact: Mildred is having an affair",
      "Character context: George Suspects Mildred Infidelity",
      "Plot detail: George Suspects Mildred Infidelity",
      "1970s ITV sitcom",
      "TV source episode: S5E04 A Driving Ambition",
      "Question topic: George Suspects Mildred Infidelity"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39343",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's A Military Pickle, which brother visits George after more than twenty years apart?",
    "answers": [
      "Charlie",
      "Edward",
      "Humphrey",
      "Ronnie"
    ],
    "correctAnswer": "Charlie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S5E05 A Military Pickle",
      "Series: S5",
      "Story event: George Brother Charlie Returns",
      "Answer fact: Charlie",
      "Character context: George Brother Charlie Returns",
      "Plot detail: George Brother Charlie Returns",
      "1970s ITV sitcom",
      "TV source episode: S5E05 A Military Pickle",
      "Question topic: George Brother Charlie Returns"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39344",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's Fishy Business, what new hobby attracts George after losing his goldfish Moby?",
    "answers": [
      "Breeding tropical fish",
      "Keeping homing pigeons",
      "Raising racing greyhounds",
      "Collecting exotic butterflies"
    ],
    "correctAnswer": "Keeping homing pigeons",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S5E06 Fishy Business",
      "Series: S5",
      "Story event: George Turns To Homing Pigeons",
      "Answer fact: Keeping homing pigeons",
      "Character context: George Turns To Homing Pigeons",
      "Plot detail: George Turns To Homing Pigeons",
      "1970s ITV sitcom",
      "TV source episode: S5E06 Fishy Business",
      "Question topic: George Turns To Homing Pigeons"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39345",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's I Gotta Horse, who contacts Mildred about an old model made by their father?",
    "answers": [
      "Her mother",
      "Ann Fourmile",
      "Her sister Ethel",
      "Her aunt Dorothy"
    ],
    "correctAnswer": "Her sister Ethel",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: S5E07 I Gotta Horse",
      "Series: S5",
      "Story event: Ethel Enquires About Fathers Model",
      "Answer fact: Her sister Ethel",
      "Character context: Ethel Enquires About Fathers Model",
      "Plot detail: Ethel Enquires About Fathers Model",
      "1970s ITV sitcom",
      "TV source episode: S5E07 I Gotta Horse",
      "Question topic: Ethel Enquires About Fathers Model"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39346",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's last Christmas special, why is Jeffrey away from Ann on the evening of a formal event?",
    "answers": [
      "He is visiting family in Australia",
      "He is serving jury duty",
      "He is driving a delivery van",
      "He must give a speech"
    ],
    "correctAnswer": "He must give a speech",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: 1979 Christmas The Twenty Six Year Itch",
      "Series: Christmas Special",
      "Story event: Jeffrey Formal Dinner Speech",
      "Answer fact: He must give a speech",
      "Character context: Jeffrey Formal Dinner Speech",
      "Plot detail: Jeffrey Formal Dinner Speech",
      "1970s ITV sitcom",
      "TV source episode: 1979 Christmas The Twenty Six Year Itch",
      "Question topic: Jeffrey Formal Dinner Speech"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39347",
    "category": "Television",
    "programme": "George and Mildred",
    "question": "In George and Mildred's The Twenty Six Year Itch, whom does George get chatting to at the pub?",
    "answers": [
      "A temporary barmaid",
      "A holiday travel agent",
      "An estate agent",
      "A local councillor"
    ],
    "correctAnswer": "A temporary barmaid",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "George and Mildred",
      "Programme: George and Mildred",
      "Thames Television",
      "Episode: 1979 Christmas The Twenty Six Year Itch",
      "Series: Christmas Special",
      "Story event: George Meets Temporary Barmaid",
      "Answer fact: A temporary barmaid",
      "Character context: George Meets Temporary Barmaid",
      "Plot detail: George Meets Temporary Barmaid",
      "1970s ITV sitcom",
      "TV source episode: 1979 Christmas The Twenty Six Year Itch",
      "Question topic: George Meets Temporary Barmaid"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39348",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, which Peckham friend telephones Boycie about the Driscoll Brothers' release?",
    "answers": [
      "Trigger",
      "Denzil",
      "Rodney",
      "Mike"
    ],
    "correctAnswer": "Denzil",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S1E01 Keep On Running",
      "Series: S1",
      "Story event: Denzil Warns Boycie",
      "Answer fact: Denzil",
      "Character context: Denzil Warns Boycie",
      "Plot detail: Denzil Warns Boycie",
      "2000s BBC sitcom",
      "TV source episode: S1E01 Keep On Running",
      "Question topic: Denzil Warns Boycie"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39349",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, what is Boycie's first management decision on arriving at Winterdown Farm?",
    "answers": [
      "To buy a racehorse",
      "To sell the farmhouse",
      "To sack the farm manager",
      "To close the dairy"
    ],
    "correctAnswer": "To sack the farm manager",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S1E02 A Rocky Start",
      "Series: S1",
      "Story event: Boycie Tries To Sack Elgin",
      "Answer fact: To sack the farm manager",
      "Character context: Boycie Tries To Sack Elgin",
      "Plot detail: Boycie Tries To Sack Elgin",
      "2000s BBC sitcom",
      "TV source episode: S1E02 A Rocky Start",
      "Question topic: Boycie Tries To Sack Elgin"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39350",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, from whom does the farm buy the bull that Elgin says it needs?",
    "answers": [
      "A travelling circus owner",
      "A neighbouring school",
      "The county council",
      "A bankrupt local farmer"
    ],
    "correctAnswer": "A bankrupt local farmer",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S1E02 A Rocky Start",
      "Series: S1",
      "Story event: Bull Bought From Bankrupt Farmer",
      "Answer fact: A bankrupt local farmer",
      "Character context: Bull Bought From Bankrupt Farmer",
      "Plot detail: Bull Bought From Bankrupt Farmer",
      "2000s BBC sitcom",
      "TV source episode: S1E02 A Rocky Start",
      "Question topic: Bull Bought From Bankrupt Farmer"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39351",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, what countryside activity does Marlene send Boycie out to try in The Country Wife?",
    "answers": [
      "Picking blackberries",
      "Fishing for trout",
      "Shearing sheep",
      "Collecting mushrooms"
    ],
    "correctAnswer": "Picking blackberries",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S1E03 The Country Wife",
      "Series: S1",
      "Story event: Marlene Sends Boycie Blackberry Picking",
      "Answer fact: Picking blackberries",
      "Character context: Marlene Sends Boycie Blackberry Picking",
      "Plot detail: Marlene Sends Boycie Blackberry Picking",
      "2000s BBC sitcom",
      "TV source episode: S1E03 The Country Wife",
      "Question topic: Marlene Sends Boycie Blackberry Picking"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39352",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, why is a vet called to see Rocky during Hay Fever?",
    "answers": [
      "He has damaged his hoof",
      "He ignores the herd of cows",
      "He refuses to eat hay",
      "He keeps escaping his field"
    ],
    "correctAnswer": "He ignores the herd of cows",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S1E04 Hay Fever",
      "Series: S1",
      "Story event: Bull Rocky Ignores Cows",
      "Answer fact: He ignores the herd of cows",
      "Character context: Bull Rocky Ignores Cows",
      "Plot detail: Bull Rocky Ignores Cows",
      "2000s BBC sitcom",
      "TV source episode: S1E04 Hay Fever",
      "Question topic: Bull Rocky Ignores Cows"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39353",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, how many GCSE subjects does Tyler manage to pass in Pillow Talk?",
    "answers": [
      "One",
      "Four",
      "Two",
      "Six"
    ],
    "correctAnswer": "Two",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S1E05 Pillow Talk",
      "Series: S1",
      "Story event: Tyler Passes Two GCSEs",
      "Answer fact: Two",
      "Character context: Tyler Passes Two GCSEs",
      "Plot detail: Tyler Passes Two GCSEs",
      "2000s BBC sitcom",
      "TV source episode: S1E05 Pillow Talk",
      "Question topic: Tyler Passes Two GCSEs"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39354",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "What surprising truth about Rocky the bull comes to light in The Green Green Grass's Pillow Talk?",
    "answers": [
      "He is a prize-winning racehorse",
      "He belongs to Llewellyn",
      "He has escaped from a zoo",
      "He is gay"
    ],
    "correctAnswer": "He is gay",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S1E05 Pillow Talk",
      "Series: S1",
      "Story event: Rocky Bull Sexual Orientation",
      "Answer fact: He is gay",
      "Character context: Rocky Bull Sexual Orientation",
      "Plot detail: Rocky Bull Sexual Orientation",
      "2000s BBC sitcom",
      "TV source episode: S1E05 Pillow Talk",
      "Question topic: Rocky Bull Sexual Orientation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39355",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, what personal item found in Tyler's bedroom worries his parents?",
    "answers": [
      "Make-up",
      "Cigarettes",
      "A school report",
      "A box of fireworks"
    ],
    "correctAnswer": "Make-up",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S1E06 Sex And The Country",
      "Series: S1",
      "Story event: Makeup Discovered In Tyler Room",
      "Answer fact: Make-up",
      "Character context: Makeup Discovered In Tyler Room",
      "Plot detail: Makeup Discovered In Tyler Room",
      "2000s BBC sitcom",
      "TV source episode: S1E06 Sex And The Country",
      "Question topic: Makeup Discovered In Tyler Room"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39356",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, which surprising relationship explains Tyler's secret girlfriend in Sex And The Country?",
    "answers": [
      "She is Boycie's secretary",
      "She is his teacher",
      "She is a famous singer",
      "She is his cousin's friend"
    ],
    "correctAnswer": "She is his teacher",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S1E06 Sex And The Country",
      "Series: S1",
      "Story event: Tyler Girlfriend Is Teacher",
      "Answer fact: She is his teacher",
      "Character context: Tyler Girlfriend Is Teacher",
      "Plot detail: Tyler Girlfriend Is Teacher",
      "2000s BBC sitcom",
      "TV source episode: S1E06 Sex And The Country",
      "Question topic: Tyler Girlfriend Is Teacher"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39357",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass's first Christmas special, where had the Boyces met the friends inviting them to Switzerland?",
    "answers": [
      "At Tyler's school",
      "On a cruise ship",
      "At an agricultural ball",
      "At a football match"
    ],
    "correctAnswer": "At an agricultural ball",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: 2005 Christmas One Flew Over The Cuckoo Clock",
      "Series: Christmas Special",
      "Story event: Swiss Hosts Met At Agricultural Ball",
      "Answer fact: At an agricultural ball",
      "Character context: Swiss Hosts Met At Agricultural Ball",
      "Plot detail: Swiss Hosts Met At Agricultural Ball",
      "2000s BBC sitcom",
      "TV source episode: 2005 Christmas One Flew Over The Cuckoo Clock",
      "Question topic: Swiss Hosts Met At Agricultural Ball"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39358",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, an inspection by which organisation troubles Winterdown Farm during Testing Times?",
    "answers": [
      "The Royal Horticultural Society",
      "The National Trust",
      "The Farmers' Union",
      "The European Union"
    ],
    "correctAnswer": "The European Union",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S2E01 Testing Times",
      "Series: S2",
      "Story event: European Union Farm Inspection",
      "Answer fact: The European Union",
      "Character context: European Union Farm Inspection",
      "Plot detail: European Union Farm Inspection",
      "2000s BBC sitcom",
      "TV source episode: S2E01 Testing Times",
      "Question topic: European Union Farm Inspection"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39359",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, which sport does Tyler struggle with at school in Here's To You Mrs Boyce?",
    "answers": [
      "Rugby",
      "Cricket",
      "Tennis",
      "Football"
    ],
    "correctAnswer": "Rugby",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S2E02 Heres To You Mrs Boyce",
      "Series: S2",
      "Story event: Tyler School Rugby Struggles",
      "Answer fact: Rugby",
      "Character context: Tyler School Rugby Struggles",
      "Plot detail: Tyler School Rugby Struggles",
      "2000s BBC sitcom",
      "TV source episode: S2E02 Heres To You Mrs Boyce",
      "Question topic: Tyler School Rugby Struggles"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39360",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, what does Boycie discover about Mrs Cakeworthy after he dismisses her in Bothered And Bewildered?",
    "answers": [
      "She is a television producer",
      "She is a witch",
      "She is a retired police officer",
      "She is a secret millionaire"
    ],
    "correctAnswer": "She is a witch",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S2E03 Bothered And Bewildered",
      "Series: S2",
      "Story event: Mrs Cakeworthy Witch Revelation",
      "Answer fact: She is a witch",
      "Character context: Mrs Cakeworthy Witch Revelation",
      "Plot detail: Mrs Cakeworthy Witch Revelation",
      "2000s BBC sitcom",
      "TV source episode: S2E03 Bothered And Bewildered",
      "Question topic: Mrs Cakeworthy Witch Revelation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39361",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, which school class leaves Tyler deeply upset in Bothered And Bewildered?",
    "answers": [
      "Mathematics",
      "Geography",
      "Art",
      "Drama"
    ],
    "correctAnswer": "Art",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S2E03 Bothered And Bewildered",
      "Series: S2",
      "Story event: Tyler Art Lesson Trauma",
      "Answer fact: Art",
      "Character context: Tyler Art Lesson Trauma",
      "Plot detail: Tyler Art Lesson Trauma",
      "2000s BBC sitcom",
      "TV source episode: S2E03 Bothered And Bewildered",
      "Question topic: Tyler Art Lesson Trauma"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39362",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, what concern of Beth's causes trouble for farm operations in Mother Earth?",
    "answers": [
      "Water pollution",
      "Local road safety",
      "School closures",
      "Animal welfare"
    ],
    "correctAnswer": "Animal welfare",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S2E04 Mother Earth",
      "Series: S2",
      "Story event: Beth Animal Welfare Objections",
      "Answer fact: Animal welfare",
      "Character context: Beth Animal Welfare Objections",
      "Plot detail: Beth Animal Welfare Objections",
      "2000s BBC sitcom",
      "TV source episode: S2E04 Mother Earth",
      "Question topic: Beth Animal Welfare Objections"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39363",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, what lifestyle approach does Marlene try in Mother Earth?",
    "answers": [
      "Holistic living",
      "Competitive bodybuilding",
      "Strict military training",
      "Extreme mountain climbing"
    ],
    "correctAnswer": "Holistic living",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S2E04 Mother Earth",
      "Series: S2",
      "Story event: Marlene Holistic Lifestyle",
      "Answer fact: Holistic living",
      "Character context: Marlene Holistic Lifestyle",
      "Plot detail: Marlene Holistic Lifestyle",
      "2000s BBC sitcom",
      "TV source episode: S2E04 Mother Earth",
      "Question topic: Marlene Holistic Lifestyle"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39364",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, what sum does Llewellyn hope to win by challenging Boycie to a pub quiz?",
    "answers": [
      "Five hundred pounds",
      "Five thousand pounds",
      "Ten thousand pounds",
      "One thousand pounds"
    ],
    "correctAnswer": "Five thousand pounds",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S2E06 More Questions Than Answers",
      "Series: S2",
      "Story event: Llewellyn Five Thousand Pound Quiz Prize",
      "Answer fact: Five thousand pounds",
      "Character context: Llewellyn Five Thousand Pound Quiz Prize",
      "Plot detail: Llewellyn Five Thousand Pound Quiz Prize",
      "2000s BBC sitcom",
      "TV source episode: S2E06 More Questions Than Answers",
      "Question topic: Llewellyn Five Thousand Pound Quiz Prize"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39365",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, what creative activity does lonely farmhand Bryan take up in The Lonely Herdsman?",
    "answers": [
      "Painting portraits",
      "Playing the violin",
      "Writing poetry",
      "Writing a detective novel"
    ],
    "correctAnswer": "Writing poetry",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S3E02 The Lonely Herdsman",
      "Series: S3",
      "Story event: Bryan Writes Poetry",
      "Answer fact: Writing poetry",
      "Character context: Bryan Writes Poetry",
      "Plot detail: Bryan Writes Poetry",
      "2000s BBC sitcom",
      "TV source episode: S3E02 The Lonely Herdsman",
      "Question topic: Bryan Writes Poetry"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39366",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, what feature makes the woods especially frightening during the search for Tyler and Earl?",
    "answers": [
      "They are surrounded by quicksand",
      "They are home to escaped zoo animals",
      "They contain an abandoned mine",
      "They are reputed to be haunted"
    ],
    "correctAnswer": "They are reputed to be haunted",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S3E03 If You Go Down To The Woods",
      "Series: S3",
      "Story event: Haunted Woods Search",
      "Answer fact: They are reputed to be haunted",
      "Character context: Haunted Woods Search",
      "Plot detail: Haunted Woods Search",
      "2000s BBC sitcom",
      "TV source episode: S3E03 If You Go Down To The Woods",
      "Question topic: Haunted Woods Search"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39367",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, who helps Tyler regain his motivation after disappointing examination results in Sweet Sorrow?",
    "answers": [
      "The farm staff",
      "His school governors",
      "A visiting film crew",
      "The Driscoll Brothers"
    ],
    "correctAnswer": "The farm staff",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S3E04 Sweet Sorrow",
      "Series: S3",
      "Story event: Farmhands Motivate Tyler",
      "Answer fact: The farm staff",
      "Character context: Farmhands Motivate Tyler",
      "Plot detail: Farmhands Motivate Tyler",
      "2000s BBC sitcom",
      "TV source episode: S3E04 Sweet Sorrow",
      "Question topic: Farmhands Motivate Tyler"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39368",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, where has Tyler unexpectedly returned from in The Final Curtain?",
    "answers": [
      "The army",
      "University",
      "A foreign holiday",
      "A football academy"
    ],
    "correctAnswer": "University",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S3E06 The Final Curtain",
      "Series: S3",
      "Story event: Tyler Returns From University",
      "Answer fact: University",
      "Character context: Tyler Returns From University",
      "Plot detail: Tyler Returns From University",
      "2000s BBC sitcom",
      "TV source episode: S3E06 The Final Curtain",
      "Question topic: Tyler Returns From University"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39369",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, what work does Llewellyn hope to recruit extra labour for in Lust In Translation?",
    "answers": [
      "Renovating his farmhouse",
      "Building a new stable",
      "Harvesting his crops",
      "Running a Christmas fair"
    ],
    "correctAnswer": "Harvesting his crops",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S3E07 Lust In Translation",
      "Series: S3",
      "Story event: Llewellyn Needs Harvest Workers",
      "Answer fact: Harvesting his crops",
      "Character context: Llewellyn Needs Harvest Workers",
      "Plot detail: Llewellyn Needs Harvest Workers",
      "2000s BBC sitcom",
      "TV source episode: S3E07 Lust In Translation",
      "Question topic: Llewellyn Needs Harvest Workers"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39370",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, what drastic action does Marlene take after seeking marriage counselling?",
    "answers": [
      "She sells the farm",
      "She moves back to Peckham",
      "She enrols at university",
      "She throws Boycie out"
    ],
    "correctAnswer": "She throws Boycie out",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S4E01 The Path Of True Love",
      "Series: S4",
      "Story event: Marlene Throws Boycie Out",
      "Answer fact: She throws Boycie out",
      "Character context: Marlene Throws Boycie Out",
      "Plot detail: Marlene Throws Boycie Out",
      "2000s BBC sitcom",
      "TV source episode: S4E01 The Path Of True Love",
      "Question topic: Marlene Throws Boycie Out"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39371",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass's Home Brew, the recipe behind Boycie's drink comes from which historical period?",
    "answers": [
      "The Middle Ages",
      "The Victorian era",
      "The Georgian era",
      "The 1920s"
    ],
    "correctAnswer": "The Middle Ages",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S4E02 Home Brew",
      "Series: S4",
      "Story event: Medieval Liquor Recipe",
      "Answer fact: The Middle Ages",
      "Character context: Medieval Liquor Recipe",
      "Plot detail: Medieval Liquor Recipe",
      "2000s BBC sitcom",
      "TV source episode: S4E02 Home Brew",
      "Question topic: Medieval Liquor Recipe"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39372",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, what sort of activity gives Marlene renewed purpose in Calendar Boys?",
    "answers": [
      "Training racehorses",
      "Charity work",
      "Running for Parliament",
      "Growing prize vegetables"
    ],
    "correctAnswer": "Charity work",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S4E03 Calendar Boys",
      "Series: S4",
      "Story event: Marlene Charity Campaigns",
      "Answer fact: Charity work",
      "Character context: Marlene Charity Campaigns",
      "Plot detail: Marlene Charity Campaigns",
      "2000s BBC sitcom",
      "TV source episode: S4E03 Calendar Boys",
      "Question topic: Marlene Charity Campaigns"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39373",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, what does Tyler ask Boycie to help finance in Animal Instincts?",
    "answers": [
      "A motorcycle",
      "A university course",
      "New equipment for his band",
      "A trip to Australia"
    ],
    "correctAnswer": "New equipment for his band",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S4E04 Animal Instincts",
      "Series: S4",
      "Story event: Tyler Requests Band Equipment Loan",
      "Answer fact: New equipment for his band",
      "Character context: Tyler Requests Band Equipment Loan",
      "Plot detail: Tyler Requests Band Equipment Loan",
      "2000s BBC sitcom",
      "TV source episode: S4E04 Animal Instincts",
      "Question topic: Tyler Requests Band Equipment Loan"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39374",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, which protest movement frightens the local community in Animal Instincts?",
    "answers": [
      "Save the Village",
      "Friends of the Countryside",
      "The Green Alliance",
      "Animal Freedom"
    ],
    "correctAnswer": "Animal Freedom",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S4E04 Animal Instincts",
      "Series: S4",
      "Story event: Animal Freedom Protestors",
      "Answer fact: Animal Freedom",
      "Character context: Animal Freedom Protestors",
      "Plot detail: Animal Freedom Protestors",
      "2000s BBC sitcom",
      "TV source episode: S4E04 Animal Instincts",
      "Question topic: Animal Freedom Protestors"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39375",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, who arrives to cheer Tyler up in Your Cheating Art?",
    "answers": [
      "Marlene's mother Dora",
      "The Driscoll Brothers",
      "His school headteacher",
      "His godfather Del Boy"
    ],
    "correctAnswer": "Marlene's mother Dora",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S4E05 Your Cheating Art",
      "Series: S4",
      "Story event: Dora Arrives To Cheer Tyler",
      "Answer fact: Marlene's mother Dora",
      "Character context: Dora Arrives To Cheer Tyler",
      "Plot detail: Dora Arrives To Cheer Tyler",
      "2000s BBC sitcom",
      "TV source episode: S4E05 Your Cheating Art",
      "Question topic: Dora Arrives To Cheer Tyler"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39376",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, why is Tyler anxious about his parents coming to his band's first live gig in The Departed?",
    "answers": [
      "He has not invited the drummer",
      "He fears they will embarrass him",
      "He has forgotten his lyrics",
      "He has promised to play at home"
    ],
    "correctAnswer": "He fears they will embarrass him",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S4E06 The Departed",
      "Series: S4",
      "Story event: Tyler Fears Parents At First Gig",
      "Answer fact: He fears they will embarrass him",
      "Character context: Tyler Fears Parents At First Gig",
      "Plot detail: Tyler Fears Parents At First Gig",
      "2000s BBC sitcom",
      "TV source episode: S4E06 The Departed",
      "Question topic: Tyler Fears Parents At First Gig"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39377",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, which two Peckham acquaintances appear in Boycie's flashback recollections in I Done It My Way?",
    "answers": [
      "Trigger and Denzil",
      "Mike and Sid",
      "Del Boy and Rodney",
      "Raquel and Cassandra"
    ],
    "correctAnswer": "Del Boy and Rodney",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S4E07 I Done It My Way",
      "Series: S4",
      "Story event: Del Boy Rodney Flashback Memories",
      "Answer fact: Del Boy and Rodney",
      "Character context: Del Boy Rodney Flashback Memories",
      "Plot detail: Del Boy Rodney Flashback Memories",
      "2000s BBC sitcom",
      "TV source episode: S4E07 I Done It My Way",
      "Question topic: Del Boy Rodney Flashback Memories"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39378",
    "category": "Television",
    "programme": "The Green Green Grass",
    "question": "In The Green Green Grass, which member of his family helps Boycie spot a valuable antique in One Man's Junk?",
    "answers": [
      "Marlene",
      "His brother",
      "His mother-in-law Dora",
      "Tyler"
    ],
    "correctAnswer": "Tyler",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Sitcom",
      "Comedy",
      "The Green Green Grass",
      "Programme: The Green Green Grass",
      "BBC One",
      "Episode: S4E08 One Mans Junk",
      "Series: S4",
      "Story event: Tyler Helps Identify Antique",
      "Answer fact: Tyler",
      "Character context: Tyler Helps Identify Antique",
      "Plot detail: Tyler Helps Identify Antique",
      "2000s BBC sitcom",
      "TV source episode: S4E08 One Mans Junk",
      "Question topic: Tyler Helps Identify Antique"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if (new Set(questions.map(q=>q.id)).size!==questions.length ||
    new Set(questions.map(q=>normalise(q.question))).size!==questions.length ||
    questions.some(q=>q.answers.length!==4 || new Set(q.answers.map(normalise)).size!==4 ||
       q.answers.filter(a=>a===q.correctAnswer).length!==1 ||
       q.tags.length<14 || !q.tags.includes('Programme: '+q.programme) ||
       q.dailyEligible!==true)) {
  throw Error('Pack 363 audit additions validation failed');
}
module.exports = questions;
