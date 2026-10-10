
 // crossword_pack2.js
 // PuzzlePilot - 25 new crosswords (26-50)
 // Complete file. # is a black square.

 const clues = {
   ANCHOR: "Heavy object that holds a boat in place",
   BADGER: "Striped woodland mammal",
   BASKET: "Container woven for carrying things",
   BEACON: "Signal light used as a warning",
   BRIDGE: "Structure spanning a river or road",
   CANDLE: "Wax stick with a wick",
   CHERRY: "Small red stone fruit",
   CIRCLE: "Round shape with no corners",
   COBWEB: "Spun threads left by a spider",
   COMET: "Icy object with a tail near the Sun",
   COMPASS: "Instrument that shows direction",
   CRICKET: "Bat-and-ball sport played on a pitch",
   CURTAIN: "Fabric hanging across a window",
   DANCER: "Person who moves to music",
   DESERT: "Very dry region with little rain",
   DIAMOND: "Gemstone made of carbon",
   DOLPHIN: "Intelligent marine mammal",
   DRAGON: "Legendary fire-breathing creature",
   DRAWER: "Sliding storage compartment",
   EAGLE: "Large bird of prey",
   FALCON: "Fast-flying bird of prey",
   FEATHER: "Light covering of a bird",
   FOREST: "Large area of trees",
   FOSSIL: "Preserved remains of ancient life",
   FROST: "Ice crystals forming in cold weather",
   GALAXY: "Huge collection of stars",
   GARDEN: "Outdoor area for growing plants",
   GLACIER: "Slow-moving mass of ice",
   GUITAR: "Six-stringed musical instrument",
   HARBOUR: "Sheltered place where boats can moor",
   HELMET: "Protective headgear",
   HORIZON: "Line where sky seems to meet land",
   ISLAND: "Land surrounded by water",
   JACKET: "Short outer garment",
   KETTLE: "Appliance used to boil water",
   LADDER: "Equipment with rungs for climbing",
   LANTERN: "Portable light with a protective casing",
   LEMON: "Sour yellow citrus fruit",
   LIBRARY: "Place where books can be borrowed",
   LOCKET: "Small pendant that can hold a photograph",
   MARKET: "Place where traders sell goods",
   MELODY: "Sequence of musical notes",
   MIRROR: "Reflective surface used to see yourself",
   NAPKIN: "Cloth or paper used when eating",
   NEEDLE: "Thin pointed tool for sewing",
   OCEAN: "Vast body of salt water",
   ORANGE: "Citrus fruit with a brightly coloured peel",
   OTTER: "Playful semi-aquatic mammal",
   PALACE: "Grand residence of a monarch",
   PARROT: "Colourful bird that can mimic sounds",
   PASTRY: "Dough used for pies and tarts",
   PEPPER: "Seasoning often ground over food",
   PICNIC: "Meal eaten outdoors",
   PLANET: "Large body orbiting a star",
   POETRY: "Writing arranged in verse",
   POTTERY: "Objects made from fired clay",
   RABBIT: "Long-eared burrowing animal",
   RAINBOW: "Coloured arc visible after rain",
   RAVEN: "Large black bird related to a crow",
   RECIPE: "Instructions for preparing a dish",
   ROCKET: "Vehicle propelled by an engine into space",
   SAILOR: "Person who works aboard a ship",
   SCARF: "Long piece of fabric worn around the neck",
   SCENERY: "Natural features of a landscape",
   SCHOOL: "Place where pupils are taught",
   SEASIDE: "Area beside the coast",
   SHADOW: "Dark shape made when light is blocked",
   SKETCH: "Quick drawing made without much detail",
   SLIPPER: "Soft shoe worn indoors",
   SPARROW: "Small common garden bird",
   SPIDER: "Eight-legged creature that may spin webs",
   SPONGE: "Soft absorbent material used for cleaning",
   SQUIRREL: "Bushy-tailed tree-dwelling rodent",
   STATION: "Place where trains stop for passengers",
   SUNRISE: "Time when the Sun first appears",
   SUNSET: "Time when the Sun disappears below the horizon",
   SWEATER: "Knitted garment worn over a shirt",
   TIMBER: "Wood prepared for building",
   TOMATO: "Red fruit often used in salads",
   TORCH: "Handheld light powered by batteries",
   TRAVEL: "Go from one place to another",
   TROPHY: "Prize awarded for a victory",
   TUNNEL: "Passage running under the ground",
   VIOLIN: "Small bowed string instrument",
   WALNUT: "Nut with a deeply ridged shell",
   WATERFALL: "Stream of water dropping over a cliff",
   WEATHER: "Conditions of the atmosphere",
   WHISTLE: "High-pitched sound made by blowing air",
   WINTER: "Coldest season of the year",
   WIZARD: "Person believed to use magic",
   YOGHURT: "Thick fermented milk food",
   ZEBRA: "Striped African hoofed animal"
 };

 const raw = [
   {
     grid: ["#LEMON#", "####T##", "##E#T##", "#RAVEN#", "##G#R##", "##L####", "#ZEBRA#"],
     across: [["LEMON",0,1],["RAVEN",3,1],["ZEBRA",6,1]],
     down: [["OTTER",0,4],["EAGLE",2,2]]
   },
   {
     grid: ["##HARBOUR", "########A", "###COBWEB", "##L###I#B", "#NAPKIN#I", "##D###T#T", "##DRAWER#", "##E###R##", "FOREST###"],
     across: [["HARBOUR",0,2],["COBWEB",2,3],["NAPKIN",4,1],["DRAWER",6,2],["FOREST",8,0]],
     down: [["RABBIT",0,8],["WINTER",2,6],["LADDER",3,2]]
   },
   {
     grid: ["########E##", "##S##ISLAND", "##L###Q#G#R", "##I###U#L#A", "##P###I#E#W", "##PASTRY##E", "##E#U#R#C#R", "#ORANGE#O##", "####S#LEMON", "PLANET##E##", "####T#OTTER"],
     across: [["ISLAND",1,5],["PASTRY",5,2],["ORANGE",7,1],["LEMON",8,6],["PLANET",9,0],["OTTER",10,6]],
     down: [["EAGLE",0,8],["SLIPPER",1,2],["SQUIRREL",1,6],["DRAWER",1,10],["SUNSET",5,4],["COMET",6,8]]
   },
   {
     grid: ["##WHISTLE", "#D###C###", "#I#CHERRY", "#A#I#N##O", "#MARKET#G", "#O#C#R##H", "#N#L#Y##U", "#D#E####R", "####COMET"],
     across: [["WHISTLE",0,2],["CHERRY",2,3],["MARKET",4,1],["COMET",8,4]],
     down: [["SCENERY",0,5],["DIAMOND",1,1],["CIRCLE",2,3],["YOGHURT",2,8]]
   },
   {
     grid: ["#T#########", "#O#FOSSIL##", "#R###C#####", "#COBWEB####", "#H###N###P#", "##FOREST#O#", "O#R##R#O#T#", "TROPHY#M#T#", "T#S###RAVEN", "E#T####T#R#", "R###MELODY#"],
     across: [["FOSSIL",1,3],["COBWEB",3,1],["FOREST",5,2],["TROPHY",7,0],["RAVEN",8,6],["MELODY",10,4]],
     down: [["TORCH",0,1],["SCENERY",1,5],["POTTERY",4,9],["FROST",5,2],["TOMATO",5,7],["OTTER",6,0]]
   },
   {
     grid: ["#COMET#", "##C####", "##E##L#", "#EAGLE#", "##N##M#", "#####O#", "#RAVEN#"],
     across: [["COMET",0,1],["EAGLE",3,1],["RAVEN",6,1]],
     down: [["OCEAN",0,2],["LEMON",2,5]]
   },
   {
     grid: ["########S", "######W#W", "##SEASIDE", "##P###N#A", "#WALNUT#T", "##R###E#E", "#DRAWER#R", "##O######", "##WHISTLE"],
     across: [["SEASIDE",2,2],["WALNUT",4,1],["DRAWER",6,1],["WHISTLE",8,2]],
     down: [["SWEATER",0,8],["WINTER",1,6],["SPARROW",2,2]]
   },
   {
     grid: ["WEATHER####", "###O#######", "HELMET####W", "A##A####B#H", "R##T##E#A#I", "B#COMPASS#S", "O#I###G#K#T", "U#R###L#E#L", "R#C##KETTLE", "##L########", "#PEPPER####"],
     across: [["WEATHER",0,0],["HELMET",2,0],["COMPASS",5,2],["KETTLE",8,5],["PEPPER",10,1]],
     down: [["TOMATO",0,3],["HARBOUR",2,0],["WHISTLE",2,10],["BASKET",3,8],["EAGLE",4,6],["CIRCLE",5,2]]
   },
   {
     grid: ["MIRROR###", "##A###S##", "##B###H#L", "##B#D#A#A", "#WIZARD#N", "##T#N#O#T", "####C#W#E", "####E###R", "##HORIZON"],
     across: [["MIRROR",0,0],["WIZARD",4,1],["HORIZON",8,2]],
     down: [["RABBIT",0,2],["SHADOW",1,6],["LANTERN",2,8],["DANCER",3,4]]
   },
   {
     grid: ["####Y#R####", "W##TOMATO##", "A###G#I####", "TORCH#N#P##", "E###U#B#A#D", "R#HARBOUR#E", "F#E#T#W#R#S", "A#L#####O#E", "L#M#SWEATER", "L#E#######T", "#STATION###"],
     across: [["TOMATO",1,3],["TORCH",3,0],["HARBOUR",5,2],["SWEATER",8,4],["STATION",10,1]],
     down: [["YOGHURT",0,4],["RAINBOW",0,6],["WATERFALL",1,0],["PARROT",3,8],["DESERT",4,10],["HELMET",5,2]]
   },
   {
     grid: ["#OCEAN#", "##O####", "##M#F##", "#ZEBRA#", "##T#O##", "####S##", "##OTTER"],
     across: [["OCEAN",0,1],["ZEBRA",3,1],["OTTER",6,2]],
     down: [["COMET",0,2],["FROST",2,4]]
   },
   {
     grid: ["#BADGER##", "#R#######", "#I#SPONGE", "#D#E##E##", "#GLACIER#", "#E#S##D##", "##CIRCLE#", "###D##E##", "FOREST###"],
     across: [["BADGER",0,1],["SPONGE",2,3],["GLACIER",4,1],["CIRCLE",6,2],["FOREST",8,0]],
     down: [["BRIDGE",0,1],["SEASIDE",2,3],["NEEDLE",2,6]]
   },
   {
     grid: ["###PEPPER##", "###I######S", "BEACON####U", "R##N##OCEAN", "I##I###I##S", "D#SCENERY#E", "G####E#C##T", "E####E#L###", "##CANDLE###", "#####L#####", "KETTLE#####"],
     across: [["PEPPER",0,3],["BEACON",2,0],["OCEAN",3,6],["SCENERY",5,2],["CANDLE",8,2],["KETTLE",10,0]],
     down: [["PICNIC",0,3],["SUNSET",1,10],["BRIDGE",2,0],["CIRCLE",3,7],["NEEDLE",5,5]]
   },
   {
     grid: ["##RAINBOW", "#####A###", "##SLIPPER", "##P##K##A", "#VIOLIN#V", "##D##N##E", "##E#####N", "HARBOUR##", "#########"],
     across: [["RAINBOW",0,2],["SLIPPER",2,2],["VIOLIN",4,1],["HARBOUR",7,0]],
     down: [["NAPKIN",0,5],["SPIDER",2,2],["RAVEN",2,8]]
   },
   {
     grid: ["###SUNRISE#", "######E####", "##G#LOCKET#", "##U###I####", "C#I###P##W#", "R#TIMBER#E#", "I#A####O#A#", "CIRCLE#C#T#", "K######K#H#", "E######E#E#", "T###POTTERY"],
     across: [["SUNRISE",0,3],["LOCKET",2,4],["TIMBER",5,2],["CIRCLE",7,0],["POTTERY",10,4]],
     down: [["RECIPE",0,6],["GUITAR",2,2],["CRICKET",4,0],["WEATHER",4,9],["ROCKET",5,7]]
   },
   {
     grid: ["##TORCH", "#####O#", "#Z###M#", "#EAGLE#", "#B###T#", "FROST##", "#A#####"],
     across: [["TORCH",0,2],["EAGLE",3,1],["FROST",5,0]],
     down: [["COMET",0,5],["ZEBRA",2,1]]
   },
   {
     grid: ["##ANCHOR#", "####U###F", "###DRAWER", "##D#T###O", "#GALAXY#S", "##N#I###T", "#SCENERY#", "##E######", "#CRICKET#"],
     across: [["ANCHOR",0,2],["DRAWER",2,3],["GALAXY",4,1],["SCENERY",6,1],["CRICKET",8,1]],
     down: [["CURTAIN",0,4],["FROST",1,8],["DANCER",3,2]]
   },
   {
     grid: ["###########", "#####B#####", "J#SCARF####", "A####I#H###", "C####D#A##P", "K#BADGER##O", "E##N#E#B##T", "TORCH#COMET", "###H###U##E", "###O#MIRROR", "ZEBRA#####Y"],
     across: [["SCARF",2,2],["BADGER",5,2],["TORCH",7,0],["COMET",7,6],["MIRROR",9,5],["ZEBRA",10,0]],
     down: [["BRIDGE",1,5],["JACKET",2,0],["HARBOUR",3,7],["POTTERY",4,10],["ANCHOR",5,3]]
   },
   {
     grid: ["TRAVEL###", "#E######D", "#C#SAILOR", "#I#W####A", "#POETRY#G", "#E#A####O", "##STATION", "###E#####", "SCARF####"],
     across: [["TRAVEL",0,0],["SAILOR",2,3],["POETRY",4,1],["STATION",6,2],["SCARF",8,0]],
     down: [["RECIPE",0,1],["DRAGON",1,8],["SWEATER",2,3]]
   },
   {
     grid: ["####F######", "###LANTERN#", "####L######", "SKETCH#D###", "U###O##O#L#", "N#TUNNEL#E#", "R#O####P#M#", "I#M##SCHOOL", "SCARF##I#N#", "E#T####N###", "#COBWEB####"],
     across: [["LANTERN",1,3],["SKETCH",3,0],["TUNNEL",5,2],["SCHOOL",7,5],["SCARF",8,0],["COBWEB",10,1]],
     down: [["FALCON",0,4],["SUNRISE",3,0],["DOLPHIN",3,7],["LEMON",4,9],["TOMATO",5,2]]
   },
   {
     grid: ["##R####", "SCARF##", "##V##E#", "#ZEBRA#", "##N##G#", "#####L#", "##OTTER"],
     across: [["SCARF",1,0],["ZEBRA",3,1],["OTTER",6,2]],
     down: [["RAVEN",0,2],["EAGLE",2,5]]
   },
   {
     grid: ["#FOSSIL##", "#O######F", "#R##EAGLE", "#E#P#N##A", "#SKETCH#T", "#T#P#H##H", "###P#O##E", "###E#R##R", "SCARF####"],
     across: [["FOSSIL",0,1],["EAGLE",2,4],["SKETCH",4,1],["SCARF",8,0]],
     down: [["FOREST",0,1],["FEATHER",1,8],["ANCHOR",2,5],["PEPPER",3,3]]
   },
   {
     grid: ["######TORCH", "NAPKIN###O#", "E#A###L##M#", "E#L#SPONGE#", "D#A#L#C##T#", "L#CRICKET##", "E#E#P#E##F#", "####POTTERY", "####E####O#", "#PARROT##S#", "#########T#"],
     across: [["TORCH",0,6],["NAPKIN",1,0],["SPONGE",3,4],["CRICKET",5,2],["POTTERY",7,4],["PARROT",9,1]],
     down: [["COMET",0,9],["NEEDLE",1,0],["PALACE",1,2],["LOCKET",2,6],["SLIPPER",3,4],["FROST",6,9]]
   },
   {
     grid: ["###DRAGON", "######A##", "##SPARROW", "##W###D#A", "#NEEDLE#L", "##A###N#N", "KETTLE##U", "##E#####T", "MARKET###"],
     across: [["DRAGON",0,3],["SPARROW",2,2],["NEEDLE",4,1],["KETTLE",6,0],["MARKET",8,0]],
     down: [["GARDEN",0,6],["SWEATER",2,2],["WALNUT",2,8]]
   },
   {
     grid: ["C#L#######P", "ORANGE#H##A", "M#N####A##R", "P#T##MIRROR", "A#E#V##B##O", "S#RAINBOW#T", "S#N#O##U#F#", "####LIBRARY", "####I####O#", "##WINTER#S#", "#########T#"],
     across: [["ORANGE",1,0],["MIRROR",3,5],["RAINBOW",5,2],["LIBRARY",7,4],["WINTER",9,2]],
     down: [["COMPASS",0,0],["LANTERN",0,2],["PARROT",0,10],["HARBOUR",1,7],["VIOLIN",4,4],["FROST",6,9]]
   }
 ];

 const crosswordPack2 = raw.map((p, i) => ({
   id: `crossword_pack2_${String(i + 1).padStart(3, "0")}`,
   title: `Crossword ${i + 26}`,
   difficulty: p.grid.length === 11 ? "Hard" : "Medium",
   solution: p.grid.map(row => row.split("")),
   across: p.across.map(([answer, row, col]) => ({ answer, clue: clues[answer], row, col })),
   down: p.down.map(([answer, row, col]) => ({ answer, clue: clues[answer], row, col }))
 }));

 module.exports = crosswordPack2;
