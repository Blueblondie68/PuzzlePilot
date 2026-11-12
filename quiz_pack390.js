
// PuzzlePilot - Big Quiz - Pack 390
// Jonathan Creek - four specials (2001, 2009, 2010, 2013)
// Black Canary (1998) was covered in Pack 387; not repeated here.
// Complete CommonJS file for WordPad. Starting ID: tv_21068.
'use strict';

const FIRST_ID = 21068;
const commonTags = ['television', 'British TV', 'BBC One', 'Jonathan Creek', 'David Renwick', 'mystery drama'];

// Each row: question | correct answer | three distractors | difficulty | seven specific tags.
const rows = [
  // 2001 Christmas special: Satan's Chimney
  `Which theatrical agent first joins Jonathan in Satan's Chimney?|Carla Borrego|Maddy Magellan|Joey Ross|Polly Creek|Easy|2001|Christmas special|Satan's Chimney|Carla Borrego|Julia Sawalha|theatrical agent|first appearance`,
  `Which actress plays Carla Borrego in Satan's Chimney?|Julia Sawalha|Caroline Quentin|Sheridan Smith|Sarah Alexander|Easy|2001|Christmas special|Satan's Chimney|Julia Sawalha|Carla Borrego|new investigator|cast`,
  `Where has Maddy Magellan gone during the events of Satan's Chimney?|America on a book tour|France to film a documentary|Scotland to research a murder|Australia to visit her sister|Easy|2001|Christmas special|Satan's Chimney|Maddy Magellan|Caroline Quentin|American book tour|absence`,
  `What is Alan Kalanak's speciality in Satan's Chimney?|Escapology|Mind reading|Ventriloquism|Card juggling|Easy|2001|Christmas special|Satan's Chimney|Alan Kalanak|escape artist|magic act|Carla client`,
  `Which film is Vivian Brodie making when she is killed?|Black Snow|Dark Angel|Silent Winter|Night Games|Medium|2001|Christmas special|Satan's Chimney|Vivian Brodie|Black Snow|film set|murder`,
  `Who plays the murdered actress Vivian Brodie in Satan's Chimney?|Mary Tamm|Judy Parfitt|Joanna Lumley|Sasha Behar|Medium|2001|Christmas special|Satan's Chimney|Mary Tamm|Vivian Brodie|guest actress|film star`,
  `What apparently makes Vivian's shooting impossible in Satan's Chimney?|The window she points at is unbroken|Her gun is locked in a safe|The house is surrounded by water|She is in a completely sealed lift|Easy|2001|Christmas special|Satan's Chimney|Vivian Brodie|unbroken window|film-set shooting|impossible crime`,
  `What is the name of the Scottish castle featured in Satan's Chimney?|Doomdorf Castle|Gallows Gate Castle|Blackthorn Castle|Northcote Castle|Easy|2001|Christmas special|Satan's Chimney|Doomdorf Castle|Scotland|dungeon|funeral`,
  `Who directs the film being made when Vivian Brodie dies?|Herman Grole|Bronson Peterman|Alan Kalanak|Inspector Bulstrode|Medium|2001|Christmas special|Satan's Chimney|Herman Grole|film director|Black Snow|Stephen Berkoff`,
 
  `Which actor plays escapologist Alan Kalanak in Satan's Chimney?|Jay Benedict|Bill Bailey|Steven Berkoff|Matt Rippy|Medium|2001|Christmas special|Satan's Chimney|Jay Benedict|Alan Kalanak|guest actor|escapologist`,
  `What is Carla's professional connection to Alan Kalanak?|She is his agent|She is his stage assistant|She is his former wife|She designs his costumes|Medium|2001|Christmas special|Satan's Chimney|Carla Borrego|Alan Kalanak|theatrical agent|escapologist`,
  `What strange challenge does Alan Kalanak accept in the castle dungeon?|To escape a locked underground chamber|To walk over hot coals|To vanish from a glass tank|To catch a bullet between his teeth|Medium|2001|Christmas special|Satan's Chimney|Alan Kalanak|locked dungeon|escape challenge|Doomdorf Castle`,
  `What do the visitors find in the dungeon after Alan Kalanak apparently escapes?|A skeleton chained to the floor|An open tunnel to the sea|A note hidden in a brick|A broken padlock in an empty room|Medium|2001|Christmas special|Satan's Chimney|Alan Kalanak|skeleton|dungeon trick|apparent escape`,
  `Which castle mechanism is connected to the dungeon's hidden deadly device?|The drawbridge|The portcullis bell|The clock tower|The chapel organ|Hard|2001|Christmas special|Satan's Chimney|drawbridge chains|false dungeon floor|castle mechanism|murder solution`,
  `What really happens to the floor of the dungeon in Satan's Chimney?|A concealed stone slab descends into the pit|It revolves to reveal a staircase|It folds away into the walls|It tilts to expose a secret passage|Hard|2001|Christmas special|Satan's Chimney|stone slab|false floor|dungeon pit|drawbridge chains`,
  `How is Alan's supposed telephone call to Jonathan fabricated?|Edited recordings of Alan reading a manuscript|An impersonator copies his voice live|A prerecorded radio interview is played|A computer generates a synthetic voice|Hard|2001|Christmas special|Satan's Chimney|Alan Kalanak|edited speech|Herman Grole|fake phone call`,
  `What detail about Alan's car helps Jonathan realise the apparent escape was staged?|It is left-hand drive|Its number plate has changed|Its headlights are painted black|Its roof is missing|Hard|2001|Christmas special|Satan's Chimney|Alan Kalanak|left-hand-drive car|passenger seat|false departure`,
  `What does Jodee pretend has happened to her to distract Jonathan at breakfast?|An insect has bitten her|She has twisted her ankle|She has lost a contact lens|She has spilt boiling tea|Medium|2001|Christmas special|Satan's Chimney|Jodee Tressky|imaginary insect bite|Jonathan distraction|coffee plunger`,
  `What household object helps Jonathan visualise the descending mechanism at Doomdorf Castle?|A cafetiere plunger|A kitchen colander|A rotating cake stand|A folding ironing board|Hard|2001|Christmas special|Satan's Chimney|cafetiere|plunger|descending floor|Jonathan deduction`,
  `What is hidden in seemingly blank portions of Vivian Brodie's electronic diary?|Text coloured to match the background|Scanned photographs|Encrypted voice recordings|A hidden video file|Hard|2001|Christmas special|Satan's Chimney|Vivian diary|concealed text|computer clue|motive`,
  `Who ultimately fires the fatal shot at Vivian Brodie?|Tom, the actor playing the groundsman|Herman Grole, the director|Bronson Peterman, her co-star|Jodee Tressky, the actress|Hard|2001|Christmas special|Satan's Chimney|Vivian Brodie|Tom|groundsman|murderer`,
  `How is the weapon concealed during Vivian Brodie's murder scene?|A gun barrel is fitted inside an axe|A pistol is hidden in a camera|A rifle is built into a lighting stand|A gun is concealed in a bouquet|Hard|2001|Christmas special|Satan's Chimney|axe gun|Tom|film set|shooting trick`,
  `Why does Alan Kalanak want Vivian Brodie punished?|He discovers she ended a pregnancy without telling him|She steals the plans for his new act|She exposes a false identity he uses|She publishes his private correspondence|Hard|2001|Christmas special|Satan's Chimney|Alan Kalanak|Vivian Brodie|concealed abortion|revenge motive`,
  `Who organises the group's revenge on Alan Kalanak at Doomdorf Castle?|Herman Grole|Inspector Bulstrode|Kenny Starkiss|Carla Borrego|Hard|2001|Christmas special|Satan's Chimney|Herman Grole|revenge plot|Alan Kalanak|castle conspiracy`,

  // 2009 New Year's special: The Grinning Man
  `Who becomes Jonathan's new investigative partner in The Grinning Man?|Joey Ross|Carla Borrego|Polly Creek|Maddy Magellan|Easy|2009|New Year special|The Grinning Man|Joey Ross|Sheridan Smith|new investigator|debut`,
  `Which actress makes her Jonathan Creek debut as Joey Ross in The Grinning Man?|Sheridan Smith|Julia Sawalha|Sarah Alexander|Caroline Quentin|Easy|2009|New Year special|The Grinning Man|Sheridan Smith|Joey Ross|first appearance|cast`,
  `What is the name of the Gothic mansion in The Grinning Man?|Metropolis|Green Lanterns|Ghost's Forge|Doomdorf Castle|Easy|2009|New Year special|The Grinning Man|Metropolis|Gothic mansion|haunted room|setting`,
  `What is the ominous nickname of the room where visitors vanish in The Grinning Man?|The Nightmare Room|The Black Chamber|The Devil's Parlour|The Whispering Attic|Easy|2009|New Year special|The Grinning Man|Nightmare Room|attic|vanishing guests|mansion`,
  `Which friend of Joey Ross disappears after sleeping in the Nightmare Room?|Mina|Elodie|Nicola|Constance|Easy|2009|New Year special|The Grinning Man|Mina|Naomi Bentley|Joey Ross|missing guest`,
  `Who owns Metropolis at the time of Joey's investigation?|Lance Gessler|Adam Klaus|Jacques Futrelle|Glenn|Medium|2009|New Year special|The Grinning Man|Lance Gessler|magician|mansion owner|Nicholas Boulton`,
  `Who is Lance Gessler's mother in The Grinning Man?|Constance|Nicola|Elodie|Delia|Medium|2009|New Year special|The Grinning Man|Constance|Judy Parfitt|Lance Gessler|family`,
  `What is Glenn's job at the mansion in The Grinning Man?|Groundskeeper|Butler|Private detective|Art restorer|Medium|2009|New Year special|The Grinning Man|Glenn|Ciaran McMenamin|groundskeeper|Metropolis`,
  `Which earlier resident first set the deadly trap in the Nightmare Room?|Jacques Futrelle|Lance Gessler|Eli Mencken|Adam Klaus|Medium|2009|New Year special|The Grinning Man|Jacques Futrelle|spiritualist|original trap|1938`,
  `Who was the intended target of the original trap in The Grinning Man?|Scientist Eli Mencken|Lance Gessler|A newspaper editor|Magician Adam Klaus|Hard|2009|New Year special|The Grinning Man|Eli Mencken|original target|Nazi sympathiser|death trap`,
  `What falls from the canopy above the Nightmare Room's bed when the mattress is pressed?|Dead flies|Rose petals|A shower of coins|Ash from a fireplace|Medium|2009|New Year special|The Grinning Man|bed canopy|dead flies|pressure mechanism|bathing lure`,
  `What common activity triggers the Nightmare Room's true trap?|Taking a bath|Opening a wardrobe|Sleeping on the bed|Lighting the fireplace|Hard|2009|New Year special|The Grinning Man|bath|secret trap|vanishing guests|mystery solution`,
  `Where does the Nightmare Room's concealed trap send its victims?|Into a water tank below the bathroom|Through a tunnel into the garden|Into a sealed attic above the room|Down an abandoned lift shaft|Hard|2009|New Year special|The Grinning Man|water tank|bathtub mechanism|drowning victims|hidden chamber`,
  `Why is the Nightmare Room falsely made to look like a conventional attic?|Its sloping ceiling conceals its position above another level|It conceals a secret entrance through the roof|It lets moonlight activate the trap|It hides a movable chimney wall|Hard|2009|New Year special|The Grinning Man|false attic|sloping ceiling|tower|hidden space`,
  `Who nearly becomes another victim of the bathtub trap before Jonathan intervenes?|Joey Ross|Nicola|Constance|Elodie|Medium|2009|New Year special|The Grinning Man|Joey Ross|bathtub trap|rescue|Glenn`,
  `Who helps Jonathan rescue Joey from the hidden water tank?|Glenn the groundskeeper|Lance Gessler|Adam Klaus|Eli Mencken|Medium|2009|New Year special|The Grinning Man|Glenn|Joey Ross|water tank|rescue`,
  `What reputedly famous painter is linked to the unsettling Grinning Man portrait?|Hieronymus Bosch|Edvard Munch|Francisco Goya|Vincent van Gogh|Medium|2009|New Year special|The Grinning Man|Hieronymus Bosch|painting|Nightmare Room|portrait`,
  `Who is secretly married to Elodie despite her relationship with Lance Gessler?|Glenn|Alec|Jonathan Creek|Eli Mencken|Hard|2009|New Year special|The Grinning Man|Elodie|Glenn|secret marriage|jealousy`,
  `What is used to make Elodie appear alive after her apparent death?|A video showing her beside a supposedly current newspaper|A live television interview|A telephone call recorded in a hospital|A photograph of her boarding a train|Hard|2009|New Year special|The Grinning Man|Elodie|faked newspaper|video alibi|Lance Gessler`,
  `Who helps arrange the newspaper edition that makes the false alibi possible?|Editor Delia Gunning|Joey Ross|Constance|Nicola|Hard|2009|New Year special|The Grinning Man|Delia Gunning|newspaper editor|advanced printing|fake alibi`,
  `What unusual incident supplies a misleading front-page news story in The Grinning Man?|Bees released at a council meeting|A lion loose in a shopping centre|A power cut during an election|A runaway hot-air balloon|Hard|2009|New Year special|The Grinning Man|bees|council meeting|staged headline|newspaper alibi`,
  `Which actress plays Jonathan's girlfriend Nicola in The Grinning Man?|Katherine Parkinson|Judy Parfitt|Naomi Bentley|Jenna Harrison|Medium|2009|New Year special|The Grinning Man|Katherine Parkinson|Nicola|Jonathan girlfriend|cast`,
  `What ultimately happens to Lance Gessler after the newspaper deception is exposed?|He dies by suicide in his car|He flees abroad with Elodie|He is arrested at the theatre|He falls through the attic trap|Hard|2009|New Year special|The Grinning Man|Lance Gessler|suicide|car gas|Elodie murder`,

  // 2010 Easter special: The Judas Tree
  `What is the name of the country house at the centre of The Judas Tree?|Green Lanterns|Metropolis|Doomdorf Castle|Ghost's Forge|Easy|2010|Easter special|The Judas Tree|Green Lanterns|country house|Hugo Dore|setting`,
  `Which novelist owns Green Lanterns in The Judas Tree?|Hugo Dore|Justin Mallory|Franklin Tartikoff|Dudley Houseman|Easy|2010|Easter special|The Judas Tree|Hugo Dore|Paul McGann|crime writer|homeowner`,
  `Who plays crime writer Hugo Dore in The Judas Tree?|Paul McGann|Nigel Planer|Jack Dee|Adrian Edmondson|Medium|2010|Easter special|The Judas Tree|Paul McGann|Hugo Dore|guest actor|crime novelist`,
  `What is the name of Hugo Dore's wife in The Judas Tree?|Harriet|Emily|Selima|Kim|Easy|2010|Easter special|The Judas Tree|Harriet Dore|Sasha Behar|publisher|wife`,
  `Who is the new housekeeper struggling with apparent supernatural events in The Judas Tree?|Emily Somerton|Joey Ross|Mrs Gantry|Carla Borrego|Easy|2010|Easter special|The Judas Tree|Emily Somerton|Natalie Walter|housekeeper|haunting`,
  `Which actress plays the older housekeeper Mrs Gantry in The Judas Tree?|Doreen Mantle|Judy Parfitt|Joanna Lumley|Maureen Lipman|Medium|2010|Easter special|The Judas Tree|Doreen Mantle|Mrs Gantry|guest actress|housekeeper`,
  `What work did Emily Somerton do before joining the Dore household?|She worked in a shoe shop|She worked in a newspaper office|She worked in a museum|She was a stage magician|Medium|2010|Easter special|The Judas Tree|Emily Somerton|shoe shop|new job|Green Lanterns`,
  `Which Victorian doctor supposedly dies after being cursed in The Judas Tree?|Thadeus Northcote|Franklin Tartikoff|Justin Mallory|Hugo Dore|Medium|2010|Easter special|The Judas Tree|Thadeus Northcote|Victorian mystery|1889|supposed curse`,
  `Who supposedly curses Dr Northcote after their affair ends?|Selima El Sharad|Harriet Dore|Emily Somerton|Mrs Gantry|Medium|2010|Easter special|The Judas Tree|Selima El Sharad|Egyptian housekeeper|Victorian affair|curse`,
  `What hidden device makes the Victorian doctor's death appear supernatural?|A poisoned compartment inside his pocket watch|A spring-loaded blade in his chair|Poisoned ink on a letter|A gas release in the fireplace|Hard|2010|Easter special|The Judas Tree|pocket watch|cyanide|Selima El Sharad|death mechanism`,
  `How is the poisoned watch's concealed glass broken at the predicted moment?|A scream at the right pitch|A blow from a walking stick|The clock striking midnight|A hidden magnet beneath the desk|Hard|2010|Easter special|The Judas Tree|high-pitched scream|glass resonance|pocket watch|Northcote death`,
  `What is the real meaning of the threatening message apparently reading ISIS?|The time 15:15|A name written backwards|A clue to an Egyptian tomb|An abbreviation for a local society|Hard|2010|Easter special|The Judas Tree|15:15|handwriting|misread warning|Harriet Dore`,
  `In Emily's childhood memory, what apparently vanishes from a field?|A house|A stone bridge|A railway carriage|A church tower|Easy|2010|Easter special|The Judas Tree|Emily Somerton|1988|vanishing house|childhood mystery`,
  `What actually explains the house that seemed to vanish in Emily's childhood?|It was a film-set facade blown down|It was a reflection in a lake|It was a caravan driven away|It was hidden by a rising curtain|Hard|2010|Easter special|The Judas Tree|film set|wind|vanishing house|1988`,
  `What happens to Harriet Dore in front of witnesses at Green Lanterns?|She appears to fall from a window|She seems to drown in a locked bath|She disappears into an empty mirror|She is found under a fallen chandelier|Medium|2010|Easter special|The Judas Tree|Harriet Dore|window fall|staged death|Emily accused`,
  `Who is accused and convicted after Harriet Dore's apparent murder?|Emily Somerton|Mrs Gantry|Joey Ross|Selima El Sharad|Medium|2010|Easter special|The Judas Tree|Emily Somerton|false accusation|trial|Harriet Dore`,
  `Who is the woman actually thrown from the window during the staged murder?|Kim|Harriet Dore|Mrs Gantry|Joey Ross|Hard|2010|Easter special|The Judas Tree|Kim|window victim|Harriet disguise|revenge`,
  `Why do Hugo and Harriet Dore target Emily and Kim?|They blame them for the death of Hugo's brother Danny|They believe Emily stole the family fortune|Kim published Hugo's unfinished novel|They suspect Emily of stealing jewellery|Hard|2010|Easter special|The Judas Tree|Danny Dore|Hugo Dore|Harriet Dore|revenge motive`,
  `Who is revealed alive near the Judas Tree after seemingly being murdered?|Harriet Dore|Kim|Selima El Sharad|Mrs Gantry|Hard|2010|Easter special|The Judas Tree|Harriet Dore|fake death|Judas Tree|conspiracy revealed`,
  `Which magician makes his last appearance in The Judas Tree?|Adam Klaus|Kenny Starkiss|Alan Kalanak|Lance Gessler|Medium|2010|Easter special|The Judas Tree|Adam Klaus|Stuart Milligan|final appearance|illusionist`,
  `Who plays the paranormal investigator Joey Ross in The Judas Tree?|Sheridan Smith|Caroline Quentin|Julia Sawalha|Sarah Alexander|Easy|2010|Easter special|The Judas Tree|Sheridan Smith|Joey Ross|investigator|cast`,

  // 2013 Easter special: The Clue of the Savant's Thumb
  `Who is Jonathan Creek married to by The Clue of the Savant's Thumb?|Polly|Maddy|Carla|Joey|Easy|2013|Easter special|The Clue of the Savant's Thumb|Polly Creek|Jonathan wife|new life|Sarah Alexander`,
  `Which actress first plays Jonathan's wife Polly in The Clue of the Savant's Thumb?|Sarah Alexander|Sheridan Smith|Julia Sawalha|Caroline Quentin|Easy|2013|Easter special|The Clue of the Savant's Thumb|Sarah Alexander|Polly Creek|first appearance|cast`,
  `What kind of work has Jonathan taken up since leaving the world of stage magic?|Advertising and marketing|Police forensics|Museum conservation|Newspaper reporting|Easy|2013|Easter special|The Clue of the Savant's Thumb|marketing career|advertising job|career change|married life`,
  `Which old police acquaintance returns in The Clue of the Savant's Thumb?|DI Gideon Pryke|Superintendent Ted Parnevik|Inspector Bulstrode|DI Adrian Fell|Medium|2013|Easter special|The Clue of the Savant's Thumb|Gideon Pryke|Rik Mayall|returning detective|investigation`,
  `Which actor plays DI Gideon Pryke in The Clue of the Savant's Thumb?|Rik Mayall|Nigel Planer|Paul McGann|Jack Dee|Easy|2013|Easter special|The Clue of the Savant's Thumb|Rik Mayall|Gideon Pryke|guest star|police`,
  `What condition affects Gideon Pryke when he returns in the 2013 special?|He is largely paralysed and uses a wheelchair|He has completely lost his sight|He has permanent amnesia|He is unable to hear or speak|Medium|2013|Easter special|The Clue of the Savant's Thumb|Gideon Pryke|wheelchair|paralysis|disability`,
  `Which renowned intellectual is found dead before his corpse vanishes from a locked study?|Franklin Tartikoff|Hugo Dore|Thadeus Northcote|Justin Mallory|Easy|2013|Easter special|The Clue of the Savant's Thumb|Franklin Tartikoff|missing body|locked study|Nigel Planer`,
  `Who plays Franklin Tartikoff in The Clue of the Savant's Thumb?|Nigel Planer|Rik Mayall|Paul McGann|Adrian Edmondson|Medium|2013|Easter special|The Clue of the Savant's Thumb|Nigel Planer|Franklin Tartikoff|guest actor|intellectual`,
  `Which actress plays Franklin's wife Rosalind in the 2013 special?|Joanna Lumley|Doreen Mantle|Judy Parfitt|Sasha Behar|Easy|2013|Easter special|The Clue of the Savant's Thumb|Joanna Lumley|Rosalind Tartikoff|guest actress|family`,
  `What is the name of Franklin and Rosalind Tartikoff's adopted daughter?|Fariba|Emily|Elodie|Mina|Medium|2013|Easter special|The Clue of the Savant's Thumb|Fariba Tartikoff|Hasina Haque|adopted daughter|spiritual journey`,
  `What makes the apparent disappearance of Franklin's body especially perplexing?|Witnesses saw the body and photographic evidence exists|The coffin was buried with a police guard|The body disappeared from an ambulance on live television|He had been declared dead three years earlier|Hard|2013|Easter special|The Clue of the Savant's Thumb|Franklin Tartikoff|witness accounts|photographic proof|disappearing corpse`,
  `What is the name of the abandoned convent school connected to Rosalind's youth?|Waxwood Hall|Green Lanterns|Metropolis|Gorgons Wood|Medium|2013|Easter special|The Clue of the Savant's Thumb|Waxwood Hall|convent school|Rosalind Tartikoff|1960s`,
  `What strange marks were seen on schoolgirls' foreheads in the 1960s mystery?|Red rings|Blue crosses|Black stars|White handprints|Medium|2013|Easter special|The Clue of the Savant's Thumb|red rings|convent pupils|1960s|supernatural claims`,
  `What earlier tragedy haunts memories of the girls' school in the 2013 special?|A pupil's mysterious death in a dormitory|The disappearance of the headmistress at sea|A fire that destroyed the chapel|A fatal crash involving the school bus|Medium|2013|Easter special|The Clue of the Savant's Thumb|schoolgirl death|dormitory|Waxwood Hall|past mystery`,
  `What is Rosalind Tartikoff's academic field as an adult?|Humanities and modern philosophy|Astrophysics|Medieval archaeology|Molecular biology|Medium|2013|Easter special|The Clue of the Savant's Thumb|Rosalind Tartikoff|modern philosophy|lecturer|religious sceptic`,
  `Who plays the Tartikoff family's doctor Peter Churchill in the 2013 special?|Michael Lumsden|Paul McGann|Nicholas Boulton|Steven Berkoff|Medium|2013|Easter special|The Clue of the Savant's Thumb|Michael Lumsden|Peter Churchill|family doctor|guest actor`,
  `Which actress makes her final appearance as Joey Ross in the 2013 special?|Sheridan Smith|Julia Sawalha|Caroline Quentin|Sarah Alexander|Medium|2013|Easter special|The Clue of the Savant's Thumb|Sheridan Smith|Joey Ross|final appearance|cast`,
  `What is peculiar about the hand shown inside Franklin Tartikoff's pocket in the crime-scene photograph?|His customary visible thumb is missing|He is wearing a different wedding ring|It is holding an unlit cigarette|There is a large tattoo on his wrist|Hard|2013|Easter special|The Clue of the Savant's Thumb|Franklin Tartikoff|hand in pocket|hidden thumb|photographic clue`,
  `What sort of stage illusion is connected with the mystery of Franklin Tartikoff's death?|A sawing-a-person-in-half trick|A levitating table act|An underwater escape|A bullet-catching illusion|Hard|2013|Easter special|The Clue of the Savant's Thumb|Franklin Tartikoff|saw illusion|stage apparatus|death explanation`,
  `What is the real interest of the secret society linked with Franklin Tartikoff?|Stage magic and illusion design|Astrological prediction|Rare manuscript forgery|Medieval religious ritual|Hard|2013|Easter special|The Clue of the Savant's Thumb|Franklin Tartikoff|secret society|magic circle|illusion design`,
  `Which childhood-convent detail points towards a non-supernatural cause of the schoolgirls' visions?|Sugar cubes associated with drug-induced experiences|A hidden speaking tube|A projector in the chapel roof|Coloured glass in the windows|Hard|2013|Easter special|The Clue of the Savant's Thumb|convent school|sugar cubes|hallucinations|Rosalind past`,
  `What kind of recording sparks the political conspiracy at the end of the 2013 special?|A highly realistic satirical Whitehall conversation|A secret celebrity wedding video|A forged police training film|An edited weather forecast|Hard|2013|Easter special|The Clue of the Savant's Thumb|Franklin Tartikoff|Whitehall satire|political conspiracy|video recording`,
  `Who both writes and directs The Clue of the Savant's Thumb?|David Renwick|Sandy Johnson|Keith Washington|Verity Lambert|Medium|2013|Easter special|The Clue of the Savant's Thumb|series creator|writer|director|production`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 390: malformed row ${index + 1}`);
  }
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 390: invalid difficulty at row ${index + 1}`);
  }
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
    throw new Error(`Pack 390: repeated answer at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length < 12) {
    throw new Error(`Pack 390: inadequate distinct tags at row ${index + 1}`);
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
