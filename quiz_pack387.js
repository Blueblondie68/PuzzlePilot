
// quiz_pack387.js
// PuzzlePilot - The Bigggggg Quiz
// Jonathan Creek - Part 2: Series 2 (1998) and Black Canary Christmas special.
// Complete standalone CommonJS file. Keep Jonathan Creek PARTIAL until all later stories are covered.

const FIRST_ID = 20708;
const PROGRAMME = 'Jonathan Creek';
// Each row: question | correct answer | 3 distinct wrong answers | difficulty | 7 question-specific tags.
// The exporter adds the programme, series, case, answer and broad search tags.

const background = `In which year did the second series first air?|1998|1997|1999|2001|Easy|Series Two|1998|Original Broadcast|BBC One|Programme Chronology|Television History|Premiere Year
How many regular episodes make up the second series?|Six|Five|Seven|Eight|Easy|Series Two|Six Episodes|1998|Broadcast Schedule|Series Count|BBC One|Programme Format
Which story begins the second series?|Danse Macabre|Mother Redcap|The Scented Room|Black Canary|Easy|Danse Macabre|Series Two Premiere|1998|Episode Order|BBC One|Opening Episode|Broadcast History
Which episode follows Danse Macabre?|Time Waits for Norman|The Scented Room|Mother Redcap|Jack in the Box|Medium|Time Waits For Norman|Series Two|1998|Episode Sequence|Second Episode|BBC One|Broadcast History
Which tale immediately precedes the two-part Gallows Gate mystery?|The Scented Room|Danse Macabre|Mother Redcap|No Trace of Tracy|Medium|The Scented Room|Series Two|1998|Third Episode|Episode Order|Art Theft|BBC One
Which story provides the final regular episode of the second series?|Mother Redcap|Black Canary|Time Waits for Norman|Danse Macabre|Easy|Mother Redcap|Series Two Finale|1998|Sixth Episode|Episode Order|BBC One|Judge Murder
Which story was broadcast as the 1998 Christmas special?|Black Canary|Satan's Chimney|The Grinning Man|Daemons' Roost|Easy|Black Canary|Christmas Special|1998|BBC One|Holiday Broadcast|Special Episode|Marella Carney
On which date was the 1998 Christmas special first broadcast?|24 December 1998|25 December 1998|1 January 1999|26 December 1997|Medium|Christmas Eve|24 December 1998|Black Canary|BBC One|Broadcast Date|Special|Television History
Who directed the first three regular episodes of the second series?|Sandy Johnson|Keith Washington|Marcus Mortimer|David Renwick|Medium|Sandy Johnson|Series Two|Danse Macabre|Time Waits For Norman|The Scented Room|1998|Direction
Who directed both parts of Gallows Gate and the following episode?|Keith Washington|Sandy Johnson|Marcus Mortimer|Paul Harrison|Medium|Keith Washington|Gallows Gate|Mother Redcap|1998|Series Two|Director|Episode Credits
Who directed the Christmas special about an illusionist's mysterious death?|Sandy Johnson|Keith Washington|Marcus Mortimer|Roger Bamford|Medium|Sandy Johnson|Black Canary|1998|Christmas Special|Director|Production Credits|BBC One
Which actor took over the regular role of stage magician Adam Klaus at the start of Series 2?|Stuart Milligan|Anthony Head|Peter Davison|Rik Mayall|Easy|Stuart Milligan|Adam Klaus|Series Two|1998|Regular Cast|Recasting|Illusionist
Which writer was credited for all six regular 1998 scripts and the Christmas special?|David Renwick|Anthony Horowitz|Steven Moffat|Andrew Davies|Medium|David Renwick|Series Two|1998|Screenwriter|Black Canary|Series Creator|Episode Scripts`;

