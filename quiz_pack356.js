
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
  Which mode of transport causes David and Amy problems in Spanish Lace?|A donkey|A cable car|A ferry|A helicopter|Medium|Spanish Lace|Donkey Ride|Mountain Excursion|Amy And David|Spanish Countryside|Series One|Holiday Mishap
  In Bedroom Farce, which late-night activity makes Amy suspicious of David?|A midnight swim|A card game|A disco competition|A fishing trip|Medium|Bedroom Farce|Midnight Swim|Amy Suspicions|David And Linda|Secret Romance|Series One|Swimming Pool
  In Forty Love, which sport does David arrange to play with Linda?|Tennis|Golf|Badminton|Squash|Medium|Forty Love|Tennis Court|David And Linda|Amy Pearce|Series One|Romantic Rendezvous|Sporting Excuse
  Which first-series finale sees Amy determined to hold on to David despite his affair?|Hasta La Vista|Casino|Snap|Party Night|Medium|Hasta La Vista|Series One Finale|Amy Pearce|David And Linda Affair|Marriage Conflict|1984 Episode|Hotel Intrigue
  In the second-series episode Casino, where does David risk the couple's money?|At a casino|At a horse auction|On the stock exchange|At a bingo hall|Easy|Casino Episode|Holiday Gambling|David Pearce|Money Worries|Series Two|Spanish Casino|Risky Spending
  In Couples, what kind of visitors arrive at the holiday hotel?|An English couple on honeymoon|A German football team|A group of schoolteachers|A party of wedding photographers|Medium|Couples Episode|Honeymooning Visitors|English Newlyweds|Hotel Guests|Series Two|Relationship Confusion|Spanish Holiday
  In El Astro, who attracts the attention of a visiting television star?|Amy Pearce|Linda Cochran|Carlos the waiter|Robert Cochran|Medium|El Astro|Television Star|Amy Pearce|Unexpected Admirer|Series Two|Holiday Romance|Celebrity Visitor
  In Pepe, what does Amy reluctantly agree to look after on a boat trip?|A box|A puppy|A fishing rod|A handbag|Medium|Pepe Episode|Boat Trip|Amy Pearce|Mysterious Box|Series Two|Unwanted Responsibility|Holiday Excursion
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
  In the episode Rochelle, who catches Gareth's eye at a wedding in his restaurant?|His childhood sweetheart Rochelle|The bride's aunt|A television presenter|A former bank manager|Medium|Rochelle Episode|Childhood Sweetheart|Restaurant Wedding|Gareth Romance|Series Three|Old Flame|1996 Episode
  In Paris? Jamaica?, to which city does Rochelle invite Gareth?|Paris|Rome|Barcelona|Dublin|Easy|Paris Jamaica Episode|Rochelle Invitation|Paris|Romantic Decision|Gareth Blackstock|Series Finale|Travel Plans
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

  module.exports = questions;
