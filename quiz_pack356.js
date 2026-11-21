
  // quiz_pack356.js
  // PuzzlePilot — The Bigggggg Quiz
  // British television comedies: Duty Free (ITV) and Chef! (BBC One).
  // Both checked as outstanding in PP_Quiz_Master_Through_Pack_351_Corrected.xlsx.
  // Sources: ITVX programme and episode guides; British Comedy Guide cast,
  // production and episode guides; the original broadcasters' programme details.
  // Each question has seven distinct fact-specific tags plus programme metadata.
  // WordPad-ready CommonJS module. No external dependencies.

  const FIRST_ID = 17465;

  const dutyFreeFacts = `Which British broadcaster originally showed Duty Free?|ITV|BBC One|Channel 4|BBC Two|Easy|Original ITV Broadcast|Commercial Television|1984 Premiere|British Sitcom Network|Yorkshire Television Series|Programme Channel|1980s Television
  In which year did the first series of Duty Free begin?|1984|1979|1988|1991|Easy|1984 Debut|13 February 1984|First Series|Eighties Sitcom|Programme Launch|Original Transmission|Television Timeline
  In which year did Duty Free end its original television run?|1986|1984|1990|1993|Medium|1986 Ending|Christmas Special|Final Broadcast|ITV Programme Run|Series Completion|Mid Eighties|Sitcom History
  How many series of Duty Free aired on ITV?|Three|Two|Four|Five|Medium|Three Series|1984 To 1986|Series Count|ITV Comedy|Programme History|Original Run|Holiday Sitcom
  Which company produced the ITV sitcom Duty Free?|Yorkshire Television|Granada Television|Thames Television|London Weekend Television|Medium|Yorkshire Television|Production Company|ITV Regions|Sitcom Producer|Programme Credits|British Television Studio|1980s Comedy
  Which two writers created the scripts for Duty Free?|Eric Chappell and Jean Warr|David Croft and Jimmy Perry|Richard Curtis and Ben Elton|John Sullivan and Roy Clarke|Hard|Eric Chappell|Jean Warr|Writing Partnership|Sitcom Scripts|Original Writers|Series Creators|Duty Free Credits
  Who played David Pearce in Duty Free?|Keith Barron|Neil Stacy|Carlos Douglas|John Barron|Easy|Keith Barron|David Pearce|Main Cast|Husband Of Amy|Redundant Draughtsman|Lead Actor|Holidaymaker
  Which actress played Amy Pearce in Duty Free?|Gwen Taylor|Joanna Van Gyseghem|Judi Spiers|Felicity Kendal|Easy|Gwen Taylor|Amy Pearce|David Wife|Leading Actress|British Comedy Cast|Holiday Couple|Pearce Family
  Who portrayed Linda Cochran in Duty Free?|Joanna Van Gyseghem|Gwen Taylor|Pauline Collins|Caroline Lee Johnson|Medium|Joanna Van Gyseghem|Linda Cochran|Actor Character|Robert Wife|Romantic Intrigue|Holiday Guest|Cast Credits
  Who played Robert Cochran, Linda's husband, in Duty Free?|Neil Stacy|Keith Barron|Peter Bowles|Richard Briers|Medium|Neil Stacy|Robert Cochran|Linda Husband|Lead Cast|Holiday Couple|Character Casting|Affluent Guest
  Who played Carlos, the waiter at the Spanish hotel in Duty Free?|Carlos Douglas|George Camiller|Bunny May|Neil Stacy|Medium|Carlos Douglas|Carlos The Waiter|Hotel Service|Spanish Resort|Supporting Actor|Restaurant Staff|Recurring Character
  Which woman does David Pearce become romantically interested in during Duty Free?|Linda Cochran|Amy Pearce|Betty Spencer|Janice Blackstock|Easy|David Pearce|Linda Cochran|Holiday Romance|Extramarital Attraction|Love Triangle|Pearce Marriage|Cochran Couple
  Which couple in Duty Free are married to each other?|Robert and Linda Cochran|David and Linda Pearce|Carlos and Amy Cochran|Robert and Amy Pearce|Easy|Robert Cochran|Linda Cochran|Married Couple|Character Relationships|Cochran Family|Holiday Companions|Marriage
  What money does David use to pay for the Pearces' holiday in Spain?|His redundancy pay|A lottery jackpot|An inheritance|A bank robbery's proceeds|Easy|David Pearce|Redundancy Money|Package Holiday|Unemployment|Trip Funding|1984 First Episode|Household Finances
  What does Amy Pearce hope their Spanish trip will be?|A second honeymoon|A business conference|A house-hunting expedition|A university reunion|Easy|Amy Pearce|Second Honeymoon|Marriage Holiday|Romantic Expectations|Spanish Package Tour|David And Amy|First Series Premise
  In which Spanish resort town do the main couples stay in Duty Free?|Marbella|Barcelona|Valencia|Bilbao|Medium|Marbella|Costa Del Sol|Spanish Hotel|Holiday Destination|Programme Setting|Spanish Resort|British Tourists
  What was the title of the first Duty Free episode?|Viva Espana|Winter Break|Manana|Adios|Medium|Viva Espana|First Episode|1984 Pilot Transmission|Opening Story|David And Amy Arrive|Series One|Episode Title
  In El Macho, which Spanish spectacle do the holidaymakers attend?|A bullfight|A flamenco contest|A football match|A horse race|Medium|El Macho|Bullfight|Spanish Excursion|David Pearce|Amy Pearce|Series One Episode Two|Holiday Activity
  In Praying Mantis, what does David try to do to impress Linda?|Get fit|Learn to play the violin|Buy a motorbike|Become a hotel chef|Medium|Praying Mantis|David Gets Fit|Linda Cochran|Fitness Effort|Holiday Attraction|Series One|Romantic Pursuit
  In the Duty Free episode Spanish Lace, what personal possession does David sell to afford Linda's shawl?|His watch|His camera|His wedding ring|His suitcase|Medium|Spanish Lace|David's Watch|Linda's Shawl|Amy Loses Money|Mountain Coach Trip|Romantic Deception|Series One
  In Bedroom Farce, which late-night activity makes Amy suspicious of David?|A midnight swim|A card game|A disco competition|A fishing trip|Medium|Bedroom Farce|Midnight Swim|Amy Suspicions|David And Linda|Secret Romance|Series One|Swimming Pool
  In Forty Love, which sport does David arrange to play with Linda?|Tennis|Golf|Badminton|Squash|Medium|Forty Love|Tennis Court|David And Linda|Amy Pearce|Series One|Romantic Rendezvous|Sporting Excuse
  Which first-series finale sees Amy determined to hold on to David despite his affair?|Hasta La Vista|Casino|Snap|Party Night|Medium|Hasta La Vista|Series One Finale|Amy Pearce|David And Linda Affair|Marriage Conflict|1984 Episode|Hotel Intrigue
  In the second-series episode Casino, where does David risk the couple's money?|At a casino|At a horse auction|On the stock exchange|At a bingo hall|Easy|Casino Episode|Holiday Gambling|David Pearce|Money Worries|Series Two|Spanish Casino|Risky Spending
  In Couples, what kind of visitors arrive at the holiday hotel?|An English couple on honeymoon|A German football team|A group of schoolteachers|A party of wedding photographers|Medium|Couples Episode|Honeymooning Visitors|English Newlyweds|Hotel Guests|Series Two|Relationship Confusion|Spanish Holiday
  In El Astro, who attracts the attention of a visiting television star?|Amy Pearce|Linda Cochran|Carlos the waiter|Robert Cochran|Medium|El Astro|Television Star|Amy Pearce|Unexpected Admirer|Series Two|Holiday Romance|Celebrity Visitor
  In Duty Free's Pepe, what does David correctly suspect is concealed in the box Amy has been asked to deliver?|Illegal drugs|A stolen necklace|Forged passports|A collection of coins|Medium|Pepe Episode|Tangiers Trip|Mysterious Box|David's Suspicions|Drug Smuggling|Amy's Errand|Series Two
  Which character's friend causes David trouble in the Duty Free episode Snap?|David's friend Kev|Amy's friend Joan|Carlos's friend Pedro|Robert's friend Arthur|Hard|Snap Episode|Kev|David Pearce|Troublesome Friend|Series Two|Holiday Visitor|Comic Complications
  In Adios, what are David and Linda struggling to arrange before their holiday ends?|A final meeting alone|A restaurant opening|A move to London|A surprise birthday party|Medium|Adios Episode|David And Linda|Final Rendezvous|Holiday Ending|Series Two Finale|Secret Affair|Romantic Plans
  In Winter Break, what does David claim might happen unless he has another holiday?|He will have a nervous breakdown|He will miss a court appearance|He will lose his passport|He will be transferred abroad|Medium|Winter Break|David Pearce|Nervous Breakdown Claim|Another Spanish Holiday|Series Three Premiere|Persuading Amy|1986 Episode
  Which travel presenter appears with a TV crew in the Duty Free episode Close Up?|Judith Chalmers|Michael Palin|Judith Hann|Anthea Turner|Hard|Close Up Episode|Judith Chalmers|Television Crew|Off Peak Holidays|Series Three|Resort Filming|Celebrity Presenter
  In The Go Between, whose help do David and Linda enlist to keep their spouses occupied?|Neville|Carlos|Kev|Pepe|Hard|The Go Between|Neville|David And Linda|Amy And Robert|Romantic Scheming|Series Three|Hotel Intermediary
  What mistake does David make at the airport in Costa Del Crime?|He picks up the wrong bag|He boards the wrong plane|He loses both passports|He leaves Amy behind|Medium|Costa Del Crime|Wrong Luggage|Airport Bag|David Pearce|Unwelcome Visitors|Series Three|Travel Confusion
  In Cause Celebre, whose treatment by hotel management causes an uproar?|Carlos the waiter|Robert Cochran|A visiting tennis player|The hotel's accountant|Medium|Cause Celebre|Carlos|Hotel Staff Changes|Waiter Dismissal|Amy Pearce|Industrial Relations|Series Three
  What event forms the centre of the Duty Free episode Party Night?|A hotel talent contest|A football tournament|A beauty pageant|A street carnival|Medium|Party Night|Hotel Party|Talent Contest|Fancy Dress|Series Three Finale|Guest Performances|Holiday Entertainment
  Where do the Pearces unexpectedly meet the Cochrans again in A Duty Free Christmas?|At a hotel in Spain|At a London theatre|At a Scottish ski resort|At an airport in France|Medium|A Duty Free Christmas|David And Amy|Robert And Linda|Spanish Hotel|1986 Christmas Special|Coincidental Reunion|Festive Holiday
  Which actor played the original assistant manager in Duty Free's first series?|Bunny May|Ian McNeice|George Camiller|Carlos Douglas|Hard|Bunny May|Assistant Manager|Series One Cast|Spanish Hotel|Supporting Actor|Duty Free Credits|Resort Management
  Who composed the music credited for the television series Duty Free?|Peter Knight|Howard Goodall|Ronnie Hazlehurst|Mike Batt|Hard|Peter Knight|Theme Music|Programme Composer|Series Credits|Yorkshire Television|Sitcom Soundtrack|1980s Music`;

  const chefFacts = `Who played the temperamental chef Gareth Blackstock in Chef!?|Lenny Henry|Roger Griffiths|David Jason|Keith Barron|Easy|Lenny Henry|Gareth Blackstock|Lead Actor|Executive Chef|Kitchen Temper|BBC Comedy Casting|Restaurant Boss
  Which television channel originally broadcast Chef!?|BBC One|ITV|Channel 4|BBC Two|Easy|BBC One|Original Broadcaster|1993 Premiere|BBC Sitcom|British Television|Series Network|Comedy Scheduling
  In which year did Chef! first air?|1993|1987|1998|2003|Easy|1993 Debut|28 January 1993|Original Broadcast|First Series|Early Nineties Comedy|Programme Timeline|BBC Premiere
  What is the name of Gareth Blackstock's restaurant in Chef!?|Le Chateau Anglais|Le Bistro Royal|The Golden Spoon|La Maison Blanche|Easy|Le Chateau Anglais|Restaurant Name|Gareth Blackstock|French Cuisine|Workplace Setting|Fine Dining|Fictional Restaurant
  In which English county is Le Chateau Anglais located?|Oxfordshire|Kent|Yorkshire|Devon|Medium|Oxfordshire|Rural Restaurant|Le Chateau Anglais Location|English Countryside|Fine Dining Establishment|Comedy Setting|Regional Geography
  Who played Gareth's wife Janice Blackstock?|Caroline Lee Johnson|Claire Skinner|Pui Fan Lee|Sophie Walker|Medium|Caroline Lee Johnson|Janice Blackstock|Gareth Wife|Main Actress|Restaurant Business|Marriage|Cast Identification
  Which actor played Gareth's colleague Everton Stonehead?|Roger Griffiths|Gary Parker|Erkan Mustafa|Ian McNeice|Medium|Roger Griffiths|Everton Stonehead|Kitchen Colleague|Supporting Actor|Restaurant Staff|Cast Identification|Gareth Blackstock
  What is Janice Blackstock's relationship to Gareth?|She is his wife|She is his sister|She is his business rival|She is his aunt|Easy|Janice Blackstock|Gareth Blackstock|Married Couple|Relationship|Restaurant Business|Domestic Conflict|Leading Characters
  Who is credited as the creator of Chef!?|Lenny Henry|Peter Tilbury|Richard Curtis|John Sullivan|Hard|Lenny Henry|Programme Creator|Chef Original Concept|Creative Credit|BBC Comedy|Series Origin|Television Development
  Which writer scripted episodes of the first two series of Chef!?|Peter Tilbury|Roy Clarke|Eric Chappell|Jimmy Perry|Hard|Peter Tilbury|Series One Writer|Series Two Writer|Chef Scripts|BBC Production|Writing Credit|Comedy Screenwriter
  How many series of Chef! were originally made?|Three|Two|Four|Five|Medium|Three Series|1993 To 1996|BBC Comedy Run|Production Count|Chef Programme|Series History|Television Catalogue
  Which year saw the final series of Chef! first broadcast?|1996|1994|1999|2001|Medium|1996 Final Series|Series Three|BBC Schedule|Programme Ending|Gareth Blackstock Stories|Nineties Sitcom|Transmission Year
  Which actress played Lucinda in the first series of Chef!?|Claire Skinner|Caroline Lee Johnson|Lorelei King|Elizabeth Bennett|Hard|Claire Skinner|Lucinda|Series One Cast|Supporting Actress|Kitchen Staff|Character Credits|BBC Sitcom
  Who played the character Piers in the first series of Chef!?|Gary Parker|Roger Griffiths|Tim Matthews|Gary Bakewell|Hard|Gary Parker|Piers|Series One Role|Supporting Actor|Restaurant Staff|Chef Cast|1993 Episodes
  What is the title of the first episode of Chef!?|Personnel|The Big Cheese|A River Runs Thru It|Gareth's True Love|Medium|Personnel|Series One Episode One|1993 Premiere|Opening Episode|Kitchen Restructuring|Le Chateau Anglais|Programme Launch
  In Personnel, what forces Gareth to reorganise his kitchen team?|Cuts to his budget|A flood in the restaurant|A strike by suppliers|A new food critic|Medium|Personnel Episode|Budget Cuts|Kitchen Restructuring|Gareth Blackstock|Restaurant Staffing|Series One|Financial Pressure
  In Beyond The Pass, whom do Gareth and Janice need to visit for financial help?|Their bank manager|A television producer|A local magistrate|A hotel inspector|Medium|Beyond The Pass|Bank Manager|Business Finances|Restaurant Takeover|Gareth And Janice|Series One|Loan Discussion
  In Subject To Contract, what property does Gareth put on the market?|His cottage|His restaurant kitchen|His parents' flat|His holiday caravan|Medium|Subject To Contract|Cottage Sale|Property On Market|Gareth Blackstock|Series One|Financial Sacrifice|Restaurant Ownership
  Which famous chef is expected to dine at Le Chateau Anglais in The Big Cheese?|Albert Roux|Gordon Ramsay|Jamie Oliver|Marco Pierre White|Medium|The Big Cheese|Albert Roux|Celebrity Chef Visit|Restaurant Lunch|Gareth Blackstock|Series One|High Standards
  What kind of broadcasting does Gareth try in Fame Is The Spur?|Television food programmes|Radio football commentary|Live news reporting|A travel documentary|Medium|Fame Is The Spur|Television Cookery|Food Programmes|Chef Media Appearance|Gareth Blackstock|Series One|On Screen Cooking
  In Rice And Peas, who challenges Gareth to cook in a Caribbean style?|His long-lost father|His restaurant landlord|His school friend|An Italian food critic|Medium|Rice And Peas|Gareth Father|Caribbean Cuisine|Nouveau Caribe|Family Challenge|Series One|Cultural Cooking
  Which colleague does Gareth rely on for Caribbean cooking in Rice And Peas?|Everton Stonehead|Piers|Otto|Gustave|Medium|Rice And Peas|Everton Stonehead|Caribbean Cooking|Gareth Blackstock|Kitchen Expertise|Series One Finale|Specialist Cuisine
  In the Christmas episode A Bird In The Hand, what type of farm do Gareth and Janice visit?|A free-range turkey farm|A dairy farm|A trout farm|An apple orchard|Easy|A Bird In The Hand|Turkey Farm|Christmas Episode|Free Range Poultry|Gareth And Janice|Festive Menu|1993 Special
  In A River Runs Thru It, what outdoor pastime causes complications for the restaurant team?|Fishing|Horse riding|Skiing|Cycling|Medium|A River Runs Thru It|Fishing Trip|Series Two Premiere|Restaurant Colleagues|Hiring And Firing|1994 Episode|Outdoor Pastime
  In Time Flies, what possibility makes Janice anxious about the Blackstock household?|Having a baby|Moving to France|Opening a second restaurant|Adopting a dog|Medium|Time Flies|Janice Blackstock|Possible Pregnancy|Family Planning|Gareth Blackstock|Series Two|1994 Storyline
  In Do The Right Thing, what does Gareth go to extraordinary lengths to obtain?|The finest ingredients|A new company car|A bigger restaurant sign|An expensive suit|Medium|Do The Right Thing|Quality Ingredients|Gareth Standards|Fine Dining|Procurement|Series Two|Culinary Obsession
  In A Diploma Of Miseries, what fails to acknowledge Janice's contribution?|Gareth's live television appearance|A local newspaper wedding announcement|A restaurant inspection|A speech at a school reunion|Medium|A Diploma Of Miseries|Janice Not Credited|Live Television|Gareth Blackstock|Marital Tension|Series Two|Business Partnership
  In Masterchef, which character creates a new signature dish?|Everton Stonehead|Gareth Blackstock|Janice Blackstock|Lucinda|Medium|Masterchef Episode|Everton Stonehead|Signature Dish|Emerging Culinary Talent|Gareth And Janice|Series Two|Restaurant Competition
  In Private Lives, what disrupts the kitchen when the restaurant is fully booked?|The staff bring personal problems to work|The ovens are replaced overnight|An inspector closes the premises|A television crew takes over|Medium|Private Lives|Kitchen Staff Problems|Fully Booked Restaurant|Workplace Personal Lives|Gareth Blackstock|Series Two|Busy Service
  Which year did the second series of Chef! first air?|1994|1993|1996|1998|Medium|1994 Series Two|BBC Transmission|Second Run|Chef Timeline|Mid Nineties|Episode Release|Broadcast History
  At the start of Chef!'s third series, what has Gareth been forced to do with his restaurant?|Sell it|Turn it into a hotel|Close it for renovations|Give it to Everton|Medium|Gareths True Love|Restaurant Sale|Le Chateau Anglais|Series Three|Financial Setback|Gareth Blackstock|New Ownership
  Which relationship problem does Janice pursue in the third series of Chef!?|Divorce from Gareth|A reunion with her former fiancé|A feud with her sister|Custody of a nephew|Medium|Gareth And Janice|Divorce Proceedings|Marriage Counselling|Series Three|Relationship Breakdown|1996 Storyline|Restaurant Life
  Who is the new owner of Le Chateau Anglais in the third series of Chef!?|Cyril|Everton|Piers|Otto|Medium|Cyril|Restaurant New Owner|Series Three|Le Chateau Anglais|Ownership Change|Gareth Blackstock|1996 Characters
  Which actress played the new owner's daughter Renée in the third series of Chef!?|Sophie Walker|Caroline Lee Johnson|Claire Skinner|Elizabeth Bennett|Hard|Sophie Walker|Renee|Cyril Daughter|Series Three Cast|Spoilt Kitchen Worker|New Owner Family|Actress Role
  At what event in Chef!'s final series does Gareth unexpectedly meet his childhood sweetheart Rochelle?|A wedding at his restaurant|A local cookery competition|A reunion at his school|A dinner at his father's house|Medium|Rochelle Episode|Restaurant Wedding|Gareth Meets Old Flame|Childhood Sweetheart|Le Chateau Anglais|Series Three|Romantic Reunion
  Who helps Gareth sort out his complicated love life in the final episode of Chef!?|Everton Stonehead|Cyril|Albert Roux|Piers|Medium|Paris Jamaica Finale|Everton Stonehead|Gareth Romantic Decisions|Rochelle Invitation|Series Three Ending|Kitchen Colleague|Relationship Resolution
  Which performer played Cyril, Le Chateau Anglais's new owner?|Dave Hill|Ian McNeice|Jeff Nuttall|Roger Griffiths|Hard|Dave Hill|Cyril|Restaurant Owner|Series Three Actor|Chef Cast|1996 Episodes|Character Casting`;

  const normalise = value => value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
  const questions = [];

  function addProgramme(programme, programmeTags, facts) {
    for (const line of facts.trim().split('\n')) {
      const id = 'tv_' + String(FIRST_ID + questions.length).padStart(5, '0');
      const fields = line.trim().split('|').map(value => value.trim());
      if (fields.length !== 13)
        throw new Error(`Pack 356: ${id} has ${fields.length} fields, not 13`);

      const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
      if ([question, correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(value => !value))
        throw new Error(`Pack 356: missing content in ${id}`);
      if (!['Easy', 'Medium', 'Hard'].includes(difficulty))
        throw new Error(`Pack 356: invalid difficulty in ${id}`);
      if (specificTags.length !== 7 || new Set(specificTags.map(normalise)).size !== 7)
        throw new Error(`Pack 356: duplicate or missing individual tags in ${id}`);

      const answers = [wrong1, wrong2, wrong3];
      if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4)
        throw new Error(`Pack 356: repeated answer choice in ${id}`);
      answers.splice(questions.length % 4, 0, correctAnswer);

      const tags = [...new Map([
        'Television', 'British Television', 'Comedy', 'Sitcom',
        ...programmeTags, programme, `Programme: ${programme}`,
        correctAnswer, ...specificTags
      ].map(tag => [normalise(tag), tag])).values()];

      questions.push({
        id,
        category: 'Television',
        programme,
        question,
        answers,
        correctAnswer,
        difficulty,
        tags,
        dailyEligible: true
      });
    }
  }

  addProgramme('Duty Free', ['ITV', 'Yorkshire Television', '1984-1986', 'Holiday Comedy'], dutyFreeFacts);
  addProgramme('Chef!', ['BBC One', 'Lenny Henry', '1993-1996', 'Restaurant Comedy'], chefFacts);

  // Test the actual exported question objects, not merely the text templates.
  if (!questions.length || questions[0].id !== 'tv_17465' ||
      new Set(questions.map(q => q.id)).size !== questions.length ||
      new Set(questions.map(q => normalise(q.question))).size !== questions.length)
    throw new Error('Pack 356: duplicate IDs or questions');

  if (questions.some((q, i) =>
      q.id !== 'tv_' + String(FIRST_ID + i).padStart(5, '0') ||
      q.category !== 'Television' || !q.programme ||
      !Array.isArray(q.answers) || q.answers.length !== 4 ||
      new Set(q.answers.map(normalise)).size !== 4 ||
      !q.answers.includes(q.correctAnswer) ||
      !Array.isArray(q.tags) || q.tags.length < 14 ||
      new Set(q.tags.map(normalise)).size !== q.tags.length ||
      !q.tags.includes(`Programme: ${q.programme}`) ||
      !['Easy','Medium','Hard'].includes(q.difficulty) ||
      q.dailyEligible !== true))
    throw new Error('Pack 356: invalid exported question object');

  