const danse = `What seasonal celebration forms the setting for the opening murder?|Halloween|Christmas|Bonfire Night|New Year's Eve|Easy|Halloween|Danse Macabre|1998|Costume Party|Horror Theme|Opening Murder|Seasonal Setting
Which famous horror novelist is murdered?|Emma Lazarus|Lorna Claithorne|Bridget|Kirsten Holiday|Medium|Emma Lazarus|Horror Author|Murder Victim|Danse Macabre|1998|Family Murder|Writer
Who comes to Maddy with the seemingly impossible killing of his mother-in-law?|Stephen Claithorne|Tom Terici|Hal Drucker|Gary Lobo|Medium|Stephen Claithorne|Maddy Magellan|Emma Lazarus|Danse Macabre|1998|Son In Law|Vicar
Which actor played Stephen Claithorne?|Peter Davison|Rik Mayall|Dermot Crowley|Bob Monkhouse|Medium|Peter Davison|Stephen Claithorne|Danse Macabre|1998|Guest Actor|Casting|Vicar
What disguise does the supposed killer wear?|A skeleton costume|A vampire cape|A clown suit|A werewolf mask|Easy|Skeleton Costume|Danse Macabre|Halloween|1998|Murderer Disguise|Garage|Costume
Where does the disguised attacker apparently disappear while police wait outside?|A sealed garage|A locked attic|A church crypt|An empty greenhouse|Easy|Garage|Vanishing Killer|Danse Macabre|1998|Police Siege|Impossible Escape|Locked Room
Who is found unconscious inside the garage when it is opened?|Lorna Claithorne|Emma Lazarus|Bridget|Maddy Magellan|Medium|Lorna Claithorne|Garage|Danse Macabre|1998|Victim Daughter|Staged Abduction|Police Search
Which bodyguard shoots the getaway car tyres before the garage standoff?|Hal Drucker|Gary Lobo|Tom Terici|Stephen Claithorne|Medium|Hal Drucker|Bodyguard|Car Tyres|Danse Macabre|1998|Police Escape|Pursuit
What small clue makes Jonathan suspicious of the contents of the garage?|The paint tins are empty|A window is partly open|A clock has stopped|The car has no number plate|Medium|Empty Paint Tins|Garage|Danse Macabre|1998|Clue|Staged Abduction|Jonathan Deduction
Who really walks into the garage wearing the skeleton suit?|Lorna Claithorne|Emma Lazarus|Hal Drucker|Bridget|Hard|Lorna Claithorne|Skeleton Disguise|Danse Macabre|1998|Garage Switch|Solution|Conspiracy
What is the apparently unconscious figure carried over the skeleton's shoulder?|A dummy dressed as Lorna|A sleeping child|Emma's body|A rolled-up carpet|Hard|Dummy|Lorna Claithorne|Danse Macabre|1998|Costume Swap|Disappearance Trick|Garage
What device makes the disguised person's voice impossible to recognise?|An electronic voice changer|A radio hidden in a helmet|A tape recorder on the floor|A speaking tube behind the wall|Medium|Voice Changer|Skeleton Costume|Danse Macabre|1998|Identity Concealment|Murder Trick|Garage
Which family member actually shoots the dying novelist?|Tom Terici|Stephen Claithorne|Hal Drucker|Gary Lobo|Hard|Tom Terici|Emma Lazarus|Danse Macabre|1998|Husband|Killing|Case Solution
Why does the novelist agree to the elaborate plan that ends her life?|She is terminally ill|She wants to fake her death for publicity|She fears imprisonment|She is protecting stolen manuscripts|Medium|Emma Lazarus|Terminal Illness|Danse Macabre|1998|Assisted Death|Family Plan|Motive
Which supposed witness's account is undermined because he had undergone treatment on his vocal cords?|Mr Snetterton|Gary Lobo|Hal Drucker|Stephen Claithorne|Hard|Snetterton|Vocal Cord Treatment|Danse Macabre|1998|False Testimony|Hospital|Murder Clue
What disturbing act is discovered before the murdered writer's funeral?|Her corpse has been decapitated|Her coffin has vanished|Her manuscript is burned|Her house has been demolished|Medium|Emma Lazarus|Decapitation|Danse Macabre|1998|Coffin|Obsessive Fan|Aftermath
What occupation does Adam's one-night companion Bridget hope to pursue in his show?|Opera singing|Stand-up comedy|Tap dancing|Juggling|Medium|Bridget|Opera Singing|Adam Klaus|Danse Macabre|1998|Blackmail|Theatre Subplot`;

