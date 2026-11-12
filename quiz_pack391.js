
// PuzzlePilot - Big Quiz - Pack 391
// Jonathan Creek - Series 5 (2014) and Daemons' Roost (2016)
// Final Jonathan Creek coverage. Full WordPad-ready CommonJS file.
// First ID: tv_21159. Packs 381-390 remain held, not deployed.
'use strict';

const FIRST_ID = 21159;
const commonTags = ['television', 'British TV', 'BBC One', 'Jonathan Creek', 'David Renwick', 'mystery drama'];

// Format: question | correct answer | three distractors | difficulty | seven specific tags.
const rows = [
  // Series 5, episode 1: The Letters of Septimus Noone (2014)
  `Which stage musical is being performed when the backstage crime occurs in The Letters of Septimus Noone?|The Mystery of the Yellow Room|The Grave Digger|The Phantom of the Windmill|The Black Canary|Easy|2014|series 5|The Letters of Septimus Noone|The Mystery of the Yellow Room|West End musical|backstage attack|theatre`,
  `Which French author wrote the mystery novel that inspired the musical in The Letters of Septimus Noone?|Gaston Leroux|Jules Verne|Maurice Leblanc|Emile Zola|Medium|2014|series 5|The Letters of Septimus Noone|Gaston Leroux|Yellow Room novel|French literature|adaptation`,
  `Which singer is found badly wounded in a locked dressing room in The Letters of Septimus Noone?|Juno Pirelli|Zelda Niedlespascher|Rachel|Sharon|Easy|2014|series 5|The Letters of Septimus Noone|Juno Pirelli|dressing room|wounded singer|locked room`,
  `Which actress plays the injured musical star Juno Pirelli?|Ali Bastian|Raquel Cassidy|Paula Wilcox|Alice O'Connell|Medium|2014|series 5|The Letters of Septimus Noone|Ali Bastian|Juno Pirelli|guest cast|musical performer`,
  `What appears to make Juno Pirelli's attack impossible?|The dressing room is locked with no sign of an intruder|The stage is surrounded by police|Her dressing room is underwater|The entire theatre has been evacuated|Easy|2014|series 5|The Letters of Septimus Noone|Juno Pirelli|locked dressing room|impossible attack|theatre`,
  `Who directs the musical production in The Letters of Septimus Noone?|Zelda Niedlespascher|Hazel Prosser|Sharon|Polly Creek|Medium|2014|series 5|The Letters of Septimus Noone|Zelda Niedlespascher|theatre director|musical production|Marianne Borgo`,
  `Which actress portrays the show's director Zelda Niedlespascher?|Marianne Borgo|Ali Bastian|Sarah Alexander|Paula Wilcox|Medium|2014|series 5|The Letters of Septimus Noone|Marianne Borgo|Zelda Niedlespascher|guest performer|director`,
  `Which performer plays Christophe Holtz in the Yellow Room musical mystery?|Simon Thomas|Ross Armstrong|Rhydian Jones|Kieran Hodgson|Medium|2014|series 5|The Letters of Septimus Noone|Simon Thomas|Christophe Holtz|musical cast|theatre`,
  `Which woman actually stabs Juno Pirelli before the apparent locked-room crime?|Rachel|Hazel Prosser|Zelda Niedlespascher|Sharon|Hard|2014|series 5|The Letters of Septimus Noone|Rachel|Juno Pirelli|jealous attack|Alice O'Connell`,
  `Why does Rachel attack Juno Pirelli in The Letters of Septimus Noone?|Jealousy involving her husband Angus|A dispute over stolen jewellery|A disagreement about a book contract|Revenge for a ruined magic trick|Hard|2014|series 5|The Letters of Septimus Noone|Rachel|Angus|Juno Pirelli|jealousy motive`,
  `Who helps conceal Juno's injuries with professional make-up?|Darryl Kimble|Ridley|Christophe Holtz|Mr Partridge|Medium|2014|series 5|The Letters of Septimus Noone|Darryl Kimble|make-up artist|Juno Pirelli|concealed wounds`,
  `What resolves the central locked-room mystery involving Juno Pirelli?|She was injured before entering the locked room|The attacker entered through a trapdoor|A hidden spring fired a knife|A twin took her place backstage|Hard|2014|series 5|The Letters of Septimus Noone|Juno Pirelli|earlier stabbing|make-up concealment|mystery solution`,
  `What is unusual about the signature on the painting that catches Jonathan's eye?|It appears at the top-left rather than the bottom-right|It is written in mirror writing|It is stamped on the frame's back|It glows under ultraviolet light|Hard|2014|series 5|The Letters of Septimus Noone|Sawjoy signature|upside-down painting|visual clue|Jonathan deduction`,
  `Which enthusiastic student tries to learn Jonathan's methods in The Letters of Septimus Noone?|Ridley|Angus|Darryl|Christophe|Easy|2014|series 5|The Letters of Septimus Noone|Ridley|Kieran Hodgson|would-be assistant|student detective`,
  `What career does Ridley hope to pursue after studying criminology?|Forensic detection|Stage directing|Music journalism|Museum conservation|Medium|2014|series 5|The Letters of Septimus Noone|Ridley|criminology|forensic career|Jonathan mentor`,
  `What is the name of Ridley's imaginative younger sibling?|Ripley|Rachel|Juno|Polly|Medium|2014|series 5|The Letters of Septimus Noone|Ripley|Ridley|Sharon family|imaginary friend`,
  `Who is Polly's mother's close friend, involved in the mysterious letters?|Hazel Prosser|Zelda Niedlespascher|Sharon|Rachel|Medium|2014|series 5|The Letters of Septimus Noone|Hazel Prosser|Paula Wilcox|Polly family|forged letters`,
  `Where is the box of apparent love letters hidden in Polly's family home?|Beneath a bedroom floorboard|Behind a kitchen cupboard|Inside the chimney flue|Under a garden sundial|Medium|2014|series 5|The Letters of Septimus Noone|Polly Creek|bedroom floorboard|hidden letters|family mystery`,
  `Who was Septimus Noone, the supposed lover named in Polly's mother's letters?|An invented person rather than a real lover|Her mother's former schoolteacher|A soldier who emigrated to Canada|The theatre's retired producer|Hard|2014|series 5|The Letters of Septimus Noone|Septimus Noone|imaginary lover|fabricated affair|family reveal`,
  `Why were the false love letters devised by Polly's dying mother and Hazel?|To lessen her husband's future grief by tarnishing her own memory|To expose a secret theatrical affair|To stop Polly selling the house|To frame an estranged relative for theft|Hard|2014|series 5|The Letters of Septimus Noone|Hazel Prosser|Polly mother|false romance|grief motive`,
  `What wordplay makes the supposed name Septimus Noone significant?|Noone can be read as no one|It is an anagram of Polly Creek|The initials spell a musical note|It is Latin for locked room|Hard|2014|series 5|The Letters of Septimus Noone|Septimus Noone|no-one wordplay|imaginary identity|Jonathan explanation`,
  `What accounts for a mysterious coffee ring seemingly disappearing from a newspaper page?|A partner's desk has been turned around and two copies confused|The coffee evaporates from the paper|A magician replaces the page with a mirror|The ink changes colour in sunlight|Hard|2014|series 5|The Letters of Septimus Noone|partner desk|coffee ring|newspaper copies|second puzzle`,

  // Series 5, episode 2: The Sinner and the Sandman (2014)
  `Which retired psychic magician appears to have predicted winning lottery numbers long in advance?|Eric Ipswich|Horace Greeley|Hugh Chater|Crispin Gilpin|Easy|2014|series 5|The Sinner and the Sandman|Eric Ipswich|psychic magician|lottery mystery|recluse`,
  `What stage name did Eric Ipswich use during his career as a supposed clairvoyant?|The Amazing Astrodamus|Professor Fate|The Great Mentallo|The Mystic Sandman|Easy|2014|series 5|The Sinner and the Sandman|Amazing Astrodamus|Eric Ipswich|stage identity|clairvoyant`,
  `Which actor plays the elderly psychic Eric Ipswich?|David Gant|John Bird|Michael Troughton|John Voce|Medium|2014|series 5|The Sinner and the Sandman|David Gant|Eric Ipswich|guest actor|retired magician`,
  `Where are the apparently prophetic lottery numbers discovered?|On a wall beneath several layers of wallpaper|Carved inside a church bell|Inside a sealed glass bottle|On the back of an old theatre ticket|Easy|2014|series 5|The Sinner and the Sandman|hidden numbers|wallpaper layers|Eric Ipswich|apparent prediction`,
  `Whose winning lottery numbers match the ancient writing on Eric's wall?|Sir Leonard Corbyn's|Hugh Chater's|Horace Greeley's|Crispin Gilpin's|Medium|2014|series 5|The Sinner and the Sandman|Leonard Corbyn|lottery winner|wall numbers|village benefactor`,
  `Which actor plays lottery winner Leonard Corbyn?|Michael Troughton|David Gant|John Voce|Tim Faraday|Medium|2014|series 5|The Sinner and the Sandman|Michael Troughton|Leonard Corbyn|guest cast|lottery scandal`,
  `What were the decades-old numbers originally written down to record?|Two telephone numbers|National Lottery predictions|An old bank account|Dates of two birthdays|Hard|2014|series 5|The Sinner and the Sandman|telephone numbers|Eric Ipswich|misread prophecy|mystery solution`,
  `What did the words Will and Win near the old numbers actually refer to?|The names William and Winifred|A secret magician's slogan|A horse racing bet|A prediction of a future prize|Hard|2014|series 5|The Sinner and the Sandman|William|Winifred|wall inscription|name abbreviations`,
  `What symbol between the old wall inscriptions is misread as a cross?|A plus sign|A pound sign|A question mark|An asterisk|Hard|2014|series 5|The Sinner and the Sandman|plus sign|wall writing|visual clue|misinterpretation`,
  `Who had actually selected the supposedly prophetic numbers for repeated lottery entries?|Captain Ian Amery-Cooper|Sir Leonard Corbyn|Rev Hugh Chater|Horace Greeley|Hard|2014|series 5|The Sinner and the Sandman|Ian Amery-Cooper|lottery numbers|real entrant|Salvation Army`,
  `Which organisation does Captain Ian Amery-Cooper serve?|The Salvation Army|The Royal British Legion|St John Ambulance|The National Trust|Medium|2014|series 5|The Sinner and the Sandman|Ian Amery-Cooper|Salvation Army|family history|John Voce`,
  `For roughly how long had Ian Amery-Cooper played his chosen lottery numbers before the cruel outcome?|Twelve years|Two years|Thirty years|Six months|Medium|2014|series 5|The Sinner and the Sandman|Ian Amery-Cooper|twelve years|regular lottery line|missed jackpot`,
  `Why does Jonathan challenge Leonard Corbyn's claim that he chose his winning numbers randomly?|Someone else had selected them using the old telephone numbers|The lottery machine was rigged|Corbyn had predicted every draw|A television camera recorded a forged ticket|Hard|2014|series 5|The Sinner and the Sandman|Leonard Corbyn|stolen winnings|telephone numbers|fraud allegation`,
  `What local building benefits from Leonard Corbyn's apparently generous donation?|The village hall|The police station|A private cinema|The village library|Medium|2014|series 5|The Sinner and the Sandman|Leonard Corbyn|village hall|guilt donation|community scandal`,
  `Who is the village vicar worried about a strange creature outside his home?|Rev Hugh Chater|Rev Wendell Wilkie|Horace Greeley|Captain Ian Amery-Cooper|Easy|2014|series 5|The Sinner and the Sandman|Hugh Chater|vicarage|mysterious beast|James Bachman`,
  `What is the first name of Reverend Chater's wife in The Sinner and the Sandman?|Alison|Laurel|Denise|Hazel|Medium|2014|series 5|The Sinner and the Sandman|Alison Chater|Selina Griffiths|vicarage|new baby`,
  `Who edits the parish newsletter that contains alarmingly private information?|Horace Greeley|Eric Ipswich|Leonard Corbyn|Crispin Gilpin|Easy|2014|series 5|The Sinner and the Sandman|Horace Greeley|parish newsletter|local gossip|John Bird`,
  `What do villagers claim to have seen near the vicarage at night?|A hump-backed creature with glowing green eyes|A white horse walking upright|A floating woman's silhouette|A giant owl carrying a lantern|Medium|2014|series 5|The Sinner and the Sandman|vicarage sighting|hump-backed beast|green eyes|night mystery`,
  `Which invasive plant causes a scare in the village, before the alarm is declared mistaken?|Japanese knotweed|Giant hogweed|Himalayan balsam|Rhododendron|Medium|2014|series 5|The Sinner and the Sandman|Japanese knotweed|garden scare|false identification|Polly Creek`,
  `Which childhood figure features in Polly's recurring disturbing dreams?|The Sandman|The Pied Piper|Father Christmas|The Tooth Fairy|Easy|2014|series 5|The Sinner and the Sandman|Polly Creek|Sandman|childhood nightmare|traumatic memory`,
  `What was the name of Polly's childhood pet rabbit, remembered through her Sandman nightmare?|Twitcher|Thumper|Snowball|Buttons|Hard|2014|series 5|The Sinner and the Sandman|Twitcher|Polly childhood|pet rabbit|Sandman memory`,

  // Series 5, episode 3: The Curse of the Bronze Lamp (2014)
  `Who is the high-profile kidnapping victim in The Curse of the Bronze Lamp?|Lindsey Isherwood|Daisy Shand|Denise|Laurel Greeley|Easy|2014|series 5|The Curse of the Bronze Lamp|Lindsey Isherwood|kidnapping|Elizabeth Conboy|politician family`,
  `Which actress portrays kidnapped problem-solving expert Lindsey Isherwood?|Elizabeth Conboy|Melanie Gray|Josie Lawrence|June Whitfield|Medium|2014|series 5|The Curse of the Bronze Lamp|Elizabeth Conboy|Lindsey Isherwood|guest actress|hostage`,
  `What is Lindsey Isherwood's professional specialty?|Computer solutions analysis|Weather forecasting|Stage magic design|Architectural restoration|Medium|2014|series 5|The Curse of the Bronze Lamp|Lindsey Isherwood|solutions analyst|computer expert|problem solving`,
  `What is the first name of Lindsey Isherwood's husband, a government minister?|Rowan|Dean|Kevin|Ethan|Medium|2014|series 5|The Curse of the Bronze Lamp|Rowan Isherwood|Lindsey husband|politician|Home Office`,
  `In which government department does Lindsey's husband hold a junior ministerial post?|The Home Office|The Foreign Office|The Treasury|The Department for Transport|Medium|2014|series 5|The Curse of the Bronze Lamp|Rowan Isherwood|Home Office|junior minister|politics`,
  `Where do the kidnappers hold Lindsey Isherwood prisoner?|In a bunker|On a boat|In a hotel wardrobe|Inside a theatre basement|Easy|2014|series 5|The Curse of the Bronze Lamp|Lindsey Isherwood|bunker|kidnap hideout|escape puzzle`,
  `What are the first names of the two kidnappers who hold Lindsey captive?|Karl and Ethan|Dean and Kevin|Hugh and Rowan|Darryl and Angus|Medium|2014|series 5|The Curse of the Bronze Lamp|Karl|Ethan|kidnap gang|captors`,
  `What is the name of Jonathan and Polly's cleaner in The Curse of the Bronze Lamp?|Denise|Daisy|Heidi|Alison|Easy|2014|series 5|The Curse of the Bronze Lamp|Denise|housekeeper|Josie Lawrence|Creek home`,
  `Which actress plays the Creeks' cleaner Denise?|Josie Lawrence|June Whitfield|Sarah Alexander|Melanie Gray|Medium|2014|series 5|The Curse of the Bronze Lamp|Josie Lawrence|Denise|guest actress|housekeeper`,
  `What is the first name of Denise's husband?|Dean|Kevin|Rowan|Karl|Medium|2014|series 5|The Curse of the Bronze Lamp|Dean|Denise husband|Mark Flitton|marital problems`,
  `Who is Kevin in the subplot involving Denise?|The male escort she arranges to meet|A policeman investigating a robbery|Lindsey's husband|Polly's brother|Medium|2014|series 5|The Curse of the Bronze Lamp|Kevin|male escort|Denise|mistaken identity`,
  `Where does Denise obtain the old bronze lamp that she thinks may bring her luck?|At a car boot sale|At a museum auction|From a stage magician|In her grandmother's attic|Easy|2014|series 5|The Curse of the Bronze Lamp|bronze lamp|car boot sale|Denise|lucky charm`,
  `What personal belonging from the missing Lindsey is found in the seemingly unrelated case?|Her wristwatch|Her wedding ring|Her driving licence|Her mobile telephone|Easy|2014|series 5|The Curse of the Bronze Lamp|Lindsey Isherwood|wristwatch|identity clue|missing woman`,
  `How does Lindsey get her wristwatch out of the kidnappers' hideout?|By sending it aloft inside a balloon|By slipping it into a delivery van|By hiding it inside a loaf of bread|By posting it in a letter|Hard|2014|series 5|The Curse of the Bronze Lamp|wristwatch|balloon delivery|hostage ingenuity|mystery solution`,
  `What garment is attached to the balloon as part of Lindsey's improvised signal?|A pair of tights|A knitted scarf|A leather glove|A cardigan|Hard|2014|series 5|The Curse of the Bronze Lamp|tights|balloon|kidnap signal|airborne clue`,
  `Where are the abandoned tights linked to Lindsey's balloon later found?|At a recycling centre|In a church vestry|Outside a theatre|Beside a police station|Medium|2014|series 5|The Curse of the Bronze Lamp|tights|recycling centre|balloon route|Jonathan investigation`,
  `Near whose home does the balloon finally burst after drifting across the countryside?|Kevin's|Horace Greeley's|Rowan Isherwood's|Daisy Shand's|Hard|2014|series 5|The Curse of the Bronze Lamp|Kevin|burst balloon|tree|wristwatch arrival`,
  `What does a witness mistake the windblown remains of Lindsey's balloon for?|A pink butterfly|A red kite|A white feather|A yellow ribbon|Hard|2014|series 5|The Curse of the Bronze Lamp|pink butterfly|burst balloon|witness clue|wind`,
  `What weather condition is essential to explaining the balloon's route in The Curse of the Bronze Lamp?|Strong winds|Thick fog|A sudden snowstorm|Heavy hail|Medium|2014|series 5|The Curse of the Bronze Lamp|strong winds|balloon journey|Lindsey Isherwood|location deduction`,
  `What is Daisy Shand's job when she encounters Jonathan again?|Weather forecaster|Crime reporter|Stage actress|Museum curator|Medium|2014|series 5|The Curse of the Bronze Lamp|Daisy Shand|weather presenter|Jonathan past|Polly jealousy`,
  `Which actress plays weather presenter Daisy Shand?|Melanie Gray|Elizabeth Conboy|Josie Lawrence|Ali Bastian|Medium|2014|series 5|The Curse of the Bronze Lamp|Melanie Gray|Daisy Shand|guest performer|weather forecaster`,
  `Which two elderly sisters conceal a secret in the Greeley household?|Heidi and Laurel|Hazel and Sharon|Rachel and Ripley|Joey and Carla|Medium|2014|series 5|The Curse of the Bronze Lamp|Heidi Greeley|Laurel Greeley|twin sisters|family secret`,
  `Which actress portrays both Heidi and Laurel Greeley?|June Whitfield|Judy Parfitt|Maureen Lipman|Doreen Mantle|Medium|2014|series 5|The Curse of the Bronze Lamp|June Whitfield|Greeley twins|dual role|guest actress`,

  // Final 2016 special: Daemons' Roost
  `What is the name of the forbidding house at the centre of Jonathan Creek's 2016 finale?|Daemons' Roost|Metropolis|Green Lanterns|Ghost's Forge|Easy|2016|final special|Daemons' Roost|Gothic mansion|haunted house|family secrets|setting`,
  `Which supposed 19th-century sorcerer is associated with the house in Daemons' Roost?|Jacob Surtees|Thadeus Northcote|Jacques Futrelle|Lance Gessler|Easy|2016|final special|Daemons' Roost|Jacob Surtees|Victorian legend|black magic|former owner`,
  `What apparently supernatural power was Jacob Surtees said to possess?|Telekinesis|Invisibility|The ability to stop time|Control over the weather|Medium|2016|final special|Daemons' Roost|Jacob Surtees|telekinesis|paranormal legend|Victorian tricks`,
  `What was Nathan Clore's profession before his declining health?|Horror film director|Private detective|Famous escapologist|Crime novelist|Easy|2016|final special|Daemons' Roost|Nathan Clore|1970s horror cinema|film director|Ken Bones`,
  `Which actor plays horror director Nathan Clore in Daemons' Roost?|Ken Bones|Emun Elliott|Jason Barnett|Warwick Davis|Medium|2016|final special|Daemons' Roost|Ken Bones|Nathan Clore|guest actor|horror films`,
  `Which condition prevents Nathan Clore from revealing his long-kept family secrets?|A debilitating stroke|Complete memory loss from a fall|A coma caused by poisoning|A severe infection causing blindness|Easy|2016|final special|Daemons' Roost|Nathan Clore|stroke|unable to communicate|secrets`,
  `Who returns to the house to learn what happened to her mother and sisters?|Alison Belkin|Imelda Belkin|Phillipa Teller|Nina|Easy|2016|final special|Daemons' Roost|Alison Belkin|surviving daughter|family deaths|homecoming`,
  `Which actress portrays adult Alison Belkin in Daemons' Roost?|Georgie Lord|Rosalind March|Nicole Cooper|Jo Martin|Medium|2016|final special|Daemons' Roost|Georgie Lord|Alison Belkin|guest actress|survivor`,
  `How is Alison related to film director Nathan Clore?|She is his stepdaughter|She is his granddaughter|She is his niece|She is his adopted sister|Easy|2016|final special|Daemons' Roost|Alison Belkin|Nathan Clore|stepfather|family relationship`,
  `Who is Alison's husband in Daemons' Roost?|Stephen Belkin|Ryman|Wendell Wilkie|Patrick Tyree|Easy|2016|final special|Daemons' Roost|Stephen Belkin|Alison husband|Emun Elliott|suspicious past`,
  `Which actor plays Stephen Belkin in the 2016 finale?|Emun Elliott|Ken Bones|Jason Barnett|Chris Forbes|Medium|2016|final special|Daemons' Roost|Emun Elliott|Stephen Belkin|guest actor|husband`,
  `What was the first name of Stephen Belkin's former wife, whose death Jonathan had investigated?|Imelda|Alison|Priscilla|Phillipa|Medium|2016|final special|Daemons' Roost|Imelda Belkin|first wife|poisoning|earlier case`,
  `What trick allowed Stephen's first wife to be poisoned despite the locked-room circumstances?|A concealed pill fell from a book into her drink|A gas was released from a wall vent|Her drinking glass had a poisoned rim|Poison was hidden inside a wristwatch|Hard|2016|final special|Daemons' Roost|Imelda Belkin|book mechanism|poison pill|locked-room death`,
  `Why is Jonathan's earlier work in the Imelda case tragically significant?|His evidence helped clear Stephen of a murder he had committed|Jonathan had lost the only forensic sample|He had mistakenly accused Nathan Clore|He had persuaded Imelda to leave the country|Hard|2016|final special|Daemons' Roost|previous investigation|Stephen Belkin|wrongful acquittal|Imelda murder`,
  `Why is Alison's inheritance potentially important to Stephen Belkin?|She is due to inherit the valuable Daemons' Roost estate|She owns a successful stage-magic business|Her father left her a record company|She has inherited an overseas mine|Hard|2016|final special|Daemons' Roost|Alison inheritance|Stephen Belkin|wealth motive|estate`,
  `What strange word does Alison remember hearing as a child in connection with her family's deaths?|Hobgoblin|Necromancer|Nightwatch|Belladonna|Medium|2016|final special|Daemons' Roost|Alison childhood|hobgoblin|frightening memory|family illness`,
  `Which medical term explains the frightening childhood word that Alison misheard?|Haemoglobin|Histamine|Insulin|Adrenaline|Hard|2016|final special|Daemons' Roost|haemoglobin|hobgoblin|misheard word|blood disorder`,
  `What really caused the deaths of Alison's mother and sisters in Daemons' Roost?|A rare blood disease|An ancient sorcerer's curse|Poisoning through the house's water|Toxic fumes from an old furnace|Hard|2016|final special|Daemons' Roost|blood disease|family tragedy|medical explanation|false haunting`,
  `Which minister visits Daemons' Roost and admires Jonathan's skill with impossible crimes?|Rev Wendell Wilkie|Rev Hugh Chater|Captain Ian Amery-Cooper|Father Jacob Surtees|Easy|2016|final special|Daemons' Roost|Wendell Wilkie|clergyman|Jonathan admirer|exorcism`,
  `Which actor plays the Reverend Wendell Wilkie in Daemons' Roost?|Warwick Davis|Jason Barnett|Ken Bones|John Bird|Easy|2016|final special|Daemons' Roost|Warwick Davis|Wendell Wilkie|guest actor|vicar`,
  `What religious procedure does Reverend Wilkie offer to perform at the sinister house?|An exorcism|A wedding blessing|A baptism|A funeral service|Medium|2016|final special|Daemons' Roost|Wendell Wilkie|exorcism|supposed evil spirit|house`,
  `Who acts as Nathan Clore's carer during his final illness?|Phillipa Teller|Alison Belkin|Imelda Belkin|Nina|Medium|2016|final special|Daemons' Roost|Phillipa Teller|Nathan Clore|carer|Rosalind March`,
  `Which actor plays the apparently helpful security worker Ryman in Daemons' Roost?|Jason Barnett|Chris Forbes|Emun Elliott|Ryan Oliva|Medium|2016|final special|Daemons' Roost|Jason Barnett|Ryman|security contractor|revenge plot`,
  `Who is secretly pursuing vengeance against Stephen Belkin in the finale?|Ryman|Nathan Clore|Wendell Wilkie|Patrick Tyree|Hard|2016|final special|Daemons' Roost|Ryman|Stephen Belkin|revenge motive|security surveillance`,
  `How is Ryman connected to Stephen Belkin's first wife Imelda?|Imelda was his wife's sister|Imelda was his mother|Imelda was his former employer|Imelda was his aunt|Hard|2016|final special|Daemons' Roost|Ryman|Imelda Belkin|sister-in-law|family vengeance`,
  `What old room supplies the means for Ryman's gruesome revenge on Stephen?|A dungeon with a fiery torture mechanism|A hidden ballroom with a trapdoor|A cold-storage cellar|A flooded underground chapel|Hard|2016|final special|Daemons' Roost|Ryman|Stephen Belkin|dungeon|fiery furnace`,
  `What happens to Alison while Ryman carries out his revenge in the dungeon?|She is drugged and restrained so she must watch|She is locked outside the house|She is hypnotised into forgetting the event|She escapes through a secret chimney|Hard|2016|final special|Daemons' Roost|Alison Belkin|restrained witness|Ryman revenge|dungeon`,
  `Which director returned to direct the last Jonathan Creek special, Daemons' Roost?|Sandy Johnson|David Sant|David Renwick|Keith Washington|Medium|2016|final special|Daemons' Roost|Sandy Johnson|episode director|production|series finale`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(value => value.trim());
  if (parts.length !== 13 || parts.some(value => !value)) {
    throw new Error(`Pack 391: malformed row ${index + 1}`);
  }
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 391: invalid difficulty in row ${index + 1}`);
  }
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(value => value.toLowerCase())).size !== 4) {
    throw new Error(`Pack 391: duplicate option in row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length !== 13) {
    throw new Error(`Pack 391: expected 13 distinct tags in row ${index + 1}, got ${tags.length}`);
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
