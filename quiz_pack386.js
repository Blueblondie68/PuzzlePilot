
// quiz_pack386.js
// PuzzlePilot - The Bigggggg Quiz
// Jonathan Creek - Part 1: Series 1 (1997), all five episodes.
// Complete standalone CommonJS file for WordPad; no external dependencies.
// Keep Jonathan Creek PARTIAL on the master list; later series and specials follow.

const FIRST_ID = 20602;
const PROGRAMME = 'Jonathan Creek';
// Each fact: question | correct answer | wrong 1 | wrong 2 | wrong 3 | difficulty | seven case-specific tags.

const background = `Who played the title character in the BBC mystery series?|Alan Davies|David Renwick|Stuart Milligan|Adrian Edmondson|Easy|Alan Davies|Jonathan Creek|Lead Actor|BBC One|1997 Debut|Main Cast|Mystery Comedy
Who played investigative writer Maddy Magellan in the opening series?|Caroline Quentin|Julia Sawalha|Sheridan Smith|Sheila Gish|Easy|Caroline Quentin|Maddy Magellan|Investigative Journalist|Series One|1997|Main Cast|Casting
Which writer created and scripted the original series?|David Renwick|Steven Moffat|Andrew Davies|Anthony Horowitz|Easy|David Renwick|Series Creator|Screenwriter|1997|British Television|Original Scripts|Mystery Writer
What is Jonathan's professional speciality when he first meets Maddy?|Designing illusions for a stage magician|Investigating insurance fraud|Performing forensic autopsies|Writing detective novels|Easy|Jonathan Creek|Illusion Designer|Stage Magic|Professional Work|Adam Klaus|1997|Lateral Thinking
Which performer employs Jonathan to invent stage illusions?|Adam Klaus|Jack Holiday|Hedley Shale|Roy Pilgrim|Easy|Adam Klaus|Stage Magician|Jonathan Employer|1997|Illusionist|Magic Show|Main Character
In what unusual building does Jonathan live during the early series?|A converted windmill|A converted lighthouse|A former fire station|An old railway signal box|Easy|Jonathan Home|Windmill|Unusual Residence|Series One|1997|British Countryside|Character Setting
Which actor portrayed Adam Klaus in the pilot episode?|Anthony Head|Stuart Milligan|Colin Baker|Ralph Brown|Medium|Anthony Head|Adam Klaus|The Wrestlers Tomb|Pilot Casting|1997|Guest Actor|Magician
Who subsequently became the regular actor playing Adam Klaus?|Stuart Milligan|Anthony Head|Simon Day|Jon Bluthal|Medium|Stuart Milligan|Adam Klaus|Magician Recasting|Early Series|1997|Regular Actor|Cast Change
On which channel did the first series originally air?|BBC One|ITV|Channel 4|BBC Two|Easy|BBC One|Original Network|1997|Programme Launch|Television Broadcaster|Mystery Drama|UK
How many episodes were shown in the first series?|Five|Four|Six|Eight|Easy|First Series|Episode Count|1997|BBC One|Broadcast History|Series Format|Pilot
Which episode was the series debut?|The Wrestler's Tomb|Jack in the Box|The House of Monkeys|No Trace of Tracy|Easy|The Wrestlers Tomb|Pilot Episode|10 May 1997|Series Premiere|Programme Launch|Episode Title|Murder Mystery
Which episode ended the first series?|The House of Monkeys|No Trace of Tracy|The Reconstituted Corpse|Jack in the Box|Medium|The House Of Monkeys|Series One Finale|7 June 1997|Episode Order|Broadcast History|Murder Mystery|Series One
Which month and year saw the first episode broadcast?|May 1997|January 1998|June 1996|October 1999|Medium|May 1997|BBC One|The Wrestlers Tomb|Programme Debut|Original Broadcast|Series One|Television History
Who directed the opening three episodes?|Marcus Mortimer|Sandy Johnson|Keith Washington|Roy Battersby|Hard|Marcus Mortimer|Series One|Pilot Direction|Jack In The Box|Reconstituted Corpse|1997|Director Credit
Which director handled the last two episodes of the first series?|Sandy Johnson|Marcus Mortimer|Keith Washington|Paul Harrison|Medium|Sandy Johnson|No Trace Of Tracy|The House Of Monkeys|1997|Series One|Director Credit|Production Team
What kind of cases most often draw Jonathan into Maddy's investigations?|Apparently impossible crimes|International tax evasion|Ordinary traffic offences|Missing archaeological permits|Easy|Impossible Crime|Locked Room Mysteries|Lateral Thinking|Maddy Magellan|Jonathan Creek|Crime Solving|Stage Illusions`;