const norman = `Which married man apparently appears in England while he is in New York?|Norman Stangerson|Barry Opper|Mel Porthropp|Lewis French|Easy|Norman Stangerson|New York|Time Waits For Norman|1998|Impossible Journey|Double Life|Alibi
What is the name of Norman's wife?|Antonia|Rebecca|Justine|Brenda|Medium|Antonia Stangerson|Norman Stangerson|Time Waits For Norman|1998|Publisher|Marriage|Investigation
What publishing connection first brings Maddy into the Stangerson household?|Antonia is her publisher|Norman runs her magazine|Norman is her agent|Antonia writes her newspaper column|Medium|Antonia Stangerson|Maddy Magellan|Publisher|Time Waits For Norman|1998|Manuscript|Book
Where does a witness claim to have served Norman food during his supposed American trip?|Wimpy|McDonald's|Burger King|Little Chef|Easy|Wimpy|Norman Stangerson|Time Waits For Norman|1998|Hamburger|Witness|England
Which worker returns a wallet and says he saw Norman in the burger restaurant?|Lewis French|Mel Porthropp|Barry Opper|Rupert|Medium|Lewis French|Wimpy|Norman Stangerson|Time Waits For Norman|1998|Wallet|Eyewitness
What food accident provides a detail apparently identifying Norman at the restaurant?|He spills coffee on his foot|He drops chips on his coat|He burns his hand with soup|He spills milk on his trousers|Medium|Coffee Spill|Wimpy|Norman Stangerson|Time Waits For Norman|1998|Foot Mark|Witness Account
In which American city is Norman officially attending meetings?|New York|Los Angeles|Chicago|Boston|Easy|New York|Norman Stangerson|Time Waits For Norman|1998|Business Trip|US Alibi|Atlantic
Which old colleague is implicated in the supposed impossibility?|Mel Porthropp|Barry Opper|Lewis French|Stephen Claithorne|Medium|Mel Porthropp|Norman Stangerson|Time Waits For Norman|1998|Business Partner|Identity Scheme|Graphic Design
What business had Norman previously run with his eventual accomplice?|Computer graphic design|Travel insurance|Record production|Jewellery importing|Medium|Computer Graphics|Norman Stangerson|Mel Porthropp|Time Waits For Norman|1998|Failed Business|Work History
How is a cryptic phrase found in Norman's wallet meant to be understood?|Read aloud as a phone number|Translated from French|Reversed in a mirror|Decoded with a chessboard|Hard|Phonetic Phone Number|Norman Wallet|Time Waits For Norman|1998|Written Phrase|Maddy Magellan|Puzzle Solution
What photographic evidence establishes someone resembling Norman was actually near the burger bar?|A surveyor's street photographs|A security-camera tape from a bank|A family holiday photograph|A newspaper front-page picture|Medium|Surveyor Photographs|Wimpy|Norman Stangerson|Time Waits For Norman|1998|Witness Evidence|Streetscape
How is Norman able to be apparently present on both sides of the Atlantic?|His former colleague uses his identity abroad|He has a secret identical twin brother|He travels on a military plane|His wife changes the dates on the photographs|Hard|Mel Porthropp|Identity Sharing|Norman Stangerson|Time Waits For Norman|1998|Impossible Travel|Solution
What secret personal life is Norman hiding from Antonia?|Another partner and a child|A second job as a policeman|An overseas inheritance|A gambling syndicate|Medium|Gillian|Norman Stangerson|Time Waits For Norman|1998|Double Life|Other Family|Marriage
Why does the supposed vegetarian buy a hamburger?|To obtain a football-poster token for a boy|To test a restaurant's hygiene|To disguise the smell of coffee|To give it to his business partner|Hard|Hamburger|Football Poster Token|Gillian Son|Norman Stangerson|Time Waits For Norman|1998|Hidden Motive
Which actor portrayed Norman Stangerson?|Dermot Crowley|Peter Davison|Rik Mayall|Geoffrey McGiven|Medium|Dermot Crowley|Norman Stangerson|Time Waits For Norman|1998|Guest Actor|Casting|Husband
What does Jonathan discover about his romantic interest Rebecca after their night together?|She wears a wig|She is a police detective|She is Maddy's cousin|She is already married|Medium|Rebecca Knape|Wig|Jonathan Creek|Time Waits For Norman|1998|Accountant|Romantic Subplot`;

