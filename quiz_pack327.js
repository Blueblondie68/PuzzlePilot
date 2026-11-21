
 // quiz_pack327.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: Detectorists (2014-2017 series; 2015 and 2022 story specials).
 // Covers the complete 20-episode scripted run through 26 December 2022.
 // One question per line: question | correct | wrong 1 | wrong 2 | wrong 3 | difficulty | seven individual tags.
 // Programme and subject metadata are added to every exported question.
 // Sources checked: British Comedy Guide episode/character/cast guides, BBC episode listings,
 // and the 2014-2022 episode-by-episode series synopsis.

 const programme = 'Detectorists';
 const facts = `Who created, wrote and directed the television comedy Detectorists?|Mackenzie Crook|Richard Ayoade|Simon Pegg|Graham Linehan|Easy|Mackenzie Crook|Creator|Writer|Director|Production Credits|British Sitcom|Original Series
 Which actor played amateur detectorist Andy Stone?|Mackenzie Crook|Toby Jones|Gerard Horan|Pearce Quigley|Easy|Andy Stone|Mackenzie Crook|Lead Role|Metal Detectorist|Main Cast|Actor Casting|Danebury
 Which actor portrayed Andy's detecting partner Lance Stater?|Toby Jones|Mackenzie Crook|Simon Farnaby|Divian Ladwa|Easy|Lance Stater|Toby Jones|Lead Role|Best Friend|Amateur Detecting|Actor Casting|Danebury
 Who played Andy's partner and later wife Becky?|Rachael Stirling|Lucy Benjamin|Sophie Thompson|Rebecca Callard|Easy|Rachael Stirling|Becky|Andy Partner|Family Relationship|School Teacher|Main Cast|Character Casting
 Which actor portrayed Danebury club president Terry Seymour?|Gerard Horan|Pearce Quigley|David Sterne|Toby Jones|Medium|Gerard Horan|Terry Seymour|Club President|Retired Policeman|DMDC|Supporting Cast|Actor Casting
 Which actress played Terry's wife Sheila Seymour?|Sophie Thompson|Rachael Stirling|Diana Rigg|Laura Checkley|Medium|Sophie Thompson|Sheila Seymour|Terry Wife|Married Couple|Club Gatherings|Supporting Actress|Character Casting
 Who played student detectorist Sophie during the first two series?|Aimee-Ffion Edwards|Alexa Davies|Orion Ben|Rebecca Callard|Medium|Aimee Ffion Edwards|Sophie|History Student|Series One|Series Two|New Club Member|Actor Casting
 Which actor played the club member Russell?|Pearce Quigley|Divian Ladwa|Paul Casar|Gerard Horan|Medium|Pearce Quigley|Russell|Club Member|DMDC|Detecting Friend|Supporting Actor|Casting
 Who portrayed Russell's shy fellow club member Hugh?|Divian Ladwa|Pearce Quigley|David Sterne|Daniel Donskoy|Medium|Divian Ladwa|Hugh|Timid Member|Russell Partner|DMDC|Supporting Actor|Casting
 Which actress played the forthright detectorist Louise?|Laura Checkley|Orion Ben|Lucy Benjamin|Sophie Thompson|Medium|Laura Checkley|Louise|Club Member|DMDC|Varde Partner|Supporting Actress|Casting
 Which actress portrayed Louise's largely silent girlfriend Varde?|Orion Ben|Alexa Davies|Aimee-Ffion Edwards|Rebecca Callard|Medium|Orion Ben|Varde|Louise Partner|Club Member|Quiet Character|DMDC|Casting
 Who played Lance's ex-wife Maggie?|Lucy Benjamin|Rachael Stirling|Rebecca Callard|Diana Rigg|Medium|Lucy Benjamin|Maggie|Lance Ex Wife|New Age Shop|First Series|Returning Character|Casting
 Which actor portrayed eccentric landowner Larry Bishop?|David Sterne|Gerard Horan|Adam Riches|Simon Farnaby|Medium|David Sterne|Larry Bishop|Bishop Farm|Landowner|Series One|Rural Eccentric|Casting
 Which actress played Lance's estranged daughter Kate?|Alexa Davies|Aimee-Ffion Edwards|Orion Ben|Lucy Benjamin|Medium|Alexa Davies|Kate|Lance Daughter|Estranged Family|Series Two|Series Three|Casting
 Who portrayed mechanic and Lance's later girlfriend Toni?|Rebecca Callard|Lucy Benjamin|Sophie Thompson|Laura Checkley|Medium|Rebecca Callard|Toni|Lance Girlfriend|Mechanic|Narrowboat|Romance|Casting
 Which actress played Becky's mother Veronica?|Diana Rigg|Sophie Thompson|Rachael Stirling|Lucy Benjamin|Medium|Diana Rigg|Veronica|Becky Mother|Grandmother|Supporting Character|Family Casting|Series Two
 Who played the rival detectorist known as Art or Philip Peters?|Simon Farnaby|Paul Casar|Adam Riches|Daniel Donskoy|Medium|Simon Farnaby|Art|Philip Peters|Rival Detectorist|Antiquisearchers|Terra Firma|Casting
 Which actor played Art's detecting partner Paul Lee?|Paul Casar|Simon Farnaby|Divian Ladwa|David Sterne|Hard|Paul Casar|Paul Lee|Rival Detectorist|Art Partner|Dirt Sharks|Antiquisearchers|Casting
 Who portrayed German visitor Peter in series two?|Daniel Donskoy|Adam Riches|David Sterne|Gerard Horan|Medium|Daniel Donskoy|Peter|German Visitor|Second Series|Aircraft Wreckage|Sophie Romance|Casting
 Who composed and sang the Detectorists opening theme?|Johnny Flynn|Richard Hawley|Seth Lakeman|Nick Drake|Easy|Johnny Flynn|Opening Theme|Theme Song|Musician|Television Soundtrack|Folk Music|Composer
 What hobby brings Andy and Lance together in the programme?|Metal detecting|Birdwatching|Fly fishing|Train spotting|Easy|Metal Detecting|Shared Hobby|Andy And Lance|Treasure Hunting|Rural Pastime|Detector Equipment|Series Premise
 In which fictional Essex town do Andy and Lance live?|Danebury|Walmington-on-Sea|Holby|Weatherfield|Easy|Danebury|Fictional Town|Essex|Programme Setting|Club Location|Rural England|Local Community
 What do the initials DMDC stand for in Detectorists?|Danebury Metal Detecting Club|Dorset Metal Discovery Council|Danebury Museum Development Committee|District Metal Detecting Commission|Easy|DMDC|Danebury Metal Detecting Club|Club Name|Abbreviation|Detectorist Members|Meeting Place|Fictional Organisation
 Which Suffolk market town was a major filming location for Detectorists?|Framlingham|Woodbridge|Aldeburgh|Bury St Edmunds|Medium|Framlingham|Suffolk|Filming Location|Market Town|Production Geography|On Location|Danebury Substitute
 What career is Andy trying to establish after completing his studies?|Archaeologist|Geography teacher|Museum curator|Landscape gardener|Easy|Andy Stone|Archaeology|Career Ambition|University Studies|Job Hunting|Historic Sites|Professional Goal
 What is Lance's ordinary job away from metal detecting?|Forklift driver|History lecturer|Police constable|Landscape surveyor|Medium|Lance Stater|Forklift Driver|Day Job|Vegetable Wholesaler|Work Life|Employment|Character Background
 What does Becky do for a living?|Primary-school teacher|Hospital nurse|Solicitor|Librarian|Medium|Becky|Primary School|Teaching Job|Education|Andy Relationship|Professional Life|Character Background
 Which former profession did club chairman Terry have?|Police officer|Firefighter|School inspector|Naval officer|Medium|Terry Seymour|Retired Police Officer|Club President|Professional Past|Detective Suspicions|Character History|DMDC
 Which historical subject is Terry especially enthusiastic about collecting and researching?|Buttons|Postage stamps|Railway timetables|Coins minted in France|Medium|Terry Seymour|Buttons|Historical Research|Collections|Club Talks|Material Culture|Specialist Knowledge
 Which famous folk duo do Andy and Lance nickname their two rival detectorists after?|Simon and Garfunkel|The Everly Brothers|The Proclaimers|Peter and Gordon|Medium|Simon And Garfunkel|Art And Paul|Rival Nickname|Appearance Joke|Folk Duo|Club Rivalry|Comic Comparison
 What name do the rival pair use for their detecting group in series one?|Antiquisearchers|Dirt Sharks|Terra Firma|Absolut Hunters|Medium|Antiquisearchers|Series One|Art And Paul|Rival Group|Original Name|Detectorist Competition|Club Conflict
 What new name do the rival detectorists use in series two?|Dirt Sharks|Antiquisearchers|Terra Firma|Absolut Hunters|Medium|Dirt Sharks|Second Series|Rival Group|Art And Paul|Renamed Club|Detecting Competition|Club Conflict
 Which Saxon king's burial are Andy and Lance hoping to discover in the first series?|Sexred|Alfred the Great|Edmund the Martyr|Cnut|Medium|King Sexred|East Saxons|Ship Burial|First Series|Saxon History|Buried Treasure|Andy Ambition
 On whose farmland do Andy and Lance search for a possible Saxon ship burial?|Larry Bishop's|Terry Seymour's|The mayor's|Veronica's|Medium|Larry Bishop|Bishop Farm|Saxon Burial|Land Permission|First Series|Rural Archaeology|Digging Rights
 What has farmer Larry Bishop been rumoured to have done to his missing wife?|Murdered and buried her|Taken her to live in France|Sent her to a convent|Abandoned her at sea|Medium|Larry Bishop|Missing Wife|Murder Rumour|Farm Mystery|Terry Suspicions|Series One|Family Secret
 Who is introduced to the DMDC as a university student interested in local history?|Sophie|Toni|Kate|Sheila|Easy|Sophie|History Student|New Club Member|First Episode|University Course|Metal Detecting|Danebury Club
 Where do Lance and Andy arrange to perform music in the first series?|At a local pub open-mic night|At a school assembly|At a village church concert|At a town hall awards ceremony|Medium|Lance Stater|Andy Stone|Open Mic|Local Pub|Music Performance|Series One|Maggie
 Which unexpected object injures Terry and prompts him to consider resigning as club president?|An unexploded bomb|A buried gas cylinder|A rusty tractor blade|A collapsed stone wall|Medium|Terry Seymour|Unexploded Bomb|Series One Episode Four|Club Presidency|Digging Accident|Farm Danger|Emergency
 Which character finds his first gold coin while detecting with Sophie?|Andy Stone|Lance Stater|Terry Seymour|Hugh|Medium|Andy Stone|First Gold Coin|Sophie|Series One|Detecting Success|Friendship Tension|Buried Find
 What kind of competition puts Becky and Sophie on opposing teams in series one?|A pub quiz|A darts tournament|A church raffle|A five-a-side match|Medium|Two Brewers|Pub Quiz|Series One|Becky|Sophie|Club Rivalry|Social Conflict
 What is revealed about Sophie's original reason for befriending Andy and Lance?|The rival detectorists sent her to spy on them|She was a police officer investigating fraud|She had inherited Bishop's farm|She was the mayor's daughter|Medium|Sophie|Rival Spying|Antiquisearchers|Series One Revelation|Broken Trust|Secret Mission|Club Betrayal
 What are the bones unearthed on Larry Bishop's land ultimately found to belong to?|A dog|A sheep|A Saxon warrior|A horse|Medium|Larry Bishop|Buried Bones|Series One Finale|False Murder Suspicion|Farm Excavation|Animal Remains|Police Inquiry
 Which character proposes marriage to Becky at the end of series one?|Andy Stone|Lance Stater|Russell|Terry Seymour|Easy|Andy Stone|Becky|Marriage Proposal|Series One Finale|Relationship Reconciliation|Engagement|Personal Sacrifice
 What is the name of Andy and Becky's young son in the second series?|Stanley|Oliver|Harry|George|Medium|Stanley|Andy And Becky|Baby Son|Series Two|Family Life|New Parents|Character Relationship
 Which country is Peter visiting from when he asks the club for help in series two?|Germany|Denmark|Belgium|Austria|Medium|Peter|Germany|Foreign Visitor|Series Two|Aircraft Investigation|Sophie Friendship|Background
 What does Peter want the club to help him locate in series two?|A crashed Second World War bomber|A missing medieval church bell|A Roman villa mosaic|A stolen Saxon necklace|Medium|Peter|World War Two Bomber|Plane Wreckage|Series Two|German Aircrew|Metal Detecting Request|Mystery
 What item does the mayor ask the DMDC to find in series two?|His chain of office|A ceremonial sword|His wedding ring|A silver presentation cup|Medium|Danebury Mayor|Chain Of Office|Lost Property|Series Two|Russell And Hugh|Club Service|Mayoral Regalia
 Which two club members search for the mayor's missing chain of office?|Russell and Hugh|Andy and Lance|Louise and Varde|Terry and Sheila|Medium|Russell|Hugh|Mayor Chain|Recovery Mission|Club Partnership|Series Two|Lost Property
 How is Kate, the younger woman Lance secretly meets in series two, related to him?|She is his daughter|She is his niece|She is his younger sister|She is his former student|Medium|Kate|Lance Stater|Estranged Daughter|Family Reveal|Series Two|Secret Meeting|Parent Child Reunion
 To which African country does Becky want the family to travel for an archaeological opportunity?|Botswana|Kenya|Ghana|Namibia|Medium|Botswana|Becky|Andy Stone|Archaeological Work|Family Adventure|Series Two|Africa
 What unsettling discovery is made when the World War Two crash site is excavated?|No crew members were aboard the plane|The plane was built after the war|The wreckage contained a modern motorbike|The aircraft had never left the ground|Medium|Bomber Wreckage|Missing Aircrew|Peter Story|Crash Investigation|Series Two|Historical Puzzle|Terry Doubts
 Which type of coin makes Andy and Lance increasingly suspicious of Peter?|A Nazi gold coin|A Roman bronze coin|A Victorian farthing|A Viking silver penny|Medium|Peter|Nazi Gold Coin|Series Two|Suspicious Evidence|Nighthawking Plot|Dirt Sharks|Wartime Treasure
 What unauthorised night-time activity are the rival detectorists caught undertaking?|Nighthawking|Badger baiting|Illegal hare coursing|Fly-tipping|Hard|Nighthawking|Dirt Sharks|Illegal Metal Detecting|Series Two|Night Search|Club Stakeout|Treasure Theft
 What Anglo-Saxon object does Lance finally find near the standing stone in series two?|A gold and jewelled aestel|A bronze helmet|A silver drinking horn|A carved ivory chessman|Hard|Aestel|Anglo Saxon Treasure|Standing Stone|Lance Discovery|Series Two Finale|Gold And Jewels|Historic Artefact
 At which London museum is Lance's Anglo-Saxon treasure displayed in the 2015 Christmas special?|The British Museum|The Victoria and Albert Museum|The Natural History Museum|The Museum of London|Medium|British Museum|Lance Treasure|Christmas 2015|Museum Display|Saxon Artefact|Gold Discovery|National Collection
 What does Russell blame for Lance's long run of bad luck in the 2015 Christmas special?|The curse of the gold|A broken metal detector|A stolen lucky charm|A rival's forged treasure map|Medium|Russell|Curse Of The Gold|Lance|Christmas Special 2015|Bad Luck|Superstition|Detecting Dry Spell
 What proposed development threatens Andy and Lance's favourite fields in series three?|A solar farm|A motorway service station|A housing estate|An airport runway|Medium|Solar Farm|Series Three|Threatened Farmland|Energy Development|Detecting Site|Landscape Change|Danebury
 Which type of ancient flooring does Andy uncover while working on a building-site dig in series three?|A Roman mosaic|A Saxon wooden floor|A Norman tile pavement|A medieval cobbled street|Medium|Roman Mosaic|Andy Archaeology|Series Three|Construction Dig|Historical Find|Workplace Dispute|Site Preservation
 What bird snatches a gold coin that Lance finds during series three?|A magpie|A rook|A kestrel|A seagull|Medium|Magpie|Lance Gold Coin|Series Three|Stolen Treasure|Bird Nest|Running Mystery|Field Discovery
 What sort of home does Toni live on that makes Lance uncomfortable to stay aboard?|A narrowboat|A static caravan|A converted lighthouse|A houseboat on stilts|Medium|Toni|Narrowboat|Lance Seasickness|Series Three|Romantic Relationship|Canal Home|Living Arrangements
 Why does Andy resign from his archaeology job in series three?|He believes the archaeological investigation is being treated as a sham|He is offered a headmaster's post|He wins the national lottery|He moves abroad immediately|Medium|Andy Stone|Job Resignation|Roman Mosaic|Series Three|Archaeological Ethics|Development Site|Career Decision
 What threatened tree do Andy and Lance try to protect from being felled in series three?|An ancient oak|A copper beech|A Scots pine|A horse chestnut|Medium|Ancient Oak Tree|Series Three|Conservation|Threatened Landscape|Andy And Lance|Environmental Protest|Solar Farm
 What does Andy install in the tree to help prevent it being cut down?|A bat box|A bird feeder|A nesting platform for owls|A memorial plaque|Medium|Bat Box|Oak Tree|Bat Protection|Series Three|Conservation Tactic|Environmental Rules|Andy Plan
 What type of old building do Andy and Becky consider buying in series three?|A dilapidated cottage|A converted windmill|A disused chapel|A former schoolhouse|Medium|Andy And Becky|Cottage|Series Three|First Home|House Purchase|Family Future|Property Auction
 At the end of the third series, how does the missing gold return to Andy and Lance?|Coins fall from a magpie's nest|Terry finds it in a clubhouse cupboard|The mayor returns it from a police locker|A farmer uncovers it while ploughing|Medium|Magpie Nest|Gold Coins|Series Three Finale|Bird Theft|Buried Treasure|Final Reveal|Oak Tree
 What phrase does Lance use to explain why he and Andy go metal detecting in the third-series finale?|To be time travellers|To become celebrities|To forget the past|To win a competition|Medium|Time Travellers|Lance Stater|Andy Stone|Series Three Finale|Metal Detecting Philosophy|Connection To History|Friendship
 Which community building is threatened with demolition in the 2022 Christmas special?|The club's scout hall|The Two Brewers pub|The town library|The parish church|Medium|Scout Hall|DMDC Clubhouse|2022 Special|Demolition Threat|Local Council|Community Building|Club Survival
 What source of money does the DMDC miss out on before the 2022 special?|A large finder's fee|A television appearance fee|A lottery syndicate win|An arts council grant|Medium|Finders Fee|2022 Special|Club Finances|Lost Treasure Reward|Rival Detectorists|Scout Hall|Funding Crisis
 What historical event is suggested by artefacts found on newly available land in the 2022 special?|A medieval battle|A Roman chariot race|A Viking ship launch|An English Civil War coronation|Medium|Medieval Battle|2022 Special|New Detecting Land|Historic Artefacts|Battlefield Clues|Lance And Andy|Treasure Discovery
 On which BBC channel did Detectorists first premiere in October 2014?|BBC Four|BBC One|BBC Two|BBC Three|Easy|BBC Four|Original Broadcaster|2014 Debut|BBC Comedy|Channel History|Programme Premiere|UK Television
 Which BBC channel broadcast the longer Detectorists special on Boxing Day 2022?|BBC Two|BBC Four|BBC One|BBC Three|Medium|BBC Two|2022 Special|Boxing Day|Broadcast Channel|Television Return|Christmas Episode|Programme History
 How many scripted Detectorists episodes aired across the three series and two story specials?|20|18|21|24|Medium|Twenty Episodes|Three Series|Two Specials|Episode Total|2014 To 2022|Complete Run|Programme Statistics
 Which BAFTA Television Award did Detectorists win in 2015?|Best Scripted Comedy|Best Soap and Continuing Drama|Best International Programme|Best Reality and Constructed Factual|Medium|BAFTA 2015|Scripted Comedy|Award Winner|Television Recognition|Detectorists Success|British Academy|Comedy Achievement
 Which Detectorists actor won the 2018 BAFTA for Best Male Comedy Performance?|Toby Jones|Mackenzie Crook|Gerard Horan|Simon Farnaby|Medium|Toby Jones|BAFTA 2018|Male Comedy Performance|Acting Award|Lance Stater|British Academy|Television Recognition`;

 const FIRST_ID = 15149;
 let sequence = 0;
 const questions = facts.trim().split('\n').map(line => {
   const id = 'tv_' + String(FIRST_ID + sequence).padStart(5, '0');
   const fields = line.trim().split('|').map(s => s.trim());
   if (fields.length !== 13) throw new Error(`Expected 13 fields for ${id}; found ${fields.length}`);
   const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specialistTags] = fields;
   if (!question || !correctAnswer || [wrong1, wrong2, wrong3, ...specialistTags].some(v => !v))
     throw new Error(`Missing field in ${id}`);
   if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specialistTags.length !== 7)
     throw new Error(`Difficulty or individual tags invalid in ${id}`);
   const answers = [wrong1, wrong2, wrong3];
   if (new Set([correctAnswer, ...answers].map(s => s.toLowerCase())).size !== 4)
     throw new Error(`Repeated answer option in ${id}`);
   answers.splice(sequence % 4, 0, correctAnswer);
   const tags = [...new Map([
     'Television', 'British Television', 'Comedy', 'Comedy Drama', 'Sitcom',
     'Detectorists', 'Programme: Detectorists', 'BBC Four', 'BBC Two',
     'Metal Detecting', 'Danebury', '2014-2022', 'Mackenzie Crook',
     correctAnswer, ...specialistTags
   ].map(tag => [tag.toLowerCase(), tag])).values()];
   sequence++;
   return { id, category: 'Television', programme, question, answers,
     correctAnswer, difficulty, tags, dailyEligible: true };
 });

 // The question count is deliberately not fixed: no artificial padding or cap.
 if (!questions.length || questions[0].id !== 'tv_15149' ||
     new Set(questions.map(q => q.id)).size !== questions.length ||
     new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length)
   throw new Error('Pack 327 ID or question validation failed');
 if (questions.some(q => q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
     q.tags.length < 14 || !q.tags.includes('Programme: Detectorists') ||
     q.dailyEligible !== true))
   throw new Error('Pack 327 exported question validation failed');
