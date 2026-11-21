
 // quiz_pack346.js — PuzzlePilot Bigggggg Quiz
 // Bagpuss (1974): complete original 13-episode Smallfilms series.
 // Seven individually selected, question-specific specialist tags per question.

 const facts = `
 What sort of animal is Bagpuss?|A cloth cat|A wooden owl|A felt rabbit|A tin mouse|Easy|Bagpuss|Cloth Toy|Title Character|Pink Cat|Emily Favourite|Magical Shop|Children Animation
 What is the name of the little girl who owns Bagpuss?|Emily|Madeleine|Jenny|Lucy|Easy|Emily|Young Owner|Shopkeeper|Lost Objects|Bagpuss Owner|Opening Scenes|Child Character
 Which character is a rag doll who helps Bagpuss?|Madeleine|Emily|Jenny Mouse|Primrose|Easy|Madeleine|Rag Doll|Shop Companion|Wicker Chair|Female Character|Puppet|Folk Songs
 What kind of creature is Gabriel in Bagpuss?|A toad|A hedgehog|An owl|A dormouse|Easy|Gabriel|Toad|Musician|Shop Friend|Folk Performer|Puppet Character|Banjo Player
 Which bird is Professor Yaffle modelled as?|A woodpecker|An owl|A magpie|A raven|Easy|Professor Yaffle|Woodpecker|Wooden Bird|Bookend|Sceptic|Puppet Character|Shop Shelf
 What are the distinctive colours of Bagpuss's striped body?|Pink and cream|Blue and white|Green and yellow|Brown and orange|Easy|Bagpuss Appearance|Pink Stripes|Cream Stripes|Cloth Cat|Puppet Design|Character Colours|Soft Toy
 How many mice come to life from the Mouse Organ?|Six|Four|Five|Eight|Easy|Six Mice|Mouse Organ|Musical Mice|Shop Characters|Puppet Group|Animated Ornaments|Mouse Choir
 What do the mice turn back into when Bagpuss falls asleep?|Ornaments on the Mouse Organ|Pictures on the wall|Wooden chess pieces|Buttons on a coat|Medium|Mouse Organ|Ornamental Mice|End Sequence|Magical Sleep|Mouse Characters|Shop Furniture|Return To Stillness
 Which mouse is especially prominent in the stories and repairs?|Charliemouse|Timothymouse|Albertmouse|Freddiemouse|Easy|Charliemouse|Mouse Leader|Mouse Organ|Repair Work|Smallest Mouse|Recurring Character|Animated Rodent
 Which instrument does Gabriel commonly play?|A banjo|A trumpet|A clarinet|A violin|Easy|Gabriel|Banjo|Folk Music|Toad Performer|Musical Companion|Instrument|Story Songs
 What is Professor Yaffle when he is not magically alive?|A wooden bookend|A painted clock|A toy weather vane|A carved doorstop|Medium|Professor Yaffle|Bookend|Wooden Woodpecker|Shop Shelf|Everyday Object|End Sequence|Magic Transformation
 What does Emily generally bring into the shop for Bagpuss to examine?|Lost or broken objects|Freshly baked cakes|Newspaper cuttings|Letters from abroad|Easy|Emily Discoveries|Lost Property|Broken Things|Found Objects|Story Premise|Bagpuss Examination|Shop Window
 What does Emily's unusual shop actually sell?|Nothing|Antique furniture|Children's clothes|Second-hand books|Easy|Emily Shop|Nothing For Sale|Lost Property|Found Objects|Shop Premise|Unclaimed Belongings|Window Display
 What causes Bagpuss and the other toys to awaken in each story?|Emily's song to Bagpuss|A clock striking twelve|The shop door opening|A bell on the counter ringing|Easy|Emily Song|Bagpuss Awakening|Magic Words|Opening Ritual|Toys Come Alive|Episode Structure|Incantation
 How does the opening picture change when the toys come to life?|From sepia to colour|From colour to monochrome|From drawings to live news footage|From black-and-white to blue tint|Medium|Sepia Photographs|Colour Animation|Magical Awakening|Visual Transition|Opening Sequence|Stop Motion|Film Style
 How does the picture change as Bagpuss goes back to sleep?|It returns to sepia|It turns bright green|It splits into four panels|It becomes a silhouette|Medium|Return To Sepia|Closing Sequence|Bagpuss Sleep|Visual Transition|Still Toys|Episode Ending|Old Photographs
 What happens to Bagpuss's friends when he falls asleep again?|They fall asleep too|They leave the shop|They start another song|They hide behind the window|Easy|Bagpuss Sleeping|Friends Sleep|Closing Ritual|Magic Ends|Shop Toys|Episode Pattern|Return To Stillness
 In which year was Bagpuss first broadcast?|1974|1969|1978|1982|Easy|1974 Premiere|First Broadcast|British Children Television|Programme Date|Original Run|Smallfilms|BBC History
 How many original Bagpuss episodes were made?|Thirteen|Twenty-six|Thirty-nine|Fifty-two|Easy|Thirteen Episodes|Limited Series|Episode Count|Original Production|1974 Run|Smallfilms Output|Classic Children Television
 How many original series of Bagpuss were produced?|One|Two|Three|Four|Easy|One Series|1974 Only|Original Run|Series Count|BBC Children|Limited Production|Television History
 Which creative partnership made Bagpuss?|Oliver Postgate and Peter Firmin|Gerry Anderson and Sylvia Anderson|Jimmy Perry and David Croft|Brian Cosgrove and Mark Hall|Medium|Oliver Postgate|Peter Firmin|Creators|Animation Partnership|Smallfilms|Programme Origins|1974 Production
 What was the name of the company that produced Bagpuss?|Smallfilms|Cosgrove Hall|Aardman Animations|FilmFair|Medium|Smallfilms|Production Company|Oliver Postgate|Peter Firmin|Stop Motion Studio|British Animation|Production Credits
 Who narrated Bagpuss and supplied its title character's voice?|Oliver Postgate|Peter Firmin|John Faulkner|Brian Cant|Medium|Oliver Postgate|Narrator|Bagpuss Voice|Voice Performance|Creator|Storytelling|Original Soundtrack
 Who voiced Madeleine the rag doll?|Sandra Kerr|Miriam Margolyes|Patricia Hayes|Jean Marsh|Medium|Sandra Kerr|Madeleine Voice|Rag Doll|Voice Actress|Folk Musician|Cast Credits|Original Production
 Who voiced Gabriel the toad?|John Faulkner|Oliver Postgate|Peter Firmin|Richard Briers|Medium|John Faulkner|Gabriel Voice|Toad Character|Voice Actor|Folk Musician|Cast Credits|Original Production
 What was the real-life relationship of Emily Firmin to co-creator Peter Firmin?|She was his daughter|She was his sister|She was his niece|She was his wife|Medium|Emily Firmin|Peter Firmin|Father And Daughter|Live Action Scenes|Emily Casting|Family Connection|Production Trivia
 Which Bagpuss co-creator designed models and made artwork for the series?|Peter Firmin|Oliver Postgate|John Faulkner|Sandra Kerr|Medium|Peter Firmin|Puppet Models|Illustrations|Smallfilms|Visual Design|Production Roles|Craftsmanship
 In which Kent village was Bagpuss filmed?|Blean|Pluckley|Bethersden|Chiddingstone|Hard|Blean|Kent|Canterbury Area|Filming Location|Smallfilms Studio|Production Geography|Peter Firmin Home
 What kind of building housed the original Smallfilms studio in Blean?|A converted cowshed|A disused railway station|An old windmill|A former schoolroom|Hard|Converted Cowshed|Blean Studio|Peter Firmin Home|Production Building|Smallfilms|Kent Filming|Behind Scenes
 Which two performers created and sang much of the folk music for Bagpuss?|Sandra Kerr and John Faulkner|Oliver Postgate and Peter Firmin|Ronnie Hazlehurst and Tony Hatch|Mike Batt and David Rappaport|Medium|Sandra Kerr|John Faulkner|Folk Music|Programme Songs|Music Credits|Madeleine And Gabriel|Soundtrack
 Which BBC poll did Bagpuss top in 1999?|Favourite children's television programme|Best television detective|Favourite Christmas drama|Best science-fiction serial|Medium|1999 BBC Poll|Children Programme Favourite|Viewer Vote|Cultural Legacy|British Television History|Public Recognition|Classic Animation
 What is the title of Bagpuss's first episode?|Ship in a Bottle|The Mouse Mill|The Fiddle|The Frog Princess|Medium|Ship In A Bottle|Episode One|Opening Episode|1974|Episode Order|Miniature Ship|Series Premiere
 Which episode ends the original 13-part run?|Uncle Feedle|Flying|Old Man's Beard|The Giant|Medium|Uncle Feedle|Final Episode|1974|Thirteenth Episode|Episode Order|Series Ending|Cloth Story
 What is Professor Yaffle's full name?|Augustus Barclay Yaffle|Archibald Benjamin Yaffle|Albert Barnaby Yaffle|Algernon Basil Yaffle|Hard|Augustus Barclay Yaffle|Professor Full Name|Woodpecker|Character Trivia|Sceptical Scholar|Bookend|Identity
 Which philosopher helped inspire the character of Professor Yaffle?|Bertrand Russell|Ludwig Wittgenstein|Karl Popper|John Stuart Mill|Hard|Bertrand Russell|Professor Yaffle Inspiration|Oliver Postgate|Character Design|Philosophy|Woodpecker Personality|Behind Scenes
 What does Professor Yaffle repeatedly complain about the mice?|That they are never serious|That they make too much food|That they refuse to sleep|That they cannot sing|Medium|Professor Yaffle|Mouse Criticism|Sceptical Character|Recurring Complaint|Mice Antics|Comic Dialogue|Character Contrast
 In Ship in a Bottle, what does Emily bring that contains pieces of wood?|A glass bottle|A tin lunchbox|A wooden suitcase|A ceramic jug|Easy|Ship In A Bottle|Glass Bottle|Loose Wood|Emily Discovery|Episode One|Broken Model|Found Object
 In Ship in a Bottle, which mythical creatures feature in Bagpuss's story that helps repair the ship?|Mermaids|Dragons|Unicorns|Phoenixes|Medium|Ship In A Bottle|Mermaids|Bagpuss Story|Magic Repair|Model Ship|Sea Tale|Episode One
 What do the mice put back inside the bottle after restoring the model in the first episode?|A miniature ship|A toy lighthouse|A paper fish|A little anchor chain|Medium|Ship In A Bottle|Restored Ship|Mouse Repairs|Bottle Display|Episode One Ending|Tiny Model|Sails
 In The Owls of Athens, what is the old dirty cloth revealed to be?|A cushion cover|A tablecloth|A scarf|A curtain|Medium|Owls Of Athens|Cushion Cover|Old Rag|Cleaning|Episode Two|Emily Find|Textile
 What creature is pictured on the cleaned cloth in The Owls of Athens?|An owl|A lion|A swallow|A tortoise|Easy|Owls Of Athens|Owl Picture|Cushion Cover|Episode Two|Cleaned Fabric|Animal Design|Athens
 Which character insists that the mice clean the old cloth more gently in The Owls of Athens?|Madeleine|Professor Yaffle|Gabriel|Bagpuss|Medium|Owls Of Athens|Madeleine|Gentle Cleaning|Mice Work|Cushion Cover|Rag Doll|Episode Two
 Which character tells the story explaining the owls in The Owls of Athens?|Madeleine|Gabriel|Professor Yaffle|Emily|Medium|Owls Of Athens|Madeleine Story|Folk Narrative|Owl Legend|Episode Two|Storytelling|Rag Doll
 In The Frog Princess, what kind of small objects does Emily bring in?|Ornamental enamel pieces|Broken watch parts|Carved wooden spoons|Glass marbles|Medium|Frog Princess|Enamel Ornaments|Emily Discovery|Episode Three|Small Decorations|Found Object|Jewellery Story
 Which character imagines the ornaments belonged to a frog princess?|Gabriel|Professor Yaffle|Charliemouse|Emily|Medium|Frog Princess|Gabriel Story|Enamel Jewellery|Princess Legend|Episode Three|Toad Character|Storyteller
 In the story of The Frog Princess, whom does the princess kiss?|A frog|A prince|A mouse|A bird|Easy|Frog Princess|Frog Kiss|Princess Choice|Gabriel Tale|Episode Three|Fairy Tale|Romance
 In The Ballet Shoe, how do the mice propose to use the discarded shoe?|As a boat|As a hat|As a bed|As a drum|Easy|Ballet Shoe|Mouse Boat|Shoe Reuse|Episode Four|Inventive Mice|Floating|Found Object
 In The Ballet Shoe, what storybook idea does Professor Yaffle doubt?|Someone living in a shoe|A clock turning into a carriage|A fish granting wishes|A beanstalk reaching the clouds|Medium|Ballet Shoe|Living In A Shoe|Professor Yaffle|Disbelief|Mouse Trick|Nursery Rhyme|Episode Four
 What is the apparently mysterious tartan object in The Hamish really used for?|A pincushion|A tea cosy|A sporran|A glove puppet|Medium|The Hamish|Tartan Pincushion|Scottish Object|Real Identity|Episode Five|Sewing|Madeleine Explanation
 What musical instrument does Bagpuss say the imaginary Hamish resembles when it makes a noise?|Bagpipes|A fiddle|A tin whistle|A harp|Medium|The Hamish|Bagpipe Sound|Imaginary Scottish Beast|Highlands Tale|Episode Five|Unusual Noise|Folk Instrument
 Which bagpipe-playing Scotsman appears in Bagpuss's story of The Hamish?|Tavish McTavish|Angus MacLeod|Hamish Campbell|Duncan McGregor|Hard|Tavish McTavish|The Hamish|Highland Musician|Bagpipes|Story Character|Episode Five|Scottish Legend
 In The Wise Man, which animals are the wise man's friends?|Turtles|Otters|Swans|Frogs|Easy|The Wise Man|Turtles|Wise Man Of Ling Po|Animal Friends|Episode Six|Island Home|Story Plot
 What is the name of the place associated with the wise man in The Wise Man?|Ling-Po|Athens|Hamish Glen|Brittany|Hard|The Wise Man|Ling Po|Island Sage|Professor Yaffle Story|Episode Six|Chinese Folk Tale|Place Name
 How does the wise man return to his island after destroying the bridge in his story?|He walks across the water|He sails a raft|He rides on a turtle|He swims under the bridge|Medium|The Wise Man|Walking On Water|Island Return|Broken Bridge|Turtle Protection|Episode Six|Story Ending
 What is missing from the straw animal Emily brings in The Elephant?|Its ears|Its trunk|Its tusks|Its tail|Easy|The Elephant|Missing Ears|Straw Elephant|Emily Found Object|Episode Seven|Repair Story|Animal Toy
 What type of material is the damaged elephant made from in The Elephant?|Straw|Porcelain|Wool|Tin|Medium|The Elephant|Straw Figurine|Animal Model|Lost Ears|Episode Seven|Toy Material|Craft Object
 In The Mouse Mill, what does the mysterious object resemble before it is opened?|A little house with windows and a door|A rolled-up carpet|A model steam locomotive|A large musical instrument case|Medium|Mouse Mill|Box House|Windows And Door|Emily Object|Episode Eight|Mysterious Container|Small Model
 What machine is discovered inside the box in The Mouse Mill?|The Marvellous Mechanical Mouse Mill|A miniature printing press|An electric spinning wheel|A clockwork crane|Medium|Mouse Mill|Marvellous Mechanical Mouse Mill|Hidden Machine|Episode Eight|Tiny Factory|Mice Discovery|Box Interior
 Who sing about milling after the machine is revealed in The Mouse Mill?|Gabriel and Madeleine|Emily and Professor Yaffle|Bagpuss and Emily|Professor Yaffle and Charlie|Medium|Mouse Mill|Milling Song|Gabriel|Madeleine|Mouse Organ Accompaniment|Episode Eight|Folk Performance
 In The Giant, what kind of broken object does Emily bring to the shop?|A ceramic figurine|A brass clock|A wooden toy train|A glass flower vase|Medium|The Giant|Broken Figurine|Staffordshire Pottery|Emily Find|Episode Nine|Repair Object|Miniature Statue
 What magical accessory repairs the statue in the story told during The Giant?|An umbrella|A walking stick|A pocket watch|A pair of gloves|Medium|The Giant|Magic Umbrella|Broken Statue Repair|Mrs Smithers Rowbottom|Episode Nine|Fantasy Tale|Mending
 Who is said to possess the magical umbrella in The Giant?|Mrs Smithers-Rowbottom|Mrs Beardsmore|Mademoiselle Dupont|Aunt Bertha|Hard|The Giant|Mrs Smithers Rowbottom|Magic Umbrella|Story Character|Episode Nine|Figurine Repair|Unusual Name
 What natural object does Emily bring to the shop in Old Man's Beard?|A tangle of fluffy plant material|A cluster of shells|A fossilised pine cone|A bundle of feathers|Medium|Old Mans Beard|Clematis Seed Heads|Tangled Plant|Emily Discovery|Episode Ten|Wild Plant|Found Object
 What special feature does the king possess in the story of Old Man's Beard?|An extraordinarily silver beard|A magical golden crown|Hair made of flowers|A cloak that changes colour|Medium|Old Mans Beard|Silver Beard|King Story|Royal Hair|Episode Ten|Weaving Legend|Bagpuss Narrative
 What are the king's silvery beard hairs thought suitable for making in Old Man's Beard?|Carpets|Fishing nets|Woollen hats|Ship sails|Medium|Old Mans Beard|Carpet Making|Royal Beard|Weaving|Episode Ten|Story Material|King
 Which mouse demonstrates weaving by acting as a shuttle in Old Man's Beard?|Charliemouse|Eddiemouse|Williemouse|Jenniemouse|Hard|Old Mans Beard|Charliemouse|Weaving Shuttle|Loom Demonstration|Episode Ten|Mice Inventiveness|Textile Work
 In The Fiddle, what object seems to contain the mysterious music?|An upside-down bucket|A locked cupboard|A tin teapot|A hollow log|Easy|The Fiddle|Upside Down Bucket|Mysterious Music|Episode Eleven|Emily Object|Irish Tune|Hidden Instrument
 Which mythical Irish creature does Gabriel imagine is making the music in The Fiddle?|A leprechaun|A banshee|A selkie|A pooka|Medium|The Fiddle|Leprechaun|Gabriel Story|Irish Folklore|Episode Eleven|Hidden Musician|Cabbages Tale
 What does Charliemouse find beneath the bucket in The Fiddle?|A tiny fiddle|A miniature harp|A silver whistle|A brass bell|Medium|The Fiddle|Tiny Violin|Charliemouse|Bucket Mystery|Episode Eleven|Small Instrument|Music Discovery
 What household cleaning implement is found among the things in Flying?|A twig broom|A feather duster|A mop|A scrubbing brush|Easy|Flying|Twig Broom|Basket Contents|Episode Twelve|Cleaning Tool|Emily Discovery|Folklore Song
 What unusual job does the woman in the song from Flying perform?|Brushing cobwebs out of the sky|Polishing the stars|Washing the moon|Painting clouds|Medium|Flying|Sky Cobwebs|Broom Song|Madeleine|Gabriel|Episode Twelve|Imaginative Tale
 What do the mice fold from Emily's cloth in Uncle Feedle to help Bagpuss think?|A thinking cap|A sleeping bag|A tablecloth|A puppet theatre|Medium|Uncle Feedle|Thinking Cap|Cloth Folding|Charliemouse|Episode Thirteen|Bagpuss Story|Inventive Mice
 What does Charliemouse initially suggest Emily's cloth might be in Uncle Feedle?|A house for a rag doll|A bird's nest|A model fishing sail|A blanket for a toad|Medium|Uncle Feedle|Rag Doll House|Charliemouse Suggestion|Cloth Object|Final Episode|Mouse Imagination|Fabric
 `;

 const FIRST_ID = 16623;
 const EXPECTED_COUNT = 73;

 const normalise = value =>
   String(value).normalize('NFKC').trim().toLocaleLowerCase('en-GB');

 const questions = facts.trim().split('\n')
   .map(line => line.trim())
   .filter(Boolean)
   .map((line, index) => {
     const id = `tv_${FIRST_ID + index}`;
     const fields = line.split('|').map(value => value.trim());

     if (fields.length !== 13 || fields.some(value => !value)) {
       throw new Error(
         `Pack 346: invalid fields at ${id} (${fields.length})`
       );
     }

     const [
       question, correctAnswer, wrong1, wrong2, wrong3,
       difficulty, ...specificTags
     ] = fields;

     if (
       !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
       specificTags.length !== 7 ||
       new Set(specificTags.map(normalise)).size !== 7
     ) {
       throw new Error(
         `Pack 346: invalid difficulty or specialist tags at ${id}`
       );
     }

     const answers = [wrong1, wrong2, wrong3];

     if (
       new Set([correctAnswer, ...answers].map(normalise)).size !== 4
     ) {
       throw new Error(`Pack 346: duplicate answer at ${id}`);
     }

     answers.splice(index % 4, 0, correctAnswer);

     const tags = [...new Map([
       'Television',
       'British Television',
       'Children Television',
       'Stop Motion Animation',
       'Puppet Animation',
       'Family Television',
       'Smallfilms',
       '1974',
       'Bagpuss',
       'Programme: Bagpuss',
       ...specificTags,
       correctAnswer
     ].map(tag => [normalise(tag), tag])).values()];

     return {
       id,
       category: 'Television',
       programme: 'Bagpuss',
       question,
       answers,
       correctAnswer,
       difficulty,
       tags,
       dailyEligible: true
     };
   });

 // Validate the actual exported question objects.

 if (
   questions.length !== EXPECTED_COUNT ||
   questions[0].id !== 'tv_16623' ||
   questions[questions.length - 1].id !==
     `tv_${FIRST_ID + EXPECTED_COUNT - 1}`
 ) {
   throw new Error(
     `Pack 346: count/ID range incorrect (${questions.length})`
   );
 }

 const seen = new Set();

 for (let i = 0; i < questions.length; i++) {
   const q = questions[i];
   const key = normalise(q.question);

   if (
     q.id !== `tv_${FIRST_ID + i}` ||
     seen.has(key) ||
     q.category !== 'Television' ||
     q.programme !== 'Bagpuss' ||
     q.answers.length !== 4 ||
     new Set(q.answers.map(normalise)).size !== 4 ||
     q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
     q.tags.length < 15 ||
     q.dailyEligible !== true
   ) {
     throw new Error(
       `Pack 346: exported-object validation failed at ${q.id}`
     );
   }

   seen.add(key);
 }