const wrestlersTomb = `Which celebrated painter is killed in the opening mystery?|Hedley Shale|Elliot Strange|Roy Pilgrim|David Curchin|Easy|Hedley Shale|Murder Victim|Artist|Pilot|1997|The Wrestlers Tomb|Mystery
Who played the murdered artist in the pilot?|Colin Baker|Anthony Head|Ralph Brown|Jon Bluthal|Easy|Colin Baker|Hedley Shale|Guest Actor|The Wrestlers Tomb|1997|Casting|Painter
What is the name of the painter's wife who appears to have an unbreakable office alibi?|Serena Shale|Francesca Boutron|Katrina Toplis|Kirsten Holiday|Medium|Serena Shale|Hedley Shale|Wife|Office Alibi|The Wrestlers Tomb|1997|Prime Suspect
Which actress portrayed Serena Shale?|Sheila Gish|Saskia Mulder|Jane Hazlegrove|Caroline Quentin|Medium|Sheila Gish|Serena Shale|Guest Actress|The Wrestlers Tomb|1997|Eve Magazine|Casting
Where does Serena work while her husband is murdered?|At Eve magazine|At a hospital|At an art college|At a radio station|Medium|Serena Shale|Eve Magazine|Magazine Editor|Office Alibi|The Wrestlers Tomb|1997|Employment
Which model is discovered bound and gagged beside Hedley Shale?|Francesca Boutron|Katrina Toplis|Serena Shale|Maddy Magellan|Medium|Francesca Boutron|Hedley Shale|Model|Bound And Gagged|The Wrestlers Tomb|1997|Crime Scene
Which actor played the model Francesca Boutron?|Saskia Mulder|Sheila Gish|Jane Hazlegrove|Rebecca Charles|Medium|Saskia Mulder|Francesca Boutron|Guest Actress|The Wrestlers Tomb|1997|Model|Casting
Which man is arrested for the artist's murder before Maddy intervenes?|Stephen Grismal|Alan Rokesmith|Trevor|Adam Klaus|Medium|Stephen Grismal|Wrongly Accused|Maddy Magellan|The Wrestlers Tomb|1997|Murder Charge|Police
What stage performance brings Jonathan and Maddy into contact during the investigation?|Adam Klaus's illusion show|A rock concert by Roy Pilgrim|A comedy gig by Jack Holiday|An art auction|Easy|Adam Klaus|Theatre Show|Maddy Meets Jonathan|The Wrestlers Tomb|1997|Magic|First Meeting
What small item does Jonathan accidentally jab into Maddy's hand?|A cocktail stick|A drawing pin|A knitting needle|A hat pin|Medium|Cocktail Stick|Maddy Magellan|Jonathan Creek|The Wrestlers Tomb|1997|First Meeting|Comedy
How do Maddy and Jonathan gain access to Serena's office to examine her alibi?|They pose as a television interview crew|They pretend to deliver flowers|They pose as insurance inspectors|They arrive disguised as police officers|Medium|False Interview|Channel Four|Serena Shale|Maddy Magellan|Jonathan Creek|1997|Office Investigation
Which household servant proves to have had an affair with the murdered painter?|Katrina Toplis|Joy|Rachel Rokesmith|Victoria|Medium|Katrina Toplis|Hedley Shale|Affair|Cleaner|The Wrestlers Tomb|1997|Love Triangle
What marksmanship practice clue is found at Francesca's home?|Bullet holes in a portrait|Spent cartridges in a kettle|A bullet embedded in a clock|A smashed clay pigeon|Medium|Francesca Boutron|Bullet Holes|Painting|Target Practice|The Wrestlers Tomb|1997|Clue
Who is ultimately responsible for shooting Hedley Shale?|Francesca Boutron|Serena Shale|Katrina Toplis|Stephen Grismal|Medium|Francesca Boutron|Hedley Shale|Murderer|The Wrestlers Tomb|1997|Crime Solution|Jealousy
How does the bound killer manage to operate the gun?|With her feet|With a remote-control trigger|With a string tied to a doorknob|By hiding a second gun in the mattress|Hard|Francesca Boutron|Gun Fired With Feet|Staged Binding|The Wrestlers Tomb|1997|Murder Method|Impossible Crime
What objects are used to fasten the gun for the unconventional shot?|Elastic bands|Shoelaces|Hairpins|Electrical tape|Medium|Elastic Bands|Francesca Boutron|Gun Mechanism|The Wrestlers Tomb|1997|Murder Method|Forensic Clue
Which physical traces on the gun finally incriminate the murderer?|Toeprints|Bite marks|Lipstick stains|Clothing fibres|Hard|Toeprints|Francesca Boutron|Forensic Evidence|The Wrestlers Tomb|1997|Unusual Ballistics|Case Resolution
Which apparent robbery detail is staged by scattering some of Serena's possessions outside?|Jewellery thrown onto the lawn|A smashed safe in the garage|A stolen painting by the gate|Coins dropped across the hall|Medium|Staged Robbery|Jewellery|Serena Shale|Francesca Boutron|The Wrestlers Tomb|1997|Crime Scene`;