const scented = `What valuable artwork vanishes during a school tour?|The Kiss of Judas|The Mona Lisa|The Hay Wain|The Fighting Temeraire|Medium|Kiss Of Judas|Stolen Painting|The Scented Room|1998|Art Theft|School Tour|El Greco
Which artist painted the missing work?|El Greco|Rembrandt|Goya|Caravaggio|Medium|El Greco|Kiss Of Judas|The Scented Room|1998|Art Collection|Old Master|Painting
What is the approximate value of the missing painting?|One million pounds|Ten thousand pounds|A hundred million pounds|Fifty million pounds|Easy|Million Pound Painting|Kiss Of Judas|The Scented Room|1998|Art Theft|Value|Ransom
Which wealthy woman owns the house containing the artwork?|Lady Theresa Cutler|Serena Shale|Antonia Stangerson|Lorna Claithorne|Medium|Lady Theresa Cutler|The Scented Room|1998|Art Owner|Country House|Marriage|Collection
Which critic earns Jonathan's dislike after savaging Adam's act?|Sylvester Le Fley|Barry Opper|Roy Gregson|Eric|Medium|Sylvester Le Fley|Adam Klaus|The Scented Room|1998|Theatre Critic|Bad Review|Refusal
Which comedian played the critic married to the painting's owner?|Bob Monkhouse|Peter Davison|Brian Murphy|Rik Mayall|Medium|Bob Monkhouse|Sylvester Le Fley|The Scented Room|1998|Guest Actor|Casting|Critic
How much reward is offered for the artwork's return?|Fifty thousand pounds|Five thousand pounds|Twenty thousand pounds|One hundred thousand pounds|Medium|50000 Pound Reward|The Scented Room|1998|Stolen Painting|Lady Cutler|Maddy Magellan|Incentive
Why does Jonathan initially refuse to disclose the solution to the theft?|He resents the owner's husband's hostile review of Adam|He has promised the thief secrecy|He is waiting for a police warrant|He wants to buy the painting himself|Medium|Jonathan Creek|Sylvester Le Fley|Bad Theatre Review|The Scented Room|1998|Refuses Reward|Adam Klaus
How long is the apparent gap between the painting being seen and found missing?|About thirty seconds|Ten minutes|One hour|A full afternoon|Medium|Thirty Seconds|The Scented Room|1998|School Group|Vanishing Painting|Impossible Theft|Timing
What snack does Jonathan cite as an important clue from a staff member?|A spam sandwich|A ham-and-cheese toastie|A packet of crisps|A slice of apple pie|Hard|Spam Sandwich|Eric|The Scented Room|1998|Clue|Corridor|Lunch
What suspicious feature of footprints in the library catches Jonathan's attention?|They avoid a rug despite being described as running|They are too small for an adult|They appear on the ceiling|They lead into a sealed fireplace|Medium|Footprints|Library Rug|The Scented Room|1998|False Burglar|Walking Not Running|Deduction
Which fragrance provides a clue to how false footprints were made?|Scented talcum powder|Lavender oil|Burnt incense|Furniture polish|Medium|Talcum Powder|Library Smell|The Scented Room|1998|Staged Footprints|False Trail|Forensic Clue
Where is the missing canvas actually concealed?|Inside the hollow room door|Behind a library bookshelf|Inside a grandfather clock|Under the swimming pool|Hard|Hollow Door|Kiss Of Judas|The Scented Room|1998|Concealed Painting|Theft Method|Solution
Who physically slips the painting into its hiding place?|Schoolgirl Judy|Guide Martha Parrish|The critic Sylvester|The boy Benjamin|Medium|Judy|School Visit|The Scented Room|1998|Art Thief|Concealed Canvas|Accomplice
Which former household employee helps organise the theft to teach the parents a lesson?|Melissa the former nanny|Eric the caretaker|Martha the guide|Roy the critic|Medium|Melissa|Former Nanny|The Scented Room|1998|Benjamin|Parental Neglect|Theft Motive
What poor treatment of a child motivates the plot to remove the family's prized possession?|His parents substitute expensive gifts for attention|His parents send him to boarding school|His parents refuse medical treatment|His parents hide his school reports|Medium|Benjamin Le Fley|Melissa|The Scented Room|1998|Parental Neglect|Love And Attention|Motive
Which boy is used to demonstrate the theft's method at the end?|Benjamin Le Fley|Norman Stangerson|Jason Tippet|Duncan Procter|Medium|Benjamin Le Fley|Jonathan Demonstration|The Scented Room|1998|Hollow Door|Painting Reveal|Family
What is Gordon Hill in Maddy's diary, despite Jonathan imagining it is a man?|The street where her childhood home stood|A former publisher's surname|The name of a psychiatric clinic|A village where Adam is performing|Medium|Gordon Hill|Maddy Magellan|The Scented Room|1998|Childhood Home|Demolition|Personal History`;

