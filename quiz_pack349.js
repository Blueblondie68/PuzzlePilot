
 // quiz_pack349.js — PuzzlePilot Bigggggg Quiz
 // Blackadder: all four original series (1983–1989) and key specials.
 // 105 questions with seven individually selected specialist tags.

 const facts = `
 Who plays the many incarnations of Edmund Blackadder?|Rowan Atkinson|Tony Robinson|Stephen Fry|Hugh Laurie|Easy|Edmund Blackadder|Rowan Atkinson|Lead Actor|Blackadder Dynasty|Historical Lead|BBC Sitcom|Character Casting
 Who plays Baldrick throughout the four original series?|Tony Robinson|Tim McInnerny|Rik Mayall|Brian Blessed|Easy|Baldrick|Tony Robinson|Servant Character|Recurring Cast|Four Series|Cunning Plan|Actor Identity
 Who co-created Blackadder with Rowan Atkinson?|Richard Curtis|Ben Elton|David Croft|John Sullivan|Easy|Richard Curtis|Rowan Atkinson|Series Creators|Original Concept|British Comedy Writer|Programme Origins|1983 Debut
 Who joined Richard Curtis as a writer from the second series onwards?|Ben Elton|John Lloyd|Howard Goodall|Terry Jones|Medium|Ben Elton|Richard Curtis|Writing Partnership|Second Series|Third Series|Fourth Series|Production Changes
 Who produced the original Blackadder sitcom?|John Lloyd|Peter Fincham|Graham Linehan|David Jason|Medium|John Lloyd|Television Producer|BBC Comedy|Original Production|Programme Credits|Historical Sitcom|Blackadder Development
 Who composed the distinctive music for the Blackadder television series?|Howard Goodall|Ronnie Hazlehurst|Mike Batt|Carl Davis|Medium|Howard Goodall|Theme Music|Original Score|Musical Credits|Sitcom Soundtrack|British Composer|Opening Titles
 In which year did the first series of Blackadder begin broadcasting?|1983|1979|1986|1991|Easy|1983 Premiere|BBC One|First Series|Television Debut|Broadcast Timeline|Historical Comedy|Original Run
 How many regular episodes make up the four original series of Blackadder?|Twenty-four|Eighteen|Twenty-six|Thirty|Medium|Twenty Four Episodes|Four Series|Six Episodes Each|Original Run|Episode Count|BBC Scheduling|Programme Format
 Which era provides the setting for Blackadder II?|Elizabethan England|Victorian England|The English Civil War|The First World War|Easy|Blackadder II|Elizabethan England|Queen Elizabeth I|Tudor Court|Historical Setting|1986 Series|Sixteenth Century
 In which historical period does Blackadder the Third take place?|The Regency era|The medieval period|The Restoration|The Edwardian era|Easy|Blackadder The Third|Regency Era|Prince Regent|Georgian Britain|1987 Series|Historical Setting|Court Politics
 Which conflict forms the backdrop to Blackadder Goes Forth?|The First World War|The Crimean War|The Napoleonic Wars|The Second World War|Easy|Blackadder Goes Forth|First World War|Western Front|1917 Setting|Trench Warfare|1989 Series|Military Comedy
 Which of the original four Blackadder series was broadcast last?|Blackadder Goes Forth|Blackadder II|The Black Adder|Blackadder the Third|Easy|Fourth Series|1989 Broadcast|Final Regular Run|Blackadder Goes Forth|Series Order|BBC Television|Chronology
 Which actor plays Lord Percy Percy in the first two series?|Tim McInnerny|Hugh Laurie|Stephen Fry|Robert East|Easy|Tim McInnerny|Lord Percy Percy|First Two Series|Recurring Character|Royal Court|Actor Casting|Blackadder Friends
 Which historical event sets the first episode of The Black Adder in motion?|The Battle of Bosworth Field|The Battle of Hastings|The Battle of Agincourt|The Battle of Bannockburn|Medium|Battle Of Bosworth Field|The Foretelling|1485|Medieval England|Opening Episode|Edmund Plantagenet|Battlefield Mistake
 Which royal relative does Edmund accidentally kill at Bosworth in the opening episode?|King Richard III|King Henry V|King Edward IV|King John|Medium|Richard III|The Foretelling|Accidental Beheading|Battle Of Bosworth|Royal Uncle|First Episode|Historical Spoof
 Who portrays King Richard III in the opening episode of The Black Adder?|Peter Cook|Brian Blessed|Rik Mayall|Stephen Fry|Medium|Peter Cook|Richard III|The Foretelling|Guest Actor|Battle Of Bosworth|Original Series|British Comedian
 Which title does Edmund hold in the first Blackadder series?|Duke of Edinburgh|Earl of Essex|Duke of Wellington|Archbishop of York|Easy|Edmund Plantagenet|Duke Of Edinburgh|First Series|Medieval Prince|Royal Family|1983 Character|Noble Rank
 Which actor plays Edmund's father King Richard IV?|Brian Blessed|Peter Cook|Robert East|Kenneth Connor|Easy|Brian Blessed|King Richard IV|Edmund Father|Royal Family|First Series Cast|Medieval Monarch|Casting
 Which member of the royal family is Edmund's more favoured brother?|Harry|George|Henry Tudor|Percy|Medium|Harry Prince Of Wales|Edmund Brother|Robert East|Royal Siblings|First Series|Succession|Family Rivalry
 Who plays Prince Harry in the original series?|Robert East|Tim McInnerny|Stephen Fry|Tom Baker|Medium|Robert East|Harry Prince Of Wales|Original Series|Edmund Brother|Royal Cast|Character Actor|Medieval Court
 Who plays the Queen in the original 1983 series?|Elspet Gray|Miranda Richardson|Patsy Byrne|Miriam Margolyes|Medium|Elspet Gray|Richard IV Queen|First Series|Royal Matriarch|1983 Casting|Medieval Court|Queen Consort
 Which seat of the Church is Edmund appointed to after a senior cleric is killed?|Archbishop of Canterbury|Bishop of Durham|Archbishop of York|Abbot of Westminster|Medium|The Archbishop|Archbishop Of Canterbury|Edmund Appointment|Clerical Politics|King Richard IV|1983 Episode|Church Office
 Which country supplies the princess chosen for Edmund's arranged marriage?|Spain|France|Portugal|Denmark|Medium|Queen Of Spain Beard|Spanish Infanta|Arranged Marriage|Medieval Diplomacy|Edmund Betrothal|First Series|Royal Alliance
 Who plays the Spanish Infanta Maria in the first series?|Miriam Margolyes|Miranda Richardson|Patsy Byrne|Helen Atkinson-Wood|Medium|Miriam Margolyes|Infanta Maria|Spanish Princess|First Series Guest|Arranged Marriage|Character Casting|Queen Of Spain Beard
 Which figure accuses Edmund of witchcraft during a plague scare?|The Witchsmeller Pursuivant|The Bishop of Bath and Wells|The Scarlet Pimpernel|The Duke of Wellington|Medium|Witchsmeller Pursuivant|Plague Scare|Witch Trial|Edmund Accused|First Series|Medieval Superstition|Court Enemy
 Who plays the Witchsmeller Pursuivant?|Frank Finlay|Robbie Coltrane|Tom Baker|Ronald Lacey|Hard|Frank Finlay|Witchsmeller Pursuivant|1983 Guest Star|Witch Trial|Plague|Episode Cast|Medieval Satire
 What does Edmund try to assemble after losing his status in the final episode of the first series?|A band of ruthless knights|A travelling theatre company|A fleet of merchant ships|A group of cathedral monks|Medium|The Black Seal|Edmund Revenge|Knights Gang|King Richard IV|1983 Finale|Seizing The Throne|Medieval Conspiracy
 Which Northumberland castle was used for location filming during the first series?|Alnwick Castle|Bamburgh Castle|Warwick Castle|Dover Castle|Hard|Alnwick Castle|Northumberland|Filming Location|First Series|Medieval Exterior|Production History|British Landmark
 Which actor plays Queen Elizabeth I in Blackadder II?|Miranda Richardson|Elspet Gray|Miriam Margolyes|Patsy Byrne|Easy|Miranda Richardson|Elizabeth I|Blackadder II|Tudor Queen|1986 Cast|Royal Role|Actor Casting
 What nickname is used for Queen Elizabeth I by her court in Blackadder II?|Queenie|Bessie|Lizzie|Her Majesty the Wise|Easy|Queenie|Elizabeth I|Miranda Richardson|Court Nickname|Tudor Comedy|Blackadder II|Royal Character
 Who plays the queen's adviser Lord Melchett in Blackadder II?|Stephen Fry|Tim McInnerny|Hugh Laurie|Brian Blessed|Easy|Stephen Fry|Lord Melchett|Elizabethan Adviser|Court Favourite|1986 Casting|Tudor Court|Royal Confidant
 What is the name of Elizabeth I's former nurse in Blackadder II?|Nursie|Mrs Miggins|Kate|Amy Hardwood|Easy|Nursie|Elizabeth I|Former Nurse|Patsy Byrne|Tudor Court|Court Household|Character Identity
 Who plays Nursie alongside Miranda Richardson in Blackadder II?|Patsy Byrne|Helen Atkinson-Wood|Gabrielle Glaister|Elspet Gray|Medium|Patsy Byrne|Nursie|Queen Elizabeth I|Blackadder II|Actress|Court Companion|Recurring Character
 What is the real name of the servant who disguises herself as a boy called Bob?|Kate|Amy|Mary|Elizabeth|Medium|Kate As Bob|Bells|Gender Disguise|Gabrielle Glaister|New Manservant|Romance|Blackadder II
 Who plays Kate, the servant who passes herself off as Bob?|Gabrielle Glaister|Miranda Richardson|Miriam Margolyes|Patsy Byrne|Medium|Gabrielle Glaister|Kate Bob|Bells|1986 Guest Actress|Gender Disguise|Romantic Story|Character Casting
 Which flamboyant adventurer interrupts Blackadder's wedding plans in Blackadder II?|Lord Flashheart|Sir Walter Raleigh|Prince Ludwig|Captain Rum|Medium|Lord Flashheart|Bells|Wedding Interruption|Rik Mayall|Swaggering Hero|Guest Character|Elizabethan Romance
 Who plays Lord Flashheart in his Elizabethan appearance?|Rik Mayall|Hugh Laurie|Robbie Coltrane|Tom Baker|Medium|Rik Mayall|Lord Flashheart|Bells|Elizabethan Guest|1986 Episode|Actor Casting|Flamboyant Character
 Which unpleasant royal job is Blackadder given in the episode about a bungled execution schedule?|Lord High Executioner|Master of the Horse|Keeper of the Privy Seal|Royal Astronomer|Medium|Head|Lord High Executioner|Elizabethan Court|Execution Schedule|Royal Appointment|1986 Episode|Grim Responsibility
 What does Edmund do to the execution timetable to gain more days off?|He moves some executions forward|He releases all the prisoners|He replaces prisoners with actors|He cancels the queen's orders|Medium|Head|Execution Timetable|Lord High Executioner|Time Saving|Blackadder Scheme|1986 Episode|Royal Justice
 Which explorer returns to Elizabeth I's court with tales of exotic discoveries?|Sir Walter Raleigh|Sir Francis Drake|James Cook|Sir John Hawkins|Medium|Sir Walter Raleigh|Potato|Elizabethan Explorer|Tudor Court|Overseas Voyages|Queen Favourite|Adventurer Rivalry
 What newly introduced vegetable impresses the court after Sir Walter Raleigh returns?|A potato|A tomato|A carrot|A turnip|Medium|Potato|Sir Walter Raleigh|New World Food|Court Discovery|Elizabethan Exploration|Tudor Cuisine|1986 Episode
 Who plays the grizzled Captain Rum when Edmund attempts a sea voyage?|Tom Baker|Peter Cook|Stephen Fry|Brian Blessed|Medium|Tom Baker|Captain Rum|Sea Voyage|Blackadder II|Potato Episode|Veteran Sailor|Guest Casting
 What does Edmund hope his own seafaring expedition will bring him?|Glory to rival Sir Walter Raleigh|A marriage to the Spanish Infanta|A new royal title from France|An appointment as Archbishop|Medium|Sea Expedition|Sir Walter Raleigh|Potato|Edmund Ambition|Tudor Adventure|Court Rivalry|New World Exploration
 Which churchman arrives to collect Edmund's large debt in Blackadder II?|The Bishop of Bath and Wells|The Archbishop of Canterbury|The Bishop of Winchester|The Dean of St Paul's|Medium|Money|Bishop Bath And Wells|Debt Collector|Elizabethan Cleric|Cashflow Problems|Blackadder Loan|1986 Episode
 How much does Edmund owe the Bishop of Bath and Wells?|One thousand pounds|One hundred pounds|Five thousand pounds|Ten thousand pounds|Hard|Bishop Bath And Wells|One Thousand Pounds|Money Episode|Debt Sum|Blackadder II|Royal Loans|Sixteenth Century Comedy
 Who plays the Bishop of Bath and Wells?|Ronald Lacey|Frank Finlay|Robbie Coltrane|Bill Wallis|Hard|Ronald Lacey|Bishop Bath And Wells|Money|Guest Actor|Debt Collector|Elizabethan Villain|Casting
 What contest does Edmund arrange with Melchett on the night of a family visit?|A drinking contest|A sword-fighting tournament|A spelling competition|A chess match|Medium|Beer|Drinking Contest|Lord Melchett|Family Visit|Elizabethan Party|Blackadder II|1986 Episode
 Which puritanical relatives come to discuss Edmund's inheritance?|Lord and Lady Whiteadder|Lord and Lady Percy|The Duke and Duchess of York|Sir and Lady Raleigh|Medium|Lord Whiteadder|Lady Whiteadder|Beer Episode|Puritan Relatives|Inheritance|Family Visit|Elizabethan Comedy
 Which actress plays Lady Whiteadder in Blackadder II?|Miriam Margolyes|Miranda Richardson|Elspet Gray|Helen Atkinson-Wood|Medium|Miriam Margolyes|Lady Whiteadder|Beer|Puritan Aunt|1986 Guest Actor|Family Dinner|Character Casting
 Which German master of disguise kidnaps Edmund and Melchett?|Prince Ludwig|Baron von Richthofen|Count Dracula|Prince Albert|Medium|Prince Ludwig|Chains|German Villain|Disguise|Kidnapping|Lord Melchett|1986 Finale
 Which actor portrays Prince Ludwig in Blackadder II?|Hugh Laurie|Rik Mayall|Tim McInnerny|Stephen Fry|Medium|Hugh Laurie|Prince Ludwig|Chains|Guest Character|German Impersonator|1986 Cast|Disguise Plot
 Who does Edmund serve in the Regency-era third series?|The Prince Regent|Queen Victoria|King Richard IV|Oliver Cromwell|Easy|Prince Regent|Blackadder The Third|Regency Court|Royal Butler|Edmund Employer|Hugh Laurie|1987 Series
 What job does Edmund hold in the Prince Regent's household?|Butler|Private secretary|Horse trainer|Royal physician|Easy|Blackadder The Third|Butler|Prince Regent|Regency Service|Employment|Royal Household|Edmund Role
 Which actor plays the Prince Regent in Blackadder the Third?|Hugh Laurie|Stephen Fry|Brian Blessed|Tim McInnerny|Easy|Hugh Laurie|Prince Regent|Regency Era|1987 Cast|Royal Character|Actor Casting|George
 Who plays the pie-shop owner Mrs Miggins in the third series?|Helen Atkinson-Wood|Patsy Byrne|Miranda Richardson|Gabrielle Glaister|Medium|Helen Atkinson Wood|Mrs Miggins|Pie Shop|Blackadder The Third|Recurring Cast|Regency Comedy|Actress
 Which politician threatens the Prince Regent's finances in the opening episode of the third series?|William Pitt the Younger|Robert Peel|Winston Churchill|Benjamin Disraeli|Medium|Pitt The Younger|Dish And Dishonesty|House Of Commons|Regency Politics|Prince Finances|Opposition|1987 Episode
 What election does Edmund attempt to rig to protect the Prince Regent?|A parliamentary by-election|A university chancellorship election|A mayoral election|A church synod ballot|Medium|Dish And Dishonesty|Rotten Borough|Rigged Election|House Of Commons|Baldrick Candidate|Political Satire|Regency Politics
 Who ends up being elected to Parliament through Edmund's plan?|Baldrick|Mrs Miggins|The Prince Regent|Dr Johnson|Medium|Dish And Dishonesty|Baldrick MP|Rigged By Election|Parliament|Political Scheme|Blackadder The Third|1987 Episode
 Which famous lexicographer visits the Prince Regent with a major literary project?|Dr Samuel Johnson|Noah Webster|Thomas Hardy|Charles Dickens|Medium|Samuel Johnson|Dictionary|Regency Writer|Ink And Incapability|Book Project|Prince Regent|Literary Figure
 Who plays Dr Samuel Johnson in the third series?|Robbie Coltrane|Rik Mayall|Hugh Laurie|Tom Baker|Medium|Robbie Coltrane|Samuel Johnson|Ink And Incapability|Guest Actor|Dictionary Writer|Literary Satire|1987 Cast
 What happens to the only copy of Dr Johnson's manuscript in the episode?|Baldrick burns it for fuel|Mrs Miggins sells it|The Prince spills ink over it|Blackadder drops it in the river|Medium|Ink And Incapability|Lost Dictionary|Baldrick|Fireplace|Accidental Destruction|Book Manuscript|1987 Story
 How does Blackadder attempt to replace Dr Johnson's ruined work?|He tries to compile a new dictionary|He buys an earlier encyclopaedia|He steals a printer's proof|He persuades Johnson to abandon it|Medium|Ink And Incapability|Dictionary Rewrite|Dr Samuel Johnson|Edmund Scheme|Book Recovery|Literary Comedy|Blackadder The Third
 Which masked rescuer of French aristocrats is celebrated in a third-series story?|The Scarlet Pimpernel|Robin Hood|The Three Musketeers|The Man in the Iron Mask|Medium|Scarlet Pimpernel|Nob And Nobility|French Revolution|Aristocrats Rescue|Regency Society|Secret Hero|Blackadder Rivalry
 Who plays Lord Smedley, associated with the Scarlet Pimpernel, in the third series?|Nigel Planer|Rik Mayall|Ben Elton|Simon Jones|Hard|Nigel Planer|Lord Smedley|Scarlet Pimpernel|Nob And Nobility|Guest Star|French Aristocrats|Secret Identity
 What profession supplies two tutors hired to train the Prince Regent to perform convincingly?|Acting|Fencing|Medicine|Painting|Medium|Sense And Senility|Acting Lessons|Prince Regent|Theatre|Royal Lessons|Regency Arts|1987 Episode
 Who plays the actress Amy Hardwood, courted as a potential bride for the Prince?|Miranda Richardson|Miriam Margolyes|Patsy Byrne|Gabrielle Glaister|Medium|Miranda Richardson|Amy Hardwood|Amy And Amiability|Marriage Plot|Cotton Magnate|Prince Regent|Guest Role
 What is the Prince Regent hoping to solve by marrying Amy Hardwood?|His shortage of money|A dispute with the navy|His inability to speak French|A quarrel with his mother|Medium|Amy And Amiability|Prince Regent Bankruptcy|Wealthy Marriage|Amy Hardwood|Cotton Fortune|Regency Plot|1987 Episode
 Which military hero threatens to duel the Prince after a scandal involving his nieces?|The Duke of Wellington|The Duke of Marlborough|Admiral Nelson|The Duke of York|Medium|Duel And Duality|Duke Of Wellington|Royal Scandal|Prince Regent|Family Honour|Duelling|1987 Finale
 Who plays the Duke of Wellington in the third-series finale?|Stephen Fry|Hugh Laurie|Rik Mayall|Brian Blessed|Medium|Stephen Fry|Duke Of Wellington|Duel And Duality|Regency Military Hero|Guest Performance|Final Episode|Historical Character
 Which flying service does Blackadder try to join as another escape from the trenches?|The Royal Flying Corps|The Royal Navy|The Royal Engineers|The Army Service Corps|Medium|Blackadder Goes Forth|Royal Flying Corps|Private Plane|Trench Escape|Military Branch|Lord Flashheart|1917 Setting
 What is Edmund's military rank throughout Blackadder Goes Forth?|Captain|Major|Lieutenant|Colonel|Easy|Captain Edmund Blackadder|British Army|First World War|Trench Officers|1989 Series|Military Rank|Western Front
 Who plays the well-meaning Lieutenant George in the fourth series?|Hugh Laurie|Rik Mayall|Tim McInnerny|Stephen Fry|Easy|Hugh Laurie|Lieutenant George|Blackadder Goes Forth|Trench Officer|1989 Cast|Regimental Friend|Actor Casting
 Who plays the pompous General Melchett during the First World War?|Stephen Fry|Brian Blessed|Hugh Laurie|Tim McInnerny|Easy|Stephen Fry|General Melchett|Blackadder Goes Forth|Army Command|1989 Cast|Senior Officer|Western Front
 Who plays Captain Kevin Darling, the general's staff officer?|Tim McInnerny|Tony Robinson|Rik Mayall|Rowan Atkinson|Medium|Tim McInnerny|Captain Darling|General Melchett|Staff Officer|Military Headquarters|1989 Cast|Recurring Rival
 What is Baldrick's rank in the Great War series?|Private|Corporal|Sergeant|Lieutenant|Easy|Private Baldrick|Blackadder Goes Forth|Army Servant|Rank|Trench Life|Western Front|Tony Robinson
 In which year is the fourth series primarily set?|1917|1914|1918|1923|Medium|1917|Blackadder Goes Forth|First World War|Western Front|Setting Date|Historical Timeline|Battlefield Comedy
 What artistic job does Blackadder seek in order to escape frontline duty?|Official war artist|Military photographer|Army bandleader|Regimental playwright|Medium|Captain Cook|War Artist|Captain Blackadder|Posting Escape|Drawing Skill|Army Appointment|1989 Premiere
 Whose drawing ability helps Edmund secure the war-artist role?|Lieutenant George's|Baldrick's|Captain Darling's|General Melchett's|Medium|Captain Cook|Lieutenant George|Drawing Talent|War Artist|Blackadder Plan|Frontline Escape|1989 Episode
 What kind of animal is Speckled Jim, whose death triggers a court-martial?|A pigeon|A dog|A horse|A parrot|Easy|Speckled Jim|General Melchett Pet|Pigeon|Corporal Punishment|Court Martial|Army Messenger|1989 Plot
 What has Blackadder done to Speckled Jim before learning whose pet it is?|Shot and eaten him|Trained him as a messenger|Sold him to a French farmer|Sent him to the German lines|Medium|Corporal Punishment|Speckled Jim|Pigeon Dinner|Melchett Pet|Court Martial|Captain Blackadder|Military Discipline
 Which punishment does Blackadder face after killing Speckled Jim?|Execution by firing squad|Ten days in the guardhouse|Reduction to private|Transfer to a naval ship|Medium|Corporal Punishment|Court Martial|Firing Squad|Pigeon Death|Blackadder Punishment|Military Justice|1989 Episode
 What type of performance does George give that delights General Melchett in the concert-party story?|A female impersonation|A magic act|A violin solo|A ventriloquist routine|Medium|Major Star|Georgina|Lieutenant George|Drag Performance|Troop Concert|General Melchett|Entertainment
 What name does George adopt for his female stage persona?|Georgina|Geraldine|Josephine|Victoria|Medium|Major Star|Georgina|Lieutenant George|Female Impersonation|Concert Party|Stage Character|1989 Story
 Which flamboyant aviator persuades Edmund that flying could get him out of the trenches?|Lord Flashheart|Captain Darling|Sir Walter Raleigh|Major Star|Medium|Private Plane|Lord Flashheart|Flying Corps|Trench Escape|Aviator|Rik Mayall|1989 Episode
 Which actor reprises Lord Flashheart as an air ace in the fourth series?|Rik Mayall|Hugh Laurie|Ben Elton|Robbie Coltrane|Medium|Rik Mayall|Lord Flashheart|Private Plane|Royal Flying Corps|Guest Return|Blackadder Goes Forth|Aviator Role
 Which German flying ace is portrayed by Adrian Edmondson?|Baron von Richthofen|Hermann Göring|Otto Lilienthal|Werner Voss|Hard|Adrian Edmondson|Baron Von Richthofen|Private Plane|German Flying Ace|Guest Character|First World War|Air Combat
 Where does Blackadder investigate suspected enemy espionage in the fourth series?|A nearby field hospital|A railway signal box|A French embassy|A naval dockyard|Medium|General Hospital|Spy Investigation|Military Hospital|Enemy Intelligence|Captain Blackadder|1989 Episode|Wartime Security
 Who plays Nurse Mary in the fourth series?|Miranda Richardson|Patsy Byrne|Miriam Margolyes|Gabrielle Glaister|Medium|Miranda Richardson|Nurse Mary|General Hospital|1989 Guest Actress|Field Hospital|Wartime Romance|Character Casting
 Who plays Field Marshal Haig, a senior officer Blackadder hopes can help him?|Geoffrey Palmer|Stephen Fry|Tim McInnerny|Brian Blessed|Hard|Geoffrey Palmer|Field Marshal Haig|Goodbyeee|Senior Commander|Guest Casting|Western Front|Final Episode
 What claim does Blackadder make in a last-ditch attempt to avoid going over the top?|That he is mentally unfit|That he has diplomatic immunity|That he has become a priest|That he is secretly a German citizen|Medium|Goodbyeee|Pretended Insanity|Frontline Escape|Final Offensive|1917|Captain Blackadder|Doomed Plan
 What visual image replaces the battlefield at the end of the final episode?|A field of poppies|A ruined castle|The Houses of Parliament|A harbour at sunrise|Easy|Goodbyeee|Poppy Field|Final Scene|War Remembrance|Trench Charge|Series Finale|Poignant Ending
 On what date did Blackadder Goes Forth's final episode first air?|2 November 1989|11 November 1988|28 September 1989|25 December 1990|Hard|2 November 1989|Goodbyeee Broadcast|Fourth Series Finale|BBC One|Original Airdate|Television History|End Of Series
 During which civil conflict is the special The Cavalier Years set?|The English Civil War|The Wars of the Roses|The Jacobite rising|The Hundred Years War|Medium|Cavalier Years|English Civil War|1648 Setting|Royalists|Roundheads|Comic Relief|Period Special
 Who plays King Charles I in The Cavalier Years?|Stephen Fry|Hugh Laurie|Brian Blessed|Peter Cook|Medium|Stephen Fry|Charles I|Cavalier Years|Royalist King|1648|Comic Relief|Guest Role
 Which parliamentary leader's forces threaten King Charles I in The Cavalier Years?|Oliver Cromwell|John Pym|Thomas Fairfax|Robert Walpole|Medium|Oliver Cromwell|Cavalier Years|Roundheads|Royalists|English Civil War|King Charles I|1648
 In Blackadder's Christmas Carol, what kind of man is Ebenezer Blackadder at the beginning?|Exceptionally kind and generous|Cruel and miserly|A boastful soldier|A wealthy highwayman|Easy|Ebenezer Blackadder|Christmas Carol|Kind Shopkeeper|Alternative Character|1988 Special|Festive Story|Personality Reversal
 What visitor convinces Ebenezer Blackadder to reconsider his goodness?|The Spirit of Christmas|The Ghost of Hamlet|The Scarlet Pimpernel|The Duke of Wellington|Medium|Christmas Carol|Spirit Of Christmas|Ebenezer|Moral Reversal|1988 Special|Supernatural Visitor|Festive Satire
 Who plays the Spirit of Christmas in Blackadder's Christmas Carol?|Robbie Coltrane|Rik Mayall|Stephen Fry|Tom Baker|Medium|Robbie Coltrane|Spirit Of Christmas|1988 Special|Festive Guest|Ebenezer Blackadder|Actor Role|Christmas Visitation
 Which actor portrayed King Charles II in the 1998 royal gala Blackadder sketch?|Stephen Fry|Brian Blessed|Hugh Laurie|Robbie Coltrane|Hard|Stephen Fry|King Charles II|Prince Of Wales Gala|1998 Special|Royal Birthday|Blackadder Sketch|Restoration King
 For which real royal birthday was the 1998 Blackadder gala sketch made?|The Prince of Wales's fiftieth|Queen Elizabeth II's eightieth|Prince William's eighteenth|Princess Anne's fortieth|Hard|1998 Gala|Prince Of Wales|50th Birthday|Royal Charity Show|Blackadder Sketch|ITV Special|Occasion
 What millennium attraction originally screened Blackadder: Back & Forth?|The Millennium Dome|The London Eye|The Eden Project|The British Museum|Medium|Back And Forth|Millennium Dome|Visitor Attraction|London|2000 Release|Special Screening|Millennium Celebration
 Which supposedly fake invention turns out to work in Blackadder: Back & Forth?|A time machine|A weather-changing machine|A flying submarine|An invisibility helmet|Easy|Back And Forth|Time Machine|Baldrick Invention|Millennium Party|Historical Travel|1999 Setting|Comedic Twist
 Which actor plays William Shakespeare in Blackadder: Back & Forth?|Colin Firth|Hugh Grant|Simon Russell Beale|Kenneth Branagh|Hard|Colin Firth|William Shakespeare|Back And Forth|Guest Star|Time Travel|Elizabethan Playwright|2000 Special
 Who portrays Robin Hood in Blackadder: Back & Forth?|Rik Mayall|Tony Robinson|Hugh Laurie|Stephen Fry|Medium|Rik Mayall|Robin Hood|Back And Forth|Time Travel Encounter|2000 Special|Guest Role|Legendary Outlaw
 Who portrays Napoleon in the Back & Forth time-travel adventure?|Simon Russell Beale|Stephen Fry|Robbie Coltrane|Tim McInnerny|Hard|Simon Russell Beale|Napoleon|Back And Forth|Guest Actor|French Emperor|Time Travel|2000 Special
 `;

 const FIRST_ID = 16899;
 const EXPECTED_COUNT = 105;

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
         `Pack 349: invalid fields at ${id} (${fields.length})`
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
         `Pack 349: invalid difficulty or tags at ${id}`
       );
     }

     const answers = [wrong1, wrong2, wrong3];

     if (
       new Set([correctAnswer, ...answers].map(normalise)).size !== 4
     ) {
       throw new Error(`Pack 349: duplicate answer at ${id}`);
     }

     answers.splice(index % 4, 0, correctAnswer);

     const tags = [...new Map([
       'Television',
       'British Television',
       'British Sitcom',
       'Historical Comedy',
       'BBC',
       'Blackadder',
       'Programme: Blackadder',
       ...specificTags,
       correctAnswer
     ].map(tag => [normalise(tag), tag])).values()];

     return {
       id,
       category: 'Television',
       programme: 'Blackadder',
       question,
       answers,
       correctAnswer,
       difficulty,
       tags,
       dailyEligible: true
     };
   });

 // Validate the actual exported objects.
 if (
   questions.length !== EXPECTED_COUNT ||
   questions[0].id !== `tv_${FIRST_ID}` ||
   questions[questions.length - 1].id !==
     `tv_${FIRST_ID + EXPECTED_COUNT - 1}`
 ) {
   throw new Error(
     `Pack 349: incorrect count or ID range (${questions.length})`
   );
 }

 const seenQuestions = new Set();

 for (let index = 0; index < questions.length; index++) {
   const q = questions[index];
   const key = normalise(q.question);

   if (
     q.id !== `tv_${FIRST_ID + index}` ||
     seenQuestions.has(key) ||
     q.category !== 'Television' ||
     q.programme !== 'Blackadder' ||
     q.answers.length !== 4 ||
     new Set(q.answers.map(normalise)).size !== 4 ||
     q.answers.filter(
       answer => answer === q.correctAnswer
     ).length !== 1 ||
     q.tags.length < 14 ||
     q.dailyEligible !== true
   ) {
     throw new Error(
       `Pack 349: exported-object failure at ${q.id}`
     );
   }

   seenQuestions.add(key);
 }

 module.exports = questions;
