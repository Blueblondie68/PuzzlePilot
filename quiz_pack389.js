
// PuzzlePilot - Big Quiz - Pack 389
// Jonathan Creek - Series 4 (2003-2004), six episodes
// IDs: tv_20960 onwards. Complete WordPad-ready CommonJS file.
'use strict';

const FIRST_ID = 20960;
const commonTags = ['television', 'British TV', 'BBC', 'Jonathan Creek', 'David Renwick', 'mystery drama'];

// Format: question | correct answer | three incorrect answers | difficulty | seven specific tags.
const rows = [
  // 1. The Coonskin Cap (1 March 2003)
  `Which television programme does Carla present in The Coonskin Cap?|Eyes and Ears|Crime File|The Witness Box|Murder Tonight|Easy|2003|series 4|The Coonskin Cap|Carla Borrego|Eyes and Ears|crime reconstructions|television presenter`,
  `Who is Carla's husband when she and Jonathan meet again in The Coonskin Cap?|Brendan Baxter|Adam Klaus|Ted Parnevik|Gary Basco|Easy|2003|series 4|The Coonskin Cap|Brendan Baxter|Carla Borrego|marriage|television producer`,
  `Which actor makes his first appearance as Brendan Baxter in The Coonskin Cap?|Adrian Edmondson|Jack Dee|Bill Bailey|Stuart Milligan|Easy|2003|series 4|The Coonskin Cap|Adrian Edmondson|Brendan Baxter|guest actor|first appearance`,
  `Which senior police officer is involved in the investigation in The Coonskin Cap?|Ted Parnevik|Adrian Fell|Gideon Pryke|Nathan Gallo|Medium|2003|series 4|The Coonskin Cap|Ted Parnevik|police superintendent|Terence Hillyer|murder investigation`,
  `What kind of hat gives the serial killer in The Coonskin Cap his nickname?|A Davy Crockett-style cap|A black bowler hat|A peaked police cap|A red fez|Easy|2003|series 4|The Coonskin Cap|Davy Crockett|coonskin cap|killer disguise|distinctive shadow`,
  `What links the names of the early murder victims in The Coonskin Cap?|They are named after flowers|They share a surname|They are named after towns|They have the same initials|Medium|2003|series 4|The Coonskin Cap|flower names|Rose McLeary|Iris West|serial killings`,
  `What weapon is used to strangle the women in The Coonskin Cap?|Thin steel wire|A length of silk ribbon|A leather belt|A telephone cord|Medium|2003|series 4|The Coonskin Cap|strangulation|steel wire|serial killer|victims`,
  `What is Sergeant Heather Davey doing when shots are fired during The Coonskin Cap?|Taking part in a murder reconstruction|Interviewing a prisoner|Patrolling a railway station|Guarding a hospital ward|Medium|2003|series 4|The Coonskin Cap|Heather Davey|Anna Wilson-Jones|murder reconstruction|gunshots`,
  `What is found in the locked room from which the gunman apparently vanished?|A gun by an open window|An abandoned uniform|A snapped necklace|A bloody knife|Medium|2003|series 4|The Coonskin Cap|locked room|gun by window|apparent escape|police reconstruction`,
  `Where is Sergeant Heather Davey apparently killed without anyone escaping the room?|In a school gymnasium|Inside a television studio|In a hotel lift|In a police interview room|Easy|2003|series 4|The Coonskin Cap|Heather Davey|school gymnasium|locked-room murder|vaulting horse`,
  `Who is revealed to be the killer behind the original coonskin-cap attacks?|Moira Jane Rowe|Heather Davey|Carla Borrego|Coral|Hard|2003|series 4|The Coonskin Cap|Moira Jane Rowe|serial killer|coonskin shadow|Carla attacked`,
  `What clue helps Jonathan recognise the supposed coonskin-hat shadow as misleading?|The suspect's curly hair can be tied back|The hat is found in a police locker|The shadow points the wrong way|A feather falls from the hat|Hard|2003|series 4|The Coonskin Cap|Moira Jane Rowe|curly hair|hair band|shadow silhouette`,
  `Who is actually responsible for Heather Davey's death in the gym?|Superintendent Ted Parnevik|Moira Jane Rowe|Gary Basco|Brendan Baxter|Hard|2003|series 4|The Coonskin Cap|Ted Parnevik|Heather Davey|real murderer|jealousy`,
  `What apparatus is adapted to suffocate Heather Davey without an intruder entering the gym?|An inflatable jacket|A retractable stage wire|A compressed-air dart gun|An oxygen mask|Hard|2003|series 4|The Coonskin Cap|inflatable jacket|Heather Davey|suffocation device|Parnevik`,
  `What ordinary medical device gives Jonathan the principle behind the inflatable-jacket trick?|A blood-pressure monitor|A thermometer|An inhaler|An insulin pump|Hard|2003|series 4|The Coonskin Cap|blood pressure cuff|inflation mechanism|buzzing sound|Jonathan deduction`,
  `Which famous painting helps Jonathan reconsider the meaning of Heather Davey's final words?|The Scream|The Hay Wain|The Night Watch|The Kiss|Medium|2003|series 4|The Coonskin Cap|The Scream|Edvard Munch|different perspective|last words`,
  `What small physical clue suggests that a man previously wore the jacket used in the gym killing?|Blood spots on its collar|Lipstick on its sleeve|A missing button|Perfume on the lining|Hard|2003|series 4|The Coonskin Cap|shaving cut|blood spots|jacket collar|killer identification`,
  `Which performer does Adam Klaus hire after a television stunt attracts attention in The Coonskin Cap?|Streaker Gary Basco|Ventriloquist Henry Houseman|Magician Kenny Starkiss|Singer Sally Ellen Oakley|Medium|2003|series 4|The Coonskin Cap|Adam Klaus|Gary Basco|streaker|publicity stunt`,

  // 2. Angel Hair (8 March 2003)
  `Which composer asks Jonathan to investigate the baffling hair mystery in Angel Hair?|Dudley Houseman|Marco Bergman|Justin Mallory|Owen Glendower|Easy|2003|series 4|Angel Hair|Dudley Houseman|composer|Jack Dee|hair mystery`,
  `Which actor plays Dudley Houseman in Angel Hair?|Jack Dee|Bill Bailey|Adrian Edmondson|Michael Brandon|Easy|2003|series 4|Angel Hair|Jack Dee|Dudley Houseman|guest actor|composer`,
  `Who is Dudley Houseman's pop-star wife in Angel Hair?|Sally Ellen Oakley|Maria|Dorothy Moon|Pam|Easy|2003|series 4|Angel Hair|Sally Ellen Oakley|Caroline Carver|pop singer|marriage`,
  `Who is Dudley's devoted personal assistant in Angel Hair?|Dorothy Moon|Carla Borrego|Pam|Mavis|Medium|2003|series 4|Angel Hair|Dorothy Moon|Sophie Thompson|personal assistant|marriage rescue`,
  `What is Maria's profession in Angel Hair?|Air hostess|Make-up artist|Music journalist|Ventriloquist|Medium|2003|series 4|Angel Hair|Maria|air hostess|Dudley affair|kidnap hoax`,
  `What startling change in Maria's appearance troubles Dudley in Angel Hair?|Her cut hair seems to regrow in 48 hours|Her eyes change colour overnight|A scar on her face disappears|She becomes completely bald in her sleep|Easy|2003|series 4|Angel Hair|Maria|hair regrowth|48 hours|apparent impossibility`,
  `How much money do the supposed kidnappers demand in Angel Hair?|£100,000|£10,000|£250,000|£1 million|Medium|2003|series 4|Angel Hair|ransom demand|£100000|Maria|kidnap video`,
  `What publication do the supposed kidnappers show to establish the video's date?|Radio Times|TV Times|The Guardian|NME|Medium|2003|series 4|Angel Hair|Radio Times|ransom video|date evidence|Maria`,
  `Why does a sheet cover Maria during most of the supposed kidnapping video?|To conceal that she is still wearing the clothes she left in|To keep the cut hair away from the floor|To hide a second actress wearing a wig|To protect her from studio lights|Hard|2003|series 4|Angel Hair|Maria|sheet disguise|same clothes|fake kidnapping`,
  `What is the central trick that makes the supposed earlier kidnapping recording seem impossible?|The video is recorded from a live feed while the family watches|The footage is played backwards|The kidnappers replace Maria with her twin|The entire recording is computer-generated|Hard|2003|series 4|Angel Hair|live video feed|Dorothy Moon|recording trick|kidnap deception`,
  `What does Dorothy conceal on the video recorder to disguise what is happening?|The red recording light|The cassette label|The remote-control sensor|The clock display|Hard|2003|series 4|Angel Hair|Dorothy Moon|black tape|red recording light|live transmission`,
  `Why does Dorothy help organise the kidnapping deception in Angel Hair?|To end Dudley's affair and save his marriage|To steal Sally's record royalties|To blackmail the show's producer|To secure a stage-magic contract|Hard|2003|series 4|Angel Hair|Dorothy Moon|marriage rescue|Dudley and Sally|fake ransom`,
  `Who manufactures the huge ventriloquist's dummy delivered to Jonathan's windmill?|Henry Houseman|Kenny Starkiss|Adam Klaus|Brendan Baxter|Medium|2003|series 4|Angel Hair|Henry Houseman|puppet maker|giant dummy|windmill`,
  `What misunderstanding produces an absurdly oversized puppet in Angel Hair?|Twelve feet is mistaken for twelve spare feet|Inches are confused with centimetres|A stage plan is read upside down|A child-sized model is scaled for cinema|Medium|2003|series 4|Angel Hair|twelve feet|spare dummy feet|Henry Houseman|misheard instructions`,
  `Who develops an awkward attachment to Jonathan while working on his television appearance?|Pam the make-up artist|Dorothy Moon|Maria|Sally Ellen Oakley|Medium|2003|series 4|Angel Hair|Pam|Tamsin Greig|make-up artist|Jonathan romance`,
  `Which bereavement makes Carla question Pam's interest in Jonathan?|The death of Pam's dog|The death of Pam's husband|The loss of Pam's pet parrot|The death of Pam's mother|Medium|2003|series 4|Angel Hair|Pam|pet dog|rebound relationship|Carla suspicion`,
  `Where does Carla hide after arriving unexpectedly while Jonathan is with Pam?|Inside an Egyptian mummy case|Under the windmill stairs|In a wardrobe of costumes|Behind a stage curtain|Medium|2003|series 4|Angel Hair|Carla Borrego|mummy case|windmill|Pam and Jonathan`,
  `Which profession does Sally's assistant Angus actually pursue on stage?|Musical theatre performer|Television cameraman|Professional wrestler|Stand-up comedian|Medium|2003|series 4|Angel Hair|Angus|Chicago musical|stage performer|mistaken affair suspicion`,

  // 3. The Tailor's Dummy (15 March 2003)
  `Which fashion designer dies after a devastating newspaper review in The Tailor's Dummy?|Marco Bergman|Claude Bergman|Kenny Starkiss|Dudley Houseman|Easy|2003|series 4|The Tailor's Dummy|Marco Bergman|fashion designer|apparent suicide|critical article`,
  `Who writes the damaging article about Marco Bergman in The Tailor's Dummy?|Donna Henry|Carla Borrego|Carrie Bergman|Dorothy Moon|Easy|2003|series 4|The Tailor's Dummy|Donna Henry|journalist|hostile review|Marco Bergman`,
  `Which actress plays Marco Bergman's daughter Louise in The Tailor's Dummy?|Maureen Lipman|Sophie Thompson|Julia Sawalha|Lorelei King|Medium|2003|series 4|The Tailor's Dummy|Maureen Lipman|Louise Bergman|guest actress|fashion family`,
  `What is the name of Marco Bergman's son in The Tailor's Dummy?|Claude|Kenny|Dudley|Brendan|Medium|2003|series 4|The Tailor's Dummy|Claude Bergman|Nicholas Jones|Marco Bergman|fashion family`,
  `Which young art student visits the Bergman home in The Tailor's Dummy?|Carrie Bergman|Jessica Fell|Gillian Bailey|Sally Ellen Oakley|Medium|2003|series 4|The Tailor's Dummy|Carrie Bergman|Victoria Shalet|art student|family visit`,
  `What animal does Marco throw from his upstairs window just before his own fatal fall?|His pet parrot Harvey|His pet cat Oscar|His dog Nelson|A caged budgerigar Percy|Medium|2003|series 4|The Tailor's Dummy|Harvey parrot|Marco Bergman|window fall|apparent rescue`,
  `Which comedian plays street magician Kenny Starkiss in The Tailor's Dummy?|Bill Bailey|Jack Dee|Adrian Edmondson|Griff Rhys Jones|Easy|2003|series 4|The Tailor's Dummy|Bill Bailey|Kenny Starkiss|street magician|guest star`,
  `What is Kenny Starkiss's spectacularly unconvincing street illusion supposed to demonstrate?|Teleportation between two pods|Levitation above a bridge|Passing through a solid brick wall|Mind reading with playing cards|Medium|2003|series 4|The Tailor's Dummy|Kenny Starkiss|teleportation pods|street magic|lookalike performer`,
  `Where is journalist Donna Henry attacked by a masked intruder?|In a hotel room|In a television studio|In a fashion showroom|In a train compartment|Medium|2003|series 4|The Tailor's Dummy|Donna Henry|hotel room|masked attacker|Claude Bergman`,
  `What causes the masked intruder to lift his disguise briefly while threatening Donna?|Sneezing because of flowers|A fire alarm sounding|A broken mask strap|A phone ringing in his pocket|Medium|2003|series 4|The Tailor's Dummy|Donna Henry|sneezing|flowers|masked intruder`,
  `How does Donna apparently see Claude Bergman's face during the attack?|A mirror image is manipulated|She sees him on a security monitor|His mask falls to the floor|A window reflects his passport photograph|Hard|2003|series 4|The Tailor's Dummy|Donna Henry|mirror deception|Claude Bergman|false identification`,
  `What disability had Marco Bergman secretly developed before his death?|Blindness|Deafness|Paralysis of one arm|Inability to speak|Hard|2003|series 4|The Tailor's Dummy|Marco Bergman|blindness|hidden disability|murder solution`,
  `Which American president's concealed physical disability helps Jonathan make a key deduction?|Franklin D. Roosevelt|John F. Kennedy|Harry S. Truman|Dwight D. Eisenhower|Hard|2003|series 4|The Tailor's Dummy|Franklin Roosevelt|hidden disability|Jonathan deduction|Marco Bergman`,
  `What sensation is faked to terrify the blind Marco into jumping from his window?|A fire raging around him|Floodwater rising in his bedroom|The floor collapsing beneath him|An approaching swarm of bees|Hard|2003|series 4|The Tailor's Dummy|Marco Bergman|fear of fire|sound effects|forced jump`,
  `Who engineers Marco Bergman's death in The Tailor's Dummy?|Louise Bergman|Claude Bergman|Donna Henry|Kenny Starkiss|Hard|2003|series 4|The Tailor's Dummy|Louise Bergman|premeditated murder|fake fire|family resentment`,
  `What device is used to create the frightening sounds that mislead Marco?|A timed sound-effects recording|A hidden gas burner|A faulty smoke alarm|An electrical transformer|Hard|2003|series 4|The Tailor's Dummy|timer|sound effects CD|Louise Bergman|fake fire`,
  `What medicine does Louise withhold when Carrie discovers evidence of the crime?|Insulin|Asthma inhaler|Antibiotics|Heart tablets|Medium|2003|series 4|The Tailor's Dummy|Carrie Bergman|diabetes|insulin|attempted murder`,
  `What is the new lie-detector television format Brendan is developing for Carla?|Guilty Secrets|Eyes and Ears|The Chequered Box|The Last Word|Medium|2003|series 4|The Tailor's Dummy|Guilty Secrets|Carla Borrego|Brendan Baxter|lie detector programme`,

  // 4. The Seer of the Sands (14 February 2004)
  `What was Justin Mallory's work before his death in The Seer of the Sands?|Exposing fraudulent paranormal claims|Running a television news channel|Restoring antique paintings|Investigating insurance fraud|Easy|2004|series 4|The Seer of the Sands|Justin Mallory|ghost hunter|paranormal sceptic|fraud exposure`,
  `How does Justin Mallory apparently die in The Seer of the Sands?|In a boating accident|In a house fire|In a fall from a cliff|In a plane crash|Easy|2004|series 4|The Seer of the Sands|Justin Mallory|boat crash|coastal mystery|missing body`,
  `Which American executive was secretly in a relationship with Justin Mallory?|Geraldine Vaccaro|Ashley Farr|Marion Crespo|Hattie Baron|Medium|2004|series 4|The Seer of the Sands|Geraldine Vaccaro|Lorelei King|Justin Mallory|secret affair`,
  `What does Geraldine's husband Rex do for a living in The Seer of the Sands?|US congressman|Hollywood producer|Police commissioner|University professor|Medium|2004|series 4|The Seer of the Sands|Rex|Geraldine Vaccaro|US congressman|divorce`,
  `What seemingly positive news does Geraldine send Justin shortly before his fatal boat trip?|Her husband may finally agree to a divorce|She has won a new film contract|Her employer has promoted Justin|She has bought a house in England|Medium|2004|series 4|The Seer of the Sands|Geraldine Vaccaro|fax message|divorce|boat crash`,
  `What small natural intruder changes how Justin reads Geraldine's fax?|A harvest fly|A spider|A wasp|A moth|Hard|2004|series 4|The Seer of the Sands|harvest fly|fax|misread punctuation|death explanation`,
  `Which tiny punctuation mark is mistakenly created on Geraldine's fax?|A comma|A full stop|A question mark|An apostrophe|Hard|2004|series 4|The Seer of the Sands|comma|harvest fly|fax misunderstanding|Jonathan solution`,
  `Where do the supposed spirit messages answering Geraldine's questions appear?|In a bottle buried beneath the sand|On a fogged-up mirror|Inside a sealed coffin|Under a hotel pillow|Easy|2004|series 4|The Seer of the Sands|message in bottle|beach|five questions|spirit hoax`,
  `How many questions does the medium ask Geraldine to direct to Justin's spirit?|Five|Three|Seven|Nine|Medium|2004|series 4|The Seer of the Sands|five questions|Geraldine Vaccaro|beach medium|message in bottle`,
  `How are answers secretly delivered into the prepared bottle in The Seer of the Sands?|A concealed hose-and-cable arrangement|Invisible ink appearing with heat|A remote-controlled burrowing robot|A secret compartment in a rock|Hard|2004|series 4|The Seer of the Sands|hosepipe|hidden cable|radio link|fraudulent medium`,
  `Which businesswoman's contract award is the real target of the false spirit messages?|Geraldine Vaccaro|Carla Borrego|Ashley Farr|Phylicia|Hard|2004|series 4|The Seer of the Sands|Geraldine Vaccaro|corporate contract|business influence|spirit manipulation`,
  `Which bidder do the fake spirit messages try to steer Geraldine towards?|Pacific Union|General and Western|Tri-State Aeronautics|United Pictures|Hard|2004|series 4|The Seer of the Sands|Pacific Union|General and Western|tender bid|fake prophecy`,
  `What is the name of the Las Vegas mentalist connected with the spiritualist fraud?|Leo Jorgensen|Mickey Daniels|Justin Mallory|Josef Chelyabinski|Medium|2004|series 4|The Seer of the Sands|Leo Jorgensen|Las Vegas mentalist|organised con|fake psychics`,
  `How does Jonathan show Geraldine that her secret codeword can be discovered without a ghost?|He searches a dictionary and places the word in her teacup|He uncovers a coded radio transmission|He reads a letter from Justin's solicitor|He finds the word painted under the boat|Hard|2004|series 4|The Seer of the Sands|secret codeword|dictionary|teacup|Jonathan demonstration`,
  `Who worked closely with Justin and has an unsettling attachment to him in The Seer of the Sands?|Ashley Farr|Andonea Bellacci|Phylicia|Carla Borrego|Medium|2004|series 4|The Seer of the Sands|Ashley Farr|Catherine Cusack|Justin Mallory|assistant`,
  `Why is the recurring smear on a framed photograph important in Justin's house?|A photograph is being turned to conceal a relationship|It identifies a fingerprint left by the medium|It shows the boat was photographed at night|It proves a window was smashed|Hard|2004|series 4|The Seer of the Sands|picture frame|smear on glass|Ashley Farr|secret relationship`,
  `What role does Josef Chelyabinski take in Adam Klaus's life in The Seer of the Sands?|Personal bodyguard|Tour accountant|New illusion designer|Show compere|Medium|2004|series 4|The Seer of the Sands|Josef Chelyabinski|Adam Klaus|bodyguard|security`,
  `What dangerous animal is at the centre of a stage illusion Adam is developing in The Seer of the Sands?|A python|A crocodile|A tiger|A scorpion|Medium|2004|series 4|The Seer of the Sands|Adam Klaus|python snake|stage illusion|health and safety`,

  // 5. The Chequered Box (21 February 2004)
  `Which detective is profiled by Carla's programme in The Chequered Box?|Adrian Fell|Ted Parnevik|Gideon Pryke|Frank Candy|Easy|2004|series 4|The Chequered Box|Adrian Fell|detective inspector|Eyes and Ears|police profile`,
  `Which retired bookmaker dies in an apparently sealed bedroom in The Chequered Box?|Maurice Rumpole|Derek Crozier|Patrick MacDonald|Jason Lee|Medium|2004|series 4|The Chequered Box|Maurice Rumpole|retired bookmaker|locked bedroom|false natural death`,
  `What sleeping disorder appears to account for Maurice Rumpole's death?|Sleep apnoea|Narcolepsy|Sleepwalking|Insomnia|Medium|2004|series 4|The Chequered Box|Maurice Rumpole|sleep apnoea|misleading diagnosis|locked room`,
  `Which objects are sewn into the pyjamas in the suspicious death at the start of The Chequered Box?|Walnuts|Marbles|Steel buttons|Coins|Medium|2004|series 4|The Chequered Box|walnuts|pyjamas|sleep apnoea|planted evidence`,
  `Why are the walnuts supposedly sewn into the nightclothes?|To discourage sleeping flat on the back|To sound an alarm when the sleeper moves|To indicate a secret pocket|To prevent a rash from spreading|Hard|2004|series 4|The Chequered Box|walnuts|sleeping position|apnoea treatment|deception`,
  `What suggests the walnuts were part of a poorly planned deception?|They are sewn too low to keep the sleeper on his side|They are made of painted plastic|There are identical walnuts on a windowsill|The pyjamas have never been worn|Hard|2004|series 4|The Chequered Box|walnut position|Maurice Rumpole|murder clue|Jonathan experiment`,
  `What is the name of the solicitor found hanged in her office in The Chequered Box?|Marion Crespo|Donna Henry|Geraldine Vaccaro|Hattie Baron|Easy|2004|series 4|The Chequered Box|Marion Crespo|solicitor|office hanging|murder victim`,
  `Which everyday object causes Jonathan to question Adrian Fell's apparent guilt?|A piece of chewing gum|A broken pencil|A blue paperclip|A used teabag|Easy|2004|series 4|The Chequered Box|chewing gum|plant pots|crime scene|false evidence`,
  `Where is Fell's discarded gum found, despite his memory of a different location?|In a potted plant by the door|In the solicitor's handbag|Under the desk telephone|Behind a picture frame|Medium|2004|series 4|The Chequered Box|Adrian Fell|chewing gum|potted palm|scene discrepancy`,
  `What trick explains how Fell could be present without seeing the hanging body?|A temporary partition hides part of the room|A mirror shows him a false reflection|The body is concealed in a lift|A hidden screen displays prerecorded footage|Hard|2004|series 4|The Chequered Box|temporary partition|Marion Crespo|framed detective|false perspective`,
  `Who was the former protected witness found living as Maurice Rumpole?|Derek Crozier|Patrick MacDonald|Jason Lee|Herbie Bryant|Hard|2004|series 4|The Chequered Box|Derek Crozier|Maurice Rumpole|witness protection|changed identity`,
  `Which criminal engineers revenge against a witness, a solicitor and a detective in The Chequered Box?|Patrick MacDonald|Adrian Fell|Brendan Baxter|Maurice Rumpole|Hard|2004|series 4|The Chequered Box|Patrick MacDonald|revenge plot|Marion Crespo|frame-up`,
  `What evidence is used to make Adrian Fell appear responsible for the solicitor's murder?|Photographs from a building opposite|A recorded confession on a tape|A bloodstained police uniform|An anonymous fingerprint on a gun|Medium|2004|series 4|The Chequered Box|Hattie Baron|tabloid photographs|Adrian Fell|framed murder`,
  `What is Adrian Fell's daughter's first name in The Chequered Box?|Jessica|Gillian|Carrie|Heather|Medium|2004|series 4|The Chequered Box|Jessica Fell|Adrian Fell|daughter|drug history`,
  `What kind of allegations are used to lure Fell to Marion Crespo's office?|His daughter's involvement in drug dealing|His wife's fraudulent insurance claim|A stolen police pension|His son's gambling debts|Medium|2004|series 4|The Chequered Box|Jessica Fell|drug accusations|Marion Crespo|lure letter`,
  `Who is the mysterious Mr G in Adrian Fell's private agreement?|God|A gangster named Gibbons|Geraldine Vaccaro|A police informant called Gordon|Hard|2004|series 4|The Chequered Box|Mr G|Adrian Fell|Christian faith|chequered box`,
  `What endurance publicity stunt does Adam Klaus attempt in The Chequered Box?|Being buried underground|Living in a glass box above the Thames|Walking barefoot across hot coals|Escaping from a frozen lake|Medium|2004|series 4|The Chequered Box|Adam Klaus|underground burial|endurance stunt|publicity`,
  `How is the apparently locked bedroom door in the Rumpole case believed to have been secured from outside?|Bolts pulled with treated twine that burns away|A hidden magnet operated from the street|A sliding metal plate inside the door|A duplicate key hidden in the bed|Hard|2004|series 4|The Chequered Box|door bolts|paraffin twine|locked room|Rumpole murder`,

  // 6. Gorgons Wood (28 February 2004)
  `What precious object vanishes from the museum in Gorgons Wood?|A porcelain figure of Sikoto-no|An Egyptian gold mask|A jade dragon carving|A medieval silver chalice|Easy|2004|series 4|Gorgons Wood|Sikoto-no|porcelain figurine|museum theft|Japanese artefact`,
  `Which famous profession has made the stolen figurine's owner Owen Glendower wealthy?|Celebrity chef|Film director|Football manager|Auctioneer|Medium|2004|series 4|Gorgons Wood|Owen Glendower|celebrity chef|figurine owner|television cooking`,
  `Who manages the museum connected with the missing porcelain figure?|Thelma Bailey|Gillian Bailey|Carla Borrego|Dawn|Medium|2004|series 4|Gorgons Wood|Thelma Bailey|museum manager|statue disappearance|family feud`,
  `What is the name of Thelma Bailey's daughter in Gorgons Wood?|Gillian|Carrie|Jessica|Dorothy|Medium|2004|series 4|Gorgons Wood|Gillian Bailey|Thelma Bailey|museum employee|theft accomplice`,
  `What is unusual about the museum manager's behaviour immediately before the statue disappears?|She closes her eyes to meditate|She faints during an alarm|She turns off all the lights|She falls asleep inside a locked cupboard|Medium|2004|series 4|Gorgons Wood|Thelma Bailey|meditation|Sikoto-no|vanishing trick`,
  `What strange physical reaction does Thelma experience after the figurine vanishes?|Severe swelling and a facial rash|Temporary deafness|A paralysed hand|Sudden blindness|Medium|2004|series 4|Gorgons Wood|Thelma Bailey|facial swelling|allergic reaction|edible decoy`,
  `What is the surprising material used to create the replica statue?|Edible candy shells|Plaster of Paris|Hardened candle wax|Clear glass|Hard|2004|series 4|Gorgons Wood|edible replica|candy shells|Sikoto-no|museum trick`,
  `How does Thelma dispose of the substitute figure when it must appear to vanish?|She eats it|She flushes it down a sink|She drops it through a trapdoor|She hides it in her shoe|Hard|2004|series 4|Gorgons Wood|Thelma Bailey|eating statue|edible decoy|impossible disappearance`,
  `What detail helps Jonathan work out the statue's edible construction?|Its shell resembles the coating of a chocolate sweet|He notices wet plaster on the curator's sleeve|A mould is found in the museum roof|The statue leaves candle wax on the floor|Hard|2004|series 4|Gorgons Wood|M and M|candy coating|edible statue|Jonathan deduction`,
  `What is the secret family relationship between Thelma Bailey and Owen Glendower?|They are estranged siblings|They are former spouses|They are cousins by marriage|They are mother and son|Hard|2004|series 4|Gorgons Wood|Thelma Bailey|Owen Glendower|estranged siblings|family rivalry`,
  `What was the celebrity chef's original name before becoming Owen Glendower?|Gordon Ogden|Gordon Bailey|Owen Priest|Gerald Eastland|Hard|2004|series 4|Gorgons Wood|Gordon Ogden|Owen Glendower|stage name|family history`,
  `Which feature of the woodland gives Gorgons Wood its distinctive name?|Faces carved into a beech tree|An ancient stone circle|A ruined chapel with gargoyles|A waterfall shaped like a snake|Medium|2004|series 4|Gorgons Wood|beech tree|carved faces|woodland landmark|place name`,
  `What historical names inspire Jonathan to question whether Owen Glendower is the chef's birth name?|Engelbert Humperdinck and Jethro Tull|William Shakespeare and Isaac Newton|Charles Darwin and Henry VIII|Florence Nightingale and Mary Seacole|Hard|2004|series 4|Gorgons Wood|Engelbert Humperdinck|Jethro Tull|historical names|celebrity pseudonym`,
  `Where does Gillian hide the genuine stolen porcelain figure after the museum deception?|In Gorgons Wood|Inside a television prop|In a locked hotel safe|Under the museum floor|Medium|2004|series 4|Gorgons Wood|Gillian Bailey|genuine statue|woodland hiding place|theft`,
  `What is the name of the disfigured woman whom Jonathan and Carla meet while searching for Gillian?|Dawn|Phylicia|Pam|Maria|Medium|2004|series 4|Gorgons Wood|Dawn|facial disfigurement|Gillian Bailey|mistaken identity`,
  `Why is Dawn initially mistaken for Gillian by another person?|The two women closely resemble each other|They wear identical stage costumes|They carry the same passport|They are identical twins|Hard|2004|series 4|Gorgons Wood|Dawn|Gillian Bailey|physical resemblance|identity deception`,
  `How does a camera's unusual position mislead observers of events in Gorgons Wood?|Its footage is rotated by 90 degrees|Its lens is covered by tinted glass|Its clock is six hours slow|Its microphone is switched off|Hard|2004|series 4|Gorgons Wood|camera orientation|90 degree rotation|woodland video|misinterpreted evidence`,
  `What grisly discovery finally confirms Gillian Bailey's fate in Gorgons Wood?|Her body is found hidden in a hollow log|She is found in a museum freezer|Her remains are discovered in a disused mine|She is found buried beneath the curator's house|Medium|2004|series 4|Gorgons Wood|Gillian Bailey|hollow log|murder victim|woodland discovery`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(value => value.trim());
  if (parts.length !== 13 || parts.some(value => !value)) {
    throw new Error(`Pack 389: invalid row ${index + 1}`);
  }
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 389: invalid difficulty at row ${index + 1}`);
  }
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(value => value.toLowerCase())).size !== 4) {
    throw new Error(`Pack 389: repeated answer at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length < 12) {
    throw new Error(`Pack 389: inadequate tags at row ${index + 1}`);
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