const gallows = `Which character's older sister unexpectedly arrives to stay and accompanies the badger watch?|Adam Klaus|Jonathan Creek|Maddy Magellan|Hewie Harper|Easy|Adam Klaus|Kitty|Gallows Gate|1998|Sibling|Badger Watch|Family Visit
What is the name of Adam's visiting sister?|Kitty|Kiko|Felicity|Petra|Medium|Kitty|Adam Klaus|Gallows Gate|1998|Older Sister|Witness|Badger Watch
What activity brings Jonathan and his companions to the village at night?|Watching badgers|Bird ringing|Ghost hunting|A treasure hunt|Easy|Badger Watch|Jonathan Creek|Gallows Gate|1998|Night Outing|Wildlife|Witness
Which young woman is seen being apparently strangled through a window?|Felicity Vale|Kiko|Clare Sallinger|Petra|Easy|Felicity Vale|Gallows Gate|1998|Witnessed Attack|Artist|Murder Victim|Cottage
What creative profession does Felicity Vale practise?|Cartoonist|Photographer|Potter|Opera singer|Medium|Felicity Vale|Cartoonist|Gallows Gate|1998|Animated Drawings|Occupation|Victim
Who sees the supposed killer from outside using Jonathan's binoculars?|Kitty|Maddy|Adam Klaus|Hewie Harper|Medium|Kitty|Binoculars|Gallows Gate|1998|Night Witness|Badger Watch|Strangling
Which former boyfriend is identified as the attacker even though he supposedly died earlier?|Duncan Procter|Neville Bruce|Ben|Buster|Medium|Duncan Procter|Felicity Vale|Gallows Gate|1998|Apparent Dead Man|Witness Identification|Mystery
What apparently fatal event had guests witnessed three weeks before Felicity's death?|A leap from a balcony|A shooting in a garden|A fall down a well|A car crash into a tree|Medium|Duncan Procter|Balcony Jump|Gallows Gate|1998|Staged Suicide|Birthday Party|Earlier Event
Which woman shared a home with Felicity and practised osteopathy?|Clare Sallinger|Kiko|Kitty|Petra|Medium|Clare Sallinger|Osteopath|Gallows Gate|1998|Housemate|Profession|Case Suspect
Who is Duncan's best friend and the man found in bed with Felicity?|Neville Bruce|Ben|Buster|Hewie Harper|Medium|Neville Bruce|Duncan Procter|Felicity Vale|Gallows Gate|1998|Betrayal|Affair
What is the name of Neville's new girlfriend?|Kiko|Kitty|Petra|Melissa|Medium|Kiko|Neville Bruce|Gallows Gate|1998|New Relationship|Felicity Jealousy|House Visit
How does the supposedly dead man's staged fall actually work?|A concealed net catches him in a prepared pit|A safety harness lowers him behind the balcony|He jumps onto a mattress in an ambulance|A double made of wax takes his place|Hard|Hidden Pit|Safety Net|Duncan Procter|Gallows Gate|1998|Fake Suicide|Balcony Trick
What evidence shows that the blood at the staged suicide scene was planted?|Its splash pattern fits drops falling from above|It matches a different blood group|It is revealed to be red paint|It contains traces of cleaning fluid|Hard|Blood Splash Pattern|Duncan Procter|Gallows Gate|1998|Faked Death|Balcony|Physical Clue
Who are believed to have helped stage the balcony suicide?|Ben and Buster|Neville and Kiko|Adam and Kitty|Maddy and Jonathan|Medium|Ben|Buster|Duncan Procter|Gallows Gate|1998|Accomplices|Fake Suicide
What item repeatedly disappears from Felicity's answering machine?|The message cassette|The mains plug|The paper instruction manual|The handset|Medium|Answering Machine Tape|Felicity Vale|Gallows Gate|1998|Evidence Theft|Threatening Message|Cover Up
Why does Neville remove one of the answering-machine recordings?|He fears police will hear the threats he made to Felicity|He wants to erase a lottery number|He hopes to protect Kiko from debt collectors|He is hiding an international telephone call|Medium|Neville Bruce|Threatening Message|Gallows Gate|1998|Answering Machine|False Suspicion|Motive
Which clothing clue puzzles Jonathan after the supposed strangling?|Felicity's removed stockings|A missing scarf from the bedroom|A coat hung inside out|A torn sleeve on a jacket|Medium|Stockings|Felicity Vale|Gallows Gate|1998|Crime Scene|Duncan Procter|Interpretation
Why does Duncan remove Felicity's stockings after the confrontation?|To prevent her using them to harm herself|To hide a brand-new tattoo|To make the body look like a burglary victim|To conceal muddy footprints|Hard|Duncan Procter|Stockings|Gallows Gate|1998|Suicide Prevention|Felicity Vale|Apparent Assault
What is Duncan actually trying to prevent when witnesses think he is strangling Felicity?|Her swallowing pills|Her jumping through a window|Her setting fire to the house|Her calling the police|Hard|Duncan Procter|Felicity Vale|Gallows Gate|1998|Pills|Misread Struggle|Suicide Attempt
Who really kills Felicity after Duncan leaves her in the bathroom?|Clare Sallinger|Neville Bruce|Kiko|Kitty|Hard|Clare Sallinger|Felicity Vale|Gallows Gate|1998|Actual Killer|Bath|Case Resolution
How does the murderer incriminate herself through Jonathan's painful treatment?|Skin transferred to Jonathan during osteopathy matches forensic samples|Her fingerprints are found on his car keys|Her shoe leaves a print in his garden|Her hair is found in his coat pocket|Hard|Clare Sallinger|Osteopathy|Jonathan Back|Gallows Gate|1998|Forensic Skin Samples|Confession
Which actor portrays the famous jazz musician Hewie Harper?|Clarke Peters|Rik Mayall|Peter Davison|Dermot Crowley|Medium|Clarke Peters|Hewie Harper|Gallows Gate|1998|Guest Actor|Jazz Musician|Casting
What surprise fact about jazz musician Hewie Harper does Adam tell Jonathan?|His eyesight was restored years earlier|He is secretly a classical violinist|He cannot read musical notation|He is Adam's brother|Medium|Hewie Harper|Restored Sight|Gallows Gate|1998|Secret|Jazz Trumpet|Comedy
Which detective inspector is irritated by Maddy's interference in the case?|Barrison|Pryke|Speed|Gibbins|Medium|Inspector Barrison|Maddy Magellan|Gallows Gate|1998|Police Investigation|Interrogation|Case Officer
Which fault on Jonathan's old typewriter frustrates Maddy as she drafts her story?|The letter S fails to print|The space bar is broken|The ribbon prints only red|The return key sticks|Medium|Typewriter|Letter S|Maddy Magellan|Gallows Gate|1998|Comic Subplot|Writing`;