const jackBox = `Which elderly entertainer is discovered dead in a locked shelter?|Jack Holiday|Roy Pilgrim|Adam Klaus|Elliot Strange|Easy|Jack Holiday|Retired Comedian|Murder Victim|Jack In The Box|1997|Locked Room|Bunker
What kind of shelter contains the dead entertainer?|A nuclear fallout bunker|An air-raid shelter under a school|A cave behind a waterfall|An underground railway platform|Medium|Nuclear Bunker|Jack Holiday|1997|Locked Room|Cliffside|Jack In The Box|Crime Scene
Which condition makes suicide with a handgun unlikely for the victim?|Severe arthritis in his hands|A broken leg|Blindness|Partial deafness|Easy|Jack Holiday|Crippling Arthritis|Firearm|Jack In The Box|1997|Impossible Suicide|Physical Limitation
What product does Jack Holiday struggle to peel in his television advert?|A banana|An orange|A boiled egg|A packet of biscuits|Medium|Jack Holiday|Banana Advert|Arthritis|Jack In The Box|1997|Comedian Career|Clue
Who is Jack Holiday's current wife when his body is found?|Kirsten Holiday|Jennifer Holiday|Rachel Rokesmith|Serena Shale|Medium|Kirsten Holiday|Jack Holiday|Married Couple|Jack In The Box|1997|Witness|Family
Which earlier victim's murder led to Alan Rokesmith's imprisonment?|Jennifer Holiday|Kirsten Holiday|Zola Zbzewski|Francesca Boutron|Medium|Jennifer Holiday|Alan Rokesmith|Jack Holiday|Old Murder|Jack In The Box|1997|Conviction
Which man had recently been freed after Maddy campaigned on his behalf?|Alan Rokesmith|Stephen Grismal|Sam Brickman|Roy Pilgrim|Medium|Alan Rokesmith|Wrongful Conviction|Maddy Magellan|Jack In The Box|1997|Prison Release|Past Crime
How long had Alan Rokesmith spent in prison before his release?|Nine years|Two years|Six years|Twenty years|Medium|Alan Rokesmith|Nine Years In Prison|Jennifer Holiday|Jack In The Box|1997|Criminal Justice|Prison
Who played Alan Rokesmith?|Robin Soans|Bernard Kay|Jon Bluthal|Philip McGough|Medium|Robin Soans|Alan Rokesmith|Jack In The Box|1997|Guest Actor|Casting|Conviction
What unusual evidence is concealed beneath stamps on Rokesmith's letters?|Secret messages|Tiny photographs|A map of the bunker|Fingerprints in invisible ink|Medium|Postage Stamps|Secret Messages|Alan Rokesmith|Jack In The Box|1997|Prison Letters|Clue
What mismatch on the envelopes draws attention to the concealed writing?|Misaligned postmarks|Different paper colours|Wrong postal codes|An incorrect return address|Hard|Misaligned Franking|Postage Stamps|Alan Rokesmith|Jack In The Box|1997|Hidden Writing|Deduction
Which bizarre object is left as a warning in Jonathan's bed?|A melon pierced with a knife|A toy skeleton|A bloodstained glove|A cut telephone cable|Medium|Melon And Knife|Threat|Jonathan Creek|Jack In The Box|1997|Warning Note|Hotel
What construction detail shows that the bunker has been modified?|The toilet fittings no longer align with the brick wall|The ventilation shaft has been painted blue|The floor tiles are all new|The ceiling is lower than the doorway|Hard|Toilet Plumbing|False Wall|Nuclear Bunker|Jack In The Box|1997|Architectural Clue|Locked Room
How is the hidden space in the bunker concealed?|By rebuilding a brick wall farther into the room|By rolling a bookcase across a doorway|By fitting a trapdoor under a rug|By removing the ceiling panels|Hard|Rebuilt Brick Wall|Alan Rokesmith|Bunker|Jack In The Box|1997|Hidden Space|Murder Method
What lighting trick helps disguise the altered brickwork?|Fitting a dimmer light bulb|Turning the lights off from outside|Painting the bulb red|Using a torch instead of a ceiling light|Medium|Dim Light Bulb|False Wall|Jack In The Box|1997|Illumination|Visual Deception|Bunker
Who is discovered dead behind the reconstructed wall?|Alan Rokesmith|Jack Holiday|Oliver|Scott Reisner|Medium|Alan Rokesmith|Hidden Body|Jack In The Box|1997|False Wall|Bunker|Case Resolution
Who does Jonathan deduce arranged the murder of Jack's first wife?|Jack Holiday|Kirsten Holiday|Rachel Rokesmith|Oliver|Hard|Jack Holiday|Jennifer Holiday|Murder Plot|Jack In The Box|1997|Old Crime|Motive
What does the hidden killer take to ensure he dies inside the sealed cavity?|Pills|A poison-tipped needle|A bottle of spirits|A lethal gas canister|Medium|Alan Rokesmith|Pills|Suicide After Murder|Jack In The Box|1997|Sealed Wall|Crime Solution`;

