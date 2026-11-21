
// quiz_pack318.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Gardening and home-design series
// Big Dreams, Small Spaces; The Big Interiors Battle;
// The House That £100k Built.
// Every question has an explicit programme for the Daily Quiz display.
// Row: question | correct | three wrong answers | difficulty | seven individual tags

const groups = [
    {
        programme: 'Big Dreams, Small Spaces',
        era: '2014-2017',
        broadcaster: 'BBC Two',
        topic: 'Monty Don helps amateur gardeners realise ambitious designs',
        facts: `Who presented Big Dreams, Small Spaces?|Monty Don|Joe Swift|Alan Titchmarsh|Chris Beardshaw|Easy|Monty Don|Lead Presenter|Amateur Gardeners|BBC Gardening|Garden Mentoring|Programme Host|Outdoor Transformations
Which BBC channel originally broadcast Big Dreams, Small Spaces?|BBC Two|BBC One|BBC Four|CBBC|Easy|BBC Two|Original Broadcaster|Garden Documentary|Daytime And Factual|2014 Premiere|British Television|Programme Launch
In which year did Big Dreams, Small Spaces first air?|2014|2008|2011|2018|Easy|2014 Launch|October Premiere|Series One|Programme Timeline|Monty Don|British Garden Shows|First Transmission
How many series of Big Dreams, Small Spaces were produced?|Three|One|Two|Five|Medium|Three Series|2014 Series|2016 Series|2017 Series|Broadcast History|Programme Run|Monty Don
How many different gardening households did Monty typically help in each episode?|Two|One|Three|Four|Easy|Two Households|Episode Format|Amateur Gardeners|Separate Projects|Parallel Makeovers|Practical Advice|Programme Structure
Which production company made Big Dreams, Small Spaces?|Lion Television|Rumpus Media|Remarkable Television|betty|Medium|Lion Television|Production Company|BBC Two Commission|Gardening Factual|Programme Credits|Independent Producer|Monty Don
Which country inspired the garden planned in Sussex in the opening episode?|Portugal|Italy|Japan|Morocco|Medium|Portuguese Garden|Sussex|First Episode|Overseas Inspiration|Jan And John|Planting Style|2014 Storyline
In the opening episode, what did the Cadeby couple hope to create in their garden?|A productive smallholding|A miniature golf course|An outdoor cinema|A rose-only show garden|Medium|Cadeby|Helen And Richard|Productive Garden|First Episode|Home Food Growing|South Yorkshire|2014 Garden
Which town featured a widow creating a new cottage garden in the first series?|Swindon|Bath|Leeds|York|Medium|Swindon|Widow Gardener|Cottage Garden|First Series|New Home|Traditional Planting|2014 Episode
In the first series, which Yorkshire town featured a truck driver keen on flowers?|Wakefield|Doncaster|Harrogate|Huddersfield|Medium|Wakefield|Truck Driver|Flower Garden|Series One|Yorkshire Garden|Family Space|2014 Episode
What natural problem affected the coastal garden featured at Hayling?|Salt-laden winds|Volcanic ash|Permafrost|A desert sandstorm|Easy|Hayling|Coastal Garden|Salty Winds|South Coast|Plant Selection|Weather Exposure|2014 Episode
Which Welsh mountain region featured a difficult sloping garden in the first series?|Snowdonia|Brecon Beacons|Pembrokeshire Coast|Clwydian Range|Medium|Snowdonia|Corris|Mountain Garden|Sloping Terrain|Welsh Location|Rocky Landscape|Series One
What did Nikki and John want to grow in their Doncaster garden?|Edible plants and fruit|Only cactus plants|Commercial Christmas trees|Exotic orchids exclusively|Easy|Nikki And John|Doncaster|Edible Garden|Fruit Growing|Family Project|Series One|Productive Planting
What miniature feature did the Walthamstow couple want in their front garden?|A model village|A model railway tunnel|A working windmill|A dinosaur sculpture|Medium|Walthamstow|Nicola And John|Model Village|Front Garden|East London|Unusual Design|First Series
Which Japanese garden feature was planned for a plot in Bromley?|A tea garden|A baseball pitch|A bamboo theatre|A koi aquarium inside the house|Medium|Bromley|Japanese Tea Garden|Eastern Influences|Series One Finale|Design Ambition|London Garden|2014 Series
Which Scandinavian country inspired a garden project in Dorset?|Norway|Finland|Sweden|Denmark|Medium|Dorset|Norwegian Garden|Scandinavian Design|Waterfalls|Series One Finale|International Inspiration|2014 Project
In the 2016 series, what occasion inspired the couple's flower-growing plans in Salisbury?|Their wedding|A graduation ceremony|A retirement party|A village election|Easy|Salisbury|Wedding Flowers|2016 Premiere|Flower Growing|Engaged Couple|Special Occasion|Wiltshire Garden
What activity was planned for an overgrown allotment featured with the Salisbury project?|Beekeeping|Wine making|Fish farming|Pony training|Medium|Barnet|Bee Keeping|Allotment|Second Series Premiere|Wildlife-Friendly Growing|Amateur Gardeners|2016 Episode
Which historical era inspired a plant collection in a Clapham garden in 2016?|Victorian|Roman|Viking|Tudor|Medium|Clapham|Victorian Plant Collectors|Fern Wall|London Garden|Second Series|Unusual Plants|2016 Design
Which Italian-style garden was developed in Teddington in the second series?|A Mediterranean memorial garden|A Roman amphitheatre|A modern football garden|A tropical rainforest dome|Medium|Teddington|Jennifer And Sisters|Italian Garden|Family Memorial|Olive Trees|Second Series|2016 Project
Which famous children's story inspired the garden design in Billericay?|Alice in Wonderland|Peter Pan|The Wind in the Willows|The Jungle Book|Easy|Billericay|Alice In Wonderland|Karensa|Chessboard Patio|Fantasy Garden|Literary Inspiration|Second Series
Which city featured a 2017 project seeking to divide an L-shaped garden into Japanese-inspired areas?|Bath|Bristol|Exeter|Norwich|Medium|Bath|Ant And Jake|Japanese Design|L Shaped Plot|Three Garden Sections|Third Series|2017 Episode
In the 2017 series, which London district featured a tiny courtyard inspired by the Philippines?|Hackney|Chelsea|Paddington|Richmond|Medium|Hackney|Karla And Stuart|Philippines Inspiration|Urban Jungle|Small Courtyard|Tropical Planting|Third Series
Which northern town featured a primary-school garden and play-area project in the final series?|Bury|York|Durham|Carlisle|Medium|Bury|Primary School|Children Playground|Community Garden|Lancashire|Series Three|2017 Project`
    },
    {
        programme: 'The Big Interiors Battle',
        era: '2023',
        broadcaster: 'Channel 4',
        topic: 'Interior designers compete to win a mortgage-free apartment',
        facts: `Who presented The Big Interiors Battle?|AJ Odudu|Angela Scanlon|Stacey Solomon|Sarah Beeny|Easy|AJ Odudu|Series Host|Presenter|Interior Design Competition|Channel Four|2023 Show|British Television
Who judged the competing interiors on The Big Interiors Battle?|Dara Huang|Kelly Hoppen|Laurence Llewelyn-Bowen|Michelle Ogundehin|Easy|Dara Huang|Competition Judge|Architect|Interior Design|Creative Assessment|Judging Role|2023 Series
Which channel originally broadcast The Big Interiors Battle?|Channel 4|BBC One|ITV1|BBC Two|Easy|Channel Four|Original Broadcaster|2023 Programme|Design Reality Show|Television Commission|Interior Competition|UK Factual
In which year did The Big Interiors Battle first air?|2023|2017|2020|2025|Easy|2023 Broadcast|April Premiere|Single Series|UK Television|Competition Timeline|Programme Launch|Channel Four
How many designers took part at the start of The Big Interiors Battle?|Eight|Four|Six|Twelve|Easy|Eight Designers|Opening Contestants|Competition Format|Interior Designers|First Episode|Elimination Series|Design Challenge
What was the winner's main prize on The Big Interiors Battle?|A mortgage-free two-bedroom apartment|A ten-year furniture voucher|A new car and cash|A paid internship abroad|Easy|Mortgage Free Apartment|Two Bedrooms|Grand Prize|Home Ownership|Competition Winner|Life Changing Reward|Design Contest
In which city were the apartments featured on The Big Interiors Battle?|Sheffield|Birmingham|Manchester|Liverpool|Easy|Sheffield|South Yorkshire|Programme Setting|Contestant Apartments|Northern England|Design Venue|2023 Production
What was the name of the apartment development used for The Big Interiors Battle?|Eyewitness Works|Battersea Power Station|The Mailbox|Salford Quays|Medium|Eyewitness Works|Sheffield Development|Industrial Conversion|Contestant Homes|Filming Location|Historic Building|Capital And Centric
What had the Sheffield building used for the show formerly manufactured?|Cutlery|Cars|Shoes|Textiles|Medium|Cutlery Factory|Industrial Heritage|Eyewitness Works|Sheffield Manufacturing|Building History|Urban Regeneration|Filming Site
Which property developer was involved in the apartments featured on the show?|Capital&Centric|Berkeley Homes|Persimmon Homes|Barratt Developments|Medium|Capital And Centric|Property Developer|Eyewitness Works|Sheffield Project|Regeneration Company|Programme Partner|Converted Apartments
What device told contestants whether they had survived an elimination?|An electronic key card|A coloured envelope|A buzzer under the table|A message on a television screen|Easy|Electronic Key Card|Elimination Ceremony|Door Reader|Competition Format|Judges Decision|Contestant Reveal|Design Show
What colour on the key-card reader meant a designer could stay in The Big Interiors Battle?|Green|Red|Amber|Blue|Easy|Green Light|Key Card Reader|Safe Contestant|Elimination Outcome|Competition Rules|Door Access|Survival Signal
Which room did contestants design in the opening episode of The Big Interiors Battle?|Bedroom|Kitchen|Bathroom|Hallway|Easy|Bedroom Challenge|Episode One|Opening Round|Private Space|Design Brief|First Elimination|2023 Competition
How many days were the designers given for the first bedroom challenge?|Four|One|Seven|Fourteen|Medium|Four Days|Bedroom Deadline|Opening Episode|Time Limit|Design Pressure|Contestant Task|2023 Programme
Which room was the focus of the second episode?|Kitchen|Dining room|Study|Hallway|Easy|Kitchen Challenge|Episode Two|Seven Remaining Designers|Room Renovation|Interior Design|Home Function|2023 Contest
Which room was redesigned in the third episode?|Bathroom|Loft|Cellar|Conservatory|Easy|Bathroom Challenge|Third Episode|Design Themes|Hand Painted Murals|Bespoke Wallpaper|Home Renovation|May 2023
What public venue did contestants work on together in the fourth episode?|A café and performance space|A railway waiting room|A local library|A swimming pool changing area|Medium|Team Challenge|Sheffield Cafe|Performance Space|Fourth Episode|Collaborative Design|Public Interior|May 2023
Which room was the focus when four contestants remained in episode five?|Living room|Bathroom|Kitchen|Bedroom|Medium|Living Room Week|Four Remaining Designers|Episode Five|Functional Design|Shared Space|Home Cohesion|May 2023
In episode six, what sort of Peak District venue received a makeover?|An outdoor adventure centre|A railway museum|A church hall|A garden centre|Medium|Peak District|Adventure Centre|Episode Six|Team Project|Common Room|Hikers And Children|Community Venue
Which rooms were redesigned in the semi-final of The Big Interiors Battle?|Spare rooms|Bathrooms|Kitchens|Garages|Medium|Spare Room Challenge|Semi Final|Episode Seven|Finalists Selection|Unused Spaces|Interior Transformation|June 2023
What part of the apartments did the two finalists design for the final challenge?|Hallways|Attics|Balconies|Basements|Medium|Hallway Challenge|Final Episode|Two Finalists|Welcoming Entrance|Practical Design|June 2023|Final Makeover
Who won the 2023 series of The Big Interiors Battle?|Tara Rodrigues|Jamie Dibble|Dara Huang|AJ Odudu|Medium|Tara Rodrigues|Series Champion|Final Winner|Sheffield Apartment|2023 Victory|Grand Prize|Interior Designer
Who faced Tara Rodrigues in the final of The Big Interiors Battle?|Jamie Dibble|Piers Taylor|Manoj Malde|Alan Gardner|Medium|Jamie Dibble|Finalist|Tara Rodrigues|Head To Head|Final Episode|Interior Design Contest|June 2023
Approximately how much was the apartment prize worth on The Big Interiors Battle?|£250,000|£25,000|£75,000|£1 million|Easy|250 Thousand Pounds|Prize Value|Apartment Ownership|Sheffield Flat|Contestant Reward|Life Changing Prize|2023 Final`
    },
    {
        programme: 'The House That £100k Built',
        era: '2013-2017',
        broadcaster: 'BBC Two',
        topic: 'Architectural guidance for ambitious low-budget self-builders',
        facts: `Which architect co-presented The House That £100k Built?|Piers Taylor|George Clarke|Kevin McCloud|Diarmuid Gavin|Easy|Piers Taylor|Architect Presenter|Self Build Advice|BBC Two|Design Expert|Low Budget Housing|Original Team
Which architectural journalist co-presented The House That £100k Built?|Kieran Long|Phil Spencer|Nick Knowles|Charlie Luxton|Medium|Kieran Long|Architecture Journalist|Co Presenter|Building Design|BBC Factual|Programme Team|Self Build Homes
Which channel originally broadcast The House That £100k Built?|BBC Two|Channel 4|ITV1|BBC One|Easy|BBC Two|Original Channel|British Architecture Television|Self Build Documentary|2013 Launch|Factual Broadcasting|Home Construction
In which year did The House That £100k Built first air?|2013|2005|2010|2020|Easy|2013 Premiere|September Broadcast|BBC Two|Programme Timeline|First Series|Housing Documentary|UK Television
What type of project was at the heart of The House That £100k Built?|Building a home on a tight budget|Selling luxury villas at auction|Decorating a celebrity's mansion|Converting offices into shops|Easy|Self Build Homes|Limited Budget|Architecture Advice|Building Projects|Low Cost Housing|Homeowner Ambitions|Programme Format
How many main series of The House That £100k Built aired between 2013 and 2017?|Three|One|Two|Five|Medium|Three Series|2013 Run|2015 Run|2017 Run|BBC History|Series Count|Programme Longevity
In which English city did first-episode self-builder Martin buy a building plot?|Leeds|Sheffield|York|Bradford|Medium|Martin Whyment|Leeds|Opening Episode|Backland Plot|First Home|2013 Series|Yorkshire Self Build
What kind of business did first-episode builder Martin run?|A pizza van|A flower shop|A bookshop|A taxi firm|Medium|Martin Whyment|Pizza Van|Small Business|First Episode|Self Build Finance|Leeds|2013 Story
What difficulty led Martin to seek money from his parents for the build?|The bank refused his mortgage|His home was destroyed by a flood|He lost a television prize|The site was bought by the council|Medium|Mortgage Refusal|Family Loan|Martin Whyment|Leeds Build|First Home|Financial Obstacle|Opening Episode
Which location was associated with Sumati's troubled cottage and replacement house?|Near Berwick-upon-Tweed|Near Brighton|Near Birmingham|Near Bristol|Medium|Sumati Bala|Berwick Upon Tweed|Condemned Cottage|Replacement Build|Border Region|2013 Episode|Home Reconstruction
Which problem forced Sumati to demolish the cottage she had planned to renovate?|Serious structural and damp problems|An aircraft crash|A volcanic eruption|A collapsed motorway bridge|Medium|Sumati Bala|Asbestos|Rising Damp|Condemned House|Demolition|Unexpected Costs|2013 Build
Which county was home to farmers Ruth and Tony and their planned modern farmhouse?|Shropshire|Cornwall|Norfolk|Surrey|Medium|Ruth And Tony|Shropshire|Farmhouse Replacement|Retirement Project|Modern Architecture|2013 Series|Rural Self Build
What type of community hosted Jane and Andy's environmentally minded build?|An eco-community|A retirement village|A marina|A holiday resort|Easy|Jane And Andy|Eco Community|West Wales|Self Sufficiency|Sustainable Building|Local Materials|2013 Series
Which English county featured newly engaged self-builders Justin and Mary?|Devon|Lancashire|Kent|Lincolnshire|Medium|Justin And Mary|Devon|Young Couple|Rural Home|Affordable Housing|2013 Episode|First Time Buyers
In the second series, Wajid and Anam hoped to build a six-bedroom home in which town?|Burnley|Bolton|Blackpool|Bury|Medium|Wajid And Anam|Burnley|Lancashire|Six Bedrooms|2015 Series|Extended Family|Large Self Build
What kind of farm were Andrew and Claire starting during their self-build?|A free-range egg farm|A dairy cattle farm|A vineyard|A sheep wool farm|Medium|Andrew And Claire|Free Range Eggs|Farm Business|Static Caravan|2015 Episode|Rural Housing|Home And Enterprise
What unusual running-cost goal did Jo'ann and Andy pursue for their new home?|No heating or electricity bills|No council tax for life|No water use in winter|No household insurance|Medium|Joann And Andy|Energy Efficient Home|Zero Utility Bills|Low Cost Design|2015 Episode|Sustainable Living|Self Build Goals
Near which Scottish city did Heidi and Steven hope to build an affordable home?|Inverness|Glasgow|Edinburgh|Aberdeen|Medium|Heidi And Steven|Inverness|Highlands|Family Land|70 Thousand Pound Build|2015 Series|Scottish Self Build
Which couple featured a low-cost contemporary farmhouse project in the second series?|Sue and Tim|Ruth and Tony|Derek and Christine|Tom and Zoe|Medium|Sue And Tim|Contemporary Farmhouse|Series Two|2015 Episode|Rural Architecture|Budget Materials|Structural Challenges
Which Northern Irish county featured the 2017 self-build of Alistair and Karen?|County Antrim|County Down|County Armagh|County Tyrone|Medium|Alistair And Karen|County Antrim|Northern Ireland|Mortgage Free Goal|2017 Series|Self Build Couple|Regional Location
What alarming construction problem affected Derek and Christine's 2017 build?|The house might have been built in the wrong place|The roof was painted blue|The windows arrived in the wrong colour|The garden had too many trees|Medium|Derek And Christine|Wrong Building Position|2017 Episode|Planning Error|Construction Setback|Retired Couple|Home Building
Which Devon coastal town hosted Jason and Riikka's glass-and-steel project?|Torquay|Exmouth|Ilfracombe|Sidmouth|Medium|Jason And Riikka|Torquay|Glass And Steel|Sea Views|Winter Storms|Modern Architecture|2017 Episode
What historic building method influenced Neil and Amanda's £50,000 project?|Traditional timber framing|Roman concrete vaults|Stone castle turrets|Viking longboat construction|Medium|Neil And Amanda|Timber Frame|Traditional Joints|50 Thousand Pound Budget|Medieval Inspiration|2017 Build|Handmade Dowels
What was the name of the programme's follow-up instalments revisiting earlier houses?|The Final Fix|The Grand Reveal|The Last Brick|The Homecoming|Medium|The Final Fix|Revisit Episodes|2015 Specials|Completed Homes|Piers Taylor|Kieran Long|Aftercare Design`
    }
];