const mother = `Which high-ranking legal figure is found dead under police protection?|Judge Forrest Sweetland|Chief Inspector Ken Speed|Jason Tippet|Clifford Jennings|Easy|Judge Sweetland|High Court|Mother Redcap|1998|Protected Victim|Murder|Legal Case
What apparent weapon wound leads the police to suspect a stabbing?|A very small puncture near the heart|A deep knife slash to the arm|A bullet wound in the shoulder|A cut across the throat|Medium|Tiny Puncture|Judge Sweetland|Mother Redcap|1998|Misleading Evidence|Wound|Autopsy
Which policewoman is secretly behind the death of the protected judge?|Fay Radnor|Gwynneth Sweetland|Laura Climpson|Maddy Magellan|Medium|Fay Radnor|Judge Sweetland|Mother Redcap|1998|WPC|Killer|Case Resolution
Which actress plays the policewoman guarding the judge?|Nicola Walker|Pippa Haywood|Caroline Quentin|Annette Crosbie|Medium|Nicola Walker|Fay Radnor|Mother Redcap|1998|Guest Actress|Casting|Policewoman
What device is altered so that touching its alarm button is fatal?|An electric alarm clock|A bedside lamp|A wireless telephone|A television remote|Hard|Electrified Alarm Clock|Judge Sweetland|Mother Redcap|1998|Electrocution|Murder Method|Bedside
What actually kills the judge before the puncture is inflicted?|An electric shock|A drug overdose|A heart attack from fright|Carbon monoxide poisoning|Hard|Electrocution|Judge Sweetland|Mother Redcap|1998|Real Cause|Staged Stabbing|False Weapon
Why is a glass of water beside the judge's bed important to the false timeline?|It reverses the appearance of digits on a clock|It contains traces of a sleeping drug|It catches a reflection of the intruder|It keeps an electric wire damp|Hard|Glass Of Water|Digital Clock|Mother Redcap|1998|Refraction|False Time|Optical Clue
What retractable implement is used to simulate a stab wound?|A small concealed spike|A folding penknife|A sharpened hairpin|A hypodermic syringe|Hard|Retractable Spike|Fay Radnor|Mother Redcap|1998|Fake Stabbing|Murder Weapon|Sleeve
What is the name of the police officer who asks Jonathan to investigate the judge's death?|Ken Speed|Gideon Pryke|Barrison|Hewie Harper|Medium|Ken Speed|Chief Inspector|Mother Redcap|1998|Jonathan Creek|Police Help|Protection Detail
Which actor played Chief Inspector Ken Speed?|Brian Murphy|Rik Mayall|Clarke Peters|Bob Monkhouse|Medium|Brian Murphy|Ken Speed|Mother Redcap|1998|Guest Actor|Casting|Police Officer
What London public house is linked to a string of mysterious older deaths?|The Mother Redcap|The Blind Beggar|The Red Lion|The Black Canary|Easy|Mother Redcap Pub|London|Mother Redcap|1998|Historic Deaths|Haunted Inn|Second Mystery
Which young man recruits Maddy to investigate the old pub?|Jason Tippet|Clifford Jennings|Ken Speed|Gideon Pryke|Medium|Jason Tippet|Maddy Magellan|Mother Redcap|1998|Estate Agent|Pub History|Case Contact
What apparent cause of death had been attributed to several men staying at the pub?|Being frightened to death|Poisoned wine|An unseen gunman|Accidental falls downstairs|Medium|Fright Deaths|Mother Redcap Pub|1998|Historic Mystery|Bedroom|Supposed Haunting|Victims
What secret installation actually caused the pub guests' deaths?|Electrified metal prongs rising through the floor|A gas pipe hidden in the wallpaper|A spring-operated blade under the bed|A poison needle in the door handle|Hard|Metal Floor Prongs|Electrocution|Mother Redcap Pub|1998|Hidden Mechanism|Old Murders|Solution
What floor damage initially appears to be woodworm in the pub's deadly room?|Tiny holes for metal prongs|A concealed drainage channel|A trapdoor hinge|A hollow tile beneath the bed|Hard|False Woodworm|Floor Holes|Mother Redcap Pub|1998|Hidden Prongs|Physical Clue|Electrical Trap
Why did the innkeeper arrange the historical deaths of male guests?|Their wives paid him to murder unfaithful husbands|He sought revenge for unpaid rent|He was trying to steal their wills|He believed they were police informants|Medium|Pub Landlord|Unfaithful Husbands|Mother Redcap|1998|Paid Killings|Historic Murders|Motive
What personal grievance drives the policewoman to kill the judge?|He granted bail to the killer who later murdered her brothers|He convicted her mother of fraud|He refused to investigate her missing child|He dismissed her from police service|Hard|Fay Radnor|Judge Sweetland|Mother Redcap|1998|Brothers Killed|Bail Decision|Revenge
What personal secret makes Maddy's prospective collaborator Jason unexpectedly awkward?|He belongs to a nudist household|He is secretly married to her publisher|He uses a false name|He is an undercover police officer|Medium|Jason Tippet|Naturism|Mother Redcap|1998|Maddy Magellan|Dinner Date|Comedy`;

