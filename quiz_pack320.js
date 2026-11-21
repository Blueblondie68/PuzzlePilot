// quiz_pack320.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Changing Rooms (1996-2004; 2021-2022)
// Seven individually selected specialist tags per question.
// Every exported question has programme, category, difficulty and dailyEligible.
// Format: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven tags

const groups = [
    {
        programme: 'Changing Rooms',
        era: '1996-2004',
        broadcaster: 'BBC',
        topic: 'Original BBC house-swapping makeover series',
        facts: `In which year did Changing Rooms first air in Britain?|1996|1992|1999|2001|Easy|1996 Premiere|Nineties Television|BBC Debut|First Broadcast|British DIY Boom|Programme Origins|Home Makeover History
Which channel originally broadcast Changing Rooms?|BBC Two|BBC One|Channel 4|ITV|Easy|BBC Two|Original Broadcaster|1996 Launch|Channel History|BBC Scheduling|First Series|Lifestyle Television
To which channel did Changing Rooms move in 1998?|BBC One|BBC Two|Channel 5|ITV|Medium|BBC One|1998 Channel Move|Third Series|Television Scheduling|Wider Audience|Original Run|Broadcast History
Who originally presented Changing Rooms?|Carol Smillie|Anna Richardson|Sarah Beeny|Kirstie Allsopp|Easy|Carol Smillie|Original Presenter|Scottish Host|Nineties TV|Programme Introductions|Makeover Reveals|Original Cast
Which designer took over presenting the later BBC series from Carol Smillie?|Laurence Llewelyn-Bowen|Linda Barker|Graham Wynne|Anna Ryder Richardson|Easy|Laurence Llewelyn-Bowen|Presenter Succession|Original Designer|Flamboyant Interiors|Later BBC Series|Host Change|Television Personality
What is the real name of the carpenter nicknamed 'Handy Andy' on Changing Rooms?|Andy Kane|Andy Goldstein|Andy Williams|Andy McNab|Medium|Andy Kane|Handy Andy|Carpenter Identity|Original Crew|Practical Construction|Furniture Making|BBC Personality
What was the standard decorating budget for a room on the original Changing Rooms?|£500|£100|£2,500|£10,000|Easy|Five Hundred Pounds|Original Budget|Budget Decorating|Cost Restrictions|1990s Makeovers|DIY Challenge|Room Redesign
How long did participants typically have to complete their rooms on the original Changing Rooms?|Two days|Two hours|One week|One month|Easy|Two Day Deadline|Time Pressure|Fast Decorating|Neighbour Teams|Original Format|House Swap|DIY Work
Who generally swapped houses for the makeovers in Changing Rooms?|Friends or neighbours|Professional builders|Rival estate agents|Hotel managers|Easy|Friends And Neighbours|Paired Households|House Swap Premise|Homeowner Participation|Mutual Makeovers|Original Format|Neighbourly Trust
How many rooms did each household usually redecorate in the other household's home?|One|Two floors|An entire house|Four|Easy|Single Room Makeover|Mutual Redecoration|House Swap Rules|Design Brief|Room Selection|Neighbour Collaboration|Original Format
Which inexpensive board material became almost synonymous with the furniture on Changing Rooms?|MDF|Slate|Granite|Solid mahogany|Easy|MDF|Medium Density Fibreboard|Cheap Joinery|DIY Furnishings|Built In Furniture|Budget Materials|Original Series
Which Changing Rooms designer was involved in the notorious collapsing display of teapots?|Linda Barker|Anna Ryder Richardson|Laura McCree|Graham Wynne|Easy|Linda Barker|Teapot Disaster|Designer Mishap|Suspended Shelves|2000 Episode|Original BBC Cast|London Homeowner
What kind of collection was destroyed in the famous Changing Rooms shelving disaster?|Antique teapots|Vinyl records|Snow globes|Glass ornaments|Easy|Antique Teapots|Damaged Heirlooms|Collector's Items|Fallen Shelving|Makeover Failure|2000 Incident|Ceramics
Which structure failed in the Changing Rooms episode that destroyed a valuable teapot collection?|Suspended shelving|A stair handrail|A fireplace mantel|A kitchen island|Medium|Suspended Shelves|Floating Display|Structural Failure|Teapot Collection|Linda Barker Scheme|Joinery Problem|Television Disaster
What was the teapot collection destroyed in a Changing Rooms makeover reportedly worth?|More than £6,000|About £60|About £500|More than £100,000|Medium|Six Thousand Pounds|Valuable Antiques|Financial Loss|Teapot Valuation|2000 Episode|Personal Collection|Accidental Damage
What was the first name of the homeowner whose antique teapots were destroyed on Changing Rooms?|Clodagh|Caroline|Terry|Pauline|Hard|Clodagh|Teapot Owner|London Homeowner|Antique Collection|Collapsed Shelving|2000 Makeover|Original Contestant
Which interior designer appeared on the original Changing Rooms alongside Linda Barker and Laurence Llewelyn-Bowen?|Anna Ryder Richardson|Sophie Robinson|Kelly Hoppen|Michelle Ogundehin|Easy|Anna Ryder Richardson|BBC Designers|Original Cast|Nineties Television|Bold Decorating|Home Makeover Expert|Interior Styling
Which Changing Rooms designer created the white 'operating theatre' style living room for Caroline Hicks?|Graham Wynne|Linda Barker|Anna Ryder Richardson|Laurence Llewelyn-Bowen|Hard|Graham Wynne|Caroline Hicks|Operating Theatre Look|Kent Living Room|White Design|Unhappy Homeowner|Experimental Makeover
What unusual feature was installed in Caroline Hicks's 'operating theatre' Changing Rooms makeover?|A running water feature|An indoor swing|A working pizza oven|A stage curtain|Hard|Running Water Feature|Caroline Hicks|Graham Wynne|White Living Room|Unusual Decoration|Kent Episode|Operating Theatre Theme
What Australian landscape influenced Laurence Llewelyn-Bowen's makeover that disappointed homeowner Jo Thompson?|The Outback|Bondi Beach|Sydney Harbour|The Great Barrier Reef|Hard|Australian Outback|Jo Thompson|Laurence Llewelyn-Bowen|Design Misunderstanding|Earthy Colours|Homeowner Disappointment|Antipodean Theme
Which interior designer worked on the original BBC Changing Rooms series?|Michael Jewitt|George Clarke|Alan Titchmarsh|Nick Knowles|Hard|Michael Jewitt|Original Design Team|Cast Credits|BBC Home Shows|Interior Decorating|Nineties Television|Early Designers
Who developed the Changing Rooms idea with producer Ann Booth-Clibborn?|Peter Bazalgette|Simon Cowell|John Torode|Paul O'Grady|Medium|Peter Bazalgette|Format Co Creator|Original Concept|Bazal Productions|BBC Commission|1995 Development|Reality Television History
Which producer helped devise Changing Rooms with Peter Bazalgette?|Ann Booth-Clibborn|Jane Tranter|Jay Hunt|Jane Root|Hard|Ann Booth-Clibborn|Programme Creator|Original Producer|1995 BBC Pitch|Format Development|House Swap Idea|Behind The Scenes
What was the working title of the programme idea that eventually became Changing Rooms?|Four White Walls|House Rules|Fresh Start|The Home Challenge|Hard|Four White Walls|Original Working Title|Pilot Concept|Unmade Format|Programme Development|BBC Pitch|1995 Brainstorming
Which successful cooking programme helped inspire the BBC's request for a new interiors format that became Changing Rooms?|Ready Steady Cook|MasterChef|Come Dine with Me|The Great British Bake Off|Medium|Ready Steady Cook|Peter Bazalgette|Programme Inspiration|Cookery Television|BBC Format Creation|Nineties TV|Commissioning Brief
On which London transport system was the Changing Rooms house-swapping concept developed?|The Underground|The river bus|A black cab|A tram|Hard|London Underground|Central Line|Creative Brainstorming|Peter Bazalgette|Ann Booth-Clibborn|1995 Format Idea|BBC Meeting
Which gardening series crossed over with Changing Rooms in a BBC special?|Ground Force|Gardeners' World|Love Your Garden|The Instant Gardener|Easy|Ground Force|BBC Crossover|Garden Makeovers|Joint Programme|2000 Special|Lifestyle TV|Gardening Experts
What was the crossover programme joining the Changing Rooms and Ground Force teams called?|When Changing Rooms Met Ground Force|The Great Garden Swap|DIY Goes Outdoors|Garden Rescue Challenge|Medium|When Changing Rooms Met Ground Force|2000 Special|Crossover Title|Interior And Garden Teams|BBC One|Joint Makeovers|Programme Event
Which BBC charity show featured Changing Rooms designers performing the spoof song 'Why MDF?'|Children in Need|Sport Relief|The Royal Variety Performance|Blue Peter|Hard|Children In Need|Why MDF|1999 Performance|Charity Broadcast|Musical Sketch|Original Cast|Fundraising Television
Which Village People song was parodied as 'Why MDF?' by the Changing Rooms cast?|YMCA|In the Navy|Go West|Macho Man|Hard|YMCA|Village People|Why MDF Parody|1999 Charity Sketch|Children In Need|TV Cast Singing|Novelty Performance
What was the US version of the Changing Rooms house-swap format called?|Trading Spaces|Property Brothers|Extreme Makeover|House Hunters|Medium|Trading Spaces|US Remake|International Format|American Television|House Swap Concept|British TV Export|Reality Makeovers
Which Cornish village featured in a 2004 Changing Rooms special following devastating floods?|Boscastle|Padstow|Polperro|St Ives|Hard|Boscastle|Cornwall Floods|2004 Special|Community Recovery|Flood Restoration|Christmas Programme|BBC Finale Era
In which year did the original BBC run of Changing Rooms end?|2004|1999|2008|2012|Easy|2004 BBC Ending|Original Series|Early 2000s Television|Makeover Legacy|Programme Closure|Broadcast History|Final BBC Year
Which Yorkshire town featured a Changing Rooms living room makeover dominated by circular shapes?|Doncaster|Leeds|Huddersfield|Harrogate|Medium|Doncaster|Circular Sitting Room|Round Furnishings|Fishbowl Fireplace|Silver Rubber Rings|Memorable Makeovers|Original Series
In a Changing Rooms 'Mediterranean love nest', what material was used to create Greek-style statues?|MDF|Solid marble|Granite|Bronze|Medium|Mediterranean Love Nest|Greek Style Statues|MDF Sculptures|Bedroom Decoration|Budget Illusion|Four Poster Bed|Original Programme
What winged figures were printed on the blinds and duvet in a memorable Changing Rooms bedroom makeover?|Cherubs|Swans|Dragons|Butterflies|Medium|Cherub Blinds|Cupid Imagery|Bedroom Makeover|Printed Duvet|Romantic Retreat|Blue And White Scheme|Memorable Makeovers`
    },
    {
        programme: 'Changing Rooms',
        era: '2021-2022',
        broadcaster: 'Channel 4',
        topic: 'Channel 4 revival of the house-swapping makeover programme',
        facts: `Which channel revived Changing Rooms in 2021?|Channel 4|BBC One|ITV|Channel 5|Easy|Channel 4|2021 Return|New Broadcaster|Reboot Commission|Commercial Television|Home Makeovers|Revival Series
In which year did Changing Rooms return with its first new series after the original BBC run?|2021|2015|2018|2024|Easy|2021 Reboot|Programme Return|Seventeen Year Hiatus|British Television Revival|Modern Decorating|Broadcast Timeline|Channel 4 Launch
Who presented Channel 4's revived Changing Rooms in 2021?|Anna Richardson|Carol Smillie|Davina McCall|Claudia Winkleman|Easy|Anna Richardson|2021 Presenter|Channel 4 Host|Revival Cast|Homeowner Interviews|Television Personality|Programme Reboot
Which presenter had been announced for the Changing Rooms reboot before withdrawing over scheduling problems?|Davina McCall|Tess Daly|Holly Willoughby|Emma Willis|Medium|Davina McCall|Initial Host Announcement|Scheduling Clash|Production Delay|Presenter Replacement|2020 Plans|Anna Richardson
Which designer from the original Changing Rooms returned for the Channel 4 series?|Laurence Llewelyn-Bowen|Graham Wynne|Michael Jewitt|Laura McCree|Easy|Laurence Llewelyn-Bowen|Returning Original Designer|2021 Revival Cast|Maximalist Style|Bold Colours|Design Continuity|Channel 4
Which two designers formed the principal new design duo in the 2021 Changing Rooms reboot?|Jordan Cluroe and Russell Whitehead|Colin McAllister and Justin Ryan|Sophie Robinson and Daniel Hopwood|Kelly Hoppen and Martin Holland|Medium|Jordan Cluroe|Russell Whitehead|Two Person Design Team|2021 Cast|Contrasting Styles|Contemporary Interiors|Revival Designers
What is the name of Jordan Cluroe and Russell Whitehead's design studio?|2LG Studio|Studio McGee|Home Edit|Design House Nine|Medium|2LG Studio|Jordan Cluroe|Russell Whitehead|Design Business|South East London|Contemporary Interiors|Professional Partnership
Who served as carpenter and joiner on the revived Changing Rooms?|Tibby Singh|Andy Kane|Tommy Walsh|Nick Knowles|Easy|Tibby Singh|2021 Carpenter|Joinery Skills|Revival Team|Practical Building|Furniture Projects|DIY Expert
Which paint brand partnered with Channel 4 on the new Changing Rooms?|Dulux|Crown|Valspar|Farrow and Ball|Easy|Dulux|Paint Partnership|2021 Sponsorship|Programme Branding|Colour Campaign|Decorating Company|Channel 4 Collaboration
Which company produced the Channel 4 revival of Changing Rooms?|Shine TV|Studio Lambert|Love Productions|Hat Trick Productions|Hard|Shine TV|Production Company|Banijay UK|Factual Entertainment|2021 Series|Channel 4 Commission|Programme Credits
Which Welsh city hosted the opening episode of the 2021 Changing Rooms reboot?|Swansea|Cardiff|Newport|Wrexham|Medium|Swansea|South Wales|2021 Premiere|Episode One|Opening House Swap|Claire And Lisa|Revival Location
What was the occupation of Claire, whose beige living room featured in the first 2021 Changing Rooms episode?|Florist|Teacher|Firefighter|Chef|Hard|Claire|Florist|Swansea 2021|Living Room Makeover|Beige Decor|Opening Episode|Homeowner Profession
What was the occupation of Claire's neighbour Lisa in the opening 2021 Changing Rooms episode?|Postwoman|Nurse|Architect|Police officer|Hard|Lisa|Postwoman|Swansea Neighbour|Bedroom Makeover|2021 Opening Episode|House Swap Participant|Participant Occupation
Which room did Swansea homeowner Lisa want transformed in the 2021 Changing Rooms opener?|Bedroom|Kitchen|Bathroom|Garage|Hard|Lisa Bedroom|Cluttered Neutral Space|Swansea Episode|Contemporary Brief|2021 Premiere|Neighbour Transformation|Room Choice
Who helped Lisa decorate neighbour Claire's room in the first Channel 4 Changing Rooms episode?|Her daughter Kirsty|Her mother Mary|Her brother Simon|Her husband Nick|Hard|Lisa And Kirsty|Daughter Helper|Swansea House Swap|Claire's Living Room|2021 Episode One|Family Collaboration|Neighbour Teams
In which year did Changing Rooms carpenter Tibby Singh win the BBC Young Carpenter of the Year award?|2012|1998|2005|2020|Hard|Tibby Singh|2012 Award|Young Carpenter Of The Year|BBC Recognition|Joinery Career|Trade Skills|Professional Honour
At which college did Changing Rooms carpenter Tibby Singh train?|Leeds College of Building|Royal College of Art|Glasgow School of Art|London College of Fashion|Hard|Tibby Singh|Leeds College Of Building|Trade Education|Carpentry Training|Joinery Apprenticeship|Craft Qualifications|Professional Background
How do Jordan Cluroe and Russell Whitehead describe their 2LG interior design style?|Joyful minimalism|Industrial brutalism|Strict Victoriana|Rustic traditionalism|Medium|Joyful Minimalism|2LG Studio|Design Aesthetic|Jordan Cluroe|Russell Whitehead|Modern Interiors|Colourful Simplicity
Which creative profession did Jordan Cluroe and Russell Whitehead work in before interior design?|Theatre|Professional football|Fine dining|Radio journalism|Medium|Theatre Background|2LG Founders|Career Change|Stage Experience|Jordan Cluroe|Russell Whitehead|Design Origins
What is the title of the interior design book written by Jordan Cluroe and Russell Whitehead?|Making Living Lovely|The Home Edit|The House That Built Me|A Place in the Sun|Hard|Making Living Lovely|2LG Studio Book|Jordan And Russell|Thames And Hudson|Design Publishing|Interior Styling|Author Credits
In which Welsh city did the second episode of the 2021 Changing Rooms reboot take place?|Cardiff|Swansea|Bangor|Wrexham|Hard|Cardiff|2021 Episode Two|Teresa And Andrew|Maria And Nick|Neighbour Teams|Welsh Homes|Episode Guide
Which northern city hosted the third episode of the 2021 Changing Rooms reboot?|Leeds|Liverpool|York|Manchester|Hard|Leeds|West Yorkshire|2021 Episode Three|Pauline And Lilly|Vibrant Front Room|Northern England|Revival Episode
Which south-coast town hosted a 2021 Changing Rooms makeover for Kerry and Sophie?|Fareham|Brighton|Poole|Worthing|Hard|Fareham|South Coast|Kerry And Sophie|Superhero Bedroom|2021 Episode Five|Hampshire|Room Transformation
Which Suffolk town hosted the final episode of the first 2021 Changing Rooms revival series?|Bury St Edmunds|Ipswich|Lowestoft|Sudbury|Hard|Bury St Edmunds|Suffolk|2021 Episode Six|Leanna And Jamie|Donna And Sarah|First Revival Finale|2021 Season Ending
Which two new designers joined Changing Rooms for the second revived series in 2022?|Micaela Sharp and Whinnie Williams|Linda Barker and Anna Ryder Richardson|Kelly Hoppen and Sophie Robinson|Sarah Moore and Tom Dyckhoff|Medium|Micaela Sharp|Whinnie Williams|New 2022 Designers|Second Revival Series|Cast Expansion|Channel 4|Interior Specialists
Which 2022 Changing Rooms designer previously appeared in series two of Interior Design Masters?|Micaela Sharp|Whinnie Williams|Anna Richardson|Linda Barker|Medium|Micaela Sharp|Interior Design Masters|BBC Design Competition|Upholstery Expert|2022 Revival Cast|Design Television|Previous Appearance
Which 2022 Changing Rooms designer co-founded the interiors brand Poodle & Blonde?|Whinnie Williams|Micaela Sharp|Linda Barker|Anna Ryder Richardson|Medium|Whinnie Williams|Poodle And Blonde|Retro Design Brand|Wallpaper|Fabric Collections|2022 Revival|Creative Director
Which BBC Three decorating programme had 2022 Changing Rooms designer Whinnie Williams previously presented?|Flat Out Fabulous|Your Home Made Perfect|The Great House Giveaway|Escape to the Country|Hard|Flat Out Fabulous|BBC Three|Whinnie Williams|Previous Presenting Role|Interiors Television|Retro Decoration|Career Credits
Which Kent town featured in the opening episode of Changing Rooms' second Channel 4 series in 2022?|Tunbridge Wells|Whitstable|Maidstone|Ramsgate|Hard|Tunbridge Wells|Kent|2022 Episode One|Eddie And Lotta|Charlotte And Stuart|Family Living Room|Second Series Premiere
Which town near Coventry featured a Changing Rooms 2022 makeover with designer Micaela Sharp?|Bedworth|Nuneaton|Rugby|Warwick|Hard|Bedworth|Near Coventry|2022 Episode Two|Micaela Sharp|Ann And Kevin|Hannah And Chris|Family Makeover
Why were 2LG designers Jordan Cluroe and Russell Whitehead unable to implement their designs in the 2022 Luton episode?|They had Covid-19|They were filming abroad|They had closed the studio|They were appearing in a competition|Hard|Luton|Covid Nineteen|2LG Absent|2022 Episode Three|Production Disruption|Whinnie Williams|Laurence Llewelyn-Bowen
Which Yorkshire village was the setting for a 2022 Changing Rooms makeover involving 300-year-old cottages?|Haworth|Grassington|Hutton-le-Hole|Robin Hood's Bay|Hard|Haworth|Historic Cottages|2022 Episode Four|Sonya And Christian|Period Homes|West Yorkshire|Mother Son Makeovers
Which Cheshire town featured a 2022 Changing Rooms project with an anime-inspired child's bedroom?|Macclesfield|Chester|Crewe|Knutsford|Hard|Macclesfield|Anime Design|2022 Episode Five|Japanese Inspired Build|Micaela Sharp|Children's Bedroom|Cheshire
In which year was Channel 4's Changing Rooms revival confirmed cancelled after two new series?|2023|2020|2021|2025|Medium|2023 Cancellation|Channel 4 Decision|Two Series Revival|Programme Status|Broadcast History|No Third Series|Reboot Ending`
    }
];