const corpse = `Which celebrity becomes a murder suspect after quarrelling with her cosmetic surgeon?|Zola Zbzewski|Serena Shale|Kirsten Holiday|Francine Faraday|Medium|Zola Zbzewski|Cosmetic Surgery|Murder Suspect|The Reconstituted Corpse|1997|Celebrity|Autobiography
What is the title of Zola's controversial autobiography?|Finding My Form|My Beautiful Life|Made Again|The Perfect Face|Medium|Finding My Form|Zola Zbzewski|Autobiography|The Reconstituted Corpse|1997|Book Launch|Publicity
Which profession does the murder victim David Curchin practise?|Plastic surgery|Dentistry|Psychiatry|Veterinary medicine|Easy|David Curchin|Plastic Surgeon|Murder Victim|The Reconstituted Corpse|1997|Medical Career|Cosmetic Surgery
How is the cosmetic surgeon killed at his front door?|Shot through the door's spyhole|Stabbed through a letterbox|Poisoned by a food delivery|Hit by a falling statue|Hard|David Curchin|Door Peephole|Gunshot|The Reconstituted Corpse|1997|Murder Method|Front Door
What jewellery evidence at the murder scene points towards Zola?|An earring carrying her skin cells|A diamond bracelet bearing her initials|A broken necklace with her portrait|A watch engraved with her name|Medium|Zola Zbzewski|Earring|Skin Cells|Forensic Evidence|The Reconstituted Corpse|1997|Suspicion
What apparent evidence initially gives Zola an alibi?|A video shot by someone watching her house|A hospital attendance register|A taxi driver's statement|A timed bank withdrawal|Medium|Zola Zbzewski|Peeping Tom Video|False Alibi|The Reconstituted Corpse|1997|Camcorder|Evidence
How does Maddy initially recognise that the footage appears to show the right evening?|The same television programmes appear in sequence|The date appears on a wall calendar|A newspaper headline is visible|The clock chimes at midnight|Medium|Maddy Magellan|Television Schedule|Zola Zbzewski|The Reconstituted Corpse|1997|Alibi|Video
Where does Maddy unexpectedly discover Zola's dead body?|Inside a newly delivered wardrobe|Under her kitchen sink|Inside her car boot|Behind a theatre curtain|Easy|Wardrobe Body|Zola Zbzewski|Maddy Flat|The Reconstituted Corpse|1997|Impossible Appearance|Death
What is the name of Maddy's persistent blind date in this story?|Shelford|Trevor|Barry Opper|Rudi|Medium|Shelford|Blind Date|Maddy Magellan|The Reconstituted Corpse|1997|Romantic Comedy|Nigel Planer
Who played Maddy's awkward blind date?|Nigel Planer|Alistair McGowan|Philip McGough|Jon Bluthal|Medium|Nigel Planer|Shelford|The Reconstituted Corpse|1997|Guest Actor|Blind Date|Casting
Which film of the same name as a popular Cliff Richard song helps expose the alibi?|Summer Holiday|The Young Ones|Expresso Bongo|Wonderful Life|Medium|Summer Holiday|Television Recording|Zola Zbzewski|The Reconstituted Corpse|1997|False Alibi|Video Playback
What makes the seemingly genuine camcorder alibi unreliable?|A second tape was assembled using old television clips|The timestamp was printed upside down|The witness mistakenly filmed a neighbour|The footage was recorded in another country|Hard|Edited Videotape|Zola Zbzewski|False Alibi|The Reconstituted Corpse|1997|Video Fraud|Recorded Television
Which person secretly films Zola because he is in love with her?|Sam Brickman|David Curchin|Shelford|Rudi|Medium|Sam Brickman|Zola Zbzewski|Secret Filming|The Reconstituted Corpse|1997|Unrequited Love|Manager
Why does Zola sneak into Maddy's flat before the wardrobe arrives?|To retrieve an incriminating videotape|To plant an earring|To steal Maddy's manuscript|To hide from her publicist|Medium|Zola Zbzewski|Maddy Flat|Videotape|The Reconstituted Corpse|1997|Evidence Swap|Break In
What earlier incident causes the injury from which Zola ultimately dies?|A metal pipe falls on her head|She is pushed down a staircase|She is struck by a car door|She slips in a bathroom|Medium|Zola Zbzewski|Falling Pipe|Concussion|The Reconstituted Corpse|1997|Accidental Death|Scaffolding
Why does Zola enter the wardrobe while hiding in Maddy's spare room?|She hopes to stay concealed until the flat is empty|She is trying to steal jewellery|She believes it leads to a secret corridor|She wants to frighten the delivery men|Medium|Zola Zbzewski|Hiding In Wardrobe|Concussion|The Reconstituted Corpse|1997|Missing Body Mystery|Explanation
Which performer loses an elephant during an unsuccessful magic rehearsal?|Adam Klaus|Jack Holiday|Roy Pilgrim|Shelford|Medium|Adam Klaus|Elephant Levitation|Animal Death|The Reconstituted Corpse|1997|Magic Show|Comic Plot
What household object helps Jonathan trace how Zola entered Maddy's flat?|A bent pipe below the window|A broken stair rail|A loose wardrobe hinge|A cracked bathroom mirror|Hard|Bent Drainpipe|Maddy Window|Zola Zbzewski|The Reconstituted Corpse|1997|Climbing Access|Physical Evidence`;

