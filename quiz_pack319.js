
// quiz_pack319.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Interior design and home makeover programmes
// The Great Interior Design Challenge (2014-2017)
// Your Home Made Perfect (2019-2023)
// Dream Home Makeover (2020-2022)
// Seven question-specific specialist tags per question.
// All questions include an explicit programme field and Programme: tag.
// Row format: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven tags

const groups = [
    {
        programme: 'The Great Interior Design Challenge',
        era: '2014-2017',
        broadcaster: 'BBC Two',
        topic: 'Amateur interior designers competing in room-makeover challenges',
        facts: `Who presented The Great Interior Design Challenge?|Tom Dyckhoff|Kevin McCloud|George Clarke|Nick Knowles|Easy|Tom Dyckhoff|Presenter|Architecture Writer|Competition Host|BBC Two|British Design Shows|2014 Premiere
Which channel originally broadcast The Great Interior Design Challenge?|BBC Two|Channel 4|BBC One|ITV1|Easy|BBC Two|Original Channel|Interior Design Competition|Public Broadcasting|2014 Debut|UK Factual Television|Programme Scheduling
In which year did The Great Interior Design Challenge first air?|2014|2008|2011|2018|Easy|2014 Premiere|January Debut|First Series|BBC Two|Broadcast Timeline|Television History|Competition Launch
In which year did The Great Interior Design Challenge finish its original run?|2017|2015|2019|2021|Medium|2017 Finale|Final Series|January 2017|BBC Two|Four Series|Programme End|Broadcast History
How many series of The Great Interior Design Challenge were broadcast?|Four|Two|Three|Six|Easy|Four Series|Programme Run|2014 To 2017|Series Count|BBC Two|Competition Format|Interior Design
Which production company made The Great Interior Design Challenge?|Studio Lambert|Rumpus Media|Lion Television|betty|Medium|Studio Lambert|Production Company|British Factual TV|Interior Design Competition|BBC Commission|Programme Credits|Independent Production
Which interior designer judged the competition alongside Sophie Robinson in its early series?|Daniel Hopwood|Laurence Llewelyn-Bowen|Piers Taylor|Oliver Heath|Medium|Daniel Hopwood|Competition Judge|Sophie Robinson|Early Series|Design Assessment|Professional Designer|Judging Panel
Which designer served as a judge during the programme's first three series?|Sophie Robinson|Kelly Hoppen|Sarah Beeny|Linda Barker|Easy|Sophie Robinson|Early Judging Panel|2014 To 2016|Interior Design Expert|Daniel Hopwood|Competition Judges|British Television
Who replaced Sophie Robinson as a regular judge for the 2017 series?|Kelly Hoppen|Kirstie Allsopp|Anna Ryder Richardson|Michelle Ogundehin|Medium|Kelly Hoppen|2017 Series|Judging Change|Fourth Series|Design Critique|Professional Judge|Sophie Robinson
What kind of designers competed on The Great Interior Design Challenge?|Amateur interior designers|Qualified structural engineers|Celebrity professional chefs|Experienced property auctioneers|Easy|Amateur Contestants|Aspiring Designers|Interior Design|Competition Eligibility|Room Transformations|Creative Talent|Programme Format
What was the typical budget for contestants' rooms in the original competition format?|£1,000|£100|£5,000|£20,000|Medium|One Thousand Pounds|Design Budget|Room Makeovers|Cost Limits|Contestant Challenge|Original Format|Furnishings
How many designers normally competed against one another in an opening heat?|Three|Two|Four|Six|Medium|Three Contestants|Opening Heats|Competition Structure|Judged Rooms|Design Challenge|Elimination Round|Amateur Designers
How many opening heats produced winners for the next competition round?|Eight|Four|Six|Twelve|Medium|Eight Heats|Competition Format|First Round|Heat Winners|Elimination Structure|Design Contest|Series Progression
Who won the first 2014 series of The Great Interior Design Challenge?|Sarah Moore|Martin Holland|Sarah Mitchenall|Daniela Tasca-York|Medium|Sarah Moore|Spring 2014 Winner|First Champion|Series One|Competition Result|Amateur Designer|Design Title
Who won the autumn 2014 series of The Great Interior Design Challenge?|Martin Holland|Sarah Moore|Daniela Tasca-York|Sarah Mitchenall|Medium|Martin Holland|Autumn 2014 Winner|Series Two|Competition Result|Amateur Designer|BBC Two|Design Champion
Who won The Great Interior Design Challenge in 2016?|Sarah Mitchenall|Sarah Moore|Sophie Robinson|Kelly Hoppen|Medium|Sarah Mitchenall|2016 Champion|Third Series|Competition Winner|Interior Design Talent|BBC Two|Series Result
Who won the final 2017 series of The Great Interior Design Challenge?|Daniela Tasca-York|Martin Holland|Sarah Moore|Sarah Mitchenall|Medium|Daniela Tasca York|2017 Champion|Fourth Series|Final Winner|Competition Result|Interior Design|BBC Two
What architectural period featured in the very first episode, set in Muswell Hill?|Edwardian|Georgian|Tudor|Art Deco|Medium|Muswell Hill|Edwardian Homes|Opening Episode|North London|2014 First Series|Period Architecture|Design Brief
Which Greater Manchester city hosted the Victorian-home challenge in the second episode?|Salford|Bolton|Stockport|Rochdale|Medium|Salford|Victorian Homes|Second Episode|Greater Manchester|Period Interiors|2014 Series|Northern England
Which architectural style was featured in the third episode, based in Beckenham?|Art Deco|Brutalist|Regency|Gothic Revival|Medium|Beckenham|Art Deco|Third Episode|2014 Series|Period Interiors|Southeast London|Design Theme
Which part of London featured converted industrial interiors in the fourth episode?|Rotherhithe|Camden|Ealing|Wembley|Medium|Rotherhithe|Converted Industrial|Fourth Episode|London Docklands|2014 Series|Architectural Reuse|Interior Makeover
Which London district featured a Brutalist tower-block challenge in the first series?|Bethnal Green|Greenwich|Fulham|Hampstead|Medium|Bethnal Green|Brutalist Tower Block|2014 First Series|High Rise Homes|Modernist Architecture|East London|Design Challenge
Which city featured the Victorian-home semi-final in the first series?|Birmingham|Bristol|Manchester|Liverpool|Medium|Birmingham|Victorian Semi Final|First Series|Competition Progression|Period Homes|2014 Episodes|Midlands
What unusual seaside accommodation featured as an early challenge in the autumn 2014 series?|Beach huts|Canal barges|Lighthouse towers|Mountain lodges|Easy|Beach Huts|Autumn 2014|Series Two|Seaside Interiors|Small Spaces|Early Episode|Creative Makeover
Which Merseyside village featured as an episode location in the second series?|Port Sunlight|Formby|Rainford|Aintree|Medium|Port Sunlight|Merseyside|Second Series|Model Village|2014 Episodes|Historic Housing|Design Location
What type of floating homes was featured in the second series?|Houseboats|Cruise ships|Submarines|Fishing trawlers|Easy|Houseboats|Second Series|Floating Homes|2014 Programme|Small Interiors|Unusual Properties|Design Challenge
What was an early working title for The Great Interior Design Challenge?|Your Home in Their Hands|Room to Improve|The Interior Lottery|Design My Palace|Medium|Your Home In Their Hands|Working Title|Programme Development|Original Concept|BBC Commission|Production History|Naming Trivia`
    },
    {
        programme: 'Your Home Made Perfect',
        era: '2019-2023',
        broadcaster: 'BBC Two',
        topic: 'Competing architects use virtual reality to redesign homes',
        facts: `Who presented Your Home Made Perfect?|Angela Scanlon|Sarah Beeny|Kirstie Allsopp|Stacey Solomon|Easy|Angela Scanlon|Programme Presenter|Property Television|BBC Two|Design Competition|2019 Debut|Irish Broadcaster
Which channel first broadcast Your Home Made Perfect?|BBC Two|ITV1|Channel 4|BBC One|Easy|BBC Two|Original Broadcaster|2019 Programme|Architecture Show|British Television|Home Renovation|Factual Series
In which year did Your Home Made Perfect first air?|2019|2014|2016|2022|Easy|2019 Premiere|April Broadcast|First Series|Programme Timeline|Angela Scanlon|BBC Two|Reality Design
How many series of Your Home Made Perfect had aired by August 2023?|Four|Two|Three|Five|Medium|Four Series|2023 Coverage|Programme History|Series Count|Home Renovations|BBC Two|Broadcast Timeline
Which technology allows homeowners to see the rival plans on Your Home Made Perfect?|Virtual reality|Thermal imaging|Satellite mapping|Motion-capture games|Easy|Virtual Reality|Immersive Designs|Architecture Visualisation|Digital Models|Homeowner Preview|Design Technology|Computer Graphics
How many architects normally pitch competing visions for a home on Your Home Made Perfect?|Two|One|Three|Four|Easy|Two Architects|Rival Pitches|Design Competition|Programme Structure|Client Choice|Virtual Reality|Architecture Format
Who ultimately selects which design is built in Your Home Made Perfect?|The homeowners|A studio audience|A celebrity judging panel|A government inspector|Easy|Homeowners|Chosen Design|Client Decision|Competition Format|Architecture Plans|House Renovation|Real Life Build
Which architect helped lead the original series of Your Home Made Perfect?|Laura Jane Clark|Kelly Hoppen|Daniel Hopwood|Piers Taylor|Easy|Laura Jane Clark|Original Architect|2019 Series|Rival Designs|Home Renovation|Architecture Expert|Programme Cast
Which architect competed against Laura Jane Clark in the first series of Your Home Made Perfect?|Robert Jamison|Tom Dyckhoff|Manoj Malde|Joel Bird|Medium|Robert Jamison|Laura Jane Clark|Original Pairing|2019 Cast|Architectural Competition|Design Visions|Virtual Reality
Which couple appeared in the opening episode of Your Home Made Perfect?|Andy and Esther|James and Vicky|Danny and Suzanne|Luke and Mimi|Medium|Andy And Esther|Episode One|2019 Series|Scottish Family|First Participants|Home Redesign|Programme Premiere
In which Scottish city was Andy and Esther's home in the first episode?|Stirling|Dundee|Aberdeen|Perth|Medium|Stirling|Andy And Esther|Scotland|Opening Episode|Family House|2019 Broadcast|Location
What budget did Andy and Esther have for their Stirling home transformation?|£55,000|£15,000|£100,000|£200,000|Medium|55 Thousand Pounds|Andy And Esther|Opening Episode|Renovation Budget|Stirling|Design Brief|2019 Series
In which English county did James and Vicky live in the first series?|Kent|Surrey|Essex|Sussex|Medium|Kent|James And Vicky|1970s House|2019 Episode Two|Family Layout|Southeast England|Homeowners
What renovation budget did James and Vicky have in their 2019 episode?|£100,000|£20,000|£50,000|£250,000|Medium|100 Thousand Pounds|James And Vicky|Kent Home|Series One|Remodelling Costs|House Redesign|2019 Episode
What type of home did Danny and Suzanne want to transform in Bedfordshire?|A 1960s bungalow|An Edwardian mansion|A converted warehouse|A Victorian schoolhouse|Medium|Danny And Suzanne|Bedfordshire|1960s Bungalow|Episode Three|Family Housing|2019|Renovation Challenge
What budget was available to Danny and Suzanne for their Bedfordshire project?|£70,000|£10,000|£150,000|£300,000|Medium|70 Thousand Pounds|Danny And Suzanne|Bedfordshire|Renovation Costs|2019 Episode|Budget Planning|House Layout
Which Lincolnshire town featured Luke and Mimi's crowded family home in the first series?|Grantham|Lincoln|Boston|Skegness|Medium|Luke And Mimi|Grantham|Lincolnshire|First Series|Growing Family|Terraced House|2019 Episode
What shared interest did Cris and Becky's family hope to enjoy together at home?|Playing musical instruments|Building model railways|Keeping tropical fish|Practising martial arts|Easy|Cris And Becky|Family Musicians|Wiltshire|2019 Episode|Reception Room|Home Design Brief|Shared Activity
In which Hertfordshire city did Rob and Helen live in a Victorian terrace?|St Albans|Watford|Stevenage|Hertford|Medium|Rob And Helen|St Albans|Victorian Terrace|First Series|Hertfordshire|Kitchen Layout|2019 Episode
Near which seaside city did Silvia and Julian live in a bungalow featured in series two?|Brighton|Portsmouth|Southampton|Plymouth|Medium|Silvia And Julian|Brighton|Bungalow|2020 Second Series|Loft Conversion|Family Space|Coastal Location
In which year did the second series of Your Home Made Perfect begin?|2020|2018|2022|2024|Easy|2020 Return|Second Series|April Broadcast|BBC Two|Programme Chronology|Architectural Design|Virtual Reality
Which London borough featured Shelley and Steven's home in the third-series opener?|Bromley|Camden|Haringey|Hounslow|Medium|Shelley And Steven|Bromley|2021 Opening Episode|Three Bedroom Semi|London Borough|Laura Jane Clark|Julian McIntosh
Which Hampshire town featured Lisa and Judy's family home in series three?|Gosport|Basingstoke|Andover|Lymington|Medium|Lisa And Judy|Gosport|Hampshire|Series Three|Family Memories|2021 Programme|Rival Architects
In which year did the fourth series of Your Home Made Perfect begin?|2023|2020|2021|2025|Easy|2023 Return|Fourth Series|June Debut|BBC Two|Programme Timeline|Virtual Reality|Design Competition
Which north London area was home to Yesim and Hasan in the fourth-series premiere?|Enfield|Islington|Hendon|Walthamstow|Medium|Yesim And Hasan|Enfield|Fourth Series Premiere|2023|Semi Detached Home|Architects Will Foster And Julian McIntosh|London Homes
Which south-coast city was the location of Lee and Darren's difficult home layout?|Southampton|Brighton|Portsmouth|Bournemouth|Medium|Lee And Darren|Southampton|Fourth Series|Unused Garage|Double Staircase|1960s Property|2023 Episode
Which actress featured with her son Harvey in a Tynemouth flat in series four?|Jill Halfpenny|Suranne Jones|Lesley Sharp|Sally Lindsay|Easy|Jill Halfpenny|Harvey|Tynemouth Flat|North East England|Celebrity Homeowner|2023 Series|Family Makeover
Which English county featured Liz and Paul's home in the last episode aired in August 2023?|Norfolk|Suffolk|Hampshire|Cumbria|Medium|Liz And Paul|Norfolk|2023 Finale|Three Bedroom Semi|Latest Covered Episode|House Transformation|Series Four
On what date did the fourth series of Your Home Made Perfect finish broadcasting?|22 August 2023|22 August 2022|20 June 2023|9 October 2019|Medium|22 August 2023|Last 2023 Broadcast|Fourth Series Finale|Liz And Paul|Coverage Cut Off|BBC Two|Programme Dates
Which town featured Fiona and Andrew's barn conversion in series four?|Solihull|Taunton|Chesterfield|Cheltenham|Medium|Fiona And Andrew|Solihull|Barn Conversion|Fourth Series|2023 Programme|Midlands|Design Brief`
    },
    {
        programme: 'Dream Home Makeover',
        era: '2020-2022',
        broadcaster: 'Netflix',
        topic: 'Shea and Syd McGee transform American family homes',
        facts: `Which interior designer co-stars in Dream Home Makeover with her husband Syd?|Shea McGee|Joanna Gaines|Leanne Ford|Kelly Wearstler|Easy|Shea McGee|Interior Designer|Netflix Presenter|McGee Family|Home Renovation|American Television|Series Host
Who co-stars with Shea McGee in Dream Home Makeover?|Syd McGee|Chip Gaines|Bobby Berk|Nate Berkus|Easy|Syd McGee|Shea McGee|Presenter Partnership|Married Couple|Home Design|Reality Television|McGee Family
What is the name of the design business featured in Dream Home Makeover?|Studio McGee|Magnolia Design|Bobby Berk Design|Amber Interiors|Easy|Studio McGee|Design Business|Shea And Syd|Interior Design Firm|Home Renovations|Programme Company|Reality Series
Which streaming service originally released Dream Home Makeover?|Netflix|Disney+|Apple TV+|Paramount+|Easy|Netflix|Original Platform|Streaming Series|American Reality TV|Home Design|2020 Launch|Digital Television
In which year did Dream Home Makeover first premiere?|2020|2015|2017|2023|Easy|2020 Premiere|October Release|First Season|Netflix Original|Show Timeline|Design Series|Programme Launch
How many seasons of Dream Home Makeover had been released by December 2022?|Four|Two|Three|Six|Easy|Four Seasons|December 2022|Netflix Releases|Series History|Home Makeovers|Release Schedule|Programme Coverage
How many episodes were released in each season of Dream Home Makeover through 2022?|Six|Four|Eight|Ten|Medium|Six Episodes|Season Structure|Netflix Format|Four Seasons|Episode Count|Streaming Schedule|2020 To 2022
How many episodes of Dream Home Makeover were released altogether from 2020 to 2022?|Twenty-four|Twelve|Eighteen|Thirty-two|Medium|Twenty Four Episodes|Four Seasons|Netflix Catalogue|Programme Total|2022 Cut Off|Series Count|Episode History
What is the title of Dream Home Makeover's first episode?|Forever Home|Movie Room Remake|Luxury Estate|Kitchen Expansion|Medium|Forever Home|Series Premiere|Season One Episode One|2020 Release|Family Entertaining|First Project|Netflix Episode
What was the principal entertaining goal of the clients in the first episode, Forever Home?|Year-round entertaining|Opening a public restaurant|Running a cinema business|Building a dance studio|Easy|Forever Home|Year Round Entertaining|Opening Episode|Client Brief|Living Space|2020 Season|Home Design
What milestone did Studio McGee celebrate in the Manor House Designs episode?|Its fifth anniversary|Its first birthday|Its tenth anniversary|Its twentieth anniversary|Medium|Manor House Designs|Fifth Anniversary|Studio McGee|First Season|Business Milestone|2020 Episodes|Company History
What home-entertainment space was the focus of Movie Room Remake?|A home theatre|An indoor swimming pool|A private gym|A music rehearsal hall|Easy|Movie Room Remake|Home Theatre|London Transplant|Season One|Interior Design|Entertainment Space|2020 Episode
Which architectural era influenced the Los Angeles Hideaway home featured in season one?|Midcentury modern|Tudor Revival|Gothic Revival|Edwardian|Medium|Los Angeles Hideaway|Midcentury Home|LA Renovation|Season One|American Architecture|Design Styles|2020 Series
Which historic building was converted into a family room in the first-season Historic Home Renovation?|An 1851 barn|A 1920s cinema|An 1880s school|A 1950s railway station|Medium|Historic Home Renovation|1851 Barn|Converted Loft|Family Room|Season One|Heritage Property|Old Buildings
Which room was cramped and needed better flow in Grand Kitchen Deployment?|Kitchen|Bathroom|Bedroom|Home office|Easy|Grand Kitchen Deployment|Cramped Kitchen|Home Function|Season One Finale|2020 Episode|Layout Planning|Design Problem
In which month and year did season two of Dream Home Makeover arrive on Netflix?|January 2021|July 2022|October 2020|December 2022|Medium|January 2021|Season Two|Netflix Release|Programme Timeline|Six Episode Season|New Year Premiere|Streaming History
What sporting feature was inside the home featured in the second-season Luxury Estate episode?|A basketball court|A bowling alley|A cricket net|An indoor ice rink|Medium|Luxury Estate|Basketball Court|Former NBA Player|Season Two Premiere|Luxury Homes|Family Design|2021 Episode
In Midcentury Makeover, Omar and Josh wanted to convert a guest house into what?|A studio for their mother|A commercial bakery|A holiday hostel|A bicycle workshop|Medium|Omar And Josh|Midcentury Makeover|Guest House|Family Studio|Season Two|2021 Episode|Client Brief
In which Utah town did Dream Home Makeover feature a bathroom-to-spa transformation?|Lehi|Draper|Provo|Moab|Medium|Lehi|Bath Hideaway|Spa Bathroom|Utah Location|Season Two|Family With Six Children|2021 Episode
What year was the house featured in the second-season Restoring History episode built?|1908|1851|1925|1970|Medium|1908 Home|Restoring History|Historic Kitchen|Season Two|Heritage Renovation|Original Character|2021 Episode
In which month and year did the third season of Dream Home Makeover premiere?|July 2022|January 2021|April 2023|October 2020|Easy|July 2022|Third Season|Netflix Schedule|Programme Timeline|Home Renovations|Six Episodes|Release Date
Which unusual feature appeared alongside a wine room in The Dream in Dream Home?|A secret passage|A rooftop helipad|A glass lift|A hidden swimming pool|Medium|The Dream In Dream Home|Wine Room|Secret Passage|Southern California|Third Season|2022 Episode|Client Design
Which Utah city featured a family-of-five basement transformation in season three?|Draper|Lehi|Ogden|Logan|Medium|Draper|Basement Transformation|Family Of Five|Season Three|Utah Homes|2022 Series|Growing Family
Which city was home to the purple-palace project in the third-season Primary Suite Renovation?|San Francisco|Seattle|Sacramento|San Diego|Medium|San Francisco|Purple Palace|Primary Suite Renovation|Work From Home|Multigenerational Home|Third Season|2022 Episode
In which month and year did the fourth season of Dream Home Makeover arrive?|December 2022|July 2022|January 2021|April 2024|Easy|December 2022|Fourth Season|Netflix Release|Programme Timeline|Home Design|Six Episode Run|Coverage End
Whose kitchen was redesigned in the fourth-season Kitchen Expansion episode?|A member of the Studio McGee team|A professional footballer's coach|A television news anchor|A city museum curator|Medium|Kitchen Expansion|Studio McGee Employee|Fourth Season|Custom Range Hood|Butlers Pantry|2022 Episode|Workplace Connection
What playful climbing feature was added in the fourth-season Playroom Update?|A climbing wall|A rope bridge|A spiral slide|A trampoline pit|Easy|Playroom Update|Climbing Wall|Children Space|Guest Room|Season Four|2022 Episode|Family Design
What kind of vehicle did Syd buy for a renovation in Family Trailer Rebuild?|An Airstream trailer|A double-decker bus|A vintage fire engine|A narrowboat|Medium|Family Trailer Rebuild|Airstream|Syd McGee|Season Four|Trailer Renovation|2022 Episode|Unusual Project
What did the couple want to combine in the fourth-season Primary Bath Reconnected episode?|Their separate bathrooms|Two kitchens|Two conservatories|Two staircases|Medium|Primary Bath Reconnected|His And Hers Bathrooms|Salt Lake City|Season Four Finale|Bathroom Renovation|2022 Episode|Room Combination`
    }
];

