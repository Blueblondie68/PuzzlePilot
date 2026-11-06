
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
module.exports = questions;
