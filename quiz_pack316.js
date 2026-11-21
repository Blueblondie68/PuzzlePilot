
// quiz_pack316.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Gardening programmes - five complete short-series subjects
// Around the World in 80 Gardens; The Autistic Gardener;
// The Instant Gardener; The Great British Garden Revival;
// The Great Garden Revolution.
// Seven individual specialist tags per question; every programme named explicitly.
// Row: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven tags

const groups = [
    {
        programme: 'Around the World in 80 Gardens',
        era: '2008',
        broadcaster: 'BBC Two',
        topic: 'Monty Don explores gardens around the world',
        facts: `Who presented Around the World in 80 Gardens?|Monty Don|Alan Titchmarsh|Joe Swift|Chris Beardshaw|Easy|Monty Don|Series Presenter|World Gardens|Gardening Broadcaster|Travel Documentary|2008 Series|BBC Two
In which year did Around the World in 80 Gardens first air?|2008|2003|2011|2015|Easy|Premiere Year|January Broadcast|Garden Travelogue|BBC Two|Series Chronology|2000s Television|World Tour
Which channel first broadcast Around the World in 80 Gardens?|BBC Two|ITV1|Channel 4|BBC Four|Easy|Original Broadcaster|BBC Two|Garden Documentary|2008 Television|Public Service Broadcasting|Programme Launch|UK Television
How many episodes made up Around the World in 80 Gardens?|Ten|Six|Eight|Twelve|Medium|Ten Episodes|Episode Count|Single Series|Travel Format|Monty Don|BBC Production|2008 Run
How many gardens were featured in the programme's title?|Eighty|Forty|Sixty|One hundred|Easy|Eighty Gardens|Programme Title|Global Horticulture|Monty Don|Travel Theme|Series Concept|Garden Visits
Which two countries featured in the first episode of Around the World in 80 Gardens?|Mexico and Cuba|India and Nepal|Italy and Spain|France and Belgium|Medium|Mexico|Cuba|Episode One|Opening Journey|Latin America|Garden Traditions|Travel Itinerary
What kind of historic gardens did Monty Don visit in Mexico City?|Ancient water gardens|Palace rose gardens|Rooftop orchards|Desert rock gardens|Medium|Mexico City|Water Gardens|Ancient Horticulture|Mexico And Cuba|Opening Episode|Mexican Gardens|Traditional Cultivation
Which two countries were explored in the second episode?|Australia and New Zealand|Brazil and Argentina|China and Japan|Spain and Morocco|Easy|Australia|New Zealand|Second Episode|Oceania|Garden Cultures|Travel Route|Monty Don
Which country was the focus of the third episode?|India|China|South Africa|Greece|Easy|India|Third Episode|Asian Gardens|Monty Don|Episode Geography|Garden Traditions|International Series
Which South American countries featured together in the fourth episode?|Brazil, Argentina and Chile|Peru, Ecuador and Bolivia|Colombia, Venezuela and Guyana|Uruguay, Paraguay and Peru|Medium|Brazil|Argentina|Chile|South America|Episode Four|Regional Journey|Garden Visits
In which city did Monty Don encounter garden guerrillas during the USA episode?|New York|Chicago|Seattle|Los Angeles|Medium|New York|USA Episode|Guerrilla Gardening|Urban Greening|Fifth Episode|Community Gardeners|American Cities
Which two countries were paired in episode six?|China and Japan|India and Sri Lanka|Thailand and Vietnam|Mexico and Cuba|Easy|China|Japan|Episode Six|East Asian Gardens|Traditional Landscapes|Monty Don|Travel Itinerary
Which famous South African garden did Monty Don visit?|Kirstenbosch Botanic Gardens|Kew Gardens|Butchart Gardens|Villa d'Este|Medium|Kirstenbosch|Cape Town|South Africa Episode|Botanical Gardens|Episode Eight|Plant Collections|South African Flora
Which European region was the focus of the penultimate episode?|Northern Europe|Eastern Europe|The Balkans|Southern Europe|Medium|Northern Europe|Episode Nine|Penultimate Episode|European Gardens|2008 Series|Travel Route|Garden Heritage
Which three locations were highlighted in the final South East Asian episode?|Bangkok, Singapore and Bali|Delhi, Colombo and Kathmandu|Tokyo, Seoul and Taipei|Hanoi, Phnom Penh and Vientiane|Medium|Bangkok|Singapore|Bali|South East Asia|Episode Ten|Series Finale|Tropical Gardens
Which author wrote the novel that inspired the title Around the World in 80 Gardens?|Jules Verne|H. G. Wells|Charles Dickens|Arthur Conan Doyle|Medium|Jules Verne|Around The World In Eighty Days|Title Reference|Literary Inspiration|Travel Narrative|Garden Series|Victorian Literature`
    },
    {
        programme: 'The Autistic Gardener',
        era: '2015-2017',
        broadcaster: 'Channel 4',
        topic: 'Alan Gardner and his gardening teams',
        facts: `Who led the garden transformations in The Autistic Gardener?|Alan Gardner|Danny Clarke|Monty Don|Joel Bird|Easy|Alan Gardner|Lead Designer|Landscape Gardener|Television Presenter|Garden Makeovers|British Horticulture|2015 Series
Which channel commissioned The Autistic Gardener?|Channel 4|BBC Two|ITV1|Channel 5|Easy|Channel Four|Commissioning Broadcaster|UK Factual Television|Garden Makeovers|Television Network|2015 Launch|British Documentary
In which year did The Autistic Gardener first air?|2015|2011|2013|2019|Easy|2015 Premiere|First Series|Broadcast Year|Gardening Documentary|British Television|Channel Four|Garden Design
What was the particular focus of Alan Gardner's first gardening team?|Autistic trainees with an interest in gardening|Celebrity chefs learning to grow vegetables|Professional footballers building allotments|Retired architects designing school grounds|Easy|Autistic Trainees|Garden Team|Horticultural Training|First Series|Garden Design Skills|Team Leadership|Inclusive Television
Which production company made the first series of The Autistic Gardener?|betty|Rumpus Media|Outline Productions|Tiger Aspect|Medium|betty Productions|Production Company|Commissioning Announcement|Channel Four Features|British Factual TV|Alan Gardner|2015 Production
How many episodes were commissioned for the first series?|Four|Three|Six|Eight|Medium|Four Part Series|2014 Commission|Series One|Episode Count|Channel Four|Factual Television|Programme Format
In which Derbyshire town did the first series begin its garden makeovers?|Ashbourne|Matlock|Buxton|Bakewell|Medium|Ashbourne|Derbyshire|Opening Transformation|Overgrown Garden|Family Outdoor Space|First Episode|Midlands Location
Which part of London featured in the second episode of the first series?|West London|North London|South East London|Central London|Medium|West London|Second Episode|Small Garden|Urban Landscape|One Week Challenge|2015 Series|Garden Redesign
How long did Alan's team have to tackle the West London garden?|One week|One afternoon|One month|Six weeks|Medium|One Week Deadline|West London|Second Episode|Fast Makeover|Garden Team|Time Pressure|Programme Challenge
How long was the overgrown South London garden tackled in Series One?|Ninety-five feet|Thirty feet|Sixty feet|One hundred and fifty feet|Medium|Ninety Five Feet|South London|Third Episode|Overgrown Plot|Garden Length|Urban Jungle|Landscape Challenge
In which year did Alan Gardner return for a second series?|2017|2014|2016|2020|Easy|2017 Series|Return To Channel Four|Series Two|Alan Gardner|Garden Transformations|Programme Chronology|Second Run
Which English county hosted the opening garden project of the second series?|Lancashire|Kent|Devon|Hampshire|Medium|Lancashire|Series Two Premiere|Desolate Plot|Northern England|Garden Design|2017 Episode|Suburban Garden
What was the budget for the Lancashire makeover in Series Two?|Ten thousand pounds|Five thousand pounds|Twenty thousand pounds|Fifty thousand pounds|Medium|Ten Thousand Pounds|Lancashire Makeover|Series Two Budget|Landscape Design|Project Cost|2017 Return|Garden Transformation
Which city hosted the makeover of Ig and Jo's large garden?|Bristol|Liverpool|Oxford|Leicester|Medium|Bristol|Ig And Jo|Series Two|Overgrown Garden|Hundred Foot Plot|2017 Episode|West Country
What did two neighbouring London families want their adjoining gardens to become?|One large playground for their sons|A commercial flower nursery|A tennis club for local adults|A covered vegetable market|Medium|Adjoining Gardens|London Families|Childrens Playground|Series Two Finale|Neighbour Collaboration|Landscape Redesign|Outdoor Play`
    },
    {
        programme: 'The Instant Gardener',
        era: '2015-2016',
        broadcaster: 'BBC One',
        topic: 'One-day garden transformations with Helen and Danny',
        facts: `Which television presenter fronted The Instant Gardener with Danny Clarke?|Helen Skelton|Carol Klein|Charlie Dimmock|Poppy Okotcha|Easy|Helen Skelton|Programme Host|BBC One|Presenter Partnership|Garden Makeovers|2015 Series|Factual Television
Who was the garden designer alongside Helen Skelton in The Instant Gardener?|Danny Clarke|Diarmuid Gavin|Joel Bird|Alan Gardner|Easy|Danny Clarke|Garden Designer|Helen Skelton|Landscaping Expert|Television Team|BBC Gardening|Makeover Format
Which channel originally showed The Instant Gardener?|BBC One|Channel 4|ITV1|BBC Two|Easy|BBC One|Programme Broadcaster|Daytime Television|Garden Makeover Show|British Television|2015 Launch|Television Scheduling
In which year did The Instant Gardener begin?|2015|2008|2012|2019|Easy|2015 Premiere|First Series|BBC One|Garden Transformations|Programme Timeline|British Factual TV|Summer Broadcast
In what amount of time did The Instant Gardener aim to transform a neglected garden?|One day|One week|One month|One weekend|Easy|One Day Makeover|Programme Concept|Rapid Transformation|Garden Design|Landscaping Deadline|BBC Format|Time Challenge
Which seaside town hosted the first garden makeover?|Blackpool|Brighton|Whitby|Margate|Medium|Blackpool|Series One Premiere|Lancashire Coast|First Garden|2015 Opening|Helen Skelton|Danny Clarke
What problem troubled the garden in The Instant Gardener's Blackpool debut?|It was boggy and waterlogged|It had been covered in concrete|It was damaged by a fallen tree|It was completely shaded by high walls|Medium|Waterlogged Garden|Blackpool Project|Poor Drainage|First Episode|Garden Problems|Outdoor Makeover|2015 Series
In which Yorkshire town did Helen and Danny help a couple create a social garden?|Barnsley|Harrogate|York|Skipton|Medium|Barnsley|Yorkshire|Social Garden|Friends And Family|Second Episode|Community Space|2015 Makeover
What was the main concern for the family garden project in Northamptonshire?|Creating a low-allergen space for their son|Providing room for a garden railway|Building a large greenhouse|Making room for a riding school|Medium|Low Allergen Garden|Northamptonshire|Family Garden|Child Allergies|Safe Play Space|Fourth Episode|2015 Garden Design
Which city featured an overgrown garden makeover for Beverley and her family?|Bradford|Leeds|Hull|Wakefield|Medium|Bradford|Beverleys Garden|Overgrown Plot|West Yorkshire|2015 Episode|Family Landscaping|Garden Rescue
In which year did The Instant Gardener return for its second series?|2016|2014|2017|2020|Easy|2016 Return|Second Series|BBC One|Programme Timeline|Garden Makeover|British TV|Summer Series
Which Welsh coastal location inspired a beach-themed garden in the second series?|Barry|Tenby|Rhyl|Aberystwyth|Medium|Barry Coast|Beach Inspired Garden|Wales|2016 Episode|Coastal Design|Tiny Back Garden|Seaside Theme
Which city had an urban community farm given a new sheltered seating area?|Southampton|Plymouth|Bournemouth|Portsmouth|Medium|Southampton|Community Farm|Sheltered Seating|Fire Pit|2016 Series|Outdoor Gathering|Urban Agriculture
Which Scottish region featured a garden redesigned for an elderly father with dementia?|Fife|Orkney|Argyll|Moray|Medium|Fife|Accessible Garden|Dementia Friendly|2016 Makeover|Scottish Location|Family Support|Safe Outdoor Space
Which country inspired a garden redesign in Loch Winnoch?|China|Italy|Morocco|Mexico|Medium|Chinese Garden Design|Loch Winnoch|Scottish Makeover|2016 Series|International Inspiration|Garden Aesthetics|Design Concept
In which Sussex town did The Instant Gardener create a children's play garden?|Hailsham|Hastings|Lewes|Arundel|Medium|Hailsham|East Sussex|Childrens Play Garden|Small Dark Backyard|2016 Episode|Family Outdoors|Creative Design`
    },
    {
        programme: 'The Great British Garden Revival',
        era: '2013-2015',
        broadcaster: 'BBC Two',
        topic: 'Reviving endangered British garden traditions',
        facts: `What was the central aim of The Great British Garden Revival?|Reviving neglected gardening traditions|Finding Britain's most expensive gardens|Judging professional gardening competitions|Training television actors as gardeners|Easy|Endangered Gardening Traditions|Garden Conservation|Programme Mission|British Horticulture|Garden Heritage|Practical Advice|Garden Revival
Which channel originally broadcast The Great British Garden Revival?|BBC Two|Channel 4|BBC One|ITV1|Easy|BBC Two|Original Broadcaster|Garden Documentary|UK Television|First Series|2013 Programme|Factual Television
In which year did The Great British Garden Revival first appear on television?|2013|2008|2016|2021|Easy|2013 Launch|December Premiere|BBC Two|Garden History|Programme Timeline|UK Factual TV|Series One
Which production company made The Great British Garden Revival?|Outline Productions|Rumpus Media|betty|Endemol Shine|Medium|Outline Productions|Programme Maker|Production Credit|Garden Documentary|British Television|BBC Commission|Factual Production
How many presenters typically shared an episode of The Great British Garden Revival?|Two|One|Three|Four|Medium|Paired Presenters|Episode Structure|Gardening Experts|Joint Features|Programme Format|Practical Advice|Horticultural Themes
Who presented the opening feature about wild flowers?|Monty Don|Alan Gardner|Danny Clarke|Bruce Kenneth|Easy|Monty Don|Wild Flowers|Opening Episode|Native Planting|Garden Revival|BBC Two|Flower Conservation
Which gardening presenter explored front gardens in the opening episode?|Joe Swift|Toby Buckland|James Wong|Matt James|Medium|Joe Swift|Front Gardens|Opening Episode|Residential Planting|Garden Revival|BBC Two|Garden Design
Which presenter joined James Wong to revive topiary and roof gardens?|Rachel de Thame|Carol Klein|Alys Fowler|Christine Walkden|Medium|Rachel De Thame|James Wong|Topiary|Roof Gardens|Early Episode|Shaped Plants|Rooftop Spaces
Who explored cottage gardens with Tom Hart Dyke?|Carol Klein|Sarah Raven|Charlie Dimmock|Poppy Okotcha|Medium|Carol Klein|Tom Hart Dyke|Cottage Gardens|Traditional Planting|Garden Revival|House Plants|Programme Pair
Who teamed with Carol Klein to highlight rock gardens and herb gardens?|Toby Buckland|Monty Don|Diarmuid Gavin|Joel Bird|Medium|Toby Buckland|Carol Klein|Rock Gardens|Herb Gardens|Garden Revival|Presenter Pair|Planting Styles
Which presenter examined glasshouses alongside Matt James?|Diarmuid Gavin|Chris Beardshaw|Joe Swift|Monty Don|Medium|Diarmuid Gavin|Matt James|Glasshouses|Shrubs|Garden Structures|Presenter Pair|Garden Revival
Which former Ground Force star explored ponds alongside Chris Beardshaw?|Charlie Dimmock|Helen Skelton|Mavis Moulterd|Carol Klein|Easy|Charlie Dimmock|Chris Beardshaw|Ponds|Stumperies|Water Features|Garden Revival|Presenter Pair
Which topic did Sarah Raven explore in an episode shared with James Wong?|Lawns|Roof gardens|Fruit trees|Glasshouses|Medium|Sarah Raven|James Wong|Lawns|Tropical Gardens|Gardening Traditions|Episode Theme|Presenter Pair
Who presented the section on ornamental bedding alongside Toby Buckland's fruit-tree feature?|Christine Walkden|Rachel de Thame|Alys Fowler|Carol Klein|Medium|Christine Walkden|Toby Buckland|Ornamental Bedding|Fruit Trees|Horticultural Heritage|Presenter Pair|Episode Subject
Which horticultural topic was covered by Alys Fowler alongside Chris Beardshaw's herbaceous borders?|Kitchen gardens|Rooftop gardens|Water gardens|Rose gardens|Medium|Alys Fowler|Chris Beardshaw|Kitchen Gardens|Herbaceous Borders|Food Growing|Garden Revival|Final Episode Theme`
    },
    {
        programme: 'The Great Garden Revolution',
        era: '2021-2022',
        broadcaster: 'Channel 4',
        topic: 'Channel 4 practical gardening and garden makeovers',
        facts: `Which channel first broadcast The Great Garden Revolution?|Channel 4|BBC One|BBC Two|ITV1|Easy|Channel Four|Original Broadcaster|Garden Makeovers|2021 Programme|Factual Entertainment|UK Television|Series Launch
Which DIY brand sponsored The Great Garden Revolution?|Ronseal|Dulux|B&Q|Wickes|Easy|Ronseal|Programme Partner|Sponsorship|Gardening And DIY|Channel Four|Brand Collaboration|Outdoor Makeovers
In which year did The Great Garden Revolution first air?|2021|2015|2018|2024|Easy|2021 Launch|First Series|Spring Television|Channel Four|Programme Date|Garden Trends|UK Factual Television
Which production company made The Great Garden Revolution?|Rumpus Media|Outline Productions|betty|Studio Lambert|Medium|Rumpus Media|Production Company|Factual Series|Commissioning Record|Channel Four|Garden Makeovers|UK Production
How many episodes were commissioned for its first series?|Four|Two|Six|Ten|Medium|Four Part Series|First Commission|Episode Count|2021 Run|Primetime Gardening|One Hour Shows|Channel Four
Which gardening designer was a member of the original presenting trio?|Joel Bird|Monty Don|Danny Clarke|Joe Swift|Easy|Joel Bird|Garden Designer|Original Trio|Garden Structures|2021 Team|Outdoor Spaces|Show Presenter
Who was the ecological gardener on The Great Garden Revolution's first series?|Poppy Okotcha|Carol Klein|Charlie Dimmock|Rachel de Thame|Easy|Poppy Okotcha|Ecological Gardener|Original Trio|Sustainable Planting|First Series|Horticultural Expert|2021 Cast
Who specialised in building garden furnishings as part of the original team?|Bruce Kenneth|Alan Gardner|James Wong|Toby Buckland|Easy|Bruce Kenneth|Craftsman|Original Trio|Outdoor Furniture|Woodworking|First Series|2021 Team
What kind of location did each episode's central makeover feature?|A different domestic garden|A television studio roof|A municipal sports stadium|A historic royal palace|Medium|Domestic Gardens|Episode Format|UK Outdoor Spaces|Garden Makeover|Real Homeowners|2021 Series|Seasonal Design
What additional feature showed well-known personalities' private outdoor spaces?|Celebrity garden visits|Royal garden competitions|International garden auctions|Live flower-market trading|Medium|Celebrity Guests|Private Gardens|Garden Tours|Feature Segment|Television Personalities|Outdoor Inspiration|Programme Format
What were viewers invited to send in for inclusion in later episodes?|Photographs and videos of their garden work|Applications to become full-time presenters|Lists of endangered trees|Requests for free garden machinery|Medium|Viewer Submissions|Photos And Videos|Audience Participation|Home Gardening|Weekly Showcase|Interactive Television|Garden Ideas
In which year did Channel 4 bring back The Great Garden Revolution for a second series?|2022|2020|2023|2025|Easy|2022 Return|Second Series|Channel Four|Recommission|Garden Makeovers|Programme Timeline|Spring Television
Who joined the returning team of Joel Bird and Bruce Kenneth in the second series?|Errol Reuben Fernandes|Poppy Okotcha|Alan Titchmarsh|Monty Don|Medium|Errol Reuben Fernandes|Second Series Team|Joel Bird|Bruce Kenneth|New Expert|2022 Cast|Sustainable Horticulture
Which London museum's gardens were overseen by new expert Errol Reuben Fernandes?|Horniman Museum and Gardens|Natural History Museum|Victoria and Albert Museum|Science Museum|Medium|Horniman Museum|Errol Reuben Fernandes|Head Of Horticulture|Museum Gardens|London Institution|2022 Presenter|Professional Role
How many episodes were commissioned for the second series of The Great Garden Revolution?|Four|Three|Eight|Twelve|Medium|Four Episodes|Second Series|2022 Commission|Channel Four|Programme Format|Garden Makeovers|Episode Count`
    }
];

