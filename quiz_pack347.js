
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
    "question": "In The Clangers (S2E05: Mother of Invention), what accident unexpectedly reveals a new use for Mother's garden trolley?",
    "answers": [
      "A wind gust blows it into space",
      "Mother accidentally rolls it over Major's foot",
      "It falls down a tunnel into the soup well",
      "A Sky Moo lands on top of it"
    ],
    "correctAnswer": "Mother accidentally rolls it over Major's foot",
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
      "Answer: Mother accidentally rolls it over Major's foot",
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
  },
  {
    "id": "tv_38188",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E01: The Visitor), which three friends are outside playing when they first hear an unfamiliar space module approaching?",
    "answers": [
      "Granny, Major and Mother",
      "The Iron Chicken and the Wols",
      "Tiny, Small and Baby Soup Dragon",
      "The Soup Dragon and the Froglets"
    ],
    "correctAnswer": "Tiny, Small and Baby Soup Dragon",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E01 The Visitor",
      "Revival storyline",
      "Answer: Tiny, Small and Baby Soup Dragon",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Astronaut landing",
      "First witnesses",
      "Space module"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38189",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E02: Radio Wol), what failure persuades the visiting Wols to start a radio station of their own for the Iron Chicken?",
    "answers": [
      "The Iron Chicken loses her singing voice",
      "Major Clanger breaks the music boat",
      "The Froglets steal her telescope",
      "Her ordinary radio stops working"
    ],
    "correctAnswer": "Her ordinary radio stops working",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E02 Radio Wol",
      "Revival storyline",
      "Answer: Her ordinary radio stops working",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Broken radio",
      "Iron Chicken",
      "Wols help"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38190",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E03: Medal), what argument develops after Major rewards only three Froglets for helping him in his workshop?",
    "answers": [
      "The medal-winners start looking down on the others",
      "The medal-winners refuse to go home",
      "The Froglets demand blue soup",
      "The Froglets challenge the Iron Chicken to a race"
    ],
    "correctAnswer": "The medal-winners start looking down on the others",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E03 Medal",
      "Revival storyline",
      "Answer: The medal-winners start looking down on the others",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Rewards",
      "Froglet rivalry",
      "Unfair privilege"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38191",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E04: Strange Music), what has caused the music trees' notes to fall and become muddled?",
    "answers": [
      "A comet has destroyed a soup well",
      "An Eggbot has crashed into the planet",
      "The Moon Whale has eaten the notes",
      "The Wols have shaken the branches"
    ],
    "correctAnswer": "An Eggbot has crashed into the planet",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E04 Strange Music",
      "Revival storyline",
      "Answer: An Eggbot has crashed into the planet",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Notes out of order",
      "Eggbot crash",
      "Music restored"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38192",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E06: Small to the Rescue), which group of grown-up friends gets into trouble and needs Small's help?",
    "answers": [
      "The Iron Chicken and the Wols only",
      "The Froglets and the Moon Whale",
      "Granny, Major, Mother and the Soup Dragon",
      "Tiny and all the Sky Moos"
    ],
    "correctAnswer": "Granny, Major, Mother and the Soup Dragon",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E06 Small to the Rescue",
      "Revival storyline",
      "Answer: Granny, Major, Mother and the Soup Dragon",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Small rescues",
      "Family troubles",
      "Multiple friends"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38193",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E07: The Song of the Stars), what unusual ability does the garden ornament Small brings Mother have?",
    "answers": [
      "It turns sunlight into green soup",
      "It paints pictures of the stars",
      "It knits clothes from spider webs",
      "It remembers melodies and plays them back together"
    ],
    "correctAnswer": "It remembers melodies and plays them back together",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E07 The Song of the Stars",
      "Revival storyline",
      "Answer: It remembers melodies and plays them back together",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Musical ornament",
      "Collected sounds",
      "Harmony"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38194",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E08: Catch a Falling Star), what unexpectedly transforms a string of mishaps for the Clangers into a happier day?",
    "answers": [
      "Colourful light from a passing star",
      "A delivery of new tools from Earth",
      "A bowl of magical soup",
      "A message from the Iron Chicken"
    ],
    "correctAnswer": "Colourful light from a passing star",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E08 Catch a Falling Star",
      "Revival storyline",
      "Answer: Colourful light from a passing star",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Bad luck",
      "Coloured starlight",
      "Changes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38195",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E09: Baby Skymoo), what does Granny knit to help the Sky Moos prepare a special nest for an expected new arrival?",
    "answers": [
      "A winter hat",
      "A blanket",
      "A woollen scarf",
      "A pair of gloves"
    ],
    "correctAnswer": "A blanket",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E09 Baby Skymoo",
      "Revival storyline",
      "Answer: A blanket",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Baby Skymoo",
      "Nest preparation",
      "Granny kindness"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38196",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E10: Small's Big Surprise), what misunderstanding makes Small think he is getting a scooter for his birthday?",
    "answers": [
      "He sees a wrapped bicycle in the workshop",
      "The Wols tell him about a scooter competition",
      "He overhears Tiny and Major discussing a squeaky scooter",
      "He finds a toy scooter outside his bedcave"
    ],
    "correctAnswer": "He overhears Tiny and Major discussing a squeaky scooter",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E10 Small's Big Surprise",
      "Revival storyline",
      "Answer: He overhears Tiny and Major discussing a squeaky scooter",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Small birthday",
      "Overheard conversation",
      "Surprise show"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38197",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E11: Finders Keepers), what does Major make to cheer up Tiny when no one is available to play catch?",
    "answers": [
      "A pair of mechanical roller skates",
      "An automated kite",
      "A singing plant",
      "A cone-shaped cotton-ball launcher"
    ],
    "correctAnswer": "A cone-shaped cotton-ball launcher",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E11 Finders Keepers",
      "Revival storyline",
      "Answer: A cone-shaped cotton-ball launcher",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Tiny lonely",
      "Cotton launcher",
      "Toy goes missing"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38198",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E12: Woly Holiday), what gets out of hand during Tiny's carefully planned visit from the Wols?",
    "answers": [
      "The Wols are too curious and lead Tiny and Small on a chase",
      "A fire destroys the Iron Chicken's nest",
      "The Hoot Planet steals their dinner",
      "A volcano erupts beneath the music boat"
    ],
    "correctAnswer": "The Wols are too curious and lead Tiny and Small on a chase",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E12 Woly Holiday",
      "Revival storyline",
      "Answer: The Wols are too curious and lead Tiny and Small on a chase",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Wols visitors",
      "Curiosity",
      "Busy tour"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38199",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E13: Baby Skymoo and the Cloud), where does Baby Skymoo land after she flies away from the Cloud and loses control?",
    "answers": [
      "In the Iron Chicken's nest",
      "In Mother Clanger's underground garden",
      "In the Froglets' top hat",
      "On the Hoot Planet"
    ],
    "correctAnswer": "In Mother Clanger's underground garden",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E13 Baby Skymoo and the Cloud",
      "Revival storyline",
      "Answer: In Mother Clanger's underground garden",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Young Skymoo",
      "Learning to fly",
      "Cloud rescue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38200",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E14: The Travelling Salesman), what precious item does the robot merchant ultimately want as payment for his goods?",
    "answers": [
      "Major's telescope",
      "Granny's shawl",
      "Tiny's radio hat",
      "The Soup Dragon's ladle"
    ],
    "correctAnswer": "Tiny's radio hat",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E14 The Travelling Salesman",
      "Revival storyline",
      "Answer: Tiny's radio hat",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Robot shopkeeper",
      "Trade",
      "Radio hat"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38201",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E15: The Scary Thing), what makes Tiny afraid of an object Small has fished from space and given her?",
    "answers": [
      "It begins to sing loudly",
      "It grows into a huge flower",
      "It makes all her toys disappear",
      "It casts frightening shadows in her bedcave"
    ],
    "correctAnswer": "It casts frightening shadows in her bedcave",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E15 The Scary Thing",
      "Revival storyline",
      "Answer: It casts frightening shadows in her bedcave",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Small gift",
      "Strange shadows",
      "Bedtime fear"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38202",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E16: The Meteor Shower), what danger traps the family after a shower of meteors while Major and Small are sheltering elsewhere?",
    "answers": [
      "A huge meteor blocks the cave's double doors",
      "The soup well freezes solid",
      "The music trees catch fire",
      "A rocket crashes into the Iron Chicken's nest"
    ],
    "correctAnswer": "A huge meteor blocks the cave's double doors",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E16 The Meteor Shower",
      "Revival storyline",
      "Answer: A huge meteor blocks the cave's double doors",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Meteor boulder",
      "Cave entrance",
      "Family improvises"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38203",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E17: Major's Greatest Invention), what basic flaw does Major discover in his newly invented Clanger-finding device?",
    "answers": [
      "It cannot find the Iron Chicken",
      "It always detects whoever is holding it",
      "It only works at night",
      "It leads everyone into the soup wells"
    ],
    "correctAnswer": "It always detects whoever is holding it",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E17 Major's Greatest Invention",
      "Revival storyline",
      "Answer: It always detects whoever is holding it",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Clanger finder",
      "Inventor mistake",
      "Clock"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38204",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E18: Junk Planet), how does Major's troublesome magnet finally prove useful after causing havoc with metal objects?",
    "answers": [
      "It helps Granny knit faster",
      "It repairs Tiny's radio hat",
      "It frees a Moon Whale trapped in an old rocket booster",
      "It reassembles the Hoot Planet"
    ],
    "correctAnswer": "It frees a Moon Whale trapped in an old rocket booster",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E18 Junk Planet",
      "Revival storyline",
      "Answer: It frees a Moon Whale trapped in an old rocket booster",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Metal attraction",
      "Whale rescue",
      "Space junk"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38205",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E19: Toots), how many mysterious metal objects does Tiny catch while fishing in the music boat?",
    "answers": [
      "Two",
      "Six",
      "Eight",
      "Four"
    ],
    "correctAnswer": "Four",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E19 Toots",
      "Revival storyline",
      "Answer: Four",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Tiny fishing",
      "Metal objects",
      "Space finds"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38206",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E20: Treasure Hunt), which two everyday tools have gone missing at the beginning of a mystery on the planet?",
    "answers": [
      "Major's spanner and Mother's trowel",
      "Granny's needles and Tiny's panpipes",
      "Small's net and the Soup Dragon's ladle",
      "The Iron Chicken's radio and a telescope"
    ],
    "correctAnswer": "Major's spanner and Mother's trowel",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E20 Treasure Hunt",
      "Revival storyline",
      "Answer: Major's spanner and Mother's trowel",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Missing objects",
      "Workshop tool",
      "Garden tool"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38207",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E22: A Tail Tale), what question troubles Baby Soup Dragon about a part of his body?",
    "answers": [
      "Why he has no wings",
      "What his tail is for",
      "Why he is pink instead of blue",
      "Why his ears make noises"
    ],
    "correctAnswer": "What his tail is for",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E22 A Tail Tale",
      "Revival storyline",
      "Answer: What his tail is for",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Baby Dragon",
      "Tail curiosity",
      "Purpose"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38208",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E24: The Soup Flower Trees), which young creature mistakenly believes the things he has found are jewels?",
    "answers": [
      "Small Clanger",
      "A purple Froglet",
      "Baby Soup Dragon",
      "A Baby Sky Moo"
    ],
    "correctAnswer": "Baby Soup Dragon",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E24 The Soup Flower Trees",
      "Revival storyline",
      "Answer: Baby Soup Dragon",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Mistaken jewels",
      "Young dragon",
      "Flower trees"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38209",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E25: Changes), how many oddly shaped and coloured visitors arrive together in the penultimate 2020 episode?",
    "answers": [
      "Three",
      "Seven",
      "Nine",
      "Five"
    ],
    "correctAnswer": "Five",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E25 Changes",
      "Revival storyline",
      "Answer: Five",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Visitors",
      "Different shapes",
      "Mysterious objects"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38210",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (S3E26: Major's Helper), what sort of passing vehicle deposits a heap of rubbish containing an unexpected robot-like object?",
    "answers": [
      "A space dustcart",
      "A flying ambulance",
      "A music boat",
      "A travelling caravan shop"
    ],
    "correctAnswer": "A space dustcart",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2019-2020 revival",
      "CBeebies",
      "Stop Motion Animation",
      "Episode: S3E26 Major's Helper",
      "Revival storyline",
      "Answer: A space dustcart",
      "Episode source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Rubbish drop",
      "Space dustcart",
      "Robot part"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38211",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E01 Flying), how do the Clangers finally rescue Tiny after her balloon carries her to the roof of the cave?",
    "answers": [
      "They climb a ladder made of copper branches",
      "They bounce Small up using a tablecloth",
      "They pull her down with a fishing magnet",
      "The Iron Chicken flies her down"
    ],
    "correctAnswer": "They bounce Small up using a tablecloth",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E01 Flying",
      "Original series storyline",
      "Answer: They bounce Small up using a tablecloth",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Tiny stranded",
      "Tablecloth trampoline",
      "Small rescue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38212",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E01 Flying), what supplies the power for Major's first flapping flying-machine experiment?",
    "answers": [
      "A wheel made of music notes",
      "A jet-propelled fruit",
      "Compressed-air balloons",
      "Steam from the soup well"
    ],
    "correctAnswer": "Compressed-air balloons",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E01 Flying",
      "Original series storyline",
      "Answer: Compressed-air balloons",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Flying invention",
      "Air balloons",
      "Failed attempt"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38213",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E02 The Visitor), what do the Clangers use to catch a television set orbiting their planet?",
    "answers": [
      "A rope ladder and a magnet",
      "A space rocket and a parachute",
      "A fishing boat and a glass bottle",
      "See-saws and a large butterfly net"
    ],
    "correctAnswer": "See-saws and a large butterfly net",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E02 The Visitor",
      "Original series storyline",
      "Answer: See-saws and a large butterfly net",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Orbital television",
      "Tiny net",
      "See-saws"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38214",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E02 The Visitor), what substance do they pour into the silent television in an unsuccessful attempt to revive it?",
    "answers": [
      "Green soup",
      "Blue string pudding",
      "Glow honey",
      "Water from the Cloud"
    ],
    "correctAnswer": "Green soup",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E02 The Visitor",
      "Original series storyline",
      "Answer: Green soup",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "TV repair",
      "Soup sparks",
      "Strange technology"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38215",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E02 The Visitor), why does the Soup Dragon refuse to supply more soup after the visitors play loud pop music?",
    "answers": [
      "She has run out of food",
      "She demands that the television be removed",
      "She wants to keep the TV for herself",
      "She is angry that the music trees are silent"
    ],
    "correctAnswer": "She demands that the television be removed",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E02 The Visitor",
      "Original series storyline",
      "Answer: She demands that the television be removed",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Soup Dragon protest",
      "Television nuisance",
      "Remove object"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38216",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E03 Chicken), what meal does the newly assembled Iron Chicken eat after falling through the Clangers' ceiling?",
    "answers": [
      "Glow honey",
      "Green soup",
      "Blue string pudding",
      "Copper-tree berries"
    ],
    "correctAnswer": "Blue string pudding",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E03 Chicken",
      "Original series storyline",
      "Answer: Blue string pudding",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Iron Chicken",
      "Intrusive dinner",
      "Food"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38217",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E03 Chicken), how does Tiny help soothe the Iron Chicken after Major scolds it for eating their food?",
    "answers": [
      "She gives it a new dustbin lid",
      "She takes it to the Hoot Planet",
      "She makes it a knitted shawl",
      "She brings it a necklace and speaks kindly"
    ],
    "correctAnswer": "She brings it a necklace and speaks kindly",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E03 Chicken",
      "Original series storyline",
      "Answer: She brings it a necklace and speaks kindly",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Tiny kindness",
      "Iron Chicken comfort",
      "Necklace"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38218",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E04 Music), what is discovered inside the musical egg when Tiny drops and breaks it?",
    "answers": [
      "Individual music notes",
      "A baby Iron Chicken",
      "A bundle of wool",
      "A telescope lens"
    ],
    "correctAnswer": "Individual music notes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E04 Music",
      "Original series storyline",
      "Answer: Individual music notes",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Musical egg",
      "Notes",
      "Tiny discovery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38219",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E04 Music), what happens when the Soup Dragon eats the notes from Tiny's new music?",
    "answers": [
      "She grows wings",
      "She begins singing",
      "She changes colour",
      "She becomes unable to speak"
    ],
    "correctAnswer": "She begins singing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E04 Music",
      "Original series storyline",
      "Answer: She begins singing",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Soup Dragon singing",
      "Eaten notes",
      "Unexpected effect"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38220",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E04 Music), how do Tiny and Small replace the eaten musical notes?",
    "answers": [
      "They fish for new notes in the Hoot Planet",
      "They ask Major to manufacture them in a machine",
      "They plant the remaining notes and ask the Cloud to water them",
      "They paint notes onto the soup well"
    ],
    "correctAnswer": "They plant the remaining notes and ask the Cloud to water them",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E04 Music",
      "Original series storyline",
      "Answer: They plant the remaining notes and ask the Cloud to water them",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Music trees",
      "Cloud rain",
      "New notes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38221",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E05 The Intruder), what object does Major accidentally pull off the visiting lunar rover when he tries to greet it?",
    "answers": [
      "A wheel",
      "A fuel tank",
      "An aerial dish",
      "An optical instrument"
    ],
    "correctAnswer": "An optical instrument",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E05 The Intruder",
      "Original series storyline",
      "Answer: An optical instrument",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Earth probe",
      "Broken lens",
      "Major curiosity"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38222",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E05 The Intruder), what sight through the recovered telescope persuades the Clangers to abandon their plan to visit Earth?",
    "answers": [
      "A forbidding city skyline",
      "A deep ocean",
      "A giant desert",
      "A snow-covered mountain"
    ],
    "correctAnswer": "A forbidding city skyline",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E05 The Intruder",
      "Original series storyline",
      "Answer: A forbidding city skyline",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Earth telescope",
      "Space journey abandoned",
      "City skyline"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38223",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E06 Visiting Friends), what present does Tiny hope to deliver to the Iron Chicken using her musical helicopter?",
    "answers": [
      "A knitted toy",
      "A jewel to decorate its necklace",
      "A basket of blue-string pudding",
      "A little copper whistle"
    ],
    "correctAnswer": "A jewel to decorate its necklace",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E06 Visiting Friends",
      "Original series storyline",
      "Answer: A jewel to decorate its necklace",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Tiny gift",
      "Jewel berry",
      "Iron Chicken"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38224",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E06 Visiting Friends), what gift does the Iron Chicken give Tiny during their visit on its distant nest?",
    "answers": [
      "A new music boat",
      "A feathered cloak",
      "A radio communicator hat",
      "A flying umbrella"
    ],
    "correctAnswer": "A radio communicator hat",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E06 Visiting Friends",
      "Original series storyline",
      "Answer: A radio communicator hat",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Iron Chicken gift",
      "Radio hat",
      "Friendship"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38225",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E06 Visiting Friends), how does Tiny finally travel back to her home planet after the visit?",
    "answers": [
      "Flying in Major's failed rocket",
      "Riding a passing Sky Moo",
      "Hanging from an Iron Chicken feather",
      "Riding on the Cloud"
    ],
    "correctAnswer": "Riding on the Cloud",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E06 Visiting Friends",
      "Original series storyline",
      "Answer: Riding on the Cloud",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Cloud ride",
      "Return home",
      "Tiny"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38226",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E07 Fishing), what musical mechanism lets the Clangers' boat lift into the air after earlier designs fail?",
    "answers": [
      "A spinning wheel of music notes",
      "A jet made from glow honey",
      "A bag of singing pebbles",
      "A telescope powered by moonlight"
    ],
    "correctAnswer": "A spinning wheel of music notes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E07 Fishing",
      "Original series storyline",
      "Answer: A spinning wheel of music notes",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Flying boat",
      "Music wheel",
      "Improvised engine"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38227",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E07 Fishing), what unexpectedly small catch does the flying music boat's first fishing trip bring in before the Clangers throw it back?",
    "answers": [
      "A silver egg",
      "A tiny flying saucer",
      "A purple Froglet",
      "An iron teapot"
    ],
    "correctAnswer": "A tiny flying saucer",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E07 Fishing",
      "Original series storyline",
      "Answer: A tiny flying saucer",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Music boat",
      "Magnetic rod",
      "Odd catch"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38228",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E08 The Top Hat), what special food helps revive the Froglets after they collapse in the music quarry?",
    "answers": [
      "Green soup alone",
      "Glow-honey pudding",
      "Blue-and-white pudding soup",
      "Roasted copper leaves"
    ],
    "correctAnswer": "Blue-and-white pudding soup",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E08 The Top Hat",
      "Original series storyline",
      "Answer: Blue-and-white pudding soup",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Froglet collapse",
      "Special pudding",
      "Recovery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38229",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E08 The Top Hat), where do the newly rescued Froglets eventually return after meeting another of their kind?",
    "answers": [
      "The Iron Chicken's nest",
      "The Hoot Planet",
      "A greenhouse in Mother's garden",
      "A sideways pink lake in the deep caves"
    ],
    "correctAnswer": "A sideways pink lake in the deep caves",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E08 The Top Hat",
      "Original series storyline",
      "Answer: A sideways pink lake in the deep caves",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Froglet home",
      "Sideways lake",
      "Deep caves"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38230",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E09 The Dragon Egg), who tells Tiny how to prepare an egg for the broody Soup Dragon?",
    "answers": [
      "The Iron Chicken",
      "Granny Clanger",
      "The Moon Whale",
      "Major Clanger"
    ],
    "correctAnswer": "The Iron Chicken",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E09 The Dragon Egg",
      "Original series storyline",
      "Answer: The Iron Chicken",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Soup Dragon broody",
      "Iron Chicken instructions",
      "Egg"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38231",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E09 The Dragon Egg), what activates the egg prepared for the Soup Dragon before her baby emerges?",
    "answers": [
      "Heat from Major's rocket",
      "A green beam from the Iron Chicken",
      "Glow honey poured onto the shell",
      "A rainstorm from the Cloud"
    ],
    "correctAnswer": "A green beam from the Iron Chicken",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E09 The Dragon Egg",
      "Original series storyline",
      "Answer: A green beam from the Iron Chicken",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Broody dragon",
      "Green light",
      "Egg hatches"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38232",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E10 The Hoot), what fruit does Major try stuffing into the constantly hooting creature to quiet it?",
    "answers": [
      "A purple star rose",
      "An orange blow-fruit",
      "A white fluffy dumpling fruit",
      "A golden apple"
    ],
    "correctAnswer": "A white fluffy dumpling fruit",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E10 The Hoot",
      "Original series storyline",
      "Answer: A white fluffy dumpling fruit",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Hoot too loud",
      "Makeshift gag",
      "Fluffy fruit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38233",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E10 The Hoot), what do the younger Clangers place inside the Hoot so it can produce music instead of a deafening noise?",
    "answers": [
      "Blue-string pudding",
      "An iron egg",
      "Glow-honey crystals",
      "Notes from the music trees"
    ],
    "correctAnswer": "Notes from the music trees",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E10 The Hoot",
      "Original series storyline",
      "Answer: Notes from the music trees",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Hoot transformed",
      "Musical notes",
      "New voice"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38234",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E11 The Meeting), how do the visiting Hoots treat their old companion after hearing its changed musical voice?",
    "answers": [
      "They hit it with their trumpet-like horns",
      "They offer it a concert invitation",
      "They decorate it with coloured wool",
      "They invite it to Earth"
    ],
    "correctAnswer": "They hit it with their trumpet-like horns",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E11 The Meeting",
      "Original series storyline",
      "Answer: They hit it with their trumpet-like horns",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Visiting Hoots",
      "Bullying",
      "Different music"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38235",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E11 The Meeting), who stands up to the visiting Hoots when they attack their old friend?",
    "answers": [
      "Granny Clanger",
      "Tiny Clanger",
      "Major Clanger",
      "The Soup Dragon"
    ],
    "correctAnswer": "Tiny Clanger",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E11 The Meeting",
      "Original series storyline",
      "Answer: Tiny Clanger",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Tiny defends",
      "Hoots dispute",
      "Friendship"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38236",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E12 Treasure), what do the apparently precious gold coins Tiny catches from space turn out to be?",
    "answers": [
      "Genuine gold sovereigns",
      "Golden music notes",
      "Chocolate pennies wrapped in foil",
      "Wooden tokens painted yellow"
    ],
    "correctAnswer": "Chocolate pennies wrapped in foil",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E12 Treasure",
      "Original series storyline",
      "Answer: Chocolate pennies wrapped in foil",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Treasure reveal",
      "Chocolate coins",
      "Generosity"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38237",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E12 Treasure), what ordinary activity does Tiny neglect because she is guarding her supposed fortune?",
    "answers": [
      "Knitting with Granny",
      "Repairing the flying boat",
      "Watching a solar eclipse",
      "Playing with Small and Baby Soup Dragon"
    ],
    "correctAnswer": "Playing with Small and Baby Soup Dragon",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E12 Treasure",
      "Original series storyline",
      "Answer: Playing with Small and Baby Soup Dragon",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Tiny possessive",
      "Hoarding coins",
      "Friends"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38238",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E13 Goods), which friends magically dispose of the flood of plastic items produced by the runaway machine?",
    "answers": [
      "The Froglets using their top hat",
      "The Iron Chicken using her nest",
      "The Soup Dragon eating all of them",
      "The Cloud washing them away"
    ],
    "correctAnswer": "The Froglets using their top hat",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E13 Goods",
      "Original series storyline",
      "Answer: The Froglets using their top hat",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Runaway consumer machine",
      "Magical top hat",
      "Cleanup"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38239",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O1E13 Goods), what toy do the Froglets bring back after removing the plastic goods to make Tiny happy?",
    "answers": [
      "A miniature rocket",
      "A woolly rabbit",
      "A model train",
      "A toy Froglet"
    ],
    "correctAnswer": "A woolly rabbit",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O1E13 Goods",
      "Original series storyline",
      "Answer: A woolly rabbit",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Woolly rabbit",
      "Tiny comfort",
      "Magic hat"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38240",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E01 The Tablecloth), how do the freezing Froglets first try to keep warm using blue-string pudding?",
    "answers": [
      "They eat every scrap of pudding",
      "They hide in the pudding bowl",
      "They wrap the strings round themselves like coats",
      "They use it to line a cardboard shelter"
    ],
    "correctAnswer": "They wrap the strings round themselves like coats",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E01 The Tablecloth",
      "Original series storyline",
      "Answer: They wrap the strings round themselves like coats",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Froglet coats",
      "String pudding",
      "Cold"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38241",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E01 The Tablecloth), why does Mother Clanger become angry about the Froglets' new cloaks?",
    "answers": [
      "They are made from her best dress",
      "They are decorated with copper leaves",
      "The Froglets have taken Granny's wool",
      "The family tablecloth has been cut up to make them"
    ],
    "correctAnswer": "The family tablecloth has been cut up to make them",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E01 The Tablecloth",
      "Original series storyline",
      "Answer: The family tablecloth has been cut up to make them",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Tablecloth holes",
      "Froglet clothes",
      "Mother upset"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38242",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E01 The Tablecloth), what does a visiting astronaut leave behind that replaces something the Clangers have cut up?",
    "answers": [
      "A flag that can serve as a tablecloth",
      "A large woollen blanket",
      "A sheet of copper",
      "An old canvas tent"
    ],
    "correctAnswer": "A flag that can serve as a tablecloth",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E01 The Tablecloth",
      "Original series storyline",
      "Answer: A flag that can serve as a tablecloth",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Astronaut flag",
      "Replacement cloth",
      "Space visit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38243",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E02 The Rock Collector), what do the Clangers put into an astronaut's basket instead of the rocks he is gathering?",
    "answers": [
      "Musical notes",
      "Blue-string pudding",
      "Glow-honey jars",
      "Copper leaves"
    ],
    "correctAnswer": "Blue-string pudding",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E02 The Rock Collector",
      "Original series storyline",
      "Answer: Blue-string pudding",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Prank",
      "Astronaut samples",
      "Pudding"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38244",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E02 The Rock Collector), how do the Clangers try to clean a visitor after he falls into the Soup Dragon's well?",
    "answers": [
      "They put him in a bubble-bath machine",
      "They wipe him with Granny's shawl",
      "They ask the Cloud to rain on him",
      "They plunge him into a pond"
    ],
    "correctAnswer": "They ask the Cloud to rain on him",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E02 The Rock Collector",
      "Original series storyline",
      "Answer: They ask the Cloud to rain on him",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Astronaut soup",
      "Cloud shower",
      "Rescue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38245",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E03 Glow-Honey), who unexpectedly supplies a trail of wool to lead Small out of the hidden caves?",
    "answers": [
      "The Sky Moos",
      "The Froglets",
      "The Iron Chicken",
      "The Glow Buzzers"
    ],
    "correctAnswer": "The Glow Buzzers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E03 Glow-Honey",
      "Original series storyline",
      "Answer: The Glow Buzzers",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Small lost",
      "Wool trail",
      "Insect helpers"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38246",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E03 Glow-Honey), what is Small trying to find out when he follows the Glow Buzzers deep underground?",
    "answers": [
      "Where they collect nectar for their glow-honey",
      "Where the Iron Chicken lays eggs",
      "How to build a new music boat",
      "Whether the Hoot Planet has a garden"
    ],
    "correctAnswer": "Where they collect nectar for their glow-honey",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E03 Glow-Honey",
      "Original series storyline",
      "Answer: Where they collect nectar for their glow-honey",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Honey origin",
      "Hidden flowers",
      "Cave exploration"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38247",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E04 The Teapot), what happens when Small blows through a teapot's blocked spout after trying to serve soup?",
    "answers": [
      "The teapot turns into a Froglet",
      "It makes a loud trumpet sound that attracts other pots",
      "Soup turns blue inside it",
      "The teapot flies straight to Earth"
    ],
    "correctAnswer": "It makes a loud trumpet sound that attracts other pots",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E04 The Teapot",
      "Original series storyline",
      "Answer: It makes a loud trumpet sound that attracts other pots",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Blocked spout",
      "Trumpet sound",
      "More pots"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38248",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E04 The Teapot), how do the Clangers finally send away the unwelcome crowd of flying teapots?",
    "answers": [
      "They lock the teapots in the Soup Well",
      "They give them all to the Iron Chicken",
      "They attach a spinning ring of music notes to the first teapot",
      "They cover every pot with a tablecloth"
    ],
    "correctAnswer": "They attach a spinning ring of music notes to the first teapot",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E04 The Teapot",
      "Original series storyline",
      "Answer: They attach a spinning ring of music notes to the first teapot",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Flying teapots",
      "Music wheel",
      "Departure"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38249",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E05 The Cloud), why does the Cloud accidentally drench the Clangers during a birthday party?",
    "answers": [
      "It is angry about a stolen cloud hat",
      "It wants to cool the music trees",
      "It is sneezing after catching a chill",
      "It laughs so hard that it rains"
    ],
    "correctAnswer": "It laughs so hard that it rains",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E05 The Cloud",
      "Original series storyline",
      "Answer: It laughs so hard that it rains",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Cloud laughter",
      "Birthday rain",
      "Embarrassment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38250",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E05 The Cloud), what magical object do the Froglets use to help the embarrassed Cloud move between places?",
    "answers": [
      "Their top hat",
      "A miniature music boat",
      "A copper telescope",
      "A folding umbrella"
    ],
    "correctAnswer": "Their top hat",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E05 The Cloud",
      "Original series storyline",
      "Answer: Their top hat",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Froglets magic",
      "Cloud moved",
      "Top hat"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38251",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E06 The Chicken Egg), how do the Clangers first save the Iron Chicken's falling egg as it comes towards their planet?",
    "answers": [
      "They use a giant fishing magnet",
      "They hold out a tablecloth to catch it",
      "The Soup Dragon catches it in her ladle",
      "They inflate a balloon under it"
    ],
    "correctAnswer": "They hold out a tablecloth to catch it",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E06 The Chicken Egg",
      "Original series storyline",
      "Answer: They hold out a tablecloth to catch it",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Iron egg",
      "Tablecloth catch",
      "Motherhood"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38252",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E06 The Chicken Egg), what unusual food finally nourishes the newly hatched Iron Chick?",
    "answers": [
      "Blue-string pudding",
      "Green soup",
      "Nuts and bolts",
      "Glow honey"
    ],
    "correctAnswer": "Nuts and bolts",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E06 The Chicken Egg",
      "Original series storyline",
      "Answer: Nuts and bolts",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Baby iron chick",
      "Metal food",
      "Recovery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38253",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E07 The Noise Machine), how does the strange gramophone-like device preserve the sounds the Clangers make?",
    "answers": [
      "It writes them as messages on paper",
      "It turns them into coloured stones",
      "It stores them in a soup jug",
      "It traps the sounds inside bubbles"
    ],
    "correctAnswer": "It traps the sounds inside bubbles",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E07 The Noise Machine",
      "Original series storyline",
      "Answer: It traps the sounds inside bubbles",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Sound recordings",
      "Bubbles",
      "Noise machine"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38254",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E07 The Noise Machine), how do the Clangers realise that the missing Iron Chick is trapped in the machine?",
    "answers": [
      "A bubble plays its distressed cheeping",
      "They find its metal feathers outside",
      "The Iron Chicken reads a note",
      "A Froglet finds its footprints"
    ],
    "correctAnswer": "A bubble plays its distressed cheeping",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E07 The Noise Machine",
      "Original series storyline",
      "Answer: A bubble plays its distressed cheeping",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Iron Chick lost",
      "Cheeping bubble",
      "Rescue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38255",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E08 The Seed), what eventually spreads the rapidly growing vegetation beyond the first plant?",
    "answers": [
      "The Soup Dragon planting a whole field",
      "Seeds carried by the Cloud after it is decorated with flowers",
      "Major scattering a bucket of seed",
      "The Iron Chicken dropping a sack of grain"
    ],
    "correctAnswer": "Seeds carried by the Cloud after it is decorated with flowers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E08 The Seed",
      "Original series storyline",
      "Answer: Seeds carried by the Cloud after it is decorated with flowers",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Overgrown planet",
      "Cloud flowers",
      "Spreading seeds"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38256",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E09 Pride), what does the Soup Dragon pour over Small's mirror during their quarrel?",
    "answers": [
      "Blue string pudding",
      "Glow honey",
      "Sticky green soup",
      "Fresh water"
    ],
    "correctAnswer": "Sticky green soup",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E09 Pride",
      "Original series storyline",
      "Answer: Sticky green soup",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Mirror quarrel",
      "Soup Dragon",
      "Vanity"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38257",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E09 Pride), what does Small finally do with Tiny's copper crown after his obsession with the mirror ends?",
    "answers": [
      "He throws it into space",
      "He sells it to the Iron Chicken",
      "He melts it into a new mirror",
      "He puts it back on Tiny's head"
    ],
    "correctAnswer": "He puts it back on Tiny's head",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E09 Pride",
      "Original series storyline",
      "Answer: He puts it back on Tiny's head",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Small changes",
      "Crown returned",
      "Sister"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38258",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E10 The Bags), what food does the strange moving bag charm away from the family's dinner table?",
    "answers": [
      "Blue-string pudding",
      "Green soup",
      "Glow honey",
      "Copper fruit"
    ],
    "correctAnswer": "Blue-string pudding",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E10 The Bags",
      "Original series storyline",
      "Answer: Blue-string pudding",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Magic bag",
      "Missing supper",
      "Food"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38259",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E10 The Bags), what companion do the Froglets conjure for the mysterious travelling Gladstone bag?",
    "answers": [
      "A small iron chicken",
      "A jewelled feminine bag",
      "A golden suitcase",
      "A copper teapot"
    ],
    "correctAnswer": "A jewelled feminine bag",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E10 The Bags",
      "Original series storyline",
      "Answer: A jewelled feminine bag",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Bag romance",
      "Froglets conjuring",
      "New companion"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38260",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E11 The Blow-Fruit), where do Small and Baby Soup Dragon drop blow-fruit to make loud bursts that disturb Tiny's music?",
    "answers": [
      "Into the Hoot Planet",
      "Under the Iron Chicken's nest",
      "Into the soup well",
      "Inside the music boat's engine"
    ],
    "correctAnswer": "Into the soup well",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E11 The Blow-Fruit",
      "Original series storyline",
      "Answer: Into the soup well",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Jet fruit",
      "Soup explosion",
      "Tiny upset"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38261",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E11 The Blow-Fruit), what old project does Major attempt to power with the strange explosive fruit?",
    "answers": [
      "A knitting robot",
      "A radio station",
      "A telescope",
      "A flying machine"
    ],
    "correctAnswer": "A flying machine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E11 The Blow-Fruit",
      "Original series storyline",
      "Answer: A flying machine",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Blow-fruit energy",
      "Ornithopter",
      "Major"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38262",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E12 The Pipe Organ), how do Small and Major initially try to deliver soup after the trolley wheel breaks?",
    "answers": [
      "They launch the soup jug like a rocket using bubble fruit",
      "They pour soup through a long metal tube from space",
      "They ask the Froglets to teleport it",
      "They suspend the jug beneath a Sky Moo"
    ],
    "correctAnswer": "They launch the soup jug like a rocket using bubble fruit",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E12 The Pipe Organ",
      "Original series storyline",
      "Answer: They launch the soup jug like a rocket using bubble fruit",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Soup shortage",
      "Rocket jug",
      "Bubble power"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38263",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E12 The Pipe Organ), what useful new role does Tiny give Major's discarded soup-pumping machine?",
    "answers": [
      "She uses it to repair Granny's knitting",
      "She turns it into a musical organ",
      "She converts it into a telescope",
      "She makes it a spare soup trolley"
    ],
    "correctAnswer": "She turns it into a musical organ",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E12 The Pipe Organ",
      "Original series storyline",
      "Answer: She turns it into a musical organ",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Failed soup pump",
      "Pipe organ",
      "Tiny creativity"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38264",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E13 The Music of the Spheres), who sets off in pursuit on the Cloud after Tiny is accidentally carried away by the Hoot Planet?",
    "answers": [
      "The Soup Dragon",
      "Granny Clanger",
      "Small Clanger",
      "The Iron Chicken"
    ],
    "correctAnswer": "Small Clanger",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E13 The Music of the Spheres",
      "Original series storyline",
      "Answer: Small Clanger",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Tiny in space",
      "Cloud chase",
      "Brother"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38265",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (O2E13 The Music of the Spheres), who brings Tiny home after she conducts the celestial gathering's music?",
    "answers": [
      "The Soup Dragon",
      "The Iron Chicken",
      "The Moon Whale",
      "Major Clanger"
    ],
    "correctAnswer": "Major Clanger",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: O2E13 The Music of the Spheres",
      "Original series storyline",
      "Answer: Major Clanger",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Interstellar concert",
      "Tiny conducting",
      "Major return"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38266",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (1974 Special Vote for Froglet), which candidate wins the Clangers' mock election despite proposing a policy against Froglets?",
    "answers": [
      "The Soup Dragon",
      "A Froglet",
      "Major Clanger",
      "The Iron Chicken"
    ],
    "correctAnswer": "The Soup Dragon",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: 1974 Special Vote for Froglet",
      "Original series storyline",
      "Answer: The Soup Dragon",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Election result",
      "Soup Dragon",
      "Voting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38267",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (1974 Special Vote for Froglet), what does the Soup Dragon promise to withhold from Froglets during the election campaign?",
    "answers": [
      "Glow honey",
      "Soup",
      "Musical notes",
      "Blue string pudding"
    ],
    "correctAnswer": "Soup",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: 1974 Special Vote for Froglet",
      "Original series storyline",
      "Answer: Soup",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Campaign pledge",
      "No Soup for Froglets",
      "Politics"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38268",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (1974 Special Vote for Froglet), how do the Clangers finally respond when their narrator insists that politics should not be nice?",
    "answers": [
      "They form a political party on Earth",
      "They hold a second election for an Iron Chicken",
      "They ignore his advice and return inside their planet",
      "They make the narrator their new leader"
    ],
    "correctAnswer": "They ignore his advice and return inside their planet",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "Original 1969-1974 series",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: 1974 Special Vote for Froglet",
      "Original series storyline",
      "Answer: They ignore his advice and return inside their planet",
      "Source: https://www.clivebanks.co.uk/Clangers%20Episodes.htm",
      "Source note: preproduction story outline",
      "Election satire",
      "Narrator challenged",
      "Clangers withdraw"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38269",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (2015 solar-eclipse special), what astronomical event do the characters explain to young viewers, including how to observe it safely?",
    "answers": [
      "A meteor shower",
      "A lunar landing",
      "The transit of Venus",
      "A solar eclipse"
    ],
    "correctAnswer": "A solar eclipse",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 CBeebies specials",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: 2015 special: Clangers and the Solar Eclipse",
      "Standalone short",
      "Reintroduction",
      "Answer: A solar eclipse",
      "Source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Eclipse education",
      "Safe viewing",
      "CBeebies short"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38270",
    "category": "Television",
    "programme": "The Clangers",
    "question": "In The Clangers (2015 introduction special), which CBeebies stargazer discovers the Clangers' small blue world through a telescope?",
    "answers": [
      "Maggie",
      "Emily",
      "Mariette",
      "Madeleine"
    ],
    "correctAnswer": "Maggie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "The Clangers",
      "Programme: The Clangers",
      "2015 CBeebies specials",
      "Smallfilms",
      "Stop Motion Animation",
      "Episode: 2015 special: Meet the Clangers",
      "Standalone short",
      "Reintroduction",
      "Answer: Maggie",
      "Source: https://thetvdb.com/series/clangers-2015/allseasons/official",
      "Maggie stargazer",
      "Blue planet",
      "Telescope discovery"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
const expectedAuditedTotal = 257;
if(questions.length!==expectedAuditedTotal ||
 questions[0].id!=='tv_16696' || questions[95].id!=='tv_16791' ||
 auditAdditions[0].id!=='tv_38110' ||
 auditAdditions[auditAdditions.length-1].id!=='tv_38270' ||
 new Set(questions.map(q=>q.id)).size!==questions.length ||
 new Set(questions.map(q=>normalise(q.question))).size!==questions.length ||
 questions.some(q=>q.answers.length!==4 || new Set(q.answers.map(normalise)).size!==4 ||
 q.answers.filter(a=>a===q.correctAnswer).length!==1 ||
 q.programme!=='The Clangers'||!q.tags.includes('Programme: The Clangers')||
 q.tags.length<15||q.dailyEligible!==true))
 throw Error('Pack 347 full audit export validation failed');
module.exports = questions;