const canary = `Which famous female stage illusionist is found dead in the Christmas mystery?|Marella Carney|Lorna Claithorne|Theresa Cutler|Felicity Vale|Easy|Marella Carney|Black Canary|1998|Female Illusionist|Apparent Suicide|Christmas Special|Victim
Which actor plays the flamboyant Detective Inspector Gideon Pryke?|Rik Mayall|Peter Davison|Brian Murphy|Bob Monkhouse|Easy|Rik Mayall|Gideon Pryke|Black Canary|1998|Guest Actor|Detective Inspector|Casting
What is the name of the illusionist's daughter who was once romantically linked to Jonathan?|Charlotte Carney|Hannah|Maddy Magellan|Kirsten Holiday|Medium|Charlotte Carney|Jonathan Creek|Black Canary|1998|Former Romance|Daughter|Personal History
Which actress portrays the illusionist and her identical twin?|Hannah Gordon|Phyllis Logan|Pippa Haywood|Annette Crosbie|Medium|Hannah Gordon|Marella Carney|Beryl Carney|Black Canary|1998|Casting|Twin Roles
Which woman is secretly Marella's identical twin sister?|Beryl|Charlotte|Hannah|Elsa|Medium|Beryl Carney|Marella Carney|Black Canary|1998|Twins|Hidden Identity|Stage Trick
What accident is believed to have killed the illusionist's twin years before the mystery?|A malfunctioning buzz-saw trick|A fall during a levitation act|A fire in an escape cabinet|A drowning during an underwater act|Medium|Buzz Saw Illusion|Marella Carney|Beryl Carney|Black Canary|1998|Stage Accident|Twin Swap
What item does the surviving twin swap to assume her sister's identity after the accident?|A wedding ring|A stage costume|A passport|A pearl necklace|Hard|Wedding Ring|Beryl Carney|Marella Carney|Black Canary|1998|Identity Switch|Twin Secret
Why did the sisters' act rely heavily on an unseen twin?|One sister could substitute for the other in escape illusions|They performed a double-act song routine|One secretly wrote the other's autobiography|Their voices were dubbed for television|Medium|Twin Substitution|Stage Illusions|Marella Carney|Beryl Carney|Black Canary|1998|Magic Secret
Which fear made Marella reluctant to be trapped in stage cabinets?|Claustrophobia|Fear of heights|Fear of darkness|Fear of water|Medium|Marella Carney|Claustrophobia|Black Canary|1998|Cabinet Trick|Twin Roles|Illusion
Which husband witnesses an apparent suicide outside the family mansion?|Jerry Bellenitis|Lionel Prokopp|Gideon Pryke|Pan Duc Lao|Medium|Jerry Bellenitis|Marella Carney|Black Canary|1998|Conservatory|Husband|Witness
What seems impossible about the gunshot death witnessed in the snow?|There are no footprints from the departing man|The snow is completely untouched around the victim|The gun has no ammunition|The apparent victim walks away|Easy|Snow Footprints|Black Canary|1998|Impossible Suicide|Conservatory|Limping Man|Mystery
What medical evidence contradicts the witnessed time of death?|The body had been dead for several hours|The bullet was fired days earlier|The gun could not have been used outside|The victim's heartbeat is detected|Medium|Time Of Death|Rigor Mortis|Black Canary|1998|Earlier Death|Forensic Clue|Staged Suicide
Which household servant is ultimately exposed as the murderer?|Lionel Prokopp|Jerry Bellenitis|Gideon Pryke|Pan Duc Lao|Hard|Lionel Prokopp|Black Canary|1998|Butler|Murderer|Hidden Twin|Case Resolution
How does the murderer create the false sight of a woman shooting herself outside?|He uses a strategically placed mirror and costume|He projects a film onto the snow|He has an accomplice hide beneath the ground|He operates a mechanical dummy by remote control|Hard|Large Mirror|Lionel Prokopp|Black Canary|1998|Staged Suicide|Optical Illusion|Solution
What change to furniture in the conservatory helps conceal the deceptive viewpoint?|A table is moved so the observer views the mirror from the right position|A wardrobe is placed over the French doors|The curtains are painted black|A bookcase is moved in front of the window|Hard|Conservatory Table|Mirror Angle|Lionel Prokopp|Black Canary|1998|Viewing Position|Optical Trick
What apparently shortened electrical cord first attracts attention from the investigating inspector?|A table lamp lead|A telephone cable|A heater flex|A television aerial|Medium|Table Lamp Cord|Conservatory|Gideon Pryke|Black Canary|1998|Furniture Moved|Clue
What is the truth about the apparently shortened lamp cord?|The lamp's table has been moved|The plug has been replaced|A section of cable was cut off|The socket has been relocated|Hard|Moved Table|Lamp Flex|Black Canary|1998|Mirror Trick|Conservatory|Deduction
What colour of nail varnish provides an identity clue in the house's lift?|Red|Blue|Black|Green|Medium|Red Nail Varnish|Lift|Beryl Carney|Black Canary|1998|Claustrophobia|Evidence
What form does the deceased illusionist use to sign her farewell note?|A kiss|A full signature|Her initials|A thumbprint|Medium|Kiss Signature|Suicide Note|Beryl Carney|Black Canary|1998|Identity Secret|Letter
Which returning relative realises the woman she embraces is her long-lost mother rather than her aunt?|Hannah|Charlotte|Elsa|Maddy|Hard|Hannah|Beryl Carney|Marella Carney|Black Canary|1998|Mother Daughter|Reunion
What supposed treatment by Pan Duc Lao is exposed as a trick?|Psychic surgery|Hypnotic anaesthesia|Faith healing by laying on hands|Electrotherapy|Medium|Pan Duc Lao|Psychic Surgery|Black Canary|1998|Fraud|Jerry Bellenitis|Stage Illusion
What problem tempts Adam Klaus to consult the fake psychic surgeon?|Gallstones|A sprained wrist|A slipped disc|Persistent migraines|Medium|Adam Klaus|Gallstones|Pan Duc Lao|Black Canary|1998|Medical Subplot|Fake Healer
What animal's unusual winter activity helps Jonathan locate a mysterious limping witness?|Bats|Foxes|Badgers|Owls|Medium|Winter Bats|Limping Man|Black Canary|1998|Wildlife Clue|Hideout|Investigation
Which object wrongly makes the police link Jonathan to the limping man's hideout?|A dental crown in a matchbox|His wallet|A theatre ticket|A named glove|Hard|Dental Crown|Matchbox|Jonathan Creek|Black Canary|1998|Misleading Evidence|Gideon Pryke
What is the name of the illusory performance Adam rehearses involving a green costume?|Jack the Ripper|The Vanishing Leopard|The Floating Elephant|The Phantom Mask|Medium|Jack The Ripper|Adam Klaus|Elsa|Black Canary|1998|Green Frog Costume|Magic Rehearsal`;

