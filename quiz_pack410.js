
// PuzzlePilot - Big Quiz - Pack 410
// Agatha Raisin (2014 pilot; television series 2016-2022; Agathaland 2023).
// Four broadcast series and documentary covered; fifth TV series not yet released.
// Ongoing/possible return: LAVENDER; review 1 January 2027.
// Full WordPad-ready CommonJS file. First ID: tv_22921.
'use strict';

const FIRST_ID = 22921;
const commonTags = [
  'television', 'Agatha Raisin', 'British crime comedy',
  'M C Beaton adaptation', 'Cotswolds mysteries', 'amateur detective drama'
];

// Question | correct | incorrect 1 | incorrect 2 | incorrect 3 | difficulty | seven precise tags.
// Question text includes programme name; options are rotated for varied answer positions.
const rows = [
  `Which actress plays the title character in the television series Agatha Raisin?|Ashley Jensen|Anna Maxwell Martin|Sally Lindsay|Siobhan Finneran|Easy|Ashley Jensen|Agatha Raisin character|lead actress|casting|2014 pilot|four series|Scottish performer`,
  `Which writer created the detective featured in the television series Agatha Raisin?|M. C. Beaton|Ann Cleeves|Caroline Graham|Val McDermid|Easy|M C Beaton|novel author|literary origins|crime fiction|screen adaptation|book series|creator`,
  `What was the real name of Agatha Raisin novelist M. C. Beaton?|Marion Chesney|P. D. James|Ruth Rendell|Dorothy Sayers|Medium|Marion Chesney|author real name|M C Beaton pseudonym|Scottish novelist|literary biography|crime writer|original books`,
  `In which year was the first Agatha Raisin novel The Quiche of Death published?|1992|1982|2002|2012|Medium|1992 publication|The Quiche of Death|first novel|book origins|literary chronology|M C Beaton|debut mystery`,
  `Which broadcaster first showed the Agatha Raisin television pilot in 2014?|Sky One|BBC One|ITV|Channel 5|Easy|Sky One|pilot broadcast|2014|UK network|initial commission|television debut|broadcast history`,
  `On what date did the Agatha Raisin television pilot first air in the UK?|26 December 2014|1 January 2016|31 October 2014|25 December 2018|Medium|Boxing Day|26 December 2014|pilot date|Sky One|Christmas scheduling|premiere|television chronology`,
  `What is the title of the 2014 television pilot for Agatha Raisin?|The Quiche of Death|The Vicious Vet|The Haunted House|The Curious Curate|Easy|The Quiche of Death|2014 pilot|first adaptation|Christmas special|poisoned food|series launch|episode title`,
  `What sort of work does Agatha leave behind in London at the start of Agatha Raisin?|Public relations|Veterinary medicine|Police forensics|Teaching history|Easy|London career|public relations|PR consultant|early retirement|backstory|former profession|character motivation`,
  `Which fictional village does Agatha move to in the television series Agatha Raisin?|Carsely|Midsomer Parva|Grantchester|Kembleford|Easy|Carsely|fictional village|country relocation|setting|rural neighbours|local mysteries|place name`,
  `Which English region is the principal setting of Agatha Raisin?|The Cotswolds|The Yorkshire Dales|The Lake District|The Norfolk Broads|Easy|Cotswolds|Gloucestershire countryside|rural setting|English villages|location|regional identity|countryside`,
  `What is the principal mix of genres in the television series Agatha Raisin?|Comedy and murder mystery|Science fiction and horror|Medical drama and romance only|Historical war documentary|Easy|crime comedy|whodunnit|mysteries|humour|television genre|amateur sleuth|tone`,
  `Which production company bought the screen option for Agatha Raisin in 2007?|Free@Last TV|Kudos|Wall to Wall|Hartswood Films|Medium|Free at Last TV|2007 rights|production company|book option|adaptation history|screen development|commission`,
  `Which streaming service commissioned new Agatha Raisin television mysteries after the Sky One first series?|Acorn TV|Netflix|Disney Plus|BritBox alone|Easy|Acorn TV|series two|streaming commission|international distribution|production transition|2018|platform`,
  `How many regular mysteries followed the Agatha Raisin pilot in the first series broadcast in 2016?|Eight|Four|Ten|Twelve|Medium|eight episodes|2016|series one|Sky One|season structure|original run|television schedule`,
  `How many feature-length mystery stories comprised the second television series of Agatha Raisin?|Three|Five|Seven|Nine|Medium|three stories|series two|2018 to 2019|Acorn TV|90 minute mysteries|adaptations|episode structure`,
  `How many main mystery stories were made for the third television series of Agatha Raisin?|Four|Two|Six|Eight|Medium|four mysteries|series three|2019 to 2020|Acorn TV|feature length|season structure|case count`,
  `What is the name of the 2023 behind-the-scenes documentary about the making of Agatha Raisin?|Agathaland|Raisin Country|The Cases Revisited|The Carsely Files|Medium|Agathaland|2023 documentary|behind the scenes|script to screen|programme making|companion special|production history`,
  `What does the documentary Agathaland chiefly examine?|How the crime comedy moved from script to screen|The development of a Cotswolds railway|The career of a real police superintendent|A London advertising agency's annual accounts|Medium|Agathaland|script to screen|documentary subject|2023|production process|television adaptation|behind camera`,
  `Which other American television comedy-drama helped make Agatha Raisin star Ashley Jensen known internationally?|Ugly Betty|The Good Place|Modern Family|Desperate Housewives|Medium|Ashley Jensen|Ugly Betty|American television|acting career|international success|casting background|performer credits`,
  `Which actor plays Agatha's neighbour and on-and-off love interest James Lacey in Agatha Raisin?|Jamie Glover|Jason Merrells|Mathew Horne|Matt McCooey|Easy|Jamie Glover|James Lacey|neighbour|romantic storyline|cast|relationship|male lead`,
  `Who plays the aristocratic Sir Charles Fraith in Agatha Raisin?|Jason Merrells|Jamie Glover|Jason Barnett|Rhashan Stone|Easy|Jason Merrells|Sir Charles Fraith|aristocrat|Agatha friend|cast|romantic tension|character`,
  `Which actor portrays Agatha's former PR colleague Roy Silver in Agatha Raisin?|Mathew Horne|Jamie Glover|Matt McCooey|Taz Skylar|Easy|Mathew Horne|Roy Silver|former colleague|public relations|Agatha ally|cast|character`,
  `Which television sitcom made Agatha Raisin cast member Mathew Horne especially well known?|Gavin & Stacey|The Inbetweeners|The IT Crowd|The Office|Medium|Mathew Horne|Gavin and Stacey|acting career|Roy Silver actor|British sitcom|other role|performer history`,
  `Who plays local police officer Bill Wong in Agatha Raisin?|Matt McCooey|Jason Barnett|Jamie Glover|Jason Merrells|Easy|Matt McCooey|Bill Wong|police detective|Agatha ally|cast|Carsely investigations|character`,
  `Which actress plays Sarah Bloxby in Agatha Raisin?|Lucy Liemann|Katy Wix|Jodie Tyack|Caroline Langrishe|Easy|Lucy Liemann|Sarah Bloxby|church community|Agatha confidante|cast|friendship|character`,
  `Who plays Inspector Denzel Wilkes in Agatha Raisin?|Jason Barnett|Matt McCooey|Rhashan Stone|Taz Skylar|Medium|Jason Barnett|Denzel Wilkes|police inspector|rival investigator|cast|local police|character`,
  `Which actress portrays Agatha's friend Gemma Simpson in the first two series of Agatha Raisin?|Katy Wix|Jodie Tyack|Marcia Warren|Daisy Beaumont|Medium|Katy Wix|Gemma Simpson|series one and two|Agatha friend|cast|housekeeping|character`,
  `Which young investigator joins Agatha's agency in the third series of Agatha Raisin?|Toni Gilmour|Gemma Simpson|Mary Fortune|Sheila Barr|Medium|Toni Gilmour|detective agency|series three|new assistant|Gemma cousin|Jodie Tyack|team changes`,
  `Which actress plays Toni Gilmour in Agatha Raisin?|Jodie Tyack|Katy Wix|Lucy Liemann|Daisy Beaumont|Medium|Jodie Tyack|Toni Gilmour|series three and four|agency team|cast|young detective|character`,
  `What unusual memory skill helps Toni Gilmour with detective work in Agatha Raisin?|An eidetic memory|An inability to forget faces only|Perfect musical pitch|The ability to read Braille instantly|Medium|Toni Gilmour|eidetic memory|detective skill|series three|clue recall|agency assistant|investigative ability`,
  `How are Toni Gilmour and Gemma Simpson related in Agatha Raisin?|They are cousins|They are twins|They are mother and daughter|They are sisters-in-law|Medium|Toni Gilmour|Gemma Simpson|cousins|character connection|series three transition|family relationship|team changes`,
  `Which actress plays the elderly villager Mrs Boggle in Agatha Raisin?|Marcia Warren|June Watson|Caroline Langrishe|Katy Wix|Medium|Marcia Warren|Mrs Boggle|Carsely resident|older neighbour|supporting actress|recurring role|cast`,
  `Which actress portrays Mary Fortune, a girlfriend of James Lacey, in Agatha Raisin's first series?|Daisy Beaumont|Lucy Liemann|Katy Wix|Caroline Langrishe|Medium|Daisy Beaumont|Mary Fortune|James girlfriend|series one|The Potted Gardener|actor casting|victim character`,
  `Which actress plays James Lacey's sister Sheila Barr in Agatha Raisin?|Caroline Langrishe|Marcia Warren|Daisy Beaumont|Jodie Tyack|Medium|Caroline Langrishe|Sheila Barr|James sister|family relationship|series one three four|cast|returning character`,
  `Who plays the Reverend Jez Bloxby in much of the early television series Agatha Raisin?|Rhashan Stone|Matt McCooey|Jason Merrells|Jamie Glover|Medium|Rhashan Stone|Jez Bloxby|reverend|Sarah husband|series one|cast|church`,
  `Which actor plays hired investigator Harry Beam in the fourth series of Agatha Raisin?|Taz Skylar|Mathew Horne|Jason Barnett|Jamie Glover|Hard|Taz Skylar|Harry Beam|agency recruit|series four|supporting cast|private detective|role credit`,
  `Which Agatha Raisin character works as a local policeman but often finds Agatha involved in his cases?|Bill Wong|Roy Silver|James Lacey|Sir Charles Fraith|Easy|Bill Wong|police constable|Matt McCooey|crime investigations|Agatha friend|law enforcement|recurring role`,
  `Which Agatha Raisin character is an aristocratic friend with an often flirtatious relationship with her?|Sir Charles Fraith|DC Bill Wong|Rev Jez Bloxby|Roy Silver|Medium|Charles Fraith|Jason Merrells|aristocratic friend|flirtation|romantic triangle|relationship|recurring character`,
  `Which of Agatha's friends in Agatha Raisin is linked to the village church and later becomes a curate herself?|Sarah Bloxby|Toni Gilmour|Gemma Simpson|Mrs Boggle|Medium|Sarah Bloxby|church role|parish curate|Lucy Liemann|series four|character progression|religious community`,
  `At the end of the fourth series of Agatha Raisin, which police officer becomes engaged to Toni Gilmour?|Bill Wong|Denzel Wilkes|Roy Silver|James Lacey|Medium|Bill Wong|Toni Gilmour|engagement|series four|romance|relationship development|season ending`,
  `Which village competition brings Agatha under suspicion in the Agatha Raisin pilot The Quiche of Death?|A quiche-baking competition|A sheepdog trial|A vegetable-growing competition|A flower-arranging contest|Easy|pilot|The Quiche of Death|baking contest|local community|poisoning|2014|first case`,
  `Why does Agatha enter the village baking contest in the pilot of Agatha Raisin?|To win acceptance among her new neighbours|To qualify as a professional chef|To sell her London business|To win a trip to Paris|Medium|The Quiche of Death|neighbours|fitting in|Carsely|Agatha motivation|2014 pilot|community acceptance`,
  `What embarrassing secret does Agatha conceal about her entry in the quiche competition in Agatha Raisin?|She bought the quiche rather than baking it|She accidentally burned the village hall|She stole the trophy|She made it with a recipe from James|Medium|The Quiche of Death|shop bought pastry|baking deception|2014|Agatha scheme|competition|detective debut`,
  `Who dies after eating a poisoned quiche in the Agatha Raisin pilot?|Major Andy Cummings-Browne|Sir Charles Fraith|DC Bill Wong|Reverend Jez Bloxby|Medium|Andy Cummings Browne|quiche poison|murder victim|The Quiche of Death|2014|competition judge|pilot mystery`,
  `Which poisonous plant is implicated in the quiche murder in the Agatha Raisin pilot?|Cowbane|Belladonna|Foxglove|Oleander|Hard|cowbane|plant toxin|poisoning method|The Quiche of Death|2014 pilot|murder clue|forensic evidence`,
  `In the Agatha Raisin story The Walkers of Dembley, what sort of group do Agatha and James infiltrate?|A rambling club|A choir|A tennis club|A book society|Medium|The Walkers of Dembley|ramblers|walking group|2016|undercover|James Lacey|episode plot`,
  `What false relationship do Agatha and James adopt while investigating The Walkers of Dembley in Agatha Raisin?|They pretend to be a married couple|They pretend to be siblings|They pretend to be police partners|They pretend to be aunt and nephew|Medium|The Walkers of Dembley|undercover marriage|James Lacey|2016|walking club|investigation tactic|pretence`,
  `Which crime draws Agatha into the Hell's Bells episode of Agatha Raisin?|The murder of a church bell ringer|The theft of a cathedral organ|The kidnapping of a choir director|The disappearance of a vicar's dog|Medium|Hells Bells|bell ringer|church murder|series one|2016|victim occupation|episode plot`,
  `In the Agatha Raisin episode The Wellspring of Death, which official is killed?|The parish council chairman|The village postmaster|The school headteacher|The county coroner|Medium|The Wellspring of Death|parish council|chairman death|2016|local government|murder investigation|series one`,
  `What annual community event is approaching when Mary Fortune is found dead in Agatha Raisin's The Potted Gardener?|A village gardening competition|A fishing competition|A baking festival|A Christmas market|Medium|The Potted Gardener|Mary Fortune|garden competition|2016|James girlfriend|local rivalry|episode setting`,
  `In Agatha Raisin's The Vicious Vet, what is the murdered man's profession?|Veterinary surgeon|Dentist|Solicitor|Headmaster|Easy|The Vicious Vet|veterinarian|murder victim|animal care|series one|2016|episode mystery`,
  `What had Agatha done with the murder victim shortly before the killing in The Vicious Vet episode of Agatha Raisin?|Gone on a date with him|Taken a cooking class from him|Bought a house from him|Trained a dog with him|Medium|The Vicious Vet|Agatha date|romantic subplot|2016|dead veterinarian|personal connection|episode events`,
  `Which victim's death launches the mystery in Agatha Raisin's The Day the Floods Came?|A bride|A police inspector|A gardener|An undertaker|Medium|The Day the Floods Came|murdered bride|wedding tragedy|2016|series one|victim identity|episode plot`,
  `What sort of local figure is killed in Agatha Raisin's The Witch of Wyckhadden?|A mystic|A veterinarian|A solicitor|A bell ringer|Medium|The Witch of Wyckhadden|mystic death|fortune telling|2016|Wyckhadden|bludgeoning|episode plot`,
  `What event is disrupted by an unwelcome arrival in Agatha Raisin's The Murderous Marriage?|Agatha's wedding to James|Sarah's christening|Roy's engagement party|Charles's birthday dinner|Medium|The Murderous Marriage|Agatha wedding|James Lacey|first husband|2016|ceremony interruption|series one finale`,
  `Who is found dead after interrupting Agatha's intended wedding to James in The Murderous Marriage of Agatha Raisin?|Agatha's first husband|James's brother|The village postman|The vicar's cousin|Medium|The Murderous Marriage|first husband|ditch death|2016|past relationship|murder suspicion|finale`,
  `Which holiday destination does Agatha return from before the events of The Wizard of Evesham in Agatha Raisin?|Cyprus|Malta|Portugal|Crete|Medium|The Wizard of Evesham|Cyprus|Agatha returns|series two|2018|hair salon|broken romance`,
  `Which trade is practised by the charismatic title character of The Wizard of Evesham in Agatha Raisin?|Hairdressing|Flower arranging|Baking|Veterinary surgery|Medium|The Wizard of Evesham|hair stylist|Evesham salon|series two|blackmail|mystery victim|2018`,
  `What kind of confidential information makes the hairdresser dangerous to his clients in Agatha Raisin's The Wizard of Evesham?|Their personal secrets|Their school exam results|Their driving licence numbers|Their pet vaccination dates|Medium|The Wizard of Evesham|client confidences|blackmail|salon mystery|2018|hairdresser John|case motive`,
  `Which Agatha Raisin episode takes the sleuth to a Norfolk village known for fairy legends?|The Fairies of Fryfam|The Witch of Wyckhadden|The Haunted House|The Day the Floods Came|Medium|The Fairies of Fryfam|Norfolk|fairy legends|series two|2018|rented cottage|episode setting`,
  `Why does Agatha rent a cottage in Fryfam during the second series of Agatha Raisin?|To get away from James and her worries|To open a branch police station|To become the village mayor|To film a baking show|Medium|The Fairies of Fryfam|James Lacey|escape|rented cottage|2018|romantic complications|Norfolk visit`,
  `What is Agatha initially hired to investigate in Agatha Raisin's The Fairies of Fryfam?|A suspected extramarital affair|A stolen church bell|The disappearance of a horse|A forged university degree|Medium|The Fairies of Fryfam|infidelity|wealthy husband|local wife|private investigation|2018|case premise`,
  `What kind of church worker is found murdered in Agatha Raisin's The Curious Curate?|A newly arrived curate|The cathedral organist|A bishop|A choir schoolteacher|Medium|The Curious Curate|new curate|murdered clergyman|2019|series two|church community|episode victim`,
  `Which of Agatha's friends falls under suspicion in The Curious Curate episode of Agatha Raisin?|Sarah Bloxby|Gemma Simpson|Toni Gilmour|Mrs Boggle|Medium|Sarah Bloxby|The Curious Curate|murder suspect|2019|Agatha clears friend|church case|series two`,
  `What new business has Agatha opened at the beginning of Agatha Raisin's third series?|A private detective agency|A bakery|A veterinary practice|A publishing company|Easy|Raisin Investigations|detective agency|series three|2019|business launch|new profession|private inquiry`,
  `What supposedly supernatural place provides the first case for Agatha's new agency in Agatha Raisin?|A haunted house|A cursed ship|An abandoned underground station|A ruined theatre|Medium|The Haunted House|Ivy Hall|series three|2019|paranormal mystery|first agency case|property`,
  `What is the name of the allegedly haunted property Agatha and James investigate in Agatha Raisin's third series?|Ivy Hall|Bloxby Manor|Fraith Castle|Wandin House|Hard|Ivy Hall|The Haunted House|James Lacey|2019|legendary haunting|series three|first agency assignment`,
  `Which Agatha Raisin episode centres on threats against a young woman about to be married?|The Deadly Dance|The Potted Gardener|The Curious Curate|The Vicious Vet|Medium|The Deadly Dance|bride threats|series three|2020|private detective case|wedding|assassin`,
  `Why does Agatha take dancing lessons during The Deadly Dance mystery in Agatha Raisin?|To pursue clues about the threatened woman|To audition for a stage musical|To teach her neighbours ballroom dancing|To enter a television talent contest|Hard|The Deadly Dance|dancing lessons|investigative disguise|engagement party|2020|case strategy|series three`,
  `Which character disappears after a heated argument in Agatha Raisin's The Love from Hell?|James Lacey|Roy Silver|Bill Wong|Sir Charles Fraith|Medium|The Love from Hell|James disappearance|relationship argument|2020|blood trail|Agatha search|series three`,
  `What musical event precedes James's disappearance in Agatha Raisin's The Love from Hell?|A jazz night|A folk festival|An opera premiere|A brass band contest|Hard|The Love from Hell|jazz night|Barfield Hall|James Lacey|2020|disappearance|episode setting`,
  `Which seasonal village gathering features in Agatha Raisin's As the Pig Turns?|A winter fayre|A spring flower show|An Easter parade|A summer carnival|Medium|As the Pig Turns|winter fayre|series three|2020|festival|murder scene|village event`,
  `What shocking discovery is made in the roast at the winter fayre in Agatha Raisin's As the Pig Turns?|A human torso|Stolen jewellery|A missing wedding cake|A bag of counterfeit banknotes|Medium|As the Pig Turns|human torso|roasting spit|winter fair|2020|gruesome evidence|murder case`,
  `What work is Bill Wong explicitly told not to discuss with Agatha in Agatha Raisin's As the Pig Turns?|The official murder investigation|The parish newsletter|A police charity raffle|His driving test|Medium|As the Pig Turns|Bill Wong|police secrecy|2020|murder case|professional rivalry|series three`,
  `Which Agatha Raisin mystery opens the fourth series with a Christmas poisoning investigation?|Kissing Christmas Goodbye|The Fairies of Fryfam|Hell's Bells|The Murderous Marriage|Medium|Kissing Christmas Goodbye|2021|festive special|fourth series|poisoning|Christmas|episode title`,
  `Who hires Agatha for protection in the Agatha Raisin Christmas story Kissing Christmas Goodbye?|An elderly wealthy woman|A primary school headteacher|A rock musician|A young police constable|Medium|Kissing Christmas Goodbye|protection request|elderly client|Phyllis Tamworthy|2021|Christmas|case opening`,
  `Which family's inheritance dispute complicates the Agatha Raisin case Kissing Christmas Goodbye?|The children of Phyllis Tamworthy|Bill Wong's cousins|Roy Silver's brothers|James Lacey's nephews|Hard|Phyllis Tamworthy|disinherited children|estate|Christmas 2021|family suspects|charitable foundation|murder motive`,
  `Where do Agatha and James travel during the fourth-series Agatha Raisin case Love, Lies and Liquor?|A seaside resort|A Swiss ski village|A Scottish island|An Irish castle|Medium|Love Lies and Liquor|seaside trip|James Lacey|2022|hotel murder|holiday|series four`,
  `What is the name of the seaside town visited by Agatha and James in Agatha Raisin's Love, Lies and Liquor?|Snoth-on-Sea|Carsely-on-Sea|Fryfam Bay|Dembley Sands|Hard|Snoth on Sea|Love Lies and Liquor|2022|coastal town|hotel case|James book|setting`,
  `Why does James ask Agatha to accompany him on the seaside trip in Agatha Raisin's Love, Lies and Liquor?|To help with his new book|To attend a police training course|To judge a cookery competition|To sell a fishing boat|Medium|Love Lies and Liquor|James Lacey|book writing|working holiday|2022|seaside hotel|relationship`,
  `Which local event is disrupted by a poisoning in Agatha Raisin's A Spoonful of Poison?|A jam-making competition|A dog agility show|A boat race|A car-boot sale|Easy|A Spoonful of Poison|Carsely Jam Off|2022|food poisoning|preserves|village contest|series four`,
  `Which police officer is competing in the jam-making event in Agatha Raisin's A Spoonful of Poison?|DCI Wilkes|Bill Wong|A visiting chief constable|A retired detective|Medium|A Spoonful of Poison|Denzel Wilkes|jam competition|2022|suspicion|police rival|local festival`,
  `What happens to Dr Stevens during the poisoning case in Agatha Raisin's A Spoonful of Poison?|She falls from a roof|She is knocked from a boat|She disappears in a forest|She crashes a motorbike|Hard|A Spoonful of Poison|Dr Stevens|rooftop fall|hallucinations|2022|judge death|jam festival`,
  `Which Agatha Raisin mystery centres on James Lacey's planned wedding to another woman?|There Goes the Bride|The Walkers of Dembley|The Wizard of Evesham|Hell's Bells|Medium|There Goes the Bride|James Lacey|series four|2022|wedding murder|Agatha ex|case title`,
  `What is the first name of James Lacey's intended bride in Agatha Raisin's There Goes the Bride?|Eirwen|Mary|Gemma|Toni|Hard|Eirwen|James bride|There Goes the Bride|2022|Welsh fiancee|wedding victim|relationship drama`,
  `Which incident mars the pre-wedding celebrations in Agatha Raisin's There Goes the Bride before the murder?|A paintballing mishap|A car being struck by lightning|A marquee being carried off by wind|A church bell falling from its tower|Hard|There Goes the Bride|paintballing|James wedding|Eirwen|2022|pre wedding events|mishap`,
  `Whose murder must Agatha investigate in the fourth-series Agatha Raisin mystery There Goes the Bride?|James's fiancée|Agatha's hairdresser|Roy's employer|The village mayor|Medium|There Goes the Bride|James Lacey|Eirwen|murdered bride|2022|Agatha investigates|final televised mystery`,
  `What does Agatha postpone when a client begs her for help in Agatha Raisin's Kissing Christmas Goodbye?|Her Christmas break|Her driving test|Her house move to London|Her book launch|Easy|Kissing Christmas Goodbye|Christmas break|2021|urgent protection case|busy agency|festive plans|Phyllis Tamworthy`,
  `Which year saw the Christmas special Kissing Christmas Goodbye arrive before Agatha Raisin's remaining fourth-series stories?|2021|2017|2019|2023|Medium|2021 Christmas|Kissing Christmas Goodbye|series four|special release|Acorn TV|broadcast chronology|festive episode`,
  `In which year did the latest scripted television mysteries of Agatha Raisin air before the 2023 documentary?|2022|2018|2020|2024|Easy|2022|series four|last released scripted cases|broadcast cut off|television chronology|review baseline|coverage status`,
  `What other missing property are the police investigating in Agatha Raisin's As the Pig Turns alongside the murder?|Farm machinery|Rare postage stamps|Antique silverware|A school bus|Hard|As the Pig Turns|farm machinery|Bill Wong|2020|rural thefts|parallel investigation|series three`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 410: malformed row ${index + 1} (${parts.length} fields)`);
  }
  const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 410: invalid difficulty at row ${index + 1}`);
  }
  const question = stem.includes('Agatha Raisin')
    ? stem
    : `In Agatha Raisin, ${stem[0].toLowerCase()}${stem.slice(1)}`;
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(a => a.toLowerCase())).size !== 4) {
    throw new Error(`Pack 410: duplicate answer option at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length !== 13) {
    throw new Error(`Pack 410: expected 13 distinct tags at row ${index + 1}, got ${tags.length}`);
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
