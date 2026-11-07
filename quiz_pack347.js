
 // quiz_pack347.js — PuzzlePilot Bigggggg Quiz
 // The Clangers (1969–1974; 2015–2020).
 // Original 26 episodes and election special; revival's 104 episodes.
 // Seven individually selected specialist tags per question.

 const facts = `
 In which year did The Clangers first appear on BBC television?|1969|1965|1972|1976|Easy|1969 Debut|First Broadcast|BBC One|Original Series|Space Animation|Programme Origins|British Childhood
 Who created The Clangers with modelmaker Peter Firmin?|Oliver Postgate|Gordon Murray|John Ryan|Brian Cosgrove|Easy|Oliver Postgate|Peter Firmin|Creative Partnership|Smallfilms|Programme Creation|Writer Animator|British Television
 Which company produced the original Clangers programmes?|Smallfilms|FilmFair|Cosgrove Hall|Aardman Animations|Medium|Smallfilms|Oliver Postgate|Peter Firmin|Production Studio|Stop Motion|Original Run|Animation History
 Who narrated the original 1969–1974 Clangers stories?|Oliver Postgate|Michael Palin|Brian Cant|William Shatner|Easy|Oliver Postgate|Original Narrator|1969 To 1974|Voiceover|Smallfilms|Storytelling|BBC One
 Who designed and made the Clangers models for the original series?|Peter Firmin|Oliver Postgate|Vernon Elliott|Dan Postgate|Medium|Peter Firmin|Modelmaker|Puppets|Original Production|Smallfilms|Animation Craft|Character Design
 Who knitted and dressed the original Clangers puppets?|Joan Firmin|Sandra Kerr|Mavis Nicholson|Joy Whitby|Hard|Joan Firmin|Knitted Puppets|Peter Firmin Family|Costume Making|Wool Characters|Original Models|Behind The Scenes
 What distinctive sound do the Clangers use to communicate?|High-pitched whistles|A series of clicks|Rhythmic drumming|Electronic beeps|Easy|Clanger Language|Whistling|Character Voices|Alien Communication|Sound Design|Dialogue|Signature Feature
 Which instrument produced the original Clangers' whistled speech?|A swanee whistle|A tin whistle|A piccolo|A recorder|Medium|Swanee Whistle|Dialogue Recording|Oliver Postgate|Character Language|Sound Effects|Voice Technique|Studio Production
 What type of animation was used for both the original and revived Clangers?|Stop-motion animation|Traditional hand-drawn animation|Live-action puppetry|Computer-only 3D animation|Easy|Stop Motion|Model Animation|Production Method|Revival Continuity|Puppet Movement|Visual Style|Animation Technique
 What colour is the little planet inhabited by the Clangers?|Blue|Red|Green|Yellow|Easy|Blue Planet|Home World|Space Setting|Moonlike World|Astronomy Theme|Planet Surface|Series Premise
 What are the Clangers' clothes and bodies chiefly made from?|Knitted fabric|Inflatable rubber|Carved wood|Plasticine|Easy|Knitted Characters|Wool|Handmade Puppets|Pink Creatures|Model Design|Smallfilms|Character Appearance
 Which sound inspired the name Clangers?|Metal hatch lids clanging|A spaceship engine|A bird striking a bell|The whistle of a kettle|Medium|Clangers Name|Metal Lids|Burrow Entrances|Clanging Noise|Title Origin|Sound Effect|Protective Hatches
 What were the Clangers' crater entrances covered with?|Old metal dustbin lids|Glass domes|Wooden trapdoors|Stone slabs|Medium|Dustbin Lids|Crater Burrows|Planet Home|Protective Covers|Space Debris|Meteorite Shelter|Burrow Entrances
 What is the main savoury food provided by the Soup Dragon?|Green soup|Red stew|Yellow custard|Brown porridge|Easy|Green Soup|Soup Dragon|Clanger Food|Underground Wells|Family Meals|Diet|Planet Cuisine
 Which blue food is also a staple of the Clangers' diet?|Blue string pudding|Blueberry crumble|Blue moon cheese|Blue jelly beans|Easy|Blue String Pudding|Clanger Diet|Unusual Food|Family Meals|Colourful Cuisine|Space Cookery|Series Traditions
 Where does the Soup Dragon normally live?|In underground soup wells|Inside the Iron Chicken's nest|On a passing asteroid|In a glass greenhouse|Easy|Soup Dragon|Soup Wells|Underground Caverns|Green Soup|Planet Interior|Dragon Home|Food Supply
 Which member of the family enjoys making useful inventions?|Major Clanger|Granny Clanger|Mother Clanger|Tiny Clanger|Easy|Major Clanger|Inventor|Family Father|Mechanical Devices|Workshop|Character Trait|Practical Projects
 Which Clanger particularly loves gardening?|Mother Clanger|Granny Clanger|Tiny Clanger|Major Clanger|Easy|Mother Clanger|Gardening|Herbs And Plants|Family Matriarch|Planet Garden|Horticulture|Character Interests
 Who is especially devoted to knitting in the Clanger household?|Granny Clanger|Mother Clanger|Tiny Clanger|Small Clanger|Easy|Granny Clanger|Knitting|Older Generation|Family Grandmother|Woollen Crafts|Character Hobby|Domestic Life
 How is Tiny Clanger related to Small Clanger?|She is his younger sister|She is his twin brother|She is his aunt|She is his grandmother|Easy|Tiny Clanger|Small Clanger|Siblings|Family Relationships|Younger Sister|Children|Main Characters
 What is the name of the Clanger who is Tiny's older brother?|Small|Major|Baby|Grandpa|Easy|Small Clanger|Tiny Clanger|Older Brother|Adventurous Son|Family Children|Character Identity|Sibling Relationship
 Which flying character lives in a nest of scrap metal?|The Iron Chicken|The Soup Dragon|The Froglet|The Cloud|Easy|Iron Chicken|Scrap Metal Nest|Orbiting Home|Flying Visitor|Friend Of Tiny|Metal Bird|Space Neighbour
 Which construction toy was used to build the original Iron Chicken model?|Meccano|Lego|Tinkertoy|Fischer Technik|Hard|Meccano|Iron Chicken Puppet|Metal Construction|Peter Firmin|Original Prop|Model Building|Production Materials
 What is the name of the little springy creatures introduced in a top hat?|Froglets|Wols|Eggbots|Glow Buzzers|Easy|Froglets|Top Hat|Bouncing Creatures|Alien Friends|Planet Visitors|Springlike Movement|Original Series
 What edible-looking shapes grow on the Clangers' music trees?|Musical notes|Golden apples|Silver bells|Glass beads|Medium|Music Trees|Musical Notes|Planet Flora|Soundscape|Magical Plants|Melody Making|Musical Storytelling
 Who wrote the music for the original Clangers series?|Vernon Elliott|Ronnie Hazlehurst|Mike Batt|John Du Prez|Hard|Vernon Elliott|Original Composer|1969 Soundtrack|Orchestral Music|Production Credits|Smallfilms|Musical Score
 Which earlier Smallfilms story supplied the Moonmouse idea behind The Clangers?|Noggin and the Moonmouse|Ivor and the Dragon|Bagpuss in Space|Pogles' Rocket|Medium|Noggin And The Moonmouse|1967 Book|Source Inspiration|Noggin The Nog|Oliver Postgate|Literary Origins|Alien Design
 What feature was removed from the original Moonmouse design for The Clangers?|Its tail|Its ears|Its claws|Its whiskers|Hard|Moonmouse Tail|Character Redesign|Soup Joke|Peter Firmin|Programme Origins|Creature Anatomy|Model Adaptation
 Which creatures resemble blue flying cows with wing-like ears?|Sky Moos|Hoots|Glow Buzzers|Froglets|Medium|Sky Moos|Flying Cows|Winglike Ears|Blue Creatures|Planet Wildlife|Space Visitors|Character Design
 Which Clanger first becomes trapped by a balloon in the original episode Flying?|Tiny|Granny|Mother|Major|Medium|Flying 1969|Tiny Clanger|Balloon Mishap|First Episode|Cave Roof|Original Series|Plot Detail
 What does the family discover in the 1969 episode The Visitor?|A television set|A railway engine|A teapot|A typewriter|Medium|The Visitor 1969|Television Set|Found Object|Original Episode Two|Space Debris|New Technology|Episode Plot
 What collides with the Iron Chicken in the 1969 episode Chicken?|A firework|A model aeroplane|A meteor|A balloon|Medium|Chicken 1969|Fireworks|Iron Chicken|Original Series|Space Accident|Flying Projectile|Episode Incident
 Which Clanger discovers the joy of music in the early episode titled Music?|Tiny|Major|Granny|Mother|Medium|Music 1969|Tiny Clanger|Discovery|Musical Episode|Original Series|Character Interest|Planet Sounds
 What lands on the planet in the original episode The Intruder?|A lunar rover|A flying saucer with tourists|A satellite dish|A weather balloon|Medium|The Intruder 1969|Lunar Rover|Earth Probe|Space Exploration|Original Episode|Unexpected Landing|Mechanical Visitor
 What vehicle does Tiny build to visit the Iron Chicken in Visiting Friends?|A helicopter|A submarine|A rocket bicycle|A hovercraft|Medium|Visiting Friends 1970|Tiny Invention|Helicopter|Iron Chicken|Original Series|Journey|Flying Machine
 In Fishing, what unusual vehicle does Major use for his fishing trip?|A flying music boat|A glass bubble|An inflatable raft|A motorised teapot|Medium|Fishing 1970|Major Clanger|Music Boat|Space Fishing|Original Series|Flying Craft|Adventure
 What item contains Froglets when the Clangers discover them in The Top Hat?|A top hat|A shoe box|A watering can|A suitcase|Medium|The Top Hat 1970|Froglets|Top Hat Discovery|Original Series|Strange Visitors|Episode Object|Alien Creatures
 Which creature becomes a mother in the original 1970 episode The Dragon Egg?|The Soup Dragon|The Iron Chicken|The Cloud|A Sky Moo|Medium|The Dragon Egg 1970|Soup Dragon|Baby Soup Dragon|Egg Hatching|Original Series|New Arrival|Dragon Family
 What noisy creature is brought back from space in the original episode The Hoot?|A Hoot|An Eggbot|A Glow Buzzer|A Froglet|Medium|The Hoot 1970|Metal Creature|Noise|Original Series|Space Fishing|Visitor|Alien Sound
 What kind of visitors arrive in The Meeting and object to the changed Hoot?|More Hoots|A group of Sky Moos|A family of Soup Dragons|Several astronauts|Medium|The Meeting 1970|Hoot Visitors|Alien Gathering|Original Series|Disagreement|Sounding Creatures|Episode Story
 What does Tiny find while fishing in space in the original episode Treasure?|A bag of golden coins|A box of musical instruments|A silver crown|A chest of gemstones|Medium|Treasure 1970|Tiny Clanger|Golden Coins|Space Fishing|Original Series|Unexpected Wealth|Found Riches
 In the original episode Goods, which troublesome device is assembled?|A machine that makes plastic objects|A machine that freezes soup|A giant telescope|An automated knitting loom|Medium|Goods 1970|Plastic Producing Machine|Consumer Goods|Original Series Finale|Runaway Production|Mechanical Trouble|1970 Story
 Which creatures are the Clangers trying to keep warm in The Tablecloth?|The Froglets|The Sky Moos|The Eggbots|The Hoots|Medium|The Tablecloth 1971|Froglets|Keeping Warm|Second Series Premiere|Protective Fabric|Alien Friends|Shelter
 What kind of visitor arrives in The Rock Collector?|An astronaut|A travelling salesman|A fisherman|A farmer|Medium|The Rock Collector 1971|Human Astronaut|Planet Rocks|Second Series|Space Explorer|Encounter|Visitor
 What does the visiting astronaut fall into in The Rock Collector?|The soup|A pond|A crater full of sand|A nest of metal|Medium|The Rock Collector 1971|Astronaut Mishap|Soup Well|Tiny Startles Visitor|Second Series|Comic Accident|Space Journey
 What is Small searching for when he gets lost underground in Glow-Honey?|Glow-honey|Blue string pudding|A lost hat|A comet fragment|Medium|Glow Honey 1971|Small Clanger|Underground Caves|Glow Buzzers|Second Series|Lost Explorer|Unusual Food
 How do the Clangers acquire the object that gives the original episode The Teapot its name?|They fish it from space|They unearth it while digging|The Iron Chicken gives it to them|An astronaut leaves it behind|Medium|The Teapot 1971|Space Fishing|Second Series|Household Item|Unexpected Discovery|Object Acquisition|Original Episode
 Whose birthday is celebrated in the original episode The Cloud?|Mother Clanger's|Granny Clanger's|Small Clanger's|Tiny Clanger's|Medium|The Cloud 1971|Mother Birthday|Cloud Visitor|Froglets|Second Series|Celebration|Party
 What does the Iron Chicken lay in the second-series episode often called The Chicken Egg?|An egg|A silver key|A blue feather|A metal coin|Medium|The Chicken Egg 1971|Iron Chicken|Iron Chick|Second Series|Hatching|Bird Family|Original Episode
 Which young bird gets into trouble in the original episode The Noise Machine?|The Iron Chick|A baby Sky Moo|A singing owl|A new Froglet|Medium|Noise Machine 1971|Iron Chick|Mechanical Noise|Second Series|Unusual Machine|Bird Rescue|Episode Story
 What overruns the whole planet after the Clangers tend a seed in The Seed?|Vegetation|Snow|Smoke|Sand|Medium|The Seed 1971|Plant Growth|Overgrown Planet|Gardening Disaster|Second Series|Strange Seed|Excess Growth
 What does Small find that makes him vain in Pride?|A mirror|A gold medal|A crown|A portrait|Medium|Pride 1971|Small Clanger|Mirror|Vanity|Second Series|Character Lesson|Lost Dinner
 What object is mistaken for a living creature in the original episode Bags?|A Gladstone bag|A knitted glove|A suitcase with wheels|A picnic basket|Medium|Bags 1972|Gladstone Bag|Mistaken Lifeform|Second Series|Strange Object|Alien Confusion|1972 Episode
 What causes trouble for Small and Baby Soup Dragon in The Blow-Fruit?|Jet-propelled fruit|Exploding soup pots|Bouncing metal balls|Giant singing flowers|Medium|Blow Fruit 1972|Small Clanger|Baby Soup Dragon|Flying Fruit|Second Series|Playtime Mishap|Jet Propulsion
 What problem prompts Major to try building a soup pump in Pipe Organ?|A broken soup-trolley wheel|A dried-up soup well|A missing soup jug|A burst garden hose|Medium|Pipe Organ 1972|Soup Trolley|Broken Wheel|Major Invention|Second Series|Soup Pump|Mechanical Solution
 What pulls Tiny into space in the final regular original episode The Music of the Spheres?|The Hoot planet|A passing comet|An Iron Chicken balloon|A human space rocket|Hard|Music Of The Spheres|Hoot Planet|Tiny Clanger|1972 Finale|Accidental Flight|Final Regular Episode|Space Journey
 What was the title of the special shown on the day of the October 1974 UK general election?|Vote for Froglet|The Hoot Election|Soup for Everyone|The Clangers Decide|Medium|Vote For Froglet|1974 Election Special|UK General Election|Political Satire|Oliver Postgate|Final Original Special|Democracy
 Which two candidates feature in the Clangers' 1974 election special?|The Soup Dragon and a Froglet|Major Clanger and the Iron Chicken|Small Clanger and a Hoot|Mother Clanger and a Sky Moo|Hard|Vote For Froglet|Soup Dragon Candidate|Froglet Candidate|1974 Special|Election Contest|Democracy|Political Story
 Which organisation preserves and offers access to the Clangers election short Vote for Froglet?|British Film Institute|National Railway Museum|British Library Sound Archive|The Royal Society|Medium|BFI Player|Vote For Froglet|Film Preservation|1974 Election|Archive Film|Surviving Special|British Film Institute
 Which former Monty Python performer narrated the UK Clangers revival?|Michael Palin|John Cleese|Terry Jones|Eric Idle|Easy|Michael Palin|UK Narrator|2015 Revival|Monty Python|CBeebies|New Voiceover|Television Return
 Who narrated the American version of the Clangers revival?|William Shatner|Patrick Stewart|Leonard Nimoy|George Takei|Medium|William Shatner|US Narration|Sprout|2015 Revival|American Version|Voiceover Casting|Star Trek Actor
 Which British children's channel premiered the revived Clangers in 2015?|CBeebies|CBBC|CITV|Nickelodeon UK|Easy|CBeebies|2015 Return|BBC Childrens|New Series|Broadcast Network|Preschool Television|Revival Launch
 How many regular episodes were made for the Clangers revival from 2015 to 2020?|104|52|78|130|Medium|104 Revival Episodes|2015 To 2020|Episode Total|Three Revival Series|Programme Length|CBeebies|Broadcast History
 In what year did the revived Clangers television series begin?|2015|2009|2012|2018|Easy|2015 Revival|Return Year|Michael Palin|CBeebies Premiere|Second Generation|Stop Motion|Series Timeline
 In which year was the last regular episode of the 2015 Clangers revival broadcast?|2020|2017|2019|2022|Medium|2020 Finale|March Broadcast|Revival Series Three|Last Regular Episode|CBeebies|Coverage Cutoff|Broadcast Timeline
 Which kind of animation did the 2015 production deliberately retain instead of switching entirely to CGI?|Stop-motion models|Hand-painted watercolours|Live puppetry on strings|Computer-generated holograms|Medium|2015 Production|Traditional Stop Motion|Animation Continuity|Handmade Models|Visual Identity|Craft Technique|Revival Design
 What blows away Tiny's new tune in the revival's opening episode The Lost Notes?|A strong wind|An exploding meteor|A broken music box|The Soup Dragon sneezing|Medium|Lost Notes 2015|Tiny Melody|Wind|Music Trees|Revival Premiere|Missing Notes|Musical Problem
 Who gives Small a strange metal object in the 2015 episode The Little Thing?|A Sky Moo|The Iron Chicken|The Soup Dragon|A visiting astronaut|Medium|Little Thing 2015|Sky Moo Gift|Small Clanger|Metal Object|Space Find|Revival Series One|Unexpected Present
 What does Major invent in the 2015 episode In the Soup?|A soup-collecting machine|A moon rover|A floating greenhouse|A musical telescope|Medium|In The Soup 2015|Major Clanger|Soup Machine|Soup Dragon|Inventor Father|Revival Series One|Food Collection
 Whose usual hobby does Major try to replace with a machine in the 2015 episode The Knitting Machine?|Granny's knitting|Mother's gardening|Tiny's music|Small's fishing|Medium|Knitting Machine 2015|Granny Clanger|Major Invention|Wool Work|Mechanical Knitter|Revival Episode|Family Help
 Whose birthday prompts present-making in the 2015 episode The Flying Froglets?|Granny's|Mother's|Tiny's|Small's|Medium|Flying Froglets 2015|Granny Birthday|Family Presents|Froglets|Revival Series One|Celebration|Gift Making
 What sort of new creature arrives in the 2015 episode I Am the Eggbot?|An egg-shaped robot|A flying turtle|A talking hedgehog|A metal butterfly|Medium|I Am The Eggbot|Eggbot|Alien Robot|2015 Revival|Cave Adventure|New Visitor|Character Introduction
 What makes a little plant grow out of control in the 2015 episode The Giant Plant?|A growing song|A spray of green soup|A passing meteor|A spinning top|Medium|Giant Plant 2015|Growing Song|Tiny And Small|Mothers Garden|Overgrown Plant|Revival Series One|Musical Effect
 What stops Tiny hearing her regular bedtime song in Tiny's Lullaby?|A faulty radio hat|A broken soup trolley|A missing music tree|A cracked teapot|Medium|Tinys Lullaby 2015|Radio Hat|Iron Chicken Song|Bedtime Music|Revival Series One|Broken Equipment|Tiny Clanger
 Who helps Tiny to plant the mysterious seed in the 2015 episode The Crystal Trees?|Granny Clanger|Major Clanger|The Iron Chicken|Small Clanger|Medium|Crystal Trees 2015|Granny Helps|Tiny Clanger|Strange Seed|Planet Garden|Unusual Plant|Revival Series One
 What obstructs the Iron Chicken's nest in the 2015 episode Space Tangle?|Orbiting junk metal|A curtain of fog|A tangled fishing net|Fallen tree branches|Medium|Space Tangle 2015|Iron Chicken Nest|Junk Metal|Orbital Debris|Major Solution|Revival Series One|Space Hazard
 What spills over Granny's shawl in the 2015 episode In a Spin?|Soup|Glow-honey|Red paint|Blue ink|Medium|In A Spin 2015|Granny Shawl|Tiny And Small|Soup Spill|Laundry Problem|Revival Series One|Woollen Clothing
 What knocks the Iron Chicken out of her nest in Crash Bang Chicken?|A Sky Moo|A meteor|A Hoot|A Froglet|Medium|Crash Bang Chicken 2015|Sky Moo|Iron Chicken|Nest Accident|Revival Series One|Flying Animal|Unexpected Collision
 What blocks the Clangers' view of a solar eclipse in Find the Eclipse?|The Iron Chicken's nest|A giant soup flower|A human rocket|The Hoot planet|Medium|Find The Eclipse 2015|Solar Eclipse|Iron Chicken Nest|Space View|Revival Series One|Astronomical Event|Blocked Sightline
 In the 2017 episode The Sound Snatcher, what does the visiting creature eat?|Music|Green soup|Moon rocks|Blue string pudding|Medium|Sound Snatcher 2017|Creature Eats Music|Planet Sounds|Hoot Planet|Revival Series Two|Strange Visitor|Musical Threat
 What falls from the Hoot Planet in the 2017 episode Woolly Welcome?|Wool|Snowflakes|Gold coins|Glass beads|Medium|Woolly Welcome 2017|Hoot Planet|Falling Wool|Revival Series Two|Sky Visitor|Unusual Weather|Knitting Material
 What does the Cloud drop after catching a chill in Snow Business?|Snowflakes|Green soup|Musical notes|Blueberries|Medium|Snow Business 2017|Cloud With Cold|Snowfall|Revival Series Two|Weather|Sky Character|Cold Spell
 What happens to Small Clanger in the 2017 episode Puffball?|He accidentally launches himself into orbit|He loses his voice for a day|He gets trapped in the soup well|He falls asleep on a passing comet|Medium|Puffball 2017|Small Clanger|Accidental Orbit|Revival Series Two|Space Mishap|Airborne Adventure|Unplanned Flight
 What threatens the planet in the 2017 episode The Block?|An alien housing development|A volcanic eruption|A lost naval warship|A frozen soup well|Medium|The Block 2017|Alien Builder|Housing Estate|Planet Development|Revival Series Two|Environmental Threat|Space Construction
 What coloured Froglet appears in the 2018 episode The New Froglet?|Purple|Red|Gold|Black|Medium|New Froglet 2018|Purple Froglet|New Arrival|Revival Series Two|Difference|Froglet Family|Alien Colours
 Who made the memory box discovered by Tiny and Small in the 2018 episode The Memory Box?|Mother Clanger|Granny Clanger|The Iron Chicken|Major Clanger|Medium|Memory Box 2018|Mother Clanger|Childhood Memories|Tiny And Small|Found Object|Revival Series Two|Family History
 What arrives on the Clangers planet in the 2019 episode The Visitor?|A human astronaut|A travelling magician|An iron chick|An alien circus|Medium|The Visitor 2019|Human Astronaut|Space Module|Revival Series Three|Earth Contact|Unexpected Guest|Landing
 What do the Wols help the Iron Chicken set up in Radio Wol?|A radio station|A new soup kitchen|A telescope|A lunar observatory|Medium|Radio Wol 2019|Wols|Iron Chicken|Broken Radio|Broadcasting|Revival Series Three|Music
 What does Major give three helpful Froglets in the 2019 episode Medal?|Medals|New hats|Wool scarves|Silver whistles|Medium|Medal 2019|Major Clanger|Froglets|Reward|Jealousy|Revival Series Three|Recognition
 What does Small hope will help Tiny recover in the 2019 episode Healing Harmonies?|Music|A warm bath|Extra soup|A space holiday|Medium|Healing Harmonies 2019|Poorly Tiny|Small Clanger|Music As Comfort|Revival Series Three|Sibling Care|Gentle Recovery
 Whose birthday is being celebrated in the 2019 episode Small's Big Surprise?|Small Clanger's|Granny Clanger's|Major Clanger's|The Soup Dragon's|Medium|Smalls Big Surprise 2019|Small Birthday|Tiny Performance|Family Celebration|Revival Series Three|Special Show|Party Plans
 What does Major invent that causes metal objects to fly towards it in the 2019 episode Junk Planet?|A giant magnet|A rocket-powered broom|An electric fan|A mechanical spoon|Medium|Junk Planet 2019|Major Invention|Giant Magnet|Space Junk|Moon Whale Rescue|Revival Series Three|Metal Chaos
 What is the prize in the 2020 episode Dance Dance Dance?|A glitterball trophy|A golden flute|A silver saucepan|A bronze telescope|Medium|Dance Dance Dance 2020|Dance Fiesta|Glitterball Trophy|Soup Dragon Organisation|Revival Series Three|Competition|Celebration
 Which creature gets its tail stuck in a door in the 2020 episode A Tail Tale?|Baby Soup Dragon|A Sky Moo|An Eggbot|The Iron Chicken|Medium|Tail Tale 2020|Baby Soup Dragon|Tail Stuck|Door Accident|Revival Series Three|Body Parts|Young Dragon
 What object does Tiny lose inside the top hat in the 2020 episode Top Hat?|A cotton ball|A green ribbon|A metal whistle|A blue spoon|Medium|Top Hat 2020|Tiny Clanger|Cotton Ball|Hat World|Revival Series Three|Lost Toy|Fantasy Journey
 What does the family notice among rubbish dropped from a space dustcart in the final 2020 episode Major's Helper?|A robot-like part|A porcelain tea set|A live Froglet|A musical guitar|Medium|Majors Helper 2020|Space Dustcart|Robot Parts|Final Episode|Revival Series Three|Salvaged Machinery|Found Object
 `;

 const FIRST_ID = 16696;
 const EXPECTED_COUNT = 96;

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
         `Pack 347: invalid fields at ${id} (${fields.length})`
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
         `Pack 347: difficulty or question-specific tags at ${id}`
       );
     }

     const answers = [wrong1, wrong2, wrong3];

     if (
       new Set([correctAnswer, ...answers].map(normalise)).size !== 4
     ) {
       throw new Error(`Pack 347: duplicate answer at ${id}`);
     }

     answers.splice(index % 4, 0, correctAnswer);

     const tags = [...new Map([
       'Television',
       'British Television',
       'Children Television',
       'Stop Motion Animation',
       'Puppet Animation',
       'Space Fantasy',
       'BBC',
       'Smallfilms',
       'The Clangers',
       'Programme: The Clangers',
       ...specificTags,
       correctAnswer
     ].map(tag => [normalise(tag), tag])).values()];

     return {
       id,
       category: 'Television',
       programme: 'The Clangers',
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
   questions[0].id !== 'tv_16696' ||
   questions[questions.length - 1].id !==
     `tv_${FIRST_ID + EXPECTED_COUNT - 1}`
 ) {
   throw new Error(
     `Pack 347: count/ID range incorrect (${questions.length})`
   );
 }

 const seen = new Set();

 for (let index = 0; index < questions.length; index++) {
   const q = questions[index];
   const key = normalise(q.question);

   if (
     q.id !== `tv_${FIRST_ID + index}` ||
     seen.has(key) ||
     q.answers.length !== 4 ||
     new Set(q.answers.map(normalise)).size !== 4 ||
     q.answers.filter(answer => answer === q.correctAnswer).length !== 1 ||
     q.tags.length < 15 ||
     q.dailyEligible !== true ||
     q.category !== 'Television' ||
     q.programme !== 'The Clangers'
   ) {
     throw new Error(
       `Pack 347: exported object failed at ${q.id}`
     );
   }

   seen.add(key);
 }

 module.exports = questions;
