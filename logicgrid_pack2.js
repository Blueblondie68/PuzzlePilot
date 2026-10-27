 // logicgrid_pack2.js
// PuzzlePilot Logic Grid Pack 2
// 100 original 3x3 puzzles (lg101–lg200).
// The clue sets have each been checked for one unique solution.

// Each answer corresponds to the person in the same position in rows.
// This returns exactly the same puzzle structure as Pack 1.
function puzzle(id, title, introduction, rowLabel, columnLabel, rows, columns, clues, answers) {
    return {
        id, title, introduction, rowLabel, columnLabel, rows, columns, clues,
        solution: Object.fromEntries(rows.map((row, i) => [row, answers[i]]))
    };
}

module.exports = [
    puzzle('lg101', 'Lighthouse Shift',
        'Three lighthouse volunteers each checked a different part of the building. Work out who checked what.',
        'Volunteer', 'Area',
        ['Ada', 'Miles', 'Suri'],
        ['Lantern Room', 'Engine Room', 'Stairwell'],
        [
            'Miles did not inspect the engine room.',
            'Ada inspected the lantern room.'
        ],
        ['Lantern Room', 'Stairwell', 'Engine Room']),

    puzzle('lg102', 'Mountain Rescue',
        'Three rescue workers each carried a different piece of equipment. Match each worker to their equipment.',
        'Rescuer', 'Equipment',
        ['Nia', 'Callum', 'Theo'],
        ['Safety Rope', 'Radio', 'Medical Kit'],
        [
            'Theo did not carry the safety rope.',
            'Callum did not carry the radio.',
            'Callum did not carry the safety rope.'
        ],
        ['Safety Rope', 'Medical Kit', 'Radio']),

    puzzle('lg103', 'Theatre Backstage',
        'Three stagehands each prepared a different backstage area. Work out who prepared which area.',
        'Stagehand', 'Area',
        ['Martha', 'Eli', 'Rosa'],
        ['Prop Table', 'Lighting Booth', 'Costume Rack'],
        [
            'Martha did not prepare the costume rack.',
            'Rosa did not prepare the lighting booth.',
            'Martha did not prepare the lighting booth.'
        ],
        ['Prop Table', 'Lighting Booth', 'Costume Rack']),

    puzzle('lg104', 'Coastal Survey',
        'Three volunteers each studied a different stretch of coastline. Match each volunteer to their area.',
        'Volunteer', 'Area',
        ['Jules', 'Bea', 'Oscar'],
        ['Rocky Shore', 'Sand Dunes', 'Salt Marsh'],
        [
            'Neither Oscar nor Jules surveyed the salt marsh.',
            'Oscar did not survey the sand dunes.'
        ],
        ['Sand Dunes', 'Salt Marsh', 'Rocky Shore']),

    puzzle('lg105', 'History Exhibition',
        'Three museum guides each presented a different historical exhibit. Work out who presented what.',
        'Guide', 'Exhibit',
        ['Imran', 'Florence', 'Kit'],
        ['Roman Coins', 'Viking Shield', 'Tudor Map'],
        [
            'Kit did not present either the viking shield or the roman coins.',
            'Florence did not present the roman coins.'
        ],
        ['Roman Coins', 'Viking Shield', 'Tudor Map']),

    puzzle('lg106', 'Harbour Patrol',
        'Three harbour officers each inspected a different vessel. Work out who inspected which vessel.',
        'Officer', 'Vessel',
        ['Leonie', 'Samir', 'Ben'],
        ['Fishing Trawler', 'Lifeboat', 'Harbour Tug'],
        [
            'Samir did not inspect the lifeboat.',
            'Ben inspected the fishing trawler.'
        ],
        ['Lifeboat', 'Harbour Tug', 'Fishing Trawler']),

    puzzle('lg107', 'Sailing Lessons',
        'Three beginners each practised a different sailing skill. Match each sailor to their skill.',
        'Sailor', 'Skill',
        ['Poppy', 'Finn', 'Aisha'],
        ['Bowline Knot', 'Tacking Manoeuvre', 'Mooring Technique'],
        [
            'Finn did not practise the tacking manoeuvre.',
            'Finn did not practise the mooring technique.',
            'Poppy did not practise the mooring technique.'
        ],
        ['Tacking Manoeuvre', 'Bowline Knot', 'Mooring Technique']),

    puzzle('lg108', 'Recycling Depot',
        'Three depot workers each sorted a different material. Work out who sorted what.',
        'Worker', 'Material',
        ['Owen', 'Tess', 'Amir'],
        ['Glass Bottles', 'Aluminium Cans', 'Cardboard'],
        [
            'Tess did not sort either the aluminium cans or the glass bottles.',
            'Owen did not sort the glass bottles.'
        ],
        ['Aluminium Cans', 'Cardboard', 'Glass Bottles']),

    puzzle('lg109', 'Community Radio',
        'Three radio presenters each hosted a different programme. Work out who hosted which show.',
        'Presenter', 'Programme',
        ['Freya', 'Dominic', 'Nell'],
        ['Morning News', 'Local Music', 'Book Reviews'],
        [
            'Nell did not host either the local music or the morning news.',
            'Freya did not host the morning news.'
        ],
        ['Local Music', 'Morning News', 'Book Reviews']),

    puzzle('lg110', 'Archaeology Dig',
        'Three archaeologists each uncovered a different object. Match each archaeologist to their find.',
        'Archaeologist', 'Find',
        ['Evie', 'Harun', 'Luca'],
        ['Clay Pot', 'Bronze Brooch', 'Stone Tool'],
        [
            'Evie did not uncover the stone tool.',
            'Evie did not uncover the bronze brooch.',
            'Harun did not uncover the stone tool.'
        ],
        ['Clay Pot', 'Bronze Brooch', 'Stone Tool']),

    puzzle('lg111', 'Winter Games',
        'Three competitors each entered a different winter event. Work out who entered what.',
        'Competitor', 'Event',
        ['Beck', 'Sofia', 'Rory'],
        ['Curling Event', 'Luge Event', 'Ski Jump Event'],
        [
            'Beck did not enter the ski jump event.',
            'Sofia entered the curling event.'
        ],
        ['Luge Event', 'Curling Event', 'Ski Jump Event']),

    puzzle('lg112', 'Festival Stages',
        'Three performers each appeared on a different festival stage. Work out who performed where.',
        'Performer', 'Stage',
        ['Ruby', 'Max', 'Anika'],
        ['Riverside Stage', 'Garden Stage', 'Main Stage'],
        [
            'Neither Max nor Ruby performed on the main stage.',
            'Ruby did not perform on the riverside stage.'
        ],
        ['Garden Stage', 'Riverside Stage', 'Main Stage']),

    puzzle('lg113', 'Postal Routes',
        'Three postal workers each covered a different delivery area. Match each worker to their area.',
        'Worker', 'Route',
        ['Noor', 'Henry', 'Elle'],
        ['Harbour Road', 'Oak Lane', 'Church Square'],
        [
            'Neither Noor nor Henry covered Oak Lane.',
            'Henry did not cover Church Square.'
        ],
        ['Church Square', 'Harbour Road', 'Oak Lane']),

    puzzle('lg114', 'Storytelling Night',
        'Three storytellers each narrated a different tale. Match each person to their story.',
        'Storyteller', 'Story',
        ['Agnes', 'Leo', 'Mina'],
        ['Lost Dragon', 'Magic Mirror', 'Secret Garden'],
        [
            'Mina did not narrate the secret garden.',
            'Leo did not narrate the secret garden.',
            'Leo did not narrate the lost dragon.'
        ],
        ['Secret Garden', 'Magic Mirror', 'Lost Dragon']),

    puzzle('lg115', 'Science Fair',
        'Three pupils each demonstrated a different science project. Work out who demonstrated what.',
        'Pupil', 'Project',
        ['Iris', 'Dylan', 'Sara'],
        ['Volcano Model', 'Solar Oven', 'Water Filter'],
        [
            'Dylan did not demonstrate the solar oven.',
            'Dylan did not demonstrate the water filter.',
            'Sara did not demonstrate the water filter.'
        ],
        ['Water Filter', 'Volcano Model', 'Solar Oven']),

    puzzle('lg116', 'Robotics Workshop',
        'Three engineers each tested a different robot. Work out who tested which robot.',
        'Engineer', 'Robot',
        ['Toby', 'Jade', 'Arlo'],
        ['Maze Rover', 'Sorting Arm', 'Walking Bot'],
        [
            'Jade tested the sorting arm.',
            'Toby did not test the maze rover.'
        ],
        ['Walking Bot', 'Sorting Arm', 'Maze Rover']),

    puzzle('lg117', 'Aquarium Feeding Time',
        'Three aquarists each fed a different tank of animals. Match the keeper to the tank.',
        'Keeper', 'Tank',
        ['Priya', 'Hugo', 'Cleo'],
        ['Jellyfish Tank', 'Turtle Tank', 'Reef Tank'],
        [
            'Cleo did not feed either the reef tank or the turtle tank.',
            'Hugo did not feed the turtle tank.'
        ],
        ['Turtle Tank', 'Reef Tank', 'Jellyfish Tank']),

    puzzle('lg118', 'Ice Rink Practice',
        'Three skaters each rehearsed a different routine. Work out who rehearsed what.',
        'Skater', 'Routine',
        ['Beth', 'Nico', 'Hal'],
        ['Spiral Sequence', 'Spin Routine', 'Jump Combination'],
        [
            'Beth did not rehearse the spin routine.',
            'Hal did not rehearse the spin routine.',
            'Beth did not rehearse the jump combination.'
        ],
        ['Spiral Sequence', 'Spin Routine', 'Jump Combination']),

    puzzle('lg119', 'Woodland Tracking',
        'Three rangers each monitored a different animal trail. Work out who monitored which trail.',
        'Ranger', 'Trail',
        ['Elena', 'Marcus', 'Zara'],
        ['Deer Trail', 'Badger Trail', 'Fox Trail'],
        [
            'Elena did not monitor the fox trail.',
            'Elena did not monitor the deer trail.',
            'Zara did not monitor the deer trail.'
        ],
        ['Badger Trail', 'Deer Trail', 'Fox Trail']),

    puzzle('lg120', 'Charity Auction',
        'Three bidders each won a different donated item. Match each bidder to their winning lot.',
        'Bidder', 'Lot',
        ['Eliza', 'Raj', 'Ollie'],
        ['Vintage Clock', 'Oil Painting', 'Silver Bracelet'],
        [
            'Ollie did not win either the vintage clock or the silver bracelet.',
            'Raj did not win the silver bracelet.'
        ],
        ['Silver Bracelet', 'Vintage Clock', 'Oil Painting']),

    puzzle('lg121', 'Pottery Studio',
        'Three potters each made a different ceramic item. Work out who made what.',
        'Potter', 'Piece',
        ['Iona', 'Benji', 'Farah'],
        ['Serving Bowl', 'Flower Vase', 'Tea Cup'],
        [
            'Iona made the serving bowl.',
            'Benji did not make the flower vase.'
        ],
        ['Serving Bowl', 'Tea Cup', 'Flower Vase']),

    puzzle('lg122', 'Climbing Centre',
        'Three climbers each completed a different indoor climbing route. Match each climber to their route.',
        'Climber', 'Route',
        ['Kian', 'Mabel', 'Rhea'],
        ['Blue Overhang', 'Green Slab', 'Red Corner'],
        [
            'Mabel did not complete the green slab.',
            'Mabel did not complete the blue overhang.',
            'Rhea did not complete the blue overhang.'
        ],
        ['Blue Overhang', 'Red Corner', 'Green Slab']),

    puzzle('lg123', 'Castle Tour',
        'Three visitors each explored a different part of an old castle. Work out who went where.',
        'Visitor', 'Area',
        ['Rosie', 'Naveen', 'Cole'],
        ['Great Hall', 'Watchtower', 'Dungeon'],
        [
            'Naveen did not explore the great hall.',
            'Rosie did not explore the watchtower.',
            'Naveen did not explore the watchtower.'
        ],
        ['Great Hall', 'Dungeon', 'Watchtower']),

    puzzle('lg124', 'Soup Kitchen',
        'Three volunteers each prepared a different meal item. Work out who prepared what.',
        'Volunteer', 'Dish',
        ['Omar', 'Lydia', 'Tilda'],
        ['Vegetable Stew', 'Bread Rolls', 'Rice Pudding'],
        [
            'Lydia did not prepare either the rice pudding or the bread rolls.',
            'Tilda did not prepare the bread rolls.'
        ],
        ['Bread Rolls', 'Vegetable Stew', 'Rice Pudding']),

    puzzle('lg125', 'Exhibition Garden',
        'Three exhibitors each designed a different garden feature. Match the exhibitors to their features.',
        'Exhibitor', 'Feature',
        ['Daisy', 'Felix', 'Mara'],
        ['Water Feature', 'Herb Bed', 'Stone Path'],
        [
            'Neither Mara nor Felix designed the herb bed.',
            'Mara did not design the stone path.'
        ],
        ['Herb Bed', 'Stone Path', 'Water Feature']),

    puzzle('lg126', 'Language Exchange',
        'Three learners each practised a different language. Match each learner to their language exercise.',
        'Learner', 'Exercise',
        ['Anya', 'George', 'Liv'],
        ['French Dialogue', 'Italian Speech', 'Spanish Song'],
        [
            'Liv practised the italian speech.',
            'Anya did not practise the french dialogue.'
        ],
        ['Spanish Song', 'French Dialogue', 'Italian Speech']),

    puzzle('lg127', 'Chess Club Finals',
        'Three finalists each received a different prize. Work out who received which prize.',
        'Finalist', 'Prize',
        ['Ethan', 'Reem', 'Olive'],
        ['Gold Trophy', 'Silver Medal', 'Bronze Medal'],
        [
            'Ethan did not receive the gold trophy.',
            'Olive did not receive the bronze medal.',
            'Olive did not receive the gold trophy.'
        ],
        ['Bronze Medal', 'Gold Trophy', 'Silver Medal']),

    puzzle('lg128', 'Costume Workshop',
        'Three dressmakers each sewed a different accessory. Match each maker to their accessory.',
        'Dressmaker', 'Accessory',
        ['Hana', 'Scott', 'Pia'],
        ['Velvet Cape', 'Feather Hat', 'Beaded Belt'],
        [
            'Neither Hana nor Pia sewed the feather hat.',
            'Pia did not sew the beaded belt.'
        ],
        ['Beaded Belt', 'Feather Hat', 'Velvet Cape']),

    puzzle('lg129', 'Local Newspaper',
        'Three reporters each covered a different local story. Work out who covered what.',
        'Reporter', 'Story',
        ['Theo', 'Millie', 'Ava'],
        ['Library Opening', 'School Concert', 'Bridge Repairs'],
        [
            'Neither Theo nor Millie covered the library opening.',
            'Theo did not cover the school concert.'
        ],
        ['Bridge Repairs', 'School Concert', 'Library Opening']),

    puzzle('lg130', 'Summer Camp Duties',
        'Three camp leaders each organised a different activity. Match each leader to their activity.',
        'Leader', 'Activity',
        ['Carys', 'Joel', 'Isla'],
        ['Orienteering', 'Campfire Songs', 'Nature Trail'],
        [
            'Joel did not organise the campfire songs.',
            'Carys did not organise the nature trail.',
            'Joel did not organise the nature trail.'
        ],
        ['Campfire Songs', 'Orienteering', 'Nature Trail']),

    puzzle('lg131', 'Wetland Reserve',
        'Three wardens each checked a different habitat. Match each warden to their habitat.',
        'Warden', 'Habitat',
        ['Tariq', 'Nora', 'Alfie'],
        ['Reed Bed', 'Pond Edge', 'Willow Grove'],
        [
            'Nora did not inspect the willow grove.',
            'Tariq inspected the reed bed.'
        ],
        ['Reed Bed', 'Pond Edge', 'Willow Grove']),

    puzzle('lg132', 'Canal Adventure',
        'Three visitors each hired a different canal boat. Work out who hired which boat.',
        'Visitor', 'Boat',
        ['Clara', 'Mason', 'Zoe'],
        ['Blue Heron', 'Little Otter', 'Copper Finch'],
        [
            'Neither Clara nor Mason hired the little otter.',
            'Mason did not hire the copper finch.'
        ],
        ['Copper Finch', 'Blue Heron', 'Little Otter']),

    puzzle('lg133', 'Cycle Repair Shop',
        'Three mechanics each repaired a different bicycle part. Work out who repaired what.',
        'Mechanic', 'Part',
        ['Louis', 'Kemi', 'Grace'],
        ['Chain', 'Brake Cable', 'Wheel Hub'],
        [
            'Neither Grace nor Kemi repaired the chain.',
            'Kemi did not repair the wheel hub.'
        ],
        ['Chain', 'Brake Cable', 'Wheel Hub']),

    puzzle('lg134', 'Jewellery Studio',
        'Three makers each crafted a different piece of jewellery. Match each maker to their creation.',
        'Maker', 'Piece',
        ['Meera', 'Joe', 'Alice'],
        ['Pearl Pendant', 'Copper Ring', 'Silver Brooch'],
        [
            'Alice did not craft the copper ring.',
            'Joe did not craft the pearl pendant.',
            'Alice did not craft the pearl pendant.'
        ],
        ['Pearl Pendant', 'Copper Ring', 'Silver Brooch']),

    puzzle('lg135', 'Bake-Off Decorations',
        'Three contestants each created a different cake decoration. Work out who created which one.',
        'Baker', 'Decoration',
        ['Bella', 'Reuben', 'Ari'],
        ['Sugar Roses', 'Chocolate Curls', 'Marzipan Stars'],
        [
            'Bella did not create the marzipan stars.',
            'Bella did not create the chocolate curls.',
            'Reuben did not create the chocolate curls.'
        ],
        ['Sugar Roses', 'Marzipan Stars', 'Chocolate Curls']),

    puzzle('lg136', 'Weather Station',
        'Three weather observers each calibrated a different instrument. Work out who calibrated what.',
        'Observer', 'Instrument',
        ['Tara', 'Lewis', 'Imani'],
        ['Rain Gauge', 'Wind Vane', 'Barometer'],
        [
            'Tara calibrated the rain gauge.',
            'Imani did not calibrate the barometer.'
        ],
        ['Rain Gauge', 'Barometer', 'Wind Vane']),

    puzzle('lg137', 'National Park Paths',
        'Three hikers each followed a different marked trail. Match each hiker to their route.',
        'Hiker', 'Trail',
        ['Molly', 'Jasper', 'Faye'],
        ['Pine Loop', 'Ridge Walk', 'River Path'],
        [
            'Neither Jasper nor Faye followed the river path.',
            'Faye did not follow the ridge walk.'
        ],
        ['River Path', 'Ridge Walk', 'Pine Loop']),

    puzzle('lg138', 'Antique Restoration',
        'Three restorers each repaired a different antique. Work out who repaired what.',
        'Restorer', 'Antique',
        ['Hazel', 'Aiden', 'Esme'],
        ['Music Box', 'Oak Chair', 'Pocket Watch'],
        [
            'Aiden did not repair the music box.',
            'Esme did not repair the music box.',
            'Esme did not repair the pocket watch.'
        ],
        ['Music Box', 'Pocket Watch', 'Oak Chair']),

    puzzle('lg139', 'Food Truck Rally',
        'Three chefs each operated a different food stall. Match each chef to their stall.',
        'Chef', 'Stall',
        ['Rafi', 'Eloise', 'Maxine'],
        ['Noodle Van', 'Taco Van', 'Crepe Van'],
        [
            'Maxine did not operate the noodle van.',
            'Maxine did not operate the taco van.',
            'Eloise did not operate the taco van.'
        ],
        ['Taco Van', 'Noodle Van', 'Crepe Van']),

    puzzle('lg140', 'Balloon Festival',
        'Three pilots each flew a different hot-air balloon. Work out who flew which balloon.',
        'Pilot', 'Balloon',
        ['Ivy', 'Gabriel', 'Mona'],
        ['Sunburst', 'Cloud Hopper', 'Blue Horizon'],
        [
            'Mona did not fly either the blue horizon or the sunburst.',
            'Ivy did not fly the sunburst.'
        ],
        ['Blue Horizon', 'Sunburst', 'Cloud Hopper']),

    puzzle('lg141', 'Film Set Roles',
        'Three film crew members each prepared a different set location. Work out who prepared what.',
        'Crew Member', 'Set',
        ['Adam', 'Nyah', 'Rhys'],
        ['Cafe Interior', 'Rooftop Set', 'Forest Set'],
        [
            'Rhys prepared the rooftop set.',
            'Nyah did not prepare the forest set.'
        ],
        ['Forest Set', 'Cafe Interior', 'Rooftop Set']),

    puzzle('lg142', 'Music Rehearsal',
        'Three conductors each rehearsed a different musical passage. Match each conductor to their passage.',
        'Conductor', 'Passage',
        ['Dora', 'Alex', 'Sana'],
        ['Overture', 'Finale', 'Interlude'],
        [
            'Dora did not rehearse the interlude.',
            'Dora did not rehearse the finale.',
            'Sana did not rehearse the interlude.'
        ],
        ['Overture', 'Interlude', 'Finale']),

    puzzle('lg143', 'Wild Bird Count',
        'Three birdwatchers each recorded a different bird. Match each watcher to their sighting.',
        'Watcher', 'Bird',
        ['Jonah', 'Amber', 'Ken'],
        ['Kingfisher', 'Heron', 'Kestrel'],
        [
            'Jonah did not record the heron.',
            'Amber did not record the kingfisher.',
            'Amber did not record the heron.'
        ],
        ['Kingfisher', 'Kestrel', 'Heron']),

    puzzle('lg144', 'Railway Heritage Day',
        'Three museum workers each restored a different railway vehicle. Work out who restored which one.',
        'Worker', 'Vehicle',
        ['Ella', 'Hamid', 'Piers'],
        ['Steam Engine', 'Guard Van', 'Coal Wagon'],
        [
            'Neither Ella nor Piers restored the guard van.',
            'Ella did not restore the coal wagon.'
        ],
        ['Steam Engine', 'Guard Van', 'Coal Wagon']),

    puzzle('lg145', 'Marine Research Lab',
        'Three researchers each examined a different water sample. Match each scientist to their sample.',
        'Researcher', 'Sample',
        ['Sid', 'Rina', 'Bea'],
        ['Estuary Water', 'Reef Water', 'Harbour Water'],
        [
            'Neither Rina nor Bea examined the harbour water.',
            'Rina did not examine the reef water.'
        ],
        ['Harbour Water', 'Estuary Water', 'Reef Water']),

    puzzle('lg146', 'Bus Depot',
        'Three drivers each inspected a different bus before departure. Work out who inspected which bus.',
        'Driver', 'Bus',
        ['Bert', 'Jodie', 'Maya'],
        ['City Shuttle', 'Airport Coach', 'School Minibus'],
        [
            'Bert inspected the school minibus.',
            'Jodie did not inspect the city shuttle.'
        ],
        ['School Minibus', 'Airport Coach', 'City Shuttle']),

    puzzle('lg147', 'Allotment Harvest',
        'Three growers each harvested a different vegetable. Match each grower to their crop.',
        'Grower', 'Crop',
        ['Abi', 'Nathan', 'Yusuf'],
        ['Courgettes', 'Beetroot', 'Runner Beans'],
        [
            'Nathan did not harvest the courgettes.',
            'Abi did not harvest the runner beans.',
            'Abi did not harvest the courgettes.'
        ],
        ['Beetroot', 'Runner Beans', 'Courgettes']),

    puzzle('lg148', 'Escape Room Objects',
        'Three teammates each discovered a different hidden object. Work out who found what.',
        'Teammate', 'Object',
        ['Zain', 'Penny', 'Otis'],
        ['Brass Key', 'Secret Note', 'Small Compass'],
        [
            'Neither Otis nor Penny discovered the brass key.',
            'Penny did not discover the secret note.'
        ],
        ['Brass Key', 'Small Compass', 'Secret Note']),

    puzzle('lg149', 'Festival Craft Stalls',
        'Three stallholders each sold a different handmade product. Match each maker to their stall item.',
        'Maker', 'Product',
        ['Louisa', 'Damian', 'Jin'],
        ['Scented Candles', 'Leather Wallets', 'Woven Baskets'],
        [
            'Louisa did not sell either the leather wallets or the woven baskets.',
            'Jin did not sell the woven baskets.'
        ],
        ['Scented Candles', 'Woven Baskets', 'Leather Wallets']),

    puzzle('lg150', 'Painting Conservation',
        'Three conservators each restored a different type of painting. Work out who restored what.',
        'Conservator', 'Painting',
        ['Bianca', 'Alec', 'Priya'],
        ['Watercolour', 'Oil Portrait', 'Landscape Fresco'],
        [
            'Alec did not restore the oil portrait.',
            'Alec did not restore the watercolour.',
            'Bianca did not restore the oil portrait.'
        ],
        ['Watercolour', 'Landscape Fresco', 'Oil Portrait']),

    puzzle('lg151', 'Outdoor Skills',
        'Three instructors each taught a different wilderness skill. Work out who taught what.',
        'Instructor', 'Skill',
        ['Helen', 'Cai', 'Noel'],
        ['Map Reading Lesson', 'Fire Safety Lesson', 'Shelter Building Lesson'],
        [
            'Helen did not teach the map reading lesson.',
            'Noel taught the shelter building lesson.'
        ],
        ['Fire Safety Lesson', 'Map Reading Lesson', 'Shelter Building Lesson']),

    puzzle('lg152', 'Treasure Trail',
        'Three teams each recovered a different hidden token. Match each team to its discovery.',
        'Team', 'Token',
        ['Foxes', 'Owls', 'Badgers'],
        ['Silver Star', 'Bronze Bell', 'Golden Leaf'],
        [
            'Neither Badgers nor Foxes recovered the golden leaf.',
            'Foxes did not recover the silver star.'
        ],
        ['Bronze Bell', 'Golden Leaf', 'Silver Star']),

    puzzle('lg153', 'Space Station Duties',
        'Three astronauts each maintained a different station system. Match each astronaut to their assignment.',
        'Astronaut', 'System',
        ['Holly', 'Arun', 'Dan'],
        ['Air Filters', 'Solar Panels', 'Water Recycler'],
        [
            'Holly did not maintain either the solar panels or the air filters.',
            'Dan did not maintain the air filters.'
        ],
        ['Water Recycler', 'Air Filters', 'Solar Panels']),

    puzzle('lg154', 'Puppet Performance',
        'Three puppeteers each controlled a different character. Work out who controlled which puppet.',
        'Puppeteer', 'Puppet',
        ['Esther', 'Nico', 'Kim'],
        ['Wise Owl', 'Forest Fairy', 'Friendly Giant'],
        [
            'Esther did not control the friendly giant.',
            'Kim did not control the friendly giant.',
            'Esther did not control the wise owl.'
        ],
        ['Forest Fairy', 'Friendly Giant', 'Wise Owl']),

    puzzle('lg155', 'Weekend Workshops',
        'Three visitors each booked a different workshop. Match each visitor to their booking.',
        'Visitor', 'Workshop',
        ['Reggie', 'Alma', 'Farid'],
        ['Glass Painting', 'Wood Carving', 'Bookbinding'],
        [
            'Alma did not book the wood carving.',
            'Farid did not book the bookbinding.',
            'Farid did not book the wood carving.'
        ],
        ['Wood Carving', 'Bookbinding', 'Glass Painting']),

    puzzle('lg156', 'Snowy Wildlife',
        'Three trackers each photographed a different animal in the snow. Work out who photographed what.',
        'Tracker', 'Animal',
        ['Evan', 'Luna', 'Sofia'],
        ['Mountain Hare', 'Red Squirrel', 'Pine Marten'],
        [
            'Luna did not photograph the pine marten.',
            'Evan photographed the mountain hare.'
        ],
        ['Mountain Hare', 'Red Squirrel', 'Pine Marten']),

    puzzle('lg157', 'Park Restoration',
        'Three community volunteers each repaired a different park feature. Match each volunteer to their repair.',
        'Volunteer', 'Feature',
        ['Gus', 'Selina', 'Iris'],
        ['Footbridge', 'Picnic Bench', 'Noticeboard'],
        [
            'Selina did not repair either the footbridge or the noticeboard.',
            'Gus did not repair the footbridge.'
        ],
        ['Noticeboard', 'Picnic Bench', 'Footbridge']),

    puzzle('lg158', 'Museum Collections',
        'Three curators each catalogued a different set of objects. Work out who catalogued what.',
        'Curator', 'Collection',
        ['Marie', 'Tom', 'Zahir'],
        ['Fossil Shells', 'Old Postcards', 'Ancient Tiles'],
        [
            'Tom did not catalogue the fossil shells.',
            'Tom did not catalogue the ancient tiles.',
            'Marie did not catalogue the fossil shells.'
        ],
        ['Ancient Tiles', 'Old Postcards', 'Fossil Shells']),

    puzzle('lg159', 'Drama Auditions',
        'Three actors each auditioned for a different stage role. Work out who auditioned for what.',
        'Actor', 'Role',
        ['Nadia', 'Felix', 'Oscar'],
        ['Detective', 'Shopkeeper', 'Magician'],
        [
            'Felix did not audition for the shopkeeper.',
            'Nadia did not audition for the magician.',
            'Felix did not audition for the magician.'
        ],
        ['Shopkeeper', 'Detective', 'Magician']),

    puzzle('lg160', 'Constellation Watch',
        'Three amateur astronomers each observed a different constellation. Match each observer to their sighting.',
        'Observer', 'Constellation',
        ['Gina', 'Leo', 'Amara'],
        ['Orion', 'Cassiopeia', 'Cygnus'],
        [
            'Neither Amara nor Gina observed Orion.',
            'Gina did not observe Cassiopeia.'
        ],
        ['Cygnus', 'Orion', 'Cassiopeia']),

    puzzle('lg161', 'Camera Techniques',
        'Three photography students each practised a different camera technique. Work out who practised what.',
        'Student', 'Technique',
        ['Callie', 'Raj', 'Eli'],
        ['Long Exposure', 'Macro Focus', 'Panning'],
        [
            'Callie practised the macro focus.',
            'Raj did not practise the panning.'
        ],
        ['Macro Focus', 'Long Exposure', 'Panning']),

    puzzle('lg162', 'Steam Railway Excursion',
        'Three passengers each booked a different railway carriage. Match each passenger to their carriage.',
        'Passenger', 'Carriage',
        ['Fiona', 'Ned', 'Ola'],
        ['Dining Car', 'Observation Car', 'First-Class Car'],
        [
            'Ola did not book the first-class car.',
            'Ned did not book the observation car.',
            'Ola did not book the observation car.'
        ],
        ['Observation Car', 'First-Class Car', 'Dining Car']),

    puzzle('lg163', 'Forensic Science Lab',
        'Three technicians each analysed a different type of sample. Match each technician to their sample.',
        'Technician', 'Sample',
        ['Emily', 'Toby', 'Nour'],
        ['Soil Sample', 'Ink Sample', 'Fibre Sample'],
        [
            'Nour did not analyse the ink sample.',
            'Nour did not analyse the fibre sample.',
            'Emily did not analyse the fibre sample.'
        ],
        ['Ink Sample', 'Fibre Sample', 'Soil Sample']),

    puzzle('lg164', 'Community Fun Run',
        'Three runners each signed up for a different fundraising challenge. Match each runner to their event.',
        'Runner', 'Challenge',
        ['Milan', 'Sasha', 'Gareth'],
        ['Relay Leg', 'Hill Sprint', 'Trail Loop'],
        [
            'Milan did not enter either the trail loop or the hill sprint.',
            'Sasha did not enter the hill sprint.'
        ],
        ['Relay Leg', 'Trail Loop', 'Hill Sprint']),

    puzzle('lg165', 'Game Design Studio',
        'Three designers each developed a different board-game feature. Work out who developed what.',
        'Designer', 'Feature',
        ['Amelia', 'Otto', 'Jules'],
        ['Dice Mechanic', 'Card Deck', 'Game Board'],
        [
            'Neither Jules nor Amelia developed the game board.',
            'Amelia did not develop the dice mechanic.'
        ],
        ['Card Deck', 'Game Board', 'Dice Mechanic']),

    puzzle('lg166', 'Apiary Inspection',
        'Three beekeepers each inspected a different hive. Work out who inspected which hive.',
        'Keeper', 'Hive',
        ['Noah', 'Lily', 'Khalid'],
        ['Orchard Hive', 'Meadow Hive', 'Woodland Hive'],
        [
            'Noah inspected the orchard hive.',
            'Khalid did not inspect the woodland hive.'
        ],
        ['Orchard Hive', 'Woodland Hive', 'Meadow Hive']),

    puzzle('lg167', 'Woodworking Fair',
        'Three craftspeople each carved a different wooden object. Match each craftsperson to their piece.',
        'Craftsperson', 'Piece',
        ['Hector', 'Ruby', 'Idris'],
        ['Spoon', 'Bird Figure', 'Small Box'],
        [
            'Hector did not carve the small box.',
            'Idris did not carve the small box.',
            'Idris did not carve the spoon.'
        ],
        ['Spoon', 'Small Box', 'Bird Figure']),

    puzzle('lg168', 'Wildlife Recovery Centre',
        'Three carers each looked after a different recovering animal. Work out who cared for which one.',
        'Carer', 'Animal',
        ['Jem', 'Aisha', 'Ben'],
        ['Hedgehog', 'Barn Owl', 'Otter'],
        [
            'Neither Jem nor Ben cared for the barn owl.',
            'Jem did not care for the hedgehog.'
        ],
        ['Otter', 'Barn Owl', 'Hedgehog']),

    puzzle('lg169', 'Yacht Race',
        'Three crew members each handled a different duty during the race. Match each sailor to their task.',
        'Crew Member', 'Duty',
        ['Esme', 'Gavin', 'Cleo'],
        ['Navigation', 'Sail Trim', 'Radio Calls'],
        [
            'Neither Cleo nor Esme managed the navigation.',
            'Cleo did not manage the radio calls.'
        ],
        ['Radio Calls', 'Navigation', 'Sail Trim']),

    puzzle('lg170', 'Lantern Parade',
        'Three artists each constructed a different illuminated lantern. Work out who made which lantern.',
        'Artist', 'Lantern',
        ['Paz', 'Lara', 'Max'],
        ['Moon', 'Fox', 'Swan'],
        [
            'Lara did not construct the fox.',
            'Paz did not construct the moon.',
            'Paz did not construct the fox.'
        ],
        ['Swan', 'Moon', 'Fox']),

    puzzle('lg171', 'Bookbinding Course',
        'Three students each bound a different type of notebook. Match each student to their project.',
        'Student', 'Notebook',
        ['Nina', 'Owen', 'Grace'],
        ['Sketchbook', 'Travel Journal', 'Recipe Book'],
        [
            'Nina bound the travel journal.',
            'Grace did not bind the recipe book.'
        ],
        ['Travel Journal', 'Recipe Book', 'Sketchbook']),

    puzzle('lg172', 'Vegetable Plot',
        'Three neighbours each planted a different root vegetable. Work out who planted what.',
        'Gardener', 'Vegetable',
        ['Andy', 'Leila', 'Sam'],
        ['Parsnips', 'Carrots', 'Turnips'],
        [
            'Neither Andy nor Sam planted the parsnips.',
            'Sam did not plant the turnips.'
        ],
        ['Turnips', 'Parsnips', 'Carrots']),

    puzzle('lg173', 'Mountain Tramway',
        'Three conductors each serviced a different tram. Match each conductor to their tram.',
        'Conductor', 'Tram',
        ['Zoe', 'Dani', 'Arthur'],
        ['Valley Car', 'Summit Car', 'Forest Car'],
        [
            'Neither Dani nor Arthur serviced the summit car.',
            'Arthur did not service the forest car.'
        ],
        ['Summit Car', 'Forest Car', 'Valley Car']),

    puzzle('lg174', 'Tea Blending',
        'Three tea makers each prepared a different loose-leaf blend. Match each maker to their blend.',
        'Maker', 'Blend',
        ['Orla', 'Pippa', 'Mira'],
        ['Mint Medley', 'Spiced Chai', 'Citrus Zest'],
        [
            'Mira did not prepare the citrus zest.',
            'Pippa did not prepare the citrus zest.',
            'Pippa did not prepare the spiced chai.'
        ],
        ['Citrus Zest', 'Mint Medley', 'Spiced Chai']),

    puzzle('lg175', 'Street Art Trail',
        'Three muralists each painted a different wall design. Work out who painted what.',
        'Muralist', 'Design',
        ['Tyler', 'Ava', 'Eden'],
        ['Sea Creatures', 'Geometric Shapes', 'Wild Flowers'],
        [
            'Eden did not paint the geometric shapes.',
            'Ava did not paint the geometric shapes.',
            'Eden did not paint the wild flowers.'
        ],
        ['Geometric Shapes', 'Wild Flowers', 'Sea Creatures']),

    puzzle('lg176', 'Model Railway Club',
        'Three hobbyists each built a different miniature railway scene. Match each person to their model.',
        'Member', 'Model',
        ['Patrick', 'Sonia', 'Zac'],
        ['Country Station', 'Stone Viaduct', 'Goods Yard'],
        [
            'Patrick built the country station.',
            'Sonia did not build the stone viaduct.'
        ],
        ['Country Station', 'Goods Yard', 'Stone Viaduct']),

    puzzle('lg177', 'Folk Dance Workshop',
        'Three dancers each practised a different traditional dance. Work out who practised what.',
        'Dancer', 'Dance',
        ['Connie', 'Ishan', 'Paula'],
        ['Ceilidh Reel', 'Morris Step', 'Polka'],
        [
            'Connie did not practise either the polka or the morris step.',
            'Ishan did not practise the morris step.'
        ],
        ['Ceilidh Reel', 'Polka', 'Morris Step']),

    puzzle('lg178', 'Library Archives',
        'Three archivists each digitised a different document collection. Match each archivist to their collection.',
        'Archivist', 'Collection',
        ['Mo', 'Leila', 'Finn'],
        ['Ship Logs', 'School Registers', 'Old Letters'],
        [
            'Mo did not digitise the old letters.',
            'Finn did not digitise the ship logs.',
            'Finn did not digitise the old letters.'
        ],
        ['Ship Logs', 'Old Letters', 'School Registers']),

    puzzle('lg179', 'Riverbank Clean-up',
        'Three volunteers each collected a different kind of litter. Work out who collected what.',
        'Volunteer', 'Litter',
        ['Nikki', 'Joel', 'Yara'],
        ['Plastic Bottles', 'Metal Cans', 'Food Wrappers'],
        [
            'Nikki did not collect the food wrappers.',
            'Yara did not collect the food wrappers.',
            'Nikki did not collect the metal cans.'
        ],
        ['Plastic Bottles', 'Food Wrappers', 'Metal Cans']),

    puzzle('lg180', 'Geology Field Trip',
        'Three students each studied a different rock sample. Match each student to their rock.',
        'Student', 'Rock',
        ['Faye', 'Ali', 'Martha'],
        ['Granite', 'Limestone', 'Slate'],
        [
            'Martha did not study either the limestone or the granite.',
            'Faye did not study the granite.'
        ],
        ['Limestone', 'Granite', 'Slate']),

    puzzle('lg181', 'Heritage Walking Tour',
        'Three tour guides each introduced a different local landmark. Work out who introduced what.',
        'Guide', 'Landmark',
        ['Nell', 'Tariq', 'Owen'],
        ['Old Mill', 'Stone Bridge', 'Clock Tower'],
        [
            'Nell introduced the stone bridge.',
            'Tariq did not introduce the old mill.'
        ],
        ['Stone Bridge', 'Clock Tower', 'Old Mill']),

    puzzle('lg182', 'Rock Pool Discovery',
        'Three young explorers each spotted a different rock-pool creature. Work out who spotted which one.',
        'Explorer', 'Creature',
        ['Lena', 'Omar', 'Bella'],
        ['Hermit Crab', 'Sea Anemone', 'Starfish'],
        [
            'Omar did not spot the starfish.',
            'Lena did not spot the starfish.',
            'Lena did not spot the sea anemone.'
        ],
        ['Hermit Crab', 'Sea Anemone', 'Starfish']),

    puzzle('lg183', 'Ice Sculpture Contest',
        'Three artists each carved a different ice sculpture. Match each artist to their sculpture.',
        'Artist', 'Sculpture',
        ['Kai', 'Rosa', 'Ellis'],
        ['Dolphin', 'Dragon', 'Swan'],
        [
            'Ellis did not carve the dragon.',
            'Ellis did not carve the dolphin.',
            'Rosa did not carve the dolphin.'
        ],
        ['Dolphin', 'Dragon', 'Swan']),

    puzzle('lg184', 'Night Safari',
        'Three visitors each observed a different nocturnal animal. Work out who observed which animal.',
        'Visitor', 'Animal',
        ['Marina', 'Tommy', 'Seth'],
        ['Aardvark', 'Bushbaby', 'Porcupine'],
        [
            'Neither Tommy nor Marina observed the porcupine.',
            'Marina did not observe the aardvark.'
        ],
        ['Bushbaby', 'Aardvark', 'Porcupine']),

    puzzle('lg185', 'Illustration Studio',
        'Three illustrators each drew a different scene for a storybook. Match each illustrator to their scene.',
        'Illustrator', 'Scene',
        ['Laura', 'Kofi', 'Millie'],
        ['Moonlit Forest', 'Castle Gate', 'Stormy Sea'],
        [
            'Neither Laura nor Kofi drew the moonlit forest.',
            'Kofi did not draw the stormy sea.'
        ],
        ['Stormy Sea', 'Castle Gate', 'Moonlit Forest']),

    puzzle('lg186', 'Outdoor Cinema Setup',
        'Three volunteers each assembled a different part of an outdoor cinema. Work out who assembled what.',
        'Volunteer', 'Equipment',
        ['Nico', 'Daria', 'Zoe'],
        ['Projector Stand', 'Screen Frame', 'Speaker Tower'],
        [
            'Daria assembled the speaker tower.',
            'Nico did not assemble the screen frame.'
        ],
        ['Projector Stand', 'Speaker Tower', 'Screen Frame']),

    puzzle('lg187', 'Traditional Weaving',
        'Three weavers each created a different fabric pattern. Work out who made what.',
        'Weaver', 'Pattern',
        ['Luca', 'Jaya', 'Abel'],
        ['Herringbone', 'Tartan Check', 'Diamond Weave'],
        [
            'Abel did not weave the tartan check.',
            'Luca did not weave the tartan check.',
            'Abel did not weave the diamond weave.'
        ],
        ['Diamond Weave', 'Tartan Check', 'Herringbone']),

    puzzle('lg188', 'Drone Club',
        'Three pilots each practised a different drone manoeuvre. Match each pilot to their flight.',
        'Pilot', 'Manoeuvre',
        ['Ed', 'Reem', 'Sasha'],
        ['Figure Eight', 'Hover Turn', 'Slalom Flight'],
        [
            'Neither Ed nor Sasha practised the hover turn.',
            'Sasha did not practise the slalom flight.'
        ],
        ['Slalom Flight', 'Hover Turn', 'Figure Eight']),

    puzzle('lg189', 'Railway Signals',
        'Three trainees each checked a different railway signal. Work out who checked what.',
        'Trainee', 'Signal',
        ['Penny', 'Hal', 'Yusuf'],
        ['Home Signal', 'Distant Signal', 'Shunting Signal'],
        [
            'Hal did not check either the distant signal or the shunting signal.',
            'Penny did not check the shunting signal.'
        ],
        ['Distant Signal', 'Home Signal', 'Shunting Signal']),

    puzzle('lg190', 'Coral Reef Watch',
        'Three divers each surveyed a different reef habitat. Work out who surveyed what.',
        'Diver', 'Habitat',
        ['Rana', 'Lucas', 'Edie'],
        ['Coral Garden', 'Seagrass Bed', 'Reef Wall'],
        [
            'Rana did not survey the seagrass bed.',
            'Lucas did not survey the seagrass bed.',
            'Lucas did not survey the reef wall.'
        ],
        ['Reef Wall', 'Coral Garden', 'Seagrass Bed']),

    puzzle('lg191', 'Planetarium Visits',
        'Three visitors each attended a different planetarium presentation. Match each visitor to their show.',
        'Visitor', 'Show',
        ['Sana', 'George', 'Evie'],
        ['Moon Missions', 'Distant Galaxies', 'Ringed Planets'],
        [
            'Evie did not attend the moon missions.',
            'Sana attended the distant galaxies.'
        ],
        ['Distant Galaxies', 'Moon Missions', 'Ringed Planets']),

    puzzle('lg192', 'Watercolour Class',
        'Three students each painted a different landscape. Work out who painted which view.',
        'Student', 'View',
        ['Annabel', 'Noor', 'Rhys'],
        ['Mountain Lake', 'Autumn Woods', 'Coastal Cliffs'],
        [
            'Neither Annabel nor Rhys painted the mountain lake.',
            'Rhys did not paint the coastal cliffs.'
        ],
        ['Coastal Cliffs', 'Mountain Lake', 'Autumn Woods']),

    puzzle('lg193', 'Historic Kitchens',
        'Three guides each demonstrated a different feature of an old-fashioned kitchen. Match each guide to their demonstration.',
        'Guide', 'Feature',
        ['Polly', 'Joel', 'Imogen'],
        ['Bread Oven', 'Open Hearth', 'Butter Churn'],
        [
            'Neither Joel nor Imogen demonstrated the open hearth.',
            'Joel did not demonstrate the bread oven.'
        ],
        ['Open Hearth', 'Butter Churn', 'Bread Oven']),

    puzzle('lg194', 'Seaside Rescue Training',
        'Three lifeguards each practised a different rescue technique. Work out who practised what.',
        'Lifeguard', 'Technique',
        ['Eloise', 'Kian', 'Adam'],
        ['Rescue Tube', 'Board Rescue', 'Shoreline Tow'],
        [
            'Adam did not practise the shoreline tow.',
            'Adam did not practise the rescue tube.',
            'Kian did not practise the rescue tube.'
        ],
        ['Rescue Tube', 'Shoreline Tow', 'Board Rescue']),

    puzzle('lg195', 'Glass Art Studio',
        'Three artists each decorated a different glass object. Match each artist to their piece.',
        'Artist', 'Object',
        ['Mira', 'Lola', 'Tenzin'],
        ['Vase', 'Window Panel', 'Serving Dish'],
        [
            'Mira did not decorate the serving dish.',
            'Tenzin did not decorate the vase.',
            'Mira did not decorate the vase.'
        ],
        ['Window Panel', 'Vase', 'Serving Dish']),

    puzzle('lg196', 'Community Choir',
        'Three singers each rehearsed a different vocal part. Work out who rehearsed which part.',
        'Singer', 'Part',
        ['Jasmine', 'Noah', 'Fatima'],
        ['Soprano', 'Alto', 'Tenor'],
        [
            'Noah did not rehearse the soprano.',
            'Jasmine rehearsed the alto.'
        ],
        ['Alto', 'Tenor', 'Soprano']),

    puzzle('lg197', 'Map-Making Challenge',
        'Three cartographers each illustrated a different map. Match each mapmaker to their project.',
        'Cartographer', 'Map',
        ['Emil', 'Grace', 'Talia'],
        ['Forest Trails', 'City Streets', 'Coastline'],
        [
            'Neither Emil nor Grace illustrated the forest trails.',
            'Emil did not illustrate the city streets.'
        ],
        ['Coastline', 'City Streets', 'Forest Trails']),

    puzzle('lg198', 'Fire Station Drills',
        'Three firefighters each practised a different emergency drill. Match each firefighter to their drill.',
        'Firefighter', 'Drill',
        ['Gail', 'Marcus', 'Rina'],
        ['Ladder Drill', 'Hose Drill', 'Search Drill'],
        [
            'Gail did not practise the hose drill.',
            'Gail did not practise the ladder drill.',
            'Rina did not practise the hose drill.'
        ],
        ['Search Drill', 'Hose Drill', 'Ladder Drill']),

    puzzle('lg199', 'River Ferry Duties',
        'Three crew members each maintained a different section of the ferry. Work out who maintained what.',
        'Crew Member', 'Section',
        ['Libby', 'Evan', 'Kora'],
        ['Engine Bay', 'Passenger Deck', 'Wheelhouse'],
        [
            'Kora did not maintain the passenger deck.',
            'Libby did not maintain the engine bay.',
            'Libby did not maintain the passenger deck.'
        ],
        ['Wheelhouse', 'Passenger Deck', 'Engine Bay']),

    puzzle('lg200', 'Renewable Energy Expo',
        'Three exhibitors each demonstrated a different clean-energy device. Work out who demonstrated which one.',
        'Exhibitor', 'Device',
        ['Saif', 'Hazel', 'Oliver'],
        ['Solar Charger', 'Wind Turbine', 'Water Wheel'],
        [
            'Saif did not demonstrate either the wind turbine or the solar charger.',
            'Oliver did not demonstrate the solar charger.'
        ],
        ['Water Wheel', 'Solar Charger', 'Wind Turbine'])

];