const questions = [];
const seen = new Set();

function addFacts(block, section) {
  for (const [lineNo, row] of block.trim().split('\n').entries()) {
    const fields = row.split('|').map(s => s.trim());
    if (fields.length !== 13 || fields.some(s => !s)) {
      throw new Error(`${section} row ${lineNo + 1}: expected 13 non-empty fields, got ${fields.length}`);
    }

    const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
    const id = `tv_${FIRST_ID + questions.length}`;
    const answers = [wrong1, wrong2, wrong3];
    answers.splice(questions.length % 4, 0, correctAnswer);

    const question = `In ${PROGRAMME}, ${stem[0].toLowerCase()}${stem.slice(1)}`;
    const tags = [...new Map([
      'Television', 'British Television', 'BBC One', 'Mystery Drama', '1998',
      PROGRAMME, section, correctAnswer, ...specificTags
    ].map(tag => [tag.toLowerCase().replace(/[^a-z0-9]/g, ''), tag])).values()];

    const normalized = question.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (seen.has(normalized)) {
      throw new Error(`Duplicate question: ${id}`);
    }
    if (!['Easy', 'Medium', 'Hard'].includes(difficulty) ||
        new Set(answers.map(a => a.toLowerCase())).size !== 4 ||
        !answers.includes(correctAnswer) || tags.length < 11) {
      throw new Error(`Invalid options, difficulty or tags: ${id}`);
    }

    seen.add(normalized);
    questions.push({
      id,
      category: 'Television',
      question,
      answers,
      correctAnswer,
      difficulty,
      tags,
      dailyEligible: true
    });
  }
}

addFacts(background, 'Series 2 production and broadcast');
addFacts(danse, 'Series 2 episode 1 Danse Macabre');
addFacts(norman, 'Series 2 episode 2 Time Waits for Norman');
addFacts(scented, 'Series 2 episode 3 The Scented Room');
addFacts(gallows, 'Series 2 episodes 4-5 The Problem at Gallows Gate');
addFacts(mother, 'Series 2 episode 6 Mother Redcap');
addFacts(canary, '1998 Christmas special Black Canary');

module.exports = questions;
