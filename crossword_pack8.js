// crossword_pack8.js
// PuzzlePilot Crosswords 176-200
// 25 new fully crossed puzzles: five 7x7, ten 9x9 and ten 11x11.
// No answers shorter than four letters; no answer words reused from Packs 1-7.
// # means a black square. Row and column positions start at zero.

// Each used answer has one checked clue.
const clueText = `
ACETATE|Transparent plastic sheet used in art and packaging
ACROSTIC|Puzzle in which selected letters spell a hidden message
ADDER|Britain's only native venomous snake
AEROBICS|Exercises designed to increase heart and lung fitness
AIRSHIP|Large powered aircraft supported by gas
ALPHABET|Letters used to write a language
ANAGRAM|Word formed by rearranging another word's letters
ANTLER|Bony branching growth on a deer's head
ANVIL|Heavy metal block used by a blacksmith
ARCHWAY|Curved opening in a wall or building
ARMADILLO|Mammal with protective bony plates
ATTIC|Room or space directly beneath a roof
AXOLOTL|Aquatic salamander able to regrow lost limbs
BALLOON|Inflatable object often filled with helium
BASTION|Projecting part of a defensive wall
BATHTUB|Large container in which a person can bathe
BEEKEEPER|Person who maintains hives of honeybees
BEETROOT|Deep red root vegetable
BELUGA|White whale that inhabits Arctic waters
BISON|Large shaggy wild animal related to cattle
BLIZZARD|Severe snowstorm with strong winds
CALENDAR|Chart showing days and months of the year
CAMELLIA|Evergreen shrub with large rose-like flowers
CANDELABRA|Branched holder for several candles
CARNIVAL|Festive procession with costumes and music
CATKIN|Drooping cluster of tiny flowers on some trees
CAULDRON|Large metal pot used for cooking over a fire
CENTIPEDE|Many-legged invertebrate with one pair of legs per segment
CENTURY|Period of one hundred years
CHOPSTICK|One of a pair of slender eating utensils
CICADA|Insect known for its loud summer buzzing
CLASP|Fastening that holds two parts together
CLOVER|Plant with three-part leaves
COBALT|Metal used to make some deep blue pigments
COLLAGE|Artwork assembled from pieces of material
CONDUCTOR|Person who directs an orchestra
CONIFER|Tree or shrub that bears cones
COPPER|Reddish metal used in electrical wiring
CORKSCREW|Twisting tool for pulling corks from bottles
CORRUGATED|Having parallel ridges and grooves
COSTUME|Clothes worn to portray a character
CRAYON|Coloured wax stick used for drawing
CROSSBOW|Weapon that fires a bolt from a horizontal bow
CURLEW|Wading bird with a long downcurved bill
DAIRY|Farm or business producing milk products
DECANTER|Stoppered glass vessel for serving wine
DECORATION|Something added to make a place attractive
DIPLOMAT|Official representing a country abroad
DOVECOTE|Building or structure for keeping pigeons
DROMEDARY|Camel with a single hump
DUNGEON|Underground prison cell in a castle
EARRING|Decoration worn through or clipped to an ear
EARTHQUAKE|Sudden shaking of the ground
EBONY|Very dark dense timber
ECLIPSE|Event when one celestial body blocks another
ENDURANCE|Ability to continue despite difficulty or fatigue
ESTUARY|Where a river meets the sea
EXCAVATOR|Machine with a mechanical arm used for digging
EXPEDITION|Journey organised for a particular purpose
EYELASH|Hair growing along the edge of an eyelid
FANFARE|Short ceremonial flourish played on brass instruments
FENCING|Sport fought with foil epee or sabre
FLAMENCO|Spanish dance known for stamping and clapping
FLAMINGO|Tall pink wading bird
FLEECE|Warm woolly covering of a sheep
FLORIST|Person who sells and arranges flowers
FOOTPRINT|Mark left by someone's foot
FORMULA|Rule expressed in mathematical symbols
FRIGATE|Medium-sized naval warship
FURNACE|Enclosed structure generating very high heat
GARNET|Gemstone commonly found in shades of red
GINGER|Aromatic root used as a spice
GOBLET|Drinking cup with a stem
GOLDFISH|Small ornamental freshwater fish
GRAMOPHONE|Early device for playing records
GRAPEFRUIT|Large citrus fruit with a tangy taste
GUMBOOT|Waterproof rubber boot
HABITAT|Natural home of a plant or animal
HAMPER|Basket often filled with picnic food
HATCHET|Small axe with a short handle
HICCUP|Sudden involuntary spasm of the diaphragm
HIGHLANDS|Mountainous or elevated region
ICEHOUSE|Building once used to store ice
ICICLE|Pointed piece of ice hanging from a roof
IMPALA|African antelope noted for its leaps
INNKEEPER|Person who runs an inn
INVENTION|Something newly devised or created
IRRIGATION|Artificial watering of crops
KANGAROO|Australian marsupial that travels by hopping
KEYSTONE|Central wedge-shaped stone at the top of an arch
KIOSK|Small open-fronted booth or shop
LABYRINTH|Intricate network of paths or passages
LANDMARK|Recognisable feature used to identify a location
LEOPARD|Large spotted wild cat from Africa or Asia
LIFEBUOY|Floating ring thrown to someone in the water
LOTUS|Aquatic plant with showy flowers
LOZENGE|Small medicated sweet for soothing the throat
LYCHEE|Small tropical fruit with a rough red skin
MACKEREL|Fast-swimming sea fish with striped markings
MAGNOLIA|Tree or shrub with large cup-shaped flowers
MAGPIE|Black-and-white bird in the crow family
MANTELPIECE|Shelf above a fireplace
MAPLE|Tree whose sap can be made into syrup
MERMAID|Legendary female creature with a fish tail
MILKSHAKE|Sweet drink made with milk and flavouring
MIRAGE|Optical illusion often seen above hot roads
MONASTERY|Building where a community of monks lives
MONSOON|Seasonal wind often bringing heavy rain
MOONSTONE|Gem with a milky shimmering appearance
MOUNTAINEER|Person who climbs high peaks
MULCH|Covering spread on soil to retain moisture
MURAL|Large painting made on a wall
MYSTERY|Something difficult to explain or understand
NARWHAL|Arctic whale with a long spiral tusk
NEBULA|Cloud of gas and dust in space
NURSERY|Room or place where young children are cared for
OBSERVATORY|Building for viewing stars and planets
OMNIBUS|Collection of episodes or books in one edition
ORATOR|Skilled public speaker
OVATION|Enthusiastic applause from an audience
OVERTURE|Orchestral introduction to an opera or musical
PARACHUTE|Fabric canopy that slows a fall through the air
PARCEL|Package wrapped for posting
PERCUSSION|Musical instruments sounded by striking or shaking
PERFORMER|Person who entertains an audience
PINWHEEL|Toy that spins in the wind
PIONEER|Person who is among the first to explore or develop something
PLANETARIUM|Theatre displaying a simulated night sky
PLAYWRIGHT|Person who writes plays
POLLEN|Powder produced by flowers for reproduction
POPLAR|Tall fast-growing tree
PORCELAIN|Fine ceramic material fired at high temperature
POSTMAN|Person who delivers letters and parcels
POTTER|Person who shapes objects from clay
PRAIRIE|Large area of grassland in North America
PUMPKIN|Large orange squash used at Halloween
QUADRANT|One of four sections of a circle
QUENCH|Satisfy thirst or cool something by immersion
RASPBERRY|Soft red fruit made up of small drupelets
REDWOOD|Very tall coniferous tree
REFLECTION|Image seen in a mirror or still water
RICOCHET|Rebound off a surface after a glancing impact
RIVERMOUTH|Place where a river meets the sea
ROCKETSHIP|Vehicle designed for travel into space
ROWBOAT|Small boat propelled with oars
SAFARI|Journey to watch wild animals
SANDBANK|Raised area of sand in shallow water
SAUCER|Small dish placed beneath a cup
SCARECROW|Figure put in fields to frighten birds
SHIPWRECK|Remains of a vessel that sank
SHOEHORN|Curved aid used to slip a foot into a shoe
SHUTTLE|Vehicle that travels repeatedly between places
SIESTA|Rest or nap taken in the afternoon
SNAIL|Slow-moving mollusc often carrying a coiled shell
SORBET|Frozen dessert made from sweetened fruit juice
SPACESHIP|Vehicle designed for travel beyond Earth
SPATULA|Broad flat tool used to lift or spread food
STAIRWELL|Vertical space enclosing a staircase
STEEPLE|Tall pointed structure on top of a church
STOMACH|Organ that begins digesting food
SURGEON|Doctor who performs operations
SWEETCORN|Maize harvested for its sweet kernels
SWIMMER|Person who moves through water by swimming
TAMARIND|Tart tropical fruit used in sauces and chutneys
TARRAGON|Herb with a light aniseed flavour
TARTAN|Pattern of crossing coloured stripes
TEACUP|Small cup used for drinking tea
TEMPEST|Violent storm
TEMPLE|Building used for religious worship
TENEMENT|Building divided into several dwellings
TERRACOTTA|Reddish-brown clay used for pots and tiles
THEOREM|Mathematical statement proved by reasoning
THIMBLE|Small protective cap worn when sewing
THISTLE|Prickly plant often associated with Scotland
TIDALPOOL|Pool of seawater left among rocks at low tide
TIMETABLE|Schedule showing arrival or departure times
TOPHAT|Tall cylindrical formal hat
TOWNHALL|Public building where local government meets
TOWPATH|Path beside a canal once used by horses
TRACTOR|Farm vehicle used to pull machinery
TRADITION|Custom handed down through generations
TRAILER|Vehicle pulled behind another vehicle
TRAINEE|Person learning a job or skill
TRAPEZE|Hanging bar used by circus acrobats
TREADMILL|Machine for walking or running indoors
TROPICS|Warm region of the Earth around the equator
TROWEL|Small tool used for digging in a garden
UNIVERSE|All of space and everything within it
VICEROY|Official governing on behalf of a monarch
VIOLONCELLO|Full formal name for the cello
WASHBASIN|Bowl or fixture used for washing hands
WETLAND|Land saturated with water for much of the year
WINDPIPE|Tube carrying air to and from the lungs
WINTERCOAT|Warm outer garment worn in cold weather
WRISTWATCH|Timepiece worn on a strap around the wrist
ZODIAC|Band of constellations along the apparent path of the Sun
`;