const tracy = `Which veteran rock musician is accused when a teenage fan disappears?|Roy Pilgrim|Adam Klaus|Jack Holiday|Hedley Shale|Easy|Roy Pilgrim|Rock Star|Missing Teenager|No Trace Of Tracy|1997|Suspect|70s Music
Which instrument did Roy Pilgrim play in the group Edwin Drood?|Electric violin|Electric guitar|Bass guitar|Keyboards|Medium|Roy Pilgrim|Electric Fiddle|Edwin Drood|No Trace Of Tracy|1997|Rock Band|Musician
What is the name of the missing teenage fan?|Tracy Cook|Jane Crewes|Victoria|Cathy Strange|Easy|Tracy Cook|Missing Girl|Roy Pilgrim|No Trace Of Tracy|1997|Fan|Disappearance
How old is Tracy when she goes to meet her musical hero?|Sixteen|Fourteen|Eighteen|Twenty|Medium|Tracy Cook|Age Sixteen|Roy Pilgrim|No Trace Of Tracy|1997|Young Fan|Missing Person
What prevents Roy from searching the house while Tracy is said to enter?|He is handcuffed to a radiator|He is unconscious in hospital|He is locked in his recording studio|He is trapped in a lift|Medium|Roy Pilgrim|Radiator Handcuffs|No Trace Of Tracy|1997|Alibi|Apparent Disappearance|Locked In
What creature does Roy claim he saw enter instead of the girl?|A frog|A cat|A small dog|A squirrel|Medium|Roy Pilgrim|Frog|No Trace Of Tracy|1997|Puzzling Observation|Missing Girl|Clue
Who played the retired rock musician?|Ralph Brown|Colin Baker|Anthony Head|Jon Bluthal|Medium|Ralph Brown|Roy Pilgrim|No Trace Of Tracy|1997|Casting|Guest Actor|Rock Star
What is the name of Roy's fiancée?|Francine Faraday|Francesca Boutron|Ingrid Strange|Kirsten Holiday|Medium|Francine Faraday|Roy Pilgrim|Engagement|No Trace Of Tracy|1997|Relationship|Suspect
Which group receives major financial support from Roy Pilgrim?|The Creed of Eden|The Order of the Rose|The Society of Seven|The Circle of Light|Medium|Creed Of Eden|Roy Pilgrim|Cult|No Trace Of Tracy|1997|Money|Communal Farm
Who leads the commune that Roy has long supported?|Jacob Flowers|Toby Flowers|Tex|Glenn McArthur|Medium|Jacob Flowers|Creed Of Eden|Hogs Belly Farm|No Trace Of Tracy|1997|Cult Leader|Financial Motive
What is the name of the farm associated with the commune?|Hogs Belly Farm|Pool Park Farm|The Wrestler's Tomb|Moorland Farm|Medium|Hogs Belly Farm|Jacob Flowers|Polly Flowers|No Trace Of Tracy|1997|Creed Of Eden|Location
Why do members of the commune want to end Roy's engagement?|They fear losing his donations|They want Roy to rejoin his band|They disapprove of his choice of instrument|They intend to sell his house|Medium|Creed Of Eden|Francine Faraday|Roy Pilgrim|No Trace Of Tracy|1997|Funding Threat|Motive
What subtle difference exposes a change in the arrangement of Roy's music room?|Sun-fading on the speaker cabinets no longer lines up|A clock has been replaced|His instruments have new strings|The floor tiles have been polished|Hard|Speaker Cabinets|Sun Fading|Roy Pilgrim|No Trace Of Tracy|1997|Physical Clue|White Room
How was Tracy's apparent entry into Roy's room made possible?|The commune built a duplicate room at its farm|She entered through a one-way mirror|The witnesses had mistaken the day|She used a concealed tunnel|Hard|Duplicate White Room|Hogs Belly Farm|Tracy Cook|No Trace Of Tracy|1997|Impossible Disappearance|Illusion
What unique furniture was moved between the genuine room and the duplicate?|Hand-carved loudspeakers|A grand piano|A leather sofa|A record cabinet|Medium|Carved Speakers|Duplicate Room|Roy Pilgrim|No Trace Of Tracy|1997|Room Switching|Physical Evidence
Which dangerous feature of the frogs provides another link to the commune?|Their skin secretions can cause a toxic reaction|They can deliver an electric shock|They carry a distinctive tracking tag|Their croaking imitates human speech|Medium|Toxic Frog|Creed Of Eden|Hogs Belly Farm|No Trace Of Tracy|1997|Animal Clue|Poison
Where is the missing fan ultimately found alive?|At Hogs Belly Farm|In Roy's attic|At an abandoned theatre|In a locked hotel suite|Easy|Tracy Cook|Hogs Belly Farm|No Trace Of Tracy|1997|Rescue|Missing Girl|Case Resolution
What false impression is the commune trying to create about the musician?|That he has had an encounter with an underage fan|That he has stolen a valuable guitar|That he has burned his fan letters|That he has assaulted a bandmate|Medium|Roy Pilgrim|Tracy Cook|False Scandal|Creed Of Eden|No Trace Of Tracy|1997|Framing Plot`;

