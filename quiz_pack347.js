
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
// 21 November 2026: episode-specific audit additions. Preserve all
// original 96 questions IDs tv_16696–tv_16791 unchanged.
// Additional episodes span the 2015–2020 revival and 1969–1974 run.
const auditAdditions = [
  {
    "id": "tv_38110",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E01: The Lost Notes), whose whistling first helps Tiny realise her lost tune is still somewhere above the planet?",
    "answers": [
      "Mother Clanger's",
      "Granny Clanger's",
      "The Soup Dragon's",
      "The Iron Chicken's"
    ],
    "correctAnswer": "Mother Clanger's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E01 The Lost Notes",
      "Revival storyline",
      "Answer: Mother Clanger's",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Tiny melody",
      "Garden whistling",
      "Tune recovered"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38111",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E02: The Little Thing), where does Small plan to take the puzzling metal fragment before discovering what it fits?",
    "answers": [
      "The Soup Dragon's well",
      "The Iron Chicken's nest",
      "Mother's flower garden",
      "Granny's knitting cave"
    ],
    "correctAnswer": "The Iron Chicken's nest",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E02 The Little Thing",
      "Revival storyline",
      "Answer: The Iron Chicken's nest",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Strange metal fragment",
      "Nest donation",
      "Missing piece"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38112",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E03: In the Soup), what happens when Major overfills his soup-collecting invention and it jams in a doorway?",
    "answers": [
      "It flies off the planet",
      "It turns the soup blue",
      "It bursts and splashes soup everywhere",
      "It melts into a puddle"
    ],
    "correctAnswer": "It bursts and splashes soup everywhere",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E03 In the Soup",
      "Revival storyline",
      "Answer: It bursts and splashes soup everywhere",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Major machine",
      "Overfilling",
      "Soup explosion"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38113",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E04: The Knitting Machine), how does Granny challenge Major's machine after seeing its ugly garments?",
    "answers": [
      "She asks the Soup Dragon to dismantle it",
      "She paints her knitted clothes",
      "She refuses to wear wool ever again",
      "She holds a knitting competition"
    ],
    "correctAnswer": "She holds a knitting competition",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E04 The Knitting Machine",
      "Revival storyline",
      "Answer: She holds a knitting competition",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Granny challenge",
      "Knit off",
      "Machine rivalry"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38114",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E05: The Flying Froglets), what does Small use for his own birthday invention when Major says he is too young to help?",
    "answers": [
      "Puffballs and airfruit",
      "Stones and copper leaves",
      "Soup jugs and pipes",
      "A radio and a telescope"
    ],
    "correctAnswer": "Puffballs and airfruit",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E05 The Flying Froglets",
      "Revival storyline",
      "Answer: Puffballs and airfruit",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Small invention",
      "Granny birthday",
      "Acrobatic froglets"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38115",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E06: I Am the Eggbot), what musical note does the little Eggbot sing before a larger one arrives to rescue it?",
    "answers": [
      "Soh",
      "Doh",
      "Lah",
      "Te"
    ],
    "correctAnswer": "Doh",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E06 I Am the Eggbot",
      "Revival storyline",
      "Answer: Doh",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Singing robot",
      "Notes",
      "Eggbot rescue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38116",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E07: The Giant Plant), which creatures help halt the plant that grows uncontrollably after Tiny and Small sing to it?",
    "answers": [
      "Froglets",
      "Wols",
      "Sky Moos",
      "Hoots"
    ],
    "correctAnswer": "Sky Moos",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E07 The Giant Plant",
      "Revival storyline",
      "Answer: Sky Moos",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Giant vegetation",
      "Plant eaters",
      "Rescue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38117",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E08: Tiny's Lullaby), how does Tiny finally solve her bedtime music problem when her radio hat breaks?",
    "answers": [
      "She builds a new radio tower",
      "She borrows Granny's musical clock",
      "She listens to the Hoot Planet",
      "She composes and sings her own tune"
    ],
    "correctAnswer": "She composes and sings her own tune",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E08 Tiny's Lullaby",
      "Revival storyline",
      "Answer: She composes and sings her own tune",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Lullaby solution",
      "Tiny song",
      "Bedtime"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38118",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E09: The Crystal Trees), what makes the mysterious crystal trees glow and sparkle?",
    "answers": [
      "Music",
      "Moonlight alone",
      "Green soup",
      "Copper dust"
    ],
    "correctAnswer": "Music",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E09 The Crystal Trees",
      "Revival storyline",
      "Answer: Music",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Crystal seeds",
      "Musical light",
      "Tiny discovery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38119",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E10: The Curious Tunnel), who ends up covered in blue string pudding after items are sent into a strange upward-sucking tunnel?",
    "answers": [
      "The Iron Chicken",
      "Granny Clanger",
      "Mother Clanger",
      "The Soup Dragon"
    ],
    "correctAnswer": "Granny Clanger",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E10 The Curious Tunnel",
      "Revival storyline",
      "Answer: Granny Clanger",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Transport tunnel",
      "Granny surprised",
      "Lost objects"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38120",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E11: Space Tangle), what social outing is Small waiting for when he realises the Iron Chicken is trapped near her nest?",
    "answers": [
      "A birthday concert",
      "A visit to the soup wells",
      "A picnic",
      "A game of cricket"
    ],
    "correctAnswer": "A picnic",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E11 Space Tangle",
      "Revival storyline",
      "Answer: A picnic",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Small invitation",
      "Picnic",
      "Iron Chicken delayed"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38121",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E12: Lonely as a Cloud), why does Tiny return to the Cloud after the others have gone indoors for bed?",
    "answers": [
      "She has to mend a broken telescope",
      "She has lost a music-tree seed",
      "She needs to collect the soup trolley",
      "She realises the Cloud is lonely and wants one last game"
    ],
    "correctAnswer": "She realises the Cloud is lonely and wants one last game",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E12 Lonely as a Cloud",
      "Revival storyline",
      "Answer: She realises the Cloud is lonely and wants one last game",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Lonely cloud",
      "Bedtime",
      "Extra game"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38122",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E13: In a Spin), who accidentally knocks over the tankard that ruins Granny's favourite shawl?",
    "answers": [
      "Tiny and Small",
      "Major and Mother",
      "The Wols",
      "The Iron Chicken"
    ],
    "correctAnswer": "Tiny and Small",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E13 In a Spin",
      "Revival storyline",
      "Answer: Tiny and Small",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Spilled soup",
      "Granny shawl",
      "Accident"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38123",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E14: Tiny's Orchestra), what experience finally inspires Tiny's tune after Mother and Major ask for incompatible styles of music?",
    "answers": [
      "A night in the Soup Dragon's well",
      "A ride on a Sky Moo",
      "A walk through the crystal forest",
      "A visit from the Wols"
    ],
    "correctAnswer": "A ride on a Sky Moo",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E14 Tiny's Orchestra",
      "Revival storyline",
      "Answer: A ride on a Sky Moo",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Tiny orchestra",
      "Inspiration",
      "Sky Moo flight"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38124",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E15: The Metal Bug), which plants are being eaten after Small discovers a mysterious ball that later splits open?",
    "answers": [
      "Star roses",
      "Soup flowers",
      "Copper trees",
      "Music trees"
    ],
    "correctAnswer": "Copper trees",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E15 The Metal Bug",
      "Revival storyline",
      "Answer: Copper trees",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Metal insect",
      "Copper leaves",
      "Mysterious shell"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38125",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E16: Mother's Melody), what does Mother do when Tiny asks her to try making up music?",
    "answers": [
      "She takes the music boat to Earth",
      "She asks the Froglets for a banjo",
      "She refuses to leave her bedroom",
      "She gets flustered and returns to her garden"
    ],
    "correctAnswer": "She gets flustered and returns to her garden",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E16 Mother's Melody",
      "Revival storyline",
      "Answer: She gets flustered and returns to her garden",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Mother shy",
      "Music request",
      "Garden"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38126",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E17: Crash Bang Chicken), why can the Iron Chicken not immediately fly home after Major repairs her injured wing?",
    "answers": [
      "She has lost her confidence",
      "She has forgotten the route",
      "Her nest is underwater",
      "Her legs have become stuck"
    ],
    "correctAnswer": "She has lost her confidence",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E17 Crash Bang Chicken",
      "Revival storyline",
      "Answer: She has lost her confidence",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Broken wing",
      "Fear of flying",
      "Confidence"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38127",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E18: Major's Meteor), what does Major invent to cheer Small up after he misses seeing meteors streak past?",
    "answers": [
      "A portable planetarium",
      "A meteor machine",
      "A cloud catcher",
      "A telescope that plays tunes"
    ],
    "correctAnswer": "A meteor machine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E18 Major's Meteor",
      "Revival storyline",
      "Answer: A meteor machine",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Small upset",
      "Meteor display",
      "Major cheers him"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38128",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E19: The Singing Asteroid), who is making music alone while travelling through space on an asteroid?",
    "answers": [
      "A young Sky Moo",
      "A lost Froglet",
      "A lonely singing flower",
      "A miniature Iron Chicken"
    ],
    "correctAnswer": "A lonely singing flower",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E19 The Singing Asteroid",
      "Revival storyline",
      "Answer: A lonely singing flower",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Lonely flower",
      "Asteroid",
      "Tiny helps"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38129",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E20: Small's New Star), what does Small transform the Iron Chicken's discarded pile of metal into?",
    "answers": [
      "A fishing net",
      "An extra soup trolley",
      "A skating rink",
      "A new star"
    ],
    "correctAnswer": "A new star",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E20 Small's New Star",
      "Revival storyline",
      "Answer: A new star",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Junk reused",
      "Iron Chicken",
      "Space sculpture"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38130",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E21: Baby Soup Clanger), why does Baby Soup Dragon decide he wants to be a Clanger for a while?",
    "answers": [
      "His mother will not let him use her large soup ladle",
      "He dislikes flying with the Sky Moos",
      "He has lost his home in the cave",
      "He has eaten the wrong kind of pudding"
    ],
    "correctAnswer": "His mother will not let him use her large soup ladle",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E21 Baby Soup Clanger",
      "Revival storyline",
      "Answer: His mother will not let him use her large soup ladle",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Baby dragon",
      "Ladle rules",
      "Identity game"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38131",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E22: Holes), what do the two circles of black cloth inside a box from space turn out to be?",
    "answers": [
      "Pieces of a broken telescope",
      "Linked holes that lead into one another",
      "Decorations for the music boat",
      "Two patches for Granny's shawl"
    ],
    "correctAnswer": "Linked holes that lead into one another",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E22 Holes",
      "Revival storyline",
      "Answer: Linked holes that lead into one another",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Black cloth",
      "Connected portals",
      "Tiny Small"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38132",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E23: Bubble Trouble), what living things do Tiny and Small accidentally suck up in Major's cleaning machine?",
    "answers": [
      "Sky Moos",
      "Froglets",
      "Glow Buzzers",
      "Soup Dragons"
    ],
    "correctAnswer": "Glow Buzzers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E23 Bubble Trouble",
      "Revival storyline",
      "Answer: Glow Buzzers",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Cleaner mishap",
      "Glowing insects",
      "Rescue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38133",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E24: Dragon Day), which friend arrives late but brings a particularly welcome present for the Soup Dragon's thank-you celebration?",
    "answers": [
      "The Moon Whale",
      "The Eggbot",
      "The Cloud",
      "The Iron Chicken"
    ],
    "correctAnswer": "The Iron Chicken",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E24 Dragon Day",
      "Revival storyline",
      "Answer: The Iron Chicken",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Soup Dragon appreciation",
      "Late present",
      "Kindness"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38134",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E25: Home Sweet Hoot), which invention helps the Clangers call the distant Hoot Planet to collect its noisy visitor?",
    "answers": [
      "Major's make-it-louder machine",
      "A giant telescope",
      "A rocket made of soup pipes",
      "A crystal radio hat"
    ],
    "correctAnswer": "Major's make-it-louder machine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E25 Home Sweet Hoot",
      "Revival storyline",
      "Answer: Major's make-it-louder machine",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Hoot returns",
      "Amplified sound",
      "Major inventor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38135",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E26: Find the Eclipse), what safety equipment has Major made so the family can watch the eclipse without staring unprotected at the Sun?",
    "answers": [
      "Tinted soup bottles",
      "Special eclipse glasses",
      "A copper periscope",
      "Woollen eye masks"
    ],
    "correctAnswer": "Special eclipse glasses",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E26 Find the Eclipse",
      "Revival storyline",
      "Answer: Special eclipse glasses",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Eclipse watching",
      "Eye safety",
      "Major glasses"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38136",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E27: The Little Chill), why can a Sky Moo not join the others inside the planet when the weather becomes bitterly cold?",
    "answers": [
      "All the tunnels are flooded",
      "The music boat blocks the doorway",
      "The entrance doors have frozen shut",
      "A giant plant has filled the entrance"
    ],
    "correctAnswer": "The entrance doors have frozen shut",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E27 The Little Chill",
      "Revival storyline",
      "Answer: The entrance doors have frozen shut",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Sky Moo cold",
      "Frozen doors",
      "Granny rescue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38137",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E28: The Brilliant Surprise), who sends Tiny the mysterious message announcing that something is coming?",
    "answers": [
      "The Soup Dragon",
      "Small Clanger",
      "The Moon Whale",
      "The Iron Chicken"
    ],
    "correctAnswer": "The Iron Chicken",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E28 The Brilliant Surprise",
      "Revival storyline",
      "Answer: The Iron Chicken",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Secret surprise",
      "Iron Chicken message",
      "Tiny"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38138",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E29: The Ball), what does Mother explain about the silver ball that glows and rings when it bounces?",
    "answers": [
      "It is a living creature",
      "It is one of Major's machines",
      "It is a seed from a music tree",
      "It is a piece of the Moon"
    ],
    "correctAnswer": "It is a living creature",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E29 The Ball",
      "Revival storyline",
      "Answer: It is a living creature",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Silver bouncy ball",
      "Living visitor",
      "Mother knowledge"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38139",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E30: Planty), what mystery puzzles Tiny and Small after Granny is given a purple plant for her knitting corner?",
    "answers": [
      "The plant changes into a Froglet",
      "The plant moves while Granny is asleep",
      "The plant sings a lullaby to Major",
      "The plant disappears into space"
    ],
    "correctAnswer": "The plant moves while Granny is asleep",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E30 Planty",
      "Revival storyline",
      "Answer: The plant moves while Granny is asleep",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Purple plant",
      "Granny corner",
      "Moving mystery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38140",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E31: The Game), what does Baby Soup Dragon learn after winning a game for the colourful gems from a meteor shower?",
    "answers": [
      "The gems are made of soup",
      "He cannot play without a telescope",
      "Playing together matters more than winning",
      "Winning means keeping all the food"
    ],
    "correctAnswer": "Playing together matters more than winning",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E31 The Game",
      "Revival storyline",
      "Answer: Playing together matters more than winning",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Gemstone shower",
      "Game lesson",
      "Friendship"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38141",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E32: Granny and Small), whom does Small reluctantly ask to play when everyone else in the family is too busy?",
    "answers": [
      "The Iron Chicken",
      "The Moon Whale",
      "A visiting astronaut",
      "Granny Clanger"
    ],
    "correctAnswer": "Granny Clanger",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E32 Granny and Small",
      "Revival storyline",
      "Answer: Granny Clanger",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Small bored",
      "Family busy",
      "Unexpected adventure"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38142",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E33: Tiny's Good Idea), what earlier invention does Tiny adapt to help water Mother's wilting plants after Major's device fails?",
    "answers": [
      "A marble-chute toy",
      "A flying music boat",
      "A metal detector",
      "A knitting machine"
    ],
    "correctAnswer": "A marble-chute toy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E33 Tiny's Good Idea",
      "Revival storyline",
      "Answer: A marble-chute toy",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Garden rescue",
      "Marble chute",
      "Tiny ingenuity"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38143",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E34: Star Roses), what is supposed to make the rare roses bloom on the Clangers' planet?",
    "answers": [
      "A shower of green soup",
      "The passing of a special star",
      "The arrival of a Moon Whale",
      "Major playing a loud trumpet"
    ],
    "correctAnswer": "The passing of a special star",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E34 Star Roses",
      "Revival storyline",
      "Answer: The passing of a special star",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Rare roses",
      "Passing star",
      "Bloom"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38144",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E35: Chairs), what accidentally punctures Granny's comfortable puffball chair?",
    "answers": [
      "A copper leaf",
      "A broken spoon",
      "A knitting needle",
      "A fishing hook"
    ],
    "correctAnswer": "A knitting needle",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E35 Chairs",
      "Revival storyline",
      "Answer: A knitting needle",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Granny chair",
      "Puncture",
      "Knitting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38145",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E36: Sweet Music), what causes trouble after Baby Soup Dragon finds an unfamiliar radio and plays with it?",
    "answers": [
      "He sells it to a travelling robot",
      "He turns it into a telescope",
      "He loses it inside the Soup Well",
      "He uses it in the middle of the night"
    ],
    "correctAnswer": "He uses it in the middle of the night",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E36 Sweet Music",
      "Revival storyline",
      "Answer: He uses it in the middle of the night",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Fallen radio",
      "Nocturnal noise",
      "Baby dragon"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38146",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E37: The Box), what do Tiny and Small discover when their separate pieces of space treasure are brought together?",
    "answers": [
      "The pieces fit together",
      "The pieces are both hollow eggs",
      "One turns into green soup",
      "The pieces belong to the Iron Chicken's nest"
    ],
    "correctAnswer": "The pieces fit together",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E37 The Box",
      "Revival storyline",
      "Answer: The pieces fit together",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Space treasures",
      "Mysterious box",
      "Putting together"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38147",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E38: Snapper), what do the Clangers learn from a wheeled robot that takes photographs after arriving on their planet?",
    "answers": [
      "It is collecting their cooking recipes",
      "It has pictures from its travels around the universe",
      "It belongs to Granny Clanger",
      "It wants to demolish their music trees"
    ],
    "correctAnswer": "It has pictures from its travels around the universe",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E38 Snapper",
      "Revival storyline",
      "Answer: It has pictures from its travels around the universe",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Photographic robot",
      "Universe pictures",
      "Visitor acceptance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38148",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E39: The Chicken Waltz), how do Tiny and Small help the Iron Chicken when her dancing proves too difficult?",
    "answers": [
      "They build her a pair of roller skates",
      "They ask her to conduct the music trees",
      "They make a simpler rhythm for her",
      "They invent an automatic dance floor"
    ],
    "correctAnswer": "They make a simpler rhythm for her",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E39 The Chicken Waltz",
      "Revival storyline",
      "Answer: They make a simpler rhythm for her",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Iron Chicken dance",
      "Simple tune",
      "Tiny Small"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38149",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E40: The Puzzle), who spots the family's empty music boat and brings Granny to find them after they become lost inside a new planet?",
    "answers": [
      "The Hoot Planet",
      "A Baby Soup Dragon",
      "A giant Eggbot",
      "A Sky Moo"
    ],
    "correctAnswer": "A Sky Moo",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E40 The Puzzle",
      "Revival storyline",
      "Answer: A Sky Moo",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Strange planet",
      "Lost Clangers",
      "Granny rescue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38150",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E41: The Little Bag), what instrument does Tiny keep in the mysterious sparkly bag Small gives her?",
    "answers": [
      "Panpipes",
      "A banjo",
      "A fiddle",
      "A trumpet"
    ],
    "correctAnswer": "Panpipes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E41 The Little Bag",
      "Revival storyline",
      "Answer: Panpipes",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Sparkly pouch",
      "Tiny music",
      "Panpipes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38151",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E42: Hide-and-Seek), which onlooker sees Baby Soup Dragon cheating during the race around the planet?",
    "answers": [
      "The Iron Chicken",
      "An orange Froglet",
      "A human astronaut",
      "Mother Clanger"
    ],
    "correctAnswer": "An orange Froglet",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E42 Hide-and-Seek",
      "Revival storyline",
      "Answer: An orange Froglet",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Cheating race",
      "Froglet witness",
      "Honesty"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38152",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E43: Rainbow Star), what helps Small work out how seven coloured stones relate to a strange metal disc from space?",
    "answers": [
      "The tones played by the Soup Dragon",
      "The colour of the Clangers' planet",
      "The coloured stripes on his scarf",
      "A painting on the cave wall"
    ],
    "correctAnswer": "The coloured stripes on his scarf",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E43 Rainbow Star",
      "Revival storyline",
      "Answer: The coloured stripes on his scarf",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Rainbow puzzle",
      "Seven stones",
      "Scarf"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38153",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E44: Busy Buzzers), why must Small and Major return the bowl of glow-honey they took from a crater?",
    "answers": [
      "The Soup Dragon is allergic to it",
      "Granny wants to knit with it",
      "It belongs to a travelling salesman",
      "The Glow Buzzers need it for a special visitor"
    ],
    "correctAnswer": "The Glow Buzzers need it for a special visitor",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E44 Busy Buzzers",
      "Revival storyline",
      "Answer: The Glow Buzzers need it for a special visitor",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Glow-honey",
      "Agitated insects",
      "Visitor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38154",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E45: Calm in the Caves), what strange objects are keeping the Froglets unnaturally quiet in their cave?",
    "answers": [
      "Three glowing blue stones",
      "A brand-new television set",
      "A set of copper bells",
      "A miniature robot egg"
    ],
    "correctAnswer": "Three glowing blue stones",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E45 Calm in the Caves",
      "Revival storyline",
      "Answer: Three glowing blue stones",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Froglets calm",
      "Blue stones",
      "Unusual noise"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38155",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E46: The Golden Planet), who first realises that the tempting golden world seen through a telescope is not what it appears?",
    "answers": [
      "Mother Clanger",
      "Tiny Clanger",
      "The Soup Dragon",
      "The Iron Chicken"
    ],
    "correctAnswer": "Tiny Clanger",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E46 The Golden Planet",
      "Revival storyline",
      "Answer: Tiny Clanger",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Golden world",
      "Telescope",
      "Tiny discovery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38156",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E47: All Change Day), what task does the Soup Dragon struggle with when the Clangers and their neighbours swap jobs?",
    "answers": [
      "Fishing in space",
      "Writing music",
      "Knitting",
      "Repairing a rocket"
    ],
    "correctAnswer": "Knitting",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E47 All Change Day",
      "Revival storyline",
      "Answer: Knitting",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Role swap",
      "Dragon knitting",
      "Granny soup"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38157",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E48: The Wols), who agrees to babysit Mother Wol's three lively youngsters while she collects materials for a new nest?",
    "answers": [
      "Granny Clanger",
      "Small Clanger",
      "The Soup Dragon",
      "The Iron Chicken"
    ],
    "correctAnswer": "The Iron Chicken",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E48 The Wols",
      "Revival storyline",
      "Answer: The Iron Chicken",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Wol chicks",
      "Babysitting",
      "Nest building"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38158",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E49: The Discovery), whose drawings turn out to be the remarkable pictures discovered on cave walls by Major?",
    "answers": [
      "Small Clanger's",
      "Tiny Clanger's",
      "Mother Clanger's",
      "Granny Clanger's"
    ],
    "correctAnswer": "Small Clanger's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E49 The Discovery",
      "Revival storyline",
      "Answer: Small Clanger's",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Cave pictures",
      "Small artist",
      "Underground"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38159",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E50: Blob), what happens each time Tiny and Small divide the playful purple blob?",
    "answers": [
      "The blobs all disappear",
      "The number of blobs doubles",
      "Each blob becomes a different colour",
      "They turn into metal balls"
    ],
    "correctAnswer": "The number of blobs doubles",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E50 Blob",
      "Revival storyline",
      "Answer: The number of blobs doubles",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Purple blob",
      "Splitting",
      "Multiplication"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38160",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E51: Building Bridges), which failed piece of furniture gives Major a way to repair the route to the soup wells?",
    "answers": [
      "A broken chair",
      "A cabinet of drawers",
      "A collapsed table",
      "A damaged bed"
    ],
    "correctAnswer": "A collapsed table",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E51 Building Bridges",
      "Revival storyline",
      "Answer: A collapsed table",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Soup trolley",
      "Bridge repair",
      "Furniture reused"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38161",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S1E52: Things), what do pale shapes floating towards the Clangers' planet need to regain their vitality?",
    "answers": [
      "Blue soup and copper leaves",
      "A blanket and a bowl of honey",
      "A radio and a silver telescope",
      "Music, warmth and light"
    ],
    "correctAnswer": "Music, warmth and light",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S1E52 Things",
      "Revival storyline",
      "Answer: Music, warmth and light",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Mysterious pale shapes",
      "Three necessities",
      "Star"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38162",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E01: Round and Round), whose attempt to close her garden for a peaceful day inadvertently creates problems for the Soup Dragon?",
    "answers": [
      "Mother Clanger's",
      "Granny Clanger's",
      "Tiny Clanger's",
      "The Iron Chicken's"
    ],
    "correctAnswer": "Mother Clanger's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E01 Round and Round",
      "Revival storyline",
      "Answer: Mother Clanger's",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Garden closure",
      "Neighbours affected",
      "Peace sought"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38163",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E02: The Sound Snatcher), whose overwhelming music finally proves too much for the visiting sound-eating creature?",
    "answers": [
      "The Iron Chicken's",
      "The Hoot Planet's",
      "The Moon Whale's",
      "The Music Boat's"
    ],
    "correctAnswer": "The Hoot Planet's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E02 The Sound Snatcher",
      "Revival storyline",
      "Answer: The Hoot Planet's",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Music-eater",
      "Too loud",
      "Hoot Planet"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38164",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E03: Woolly Welcome), which visiting world behaves strangely before wool begins raining down on the Clangers?",
    "answers": [
      "The golden planet",
      "The Moon Whale's home",
      "The Hoot Planet",
      "Earth"
    ],
    "correctAnswer": "The Hoot Planet",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E03 Woolly Welcome",
      "Revival storyline",
      "Answer: The Hoot Planet",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Musical world",
      "Falling wool",
      "Space visitor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38165",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E04: Snow Business), where has the Cloud been just before returning so cold that it produces snow instead of rain?",
    "answers": [
      "Inside the Soup Well",
      "Visiting Earth",
      "In a cave full of ice",
      "On holiday in space"
    ],
    "correctAnswer": "On holiday in space",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E04 Snow Business",
      "Revival storyline",
      "Answer: On holiday in space",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Cloud holiday",
      "Cold return",
      "Snow"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38166",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E05: Mother of Invention), what happens to Major after Mother accidentally wheels her new garden trolley over his foot?",
    "answers": [
      "The trolley proves surprisingly useful",
      "Major loses his telescope",
      "His knitting comes undone",
      "A music tree collapses"
    ],
    "correctAnswer": "The trolley proves surprisingly useful",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E05 Mother of Invention",
      "Revival storyline",
      "Answer: The trolley proves surprisingly useful",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "New trolley",
      "Accidental collision",
      "Useful invention"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38167",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E06: Puffball), what homemade device does Small build to keep up with Tiny and the Froglets before it launches him into orbit?",
    "answers": [
      "A flying bicycle",
      "A space hopper",
      "A hovercraft",
      "A miniature helicopter"
    ],
    "correctAnswer": "A space hopper",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E06 Puffball",
      "Revival storyline",
      "Answer: A space hopper",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Small left behind",
      "Puffball hopper",
      "Too high"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38168",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E07: The Disappearing Nest), what meal has the Iron Chicken gone to fetch for her visiting Wol friends when she finds her nest missing?",
    "answers": [
      "Green soup",
      "Glow honey",
      "Blue string pudding",
      "Star-rose petals"
    ],
    "correctAnswer": "Blue string pudding",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E07 The Disappearing Nest",
      "Revival storyline",
      "Answer: Blue string pudding",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Lost nest",
      "Wol guests",
      "Food trip"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38169",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E08: Star Flower), what does Small catch from space before Mother and Tiny help him grow a very shy plant?",
    "answers": [
      "A golden clock",
      "A mechanical egg",
      "A purple pebble",
      "A beautiful silver seed"
    ],
    "correctAnswer": "A beautiful silver seed",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E08 Star Flower",
      "Revival storyline",
      "Answer: A beautiful silver seed",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Silver seed",
      "Shy flower",
      "Planting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38170",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E09: The Block), what does the visiting robot block collect before proposing a development on the Clangers' planet?",
    "answers": [
      "Soil samples",
      "Music notes",
      "Soup recipes",
      "Froglet eggs"
    ],
    "correctAnswer": "Soil samples",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E09 The Block",
      "Revival storyline",
      "Answer: Soil samples",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Robot surveyor",
      "Planet soil",
      "Tower blocks"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38171",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E10: The Strange-Smelling Flower), whose new bloom is responsible for the unpleasant smell that troubles Tiny, Small and Major?",
    "answers": [
      "Granny Clanger's",
      "Mother Clanger's",
      "The Iron Chicken's",
      "The Moon Whale's"
    ],
    "correctAnswer": "Mother Clanger's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E10 The Strange-Smelling Flower",
      "Revival storyline",
      "Answer: Mother Clanger's",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Unpleasant scent",
      "Mother flower",
      "Garden"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38172",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E11: Major's Low-Gravity Backpack), what cleaning problem leads Major to devise a low-gravity backpack?",
    "answers": [
      "Polishing the Iron Chicken's nest",
      "Washing the music boat's underside",
      "Reaching dustweeds on the cave ceiling",
      "Cleaning soup off the planet's outer surface"
    ],
    "correctAnswer": "Reaching dustweeds on the cave ceiling",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E11 Major's Low-Gravity Backpack",
      "Revival storyline",
      "Answer: Reaching dustweeds on the cave ceiling",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Dustweeds",
      "High ceiling",
      "Cleaning device"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38173",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E12: The Mysterious Noise Machine), where does the first part of a mysterious mechanical object land before Major discovers its matching piece?",
    "answers": [
      "In Granny's wool basket",
      "Under the Soup Dragon's ladle",
      "In Mother's flower garden",
      "In the Iron Chicken's nest"
    ],
    "correctAnswer": "In the Iron Chicken's nest",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E12 The Mysterious Noise Machine",
      "Revival storyline",
      "Answer: In the Iron Chicken's nest",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Fallen machine",
      "Chicken nest",
      "Parts reunited"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38174",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E13: The Tin Bird), what does Tiny and Small assume the strange mechanical bird is seeking when it explores their planet?",
    "answers": [
      "A place to build a nest",
      "A new soup well",
      "A missing telescope",
      "A golden planet"
    ],
    "correctAnswer": "A place to build a nest",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E13 The Tin Bird",
      "Revival storyline",
      "Answer: A place to build a nest",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Tin bird",
      "Searching visitor",
      "Nest help"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38175",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E14: Chicken in Charge), who is left responsible for the home when Major, Mother and Granny go on a trip?",
    "answers": [
      "Baby Soup Dragon",
      "The Iron Chicken",
      "The Moon Whale",
      "A visiting astronaut"
    ],
    "correctAnswer": "The Iron Chicken",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E14 Chicken in Charge",
      "Revival storyline",
      "Answer: The Iron Chicken",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Adults away",
      "Iron Chicken",
      "Babysitter"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38176",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E15: The Space Tortoise), what awakens a sleeping space tortoise during an adventure with Tiny?",
    "answers": [
      "A shower of blue string pudding",
      "A loud bang from a metal block",
      "A mysterious tune from the sky",
      "The Soup Dragon's green soup"
    ],
    "correctAnswer": "A mysterious tune from the sky",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E15 The Space Tortoise",
      "Revival storyline",
      "Answer: A mysterious tune from the sky",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Sleeping tortoise",
      "Tiny melody",
      "Strange music"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38177",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E16: The Moo Flower), where is the sticky green pod discovered by Tiny and Small while they are flying in the music boat?",
    "answers": [
      "Inside the Soup Well",
      "In the Iron Chicken's nest",
      "Under Granny's pillow",
      "On a Sky Moo's snout"
    ],
    "correctAnswer": "On a Sky Moo's snout",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E16 The Moo Flower",
      "Revival storyline",
      "Answer: On a Sky Moo's snout",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Green pod",
      "Sky Moo nose",
      "Music boat"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38178",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E17: One Dragon Band), who receives Major's specially designed one-person musical band kit?",
    "answers": [
      "Baby Soup Dragon",
      "Granny Clanger",
      "The Iron Chicken",
      "Small Clanger"
    ],
    "correctAnswer": "Baby Soup Dragon",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E17 One Dragon Band",
      "Revival storyline",
      "Answer: Baby Soup Dragon",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Major gift",
      "Dragon music",
      "Band kit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38179",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E18: The Memory Box), who finds a box full of memories made when Mother was young?",
    "answers": [
      "The Iron Chicken and the Wols",
      "Tiny and Small",
      "Major and the Soup Dragon",
      "Granny and the Froglets"
    ],
    "correctAnswer": "Tiny and Small",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E18 The Memory Box",
      "Revival storyline",
      "Answer: Tiny and Small",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Childhood mementos",
      "Mother past",
      "Discovery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38180",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E19: The Hoots Come to Play), with which visitor does Tiny want to play a duet when two Hoots come to visit?",
    "answers": [
      "The Iron Chicken",
      "The Moon Whale",
      "Big Hoot",
      "The Cloud"
    ],
    "correctAnswer": "Big Hoot",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E19 The Hoots Come to Play",
      "Revival storyline",
      "Answer: Big Hoot",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Musical guests",
      "Tiny duet",
      "Big Hoot"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38181",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E20: Chatter Boxes), why does Major build a system for messages between the Clangers?",
    "answers": [
      "He needs to warn them about a meteor",
      "He hopes to speak to Earth",
      "He wants to coordinate a game of hide-and-seek",
      "He wants to hear the others when they call him for soup"
    ],
    "correctAnswer": "He wants to hear the others when they call him for soup",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E20 Chatter Boxes",
      "Revival storyline",
      "Answer: He wants to hear the others when they call him for soup",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Major communications",
      "Soup calls",
      "Messages"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38182",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E21: The Kindness Tree), who helps Major discover a purpose for an invention whose use he cannot work out?",
    "answers": [
      "Tiny and Small",
      "The Wols",
      "Mother and Granny",
      "The Iron Chicken and a Sky Moo"
    ],
    "correctAnswer": "Tiny and Small",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E21 The Kindness Tree",
      "Revival storyline",
      "Answer: Tiny and Small",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Purposeful invention",
      "Children suggest",
      "Kindness"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38183",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E22: The New Froglet), how do the other Froglets initially respond to the new purple member of their group?",
    "answers": [
      "They immediately crown it their leader",
      "They are unsure what to make of the newcomer",
      "They refuse to leave the planet",
      "They dress it as a Soup Dragon"
    ],
    "correctAnswer": "They are unsure what to make of the newcomer",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E22 The New Froglet",
      "Revival storyline",
      "Answer: They are unsure what to make of the newcomer",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Newcomer",
      "Purple Froglet",
      "Uncertainty"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38184",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E23: Hello), what does Major's new invention send through space to carry spoken greetings?",
    "answers": [
      "Wooden birds with notes",
      "Metal rockets carrying postcards",
      "Bubbles containing voice messages",
      "Glow-honey jars"
    ],
    "correctAnswer": "Bubbles containing voice messages",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E23 Hello",
      "Revival storyline",
      "Answer: Bubbles containing voice messages",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Communications bubbles",
      "Voice recordings",
      "Space"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38185",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E24: The Other Iron Chicken), who helps Tiny feel better when the Iron Chicken leaves to visit the Wols?",
    "answers": [
      "The Moon Whale",
      "Major Clanger",
      "A human astronaut",
      "The Soup Dragon"
    ],
    "correctAnswer": "The Soup Dragon",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E24 The Other Iron Chicken",
      "Revival storyline",
      "Answer: The Soup Dragon",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Tiny loneliness",
      "Friend travelling",
      "Dragon comfort"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38186",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E25: The Forgotten Tunnel), which older member of the family joins Tiny and Small in finding an old passage to an unexpected place?",
    "answers": [
      "Granny Clanger",
      "The Iron Chicken",
      "Mother Clanger",
      "Major Clanger"
    ],
    "correctAnswer": "Granny Clanger",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E25 The Forgotten Tunnel",
      "Revival storyline",
      "Answer: Granny Clanger",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Forgotten passage",
      "Family exploration",
      "Granny"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38187",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S2E26: The Moon Whale), what rare visitor arrives at the planet in the last episode of the 2017–18 revival series?",
    "answers": [
      "A golden Eggbot",
      "A Moon Whale",
      "A human astronaut",
      "A purple Sky Moo"
    ],
    "correctAnswer": "A Moon Whale",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2017-2018 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S2E26 The Moon Whale",
      "Revival storyline",
      "Answer: A Moon Whale",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Rare space creature",
      "Series finale",
      "Beautiful guest"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
const expectedAuditedTotal = 174;
if(questions.length!==expectedAuditedTotal ||
 questions[0].id!=='tv_16696' || questions[95].id!=='tv_16791' ||
 auditAdditions[0].id!=='tv_38110' ||
 auditAdditions[auditAdditions.length-1].id!=='tv_38187' ||
 new Set(questions.map(q=>q.id)).size!==questions.length ||
 new Set(questions.map(q=>normalise(q.question))).size!==questions.length ||
 questions.some(q=>q.answers.length!==4 || new Set(q.answers.map(normalise)).size!==4 ||
 q.answers.filter(a=>a===q.correctAnswer).length!==1 ||
 q.programme!=='The Clangers'||!q.tags.includes('Programme: The Clangers')||
 q.tags.length<15||q.dailyEligible!==true))
 throw Error('Pack 347 full audit export validation failed');
module.exports = questions;
