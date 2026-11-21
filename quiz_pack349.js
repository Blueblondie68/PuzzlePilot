
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
// 21 November 2026: in-depth Blackadder episode-story audit.
// Preserve 105 original questions and IDs tv_16899–tv_17003 unchanged.
// New question stems name the programme and a particular series episode,
// with all 24 regular episodes and three principal specials represented.
const auditAdditions = [
  {
    "id": "tv_38358",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S1E1 The Foretelling), why does Edmund attack King Richard III on the battlefield at Bosworth?",
    "answers": [
      "He mistakes the king for someone stealing his horse",
      "He believes Richard is an enemy scout",
      "He thinks Richard has taken Percy's armour",
      "He confuses Richard with a French messenger"
    ],
    "correctAnswer": "He mistakes the king for someone stealing his horse",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S1E1 The Foretelling",
      "Series: S1",
      "Episode plot",
      "Story arc",
      "Correct: He mistakes the king for someone stealing his horse",
      "Source: https://www.blackadderhall.com/series/the-black-adder.html",
      "Edmund's mistake",
      "Bosworth",
      "Horse theft"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38359",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S1E1 The Foretelling), which future king does Edmund conceal in his room after the battle?",
    "answers": [
      "Charles I",
      "Henry Tudor",
      "George III",
      "Edward VI"
    ],
    "correctAnswer": "Henry Tudor",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S1E1 The Foretelling",
      "Series: S1",
      "Episode plot",
      "Story arc",
      "Correct: Henry Tudor",
      "Source: https://www.blackadderhall.com/series/the-black-adder.html",
      "Hidden prince",
      "Henry Tudor",
      "Royal succession"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38360",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S1E2 Born to Be King), what reward for his military service enrages Edmund when McAngus returns to court?",
    "answers": [
      "McAngus receives the title of Duke of Edinburgh",
      "McAngus becomes Archbishop of Canterbury",
      "Edmund's Scottish lands are given to McAngus",
      "McAngus is promised Edmund's inheritance outright"
    ],
    "correctAnswer": "Edmund's Scottish lands are given to McAngus",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S1E2 Born to Be King",
      "Series: S1",
      "Episode plot",
      "Story arc",
      "Correct: Edmund's Scottish lands are given to McAngus",
      "Source: https://www.blackadderhall.com/series/the-black-adder.html",
      "McAngus arrival",
      "Scottish estates",
      "Royal reward"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38361",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S1E2 Born to Be King), where is King Richard IV when Edmund begins scheming against his brother Harry?",
    "answers": [
      "At a diplomatic summit in Spain",
      "At the Battle of Agincourt",
      "On pilgrimage to Canterbury",
      "Away at the Crusades"
    ],
    "correctAnswer": "Away at the Crusades",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S1E2 Born to Be King",
      "Series: S1",
      "Episode plot",
      "Story arc",
      "Correct: Away at the Crusades",
      "Source: https://www.blackadderhall.com/series/the-black-adder.html",
      "Father away",
      "Crusades",
      "Edmund plotting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38362",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S1E2 Born to Be King), whose claim to the throne is actually undermined when Edmund studies McAngus's letters more closely?",
    "answers": [
      "Edmund's own",
      "Harry's",
      "The King's",
      "Henry Tudor's"
    ],
    "correctAnswer": "Edmund's own",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S1E2 Born to Be King",
      "Series: S1",
      "Episode plot",
      "Story arc",
      "Correct: Edmund's own",
      "Source: https://www.blackadderhall.com/series/the-black-adder.html",
      "Illegitimacy reversal",
      "Queen's letters",
      "Edmund"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38363",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S1E3 The Archbishop), why does Edmund originally want his brother Harry appointed Archbishop of Canterbury?",
    "answers": [
      "He wants Harry to become the next Pope",
      "The post is so dangerous that Harry may be killed",
      "He hopes Harry will leave to fight in France",
      "He thinks the job will make Harry richer than the king"
    ],
    "correctAnswer": "The post is so dangerous that Harry may be killed",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S1E3 The Archbishop",
      "Series: S1",
      "Episode plot",
      "Story arc",
      "Correct: The post is so dangerous that Harry may be killed",
      "Source: https://www.blackadderhall.com/series/the-black-adder.html",
      "Edmund schemes",
      "Dangerous clerical job",
      "Harry"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38364",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S1E3 The Archbishop), which two institutions are at odds over the property of deceased noblemen?",
    "answers": [
      "The universities and the army",
      "Parliament and the navy",
      "The Crown and the Church",
      "The courts and the guilds"
    ],
    "correctAnswer": "The Crown and the Church",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S1E3 The Archbishop",
      "Series: S1",
      "Episode plot",
      "Story arc",
      "Correct: The Crown and the Church",
      "Source: https://www.blackadderhall.com/series/the-black-adder.html",
      "Church estates",
      "Royal confiscation",
      "Power struggle"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38365",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S1E4 The Queen of Spain's Beard), what foreign-policy aim is behind Edmund's arranged marriage to a Spanish princess?",
    "answers": [
      "Negotiating a treaty with Scotland",
      "Ending a trade dispute with Portugal",
      "Acquiring colonies in the New World",
      "Securing an alliance that supports an invasion of France"
    ],
    "correctAnswer": "Securing an alliance that supports an invasion of France",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S1E4 The Queen of Spain's Beard",
      "Series: S1",
      "Episode plot",
      "Story arc",
      "Correct: Securing an alliance that supports an invasion of France",
      "Source: https://www.blackadderhall.com/series/the-black-adder.html",
      "Spanish alliance",
      "France invasion",
      "Marriage politics"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38366",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S1E4 The Queen of Spain's Beard), which interpreter is brought to court during the efforts to arrange the royal wedding?",
    "answers": [
      "Don Speekingleesh",
      "Captain Rum",
      "Lord McAngus",
      "The Witchsmeller Pursuivant"
    ],
    "correctAnswer": "Don Speekingleesh",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S1E4 The Queen of Spain's Beard",
      "Series: S1",
      "Episode plot",
      "Story arc",
      "Correct: Don Speekingleesh",
      "Source: https://www.blackadderhall.com/series/the-black-adder.html",
      "Spanish interpreter",
      "Diplomatic visit",
      "Royal betrothal"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38367",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S1E5 Witchsmeller Pursuivant), which deadly outbreak has made the king ill and helped provoke the search for witchcraft?",
    "answers": [
      "Smallpox",
      "The Black Death",
      "Cholera",
      "Typhus"
    ],
    "correctAnswer": "The Black Death",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S1E5 Witchsmeller Pursuivant",
      "Series: S1",
      "Episode plot",
      "Story arc",
      "Correct: The Black Death",
      "Source: https://www.blackadderhall.com/series/the-black-adder.html",
      "Plague scare",
      "King's illness",
      "Witch hunt"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38368",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S1E5 Witchsmeller Pursuivant), who face being burned at the stake alongside Edmund after the witchcraft accusations?",
    "answers": [
      "Harry and McAngus",
      "The Queen and Nursie",
      "Percy and Baldrick",
      "The Archbishop and Don Speekingleesh"
    ],
    "correctAnswer": "Percy and Baldrick",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S1E5 Witchsmeller Pursuivant",
      "Series: S1",
      "Episode plot",
      "Story arc",
      "Correct: Percy and Baldrick",
      "Source: https://www.blackadderhall.com/series/the-black-adder.html",
      "Witch trial",
      "Percy",
      "Baldrick"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38369",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S1E6 The Black Seal), what humiliating office does Edmund retain after his father strips him of his other titles?",
    "answers": [
      "Keeper of the King's Swans",
      "Royal Master of Horses",
      "Lord Chancellor of England",
      "Warden of the Royal Privies"
    ],
    "correctAnswer": "Warden of the Royal Privies",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S1E6 The Black Seal",
      "Series: S1",
      "Episode plot",
      "Story arc",
      "Correct: Warden of the Royal Privies",
      "Source: https://www.blackadderhall.com/series/the-black-adder.html",
      "Title stripped",
      "Royal privies",
      "Edmund's anger"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38370",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S1E6 The Black Seal), what accidentally kills the royal family in the medieval series finale?",
    "answers": [
      "Poisoned wine intended for Edmund's conspirators",
      "A fire set by the Witchsmeller",
      "An ambush at the gates of the castle",
      "A plague carried by the returning army"
    ],
    "correctAnswer": "Poisoned wine intended for Edmund's conspirators",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S1E6 The Black Seal",
      "Series: S1",
      "Episode plot",
      "Story arc",
      "Correct: Poisoned wine intended for Edmund's conspirators",
      "Source: https://www.blackadderhall.com/series/the-black-adder.html",
      "Poisoned wine",
      "Royal family",
      "Percy's mistake"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38371",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S2E1 Bells), why does the young woman Kate disguise herself as a male servant called Bob?",
    "answers": [
      "To escape an arranged marriage with Melchett",
      "To find paid employment",
      "To enter the army",
      "To become a sailor with Captain Rum"
    ],
    "correctAnswer": "To find paid employment",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S2E1 Bells",
      "Series: S2",
      "Episode plot",
      "Story arc",
      "Correct: To find paid employment",
      "Source: https://www.blackadderhall.com/series/blackadder-ii.html",
      "Kate disguise",
      "Household work",
      "Female servant"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38372",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S2E1 Bells), what happens to Edmund's proposed wedding after Lord Flashheart bursts in?",
    "answers": [
      "Queenie orders an immediate execution",
      "Baldrick takes the bride's place",
      "Flashheart carries off the intended bride",
      "Nursie cancels the ceremony"
    ],
    "correctAnswer": "Flashheart carries off the intended bride",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S2E1 Bells",
      "Series: S2",
      "Episode plot",
      "Story arc",
      "Correct: Flashheart carries off the intended bride",
      "Source: https://www.blackadderhall.com/series/blackadder-ii.html",
      "Wedding interrupted",
      "Flashheart",
      "Kate departs"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38373",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S2E2 Head), which nobleman is executed early and then unexpectedly pardoned by Queen Elizabeth?",
    "answers": [
      "Lord Percy",
      "Lord Melchett",
      "Lord Flashheart",
      "Lord Farrow"
    ],
    "correctAnswer": "Lord Farrow",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S2E2 Head",
      "Series: S2",
      "Episode plot",
      "Story arc",
      "Correct: Lord Farrow",
      "Source: https://www.blackadderhall.com/series/blackadder-ii.html",
      "Farrow pardon",
      "Wrong schedule",
      "Execution crisis"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38374",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S2E2 Head), why is Lady Farrow's request to visit her husband disastrous for Blackadder?",
    "answers": [
      "Her husband has already been executed",
      "She has brought a forged royal warrant",
      "She knows the executioner has fled England",
      "She discovers that Blackadder has sold his house"
    ],
    "correctAnswer": "Her husband has already been executed",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S2E2 Head",
      "Series: S2",
      "Episode plot",
      "Story arc",
      "Correct: Her husband has already been executed",
      "Source: https://www.blackadderhall.com/series/blackadder-ii.html",
      "Lady Farrow",
      "Queen's permission",
      "Secret execution"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38375",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S2E3 Potato), what physical disability makes the explorer Captain Rum an unlikely choice to guide Blackadder's voyage?",
    "answers": [
      "He cannot see",
      "He has no legs",
      "He is completely deaf",
      "He has lost both hands"
    ],
    "correctAnswer": "He has no legs",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S2E3 Potato",
      "Series: S2",
      "Episode plot",
      "Story arc",
      "Correct: He has no legs",
      "Source: https://www.blackadderhall.com/series/blackadder-ii.html",
      "Captain Rum",
      "Unlikely captain",
      "Lost legs"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38376",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S2E3 Potato), which dangerous maritime route is Blackadder supposed to explore to rival Raleigh?",
    "answers": [
      "Through the Northwest Passage",
      "Across the English Channel",
      "Around the Cape of Good Hope",
      "Up the River Thames"
    ],
    "correctAnswer": "Around the Cape of Good Hope",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S2E3 Potato",
      "Series: S2",
      "Episode plot",
      "Story arc",
      "Correct: Around the Cape of Good Hope",
      "Source: https://www.blackadderhall.com/series/blackadder-ii.html",
      "Voyage route",
      "Cape of Good Hope",
      "Exploration"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38377",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S2E4 Money), which religious banking organisation calls in Blackadder's debt?",
    "answers": [
      "The Knights Templar",
      "The Abbey of Westminster",
      "The Monks of St Dunstan",
      "The Black Monks of St Herod"
    ],
    "correctAnswer": "The Black Monks of St Herod",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S2E4 Money",
      "Series: S2",
      "Episode plot",
      "Story arc",
      "Correct: The Black Monks of St Herod",
      "Source: https://www.blackadderhall.com/series/blackadder-ii.html",
      "Black Monks",
      "Loan",
      "Bishop collector"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38378",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S2E4 Money), what does Queen Elizabeth repeatedly do to cash Blackadder manages to raise?",
    "answers": [
      "She takes it from him",
      "She orders it given to the poor",
      "She has it converted into Spanish coins",
      "She donates it to Captain Rum's voyage"
    ],
    "correctAnswer": "She takes it from him",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S2E4 Money",
      "Series: S2",
      "Episode plot",
      "Story arc",
      "Correct: She takes it from him",
      "Source: https://www.blackadderhall.com/series/blackadder-ii.html",
      "Queenie interfering",
      "Money seized",
      "Debt crisis"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38379",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S2E4 Money), what evidence does Blackadder eventually use to blackmail the Bishop into cancelling his debt?",
    "answers": [
      "Letters showing the Bishop plans treason",
      "An incriminating portrait and sketches",
      "A stolen Bible with notes in the margin",
      "Records of unpaid taxes in the bishopric"
    ],
    "correctAnswer": "An incriminating portrait and sketches",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S2E4 Money",
      "Series: S2",
      "Episode plot",
      "Story arc",
      "Correct: An incriminating portrait and sketches",
      "Source: https://www.blackadderhall.com/series/blackadder-ii.html",
      "Bishop blackmail",
      "Painter",
      "Debt settled"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38380",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S2E5 Beer), what do Blackadder's wealthy Whiteadder relatives expect to find at his home on their visit?",
    "answers": [
      "A large royal banquet with musicians",
      "A French masquerade ball",
      "An austere and respectable Puritan household",
      "A private meeting of the Privy Council"
    ],
    "correctAnswer": "An austere and respectable Puritan household",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S2E5 Beer",
      "Series: S2",
      "Episode plot",
      "Story arc",
      "Correct: An austere and respectable Puritan household",
      "Source: https://www.blackadderhall.com/series/blackadder-ii.html",
      "Puritan standards",
      "Inheritance",
      "Whiteadders"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38381",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S2E5 Beer), what is Blackadder trying to conceal from his Puritan visitors on the same evening?",
    "answers": [
      "A visiting Spanish army",
      "A royal wedding rehearsal",
      "A family christening",
      "A rowdy drinking party"
    ],
    "correctAnswer": "A rowdy drinking party",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S2E5 Beer",
      "Series: S2",
      "Episode plot",
      "Story arc",
      "Correct: A rowdy drinking party",
      "Source: https://www.blackadderhall.com/series/blackadder-ii.html",
      "Double booking",
      "Drinking party",
      "Relatives"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38382",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S2E5 Beer), which root vegetable leads to an embarrassing misunderstanding during the chaotic evening?",
    "answers": [
      "A turnip",
      "A parsnip",
      "A potato",
      "A swede"
    ],
    "correctAnswer": "A turnip",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S2E5 Beer",
      "Series: S2",
      "Episode plot",
      "Story arc",
      "Correct: A turnip",
      "Source: https://www.blackadderhall.com/series/blackadder-ii.html",
      "Turnip mishap",
      "Party props",
      "Puritan aunt"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38383",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S2E6 Chains), why does the Queen initially refuse to pay a ransom for Blackadder and Melchett?",
    "answers": [
      "She believes they have already escaped",
      "She wants to spend the money on a party instead",
      "She has sent all her money to Spain",
      "She thinks the letter came from Captain Rum"
    ],
    "correctAnswer": "She wants to spend the money on a party instead",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S2E6 Chains",
      "Series: S2",
      "Episode plot",
      "Story arc",
      "Correct: She wants to spend the money on a party instead",
      "Source: https://www.blackadderhall.com/series/blackadder-ii.html",
      "Abduction ransom",
      "Queenie party",
      "Two prisoners"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38384",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S2E6 Chains), what disguise does Prince Ludwig adopt after the credits when he returns to seize power?",
    "answers": [
      "Lord Percy",
      "Nursie",
      "Queen Elizabeth herself",
      "The Bishop of Bath and Wells"
    ],
    "correctAnswer": "Queen Elizabeth herself",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S2E6 Chains",
      "Series: S2",
      "Episode plot",
      "Story arc",
      "Correct: Queen Elizabeth herself",
      "Source: https://www.blackadderhall.com/series/blackadder-ii.html",
      "Ludwig disguise",
      "After credits",
      "Court murdered"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38385",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S3E1 Dish and Dishonesty), which source of money does Pitt the Younger threaten to remove from the Prince Regent?",
    "answers": [
      "His inheritance from Queen Victoria",
      "His earnings from the army",
      "His profits from colonial trading",
      "His Civil List funding"
    ],
    "correctAnswer": "His Civil List funding",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S3E1 Dish and Dishonesty",
      "Series: S3",
      "Episode plot",
      "Story arc",
      "Correct: His Civil List funding",
      "Source: https://www.blackadderhall.com/series/blackadder-the-third.html",
      "Pitt threatens",
      "Prince funds",
      "Civil List"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38386",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S3E1 Dish and Dishonesty), which rotten borough does Blackadder use for his attempt to fix a parliamentary by-election?",
    "answers": [
      "Dunny-on-the-Wold",
      "Rotten Row",
      "Wormwood Scrubs",
      "Littlehampton"
    ],
    "correctAnswer": "Dunny-on-the-Wold",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S3E1 Dish and Dishonesty",
      "Series: S3",
      "Episode plot",
      "Story arc",
      "Correct: Dunny-on-the-Wold",
      "Source: https://www.blackadderhall.com/series/blackadder-the-third.html",
      "Rotten borough",
      "Rigged vote",
      "Parliament"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38387",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S3E1 Dish and Dishonesty), what unexpectedly happens to Baldrick after his election to the House of Commons?",
    "answers": [
      "He becomes Prime Minister",
      "He ends up in the House of Lords",
      "He is appointed Foreign Secretary",
      "He returns to being a gardener"
    ],
    "correctAnswer": "He ends up in the House of Lords",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S3E1 Dish and Dishonesty",
      "Series: S3",
      "Episode plot",
      "Story arc",
      "Correct: He ends up in the House of Lords",
      "Source: https://www.blackadderhall.com/series/blackadder-the-third.html",
      "Baldrick promoted",
      "House of Lords",
      "Political muddle"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38388",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S3E2 Ink and Incapability), how long does Blackadder have to recreate Dr Johnson's destroyed dictionary?",
    "answers": [
      "One year",
      "One month",
      "One weekend",
      "One afternoon"
    ],
    "correctAnswer": "One weekend",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S3E2 Ink and Incapability",
      "Series: S3",
      "Episode plot",
      "Story arc",
      "Correct: One weekend",
      "Source: https://www.blackadderhall.com/series/blackadder-the-third.html",
      "Dictionary deadline",
      "Dr Johnson",
      "Last-minute writing"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38389",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S3E2 Ink and Incapability), which pen name associated with a novel makes Blackadder more interested in Dr Johnson's literary project?",
    "answers": [
      "Molly Brown",
      "Amy Hardwood",
      "Lady Whiteadder",
      "Gertrude Perkins"
    ],
    "correctAnswer": "Gertrude Perkins",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S3E2 Ink and Incapability",
      "Series: S3",
      "Episode plot",
      "Story arc",
      "Correct: Gertrude Perkins",
      "Source: https://www.blackadderhall.com/series/blackadder-the-third.html",
      "Gertrude Perkins",
      "Novel",
      "Johnson's interest"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38390",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S3E3 Nob and Nobility), how much money do Lord Topper and Lord Smedley bet that Blackadder cannot rescue an aristocrat from France?",
    "answers": [
      "One thousand guineas",
      "One hundred pounds",
      "Ten thousand pounds",
      "Fifty shillings"
    ],
    "correctAnswer": "One thousand guineas",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S3E3 Nob and Nobility",
      "Series: S3",
      "Episode plot",
      "Story arc",
      "Correct: One thousand guineas",
      "Source: https://www.blackadderhall.com/series/blackadder-the-third.html",
      "Topper Smedley",
      "Wager",
      "Scarlet Pimpernel"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38391",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S3E3 Nob and Nobility), where does Blackadder have to present his rescued French aristocrat to win the bet?",
    "answers": [
      "At the Prince Regent's birthday dinner",
      "At the French Embassy Ball",
      "In the House of Lords",
      "At Mrs Miggins's pie shop"
    ],
    "correctAnswer": "At the French Embassy Ball",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S3E3 Nob and Nobility",
      "Series: S3",
      "Episode plot",
      "Story arc",
      "Correct: At the French Embassy Ball",
      "Source: https://www.blackadderhall.com/series/blackadder-the-third.html",
      "Embassy ball",
      "Rescue wager",
      "French Revolution"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38392",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S3E3 Nob and Nobility), who captures Blackadder when he tries to prove he can outdo the Scarlet Pimpernel?",
    "answers": [
      "The Duke of Wellington",
      "Pitt the Younger",
      "French revolutionaries",
      "The Bishop of Bath and Wells"
    ],
    "correctAnswer": "French revolutionaries",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S3E3 Nob and Nobility",
      "Series: S3",
      "Episode plot",
      "Story arc",
      "Correct: French revolutionaries",
      "Source: https://www.blackadderhall.com/series/blackadder-the-third.html",
      "French capture",
      "Pimpernel rivalry",
      "Dangerous bet"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38393",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S3E4 Sense and Senility), what incident prompts Blackadder to suggest improving the Prince Regent's public image?",
    "answers": [
      "A riot breaks out during a royal wedding",
      "The Prince loses a debate in Parliament",
      "A newspaper prints his secret correspondence",
      "An anarchist attempts an attack at the theatre"
    ],
    "correctAnswer": "An anarchist attempts an attack at the theatre",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S3E4 Sense and Senility",
      "Series: S3",
      "Episode plot",
      "Story arc",
      "Correct: An anarchist attempts an attack at the theatre",
      "Source: https://www.blackadderhall.com/series/blackadder-the-third.html",
      "Theatre attack",
      "Anarchist",
      "Public image"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38394",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S3E4 Sense and Senility), what are the two actors Keanrick and Mossop hired to teach the Prince Regent?",
    "answers": [
      "Public speaking and acting",
      "Fencing and duelling",
      "Horse riding and polo",
      "French and Latin"
    ],
    "correctAnswer": "Public speaking and acting",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S3E4 Sense and Senility",
      "Series: S3",
      "Episode plot",
      "Story arc",
      "Correct: Public speaking and acting",
      "Source: https://www.blackadderhall.com/series/blackadder-the-third.html",
      "Keanrick Mossop",
      "Acting lessons",
      "Prince speeches"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38395",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S3E4 Sense and Senility), who becomes convinced the hired actors may be plotting to murder the Prince?",
    "answers": [
      "Mrs Miggins",
      "Baldrick",
      "The Duke of Wellington",
      "Dr Johnson"
    ],
    "correctAnswer": "Baldrick",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S3E4 Sense and Senility",
      "Series: S3",
      "Episode plot",
      "Story arc",
      "Correct: Baldrick",
      "Source: https://www.blackadderhall.com/series/blackadder-the-third.html",
      "Actors suspected",
      "Baldrick discovery",
      "Plot alarm"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38396",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S3E5 Amy and Amiability), what secret identity does Amy Hardwood conceal while courting the Prince Regent?",
    "answers": [
      "She is a disguised French princess",
      "She is a spy for Pitt the Younger",
      "She is the highway robber known as the Shadow",
      "She is the daughter of the Duke of Wellington"
    ],
    "correctAnswer": "She is the highway robber known as the Shadow",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S3E5 Amy and Amiability",
      "Series: S3",
      "Episode plot",
      "Story arc",
      "Correct: She is the highway robber known as the Shadow",
      "Source: https://www.blackadderhall.com/series/blackadder-the-third.html",
      "Amy secret",
      "The Shadow",
      "Highway robbery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38397",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S3E5 Amy and Amiability), which member of his household does Blackadder use as a substitute horse when trying highway robbery himself?",
    "answers": [
      "Mrs Miggins",
      "The Prince Regent",
      "The Duke of Wellington",
      "Baldrick"
    ],
    "correctAnswer": "Baldrick",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S3E5 Amy and Amiability",
      "Series: S3",
      "Episode plot",
      "Story arc",
      "Correct: Baldrick",
      "Source: https://www.blackadderhall.com/series/blackadder-the-third.html",
      "Highwayman Blackadder",
      "Baldrick horse",
      "Failed courtship"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38398",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S3E6 Duel and Duality), what arrangement allows Blackadder to face the Duke of Wellington's challenge instead of the Prince Regent?",
    "answers": [
      "They swap clothes and identities",
      "Blackadder becomes the Duke's clerk",
      "They invite the Duke to another country",
      "They agree to duel by proxy using Percy"
    ],
    "correctAnswer": "They swap clothes and identities",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S3E6 Duel and Duality",
      "Series: S3",
      "Episode plot",
      "Story arc",
      "Correct: They swap clothes and identities",
      "Source: https://www.blackadderhall.com/series/blackadder-the-third.html",
      "Identity swap",
      "Duel",
      "Prince's protection"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38399",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S3E6 Duel and Duality), which Scottish relative is summoned as a possible substitute fighter for Blackadder?",
    "answers": [
      "His uncle McAngus",
      "His cousin MacAdder",
      "His nephew Harry",
      "His brother Edmund IV"
    ],
    "correctAnswer": "His cousin MacAdder",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S3E6 Duel and Duality",
      "Series: S3",
      "Episode plot",
      "Story arc",
      "Correct: His cousin MacAdder",
      "Source: https://www.blackadderhall.com/series/blackadder-the-third.html",
      "Scottish cousin",
      "MacAdder",
      "Duelling backup"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38400",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S3E6 Duel and Duality), what extraordinary social position does Blackadder take by the end of the Regency series?",
    "answers": [
      "He is appointed Prime Minister",
      "He becomes Archbishop of Canterbury",
      "He becomes Prince Regent in place of his former employer",
      "He is made a general in the army"
    ],
    "correctAnswer": "He becomes Prince Regent in place of his former employer",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S3E6 Duel and Duality",
      "Series: S3",
      "Episode plot",
      "Story arc",
      "Correct: He becomes Prince Regent in place of his former employer",
      "Source: https://www.blackadderhall.com/series/blackadder-the-third.html",
      "Blackadder elevation",
      "Prince impersonation",
      "Finale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38401",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S4E1 Captain Cook), what task does Melchett require the would-be official war artist to undertake near enemy lines?",
    "answers": [
      "Paint the general's portrait at headquarters",
      "Design a recruitment poster for London",
      "Draw the new British uniform",
      "Sketch the German positions in no man's land"
    ],
    "correctAnswer": "Sketch the German positions in no man's land",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S4E1 Captain Cook",
      "Series: S4",
      "Episode plot",
      "Story arc",
      "Correct: Sketch the German positions in no man's land",
      "Source: https://www.blackadderhall.com/series/blackadder-goes-forth.html",
      "War artist",
      "Enemy positions",
      "Dangerous assignment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38402",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S4E1 Captain Cook), which second profession does Blackadder briefly try in his efforts to escape the front line?",
    "answers": [
      "Army cook",
      "Army chaplain",
      "Military doctor",
      "War correspondent"
    ],
    "correctAnswer": "Army cook",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S4E1 Captain Cook",
      "Series: S4",
      "Episode plot",
      "Story arc",
      "Correct: Army cook",
      "Source: https://www.blackadderhall.com/series/blackadder-goes-forth.html",
      "Alternative duties",
      "Cook",
      "Trenches"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38403",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S4E2 Corporal Punishment), whose favourite animal has Blackadder unknowingly killed and eaten?",
    "answers": [
      "Lieutenant George's",
      "General Melchett's",
      "Nurse Mary's",
      "Lord Flashheart's"
    ],
    "correctAnswer": "General Melchett's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S4E2 Corporal Punishment",
      "Series: S4",
      "Episode plot",
      "Story arc",
      "Correct: General Melchett's",
      "Source: https://www.blackadderhall.com/series/blackadder-goes-forth.html",
      "General's pet",
      "Speckled Jim",
      "Court martial"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38404",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S4E2 Corporal Punishment), what military court proceeding follows Blackadder's destruction of the messenger pigeon?",
    "answers": [
      "A public inquiry by MPs",
      "A naval tribunal",
      "A court martial",
      "A local civilian jury trial"
    ],
    "correctAnswer": "A court martial",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S4E2 Corporal Punishment",
      "Series: S4",
      "Episode plot",
      "Story arc",
      "Correct: A court martial",
      "Source: https://www.blackadderhall.com/series/blackadder-goes-forth.html",
      "Military discipline",
      "Messenger pigeon",
      "Court"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38405",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S4E3 Major Star), which silent-film comedian does Baldrick try to imitate in the troop concert?",
    "answers": [
      "Buster Keaton",
      "Harold Lloyd",
      "Stan Laurel",
      "Charlie Chaplin"
    ],
    "correctAnswer": "Charlie Chaplin",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S4E3 Major Star",
      "Series: S4",
      "Episode plot",
      "Story arc",
      "Correct: Charlie Chaplin",
      "Source: https://www.blackadderhall.com/series/blackadder-goes-forth.html",
      "Baldrick impersonation",
      "Morale show",
      "Silent film"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38406",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S4E3 Major Star), what romantic complication does George's female stage persona cause?",
    "answers": [
      "General Melchett falls in love with Georgina",
      "Captain Darling proposes marriage to Baldrick",
      "Nurse Mary becomes jealous of George",
      "Flashheart asks her to join his squadron"
    ],
    "correctAnswer": "General Melchett falls in love with Georgina",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S4E3 Major Star",
      "Series: S4",
      "Episode plot",
      "Story arc",
      "Correct: General Melchett falls in love with Georgina",
      "Source: https://www.blackadderhall.com/series/blackadder-goes-forth.html",
      "Georgina",
      "Melchett infatuation",
      "Concert"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38407",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S4E4 Private Plane), what happens to Blackadder and Baldrick on their first flight after joining the air service?",
    "answers": [
      "They win a medal for shooting a German plane",
      "They are shot down behind German lines",
      "They reach London without incident",
      "They crash into Melchett's headquarters"
    ],
    "correctAnswer": "They are shot down behind German lines",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S4E4 Private Plane",
      "Series: S4",
      "Episode plot",
      "Story arc",
      "Correct: They are shot down behind German lines",
      "Source: https://www.blackadderhall.com/series/blackadder-goes-forth.html",
      "Shot down",
      "Behind enemy lines",
      "Flying escape"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38408",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S4E4 Private Plane), who comes to rescue the captured Blackadder and Baldrick from the German flying ace?",
    "answers": [
      "Captain Darling",
      "Field Marshal Haig",
      "Lord Flashheart",
      "Nurse Mary"
    ],
    "correctAnswer": "Lord Flashheart",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S4E4 Private Plane",
      "Series: S4",
      "Episode plot",
      "Story arc",
      "Correct: Lord Flashheart",
      "Source: https://www.blackadderhall.com/series/blackadder-goes-forth.html",
      "German captivity",
      "Flying rescue",
      "Flashheart"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38409",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S4E5 General Hospital), why is Lieutenant George in the military hospital when Blackadder starts looking for a spy?",
    "answers": [
      "He has contracted influenza",
      "He has broken his leg playing cricket",
      "He is undergoing an eye test",
      "He is recovering from a bomb blast"
    ],
    "correctAnswer": "He is recovering from a bomb blast",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S4E5 General Hospital",
      "Series: S4",
      "Episode plot",
      "Story arc",
      "Correct: He is recovering from a bomb blast",
      "Source: https://www.blackadderhall.com/series/blackadder-goes-forth.html",
      "George wounded",
      "Hospital",
      "Bomb blast"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38410",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S4E5 General Hospital), which apparent suspect is actually a distinguished British intelligence officer despite a strong German accent?",
    "answers": [
      "Brigadier Smith",
      "Captain Darling",
      "General Melchett",
      "Lord Flashheart"
    ],
    "correctAnswer": "Brigadier Smith",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S4E5 General Hospital",
      "Series: S4",
      "Episode plot",
      "Story arc",
      "Correct: Brigadier Smith",
      "Source: https://www.blackadderhall.com/series/blackadder-goes-forth.html",
      "Brigadier Smith",
      "German accent",
      "British spy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38411",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S4E5 General Hospital), whose letters to a relative in Germany eventually expose a separate security problem?",
    "answers": [
      "Baldrick's",
      "Lieutenant George's",
      "Captain Darling's",
      "Nurse Mary's"
    ],
    "correctAnswer": "Lieutenant George's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S4E5 General Hospital",
      "Series: S4",
      "Episode plot",
      "Story arc",
      "Correct: Lieutenant George's",
      "Source: https://www.blackadderhall.com/series/blackadder-goes-forth.html",
      "George correspondence",
      "Uncle in Munich",
      "Secret information"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38412",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S4E6 Goodbyeee), what props does Blackadder put on his head and face to try to appear mentally unfit for combat?",
    "answers": [
      "A saucepan and a painted moustache",
      "A pigeon cage and spectacles",
      "Underpants and two pencils",
      "A paper crown and a feather boa"
    ],
    "correctAnswer": "Underpants and two pencils",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S4E6 Goodbyeee",
      "Series: S4",
      "Episode plot",
      "Story arc",
      "Correct: Underpants and two pencils",
      "Source: https://www.blackadderhall.com/series/blackadder-goes-forth.html",
      "Fake madness",
      "Pencils",
      "Underpants"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38413",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S4E6 Goodbyeee), what does Field Marshal Haig do with his model soldiers during Blackadder's desperate telephone call?",
    "answers": [
      "He lines them up for inspection",
      "He paints them red",
      "He throws them into a fireplace",
      "He sweeps them into a dustpan"
    ],
    "correctAnswer": "He sweeps them into a dustpan",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S4E6 Goodbyeee",
      "Series: S4",
      "Episode plot",
      "Story arc",
      "Correct: He sweeps them into a dustpan",
      "Source: https://www.blackadderhall.com/series/blackadder-goes-forth.html",
      "Haig desk",
      "Toy soldiers",
      "War waste"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38414",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (S4E6 Goodbyeee), what do Blackadder and his companions finally do after receiving the order for the last offensive?",
    "answers": [
      "They climb from the trench and advance into enemy fire",
      "They board a boat for England",
      "They take refuge in the hospital",
      "They desert to a neutral country"
    ],
    "correctAnswer": "They climb from the trench and advance into enemy fire",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: S4E6 Goodbyeee",
      "Series: S4",
      "Episode plot",
      "Story arc",
      "Correct: They climb from the trench and advance into enemy fire",
      "Source: https://www.blackadderhall.com/series/blackadder-goes-forth.html",
      "Final charge",
      "Tragic ending",
      "Over the top"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38415",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (1988 Special The Cavalier Years), whose sudden arrival causes the hiding King Charles I to be discovered at Blackadder's house?",
    "answers": [
      "The Duke of Wellington's",
      "Oliver Cromwell's",
      "Pitt the Younger's",
      "The Bishop of Bath and Wells's"
    ],
    "correctAnswer": "Oliver Cromwell's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: 1988 Special The Cavalier Years",
      "Series: 1988",
      "Episode plot",
      "Story arc",
      "Correct: Oliver Cromwell's",
      "Source: https://thetvdb.com/series/blackadder/allseasons/official",
      "Cromwell arrives",
      "King found",
      "Royalist hiding"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38416",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (1988 Special The Cavalier Years), where is King Charles I imprisoned after his discovery in the Civil War special?",
    "answers": [
      "The Bastille",
      "Dover Castle",
      "The Tower of London",
      "Windsor Castle"
    ],
    "correctAnswer": "The Tower of London",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: 1988 Special The Cavalier Years",
      "Series: 1988",
      "Episode plot",
      "Story arc",
      "Correct: The Tower of London",
      "Source: https://thetvdb.com/series/blackadder/allseasons/official",
      "King Charles imprisoned",
      "Cromwell",
      "Civil War"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38417",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (1988 Special The Cavalier Years), what religious disguise does Edmund use when visiting the imprisoned king?",
    "answers": [
      "A monk from St Herod",
      "An archbishop",
      "A Puritan preacher",
      "A priest"
    ],
    "correctAnswer": "A priest",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: 1988 Special The Cavalier Years",
      "Series: 1988",
      "Episode plot",
      "Story arc",
      "Correct: A priest",
      "Source: https://thetvdb.com/series/blackadder/allseasons/official",
      "Edmund disguise",
      "King rescue",
      "Prison visit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38418",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (1988 Special Blackadder's Christmas Carol), what business does Ebenezer Blackadder run in the Victorian Christmas special?",
    "answers": [
      "A moustache shop",
      "A pie shop",
      "A funeral parlour",
      "A tailor's shop"
    ],
    "correctAnswer": "A moustache shop",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: 1988 Special Blackadder's Christmas Carol",
      "Series: 1988",
      "Episode plot",
      "Story arc",
      "Correct: A moustache shop",
      "Source: https://thetvdb.com/series/blackadder/allseasons/official",
      "Ebenezer trade",
      "Victorian shop",
      "Christmas"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38419",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (1988 Special Blackadder's Christmas Carol), what future does the Christmas spirit show if Ebenezer continues being excessively nice?",
    "answers": [
      "A descendant becoming King of England",
      "A descendant serving a powerful Baldrick",
      "A descendant commanding a fleet in space",
      "A descendant inheriting the Prince Regent's estate"
    ],
    "correctAnswer": "A descendant serving a powerful Baldrick",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: 1988 Special Blackadder's Christmas Carol",
      "Series: 1988",
      "Episode plot",
      "Story arc",
      "Correct: A descendant serving a powerful Baldrick",
      "Source: https://thetvdb.com/series/blackadder/allseasons/official",
      "Alternate future",
      "Power reversal",
      "Kindness"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38420",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (1988 Special Blackadder's Christmas Carol), who are the important guests that Ebenezer drives away after deciding to behave selfishly?",
    "answers": [
      "Queen Elizabeth and Lord Melchett",
      "King Charles I and Cromwell",
      "Queen Victoria and Prince Albert",
      "The Duke of Wellington and his niece"
    ],
    "correctAnswer": "Queen Victoria and Prince Albert",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: 1988 Special Blackadder's Christmas Carol",
      "Series: 1988",
      "Episode plot",
      "Story arc",
      "Correct: Queen Victoria and Prince Albert",
      "Source: https://thetvdb.com/series/blackadder/allseasons/official",
      "Royal visitors",
      "Selfish Ebenezer",
      "Lost reward"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38421",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (1988 Special Blackadder's Christmas Carol), what reward does Ebenezer lose by insulting his surprise royal visitors?",
    "answers": [
      "A new shop on the Strand",
      "A military commission",
      "A thousand-acre estate in Scotland",
      "Fifty thousand pounds and the title Baron Blackadder"
    ],
    "correctAnswer": "Fifty thousand pounds and the title Baron Blackadder",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: 1988 Special Blackadder's Christmas Carol",
      "Series: 1988",
      "Episode plot",
      "Story arc",
      "Correct: Fifty thousand pounds and the title Baron Blackadder",
      "Source: https://thetvdb.com/series/blackadder/allseasons/official",
      "Royal reward lost",
      "Baron Blackadder",
      "Christmas irony"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38422",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (1999 Special Back and Forth), what single item causes the extinction of the dinosaurs when Baldrick and Blackadder visit prehistory?",
    "answers": [
      "Baldrick's underpants",
      "An unloaded pistol",
      "A bag of turnips",
      "A broken pocket watch"
    ],
    "correctAnswer": "Baldrick's underpants",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: 1999 Special Back and Forth",
      "Series: 1999",
      "Episode plot",
      "Story arc",
      "Correct: Baldrick's underpants",
      "Source: https://en.wikipedia.org/wiki/Blackadder:_Back_%26_Forth",
      "Dinosaur accident",
      "Prehistory",
      "Underpants"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38423",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (1999 Special Back and Forth), what invention does Shakespeare become famous for after Blackadder changes history?",
    "answers": [
      "The telescope",
      "The ballpoint pen",
      "The steam engine",
      "The gramophone"
    ],
    "correctAnswer": "The ballpoint pen",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: 1999 Special Back and Forth",
      "Series: 1999",
      "Episode plot",
      "Story arc",
      "Correct: The ballpoint pen",
      "Source: https://en.wikipedia.org/wiki/Blackadder:_Back_%26_Forth",
      "Shakespeare altered",
      "History changes",
      "Pen invention"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38424",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (1999 Special Back and Forth), which battle is won by Napoleon after Blackadder's interference changes the course of history?",
    "answers": [
      "Trafalgar",
      "Hastings",
      "Waterloo",
      "Bosworth"
    ],
    "correctAnswer": "Waterloo",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: 1999 Special Back and Forth",
      "Series: 1999",
      "Episode plot",
      "Story arc",
      "Correct: Waterloo",
      "Source: https://en.wikipedia.org/wiki/Blackadder:_Back_%26_Forth",
      "Napoleon victorious",
      "Historical anomaly",
      "French rule"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38425",
    "category": "Television",
    "programme": "Blackadder",
    "question": "In Blackadder (1999 Special Back and Forth), what new status does Blackadder attain after deliberately rearranging history at the end of the adventure?",
    "answers": [
      "He becomes Lord High Executioner",
      "He becomes Prince of Wales",
      "He becomes Field Marshal Blackadder",
      "He becomes King Edmund III"
    ],
    "correctAnswer": "He becomes King Edmund III",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "BBC Sitcom",
      "Historical Comedy",
      "Blackadder",
      "Programme: Blackadder",
      "Episode: 1999 Special Back and Forth",
      "Series: 1999",
      "Episode plot",
      "Story arc",
      "Correct: He becomes King Edmund III",
      "Source: https://en.wikipedia.org/wiki/Blackadder:_Back_%26_Forth",
      "New timeline",
      "Blackadder crowned",
      "Millennium ending"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==173 ||
 questions[0].id!=='tv_16899' || questions[104].id!=='tv_17003' ||
 auditAdditions[0].id!=='tv_38358' ||
 auditAdditions[auditAdditions.length-1].id!=='tv_38425' ||
 new Set(questions.map(q=>q.id)).size!==questions.length ||
 new Set(questions.map(q=>normalise(q.question))).size!==questions.length ||
 questions.some(q=>q.answers.length!==4 || new Set(q.answers.map(normalise)).size!==4 ||
 q.answers.filter(a=>a===q.correctAnswer).length!==1||q.programme!=='Blackadder'||
 !q.tags.includes('Programme: Blackadder')||q.tags.length<14||q.dailyEligible!==true) ||
 auditAdditions.some(q=>!q.question.startsWith('In Blackadder (')||
 !q.tags.some(t=>t.startsWith('Source: https://'))))
 throw Error('Pack 349 storyline audit failed');
module.exports = questions;
