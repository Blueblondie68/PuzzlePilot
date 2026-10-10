
 // crossword_pack5.js
 // PuzzlePilot — Crosswords 101 to 125
 // Complete file. # means a black square.

 const clueText = `
 ABBEY|Historic religious building for monks or nuns
 ALBATROSS|Seabird with an exceptionally long wingspan
 AMAZON|Major South American river
 ANTHEM|Song representing a nation or cause
 ARCHIVE|Collection of historical records
 ASTEROID|Rocky object orbiting the Sun
 AUDIENCE|People watching a live performance
 BAGUETTE|Long thin French loaf
 BANJO|Stringed instrument associated with bluegrass
 BARITONE|Male singing voice between tenor and bass
 BIRCH|Tree with distinctive pale bark
 BLACKPOOL|Seaside town famous for its tower
 BLUEBERRY|Small blue fruit often used in muffins
 BORDEAUX|French city associated with red wine
 BRISTOL|English city known for its suspension bridge
 BROADWAY|New York theatre district
 BRONZE|Metal alloy used for third-place medals
 BRUSSELS|Capital city of Belgium
 CABARET|Entertainment featuring songs and dance
 CAMELOT|Legendary court of King Arthur
 CAPITAL|City where a country's government is based
 CHESS|Board game with kings and queens
 CHOCOLATE|Sweet made from cocoa beans
 CINEMA|Place where films are shown
 CLEOPATRA|Last active ruler of Ptolemaic Egypt
 CORNWALL|County at the south-western tip of England
 CYMBALS|Percussion instruments struck together
 DAFFODIL|Flower traditionally associated with Wales
 DARTMOOR|National park in Devon
 DIALOGUE|Conversation between characters in a play
 DICKENS|Author of Oliver Twist
 DISCO|Dance music genre prominent in the 1970s
 DOVER|English port known for its white cliffs
 DRUMMER|Musician who keeps the beat on percussion
 EINSTEIN|Scientist associated with relativity
 EMERALD|Green precious gemstone
 ENCORE|Extra performance demanded by an audience
 EPISODE|One instalment of a television series
 EVEREST|Highest mountain above sea level
 FESTIVAL|Organised celebration with performances
 FLORENCE|Italian city associated with the Renaissance
 FORTRESS|Strongly defended building
 FRAGMENT|Small piece broken off something larger
 FREDDIE|First name of Queen's lead singer
 GANDHI|Indian leader known for nonviolent resistance
 GELATO|Italian-style frozen dessert
 GENESIS|First book of the Bible
 GEORGIA|Country in the Caucasus with capital Tbilisi
 GLASGOW|Scotland's largest city
 GONDOLA|Traditional narrow boat used in Venice
 GRAMMY|American award for musical achievement
 GRANITE|Hard rock often used for kitchen worktops
 GREECE|Mediterranean country whose capital is Athens
 GUERNSEY|Channel Island known for its knitwear
 HAMLET|Shakespeare tragedy featuring a Danish prince
 HARMONY|Different musical notes sounding together
 HASTINGS|English town associated with a battle in 1066
 HERCULES|Hero of Greek and Roman mythology
 HIGHLAND|Mountainous region of northern Scotland
 INSTRUMENT|Device used to make music
 INVENTOR|Person who creates a new device
 IRIS|Flower named after the Greek rainbow goddess
 JAMAICA|Caribbean island country famous for reggae
 JAZZ|Music style associated with improvisation
 KIMONO|Traditional Japanese robe
 KINGDOM|Territory ruled by a monarch
 KNIGHT|Chess piece that moves in an L shape
 LAKE|Large body of inland water
 LANTERN|Portable light enclosed in a case
 LAVENDER|Purple aromatic plant
 LEGEND|Traditional tale sometimes based on history
 LIMERICK|Humorous five-line poem
 LOBSTER|Large marine crustacean with claws
 LONDON|UK capital city
 MACBETH|Shakespeare tragedy involving three witches
 MAGAZINE|Periodical publication of articles and pictures
 MANDOLIN|Small plucked string instrument
 MARATHON|Running race measuring just over 26 miles
 MARZIPAN|Sweet almond paste used on cakes
 MAYPOLE|Tall pole decorated with ribbons for dancing
 MERCURY|Planet closest to the Sun
 MOLASSES|Thick dark syrup from sugar production
 MONARCH|King or queen
 MONOPOLY|Board game involving property trading
 MOSAIC|Picture made from small pieces of tile or glass
 MOZART|Composer of The Magic Flute
 MUSTARD|Yellow condiment often served with ham
 NARRATOR|Person who tells a story
 NEWCASTLE|City on the River Tyne
 NEWTON|Scientist associated with laws of motion
 NORFOLK|English county containing the Broads
 NOVEL|Long fictional prose work
 OASIS|Manchester band featuring the Gallagher brothers
 OBELISK|Tall tapering stone monument
 OBSERVER|Person watching an event
 OCTAGON|Shape with eight sides
 OPERA|Dramatic work sung to orchestral music
 OXFORD|English university city
 PARIS|Capital of France
 PASTRAMI|Seasoned cured beef served in sandwiches
 PAVLOVA|Meringue dessert topped with fruit
 PELICAN|Waterbird with a large throat pouch
 PERU|South American country home to Machu Picchu
 PLATINUM|Precious metal used in jewellery
 PLUTO|Dwarf planet once classified as the ninth planet
 PORTUGAL|European country whose capital is Lisbon
 POTATO|Vegetable used to make chips
 PRELUDE|Short musical introduction
 PRINCESS|Daughter of a monarch
 PYRAMID|Ancient Egyptian monument with triangular sides
 QUEEN|British rock band fronted by Freddie Mercury
 RAILWAY|Network of tracks used by trains
 RAPHAEL|Italian Renaissance painter
 REHEARSAL|Practice session before a performance
 RHUBARB|Tart stalk often used in crumble
 RHYTHM|Pattern of beats in music
 ROMEO|Male lead in a Shakespeare tragedy
 SAFFRON|Expensive spice derived from crocus flowers
 SALMON|Pink-fleshed fish that swims upstream to spawn
 SANDWICH|Food named after an English earl
 SCRIPT|Written text of a play or film
 SCULPTURE|Three-dimensional work of art
 SEQUEL|Film or book that continues an earlier story
 SERENADE|Piece of music performed in someone's honour
 SHERLOCK|First name of Conan Doyle's famous detective
 SITCOM|Television comedy based on recurring characters
 SLOVENIA|European country whose capital is Ljubljana
 SOPRANO|Highest common female singing voice
 SOUFFLE|Light baked dish that rises in the oven
 SPINACH|Leafy vegetable eaten raw or cooked
 SPOTLIGHT|Focused beam used on stage
 STARLING|Bird known for spectacular murmurations
 SUNFLOWER|Tall plant with a large yellow flower
 TENOR|High adult male singing voice
 THAMES|River flowing through London
 THRILLER|Michael Jackson album released in 1982
 TITANIC|Passenger liner that sank in 1912
 TOFFEE|Chewy sweet made from sugar and butter
 TORONTO|Largest city in Canada
 TRIANGLE|Three-sided shape
 TYPHOON|Tropical cyclone in the western Pacific
 UMPIRE|Official who makes decisions in cricket
 UPRIGHT|Standing vertically
 URANUS|Planet that rotates almost on its side
 VALENTINE|Person sent a romantic card in February
 VANILLA|Flavouring derived from orchid pods
 VATICAN|Tiny sovereign state inside Rome
 VEGETABLE|Edible plant part such as a carrot
 VENICE|Italian city famous for its canals
 VERDI|Composer of La Traviata
 VIKING|Scandinavian seafarer of the early Middle Ages
 VILLAGE|Small settlement in the countryside
 VIOLET|Purple-blue flower
 VIOLIN|Bowed string instrument held under the chin
 WAFER|Thin crisp biscuit
 WAGNER|Composer of The Ring Cycle
 WHISKY|Spirit commonly produced in Scotland
 `;

 const clues = Object.fromEntries(
     clueText.trim().split("\n").map(line => {
         const separator = line.indexOf("|");
         return [
             line.slice(0, separator).trim(),
             line.slice(separator + 1).trim()
         ];
     })
 );

 // Each entry is a complete crossword grid.
 // Rows are separated by / and # represents a block.

 const grids = [
     "HAMLET# / ##O#### / P#S#R## / AMAZON# / R#I#M## / I#CHESS / S###O##",

     "####TENOR / ###N#P### / #PLATINUM / ###R#S### / #HARMONY# / ###A#D### / FORTRESS# / ###O##### / #HERCULES",

     "#DRUMMER### / #I######B## / #S##H#V#I## / #CINEMA#R#D / #O##R#L#C#I / ##MACBETH#A / #P##U#N###L / #A#PLUTO##O / #R##E#I###G / #IRIS#N###U / #S###VENICE",

     "VEGETABLE## / A#R###R#### / N#A#M#O###C / I#N#A#NOVEL / L#I#G#Z###E / L#THAMES##O / A#E#Z###O#P / ####I#P#A#A / #PRINCESS#T / ####E#R#I#R / ######U#S#A",

     "#######T# / C##DISCO# / A#L##E#R# / M#O##R#O# / EINSTEIN# / L#D##N#T# / O#OCTAGON / T#N##D### / ###GREECE",

     "OPERA## / ###H#B# / #T#Y#A# / NEWTON# / #N#H#J# / #O#M#O# / #R#####",

     "#D######P / #A##P###E / #R#WAGNER / #T##S#O#U / #MUSTARD# / #O##R#F## / SOPRANO## / #R##M#L## / ##WHISKY#",

     "####J#B#### / P#STARLING# / A###M#U#### / VILLAGE#F## / L###I#B#E## / O#DICKENS#S / V#O#A#R#T#A / A#V###R#I#L / ##E###Y#V#M / PARIS###A#O / #####VIOLIN",

     "A###LOBSTER / B#M#A###### / BLACKPOOL#F / E#N#E#####L / Y#D###V###O / #BORDEAUX#R / ##L###T###E / #LIMERICK#N / ##N###C###C / ###TRIANGLE / ######N####",

     "#SITCOM## / #L#O##### / #O#F#G### / #V#F#L### / #EMERALD# / #N#E#S#O# / #I###G#V# / BARITONE# / #####W#R#",

     "Q####W# / U##V#A# / E##I#F# / ENCORE# / N##L#R# / ###E### / #SITCOM",

     "#D####### / MARZIPAN# / #F##R#S## / #F##I#T## / MOLASSES# / #D####R## / #I#OXFORD / #L####I## / ##KINGDOM",

     "########### / RHUBARB#### / ######R#R#P / S##MONOPOLY / O##A##A#M#R / U#FREDDIE#A / F##A##W#O#M / FESTIVAL##I / L##H##Y###D / E##O####### / #GENESIS###",

     "#####GELATO / O#######U#B / B###L#C#D#E / SPINACH#I#L / E###N#O#E#I / R#VATICAN#S / V###E#O#C#K / E#THRILLER# / R###N#A#### / ######T#### / #FRAGMENT##",

     "#M#POTATO / #E##B#U## / #R#VERDI# / #C##L#I#U / #UMPIRE#R / #R##S#N#A / #Y##K#C#N / #####PERU / ########S",

     "#ENCORE / H####H# / A##J#Y# / MOZART# / L##Z#H# / E##Z#M# / T######",

     "#C#GREECE / LAKE####V / #M#O#G##E / #E#R#O##R / #LEGEND#E / #O#I#D##S / #T#A#O##T / #####L### / #VILLAGE#",

     "M##H##R#### / O##INVENTOR / N##G##H#I#A / ARCHIVE#T#I / R##L##A#A#L / C#SAFFRON#W / H##N##S#I#A / ###D##A#C#Y / ######L#### / ########### / ###########",

     "##EINSTEIN# / ###N#C##### / A##S#R#S### / SPOTLIGHT#H / T##R#P#E##A / E#MUSTARD#S / R##M###L##T / O#GELATO##I / I##N###C##N / D##T#VIKING / ##########S",

     "##CABARET / #G##I#### / #U##R##P# / #E##C##E# / #RAPHAEL# / #N#####I# / #SANDWICH / #E#####A# / #Y#KIMONO",

     "K#BANJO / N#R#### / I#O#C## / GANDHI# / H#Z#E## / T#E#S## / ####S##",

     "CYMBALS## / ##A###### / #TYPHOON# / ##P###### / #GONDOLA# / P#L###### / EMERALD## / R######## / UPRIGHT##",

     "########### / GRAMMY####N / ###O###D##E / #MANDOLIN#W / ###A###A##C / #CORNWALL#A / #I#C###O##S / ANTHEM#G##T / #E#####U##L / #M#BAGUETTE / #A#########",

     "##ABBEY#### / ##L####IRIS / ##B##B####U / #PASTRAMI#N / ##T##I####F / #BRUSSELS#L / ##O##T##E#O / ##S##O##Q#W / ##SCULPTURE / ########E#R / #DAFFODIL##",

     "#PRELUDE# / #O####### / GRANITE## / #T####V## / GUERNSEY# / #G####R## / LAVENDER# / #L####S## / ##CAPITAL"
 ];

 // Read each complete grid and identify every answer.
 // This avoids manually entered clue positions being wrong.

 function buildPuzzle(gridText, index) {
     const rows = gridText.split("/").map(
         row => row.trim()
     );

     const size = rows.length;

     if (!rows.every(row => row.length === size)) {
         throw new Error(
             `Pack 5 crossword ${index + 1}: invalid grid size`
         );
     }

     const solution = rows.map(row => row.split(""));

     function findAnswers(direction) {
         const answers = [];

         const dr = direction === "down" ? 1 : 0;
         const dc = direction === "across" ? 1 : 0;

         for (let row = 0; row < size; row++) {
             for (let col = 0; col < size; col++) {
                 if (solution[row][col] === "#") {
                     continue;
                 }

                 const previousRow = row - dr;
                 const previousCol = col - dc;

                 if (
                     previousRow >= 0 &&
                     previousCol >= 0 &&
                     solution[previousRow][previousCol] !== "#"
                 ) {
                     continue;
                 }

                 let answer = "";
                 let r = row;
                 let c = col;

                 while (
                     r < size &&
                     c < size &&
                     solution[r][c] !== "#"
                 ) {
                     answer += solution[r][c];
                     r += dr;
                     c += dc;
                 }

                 if (answer.length < 2) {
                     continue;
                 }

                 if (!clues[answer]) {
                     throw new Error(
                         `Missing clue for ${answer} in crossword ${
                             index + 101
                         }`
                     );
                 }

                 answers.push({
                     answer,
                     clue: clues[answer],
                     row,
                     col
                 });
             }
         }

         return answers;
     }

     return {
         id: `crossword_pack5_${String(index + 1).padStart(3, "0")}`,
         title: `Crossword ${index + 101}`,
         difficulty:
             size === 7 ? "Easy" :
             size === 9 ? "Medium" : "Hard",
         solution,
         across: findAnswers("across"),
         down: findAnswers("down")
     };
 }

 const crosswordPack5 = grids.map(buildPuzzle);

 module.exports = crosswordPack5;
