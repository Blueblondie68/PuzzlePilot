
// PuzzlePilot - Big Quiz - Pack 393
// Peaky Blinders: complete original television series (2013-2022).
// All six series, 36 episodes; the 2026 feature film is NOT included.
// Complete WordPad-ready CommonJS JavaScript. First ID: tv_21362.
'use strict';

const FIRST_ID = 21362;
const commonTags = ['television', 'British TV', 'BBC', 'Peaky Blinders', 'Steven Knight', 'period crime drama'];

// Row: question | correct answer | three distractors | difficulty | seven question-specific tags.
const rows = [
  // Programme and principal characters
  `Who created and wrote the Peaky Blinders television series?|Steven Knight|Jed Mercurio|Peter Morgan|Sally Wainwright|Easy|2013-2022|series creator|screenwriter|television production|creator credit|British drama|36 episodes`,
  `What is the name of the Shelby family's regular pub in Peaky Blinders?|The Garrison|The Crown and Anchor|The Red Lion|The Black Horse|Easy|2013-2022|Shelby family|The Garrison pub|Small Heath|gang headquarters|public house|Birmingham streets`,
  `Which war had the Shelby brothers recently returned from when the first series begins?|The First World War|The Second Boer War|The Second World War|The Crimean War|Easy|1919|series opening|Shelby brothers|war veterans|Western Front|postwar Britain|historical setting`,
  `Which actress plays the formidable Shelby family matriarch Polly Gray?|Helen McCrory|Annabelle Wallis|Sophie Rundle|Natasha O'Keeffe|Easy|2013-2019|Polly Gray|Helen McCrory|Aunt Polly|family matriarch|actor role|series 1-5`,
  `Which actor plays Tommy Shelby's older brother Arthur?|Paul Anderson|Joe Cole|Finn Cole|Sam Neill|Easy|2013-2022|Arthur Shelby|Paul Anderson|older brother|gang lieutenant|family relationship|actor role`,
  `Which actress plays Tommy's sister Ada Shelby?|Sophie Rundle|Kate Phillips|Charlie Murphy|Charlotte Riley|Easy|2013-2022|Ada Shelby|Sophie Rundle|Shelby sister|political activism|family relationship|actor role`,
  `Which actor portrays Finn Shelby, the youngest Shelby brother?|Harry Kirton|Finn Cole|Joe Cole|Jack Rowan|Medium|2013-2022|Finn Shelby|Harry Kirton|youngest brother|family cast|actor role|Shelby sibling`,
  `Who performs the song Red Right Hand used prominently as the Peaky Blinders theme?|Nick Cave and the Bad Seeds|Arctic Monkeys|The White Stripes|The National|Easy|2013-2022|Red Right Hand|Nick Cave|theme song|opening titles|soundtrack|music artist`,

  // Series 1 (2013) - 1919 Birmingham and the guns
  `What accidental theft draws Winston Churchill's attention to Tommy's gang in Series 1?|A consignment of military guns|A shipment of royal jewellery|A train carrying gold bullion|A cache of government documents|Easy|2013|series 1|stolen guns|arms factory|Winston Churchill|Inspector Campbell|government pursuit`,
  `Who plays police officer Chester Campbell in the first two series?|Sam Neill|Tom Hardy|Noah Taylor|Paddy Considine|Easy|2013|series 1|Sam Neill|Chester Campbell|chief inspector|police antagonist|actor role`,
  `Under what job does undercover agent Grace Burgess infiltrate the Peaky Blinders?|Barmaid at the Garrison|Secretary at a factory|Nurse at a hospital|Clerk at a betting shop|Easy|2013|series 1|Grace Burgess|undercover spy|The Garrison pub|Campbell investigation|Annabelle Wallis`,
  `Which actress plays Grace Burgess in Peaky Blinders?|Annabelle Wallis|Natasha O'Keeffe|Sophie Rundle|Kate Phillips|Easy|2013|series 1|Annabelle Wallis|Grace Burgess|undercover agent|Tommy romance|cast credit`,
  `Who is Tommy's sister Ada secretly involved with at the start of the series?|Freddie Thorne|Billy Kimber|Darby Sabini|Alfie Solomons|Easy|2013|series 1|Ada Shelby|Freddie Thorne|communist organiser|secret romance|family conflict`,
  `What political movement is Freddie Thorne closely associated with?|Communism|Fascism|Royalism|Liberal Unionism|Medium|2013|series 1|Freddie Thorne|communist activism|Ada Shelby|labour unrest|political affiliation`,
  `Which racecourse betting boss becomes Tommy's chief gang rival in Series 1?|Billy Kimber|Luca Changretta|Jimmy McCavern|Oswald Mosley|Easy|2013|series 1|Billy Kimber|Birmingham Boys|racetrack betting|rival gang leader|Charlie Creed-Miles`,
  `Why does Tommy have his friend Danny Whizz-Bang appear to be executed?|To avert a feud after Danny kills an Italian|To expose a traitor within the police|To collect a life insurance payment|To escape a prison transport|Medium|2013|series 1|Danny Whizz-Bang|faked shooting|Italian victim|war trauma|gang diplomacy`,
  `Which family does John Shelby marry into to secure a truce in Series 1?|The Lee family|The Changretta family|The Gold family|The Solomons family|Medium|2013|series 1|John Shelby|Esme Lee|arranged marriage|Romani alliance|gang truce`,
  `Who does John Shelby marry in the first series?|Esme Lee|Lizzie Stark|May Carleton|Jessie Eden|Easy|2013|series 1|John Shelby|Esme Lee|marriage|Lee family|Aimee-Ffion Edwards`,
  `What does Arthur Shelby Senior do after persuading Arthur Junior to finance his business plans?|Runs off with the money|Opens a hotel in America|Buys a new betting shop|Gives all the money to Ada|Medium|2013|series 1|Arthur Shelby Senior|Arthur Junior|family betrayal|hotel investment|Tommy Flanagan`,
  `What nearly kills Arthur after his father abandons him again?|A failed hanging attempt|A racing accident|A drug overdose|A shooting at the Garrison|Hard|2013|series 1|Arthur Shelby|suicide attempt|broken rope|father betrayal|personal crisis`,
  `Who kills Billy Kimber during the confrontation ending Series 1?|Tommy Shelby|Arthur Shelby|Grace Burgess|Freddie Thorne|Medium|2013|series 1|Billy Kimber|Tommy Shelby|Garrison confrontation|gang rivalry|season finale`,
  `Where does Grace shoot Inspector Campbell at the end of Series 1?|At a railway station|Outside the Garrison|At a racecourse|Inside the police station|Medium|2013|series 1|Grace Burgess|Chester Campbell|railway platform|refused proposal|departure`,

  // Series 2 (2014) - London and Campbell's demands
  `In Series 2, the Peaky Blinders expand their criminal business into which English city?|London|Liverpool|Bristol|Nottingham|Easy|2014|series 2|London expansion|Shelby Company|new territory|rival gangsters|business strategy`,
  `Which actor plays Camden gang boss Alfie Solomons?|Tom Hardy|Noah Taylor|Sam Claflin|Adrien Brody|Easy|2014|series 2|Tom Hardy|Alfie Solomons|Camden Town|Jewish gang leader|cast credit`,
  `Who plays Italian rival gang leader Darby Sabini?|Noah Taylor|Tom Hardy|Paddy Considine|Charlie Creed-Miles|Medium|2014|series 2|Noah Taylor|Darby Sabini|London gang boss|Italian rivalry|actor role`,
  `Who is Michael Gray's mother, reunited with him during Series 2?|Polly Gray|Ada Shelby|Grace Burgess|Linda Shelby|Easy|2014|series 2|Michael Gray|Polly mother|lost children|family reunion|Finn Cole`,
  `Who plays Polly's reunited son Michael Gray?|Finn Cole|Joe Cole|Harry Kirton|Jack Rowan|Easy|2014|series 2|Finn Cole|Michael Gray|Polly son|younger generation|cast credit`,
  `Who trains Tommy's racehorse and becomes romantically interested in him?|May Carleton|Lizzie Stark|Jessie Eden|Grace Burgess|Medium|2014|series 2|May Carleton|Charlotte Riley|horse trainer|Tommy romance|racecourse`,
  `Which young man who loves cowboy films is murdered after a short stay in prison?|The Digbeth Kid|Bonnie Gold|Isaiah Jesus|Finn Shelby|Hard|2014|series 2|Digbeth Kid|prison killing|Sabini retaliation|cowboy films|local youth`,
  `Which drug does Arthur Shelby increasingly use during Series 2?|Cocaine|Heroin|Morphine|Laudanum|Medium|2014|series 2|Arthur Shelby|substance misuse|war trauma|boxing death|mental health`,
  `At what major sporting occasion does Tommy carry out his plan in the Series 2 finale?|Derby Day|The FA Cup Final|Royal Ascot Gold Cup day|The Grand National|Easy|2014|series 2|Derby Day|racecourse plot|Campbell orders|season finale|betting licences`,
  `Who shoots Inspector Campbell dead at the end of Series 2?|Polly Gray|Grace Burgess|Tommy Shelby|Ada Shelby|Medium|2014|series 2|Polly Gray|Chester Campbell|revenge|Derby Day|police corruption`,
  `Who tells Tommy she is expecting his child in the Series 2 finale?|Grace Burgess|May Carleton|Lizzie Stark|Jessie Eden|Medium|2014|series 2|Grace Burgess|Tommy Shelby|pregnancy|Charles Shelby|Derby Day revelation`,
  `What prevents Tommy's planned execution in a field at the end of Series 2?|An intervention ordered on Churchill's behalf|A last-minute police raid|Grace bribing the gunmen|Arthur arriving with reinforcements|Hard|2014|series 2|Tommy Shelby|Winston Churchill|Ulster Volunteers|execution reprieve|secret mission`,
  `What business is Tommy hoping to supply to Prohibition-era America in Series 2?|Whisky exports|Steel production|Coal mining machinery|Cotton cloth|Medium|2014|series 2|whisky export|United States Prohibition|bootlegging|Alfie Solomons|international trade`,
  `Which woman is Tommy's former romantic partner and later works in his office?|Lizzie Stark|Tatiana Petrovna|Esme Lee|Connie Barwell|Medium|2014|series 2|Lizzie Stark|Natasha O'Keeffe|Shelby Company|office work|Tommy relationship`,

  // Series 3 (2016) - Grace, Russian plot and Father Hughes
  `What personal celebration opens the third series of Peaky Blinders?|Tommy and Grace's wedding|Arthur and Linda's wedding|Polly's birthday|Ada's engagement party|Easy|2016|series 3|Tommy Shelby|Grace Burgess|wedding|Charles Shelby|opening episode`,
  `What is the name of Tommy and Grace's young son?|Charles|Finn|Duke|Michael|Easy|2016|series 3|Charles Shelby|Tommy son|Grace mother|family relationships|young child`,
  `Which Italian family becomes an enemy after the attack on Angel's restaurant?|The Changrettas|The Sabinis|The Golds|The Lees|Easy|2016|series 3|Changretta family|Angel Changretta|restaurant arson|Italian vendetta|Shelby conflict`,
  `Who is killed by a bullet intended for Tommy at the charity gala?|Grace Shelby|Lizzie Stark|Polly Gray|Ada Shelby|Easy|2016|series 3|Grace death|charity gala|Tommy Shelby|Vicente Changretta|tragic shooting`,
  `Which actor plays sinister priest Father John Hughes?|Paddy Considine|Aidan Gillen|Tom Hardy|Sam Neill|Medium|2016|series 3|Paddy Considine|Father John Hughes|priest antagonist|Economic League|cast credit`,
  `What traumatic connection does Michael Gray have to Father Hughes?|Hughes abused him during childhood|Hughes adopted him after the war|Hughes was his school sports coach|Hughes falsely identified him as a spy|Hard|2016|series 3|Michael Gray|Father Hughes|childhood abuse|personal revenge|Polly concern`,
  `Who kills Father Hughes while rescuing the kidnapped Charles Shelby?|Michael Gray|Arthur Shelby|Alfie Solomons|Tommy Shelby|Medium|2016|series 3|Michael Gray|Father Hughes|Charles rescue|kidnapping|final confrontation`,
  `What nationality are the aristocrats whose jewels are central to Tommy's Series 3 heist?|Russian|French|Spanish|Italian|Easy|2016|series 3|Russian aristocrats|Romanov household|Tatiana Petrovna|jewel robbery|exiles`,
  `Which grand duchess becomes involved in Tommy's dangerous Russian business?|Tatiana Petrovna|Diana Mitford|May Carleton|Grace Burgess|Medium|2016|series 3|Tatiana Petrovna|Gaite Jansen|Russian nobility|jewels|Tommy dealings`,
  `What method is used to reach the Russian aristocrats' treasure vault?|Tunnelling underground|A helicopter roof landing|Forged museum passes|Divers entering by river|Medium|2016|series 3|Russian jewels|underground tunnel|vault theft|Shelby operation|heist method`,
  `What does Father Hughes force Tommy's associates to blow up?|A train carrying military equipment|A cargo ship on the Thames|A government office building|A bridge into Birmingham|Medium|2016|series 3|Father Hughes|train bombing|Soviet plot|Charles ransom|political conspiracy`,
  `Why is the train destroyed despite Michael's successful rescue of Charles?|News of the rescue arrives too late|The explosives cannot be disarmed remotely|Tommy has sold the train to his enemies|The train driver ignores a stop signal|Hard|2016|series 3|Charles rescue|train explosion|delayed message|Arthur and John|episode finale`,
  `What happens to most of Tommy's family after the Series 3 operation?|They are arrested while Tommy remains free|They flee together to America|They inherit the Russian family estate|They enter witness protection|Medium|2016|series 3|family arrests|Tommy Shelby|Russian operation|betrayal|cliffhanger`,
  `Which family member is offered a position in the Shelby operation's Boston office in Series 3?|Ada Shelby|Grace Shelby|Esme Lee|Linda Shelby|Medium|2016|series 3|Ada Shelby|Boston office|Shelby Company|new responsibility|family business`,

  // Series 4 (2017) - the Black Hand
  `Which New York mobster comes to Birmingham seeking revenge in Series 4?|Luca Changretta|Darby Sabini|Billy Kimber|Jimmy McCavern|Easy|2017|series 4|Luca Changretta|New York Mafia|family vendetta|Italian gang|Adrien Brody`,
  `Which actor portrays Luca Changretta in Series 4?|Adrien Brody|Sam Claflin|Noah Taylor|Tom Hardy|Easy|2017|series 4|Adrien Brody|Luca Changretta|guest villain|New York Mafia|cast credit`,
  `What threatening symbol arrives in letters to the Shelby family in Series 4?|A black hand|A white rose|A red triangle|A silver horseshoe|Medium|2017|series 4|black hand|Mafia vendetta|threat letters|Christmas attacks|Sicilian symbol`,
  `Which Shelby brother is killed by Luca Changretta's gunmen in Series 4?|John|Arthur|Finn|Tommy|Easy|2017|series 4|John Shelby|Joe Cole|Christmas shooting|Mafia attack|family loss`,
  `Who survives the same attack in which John Shelby is killed?|Michael Gray|Finn Shelby|Alfie Solomons|Bonnie Gold|Medium|2017|series 4|Michael Gray|John Shelby death|gunshot injuries|hospital recovery|mob ambush`,
  `Which character's wife tries to curb his violence and drug use through religion?|Arthur Shelby's|John Shelby's|Tommy Shelby's|Michael Gray's|Medium|2017|series 4|Linda Shelby|Arthur Shelby|Kate Phillips|Christian faith|marital tension`,
  `Who plays dangerous hired gun Aberama Gold?|Aidan Gillen|Paddy Considine|Sam Neill|Charlie Creed-Miles|Medium|2017|series 4|Aidan Gillen|Aberama Gold|hired gunman|Romani ally|actor role`,
  `What is Aberama Gold's son's first name?|Bonnie|Billy|Freddie|Danny|Easy|2017|series 4|Bonnie Gold|Aberama Gold|father and son|boxing ambition|Jack Rowan`,
  `What sport does Bonnie Gold pursue with the Peaky Blinders' support?|Boxing|Horse racing|Football|Wrestling|Medium|2017|series 4|Bonnie Gold|boxing|Aberama Gold|young fighter|Shelby sponsorship`,
  `Which female trade-union activist confronts Tommy over factory workers' conditions?|Jessie Eden|Ada Shelby|May Carleton|Gina Gray|Medium|2017|series 4|Jessie Eden|Charlie Murphy|factory strike|union organiser|labour rights`,
  `Who turns on Luca Changretta after Tommy makes a deal with his associates?|Luca's own men|The police commissioner|The Lee family|The Russian aristocrats|Hard|2017|series 4|Luca Changretta|Tommy negotiation|Italian mobsters|betrayal|gang politics`,
  `Who kills Luca Changretta in the Series 4 finale?|Arthur Shelby|Tommy Shelby|Polly Gray|Michael Gray|Medium|2017|series 4|Arthur Shelby|Luca Changretta|final showdown|revenge ending|fake death`,
  `How does Tommy enter formal politics at the end of Series 4?|He is elected a Labour MP|He becomes a Conservative councillor|He is appointed Home Secretary|He is elected mayor of Birmingham|Medium|2017|series 4|Tommy Shelby|Labour MP|parliament|electoral victory|political career`,
  `Which series features the climactic fight between Bonnie Gold and Goliath in the boxing ring?|Series 4|Series 1|Series 3|Series 6|Medium|2017|series 4|Bonnie Gold|Goliath|boxing match|Mafia ambush|episode climax`,

  // Series 5 (2019) - stock crash and fascism
  `Which financial catastrophe opens the fifth series of Peaky Blinders?|The Wall Street Crash|The South Sea Bubble|The 1973 oil crisis|Black Wednesday|Easy|2019|series 5|Wall Street Crash|1929|Michael Gray|lost investments|business crisis`,
  `Who loses a large part of the Shelby family's fortune through the American stock market?|Michael Gray|Arthur Shelby|Finn Shelby|Ada Shelby|Easy|2019|series 5|Michael Gray|American investments|Wall Street Crash|failed instructions|Tommy conflict`,
  `Which actress plays Michael's American wife Gina?|Anya Taylor-Joy|Annabelle Wallis|Sophie Rundle|Charlotte Riley|Easy|2019|series 5|Anya Taylor-Joy|Gina Gray|Michael wife|American connections|cast credit`,
  `Which British fascist politician becomes Tommy's dangerous associate in Series 5?|Oswald Mosley|Winston Churchill|Stanley Baldwin|Neville Chamberlain|Easy|2019|series 5|Oswald Mosley|fascism|political infiltration|House of Commons|Sam Claflin`,
  `Who portrays Oswald Mosley in Peaky Blinders?|Sam Claflin|Tom Hardy|Aidan Gillen|Adrien Brody|Easy|2019|series 5|Sam Claflin|Oswald Mosley|historical character|fascist politician|actor role`,
  `Why does Tommy cultivate Mosley's trust even though he opposes his politics?|To undermine his fascist movement from within|To join the fascists permanently|To obtain an Italian betting licence|To secure a place in the House of Lords|Medium|2019|series 5|Tommy Shelby|Oswald Mosley|undercover strategy|anti fascism|political danger`,
  `Which Scottish gang becomes an enemy of the Shelbys during Series 5?|The Billy Boys|The Birmingham Boys|The Lee gang|The Camden Boys|Medium|2019|series 5|Billy Boys|Scottish gang|Jimmy McCavern|territorial conflict|Aberama Gold`,
  `Who leads the Scottish Billy Boys gang?|Jimmy McCavern|Luca Changretta|Darby Sabini|Brilliant Chang|Medium|2019|series 5|Jimmy McCavern|Brian Gleeson|Billy Boys|gang leader|Aberama rivalry`,
  `Whose son is murdered by the Billy Boys, prompting a revenge campaign?|Aberama Gold's|Polly Gray's|Arthur Shelby's|Alfie Solomons's|Medium|2019|series 5|Aberama Gold|Bonnie Gold death|Jimmy McCavern|revenge|family tragedy`,
  `Which Chinese businessman negotiates an opium deal with Tommy?|Brilliant Chang|Oswald Mosley|Alfie Solomons|Luca Changretta|Medium|2019|series 5|Brilliant Chang|opium shipment|Chinese trade|Tommy Shelby|smuggling`,
  `What ballet is performed at Tommy's estate during a private event in Series 5?|Swan Lake|The Nutcracker|Giselle|The Sleeping Beauty|Hard|2019|series 5|Swan Lake|private performance|Mosley speech|Tommy estate|evening gathering`,
  `Who is Tommy's intended sniper for the assassination of Oswald Mosley?|Barney Thomason|Bonnie Gold|Danny Whizz-Bang|Johnny Dogs|Hard|2019|series 5|Barney Thomason|former soldier|Mosley assassination|rally|sniper`,
  `How does Tommy's attempted assassination of Mosley end in Series 5?|The sniper is killed and Mosley survives|Mosley is killed before reaching the stage|Tommy shoots Mosley himself|Police arrest Mosley before the speech|Medium|2019|series 5|Oswald Mosley|failed assassination|Barney Thomason|political rally|season finale`,
  `Who proposes replacing Tommy's leadership with a new structure for the gang in the Series 5 finale?|Michael Gray|Arthur Shelby|Ada Shelby|Johnny Dogs|Medium|2019|series 5|Michael Gray|Gina Gray|family power struggle|business restructuring|Tommy refusal`,

  // Series 6 (2022) - final family conflicts and false diagnosis
  `Who is identified as responsible for Polly Gray's murder at the start of Series 6?|The IRA under Captain Swing|The New York Changretta family|The Billy Boys alone|The Italian royalists|Easy|2022|series 6|Polly Gray death|Captain Swing|IRA operation|failed Mosley plot|family grief`,
  `What other name is used for IRA operative Captain Swing?|Laura McKee|Diana Mitford|Jessie Eden|Tatiana Petrovna|Medium|2022|series 6|Laura McKee|Captain Swing|Charlene McKenna|IRA antagonist|Polly murder`,
  `Which relative blames Tommy for Polly's death and vows revenge?|Michael Gray|Arthur Shelby|Finn Shelby|Ada Shelby|Easy|2022|series 6|Michael Gray|Polly mother|Tommy Shelby|revenge vow|family feud`,
  `What illness claims the life of Tommy and Lizzie's young daughter Ruby?|Tuberculosis|Influenza|Scarlet fever|Typhoid|Medium|2022|series 6|Ruby Shelby|Lizzie Shelby|childhood death|tuberculosis|family loss`,
  `What is the name of Tommy's daughter with Lizzie?|Ruby|Grace|Ada|Constance|Easy|2022|series 6|Ruby Shelby|Tommy Shelby|Lizzie Stark|daughter|family relationship`,
  `Which doctor gives Tommy the frightening diagnosis later revealed to be false?|Dr Holford|Dr Northcote|Dr Hughes|Dr Campbell|Medium|2022|series 6|Dr Holford|Aneurin Barnard|tuberculoma diagnosis|medical deception|Mosley plot`,
  `What disease does Tommy wrongly believe he has after a doctor's examination?|A brain tuberculoma|Lung cancer|Parkinson's disease|Motor neurone disease|Hard|2022|series 6|Tommy Shelby|false diagnosis|tuberculoma|Dr Holford|medical conspiracy`,
  `Who is revealed to be Tommy's previously unknown older son in Series 6?|Duke Shelby|Bonnie Gold|Charlie Strong|Isaiah Jesus|Easy|2022|series 6|Duke Shelby|Erasmus Shelby|Conrad Khan|secret son|family reveal`,
  `Who is Duke's mother, with whom Tommy had a relationship before the war?|Zelda|Lizzie|May|Grace|Medium|2022|series 6|Zelda|Duke mother|Tommy past|Romani background|family history`,
  `Which woman becomes Mosley's wife and helps manipulate Tommy in the final series?|Diana Mitford|Jessie Eden|Tatiana Petrovna|May Carleton|Medium|2022|series 6|Diana Mitford|Amber Anderson|Oswald Mosley|fascist circle|relationship`,
  `What action helps bring about Lizzie's departure from Tommy in Series 6?|His affair with Diana Mitford|His sale of the Garrison pub|His refusal to employ Arthur|His arrest of her brother|Medium|2022|series 6|Lizzie Shelby|Diana Mitford|Tommy affair|marriage breakdown|Charles leaves`,
  `Who kills IRA operative Captain Swing as revenge for Polly Gray?|Arthur Shelby|Michael Gray|Tommy Shelby|Finn Shelby|Medium|2022|series 6|Arthur Shelby|Captain Swing|Polly revenge|Garrison ambush|finale confrontation`,
  `What is revealed about Billy Grade after Tommy tests his loyalty?|He has been leaking gang secrets|He is a government minister|He owns the London racetracks|He is an undercover priest|Hard|2022|series 6|Billy Grade|informant|Finn Shelby|betrayal|failed Mosley plan`,
  `Which Shelby brother is expelled from the family organisation in the last episode?|Finn|Arthur|Tommy|John|Medium|2022|series 6|Finn Shelby|Duke Shelby|Billy Grade|disloyalty|family expulsion`,
  `How does Tommy survive Michael's attempted car bombing in the Series 6 finale?|Johnny Dogs moves the bomb to another vehicle|Arthur cuts the bomb's timing wire|Tommy hides in a nearby cellar|The bomb is a police dummy|Hard|2022|series 6|Johnny Dogs|Michael Gray|car bomb|Miquelon Island|assassination attempt`,
  `Who does Tommy shoot during their final confrontation in the Series 6 finale?|Michael Gray|Alfie Solomons|Oswald Mosley|Dr Holford|Medium|2022|series 6|Tommy Shelby|Michael Gray|family betrayal|Miquelon Island|season ending`,
  `What tells Tommy that his terminal diagnosis was fabricated?|A newspaper photograph of his doctor with Mosley|A second opinion from an army surgeon|A letter from the hospital matron|A confession from Arthur Shelby|Hard|2022|series 6|Dr Holford|Mosley wedding photograph|newspaper evidence|false diagnosis|Ruby vision`,
  `What does Tommy ultimately do when confronting Dr Holford in the television finale?|He spares the doctor's life|He kills the doctor immediately|He hands the doctor to the IRA|He takes the doctor hostage to France|Medium|2022|series 6|Dr Holford|Tommy Shelby|mercy|final confrontation|changed character`,
  `What happens to Tommy's caravan at the end of the last television episode?|It is set on fire|It is sold at auction|It is submerged in a river|It is turned into a museum|Medium|2022|series 6|finale|burning caravan|Tommy departure|new beginning|last scene`,
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 393: malformed row ${index + 1}`);
  }
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 393: invalid difficulty at row ${index + 1}`);
  }
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
    throw new Error(`Pack 393: repeated answer option at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length !== 13) {
    throw new Error(`Pack 393: expected 13 unique tags at row ${index + 1}; got ${tags.length}`);
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
