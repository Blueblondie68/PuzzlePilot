
// quiz_pack317.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Gardening programmes - three more completed subjects
// Garden Invaders; Your Garden Made Perfect; The Secret Life of the Garden.
// Full WordPad-ready pack. Seven individually selected specialist tags per question.
// Every question identifies its programme in metadata for quiz_display.js.
// Row: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven tags

const groups = [
    {
        programme: 'Garden Invaders',
        era: '2000-2005',
        broadcaster: 'BBC One',
        topic: 'Garden makeovers combined with a quiz',
        facts: `In what year did Garden Invaders begin on BBC One?|2000|1996|2003|2007|Easy|Debut Year|Garden Makeover|BBC Daytime|British Television|Programme Timeline|Horticultural Quiz|Series Launch
Which BBC channel originally broadcast Garden Invaders?|BBC One|BBC Two|BBC Four|CBBC|Easy|BBC One|Original Channel|Daytime Television|Garden Makeover|British Broadcaster|2000 Launch|Broadcast History
Who was a host of Garden Invaders throughout much of its original run?|Mark Evans|Monty Don|Alan Titchmarsh|Nick Knowles|Easy|Mark Evans|Main Presenter|2000s Television|Garden Game Show|BBC One|Presenter Identity|Original Host
Which singer was also a garden designer on Garden Invaders?|Kim Wilde|Lulu|Kylie Minogue|Cilla Black|Easy|Kim Wilde|Pop Singer|Garden Designer|Celebrity Horticulture|2000s Daytime|Music And Gardening|Programme Cast
What did families need to answer correctly to earn items for their garden makeover?|Gardening quiz questions|Film trivia questions|History examination papers|Crossword clues|Easy|Quiz Questions|Earning Materials|Contestants|Makeover Challenge|Garden Supplies|Game Show Format|Horticultural Knowledge
What was the central makeover task in Garden Invaders?|Transforming neglected domestic gardens|Restoring historic castles|Designing commercial shopping centres|Redecorating bedrooms|Easy|Neglected Gardens|Garden Redesign|Homeowners|Outdoor Makeover|Garden Invaders Format|Landscaping|Household Projects
Which other BBC makeover programme was closely associated with Garden Invaders?|House Invaders|Bargain Hunt|Cash in the Attic|Homes Under the Hammer|Medium|House Invaders|Related Programme|Makeover Television|BBC Daytime|Companion Format|2000s Television|Home Improvements
Which presenter joined the Garden Invaders hosting rota in 2002?|Alistair Appleton|Nick Knowles|Matt Allwright|Ben Fogle|Medium|Alistair Appleton|2002 Host|Presenter Rotation|BBC Gardening|British Broadcaster|Television Presenter|Casting History
Which former Ground Force presenter hosted Garden Invaders in its later years?|Charlie Dimmock|Carol Klein|Alys Fowler|Rachel de Thame|Easy|Charlie Dimmock|2004 To 2005|Ground Force Connection|Presenter Rota|Female Gardener|BBC One|Horticultural Television
Which presenter hosted Garden Invaders during 2003 and 2004?|Anna Walker|Angela Scanlon|Sarah Beeny|Helen Skelton|Medium|Anna Walker|2003 Presenter|2004 Presenter|Host Rota|BBC One|Garden Competition|Television Credits
Which of these garden designers worked on Garden Invaders?|Nikki Mager|Manoj Malde|Pip Probert|Helen Elks-Smith|Medium|Nikki Mager|Programme Designer|Landscaping Expert|Garden Renovation|BBC One|Design Team|Makeover Specialist
Which designer with the first name Sven worked on Garden Invaders?|Sven Wombwell|Sven-Goran Eriksson|Sven Hedin|Sven Ratzke|Medium|Sven Wombwell|Garden Designer|Makeover Team|Presenter Colleague|Outdoor Renovation|British Gardening|2000s Television
What did the programme sometimes ask homeowners to make as a practical challenge?|A flower box|A knitted jumper|A cake stand|A model aeroplane|Medium|Flower Box|Practical Challenge|Horticultural Task|Contestant Skills|Quiz And Craft|Garden Supplies|Game Show Rules
Where were homeowners often kept while the garden transformation remained hidden?|In their front garden|At a hotel in the next town|In a television studio|At the garden centre|Medium|Front Garden|Hidden Makeover|Contestant Location|Reveal Format|Household Garden|Quiz Activity|Programme Structure
Which of these was a typical grand prize in Garden Invaders?|A barbecue|A new car|A foreign cruise|A television set|Easy|Barbecue Prize|Grand Prize|Final Question|Garden Furniture|Outdoor Entertaining|Contestants|Quiz Reward
What kind of question could decide the final garden prize?|Multiple-choice question|Spelling bee|Sudoku grid|Musical dictation|Medium|Multiple Choice|Final Quiz|Grand Prize|Garden Game Show|Contestant Decision|Knowledge Test|Competition Format
In which year did the original Garden Invaders run end?|2005|2001|2008|2012|Medium|Final Year|December 2005|BBC Daytime|Programme History|End Of Run|Garden Makeovers|Television Dates
Approximately how many Garden Invaders episodes aired in its original BBC One run?|266|36|66|166|Medium|Episode Count|266 Episodes|BBC One Run|Garden Makeovers|2000 To 2005|Daytime Scheduling|Series Scale
Which television format did Garden Invaders combine with its garden makeover?|A quiz show|A talent contest|A courtroom drama|A cooking competition|Easy|Quiz Format|Garden Makeovers|Hybrid Programme|Contestant Participation|Family Challenges|BBC Entertainment|Gardening Television
How long did the design team have to complete a makeover in the programme's early format?|Twelve hours|Three days|Six weeks|One month|Medium|Twelve Hour Deadline|Design Team|Garden Construction|Time Pressure|Makeover Challenge|Early Format|Daytime Programme`
    },
    {
        programme: 'Your Garden Made Perfect',
        era: '2021-2022',
        broadcaster: 'BBC Two',
        topic: 'Competing garden designs shown through virtual reality',
        facts: `Who presented Your Garden Made Perfect?|Angela Scanlon|Helen Skelton|Charlie Dimmock|Carol Klein|Easy|Angela Scanlon|Main Presenter|Garden Transformations|2021 Series|BBC Two|Presenter Credits|Factual Entertainment
Which BBC channel first showed Your Garden Made Perfect?|BBC Two|BBC One|BBC Four|CBBC|Easy|BBC Two|Original Broadcaster|Programme Launch|British Garden Television|2021 Schedule|Factual Series|Garden Design
In what year did Your Garden Made Perfect premiere?|2021|2016|2019|2024|Easy|2021 Premiere|First Series|BBC Two|Broadcast Year|Programme History|Nineties Comparison|Television Timeline
Which home-design series inspired the spin-off Your Garden Made Perfect?|Your Home Made Perfect|Grand Designs|Changing Rooms|The Great Interior Design Challenge|Easy|Your Home Made Perfect|Parent Series|Spin Off|Angela Scanlon|Design Competition|BBC Programme|Related Show
What technology lets homeowners experience competing designs in Your Garden Made Perfect?|Virtual reality|Thermal imaging|Satellite tracking|Motion capture gaming|Easy|Virtual Reality|Design Visualisation|Immersive Technology|Digital Garden|Design Presentations|Garden Planning|Computer Graphics
How many competing designers usually propose designs for a featured garden?|Two|One|Three|Five|Easy|Two Designers|Design Competition|Alternative Schemes|Homeowner Choice|Makeover Format|Garden Architects|Programme Rules
Who chooses which of the competing designs is actually built?|The homeowners|A television studio audience|A panel of celebrity judges|The local council|Easy|Homeowner Decision|Chosen Design|Garden Renovation|Competition Outcome|Practical Build|Programme Format|Client Choice
Who specialised in smaller, lower-budget garden spaces in the first series?|Joel Bird|Tom Massey|Monty Don|Diarmuid Gavin|Medium|Joel Bird|Small Gardens|Budget Solutions|First Series Expert|Design Team|Affordable Makeover|Outdoor Spaces
Which designer competed against Helen Elks-Smith in the first episode?|Manoj Malde|Pip Probert|Tom Massey|Oliver Bond|Medium|Helen Elks Smith|Manoj Malde|Episode One|Demi And Laura|Design Rivals|2021 Garden|Presenter Team
Which Hertfordshire couple featured in the first episode of Your Garden Made Perfect?|Demi and Laura|Mandy and Chris|Steph and Nicola|Lisa and Justin|Medium|Demi And Laura|Hertfordshire|Opening Episode|Garden Owners|Family Outdoor Space|2021 Broadcast|Series Premiere
What awkward shape did Demi and Laura's garden have?|An L-shape|A perfect circle|A triangular wedge|A long crescent|Easy|L Shaped Garden|Demi And Laura|Episode One|Unusual Layout|Garden Design Problem|Family Project|Hertfordshire
Which designer's proposal did Demi and Laura choose in the first episode?|Helen Elks-Smith's|Manoj Malde's|Pip Probert's|Tom Massey's|Medium|Helen Elks Smith|Winning Design|Demi And Laura|Garden Terraces|2021 Premiere|Client Decision|Family Garden
Which large tree became a talking point in Demi and Laura's makeover?|A monkey puzzle tree|A weeping willow|A Scots pine|A sweet chestnut|Medium|Monkey Puzzle Tree|Demi And Laura|Tree Removal|Garden Layout|First Episode|Design Controversy|Landscape Feature
Which county provided the countryside views behind Neil and Clare's garden?|Cheshire|Surrey|Devon|Kent|Medium|Neil And Clare|Cheshire|Second Episode|Rural View|Garden Backdrop|Design Challenges|2021 Series
Which couple wanted to redesign their St Albans garden after their children had grown up?|Pam and Marcus|Suzanne and Andrew|Tracey and Jake|Rachael and Tom|Medium|Pam And Marcus|St Albans|Mature Family|Third Episode|Garden Revival|2021 Programme|Family Changes
What disused feature dominated Suzanne and Andrew's garden in Plymouth?|A swimming pool|A tennis court|A fish pond|A greenhouse|Easy|Suzanne And Andrew|Derelict Swimming Pool|Plymouth|Fourth Episode|Major Obstacle|Garden Restoration|2021 Series
Which couple's garden was in West Sussex in the fifth episode of the first series?|Tracey and Jake|Neil and Clare|Debi and Des|Steph and Nicola|Medium|Tracey And Jake|West Sussex|Episode Five|Garden Owners|2021 Broadcast|Southern England|Garden Design
What privacy problem concerned Mandy and Chris in Manchester?|Their garden was overlooked|Their garden was entirely underground|Their plot was too remote|Their garden was locked behind a shared gate|Easy|Mandy And Chris|Manchester|Overlooked Garden|Privacy Screening|Sixth Episode|2021 Series|Domestic Gardens
How many six-episode series of Your Garden Made Perfect were made?|Two|One|Three|Four|Medium|Two Series|Six Episodes Each|2021 And 2022|Programme History|BBC Two|Episode Count|Completed Run
In which year did Your Garden Made Perfect return for its second series?|2022|2020|2023|2025|Easy|2022 Return|Series Two|February Broadcast|BBC Two|Gardening Television|Programme Chronology|Second Run
Which coastal town near Blackpool featured in the second-series premiere?|St Annes|Southport|Morecambe|Fleetwood|Medium|St Annes|Steph And Nicola|Series Two Premiere|Lancashire Coast|2022 Episode|Location|Garden Makeover
What peaceful activity did Steph want space for in her redesigned garden?|Yoga|Tennis|Skateboarding|Archery|Easy|Yoga Space|Steph And Nicola|Wellbeing Garden|Second Series Premiere|Calm Retreat|Family Project|2022 Episode
What towering obstacle troubled Andrew and Paolo's garden in the second series?|A retaining wall|A communications mast|A mature oak tree|An electricity pylon|Medium|Andrew And Paolo|Retaining Wall|Second Series|Difficult Landscape|Structural Feature|Design Challenge|Garden Problems
Which two designers pitched ideas for Andrew and Paolo's garden?|Tom Massey and Pip Probert|Joel Bird and Monty Don|Carol Klein and James Wong|Charlie Dimmock and Joe Swift|Medium|Tom Massey|Pip Probert|Andrew And Paolo|Second Series Episode Two|Design Rivals|2022|Large Wall
What was the main difficulty with Debi and Des's garden in the second series?|It was sloping|It was covered by a car park|It was in a floodplain|It had no soil|Easy|Debi And Des|Sloped Garden|Second Series Episode Three|Uneven Ground|Family Outdoor Space|Garden Redesign|2022 Episode
Which designers competed to transform Debi and Des's sloping garden?|Oliver Bond and Helen Elks-Smith|Pip Probert and Joel Bird|Manoj Malde and Tom Massey|Monty Don and Carol Klein|Medium|Oliver Bond|Helen Elks Smith|Sloping Garden|Debi And Des|Series Two Designers|2022 Episode|Competition Pair
Which homeowners had an awkward L-shaped garden in Benfleet, Essex?|Agata and David|Mandy and Chris|Neil and Clare|Suzanne and Andrew|Medium|Agata And David|Benfleet|Essex|Second Series Episode Four|L Shaped Plot|Family Garden|Garden Challenges
What did Rachael and Tom want their garden to become in Series Two?|A living larder|A mini golf course|A paved car park|A swimming complex|Medium|Rachael And Tom|Living Larder|Edible Garden|Food Growing|2022 Episode|Outdoor Nature|Design Brief
Which small-garden specialist joined the second series in place of Joel Bird?|Tayshan Hayden-Smith|Chris Beardshaw|Alan Gardner|Sven Wombwell|Medium|Tayshan Hayden Smith|Small Spaces|Second Series|New Presenter|Garden Team|Joel Bird Replacement|Community Greening
Which Wokingham couple wanted a private, wildlife-friendly sanctuary in the second-series finale?|Lisa and Justin|Demi and Laura|Steph and Nicola|Pam and Marcus|Medium|Lisa And Justin|Wokingham|Garden Privacy|Wildlife Sanctuary|Second Series Finale|New Build Home|2022 Episode
Which designer from the first series was known for distinctive colourful planting designs?|Manoj Malde|Pip Probert|Helen Elks-Smith|Joel Bird|Medium|Manoj Malde|Colourful Gardens|Designer Style|Planting Schemes|2021 Presenters|Garden Aesthetics|Design Identity`
    },
    {
        programme: 'The Secret Life of the Garden',
        era: '2018',
        broadcaster: 'Documentary film',
        topic: 'One-off nature documentary about garden ecosystems',
        facts: `Who directed the documentary The Secret Life of the Garden?|Samuel Guiton|David Attenborough|Peter Jones|Monty Don|Medium|Samuel Guiton|Film Director|Nature Documentary|Garden Ecosystems|2018 Film|Production Credits|Wildlife Filmmaking
In which year was the nature documentary The Secret Life of the Garden produced?|2018|1998|2008|2023|Easy|2018 Production|Documentary Year|Wildlife Film|French Television|Nature Studies|Programme History|Garden Biodiversity
Approximately how long is the documentary The Secret Life of the Garden?|Fifty-two minutes|Twenty minutes|Ninety minutes|Three hours|Medium|52 Minute Film|Running Time|One Off Documentary|2018 Production|Nature Film|Broadcast Length|Programme Format
Which country produced the 2018 documentary The Secret Life of the Garden?|France|Canada|Australia|Norway|Medium|France|French Documentary|France TV Studio|International Production|Samuel Guiton|Nature Filmmaking|European Television
Which part of the natural world is the central focus of The Secret Life of the Garden?|Life within garden ecosystems|Wildlife on ocean reefs|Animals of the Arctic|Birds of tropical rainforests|Easy|Garden Ecosystems|Local Wildlife|Documentary Subject|Natural Habitats|Biodiversity|Human Landscapes|Ecological Balance
Which of these garden settings is examined in The Secret Life of the Garden?|Vegetable plots and orchards|Desert oilfields|Deep ocean trenches|Polar ice sheets|Easy|Vegetable Plots|Orchards|Garden Habitats|Cultivated Land|Wildlife Interactions|Nature Documentary|Habitat Diversity
Which group of animals is among those shown living in gardens in The Secret Life of the Garden?|Insects|Sharks|Penguins|Camels|Easy|Insects|Garden Wildlife|Small Creatures|Ecological Food Web|Close Up Nature|Documentary Subjects|Invertebrates
What does The Secret Life of the Garden show happening across seasons?|Garden wildlife feeding and reproducing|Gardens turning into football stadiums|Plants growing without sunlight|Every animal migrating overseas|Medium|Seasonal Wildlife|Breeding|Feeding|Garden Changes|Winter And Summer|Ecological Cycles|Animal Behaviour
Which organisation is credited with producing The Secret Life of the Garden?|France.tv studio|BBC Studios Natural History Unit|National Geographic Films|ITV Studios|Medium|France TV Studio|Production Credit|French Documentary|2018 Release|Nature Programme|Samuel Guiton|European Factual TV`
    }
];

const FIRST_ID = 14179;
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

        const tags = [...new Map([
            'Television',
            group.programme === 'The Secret Life of the Garden' ? 'French Documentary' : 'British Television',
            'Gardening', 'Gardening Programmes',
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

const EXPECTED_COUNT = 60;
if (questions.length !== EXPECTED_COUNT) {
    throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
}
if (questions[0].id !== 'tv_14179' ||
    questions[questions.length - 1].id !== 'tv_14238') {
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