const clues = Object.fromEntries(
    clueText.trim().split("\n").map(line => {
        const divider = line.indexOf("|");
        if (divider < 1) throw new Error("Bad crossword clue entry");
        return [
            line.slice(0, divider).trim(),
            line.slice(divider + 1).trim()
        ];
    })
);

// Complete grids: each slash separates a row.
const grids = [
    "#DAIRY#/C###O#Q/A#B#W#U/THIMBLE/K#S#O#N/I#O#A#C/N#N#T#H",
    "#TARTAN/##N##X#/##V##O#/THISTLE/##L##O#/#####T#/FORMULA",
    "C###V##/EARRING/N###C##/TROWEL#/U###R##/REDWOOD/Y###Y##",
    "B###W##/ANTLER#/S#E#T##/TRAILER/I#C#A##/O#U#N##/N#P#D##",
    "TEMPEST/#####A#/#L#K#U#/ZODIAC#/#T#O#E#/NURSERY/#S#K###",
    "##POSTMAN/#M###R###/#ALPHABET/#G###P###/INNKEEPER/#O###Z###/FLEECE###/#I#######/TARRAGON#",
    "COBALT###/R####O#M#/O#NARWHAL/S##D#P#C#/SANDBANK#/B##E#T#E#/O##R#H#R#/W######E#/###IMPALA",
    "#GOLDFISH/W##Y#####/I##C#P###/N##H#I#T#/DOVECOTE#/P##E#N#M#/I####E#P#/PINWHEEL#/E####R#E#",
    "#F#SORBET/#U####A##/ARMADILLO/#N####L##/KANGAROO#/#C##T#O##/KEYSTONE#/####I####/#MULCH###",
    "#M#POLLEN/#I#####Y#/#L#T#S#E#/#K#R#H#L#/#SPATULA#/#H#I#T#S#/GARNET#H#/#K#E#L###/TENEMENT#",
    "#STOMACH#/M###O#R##/E#FANFARE/R#L#A#Y##/MOONSTONE/A#R#T#N#B/I#I#E###O/D#SURGEON/##T#Y###Y",
    "WASHBASIN/##P######/QUADRANT#/##C##C##O/BEEKEEPER/##S##T##A/##H##A##T/#SIESTA#O/##P##E##R",
    "F####H###/L##SNAIL#/A##H#B##G/M##O#I##I/INVENTION/N##H#A##G/G#COSTUME/O##R####R/#OMNIBUS#",
    "ACROSTIC#/#H##C####/POPLAR#T#/#P##R##H#/#STEEPLE#/#T##C##O#/#I##R##R#/#C#COPPER/#K##W##M#",
    "RASPBERRY/I##O#####/C#TRACTOR/O##C#O#V#/CAMELLIA#/H##L#L#T#/E#SAFARI#/T##I#G#O#/#DUNGEON#",
    "#MONSOON#P#/E###T####L#/C#P#ARCHWAY/L#A#I####N#/I#R#R####E#/PLAYWRIGHT#/S#C#E####A#/E#H#L####R#/#CURLEW##I#/##T######U#/ICEHOUSE#M#",
    "#P#####B###/PERFORMER##/#R#L###E#C#/#CLASP#T#A#/#U#M###R#R#/#SWEETCORN#/#S#N#O#O#I#/HICCUP#T#V#/#O#O#H###A#/#N##PARCEL#/#####T#####",
    "########C##/OBSERVATORY/####O###N##/H#L#C#D#I##/A#A#K#I#F#F/MANTELPIECE/P#D#T#L#R#N/E#M#S#O###C/R#A#H#M###I/#IRRIGATION/##K#P#T###G",
    "##GOBLET###/#W##L###T##/#I#AIRSHIP#/#N##Z###M##/#T##Z###E##/TERRACOTTA#/#R##R###A#M/#CANDELABRA/#O######L#P/BATHTUB#E#L/#T########E",
    "#F###ICICLE/#O######O##/CONDUCTOR##/#T####R#K##/#P####E#S##/WRISTWATCH#/#I####D#R#M/ANAGRAM#E#U/#T####I#W#R/######L###A/##TIDALPOOL",
    "C#E#FRIGATE/O#X####U###/R#C#A##M#L#/R#A#E##B#I#/U#V#R##O#F#/GRAMOPHONE#/A#T#B##T#B#/TROPICS##U#/E#R#C####O#/D##ESTUARY#/###########",
    "##MYSTERY##/L###H######/A#C#I####H#/B#L#PUMPKIN/Y#O#W####G#/RIVERMOUTH#/I#E#E####L#/N#R#CICADA#/T###K####N#/H########D#/###UNIVERSE",
    "M#CAULDRON#/I#####E####/R#M#T#C##T#/A#A#R#A##O#/G#G#A#N##W#/EXPEDITION#/##I#I#E##H#/OVERTURE#A#/####I####L#/VIOLONCELLO/####N######",
    "##CENTIPEDE/E######R###/N####H#A###/DECORATION#/U####T#R###/REFLECTION#/A####H#E#E#/N####E###B#/C#POTTER#U#/E########L#/###CALENDAR",
    "###SWIMMER#/##T####O###/GRAPEFRUIT#/##M####N###/L#A####T#B#/EARTHQUAKE#/O#I####I#L#/P#N####N#U#/A#D#LOZENGE/R######E#A#/DROMEDARY##"
];