// 21 November 2026 audit: retain the existing 74 questions and IDs
// tv_15149–tv_15222 without alteration. Additional episode, character,
// production and special questions cite the British Comedy Guide in tags.
const auditAdditions = [
  {
    "id": "tv_36908",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, what job does Maggie's new partner Tony do?",
    "answers": [
      "Pizza restaurant manager",
      "Archaeologist",
      "Pub landlord",
      "Forklift driver"
    ],
    "correctAnswer": "Pizza restaurant manager",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Pizza restaurant manager",
      "Research source: https://www.comedy.co.uk/tv/detectorists/characters/",
      "Audited November 2026",
      "Tony",
      "Maggie New Partner",
      "Restaurant Employment",
      "Series One"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36909",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, which actor plays Tony, Maggie's new partner?",
    "answers": [
      "Paul Casar",
      "Adam Riches",
      "Simon Farnaby",
      "Gerard Horan"
    ],
    "correctAnswer": "Adam Riches",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Adam Riches",
      "Research source: https://www.comedy.co.uk/tv/detectorists/characters/",
      "Audited November 2026",
      "Adam Riches",
      "Tony Role",
      "Guest Actor",
      "Character Casting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36910",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, what type of shop does Lance's ex-wife Maggie own?",
    "answers": [
      "A record shop",
      "A bicycle shop",
      "A spiritual shop",
      "A bookshop"
    ],
    "correctAnswer": "A spiritual shop",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: A spiritual shop",
      "Research source: https://www.comedy.co.uk/tv/detectorists/characters/",
      "Audited November 2026",
      "Maggie Business",
      "New Age Shop",
      "Local Danebury",
      "Character Backstory"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36911",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, where does Maggie make Lance take her mother while Tony watches football?",
    "answers": [
      "The cinema",
      "A swimming lesson",
      "A theatre matinee",
      "Bingo"
    ],
    "correctAnswer": "Bingo",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Bingo",
      "Research source: https://www.comedy.co.uk/tv/detectorists/characters/",
      "Audited November 2026",
      "Maggie Mother",
      "Bingo Errand",
      "Lance Favours",
      "Tony Character"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36912",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, what temporary work does Andy take while struggling to find an archaeology job?",
    "answers": [
      "Agency cleaning",
      "Taxi driving",
      "Window fitting",
      "Driving a delivery van"
    ],
    "correctAnswer": "Agency cleaning",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Agency cleaning",
      "Research source: https://www.comedy.co.uk/tv/detectorists/characters/",
      "Audited November 2026",
      "Andy Stone",
      "Agency Cleaning",
      "Archaeology Career",
      "Temporary Work"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36913",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, which pub hosts the recurring quiz attended by Becky and the detectorists?",
    "answers": [
      "The Red Lion",
      "The Two Brewers",
      "The Black Horse",
      "The Crown and Anchor"
    ],
    "correctAnswer": "The Two Brewers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: The Two Brewers",
      "Research source: https://www.comedy.co.uk/tv/detectorists/characters/",
      "Audited November 2026",
      "Two Brewers Pub",
      "Quiz Night",
      "Becky",
      "Village Social Life"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36914",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, which ballroom dance do Terry and Sheila enjoy together?",
    "answers": [
      "Waltz",
      "Salsa",
      "Tango",
      "Foxtrot"
    ],
    "correctAnswer": "Tango",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Tango",
      "Research source: https://www.comedy.co.uk/tv/detectorists/characters/",
      "Audited November 2026",
      "Terry Sheila",
      "Tango Dancing",
      "Married Couple",
      "Shared Hobby"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36915",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, which simple item does Hugh unsuccessfully exhibit at the club's finds table?",
    "answers": [
      "A gold bracelet",
      "A silver ring",
      "A Roman coin",
      "A spoon"
    ],
    "correctAnswer": "A spoon",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: A spoon",
      "Research source: https://www.comedy.co.uk/tv/detectorists/characters/",
      "Audited November 2026",
      "Hugh",
      "Finds Table",
      "Disappointing Find",
      "DMDC Meeting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36916",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, which DMDC member leads its service for finding lost jewellery in series two?",
    "answers": [
      "Russell",
      "Hugh",
      "Louise",
      "Terry"
    ],
    "correctAnswer": "Russell",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Russell",
      "Research source: https://www.comedy.co.uk/tv/detectorists/characters/",
      "Audited November 2026",
      "Russell",
      "Lost Jewellery",
      "Club Service",
      "Second Series"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36917",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, what name do Art and Paul's rival group adopt by the third series?",
    "answers": [
      "Antiquisearchers",
      "Terra Firma",
      "Dirt Sharks",
      "Metal Maniacs"
    ],
    "correctAnswer": "Terra Firma",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Terra Firma",
      "Research source: https://www.comedy.co.uk/tv/detectorists/characters/",
      "Audited November 2026",
      "Terra Firma",
      "Art And Paul",
      "Rival Club",
      "Third Series"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36918",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, what is the first name of Larry Bishop's missing wife?",
    "answers": [
      "Jacqueline",
      "Jenny",
      "Justine",
      "Judy"
    ],
    "correctAnswer": "Justine",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Justine",
      "Research source: https://www.comedy.co.uk/tv/detectorists/characters/",
      "Audited November 2026",
      "Justine Bishop",
      "Missing Wife",
      "Larry Bishop",
      "First Series"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36919",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, what condition keeps Lance from visiting Toni on her barge?",
    "answers": [
      "Hay fever",
      "Claustrophobia",
      "Vertigo",
      "Seasickness"
    ],
    "correctAnswer": "Seasickness",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Seasickness",
      "Research source: https://www.comedy.co.uk/tv/detectorists/characters/",
      "Audited November 2026",
      "Lance Stater",
      "Toni Barge",
      "Seasickness",
      "Romance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36920",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, what kind of animals does Larry Bishop claim to own even though nobody else can see them?",
    "answers": [
      "Dogs",
      "Horses",
      "Sheep",
      "Cats"
    ],
    "correctAnswer": "Dogs",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Dogs",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/1/",
      "Audited November 2026",
      "Larry Bishop",
      "Invisible Dogs",
      "Series One Finale",
      "Farm Eccentricity"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36921",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, which DMDC member's resignation triggers a scramble for the club presidency in series one?",
    "answers": [
      "Russell",
      "Terry",
      "Hugh",
      "Louise"
    ],
    "correctAnswer": "Terry",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Terry",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/1/",
      "Audited November 2026",
      "Terry Seymour",
      "Club Presidency",
      "Series One Episode Four",
      "Resignation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36922",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, what method of finding a romantic partner does Andy consider for Lance in the second-series opener?",
    "answers": [
      "A newspaper personal advert",
      "Speed dating at the pub",
      "Internet dating",
      "A television dating show"
    ],
    "correctAnswer": "Internet dating",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Internet dating",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/2/",
      "Audited November 2026",
      "Lance Stater",
      "Internet Dating",
      "Second Series Premiere",
      "Andy Helps Friend"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36923",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, where do Russell and Hugh search for the mayor's missing chain of office?",
    "answers": [
      "The Two Brewers cellar",
      "A field at Bishop's Farm",
      "Danebury railway station",
      "A car park in Barnfather Woods"
    ],
    "correctAnswer": "A car park in Barnfather Woods",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: A car park in Barnfather Woods",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/2/",
      "Audited November 2026",
      "Barnfather Woods",
      "Mayor Chain",
      "Series Two Episode Three",
      "Search Location"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36924",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, which student strikes up a friendship with German visitor Peter in series two?",
    "answers": [
      "Sophie",
      "Becky",
      "Louise",
      "Kate"
    ],
    "correctAnswer": "Sophie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Sophie",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/2/",
      "Audited November 2026",
      "Sophie",
      "Peter German Visitor",
      "Second Series",
      "Friendship"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36925",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, what annual event does Terry organise at the end of the second series?",
    "answers": [
      "A village marathon",
      "A DMDC rally",
      "A school prizegiving",
      "An antiques auction"
    ],
    "correctAnswer": "A DMDC rally",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: A DMDC rally",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/2/",
      "Audited November 2026",
      "Terry",
      "Annual Rally",
      "Series Two Finale",
      "Club Event"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36926",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, with whose mother are Andy and Becky staying at the start of series three?",
    "answers": [
      "Lance's mother",
      "Terry's mother",
      "Becky's mother Veronica",
      "Sophie's mother"
    ],
    "correctAnswer": "Becky's mother Veronica",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Becky's mother Veronica",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/3/",
      "Audited November 2026",
      "Andy And Becky",
      "Veronica",
      "Series Three Opening",
      "Temporary Home"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36927",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, what treatment is Lance persuaded to try for an embarrassing problem in series three?",
    "answers": [
      "Acupuncture",
      "A herbal bath",
      "Physiotherapy",
      "Hypnotherapy"
    ],
    "correctAnswer": "Hypnotherapy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Hypnotherapy",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/3/",
      "Audited November 2026",
      "Lance",
      "Hypnotherapy",
      "Series Three Episode Two",
      "Personal Problem"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36928",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, which room at Lance's home is occupied by an unwelcome guest during the third series?",
    "answers": [
      "The spare room",
      "The cellar",
      "The kitchen",
      "The loft"
    ],
    "correctAnswer": "The spare room",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: The spare room",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/3/",
      "Audited November 2026",
      "Lance Home",
      "Spare Room",
      "Series Three Episode Three",
      "Family Disruption"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36929",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, what do Andy and Lance decide to do while worrying about the theft of Lance's gold?",
    "answers": [
      "Take a foreign holiday",
      "Camp out",
      "Hire a private detective",
      "Join the police"
    ],
    "correctAnswer": "Camp out",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Camp out",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/3/",
      "Audited November 2026",
      "Lance Gold Theft",
      "Camping Out",
      "Series Three Episode Four",
      "Search For Thief"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36930",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, what telephone service proves unhelpful in their attempt to protect an oak in series three?",
    "answers": [
      "A roadside assistance number",
      "A radio phone-in",
      "A 24-hour helpline",
      "A medical advice line"
    ],
    "correctAnswer": "A 24-hour helpline",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: A 24-hour helpline",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/3/",
      "Audited November 2026",
      "Ancient Oak",
      "24 Hour Helpline",
      "Series Three Episode Five",
      "Environmental Campaign"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36931",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, what new outdoor shelter has Terry obtained for the final rally in series three?",
    "answers": [
      "A marquee",
      "A camping trailer",
      "A greenhouse",
      "A gazebo"
    ],
    "correctAnswer": "A gazebo",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: A gazebo",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/3/",
      "Audited November 2026",
      "Terry Seymour",
      "New Gazebo",
      "Series Three Finale",
      "DMDC Rally"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36932",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, how many acres of previously unsearched land does Lance get permission to search in the 2022 special?",
    "answers": [
      "Ten acres",
      "One acre",
      "Fifty acres",
      "One hundred acres"
    ],
    "correctAnswer": "Ten acres",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Ten acres",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/2022/1/",
      "Audited November 2026",
      "2022 Special",
      "New Permission",
      "Ten Acres",
      "Undetected Land"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36933",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, which detectorist breaks club protocol after a mysterious find in the 2022 special?",
    "answers": [
      "Andy",
      "Lance",
      "Russell",
      "Hugh"
    ],
    "correctAnswer": "Lance",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Lance",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/2022/1/",
      "Audited November 2026",
      "2022 Special",
      "Lance Stater",
      "Club Protocol",
      "Mysterious Relic"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36934",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, which archaeologist and television presenter appears as herself in the 2022 special?",
    "answers": [
      "Professor Mary Beard",
      "Professor Bettany Hughes",
      "Professor Alice Roberts",
      "Professor Helen Geake"
    ],
    "correctAnswer": "Professor Alice Roberts",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Professor Alice Roberts",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/2022/1/",
      "Audited November 2026",
      "2022 Special",
      "Alice Roberts",
      "Archaeologist Cameo",
      "Guest Appearance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36935",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, which actor plays Alan Chub in the 2022 special?",
    "answers": [
      "Adam Riches",
      "Matt Weyland",
      "David Sterne",
      "Colin Michael Carmichael"
    ],
    "correctAnswer": "Colin Michael Carmichael",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Colin Michael Carmichael",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/2022/1/",
      "Audited November 2026",
      "2022 Special",
      "Alan Chub",
      "Colin Michael Carmichael",
      "Guest Cast"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36936",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, who is credited with additional writing material for the 2022 special?",
    "answers": [
      "Toby Jones",
      "Johnny Flynn",
      "Gerard Horan",
      "Rachael Stirling"
    ],
    "correctAnswer": "Toby Jones",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Toby Jones",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/2022/1/",
      "Audited November 2026",
      "2022 Special",
      "Toby Jones",
      "Additional Material",
      "Writing Credits"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36937",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, which performer from the television comedy Ghosts was credited as script editor on the 2022 special?",
    "answers": [
      "Jim Howick",
      "Ben Willbond",
      "Mathew Baynton",
      "Simon Farnaby"
    ],
    "correctAnswer": "Ben Willbond",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Ben Willbond",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/2022/1/",
      "Audited November 2026",
      "2022 Special",
      "Ben Willbond",
      "Script Editor",
      "Production Credits"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36938",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, who produced the 2022 Detectorists special?",
    "answers": [
      "Lisa Thomas",
      "Sara Huxley",
      "Gill Isles",
      "Catherine Willis"
    ],
    "correctAnswer": "Gill Isles",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Gill Isles",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/2022/1/",
      "Audited November 2026",
      "2022 Special",
      "Gill Isles",
      "Producer",
      "Television Production"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36939",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, alongside Johnny Flynn, who else has a composer credit for the 2022 special?",
    "answers": [
      "Mackenzie Crook",
      "Nick Brown",
      "Colin Fair",
      "Dan Michaelson"
    ],
    "correctAnswer": "Dan Michaelson",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: Dan Michaelson",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/2022/1/",
      "Audited November 2026",
      "2022 Special",
      "Dan Michaelson",
      "Composer Credit",
      "Original Music"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36940",
    "category": "Television",
    "programme": "Detectorists",
    "question": "In Detectorists, how many minutes long was the Detectorists special broadcast on Boxing Day 2022?",
    "answers": [
      "75 minutes",
      "30 minutes",
      "45 minutes",
      "90 minutes"
    ],
    "correctAnswer": "75 minutes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Comedy Drama",
      "Detectorists",
      "Programme: Detectorists",
      "BBC Four",
      "BBC Two",
      "2014–2022 TV episodes",
      "Danebury Metal Detecting Club",
      "Correct answer: 75 minutes",
      "Research source: https://www.comedy.co.uk/tv/detectorists/episodes/2022/1/",
      "Audited November 2026",
      "2022 Special",
      "Broadcast Length",
      "Boxing Day",
      "BBC Two"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if (questions.length !== 107 ||
  questions[0].id !== 'tv_15149' ||
  questions[73].id !== 'tv_15222' ||
  auditAdditions[0].id !== 'tv_36908' ||
  auditAdditions[auditAdditions.length-1].id !== 'tv_36940' ||
  new Set(questions.map(q => q.id)).size !== questions.length ||
  new Set(questions.map(q => q.question.trim().toLowerCase())).size !== questions.length ||
  questions.some(q => q.category !== 'Television' || q.programme !== 'Detectorists' ||
    q.answers.length !== 4 ||
    new Set(q.answers.map(a => a.trim().toLowerCase())).size !== 4 ||
    q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
    !q.tags.includes('Programme: Detectorists') ||
    q.tags.length < 14 || q.dailyEligible !== true) ||
  auditAdditions.some(q => !q.question.includes('Detectorists') || q.tags.length < 18))
  throw Error('Pack 327 audit validation failed');
module.exports = questions;
