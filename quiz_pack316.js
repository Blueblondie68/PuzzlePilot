
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

module.exports = questions;