const FIRST_ID = 14102;
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
        if (!['Easy', 'Medium', 'Hard'].includes(difficulty) ||
            specificTags.length !== 7 || specificTags.some(tag => !tag)) {
            throw new Error(`Invalid difficulty or specialist tags at ${id}`);
        }

        const answers = [...wrongAnswers];
        answers.splice(index % 4, 0, correctAnswer);

        // Both a dedicated field and explicit tag make the programme visible in
        // quiz_display.js without maintaining a huge hard-coded list of shows.
        const tags = [...new Map([
            'Television', 'British Television', 'Gardening', 'Gardening Programmes',
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

const EXPECTED_COUNT = 77;
if (questions.length !== EXPECTED_COUNT) {
    throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
}
if (questions[0].id !== 'tv_14102' ||
    questions[questions.length - 1].id !== 'tv_14178') {
    throw new Error('Unexpected question ID range');
}
if (new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
    throw new Error('Duplicate question IDs or wording');
}
if (questions.some(q => q.category !== 'Television' ||
    !q.programme || q.answers.length !== 4 ||
    !q.answers.includes(q.correctAnswer) ||
    !q.tags.includes(`Programme: ${q.programme}`) ||
    q.tags.length < 14 || q.tags.some(tag => !tag) ||
    q.dailyEligible !== true)) {
    throw new Error('Incomplete exported question metadata');
}


// TV audit 21 November 2026: 5 gardening programmes including the previously omitted
// 2015 second series of The Great British Garden Revival (all 10 episodes, 20 themes).
// Original questions tv_14102–tv_14178 remain unchanged.
// New IDs: tv_36313–tv_36358.
// Sources verified: BBC series archive and TheTVDB programmes and episode synopses,
// official Channel 4 2014/2021/2022 commissioning press, programme makers Outline Productions.
// https://www.thetvdb.com/series/around-the-world-in-80-gardens/allseasons/official
// https://www.channel4.com/press/news/channel-4-commissions-autistic-gardener
// https://www.gardenersunearthed.com/alan-gardner/
// https://thetvdb.com/series/the-instant-gardener/allseasons/official
// https://thetvdb.com/series/great-british-garden-revival/allseasons/official
// https://www.outlineproductions.co.uk/productions/great-british-garden-revival
// https://www.channel4.com/press/news/channel-4-starts-great-garden-revolution
// https://www.channel4.com/press/news/great-garden-revolution-back-bloom
const auditAdditions = [
  {
    "id": "tv_36313",
    "category": "Television",
    "programme": "Around the World in 80 Gardens",
    "question": "In Around the World in 80 Gardens, what is the name of the surrealist garden Monty Don visits in Xilitla, Mexico?",
    "answers": [
      "Las Pozas",
      "Casa Barragán",
      "Alhambra",
      "Lotusland"
    ],
    "correctAnswer": "Las Pozas",
    "difficulty": "Hard",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "Around the World in 80 Gardens",
      "Programme: Around the World in 80 Gardens",
      "2008",
      "Monty Don's international garden visits",
      "Mexico and Cuba episode",
      "Xilitla rainforest",
      "Surrealist fantasy garden",
      "Correct answer: Las Pozas",
      "Source: TVDB Around the World in 80 Gardens original ten-episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Las Pozas",
      "TVDB Around the World in 80 Gardens original ten-episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36314",
    "category": "Television",
    "programme": "Around the World in 80 Gardens",
    "question": "Which famous Mughal monument's gardens does Monty Don explore in the India episode of Around the World in 80 Gardens?",
    "answers": [
      "The Red Fort in Delhi",
      "The Taj Mahal",
      "Humayun's Tomb",
      "The Golden Temple"
    ],
    "correctAnswer": "The Taj Mahal",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "Around the World in 80 Gardens",
      "Programme: Around the World in 80 Gardens",
      "2008",
      "Monty Don's international garden visits",
      "India episode",
      "Agra",
      "Taj Mahal and Mehtab Bagh gardens",
      "Correct answer: The Taj Mahal",
      "Source: TVDB Around the World in 80 Gardens original ten-episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "The Taj Mahal",
      "TVDB Around the World in 80 Gardens original ten-episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36315",
    "category": "Television",
    "programme": "Around the World in 80 Gardens",
    "question": "Which historic Virginia estate does Monty Don visit in the American episode of Around the World in 80 Gardens?",
    "answers": [
      "Mount Vernon",
      "Biltmore Estate",
      "Monticello",
      "Colonial Williamsburg"
    ],
    "correctAnswer": "Monticello",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "Around the World in 80 Gardens",
      "Programme: Around the World in 80 Gardens",
      "2008",
      "Monty Don's international garden visits",
      "United States episode",
      "Charlottesville Virginia",
      "Historic American garden",
      "Correct answer: Monticello",
      "Source: TVDB Around the World in 80 Gardens original ten-episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Monticello",
      "TVDB Around the World in 80 Gardens original ten-episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36316",
    "category": "Television",
    "programme": "Around the World in 80 Gardens",
    "question": "Which Chinese city contains the Humble Administrator's Garden visited in Around the World in 80 Gardens?",
    "answers": [
      "Shanghai",
      "Chengdu",
      "Hangzhou",
      "Suzhou"
    ],
    "correctAnswer": "Suzhou",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "Around the World in 80 Gardens",
      "Programme: Around the World in 80 Gardens",
      "2008",
      "Monty Don's international garden visits",
      "China and Japan episode",
      "Suzhou",
      "Chinese scholars' gardens",
      "Correct answer: Suzhou",
      "Source: TVDB Around the World in 80 Gardens original ten-episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "TVDB Around the World in 80 Gardens original ten-episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36317",
    "category": "Television",
    "programme": "Around the World in 80 Gardens",
    "question": "Which Renaissance garden near Tivoli features in the Mediterranean episode of Around the World in 80 Gardens?",
    "answers": [
      "Villa d'Este",
      "Villa Borghese",
      "Kew Gardens",
      "Hampton Court"
    ],
    "correctAnswer": "Villa d'Este",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "Around the World in 80 Gardens",
      "Programme: Around the World in 80 Gardens",
      "2008",
      "Monty Don's international garden visits",
      "Mediterranean gardens",
      "Tivoli Italy",
      "Italian Renaissance garden",
      "Correct answer: Villa d'Este",
      "Source: TVDB Around the World in 80 Gardens original ten-episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Villa d'Este",
      "TVDB Around the World in 80 Gardens original ten-episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36318",
    "category": "Television",
    "programme": "Around the World in 80 Gardens",
    "question": "Which French village is home to Claude Monet's garden visited in Around the World in 80 Gardens?",
    "answers": [
      "Versailles",
      "Giverny",
      "Chantilly",
      "Barbizon"
    ],
    "correctAnswer": "Giverny",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "Around the World in 80 Gardens",
      "Programme: Around the World in 80 Gardens",
      "2008",
      "Monty Don's international garden visits",
      "Northern Europe episode",
      "Giverny France",
      "Impressionist painter's garden",
      "Correct answer: Giverny",
      "Source: TVDB Around the World in 80 Gardens original ten-episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Giverny",
      "TVDB Around the World in 80 Gardens original ten-episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36319",
    "category": "Television",
    "programme": "Around the World in 80 Gardens",
    "question": "Whose historic garden does Monty Don visit in Bangkok in the finale of Around the World in 80 Gardens?",
    "answers": [
      "Roberto Burle Marx's",
      "Claude Monet's",
      "Jim Thompson's",
      "Christopher Lloyd's"
    ],
    "correctAnswer": "Jim Thompson's",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "Around the World in 80 Gardens",
      "Programme: Around the World in 80 Gardens",
      "2008",
      "Monty Don's international garden visits",
      "South East Asia finale",
      "Bangkok Thailand",
      "Named exotic tropical garden",
      "Correct answer: Jim Thompson's",
      "Source: TVDB Around the World in 80 Gardens original ten-episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Jim Thompson's",
      "TVDB Around the World in 80 Gardens original ten-episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36320",
    "category": "Television",
    "programme": "The Autistic Gardener",
    "question": "What was the client budget for the opening Ashbourne garden in The Autistic Gardener?",
    "answers": [
      "£1,200",
      "£10,000",
      "£15,000",
      "£3,000"
    ],
    "correctAnswer": "£3,000",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "Channel 4",
      "The Autistic Gardener",
      "Programme: The Autistic Gardener",
      "2015–2017",
      "Alan Gardner's makeover projects",
      "Series 1 Ashbourne",
      "Derbyshire",
      "Ben and Rebecca opening makeover",
      "Correct answer: £3,000",
      "Source: Channel 4 commissioning release and Gardeners Unearthed Alan Gardner episode inventory",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "£3,000",
      "Channel 4 commissioning release and Gardeners Unearthed Alan Gardner episode inventory"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36321",
    "category": "Television",
    "programme": "The Autistic Gardener",
    "question": "What was the budget for the Ealing, west London project in The Autistic Gardener's first series?",
    "answers": [
      "£1,200",
      "£3,000",
      "£5,000",
      "£15,000"
    ],
    "correctAnswer": "£1,200",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "Channel 4",
      "The Autistic Gardener",
      "Programme: The Autistic Gardener",
      "2015–2017",
      "Alan Gardner's makeover projects",
      "Series 1 Ealing",
      "West London",
      "James and Sophie makeover",
      "Correct answer: £1,200",
      "Source: Channel 4 commissioning release and Gardeners Unearthed Alan Gardner episode inventory",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "£1,200",
      "Channel 4 commissioning release and Gardeners Unearthed Alan Gardner episode inventory"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36322",
    "category": "Television",
    "programme": "The Autistic Gardener",
    "question": "Which aspiring artist owned the 95-foot South London garden featured in The Autistic Gardener?",
    "answers": [
      "Pinky",
      "Zak",
      "Ig",
      "Ben"
    ],
    "correctAnswer": "Zak",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "Channel 4",
      "The Autistic Gardener",
      "Programme: The Autistic Gardener",
      "2015–2017",
      "Alan Gardner's makeover projects",
      "Series 1 South London",
      "Large overgrown garden",
      "Client and budding artist",
      "Correct answer: Zak",
      "Source: Channel 4 commissioning release and Gardeners Unearthed Alan Gardner episode inventory",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Zak",
      "Channel 4 commissioning release and Gardeners Unearthed Alan Gardner episode inventory"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36323",
    "category": "Television",
    "programme": "The Autistic Gardener",
    "question": "Who helped Alan Gardner as his regular sidekick in the second series of The Autistic Gardener?",
    "answers": [
      "Danny Clarke",
      "Joel Bird",
      "Anthony",
      "Monty Don"
    ],
    "correctAnswer": "Anthony",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "Channel 4",
      "The Autistic Gardener",
      "Programme: The Autistic Gardener",
      "2015–2017",
      "Alan Gardner's makeover projects",
      "Series 2 support team",
      "2017 revival",
      "Alan's assistant and landscapers",
      "Correct answer: Anthony",
      "Source: Channel 4 commissioning release and Gardeners Unearthed Alan Gardner episode inventory",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Anthony",
      "Channel 4 commissioning release and Gardeners Unearthed Alan Gardner episode inventory"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36324",
    "category": "Television",
    "programme": "The Autistic Gardener",
    "question": "What was the reported budget for Ig and Jo's Bristol garden in The Autistic Gardener Series 2?",
    "answers": [
      "£3,000",
      "£7,000",
      "£10,000",
      "£15,000"
    ],
    "correctAnswer": "£15,000",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "Channel 4",
      "The Autistic Gardener",
      "Programme: The Autistic Gardener",
      "2015–2017",
      "Alan Gardner's makeover projects",
      "Series 2 Bristol",
      "Ig and Jo",
      "Large bespoke garden",
      "Correct answer: £15,000",
      "Source: Channel 4 commissioning release and Gardeners Unearthed Alan Gardner episode inventory",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "£15,000",
      "Channel 4 commissioning release and Gardeners Unearthed Alan Gardner episode inventory"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36325",
    "category": "Television",
    "programme": "The Autistic Gardener",
    "question": "To which country did Alan Gardner travel for garden-design inspiration during the second series of The Autistic Gardener?",
    "answers": [
      "The United States",
      "Japan",
      "Morocco",
      "Italy"
    ],
    "correctAnswer": "The United States",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "Channel 4",
      "The Autistic Gardener",
      "Programme: The Autistic Gardener",
      "2015–2017",
      "Alan Gardner's makeover projects",
      "Series 2 inspirational trip",
      "America",
      "Designs beyond Britain",
      "Correct answer: The United States",
      "Source: Channel 4 commissioning release and Gardeners Unearthed Alan Gardner episode inventory",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "The United States",
      "Channel 4 commissioning release and Gardeners Unearthed Alan Gardner episode inventory"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36326",
    "category": "Television",
    "programme": "The Instant Gardener",
    "question": "What television science-fiction series inspired a Manchester client's garden in The Instant Gardener?",
    "answers": [
      "Star Trek",
      "Doctor Who",
      "The X-Files",
      "Red Dwarf"
    ],
    "correctAnswer": "Doctor Who",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC One",
      "The Instant Gardener",
      "Programme: The Instant Gardener",
      "2015–2016",
      "Helen Skelton and Danny Clarke's makeovers",
      "2015 Manchester",
      "Shirley",
      "Time-travel-themed garden",
      "Correct answer: Doctor Who",
      "Source: TheTVDB original Instant Gardener episode descriptions",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Doctor Who",
      "TheTVDB original Instant Gardener episode descriptions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36327",
    "category": "Television",
    "programme": "The Instant Gardener",
    "question": "What animals did Sophie particularly hope to attract to her Birmingham garden in The Instant Gardener?",
    "answers": [
      "Horses, sheep and goats",
      "Fish, frogs and newts",
      "Birds, bees and butterflies",
      "Squirrels, rabbits and foxes"
    ],
    "correctAnswer": "Birds, bees and butterflies",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC One",
      "The Instant Gardener",
      "Programme: The Instant Gardener",
      "2015–2016",
      "Helen Skelton and Danny Clarke's makeovers",
      "2015 Birmingham",
      "Wildlife garden",
      "Owner's biodiversity goal",
      "Correct answer: Birds, bees and butterflies",
      "Source: TheTVDB original Instant Gardener episode descriptions",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Birds, bees and butterflies",
      "TheTVDB original Instant Gardener episode descriptions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36328",
    "category": "Television",
    "programme": "The Instant Gardener",
    "question": "Which Caribbean island inspired the Croydon makeover featured in The Instant Gardener?",
    "answers": [
      "Barbados",
      "Cuba",
      "Trinidad",
      "Jamaica"
    ],
    "correctAnswer": "Jamaica",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC One",
      "The Instant Gardener",
      "Programme: The Instant Gardener",
      "2015–2016",
      "Helen Skelton and Danny Clarke's makeovers",
      "2015 Croydon",
      "Carmen's garden",
      "Caribbean-inspired sanctuary",
      "Correct answer: Jamaica",
      "Source: TheTVDB original Instant Gardener episode descriptions",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Jamaica",
      "TheTVDB original Instant Gardener episode descriptions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36329",
    "category": "Television",
    "programme": "The Instant Gardener",
    "question": "What unusual waterside home had an adjoining garden redesigned at Newhaven in The Instant Gardener Series 2?",
    "answers": [
      "A houseboat",
      "A lighthouse",
      "A canal lock-keeper's cottage",
      "A seaside hotel"
    ],
    "correctAnswer": "A houseboat",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC One",
      "The Instant Gardener",
      "Programme: The Instant Gardener",
      "2015–2016",
      "Helen Skelton and Danny Clarke's makeovers",
      "2016 Newhaven Sussex",
      "Riverside garden",
      "Boat owner's wild riverbank",
      "Correct answer: A houseboat",
      "Source: TheTVDB original Instant Gardener episode descriptions",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "A houseboat",
      "TheTVDB original Instant Gardener episode descriptions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36330",
    "category": "Television",
    "programme": "The Instant Gardener",
    "question": "In which north-east English city did The Instant Gardener transform a neglected Victorian backyard for Khadija?",
    "answers": [
      "Newcastle",
      "Sunderland",
      "York",
      "Durham"
    ],
    "correctAnswer": "Sunderland",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC One",
      "The Instant Gardener",
      "Programme: The Instant Gardener",
      "2015–2016",
      "Helen Skelton and Danny Clarke's makeovers",
      "2016 Victorian backyard",
      "Khadija and grandchildren",
      "Family courtyard",
      "Correct answer: Sunderland",
      "Source: TheTVDB original Instant Gardener episode descriptions",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Sunderland",
      "TheTVDB original Instant Gardener episode descriptions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36331",
    "category": "Television",
    "programme": "The Instant Gardener",
    "question": "What accessibility feature did the team restore for a young girl in an Abingdon episode of The Instant Gardener?",
    "answers": [
      "A hearing loop",
      "A stairlift inside the house",
      "Wheelchair access",
      "Braille signposts"
    ],
    "correctAnswer": "Wheelchair access",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC One",
      "The Instant Gardener",
      "Programme: The Instant Gardener",
      "2015–2016",
      "Helen Skelton and Danny Clarke's makeovers",
      "2016 Abingdon",
      "Inclusive outdoor space",
      "Accessible family garden",
      "Correct answer: Wheelchair access",
      "Source: TheTVDB original Instant Gardener episode descriptions",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Wheelchair access",
      "TheTVDB original Instant Gardener episode descriptions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36332",
    "category": "Television",
    "programme": "The Instant Gardener",
    "question": "Which Welsh town featured a deck transformed into an outdoor room with handmade furniture in The Instant Gardener?",
    "answers": [
      "Barry",
      "Caerphilly",
      "Newport",
      "Tredegar"
    ],
    "correctAnswer": "Tredegar",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC One",
      "The Instant Gardener",
      "Programme: The Instant Gardener",
      "2015–2016",
      "Helen Skelton and Danny Clarke's makeovers",
      "2016 outdoor-room project",
      "Unused decking",
      "Low-maintenance outdoor living",
      "Correct answer: Tredegar",
      "Source: TheTVDB original Instant Gardener episode descriptions",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Tredegar",
      "TheTVDB original Instant Gardener episode descriptions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36333",
    "category": "Television",
    "programme": "The Instant Gardener",
    "question": "What sport was a Fareham garden owner associated with in the second series of The Instant Gardener?",
    "answers": [
      "Paralympic sprinting",
      "Wheelchair basketball",
      "Para rowing",
      "Blind football"
    ],
    "correctAnswer": "Paralympic sprinting",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC One",
      "The Instant Gardener",
      "Programme: The Instant Gardener",
      "2015–2016",
      "Helen Skelton and Danny Clarke's makeovers",
      "2016 Fareham",
      "200-metre Paralympian",
      "Private back garden sanctuary",
      "Correct answer: Paralympic sprinting",
      "Source: TheTVDB original Instant Gardener episode descriptions",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Paralympic sprinting",
      "TheTVDB original Instant Gardener episode descriptions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36334",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "In which year did the second series of The Great British Garden Revival air?",
    "answers": [
      "2013",
      "2015",
      "2016",
      "2018"
    ],
    "correctAnswer": "2015",
    "difficulty": "Easy",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Second series transmission",
      "Ten additional episodes",
      "Return of the BBC gardening campaign",
      "Correct answer: 2015",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36335",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "Which gardening presenter took a pop-up rose garden to Solihull in The Great British Garden Revival's second series?",
    "answers": [
      "Carol Klein",
      "Sarah Raven",
      "Rachel de Thame",
      "Charlie Dimmock"
    ],
    "correctAnswer": "Rachel de Thame",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 roses",
      "Solihull",
      "Conserving old rose varieties",
      "Correct answer: Rachel de Thame",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Rachel de Thame",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36336",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "Which climbing plant's extraordinary length did Joe Swift investigate in The Great British Garden Revival Series 2?",
    "answers": [
      "Clematis",
      "Honeysuckle",
      "Jasmine",
      "Wisteria"
    ],
    "correctAnswer": "Wisteria",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 climbers and creepers",
      "Joe Swift",
      "Longest specimen in Britain",
      "Correct answer: Wisteria",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Wisteria",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36337",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "In which Cornish valley did Carol Klein explore the daffodil industry in The Great British Garden Revival?",
    "answers": [
      "Tamar Valley",
      "Fowey Valley",
      "Camel Valley",
      "Torridge Valley"
    ],
    "correctAnswer": "Tamar Valley",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 daffodils",
      "Cornwall",
      "Daffodil-growing heritage",
      "Correct answer: Tamar Valley",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Tamar Valley",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36338",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "Which flowering trees was a campaigner trying to save in Edinburgh in The Great British Garden Revival's blossom episode?",
    "answers": [
      "Magnolias",
      "Cherry trees",
      "Horse chestnuts",
      "Rowan trees"
    ],
    "correctAnswer": "Cherry trees",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 blossom trees",
      "Edinburgh",
      "Chris Beardshaw's campaign",
      "Correct answer: Cherry trees",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Cherry trees",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36339",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "At which famous Cornish gardens did James Wong investigate endangered rhododendrons in The Great British Garden Revival?",
    "answers": [
      "Trebah Garden",
      "Kew Gardens",
      "The Lost Gardens of Heligan",
      "Bodnant Garden"
    ],
    "correctAnswer": "The Lost Gardens of Heligan",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 rhododendrons",
      "Cornwall",
      "Saved horticultural varieties",
      "Correct answer: The Lost Gardens of Heligan",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "The Lost Gardens of Heligan",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36340",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "Which traditional item of men's formal dress did Christine Walkden revive in The Great British Garden Revival's carnation episode?",
    "answers": [
      "The pocket watch",
      "The bowler hat",
      "The waistcoat chain",
      "The buttonhole"
    ],
    "correctAnswer": "The buttonhole",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 carnations",
      "Christine Walkden",
      "Gentleman's flower decoration",
      "Correct answer: The buttonhole",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "The buttonhole",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36341",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "Which castle did Toby Buckland visit to explore scented gardens in The Great British Garden Revival?",
    "answers": [
      "Kenilworth Castle",
      "Warwick Castle",
      "Bodiam Castle",
      "Arundel Castle"
    ],
    "correctAnswer": "Kenilworth Castle",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 scented gardens",
      "Warwickshire",
      "Historical scented garden",
      "Correct answer: Kenilworth Castle",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Kenilworth Castle",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36342",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "Which Lincolnshire town's former tulip-growing industry did Tom Hart Dyke explore in The Great British Garden Revival?",
    "answers": [
      "Stamford",
      "Spalding",
      "Skegness",
      "Grantham"
    ],
    "correctAnswer": "Spalding",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 tulips",
      "Lincolnshire",
      "Commercial tulip heritage",
      "Correct answer: Spalding",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Spalding",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36343",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "Which fragrant purple flower did Diarmuid Gavin campaign to revive in The Great British Garden Revival Series 2?",
    "answers": [
      "Heather",
      "Hyacinth",
      "Lavender",
      "Iris"
    ],
    "correctAnswer": "Lavender",
    "difficulty": "Easy",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 lavender",
      "Diarmuid Gavin",
      "Traditional scented plant",
      "Correct answer: Lavender",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Lavender",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36344",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "Which royal palace's gardens did Alys Fowler visit to research knot gardens in The Great British Garden Revival?",
    "answers": [
      "Kensington Palace",
      "Blenheim Palace",
      "Buckingham Palace",
      "Hampton Court Palace"
    ],
    "correctAnswer": "Hampton Court Palace",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 knot gardens",
      "Historic formal planting",
      "Hampton Court",
      "Correct answer: Hampton Court Palace",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Hampton Court Palace",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36345",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "Which flowering plant's heritage varieties did Rachel de Thame campaign to preserve in The Great British Garden Revival's sixth second-series episode?",
    "answers": [
      "Irises",
      "Orchids",
      "Peonies",
      "Dahlias"
    ],
    "correctAnswer": "Irises",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 irises",
      "Heritage flower collection",
      "Flower art and conservation",
      "Correct answer: Irises",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Irises",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36346",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "At which London botanical gardens did Toby Buckland investigate ornamental grasses for The Great British Garden Revival?",
    "answers": [
      "Chelsea Physic Garden",
      "Royal Botanic Gardens, Kew",
      "Holland Park",
      "Hyde Park"
    ],
    "correctAnswer": "Royal Botanic Gardens, Kew",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 ornamental grasses",
      "Kew London",
      "Victorian planting traditions",
      "Correct answer: Royal Botanic Gardens, Kew",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Royal Botanic Gardens, Kew",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36347",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "At which RHS garden did Carol Klein visit a pinetum for The Great British Garden Revival's conifer episode?",
    "answers": [
      "Harlow Carr",
      "Rosemoor",
      "Wisley",
      "Hyde Hall"
    ],
    "correctAnswer": "Wisley",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 conifers",
      "RHS garden pinetum",
      "Traditional conifer collections",
      "Correct answer: Wisley",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Wisley",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36348",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "Which flowers did Tom Hart Dyke argue were wrongly being called geraniums in The Great British Garden Revival?",
    "answers": [
      "Fuchsias",
      "Petunias",
      "Anemones",
      "Pelargoniums"
    ],
    "correctAnswer": "Pelargoniums",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 pelargoniums",
      "Botanical naming",
      "Historic house and conservatory plants",
      "Correct answer: Pelargoniums",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Pelargoniums",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36349",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "Which major Cheshire flower-show venue did James Wong visit while championing lilies in The Great British Garden Revival?",
    "answers": [
      "Tatton Park",
      "Chatsworth House",
      "Blenheim Palace",
      "Hampton Court"
    ],
    "correctAnswer": "Tatton Park",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 lilies",
      "Flower show",
      "Protecting lily cultivation",
      "Correct answer: Tatton Park",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Tatton Park",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36350",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "Which blue woodland flowers did Christine Walkden promote in Brentwood in The Great British Garden Revival?",
    "answers": [
      "Daffodils",
      "Bluebells",
      "Snowdrops",
      "Wood anemones"
    ],
    "correctAnswer": "Bluebells",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 woodland gardens",
      "Brentwood Essex",
      "Woodland planting",
      "Correct answer: Bluebells",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Bluebells",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36351",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "What is the name of the water-management garden concept Joe Swift explored for The Great British Garden Revival's bog-garden episode?",
    "answers": [
      "Desert garden",
      "Roof garden",
      "Rain garden",
      "Knot garden"
    ],
    "correctAnswer": "Rain garden",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 bog gardens",
      "Managing rainfall",
      "Flood-resistant landscape design",
      "Correct answer: Rain garden",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Rain garden",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36352",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "Which annual show did Alys Fowler visit in The Great British Garden Revival to see prize-winning soft fruit?",
    "answers": [
      "Chelsea Flower Show",
      "Malvern Autumn Show",
      "Hampton Court Garden Festival",
      "Kent County Show"
    ],
    "correctAnswer": "Kent County Show",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 soft fruit",
      "Kent prize-winning berries",
      "Garden fruit heritage",
      "Correct answer: Kent County Show",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Kent County Show",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36353",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "Which conservation charity's Yorkshire nature reserve did Diarmuid Gavin visit for The Great British Garden Revival's wildlife-garden episode?",
    "answers": [
      "RSPB",
      "National Trust",
      "Woodland Trust",
      "RHS"
    ],
    "correctAnswer": "RSPB",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 wildlife gardens",
      "Yorkshire nature reserve",
      "Conserving garden habitats",
      "Correct answer: RSPB",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "RSPB",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36354",
    "category": "Television",
    "programme": "The Great British Garden Revival",
    "question": "Which flower did Charlie Dimmock champion with a pop-up stall at a Bristol market in The Great British Garden Revival?",
    "answers": [
      "Roses",
      "Peonies",
      "Daffodils",
      "Tulips"
    ],
    "correctAnswer": "Peonies",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "BBC Two",
      "The Great British Garden Revival",
      "Programme: The Great British Garden Revival",
      "2015",
      "Previously missing second series, all ten episodes",
      "Series 2 peonies",
      "Bristol market",
      "Long-standing Somerset nursery",
      "Correct answer: Peonies",
      "Source: TheTVDB Great British Garden Revival second-series episode guide",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Peonies",
      "TheTVDB Great British Garden Revival second-series episode guide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36355",
    "category": "Television",
    "programme": "The Great Garden Revolution",
    "question": "Which Channel 4 competition had Joel Bird previously won before co-presenting The Great Garden Revolution?",
    "answers": [
      "Grand Designs Awards",
      "Landscape Artist of the Year",
      "Shed of the Year",
      "Garden Rescue Challenge"
    ],
    "correctAnswer": "Shed of the Year",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "Channel 4",
      "The Great Garden Revolution",
      "Programme: The Great Garden Revolution",
      "2021–2022",
      "Presenters' background and production",
      "2021 presenter Joel Bird",
      "Shed design competition",
      "Background in outdoor design",
      "Correct answer: Shed of the Year",
      "Source: Channel 4 official 2021 and 2022 press releases",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Shed of the Year",
      "Channel 4 official 2021 and 2022 press releases"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36356",
    "category": "Television",
    "programme": "The Great Garden Revolution",
    "question": "Which BBC restoration programme had craftsman Bruce Kenneth worked on before The Great Garden Revolution?",
    "answers": [
      "The Repair Shop",
      "Bargain Hunt",
      "DIY SOS",
      "Money for Nothing"
    ],
    "correctAnswer": "Money for Nothing",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "Channel 4",
      "The Great Garden Revolution",
      "Programme: The Great Garden Revolution",
      "2021–2022",
      "Presenters' background and production",
      "2021 presenter Bruce Kenneth",
      "BBC furniture restoration",
      "Craftsman and woodworker",
      "Correct answer: Money for Nothing",
      "Source: Channel 4 official 2021 and 2022 press releases",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Money for Nothing",
      "Channel 4 official 2021 and 2022 press releases"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36357",
    "category": "Television",
    "programme": "The Great Garden Revolution",
    "question": "What profession did Poppy Okotcha previously work in before specialising in ecological gardening for The Great Garden Revolution?",
    "answers": [
      "Fashion modelling",
      "Architecture",
      "Radio presenting",
      "Professional cycling"
    ],
    "correctAnswer": "Fashion modelling",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "Channel 4",
      "The Great Garden Revolution",
      "Programme: The Great Garden Revolution",
      "2021–2022",
      "Presenters' background and production",
      "2021 presenter Poppy Okotcha",
      "Career change",
      "Horticultural training",
      "Correct answer: Fashion modelling",
      "Source: Channel 4 official 2021 and 2022 press releases",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Fashion modelling",
      "Channel 4 official 2021 and 2022 press releases"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36358",
    "category": "Television",
    "programme": "The Great Garden Revolution",
    "question": "What priority did incoming presenter Errol Reuben Fernandes emphasise for The Great Garden Revolution's 2022 series?",
    "answers": [
      "Industrial-scale crop farming",
      "Wildlife-friendly and sustainable gardening",
      "Artificial lawns across every garden",
      "Replacing plants with paving"
    ],
    "correctAnswer": "Wildlife-friendly and sustainable gardening",
    "difficulty": "Medium",
    "tags": [
      "British Television",
      "Television",
      "Gardening",
      "Gardening Programmes",
      "Channel 4",
      "The Great Garden Revolution",
      "Programme: The Great Garden Revolution",
      "2021–2022",
      "Presenters' background and production",
      "Series 2 new specialist",
      "Ecological horticulture",
      "Environmental planting methods",
      "Correct answer: Wildlife-friendly and sustainable gardening",
      "Source: Channel 4 official 2021 and 2022 press releases",
      "Horticultural programmes",
      "British factual television",
      "TV gardening series",
      "Episode-specific historical fact",
      "Quiz pack 316 audit",
      "21 November 2026",
      "Wildlife-friendly and sustainable gardening",
      "Channel 4 official 2021 and 2022 press releases"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==123 ||
 new Set(questions.map(q=>q.id)).size!==questions.length ||
 new Set(questions.map(q=>q.question.trim().toLowerCase())).size!==questions.length ||
 questions.some(q=>q.category!=='Television'||!q.programme||
   q.answers.length!==4||new Set(q.answers.map(a=>a.trim().toLowerCase())).size!==4||
   q.answers.filter(a=>a===q.correctAnswer).length!==1||
   !q.tags.includes(`Programme: ${q.programme}`)||q.tags.length<14||q.dailyEligible!==true) ||
 auditAdditions.some(q=>q.tags.length<16||!q.question.includes(q.programme)))
 throw Error('Pack 316 full audit validation failed');

module.exports = questions;
