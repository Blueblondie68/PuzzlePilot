
// PuzzlePilot - Big Quiz - Pack 409
// A Year at Kew (BBC Two, 2004-2007), including A New Year at Kew (2007).
// Complete documentary coverage: seasons, people, gardens, science and expeditions.
// Complete WordPad-ready CommonJS file. First ID: tv_22840.
'use strict';

const FIRST_ID = 22840;
const commonTags = [
  'television', 'A Year at Kew', 'BBC Two',
  'British documentary', 'Royal Botanic Gardens Kew', 'horticulture and conservation'
];

// Question | correct answer | three distractors | difficulty | seven specific tags.
// Every question names the programme for standalone and mixed-category play.
const rows = [
  `In which year did the BBC documentary A Year at Kew first air?|2004|1998|2008|2012|Easy|2004 debut|series premiere|BBC gardening history|2000s programme|first broadcast|episode chronology|August launch`,
  `Which BBC channel originally broadcast A Year at Kew?|BBC Two|BBC One|BBC Three|BBC Four|Easy|BBC Two original transmission|public service broadcasting|2004|garden documentary|UK television|network|channel history`,
  `Who narrates the television documentary A Year at Kew?|Alan Titchmarsh|Monty Don|David Attenborough|Chris Packham|Easy|Alan Titchmarsh|narrator|garden presenter|voiceover|2004 to 2007|television personality|programme credits`,
  `Which famous institution is followed behind the scenes in A Year at Kew?|The Royal Botanic Gardens at Kew|The Eden Project in Cornwall|The Lost Gardens of Heligan|The Royal Horticultural Society at Wisley|Easy|Kew Gardens|London|botanical institution|garden staff|plant science|behind the scenes|programme setting`,
  `What kind of programme is A Year at Kew?|A documentary about botanical gardens and their staff|A fictional hospital soap|A competitive cooking contest|A property auction game show|Easy|factual television|real gardeners|scientific work|seasonal filming|non fiction|botanical subjects|programme genre`,
  `Which London borough contains the main gardens featured in A Year at Kew?|Richmond upon Thames|Camden|Croydon|Greenwich|Medium|Richmond upon Thames|Kew district|south west London|garden geography|River Thames|visitor destination|institution location`,
  `How many main series of A Year at Kew are listed for its 2004 to 2007 run?|Three|One|Five|Eight|Medium|three series|2004|2005|2007|broadcast history|documentary run|season count`,
  `In which year did the final series of A Year at Kew air?|2007|2005|2010|2014|Medium|2007 final run|series three|end of series|broadcast chronology|BBC documentary|final episodes|three series`,
  `What alternative title was used for the 2007 follow-up to A Year at Kew?|A New Year at Kew|The Great Kew Challenge|Kew Gardens Live|Inside Kew Palace Only|Medium|A New Year at Kew|2007 series|follow up title|series three|programme branding|further documentaries|new year`,
  `How many half-hour instalments made up the 2007 A New Year at Kew series?|Ten|Three|Six|Twenty|Medium|ten episodes|2007 production|half hour episodes|third series|Deborah Perkin|series length|broadcast structure`,
  `Which production professional lists the 2007 A New Year at Kew among her credits as series producer?|Deborah Perkin|Jill Dando|Fiona Bruce|Delia Smith|Hard|Deborah Perkin|2007|series producer|production credits|behind camera|BBC factual|programme making`,
  `Which episode opens the first series of A Year at Kew in 2004?|Pests in the Palm House|The Autumn Festival|Wollemi Pine|The Orchid Festival|Medium|Pests in the Palm House|first episode|2004|series one|opening instalment|episode title|Palm House`,
  `In A Year at Kew's first episode, which insect pest threatens plants in the Palm House?|Thrips|Locusts|Termites|Cockroaches|Medium|thrips|Palm House|Emma Fox|plant pests|2004 opening|glasshouse care|pest control`,
  `Which Palm House keeper tackles the thrips infestation in the opening A Year at Kew episode?|Emma Fox|Kath King|Roselle Andrews|Margaret Leigh|Medium|Emma Fox|keeper|thrips|Palm House|pest management|series one|horticulture staff`,
  `Who leads the tree team dealing with a diseased specimen in A Year at Kew's first episode?|Jon Hammerton|Bill Baker|Mike Fay|Phil Griffiths|Medium|Jon Hammerton|tree gang|diseased tree|arboriculture|series one|staff leader|first episode`,
  `Which wild animal's artificial sett is prepared in the opening episode of A Year at Kew?|Badger|Otter|Red squirrel|Fox|Medium|badger sett|wildlife habitat|first episode|2004|grounds management|conservation education|garden fauna`,
  `Which spectacular flowering plant is the focus of A Year at Kew's second 2004 episode?|Titan arum|Bluebell|Venus flytrap|Cherry blossom|Easy|titan arum|giant flower|2004|second episode|corpse flower|rare plants|greenhouse display`,
  `Who prepares the titan arum display in the early A Year at Kew episode about its flowering?|Phil Griffiths|Tony Kirkham|Stuart Cable|Steve Alton|Medium|Phil Griffiths|displays coordinator|titan arum|2004|flowering event|plant exhibition|show preparation`,
  `Which Kew expert in unpleasant plant smells appears during the titan arum story in A Year at Kew?|Dr Geoffrey Kite|Dr Mike Fay|Dr Hugh Pritchard|Dr Bill Baker|Hard|Geoffrey Kite|plant odours|titan arum|flower scent|2004|Kew scientist|episode two`,
  `Which special festival is being prepared during the titan arum episode of A Year at Kew?|Go Wild|The Chelsea Flower Show|Glastonbury|The Edinburgh Fringe|Medium|Go Wild festival|visitor event|2004|exhibitions|public engagement|gardens programme|second instalment`,
  `In A Year at Kew, whose team races to replant the Palm House border in just four days?|Sarah Smith|Olwen Grace|Christine Leon|Emma Treadwell|Medium|Sarah Smith|Palm House border|summer planting|four day deadline|garden team|2004|landscaping`,
  `How long does the team have for the major Palm House border transformation in A Year at Kew's Summer Planting episode?|Four days|One hour|Three weeks|Six months|Medium|Summer Planting|four day schedule|Palm House border|Sarah Smith|2004|seasonal beds|horticultural deadline`,
  `Which Kew building hosts an annual charity auction in the first series of A Year at Kew?|The Orangery|The Great Pagoda|The Alpine House|The Japanese Gateway|Medium|Orangery|charity auction|2004 episode|historic building|fundraising event|garden visitors|Summer Planting`,
  `Which botanist featured in A Year at Kew is a leading specialist in palms from Madagascar?|John Dransfield|Tony Hall|Dave Barnes|Simon Cole|Medium|John Dransfield|Madagascan palms|botanist|rare species|plant conservation|2004|expert search`,
  `Which collection is tended by Steve Ketley in the first series of A Year at Kew?|Ferns|Orchids|Cacti|Bonsai trees|Medium|Steve Ketley|fern keeper|plant collections|2004|botanical specialist|horticulture|staff role`,
  `Which huge water plant does Emma Fox try to bring into growth in A Year at Kew?|A giant waterlily|A sequoia tree|An alpine gentian|A desert cactus|Medium|Emma Fox|giant waterlily|Waterlily House|aquatic plants|2004|glasshouse cultivation|plant growth`,
  `Which international organisation granted Kew World Heritage status, discussed in A Year at Kew?|UNESCO|NATO|FIFA|WHO|Easy|UNESCO|World Heritage|site recognition|heritage listing|garden status|international body|cultural designation`,
  `In which year did Kew Gardens gain the UNESCO World Heritage designation discussed in A Year at Kew?|2003|1987|2015|2021|Medium|2003 inscription|UNESCO|heritage status|cultural landscape|Royal Botanic Gardens|recognition date|site history`,
  `Which head of horticulture awaits news about World Heritage recognition in A Year at Kew's Summer Swing Concerts episode?|Nigel Taylor|John Dransfield|Jon Hammerton|Stuart Cable|Hard|Nigel Taylor|head of horticulture|UNESCO|World Heritage|Summer Swing Concerts|2004 episode|garden management`,
  `Which insect does Emma Fox imitate to pollinate giant waterlilies in A Year at Kew?|A nocturnal beetle|A honeybee|A butterfly|A dragonfly|Medium|Emma Fox|night beetle|waterlily pollination|glasshouse ecology|2004|plant reproduction|insect mimicry`,
  `Who puts on waders to restock a marine display below Kew's Palm House in A Year at Kew?|Pete Morris|Tony Kirkham|Bill Baker|Steve Robinson|Hard|Pete Morris|marine display|Palm House|waders|aquatic exhibits|2004|Summer Swing Concerts`,
  `Which member of Kew's arboretum team manages irrigation during a serious drought in A Year at Kew?|Ray Townsend|Geoffrey Kite|Olwen Grace|Margaret Leigh|Medium|Ray Townsend|arboretum manager|drought|irrigation|tree care|2004|dry summer`,
  `To which country does Tony Kirkham travel to obtain mature trees for the Pagoda vista in A Year at Kew?|Italy|Japan|Canada|Brazil|Medium|Tony Kirkham|Italy expedition|mature trees|Pagoda vista|arboretum|2004|landscape restoration`,
  `Which structure's vista is enhanced using mature trees brought from Italy in A Year at Kew?|The Great Pagoda|The Palm House|Kew Palace|The Orangery|Medium|Great Pagoda|tree planting|vista|Tony Kirkham|Italian specimens|garden landscape|2004`,
  `In A Year at Kew, which country does Ray Townsend visit to collect plant specimens and seeds?|Japan|Norway|Egypt|Iceland|Medium|Ray Townsend|Japanese collecting trip|bamboo|seed collecting|arboretum work|2004|botanical expedition`,
  `What does Phil Griffiths feature in an autumn display during A Year at Kew?|Pumpkins and gourds|Easter lilies and eggs|Snowflakes and holly|Coconuts and pineapples|Medium|Phil Griffiths|pumpkins|gourds|Autumn Festival|seasonal display|2004|decorations`,
  `Who travels to Madagascar to gather endangered plant seeds for the Millennium Seed Bank in A Year at Kew?|Stuart Cable|Steve Robinson|Michael Palin|Dave Barnes|Medium|Stuart Cable|Madagascar|Millennium Seed Bank|seed expedition|endangered species|2004|conservation mission`,
  `Which historic royal building is the subject of an archaeological dig in A Year at Kew's first series?|Kew Palace|Buckingham Palace|Hampton Court Palace|Windsor Castle|Medium|Kew Palace|archaeological dig|Sarah Smith|Emma Gardner|2004|history of gardens|heritage archaeology`,
  `Which descendant of Charles Darwin visits Kew in A Year at Kew while searching for a rare rhododendron?|Randall Keynes|Richard Dawkins|Peter Scott|David Bellamy|Hard|Randall Keynes|Charles Darwin|great great grandson|rare rhododendron|2004|family history|botanical visit`,
  `What technical failure threatens exotic plants in the episode Problems with the Cold of A Year at Kew?|A breakdown in the heating system|A collapsed television aerial|A broken ticket barrier|A failed irrigation pump in the desert|Medium|heating failure|Palm House|Waterlily House|temperature control|2004|exotic plants|glasshouse emergency`,
  `In A Year at Kew's first-series finale, what does an exceptionally old potted plant prepare to produce?|A cone|A giant apple|A coconut|A truffle|Hard|oldest pot plant|cone formation|Orchid Festival|2004 finale|botanical milestone|living collection|plant reproduction`,
  `Which head gardener advises new students on replanting islands in the lake during A Year at Kew?|Tony Hall|Dave Barnes|Bill Baker|Mike Fay|Medium|Tony Hall|horticulture students|lake islands|replanting|2004 finale|gardening advice|training`,
  `Which monarch's visit is featured in the opening episode of A Year at Kew's second series?|Queen Elizabeth II|Queen Victoria|Queen Anne|Queen Mary II|Easy|Elizabeth II|2005 royal visit|second series|UNESCO recognition|British monarchy|garden ceremony|episode opening`,
  `Which change in weather forces Kew to close unexpectedly in A Year at Kew's second series?|Severe storms|A summer heatwave|Persistent fog|A light frost|Medium|Gardens Closed|storm damage|2005|visitor closure|garden safety|severe weather|second series`,
  `Which royal visitor accompanies Prince Turki of Saudi Arabia to Kew in the second series of A Year at Kew?|Prince Charles|Prince William|Prince Edward|Prince Philip|Medium|Prince Charles|Prince Turki|Saudi Arabia|2005|palm tree planting|royal visit|Gardens Closed`,
  `What type of plants does Kath King explain feeding in A Year at Kew's second series?|Carnivorous plants|Olive trees|Bamboo hedges|Alpine roses|Medium|Kath King|carnivorous plants|feeding regimes|2005|plant nutrition|specialist collection|glasshouse care`,
  `Which insects cause difficulties for display staff during A Year at Kew's Gardens Closed episode?|Leaf-cutter ants|Ladybirds|Dragonflies|Mayflies|Medium|leaf cutter ants|display problem|2005|Gardens Closed|insect behaviour|garden exhibits|keeper challenge`,
  `In A Year at Kew, which rare orchid has its DNA examined by Mike Fay in the Jodrell Laboratory?|Red helleborine|Bee orchid|Lady's slipper orchid|Early purple orchid|Hard|Mike Fay|red helleborine|DNA research|Jodrell Laboratory|rare orchid|2005|plant genetics`,
  `Which estate is described as Kew's country garden in A Year at Kew's second series?|Wakehurst Place|Chatsworth House|Blenheim Palace|Sissinghurst Castle|Easy|Wakehurst Place|country garden|West Sussex|2005 episode|Kew estate|plant conservation|second series`,
  `Which activity does Steve Robinson undertake at Wakehurst Place in A Year at Kew?|Making charcoal|Building a greenhouse from ice|Designing a railway bridge|Carving a marble statue|Medium|Steve Robinson|Wakehurst Place|charcoal making|2005|woodland management|traditional craft|country estate`,
  `In A Year at Kew's second series, which organisation asks Ray Townsend for help with bamboo?|London Zoo|The National Trust|The Royal Navy|The British Library|Medium|Ray Townsend|London Zoo|bamboo garden|2005|plant expertise|institution support|Wakehurst Place`,
  `Which remote Atlantic island does Steve Alton visit for a seed-collecting trip in A Year at Kew?|St Helena|Madeira|Guernsey|Skye|Medium|Steve Alton|St Helena|Millennium Seed Bank|island plants|2005|endemic flora|seed expedition`,
  `Which part of the garden undergoes a lengthy pruning operation in A Year at Kew's St Helena episode?|The rose pergola|The bamboo tunnel|The alpine scree|The herbarium shelves|Medium|rose pergola|pruning|2005|St Helena episode|garden maintenance|seasonal horticulture|plant care`,
  `Who instructs a new member of the tree team in A Year at Kew's second series?|Andy McClure|Mike Fay|Geoffrey Kite|Stuart Cable|Hard|Andy McClure|tree surgeon|new recruit|training|2005|arboretum team|practical tree care`,
  `Which ancient tree species does Tony Kirkham struggle to save in the second series of A Year at Kew?|Ginkgo biloba|Coconut palm|Norway spruce|Scots pine|Medium|Tony Kirkham|Ginkgo biloba|old specimen|arboretum|2005|tree conservation|Mycology episode`,
  `Which group of organisms is surveyed by Kew's mycology department in A Year at Kew?|Fungi|Birds|Marine mammals|Reptiles|Easy|mycology|fungal survey|mushrooms|2005|plant science|woodland ecology|scientific department`,
  `Who makes a special Remembrance Sunday wreath in A Year at Kew's second series?|Roselle Andrews|Emma Fox|Sarah Smith|Kath King|Hard|Roselle Andrews|Remembrance Sunday|wreath making|floral art|2005|commemoration|horticultural display`,
  `Which botanist resolves a Victorian dispute about plant classification in A Year at Kew?|Bill Baker|Pete Morris|Dave Barnes|Simon Cole|Medium|Bill Baker|Victorian taxonomy|plant names|2005|botanical classification|historical dispute|researcher`,
  `Which style of garden does Ray Townsend create by the Japanese Gateway in A Year at Kew?|A Zen garden|A formal Italian parterre|A desert rockery|An English rose maze|Medium|Ray Townsend|Zen garden|Japanese Gateway|2005|landscape design|Japanese horticulture|garden construction`,
  `How many chameleons seized by customs are given a temporary home at Kew in A Year at Kew?|Fifty|Five|Twelve|One hundred|Hard|50 chameleons|customs seizure|2005|animal welfare|exotic reptiles|Victorian Taxonomic Dispute|temporary care`,
  `Which artist's glass sculptures feature in an exhibition covered by A Year at Kew's second series?|Dale Chihuly|Henry Moore|Barbara Hepworth|David Hockney|Easy|Dale Chihuly|glass sculptures|2005 exhibition|Temperate House|installation art|garden visitors|art and nature`,
  `In A Year at Kew, which West African country is visited by Millennium Seed Bank collectors during the Chihuly exhibition episode?|Burkina Faso|Senegal|Ghana|Kenya|Hard|Burkina Faso|seed expedition|West Africa|2005|Millennium Seed Bank|fieldwork challenges|Chihuly episode`,
  `Keepers from which two Kew glasshouses compete at the RHS London Show in A Year at Kew?|Palm House and Temperate House|Alpine House and Orchid House|Waterlily House and Orangery|Kew Palace and Great Pagoda|Medium|Palm House|Temperate House|RHS London Show|2005|garden display competition|plant keepers|Chihuly episode`,
  `Which rare Australian tree attracts international press attention in A Year at Kew's second series?|Wollemi pine|Baobab|Monkey puzzle tree|Norfolk Island pine|Easy|Wollemi pine|Australia|rare conifer|2005|media attention|plant conservation|living fossil`,
  `To which African country does Michiel van Slageren travel for Millennium Seed Bank work in A Year at Kew?|Mali|Madagascar|Egypt|South Africa|Hard|Michiel van Slageren|Mali|seed collection|2005|West Africa|conservation expeditions|local knowledge`,
  `Which Kew curator tends the spirit-preserved botanical collection in A Year at Kew's Wollemi Pine episode?|Emma Treadwell|Roselle Andrews|Kath King|Sarah Smith|Hard|Emma Treadwell|spirit collection|preserved specimens|2005|Wollemi Pine episode|botanical curation|research collections`,
  `Which plants does Olwen Grace study for their chemical properties in A Year at Kew's second series?|Aloes|Rhododendrons|Daffodils|Bluebells|Medium|Olwen Grace|aloes|Jodrell Laboratory|plant chemistry|2005|botanical science|research compounds`,
  `About how many volunteers join a weed-removal effort in A Year at Kew's second series?|300|20|60|1000|Hard|300 volunteers|invasive weed|2005|conservation effort|garden work party|habitat restoration|community assistance`,
  `Which famous traveller opens the Alpine House in the 2007 series related to A Year at Kew?|Michael Palin|David Attenborough|Ranulph Fiennes|Alan Whicker|Easy|Michael Palin|Alpine House|2007 opening|celebrity guest|series three|travel presenter|garden building`,
  `Which country does Kew researcher Christine Leon visit during the 2007 series of A Year at Kew?|China|Mexico|Norway|Ethiopia|Medium|Christine Leon|China|plant hunters|2007|botanical expedition|historic collecting routes|series three`,
  `Which Wakehurst Place researcher works with historic seeds dating from 1801 in the 2007 A Year at Kew series?|Hugh Pritchard|Bill Baker|Jon Hammerton|Nigel Taylor|Hard|Hugh Pritchard|1801 seeds|Wakehurst Place|germination|2007|historic plant material|seed science`,
  `In the 2007 run of A Year at Kew, what does a heritage festival celebrate?|Kew's plants buildings and people|Only professional football|The history of space rockets|London underground trains|Medium|heritage festival|2007|garden history|staff and buildings|visitor events|series three|institution heritage`,
  `Who helps a local primary school create a pond and wildlife garden in the 2007 series of A Year at Kew?|Simon Cole|Phil Griffiths|Steve Alton|Ray Townsend|Medium|Simon Cole|school pond|wildlife garden|2007|environmental education|primary pupils|local community`,
  `Which Kew scientist helps with the investigation of a serious crime in the 2007 series of A Year at Kew?|Hazel Wilkinson|Emma Fox|Margaret Leigh|Roselle Andrews|Hard|Hazel Wilkinson|crime investigation|2007|forensic science|Kew research|episode six|scientific evidence`,
  `What extreme weather issue is examined in the 2007 A Year at Kew series as experts study how trees survive?|Drought|Heavy snowfall|Coastal flooding|Tornadoes|Medium|drought|hot July|tree survival|2007|climate stress|arboretum science|water shortages`,
  `Which Caribbean island do Kew staff visit during the later A Year at Kew episodes to help with planting?|Montserrat|Barbados|Trinidad|Jamaica|Medium|Montserrat|Caribbean|2007|vegetable planting|island conservation|overseas work|episode nine`,
  `What crops are planted by the Kew team on Montserrat in an episode of A Year at Kew?|Vegetables|Rice in paddies|Tea bushes|Cocoa plantations|Medium|Montserrat|vegetable planting|2007|horticultural assistance|local growing|overseas expedition|episode nine`,
  `What season is depicted in the final 2007 episode of A Year at Kew as staff plan for the future?|Winter|Spring|Summer|Autumn|Medium|deep winter|2007 finale|future planning|garden seasons|series conclusion|cold weather|staff preparation`,
  `What is the main purpose of the Millennium Seed Bank expeditions shown in A Year at Kew?|To conserve seeds of threatened plants|To stock supermarket fruit counters|To create artificial flowers|To breed aquarium fish|Easy|Millennium Seed Bank|threatened species|seed preservation|biodiversity|scientific missions|Madagascar|St Helena`,
  `Which type of Kew glasshouse is designed for plants from warmer tropical climates and frequently appears in A Year at Kew?|Palm House|Alpine House|Orangery|Kew Palace|Easy|Palm House|tropical plants|glasshouse|heat and humidity|Emma Fox|garden landmark|horticultural environment`,
  `Which laboratory features in A Year at Kew's episodes about plant DNA and chemical research?|Jodrell Laboratory|Cavendish Laboratory|Rutherford Laboratory|Daresbury Laboratory|Easy|Jodrell Laboratory|plant DNA|aloe chemical analysis|science facility|Kew research|botanical studies|Mike Fay`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 409: malformed row ${index + 1} (${parts.length} parts)`);
  }
  const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 409: invalid difficulty at row ${index + 1}`);
  }
  const question = stem.includes('A Year at Kew')
    ? stem
    : `In A Year at Kew, ${stem[0].toLowerCase()}${stem.slice(1)}`;
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(a => a.toLowerCase())).size !== 4) {
    throw new Error(`Pack 409: repeated answer option at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length !== 13) {
    throw new Error(`Pack 409: expected 13 distinct tags at row ${index + 1}, got ${tags.length}`);
  }
  return {
    id: `tv_${FIRST_ID + index}`,
    category: 'Television',
    question,
    answers,
    correctAnswer,
    difficulty,
    tags,
    dailyEligible: true
  };
});

module.exports = questions;