const monkeys = `Which scientist is found dead in a room that seems impossible to enter or leave?|Elliot Strange|David Curchin|Hedley Shale|Sam Brickman|Easy|Elliot Strange|Research Scientist|Locked Study|The House Of Monkeys|1997|Murder Victim|Animal Research
What weapon is found in the scientist's back?|A samurai sword|A hunting knife|A fencing foil|A crossbow bolt|Easy|Samurai Sword|Elliot Strange|The House Of Monkeys|1997|Suspicious Death|Japanese Armour|Crime Scene
What makes the scientist's locked study appear secure?|The windows are barred and the key is inside the locked door|The building is surrounded by water|The only door is bricked up|There are no external walls|Medium|Locked Study|Window Bars|Inside Key|The House Of Monkeys|1997|Impossible Murder|Security
What is the name of the scientist's wife, who already knows Jonathan?|Ingrid Strange|Cathy Strange|Serena Shale|Zola Zbzewski|Medium|Ingrid Strange|Jonathan Creek|Elliot Strange|The House Of Monkeys|1997|Doctor|Family Friend
Who played Ingrid Strange?|Annette Crosbie|Sheila Gish|Kika Mirylees|Caroline Quentin|Medium|Annette Crosbie|Ingrid Strange|The House Of Monkeys|1997|Guest Actress|Casting|Doctor
Which actor played Elliot's son Jordon?|Simon Day|Colin Baker|Ralph Brown|Jon Bluthal|Medium|Simon Day|Jordon Strange|The House Of Monkeys|1997|Guest Actor|Casting|Strange Family
Which animal living at the Strange house is named Samson?|A gorilla|A chimpanzee|An orangutan|A baboon|Easy|Samson|Gorilla|Strange Family|The House Of Monkeys|1997|Animal Character|Pet
What is the name of Jordon's wife, who is pursuing an acting career?|Cathy Strange|Ingrid Strange|Francesca Boutron|Serena Shale|Medium|Cathy Strange|Jordon Strange|The House Of Monkeys|1997|Actress|Family Relationship|Affair
What recording device captures the scientist's distress before his death?|A Dictaphone|A video camera|A baby monitor|A portable radio|Medium|Dictaphone|Elliot Strange|The House Of Monkeys|1997|Audio Evidence|Study|Hallucinations
What does Jonathan find high on the office bookshelves?|Footprints|Fingerprints in paint|A hidden revolver|A torn theatre ticket|Medium|Footprints On Shelves|Elliot Strange|The House Of Monkeys|1997|Unusual Behaviour|Clue|Locked Room
What cause explains the gorilla's irrational aggression and the scientist's strange behaviour?|A drug applied to envelope adhesive|A hypnotic stage trick|A hidden ultrasonic transmitter|Poison in the drinking water|Hard|Drugged Envelope|Samson|Elliot Strange|The House Of Monkeys|1997|Narcotic|Illusion Explained
Which piece of stationery delivers the hallucinogenic substance?|The gummed flap of a self-addressed envelope|A postcard covered in glue|A wax seal on a parcel|A rubber stamp on a letter|Medium|Gummed Envelope|Hallucinogen|Elliot Strange|The House Of Monkeys|1997|Poison Delivery|Crime Method
What is the explanation for the sword wound despite no intruder being present?|The hallucinating scientist falls onto his own sword|A gorilla throws a sword from the window|A spring-loaded sword fires from the armour|His son attacks him and climbs through a vent|Hard|Elliot Strange|Self Inflicted Wound|Hallucination|Samurai Sword|The House Of Monkeys|1997|Death Mechanism
Which fictional addressee's name is an anagram of Elliot Strange?|Teresa Tolling|Marella Carney|Helen Strange|Rachel Rokesmith|Hard|Teresa Tolling|Elliot Strange|Anagram|The House Of Monkeys|1997|False Identity|Postal Clue
What mistaken street name on a letter helps Jonathan trace its writer?|Polo Park Lane|Pool Park Road|Hogs Belly Lane|Wrestler Street|Hard|Polo Park Lane|Pool Park Lane|The House Of Monkeys|1997|Typo|Address Clue|Correspondence
Who is identified as the extremist responsible for the lethal envelope?|Alister Tyree|Jordon Strange|David Curchin|Stephen Grismal|Hard|Alister Tyree|Elliot Strange|Animal Rights|The House Of Monkeys|1997|Poisoned Envelope|Case Resolution
What cause had made the scientist a target of extremist opposition?|Experiments on animals|Testing counterfeit medicines|Illicit drug dealing|Illegal wildlife trafficking|Medium|Elliot Strange|Animal Research|Animal Rights Activist|The House Of Monkeys|1997|Motive|Controversy
What private affair does Maddy discover involving Elliot and his daughter-in-law?|A one-night relationship|An overseas marriage|A property business partnership|A secret adoption|Medium|Elliot Strange|Cathy Strange|Affair|The House Of Monkeys|1997|Family Secret|Diary`;