const FIRST_ID = 14397;
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
            'Television', 'British Television', 'Home Improvement', 'Interior Design',
            'Home Makeovers', group.broadcaster, group.era, group.programme,
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

const EXPECTED_COUNT = 70;
if (questions.length !== EXPECTED_COUNT) {
    throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
}
if (questions[0].id !== 'tv_14397' ||
    questions[questions.length - 1].id !== 'tv_14466') {
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

// 21 November 2026 editorial audit: Changing Rooms (original BBC run and C4 revival).
// Retain original tv_14397–tv_14466 unchanged. New IDs tv_36479–tv_36519.
// Research references: programme history (The Guardian, Nostalgia Central),
// 2021 Channel 4 press pack and Apple TV episode listings, 2022 Channel 4 press release,
// TheTVDB original 2022 episode listings, TVmaze and 2LG Studio's own finale account.
// https://www.theguardian.com/lifeandstyle/2020/sep/18/mustnt-swear-life-as-victim-of-changing-rooms-makeover
// https://nostalgiacentral.com/television/tv-by-decade/tv-shows-1990s/changing-rooms/
// https://www.channel4.com/press/press-pack/changing-rooms-press-pack
// https://tv.apple.com/gb/show/changing-rooms/umc.cmc.59o0v3euch8xz2hho3yu89uyh
// https://www.channel4.com/press/news/bright-colours-bold-patterns-and-house-swaps-changing-rooms-dulux-returns-series-two
// https://thetvdb.com/series/changing-rooms-2021/allseasons/official
// https://www.tvmaze.com/shows/51089/changing-rooms-with-dulux
// https://www.2lgstudio.com/2022/09/13/electric-theatre-changing-rooms-behind-the-scenes/
const auditAdditions = [
  {
    "id": "tv_36479",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Which additional designer named Laura featured on the BBC's original Changing Rooms?",
    "answers": [
      "Laura McCree",
      "Laura Jane Clark",
      "Laura Hamilton",
      "Laura Anderson"
    ],
    "correctAnswer": "Laura McCree",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: Original BBC run",
      "Specific evidence: Nostalgia Central original team",
      "Relevant subject: Other original BBC designer",
      "Correct answer: Laura McCree",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36480",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "How many series of the original BBC Changing Rooms were produced before it ended in 2004?",
    "answers": [
      "Ten",
      "Seventeen",
      "Twelve",
      "Twenty-three"
    ],
    "correctAnswer": "Seventeen",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: Original BBC run",
      "Specific evidence: The Guardian 2020 retrospective",
      "Relevant subject: Original series count",
      "Correct answer: Seventeen",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36481",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Before the neighbour-swapping premise of Changing Rooms was developed, what were contestants originally meant to decorate?",
    "answers": [
      "Old boats on a canal",
      "A different neighbour's garden",
      "Blank rooms to be judged afterwards",
      "Only their own kitchen cupboards"
    ],
    "correctAnswer": "Blank rooms to be judged afterwards",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: Original BBC development",
      "Specific evidence: The Guardian 2020 retrospective",
      "Relevant subject: Early unmade competition format",
      "Correct answer: Blank rooms to be judged afterwards",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36482",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Near which London Underground station did the producers hit on the house-swapping concept for Changing Rooms?",
    "answers": [
      "King's Cross St Pancras",
      "Bank",
      "Baker Street",
      "Holland Park"
    ],
    "correctAnswer": "Holland Park",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: Original BBC development",
      "Specific evidence: The Guardian 2020 retrospective",
      "Relevant subject: Development on the Underground in 1995",
      "Correct answer: Holland Park",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36483",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Which producer recruited Carol Smillie to present Changing Rooms?",
    "answers": [
      "Nick Vaughan-Barratt",
      "Peter Bazalgette",
      "Ann Booth-Clibborn",
      "Mark Sammon"
    ],
    "correctAnswer": "Nick Vaughan-Barratt",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: Original BBC development",
      "Specific evidence: The Guardian 2020 retrospective",
      "Relevant subject: Original presenter recruitment",
      "Correct answer: Nick Vaughan-Barratt",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36484",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "At whose house was carpenter Andy Kane working when Changing Rooms producers first discovered him?",
    "answers": [
      "Carol Smillie's",
      "Linda Barker's",
      "Anna Ryder Richardson's",
      "Laurence Llewelyn-Bowen's"
    ],
    "correctAnswer": "Linda Barker's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: Original BBC casting",
      "Specific evidence: The Guardian 2020 retrospective",
      "Relevant subject: Handy Andy discovered on a building job",
      "Correct answer: Linda Barker's",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36485",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "What job did Andy Kane mistakenly think he was being interviewed for when cast on Changing Rooms?",
    "answers": [
      "Operating a studio camera",
      "Driving the production bus",
      "Building television sets",
      "Presenting the weather forecast"
    ],
    "correctAnswer": "Building television sets",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: Original BBC casting",
      "Specific evidence: The Guardian 2020 retrospective",
      "Relevant subject: Unwitting audition",
      "Correct answer: Building television sets",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36486",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Which married couple featured in the first Changing Rooms episode shown after its move to BBC One?",
    "answers": [
      "Aidan and Helen Ruff",
      "Caroline Hicks and Jo Thompson",
      "Claire and Lisa",
      "Terry and Jimmy McDougall"
    ],
    "correctAnswer": "Terry and Jimmy McDougall",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: Original BBC 1998",
      "Specific evidence: The Guardian 2020 retrospective",
      "Relevant subject: First BBC One broadcast 17 July 1998",
      "Correct answer: Terry and Jimmy McDougall",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36487",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "What Australian beach atmosphere did Jo Thompson actually want for her Changing Rooms makeover, rather than the outback theme she received?",
    "answers": [
      "Bondi beach",
      "Surfers Paradise",
      "Byron Bay",
      "Noosa Heads"
    ],
    "correctAnswer": "Bondi beach",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: Original BBC 2000s",
      "Specific evidence: The Guardian 2020 retrospective",
      "Relevant subject: Mismatch between requested and delivered style",
      "Correct answer: Bondi beach",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36488",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Which famous pottery designer created a teapot in Clodagh's collection destroyed during Changing Rooms?",
    "answers": [
      "Emma Bridgewater",
      "Clarice Cliff",
      "Susie Cooper",
      "Wedgwood designer John Flaxman"
    ],
    "correctAnswer": "Clarice Cliff",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: Original BBC teapot incident",
      "Specific evidence: The Guardian 2020 retrospective",
      "Relevant subject: A teapot linked to her mother's twenty-first birthday",
      "Correct answer: Clarice Cliff",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36489",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Who ultimately reimbursed Clodagh for the teapots damaged on Changing Rooms?",
    "answers": [
      "The local council",
      "An antique auctioneer",
      "The insurers",
      "Her neighbours"
    ],
    "correctAnswer": "The insurers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: Original BBC teapot incident",
      "Specific evidence: The Guardian 2020 retrospective",
      "Relevant subject: Aftermath of suspended-shelf collapse",
      "Correct answer: The insurers",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36490",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Who presented the Australian version of Changing Rooms?",
    "answers": [
      "Kerry Smith",
      "Martijn Krabbé",
      "Carol Smillie",
      "Suzie Wilks"
    ],
    "correctAnswer": "Suzie Wilks",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: Original BBC overseas versions",
      "Specific evidence: Nostalgia Central programme profile",
      "Relevant subject: Australian adaptation of BBC format",
      "Correct answer: Suzie Wilks",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36491",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Who hosted the New Zealand version of Changing Rooms?",
    "answers": [
      "Kerry Smith",
      "Suzie Wilks",
      "Anna Richardson",
      "Martijn Krabbé"
    ],
    "correctAnswer": "Kerry Smith",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: Original BBC overseas versions",
      "Specific evidence: Nostalgia Central programme profile",
      "Relevant subject: International franchise",
      "Correct answer: Kerry Smith",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36492",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "On which date in August 2021 did Channel 4 first broadcast the revived Changing Rooms?",
    "answers": [
      "1 August",
      "18 August",
      "11 August",
      "29 August"
    ],
    "correctAnswer": "18 August",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2021 revival launch",
      "Specific evidence: Channel 4 2021 press pack",
      "Relevant subject: Reboot premiere date",
      "Correct answer: 18 August",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36493",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "How many hour-long programmes did Channel 4 commission for the first revived series of Changing Rooms?",
    "answers": [
      "Four",
      "Eight",
      "Six",
      "Ten"
    ],
    "correctAnswer": "Six",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2021 revival launch",
      "Specific evidence: Channel 4 2021 press pack",
      "Relevant subject: Six sixty-minute episodes",
      "Correct answer: Six",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36494",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "What two birds inspired the lavish theme of Laurence Llewelyn-Bowen's Swansea living room in Changing Rooms?",
    "answers": [
      "Swans and ducks",
      "Eagles and owls",
      "Robins and sparrows",
      "Peacocks and flamingos"
    ],
    "correctAnswer": "Peacocks and flamingos",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2021 Swansea",
      "Specific evidence: The Guardian 21 August 2021",
      "Relevant subject: Colourful debut revival room",
      "Correct answer: Peacocks and flamingos",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36495",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Which Changing Rooms neighbours in Cardiff hoped to convert their dull front room into a snug?",
    "answers": [
      "Teresa and Andrew",
      "Maria and Nick",
      "Kerry and Sophie",
      "Donna and Leanna"
    ],
    "correctAnswer": "Teresa and Andrew",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2021 Cardiff",
      "Specific evidence: Apple TV official Season 2021 Episode 2",
      "Relevant subject: Cardiff family living room",
      "Correct answer: Teresa and Andrew",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36496",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Which Cardiff couple wanted a dream family space from their neighbours in Changing Rooms?",
    "answers": [
      "Teresa and Andrew",
      "Maria and Nick",
      "Keith and Kath",
      "Tom and Richard"
    ],
    "correctAnswer": "Maria and Nick",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2021 Cardiff",
      "Specific evidence: Apple TV official Season 2021 Episode 2",
      "Relevant subject: Cardiff neighbouring house",
      "Correct answer: Maria and Nick",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36497",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Which colour already dominated Pauline's front room before her Changing Rooms makeover in Leeds?",
    "answers": [
      "Beige",
      "White",
      "Purple",
      "Yellow"
    ],
    "correctAnswer": "Purple",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2021 Leeds",
      "Specific evidence: Apple TV official Season 2021 Episode 3",
      "Relevant subject: Original room's palette",
      "Correct answer: Purple",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36498",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "What Scandinavian-inspired result did Leeds homeowner Amanda seek in Changing Rooms?",
    "answers": [
      "A Japanese tea garden",
      "A Roman bathhouse",
      "A Victorian orangery",
      "A Scandi-style living room"
    ],
    "correctAnswer": "A Scandi-style living room",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2021 Leeds",
      "Specific evidence: Apple TV official Season 2021 Episode 3",
      "Relevant subject: Amanda described as a cat lover",
      "Correct answer: A Scandi-style living room",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36499",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "What was Sarah's occupation when she appeared on Changing Rooms in Barnstaple?",
    "answers": [
      "Dog groomer",
      "Primary school teacher",
      "Baker",
      "Paramedic"
    ],
    "correctAnswer": "Dog groomer",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2021 Barnstaple",
      "Specific evidence: Apple TV official Season 2021 Episode 4",
      "Relevant subject: Sarah's storage-challenged bedroom",
      "Correct answer: Dog groomer",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36500",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Which room did Tom and Richard hope to transform in the Barnstaple episode of Changing Rooms?",
    "answers": [
      "Kitchen",
      "Dining room",
      "Bathroom",
      "Garage"
    ],
    "correctAnswer": "Dining room",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2021 Barnstaple",
      "Specific evidence: Apple TV official Season 2021 Episode 4",
      "Relevant subject: Underused room in North Devon",
      "Correct answer: Dining room",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36501",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "What job did Kerry have when she appeared alongside Sophie in Changing Rooms' Fareham episode?",
    "answers": [
      "Postwoman",
      "Veterinary surgeon",
      "Intensive care nurse",
      "School caretaker"
    ],
    "correctAnswer": "Intensive care nurse",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2021 Fareham",
      "Specific evidence: TV Guide 2021 Season 1 Episode 5",
      "Relevant subject: Fareham homeowner profession",
      "Correct answer: Intensive care nurse",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36502",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Which emergency-service job did homeowner Sophie do in Changing Rooms' Fareham episode?",
    "answers": [
      "Police officer",
      "Ambulance dispatcher",
      "Coastguard",
      "Firefighter"
    ],
    "correctAnswer": "Firefighter",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2021 Fareham",
      "Specific evidence: TV Guide 2021 Season 1 Episode 5",
      "Relevant subject: Fareham second homeowner profession",
      "Correct answer: Firefighter",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36503",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Which popular entertainment genre inspired Kerry and Sophie's desired bedroom in Changing Rooms?",
    "answers": [
      "Superheroes",
      "Westerns",
      "Period dramas",
      "Pirate films"
    ],
    "correctAnswer": "Superheroes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2021 Fareham",
      "Specific evidence: TV Guide 2021 Season 1 Episode 5",
      "Relevant subject: Room to reflect personality",
      "Correct answer: Superheroes",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36504",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Which Changing Rooms homeowner in Bury St Edmunds wanted a dramatic wow-factor bedroom?",
    "answers": [
      "Leanna",
      "Donna",
      "Claire",
      "Amanda"
    ],
    "correctAnswer": "Donna",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2021 Bury St Edmunds",
      "Specific evidence: Apple TV official Season 2021 Episode 6",
      "Relevant subject: Neighbour's bold bedroom ambition",
      "Correct answer: Donna",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36505",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "What room had Leanna and Jamie failed to agree how to decorate before Changing Rooms arrived?",
    "answers": [
      "Spare bedroom",
      "Utility room",
      "Living room",
      "Bathroom"
    ],
    "correctAnswer": "Living room",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2021 Bury St Edmunds",
      "Specific evidence: Apple TV official Season 2021 Episode 6",
      "Relevant subject: Couple at decorative deadlock",
      "Correct answer: Living room",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36506",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Which craft did incoming Changing Rooms designer Micaela Sharp specialise in professionally?",
    "answers": [
      "Stone masonry",
      "Glass blowing",
      "Landscape gardening",
      "Upholstery"
    ],
    "correctAnswer": "Upholstery",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2022 revival production",
      "Specific evidence: Channel 4 2022 commissioning release",
      "Relevant subject: Background as skilled upholsterer",
      "Correct answer: Upholstery",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36507",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Which 2022 Changing Rooms designer renovated a Margate Victorian home into a 1970s-style house?",
    "answers": [
      "Whinnie Williams",
      "Micaela Sharp",
      "Linda Barker",
      "Anna Ryder Richardson"
    ],
    "correctAnswer": "Whinnie Williams",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2022 revival production",
      "Specific evidence: Channel 4 2022 commissioning release",
      "Relevant subject: Retro interior design work",
      "Correct answer: Whinnie Williams",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36508",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Which pair of neighbouring households traded their living rooms in Changing Rooms' 2022 Tunbridge Wells premiere?",
    "answers": [
      "Ann and Kevin with Hannah and Chris",
      "Eddie and Lotta with Charlotte and Stuart",
      "Sonya and Christian with Mark and Jackie",
      "Claire and Lisa with Kerry and Sophie"
    ],
    "correctAnswer": "Eddie and Lotta with Charlotte and Stuart",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2022 Tunbridge Wells",
      "Specific evidence: TheTVDB 2022 Episode 1",
      "Relevant subject: Family living room makeovers",
      "Correct answer: Eddie and Lotta with Charlotte and Stuart",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36509",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Which profession did Ann and Kevin share in the Bedworth episode of Changing Rooms?",
    "answers": [
      "Nurses",
      "Restaurant owners",
      "Science teachers",
      "Architects"
    ],
    "correctAnswer": "Science teachers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2022 Bedworth",
      "Specific evidence: TheTVDB 2022 Episode 2",
      "Relevant subject: Family house swap",
      "Correct answer: Science teachers",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36510",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "What was the name of Ann and Kevin's daughter who swapped rooms with them on Changing Rooms in Bedworth?",
    "answers": [
      "Sophie",
      "Lucy",
      "Kirsty",
      "Hannah"
    ],
    "correctAnswer": "Hannah",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2022 Bedworth",
      "Specific evidence: TheTVDB 2022 Episode 2",
      "Relevant subject: Hannah and husband Chris",
      "Correct answer: Hannah",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36511",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "What had the family converted into a living space before Changing Rooms remodelled it in Bedworth?",
    "answers": [
      "A garage",
      "A stable",
      "A conservatory",
      "A barn"
    ],
    "correctAnswer": "A garage",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2022 Bedworth",
      "Specific evidence: TheTVDB 2022 Episode 2",
      "Relevant subject: Converted garage room makeover",
      "Correct answer: A garage",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36512",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Who helped Laurence Llewelyn-Bowen carry out the absent 2LG duo's design plans on Changing Rooms in Luton?",
    "answers": [
      "Linda Barker",
      "Whinnie Williams",
      "Micaela Sharp",
      "Carol Smillie"
    ],
    "correctAnswer": "Whinnie Williams",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2022 Luton",
      "Specific evidence: TheTVDB 2022 Episode 3",
      "Relevant subject: Jordan and Russell had Covid-19",
      "Correct answer: Whinnie Williams",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36513",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "What family relationship connected Sonya and Christian, the two homeowners in Changing Rooms' Haworth episode?",
    "answers": [
      "Sister and brother",
      "Husband and wife",
      "Mother and son",
      "Aunt and nephew"
    ],
    "correctAnswer": "Mother and son",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2022 Haworth",
      "Specific evidence: TheTVDB 2022 Episode 4",
      "Relevant subject: Historic West Yorkshire cottages",
      "Correct answer: Mother and son",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36514",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Which rooms did Sonya and Christian make over in their neighbouring cottages on Changing Rooms?",
    "answers": [
      "Two bathrooms",
      "A study and a loft",
      "Two conservatories",
      "A small kitchen and a living room"
    ],
    "correctAnswer": "A small kitchen and a living room",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2022 Haworth",
      "Specific evidence: TheTVDB 2022 Episode 4",
      "Relevant subject: 300-year-old properties",
      "Correct answer: A small kitchen and a living room",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36515",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "What room did designers aim to give a tropical boutique makeover on Changing Rooms in Macclesfield?",
    "answers": [
      "The main bedroom",
      "The kitchen",
      "The dining room",
      "The garage"
    ],
    "correctAnswer": "The main bedroom",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2022 Macclesfield",
      "Specific evidence: TheTVDB 2022 Episode 5",
      "Relevant subject: Contrast with anime-inspired child's bedroom",
      "Correct answer: The main bedroom",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36516",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "How old was the child receiving the anime-inspired bedroom in Changing Rooms' Macclesfield episode?",
    "answers": [
      "Five",
      "Ten",
      "Fourteen",
      "Seventeen"
    ],
    "correctAnswer": "Ten",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2022 Macclesfield",
      "Specific evidence: TheTVDB 2022 Episode 5",
      "Relevant subject: Japanese-inspired design",
      "Correct answer: Ten",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36517",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Which two pairs of homeowners swapped rooms in Changing Rooms' 2022 Wokingham finale?",
    "answers": [
      "Teresa and Andrew with Maria and Nick",
      "Sonya and Christian with Milena and Simon",
      "Lucy and Andy with Mark and Jackie",
      "Eddie and Lotta with Charlotte and Stuart"
    ],
    "correctAnswer": "Lucy and Andy with Mark and Jackie",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2022 Wokingham finale",
      "Specific evidence: TVmaze 2022 series finale / Moviefone guide",
      "Relevant subject: Wokingham neighbouring households",
      "Correct answer: Lucy and Andy with Mark and Jackie",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36518",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "What entertainment equipment did 2LG Studio conceal behind a pelmet in their Changing Rooms Wokingham makeover?",
    "answers": [
      "A karaoke machine",
      "A fishtank",
      "A jukebox",
      "A projector and screen"
    ],
    "correctAnswer": "A projector and screen",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2022 Wokingham finale",
      "Specific evidence: 2LG Studio behind-the-scenes article 13 September 2022",
      "Relevant subject: Hidden cinema projection",
      "Correct answer: A projector and screen",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36519",
    "category": "Television",
    "programme": "Changing Rooms",
    "question": "Which two rooms were renovated by neighbours in the 2022 Wokingham finale of Changing Rooms?",
    "answers": [
      "A boxy bedroom and a beige sitting room",
      "Two kitchens",
      "Two bathrooms",
      "A workshop and a garage"
    ],
    "correctAnswer": "A boxy bedroom and a beige sitting room",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Changing Rooms",
      "Programme: Changing Rooms",
      "Home Makeovers",
      "Interior Design",
      "BBC Two",
      "BBC One",
      "Channel 4",
      "British Factual Entertainment",
      "House Swapping",
      "Home Decoration",
      "Programme era and location: 2022 Wokingham finale",
      "Specific evidence: TVmaze 2022 finale / Moviefone guide",
      "Relevant subject: Final makeover room types",
      "Correct answer: A boxy bedroom and a beige sitting room",
      "Carol Smillie and Laurence Llewelyn-Bowen",
      "Homeowners and designers",
      "1996–2004 original run",
      "2021–2022 revival",
      "21 November 2026 editorial audit"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==111 ||
new Set(questions.map(q=>q.id)).size!==questions.length ||
new Set(questions.map(q=>q.question.toLowerCase().trim())).size!==questions.length ||
questions.some(q=>q.category!=='Television'||q.programme!=='Changing Rooms'||
 q.answers.length!==4||new Set(q.answers.map(a=>a.trim().toLowerCase())).size!==4||
 q.answers.filter(a=>a===q.correctAnswer).length!==1||
 !q.tags.includes('Programme: Changing Rooms')||q.tags.length<15||q.dailyEligible!==true) ||
auditAdditions.some(q=>q.tags.length<19||!q.question.includes('Changing Rooms')))
 throw Error('Pack 320 audit validation failed');

module.exports = questions;