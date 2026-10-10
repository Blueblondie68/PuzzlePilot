
 // crossword_pack4.js
 // PuzzlePilot crosswords 76-100. Complete file.
 // # represents a black square.

 const clues = {
   "BADGER": "Striped woodland mammal",
   "BASKET": "Container woven for carrying things",
   "BEACON": "Signal light used as a warning",
   "BISCUIT": "Sweet or savoury baked snack",
   "BRIDGE": "Structure spanning a river or road",
   "BUTTON": "Small fastener on a shirt",
   "CANDLE": "Wax stick with a wick",
   "CASTLE": "Fortified historic building",
   "CHERRY": "Small red stone fruit",
   "CIRCLE": "Round shape with no corners",
   "COBWEB": "Spun threads left by a spider",
   "COFFEE": "Drink made from roasted beans",
   "COMET": "Icy object with a tail near the Sun",
   "COMPASS": "Instrument that shows direction",
   "CORNER": "Place where two sides meet",
   "CRICKET": "Bat-and-ball sport played on a pitch",
   "DANCER": "Person who moves to music",
   "DESERT": "Very dry region with little rain",
   "DIAMOND": "Gemstone made of carbon",
   "DOLPHIN": "Intelligent marine mammal",
   "DRAGON": "Legendary fire-breathing creature",
   "DRAWER": "Sliding storage compartment",
   "EAGLE": "Large bird of prey",
   "ENGINE": "Machine that supplies power",
   "FIDDLE": "Informal name for a violin",
   "FLANNEL": "Soft cloth used for washing",
   "FLOWER": "Bloom of a plant",
   "FOREST": "Large area of trees",
   "FOSSIL": "Preserved remains of ancient life",
   "FROST": "Ice crystals forming in cold weather",
   "GALAXY": "Huge collection of stars",
   "GARDEN": "Outdoor area for growing plants",
   "GIRAFFE": "Tall animal with a long neck",
   "GLACIER": "Slow-moving mass of ice",
   "GUITAR": "Six-stringed musical instrument",
   "HARBOUR": "Sheltered place where boats can moor",
   "HORIZON": "Line where sky seems to meet land",
   "ISLAND": "Land surrounded by water",
   "JACKET": "Short outer garment",
   "JIGSAW": "Puzzle made from interlocking pieces",
   "JUNGLE": "Dense tropical vegetation",
   "LADDER": "Equipment with rungs for climbing",
   "LANTERN": "Portable light with a protective casing",
   "LEMON": "Sour yellow citrus fruit",
   "LOCKET": "Small pendant that can hold a photograph",
   "MAGNET": "Object that attracts iron",
   "MARKET": "Place where traders sell goods",
   "MEADOW": "Field of grass and wildflowers",
   "MELODY": "Sequence of musical notes",
   "MUSEUM": "Building displaying historic objects",
   "NEEDLE": "Thin pointed tool for sewing",
   "OCEAN": "Vast body of salt water",
   "ORANGE": "Citrus fruit with a brightly coloured peel",
   "ORCHARD": "Place where fruit trees grow",
   "OTTER": "Playful semi-aquatic mammal",
   "PALACE": "Grand residence of a monarch",
   "PARROT": "Colourful bird that can mimic sounds",
   "PLANET": "Large body orbiting a star",
   "POTTERY": "Objects made from fired clay",
   "RABBIT": "Long-eared burrowing animal",
   "RAINBOW": "Coloured arc visible after rain",
   "RAVEN": "Large black bird related to a crow",
   "ROCKET": "Vehicle propelled by an engine into space",
   "ROSEMARY": "Fragrant herb used in cooking",
   "SAILOR": "Person who works aboard a ship",
   "SCARF": "Long piece of fabric worn around the neck",
   "SCENERY": "Natural features of a landscape",
   "SCHOOL": "Place where pupils are taught",
   "SEASIDE": "Area beside the coast",
   "SHADOW": "Dark shape made when light is blocked",
   "SHOULDER": "Joint connecting arm and torso",
   "SILVER": "Shiny grey precious metal",
   "SLIPPER": "Soft shoe worn indoors",
   "SPARROW": "Small common garden bird",
   "SPIDER": "Eight-legged creature that may spin webs",
   "SQUIRREL": "Bushy-tailed tree-dwelling rodent",
   "STATION": "Place where trains stop for passengers",
   "SUNRISE": "Time when the Sun first appears",
   "SUNSET": "Time when the Sun disappears below the horizon",
   "SWEATER": "Knitted garment worn over a shirt",
   "TELESCOPE": "Instrument for viewing distant objects",
   "THUNDER": "Loud rumbling sound during a storm",
   "TIMBER": "Wood prepared for building",
   "TOMATO": "Red fruit often used in salads",
   "TORCH": "Handheld light powered by batteries",
   "TOUCAN": "Tropical bird with a large colourful bill",
   "TRAVEL": "Go from one place to another",
   "TROPHY": "Prize awarded for a victory",
   "TUNNEL": "Passage running under the ground",
   "TURTLE": "Shelled reptile often found in water",
   "VALLEY": "Low land between hills",
   "VELVET": "Soft fabric with a short thick pile",
   "VIOLIN": "Small bowed string instrument",
   "WALNUT": "Nut with a deeply ridged shell",
   "WEATHER": "Conditions of the atmosphere",
   "WHISTLE": "High-pitched sound made by blowing air",
   "WINDOW": "Glazed opening in a wall",
   "WINTER": "Coldest season of the year",
   "WIZARD": "Person believed to use magic",
   "YOGHURT": "Thick fermented milk food",
   "ZEBRA": "Striped African hoofed animal"
 };

 const raw = [
   {
     grid: ["#######", "##O####", "##C#T##", "#LEMON#", "##A#R##", "##N#C##", "####H##"],
     across: [["LEMON", 3, 1]],
     down: [["OCEAN", 1, 2], ["TORCH", 2, 4]]
   },
   {
     grid: ["########S", "##I#TORCH", "##S#O###A", "##L#U#B#D", "#DANCER#O", "##N#A#I#W", "##D#N#D##", "######G##", "#THUNDER#"],
     across: [["TORCH", 1, 4], ["DANCER", 4, 1], ["THUNDER", 8, 1]],
     down: [["SHADOW", 0, 8], ["ISLAND", 1, 2], ["TOUCAN", 1, 4], ["BRIDGE", 3, 6]]
   },
   {
     grid: ["O#####C##S#", "ROSEMARY#U#", "C#####I##N#", "H##GLACIER#", "A#F###K##I#", "R#LOCKET#S#", "D#A#O#T##E#", "##N#F######", "##N#F######", "#TELESCOPE#", "##L#E######"],
     across: [["ROSEMARY", 1, 0], ["GLACIER", 3, 3], ["LOCKET", 5, 2], ["TELESCOPE", 9, 1]],
     down: [["ORCHARD", 0, 0], ["CRICKET", 0, 6], ["SUNRISE", 0, 9], ["FLANNEL", 4, 2], ["COFFEE", 5, 4]]
   },
   {
     grid: ["########C", "####J#Z#O", "###MUSEUM", "##R#N#B#E", "#BADGER#T", "##B#L#A##", "COBWEB###", "##I######", "##TURTLE#"],
     across: [["MUSEUM", 2, 3], ["BADGER", 4, 1], ["COBWEB", 6, 0], ["TURTLE", 8, 2]],
     down: [["COMET", 0, 8], ["JUNGLE", 1, 4], ["ZEBRA", 1, 6], ["RABBIT", 3, 2]]
   },
   {
     grid: ["###COMPASS#", "##R#####C##", "#TOMATO#A##", "##S###TORCH", "B#E###T#F##", "E#MAGNET##P", "A#A#A#R###A", "CIRCLE####R", "O#Y#A#####R", "N###X#####O", "####YOGHURT"],
     across: [["COMPASS", 0, 3], ["TOMATO", 2, 1], ["TORCH", 3, 6], ["MAGNET", 5, 2], ["CIRCLE", 7, 0], ["YOGHURT", 10, 4]],
     down: [["SCARF", 0, 8], ["ROSEMARY", 1, 2], ["OTTER", 2, 6], ["BEACON", 4, 0], ["GALAXY", 5, 4], ["PARROT", 5, 10]]
   },
   {
     grid: ["ZEBRA##", "#A#####", "#G##C##", "#LEMON#", "#E##M##", "##OCEAN", "####T##"],
     across: [["ZEBRA", 0, 0], ["LEMON", 3, 1], ["OCEAN", 5, 2]],
     down: [["EAGLE", 0, 1], ["COMET", 2, 4]]
   },
   {
     grid: ["#RAINBOW#", "#####A##B", "###FIDDLE", "##L##G##A", "#MAGNET#C", "##D##R##O", "##D#####N", "##E######", "#TROPHY##"],
     across: [["RAINBOW", 0, 1], ["FIDDLE", 2, 3], ["MAGNET", 4, 1], ["TROPHY", 8, 1]],
     down: [["BADGER", 0, 5], ["BEACON", 1, 8], ["LADDER", 3, 2]]
   },
   {
     grid: ["DOLPHIN#S##", "####A###Q##", "#ZEBRA##U##", "####B###I#D", "####O###R#E", "#SHOULDER#S", "#U##R#R#E#E", "#N###SAILOR", "#S####W###T", "#E####E####", "#T##GARDEN#"],
     across: [["DOLPHIN", 0, 0], ["ZEBRA", 2, 1], ["SHOULDER", 5, 1], ["SAILOR", 7, 5], ["GARDEN", 10, 4]],
     down: [["HARBOUR", 0, 4], ["SQUIRREL", 0, 8], ["DESERT", 3, 10], ["SUNSET", 5, 1], ["DRAWER", 5, 6]]
   },
   {
     grid: ["BASKET#T#", "##U####O#", "##N####M#", "##R##M#A#", "#BISCUIT#", "##S##S#O#", "#VELVET##", "#####U###", "###TIMBER"],
     across: [["BASKET", 0, 0], ["BISCUIT", 4, 1], ["VELVET", 6, 1], ["TIMBER", 8, 3]],
     down: [["SUNRISE", 0, 2], ["TOMATO", 0, 7], ["MUSEUM", 3, 5]]
   },
   {
     grid: ["####T#LEMON", "WALNUT#N###", "I###R##G###", "Z##STATION#", "A###L##N###", "R#SWEATER##", "D#####R####", "##GUITAR###", "######V####", "######E####", "#WHISTLE###"],
     across: [["LEMON", 0, 6], ["WALNUT", 1, 0], ["STATION", 3, 3], ["SWEATER", 5, 2], ["GUITAR", 7, 2], ["WHISTLE", 10, 1]],
     down: [["TURTLE", 0, 4], ["ENGINE", 0, 7], ["WIZARD", 1, 0], ["TRAVEL", 5, 6]]
   },
   {
     grid: ["#######", "##LEMON", "#Z###C#", "#EAGLE#", "#B###A#", "#R###N#", "RAVEN##"],
     across: [["LEMON", 1, 2], ["EAGLE", 3, 1], ["RAVEN", 6, 0]],
     down: [["OCEAN", 1, 5], ["ZEBRA", 2, 1]]
   },
   {
     grid: ["#######M#", "TROPHY#A#", "###A###R#", "#I#L#J#K#", "#SEASIDE#", "#L#C#G#T#", "#A#E#S###", "#N##EAGLE", "#D###W###"],
     across: [["TROPHY", 1, 0], ["SEASIDE", 4, 1], ["EAGLE", 7, 4]],
     down: [["MARKET", 0, 7], ["PALACE", 1, 3], ["ISLAND", 3, 1], ["JIGSAW", 3, 5]]
   },
   {
     grid: ["###########", "#TROPHY####", "#####A#####", "CORNER#D###", "O#O##B#O#S#", "B#SCHOOL#P#", "W#E##U#P#A#", "E#M#ORCHARD", "B#A####I#R#", "##R#RAINBOW", "##Y######W#"],
     across: [["TROPHY", 1, 1], ["CORNER", 3, 0], ["SCHOOL", 5, 2], ["ORCHARD", 7, 4], ["RAINBOW", 9, 4]],
     down: [["HARBOUR", 1, 5], ["COBWEB", 3, 0], ["ROSEMARY", 3, 2], ["DOLPHIN", 3, 7], ["SPARROW", 4, 9]]
   },
   {
     grid: ["##DIAMOND", "#####A##A", "SCENERY#N", "#A###K##C", "#SILVER#E", "#T###T##R", "#L#######", "#ENGINE##", "#########"],
     across: [["DIAMOND", 0, 2], ["SCENERY", 2, 0], ["SILVER", 4, 1], ["ENGINE", 7, 1]],
     down: [["MARKET", 0, 5], ["DANCER", 0, 8], ["CASTLE", 2, 1]]
   },
   {
     grid: ["VIOLIN#J###", "A##A###U###", "L##N#R#N##R", "L##T#A#G##O", "E##E#I#L##S", "Y#ORANGE##E", "###N#B##O#M", "#####O##T#A", "#####WINTER", "########E#Y", "###DANCER##"],
     across: [["VIOLIN", 0, 0], ["ORANGE", 5, 2], ["WINTER", 8, 5], ["DANCER", 10, 3]],
     down: [["VALLEY", 0, 0], ["LANTERN", 0, 3], ["JUNGLE", 0, 7], ["RAINBOW", 2, 5], ["ROSEMARY", 2, 10], ["OTTER", 6, 8]]
   },
   {
     grid: ["COMET##", "#T#####", "#T###Z#", "#EAGLE#", "#R###B#", "#####R#", "##OCEAN"],
     across: [["COMET", 0, 0], ["EAGLE", 3, 1], ["OCEAN", 6, 2]],
     down: [["OTTER", 0, 1], ["ZEBRA", 2, 5]]
   },
   {
     grid: ["#######J#", "###H###A#", "###O#P#C#", "###R#O#K#", "#WHISTLE#", "###Z#T#T#", "#FLOWER##", "###N#R###", "#####Y###"],
     across: [["WHISTLE", 4, 1], ["FLOWER", 6, 1]],
     down: [["JACKET", 0, 7], ["HORIZON", 1, 3], ["POTTERY", 2, 5]]
   },
   {
     grid: ["##########O", "##S#WEATHER", "##L#H#####A", "##I#I##P##N", "D#P#S##A##G", "A#POTTERY#E", "N#E#L##R###", "CORNER#O###", "E######T###", "RAINBOW####", "###########"],
     across: [["WEATHER", 1, 4], ["POTTERY", 5, 2], ["CORNER", 7, 0], ["RAINBOW", 9, 0]],
     down: [["ORANGE", 0, 10], ["SLIPPER", 1, 2], ["WHISTLE", 1, 4], ["PARROT", 3, 7], ["DANCER", 4, 0]]
   },
   {
     grid: ["###B#####", "#P#U####F", "#O#TOMATO", "#T#T####S", "#TROPHY#S", "#E#N####I", "#R######L", "#YOGHURT#", "#########"],
     across: [["TOMATO", 2, 3], ["TROPHY", 4, 1], ["YOGHURT", 7, 1]],
     down: [["BUTTON", 0, 3], ["POTTERY", 1, 1], ["FOSSIL", 1, 8]]
   },
   {
     grid: ["#WINDOW####", "####R#####R", "##MEADOW##A", "####W#####I", "####E#####N", "##FOREST##B", "#C#R##P###O", "#O#A#JIGSAW", "#M#N##D####", "#ENGINE####", "#T#E##RAVEN"],
     across: [["WINDOW", 0, 1], ["MEADOW", 2, 2], ["FOREST", 5, 2], ["JIGSAW", 7, 5], ["ENGINE", 9, 1], ["RAVEN", 10, 6]],
     down: [["DRAWER", 0, 4], ["RAINBOW", 1, 10], ["ORANGE", 5, 3], ["SPIDER", 5, 6], ["COMET", 6, 1]]
   },
   {
     grid: ["####C##", "####O##", "#F##M##", "#RAVEN#", "#O##T##", "#S#####", "#TORCH#"],
     across: [["RAVEN", 3, 1], ["TORCH", 6, 1]],
     down: [["COMET", 0, 4], ["FROST", 2, 1]]
   },
   {
     grid: ["##SLIPPER", "#####L###", "###MEADOW", "##F##N##I", "#WINTER#Z", "##D##T##A", "##D#####R", "##L#####D", "CHERRY###"],
     across: [["SLIPPER", 0, 2], ["MEADOW", 2, 3], ["WINTER", 4, 1], ["CHERRY", 8, 0]],
     down: [["PLANET", 0, 5], ["WIZARD", 2, 8], ["FIDDLE", 3, 2]]
   },
   {
     grid: ["#####B#C##T", "G####U#A##E", "A####TUNNEL", "ROCKET#D##E", "D####O#L##S", "E#FLANNEL#C", "N#####E#O#O", "#TURTLE#C#P", "######D#K#E", "######L#E##", "#CASTLE#T##"],
     across: [["TUNNEL", 2, 5], ["ROCKET", 3, 0], ["FLANNEL", 5, 2], ["TURTLE", 7, 1], ["CASTLE", 10, 1]],
     down: [["BUTTON", 0, 5], ["CANDLE", 0, 7], ["TELESCOPE", 0, 10], ["GARDEN", 1, 0], ["NEEDLE", 5, 6], ["LOCKET", 5, 8]]
   },
   {
     grid: ["#####V##E", "###BEACON", "#####L##G", "##B##L##I", "#MAGNET#N", "##D##Y##E", "EAGLE####", "##E######", "GIRAFFE##"],
     across: [["BEACON", 1, 3], ["MAGNET", 4, 1], ["EAGLE", 6, 0], ["GIRAFFE", 8, 0]],
     down: [["VALLEY", 0, 5], ["ENGINE", 0, 8], ["BADGER", 3, 2]]
   },
   {
     grid: ["M#T#WHISTLE", "E#O####P###", "A#M#B##I###", "DRAWER#D###", "O#T#A##E##C", "W#ORCHARD#H", "#Z##O###R#E", "LEMON###A#R", "#B######G#R", "#R###MELODY", "RAVEN###N##"],
     across: [["WHISTLE", 0, 4], ["DRAWER", 3, 0], ["ORCHARD", 5, 2], ["LEMON", 7, 0], ["MELODY", 9, 5], ["RAVEN", 10, 0]],
     down: [["MEADOW", 0, 0], ["TOMATO", 0, 2], ["SPIDER", 0, 7], ["BEACON", 2, 4], ["CHERRY", 4, 10], ["DRAGON", 5, 8], ["ZEBRA", 6, 1]]
   }
 ];

 const crosswordPack4 = raw.map((p, i) => ({
   id: `crossword_pack4_${String(i + 1).padStart(3, "0")}`,
   title: `Crossword ${i + 76}`,
   difficulty: p.grid.length === 11 ? "Hard" : "Medium",
   solution: p.grid.map(row => row.split("")),
   across: p.across.map(([answer, row, col]) => ({
     answer, clue: clues[answer], row, col
   })),
   down: p.down.map(([answer, row, col]) => ({
     answer, clue: clues[answer], row, col
   }))
 }));

 module.exports = crosswordPack4;