const questionBank = [];
const seen = new Set();

function addSection(facts, episode) {
  for (const [lineNo, raw] of facts.trim().split('\n').entries()) {
    const fields = raw.split('|').map(x => x.trim());
    if (fields.length !== 13 || fields.some(x => x.length === 0)) {
      throw new Error(`${episode} row ${lineNo + 1}: ${fields.length} fields (expected 13)`);
    }
    const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
    const id = `tv_${FIRST_ID + questionBank.length}`;
    const answers = [wrong1, wrong2, wrong3];
    answers.splice(questionBank.length % 4, 0, correctAnswer);
    const question = `In ${PROGRAMME}, ${stem[0].toLowerCase()}${stem.slice(1)}`;
    const tags = [...new Map([
      'Television', 'British Television', 'BBC One', 'Crime Mystery',
      PROGRAMME, 'Series 1 1997', episode, correctAnswer, ...specificTags
    ].map(tag => [tag.toLowerCase().replace(/[^a-z0-9]/g, ''), tag])).values()];
    const normalized = question.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (seen.has(normalized)) throw new Error(`Duplicate question: ${id}`);
    if (!['Easy','Medium','Hard'].includes(difficulty) ||
        new Set(answers.map(a => a.toLowerCase())).size !== 4 ||
        !answers.includes(correctAnswer) || tags.length < 10) {
      throw new Error(`Invalid exported question: ${id}`);
    }
    seen.add(normalized);
    questionBank.push({ id, category: 'Television', question, answers, correctAnswer, difficulty, tags, dailyEligible: true });
  }
}

addSection(background, 'Programme, characters and production');
addSection(wrestlersTomb, "The Wrestler's Tomb");
addSection(jackBox, 'Jack in the Box');
addSection(corpse, 'The Reconstituted Corpse');
addSection(tracy, 'No Trace of Tracy');
addSection(monkeys, 'The House of Monkeys');

module.exports = questionBank;
