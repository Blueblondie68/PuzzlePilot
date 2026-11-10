
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

  module.exports = questions;
