
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

 module.exports = questions;
