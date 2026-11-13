
 // PuzzlePilot - Big Quiz - Pack 416
 // All My Children (1990-1999): major actors, characters, relationships and storylines.
 // Follows 1970s Pack 414 and 1980s Pack 415. Next: 2000-2009.
 // Full WordPad-ready CommonJS file. First ID: tv_23543.
 'use strict';

 const FIRST_ID = 23543;
 const commonTags = [
   'television', 'All My Children', 'American soap opera',
   'Pine Valley', 'ABC daytime', '1990s storylines'
 ];

 // Question | correct | incorrect 1 | incorrect 2 | incorrect 3 | difficulty | seven specific tags.
 // Correct-answer positions rotate; all exported questions identify the programme.
 const rows = [
 `Which actress played Hayley Vaughan, a major newcomer to All My Children in the 1990s?|Kelly Ripa|Marcy Walker|Cady McClain|Julia Barr|Easy|Hayley Vaughan|Kelly Ripa|1990 arrival|Chandler family|actor casting|1990s heroine|performer`,
 `Who was Hayley Vaughan's powerful businessman father in All My Children?|Adam Chandler|Palmer Cortlandt|Trevor Dillon|Joe Martin|Easy|Hayley Vaughan|Adam Chandler|father daughter|Chandler family|1990|secret parentage|family relationship`,
 `Which troubled woman was Hayley Vaughan's mother in All My Children?|Arlene Vaughan|Marian Colby|Opal Gardner|Natalie Marlowe|Medium|Arlene Vaughan|Hayley Vaughan|mother daughter|alcohol problems|1990|family background|parentage`,
 `Which actor portrayed teenager Brian Bodine in the early 1990s of All My Children?|Matt Borlenghi|Mark Consuelos|Laurence Lau|Cameron Mathison|Medium|Matt Borlenghi|Brian Bodine|Hayley romance|1990s casting|young couple|actor|1990 debut`,
 `Which actress originated the character Ceara Connor in All My Children?|Genie Francis|Sarah Michelle Gellar|Eva LaRue|Susan Lucci|Medium|Genie Francis|Ceara Connor|1990|casting|Jeremy Hunter|social storyline|character introduction`,
 `Which character was romantically involved with Ceara Connor after trying to break up her earlier romance in All My Children?|Jeremy Hunter|Jackson Montgomery|Adam Chandler|Trevor Dillon|Medium|Ceara Connor|Jeremy Hunter|David Rampal|1990|romantic relationship|Hunter family|courtship`,
 `Which painful childhood experience did Ceara Connor confront in All My Children?|Abuse by her father|Being wrongly convicted of theft|A childhood kidnapping by strangers|Being abandoned on a ship|Medium|Ceara Connor|George Connor|incest storyline|childhood abuse|1991|recovered memory|social issue`,
 `Who was the abusive father at the centre of Ceara Connor's All My Children storyline?|George Connor|Eric Kane|Hugo Marick|Ray Gardner|Medium|George Connor|Ceara Connor|father daughter|1991|abuse revelations|family trauma|character`,
 `Which illness afflicted young Molly in a major early-1990s All My Children storyline?|Leukaemia|Diabetes|Cystic fibrosis|Meningitis|Easy|Molly Montgomery|leukaemia|1990|childhood illness|Barbara Montgomery|medical drama|bone marrow`,
 `What treatment did Molly need during her illness in All My Children?|A bone-marrow transplant|A heart transplant|A cornea transplant|An artificial kidney|Medium|Molly Montgomery|bone marrow transplant|1990|leukaemia|family donor|hospital|health storyline`,
 `Which politician was revealed as Molly's biological father during her treatment in All My Children?|Travis Montgomery|Tom Cudahy|Jackson Montgomery|Joe Martin|Medium|Molly Montgomery|Travis Montgomery|Barbara Montgomery|1990|paternity reveal|medical donor|family secret`,
 `Which former villain returned to Pine Valley and told Emily Ann Sago he was her father in All My Children?|Billy Clyde Tuggle|Ray Gardner|Will Cortlandt|Tony Barclay|Medium|Billy Clyde Tuggle|Emily Ann Sago|1990 return|villain|paternity revelation|Donna Beck|father daughter`,
 `Which character was believed killed after falling from a bridge with Tad Martin in All My Children?|Billy Clyde Tuggle|Adam Chandler|Palmer Cortlandt|Trevor Dillon|Medium|Billy Clyde Tuggle|Tad Martin|1990|bridge fall|presumed death|disappearance|villain confrontation`,
 `What happened to Tad Martin after his confrontation with Billy Clyde Tuggle in All My Children?|He developed amnesia|He moved to London to practise medicine|He became mayor of Pine Valley|He entered the army|Medium|Tad Martin|amnesia|bridge fall|1990|Billy Clyde Tuggle|presumed death|lost identity`,
 `Which woman gave birth to Tad Martin's son Jamie in the early 1990s of All My Children?|Brooke English|Dixie Cooney|Liza Colby|Erica Kane|Medium|Brooke English|Jamie Martin|Tad Martin|1990|mother son|emergency birth|family`,
 `Which woman took responsibility for a drink-driving accident caused by her mother in All My Children?|Hayley Vaughan|Liza Colby|Dixie Cooney|Natalie Marlowe|Medium|Hayley Vaughan|Arlene Vaughan|1990|drunk driving|Brooke English|cover story|mother daughter`,
 `Which wealthy man did Opal Gardner marry in All My Children at the start of the 1990s?|Palmer Cortlandt|Adam Chandler|Langley Wallingford|Dimitri Marick|Easy|Opal Gardner|Palmer Cortlandt|marriage|1990|social class|Cortlandt family|romantic partnership`,
 `What did Palmer Cortlandt's spurned employee do in an early-1990s All My Children revenge plot?|Poison Palmer|Steal Adam's helicopter|Burn down the hospital|Kidnap Bianca|Medium|Palmer Cortlandt|Mr U|poisoning|1990|Opal Gardner|revenge|Cortlandt household`,
 `Which character became the object of Trevor Dillon's affection after a turbulent romance in All My Children?|Natalie Marlowe|Phoebe Tyler|Dixie Cooney|Liza Colby|Medium|Trevor Dillon|Natalie Marlowe|romance|1991|Dillon family|later marriage|relationship`,
 `Who played the lawyer Trevor Dillon in All My Children during the 1990s?|James Kiberd|Walt Willey|John Callahan|Michael Nader|Medium|James Kiberd|Trevor Dillon|lawyer|1990s cast|actor|Natalie romance|Dillon family`,
 `Who portrayed Natalie Marlowe when her twin-like sister Janet first appeared in All My Children?|Kate Collins|Robin Mattson|Marcy Walker|Jennifer Bassey|Medium|Kate Collins|Natalie Marlowe|1991|Janet Green|actor casting|character|dual role`,
 `Who played Janet Green when she was introduced in All My Children?|Kate Collins|Robin Mattson|Melody Anderson|Cady McClain|Medium|Kate Collins|Janet Green|1991 debut|original casting|Natalie sister|impersonation plot|character`,
 `What was Janet Green's relationship to Natalie Marlowe in All My Children?|They were sisters|They were mother and daughter|They were cousins|They were sisters-in-law|Easy|Janet Green|Natalie Marlowe|sisters|family relationship|1991|imposture|sibling conflict`,
 `Where did Janet imprison Natalie while impersonating her in All My Children?|In a well|In a lighthouse|In a disused railway carriage|In a hospital basement|Easy|Natalie in the Well|Janet Green|1991|kidnapping|impersonation|captivity|Trevor Dillon`,
 `Whom did Janet Green impersonate to pursue Trevor Dillon in All My Children?|Natalie Marlowe|Erica Kane|Brooke English|Dixie Cooney|Medium|Janet Green|Natalie Marlowe|Trevor Dillon|1991|disguise|identity theft|romance plot`,
 `Which aristocratic newcomer rescued Natalie from the well in All My Children?|Dimitri Marick|Edmund Grey|Adam Chandler|Palmer Cortlandt|Medium|Dimitri Marick|Natalie in the Well|1991|rescue|Janet Green|Wildwind|aristocrat`,
 `What estate became associated with Dimitri Marick in All My Children?|Wildwind|Cortlandt Manor|Heston Grange|Chandler Hollow|Easy|Wildwind|Dimitri Marick|estate|1991|Marick family|gothic mansion|Pine Valley landmark`,
 `Which daughter was born to Janet Green and Trevor Dillon in All My Children?|Amanda|Bianca|Maddie|Colby|Medium|Amanda Dillon|Janet Green|Trevor Dillon|1992|child birth|family relationship|Dillon daughter`,
 `Which woman helped raise Janet and Trevor's baby Amanda after Janet's arrest in All My Children?|Natalie Dillon|Erica Kane|Liza Colby|Mona Kane|Medium|Amanda Dillon|Natalie Marlowe|Trevor Dillon|1992|adoptive parent|Janet Green|family care`,
 `Who murdered Will Cortlandt in one of All My Children's biggest mysteries?|Janet Green|Hayley Vaughan|Palmer Cortlandt|Gloria Marsh|Easy|Will Cortlandt|Janet Green|1992|murder mystery|killer reveal|crowbar|crime`,
 `What weapon was used to murder Will Cortlandt in All My Children?|A crowbar|A poisoned wine glass|A hunting rifle|A kitchen knife|Medium|Will Cortlandt|crowbar|1992|murder weapon|Janet Green|whodunit|crime`,
 `Which woman had been assaulted by Will Cortlandt before his murder in All My Children?|Gloria Marsh|Myrtle Fargate|Opal Gardner|Jenny Gardner|Medium|Gloria Marsh|Will Cortlandt|1992|sexual assault|Craig Lawson|murder suspects|victim`,
 `Which woman was briefly married to Will Cortlandt in All My Children?|Hayley Vaughan|Dixie Cooney|Natalie Marlowe|Erica Kane|Medium|Hayley Vaughan|Will Cortlandt|1992|marriage|Brian Bodine|Chandler family|relationship`,
 `Which son of lawyer Livia Frye was attacked by racists in All My Children?|Terrence Frye|Tim Dillon|Brian Bodine|Frankie Hubbard|Medium|Terrence Frye|Livia Frye|racist attack|1992|racial violence|student|social issue`,
 `Which character was a teenager involved with An Li Chen during a story about immigration in All My Children?|Brian Bodine|Tad Martin|Jesse Hubbard|Mateo Santos|Medium|Brian Bodine|An Li Chen|1992|marriage|immigration|Hayley Vaughan|young romance`,
 `What was An Li Chen trying to avoid when Brian Bodine married her in All My Children?|Deportation|Military conscription|A prison sentence for theft|An unwanted modelling contract|Medium|An Li Chen|Brian Bodine|immigration status|1992|deportation|marriage of convenience|social storyline`,
 `Which actress played An Li Chen from 1991 to 1993 in All My Children?|Lindsay Price|Irene Ng|Ming-Na Wen|Lucy Liu|Hard|An Li Chen|Lindsay Price|Brian Bodine|1991 to 1993|recast|immigration storyline|actor casting`,
 `Which wealthy man's ex-wife Daisy helped reconcile him with Opal in All My Children?|Palmer Cortlandt|Adam Chandler|Trevor Dillon|Langley Wallingford|Medium|Daisy Cortlandt|Palmer Cortlandt|Opal Gardner|1991|romantic reconciliation|former wife|family`,
 `Who played Edmund Grey, the journalist drawn into the Marick family in All My Children?|John Callahan|Michael Nader|Mark Consuelos|Walt Willey|Easy|John Callahan|Edmund Grey|1992 introduction|journalist|Marick family|actor casting|Wildwind`,
 `Which profession did Edmund Grey practise on first arriving in All My Children?|Journalism|Veterinary medicine|Banking|Stage acting|Medium|Edmund Grey|journalist|1992|Will Cortlandt investigation|Wildwind|character occupation|Brooke English`,
 `Which woman first had a romantic relationship with Edmund Grey as he investigated the Maricks in All My Children?|Brooke English|Erica Kane|Liza Colby|Hayley Vaughan|Medium|Edmund Grey|Brooke English|1992|courtship|Marick secrets|romantic relationship|journalist`,
 `Which actor portrayed aristocrat Dimitri Marick during most of All My Children's 1990s?|Michael Nader|John Callahan|James Mitchell|David Canary|Easy|Michael Nader|Dimitri Marick|actor casting|Wildwind|Erica Kane|1990s|aristocrat`,
 `Which powerful man was revealed to be Edmund Grey's father in All My Children?|Hugo Marick|Palmer Cortlandt|Adam Chandler|Ray Gardner|Medium|Edmund Grey|Hugo Marick|father son|1992|secret parentage|Wildwind estate|Marick family`,
 `What family relationship was eventually revealed between Edmund Grey and Dimitri Marick in All My Children?|Half-brothers|Father and son|Uncle and nephew|Cousins|Medium|Edmund Grey|Dimitri Marick|half brothers|Hugo Marick|1992|family secret|Marick estate`,
 `Which woman married Dimitri Marick and had a tumultuous relationship with him during All My Children's 1990s?|Erica Kane|Angie Hubbard|Myrtle Fargate|Dixie Cooney|Easy|Erica Kane|Dimitri Marick|1990s romance|marriage|Wildwind|Kane family|love story`,
 `What happened to Natalie Dillon after a deliberately started house fire in All My Children?|She temporarily lost her sight|She developed amnesia|She broke both legs|She lost her hearing|Medium|Natalie Dillon|house fire|1992|temporary blindness|Trevor Dillon|Carter Jones|injury`,
 `Which character posed as Ted Orsini while suffering from amnesia in All My Children?|Tad Martin|Edmund Grey|Jackson Montgomery|Adam Chandler|Easy|Tad Martin|Ted Orsini|1993|amnesia|secret identity|Nola Orsini|return to Pine Valley`,
 `Which woman believed Ted Orsini was her son during Tad Martin's missing years in All My Children?|Nola Orsini|Phoebe Tyler|Mona Kane|Opal Gardner|Medium|Nola Orsini|Ted Orsini|Tad Martin|1993|surrogate mother|amnesia|California vineyard`,
 `Which California business connected Nola Orsini to the Marick family in All My Children?|A vineyard|An airline|A newspaper|A fashion boutique|Medium|Orsini vineyards|Nola Orsini|Dimitri Marick|1993|California|business link|Ted Orsini`,
 `Which woman helped the amnesiac Tad Martin piece together his identity in All My Children?|Brooke English|Erica Kane|Marian Colby|Liza Colby|Medium|Tad Martin|Brooke English|Ted Orsini|1993|identity recovery|Jamie Martin|former partner`,
 `Which character eventually returned to Pine Valley after disappearing with amnesia in All My Children?|Tad Martin|Jesse Hubbard|Travis Montgomery|Greg Nelson|Medium|Tad Martin|Pine Valley return|1993|amnesia|Ted Orsini|lost years|reunion`,
 `Which care facility was exposed for mistreating elderly residents in All My Children?|Willow Lake Acres|Wildwind|Cortlandt Manor|Oak Haven|Medium|Willow Lake Acres|nursing home fraud|1990s|elder mistreatment|Peggy Moody|institution scandal|social issue`,
 `Which television actress played the elderly Peggy Moody in All My Children's Willow Lake nursing-home stories?|Anne Meara|Ruth Warrick|Betty White|Maggie Smith|Hard|Anne Meara|Peggy Moody|Willow Lake Acres|1992|guest casting|nursing home|social storyline`,
 `Who was portrayed by Sarah Michelle Gellar during her 1990s run on All My Children?|Kendall Hart|Hayley Vaughan|Bianca Montgomery|Julia Santos|Easy|Sarah Michelle Gellar|Kendall Hart|1993 introduction|casting|Erica daughter|young actress|1990s`,
 `Who was Kendall Hart's birth mother in All My Children?|Erica Kane|Mona Kane|Dixie Cooney|Opal Gardner|Easy|Kendall Hart|Erica Kane|mother daughter|1993|adoption|family secret|Kane family`,
 `Which actor had played Kendall Hart's biological father Richard Fields in All My Children?|James A Stephens|Michael Nader|John Callahan|David Canary|Hard|Richard Fields|Kendall Hart|actor casting|1994|Erica Kane|movie star|past trauma`,
 `What happened to Kendall Hart as a baby, before she sought out Erica Kane in All My Children?|She was placed for adoption|She was raised by Phoebe Tyler|She was sent to boarding school|She grew up with Stuart Chandler|Medium|Kendall Hart|adoption|Erica Kane|1993|long lost child|family reunion|birth secret`,
 `Which experience in Erica Kane's adolescence was revealed through Kendall Hart's parentage in All My Children?|A sexual assault|An arranged marriage|A prison sentence|A stage accident|Medium|Erica Kane|Kendall Hart|Richard Fields|1993|adolescent trauma|past abuse|continuity revelation`,
 `Which woman died of lung cancer, deeply affecting Erica Kane, in All My Children?|Mona Kane|Phoebe Tyler|Natalie Dillon|Daisy Cortlandt|Medium|Mona Kane|lung cancer|1994|Erica Kane|mother death|bereavement|Kane family`,
 `What kind of natural disaster devastated Pine Valley in a major All My Children story?|A tornado|A tidal wave|An earthquake|A volcanic eruption|Easy|Pine Valley tornado|1994|natural disaster|Martin house|rescue|major event|summer storyline`,
 `Which member of the Martin family was trapped beneath the wreckage during the All My Children tornado?|Tad Martin|Joe Martin|Jake Martin|Jamie Martin|Medium|Tad Martin|1994 tornado|Martin house|trapped rubble|near death|rescue|disaster`,
 `Which actress played Dr Maria Santos in the 1990s of All My Children?|Eva LaRue|Sydney Penny|Marcy Walker|Cady McClain|Easy|Eva LaRue|Maria Santos|1993 debut|Santos family|doctor|Edmund Grey|actor casting`,
 `Who was Maria Santos's principal romantic partner in the 1990s of All My Children?|Edmund Grey|Mateo Santos|Dimitri Marick|Jackson Montgomery|Easy|Maria Santos|Edmund Grey|1990s|romance|Wildwind|marriage|Santos Grey family`,
 `Which actress played Julia Santos, Maria's sister, in All My Children?|Sydney Penny|Eva LaRue|Kelly Ripa|Marcy Walker|Easy|Sydney Penny|Julia Santos|1993|actor casting|Santos family|Noah Keefer|nurse`,
 `Who was the fellow Santos sibling who became Hayley Vaughan's great love in All My Children?|Mateo Santos|Hector Santos|Edmund Grey|Noah Keefer|Easy|Mateo Santos|Hayley Vaughan|Santos family|romance|1990s|Chandler family|couple`,
 `Which actor became closely associated with the role of Mateo Santos in All My Children?|Mark Consuelos|John Callahan|Cameron Mathison|Darnell Williams|Easy|Mark Consuelos|Mateo Santos|1995|actor casting|Hayley Vaughan|Santos family|male lead`,
 `Which actor briefly originated the character Mateo Santos before Mark Consuelos in All My Children?|Tito Ortiz|Josh Duhamel|Keith Hamilton Cobb|Michael Lowry|Hard|Tito Ortiz|Mateo Santos|1994 cameo|original actor|recast|Santos family|casting`,
 `Which soap-opera couple was played by real-life spouses Kelly Ripa and Mark Consuelos in All My Children?|Hayley and Mateo|Erica and Dimitri|Dixie and Tad|Julia and Noah|Easy|Hayley Vaughan|Mateo Santos|Kelly Ripa|Mark Consuelos|1990s casting|on screen couple|real life marriage`,
 `Who played Noah Keefer, Julia Santos's love interest in All My Children?|Keith Hamilton Cobb|John Callahan|Mark Consuelos|Cameron Mathison|Medium|Keith Hamilton Cobb|Noah Keefer|Julia Santos|1994 introduction|actor casting|romance|Keefer family`,
 `Which character fell in love with Noah Keefer in All My Children?|Julia Santos|Hayley Vaughan|Kendall Hart|Liza Colby|Medium|Julia Santos|Noah Keefer|1994|love story|Santos family|cross family romance|marriage`,
 `What was Noah Keefer's profession at Hal's when he first worked in Pine Valley in All My Children?|Bartender|Surgeon|Police detective|Airline pilot|Medium|Noah Keefer|Hals bar|1994|bartender|employment|Julia Santos|nightclub`,
 `Which man was killed during a struggle with Noah Keefer in All My Children?|Louie Greco|Will Cortlandt|Ray Gardner|Zach Grayson|Medium|Louie Greco|Noah Keefer|1995|death|Julia Santos|criminal investigation|fight`,
 `Which country did Noah Keefer and Julia Santos flee to while he was accused in All My Children?|Jamaica|Canada|France|Mexico|Medium|Noah Keefer|Julia Santos|Jamaica|1996|on the run|wrongful accusation|Louie Greco`,
 `Which form of protection led Noah and Julia to relocate away from Pine Valley in All My Children?|Witness protection|A student exchange|An overseas army posting|Diplomatic immunity|Medium|Noah Keefer|Julia Santos|witness relocation|1996|Northern California|criminal danger|disappearance`,
 `Which history teacher was suspended after revealing his homosexuality at school in All My Children?|Michael Delaney|Trevor Dillon|Edmund Grey|David Hayward|Medium|Michael Delaney|teacher|1995 to 1996|coming out|school board suspension|homophobia|social issue`,
 `Which serious addiction led Erica Kane to seek treatment in All My Children during the 1990s?|Prescription painkillers|Gambling|Alcohol alone|Nicotine|Medium|Erica Kane|painkiller addiction|1990s|substance misuse|rehabilitation|Betty Ford Center|medical issue`,
 `At which famous addiction treatment centre did Erica Kane receive help in All My Children?|Betty Ford Center|Hazelden Clinic|Priory Hospital|Mayo Clinic|Medium|Erica Kane|Betty Ford Center|1990s|painkiller addiction|recovery|rehab|clinic`,
 `Which student came to history teacher Michael Delaney for support in All My Children?|Kevin Sheffield|Tim Dillon|Adam Chandler Jr|Jamie Martin|Medium|Kevin Sheffield|Michael Delaney|1995 to 1996|gay student|homophobia|school controversy|coming out`,
 `Which All My Children matriarch had a Christmas fantasy involving the real Santa Claus?|Myrtle Fargate|Phoebe Tyler|Opal Cortlandt|Marian Colby|Medium|Myrtle Fargate|Santa Claus|Christmas fantasy|1990s|festive episode|magical realism|holiday story`,
 `Which earlier character, Erica Kane's romantic partner Mike Roy, was brought back from supposed death in All My Children?|Mike Roy|Greg Nelson|Jeremy Hunter|Phil Brent|Medium|Mike Roy|resurrection|1998|Erica Kane|retcon|past romance|return`,
 `Which actor reprised Mike Roy when that character returned in All My Children?|Nicholas Surovy|Michael Nader|Walt Willey|David Canary|Medium|Nicholas Surovy|Mike Roy|1998 return|actor casting|Erica Kane|former husband|revival`,
 `Which condition was Bianca Montgomery shown struggling with near the end of the 1990s in All My Children?|Anorexia|Amnesia|Diabetes|Asthma|Medium|Bianca Montgomery|anorexia|1997 to 1998|Erica Kane|eating disorder|teen health|social issue`,
 `Who played Bianca Montgomery during her 1992-1993 appearances in All My Children?|Lacey Chabert|Eden Riegel|Sarah Michelle Gellar|Gina Gallagher|Medium|Lacey Chabert|Bianca Montgomery|1992 to 1993|child actress|casting|Erica daughter|actor`,
 `Which actress returned to All My Children in the mid-1990s as Liza Colby?|Marcy Walker|Julia Barr|Susan Lucci|Jennifer Bassey|Easy|Marcy Walker|Liza Colby|1995 return|recast history|Adam Chandler|actor casting|1990s`,
 `Which powerful businessman did Liza Colby marry in the 1990s of All My Children?|Adam Chandler|Palmer Cortlandt|Dimitri Marick|Jackson Montgomery|Medium|Liza Colby|Adam Chandler|1999 marriage|Chandler family|relationship|business power|1990s`,
 `What was the name of Liza Colby's daughter born towards the end of All My Children's 1990s?|Colby|Bianca|Maddie|Amanda|Medium|Colby Chandler|Liza Colby|1999 birth|mother daughter|Adam Chandler|family|new baby`,
 `Whose sperm did Adam Chandler secretly substitute for the chosen donor in All My Children's Colby storyline?|His own|Tad Martin's|David Hayward's|Palmer Cortlandt's|Medium|Adam Chandler|Colby pregnancy|sperm switch|1999|artificial insemination|Jake Martin|deception`,
 `Which physician had originally been selected as the donor in Liza Colby's All My Children pregnancy storyline?|Jake Martin|David Hayward|Joe Martin|Cliff Warner|Medium|Jake Martin|Liza Colby|fertility donor|1999|Adam Chandler|sperm switch|doctor`,
 `Which actor first played Ryan Lavery on All My Children in the late 1990s?|Cameron Mathison|Mark Consuelos|Josh Duhamel|James Kiberd|Easy|Cameron Mathison|Ryan Lavery|1998 debut|actor casting|businessman|newcomer|1990s`,
 `Which character became romantically involved with Ryan Lavery after his arrival in All My Children?|Gillian Andrassy|Hayley Vaughan|Erica Kane|Mona Kane|Medium|Ryan Lavery|Gillian Andrassy|1998 romance|marriage|young couple|character relations|courtship`,
 `Which actress played Gillian Andrassy in All My Children?|Esta TerBlanche|Cady McClain|Sydney Penny|Rebecca Budig|Medium|Esta TerBlanche|Gillian Andrassy|1997 arrival|Ryan Lavery|actor casting|Hungarian princess|1990s`,
 `Which actor joined All My Children as Leo du Pres at the end of the 1990s?|Josh Duhamel|Cameron Mathison|Mark Consuelos|James Anthony Rose|Medium|Josh Duhamel|Leo du Pres|1999 arrival|newcomer|actor casting|Vanessa Bennett|character`,
 `Which actor played Dr David Hayward when he arrived in All My Children in the late 1990s?|Vincent Irizarry|Peter Bergman|John Callahan|Walt Willey|Medium|Vincent Irizarry|David Hayward|1997 debut|cardiologist|actor casting|Pine Valley Hospital|doctor`,
 `What was David Hayward's profession in All My Children?|Cardiologist|Journalist|Airline pilot|Professional footballer|Easy|David Hayward|cardiologist|heart doctor|1990s|medical career|hospital|occupation`,
 `Which familiar character played by Cady McClain returned to Pine Valley in the late 1990s of All My Children?|Dixie Cooney|Jenny Gardner|Liza Colby|Brooke English|Easy|Cady McClain|Dixie Cooney|1998 return|Tad Martin|actor return|romance|character`,
 `Which character did Dixie Cooney repeatedly reunite with during All My Children's 1990s?|Tad Martin|Dimitri Marick|Mateo Santos|Jackson Montgomery|Easy|Dixie Cooney|Tad Martin|1990s|supercouple|reunion|on off marriage|love story`,
 `Which major natural disaster was part of All My Children's story when Tad Martin saw visions of lost loved ones?|A tornado|A hurricane|A blizzard|A wildfire|Medium|1994 tornado|Tad Martin|near death vision|Jenny Gardner|Jesse Hubbard|Martin home|disaster`,
 `Which character was believed dead following a plane crash during All My Children's 1990s, before a later return?|Maria Santos|Bianca Montgomery|Myrtle Fargate|Phoebe Tyler|Medium|Maria Santos|plane crash|1997|presumed death|Edmund Grey|2002 return|Wildwind`,
 `Which woman's death in a plane crash devastated Edmund Grey in All My Children?|Maria Santos|Julia Santos|Erica Kane|Hayley Vaughan|Medium|Edmund Grey|Maria Santos|1997|plane crash|marriage|presumed death|bereavement`,
 `Which actor played district attorney Jackson Montgomery throughout the 1990s of All My Children?|Walt Willey|James Kiberd|David Canary|Michael Nader|Medium|Walt Willey|Jackson Montgomery|attorney|1990s cast|Erica Kane|actor casting|lawyer`,
 `Which actress portrayed villainous Janet Green for much of the later 1990s in All My Children?|Robin Mattson|Kate Collins|Marcy Walker|Melody Anderson|Medium|Robin Mattson|Janet Green|1994 to 2000|recast|Amanda Dillon|actor casting|later 1990s`,
 `Which girl was Janet Green's daughter in All My Children?|Amanda Dillon|Bianca Montgomery|Colby Chandler|Jenny Gardner|Medium|Amanda Dillon|Janet Green|Trevor Dillon|daughter|1990s|child|family relationship`,
 `Which famous daytime actress won her first Daytime Emmy for portraying Erica Kane in All My Children?|Susan Lucci|Debbi Morgan|Kelly Ripa|Julia Barr|Easy|Susan Lucci|Erica Kane|1999 Emmy|lead actress|career milestone|award|television history`,
 `In which year did All My Children star Susan Lucci finally win a Daytime Emmy for Erica Kane?|1999|1992|1995|2003|Easy|Susan Lucci|1999|Daytime Emmy|best actress|Erica Kane|award history|winning year`,
 `On which nomination did Susan Lucci finally win the Daytime Emmy for All My Children?|Her nineteenth|Her fifth|Her tenth|Her twenty-fifth|Medium|Susan Lucci|nineteenth nomination|1999|Daytime Emmy|record losing streak|best actress|award count`,
 `Which actor presented Susan Lucci's long-awaited 1999 Daytime Emmy for All My Children?|Shemar Moore|David Canary|Michael E Knight|John Callahan|Medium|Shemar Moore|Susan Lucci|1999 Emmy|presenter|best actress|award ceremony|television history`,
 `Which city gave Susan Lucci a key to the city after her 1999 Emmy win for All My Children?|New York City|Los Angeles|Philadelphia|Miami|Medium|Susan Lucci|New York City|key to city|1999|Daytime Emmy|civic honour|recognition`,
 `What was the name of the awards category Susan Lucci won in 1999 for All My Children?|Outstanding Lead Actress in a Drama Series|Outstanding Younger Actress|Outstanding Supporting Actor|Outstanding Drama Series|Medium|Susan Lucci|Outstanding Lead Actress|Daytime Emmy|1999|Erica Kane|awards category|achievement`,
 `Which writer returned to lead All My Children's creative direction during the early 1990s?|Agnes Nixon|Irna Phillips|Brad Bell|Gloria Monty|Medium|Agnes Nixon|1990 return|head writer|series creator|television production|creative history|1990s`,
 `Which writer was promoted to head writer of All My Children in 1992?|Megan McTavish|Francesca James|Susan Lucci|Mary Fickett|Medium|Megan McTavish|1992|head writer|ABC soap|creative team|production change|soap scripts`,
 `Which former All My Children actress later became executive producer in the 1990s?|Francesca James|Kim Delaney|Kelly Ripa|Marcy Walker|Medium|Francesca James|executive producer|1990s|Kitty Shea|behind scenes|actress producer|production`,
 `Which executive producer succeeded Francesca James on All My Children in 1998?|Jean Dadario Burke|Agnes Nixon|Gloria Monty|Felicia Minei Behr|Hard|Jean Dadario Burke|1998|executive producer|Francesca James|production change|programme leadership|behind scenes`,
 `Which real-life couple met while working as Hayley and Mateo on All My Children?|Kelly Ripa and Mark Consuelos|Susan Lucci and Walt Willey|Julia Barr and David Canary|Cady McClain and Michael Nader|Easy|Kelly Ripa|Mark Consuelos|Hayley and Mateo|1995|on set romance|real marriage|casting history`
 ];

 const questions = rows.map((row, index) => {
   const parts = row.split('|').map(part => part.trim());
   if (parts.length !== 13 || parts.some(part => !part)) {
     throw new Error(`Pack 416: malformed row ${index + 1} (${parts.length} fields)`);
   }
   const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
   if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
     throw new Error(`Pack 416: invalid difficulty at row ${index + 1}`);
   }
   const question = stem.includes('All My Children')
     ? stem
     : `In All My Children, ${stem[0].toLowerCase()}${stem.slice(1)}`;
   const answers = [wrong1, wrong2, wrong3];
   answers.splice(index % 4, 0, correctAnswer);
   if (new Set(answers.map(a => a.toLowerCase())).size !== 4) {
     throw new Error(`Pack 416: duplicate answer option at row ${index + 1}`);
   }
   const tags = [...new Set([...commonTags, ...specificTags])];
   if (tags.length !== 13) {
     throw new Error(`Pack 416: expected 13 distinct tags at row ${index + 1}, got ${tags.length}`);
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