// 21 November 2026: Bagpuss detailed episode-story audit.
// Preserve all 73 original questions and IDs tv_16623–tv_16695.
// All 13 original episodes have additional, source-grounded story detail.
const auditAdditions = [
  {
    "id": "tv_38071",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what puzzles Bagpuss about the model vessel found in a bottle?",
    "answers": [
      "Where a ship trapped in a bottle could sail",
      "Why it has no captain's hat",
      "How it was painted pink",
      "Who would buy its cargo"
    ],
    "correctAnswer": "Where a ship trapped in a bottle could sail",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E1 Ship in a Bottle",
      "Episode plot audit",
      "Answer: Where a ship trapped in a bottle could sail",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Bottle mystery",
      "Voyage question",
      "Bagpuss wonder"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38072",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what kind of verse helps magically reassemble the miniature ship?",
    "answers": [
      "A sea shanty and a limerick",
      "A nursery rhyme and a poem",
      "A riddle and a weather forecast",
      "A hymn and a marching song"
    ],
    "correctAnswer": "A nursery rhyme and a poem",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E1 Ship in a Bottle",
      "Episode plot audit",
      "Answer: A nursery rhyme and a poem",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Ship repair",
      "Verses",
      "Mermaid story"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38073",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, why do the mice run away when the dirty cushion cover has been cleaned?",
    "answers": [
      "They think it smells of burning",
      "They mistake it for a cat's blanket",
      "They are frightened by its picture of an owl",
      "They believe Yaffle has hidden underneath"
    ],
    "correctAnswer": "They are frightened by its picture of an owl",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E2 The Owls of Athens",
      "Episode plot audit",
      "Answer: They are frightened by its picture of an owl",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Mice frightened",
      "Cleaned cushion",
      "Owl image"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38074",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what fault brings punishment on the singing owls in Madeleine's tale?",
    "answers": [
      "They refuse to leave Athens",
      "They fight the king's soldiers",
      "They steal a royal crown",
      "They become greedy"
    ],
    "correctAnswer": "They become greedy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E2 The Owls of Athens",
      "Episode plot audit",
      "Answer: They become greedy",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Owls fable",
      "Greed",
      "Madeleine story"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38075",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what does the moon take away as punishment from the greedy owls?",
    "answers": [
      "Their beautiful singing voices",
      "Their eyesight",
      "Their feathers",
      "Their ability to fly"
    ],
    "correctAnswer": "Their beautiful singing voices",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E2 The Owls of Athens",
      "Episode plot audit",
      "Answer: Their beautiful singing voices",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Moon punishment",
      "Owls silenced",
      "Singing"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38076",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what does Gabriel sing about once the old cushion has been repaired?",
    "answers": [
      "The Grand Duke of York",
      "The Bony King of Nowhere",
      "The Sailor with No Ship",
      "The Mice of Ling-Po"
    ],
    "correctAnswer": "The Bony King of Nowhere",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E2 The Owls of Athens",
      "Episode plot audit",
      "Answer: The Bony King of Nowhere",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Gabriel song",
      "Repaired cushion",
      "King of Nowhere"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38077",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what two animals are the enamel ornaments first thought to represent?",
    "answers": [
      "A horse and a goat",
      "A fox and a mouse",
      "A cat and a bird",
      "A frog and an elephant"
    ],
    "correctAnswer": "A cat and a bird",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E3 The Frog Princess",
      "Episode plot audit",
      "Answer: A cat and a bird",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Enamel pieces",
      "Early guesses",
      "Creature shapes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38078",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, why does the princess prefer a frog to the available royal suitors?",
    "answers": [
      "The princes have stolen her necklace",
      "The frog offers her a palace",
      "She is forbidden to meet the princes",
      "She does not like any of the princes"
    ],
    "correctAnswer": "She does not like any of the princes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E3 The Frog Princess",
      "Episode plot audit",
      "Answer: She does not like any of the princes",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Princess choice",
      "Rejected suitors",
      "Fairy tale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38079",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what does the princess become after kissing the frog in Gabriel's story?",
    "answers": [
      "A frog princess herself",
      "A queen of the birds",
      "A little enamel cat",
      "A wooden doll"
    ],
    "correctAnswer": "A frog princess herself",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E3 The Frog Princess",
      "Episode plot audit",
      "Answer: A frog princess herself",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Frog transformation",
      "Royal romance",
      "Gabriel fable"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38080",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what do the mice use as oars when they pretend the old shoe is a boat?",
    "answers": [
      "Pencils",
      "Feathers",
      "Matchsticks",
      "Knitting needles"
    ],
    "correctAnswer": "Feathers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E4 The Ballet Shoe",
      "Episode plot audit",
      "Answer: Feathers",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Shoe boat",
      "Pretend rowing",
      "Mouse crew"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38081",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, how do the mice fool Professor Yaffle into believing someone lives inside the ballet shoe?",
    "answers": [
      "They hide a miniature lamp inside it",
      "They paint windows on its side",
      "They keep appearing from the shoe one after another",
      "They tell him a doll has moved in"
    ],
    "correctAnswer": "They keep appearing from the shoe one after another",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E4 The Ballet Shoe",
      "Episode plot audit",
      "Answer: They keep appearing from the shoe one after another",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Yaffle tricked",
      "Mouse procession",
      "Shoe house"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38082",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, why do the mice briefly refuse to finish mending the discarded shoe?",
    "answers": [
      "They have run out of thread",
      "They dislike the ballet music",
      "Professor Yaffle has locked their tools away",
      "They want to keep singing"
    ],
    "correctAnswer": "They want to keep singing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E4 The Ballet Shoe",
      "Episode plot audit",
      "Answer: They want to keep singing",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Mice strike",
      "Music first",
      "Repair delay"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38083",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what happens to Professor Yaffle when he joins the mechanical ballerina's dance?",
    "answers": [
      "He becomes tangled in the shoe's laces",
      "He falls into the Mouse Organ",
      "He loses his wooden beak",
      "He gets trapped inside a music box"
    ],
    "correctAnswer": "He becomes tangled in the shoe's laces",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E4 The Ballet Shoe",
      "Episode plot audit",
      "Answer: He becomes tangled in the shoe's laces",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Yaffle dancing",
      "Prima Ballerina",
      "Shoelaces"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38084",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what does Professor Yaffle think the Highland creature really resembles before its purpose is discovered?",
    "answers": [
      "A hedgehog inside a hat",
      "A porcupine without quills",
      "A tartan owl",
      "A knitted horse"
    ],
    "correctAnswer": "A porcupine without quills",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E5 The Hamish",
      "Episode plot audit",
      "Answer: A porcupine without quills",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Yaffle doubts",
      "Quillless animal",
      "Tartan cloth"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38085",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, how do the friends finally give the apparent porcupine its missing spikes?",
    "answers": [
      "They sew on woollen tassels",
      "They glue feathers to it",
      "They stick pins into it",
      "They attach matchsticks to its back"
    ],
    "correctAnswer": "They stick pins into it",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E5 The Hamish",
      "Episode plot audit",
      "Answer: They stick pins into it",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Pincushion discovery",
      "Quills",
      "Useful repair"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38086",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what does Yaffle complain has not happened after Bagpuss finishes telling the Highland legend?",
    "answers": [
      "The mice have forgotten the Scotsman's name",
      "Gabriel has stopped playing the banjo",
      "Emily's bottle is still broken",
      "The object has not been improved at all"
    ],
    "correctAnswer": "The object has not been improved at all",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E5 The Hamish",
      "Episode plot audit",
      "Answer: The object has not been improved at all",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Yaffle criticism",
      "Bagpuss legend",
      "Practical purpose"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38087",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, why do the villagers threaten the wise man's animal companions?",
    "answers": [
      "They want to make turtle soup",
      "They want to sell their shells",
      "They believe the turtles are stealing grain",
      "They wish to teach them to sing"
    ],
    "correctAnswer": "They want to make turtle soup",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E6 The Wise Man",
      "Episode plot audit",
      "Answer: They want to make turtle soup",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Turtle soup",
      "Wise man's friends",
      "Villagers"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38088",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what does the wise man do to the wooden bridge connecting his island to the mainland?",
    "answers": [
      "He paints it bright red",
      "He dismantles it while crossing",
      "He turns it into a raft",
      "He sells it to a fisherman"
    ],
    "correctAnswer": "He dismantles it while crossing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E6 The Wise Man",
      "Episode plot audit",
      "Answer: He dismantles it while crossing",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Bridge destroyed",
      "Island privacy",
      "Wise man"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38089",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what alternative explanation does Yaffle give for the wise man's return across the water?",
    "answers": [
      "A giant fish carries him on its back",
      "He floats on an inflated balloon",
      "Turtles form stepping stones just below the surface",
      "He pulls himself along an underwater rope"
    ],
    "correctAnswer": "Turtles form stepping stones just below the surface",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E6 The Wise Man",
      "Episode plot audit",
      "Answer: Turtles form stepping stones just below the surface",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Yaffle explanation",
      "Turtle stepping stones",
      "Water crossing"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38090",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, how do Bagpuss's companions try to unravel the mystery of the straw elephant's missing ears?",
    "answers": [
      "By asking Emily to visit the zoo",
      "By sending the elephant to a tailor",
      "By building a cardboard circus",
      "By singing stories and songs about it"
    ],
    "correctAnswer": "By singing stories and songs about it",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E7 The Elephant",
      "Episode plot audit",
      "Answer: By singing stories and songs about it",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Elephant repairs",
      "Songs",
      "Missing ears"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38091",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what is eventually restored to the battered straw animal?",
    "answers": [
      "Its ears",
      "Its trunk",
      "Its tusks",
      "Its tail"
    ],
    "correctAnswer": "Its ears",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E7 The Elephant",
      "Episode plot audit",
      "Answer: Its ears",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Elephant repaired",
      "Straw toy",
      "Missing parts"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38092",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what ingredients does Charliemouse claim the Mouse Mill can turn into chocolate biscuits?",
    "answers": [
      "Oats and raisins",
      "Breadcrumbs and butterbeans",
      "Milk and sugar",
      "Flour and strawberries"
    ],
    "correctAnswer": "Breadcrumbs and butterbeans",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E8 The Mouse Mill",
      "Episode plot audit",
      "Answer: Breadcrumbs and butterbeans",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Mouse Mill recipe",
      "Surprise biscuits",
      "Charliemouse claim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38093",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, which mouse carries off the biscuits before anyone can taste them?",
    "answers": [
      "Charliemouse",
      "Janiemouse",
      "Williemouse",
      "Jennymouse"
    ],
    "correctAnswer": "Williemouse",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E8 The Mouse Mill",
      "Episode plot audit",
      "Answer: Williemouse",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Biscuits hidden",
      "Mill demonstration",
      "Williemouse"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38094",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, how does Yaffle find out that the Mouse Mill's remarkable biscuit production is a trick?",
    "answers": [
      "He asks Emily where the biscuits came from",
      "He dismantles the Mouse Organ",
      "He tastes a biscuit made of straw",
      "He investigates behind the machine"
    ],
    "correctAnswer": "He investigates behind the machine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E8 The Mouse Mill",
      "Episode plot audit",
      "Answer: He investigates behind the machine",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Yaffle investigation",
      "Mill deception",
      "Reused materials"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38095",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what is really happening to the materials inside the supposedly miraculous mill?",
    "answers": [
      "The mice are reusing them to fool the others",
      "A hidden oven is baking fresh biscuits",
      "The materials are sent through a pipe to the shop",
      "The box contains a miniature chocolate factory"
    ],
    "correctAnswer": "The mice are reusing them to fool the others",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E8 The Mouse Mill",
      "Episode plot audit",
      "Answer: The mice are reusing them to fool the others",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Mouse trick",
      "Recycled ingredients",
      "Mechanical mill"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38096",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what paradox amuses the characters about the broken figurine described as a giant?",
    "answers": [
      "It is too heavy for a real giant to carry",
      "It would be the smallest giant in the world",
      "It is much taller than the shop",
      "It is made of cloth instead of clay"
    ],
    "correctAnswer": "It would be the smallest giant in the world",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E9 The Giant",
      "Episode plot audit",
      "Answer: It would be the smallest giant in the world",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Giant scale",
      "Tiny figure",
      "Comic contradiction"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38097",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what does Madeleine sing about after the mice quarrel over the figurine's size?",
    "answers": [
      "A giant who eats chocolate biscuits",
      "A queen who mends umbrellas",
      "How large things appear compared with others",
      "The best way to paint pottery"
    ],
    "correctAnswer": "How large things appear compared with others",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E9 The Giant",
      "Episode plot audit",
      "Answer: How large things appear compared with others",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Madeleine song",
      "Relative size",
      "Disagreement"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38098",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what do other elderly men do when they hope to sell their beards like the king's?",
    "answers": [
      "Dye them pink and cream",
      "Weave them into hats themselves",
      "Send them away in bottles",
      "Cut them off and wash them"
    ],
    "correctAnswer": "Cut them off and wash them",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E10 Old Man's Beard",
      "Episode plot audit",
      "Answer: Cut them off and wash them",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Beard trade",
      "Royal example",
      "Imitators"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38099",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, where do the would-be beard sellers leave their washed beards to dry?",
    "answers": [
      "Hanging in hedges",
      "Inside a mill oven",
      "Across the river bridge",
      "On the windowsill of Bagpuss's shop"
    ],
    "correctAnswer": "Hanging in hedges",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E10 Old Man's Beard",
      "Episode plot audit",
      "Answer: Hanging in hedges",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Beards drying",
      "Hedgerows",
      "Strange story"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38100",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what skill does Charliemouse become interested in after Madeleine's song about a master craftsman?",
    "answers": [
      "Pottery",
      "Weaving",
      "Bookbinding",
      "Woodcarving"
    ],
    "correctAnswer": "Weaving",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E10 Old Man's Beard",
      "Episode plot audit",
      "Answer: Weaving",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Charliemouse",
      "Master weaver",
      "New skill"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38101",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, why do the mice hurry to fetch water when they first see the old upturned bucket?",
    "answers": [
      "They hear a boiling kettle",
      "A flower is wilting inside",
      "Smoke is coming from it",
      "They think a chimney is on fire"
    ],
    "correctAnswer": "Smoke is coming from it",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E11 The Fiddle",
      "Episode plot audit",
      "Answer: Smoke is coming from it",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Smoking bucket",
      "Fire concern",
      "Mice rescue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38102",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what vegetable features in Gabriel's tale of an Irish leprechaun?",
    "answers": [
      "Carrots",
      "Potatoes",
      "Turnips",
      "Cabbages"
    ],
    "correctAnswer": "Cabbages",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E11 The Fiddle",
      "Episode plot audit",
      "Answer: Cabbages",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Leprechaun story",
      "Gabriel",
      "Vegetable patch"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38103",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what does Charliemouse claim when his tiny instrument seems to play beautifully without his effort?",
    "answers": [
      "The fiddle is playing him",
      "Professor Yaffle is playing the fiddle",
      "Gabriel has hidden a recording",
      "The Mouse Organ is copying his tune"
    ],
    "correctAnswer": "The fiddle is playing him",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E11 The Fiddle",
      "Episode plot audit",
      "Answer: The fiddle is playing him",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Charliemouse fiddle",
      "Magical music",
      "Instrument"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38104",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, which two relatives feature in Janiemouse's story about trying to fly to the sun?",
    "answers": [
      "Uncle Feedle and Cousin Flo",
      "Uncle Henry and Auntie Ada",
      "Tavish and Morag McTavish",
      "Mr and Mrs Smithers-Rowbottom"
    ],
    "correctAnswer": "Uncle Henry and Auntie Ada",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E12 Flying",
      "Episode plot audit",
      "Answer: Uncle Henry and Auntie Ada",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Janiemouse relatives",
      "Flying story",
      "Uncle Henry"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38105",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what do the would-be sun explorers hope to collect?",
    "answers": [
      "Clouds in a jar",
      "Feathers from an angel",
      "Gold from the sun",
      "Rainbows for a curtain"
    ],
    "correctAnswer": "Gold from the sun",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E12 Flying",
      "Episode plot audit",
      "Answer: Gold from the sun",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Sun expedition",
      "Gold",
      "Impossible plan"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38106",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what small utensil do the sun explorers plan to use to collect their treasure?",
    "answers": [
      "A garden trowel",
      "A pair of tweezers",
      "A wooden spoon",
      "A teaspoon"
    ],
    "correctAnswer": "A teaspoon",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E12 Flying",
      "Episode plot audit",
      "Answer: A teaspoon",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Sun gold",
      "Teaspoon",
      "Aunt Ada"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38107",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what materials do the mice use to attempt to build a flying machine?",
    "answers": [
      "A basket and oriental fans",
      "A shoe and feathers",
      "A bucket and a piece of string",
      "A tiny boat and cardboard sails"
    ],
    "correctAnswer": "A basket and oriental fans",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E12 Flying",
      "Episode plot audit",
      "Answer: A basket and oriental fans",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Mouse invention",
      "Basket",
      "Fans"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38108",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what subject does Professor Yaffle try to explain after seeing the mice's proposed flying machine?",
    "answers": [
      "Navigation by stars",
      "Aeronautics",
      "Marine biology",
      "The history of clocks"
    ],
    "correctAnswer": "Aeronautics",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E12 Flying",
      "Episode plot audit",
      "Answer: Aeronautics",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Yaffle lesson",
      "Flying science",
      "Mice project"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38109",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what form of accommodation does Gabriel sing about while Madeleine is busy repairing the cloth?",
    "answers": [
      "Sleeping in a lighthouse",
      "Moving into a shoe boat",
      "Living on top of a Number 2 bus",
      "Building a tower out of books"
    ],
    "correctAnswer": "Living on top of a Number 2 bus",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E13 Uncle Feedle",
      "Episode plot audit",
      "Answer: Living on top of a Number 2 bus",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Gabriel song",
      "Number 2 bus",
      "Unusual home"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38110",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, which character does the repair work on the rag doll's fabric house?",
    "answers": [
      "Professor Yaffle",
      "Gabriel",
      "Emily",
      "Madeleine"
    ],
    "correctAnswer": "Madeleine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E13 Uncle Feedle",
      "Episode plot audit",
      "Answer: Madeleine",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Doll house",
      "Cloth mended",
      "Madeleine"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38111",
    "category": "Television",
    "programme": "Bagpuss",
    "question": "In Bagpuss, what sort of jokes do the mice make when Charliemouse decides that Emily's cloth is a doll's house?",
    "answers": [
      "Puns about rags",
      "Knock-knock jokes about doors",
      "Jokes about fish",
      "Jokes about clocks"
    ],
    "correctAnswer": "Puns about rags",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children Television",
      "Stop Motion Animation",
      "Puppet Animation",
      "Smallfilms",
      "1974",
      "Bagpuss",
      "Programme: Bagpuss",
      "Episode: S1E13 Uncle Feedle",
      "Episode plot audit",
      "Answer: Puns about rags",
      "Source: https://thetvdb.com/series/bagpuss/allseasons/official",
      "Mouse jokes",
      "Rag doll house",
      "Wordplay"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if (questions.length !== 114 ||
 questions[0].id !== 'tv_16623' || questions[72].id !== 'tv_16695' ||
 auditAdditions[0].id !== 'tv_38071' ||
 auditAdditions[auditAdditions.length - 1].id !== 'tv_38111' ||
 new Set(questions.map(q=>q.id)).size !== questions.length ||
 new Set(questions.map(q=>normalise(q.question))).size !== questions.length ||
 questions.some(q=>q.answers.length!==4 ||
 new Set(q.answers.map(normalise)).size!==4 ||
 q.answers.filter(a=>a===q.correctAnswer).length!==1 ||
 q.programme!=='Bagpuss' || !q.tags.includes('Programme: Bagpuss') ||
 q.tags.length<15 || q.dailyEligible!==true) ||
 auditAdditions.some(q=>!q.question.startsWith('In Bagpuss, ')||
 !q.tags.some(t=>t.startsWith('Source: https://'))))
 throw Error('Pack 346 detailed storyline audit failed');
module.exports = questions;