function buildPuzzle(gridText, index) {
    const rows = gridText.split("/");
    const size = rows.length;

    if (![7, 9, 11].includes(size) ||
        rows.some(row => row.length !== size || /[^A-Z#]/.test(row))) {
        throw new Error(`Invalid grid for Crossword ${index + 176}`);
    }

    const solution = rows.map(row => row.split(""));

    function findAnswers(direction) {
        const down = direction === "down";
        const stepRow = down ? 1 : 0;
        const stepCol = down ? 0 : 1;
        const entries = [];

        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                if (solution[row][col] === "#") continue;

                const beforeRow = row - stepRow;
                const beforeCol = col - stepCol;

                if (beforeRow >= 0 && beforeCol >= 0 &&
                    solution[beforeRow][beforeCol] !== "#") continue;

                let answer = "";

                for (let r = row, c = col;
                     r < size && c < size && solution[r][c] !== "#";
                     r += stepRow, c += stepCol) {
                    answer += solution[r][c];
                }

                if (answer.length === 1) continue;

                if (answer.length < 4) {
                    throw new Error(`Short answer in Crossword ${index + 176}`);
                }

                const clue = clues[answer];

                if (!clue) {
                    throw new Error(`Missing clue for ${answer} in Crossword ${index + 176}`);
                }

                entries.push({ answer, clue, row, col });
            }
        }

        return entries;
    }

    const across = findAnswers("across");
    const down = findAnswers("down");

    if (across.length < 2 || down.length < 2) {
        throw new Error(`Too few crossings in Crossword ${index + 176}`);
    }

    return {
        id: `crossword_pack8_${String(index + 1).padStart(3, "0")}`,
        title: `Crossword ${index + 176}`,
        difficulty: size === 7 ? "Easy" : size === 9 ? "Medium" : "Hard",
        solution,
        across,
        down
    };
}

const crosswordPack8 = grids.map(buildPuzzle);

module.exports = crosswordPack8;