const FIRST_ID = 14311;
let index = 0;

const questions = groups.flatMap(group =>
    group.facts.trim().split('\n').map(line => {
        const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
        const parts = line.trim().split('|').map(part => part.trim());
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
        if (!['Easy', 'Medium', 'Hard'].includes(difficulty) ||
            specificTags.length !== 7 || specificTags.some(tag => !tag)) {
            throw new Error(`Invalid difficulty or specialist tags at ${id}`);
        }
        const answers = [...wrongAnswers];
        answers.splice(index % 4, 0, correctAnswer);
        const tags = [...new Map([
            'Television',
            group.programme === 'Dream Home Makeover' ? 'American Television' : 'British Television',
            'Home Improvement', 'Interior Design', 'Home Makeovers',
            group.broadcaster, group.era, group.programme,
            `Programme: ${group.programme}`, group.topic,
            correctAnswer, ...specificTags
        ].map(tag => [tag.toLowerCase(), tag])).values()];
        const item = {
            id,
            category: 'Television',
            programme: group.programme,
            question,
            answers,
            correctAnswer,
            difficulty,
            tags,
            dailyEligible: true
        };
        index++;
        return item;
    })
);

const EXPECTED_COUNT = 86;
if (questions.length !== EXPECTED_COUNT) {
    throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
}
if (questions[0].id !== 'tv_14311' ||
    questions[questions.length - 1].id !== 'tv_14396') {
    throw new Error('Unexpected question ID range');
}
if (new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
    throw new Error('Duplicate question IDs or wording');
}
if (questions.some(q => q.category !== 'Television' || !q.programme ||
    q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
    !q.tags.includes(`Programme: ${q.programme}`) ||
    q.tags.length < 15 || q.tags.some(tag => !tag) || q.dailyEligible !== true)) {
    throw new Error('Incomplete exported question metadata');
}