// Editorial expansion: 21 November 2026; storylines checked against episode guides.
// Original question IDs remain unchanged; audit additions use reserved new IDs.
const auditAdditions = [
  {
    "id": "tv_38960",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What breaks as David and Amy Pearce arrive for their holiday in Spain?",
    "answers": [
      "Amy's camera",
      "The hotel lift",
      "Their hire-car door",
      "David's suitcase"
    ],
    "correctAnswer": "David's suitcase",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Viva Espana",
      "Plot point: Broken holiday luggage",
      "Topic: Arrival mishap",
      "Characters: David and Amy",
      "Correct: David's suitcase",
      "1980s Spanish Holiday Comedy",
      "Story: Arrival mishap",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38961",
    "category": "Television",
    "programme": "Duty Free",
    "question": "Which item of David's clothing does Amy forget to pack for their holiday?",
    "answers": [
      "His shoes",
      "His swimming trunks",
      "His dinner jacket",
      "His socks"
    ],
    "correctAnswer": "His shoes",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Viva Espana",
      "Plot point: Missing footwear",
      "Topic: Packing problems",
      "Characters: Amy and David",
      "Correct: His shoes",
      "1980s Spanish Holiday Comedy",
      "Story: Packing problems",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38962",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What does Linda Cochran dislike about the holidays she takes abroad?",
    "answers": [
      "Flying at night",
      "Foreign holidays themselves",
      "Swimming pools",
      "Guided museum tours"
    ],
    "correctAnswer": "Foreign holidays themselves",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Viva Espana",
      "Plot point: Holiday complaints",
      "Topic: Linda's attitude",
      "Characters: Linda and Robert",
      "Correct: Foreign holidays themselves",
      "1980s Spanish Holiday Comedy",
      "Story: Linda's attitude",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38963",
    "category": "Television",
    "programme": "Duty Free",
    "question": "Which famous bullfighter exposes David's exaggerated claims of expertise during the Spanish holiday?",
    "answers": [
      "El Cordobés",
      "El Niño",
      "El Macho",
      "El Toro"
    ],
    "correctAnswer": "El Macho",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: El Macho",
      "Plot point: Bullfighting boast exposed",
      "Topic: Matador encounter",
      "Characters: David and Linda",
      "Correct: El Macho",
      "1980s Spanish Holiday Comedy",
      "Story: Matador encounter",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38964",
    "category": "Television",
    "programme": "Duty Free",
    "question": "Which stance does Amy take during the bullfight that David fails to support?",
    "answers": [
      "Support for a rival matador",
      "A demand for cheaper tickets",
      "A protest about the heat",
      "Opposition to blood sports"
    ],
    "correctAnswer": "Opposition to blood sports",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: El Macho",
      "Plot point: Protest at bullfight",
      "Topic: Animal welfare",
      "Characters: Amy and David",
      "Correct: Opposition to blood sports",
      "1980s Spanish Holiday Comedy",
      "Story: Animal welfare",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38965",
    "category": "Television",
    "programme": "Duty Free",
    "question": "Which exercise discipline practised by Linda inspires David's disastrous attempt to get fit?",
    "answers": [
      "Yoga",
      "Pilates",
      "Tai chi",
      "Boxing"
    ],
    "correctAnswer": "Yoga",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Praying Mantis",
      "Plot point: Fitness exercises",
      "Topic: Linda's workout",
      "Characters: David and Linda",
      "Correct: Yoga",
      "1980s Spanish Holiday Comedy",
      "Story: Linda's workout",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38966",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What injury keeps David in bed after trying to improve his fitness to impress Linda?",
    "answers": [
      "A sprained wrist",
      "A bad back",
      "A broken toe",
      "A stiff neck"
    ],
    "correctAnswer": "A bad back",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Praying Mantis",
      "Plot point: Exercise-related back injury",
      "Topic: Romantic show-off",
      "Characters: David Pearce",
      "Correct: A bad back",
      "1980s Spanish Holiday Comedy",
      "Story: Romantic show-off",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38967",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What does Amy throw from a balcony to prevent David meeting Linda?",
    "answers": [
      "His hotel key",
      "His wristwatch",
      "One of his shoes",
      "A tennis racket"
    ],
    "correctAnswer": "One of his shoes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Praying Mantis",
      "Plot point: Balcony sabotage",
      "Topic: Meeting prevented",
      "Characters: Amy and David",
      "Correct: One of his shoes",
      "1980s Spanish Holiday Comedy",
      "Story: Meeting prevented",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38968",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What item does David secretly buy for Linda during a coach excursion to the mountains?",
    "answers": [
      "A silver necklace",
      "A leather handbag",
      "A sun hat",
      "A gypsy shawl"
    ],
    "correctAnswer": "A gypsy shawl",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Spanish Lace",
      "Plot point: Romantic gift",
      "Topic: Mountain excursion",
      "Characters: David and Linda",
      "Correct: A gypsy shawl",
      "1980s Spanish Holiday Comedy",
      "Story: Mountain excursion",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38969",
    "category": "Television",
    "programme": "Duty Free",
    "question": "Who buys Linda another shawl and makes David's earlier gift awkward?",
    "answers": [
      "Her husband Robert",
      "Her brother Nigel",
      "Her cousin Paul",
      "Her father"
    ],
    "correctAnswer": "Her husband Robert",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Spanish Lace",
      "Plot point: Competing shawl gifts",
      "Topic: Spouses and presents",
      "Characters: Robert and Linda",
      "Correct: Her husband Robert",
      "1980s Spanish Holiday Comedy",
      "Story: Spouses and presents",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38970",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What does Linda put on her balcony to signal to David that it is safe to visit her room?",
    "answers": [
      "Flowers",
      "Towels",
      "A lantern",
      "A red scarf"
    ],
    "correctAnswer": "Towels",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Bedroom Farce",
      "Plot point: Secret balcony signals",
      "Topic: Illicit rendezvous",
      "Characters: Linda and David",
      "Correct: Towels",
      "1980s Spanish Holiday Comedy",
      "Story: Illicit rendezvous",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38971",
    "category": "Television",
    "programme": "Duty Free",
    "question": "A man of which nationality does Robert wrongly believe is Linda's lover?",
    "answers": [
      "German",
      "Italian",
      "French",
      "Dutch"
    ],
    "correctAnswer": "French",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Bedroom Farce",
      "Plot point: Mistaken nationality",
      "Topic: False suspicion",
      "Characters: Robert Cochran",
      "Correct: French",
      "1980s Spanish Holiday Comedy",
      "Story: False suspicion",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38972",
    "category": "Television",
    "programme": "Duty Free",
    "question": "Whose hotel room does David mistakenly visit after Amy alters Linda's balcony signals?",
    "answers": [
      "A French photographer's",
      "The hotel's manager's",
      "A British honeymooning couple's",
      "A German couple's"
    ],
    "correctAnswer": "A German couple's",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Bedroom Farce",
      "Plot point: Misleading balcony signals",
      "Topic: Wrong room",
      "Characters: David and Amy",
      "Correct: A German couple's",
      "1980s Spanish Holiday Comedy",
      "Story: Wrong room",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38973",
    "category": "Television",
    "programme": "Duty Free",
    "question": "Which sport is Robert playing while David and Linda find time alone during the holiday?",
    "answers": [
      "Golf",
      "Tennis",
      "Squash",
      "Cricket"
    ],
    "correctAnswer": "Golf",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Forty Love",
      "Plot point: Robert absent for sport",
      "Topic: Golf outing",
      "Characters: Robert Cochran",
      "Correct: Golf",
      "1980s Spanish Holiday Comedy",
      "Story: Golf outing",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38974",
    "category": "Television",
    "programme": "Duty Free",
    "question": "How does Amy embarrass David and Linda after interrupting their secret romantic encounter?",
    "answers": [
      "By releasing a pet parrot",
      "With hot tea and sticky cakes",
      "With a tray of cold fish",
      "By inviting the hotel manager to sing"
    ],
    "correctAnswer": "With hot tea and sticky cakes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Forty Love",
      "Plot point: Amy spoils secret meeting",
      "Topic: Tea-and-cakes revenge",
      "Characters: Amy and Linda",
      "Correct: With hot tea and sticky cakes",
      "1980s Spanish Holiday Comedy",
      "Story: Tea-and-cakes revenge",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38975",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What does Amy hide in David's suitcase so that he is detained while trying to leave with Linda?",
    "answers": [
      "Illegal cigarettes",
      "Foreign currency",
      "Hotel property",
      "Someone else's passport"
    ],
    "correctAnswer": "Hotel property",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Hasta La Vista",
      "Plot point: Suitcase filled with hotel goods",
      "Topic: Amy's scheme",
      "Characters: David and Amy",
      "Correct: Hotel property",
      "1980s Spanish Holiday Comedy",
      "Story: Amy's scheme",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38976",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What nickname for a supposed kleptomaniac does Amy use when warning Linda away from David?",
    "answers": [
      "The Magpie",
      "The Fox",
      "The Ferret",
      "The Weasel"
    ],
    "correctAnswer": "The Weasel",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Hasta La Vista",
      "Plot point: False criminal nickname",
      "Topic: Affair ends",
      "Characters: Amy and Linda",
      "Correct: The Weasel",
      "1980s Spanish Holiday Comedy",
      "Story: Affair ends",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38977",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What disguise does David wear when he attempts to escape the hotel after being detained?",
    "answers": [
      "Women's clothing",
      "A waiter's uniform",
      "A police uniform",
      "A matador's costume"
    ],
    "correctAnswer": "Women's clothing",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Hasta La Vista",
      "Plot point: Escape in disguise",
      "Topic: Hotel embarrassment",
      "Characters: David Pearce",
      "Correct: Women's clothing",
      "1980s Spanish Holiday Comedy",
      "Story: Hotel embarrassment",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38978",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What hotel worker's uniform does David borrow while stuck wearing women's clothes?",
    "answers": [
      "A cleaner's apron",
      "A waiter's uniform",
      "A chauffeur's jacket",
      "A chef's coat"
    ],
    "correctAnswer": "A waiter's uniform",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Manana",
      "Plot point: Borrowed work clothes",
      "Topic: Hotel staff disguise",
      "Characters: David and Carlos",
      "Correct: A waiter's uniform",
      "1980s Spanish Holiday Comedy",
      "Story: Hotel staff disguise",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38979",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What do the others wrongly think David has tried to do, making them more sympathetic to him?",
    "answers": [
      "Run away to Morocco",
      "Join the French Foreign Legion",
      "Drown himself",
      "Climb a hotel roof"
    ],
    "correctAnswer": "Drown himself",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Manana",
      "Plot point: Misunderstood disappearance",
      "Topic: Holiday reconciliation",
      "Characters: David and guests",
      "Correct: Drown himself",
      "1980s Spanish Holiday Comedy",
      "Story: Holiday reconciliation",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38980",
    "category": "Television",
    "programme": "Duty Free",
    "question": "Which novice gambler proves more successful at the casino than David?",
    "answers": [
      "Linda Cochran",
      "Carlos the waiter",
      "Robert Cochran",
      "Amy Pearce"
    ],
    "correctAnswer": "Amy Pearce",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Casino",
      "Plot point: Unexpected winnings",
      "Topic: Casino success",
      "Characters: Amy and David",
      "Correct: Amy Pearce",
      "1980s Spanish Holiday Comedy",
      "Story: Casino success",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38981",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What are the seemingly newlywed English couple at the hotel really doing?",
    "answers": [
      "Pretending to be newlyweds to refresh their marriage",
      "Celebrating their first anniversary",
      "Preparing for an actual wedding",
      "Hiding an engagement from their families"
    ],
    "correctAnswer": "Pretending to be newlyweds to refresh their marriage",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Couples",
      "Plot point: Marriage role-play",
      "Topic: New visitors",
      "Characters: Guest couple",
      "Correct: Pretending to be newlyweds to refresh their marriage",
      "1980s Spanish Holiday Comedy",
      "Story: New visitors",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38982",
    "category": "Television",
    "programme": "Duty Free",
    "question": "Which actor appears as himself at the hotel and becomes interested in Amy rather than Linda?",
    "answers": [
      "John Noakes",
      "Frazer Hines",
      "Christopher Timothy",
      "Robert Lindsay"
    ],
    "correctAnswer": "Frazer Hines",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: El Astro",
      "Plot point: Soap actor guest",
      "Topic: Celebrity hotel visitor",
      "Characters: Amy and Linda",
      "Correct: Frazer Hines",
      "1980s Spanish Holiday Comedy",
      "Story: Celebrity hotel visitor",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38983",
    "category": "Television",
    "programme": "Duty Free",
    "question": "From which North African city has Amy returned when asked to deliver a mysterious box?",
    "answers": [
      "Casablanca",
      "Tunis",
      "Tangiers",
      "Algiers"
    ],
    "correctAnswer": "Tangiers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Pepe",
      "Plot point: Boat journey abroad",
      "Topic: Mysterious box",
      "Characters: Amy Pearce",
      "Correct: Tangiers",
      "1980s Spanish Holiday Comedy",
      "Story: Mysterious box",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38984",
    "category": "Television",
    "programme": "Duty Free",
    "question": "Who becomes affected after David empties the suspicious box over the hotel's balcony?",
    "answers": [
      "David and Amy",
      "Carlos and the receptionist",
      "A German couple",
      "Robert and Linda"
    ],
    "correctAnswer": "Robert and Linda",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Pepe",
      "Plot point: Balcony powder incident",
      "Topic: Unexpected effect",
      "Characters: Robert and Linda",
      "Correct: Robert and Linda",
      "1980s Spanish Holiday Comedy",
      "Story: Unexpected effect",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38985",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What photographic evidence does David's childhood acquaintance Kev give to Amy?",
    "answers": [
      "A photograph of David kissing Linda",
      "A photograph of David losing at tennis",
      "A photograph of Robert gambling",
      "A picture of Amy with an actor"
    ],
    "correctAnswer": "A photograph of David kissing Linda",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Snap",
      "Plot point: Unwanted incriminating photo",
      "Topic: Childhood rival",
      "Characters: Kev Wilson",
      "Correct: A photograph of David kissing Linda",
      "1980s Spanish Holiday Comedy",
      "Story: Childhood rival",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38986",
    "category": "Television",
    "programme": "Duty Free",
    "question": "At what bar do David and Linda arrange their final secret meeting before leaving Spain?",
    "answers": [
      "Carlos's Café",
      "Pedro's Bar",
      "The Marina Tavern",
      "El Sol Bar"
    ],
    "correctAnswer": "Pedro's Bar",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Adios",
      "Plot point: Final holiday rendezvous",
      "Topic: Bar location",
      "Characters: David and Linda",
      "Correct: Pedro's Bar",
      "1980s Spanish Holiday Comedy",
      "Story: Bar location",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38987",
    "category": "Television",
    "programme": "Duty Free",
    "question": "Which supposedly accompanying friend does David cite to conceal his second visit to Spain?",
    "answers": [
      "Kev Wilson",
      "Neville",
      "Tommy Wright",
      "Carlos"
    ],
    "correctAnswer": "Tommy Wright",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Winter Break",
      "Plot point: False holiday alibi",
      "Topic: Old mate invented",
      "Characters: David and Amy",
      "Correct: Tommy Wright",
      "1980s Spanish Holiday Comedy",
      "Story: Old mate invented",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38988",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What devastating detail does Amy reveal about the friend David claimed was holidaying with him?",
    "answers": [
      "Tommy Wright had moved to Canada",
      "Tommy Wright was in prison",
      "Tommy Wright was abroad with Robert",
      "Tommy Wright died three years earlier"
    ],
    "correctAnswer": "Tommy Wright died three years earlier",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Deja Vu",
      "Plot point: Exposed false holiday alibi",
      "Topic: Deceased friend",
      "Characters: Amy and David",
      "Correct: Tommy Wright died three years earlier",
      "1980s Spanish Holiday Comedy",
      "Story: Deceased friend",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38989",
    "category": "Television",
    "programme": "Duty Free",
    "question": "Which holiday television programme is filming at the Spanish hotel when the main couples are interviewed?",
    "answers": [
      "Wish You Were Here...?",
      "Holiday",
      "Travel Man",
      "The Travel Show"
    ],
    "correctAnswer": "Wish You Were Here...?",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Close Up",
      "Plot point: Holiday TV filming",
      "Topic: Judith Chalmers",
      "Characters: Hotel media appearance",
      "Correct: Wish You Were Here...?",
      "1980s Spanish Holiday Comedy",
      "Story: Judith Chalmers",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38990",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What manner of speaking makes David's television interview especially pretentious?",
    "answers": [
      "A repeated whisper",
      "An affected accent",
      "Speaking only in Spanish",
      "Using a squeaky voice"
    ],
    "correctAnswer": "An affected accent",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Close Up",
      "Plot point: Embarrassing television interview",
      "Topic: David puts on airs",
      "Characters: David Pearce",
      "Correct: An affected accent",
      "1980s Spanish Holiday Comedy",
      "Story: David puts on airs",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38991",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What activity does Linda pretend to teach Neville while he carries secret messages to David?",
    "answers": [
      "Tennis",
      "Dancing",
      "Swimming",
      "Snorkelling"
    ],
    "correctAnswer": "Swimming",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: The Go-Between",
      "Plot point: False lessons",
      "Topic: Secret go-between",
      "Characters: Linda and Neville",
      "Correct: Swimming",
      "1980s Spanish Holiday Comedy",
      "Story: Secret go-between",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38992",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What pattern distinguishes the hold-all that David mistakenly takes from another traveller?",
    "answers": [
      "Leopard print",
      "Red stripes",
      "Blue polka dots",
      "Tartan"
    ],
    "correctAnswer": "Tartan",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Costa del Crime",
      "Plot point: Similar travel bags",
      "Topic: Airport mix-up",
      "Characters: David Pearce",
      "Correct: Tartan",
      "1980s Spanish Holiday Comedy",
      "Story: Airport mix-up",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38993",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What does David discover inside the wrong hold-all picked up at the airport?",
    "answers": [
      "Bundles of banknotes",
      "A set of diamonds",
      "Gold coins",
      "A forged passport"
    ],
    "correctAnswer": "Bundles of banknotes",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Costa del Crime",
      "Plot point: Mysterious bag contents",
      "Topic: Criminal hotel visit",
      "Characters: David and Linda",
      "Correct: Bundles of banknotes",
      "1980s Spanish Holiday Comedy",
      "Story: Criminal hotel visit",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38994",
    "category": "Television",
    "programme": "Duty Free",
    "question": "Which political party is supported by the raffle that shocks Labour-voting Amy?",
    "answers": [
      "The Liberal Party",
      "The Conservative Party",
      "The Labour Party",
      "The Green Party"
    ],
    "correctAnswer": "The Conservative Party",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Cause Celebre",
      "Plot point: Political raffle",
      "Topic: Amy's socialist principles",
      "Characters: David and Amy",
      "Correct: The Conservative Party",
      "1980s Spanish Holiday Comedy",
      "Story: Amy's socialist principles",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38995",
    "category": "Television",
    "programme": "Duty Free",
    "question": "Which nationality's guests heckle Robert during his performance at the hotel's fancy-dress party?",
    "answers": [
      "French",
      "Swedish",
      "German",
      "Italian"
    ],
    "correctAnswer": "German",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Party Night",
      "Plot point: Heckling at hotel show",
      "Topic: Robert's monologue",
      "Characters: Robert Cochran",
      "Correct: German",
      "1980s Spanish Holiday Comedy",
      "Story: Robert's monologue",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38996",
    "category": "Television",
    "programme": "Duty Free",
    "question": "What costume must David wear when Amy gets into the Christmas spirit at the hotel?",
    "answers": [
      "An elf",
      "A snowman",
      "A reindeer",
      "Father Christmas"
    ],
    "correctAnswer": "Father Christmas",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: A Duty Free Christmas",
      "Plot point: Festive hotel costume",
      "Topic: Christmas decorations",
      "Characters: David and Amy",
      "Correct: Father Christmas",
      "1980s Spanish Holiday Comedy",
      "Story: Christmas decorations",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38997",
    "category": "Television",
    "programme": "Duty Free",
    "question": "Over what span of holiday time do the first two Duty Free series take place?",
    "answers": [
      "The same two-week holiday",
      "Two separate summer holidays",
      "One weekend",
      "An entire winter season"
    ],
    "correctAnswer": "The same two-week holiday",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Duty Free",
      "Programme: Duty Free",
      "ITV",
      "Yorkshire Television",
      "Episode: Series continuity",
      "Plot point: Holiday that never ends",
      "Topic: Series 1 and 2 timeline",
      "Characters: Pearces and Cochrans",
      "Correct: The same two-week holiday",
      "1980s Spanish Holiday Comedy",
      "Story: Series 1 and 2 timeline",
      "Source: https://en.wikipedia.org/wiki/Duty_Free_(TV_series)"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38998",
    "category": "Television",
    "programme": "Chef!",
    "question": "Which local medium must Gareth court to raise his profile while his cottage is on the market?",
    "answers": [
      "Radio phone-ins",
      "The local press",
      "Community theatre",
      "A newspaper letters page"
    ],
    "correctAnswer": "The local press",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Chef!",
      "Programme: Chef!",
      "BBC One",
      "Lenny Henry",
      "Episode: Subject To Contract",
      "Plot point: Restaurant publicity",
      "Topic: Property sale",
      "Characters: Gareth Blackstock",
      "Correct: The local press",
      "1990s Restaurant Comedy",
      "Story: Property sale",
      "Source: https://www.comedy.co.uk/tv/chef/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38999",
    "category": "Television",
    "programme": "Chef!",
    "question": "Who takes control of the restaurant's business management while Gareth enters TV cooking?",
    "answers": [
      "Everton Stonehead",
      "Lucinda",
      "Janice Blackstock",
      "Piers"
    ],
    "correctAnswer": "Janice Blackstock",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Chef!",
      "Programme: Chef!",
      "BBC One",
      "Lenny Henry",
      "Episode: Fame Is The Spur",
      "Plot point: Restaurant business handover",
      "Topic: Chef on television",
      "Characters: Janice and Gareth",
      "Correct: Janice Blackstock",
      "1990s Restaurant Comedy",
      "Story: Chef on television",
      "Source: https://www.comedy.co.uk/tv/chef/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39000",
    "category": "Television",
    "programme": "Chef!",
    "question": "What does Janice dislike seeing walking around on the farm before the restaurant's Christmas meal?",
    "answers": [
      "A flock of geese outside the barn",
      "The cattle intended for the next day's meal",
      "Live pigs being unloaded",
      "The turkeys intended as ingredients"
    ],
    "correctAnswer": "The turkeys intended as ingredients",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Chef!",
      "Programme: Chef!",
      "BBC One",
      "Lenny Henry",
      "Episode: A Bird In The Hand",
      "Plot point: Christmas farm discomfort",
      "Topic: Free-range turkeys",
      "Characters: Janice Blackstock",
      "Correct: The turkeys intended as ingredients",
      "1990s Restaurant Comedy",
      "Story: Free-range turkeys",
      "Source: https://www.comedy.co.uk/tv/chef/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39001",
    "category": "Television",
    "programme": "Chef!",
    "question": "What icy outdoor activity does Janice blame for Gareth's sudden vigour while she suspects pregnancy?",
    "answers": [
      "Fishing in sub-zero temperatures",
      "Winter hiking",
      "Skiing in the Alps",
      "Swimming in an outdoor pool"
    ],
    "correctAnswer": "Fishing in sub-zero temperatures",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Chef!",
      "Programme: Chef!",
      "BBC One",
      "Lenny Henry",
      "Episode: Time Flies",
      "Plot point: Winter fishing outing",
      "Topic: Possible pregnancy",
      "Characters: Janice and Gareth",
      "Correct: Fishing in sub-zero temperatures",
      "1990s Restaurant Comedy",
      "Story: Possible pregnancy",
      "Source: https://www.comedy.co.uk/tv/chef/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39002",
    "category": "Television",
    "programme": "Chef!",
    "question": "Which kitchen colleague risks losing his job by giving Gareth advice about romance?",
    "answers": [
      "Piers",
      "Everton Stonehead",
      "Cyril",
      "Lucinda"
    ],
    "correctAnswer": "Everton Stonehead",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Chef!",
      "Programme: Chef!",
      "BBC One",
      "Lenny Henry",
      "Episode: A Diploma Of Miseries",
      "Plot point: Romantic coaching of chef",
      "Topic: Employee challenges boss",
      "Characters: Everton and Gareth",
      "Correct: Everton Stonehead",
      "1990s Restaurant Comedy",
      "Story: Employee challenges boss",
      "Source: https://www.comedy.co.uk/tv/chef/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39003",
    "category": "Television",
    "programme": "Chef!",
    "question": "What do Gareth and Janice scheme to prevent after Everton creates his new signature dish?",
    "answers": [
      "A rival restaurant stealing Janice's recipes",
      "Cyril buying the restaurant",
      "Everton becoming too successful to keep at the restaurant",
      "Gareth going on a cooking tour"
    ],
    "correctAnswer": "Everton becoming too successful to keep at the restaurant",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Chef!",
      "Programme: Chef!",
      "BBC One",
      "Lenny Henry",
      "Episode: Masterchef",
      "Plot point: Suppressing colleague's success",
      "Topic: New signature dish",
      "Characters: Gareth Janice and Everton",
      "Correct: Everton becoming too successful to keep at the restaurant",
      "1990s Restaurant Comedy",
      "Story: New signature dish",
      "Source: https://www.comedy.co.uk/tv/chef/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39004",
    "category": "Television",
    "programme": "Chef!",
    "question": "To which French city does Gareth travel to enter an international cookery competition?",
    "answers": [
      "Paris",
      "Marseille",
      "Bordeaux",
      "Lyon"
    ],
    "correctAnswer": "Lyon",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Chef!",
      "Programme: Chef!",
      "BBC One",
      "Lenny Henry",
      "Episode: England Expects",
      "Plot point: Cooking competition location",
      "Topic: Series two finale",
      "Characters: Gareth Blackstock",
      "Correct: Lyon",
      "1990s Restaurant Comedy",
      "Story: Series two finale",
      "Source: https://www.comedy.co.uk/tv/chef/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39005",
    "category": "Television",
    "programme": "Chef!",
    "question": "Which appointment does Gareth miss just before Janice leaves and begins divorce proceedings?",
    "answers": [
      "A house valuation",
      "Marriage counselling",
      "A job interview",
      "A television audition"
    ],
    "correctAnswer": "Marriage counselling",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Chef!",
      "Programme: Chef!",
      "BBC One",
      "Lenny Henry",
      "Episode: Gareth's True Love",
      "Plot point: Failed attempt at relationship repair",
      "Topic: Series three opening",
      "Characters: Gareth and Janice",
      "Correct: Marriage counselling",
      "1990s Restaurant Comedy",
      "Story: Series three opening",
      "Source: https://www.comedy.co.uk/tv/chef/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39006",
    "category": "Television",
    "programme": "Chef!",
    "question": "What family connection brings Renée into Gareth's kitchen team in the third series of Chef!?",
    "answers": [
      "She is Everton's sister",
      "She is Janice's cousin",
      "She is the new owner's daughter",
      "She is Gareth's niece"
    ],
    "correctAnswer": "She is the new owner's daughter",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Chef!",
      "Programme: Chef!",
      "BBC One",
      "Lenny Henry",
      "Episode: Reeny/Renee",
      "Plot point: New owner's daughter",
      "Topic: Kitchen staffing",
      "Characters: Cyril and Renee",
      "Correct: She is the new owner's daughter",
      "1990s Restaurant Comedy",
      "Story: Kitchen staffing",
      "Source: https://www.comedy.co.uk/tv/chef/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39007",
    "category": "Television",
    "programme": "Chef!",
    "question": "What difficulty affects Gareth's dealings with restaurant diners as his marriage breaks down?",
    "answers": [
      "Loss of his sense of taste",
      "Persistent forgetfulness",
      "A recurring stammer",
      "Severe mood swings"
    ],
    "correctAnswer": "Severe mood swings",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Chef!",
      "Programme: Chef!",
      "BBC One",
      "Lenny Henry",
      "Episode: Lessons In Talking",
      "Plot point: Strained dining-room interactions",
      "Topic: Divorce stress",
      "Characters: Gareth Blackstock",
      "Correct: Severe mood swings",
      "1990s Restaurant Comedy",
      "Story: Divorce stress",
      "Source: https://www.comedy.co.uk/tv/chef/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39008",
    "category": "Television",
    "programme": "Chef!",
    "question": "Who arrives at Le Chateau Anglais and worsens Gareth's mood as he copes with his failed marriage?",
    "answers": [
      "His father",
      "His former schoolteacher",
      "His brother",
      "An estranged uncle"
    ],
    "correctAnswer": "His father",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Chef!",
      "Programme: Chef!",
      "BBC One",
      "Lenny Henry",
      "Episode: Love In The Air",
      "Plot point: Family visit",
      "Topic: Marriage collapse",
      "Characters: Gareth and father",
      "Correct: His father",
      "1990s Restaurant Comedy",
      "Story: Marriage collapse",
      "Source: https://www.comedy.co.uk/tv/chef/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39009",
    "category": "Television",
    "programme": "Chef!",
    "question": "Which city is Rochelle hoping Gareth will join her in at the end of Chef!?",
    "answers": [
      "Lyon",
      "Rome",
      "Paris",
      "Barcelona"
    ],
    "correctAnswer": "Paris",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Chef!",
      "Programme: Chef!",
      "BBC One",
      "Lenny Henry",
      "Episode: Paris? Jamaica?",
      "Plot point: Rochelle travel plans",
      "Topic: Series finale",
      "Characters: Gareth and Rochelle",
      "Correct: Paris",
      "1990s Restaurant Comedy",
      "Story: Series finale",
      "Source: https://www.comedy.co.uk/tv/chef/episodes/"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if (new Set(questions.map(q => q.id)).size !== questions.length ||
 new Set(questions.map(q => normalise(q.question))).size !== questions.length ||
 questions.some(q => q.answers.length !== 4 ||
   new Set(q.answers.map(normalise)).size !== 4 ||
   q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
   q.tags.length < 14 || !q.tags.includes('Programme: ' + q.programme) ||
   q.dailyEligible !== true)) throw Error('Pack 356 episode expansion invalid');
module.exports = questions;