const FIRST_ID = 14239;
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
            'Television', 'British Television', 'Home and Garden',
            group.programme === 'Big Dreams, Small Spaces' ? 'Gardening' : 'Home Improvement',
            group.broadcaster, group.era, group.programme,
            `Programme: ${group.programme}`, group.topic,
            correctAnswer, ...specificTags
        ].map(tag => [tag.toLowerCase(), tag])).values()];
        const item = {
            id, category: 'Television', programme: group.programme,
            question, answers, correctAnswer, difficulty, tags, dailyEligible: true
        };
        index++;
        return item;
    })
);

const EXPECTED_COUNT = 72;
if (questions.length !== EXPECTED_COUNT) {
    throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
}
if (questions[0].id !== 'tv_14239' ||
    questions[questions.length - 1].id !== 'tv_14310') {
    throw new Error('Unexpected question ID range');
}
if (new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
    throw new Error('Duplicate question IDs or wording');
}
if (questions.some(q => q.category !== 'Television' || !q.programme ||
    q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
    !q.tags.includes(`Programme: ${q.programme}`) ||
    q.tags.length < 14 || q.tags.some(tag => !tag) || q.dailyEligible !== true)) {
    throw new Error('Incomplete exported question metadata');
}

// TV audit, 21 November 2026: three gardening, design and self-build series.
// Retain original IDs tv_14239–tv_14310. Add 43 IDs tv_36390–tv_36432.
// Individual original episode descriptions, contestant interviews and production sources:
// https://www.liontv.com/our-shows/big-dreams-small-spaces-with-monty-don
// https://www.thetvdb.com/series/big-dreams-small-spaces/allseasons/official
// https://www.gathered.how/arts-crafts/craft-tv/the-big-interiors-battle
// https://www.capitalandcentric.com/project/the-big-interiors-battle
// https://thetvdb.com/series/big-interiors-battle/allseasons/official
// https://thetvdb.com/series/the-house-that-100k-built/allseasons/official
const auditAdditions = [
  {
    "id": "tv_36390",
    "category": "Television",
    "programme": "Big Dreams, Small Spaces",
    "question": "Which garden did newly engaged Glenn and Zoe visit for planting inspiration in Big Dreams, Small Spaces?",
    "answers": [
      "Sarah Raven's garden",
      "RHS Wisley",
      "Kew Gardens",
      "Bodnant Garden"
    ],
    "correctAnswer": "Sarah Raven's garden",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Factual Television",
      "Big Dreams, Small Spaces",
      "Programme: Big Dreams, Small Spaces",
      "BBC Two",
      "2014–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2016 Salisbury",
      "Fact focus: Wedding flowers and inspiration",
      "Answer: Sarah Raven's garden",
      "Reference: TheTVDB original Big Dreams Small Spaces episode guide; Lion Television programme record",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Monty Don and amateur gardeners"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36391",
    "category": "Television",
    "programme": "Big Dreams, Small Spaces",
    "question": "Who wanted to transform an overgrown Barnet allotment into a beekeeping site in Big Dreams, Small Spaces?",
    "answers": [
      "Karensa",
      "Nighat",
      "Aletheia",
      "Valerie"
    ],
    "correctAnswer": "Nighat",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "Big Dreams, Small Spaces",
      "Programme: Big Dreams, Small Spaces",
      "BBC Two",
      "2014–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2016 Barnet",
      "Fact focus: Allotment owner's name",
      "Answer: Nighat",
      "Reference: TheTVDB original Big Dreams Small Spaces episode guide; Lion Television programme record",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Monty Don and amateur gardeners"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36392",
    "category": "Television",
    "programme": "Big Dreams, Small Spaces",
    "question": "What unusual large sculptural feature did Frankie want for her Hereford garden in Big Dreams, Small Spaces?",
    "answers": [
      "A steel windmill",
      "A giant glass pyramid",
      "A giant head made of mud",
      "A miniature lighthouse"
    ],
    "correctAnswer": "A giant head made of mud",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "Big Dreams, Small Spaces",
      "Programme: Big Dreams, Small Spaces",
      "BBC Two",
      "2014–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2016 Hereford",
      "Fact focus: Hereford remembrance garden design",
      "Answer: A giant head made of mud",
      "Reference: TheTVDB original Big Dreams Small Spaces episode guide; Lion Television programme record",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Monty Don and amateur gardeners"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36393",
    "category": "Television",
    "programme": "Big Dreams, Small Spaces",
    "question": "Which flower collection did Jack and Chris want to grow in their Victorian-inspired garden in Big Dreams, Small Spaces?",
    "answers": [
      "Orchids",
      "Daffodils",
      "Bluebells",
      "Dahlias"
    ],
    "correctAnswer": "Dahlias",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "Big Dreams, Small Spaces",
      "Programme: Big Dreams, Small Spaces",
      "BBC Two",
      "2014–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2016 Clapham",
      "Fact focus: Clapham plant collector theme",
      "Answer: Dahlias",
      "Reference: TheTVDB original Big Dreams Small Spaces episode guide; Lion Television programme record",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Monty Don and amateur gardeners"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36394",
    "category": "Television",
    "programme": "Big Dreams, Small Spaces",
    "question": "Which two ambitious vertical features did artists Anna and Andrew plan for their Stoke courtyard in Big Dreams, Small Spaces?",
    "answers": [
      "A green roof and living wall",
      "An orchard and rose pergola",
      "A tennis court and swimming pool",
      "An aviary and greenhouse"
    ],
    "correctAnswer": "A green roof and living wall",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "Big Dreams, Small Spaces",
      "Programme: Big Dreams, Small Spaces",
      "BBC Two",
      "2014–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2016 Stoke",
      "Fact focus: Tiny urban courtyard planting",
      "Answer: A green roof and living wall",
      "Reference: TheTVDB original Big Dreams Small Spaces episode guide; Lion Television programme record",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Monty Don and amateur gardeners"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36395",
    "category": "Television",
    "programme": "Big Dreams, Small Spaces",
    "question": "What did Oxford neighbours Anne and Fliss want to do with their front gardens in Big Dreams, Small Spaces?",
    "answers": [
      "Replace both with separate driveways",
      "Combine them into one shared garden",
      "Build an indoor conservatory between them",
      "Create two identical formal lawns"
    ],
    "correctAnswer": "Combine them into one shared garden",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "Big Dreams, Small Spaces",
      "Programme: Big Dreams, Small Spaces",
      "BBC Two",
      "2014–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2016 Oxford",
      "Fact focus: Neighbours' shared project",
      "Answer: Combine them into one shared garden",
      "Reference: TheTVDB original Big Dreams Small Spaces episode guide; Lion Television programme record",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Monty Don and amateur gardeners"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36396",
    "category": "Television",
    "programme": "Big Dreams, Small Spaces",
    "question": "Which RHS garden provided ideas about sensory plants for the Worthing family in Big Dreams, Small Spaces?",
    "answers": [
      "Harlow Carr",
      "Rosemoor",
      "Wisley",
      "Hyde Hall"
    ],
    "correctAnswer": "Wisley",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "Big Dreams, Small Spaces",
      "Programme: Big Dreams, Small Spaces",
      "BBC Two",
      "2014–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2016 Worthing",
      "Fact focus: Accessible family garden research",
      "Answer: Wisley",
      "Reference: TheTVDB original Big Dreams Small Spaces episode guide; Lion Television programme record",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Monty Don and amateur gardeners"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36397",
    "category": "Television",
    "programme": "Big Dreams, Small Spaces",
    "question": "What playful surface did Karensa propose in her Alice in Wonderland-inspired Big Dreams, Small Spaces garden?",
    "answers": [
      "A miniature football pitch",
      "A giant sundial",
      "A spiral gravel maze",
      "A chessboard patio"
    ],
    "correctAnswer": "A chessboard patio",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "Big Dreams, Small Spaces",
      "Programme: Big Dreams, Small Spaces",
      "BBC Two",
      "2014–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2016 Billericay",
      "Fact focus: Storybook garden design",
      "Answer: A chessboard patio",
      "Reference: TheTVDB original Big Dreams Small Spaces episode guide; Lion Television programme record",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Monty Don and amateur gardeners"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36398",
    "category": "Television",
    "programme": "Big Dreams, Small Spaces",
    "question": "Which major annual gardening event did Helen and Dax visit for inspiration in Big Dreams, Small Spaces?",
    "answers": [
      "Chelsea Flower Show",
      "Hampton Court Garden Festival",
      "Tatton Park Flower Show",
      "Malvern Autumn Show"
    ],
    "correctAnswer": "Chelsea Flower Show",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Factual Television",
      "Big Dreams, Small Spaces",
      "Programme: Big Dreams, Small Spaces",
      "BBC Two",
      "2014–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2017 Brighton",
      "Fact focus: Family garden and flower show",
      "Answer: Chelsea Flower Show",
      "Reference: TheTVDB original Big Dreams Small Spaces episode guide; Lion Television programme record",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Monty Don and amateur gardeners"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36399",
    "category": "Television",
    "programme": "Big Dreams, Small Spaces",
    "question": "Which hard-surfaced feature made Valerie's small garden particularly difficult in Big Dreams, Small Spaces?",
    "answers": [
      "A derelict swimming pool",
      "A concrete driveway",
      "A collapsed greenhouse",
      "A raised railway embankment"
    ],
    "correctAnswer": "A concrete driveway",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "Big Dreams, Small Spaces",
      "Programme: Big Dreams, Small Spaces",
      "BBC Two",
      "2014–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2017 High Wycombe",
      "Fact focus: High Wycombe paving problem",
      "Answer: A concrete driveway",
      "Reference: TheTVDB original Big Dreams Small Spaces episode guide; Lion Television programme record",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Monty Don and amateur gardeners"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36400",
    "category": "Television",
    "programme": "Big Dreams, Small Spaces",
    "question": "What childhood-inspired structure did Denise want to create in her Essex garden in Big Dreams, Small Spaces?",
    "answers": [
      "A Victorian railway station",
      "A model aeroplane hangar",
      "The ruins of a mill",
      "A miniature castle moat"
    ],
    "correctAnswer": "The ruins of a mill",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "Big Dreams, Small Spaces",
      "Programme: Big Dreams, Small Spaces",
      "BBC Two",
      "2014–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2017 Essex",
      "Fact focus: Fantasy feature from childhood",
      "Answer: The ruins of a mill",
      "Reference: TheTVDB original Big Dreams Small Spaces episode guide; Lion Television programme record",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Monty Don and amateur gardeners"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36401",
    "category": "Television",
    "programme": "Big Dreams, Small Spaces",
    "question": "What was Rob and Jo's ambitious project on a steep wooded slope in Big Dreams, Small Spaces?",
    "answers": [
      "An indoor tropical butterfly house",
      "A concrete tennis court",
      "A Japanese koi lake",
      "A productive terraced allotment"
    ],
    "correctAnswer": "A productive terraced allotment",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "Big Dreams, Small Spaces",
      "Programme: Big Dreams, Small Spaces",
      "BBC Two",
      "2014–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2017 Ipswich",
      "Fact focus: Father-daughter community gardening",
      "Answer: A productive terraced allotment",
      "Reference: TheTVDB original Big Dreams Small Spaces episode guide; Lion Television programme record",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Monty Don and amateur gardeners"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36402",
    "category": "Television",
    "programme": "Big Dreams, Small Spaces",
    "question": "Which historic Cumbrian estate did Monty suggest Alex visit for inspiration in Big Dreams, Small Spaces?",
    "answers": [
      "Holker Hall",
      "Dalemain Mansion",
      "Lowther Castle",
      "Muncaster Castle"
    ],
    "correctAnswer": "Holker Hall",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "Big Dreams, Small Spaces",
      "Programme: Big Dreams, Small Spaces",
      "BBC Two",
      "2014–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2017 Blackpool",
      "Fact focus: Ancient trees and magical forest",
      "Answer: Holker Hall",
      "Reference: TheTVDB original Big Dreams Small Spaces episode guide; Lion Television programme record",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Monty Don and amateur gardeners"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36403",
    "category": "Television",
    "programme": "The Big Interiors Battle",
    "question": "Which The Big Interiors Battle finalist had studied law before switching to interior design?",
    "answers": [
      "Jamie Dibble",
      "Tara Rodrigues",
      "John Jack",
      "Jordan Paul"
    ],
    "correctAnswer": "Tara Rodrigues",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The Big Interiors Battle",
      "Programme: The Big Interiors Battle",
      "Channel 4",
      "2023",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: Contestant background",
      "Fact focus: Winner's career change",
      "Answer: Tara Rodrigues",
      "Reference: Gathered 2023 season recap and contestant interviews; TheTVDB Channel 4 episode summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Dara Huang and AJ Odudu"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36404",
    "category": "Television",
    "programme": "The Big Interiors Battle",
    "question": "Which The Big Interiors Battle finalist had previously worked as an art and design teacher?",
    "answers": [
      "John Jack",
      "Jordan Paul",
      "Jamie Dibble",
      "Tara Rodrigues"
    ],
    "correctAnswer": "Jamie Dibble",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The Big Interiors Battle",
      "Programme: The Big Interiors Battle",
      "Channel 4",
      "2023",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: Contestant background",
      "Fact focus: Runner-up's teaching career",
      "Answer: Jamie Dibble",
      "Reference: Gathered 2023 season recap and contestant interviews; TheTVDB Channel 4 episode summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Dara Huang and AJ Odudu"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36405",
    "category": "Television",
    "programme": "The Big Interiors Battle",
    "question": "Which The Big Interiors Battle contestant had previously worked as an aerospace engineer?",
    "answers": [
      "Claire Horn",
      "Patrycja Koziara",
      "Tara Rodrigues",
      "Justine Guillermou"
    ],
    "correctAnswer": "Justine Guillermou",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The Big Interiors Battle",
      "Programme: The Big Interiors Battle",
      "Channel 4",
      "2023",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: Contestant background",
      "Fact focus: Colourful designer's earlier career",
      "Answer: Justine Guillermou",
      "Reference: Gathered 2023 season recap and contestant interviews; TheTVDB Channel 4 episode summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Dara Huang and AJ Odudu"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36406",
    "category": "Television",
    "programme": "The Big Interiors Battle",
    "question": "Which The Big Interiors Battle designer drew inspiration from Soviet Brutalism?",
    "answers": [
      "Patrycja Koziara",
      "Jamie Dibble",
      "Claire Noble",
      "John Jack"
    ],
    "correctAnswer": "Patrycja Koziara",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Factual Television",
      "The Big Interiors Battle",
      "Programme: The Big Interiors Battle",
      "Channel 4",
      "2023",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: Contestant background",
      "Fact focus: Architectural aesthetic",
      "Answer: Patrycja Koziara",
      "Reference: Gathered 2023 season recap and contestant interviews; TheTVDB Channel 4 episode summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Dara Huang and AJ Odudu"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36407",
    "category": "Television",
    "programme": "The Big Interiors Battle",
    "question": "Which contestant on The Big Interiors Battle was also an actor from Glasgow?",
    "answers": [
      "Jamie Dibble",
      "John Jack",
      "Jordan Paul",
      "Claire Horn"
    ],
    "correctAnswer": "John Jack",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The Big Interiors Battle",
      "Programme: The Big Interiors Battle",
      "Channel 4",
      "2023",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: Contestant background",
      "Fact focus: Acting and interior design",
      "Answer: John Jack",
      "Reference: Gathered 2023 season recap and contestant interviews; TheTVDB Channel 4 episode summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Dara Huang and AJ Odudu"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36408",
    "category": "Television",
    "programme": "The Big Interiors Battle",
    "question": "Which The Big Interiors Battle contestant was eliminated after the bedroom design challenge?",
    "answers": [
      "Claire Noble",
      "Justine Guillermou",
      "Claire Horn",
      "Patrycja Koziara"
    ],
    "correctAnswer": "Claire Horn",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The Big Interiors Battle",
      "Programme: The Big Interiors Battle",
      "Channel 4",
      "2023",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: Week 1 bedroom designs",
      "Fact focus: First elimination",
      "Answer: Claire Horn",
      "Reference: Gathered 2023 season recap and contestant interviews; TheTVDB Channel 4 episode summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Dara Huang and AJ Odudu"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36409",
    "category": "Television",
    "programme": "The Big Interiors Battle",
    "question": "Who was eliminated following the kitchen challenge in The Big Interiors Battle?",
    "answers": [
      "John Jack",
      "Jamie Dibble",
      "Tara Rodrigues",
      "Jordan Paul"
    ],
    "correctAnswer": "Jordan Paul",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The Big Interiors Battle",
      "Programme: The Big Interiors Battle",
      "Channel 4",
      "2023",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: Week 2 kitchen designs",
      "Fact focus: Second elimination",
      "Answer: Jordan Paul",
      "Reference: Gathered 2023 season recap and contestant interviews; TheTVDB Channel 4 episode summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Dara Huang and AJ Odudu"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36410",
    "category": "Television",
    "programme": "The Big Interiors Battle",
    "question": "Which The Big Interiors Battle contestant left after the bathroom makeover challenge?",
    "answers": [
      "Claire Noble",
      "Claire Horn",
      "Justine Guillermou",
      "Tara Rodrigues"
    ],
    "correctAnswer": "Claire Noble",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The Big Interiors Battle",
      "Programme: The Big Interiors Battle",
      "Channel 4",
      "2023",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: Week 3 bathroom designs",
      "Fact focus: Third elimination",
      "Answer: Claire Noble",
      "Reference: Gathered 2023 season recap and contestant interviews; TheTVDB Channel 4 episode summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Dara Huang and AJ Odudu"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36411",
    "category": "Television",
    "programme": "The Big Interiors Battle",
    "question": "How long did the contestants have for the bathroom challenge in The Big Interiors Battle?",
    "answers": [
      "24 hours",
      "72 hours",
      "One week",
      "Ten days"
    ],
    "correctAnswer": "72 hours",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The Big Interiors Battle",
      "Programme: The Big Interiors Battle",
      "Channel 4",
      "2023",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: Week 3 bathroom designs",
      "Fact focus: Bathroom makeover deadline",
      "Answer: 72 hours",
      "Reference: Gathered 2023 season recap and contestant interviews; TheTVDB Channel 4 episode summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Dara Huang and AJ Odudu"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36412",
    "category": "Television",
    "programme": "The Big Interiors Battle",
    "question": "Which designer was eliminated after the Sheffield café group challenge in The Big Interiors Battle?",
    "answers": [
      "John Jack",
      "Jamie Dibble",
      "Justine Guillermou",
      "Patrycja Koziara"
    ],
    "correctAnswer": "Justine Guillermou",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The Big Interiors Battle",
      "Programme: The Big Interiors Battle",
      "Channel 4",
      "2023",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: Week 4 team challenge",
      "Fact focus: Fourth elimination",
      "Answer: Justine Guillermou",
      "Reference: Gathered 2023 season recap and contestant interviews; TheTVDB Channel 4 episode summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Dara Huang and AJ Odudu"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36413",
    "category": "Television",
    "programme": "The Big Interiors Battle",
    "question": "Which contestant was eliminated after the living-room redesign in The Big Interiors Battle?",
    "answers": [
      "John Jack",
      "Tara Rodrigues",
      "Jamie Dibble",
      "Patrycja Koziara"
    ],
    "correctAnswer": "Patrycja Koziara",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The Big Interiors Battle",
      "Programme: The Big Interiors Battle",
      "Channel 4",
      "2023",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: Week 5 living rooms",
      "Fact focus: Fifth elimination",
      "Answer: Patrycja Koziara",
      "Reference: Gathered 2023 season recap and contestant interviews; TheTVDB Channel 4 episode summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Dara Huang and AJ Odudu"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36414",
    "category": "Television",
    "programme": "The Big Interiors Battle",
    "question": "Which design contestant led the makeover at Thornbridge Outdoors Centre on The Big Interiors Battle?",
    "answers": [
      "Tara Rodrigues",
      "John Jack",
      "Jamie Dibble",
      "Jordan Paul"
    ],
    "correctAnswer": "Tara Rodrigues",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Factual Television",
      "The Big Interiors Battle",
      "Programme: The Big Interiors Battle",
      "Channel 4",
      "2023",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: Week 6 outdoor centre",
      "Fact focus: Leadership of group design",
      "Answer: Tara Rodrigues",
      "Reference: Gathered 2023 season recap and contestant interviews; TheTVDB Channel 4 episode summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Dara Huang and AJ Odudu"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36415",
    "category": "Television",
    "programme": "The Big Interiors Battle",
    "question": "How many designers were eliminated in The Big Interiors Battle's Peak District team challenge?",
    "answers": [
      "One",
      "None",
      "Two",
      "Three"
    ],
    "correctAnswer": "None",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The Big Interiors Battle",
      "Programme: The Big Interiors Battle",
      "Channel 4",
      "2023",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: Week 6 outdoor centre",
      "Fact focus: Judge's choice after impressive team project",
      "Answer: None",
      "Reference: Gathered 2023 season recap and contestant interviews; TheTVDB Channel 4 episode summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Dara Huang and AJ Odudu"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36416",
    "category": "Television",
    "programme": "The Big Interiors Battle",
    "question": "Which contestant failed to reach the final of The Big Interiors Battle after the spare-room challenge?",
    "answers": [
      "Jamie Dibble",
      "Tara Rodrigues",
      "John Jack",
      "Justine Guillermou"
    ],
    "correctAnswer": "John Jack",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The Big Interiors Battle",
      "Programme: The Big Interiors Battle",
      "Channel 4",
      "2023",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: Week 7 semi-final",
      "Fact focus: Semi-final elimination",
      "Answer: John Jack",
      "Reference: Gathered 2023 season recap and contestant interviews; TheTVDB Channel 4 episode summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Dara Huang and AJ Odudu"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36417",
    "category": "Television",
    "programme": "The Big Interiors Battle",
    "question": "What distinctive feature did Tara Rodrigues put in her final hallway in The Big Interiors Battle?",
    "answers": [
      "A live aquarium wall",
      "A marble fountain",
      "A spiral staircase",
      "A glowing LED affirmation"
    ],
    "correctAnswer": "A glowing LED affirmation",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The Big Interiors Battle",
      "Programme: The Big Interiors Battle",
      "Channel 4",
      "2023",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: Final designs",
      "Fact focus: Winner's dramatic entrance hall",
      "Answer: A glowing LED affirmation",
      "Reference: Gathered 2023 season recap and contestant interviews; TheTVDB Channel 4 episode summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Dara Huang and AJ Odudu"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36418",
    "category": "Television",
    "programme": "The Big Interiors Battle",
    "question": "Which production company made The Big Interiors Battle for Channel 4?",
    "answers": [
      "Remarkable Entertainment",
      "Rumpus Media",
      "Lion Television",
      "Betty TV"
    ],
    "correctAnswer": "Remarkable Entertainment",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The Big Interiors Battle",
      "Programme: The Big Interiors Battle",
      "Channel 4",
      "2023",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: Production",
      "Fact focus: 2023 eight-part competition production",
      "Answer: Remarkable Entertainment",
      "Reference: Gathered 2023 season recap and contestant interviews; TheTVDB Channel 4 episode summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Dara Huang and AJ Odudu"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36419",
    "category": "Television",
    "programme": "The House That £100k Built",
    "question": "How much money did Sumati Bala have left for a replacement house in The House That £100k Built after her cottage was condemned?",
    "answers": [
      "£25,000",
      "£50,000",
      "£75,000",
      "£100,000"
    ],
    "correctAnswer": "£50,000",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The House That £100k Built",
      "Programme: The House That £100k Built",
      "BBC Two",
      "2013–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2013 Sumati",
      "Fact focus: Scottish Borders budget after demolition",
      "Answer: £50,000",
      "Reference: TheTVDB The House That £100k Built original episode and The Final Fix summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Kieran Long and Piers Taylor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36420",
    "category": "Television",
    "programme": "The House That £100k Built",
    "question": "In which English county did Tom and Zoe buy a building plot on a housing estate in The House That £100k Built?",
    "answers": [
      "Devon",
      "Cornwall",
      "Cambridgeshire",
      "Northumberland"
    ],
    "correctAnswer": "Cambridgeshire",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The House That £100k Built",
      "Programme: The House That £100k Built",
      "BBC Two",
      "2013–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2013 Tom and Zoe",
      "Fact focus: 2013 self-build location",
      "Answer: Cambridgeshire",
      "Reference: TheTVDB The House That £100k Built original episode and The Final Fix summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Kieran Long and Piers Taylor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36421",
    "category": "Television",
    "programme": "The House That £100k Built",
    "question": "In which part of Wales was the eco-community home of Jane and Andy built in The House That £100k Built?",
    "answers": [
      "North Wales",
      "Cardiff",
      "South-east Wales",
      "West Wales"
    ],
    "correctAnswer": "West Wales",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The House That £100k Built",
      "Programme: The House That £100k Built",
      "BBC Two",
      "2013–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2013 Jane and Andy",
      "Fact focus: Sustainable community site",
      "Answer: West Wales",
      "Reference: TheTVDB The House That £100k Built original episode and The Final Fix summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Kieran Long and Piers Taylor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36422",
    "category": "Television",
    "programme": "The House That £100k Built",
    "question": "Which builder from Leeds still had unfinished rooms when The House That £100k Built revisited him for The Final Fix?",
    "answers": [
      "Martin",
      "Tom",
      "Sholto",
      "Jason"
    ],
    "correctAnswer": "Martin",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Factual Television",
      "The House That £100k Built",
      "Programme: The House That £100k Built",
      "BBC Two",
      "2013–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2015 follow-up",
      "Fact focus: First retrospective to 2013 house",
      "Answer: Martin",
      "Reference: TheTVDB The House That £100k Built original episode and The Final Fix summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Kieran Long and Piers Taylor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36423",
    "category": "Television",
    "programme": "The House That £100k Built",
    "question": "What was the maximum budget suggested for a small improvement at Ruth and Tony's Shropshire house in The House That £100k Built: The Final Fix?",
    "answers": [
      "£2,000",
      "£200",
      "£20,000",
      "£50"
    ],
    "correctAnswer": "£200",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The House That £100k Built",
      "Programme: The House That £100k Built",
      "BBC Two",
      "2013–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2015 follow-up",
      "Fact focus: Ultra-low-cost exterior improvement",
      "Answer: £200",
      "Reference: TheTVDB The House That £100k Built original episode and The Final Fix summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Kieran Long and Piers Taylor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36424",
    "category": "Television",
    "programme": "The House That £100k Built",
    "question": "What weather was threatening Sumati's unfinished home during The House That £100k Built: The Final Fix?",
    "answers": [
      "A summer drought",
      "A heatwave",
      "Wind and rain",
      "Heavy volcanic ash"
    ],
    "correctAnswer": "Wind and rain",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The House That £100k Built",
      "Programme: The House That £100k Built",
      "BBC Two",
      "2013–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2015 follow-up",
      "Fact focus: 2015 return to unfinished exterior",
      "Answer: Wind and rain",
      "Reference: TheTVDB The House That £100k Built original episode and The Final Fix summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Kieran Long and Piers Taylor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36425",
    "category": "Television",
    "programme": "The House That £100k Built",
    "question": "What was the name of Justin and Mary's baby when The House That £100k Built: The Final Fix returned to their Devon home?",
    "answers": [
      "George",
      "Charlie",
      "Harry",
      "Oscar"
    ],
    "correctAnswer": "Oscar",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The House That £100k Built",
      "Programme: The House That £100k Built",
      "BBC Two",
      "2013–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2015 follow-up",
      "Fact focus: New child changes use of rooms",
      "Answer: Oscar",
      "Reference: TheTVDB The House That £100k Built original episode and The Final Fix summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Kieran Long and Piers Taylor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36426",
    "category": "Television",
    "programme": "The House That £100k Built",
    "question": "Which couple built near Inverness after Marcus underwent a double organ transplant in The House That £100k Built?",
    "answers": [
      "Sholto and Marcus",
      "Heidi and Steven",
      "Sue and Tim",
      "Tom and Zoe"
    ],
    "correctAnswer": "Sholto and Marcus",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The House That £100k Built",
      "Programme: The House That £100k Built",
      "BBC Two",
      "2013–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2015 Scotland",
      "Fact focus: Scottish kit home self-build",
      "Answer: Sholto and Marcus",
      "Reference: TheTVDB The House That £100k Built original episode and The Final Fix summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Kieran Long and Piers Taylor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36427",
    "category": "Television",
    "programme": "The House That £100k Built",
    "question": "Which materials were left bare inside Jo'ann and Andy's home in The House That £100k Built?",
    "answers": [
      "Polished marble and oak panelling",
      "Concrete floors and breeze-block walls",
      "Stainless steel and mirrored tiles",
      "Brick arches and thatched ceilings"
    ],
    "correctAnswer": "Concrete floors and breeze-block walls",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The House That £100k Built",
      "Programme: The House That £100k Built",
      "BBC Two",
      "2013–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2015 eco house",
      "Fact focus: Affordable finishes for no-bills house",
      "Answer: Concrete floors and breeze-block walls",
      "Reference: TheTVDB The House That £100k Built original episode and The Final Fix summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Kieran Long and Piers Taylor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36428",
    "category": "Television",
    "programme": "The House That £100k Built",
    "question": "What inexpensive lighting component did Piers Taylor suggest for Jo'ann and Andy in The House That £100k Built?",
    "answers": [
      "A £500 chandelier",
      "A solar-powered streetlamp",
      "A £5 light fitting",
      "A vintage neon sign"
    ],
    "correctAnswer": "A £5 light fitting",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The House That £100k Built",
      "Programme: The House That £100k Built",
      "BBC Two",
      "2013–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2015 eco house",
      "Fact focus: Budget lighting experiment",
      "Answer: A £5 light fitting",
      "Reference: TheTVDB The House That £100k Built original episode and The Final Fix summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Kieran Long and Piers Taylor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36429",
    "category": "Television",
    "programme": "The House That £100k Built",
    "question": "What did Heidi's parents temporarily remortgage to fund the build featured in The House That £100k Built?",
    "answers": [
      "A caravan",
      "A family shop",
      "A yacht",
      "Their own house"
    ],
    "correctAnswer": "Their own house",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The House That £100k Built",
      "Programme: The House That £100k Built",
      "BBC Two",
      "2013–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2015 Heidi and Steven",
      "Fact focus: Family backing for £70,000 build",
      "Answer: Their own house",
      "Reference: TheTVDB The House That £100k Built original episode and The Final Fix summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Kieran Long and Piers Taylor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36430",
    "category": "Television",
    "programme": "The House That £100k Built",
    "question": "Which traditional joinery material did Piers Taylor recommend for Neil and Amanda's home in The House That £100k Built?",
    "answers": [
      "Handmade timber dowels",
      "Plastic wall panels",
      "Precast concrete blocks",
      "Aluminium curtain walls"
    ],
    "correctAnswer": "Handmade timber dowels",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Factual Television",
      "The House That £100k Built",
      "Programme: The House That £100k Built",
      "BBC Two",
      "2013–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2017 Neil and Amanda",
      "Fact focus: Medieval-inspired timber-frame joinery",
      "Answer: Handmade timber dowels",
      "Reference: TheTVDB The House That £100k Built original episode and The Final Fix summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Kieran Long and Piers Taylor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36431",
    "category": "Television",
    "programme": "The House That £100k Built",
    "question": "On which Kent island were Kevin and Lesley planning a seaside-inspired house in The House That £100k Built?",
    "answers": [
      "Isle of Wight",
      "Isle of Sheppey",
      "Isle of Mull",
      "Isle of Skye"
    ],
    "correctAnswer": "Isle of Sheppey",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The House That £100k Built",
      "Programme: The House That £100k Built",
      "BBC Two",
      "2013–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2017 Lesley and Kevin",
      "Fact focus: Coastal design on 2017 episode",
      "Answer: Isle of Sheppey",
      "Reference: TheTVDB The House That £100k Built original episode and The Final Fix summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Kieran Long and Piers Taylor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36432",
    "category": "Television",
    "programme": "The House That £100k Built",
    "question": "Near which Essex seaside town were Jody and Lori planning a bigger family home in The House That £100k Built?",
    "answers": [
      "Harwich",
      "Clacton",
      "Southend",
      "Brightlingsea"
    ],
    "correctAnswer": "Southend",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Factual Television",
      "The House That £100k Built",
      "Programme: The House That £100k Built",
      "BBC Two",
      "2013–2017",
      "Home and Garden Television",
      "BBC and Channel 4 original factual programming",
      "Documentary and reality television",
      "Episode/section: 2017 Jody and Lori",
      "Fact focus: 2017 final episode location",
      "Answer: Southend",
      "Reference: TheTVDB The House That £100k Built original episode and The Final Fix summaries",
      "Programme history and people",
      "Design and renovation",
      "UK English",
      "2026 editorial question audit",
      "Pack 318",
      "Kieran Long and Piers Taylor"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==115||
new Set(questions.map(q=>q.id)).size!==questions.length||
new Set(questions.map(q=>q.question.toLowerCase().trim())).size!==questions.length||
questions.some(q=>q.category!=='Television'||!q.programme||
q.answers.length!==4||new Set(q.answers.map(a=>a.toLowerCase().trim())).size!==4||
q.answers.filter(a=>a===q.correctAnswer).length!==1||
!q.tags.includes(`Programme: ${q.programme}`)||q.tags.length<14||q.dailyEligible!==true)||
auditAdditions.some(q=>q.tags.length<17||!q.question.includes(q.programme)))
throw Error("Pack 318 audit validation failed");

module.exports = questions;
