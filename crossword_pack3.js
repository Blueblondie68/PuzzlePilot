
 // crossword_pack3.js
 // PuzzlePilot crosswords 51-75 (25 new puzzles).
 // Complete file. # marks a black square.

 const clues = {
   "APRICOT": "Orange stone fruit often dried",
   "BALCONY": "Platform projecting from an upper floor",
   "BARNACLE": "Sea creature that clings to rocks",
   "BISCUIT": "Sweet or savoury baked snack",
   "BOOKCASE": "Furniture with shelves for books",
   "BOTTLE": "Container for liquids",
   "BUTTERFLY": "Insect with broad colourful wings",
   "BUTTON": "Small fastener on a shirt",
   "CARAVAN": "Towable home for holidays",
   "CARDIGAN": "Knitted jacket with buttons",
   "CAROUSEL": "Merry-go-round at a fairground",
   "CASTLE": "Fortified historic building",
   "CHIMNEY": "Structure carrying smoke from a fireplace",
   "CINNAMON": "Sweetly scented spice from tree bark",
   "COFFEE": "Drink made from roasted beans",
   "COMET": "Icy object with a tail near the Sun",
   "CORNER": "Place where two sides meet",
   "CROCODILE": "Large reptile with powerful jaws",
   "CUPBOARD": "Storage space with shelves and doors",
   "DAFFODIL": "Yellow spring flower",
   "EAGLE": "Large bird of prey",
   "ELEPHANT": "Large mammal with a trunk",
   "ENGINE": "Machine that supplies power",
   "ESCALATOR": "Moving staircase",
   "FIREPLACE": "Hearth where a fire burns",
   "FLANNEL": "Soft cloth used for washing",
   "FLOWER": "Bloom of a plant",
   "FOUNTAIN": "Decorative jet of water",
   "FROST": "Ice crystals forming in cold weather",
   "GIRAFFE": "Tall animal with a long neck",
   "GLOVES": "Hand coverings worn in cold weather",
   "HAMMER": "Tool used to drive in nails",
   "HEDGEHOG": "Spiny nocturnal garden mammal",
   "HOSPITAL": "Place where patients receive treatment",
   "ICEBERG": "Large floating mass of ice",
   "JIGSAW": "Puzzle made from interlocking pieces",
   "JUNGLE": "Dense tropical vegetation",
   "KOALA": "Australian marsupial that eats eucalyptus",
   "LEMON": "Sour yellow citrus fruit",
   "MACARONI": "Small curved pasta tubes",
   "MAGNET": "Object that attracts iron",
   "MARBLE": "Smooth stone used in sculpture",
   "MEADOW": "Field of grass and wildflowers",
   "MOUNTAIN": "Very high natural elevation of land",
   "MUSEUM": "Building displaying historic objects",
   "MUSHROOM": "Fungus with a cap and stalk",
   "OCEAN": "Vast body of salt water",
   "OCTOPUS": "Eight-armed sea creature",
   "ORCHARD": "Place where fruit trees grow",
   "OTTER": "Playful semi-aquatic mammal",
   "PANCAKE": "Flat cake cooked in a frying pan",
   "PEACOCK": "Bird whose male has a spectacular tail",
   "PENGUIN": "Flightless seabird of the southern hemisphere",
   "PILLOW": "Soft support for your head in bed",
   "POCKET": "Small pouch sewn into clothing",
   "RAILWAY": "Track system used by trains",
   "RAVEN": "Large black bird related to a crow",
   "RHUBARB": "Tart pink stalks used in crumbles",
   "RIBBON": "Narrow strip used for decoration",
   "ROBIN": "Red-breasted garden bird",
   "SATURN": "Planet famous for its rings",
   "SAUSAGE": "Seasoned minced meat in a casing",
   "SCARF": "Long piece of fabric worn around the neck",
   "SEAHORSE": "Small fish that swims upright",
   "SHELTER": "Place giving protection from weather",
   "SHOULDER": "Joint connecting arm and torso",
   "SILVER": "Shiny grey precious metal",
   "SOFA": "Upholstered seat for several people",
   "SPAGHETTI": "Long thin strands of pasta",
   "STARFISH": "Sea creature with radiating arms",
   "TEAPOT": "Pot used to brew and pour tea",
   "TICKET": "Pass allowing entry to an event",
   "TORCH": "Handheld light powered by batteries",
   "TOUCAN": "Tropical bird with a large colourful bill",
   "TRIANGLE": "Three-sided shape",
   "TRUMPET": "Brass instrument with three valves",
   "TURTLE": "Shelled reptile often found in water",
   "UMBRELLA": "Portable cover that keeps rain off",
   "UNICORN": "Legendary horse with a single horn",
   "VAMPIRE": "Folklore creature said to drink blood",
   "VELVET": "Soft fabric with a short thick pile",
   "VINEGAR": "Sour liquid used in dressings",
   "VOLCANO": "Mountain that can erupt with lava",
   "WINDOW": "Glazed opening in a wall",
   "ZEBRA": "Striped African hoofed animal",
 };

 const raw = [
   {
     grid: ["FROST##", "###C###", "#O#A###", "#TORCH#", "#T#F###", "#E#####", "#ROBIN#"],
     across: [["FROST", 0, 0], ["TORCH", 3, 1], ["ROBIN", 6, 1]],
     down: [["SCARF", 0, 3], ["OTTER", 2, 1]]
   },
   {
     grid: ["SHELTER##", "O#####A##", "F#U###I##", "A#N#G#L##", "#PILLOW##", "##C#O#A##", "##O#V#Y##", "CORNER###", "##N#S####"],
     across: [["SHELTER", 0, 0], ["PILLOW", 4, 1], ["CORNER", 7, 0]],
     down: [["SOFA", 0, 0], ["RAILWAY", 0, 6], ["UNICORN", 2, 2], ["GLOVES", 3, 4]]
   },
   {
     grid: ["SHOULDER#K#", "P#####L##O#", "A#UMBRELLA#", "G##U##P##L#", "H##S##H##A#", "E#RHUBARB##", "T##R##N####", "T#FOUNTAIN#", "I##O#######", "###MEADOW##", "###########"],
     across: [["SHOULDER", 0, 0], ["UMBRELLA", 2, 2], ["RHUBARB", 5, 2], ["FOUNTAIN", 7, 2], ["MEADOW", 9, 3]],
     down: [["SPAGHETTI", 0, 0], ["ELEPHANT", 0, 6], ["KOALA", 0, 9], ["MUSHROOM", 2, 3]]
   },
   {
     grid: ["##RHUBARB", "########O", "###MAGNET", "##J##L##T", "#RIBBON#L", "##G##V##E", "CASTLE###", "##A##SOFA", "##W######"],
     across: [["RHUBARB", 0, 2], ["MAGNET", 2, 3], ["RIBBON", 4, 1], ["CASTLE", 6, 0], ["SOFA", 7, 5]],
     down: [["BOTTLE", 0, 8], ["GLOVES", 2, 5], ["JIGSAW", 3, 2]]
   },
   {
     grid: ["#########R#", "###D#RIBBON", "SOFA###U#B#", "A##FOUNTAIN", "T##F###T#N#", "U#BOTTLE###", "R##D#E#R###", "N#GIRAFFE##", "###L#P#L###", "#####O#Y###", "POCKET#####"],
     across: [["RIBBON", 1, 5], ["SOFA", 2, 0], ["FOUNTAIN", 3, 3], ["BOTTLE", 5, 2], ["GIRAFFE", 7, 2], ["POCKET", 10, 0]],
     down: [["ROBIN", 0, 9], ["DAFFODIL", 1, 3], ["BUTTERFLY", 1, 7], ["SATURN", 2, 0], ["TEAPOT", 5, 5]]
   },
   {
     grid: ["#SCARF#", "##O####", "##M##E#", "#ZEBRA#", "##T##G#", "#####L#", "##OTTER"],
     across: [["SCARF", 0, 1], ["ZEBRA", 3, 1], ["OTTER", 6, 2]],
     down: [["COMET", 0, 2], ["EAGLE", 2, 5]]
   },
   {
     grid: ["##P#F###O", "##I#L###C", "##L#A#C#T", "##L#N#A#O", "#CORNER#P", "##W#E#A#U", "###GLOVES", "######A##", "#BUTTON##"],
     across: [["CORNER", 4, 1], ["GLOVES", 6, 3], ["BUTTON", 8, 1]],
     down: [["PILLOW", 0, 2], ["FLANNEL", 0, 4], ["OCTOPUS", 0, 8], ["CARAVAN", 2, 6]]
   },
   {
     grid: ["STARFISH###", "I#####O####", "L##C##F##M#", "V#BARNACLE#", "E##R#####A#", "R#CORNER#D#", "###U###I#O#", "JIGSAW#B#W#", "###E###B###", "#VOLCANO###", "#######N###"],
     across: [["STARFISH", 0, 0], ["BARNACLE", 3, 2], ["CORNER", 5, 2], ["JIGSAW", 7, 0], ["VOLCANO", 9, 1]],
     down: [["SILVER", 0, 0], ["SOFA", 0, 6], ["CAROUSEL", 2, 3], ["MEADOW", 2, 9], ["RIBBON", 5, 7]]
   },
   {
     grid: ["#########", "####P####", "MEADOW###", "####C###J", "#TICKET#I", "####E###G", "##OCTOPUS", "########A", "###WINDOW"],
     across: [["MEADOW", 2, 0], ["TICKET", 4, 1], ["OCTOPUS", 6, 2], ["WINDOW", 8, 3]],
     down: [["POCKET", 1, 4], ["JIGSAW", 3, 8]]
   },
   {
     grid: ["VOLCANO####", "E##U###C###", "L##PILLOW##", "V##B###F##B", "E##O###F##U", "T#MARBLE##T", "#K#R#O#E##T", "#O#D#T####O", "#A###TOUCAN", "#L###L#####", "CASTLE#####"],
     across: [["VOLCANO", 0, 0], ["PILLOW", 2, 3], ["MARBLE", 5, 2], ["TOUCAN", 8, 5], ["CASTLE", 10, 0]],
     down: [["VELVET", 0, 0], ["CUPBOARD", 0, 3], ["COFFEE", 1, 7], ["BUTTON", 3, 10], ["BOTTLE", 5, 5], ["KOALA", 6, 1]]
   },
   {
     grid: ["SCARF##", "###A###", "#C#V###", "#OCEAN#", "#M#N###", "#E#####", "OTTER##"],
     across: [["SCARF", 0, 0], ["OCEAN", 3, 1], ["OTTER", 6, 0]],
     down: [["RAVEN", 0, 3], ["COMET", 2, 1]]
   },
   {
     grid: ["#####I###", "#O#POCKET", "#R###E###", "#C###B##F", "#HAMMER#L", "#A###R##O", "#R#JIGSAW", "#D######E", "##VINEGAR"],
     across: [["POCKET", 1, 3], ["HAMMER", 4, 1], ["JIGSAW", 6, 3], ["VINEGAR", 8, 2]],
     down: [["ICEBERG", 0, 5], ["ORCHARD", 1, 1], ["FLOWER", 3, 8]]
   },
   {
     grid: ["P#CUPBOARD#", "O#####C####", "C#V###T####", "KOALA#O#J##", "E#M###P#U#R", "T#PENGUIN#A", "##I###S#G#I", "##R##S##L#L", "#MEADOW#E#W", "#####F####A", "####BALCONY"],
     across: [["CUPBOARD", 0, 2], ["KOALA", 3, 0], ["PENGUIN", 5, 2], ["MEADOW", 8, 1], ["BALCONY", 10, 4]],
     down: [["POCKET", 0, 0], ["OCTOPUS", 0, 6], ["VAMPIRE", 2, 2], ["JUNGLE", 3, 8], ["RAILWAY", 4, 10], ["SOFA", 7, 5]]
   },
   {
     grid: ["#BOTTLE##", "####U####", "SATURN###", "####T#H##", "#RAILWAY#", "#O##E#M##", "#B####M##", "GIRAFFE##", "#N####R##"],
     across: [["BOTTLE", 0, 1], ["SATURN", 2, 0], ["RAILWAY", 4, 1], ["GIRAFFE", 7, 0]],
     down: [["TURTLE", 0, 4], ["HAMMER", 3, 6], ["ROBIN", 4, 1]]
   },
   {
     grid: ["APRICOT####", "###C###F###", "###E#SILVER", "#M#B#H#O###", "#A#E#O#W###", "#CAROUSEL#E", "#A#G#L#R##N", "#R###D####G", "BOTTLE####I", "#N###RIBBON", "#I########E"],
     across: [["APRICOT", 0, 0], ["SILVER", 2, 5], ["CAROUSEL", 5, 1], ["BOTTLE", 8, 0], ["RIBBON", 9, 5]],
     down: [["ICEBERG", 0, 3], ["FLOWER", 1, 7], ["SHOULDER", 2, 5], ["MACARONI", 3, 1], ["ENGINE", 5, 10]]
   },
   {
     grid: ["FROST##", "##C####", "##E#Z##", "#RAVEN#", "##N#B##", "####R##", "##SCARF"],
     across: [["FROST", 0, 0], ["RAVEN", 3, 1], ["SCARF", 6, 2]],
     down: [["OCEAN", 0, 2], ["ZEBRA", 2, 4]]
   },
   {
     grid: ["###TICKET", "#####H##E", "BISCUIT#A", "#C###M##P", "#ENGINE#O", "#B###E##T", "#E###Y###", "#R#######", "#GIRAFFE#"],
     across: [["TICKET", 0, 3], ["BISCUIT", 2, 0], ["ENGINE", 4, 1], ["GIRAFFE", 8, 1]],
     down: [["CHIMNEY", 0, 5], ["TEAPOT", 0, 8], ["ICEBERG", 2, 1]]
   },
   {
     grid: ["#########C#", "TRUMPET##I#", "R##E#####N#", "I#CARDIGAN#", "A##D#####A#", "N#TOUCAN#M#", "G##W#O###O#", "L####ROBIN#", "E####N#####", "###ELEPHANT", "#####R#####"],
     across: [["TRUMPET", 1, 0], ["CARDIGAN", 3, 2], ["TOUCAN", 5, 2], ["ROBIN", 7, 5], ["ELEPHANT", 9, 3]],
     down: [["CINNAMON", 0, 9], ["TRIANGLE", 1, 0], ["MEADOW", 1, 3], ["CORNER", 5, 5]]
   },
   {
     grid: ["#TEAPOT##", "####E####", "TOUCAN###", "####C#B##", "#OCTOPUS#", "####C#T##", "#TICKET##", "######O##", "CARAVAN##"],
     across: [["TEAPOT", 0, 1], ["TOUCAN", 2, 0], ["OCTOPUS", 4, 1], ["TICKET", 6, 1], ["CARAVAN", 8, 0]],
     down: [["PEACOCK", 0, 4], ["BUTTON", 3, 6]]
   },
   {
     grid: ["#######SOFA", "ROBIN##E#I#", "##O####A#R#", "##O#C##H#E#", "##K#A##O#P#", "H#CORNER#L#", "A#A#O##S#A#", "MUSEUM#E#C#", "M#E#S####E#", "E##VELVET##", "R###L######"],
     across: [["SOFA", 0, 7], ["ROBIN", 1, 0], ["CORNER", 5, 2], ["MUSEUM", 7, 0], ["VELVET", 9, 3]],
     down: [["SEAHORSE", 0, 7], ["FIREPLACE", 0, 9], ["BOOKCASE", 1, 2], ["CAROUSEL", 3, 4], ["HAMMER", 5, 0]]
   },
   {
     grid: ["#KOALA#", "##C####", "##E#L##", "#RAVEN#", "##N#M##", "####O##", "ROBIN##"],
     across: [["KOALA", 0, 1], ["RAVEN", 3, 1], ["ROBIN", 6, 0]],
     down: [["OCEAN", 0, 2], ["LEMON", 2, 4]]
   },
   {
     grid: ["#########", "###SILVER", "#H#O####I", "#A#F#T##B", "#MEADOW#B", "#M###U##O", "PEACOCK#N", "#R###A###", "##FLANNEL"],
     across: [["SILVER", 1, 3], ["MEADOW", 4, 1], ["PEACOCK", 6, 0], ["FLANNEL", 8, 2]],
     down: [["SOFA", 1, 3], ["RIBBON", 1, 8], ["HAMMER", 2, 1], ["TOUCAN", 3, 5]]
   },
   {
     grid: ["##BOOKCASE#", "########H##", "H###ICEBERG", "E#####S#L##", "D##V##C#T#F", "G#PANCAKE#L", "E##M##L#R#A", "HOSPITAL##N", "O##I##T###N", "G#CROCODILE", "###E##R###L"],
     across: [["BOOKCASE", 0, 2], ["ICEBERG", 2, 4], ["PANCAKE", 5, 2], ["HOSPITAL", 7, 0], ["CROCODILE", 9, 2]],
     down: [["SHELTER", 0, 8], ["HEDGEHOG", 2, 0], ["ESCALATOR", 2, 6], ["VAMPIRE", 4, 3], ["FLANNEL", 4, 10]]
   },
   {
     grid: ["######S##", "###O##A#M", "#S#CASTLE", "#O#T##U#A", "#FLOWER#D", "#A#P##N#O", "###U####W", "SAUSAGE##", "#########"],
     across: [["CASTLE", 2, 3], ["FLOWER", 4, 1], ["SAUSAGE", 7, 0]],
     down: [["SATURN", 0, 6], ["OCTOPUS", 1, 3], ["MEADOW", 1, 8], ["SOFA", 2, 1]]
   },
   {
     grid: ["HEDGEHOG###", "A##########", "M#####G####", "MOUNTAIN###", "E###O#R###V", "R#RHUBARB#I", "##I#C#F#U#N", "##B#A#F#T#E", "ROBIN#E#T#G", "##O####SOFA", "PENGUIN#N#R"],
     across: [["HEDGEHOG", 0, 0], ["MOUNTAIN", 3, 0], ["RHUBARB", 5, 2], ["ROBIN", 8, 0], ["SOFA", 9, 7], ["PENGUIN", 10, 0]],
     down: [["HAMMER", 0, 0], ["GIRAFFE", 2, 6], ["TOUCAN", 3, 4], ["VINEGAR", 4, 10], ["RIBBON", 5, 2], ["BUTTON", 5, 8]]
   },
 ];

 const crosswordPack3 = raw.map((p, i) => ({
   id: `crossword_pack3_${String(i + 1).padStart(3, "0")}`,
   title: `Crossword ${i + 51}`,
   difficulty: p.grid.length === 11 ? "Hard" : "Medium",
   solution: p.grid.map(row => row.split("")),
   across: p.across.map(([answer, row, col]) => ({ answer, clue: clues[answer], row, col })),
   down: p.down.map(([answer, row, col]) => ({ answer, clue: clues[answer], row, col }))
 }));

 module.exports = crosswordPack3;