// 21 November 2026 editorial audit of the three interior and home-design programmes.
// Original questions tv_14311–tv_14396 are retained unchanged.
// 46 additions with IDs tv_36433–tv_36478.
// Research: original TVDB and TVmaze episode guides, Netflix episode guide,
// and verified 2016/2017 British design-competition rounds.
// https://thetvdb.com/series/the-great-interior-design-challenge/allseasons/official
// https://www.tvmaze.com/shows/12239/the-great-interior-design-challenge/episodeguide
// https://thetvdb.com/series/your-home-made-perfect/allseasons/official
// https://thetvdb.com/series/dream-home-makeover/allseasons/official
// https://www.netflix.com/title/81088239
const auditAdditions = [
  {
    "id": "tv_36433",
    "category": "Television",
    "programme": "The Great Interior Design Challenge",
    "question": "In the 2016 series of The Great Interior Design Challenge, which Peak District village hosted a challenge in traditional cottages?",
    "answers": [
      "Tissington",
      "Bakewell",
      "Hartington",
      "Eyam"
    ],
    "correctAnswer": "Tissington",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "The Great Interior Design Challenge",
      "Programme: The Great Interior Design Challenge",
      "2014–2017",
      "BBC Two",
      "2016 series 3",
      "Episode research: Cottage redesigns in Peak District",
      "Correct answer: Tissington",
      "Evidence: TheTVDB original series-three and series-four episode descriptions",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36434",
    "category": "Television",
    "programme": "The Great Interior Design Challenge",
    "question": "Which London district hosted the Victorian half-house kitchen challenge in The Great Interior Design Challenge Series 3?",
    "answers": [
      "Camden Town",
      "Walthamstow",
      "Wimbledon",
      "Chiswick"
    ],
    "correctAnswer": "Walthamstow",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "The Great Interior Design Challenge",
      "Programme: The Great Interior Design Challenge",
      "2014–2017",
      "BBC Two",
      "2016 series 3",
      "Episode research: Victorian half-house interiors",
      "Correct answer: Walthamstow",
      "Evidence: TheTVDB original series-three and series-four episode descriptions",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36435",
    "category": "Television",
    "programme": "The Great Interior Design Challenge",
    "question": "In which Buckinghamshire town did contestants redesign attic bedrooms in riverside houses on The Great Interior Design Challenge?",
    "answers": [
      "Buckingham",
      "Aylesbury",
      "Marlow",
      "Amersham"
    ],
    "correctAnswer": "Marlow",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "The Great Interior Design Challenge",
      "Programme: The Great Interior Design Challenge",
      "2014–2017",
      "BBC Two",
      "2016 series 3",
      "Episode research: 1960s riverside attic bedrooms",
      "Correct answer: Marlow",
      "Evidence: TheTVDB original series-three and series-four episode descriptions",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36436",
    "category": "Television",
    "programme": "The Great Interior Design Challenge",
    "question": "Which Devon village hosted a coastal cottage quarter-final of The Great Interior Design Challenge?",
    "answers": [
      "Lynton",
      "Dartmouth",
      "Seaton",
      "Beer"
    ],
    "correctAnswer": "Beer",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "The Great Interior Design Challenge",
      "Programme: The Great Interior Design Challenge",
      "2014–2017",
      "BBC Two",
      "2016 series 3",
      "Episode research: Four competitors in coastal cottages",
      "Correct answer: Beer",
      "Evidence: TheTVDB original series-three and series-four episode descriptions",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36437",
    "category": "Television",
    "programme": "The Great Interior Design Challenge",
    "question": "Which cathedral city hosted the medieval-terrace semi-final of The Great Interior Design Challenge in 2016?",
    "answers": [
      "Wells",
      "Canterbury",
      "Salisbury",
      "Chichester"
    ],
    "correctAnswer": "Wells",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "The Great Interior Design Challenge",
      "Programme: The Great Interior Design Challenge",
      "2014–2017",
      "BBC Two",
      "2016 series 3",
      "Episode research: Medieval terrace interior redesign",
      "Correct answer: Wells",
      "Evidence: TheTVDB original series-three and series-four episode descriptions",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36438",
    "category": "Television",
    "programme": "The Great Interior Design Challenge",
    "question": "What sort of building hosted the 2016 grand final of The Great Interior Design Challenge?",
    "answers": [
      "A converted factory in Leeds",
      "A stately home in Sussex",
      "An Edinburgh castle hotel",
      "A houseboat in London"
    ],
    "correctAnswer": "A stately home in Sussex",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "The Great Interior Design Challenge",
      "Programme: The Great Interior Design Challenge",
      "2014–2017",
      "BBC Two",
      "2016 series 3",
      "Episode research: Stately-home apartment transformation",
      "Correct answer: A stately home in Sussex",
      "Evidence: TheTVDB original series-three and series-four episode descriptions",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36439",
    "category": "Television",
    "programme": "The Great Interior Design Challenge",
    "question": "In which Cheltenham estate did The Great Interior Design Challenge open its final series?",
    "answers": [
      "Montpellier",
      "St Paul's",
      "Pittville",
      "Leckhampton"
    ],
    "correctAnswer": "Pittville",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "The Great Interior Design Challenge",
      "Programme: The Great Interior Design Challenge",
      "2014–2017",
      "BBC Two",
      "2017 series 4",
      "Episode research: Regency houses in Cheltenham",
      "Correct answer: Pittville",
      "Evidence: TheTVDB original series-three and series-four episode descriptions",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36440",
    "category": "Television",
    "programme": "The Great Interior Design Challenge",
    "question": "Which colour divided the judges when contestant Katie used it in The Great Interior Design Challenge's Cheltenham heat?",
    "answers": [
      "Black",
      "Turquoise",
      "Lime green",
      "Peach"
    ],
    "correctAnswer": "Peach",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "The Great Interior Design Challenge",
      "Programme: The Great Interior Design Challenge",
      "2014–2017",
      "BBC Two",
      "2017 series 4",
      "Episode research: Katie's contentious vintage colour scheme",
      "Correct answer: Peach",
      "Evidence: TheTVDB original series-three and series-four episode descriptions",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36441",
    "category": "Television",
    "programme": "The Great Interior Design Challenge",
    "question": "What children's toy did Oliver propose using in a light fitting during The Great Interior Design Challenge's Cheltenham heat?",
    "answers": [
      "Hula hoops",
      "Skipping ropes",
      "Toy trains",
      "Building blocks"
    ],
    "correctAnswer": "Hula hoops",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "The Great Interior Design Challenge",
      "Programme: The Great Interior Design Challenge",
      "2014–2017",
      "BBC Two",
      "2017 series 4",
      "Episode research: Oliver's unconventional room lighting",
      "Correct answer: Hula hoops",
      "Evidence: TheTVDB original series-three and series-four episode descriptions",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36442",
    "category": "Television",
    "programme": "The Great Interior Design Challenge",
    "question": "What heritage status applied to the former workers' cottages in The Great Interior Design Challenge's Saltaire heat?",
    "answers": [
      "Grade I-listed",
      "Grade II-listed",
      "Scheduled ancient monument",
      "World Heritage Site-listed individually"
    ],
    "correctAnswer": "Grade II-listed",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "The Great Interior Design Challenge",
      "Programme: The Great Interior Design Challenge",
      "2014–2017",
      "BBC Two",
      "2017 series 4",
      "Episode research: Listed Saltaire cottages",
      "Correct answer: Grade II-listed",
      "Evidence: TheTVDB original series-three and series-four episode descriptions",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36443",
    "category": "Television",
    "programme": "The Great Interior Design Challenge",
    "question": "What was the name of the Victorian Gothic residential enclave featured in The Great Interior Design Challenge's Highgate heat?",
    "answers": [
      "Highgate Garden Square",
      "St John's Wood",
      "Holly Village",
      "Hampstead Heath"
    ],
    "correctAnswer": "Holly Village",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "The Great Interior Design Challenge",
      "Programme: The Great Interior Design Challenge",
      "2014–2017",
      "BBC Two",
      "2017 series 4",
      "Episode research: Victorian Gothic cottages in North London",
      "Correct answer: Holly Village",
      "Evidence: TheTVDB original series-three and series-four episode descriptions",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36444",
    "category": "Television",
    "programme": "The Great Interior Design Challenge",
    "question": "What material were the designers required to incorporate in The Great Interior Design Challenge's Aberaeron quarter-final?",
    "answers": [
      "Cork",
      "Slate",
      "Glass bottles",
      "Rope"
    ],
    "correctAnswer": "Rope",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "The Great Interior Design Challenge",
      "Programme: The Great Interior Design Challenge",
      "2014–2017",
      "BBC Two",
      "2017 series 4",
      "Episode research: Creative challenge in Georgian seaside houses",
      "Correct answer: Rope",
      "Evidence: TheTVDB original series-three and series-four episode descriptions",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36445",
    "category": "Television",
    "programme": "The Great Interior Design Challenge",
    "question": "What suspected hazard interrupted work in the Streatham Art Deco flats on The Great Interior Design Challenge?",
    "answers": [
      "Asbestos",
      "Flooding",
      "A gas leak",
      "Subsidence"
    ],
    "correctAnswer": "Asbestos",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "The Great Interior Design Challenge",
      "Programme: The Great Interior Design Challenge",
      "2014–2017",
      "BBC Two",
      "2017 series 4",
      "Episode research: Safety concern during quarter-final",
      "Correct answer: Asbestos",
      "Evidence: TheTVDB original series-three and series-four episode descriptions",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36446",
    "category": "Television",
    "programme": "The Great Interior Design Challenge",
    "question": "Which editor of Elle Decoration guest-judged the thatched-cottage round of The Great Interior Design Challenge in 2017?",
    "answers": [
      "Sophie Conran",
      "Michelle Ogundehin",
      "Abigail Ahern",
      "Linda Barker"
    ],
    "correctAnswer": "Michelle Ogundehin",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "The Great Interior Design Challenge",
      "Programme: The Great Interior Design Challenge",
      "2014–2017",
      "BBC Two",
      "2017 series 4",
      "Episode research: Guest judge at Ashby St Ledgers",
      "Correct answer: Michelle Ogundehin",
      "Evidence: TheTVDB original series-three and series-four episode descriptions",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36447",
    "category": "Television",
    "programme": "The Great Interior Design Challenge",
    "question": "In which Kent seaside town was the final of The Great Interior Design Challenge held in a converted mock castle?",
    "answers": [
      "Ramsgate",
      "Margate",
      "Broadstairs",
      "Deal"
    ],
    "correctAnswer": "Broadstairs",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "The Great Interior Design Challenge",
      "Programme: The Great Interior Design Challenge",
      "2014–2017",
      "BBC Two",
      "2017 series 4",
      "Episode research: Mock-castle converted apartments",
      "Correct answer: Broadstairs",
      "Evidence: TheTVDB original series-three and series-four episode descriptions",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36448",
    "category": "Television",
    "programme": "The Great Interior Design Challenge",
    "question": "Which former regular judge returned for the 2017 final of The Great Interior Design Challenge?",
    "answers": [
      "Dara Huang",
      "Nina Campbell",
      "Kelly Hoppen",
      "Sophie Robinson"
    ],
    "correctAnswer": "Sophie Robinson",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "The Great Interior Design Challenge",
      "Programme: The Great Interior Design Challenge",
      "2014–2017",
      "BBC Two",
      "2017 series 4",
      "Episode research: Former judge joins Kelly Hoppen and Daniel Hopwood in finale",
      "Correct answer: Sophie Robinson",
      "Evidence: TheTVDB original series-three and series-four episode descriptions",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36449",
    "category": "Television",
    "programme": "Your Home Made Perfect",
    "question": "How much did Luke and Mimi have to spend transforming their Grantham home on Your Home Made Perfect?",
    "answers": [
      "£30,000",
      "£55,000",
      "£70,000",
      "£100,000"
    ],
    "correctAnswer": "£30,000",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Your Home Made Perfect",
      "Programme: Your Home Made Perfect",
      "2019–2023",
      "BBC Two",
      "2019 series 1",
      "Episode research: Budget for crowded Grantham terrace",
      "Correct answer: £30,000",
      "Evidence: TheTVDB Your Home Made Perfect original episode synopses for series 1–4",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36450",
    "category": "Television",
    "programme": "Your Home Made Perfect",
    "question": "Near which North Yorkshire town did Ruth and Lindsey live in Your Home Made Perfect's first series?",
    "answers": [
      "Harrogate",
      "Middlesbrough",
      "Whitby",
      "Ripon"
    ],
    "correctAnswer": "Middlesbrough",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Your Home Made Perfect",
      "Programme: Your Home Made Perfect",
      "2019–2023",
      "BBC Two",
      "2019 series 1",
      "Episode research: 1990s family home near Middlesbrough",
      "Correct answer: Middlesbrough",
      "Evidence: TheTVDB Your Home Made Perfect original episode synopses for series 1–4",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36451",
    "category": "Television",
    "programme": "Your Home Made Perfect",
    "question": "What quiet activity did Lisa want space for in her Shrewsbury home on Your Home Made Perfect?",
    "answers": [
      "Pottery firing",
      "Piano lessons",
      "Yoga",
      "Home brewing"
    ],
    "correctAnswer": "Yoga",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Your Home Made Perfect",
      "Programme: Your Home Made Perfect",
      "2019–2023",
      "BBC Two",
      "2019 series 1",
      "Episode research: Lisa's hobby versus family musical instruments",
      "Correct answer: Yoga",
      "Evidence: TheTVDB Your Home Made Perfect original episode synopses for series 1–4",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36452",
    "category": "Television",
    "programme": "Your Home Made Perfect",
    "question": "What limited Silvia and Julian's options for expanding their bungalow on Your Home Made Perfect?",
    "answers": [
      "A railway line beneath the garden",
      "A compulsory purchase order",
      "A listed medieval tower",
      "Planning restrictions"
    ],
    "correctAnswer": "Planning restrictions",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Your Home Made Perfect",
      "Programme: Your Home Made Perfect",
      "2019–2023",
      "BBC Two",
      "2020 series 2",
      "Episode research: Constraints on extension near Brighton",
      "Correct answer: Planning restrictions",
      "Evidence: TheTVDB Your Home Made Perfect original episode synopses for series 1–4",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36453",
    "category": "Television",
    "programme": "Your Home Made Perfect",
    "question": "What part of Gemini and James's Surrey house remained cramped and awkward on Your Home Made Perfect?",
    "answers": [
      "The front entrance and hallway",
      "The attic recording studio",
      "The rear greenhouse",
      "The basement wine cellar"
    ],
    "correctAnswer": "The front entrance and hallway",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Your Home Made Perfect",
      "Programme: Your Home Made Perfect",
      "2019–2023",
      "BBC Two",
      "2020 series 2",
      "Episode research: Hallway also used as utility room",
      "Correct answer: The front entrance and hallway",
      "Evidence: TheTVDB Your Home Made Perfect original episode synopses for series 1–4",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36454",
    "category": "Television",
    "programme": "Your Home Made Perfect",
    "question": "Which Essex seaside town was home to Natasha and Gael in Your Home Made Perfect?",
    "answers": [
      "Southend-on-Sea",
      "Leigh-on-Sea",
      "Clacton-on-Sea",
      "Frinton-on-Sea"
    ],
    "correctAnswer": "Leigh-on-Sea",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Your Home Made Perfect",
      "Programme: Your Home Made Perfect",
      "2019–2023",
      "BBC Two",
      "2021 series 3",
      "Episode research: Dark and claustrophobic downstairs layout",
      "Correct answer: Leigh-on-Sea",
      "Evidence: TheTVDB Your Home Made Perfect original episode synopses for series 1–4",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36455",
    "category": "Television",
    "programme": "Your Home Made Perfect",
    "question": "Which two architects pitched redesigns to Natasha and Gael on Your Home Made Perfect?",
    "answers": [
      "Laura Jane Clark and Robert Jamison",
      "Will Foster and Lynsey Elliott",
      "Damion Burrows and Lizzie Fraher",
      "Julian McIntosh and Manoj Malde"
    ],
    "correctAnswer": "Damion Burrows and Lizzie Fraher",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Your Home Made Perfect",
      "Programme: Your Home Made Perfect",
      "2019–2023",
      "BBC Two",
      "2021 series 3",
      "Episode research: Third-series Essex architect pairing",
      "Correct answer: Damion Burrows and Lizzie Fraher",
      "Evidence: TheTVDB Your Home Made Perfect original episode synopses for series 1–4",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36456",
    "category": "Television",
    "programme": "Your Home Made Perfect",
    "question": "In which UK city did Lei Ying and David try to fix a poorly organised home on Your Home Made Perfect?",
    "answers": [
      "Cardiff",
      "Glasgow",
      "Edinburgh",
      "Belfast"
    ],
    "correctAnswer": "Belfast",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Your Home Made Perfect",
      "Programme: Your Home Made Perfect",
      "2019–2023",
      "BBC Two",
      "2021 series 3",
      "Episode research: Family home with awkward route to garden",
      "Correct answer: Belfast",
      "Evidence: TheTVDB Your Home Made Perfect original episode synopses for series 1–4",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36457",
    "category": "Television",
    "programme": "Your Home Made Perfect",
    "question": "What budget did Lei Ying and David have for their Your Home Made Perfect renovation?",
    "answers": [
      "£25,000",
      "£40,000",
      "£55,000",
      "£100,000"
    ],
    "correctAnswer": "£25,000",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Your Home Made Perfect",
      "Programme: Your Home Made Perfect",
      "2019–2023",
      "BBC Two",
      "2021 series 3",
      "Episode research: Modest-budget Belfast project",
      "Correct answer: £25,000",
      "Evidence: TheTVDB Your Home Made Perfect original episode synopses for series 1–4",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36458",
    "category": "Television",
    "programme": "Your Home Made Perfect",
    "question": "What was the renovation budget for Jacqueline and Jamie's London terrace on Your Home Made Perfect?",
    "answers": [
      "£15,000",
      "£40,000",
      "£75,000",
      "£120,000"
    ],
    "correctAnswer": "£40,000",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Your Home Made Perfect",
      "Programme: Your Home Made Perfect",
      "2019–2023",
      "BBC Two",
      "2021 series 3",
      "Episode research: Reorganising shared family home",
      "Correct answer: £40,000",
      "Evidence: TheTVDB Your Home Made Perfect original episode synopses for series 1–4",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36459",
    "category": "Television",
    "programme": "Your Home Made Perfect",
    "question": "Which Buckinghamshire city featured Victoria and Raheel's home on Your Home Made Perfect?",
    "answers": [
      "Aylesbury",
      "Oxford",
      "Milton Keynes",
      "High Wycombe"
    ],
    "correctAnswer": "Milton Keynes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Your Home Made Perfect",
      "Programme: Your Home Made Perfect",
      "2019–2023",
      "BBC Two",
      "2021 series 3",
      "Episode research: Home redesigned for a growing family",
      "Correct answer: Milton Keynes",
      "Evidence: TheTVDB Your Home Made Perfect original episode synopses for series 1–4",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36460",
    "category": "Television",
    "programme": "Your Home Made Perfect",
    "question": "What unusual ceiling feature did architect Will Foster suggest for Yesim and Hasan on Your Home Made Perfect?",
    "answers": [
      "A mirrored dome",
      "A glass barrel vault",
      "A spiral skylight",
      "A pyramid ceiling"
    ],
    "correctAnswer": "A pyramid ceiling",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Your Home Made Perfect",
      "Programme: Your Home Made Perfect",
      "2019–2023",
      "BBC Two",
      "2023 series 4",
      "Episode research: Unconventional proposal in Enfield",
      "Correct answer: A pyramid ceiling",
      "Evidence: TheTVDB Your Home Made Perfect original episode synopses for series 1–4",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36461",
    "category": "Television",
    "programme": "Your Home Made Perfect",
    "question": "Which staircase problem complicated Lee and Darren's 1960s Southampton home on Your Home Made Perfect?",
    "answers": [
      "Two separate staircases split the house",
      "The stairs were outside in the garden",
      "A spiral staircase blocked the kitchen",
      "There was no staircase to the first floor"
    ],
    "correctAnswer": "Two separate staircases split the house",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Your Home Made Perfect",
      "Programme: Your Home Made Perfect",
      "2019–2023",
      "BBC Two",
      "2023 series 4",
      "Episode research: Repeated extensions had fragmented house layout",
      "Correct answer: Two separate staircases split the house",
      "Evidence: TheTVDB Your Home Made Perfect original episode synopses for series 1–4",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36462",
    "category": "Television",
    "programme": "Your Home Made Perfect",
    "question": "Which two architects proposed renovations for Jill Halfpenny's Tynemouth flat on Your Home Made Perfect?",
    "answers": [
      "Robert Jamison and Laura Jane Clark",
      "Will Foster and Lynsey Elliott",
      "Damion Burrows and Lizzie Fraher",
      "Julian McIntosh and Pip Probert"
    ],
    "correctAnswer": "Will Foster and Lynsey Elliott",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Your Home Made Perfect",
      "Programme: Your Home Made Perfect",
      "2019–2023",
      "BBC Two",
      "2023 series 4",
      "Episode research: First flat featured by the programme",
      "Correct answer: Will Foster and Lynsey Elliott",
      "Evidence: TheTVDB Your Home Made Perfect original episode synopses for series 1–4",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36463",
    "category": "Television",
    "programme": "Your Home Made Perfect",
    "question": "Which two architects competed to redesign Reena and Wes's Borehamwood home on Your Home Made Perfect?",
    "answers": [
      "Kelly Hoppen and Daniel Hopwood",
      "Robert Jamison and Laura Jane Clark",
      "Will Foster and Lizzie Fraher",
      "Damion Burrows and Julian McIntosh"
    ],
    "correctAnswer": "Will Foster and Lizzie Fraher",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Your Home Made Perfect",
      "Programme: Your Home Made Perfect",
      "2019–2023",
      "BBC Two",
      "2023 series 4",
      "Episode research: Borehamwood family's growing needs",
      "Correct answer: Will Foster and Lizzie Fraher",
      "Evidence: TheTVDB Your Home Made Perfect original episode synopses for series 1–4",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36464",
    "category": "Television",
    "programme": "Your Home Made Perfect",
    "question": "What room led to arguments between twins Lilly and Fionn in the Rickmansworth episode of Your Home Made Perfect?",
    "answers": [
      "The dining room",
      "The conservatory",
      "The attic bathroom",
      "The box bedroom"
    ],
    "correctAnswer": "The box bedroom",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Your Home Made Perfect",
      "Programme: Your Home Made Perfect",
      "2019–2023",
      "BBC Two",
      "2023 series 4",
      "Episode research: Caitriona and Kevin's family room allocation",
      "Correct answer: The box bedroom",
      "Evidence: TheTVDB Your Home Made Perfect original episode synopses for series 1–4",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36465",
    "category": "Television",
    "programme": "Your Home Made Perfect",
    "question": "What was the former purpose of Fiona and Andrew's 300-year-old Solihull home on Your Home Made Perfect?",
    "answers": [
      "A barn",
      "A chapel",
      "A schoolhouse",
      "A coaching inn"
    ],
    "correctAnswer": "A barn",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Your Home Made Perfect",
      "Programme: Your Home Made Perfect",
      "2019–2023",
      "BBC Two",
      "2023 series 4",
      "Episode research: Awkward historic agricultural conversion",
      "Correct answer: A barn",
      "Evidence: TheTVDB Your Home Made Perfect original episode synopses for series 1–4",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36466",
    "category": "Television",
    "programme": "Your Home Made Perfect",
    "question": "What structure cut the Devon family's garden off from their house in the Your Home Made Perfect episode with Louise and Stephen?",
    "answers": [
      "A railway bridge",
      "A high retaining wall",
      "A canal lock",
      "An old stone viaduct"
    ],
    "correctAnswer": "A high retaining wall",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Your Home Made Perfect",
      "Programme: Your Home Made Perfect",
      "2019–2023",
      "BBC Two",
      "2023 series 4",
      "Episode research: Poor connection to pool and garden",
      "Correct answer: A high retaining wall",
      "Evidence: TheTVDB Your Home Made Perfect original episode synopses for series 1–4",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "British home redesign television",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36467",
    "category": "Television",
    "programme": "Dream Home Makeover",
    "question": "From which city had the home-theatre client moved in Dream Home Makeover's Movie Room Remake?",
    "answers": [
      "Paris",
      "Chicago",
      "London",
      "Toronto"
    ],
    "correctAnswer": "London",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Dream Home Makeover",
      "Programme: Dream Home Makeover",
      "2020–2022",
      "Netflix",
      "2020 season 1",
      "Episode research: Transatlantic homeowner wants a cinema",
      "Correct answer: London",
      "Evidence: Netflix official episode guide; TheTVDB Dream Home Makeover four-season episode synopses",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "American Netflix docuseries",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36468",
    "category": "Television",
    "programme": "Dream Home Makeover",
    "question": "What sporting career did a client have before featuring in Dream Home Makeover's Luxury Estate?",
    "answers": [
      "NFL quarterback",
      "Olympic swimmer",
      "Major League Baseball pitcher",
      "NBA basketball player"
    ],
    "correctAnswer": "NBA basketball player",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Dream Home Makeover",
      "Programme: Dream Home Makeover",
      "2020–2022",
      "Netflix",
      "2021 season 2",
      "Episode research: Former professional basketball player's family",
      "Correct answer: NBA basketball player",
      "Evidence: Netflix official episode guide; TheTVDB Dream Home Makeover four-season episode synopses",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "American Netflix docuseries",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36469",
    "category": "Television",
    "programme": "Dream Home Makeover",
    "question": "How many children did the family have in Dream Home Makeover's Bath Hideaway?",
    "answers": [
      "Six",
      "Two",
      "Four",
      "Eight"
    ],
    "correctAnswer": "Six",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Dream Home Makeover",
      "Programme: Dream Home Makeover",
      "2020–2022",
      "Netflix",
      "2021 season 2",
      "Episode research: Spa-like bathroom for large household",
      "Correct answer: Six",
      "Evidence: Netflix official episode guide; TheTVDB Dream Home Makeover four-season episode synopses",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "American Netflix docuseries",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36470",
    "category": "Television",
    "programme": "Dream Home Makeover",
    "question": "Which historic room did Shea redesign in Dream Home Makeover's Restoring History, set in a 1908 house?",
    "answers": [
      "Library",
      "Kitchen",
      "Drawing room",
      "Attic bedroom"
    ],
    "correctAnswer": "Kitchen",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Dream Home Makeover",
      "Programme: Dream Home Makeover",
      "2020–2022",
      "Netflix",
      "2021 season 2",
      "Episode research: Preserving historic character during kitchen remodel",
      "Correct answer: Kitchen",
      "Evidence: Netflix official episode guide; TheTVDB Dream Home Makeover four-season episode synopses",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "American Netflix docuseries",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36471",
    "category": "Television",
    "programme": "Dream Home Makeover",
    "question": "What part of the mountain cabin did Shea brighten in Dream Home Makeover's Mountain Retreat Makeover?",
    "answers": [
      "Garage door",
      "Spiral staircase",
      "Fireplace",
      "Boathouse"
    ],
    "correctAnswer": "Fireplace",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Dream Home Makeover",
      "Programme: Dream Home Makeover",
      "2020–2022",
      "Netflix",
      "2021 season 2",
      "Episode research: Bohemian-meets-modern mountain cabin",
      "Correct answer: Fireplace",
      "Evidence: Netflix official episode guide; TheTVDB Dream Home Makeover four-season episode synopses",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "American Netflix docuseries",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36472",
    "category": "Television",
    "programme": "Dream Home Makeover",
    "question": "Which Pacific island destination inspired a bedroom makeover in Dream Home Makeover's Bedroom Oasis?",
    "answers": [
      "Bali",
      "Fiji",
      "Tahiti",
      "Hawaii"
    ],
    "correctAnswer": "Hawaii",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Dream Home Makeover",
      "Programme: Dream Home Makeover",
      "2020–2022",
      "Netflix",
      "2021 season 2",
      "Episode research: Island-inspired bedroom project",
      "Correct answer: Hawaii",
      "Evidence: Netflix official episode guide; TheTVDB Dream Home Makeover four-season episode synopses",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "American Netflix docuseries",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36473",
    "category": "Television",
    "programme": "Dream Home Makeover",
    "question": "Which storage feature was included in Dream Home Makeover's ocean-view kitchen redesign A Dream Kitchen Come True?",
    "answers": [
      "Open shelving",
      "Floor-to-ceiling filing cabinets",
      "A dedicated shoe wall",
      "A wine cellar beneath the floor"
    ],
    "correctAnswer": "Open shelving",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Dream Home Makeover",
      "Programme: Dream Home Makeover",
      "2020–2022",
      "Netflix",
      "2022 season 3",
      "Episode research: Updating a dated coastal kitchen",
      "Correct answer: Open shelving",
      "Evidence: Netflix official episode guide; TheTVDB Dream Home Makeover four-season episode synopses",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "American Netflix docuseries",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36474",
    "category": "Television",
    "programme": "Dream Home Makeover",
    "question": "What disaster had damaged the home of the client in Dream Home Makeover's Open Concept Space?",
    "answers": [
      "A flood",
      "A house fire",
      "A landslide",
      "An earthquake"
    ],
    "correctAnswer": "A house fire",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Dream Home Makeover",
      "Programme: Dream Home Makeover",
      "2020–2022",
      "Netflix",
      "2022 season 3",
      "Episode research: Rebuild of a client's bedroom and home",
      "Correct answer: A house fire",
      "Evidence: Netflix official episode guide; TheTVDB Dream Home Makeover four-season episode synopses",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "American Netflix docuseries",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36475",
    "category": "Television",
    "programme": "Dream Home Makeover",
    "question": "Which state was the setting for Dream Home Makeover's SoCal dream house with a secret passage?",
    "answers": [
      "Nevada",
      "Arizona",
      "California",
      "Colorado"
    ],
    "correctAnswer": "California",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Dream Home Makeover",
      "Programme: Dream Home Makeover",
      "2020–2022",
      "Netflix",
      "2022 season 3",
      "Episode research: Syd's Southern California roots",
      "Correct answer: California",
      "Evidence: Netflix official episode guide; TheTVDB Dream Home Makeover four-season episode synopses",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "American Netflix docuseries",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36476",
    "category": "Television",
    "programme": "Dream Home Makeover",
    "question": "Which food motif did Shea want removed in Dream Home Makeover's The Mother of all Remodels?",
    "answers": [
      "Apples",
      "Fish",
      "Pineapples",
      "Chickens"
    ],
    "correctAnswer": "Chickens",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Dream Home Makeover",
      "Programme: Dream Home Makeover",
      "2020–2022",
      "Netflix",
      "2022 season 4",
      "Episode research: Older home updated with granny-chic elements",
      "Correct answer: Chickens",
      "Evidence: Netflix official episode guide; TheTVDB Dream Home Makeover four-season episode synopses",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "American Netflix docuseries",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36477",
    "category": "Television",
    "programme": "Dream Home Makeover",
    "question": "In which decade of the nineteenth century was the pioneer home built in Dream Home Makeover's From Living Room to Library?",
    "answers": [
      "The 1880s",
      "The 1820s",
      "The 1850s",
      "The 1890s"
    ],
    "correctAnswer": "The 1880s",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Dream Home Makeover",
      "Programme: Dream Home Makeover",
      "2020–2022",
      "Netflix",
      "2022 season 4",
      "Episode research: Restoring an 1885 historic home",
      "Correct answer: The 1880s",
      "Evidence: Netflix official episode guide; TheTVDB Dream Home Makeover four-season episode synopses",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "American Netflix docuseries",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36478",
    "category": "Television",
    "programme": "Dream Home Makeover",
    "question": "What extra kitchen room was installed alongside a custom range hood in Dream Home Makeover's Kitchen Expansion?",
    "answers": [
      "Walk-in wine room",
      "Butler's pantry",
      "Breakfast conservatory",
      "Commercial catering room"
    ],
    "correctAnswer": "Butler's pantry",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "Interior Design",
      "Home Makeover Television",
      "Dream Home Makeover",
      "Programme: Dream Home Makeover",
      "2020–2022",
      "Netflix",
      "2022 season 4",
      "Episode research: Home for Studio McGee team member",
      "Correct answer: Butler's pantry",
      "Evidence: Netflix official episode guide; TheTVDB Dream Home Makeover four-season episode synopses",
      "TV factual and reality series",
      "Home design and architecture",
      "Episode-specific question",
      "Homeowners, designers and clients",
      "Production and broadcast era",
      "American Netflix docuseries",
      "Original series era",
      "November 2026 television quiz audit",
      "Daily Quiz eligible"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==132||
 new Set(questions.map(q=>q.id)).size!==questions.length||
 new Set(questions.map(q=>q.question.trim().toLowerCase())).size!==questions.length||
 questions.some(q=>q.category!=='Television'||!q.programme||
 q.answers.length!==4||new Set(q.answers.map(a=>a.trim().toLowerCase())).size!==4||
 q.answers.filter(a=>a===q.correctAnswer).length!==1||
 !q.tags.includes(`Programme: ${q.programme}`)||q.tags.length<15||q.dailyEligible!==true)||
 auditAdditions.some(q=>q.tags.length<18||!q.question.includes(q.programme)))
 throw Error("Pack 319 audit validation failed");

module.exports = questions;
