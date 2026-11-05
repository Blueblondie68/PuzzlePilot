
 // quiz_pack298.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: 30 Rock - Series Three (2008-2009)
 // Covers all 22 broadcast episodes, in chronological order.
 // Every question includes seven individually selected specialist tags.
 // Keep quiz_bank.js unchanged until the agreed end-of-session connection.
 // Row format: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven tags

 const groups = [
   {
     topic: 'Do-Over, Believe in the Stars, Night Court and Gavin Volure',
     facts: `Which actress plays adoption evaluator Bev in the Series Three premiere of 30 Rock?|Megan Mullally|Jennifer Aniston|Carrie Fisher|Elaine Stritch|Medium|Megan Mullally|Bev|Adoption Evaluator|Do Over|Guest Actress|Liz Lemon|2008 Premiere
 What does Liz hope to persuade the visiting evaluator she is capable of doing in Do-Over?|Adopting a child|Running GE|Moving to Chicago|Hosting a talk show|Easy|Liz Lemon|Adoption Application|Do Over|Bev|Parenthood Plans|Workplace Visit|Family Ambition
 Which executive stands in Jack's way when he returns from Washington to NBC in Do-Over?|Devon Banks|Don Geiss|Floyd DeBarber|Milton Greene|Easy|Jack Donaghy|Devon Banks|Do Over|NBC Return|Office Power Struggle|Corporate Demotion|2008 Story
 Which GE executive's daughter is involved in Devon Banks's plans to retain power in Do-Over?|Kathy Geiss|C.C. Cunningham|Bianca Donaghy|Colleen Donaghy|Medium|Kathy Geiss|Devon Banks|Don Geiss|Do Over|Corporate Succession|Family Influence|GE Management
 Which television personality does Liz believe she has met on a flight in Believe in the Stars?|Oprah Winfrey|Ellen DeGeneres|Barbara Walters|Whoopi Goldberg|Easy|Oprah Winfrey|Believe In The Stars|Airline Flight|Liz Lemon|Celebrity Encounter|Guest Appearance|2008 Episode
 To which city does Liz travel in Believe in the Stars before meeting her famous fellow passenger?|Chicago|Boston|Cleveland|Atlanta|Easy|Chicago|Liz Lemon|Believe In The Stars|Jury Duty|Return Flight|Travel|2008 Story
 What kind of televised competition does Kenneth discover NBC has faked in Believe in the Stars?|Olympic events|A national spelling bee|A boxing championship|An awards ceremony|Medium|Kenneth Parcell|Staged Olympics|Believe In The Stars|NBC Ratings|Network Deception|Jack Donaghy|Sports Broadcast
 What do Jenna and Tracy disguise themselves as to compare their experiences in Believe in the Stars?|People of different race and gender|Members of a royal family|Two network executives|Professional athletes|Medium|Jenna Maroney|Tracy Jordan|Social Experiment|Believe In The Stars|Race And Gender|Disguises|Personal Privilege
 Which Friends actress plays Liz's former roommate Claire Harper in Series Three?|Jennifer Aniston|Courteney Cox|Lisa Kudrow|Christina Applegate|Easy|Jennifer Aniston|Claire Harper|Friends Actress|Night Court Episode|Guest Casting|Liz Roommate|Jack Romance
 Which 1980s sitcom does Tracy help reunite cast members from to cheer up Kenneth?|Night Court|Cheers|Taxi|Family Ties|Easy|Night Court|Kenneth Parcell|Tracy Jordan|Cast Reunion|Page Uniforms|1980s Sitcom|2008 Guest Stars
 Which actor returns as himself to participate in Kenneth's desired Night Court ending?|Harry Anderson|Ted Danson|Tony Danza|John Larroquette|Medium|Harry Anderson|Night Court|Kenneth Parcell|Series Finale Reimagined|Guest Actor|Television Reunion|2008 Episode
 What change at work initially upsets Kenneth in The One with the Cast of Night Court?|New NBC page uniforms|A cancelled studio tour|A pay cut|The removal of the lift|Easy|Kenneth Parcell|Page Uniforms|Night Court Episode|NBC Pages|Workplace Change|Tracy Jordan|2008 Story
 Which comedian portrays the mysterious businessman Gavin Volure?|Steve Martin|Martin Short|Chevy Chase|Dan Aykroyd|Easy|Steve Martin|Gavin Volure|Guest Casting|Liz Lemon|Eccentric Businessman|2008 Episode|Comedy Actor
 Which member of Tracy's family does he begin to fear after hearing about the Menendez brothers?|His sons|His father|His brother|His wife|Medium|Tracy Jordan|Menendez Brothers|Gavin Volure|Parental Fears|Tracy Children|Crime Story|Family Suspicion
 Whose savings are lost after an investment in Gavin Volure's venture?|Kenneth Parcell's|Liz Lemon's|Jenna Maroney's|Pete Hornberger's|Medium|Kenneth Parcell|Gavin Volure|Bad Investment|Personal Savings|Jack Donaghy|Business Fraud|2008 Plot
 What is Gavin Volure's connection to Liz when they first meet?|A wealthy acquaintance of Jack|Her former schoolteacher|Her adoption officer|A new TGS writer|Easy|Gavin Volure|Liz Lemon|Jack Donaghy|Business Acquaintance|Unusual Courtship|Social Introduction|2008 Episode`,
   },
   {
     topic: 'Reunion, Christmas Special, Senor Macho Solo and Flu Shot',
     facts: `What school event does Jack persuade Liz to attend in Reunion?|Her high school reunion|A university graduation|A school governors meeting|A parents evening|Easy|Liz Lemon|High School Reunion|Reunion Episode|Jack Donaghy|Past Classmates|School Memories|2008 Story
 What does Liz discover about how her classmates remember her at the reunion?|They remember her as the bully|They believe she was head girl|They think she was a famous athlete|They remember her as a teacher|Medium|Liz Lemon|School Bully|Reunion Episode|Classmates Memories|Unpleasant Discovery|Teenage Years|Social Reversal
 After waking from his coma in Reunion, what does Don Geiss decide about the GE chief executive position?|He will keep the job himself|He will give it to Devon Banks|He will appoint Tracy Jordan|He will abolish the role|Medium|Don Geiss|GE Chief Executive|Reunion Episode|Coma Recovery|Jack Donaghy|Career Disappointment|Corporate Leadership
 Which NBC page attracts unwanted celebrity-style attention from Tracy and Jenna in Reunion?|Kenneth Parcell|Jonathan|Josh Girard|Cerie Xerox|Easy|Kenneth Parcell|Tracy Jordan|Jenna Maroney|Reunion Episode|Staff Attention|Celebrity Jealousy|NBC Page
 What type of charitable activity does Liz undertake in Christmas Special?|Delivering presents to disadvantaged children|Running a charity marathon|Organising a food-bank concert|Collecting coats at a sports stadium|Easy|Liz Lemon|Christmas Charity|Gift Deliveries|Christmas Special|Children In Need|Holiday Kindness|2008 Episode
 Who prevents Jack from enjoying the Christmas holiday he has planned in Christmas Special?|His mother Colleen|His brother Eddie|His rival Devon|His girlfriend Elisa|Easy|Colleen Donaghy|Jack Donaghy|Christmas Special|Holiday Plans|Overbearing Mother|Family Conflict|2008 Episode
 What does Jack make the TGS staff produce after his holiday plans collapse?|A Christmas special|A New Year's parade|A live sports programme|A televised wedding|Easy|Jack Donaghy|TGS Staff|Christmas Special|Forced Production|Holiday Television|Mother Son Dispute|Workplace Pressure
 Which Game of Thrones actor plays Liz's short-lived romantic interest Stewart LaGrange?|Peter Dinklage|Kit Harington|Nikolaj Coster-Waldau|Iwan Rheon|Medium|Peter Dinklage|Stewart LaGrange|Senor Macho Solo|Liz Lemon|Guest Casting|Diplomatic Attaché|2009 Episode
 For which international organisation does Stewart LaGrange work in Senor Macho Solo?|The United Nations|NATO|The World Bank|The European Commission|Medium|Stewart LaGrange|United Nations|Peter Dinklage|Senor Macho Solo|Diplomatic Work|Liz Lemon|New Romance
 Which actress plays nurse Elisa, who begins dating Jack in Series Three?|Salma Hayek|Sofia Vergara|Penelope Cruz|Eva Mendes|Easy|Salma Hayek|Elisa Pedreira|Jack Donaghy|Senor Macho Solo|Recurring Guest|Nurse Character|2009 Romance
 Who is Elisa caring for when she first meets Jack?|His mother Colleen|His boss Don Geiss|His brother Eddie|His ex-wife Bianca|Easy|Elisa Pedreira|Colleen Donaghy|Nursing Care|Jack Donaghy|Senor Macho Solo|New Relationship|Family Care
 About which late rock singer does Jenna audition to star in a biographical film?|Janis Joplin|Patti Smith|Stevie Nicks|Debbie Harry|Easy|Jenna Maroney|Janis Joplin|Biographical Film|Senor Macho Solo|Music Cinema|Acting Audition|2009 Plot
 What kind of legal agreement does Jack help Tracy and Angie negotiate in Senor Macho Solo?|A postnuptial agreement|A tenancy agreement|An adoption order|A business partnership agreement|Medium|Tracy Jordan|Angie Jordan|Postnuptial Agreement|Jack Donaghy|Senor Macho Solo|Marriage Finances|Family Law
 What medical treatment does Liz fight to secure for the whole TGS staff in Flu Shot?|Influenza vaccinations|Dental check-ups|Eye tests|Blood-pressure tablets|Easy|Liz Lemon|Flu Shot|Influenza Vaccine|Workplace Health|TGS Staff|Restricted Supply|2009 Episode
 Which eccentric physician is responsible for the flu-shot supply in Flu Shot?|Dr Leo Spaceman|Dr Drew Baird|Dr Milton Greene|Dr Stewart LaGrange|Easy|Leo Spaceman|Chris Parnell|Flu Shot|Vaccination Supply|TGS Staff|Comic Doctor|2009 Story
 What makes it difficult for Jack and Elisa to find time together in Flu Shot?|Elisa works seven days a week|Jack has moved to London|Elisa is filming a movie|Jack is on a sailing expedition|Easy|Elisa Pedreira|Jack Donaghy|Flu Shot|Seven Day Workweek|Romantic Scheduling|Nursing Shift|2009 Episode`,
   },
   {
     topic: 'Retreat to Move Forward, Generalissimo, Valentine and Larry King',
     facts: `Which actor directs the episode Retreat to Move Forward?|Steve Buscemi|Alec Baldwin|Jon Hamm|Matthew Broderick|Hard|Steve Buscemi|Episode Director|Retreat To Move Forward|Behind The Scenes|2009 Direction|Television Production|Guest Director
 Whom does Jack take along for support to a GE corporate retreat?|Liz Lemon|Jenna Maroney|Elisa Pedreira|Kenneth Parcell|Easy|Jack Donaghy|Liz Lemon|GE Retreat|Retreat To Move Forward|Corporate Confidence|Mentor Relationship|2009 Episode
 Which acting technique does Jenna use to prepare for her rock-singer film role?|Method acting|Mime|Improvisational theatre|Puppetry|Medium|Jenna Maroney|Method Acting|Janis Joplin Film|Retreat To Move Forward|Frank Rossitano|Performance Preparation|Acting Technique
 Which diagnosis prompts Kenneth to challenge Tracy's sugary diet in Retreat to Move Forward?|Diabetes|Asthma|Anaemia|A food allergy|Easy|Tracy Jordan|Diabetes|Kenneth Parcell|Retreat To Move Forward|Sugar Consumption|Diet Advice|Health Story
 Which actor portrays Liz's handsome neighbour Dr Drew Baird?|Jon Hamm|Jason Sudeikis|Will Arnett|Dean Winters|Easy|Jon Hamm|Drew Baird|Liz Lemon|Generalissimo|Neighbour Romance|Guest Actor|2009 Episode
 What profession does Liz's neighbour Drew Baird practise?|Paediatrician|Accountant|Architect|Police detective|Medium|Drew Baird|Paediatrician|Jon Hamm|Generalissimo|Medical Profession|Liz Neighbour|Romantic Interest
 How does Liz first make a connection with her attractive neighbour Drew in Generalissimo?|She receives his mail by mistake|She meets him at a wedding|They share a taxi|He auditions for TGS|Easy|Liz Lemon|Drew Baird|Misdelivered Mail|Generalissimo|Apartment Building|New Neighbour|Romantic Meeting
 What type of fictional villain resembles Jack and alarms Elisa's grandmother in Generalissimo?|A Spanish-language soap opera generalissimo|A comic-book superhero|A silent-film detective|A medieval king|Medium|Jack Donaghy|Generalissimo|Soap Opera Villain|Elisa Grandmother|Mistaken Identity|Latin American Television|2009 Episode
 From which former industry do the unruly new TGS interns come in Generalissimo?|Wall Street finance|Professional football|Classical music|Commercial aviation|Medium|Wall Street|TGS Interns|Generalissimo|Tracy Jordan|Former Traders|Financial Sector|2009 Story
 On which holiday do Liz and Drew accidentally arrange their first proper date?|Valentine's Day|New Year's Eve|Halloween|Thanksgiving|Easy|Liz Lemon|Drew Baird|Valentines Day|First Date|St Valentines Day|Romantic Awkwardness|2009 Episode
 Where does Elisa insist Jack accompany her on Valentine's Day?|Church|A football match|A charity auction|A beach resort|Easy|Elisa Pedreira|Jack Donaghy|Church Visit|St Valentines Day|Religious Service|Romantic Commitment|2009 Plot
 Which NBC employee develops a crush on a new female staffer in St Valentine's Day?|Kenneth Parcell|Pete Hornberger|Frank Rossitano|Jonathan|Easy|Kenneth Parcell|Jennifer Rogers|St Valentines Day|Office Crush|Tracy Jordan|Staff Romance|2009 Episode
 Who helps Kenneth pursue the new staff member in St Valentine's Day?|Tracy Jordan|Don Geiss|Floyd DeBarber|Devon Banks|Easy|Tracy Jordan|Kenneth Parcell|St Valentines Day|Romantic Advice|Jennifer Rogers|Workplace Friendship|2009 Story
 Which real television interviewer features in the 30 Rock episode Larry King?|Larry King|Piers Morgan|Anderson Cooper|David Frost|Easy|Larry King|Larry King Live|Tracy Jordan|Interview Appearance|Television Host|2009 Episode|CNN
 What does Tracy's appearance on Larry King Live inadvertently cause across New York?|Public panic about the economy|A citywide power cut|A transport strike|A snowstorm emergency|Medium|Tracy Jordan|Larry King Live|Economic Panic|Larry King Episode|Public Reaction|Financial Anxiety|New York City
 To which New York borough do Liz and Kenneth travel to recover her lost phone in Larry King?|Queens|Brooklyn|The Bronx|Staten Island|Easy|Liz Lemon|Kenneth Parcell|Queens|Lost Mobile Phone|Larry King Episode|Ransom Demand|2009 Adventure
 What do TGS staff members begin hunting around 30 Rock after Tracy's Larry King interview?|A hidden treasure|A missing script|An escaped pet|An old television award|Medium|Tracy Jordan|Treasure Hunt|Larry King Episode|TGS Staff|Studio Building|Rumoured Fortune|Comedic Chaos`,
   },
   {
     topic: 'Goodbye My Friend, The Funcooker, The Bubble and Apollo Apollo',
     facts: `Where does Liz meet the pregnant teenager whose baby she hopes to adopt in Goodbye, My Friend?|A doughnut shop|An airport terminal|A school library|A supermarket car park|Medium|Liz Lemon|Pregnant Teenager|Doughnut Shop|Goodbye My Friend|Adoption Scheme|Unexpected Meeting|2009 Episode
 Whose birthday celebration does Kenneth try to combine with Jenna's party?|Tracy Jordan's|Pete Hornberger's|Frank Rossitano's|Jack Donaghy's|Easy|Kenneth Parcell|Jenna Maroney|Tracy Jordan|Shared Birthday Party|Goodbye My Friend|Party Planning|2009 Story
 Which TGS writer bonds with Jack over difficulties involving their fathers in Goodbye, My Friend?|Frank Rossitano|Toofer Spurlock|Josh Girard|J.D. Lutz|Medium|Frank Rossitano|Jack Donaghy|Father Issues|Goodbye My Friend|Male Bonding|Writers Room|Family History
 Which Broadway star portrays Frank's mother Sylvia Rossitano?|Patti LuPone|Bernadette Peters|Elaine Stritch|Liza Minnelli|Medium|Patti LuPone|Sylvia Rossitano|Frank Mother|Goodbye My Friend|Guest Casting|Broadway Actress|Family Guest
 What civic obligation forces Liz to leave the TGS team unsupervised in The Funcooker?|Jury duty|Military service|Election counting|A census interview|Easy|Liz Lemon|Jury Duty|The Funcooker|Court Case|Unsupervised TGS|Civic Service|2009 Episode
 What sort of GE product needs a new name in The Funcooker?|A microwave oven|A vacuum cleaner|A laptop computer|A television remote|Medium|GE Microwave|Product Naming|Jack Donaghy|The Funcooker|TGS Writers|Corporate Marketing|Household Appliance
 Which US regulator's fines does Tracy believe he can afford when he uses bad language on television?|The FCC|The FDA|The SEC|The IRS|Medium|Tracy Jordan|FCC Fines|The Funcooker|Broadcast Swearing|Television Regulation|Advertising Sponsors|2009 Plot
 Who seeks medical assistance to keep up with both TGS and her film work in The Funcooker?|Jenna Maroney|Cerie Xerox|Liz Lemon|Angie Jordan|Easy|Jenna Maroney|Leo Spaceman|The Funcooker|Overwork|Film Production|TGS Performance|Medical Advice
 What gives Liz's boyfriend Drew an advantage that he barely notices in The Bubble?|His good looks|His family fortune|His political office|His musical talent|Easy|Drew Baird|The Bubble|Physical Attractiveness|Unfair Advantages|Liz Lemon|Social Privilege|2009 Episode
 Why is Jack struggling to persuade Tracy to sign a new TGS contract in The Bubble?|Tracy is wealthy from his video game|Tracy has accepted a film role overseas|Tracy has retired to a farm|Tracy plans to become a doctor|Easy|Tracy Jordan|Video Game Wealth|Jack Donaghy|The Bubble|Contract Negotiation|Financial Independence|TGS Employment
 What change does Jenna consider to attract publicity in The Bubble?|A dramatic new hairstyle|A different stage name|Moving to Los Angeles|Launching a perfume|Easy|Jenna Maroney|New Hairstyle|The Bubble|Publicity Stunt|Celebrity Image|Personal Appearance|2009 Plot
 What birthday is Jack preparing to celebrate in Apollo, Apollo?|His fiftieth|His fortieth|His sixtieth|His thirty-fifth|Easy|Jack Donaghy|Fiftieth Birthday|Apollo Apollo|Birthday Plans|Midlife Reflection|Childhood Memories|2009 Episode
 What does Jack watch that inspires him to recreate a happy childhood moment in Apollo, Apollo?|Old home movies|A documentary about GE|A football highlights reel|A school talent show recording|Easy|Jack Donaghy|Home Movies|Apollo Apollo|Childhood Nostalgia|Birthday Celebration|Family Memory|2009 Story
 Which of Liz's ex-boyfriends returns in Apollo, Apollo with a personal confession?|Dennis Duffy|Floyd DeBarber|Jamie|Steven Black|Easy|Dennis Duffy|Liz Lemon|Apollo Apollo|Ex Boyfriend Return|Personal Confession|Jenna Maroney|2009 Episode
 Which two TGS staff members try to fulfil Tracy's dream of travelling into space in Apollo, Apollo?|Kenneth and Pete|Liz and Jenna|Frank and Toofer|Jack and Jonathan|Medium|Kenneth Parcell|Pete Hornberger|Tracy Jordan|Apollo Apollo|Space Travel Dream|Workplace Friendship|Childhood Wish`,
   },
   {
     topic: 'Cutbacks, Jackie Jormp-Jomp, The Ones and The Natural Order',
     facts: `What milestone is TGS celebrating when company budget cuts loom in Cutbacks?|Its fiftieth episode|Its hundredth episode|Its tenth anniversary|Its first Emmy win|Easy|TGS|Fiftieth Episode|Cutbacks|Show Milestone|Budget Crisis|Studio Celebration|2009 Episode
 Which type of job losses does Liz try to prevent among TGS staff in Cutbacks?|Redundancies|Retirements|Resignations|Suspensions|Easy|Liz Lemon|TGS Staff|Redundancies|Cutbacks|Cost Saving|Workplace Protection|Staff Jobs
 Which assistant does Jack have to let go during the budget cuts before Kenneth takes on extra duties?|Jonathan|Cerie|Toofer|Josh|Medium|Jonathan|Jack Donaghy|Kenneth Parcell|Cutbacks|Assistant Dismissal|Budget Reduction|Administrative Work
 Which actor plays budget-cutting consultant Brad Halster in Cutbacks?|Roger Bart|Steve Martin|Jason Sudeikis|Nathan Lane|Hard|Roger Bart|Brad Halster|Cutbacks|Guest Casting|Budget Consultant|TGS Finance|2009 Character
 What is Jenna's Janis Joplin-inspired screen character renamed because the film lacks rights?|Jackie Jormp-Jomp|Jenny Jingle-Jam|Janie Jazz-Jones|Josie Jump-Start|Easy|Jackie Jormp Jomp|Jenna Maroney|Janis Joplin|Biopic Rights|Fictional Singer|Film Project|2009 Episode
 Why is Liz away from her regular TGS job in Jackie Jormp-Jomp?|She has been suspended|She is on maternity leave|She is visiting London|She has been promoted to GE|Easy|Liz Lemon|Work Suspension|Jackie Jormp Jomp|Time Away From TGS|New Friends|Office Absence|2009 Plot
 Which awards event does Jack use in an attempt to promote Jenna's troubled film in Jackie Jormp-Jomp?|Nickelodeon Kids' Choice Awards|The Tony Awards|The Grammy Awards|The Golden Globes|Medium|Nickelodeon|Kids Choice Awards|Jack Donaghy|Jenna Film|Jackie Jormp Jomp|Publicity Plan|2009 Awards
 What false rumour about Jenna unexpectedly helps publicise her film in Jackie Jormp-Jomp?|That she has died|That she has won an Oscar|That she has married Jack|That she has become a politician|Easy|Jenna Maroney|False Death Rumour|Jackie Jormp Jomp|Film Publicity|Celebrity Hoax|Jack Donaghy|2009 Story
 What expensive item does Jack shop for with Liz when considering a proposal to Elisa in The Ones?|An engagement ring|A new apartment|A luxury car|A designer wedding dress|Easy|Jack Donaghy|Liz Lemon|Engagement Ring|Elisa Pedreira|The Ones|Marriage Proposal|2009 Episode
 Whose advice on married life does Jack seek in The Ones?|Tracy Jordan's|Kenneth Parcell's|Devon Banks's|Floyd DeBarber's|Easy|Tracy Jordan|Jack Donaghy|Married Life Advice|The Ones|Elisa Pedreira|Relationship Doubts|2009 Story
 Which type of emergency worker attracts Jenna's attention after a TGS prank causes an injury in The Ones?|A paramedic|A firefighter|A police officer|A lifeguard|Easy|Jenna Maroney|Paramedic|The Ones|Workplace Prank|Emergency Response|Romantic Attraction|2009 Episode
 To whom does Elisa confide a secret that could affect her future with Jack in The Ones?|Liz Lemon|Cerie Xerox|Jenna Maroney|Angie Jordan|Medium|Elisa Pedreira|Liz Lemon|Jack Donaghy|The Ones|Relationship Secret|Confidante|Potential Engagement
 Which performer gives up special celebrity treatment to challenge Liz in The Natural Order?|Tracy Jordan|Jenna Maroney|Josh Girard|Kenneth Parcell|Easy|Tracy Jordan|Liz Lemon|The Natural Order|Special Treatment|Workplace Equality|Actor Privilege|2009 Episode
 What pet does Jenna adopt before discovering that parenthood is demanding in The Natural Order?|A gibbon|A parrot|A miniature pig|A ferret|Medium|Jenna Maroney|Pet Gibbon|The Natural Order|Motherhood Experiment|Animal Care|2009 Plot|Comedic Parenting
 Whose recollections offer Jack clues about the father who left his family in The Natural Order?|His mother Colleen's|His brother Eddie's|Liz Lemon's|Don Geiss's|Easy|Colleen Donaghy|Jack Father|The Natural Order|Family Memories|Absent Parent|Jack Donaghy|2009 Episode
 Which guest actor reprises the private detective Lenny Wosniak during Jack's search for his father?|Steve Buscemi|Steve Martin|Will Arnett|Matthew Broderick|Medium|Steve Buscemi|Lenny Wosniak|Private Detective|The Natural Order|Jack Father Search|Guest Actor|Family Investigation`,
   },
   {
     topic: 'Mamma Mia, Kidney Now and Series Three Milestones',
     facts: `Which actor plays Milton Greene, the man identified as Jack's father in Mamma Mia?|Alan Alda|Martin Sheen|Donald Sutherland|Richard Dreyfuss|Easy|Alan Alda|Milton Greene|Jack Biological Father|Mamma Mia|Guest Casting|Family Discovery|2009 Episode
 Which character discovers that he may have a previously unknown son in Mamma Mia?|Tracy Jordan|Jack Donaghy|Pete Hornberger|Kenneth Parcell|Easy|Tracy Jordan|Alleged Son|Mamma Mia|Paternity Question|Family Surprise|TGS Staff|2009 Story
 Why do Liz and Jenna clash during Mamma Mia?|Jenna gets credit for a sketch Liz wrote|Liz refuses to attend Jenna's wedding|Jenna buys Liz's apartment|Liz cancels Jenna's film|Easy|Liz Lemon|Jenna Maroney|Comedy Sketch Credit|Mamma Mia|Creative Rivalry|Recognition|2009 Episode
 Which serious health problem affects Milton Greene in the Series Three finale?|Kidney disease|A broken hip|Severe asthma|A brain injury|Easy|Milton Greene|Kidney Disease|Kidney Now|Alan Alda|Jack Donaghy|Medical Crisis|Season Finale
 What does Jack organise to help find a kidney donor for his father in Kidney Now!?|A celebrity benefit concert|A sponsored cycle ride|A charity football match|A televised auction of furniture|Easy|Jack Donaghy|Kidney Donor|Celebrity Concert|Kidney Now|Milton Greene|Fundraising Music|2009 Finale
 Which singer appears as herself in the star-studded Kidney Now! musical performance?|Sheryl Crow|Adele|Taylor Swift|Madonna|Medium|Sheryl Crow|Kidney Now|Musical Guest|Charity Performance|Celebrity Ensemble|2009 Episode|Music Cameo
 Which former American Idol contestant appears in the musical finale Kidney Now!?|Clay Aiken|Kelly Clarkson|Carrie Underwood|Adam Lambert|Medium|Clay Aiken|American Idol|Kidney Now|Musical Guest|Celebrity Ensemble|Fundraising Song|2009 Cameo
 What event is Tracy invited back to his old school to address in Kidney Now!?|A graduation ceremony|A sports day|A school reunion|A talent contest|Easy|Tracy Jordan|High School Graduation|Kidney Now|Guest Speaker|School Memories|Kenneth Parcell|2009 Finale
 Which month and year marked the original US finale of 30 Rock Series Three?|May 2009|April 2008|November 2009|January 2010|Medium|May 2009|Season Three Finale|Kidney Now|NBC Broadcast|Original Airdate|Television History|2009 Schedule
 How many episodes were broadcast in the third series of 30 Rock?|22|15|13|26|Easy|Season Three|Twenty Two Episodes|NBC|2008 2009|Broadcast Length|American Sitcom|Episode Count
 Which actor won the 2009 Emmy for lead actor in a comedy for playing Jack Donaghy?|Alec Baldwin|Steve Carell|Jim Parsons|Tony Shalhoub|Medium|Alec Baldwin|Jack Donaghy|2009 Emmy Awards|Lead Actor Comedy|Award Winner|Season Three|Television Honours
 Which episode won a 2009 Emmy for its writing in a comedy series?|Reunion|The Bubble|Cooter|Pilot|Hard|Reunion|Matt Hubbard|2009 Emmy Awards|Comedy Writing|Award Winning Episode|Season Three|Television Honours`,
   },
 ];

 const FIRST_ID = 12655;
 let index = 0;
 const questions = groups.flatMap(group =>
   group.facts.trim().split('\n').map(line => {
     const parts = line.trim().split('|').map(part => part.trim());
     const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
     if (parts.length !== 13) {
       throw new Error(`Expected seven specialist tags at ${id}; got ${parts.length - 6}`);
     }
     const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
     const wrongAnswers = [wrong1, wrong2, wrong3];
     if (!question || !correctAnswer || wrongAnswers.some(answer => !answer)) {
       throw new Error(`Missing question or answer at ${id}`);
     }
     if (new Set([correctAnswer, ...wrongAnswers].map(answer => answer.toLowerCase())).size !== 4) {
       throw new Error(`Repeated answer option at ${id}`);
     }
     if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.some(tag => !tag)) {
       throw new Error(`Invalid difficulty or specialist tags at ${id}`);
     }
     const answers = [...wrongAnswers];
     answers.splice(index % 4, 0, correctAnswer);
     const tags = [...new Map([
       'American Television', 'American Sitcom', '30 Rock', 'NBC',
       '2000s', '2008-2009', 'Season Three', 'Workplace Comedy',
       'Sketch Comedy', 'Comedy Series', group.topic, correctAnswer, ...specificTags
     ].map(tag => [tag.toLowerCase(), tag])).values()];
     const item = { id, category: 'Television', question, answers, correctAnswer, difficulty, tags, dailyEligible: true };
     index++;
     return item;
   })
 );

 const EXPECTED_COUNT = 92;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_12655' ||
     questions[questions.length - 1].id !== 'tv_12746') {
   throw new Error('Unexpected question ID range');
 }
 if (new Set(questions.map(q => q.id)).size !== questions.length ||
     new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
   throw new Error('Duplicate question IDs or wording');
 }
 if (questions.some(q => q.category !== 'Television' || q.answers.length !== 4 ||
     !q.answers.includes(q.correctAnswer) || q.tags.length < 16 ||
     q.tags.some(tag => !tag) || q.dailyEligible !== true)) {
   throw new Error('Incomplete exported question metadata');
 }
 module.exports = questions;
