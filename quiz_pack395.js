
// PuzzlePilot - Big Quiz - Pack 395
// Blackpool (BBC One, 2004): all six episodes, plus Viva Blackpool (2006).
// Complete WordPad-ready CommonJS file. First ID: tv_21539.
'use strict';

const FIRST_ID = 21539;
const PROGRAMME = 'Blackpool';
const commonTags = ['Television','British Television','BBC One','Musical Crime Drama',
  PROGRAMME,'Programme: '+PROGRAMME,'Peter Bowker','BBC Television','Original serial 2004'];

// Each row: question | correct answer | three distractors | difficulty | seven question-specific tags.
const rows = [
  // Programme, cast and production
  `Who created and wrote the BBC musical drama Blackpool?|Peter Bowker|Dennis Potter|Russell T Davies|Tony Jordan|Easy|2004|series creator|screenwriter|BBC drama|original production|writer credit|British musical`,
  `Which actor plays ambitious arcade owner Ripley Holden in Blackpool?|David Morrissey|David Tennant|John Thomson|Steve Pemberton|Easy|2004|Ripley Holden|David Morrissey|arcade owner|lead actor|family patriarch|cast credit`,
  `Who portrays Detective Inspector Peter Carlisle in Blackpool?|David Tennant|Bryan Dick|Kevin Doyle|David Bradley|Easy|2004|Peter Carlisle|David Tennant|police detective|murder investigation|lead actor|cast credit`,
  `Which actress plays Ripley Holden's wife Natalie?|Sarah Parish|Georgia Taylor|Megan Dodds|Annette Crosbie|Easy|2004|Natalie Holden|Sarah Parish|Ripley wife|family relationships|romance storyline|cast credit`,
  `Who plays the Holdens' daughter Shyanne in Blackpool?|Georgia Taylor|Sarah Parish|Megan Dodds|Hayley Carmichael|Easy|2004|Shyanne Holden|Georgia Taylor|daughter|Holden family|wedding storyline|cast credit`,
  `Which actor portrays Ripley's son Danny Holden?|Thomas Morrison|Bryan Dick|Kevin Doyle|Al Weaver|Medium|2004|Danny Holden|Thomas Morrison|son|Holden family|murder secret|cast credit`,
  `Which League of Gentlemen actor plays Ripley's accountant Adrian Marr?|Steve Pemberton|Mark Gatiss|Reece Shearsmith|Jeremy Dyson|Medium|2004|Steve Pemberton|Adrian Marr|accountant|business finances|supporting cast|actor role`,
  `Who plays Detective Constable Blythe, Carlisle's junior colleague?|Bryan Dick|John Thomson|David Hounslow|Kevin Doyle|Medium|2004|DC Blythe|Bryan Dick|police colleague|Carlisle partner|investigation team|actor role`,
  `Which actor portrays Ripley's associate Terry Corlette?|John Thomson|Steve Pemberton|David Bradley|David Morrissey|Medium|2004|Terry Corlette|John Thomson|Ripley friend|business investor|police informer|actor role`,
  `Who plays senior police officer DCI Jim Allbright?|David Hounslow|David Bradley|John Thomson|Bryan Dick|Medium|2004|Jim Allbright|David Hounslow|senior detective|Ripley friend|police management|actor role`,
  `How are the musical numbers in Blackpool generally presented?|Characters sing along to existing pop recordings|Actors perform only new original songs|Every song is sung by an unseen choir|Dialogue is replaced entirely by opera|Medium|2004|musical format|pop recordings|character performances|dance sequences|soundtrack technique|stylistic device`,
  `What title was used when the original 2004 Blackpool serial aired on BBC America?|Viva Blackpool|Blackpool Nights|The Holden Files|Casino by the Sea|Medium|2005|BBC America|US broadcast title|Viva Blackpool branding|international distribution|2004 serial|title history`,
  `Which BBC channel first broadcast the original six episodes of Blackpool?|BBC One|BBC Two|BBC Three|BBC Four|Easy|2004|original broadcast|BBC network|six-part serial|UK premiere|television channel|programme history`,

  // Episode 1: the arcade opening and first suspicions
  `What new venture does Ripley Holden celebrate at the start of Blackpool?|Opening a state-of-the-art amusement arcade|Launching a seaside hotel|Buying a football club|Opening a theatre restaurant|Easy|2004|episode 1|Ripley Holden|grand opening|amusement arcade|business venture|seaside entertainment`,
  `What discovery turns Ripley's grand arcade opening into a police investigation?|A young man's body on the premises|A cache of forged passports|A stolen police vehicle|An unexploded wartime bomb|Easy|2004|episode 1|murder victim|arcade floor|police inquiry|opening-night aftermath|crime discovery`,
  `Where had Ripley argued with the eventual murder victim before the body was found?|At a nightclub|At a football stadium|At a railway station|At a hotel reception|Medium|2004|episode 1|Ripley Holden|victim confrontation|nightclub dispute|earlier encounter|suspect behaviour`,
  `What does Ripley deny when police question him about the young man found dead?|Knowing or having seen the victim before|Owning the amusement arcade|Having a wife and children|Hiring a financial adviser|Medium|2004|episode 1|police questioning|Ripley denial|murder victim|previous argument|Carlisle investigation`,
  `What large development does Ripley dream of building on his arcade site?|A Las Vegas-style hotel and casino|A university science campus|A new football stadium|A seaside aquarium|Easy|2004|episode 1|casino hotel|planning ambition|Ripley vision|Blackpool regeneration|business expansion`,
  `What is unusual about Shyanne's new boyfriend Steve from Ripley's point of view?|Steve was at school with Ripley|Steve was Ripley's former accountant|Steve is Carlisle's brother|Steve already owns the arcade|Medium|2004|episode 1|Shyanne Holden|Steve boyfriend|school history|age difference|Ripley disapproval`,
  `Who plays Shyanne's older boyfriend Steve?|Kevin Doyle|Bryan Dick|John Thomson|Steve Pemberton|Medium|2004|episode 1|Kevin Doyle|Steve boyfriend|Shyanne romance|guest actor|former schoolmate`,
  `Which actor plays Hallworth, a religious opponent of Ripley's casino plans?|David Bradley|John Thomson|Sam Neill|Keith Allen|Medium|2004|episode 1|David Bradley|Hallworth|casino opposition|religious campaigner|supporting actor`,
  `Which Elvis Presley song features in the first episode's musical numbers?|Viva Las Vegas|Suspicious Minds|Burning Love|Return to Sender|Medium|2004|episode 1|Viva Las Vegas|Elvis Presley|musical sequence|opening episode|soundtrack song`,
  `What does Ripley try when Carlisle refuses to be intimidated during the first investigation?|Complaining to a senior officer he knows|Bribing a court judge|Fleeing immediately to America|Replacing the locks on the police station|Medium|2004|episode 1|Ripley Holden|DCI Allbright|police complaint|Carlisle rivalry|influence attempt`,

  // Episode 2: police pressure and new relationships
  `Why does Carlisle keep Ripley's new arcade closed during the murder inquiry?|Forensic examination of the premises|A failed fire-safety inspection|An unpaid music licence|An outbreak of food poisoning|Easy|2004|episode 2|DI Carlisle|arcade closure|forensic examination|business disruption|crime scene`,
  `What celebration had the murder victim attended before his death?|His stag night|His graduation party|His retirement dinner|His child's christening|Medium|2004|episode 2|murder victim|stag night|friends interview|last movements|police investigation`,
  `Whom had the victim reportedly gone to find after drinking with friends?|A sex worker|His estranged father|A school friend|A taxi-company owner|Medium|2004|episode 2|victim last movements|sex worker|Carlisle leads|investigation interviews|night out`,
  `What unexpected financial demand threatens Ripley's arcade venture in Episode 2?|A large tax bill|A ransom for his son|A massive parking fine|A divorce settlement|Easy|2004|episode 2|tax demand|Ripley finances|business crisis|investor worries|accounting`,
  `Which three associates are especially anxious about money invested in Ripley's arcade?|Terry, Jim and Adrian|Danny, Steve and Blythe|Hallworth, Carlisle and Natalie|Ripley, Shyanne and Steve|Hard|2004|episode 2|Terry Corlette|Jim Allbright|Adrian Marr|arcade investors|financial pressure`,
  `What important fact does Natalie not know when she agrees to a date with Carlisle?|He is investigating the murder involving her family|He is engaged to Shyanne|He owns the arcade's rival business|He is her husband's accountant|Easy|2004|episode 2|Natalie Holden|Peter Carlisle|secret police role|first date|dramatic irony`,
  `Who is called in for police questioning because Carlisle suspects he knows more than he admits?|Danny Holden|Steve|Hallworth|Adrian Marr|Easy|2004|episode 2|Danny Holden|police interview|DI Carlisle|possible cover-up|family suspicion`,
  `Who discovers that Ripley was behind Steve's earlier break-up message to Shyanne?|Shyanne Holden|Natalie Holden|Adrian Marr|DC Blythe|Medium|2004|episode 2|Shyanne Holden|Steve boyfriend|text break-up|Ripley interference|romance subplot`,
  `Which Kenny Rogers song features in the musical selections for Blackpool's second episode?|The Gambler|Lucille|Coward of the County|Islands in the Stream|Medium|2004|episode 2|The Gambler|Kenny Rogers|musical number|gambling theme|soundtrack song`,

  // Episode 3: evidence, confession and betrayals
  `Where does forensic evidence suggest the murder victim had been before being left at the arcade?|At flats owned by Ripley|In Carlisle's hotel room|At the railway station|Inside the town hall|Medium|2004|episode 3|Ripley flats|forensic link|body moved|murder inquiry|police evidence`,
  `What happens to Ripley's application to develop a casino hotel in Episode 3?|Planning permission is refused|The council approves it unanimously|The land is sold to the police|The application is withdrawn by Natalie|Easy|2004|episode 3|planning refusal|hotel casino|local council|business setback|Ripley Holden`,
  `What does Natalie discover about the man she has been seeing?|Carlisle is a detective investigating her family|He is her husband's business partner|He is the dead man's brother|He has bought a rival casino|Easy|2004|episode 3|Natalie Holden|Peter Carlisle|identity discovery|relationship betrayal|police investigation`,
  `Who is beaten up, prompting Shyanne to suspect her father's involvement?|Her boyfriend Steve|Her brother Danny|DC Blythe|Accountant Adrian Marr|Medium|2004|episode 3|Steve boyfriend|Shyanne Holden|hospital injuries|Ripley suspicion|assault`,
  `What police operation leaves Danny in further trouble during Episode 3?|A drugs bust in which he is set up|A bank robbery sting|An illegal street-racing raid|A counterfeit ticket investigation|Medium|2004|episode 3|Danny Holden|drugs bust|police pressure|Carlisle tactic|teenage trouble`,
  `What startling statement does Danny make at the police station near the end of Episode 3?|He confesses to the arcade murder|He says he has robbed a bank|He claims to be Carlisle's son|He announces he owns the casino|Easy|2004|episode 3|Danny Holden|murder confession|police station|family secret|episode climax`,
  `Which Elvis Costello song is featured among the musical numbers in Episode 3?|Brilliant Mistake|Oliver's Army|Pump It Up|Everyday I Write the Book|Medium|2004|episode 3|Brilliant Mistake|Elvis Costello|soundtrack song|musical performance|song choice`,
  `Which band originally recorded The Boy with the Thorn in His Side, used in Episode 3?|The Smiths|The Jam|The Cure|The Pretenders|Medium|2004|episode 3|The Boy with the Thorn in His Side|The Smiths|musical number|soundtrack artist|alternative rock`,
  `Who directs the first three episodes of the original Blackpool serial?|Julie Anne Robinson|Coky Giedroyc|Catherine Morshead|Sandy Johnson|Hard|2004|episode 3|Julie Anne Robinson|series direction|first three episodes|production credits|original broadcast`,

  // Episode 4: Danny's crisis and Ripley's intervention
  `Why does Carlisle doubt Danny's confession in Episode 4?|He thinks Danny is protecting Ripley|He thinks Danny is protecting Natalie|He believes the victim is alive|He knows Danny was abroad|Easy|2004|episode 4|Danny confession|Peter Carlisle|covering for father|murder suspicions|investigation`,
  `What does Natalie demand of Carlisle after his police role is exposed?|He must stay away from her family|He must resign immediately|He must marry her daughter|He must buy Ripley's arcade|Medium|2004|episode 4|Natalie Holden|Peter Carlisle|relationship rupture|family protection|police conflict`,
  `What does Ripley offer Steve in hospital to persuade him to leave Shyanne?|A large sum of money|A job as his accountant|A one-way ticket to America|A stake in a football club|Medium|2004|episode 4|Ripley Holden|Steve boyfriend|hospital visit|cash offer|Shyanne romance`,
  `What does Steve buy for Shyanne after accepting Ripley's money?|An engagement ring|A new car|An expensive holiday|A seaside flat|Medium|2004|episode 4|Steve boyfriend|Shyanne Holden|engagement ring|bribe reversal|romance`,
  `Where does Ripley find Danny during the boy's crisis in Episode 4?|On railway tracks|On the roof of the arcade|In a hotel swimming pool|At the edge of a pier|Medium|2004|episode 4|Danny Holden|railway tracks|suicide crisis|Ripley rescue|family trauma`,
  `What troubling event from Ripley's own youth parallels Danny's actions in Episode 4?|He also attempted suicide as a teenager|He escaped a boarding school by train|He tried to join a travelling circus|He ran away to France|Hard|2004|episode 4|Ripley Holden|teenage suicide attempt|Danny parallel|family history|personal crisis`,
  `What does Danny admit doing with the murder victim's body?|Moving it from Ripley's flats to the arcade|Burying it beneath the beach|Hiding it in the family car|Leaving it at the hospital|Hard|2004|episode 4|Danny Holden|body moved|flats to arcade|murder secret|father confession`,
  `What responsibility does Ripley falsely accept when he speaks to Carlisle in Episode 4?|That he moved the dead body|That he shot Steve|That he planted drugs on Danny|That he stole the casino plans|Medium|2004|episode 4|Ripley Holden|false admission|body relocation|protecting son|police interview`,
  `Which director takes over for the final three episodes of the 2004 serial?|Coky Giedroyc|Julie Anne Robinson|Catherine Morshead|Marc Evans|Hard|2004|episode 4|Coky Giedroyc|series direction|episodes four to six|production credits|BBC drama`,

  // Episode 5: pressure on Ripley's business and marriage
  `Who provides Ripley with an alibi for the night of the murder in Episode 5?|Natalie Holden|Shyanne Holden|Adrian Marr|DC Blythe|Easy|2004|episode 5|Natalie Holden|Ripley Holden|murder alibi|marital loyalty|police case`,
  `Why is Natalie's alibi frustrating for Carlisle?|He knows she is lying but cannot disprove it|He has lost all the case files|He is legally barred from questioning women|Ripley has already fled the country|Hard|2004|episode 5|Peter Carlisle|false alibi|Natalie Holden|investigative dilemma|conflict of interest`,
  `Which trusted financial adviser turns against Ripley as his finances collapse?|Adrian Marr|Terry Corlette|DC Blythe|Hallworth|Medium|2004|episode 5|Adrian Marr|Steve Pemberton|financial betrayal|Ripley business|accountant`,
  `Which of Ripley's friends admits passing information to the police?|Terry Corlette|Steve|Danny Holden|Hallworth|Medium|2004|episode 5|Terry Corlette|police informer|Ripley activities|investigation leads|broken trust`,
  `What step does Carlisle take when his fellow officer challenges his impartiality?|He withdraws from the murder investigation|He destroys the evidence|He arrests Natalie|He buys shares in the arcade|Hard|2004|episode 5|Peter Carlisle|police ethics|DC Blythe|conflict of interest|case withdrawal`,
  `What future does Carlisle ask Natalie to consider in Episode 5?|Leaving Blackpool with him|Running for local council|Joining him in the police|Opening a joint casino|Medium|2004|episode 5|Peter Carlisle|Natalie Holden|relationship choice|leave town|romance ultimatum`,
  `Where does Natalie go when she decides to try to end her affair with Carlisle?|His hotel|The town hall|A train depot|Ripley's arcade|Medium|2004|episode 5|Natalie Holden|hotel visit|Peter Carlisle|relationship ending|marriage conflict`,
  `Which Queen song is used as a musical number in Episode 5?|Don't Stop Me Now|Radio Ga Ga|Killer Queen|Somebody to Love|Medium|2004|episode 5|Don't Stop Me Now|Queen|soundtrack song|musical sequence|Freddie Mercury`,
  `What makes Ripley's desperate financial gamble in Episode 5 especially risky?|His business and marriage are both collapsing|The police have closed every hotel in town|His accountant has already sold the beach|His children have left the country|Medium|2004|episode 5|Ripley Holden|high-stakes gambling|business collapse|Natalie affair|personal desperation`,

  // Episode 6: wedding and murder resolution
  `Whose wedding forms the backdrop to the final episode of Blackpool?|Shyanne and Steve's|Danny and Natalie's|Ripley and Natalie's|Carlisle and Shyanne's|Easy|2004|episode 6|Shyanne Holden|Steve boyfriend|wedding finale|family celebration|final episode`,
  `What affair does Ripley confront Natalie about on the wedding day?|Her relationship with DI Carlisle|Her relationship with Adrian Marr|Her relationship with Terry|Her relationship with Hallworth|Easy|2004|episode 6|Natalie Holden|Peter Carlisle|Ripley discovery|marital breakdown|wedding revelations`,
  `What does Carlisle attempt to do when he arrives during the wedding celebrations?|Arrest Ripley for murder|Perform the wedding ceremony|Serve a tax bill|Offer Ripley a hotel contract|Medium|2004|episode 6|Peter Carlisle|arrest attempt|Ripley Holden|murder investigation|wedding confrontation`,
  `Which fact does Ripley raise to challenge Carlisle's conduct of the murder case?|Carlisle has been involved with the suspect's wife|Carlisle has stolen money from the arcade|Carlisle is Steve's uncle|Carlisle has forged his police warrant card|Hard|2004|episode 6|Ripley Holden|Carlisle conflict|Natalie affair|police misconduct|wedding confrontation`,
  `Who is ultimately responsible for the young man's death in the original Blackpool mystery?|Danny Holden|Ripley Holden|Peter Carlisle|Adrian Marr|Medium|2004|episode 6|Danny Holden|murder solution|family secret|final revelation|arcade case`,
  `How is the death of the young man finally explained in Blackpool?|Danny killed him in self-defence|Ripley ordered a contract killing|The young man died of natural causes|Carlisle accidentally shot him|Hard|2004|episode 6|Danny Holden|self-defence|murder resolution|victim confrontation|final truth`,
  `What does Ripley learn about Danny's sexuality in the finale?|Danny is gay|Danny is engaged to Shyanne's friend|Danny is planning to become a priest|Danny has secretly married|Medium|2004|episode 6|Danny Holden|coming out|sexual orientation|Ripley family|father and son`,
  `What does Ripley do with the arcade as the original serial ends?|He hands it over to Danny|He sells it to DI Carlisle|He has it demolished|He converts it into a school|Medium|2004|episode 6|Ripley Holden|Danny Holden|arcade handover|business future|family resolution`,
  `Whom does Ripley allow Natalie to be with after accepting their marriage has ended?|Peter Carlisle|Terry Corlette|Adrian Marr|Steve|Easy|2004|episode 6|Natalie Holden|Peter Carlisle|marriage ending|Ripley acceptance|relationship resolution`,
  `Which Billy Idol song appears in the musical numbers for the Blackpool wedding finale?|White Wedding|Rebel Yell|Eyes Without a Face|Dancing with Myself|Medium|2004|episode 6|White Wedding|Billy Idol|soundtrack song|wedding musical|1980s pop`,
  `Which Communards recording is featured in the original serial's final episode?|Don't Leave Me This Way|Never Can Say Goodbye|You Are My World|So Cold the Night|Medium|2004|episode 6|Don't Leave Me This Way|The Communards|finale music|soundtrack artist|dance pop`,

  // The 2006 follow-up: Viva Blackpool
  `What happens to Ripley between the 2004 serial and the start of Viva Blackpool?|He goes to Las Vegas and later returns|He becomes a policeman in London|He spends two years working in Paris|He inherits a Scottish castle|Easy|2006|Viva Blackpool|Las Vegas|Ripley Holden|between series|business setback|return home`,
  `What business does Ripley operate in the 2006 special Viva Blackpool?|A themed wedding chapel|A luxury sports club|A detective agency|A seafront cinema|Easy|2006|Viva Blackpool|Chapel of Love|wedding business|Ripley Holden|career change|seaside chapel`,
  `What religious role does Ripley claim in the follow-up special?|Ordained minister|Roman Catholic bishop|Rabbi|Buddhist monk|Easy|2006|Viva Blackpool|Reverend Ripley|ordination|wedding ceremonies|comic reinvention|ministry`,
  `Which chapel name does Ripley use for his themed wedding ceremonies?|The Chapel of Love|The Chapel of Dreams|The Lucky Star Chapel|The Golden Heart Chapel|Easy|2006|Viva Blackpool|Chapel of Love|Ripley Holden|wedding venue|business branding|ceremonies`,
  `What grand expansion does Ripley plan for his new business in Viva Blackpool?|A nationwide chain of wedding chapels|A cruise line of floating casinos|A franchise of fish and chip shops|A chain of detective agencies|Medium|2006|Viva Blackpool|wedding chapel franchise|national expansion|Ripley ambition|business scheme|new venture`,
  `Where does Ripley live while running the wedding chapel in Viva Blackpool?|A luxury caravan beside the chapel|A penthouse in Blackpool Tower|A yacht in the marina|A suite at the Imperial Hotel|Easy|2006|Viva Blackpool|luxury caravan|chapel car park|Ripley accommodation|trailer|family home`,
  `Who helps Ripley operate the Chapel of Love in the 2006 special?|His daughter Shyanne|His former wife Natalie|Detective Carlisle|His son Danny|Easy|2006|Viva Blackpool|Shyanne Holden|chapel assistant|father daughter|business partner|family support`,
  `What is the name of Shyanne's young daughter in Viva Blackpool?|Freya|Natalie|Kitty|Lucy|Medium|2006|Viva Blackpool|Freya|Shyanne child|Ripley granddaughter|family subplot|young daughter`,
  `Why is Shyanne no longer with Steve in the 2006 follow-up?|He left her for an older woman|He moved to America for work|He entered the police service|He died in a road accident|Medium|2006|Viva Blackpool|Shyanne Holden|Steve boyfriend|marital breakup|single mother|sequel backstory`,
  `Which glamorous bride is left waiting at Ripley's altar in Viva Blackpool?|Kitty De-Luxe|Natalie Holden|Mrs Berry|Shyanne Holden|Easy|2006|Viva Blackpool|Kitty De-Luxe|jilted bride|missed wedding|Ripley romance|new arrival`,
  `Which actress plays Kitty De-Luxe in the 2006 special?|Megan Dodds|Sarah Parish|Georgia Taylor|Annette Crosbie|Easy|2006|Viva Blackpool|Megan Dodds|Kitty De-Luxe|guest star|romantic lead|actor role`,
  `What is the real name of the woman calling herself Kitty De-Luxe?|Sadie Ward|Natalie Holden|Imelda Berry|Shyanne Vesty|Hard|2006|Viva Blackpool|Sadie Ward|Kitty De-Luxe|false identity|con artist|police revelation`,
  `From which English city does the police officer say Kitty's earlier table-dancing identity came?|Hull|Leeds|York|Liverpool|Hard|2006|Viva Blackpool|Hull|Sadie Ward|table dancer|hidden past|false persona`,
  `What entertainment career does Kitty dream of pursuing in Viva Blackpool?|Starring in an ice show|Opening a jazz nightclub|Becoming a radio presenter|Singing in a country band|Medium|2006|Viva Blackpool|Kitty De-Luxe|ice dancing|show business ambition|ice rink|romantic subplot`,
  `Which football prize becomes the centre of the scheme in Viva Blackpool?|The Jules Rimet World Cup trophy|The FA Cup trophy|The European Cup|The Charity Shield|Easy|2006|Viva Blackpool|Jules Rimet trophy|World Cup|football memorabilia|theft plot|prize`,
  `Who is Mrs Berry in relation to Ripley's deceased Las Vegas business partner?|His mother|His wife|His sister|His daughter|Medium|2006|Viva Blackpool|Mrs Berry|Patrick Berry|bereaved mother|Las Vegas partner|family connection`,
  `Which actress plays Mrs Berry in Viva Blackpool?|Annette Crosbie|Megan Dodds|Sarah Parish|Hayley Carmichael|Medium|2006|Viva Blackpool|Annette Crosbie|Mrs Berry|guest cast|Patrick mother|actor role`,
  `Where has Mrs Berry unknowingly kept the valuable trophy?|As a container for her son's ashes|Buried beneath her rose garden|In a bank safety-deposit box|Under the wedding chapel's floor|Hard|2006|Viva Blackpool|Mrs Berry|Patrick ashes|trophy urn|Jules Rimet secret|sentimental keepsake`,
  `What was the first name of Ripley's late friend who had possessed the trophy?|Patrick|Peter|Adrian|Terry|Medium|2006|Viva Blackpool|Patrick Berry|Las Vegas partnership|deceased friend|trophy owner|backstory`,
  `Which car dealer is one of the rival bidders for the World Cup trophy?|Tommy Vesty|Steve Pollard|Billy Pope|Darrell Vibe|Medium|2006|Viva Blackpool|Tommy Vesty|motor dealer|trophy bidder|rival buyer|business rivalry`,
  `Which actor plays motor trader Tommy Vesty?|Mark Williams|Keith Allen|Paul Ritter|David Bradley|Medium|2006|Viva Blackpool|Mark Williams|Tommy Vesty|guest actor|car dealership|trophy plot`,
  `What is Steve Pollard's profession in Viva Blackpool?|Sports agent|Accountant|Police detective|Church organist|Medium|2006|Viva Blackpool|Steve Pollard|football agent|trophy bidder|Triple A Sport|sports business`,
  `Which actor plays sports agent Steve Pollard?|Keith Allen|Mark Williams|Paul Ritter|John Thomson|Medium|2006|Viva Blackpool|Keith Allen|Steve Pollard|guest actor|sporting agent|buyer rival`,
  `Who plays Ripley's chapel assistant Billy Pope in the 2006 special?|Paul Ritter|Al Weaver|Bryan Dick|Kevin Doyle|Medium|2006|Viva Blackpool|Paul Ritter|Billy Pope|chapel staff|piano player|actor role`,
  `What nickname does Darrell use while working for the sports agent in Viva Blackpool?|Vibe|Buzz|Ace|Flash|Medium|2006|Viva Blackpool|Darrell|Vibe|Steve Pollard runner|Al Weaver|Shyanne romance`,
  `Which detective sergeant investigates the theft in Viva Blackpool?|DS Coogan|DI Peter Carlisle|DC Blythe|DS Jim Allbright|Medium|2006|Viva Blackpool|DS Coogan|Hayley Carmichael|trophy theft|police inquiry|investigation`,
  `Who directs the one-off Viva Blackpool television special?|Catherine Morshead|Julie Anne Robinson|Coky Giedroyc|Peter Bowker|Hard|2006|Viva Blackpool|Catherine Morshead|television direction|sequel director|90 minute special|production credits`,
  `Which Queen song opens the musical performances in Viva Blackpool?|Crazy Little Thing Called Love|Somebody to Love|A Kind of Magic|You're My Best Friend|Medium|2006|Viva Blackpool|Crazy Little Thing Called Love|Queen|opening musical|soundtrack song|rockabilly`,
  `Which Tom Jones hit is featured as a musical number in Viva Blackpool?|It's Not Unusual|Delilah|What's New Pussycat?|She's a Lady|Medium|2006|Viva Blackpool|It's Not Unusual|Tom Jones|soundtrack selection|song performance|Welsh singer`,
  `Who does Ripley expose to the police over the Jules Rimet trophy theft near the end of Viva Blackpool?|Kitty and the two trophy buyers|Shyanne and his chapel staff|Natalie and Carlisle|Only Mrs Berry|Hard|2006|Viva Blackpool|Ripley Holden|Kitty De-Luxe|Steve Pollard|Tommy Vesty|final sting`,
  `Which song accompanies the closing romantic scene of Viva Blackpool?|Dream a Little Dream of Me|White Wedding|The Gambler|Viva Las Vegas|Hard|2006|Viva Blackpool|Dream a Little Dream of Me|closing musical|romance ending|final song|pop standard`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 395: malformed row ${index + 1}`);
  }
  const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  const question = stem.toLowerCase().includes(PROGRAMME.toLowerCase()) ||
    stem.toLowerCase().includes('viva blackpool') ? stem :
    'In '+PROGRAMME+', '+stem[0].toLowerCase()+stem.slice(1);
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 395: invalid difficulty at row ${index + 1}`);
  }
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
    throw new Error(`Pack 395: repeated answer option at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length < 12) {
    throw new Error(`Pack 395: expected 12+ distinct tags at row ${index + 1}; got ${tags.length}`);
  }
  return {
    id: `tv_${FIRST_ID + index}`,
    category: 'Television',
    programme: PROGRAMME,
    question,
    answers,
    correctAnswer,
    difficulty,
    tags,
    dailyEligible: true
  };
});



// Blackpool six-part serial (2004) and Viva Blackpool follow-up (2006).
// Keep original 101 IDs tv_21539–tv_21639. New IDs start tv_41177.
// Award sources: https://peabodyawards.com/award-profile/viva-blackpool/
// https://www.bafta.org/awards/television/?award-year=2005
// https://rts.org.uk/award/programme-awards-winners-2005
// https://goldenglobes.com/articles/63rd-golden-globe-awards-nominations/
// https://www.4rfv.co.uk/industrynews/41621/bbc_triumphs_at_banff_world_television_festival
// Production: https://socinety.com/show/blackpool-2004
// Follow-up cast: https://www.whatsafterthemovie.com/movies/vivablackpool-2006
// Dates: https://www.tvmaze.com/shows/6925/blackpool
// https://watch.plex.tv/en-GB/show/blackpool/season/0/episode/1
const audit395Facts = [
  [
    "2004 serial",
    "Which US media honour did the original serial receive for its 2005 American broadcast?",
    "A Peabody Award",
    "An Emmy Award",
    "A Critics' Choice Award",
    "A Tony Award",
    "International recognition",
    "2005 Peabody winner"
  ],
  [
    "2004 serial",
    "At which Canadian television festival did the serial win major prizes in 2005?",
    "Banff World Television Festival",
    "Monte-Carlo Television Festival",
    "Edinburgh Television Festival",
    "Cannes Film Festival",
    "2005 awards",
    "Banff Rockie awards"
  ],
  [
    "2004 serial",
    "Which overall festival prize did the original serial win in Canada in 2005?",
    "Global Television Grand Prize",
    "Grand Jury Documentary Prize",
    "Audience Choice Drama Prize",
    "Best Television Performance",
    "Rockie Festival recognition",
    "Banff award"
  ],
  [
    "2004 serial",
    "Which programme category did the original serial win at the 2005 Banff Rockie Awards?",
    "Best Mini-Series",
    "Best Sitcom",
    "Best Children's Series",
    "Best History Programme",
    "Banff award category",
    "Rockie Awards 2005"
  ],
  [
    "2004 serial",
    "In which category was the show nominated at the 2005 British Academy Television Awards?",
    "Drama Serial",
    "Drama Series",
    "Situation Comedy",
    "Single Drama",
    "BAFTA nomination",
    "2005 television awards"
  ],
  [
    "2004 serial",
    "Which Channel 4 production won the BAFTA in the category in which the show was nominated?",
    "Sex Traffic",
    "Shameless",
    "The Long Firm",
    "Omagh",
    "BAFTA category result",
    "2005 BAFTA winner"
  ],
  [
    "2004 serial",
    "Which British organisation nominated the show in its Drama Serial category in 2005?",
    "Royal Television Society",
    "Royal Variety Charity",
    "British Film Institute",
    "Broadcasting Press Guild",
    "2005 RTS award nomination",
    "Drama Serial"
  ],
  [
    "2004 serial",
    "Which American award ceremony nominated the BBC serial under its overseas title in 2006?",
    "Golden Globe Awards",
    "Primetime Emmy Awards",
    "Screen Actors Guild Awards",
    "American Music Awards",
    "2006 international nomination",
    "Viva Blackpool overseas title"
  ],
  [
    "2004 serial",
    "Which category recognised the show at the 2006 Golden Globes?",
    "Best Miniseries or Motion Picture Made for Television",
    "Best Television Series – Comedy or Musical",
    "Best Television Series – Drama",
    "Best Motion Picture – Musical or Comedy",
    "2006 Golden Globes",
    "BBC America nomination"
  ],
  [
    "2004 serial",
    "For which 2005 RTS acting recognition was Danny Holden's performer nominated?",
    "Network Newcomer – On Screen",
    "Actor Male",
    "Comedy Performance",
    "Network Newcomer – Behind The Screen",
    "Royal Television Society nomination",
    "Thomas Morrison"
  ],
  [
    "2004 serial",
    "Who produced the original six-part BBC serial?",
    "Kate Lewis",
    "Sally Haynes",
    "Laura Mackie",
    "Julie-Anne Robinson",
    "BBC production",
    "Original producer"
  ],
  [
    "2004 serial",
    "Who composed the original instrumental score for the BBC serial?",
    "Rob Lane",
    "Rick Wentworth",
    "Murray Gold",
    "Philip Pope",
    "Original soundtrack",
    "Composer"
  ],
  [
    "2004 serial",
    "Who was credited as director of photography on the original series?",
    "Lukas Strebel",
    "Brian West",
    "Paul Herley",
    "Doug Hallows",
    "Cinematography",
    "BBC original series"
  ],
  [
    "2004 serial",
    "Who designed the costumes for the original 2004 production?",
    "Andrea Galer",
    "Caroline McCall",
    "Claire Finlay-Thompson",
    "Sarah Arthur",
    "BBC creative team",
    "Costume designer"
  ],
  [
    "2004 serial",
    "Who handled casting for the original BBC serial?",
    "Kate Rhodes James",
    "Jill Trevellick",
    "Nina Gold",
    "Suzanne Smith",
    "BBC creative team",
    "Casting credit"
  ],
  [
    "2004 serial",
    "Which editor worked on the serial alongside David Rees?",
    "Anthony Combes",
    "Chris Gill",
    "John Grover",
    "Simon Brasse",
    "BBC postproduction",
    "Editing"
  ],
  [
    "2004 serial",
    "Who was credited as an executive producer for BBC Drama alongside Sally Haynes?",
    "Laura Mackie",
    "Jane Tranter",
    "Verity Lambert",
    "Kate Harwood",
    "BBC executive production",
    "Peabody production credits"
  ],
  [
    "2004 serial",
    "Which BBC America executive producer is named in its Peabody Award production credits?",
    "David Bernath",
    "David Bernal",
    "David Crane",
    "David E. Kelley",
    "BBC America executive production",
    "Peabody credits"
  ],
  [
    "2004 serial",
    "Who served as an executive producer alongside Laura Mackie?",
    "Sally Haynes",
    "Nicola Shindler",
    "Julie Gardner",
    "Hilary Bevan Jones",
    "Original executive producer",
    "BBC production credits"
  ],
  [
    "2004 serial",
    "Who handled art direction on the six-part original series?",
    "David Walley",
    "David Rees",
    "Anthony Combes",
    "Rob Lane",
    "Art department",
    "Production credit"
  ],
  [
    "2004 serial",
    "What date did the original six-part serial first air on BBC One?",
    "11 November 2004",
    "4 November 2004",
    "18 November 2004",
    "11 October 2004",
    "BBC One premiere",
    "Original UK broadcast"
  ],
  [
    "2004 serial",
    "On what date did the original six-part serial conclude on BBC One?",
    "16 December 2004",
    "9 December 2004",
    "23 December 2004",
    "2 December 2004",
    "BBC One finale",
    "Last original episode"
  ],
  [
    "Viva Blackpool",
    "Who portrayed sports agent Steve Pollard's assistant Vibe?",
    "Al Weaver",
    "Paul Ritter",
    "Mark Williams",
    "Bryan Dick",
    "Supporting cast",
    "Vibe performer"
  ],
  [
    "Viva Blackpool",
    "Which actress portrayed police detective DS Coogan?",
    "Hayley Carmichael",
    "Megan Dodds",
    "Sarah Parish",
    "Georgia Taylor",
    "Supporting cast",
    "DS Coogan performer"
  ],
  [
    "Viva Blackpool",
    "Which future film and television star played the Pretty Young Woman?",
    "Gugu Mbatha-Raw",
    "Naomie Harris",
    "Freema Agyeman",
    "Thandiwe Newton",
    "Small featured part",
    "Viva Blackpool cast"
  ],
  [
    "Viva Blackpool",
    "On which date did the one-off follow-up premiere on BBC One?",
    "10 June 2006",
    "10 July 2006",
    "16 December 2004",
    "24 December 2006",
    "Follow-up first broadcast",
    "2006 special"
  ],
  [
    "2004 serial",
    "Which short-lived CBS remake of the original programme premiered in the United States in 2007?",
    "Viva Laughlin",
    "Swingtown",
    "The Ex List",
    "Cop Rock",
    "American adaptation",
    "2007 CBS remake"
  ],
  [
    "2004 serial",
    "Which production assistant role did Clare Andrade fulfil on the six-part original?",
    "Set Decoration",
    "Costume Design",
    "Sound Editing",
    "Casting",
    "BBC creative credits",
    "Set department"
  ]
];
const audit395Norm=x=>String(x).normalize('NFKC').toLocaleLowerCase('en-GB')
  .replace(/[^\p{L}\p{N}]/gu,'');
for(const [section,stem,correctAnswer,wrong1,wrong2,wrong3,focus,context] of audit395Facts){
 const question='In '+(section==='Viva Blackpool'?'Viva Blackpool':PROGRAMME)+
 ', '+stem[0].toLowerCase()+stem.slice(1);
 const answers=[wrong1,wrong2,wrong3];answers.splice(questions.length%4,0,correctAnswer);
 if(new Set(answers.map(audit395Norm)).size!==4)
   throw Error('Pack 395 audited answer choice issue '+stem);
 const tags=['Television','British Television','BBC One','Musical Crime Drama',
  PROGRAMME,'Programme: '+PROGRAMME,'Section: '+section,
  'Question focus: '+focus,'Supporting detail: '+context,
  'Correct answer: '+correctAnswer,'Creator: Peter Bowker',
  'Blackpool 2004 or Viva Blackpool 2006','British television musicals',
  'Broadcast or recognition: '+context];
 questions.push({id:'tv_'+(41177+questions.length-101),
  category:'Television',programme:PROGRAMME,question,answers,
  correctAnswer,difficulty:'Medium',tags,dailyEligible:true});
}
const id395=new Set(),stem395=new Set();
for(const x of questions){
 const k=audit395Norm(x.question);
 if(x.category!=='Television'||x.programme!==PROGRAMME||
 !x.tags.includes('Programme: '+PROGRAMME)||x.answers.length!==4||
 new Set(x.answers.map(audit395Norm)).size!==4||
 x.answers.filter(a=>a===x.correctAnswer).length!==1||
 x.tags.length<12||x.dailyEligible!==true||
 id395.has(x.id)||stem395.has(k))
 throw Error('Pack 395 validation failed at '+x.id);
 id395.add(x.id);stem395.add(k);
}
module.exports=questions;
