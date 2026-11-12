
 // PuzzlePilot - Big Quiz - Pack 388
 // Jonathan Creek - Series 3 (six episodes, 1999-2000)
 // Consecutive television IDs begin at tv_20840.
 // Keep this complete file together for WordPad and the later bulk upload.

 'use strict';

 const FIRST_ID = 20840;
 const PROGRAMME = 'Jonathan Creek';
 const commonTags = ['television', 'British TV', 'BBC', PROGRAMME, 'David Renwick', 'mystery drama'];

 // Each row contains: question | correct answer | three distractors | difficulty | seven question-specific tags.
 const rows = [
   // Series 3, episode 1 - The Curious Tale of Mr Spearfish
   `In The Curious Tale of Mr Spearfish, who believes he has sold his soul to the devil?|Lenny Spearfish|Saul Bechenstein|Jeremy Sangster|Adam Klaus|Easy|1999|series 3|The Curious Tale of Mr Spearfish|Lenny Spearfish|devil pact|supernatural claim|Andrew Tiernan`,
   `What is the first name of Lenny Spearfish's wife in Jonathan Creek?|Alice|Sadie|Anthea|Marion|Easy|1999|series 3|The Curious Tale of Mr Spearfish|Alice Spearfish|Lenny Spearfish|marriage|Rachel Power`,
   `What does Lenny unexpectedly dig up in his garden after signing the devil's contract?|A box of antique jewels|A chest of gold coins|A Roman statue|A suitcase of banknotes|Easy|1999|series 3|The Curious Tale of Mr Spearfish|Lenny Spearfish|buried treasure|garden discovery|jewellery`,
   `Roughly how much are the jewels found in Lenny Spearfish's garden worth?|£1.3 million|£130,000|£3 million|£5 million|Medium|1999|series 3|The Curious Tale of Mr Spearfish|Lenny Spearfish|buried jewels|sudden wealth|money`,
   `Which couple host the dinner party where Jonathan and Maddy first hear Lenny's story?|Sadie and Saul Bechenstein|Alice and Lenny Spearfish|Delia and Andre Masson|Shirley and Robin Priest|Medium|1999|series 3|The Curious Tale of Mr Spearfish|Sadie Bechenstein|Saul Bechenstein|dinner party|Jonathan and Maddy`,
   `What profession has Maddy falsely told her dinner-party hostess Jonathan practises?|Gynaecologist|Dentist|Veterinary surgeon|Psychiatrist|Medium|1999|series 3|The Curious Tale of Mr Spearfish|Maddy Magellan|gynaecologist claim|false profession|dinner party joke`,
   `What does Lenny use instead of ink to sign the supposed contract with the devil?|His own blood|Red wine|Black paint|A fingerprint in soot|Easy|1999|series 3|The Curious Tale of Mr Spearfish|Lenny Spearfish|devil contract|occult shop|blood signature`,
   `What happens to Lenny and Alice's old house after the devil's contract is discarded?|It burns down|It is demolished for a road|It is flooded by a burst main|It is burgled and ransacked|Easy|1999|series 3|The Curious Tale of Mr Spearfish|Spearfish house|fire|devil contract|destroyed papers`,
   `Who presents herself as Lenny Spearfish's investment adviser?|Anthea Spacey|Heidi Brayle|Mimi Tranter|Kathleen Gilmore|Medium|1999|series 3|The Curious Tale of Mr Spearfish|Anthea Spacey|Adjoa Andoh|financial adviser|secret protection`,
   `Which actress plays Anthea Spacey in The Curious Tale of Mr Spearfish?|Adjoa Andoh|Maxine Peake|Rebecca Front|Gina Bellman|Medium|1999|series 3|The Curious Tale of Mr Spearfish|Adjoa Andoh|Anthea Spacey|guest cast|investment adviser`,
   `Why does Lenny initially think gunshots cannot injure him?|He mistakes cigarette burns for bullet wounds|He is wearing invisible body armour|The gun contains blanks|He believes the shots only hit a mirror|Medium|1999|series 3|The Curious Tale of Mr Spearfish|Lenny Spearfish|cigarette burns|shooting illusion|false invulnerability`,
   `What explains the marks on Lenny's wrists that Jonathan notices?|He had been handcuffed to a bed|He had been tied to a swimming-pool ladder|He wore an ill-fitting bracelet|He was caught in a car seat belt|Medium|1999|series 3|The Curious Tale of Mr Spearfish|Lenny Spearfish|handcuffs|casino encounter|Jonathan deduction`,
   `Where is Lenny when a gunman approaches him and suddenly collapses?|Beside his swimming pool|In a casino lift|Outside a courtroom|At the dinner party|Medium|1999|series 3|The Curious Tale of Mr Spearfish|Lenny Spearfish|gunman|swimming pool|apparent miracle`,
   `What is the apparent red birthmark on the gunman's face actually associated with?|A laser sight for a remote stun weapon|A hidden camera's recording light|A theatrical make-up mark|A reflected casino sign|Hard|1999|series 3|The Curious Tale of Mr Spearfish|gunman|laser sight|air taser|disappearing red mark`,
   `How is the gunman by Lenny's pool secretly incapacitated?|An electrically fired stun device|Poison in his drink|A concealed trapdoor|A tranquilliser in the pool water|Hard|1999|series 3|The Curious Tale of Mr Spearfish|gunman|swimming pool|remote stun weapon|secret protection`,
   `Who is the real focus of the elaborate secret protection surrounding the Spearfish household?|Alice Spearfish|Lenny Spearfish|Sadie Bechenstein|Adam Klaus|Hard|1999|series 3|The Curious Tale of Mr Spearfish|Alice Spearfish|covert protection|family background|hidden parentage`,
   `What about Alice's family history helps Jonathan explain the extraordinary events?|Her biological father is a highly placed figure|Her mother once worked for the police|Her brother is a professional magician|Her grandfather ran the occult shop|Medium|1999|series 3|The Curious Tale of Mr Spearfish|Alice Spearfish|unknown father|noble family|covert operation`,
   `What is Anthea trying to preserve when she arranges the supposed financial separation?|Lenny and Alice's marriage|Adam Klaus's French tour|Sadie's business partnership|Lenny's gambling membership|Medium|1999|series 3|The Curious Tale of Mr Spearfish|Anthea Spacey|Alice and Lenny|marital reconciliation|wealth waiver`,
   `Which hotel employee accuses Adam Klaus of indecent behaviour in court?|Marion Cretiss|Sadie Bechenstein|Philippa Farell|Heidi Brayle|Medium|1999|series 3|The Curious Tale of Mr Spearfish|Adam Klaus|Marion Cretiss|Maxine Peake|court case`,
   `What unexpectedly boosts ticket sales for Adam Klaus's tour of France?|Publicity from his court scandal|A royal television performance|A free television magic special|A last-minute ticket price cut|Medium|1999|series 3|The Curious Tale of Mr Spearfish|Adam Klaus|French tour|court publicity|ticket sales`,

   // Series 3, episode 2 - The Eyes of Tiresias
   `What is the surname of the elderly widow whose dreams appear prophetic in The Eyes of Tiresias?|Panguitch|Masson|Brayle|Phillips|Medium|1999|series 3|The Eyes of Tiresias|Audrey Panguitch|prophetic dreams|elderly widow|Margery Mason`,
   `How old is Audrey Panguitch during The Eyes of Tiresias?|73|63|78|83|Medium|1999|series 3|The Eyes of Tiresias|Audrey Panguitch|seventy three|widow|premonitions`,
   `Who plays Audrey Panguitch in Jonathan Creek?|Margery Mason|Dinah Sheridan|Diana Weston|Hetty Baynes|Medium|1999|series 3|The Eyes of Tiresias|Margery Mason|Audrey Panguitch|guest actress|prophetic dreams`,
   `How is Heidi Brayle related to Audrey Panguitch?|She is Audrey's niece|She is Audrey's sister|She is Audrey's daughter-in-law|She is Audrey's neighbour|Medium|1999|series 3|The Eyes of Tiresias|Heidi Brayle|Audrey Panguitch|niece|Rebecca Front`,
   `What does Heidi Brayle arrange to use Jonathan's windmill for?|Filming scenes for a television drama|Storing stolen antiques|A wedding reception|A live stage-magic broadcast|Easy|1999|series 3|The Eyes of Tiresias|Heidi Brayle|Jonathan windmill|location manager|television filming`,
   `What animal is Audrey's pet named Tiresias?|A goldfish|A parrot|A cat|A tortoise|Easy|1999|series 3|The Eyes of Tiresias|Audrey Panguitch|Tiresias|goldfish|Greek mythology`,
   `In Greek mythology, which sort of figure inspires the name of Audrey's goldfish Tiresias?|A blind prophet|A sea god|A warrior king|A messenger of the gods|Medium|1999|series 3|The Eyes of Tiresias|Tiresias|Greek mythology|blind soothsayer|fish name`,
   `Who is the French businessman whose apparent murder Audrey foresees?|Andre Masson|Craig Downey|Otto Danzigger|Jeremy Sangster|Medium|1999|series 3|The Eyes of Tiresias|Andre Masson|French businessman|premonition|staged murder`,
   `What French word sounds like the repeated cry Audrey hears in her dream of Andre Masson?|Adieu|Merci|Bonjour|Pardon|Medium|1999|series 3|The Eyes of Tiresias|Andre Masson|French language|final words|auditory dream`,
   `Whom does the evidence seem designed to incriminate in Andre Masson's death?|Craig Downey|Heidi Brayle|Gino|Josh|Medium|1999|series 3|The Eyes of Tiresias|Craig Downey|Andre Masson|framed suspect|contact lens`,
   `Who is secretly having an affair with Craig Downey in The Eyes of Tiresias?|Delia Masson|Audrey Panguitch|Heidi Brayle|Rebecca Phillips|Medium|1999|series 3|The Eyes of Tiresias|Delia Masson|Craig Downey|affair|Andre Masson`,
   `What small item is planted near Andre Masson's body to implicate Craig Downey?|A contact lens|A cufflink|A cigarette end|A car key|Medium|1999|series 3|The Eyes of Tiresias|Craig Downey|Andre Masson|planted evidence|contact lens`,
   `How did Andre Masson actually die in The Eyes of Tiresias?|He killed himself and staged a murder|His wife poisoned him|Craig shot him through the window|A burglar stabbed him|Hard|1999|series 3|The Eyes of Tiresias|Andre Masson|suicide|framed murder|staged evidence`,
   `What recording is central to Andre Masson's elaborate plan to frame Craig?|A staged murder scene saved on a CD|A voicemail confession|An answering-machine warning|A radio news bulletin|Hard|1999|series 3|The Eyes of Tiresias|Andre Masson|CD recording|Craig Downey|fabricated murder`,
   `How does Audrey unknowingly hear the event that appears in her first prophetic dream?|A recorded scene plays as she sleeps|A television transmits it live|Her neighbour acts it out outside|A radio station broadcasts a police reconstruction|Hard|1999|series 3|The Eyes of Tiresias|Audrey Panguitch|CD player|sleeping dream|recorded murder`,
   `Where did a recording that helped create Audrey's supposed premonition surface after a burglary?|At a market stall|In a church collection box|Inside the filming crew's equipment|In a hotel safe|Medium|1999|series 3|The Eyes of Tiresias|stolen CDs|market stall|Audrey Panguitch|burglary`,
   `Where does Jonathan eventually recover the crucial compact disc in Audrey's house?|Under the goldfish bowl|Inside a hollow book|Behind a wall clock|In the fireplace grate|Hard|1999|series 3|The Eyes of Tiresias|goldfish bowl|hidden CD|Andre Masson|proof of recording`,
   `Which woman dies in the car crash that seems to fulfil Audrey's second dream?|Rebecca Phillips|Delia Masson|Heidi Brayle|Marion Cretiss|Medium|1999|series 3|The Eyes of Tiresias|Rebecca Phillips|road accident|second dream|jaguar`,
   `What creature is reflected by the one-eyed attacker in Audrey's frightening final dream?|A Cyclops|A Minotaur|A Centaur|A Griffin|Medium|1999|series 3|The Eyes of Tiresias|Cyclops|Greek mythology|Audrey nightmare|one eyed attacker`,
   `What explanation does Jonathan suggest for the stage magician seeming to predict live lottery numbers in The Eyes of Tiresias?|Using a slight delay in the television feed|Reading marked lottery balls|Swapping the lottery machine|Using a hidden radio under the stage|Medium|1999|series 3|The Eyes of Tiresias|stage magician|lottery|television delay|Jonathan deduction`,

   // Series 3, episode 3 - The Omega Man
   `Which professor claims to possess an alien skeleton in The Omega Man?|Lance Graumann|Andre Masson|Gerald Eastland|Duggie Dawson|Easy|1999|series 3|The Omega Man|Professor Lance Graumann|alien skeleton|UFO hoax|John Shrapnel`,
   `Who plays Professor Lance Graumann in The Omega Man?|John Shrapnel|Michael Brandon|Terence Hardiman|Griff Rhys Jones|Medium|1999|series 3|The Omega Man|John Shrapnel|Lance Graumann|guest actor|UFO investigator`,
   `Near which Mexican town was the supposedly extraterrestrial skeleton found?|Omega|Tijuana|Guadalajara|Merida|Medium|1999|series 3|The Omega Man|alien skeleton|Western Mexico|Omega|staged excavation`,
   `Who is Professor Graumann's assistant in The Omega Man?|Philippa Farell|Anthea Spacey|Heidi Brayle|Samantha Clarke|Easy|1999|series 3|The Omega Man|Philippa Farell|Jane Booker|Lance Graumann|assistant`,
   `What unusual ability does Philippa Farell claim to possess?|Receiving telepathic messages from aliens|Predicting lottery numbers|Seeing ghosts in photographs|Communicating with the dead through mirrors|Medium|1999|series 3|The Omega Man|Philippa Farell|alien channeler|telepathy|extraterrestrials`,
   `Which force confiscates Graumann's alleged alien remains?|The American military|The Royal Navy|French intelligence|A private museum security team|Easy|1999|series 3|The Omega Man|alien skeleton|United States military|seized evidence|secure transport`,
   `Who leads the military operation to seize the supposed alien skeleton?|Captain Frank Candy|Inspector Nathan Gallo|Sergeant Kribotnik|Professor Lance Graumann|Medium|1999|series 3|The Omega Man|Captain Frank Candy|Michael Brandon|military raid|alien specimen`,
   `Which actor plays Captain Frank Candy in The Omega Man?|Michael Brandon|John Shrapnel|Stuart Milligan|Mark Aiken|Medium|1999|series 3|The Omega Man|Michael Brandon|Captain Candy|guest actor|US military`,
   `What baffling sight greets the soldiers when they reopen the secure case at their base?|The skeleton has vanished|The skeleton has turned black|The case contains a live animal|The skeleton has been replaced by a human body|Easy|1999|series 3|The Omega Man|locked case|vanishing skeleton|military base|impossible mystery`,
   `What is the supposedly alien skeleton actually made from?|Frozen mercury|Polished aluminium|Frozen salt water|Moulded silver plastic|Hard|1999|series 3|The Omega Man|frozen mercury|alien hoax|fake bones|scientific trick`,
   `Why does the fake skeleton vanish without anyone opening its locked transport case?|Its material melts as it warms|It dissolves in ordinary air|It is retracted into the lid|A hidden accomplice swaps the case|Hard|1999|series 3|The Omega Man|frozen mercury|melting skeleton|locked crate|mystery solution`,
   `What causes the painful 'burns' when people touch the supposed alien remains?|Extreme cold|Corrosive acid|A hidden electric current|Radioactive dust|Hard|1999|series 3|The Omega Man|cold burns|frozen mercury|Professor Graumann|alien hoax`,
   `Which planet's name provides the misleading clue to the material used in the alien trick?|Mercury|Neptune|Jupiter|Saturn|Medium|1999|series 3|The Omega Man|planet Mercury|element mercury|Graumann clue|frozen skeleton`,
   `What does Jonathan find in the base of the skeleton's transport case?|A silvery liquid|A hidden passage|A packet of plastic bones|A miniature camera|Medium|1999|series 3|The Omega Man|liquid mercury|case base|drain holes|melted remains`,
   `What is the title of Maddy's book being promoted in The Omega Man?|Challenging the Impossible|The Grave Digger|The Final Illusion|Ghosts of the Past|Medium|1999|series 3|The Omega Man|Maddy Magellan|Challenging the Impossible|book promotion|television interview`,
   `What annoys Maddy during her television interview about her new book?|Jonathan receives most of the attention|The interview is cancelled|The interviewer mistakes her for an actress|Her microphone stops working|Medium|1999|series 3|The Omega Man|Maddy Magellan|television interview|chat show|publicity jealousy`,
   `What do autograph hunters remove from a life-sized bookshop display featuring Jonathan and Maddy?|Maddy's head|Jonathan's hands|The book title|The publisher's name|Medium|1999|series 3|The Omega Man|bookshop|Maddy Magellan|cardboard cutout|Jonathan fans`,
   `Which animal is Maddy temporarily looking after in her flat during The Omega Man?|Kittens|Puppies|Rabbits|Parrots|Easy|1999|series 3|The Omega Man|Maddy Magellan|kittens|animal shelter|charity`,
   `What sum does Jonathan demand from the American military for locating the vanished skeleton?|$100,000|$10,000|$250,000|$1 million|Medium|1999|series 3|The Omega Man|$100000 demand|Captain Candy|reward fee|military resources`,
   `What does Jonathan secretly do with the money earned by solving the alien mystery?|Donates it to save an animal shelter|Buys a new windmill|Finances Adam's next show|Pays for a round-the-world trip|Medium|1999|series 3|The Omega Man|charitable gift|animal shelter|£65000 donation|Maddy kittens`,

   // Series 3, episode 4 - Ghost's Forge
   `What is Ghost's Forge, the site of a Jonathan Creek mystery?|An old country house in Norfolk|An abandoned theatre in London|A ruined Scottish castle|A converted mill in Cornwall|Easy|1999|series 3|Ghost's Forge|Norfolk|country house|murder investigation|setting`,
   `Who brings the Ghost's Forge mystery to Jonathan's attention?|Mimi Tranter|Heidi Brayle|Anthea Spacey|Kathleen Gilmore|Medium|1999|series 3|Ghost's Forge|Mimi Tranter|former reporter|Ghosts Forge enquiry|Lysette Anthony`,
   `Which actress plays Maddy's former colleague Mimi Tranter in Ghost's Forge?|Lysette Anthony|Gina Bellman|Rebecca Front|Maxine Peake|Medium|1999|series 3|Ghost's Forge|Lysette Anthony|Mimi Tranter|guest actress|Maddy colleague`,
   `What is the name of Mimi's married boyfriend in Ghost's Forge?|Robin Priest|Duggie Dawson|Bill Carney|Jeremy Sangster|Easy|1999|series 3|Ghost's Forge|Robin Priest|Mimi Tranter|married lover|Mark Aiken`,
   `What is the first name of Robin Priest's wife in Ghost's Forge?|Shirley|Samantha|Cindy|Mimi|Medium|1999|series 3|Ghost's Forge|Shirley Priest|Robin Priest|marriage|Sara Stephens`,
   `What name is associated with the apparently murdered recluse at Ghost's Forge?|Ezra Carr|Gerald Eastland|Lance Graumann|Frank Geiger|Medium|1999|series 3|Ghost's Forge|Ezra Carr|recluse|mistaken identity|country house`,
   `Where is the body at Ghost's Forge found with a knife through its neck?|Beside an upstairs window|In a locked cellar|Under a stone staircase|Inside a garden shed|Medium|1999|series 3|Ghost's Forge|knife murder|upstairs window|apparent Ezra Carr|body position`,
   `Which novel is found in multiple copies in the attic at Ghost's Forge?|The Grave Digger|Challenging the Impossible|The Magician's Secret|A Study in Scarlet|Medium|1999|series 3|Ghost's Forge|The Grave Digger|attic books|Gerald Eastland|ghostwriting`,
   `How many copies of The Grave Digger are actually found in the attic?|Five|Three|Six|Eight|Medium|1999|series 3|Ghost's Forge|The Grave Digger|five copies|missing sixth|attic evidence`,
   `Why were six copies of The Grave Digger originally sent to the man at Ghost's Forge?|They were an author's complimentary copies|They were clues in a treasure hunt|They were a gift from his estranged wife|They were copies for a literary book club|Medium|1999|series 3|Ghost's Forge|author copies|The Grave Digger|ghostwriter|publisher clue`,
   `Who really wrote the books published under Gerald Eastland's name?|Ezra Carr|Robin Priest|Mimi Tranter|Duggie Dawson|Hard|1999|series 3|Ghost's Forge|Ezra Carr|Gerald Eastland|ghostwriter|false authorship`,
   `What does the house name Ghosts Forge secretly suggest when read as a word puzzle?|Ghosts for G E, pointing to a ghostwriter|A forge that made fake antique ghosts|A hidden blacksmith's family name|A message naming the murder weapon|Hard|1999|series 3|Ghost's Forge|house sign wordplay|cryptic house name|Gerald Eastland|ghostwriting`,
   `What missing punctuation mark matters to Jonathan's interpretation of the name Ghosts Forge?|An apostrophe|A hyphen|A colon|A question mark|Medium|1999|series 3|Ghost's Forge|no apostrophe|house sign|wordplay clue|Jonathan deduction`,
   `Who actually died from the knife wound at Ghost's Forge?|Shirley's uncle Bill|Ezra Carr|Gerald Eastland|Duggie Dawson|Hard|1999|series 3|Ghost's Forge|uncle Bill|Shirley Priest|knife killing|mistaken victim`,
   `What happens to the real Ezra Carr during the attempted robbery at Ghost's Forge?|He falls downstairs and loses his memory|He escapes to France|He is locked in the attic for years|He deliberately fakes his own death|Hard|1999|series 3|Ghost's Forge|Ezra Carr|stairs fall|amnesia|robbery`,
   `What identity does Shirley convince the amnesiac Ezra Carr is his own?|Robin Priest|Gerald Eastland|Bill Dawson|Saul Bechenstein|Hard|1999|series 3|Ghost's Forge|Shirley Priest|Robin Priest|Ezra Carr|invented identity`,
   `What clue first sparks Mimi's interest in investigating Ghost's Forge?|Robin says the house name in his sleep|A mysterious letter arrives at her newspaper|A portrait moves by itself|An anonymous phone caller recites a poem|Medium|1999|series 3|Ghost's Forge|Robin Priest|Mimi Tranter|nightmare|house name`,
   `How does Maddy make herself seem to disappear from a room in Ghost's Forge?|A doorway is concealed and a cupboard door remains visible|She crawls through a trapdoor under the carpet|She uses a mirror behind a screen|She escapes through a hidden chimney|Hard|1999|series 3|Ghost's Forge|Maddy Magellan|concealed doorway|cupboard trick|illusion`,
   `Which critic does Adam Klaus try to win over after a savage review in Ghost's Forge?|Duggie Dawson|Jeremy Sangster|Craig Downey|Vincent Rees|Medium|1999|series 3|Ghost's Forge|Adam Klaus|Duggie Dawson|Jim Bowen|theatre review`,
   `What does Maddy accidentally soak with a hosepipe outside her window at the end of Ghost's Forge?|A funeral procession|A wedding party|A group of carol singers|An election rally|Medium|1999|series 3|Ghost's Forge|Maddy Magellan|hosepipe|marching band|funeral procession`,

   // Series 3, episode 5 - Miracle in Crooked Lane
   `Which former glamour model is at the centre of the mystery in Miracle in Crooked Lane?|Jacqui Jordan|Kathleen Gilmore|Christine Rees|Philippa Farell|Easy|1999|series 3|Miracle in Crooked Lane|Jacqui Jordan|former glamour model|shed explosion|Hetty Baynes`,
   `What seriously injures Jacqui Jordan in Miracle in Crooked Lane?|An explosion in her garden shed|A fall from a church tower|A car accident on a country lane|A fire in a hotel kitchen|Easy|1999|series 3|Miracle in Crooked Lane|Jacqui Jordan|garden shed|explosion|hospital coma`,
   `Who is Jacqui Jordan's wealthy husband in Miracle in Crooked Lane?|Rupert Clifford-Wright|Vincent Rees|Jeff Goodman|Andre Masson|Medium|1999|series 3|Miracle in Crooked Lane|Rupert Clifford-Wright|Jacqui Jordan|husband|Benjamin Whitrow`,
   `Who insists she saw Jacqui walking towards church despite Jacqui being in a coma?|Kathleen Gilmore|Christine|Mimi Tranter|Alice Spearfish|Easy|1999|series 3|Miracle in Crooked Lane|Kathleen Gilmore|church sighting|Jacqui Jordan|Dinah Sheridan`,
   `Which actress plays the devout witness Kathleen Gilmore in Miracle in Crooked Lane?|Dinah Sheridan|Margery Mason|Gina Bellman|Rachel Power|Medium|1999|series 3|Miracle in Crooked Lane|Dinah Sheridan|Kathleen Gilmore|guest actress|reliable witness`,
   `With whom is Kathleen Gilmore staying while she recovers from illness?|Vincent Rees|Rupert Clifford-Wright|Jeff|DCI Jack Horner|Medium|1999|series 3|Miracle in Crooked Lane|Kathleen Gilmore|Vincent Rees|convalescence|witness alibi`,
   `What medical operation has Kathleen Gilmore recently undergone?|A heart bypass|A kidney transplant|A hip replacement|A lung transplant|Medium|1999|series 3|Miracle in Crooked Lane|Kathleen Gilmore|heart bypass|recuperation|witness`,
   `What physical detail about Jacqui does Kathleen notice during the apparent church visit?|Her trouser hems are damp|Her coat is inside out|Her hair has been cut very short|She has a fresh bandage on one hand|Medium|1999|series 3|Miracle in Crooked Lane|Jacqui Jordan|damp trousers|morning dew|time deception`,
   `What is the real timing of Kathleen's sighting of Jacqui?|Before the shed explosion that morning|Several days after Jacqui died|During Jacqui's ambulance journey|Immediately after Jacqui left hospital|Hard|1999|series 3|Miracle in Crooked Lane|Kathleen Gilmore|Jacqui Jordan|chronology|sighting explained`,
   `Which fan of Jonathan Creek tries to solve the Crooked Lane mystery by imitating his hero?|Jeff|Colin|Feldman|Floyd|Medium|1999|series 3|Miracle in Crooked Lane|Jeff|Jonathan fan club|Tom Goodman-Hill|amateur sleuth`,
   `What is the job of Jeff's partner Christine in Miracle in Crooked Lane?|Postal worker|Nurse|Primary school teacher|Police constable|Medium|1999|series 3|Miracle in Crooked Lane|Christine|Emma Kennedy|postwoman|Jeff partner`,
   `What do members of the Jonathan Creek fan club imitate about his appearance?|His duffle coat and shaggy hair|His pinstripe suit and bow tie|His leather jacket and shaved head|His white gloves and top hat|Easy|1999|series 3|Miracle in Crooked Lane|Jonathan fan club|duffle coat|shaggy hair|copycat fans`,
   `What expertise does Vincent Rees use to fake daylight for Kathleen?|Professional camera lighting|Stage costume design|Weather forecasting|Optical lens manufacturing|Hard|1999|series 3|Miracle in Crooked Lane|Vincent Rees|camera lighting|false daylight|alibi trick`,
   `By how much has Vincent secretly shifted Kathleen's daily routine at the crucial point?|Twelve hours|Two hours|Six hours|Twenty-four hours|Hard|1999|series 3|Miracle in Crooked Lane|Kathleen Gilmore|Vincent Rees|twelve hour shift|false alibi`,
   `Why does Vincent Rees manipulate Kathleen's sense of time?|To create an alibi for a murder he commits|To conceal the theft of rare books|To make her believe Jacqui is a ghost|To protect Jeff from police questioning|Hard|1999|series 3|Miracle in Crooked Lane|Vincent Rees|murder alibi|Kathleen Gilmore|time manipulation`,
   `Whom has Vincent Rees murdered in revenge for his broken marriage?|His former wife's new partner|Jacqui Jordan's husband|Jeff's brother|The village postman|Hard|1999|series 3|Miracle in Crooked Lane|Vincent Rees|revenge murder|estranged wife|new boyfriend`,
   `What odd object is discovered around the neck of Vincent Rees's murder victim?|A balloon animal|A silk magician's scarf|A broken wristwatch|A leather camera strap|Medium|1999|series 3|Miracle in Crooked Lane|balloon animal|Vincent Rees|murder victim|signature clue`,
   `What do tracks in Vincent's garden reveal about the faked daylight?|Cables from the temporary lighting rig|Wheels of a stolen bicycle|Footprints from a police search|The route of a hidden underground passage|Hard|1999|series 3|Miracle in Crooked Lane|garden rut|lighting cables|Vincent Rees|staged daylight`,
   `What food does Christine sit in while trying to seduce Jonathan in an embarrassing scene?|Porridge|Custard|Baked beans|Rice pudding|Medium|1999|series 3|Miracle in Crooked Lane|Christine|porridge bath|attempted seduction|comic misunderstanding`,
   `What simple method does Jonathan use to seem to vanish in front of Jeff on the lawn?|He stands directly behind Jeff as Jeff turns|He drops into an open manhole|He ducks behind a false hedge|He runs through a hidden garden gate|Medium|1999|series 3|Miracle in Crooked Lane|behind Jeff|Jeff|vanishing trick|misdirection`,

   // Series 3, episode 6 - The Three Gamblers
   `Who is the murdered criminal whose body seems to have moved after death in The Three Gamblers?|Frank Geiger|Floyd Goodman|Joe Wheeler|Derek Spratley|Medium|2000|series 3|The Three Gamblers|Frank Geiger|drug dealer|moving corpse|John Bennett`,
   `Who shoots Frank Geiger repeatedly after a violent confrontation in The Three Gamblers?|Floyd Goodman|Joe Wheeler|Karen Blaine|Nathan Gallo|Medium|2000|series 3|The Three Gamblers|Floyd Goodman|Frank Geiger|six shots|Harry Peacock`,
   `What was Floyd Goodman's former profession before his criminal involvement?|Professional boxer|Stage magician|Police detective|Airline pilot|Medium|2000|series 3|The Three Gamblers|Floyd Goodman|former boxer|Karen Blaine|Harry Peacock`,
   `What is the name of the woman who asks Jonathan to investigate the moving corpse?|Karen Blaine|Lizzie Gillespie|Heidi Brayle|Philippa Farell|Medium|2000|series 3|The Three Gamblers|Karen Blaine|Nina Sosanya|Floyd Goodman|murder enquiry`,
   `What is the name of the remote farmhouse linked to Geiger's apparent return from death?|Frog Hollow|Ghosts Forge|Gallows Gate|Crooked Lane|Medium|2000|series 3|The Three Gamblers|Frog Hollow|farmhouse|Geiger corpse|flooded cellar`,
   `Where has Frank Geiger's body been hidden after his shooting?|A locked cellar|A sealed attic|A disused well|A boarded-up greenhouse|Easy|2000|series 3|The Three Gamblers|Frank Geiger|locked cellar|Frog Hollow|body disposal`,
   `How many times is Geiger shot in the head before his body is concealed?|Six|Two|Four|Eight|Medium|2000|series 3|The Three Gamblers|Frank Geiger|six bullets|Floyd Goodman|shooting`,
   `What apparently impossible position is Geiger's corpse found in months later?|Partway up the cellar stairs|Seated in a locked upstairs bedroom|Standing upright in a wardrobe|Outside the locked farmhouse door|Easy|2000|series 3|The Three Gamblers|Geiger body|cellar stairs|impossible movement|corpse mystery`,
   `What actually moves Geiger's corpse after his death?|Floodwater entering the cellar|An underground conveyor belt|Wild animals pulling at his clothes|A criminal using hidden ropes|Hard|2000|series 3|The Three Gamblers|floodwater|floating body|cellar|mystery solution`,
   `What natural event produces the water that shifts Geiger's corpse?|A river overflowing after heavy rain|A tidal surge from the sea|A burst water tower|A sudden underground spring|Medium|2000|series 3|The Three Gamblers|heavy rain|flooded valley|river overflow|Frog Hollow`,
   `What is found blank after once recording a key drug contact's details?|A scrap of paper from Geiger's pocket|A police fingerprint form|A passport's visa page|A page of Maddy's notebook|Medium|2000|series 3|The Three Gamblers|blank paper|Amsterdam contact|washed ink|Geiger pocket`,
   `Why is the writing missing from the paper found with Geiger's body?|Floodwater washed the ink away|The paper was chemically bleached|It had been written with invisible ink|The writing was covered with paint|Hard|2000|series 3|The Three Gamblers|floodwater|washed ink|paper clue|mystery solution`,
   `Who secretly works as an undercover police officer in The Three Gamblers?|Karen Blaine|Lizzie Gillespie|Maddy Magellan|Joe Wheeler|Hard|2000|series 3|The Three Gamblers|Karen Blaine|undercover police|Nina Sosanya|drug investigation`,
   `What abbreviation helps Maddy realise that Karen knows police procedure?|SOCO|CIDR|NATO|DVLA|Hard|2000|series 3|The Three Gamblers|Karen Blaine|SOCO file|police knowledge|undercover reveal`,
   `What book does Maddy give Jonathan for his birthday in The Three Gamblers?|Cards as Weapons|The Grave Digger|Challenging the Impossible|The Magic Circle|Medium|2000|series 3|The Three Gamblers|Jonathan birthday|Cards as Weapons|Ricky Jay|card throwing`,
   `Who wrote the real-life book Cards as Weapons featured as Jonathan's birthday present?|Ricky Jay|David Copperfield|Paul Daniels|Harry Houdini|Medium|2000|series 3|The Three Gamblers|Ricky Jay|Cards as Weapons|card magic|birthday gift`,
   `What playing card does Jonathan throw to distract an armed hostage-taker?|Three of spades|Ace of hearts|Queen of diamonds|King of clubs|Hard|2000|series 3|The Three Gamblers|three of spades|card throwing|hostage rescue|armed gunman`,
   `Which female magician performs a banana trick that Adam Klaus later copies?|Lizzie Gillespie|Mimi Tranter|Heidi Brayle|Philippa Farell|Medium|2000|series 3|The Three Gamblers|Lizzie Gillespie|banana trick|Adam Klaus|magic club`,
   `On whose television chat show does Adam Klaus repeat the banana trick?|Jonathan Ross's|Michael Parkinson's|Graham Norton's|Clive Anderson's|Medium|2000|series 3|The Three Gamblers|Jonathan Ross|Adam Klaus|banana trick|chat show`,
   `Why does Adam miss the ceremony at which he is due a lifetime-achievement award?|He goes to play blues music in a pub|He is trapped in a broken illusion cabinet|He flies to America unexpectedly|He is arrested after his television appearance|Medium|2000|series 3|The Three Gamblers|Adam Klaus|magic awards|lifetime achievement|pub performance`,
 ];

 const questions = rows.map((row, index) => {
   const parts = row.split('|').map(value => value.trim());
   if (parts.length !== 13 || parts.some(value => value.length === 0)) {
     throw new Error(`Pack 388: invalid or incomplete row ${index + 1}`);
   }

   const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
   if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
     throw new Error(`Pack 388: invalid difficulty in row ${index + 1}`);
   }

   const answers = [wrong1, wrong2, wrong3];
   answers.splice(index % 4, 0, correctAnswer);
   if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
     throw new Error(`Pack 388: repeated answer in row ${index + 1}`);
   }

   const tags = [...new Set([...commonTags, ...specificTags])];
   if (tags.length < 12) {
     throw new Error(`Pack 388: insufficient specific tags in row ${index + 1}`);
   }

   return {
     id: `tv_${FIRST_ID + index}`,
     category: 'Television',
     question,
     answers,
     correctAnswer,
     difficulty,
     tags,
     dailyEligible: true
   };
 });

 module.exports = questions;
