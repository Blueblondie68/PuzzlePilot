// connections_pack2.js
// PuzzlePilot Connections — Pack 2
// 100 fresh puzzles: conn101–conn200
// Four groups of four uppercase tiles per puzzle.
// Pack 1 remains a separate file.

const connectionsPuzzles = [

    // PUZZLES 101–110
    { id: "conn101", groups: {
        "Parts of a violin": ["PEG", "BOW", "BRIDGE", "CHINREST"],
        "Parts of a camera": ["SHUTTER", "APERTURE", "VIEWFINDER", "FLASH"],
        "Parts of a bicycle helmet": ["VISOR", "STRAP", "VENT", "LINER"],
        "Parts of a sailing boat": ["KEEL", "RUDDER", "MAST", "BOOM"]
    } },
    { id: "conn102", groups: {
        "Words meaning LAUGH": ["CHUCKLE", "GIGGLE", "SNIGGER", "CACKLE"],
        "Words meaning CRY": ["SOB", "WEEP", "BAWL", "BLUB"],
        "Words meaning LOOK": ["GAZE", "STARE", "PEER", "GLANCE"],
        "Words meaning TALK": ["CHAT", "NATTER", "GAB", "CONVERSE"]
    } },
    { id: "conn103", groups: {
        "Tennis court surfaces": ["CLAY", "GRASS", "CARPET", "HARDCOURT"],
        "Boxing punches": ["JAB", "HOOK", "UPPERCUT", "CROSS"],
        "Snooker colours": ["YELLOW", "GREEN", "BROWN", "BLUE"],
        "Golf clubs": ["DRIVER", "PUTTER", "WEDGE", "IRON"]
    } },
    { id: "conn104", groups: {
        "Things used in KNITTING": ["YARN", "NEEDLES", "PATTERN", "STITCH MARKER"],
        "Things used in POTTERY": ["CLAY", "KILN", "WHEEL", "GLAZE"],
        "Things used in PAINTING": ["EASEL", "CANVAS", "PALETTE", "BRUSH"],
        "Things used in BAKING": ["WHISK", "SIEVE", "OVEN", "ROLLING PIN"]
    } },
    { id: "conn105", groups: {
        "Sounds made by DOGS": ["BARK", "GROWL", "WHINE", "YELP"],
        "Sounds made by CATS": ["PURR", "HISS", "MEOW", "YOWL"],
        "Sounds made by BIRDS": ["CHIRP", "TWEET", "SQUAWK", "TRILL"],
        "Sounds made by CATTLE": ["MOO", "LOW", "BELLOW", "SNORT"]
    } },
    { id: "conn106", groups: {
        "___ POST": ["LAMP", "FENCE", "SIGN", "GOAL"],
        "___ STAND": ["NIGHT", "UMBRELLA", "MUSIC", "NEWS"],
        "___ HOOK": ["FISH", "COAT", "BOAT", "CROCHET"],
        "___ RACK": ["BIKE", "SPICE", "WINE", "TOWEL"]
    } },
    { id: "conn107", groups: {
        "Greek gods": ["ZEUS", "ARES", "HERMES", "POSEIDON"],
        "Norse deities": ["ODIN", "THOR", "LOKI", "FREYA"],
        "Egyptian deities": ["RA", "OSIRIS", "ANUBIS", "ISIS"],
        "Roman deities": ["JUPITER", "MARS", "NEPTUNE", "MINERVA"]
    } },
    { id: "conn108", groups: {
        "Words for VERY COLD": ["FRIGID", "ICY", "ARCTIC", "FREEZING"],
        "Words for VERY HOT": ["SCORCHING", "BOILING", "SWELTERING", "BLISTERING"],
        "Words for VERY WET": ["SOAKED", "DRENCHED", "SODDEN", "SATURATED"],
        "Words for VERY DRY": ["PARCHED", "ARID", "DESICCATED", "BONE-DRY"]
    } },
    { id: "conn109", groups: {
        "Items in a barbershop": ["CLIPPERS", "RAZOR", "COMB", "CAPE"],
        "Items in a dentist's surgery": ["DRILL", "FLOSS", "PROBE", "MOUTHWASH"],
        "Items in a bakery": ["MIXER", "FLOUR", "TRAY", "DOUGH"],
        "Items in a florist's shop": ["VASE", "RIBBON", "SECATEURS", "BOUQUET"]
    } },
    { id: "conn110", groups: {
        "Marsupials": ["KANGAROO", "KOALA", "WOMBAT", "WALLABY"],
        "Primates": ["LEMUR", "BABOON", "MACAQUE", "GIBBON"],
        "Rodents": ["HAMSTER", "GERBIL", "CHINCHILLA", "BEAVER"],
        "Mustelids": ["OTTER", "WEASEL", "STOAT", "FERRET"]
    } },

    // PUZZLES 111–120
    { id: "conn111", groups: {
        "___ PRODUCTION": ["FILM", "STAGE", "MASS", "FOOD"],
        "___ CONTROL": ["CROWD", "REMOTE", "CRUISE", "DAMAGE"],
        "___ SYSTEM": ["SOLAR", "RAIL", "IMMUNE", "STEREO"],
        "___ SIGNAL": ["SMOKE", "RADIO", "DANGER", "DISTRESS"]
    } },
    { id: "conn112", groups: {
        "Things seen at a FUNERAL": ["HEARSE", "COFFIN", "MOURNER", "EULOGY"],
        "Things seen at a CHRISTENING": ["FONT", "GODPARENT", "BABY", "CANDLE"],
        "Things seen at a GRADUATION": ["GOWN", "MORTARBOARD", "DIPLOMA", "TASSEL"],
        "Things seen at a CORONATION": ["CROWN", "SCEPTRE", "THRONE", "ORB"]
    } },
    { id: "conn113", groups: {
        "Ways to preserve food": ["PICKLE", "SMOKE", "CURE", "FREEZE"],
        "Methods of mixing ingredients": ["WHISK", "BEAT", "FOLD", "STIR"],
        "Ways to slice vegetables": ["DICE", "JULIENNE", "CHOP", "MINCE"],
        "Ways to thicken a sauce": ["REDUCE", "SIMMER", "CORNSTARCH", "ROUX"]
    } },
    { id: "conn114", groups: {
        "Parts of a newspaper": ["MASTHEAD", "HEADLINE", "COLUMN", "EDITORIAL"],
        "Parts of a play": ["ACT", "SCENE", "MONOLOGUE", "EPILOGUE"],
        "Parts of a song": ["VERSE", "CHORUS", "BRIDGE", "REFRAIN"],
        "Parts of a letter": ["SALUTATION", "ADDRESS", "SIGNATURE", "DATE"]
    } },
    { id: "conn115", groups: {
        "Sounds in comics": ["POW", "BAM", "WHAM", "ZAP"],
        "Words meaning HESITATE": ["WAVER", "FALTER", "PAUSE", "STALL"],
        "Words meaning GRAB": ["SNATCH", "SEIZE", "CLUTCH", "GRASP"],
        "Words meaning ESCAPE": ["FLEE", "BOLT", "SCARPER", "LEG IT"]
    } },
    { id: "conn116", groups: {
        "Types of sailing vessel": ["YACHT", "SLOOP", "SCHOONER", "DINGHY"],
        "Types of aircraft": ["GLIDER", "BIPLANE", "HELICOPTER", "ZEPPELIN"],
        "Types of railway vehicle": ["LOCOMOTIVE", "TRAM", "DRAISINE", "HANDCAR"],
        "Types of road vehicle": ["MINIBUS", "VAN", "SCOOTER", "TRACTOR"]
    } },
    { id: "conn117", groups: {
        "Things you can TUNE": ["PIANO", "RADIO", "ENGINE", "VOICE"],
        "Things you can WIND": ["CLOCK", "SCARF", "FILM", "SPRING"],
        "Things you can DRAW": ["BATH", "PICTURE", "SALARY", "CONCLUSION"],
        "Things you can PASS": ["EXAM", "BALL", "TIME", "SALT"]
    } },
    { id: "conn118", groups: {
        "Spices": ["CUMIN", "PAPRIKA", "TURMERIC", "CARDAMOM"],
        "Nuts": ["CASHEW", "PECAN", "PISTACHIO", "HAZELNUT"],
        "Grains": ["BARLEY", "OATS", "RICE", "QUINOA"],
        "Seeds": ["SESAME", "POPPY", "LINSEED", "SUNFLOWER"]
    } },
    { id: "conn119", groups: {
        "Items used in camping": ["TENT", "PEG", "GROUNDSHEET", "STOVE"],
        "Items used in fishing": ["ROD", "REEL", "BAIT", "NET"],
        "Items used in climbing": ["HARNESS", "ROPE", "CARABINER", "CHALK"],
        "Items used in cycling": ["HELMET", "PUMP", "PANNIER", "LOCK"]
    } },
    { id: "conn120", groups: {
        "Types of pocket": ["HIP", "BREAST", "PATCH", "CARGO"],
        "Types of collar": ["MANDARIN", "SAILOR", "SPREAD", "PETER PAN"],
        "Types of sleeve": ["RAGLAN", "KIMONO", "PUFF", "BELL"],
        "Types of hem": ["ROLLED", "BLIND", "DOUBLE", "FACED"]
    } },

    // PUZZLES 121–130
    { id: "conn121", groups: {
        "Fictional detectives": ["POIROT", "MARPLE", "HOLMES", "MORSE"],
        "Fictional spies": ["BOND", "BOURNE", "SMILEY", "HUNT"],
        "Fictional pirates": ["HOOK", "FLINT", "SILVER", "SPARROW"],
        "Fictional wizards": ["MERLIN", "GANDALF", "DUMBLEDORE", "RINCEWIND"]
    } },
    { id: "conn122", groups: {
        "Things with BRISTLES": ["TOOTHBRUSH", "PAINTBRUSH", "BROOM", "SHAVING BRUSH"],
        "Things with SCALES": ["FISH", "SNAKE", "PIANO", "MAP"],
        "Things with FEATHERS": ["DUCK", "PILLOW", "SHUTTLECOCK", "BOA"],
        "Things with TENTACLES": ["OCTOPUS", "JELLYFISH", "ANEMONE", "SQUID"]
    } },
    { id: "conn123", groups: {
        "Terms in photography": ["EXPOSURE", "FOCUS", "ZOOM", "NEGATIVE"],
        "Terms in printing": ["INK", "PLATE", "PRESS", "PROOF"],
        "Terms in broadcasting": ["STUDIO", "AERIAL", "SIGNAL", "TRANSMITTER"],
        "Terms in publishing": ["MANUSCRIPT", "EDITOR", "IMPRINT", "ROYALTY"]
    } },
    { id: "conn124", groups: {
        "Synonyms for MISTAKE": ["BLUNDER", "ERROR", "GAFFE", "SLIP"],
        "Synonyms for TRICK": ["RUSE", "PLOY", "SCAM", "DECEPTION"],
        "Synonyms for CLUE": ["HINT", "TRACE", "SIGN", "LEAD"],
        "Synonyms for PROBLEM": ["DILEMMA", "PREDICAMENT", "DIFFICULTY", "TROUBLE"]
    } },
    { id: "conn125", groups: {
        "Types of pastry": ["FILO", "PUFF", "SHORTCRUST", "CHOUX"],
        "Types of biscuit": ["DIGESTIVE", "CUSTARD CREAM", "HOBNOB", "BOURBON"],
        "Types of pudding": ["TRIFLE", "SPOTTED DICK", "CRUMBLE", "ETON MESS"],
        "Types of preserve": ["MARMALADE", "JELLY", "CHUTNEY", "CURD"]
    } },
    { id: "conn126", groups: {
        "___ METER": ["PARKING", "SPEED", "WATER", "GAS"],
        "___ LOCK": ["PAD", "DEAD", "COMBINATION", "CANAL"],
        "___ TAPE": ["MASKING", "DUCT", "MEASURING", "VIDEO"],
        "___ BRIDGE": ["FOOT", "RAIL", "LAND", "SUSPENSION"]
    } },
    { id: "conn127", groups: {
        "Things you can PITCH": ["TENT", "IDEA", "BALL", "VOICE"],
        "Things you can LAUNCH": ["ROCKET", "BOAT", "PRODUCT", "APPEAL"],
        "Things you can PLANT": ["SEED", "TREE", "FLAG", "SPY"],
        "Things you can BUILD": ["HOUSE", "BRIDGE", "MUSCLE", "REPUTATION"]
    } },
    { id: "conn128", groups: {
        "Famous fictional bears": ["PADDINGTON", "POOH", "BALOO", "YOGI"],
        "Famous fictional rabbits": ["BUGS", "ROGER", "PETER", "THUMPER"],
        "Famous fictional dogs": ["SNOOPY", "SCOOBY", "LASSIE", "GROMIT"],
        "Famous fictional cats": ["GARFIELD", "FELIX", "TOP CAT", "TOM"]
    } },
    { id: "conn129", groups: {
        "Things a detective might find": ["FINGERPRINT", "FOOTPRINT", "ALIBI", "MOTIVE"],
        "Things a scientist might record": ["MEASUREMENT", "SAMPLE", "OBSERVATION", "READING"],
        "Things a gardener might plant": ["BULB", "SEED", "TUBER", "SAPLING"],
        "Things a chef might serve": ["STARTER", "MAIN", "DESSERT", "SIDE"]
    } },
    { id: "conn130", groups: {
        "Things with a SPINE": ["BOOK", "HEDGEHOG", "CACTUS", "HUMAN"],
        "Things with a NECK": ["GUITAR", "BOTTLE", "GIRAFFE", "SHIRT"],
        "Things with a TONGUE": ["SHOE", "BELL", "PERSON", "SNAKE"],
        "Things with a HEAD": ["NAIL", "DRUM", "LETTUCE", "COIN"]
    } },

    // PUZZLES 131–140
    { id: "conn131", groups: {
        "Words ending in -SHIP": ["FRIEND", "LEADER", "RELATION", "PARTNER"],
        "Words ending in -HOOD": ["CHILD", "NEIGHBOUR", "BROTHER", "ADULT"],
        "Words ending in -LESS": ["CARE", "HOME", "END", "FEAR"],
        "Words ending in -FUL": ["JOY", "HELP", "HOPE", "PEACE"]
    } },
    { id: "conn132", groups: {
        "___ BURST": ["STAR", "CLOUD", "OUT", "SUN"],
        "___ BITE": ["FROST", "SNAKE", "INSECT", "DOG"],
        "___ BEAT": ["HEART", "DRUM", "UP", "DOWN"],
        "___ WORM": ["BOOK", "EARTH", "TAPE", "SILK"]
    } },
    { id: "conn133", groups: {
        "Types of map": ["ROAD", "WEATHER", "ORDNANCE", "TOPOGRAPHIC"],
        "Types of chart": ["PIE", "BAR", "FLOW", "STAR"],
        "Types of diagram": ["VENN", "TREE", "CIRCUIT", "SCHEMATIC"],
        "Types of graph": ["HISTOGRAM", "SCATTER", "LINE", "AREA"]
    } },
    { id: "conn134", groups: {
        "Things you can STRAIN": ["PASTA", "TEA", "VOICE", "MUSCLE"],
        "Things you can BRUSH": ["HAIR", "TEETH", "COAT", "CRUMBS"],
        "Things you can SCRAPE": ["KNEE", "ICE", "PAINT", "BARREL"],
        "Things you can PRESS": ["BUTTON", "FLOWER", "SUIT", "CASE"]
    } },
    { id: "conn135", groups: {
        "Musical dynamics": ["FORTE", "PIANO", "CRESCENDO", "DIMINUENDO"],
        "Musical tempos": ["LARGO", "ADAGIO", "ANDANTE", "ALLEGRO"],
        "Musical markings": ["CODA", "FERMATA", "REPEAT", "REST"],
        "Musical intervals": ["OCTAVE", "FIFTH", "THIRD", "UNISON"]
    } },
    { id: "conn136", groups: {
        "Types of pipe": ["COPPER", "PVC", "LEAD", "STEEL"],
        "Types of pipe fitting": ["ELBOW", "TEE", "COUPLING", "UNION"],
        "Types of tap": ["MIXER", "PILLAR", "BIB", "MONOBLOC"],
        "Types of valve": ["GATE", "BALL", "CHECK", "BUTTERFLY"]
    } },
    { id: "conn137", groups: {
        "Terms in cricket": ["OVER", "BOUNDARY", "STUMP", "BAIL"],
        "Terms in rugby": ["TRY", "SCRUM", "LINEOUT", "CONVERSION"],
        "Terms in darts": ["OCHE", "TREBLES", "BULLSEYE", "DOUBLE"],
        "Terms in bowls": ["JACK", "RINK", "WOOD", "END"]
    } },
    { id: "conn138", groups: {
        "Types of keyboard": ["MECHANICAL", "ERGONOMIC", "SPLIT", "FOLDABLE"],
        "Types of computer mouse": ["TRACKBALL", "OPTICAL", "VERTICAL", "GAMING"],
        "Types of printer": ["LASER", "INKJET", "THERMAL", "DOT MATRIX"],
        "Types of monitor": ["LCD", "OLED", "CRT", "PLASMA"]
    } },
    { id: "conn139", groups: {
        "London railway termini": ["EUSTON", "PADDINGTON", "VICTORIA", "KINGS CROSS"],
        "London squares": ["TRAFALGAR", "LEICESTER", "RUSSELL", "SOHO"],
        "London markets": ["BOROUGH", "CAMDEN", "PORTOBELLO", "SPITALFIELDS"],
        "London bridges": ["TOWER", "LONDON", "WATERLOO", "MILLENNIUM"]
    } },
    { id: "conn140", groups: {
        "Metal fasteners": ["RIVET", "STAPLE", "BOLT", "SCREW"],
        "Wood joints": ["DOWEL", "MORTISE", "BISCUIT", "DOVETAIL"],
        "Embroidery stitches": ["FRENCH KNOT", "SATIN", "STEM", "SPLIT"],
        "Clothing fasteners": ["ZIP", "BUTTON", "HOOK", "VELCRO"]
    } },

    // PUZZLES 141–150
    { id: "conn141", groups: {
        "Things with a LID": ["JAR", "BIN", "PIANO", "EYE"],
        "Things with a SPOUT": ["KETTLE", "TEAPOT", "WHALE", "FOUNTAIN"],
        "Things with a HOOD": ["COOKER", "COAT", "PRAM", "COBRA"],
        "Things with a HINGE": ["DOOR", "LAPTOP", "BOX", "KNEE"]
    } },
    { id: "conn142", groups: {
        "Places in KENT": ["MAIDSTONE", "DOVER", "ASHFORD", "SEVENOAKS"],
        "Places in DEVON": ["EXETER", "TORQUAY", "BARNSTAPLE", "TIVERTON"],
        "Places in YORKSHIRE": ["YORK", "LEEDS", "WHITBY", "SCARBOROUGH"],
        "Places in NORFOLK": ["NORWICH", "KING'S LYNN", "THETFORD", "GREAT YARMOUTH"]
    } },
    { id: "conn143", groups: {
        "Things seen in a courtroom": ["WIG", "USHER", "DOCK", "WITNESS"],
        "Things seen on a film set": ["CLAPPERBOARD", "BOOM", "CAMERA", "PROP"],
        "Things seen at a racetrack": ["PADDOCK", "JOCKEY", "STEWARDS", "STARTER"],
        "Things seen at a hospital": ["STETHOSCOPE", "TROLLEY", "SYRINGE", "WARD"]
    } },
    { id: "conn144", groups: {
        "Can follow PAPER": ["BACK", "CLIP", "WEIGHT", "TRAIL"],
        "Can follow WATER": ["PROOF", "FALL", "COLOUR", "SHED"],
        "Can follow BOOK": ["CASE", "WORM", "END", "KEEPER"],
        "Can follow HOUSE": ["BOAT", "WORK", "HOLD", "MATE"]
    } },
    { id: "conn145", groups: {
        "Small bodies of water": ["POND", "POOL", "PUDDLE", "TARN"],
        "Large bodies of water": ["OCEAN", "SEA", "GULF", "BAY"],
        "Moving bodies of water": ["RIVER", "STREAM", "BROOK", "CREEK"],
        "Man-made waterways": ["CANAL", "DITCH", "AQUEDUCT", "CULVERT"]
    } },
    { id: "conn146", groups: {
        "Cloud storage services": ["DRIVE", "ICLOUD", "DROPBOX", "ONEDRIVE"],
        "Types of web browser": ["CHROME", "SAFARI", "FIREFOX", "EDGE"],
        "Types of file": ["PDF", "JPEG", "PNG", "DOCX"],
        "Types of keyboard key": ["ENTER", "SHIFT", "ESCAPE", "DELETE"]
    } },
    { id: "conn147", groups: {
        "Things you can STAMP": ["PASSPORT", "LETTER", "FOOT", "AUTHORITY"],
        "Things you can SEAL": ["ENVELOPE", "FATE", "DEAL", "CRACK"],
        "Things you can SIGN": ["CHEQUE", "CONTRACT", "PETITION", "BOOK"],
        "Things you can POST": ["PARCEL", "PHOTO", "NOTICE", "COMMENT"]
    } },
    { id: "conn148", groups: {
        "Cluedo suspects": ["MISS SCARLETT", "COLONEL MUSTARD", "PROFESSOR PLUM", "MRS PEACOCK"],
        "Classic Monopoly tokens": ["TOP HAT", "SCOTTIE DOG", "THIMBLE", "BOOT"],
        "Scrabble bonus squares": ["DOUBLE LETTER", "TRIPLE LETTER", "DOUBLE WORD", "TRIPLE WORD"],
        "Playing card ranks": ["ACE", "KING", "QUEEN", "JACK"]
    } },
    { id: "conn149", groups: {
        "Types of bolt": ["CARRIAGE", "HEX", "ANCHOR", "EYE"],
        "Types of nail": ["BRAD", "PANEL", "ROOFING", "FINISHING"],
        "Types of screw": ["WOOD", "MACHINE", "SELF-TAPPING", "GRUB"],
        "Types of hinge": ["PIANO", "BUTT", "CONCEALED", "SPRING"]
    } },
    { id: "conn150", groups: {
        "Things named after people": ["SANDWICH", "CARDIGAN", "WELLINGTON", "BOYCOTT"],
        "Things named after places": ["DENIM", "CHAMPAGNE", "BADMINTON", "JERSEY"],
        "Names containing an ANIMAL": ["SEAHORSE", "BUTTERFLY", "CATFISH", "DOGFISH"],
        "Names containing a COLOUR": ["BLACKBERRY", "BLUEBELL", "REDBREAST", "GREENFINCH"]
    } },

    // PUZZLES 151–160
    { id: "conn151", groups: {
        "Terms in knitting": ["CAST ON", "PURL", "GAUGE", "STOCKING STITCH"],
        "Terms in crochet": ["CHAIN", "HOOK", "GRANNY SQUARE", "SLIP STITCH"],
        "Terms in embroidery": ["HOOP", "FLOSS", "SATIN STITCH", "SAMPLER"],
        "Terms in quilting": ["BATTING", "PATCHWORK", "BINDING", "APPLIQUE"]
    } },
    { id: "conn152", groups: {
        "Things used by a magician": ["TOP HAT", "WAND", "CARDS", "DOVES"],
        "Things used by a puppeteer": ["STRINGS", "STAGE", "PUPPET", "RODS"],
        "Things used by a juggler": ["CLUBS", "RINGS", "BALLS", "TORCHES"],
        "Things used by a clown": ["RED NOSE", "BIG SHOES", "HORN", "WIG"]
    } },
    { id: "conn153", groups: {
        "Types of flooring": ["PARQUET", "LAMINATE", "VINYL", "LINOLEUM"],
        "Types of ceiling": ["COFFERED", "VAULTED", "BEAMED", "TRAY"],
        "Types of wall covering": ["WALLPAPER", "TILES", "PANELLING", "PLASTER"],
        "Types of window blind": ["VENETIAN", "ROLLER", "ROMAN", "VERTICAL"]
    } },
    { id: "conn154", groups: {
        "Vegetables that grow underground": ["CARROT", "TURNIP", "PARSNIP", "RADISH"],
        "Vegetables with pods": ["PEAS", "BEANS", "EDAMAME", "MANGE TOUT"],
        "Leafy vegetables": ["KALE", "SPINACH", "CHARD", "LETTUCE"],
        "Flower vegetables": ["BROCCOLI", "CAULIFLOWER", "ARTICHOKE", "COURGETTE FLOWER"]
    } },
    { id: "conn155", groups: {
        "Singing voice ranges": ["SOPRANO", "ALTO", "TENOR", "BASS"],
        "Ways to sing": ["HUM", "CROON", "WARBLE", "CHANT"],
        "Singing techniques": ["VIBRATO", "FALSETTO", "BELTING", "YODEL"],
        "Choir-related words": ["CONDUCTOR", "HARMONY", "REHEARSAL", "PART"]
    } },
    { id: "conn156", groups: {
        "___ BRANCH": ["TREE", "BANK", "OLIVE", "EXECUTIVE"],
        "___ SCALE": ["BATHROOM", "MINOR", "RICHTER", "MODEL"],
        "___ NOTE": ["FOOT", "LOVE", "POST-IT", "THANK YOU"],
        "___ STAGE": ["BACK", "ON", "MAIN", "CENTRE"]
    } },
    { id: "conn157", groups: {
        "Things you can TURN": ["PAGE", "CORNER", "HEAD", "KEY"],
        "Things you can CHANGE": ["GEAR", "CLOTHES", "CHANNEL", "COLOUR"],
        "Things you can CLOSE": ["DOOR", "DEAL", "EYES", "ACCOUNT"],
        "Things you can OPEN": ["BOTTLE", "MIND", "WINDOW", "CASE"]
    } },
    { id: "conn158", groups: {
        "Shades of YELLOW": ["LEMON", "MUSTARD", "SAFFRON", "CANARY"],
        "Shades of BROWN": ["TAUPE", "UMBER", "SEPIA", "CHOCOLATE"],
        "Shades of GREY": ["CHARCOAL", "SLATE", "PEWTER", "DOVE"],
        "Shades of PINK": ["SALMON", "FUCHSIA", "CERISE", "BLUSH"]
    } },
    { id: "conn159", groups: {
        "Things at a railway station": ["TICKET BARRIER", "PLATFORM", "CONCOURSE", "DEPARTURES"],
        "Things at a ferry terminal": ["GANGWAY", "BOARDING", "QUAY", "TERMINAL"],
        "Things at a bus station": ["TIMETABLE", "SHELTER", "BAY", "COACH"],
        "Things at an airport": ["RUNWAY", "SECURITY", "PASSPORT", "CHECK-IN"]
    } },
    { id: "conn160", groups: {
        "Musical notes": ["CROTCHET", "QUAVER", "MINIM", "SEMIBREVE"],
        "Musical rests": ["CROTCHET REST", "QUAVER REST", "MINIM REST", "SEMIBREVE REST"],
        "Music staff symbols": ["CLEF", "BARLINE", "SHARP", "FLAT"],
        "Keyboard instruments": ["HARPSICHORD", "ORGAN", "ACCORDION", "CELESTA"]
    } },

    // PUZZLES 161–170
    { id: "conn161", groups: {
        "Jobs in a newspaper": ["REPORTER", "EDITOR", "COLUMNIST", "SUBEDITOR"],
        "Jobs on a film set": ["DIRECTOR", "GAFFER", "GRIP", "FOCUS PULLER"],
        "Jobs in a restaurant": ["SOMMELIER", "SOUS CHEF", "MAITRE D", "KITCHEN HAND"],
        "Jobs in a hospital": ["SURGEON", "PORTER", "MIDWIFE", "RADIOGRAPHER"]
    } },
    { id: "conn162", groups: {
        "Parts of the eye": ["RETINA", "IRIS", "CORNEA", "PUPIL"],
        "Parts of the ear": ["COCHLEA", "PINNA", "EARDRUM", "OSSICLES"],
        "Parts of the nose": ["NOSTRIL", "SEPTUM", "TURBINATE", "BRIDGE"],
        "Parts of the tongue": ["TIP", "BLADE", "ROOT", "DORSUM"]
    } },
    { id: "conn163", groups: {
        "Things in Monopoly": ["HOTEL", "HOUSE", "CHANCE", "COMMUNITY CHEST"],
        "Cluedo weapons": ["ROPE", "CANDLESTICK", "DAGGER", "REVOLVER"],
        "Things in Scrabble": ["TILES", "RACK", "BLANK", "BOARD"],
        "Actions in chess": ["CAPTURE", "PROMOTION", "CASTLING", "EN PASSANT"]
    } },
    { id: "conn164", groups: {
        "Types of noun": ["PROPER", "COMMON", "COLLECTIVE", "ABSTRACT"],
        "Types of pronoun": ["PERSONAL", "RELATIVE", "REFLEXIVE", "DEMONSTRATIVE"],
        "Types of sentence": ["QUESTION", "COMMAND", "STATEMENT", "EXCLAMATION"],
        "Types of punctuation": ["COMMA", "SEMICOLON", "APOSTROPHE", "COLON"]
    } },
    { id: "conn165", groups: {
        "Can follow SOFT": ["BALL", "DRINK", "TOY", "TOUCH"],
        "Can follow HARD": ["WARE", "WOOD", "CORE", "WORK"],
        "Can follow HIGH": ["WAY", "RISE", "LAND", "TECH"],
        "Can follow LOW": ["TIDE", "KEY", "LIFE", "COST"]
    } },
    { id: "conn166", groups: {
        "US states beginning with NEW": ["NEW YORK", "NEW JERSEY", "NEW MEXICO", "NEW HAMPSHIRE"],
        "Countries ending in -LAND": ["THAILAND", "FINLAND", "ICELAND", "POLAND"],
        "Countries ending in -STAN": ["PAKISTAN", "AFGHANISTAN", "KAZAKHSTAN", "UZBEKISTAN"],
        "European capitals beginning with B": ["BERLIN", "BRUSSELS", "BUCHAREST", "BUDAPEST"]
    } },
    { id: "conn167", groups: {
        "Things associated with CHRISTMAS": ["CRACKER", "TINSEL", "PUDDING", "MISTLETOE"],
        "Things associated with EASTER": ["BONNET", "CHOCOLATE", "DAFFODIL", "BUNNY"],
        "Things associated with HALLOWEEN": ["PUMPKIN", "WITCH", "GHOST", "CAULDRON"],
        "Things associated with BONFIRE NIGHT": ["SPARKLER", "GUY", "TOFFEE", "ROCKET"]
    } },
    { id: "conn168", groups: {
        "Things associated with steam trains": ["COAL", "BOILER", "FIREBOX", "WHISTLE"],
        "Things associated with sailing ships": ["CANVAS", "MAST", "RIGGING", "KEEL"],
        "Things associated with horse carts": ["REINS", "HARNESS", "WHEEL", "WHIP"],
        "Things associated with old bicycles": ["PENNY FARTHING", "SPOKES", "PEDAL", "SADDLE"]
    } },
    { id: "conn169", groups: {
        "Jobs related to LAW": ["SOLICITOR", "BARRISTER", "PARALEGAL", "BAILIFF"],
        "Jobs related to EDUCATION": ["TEACHER", "TUTOR", "LECTURER", "HEADMASTER"],
        "Jobs related to THEATRE": ["ACTOR", "STAGEHAND", "PROMPTER", "USHER"],
        "Jobs related to BUILDING": ["BRICKLAYER", "PLASTERER", "ROOFER", "SURVEYOR"]
    } },
    { id: "conn170", groups: {
        "Drawing materials": ["CHARCOAL", "GRAPHITE", "PASTEL", "CRAYON"],
        "Painting media": ["OIL", "ACRYLIC", "WATERCOLOUR", "TEMPERA"],
        "Sculpting materials": ["CLAY", "MARBLE", "BRONZE", "WOOD"],
        "Printmaking methods": ["ETCHING", "LITHOGRAPHY", "SCREENPRINT", "WOODCUT"]
    } },

    // PUZZLES 171–180
    { id: "conn171", groups: {
        "Things that can be STRETCHED": ["ELASTIC", "TRUTH", "BUDGET", "LEGS"],
        "Things that can be PULLED": ["TEETH", "PLUG", "STRING", "PUNCH"],
        "Things that can be PUSHED": ["BUTTON", "PRAM", "BOUNDARIES", "LUCK"],
        "Things that can be HELD": ["BREATH", "HAND", "MEETING", "GRUDGE"]
    } },
    { id: "conn172", groups: {
        "The Simpsons": ["HOMER", "MARGE", "BART", "LISA"],
        "The Addams Family": ["GOMEZ", "MORTICIA", "WEDNESDAY", "PUGSLEY"],
        "The Flintstones": ["FRED", "WILMA", "PEBBLES", "DINO"],
        "Only Fools and Horses": ["DEL", "RODNEY", "GRANDAD", "UNCLE ALBERT"]
    } },
    { id: "conn173", groups: {
        "British words for things Americans call differently": ["LIFT", "BOOT", "QUEUE", "BISCUIT"],
        "US words for British things": ["ELEVATOR", "TRUNK", "LINE", "COOKIE"],
        "British words for clothing": ["JUMPER", "TRAINERS", "WAISTCOAT", "TROUSERS"],
        "US words for those clothes": ["SWEATER", "SNEAKERS", "VEST", "PANTS"]
    } },
    { id: "conn174", groups: {
        "Common garden birds": ["ROBIN", "SPARROW", "BLACKBIRD", "BLUE TIT"],
        "Common waterbirds": ["SWAN", "COOT", "MOORHEN", "GREBE"],
        "Common birds of prey": ["KESTREL", "BUZZARD", "RED KITE", "HARRIER"],
        "Common seabirds": ["GANNET", "PUFFIN", "GUILLEMOT", "TERN"]
    } },
    { id: "conn175", groups: {
        "___ WISE": ["CLOCK", "OTHER", "LENGTH", "CROSS"],
        "___ WORTHY": ["TRUST", "NEWS", "SEA", "PRAISE"],
        "___ SOME": ["TROUBLE", "WHOLE", "TIRE", "FEAR"],
        "___ FREE": ["DUTY", "GLUTEN", "SMOKE", "CAFFEINE"]
    } },
    { id: "conn176", groups: {
        "Famous fictional villages": ["EMMERDALE", "AMBRIDGE", "HOBBITON", "DIBLEY"],
        "Famous fictional cities": ["GOTHAM", "METROPOLIS", "ANKH-MORPORK", "ATLANTIS"],
        "Famous fictional schools": ["HOGWARTS", "ST TRINIANS", "GRANGE HILL", "WATERLOO ROAD"],
        "Famous fictional pubs": ["ROVERS RETURN", "QUEEN VIC", "WOOLPACK", "DOG IN THE POND"]
    } },
    { id: "conn177", groups: {
        "Words used in a crossword": ["ACROSS", "DOWN", "CLUE", "GRID"],
        "Words used in sudoku": ["BOX", "ROW", "COLUMN", "DIGIT"],
        "Words used in a jigsaw": ["PIECE", "EDGE", "CORNER", "PICTURE"],
        "Words used in a wordsearch": ["HORIZONTAL", "VERTICAL", "DIAGONAL", "BACKWARDS"]
    } },
    { id: "conn178", groups: {
        "Shakespeare's ROMAN plays": ["JULIUS CAESAR", "ANTONY AND CLEOPATRA", "CORIOLANUS", "TITUS ANDRONICUS"],
        "Shakespeare tragedies": ["HAMLET", "MACBETH", "OTHELLO", "KING LEAR"],
        "Shakespeare histories": ["RICHARD III", "HENRY V", "KING JOHN", "RICHARD II"],
        "Shakespeare comedies": ["TWELFTH NIGHT", "AS YOU LIKE IT", "THE TEMPEST", "LOVE'S LABOUR'S LOST"]
    } },
    { id: "conn179", groups: {
        "Coastal features": ["CLIFF", "HEADLAND", "COVE", "BEACH"],
        "Mountain features": ["RIDGE", "SUMMIT", "PASS", "PEAK"],
        "River features": ["MEANDER", "DELTA", "SOURCE", "ESTUARY"],
        "Desert features": ["DUNE", "OASIS", "WADI", "SALT FLAT"]
    } },
    { id: "conn180", groups: {
        "Gold-related words": ["BULLION", "CARAT", "NUGGET", "INGOT"],
        "Diamond-related words": ["FACET", "CUT", "CLARITY", "SOLITAIRE"],
        "Silver-related words": ["STERLING", "PLATE", "TARNISH", "HALLMARK"],
        "Copper-related words": ["PATINA", "VERDIGRIS", "WIRE", "ORE"]
    } },

    // PUZZLES 181–190
    { id: "conn181", groups: {
        "Woodwind instruments": ["CLARINET", "OBOE", "BASSOON", "PICCOLO"],
        "Brass instruments": ["TROMBONE", "TUBA", "CORNET", "FRENCH HORN"],
        "String instruments": ["HARP", "VIOLA", "DOUBLE BASS", "MANDOLIN"],
        "Percussion instruments": ["TIMPANI", "XYLOPHONE", "TAMBOURINE", "TRIANGLE"]
    } },
    { id: "conn182", groups: {
        "Slang words for MONEY": ["CASH", "DOUGH", "LOLLY", "READIES"],
        "Slang words for POLICE": ["BOBBIES", "COPPERS", "FUZZ", "OLD BILL"],
        "Slang words for DRUNK": ["SOZZLED", "TIPSY", "PLASTERED", "SLOSHED"],
        "Slang words for NONSENSE": ["CODSWALLOP", "TWADDLE", "BALDERDASH", "TOSH"]
    } },
    { id: "conn183", groups: {
        "___ DUTY": ["HEAVY", "OFF", "ON", "CUSTOMS"],
        "___ SHIFT": ["NIGHT", "DAY", "GEAR", "PARADIGM"],
        "___ CHANGE": ["CLIMATE", "SPARE", "SEA", "LOOSE"],
        "___ ORDER": ["COURT", "MAIL", "PURCHASE", "TALL"]
    } },
    { id: "conn184", groups: {
        "Japanese dishes": ["SUSHI", "RAMEN", "TEMPURA", "GYOZA"],
        "Indian dishes": ["BIRYANI", "SAMOSA", "DOSA", "VINDALOO"],
        "Italian dishes": ["RISOTTO", "GNOCCHI", "LASAGNE", "ARANCINI"],
        "Mexican dishes": ["TACO", "ENCHILADA", "BURRITO", "QUESADILLA"]
    } },
    { id: "conn185", groups: {
        "Types of ticket": ["SINGLE", "RETURN", "SEASON", "OPEN"],
        "Types of pass": ["BACKSTAGE", "BOARDING", "DAY", "SECURITY"],
        "Types of card": ["IDENTITY", "CREDIT", "LIBRARY", "LOYALTY"],
        "Types of licence": ["DRIVING", "FISHING", "TV", "MARRIAGE"]
    } },
    { id: "conn186", groups: {
        "Phases of the moon": ["NEW", "FULL", "CRESCENT", "GIBBOUS"],
        "Solar system planets": ["MERCURY", "VENUS", "EARTH", "MARS"],
        "Types of galaxy": ["SPIRAL", "ELLIPTICAL", "IRREGULAR", "LENTICULAR"],
        "Space missions": ["APOLLO", "VOYAGER", "CASSINI", "ARTEMIS"]
    } },
    { id: "conn187", groups: {
        "Weather instruments": ["BAROMETER", "ANEMOMETER", "RAIN GAUGE", "THERMOMETER"],
        "Navigation instruments": ["COMPASS", "SEXTANT", "DEPTH SOUNDER", "GPS"],
        "Optical instruments": ["PERISCOPE", "TELESCOPE", "MICROSCOPE", "BINOCULARS"],
        "Timekeeping instruments": ["SUNDIAL", "CHRONOMETER", "HOURGLASS", "STOPWATCH"]
    } },
    { id: "conn188", groups: {
        "Parts of a computer": ["PROCESSOR", "RAM", "MOTHERBOARD", "SSD"],
        "Parts of a washing machine": ["DRUM", "FILTER", "PUMP", "GASKET"],
        "Parts of a car engine": ["PISTON", "CRANKSHAFT", "CAMSHAFT", "SPARK PLUG"],
        "Parts of a radio": ["TUNER", "AERIAL", "SPEAKER", "DIAL"]
    } },
    { id: "conn189", groups: {
        "Words meaning IMPROVE": ["ENHANCE", "REFINE", "POLISH", "UPGRADE"],
        "Words meaning DECLINE": ["WORSEN", "FADE", "SLUMP", "DETERIORATE"],
        "Words meaning INCREASE": ["EXPAND", "GROW", "RISE", "SWELL"],
        "Words meaning DECREASE": ["SHRINK", "DWINDLE", "DIMINISH", "CONTRACT"]
    } },
    { id: "conn190", groups: {
        "Types of shoe": ["LOAFER", "BROGUE", "ESPADRILLE", "MOCASSIN"],
        "Types of sock": ["ANKLE", "CREW", "TRAINER", "KNEE-HIGH"],
        "Types of glove": ["MITTEN", "GAUNTLET", "BOXING", "FINGERLESS"],
        "Types of belt": ["LEATHER", "WEBBING", "UTILITY", "OBI"]
    } },

    // PUZZLES 191–200
    { id: "conn191", groups: {
        "Items in a greenhouse": ["POTS", "PROPAGATOR", "TRAYS", "COMPOST"],
        "Items in a shed": ["SPADE", "MOWER", "RAKE", "WHEELBARROW"],
        "Items in a garage": ["JACK", "SPANNER", "TYRE", "PUMP"],
        "Items in a workshop": ["VICE", "CHISEL", "BENCH", "SANDPAPER"]
    } },
    { id: "conn192", groups: {
        "Newspaper section headings": ["SPORT", "BUSINESS", "LETTERS", "OBITUARIES"],
        "Weather forecast terms": ["FRONT", "PRESSURE", "OUTLOOK", "SHOWERS"],
        "Legal document terms": ["CLAUSE", "WITNESS", "DEFENDANT", "APPENDIX"],
        "Sports commentary words": ["OFFSIDE", "FOUL", "REPLAY", "EQUALISER"]
    } },
    { id: "conn193", groups: {
        "Types of arch": ["GOTHIC", "ROMAN", "OGEE", "HORSESHOE"],
        "Types of roof": ["GABLE", "HIP", "MANSARD", "FLAT"],
        "Types of staircase": ["SPIRAL", "STRAIGHT", "DOGLEG", "HELICAL"],
        "Types of window": ["BAY", "SASH", "CASEMENT", "DORMER"]
    } },
    { id: "conn194", groups: {
        "Things with BARK": ["DOG", "TREE", "SEAL", "FOX"],
        "Things that ROAR": ["LION", "CROWD", "ENGINE", "WATERFALL"],
        "Things that RATTLE": ["SNAKE", "WINDOW", "KEYS", "BONES"],
        "Things that WHISTLE": ["KETTLE", "REFEREE", "TRAIN", "BIRD"]
    } },
    { id: "conn195", groups: {
        "Foods named after people": ["PAVLOVA", "PEACH MELBA", "BEEF WELLINGTON", "EGGS BENEDICT"],
        "Foods named after places": ["CHEDDAR", "CHAMPAGNE", "CORNISH PASTY", "PARMESAN"],
        "Foods named after animals": ["TIGER BREAD", "BEAR CLAW", "PIGS IN BLANKETS", "ELEPHANT EAR"],
        "Foods named after colours": ["RED VELVET", "BLACK PUDDING", "WHITE CHOCOLATE", "GREEN CURRY"]
    } },
    { id: "conn196", groups: {
        "Four-sided shapes": ["SQUARE", "RECTANGLE", "RHOMBUS", "TRAPEZIUM"],
        "Three-dimensional shapes": ["CUBE", "CONE", "SPHERE", "CYLINDER"],
        "Three-sided shapes": ["EQUILATERAL", "ISOSCELES", "SCALENE", "RIGHT"],
        "Angle types": ["ACUTE", "OBTUSE", "REFLEX", "STRAIGHT"]
    } },
    { id: "conn197", groups: {
        "Clothing patterns": ["PAISLEY", "GINGHAM", "HOUNDSTOOTH", "CHEVRON"],
        "Fabric finishes": ["PLEATED", "QUILTED", "EMBOSSED", "RIBBED"],
        "Weaving patterns": ["HERRINGBONE", "BASKET", "TWILL", "SATIN"],
        "Knitting patterns": ["CABLE", "FAIR ISLE", "ARGYLE", "SEED"]
    } },
    { id: "conn198", groups: {
        "Currencies used in Europe": ["EURO", "KRONA", "KRONE", "ZLOTY"],
        "Currencies used in Asia": ["YEN", "YUAN", "RUPEE", "WON"],
        "Currencies used in Africa": ["NAIRA", "RAND", "CEDI", "SHILLING"],
        "Currencies used in the Americas": ["DOLLAR", "PESO", "REAL", "QUETZAL"]
    } },
    { id: "conn199", groups: {
        "Types of bread": ["BAGUETTE", "CIABATTA", "NAAN", "PITTA"],
        "Types of pasta": ["FARFALLE", "ORECCHIETTE", "RIGATONI", "ORZO"],
        "Types of rice dish": ["PAELLA", "RISOTTO", "PILAF", "CONGEE"],
        "Types of dumpling": ["GYOZA", "PIEROGI", "WONTON", "MOMO"]
    } },
    { id: "conn200", groups: {
        "Things that can GO OFF": ["ALARM", "MILK", "BOMB", "LIGHT"],
        "Things that can TAKE OFF": ["PLANE", "ROCKET", "SHOES", "COAT"],
        "Things that can COME OUT": ["SUN", "SECRET", "BOOK", "STAIN"],
        "Things that can FALL THROUGH": ["PLAN", "CRACKS", "CEILING", "ICE"]
    } }

];

module.exports = connectionsPuzzles;
