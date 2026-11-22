
 // PuzzlePilot - Big Quiz - Pack 414
 // All My Children - 1970 to 1979 (ABC, United States).
 // Opening decade: programme history, original cast, Martins, Tylers,
 // Erica Kane, Phil and Tara, Brooke, Donna, Myrtle, early Cortlandts.
 // Subsequent decades will be covered in separate packs.
 // Full WordPad-ready CommonJS. First ID: tv_23316.
 'use strict';

 const FIRST_ID = 23316;
 const commonTags = [
   'television', 'All My Children', 'American soap opera',
   'Pine Valley', 'ABC daytime', '1970s storylines'
 ];

 // Question | correct | three wrong answers | difficulty | seven specific tags.
 // Answer positions rotate A/B/C/D. Every question names the programme.
 const rows = [
   `Which US television network premiered All My Children?|ABC|CBS|NBC|PBS|Easy|ABC Daytime|network|US broadcaster|1970 premiere|soap launch|original transmission|American television`,
   `Who created the daytime soap All My Children?|Agnes Nixon|Irna Phillips|William J Bell|Gloria Monty|Easy|Agnes Nixon|creator|head writer|soap development|1970 debut|television pioneer|programme origins`,
   `On what date did All My Children begin its original television run?|5 January 1970|5 January 1975|1 September 1968|25 April 1977|Medium|5 January 1970|premiere date|ABC|early broadcasting|first episode|1970s|soap chronology`,
   `What fictional community provides the main setting of All My Children?|Pine Valley|Port Charles|Genoa City|Oakdale|Easy|original town|fictional town|Pennsylvania|soap setting|local community|1970s background|story world`,
   `In which US state is Pine Valley situated in All My Children?|Pennsylvania|California|Florida|Illinois|Medium|Pennsylvania|fictional map|fictional location|East Coast|regional setting|town geography|soap world`,
   `Which cancelled ABC game show did All My Children replace at its debut?|Dream House|Password|Concentration|Family Feud|Hard|Dream House|schedule replacement|ABC Daytime|1970|game show|programme launch|broadcast slot`,
   `How long were normal All My Children episodes before the programme expanded in 1977?|Thirty minutes|One hour|Fifteen minutes|Ninety minutes|Medium|30 minute format|1970 to 1977|original episode length|ABC scheduling|broadcast history|half hour|programme expansion`,
   `In which year did All My Children expand from half-hour to hour-long episodes?|1977|1972|1979|1983|Medium|1977|25 April|hour expansion|ABC Daytime|broadcast history|format change|1970s television`,
   `Which actress originated the role of Erica Kane in All My Children?|Susan Lucci|Julia Barr|Ruth Warrick|Eileen Herlie|Easy|Susan Lucci|Erica Kane|original cast|1970|lead character|acting role|Pine Valley debut`,
   `Who played high-society matriarch Phoebe Tyler in the early All My Children?|Ruth Warrick|Frances Heflin|Mary Fickett|Rosemary Prinz|Easy|Ruth Warrick|Phoebe Tyler|society matriarch|original cast|Tyler family|1970|casting`,
   `Who portrayed nurse Ruth Brent, later Ruth Martin, in the 1970s of All My Children?|Mary Fickett|Frances Heflin|Eileen Herlie|Julia Barr|Easy|Mary Fickett|Ruth Brent Martin|nurse|original performer|Martin family|hospital|1970s`,
   `Which actor originated Dr Joe Martin in All My Children?|Ray MacDonnell|Hugh Franklin|Peter White|Richard Shoberg|Easy|Ray MacDonnell|Joe Martin|physician|original cast|Pine Valley Hospital|Martin patriarch|1970`,
   `Who portrayed Erica Kane's mother Mona in All My Children?|Frances Heflin|Ruth Warrick|Mary Fickett|Eileen Letchworth|Medium|Frances Heflin|Mona Kane|Erica mother|secretary|original cast|family relations|1970s`,
   `Who portrayed Dr Charles Tyler, Phoebe's husband, in the original All My Children?|Hugh Franklin|Ray MacDonnell|Larry Keith|James Mitchell|Medium|Hugh Franklin|Charles Tyler|hospital chief of staff|Phoebe husband|Tyler family|original cast|casting`,
   `Which actress played political activist Amy Tyler in the debut year of All My Children?|Rosemary Prinz|Susan Lucci|Julia Barr|Patricia Elliott|Medium|Rosemary Prinz|Amy Tyler|1970 guest star|anti war|Lincoln wife|early casting|special appearance`,
   `Which actor played Nick Davis, the dance teacher linked to Mona and Erica, in All My Children?|Larry Keith|Peter White|Mark LaMura|Richard Hatch|Medium|Larry Keith|Nick Davis|dance studio|Mona friend|1970 arrival|recurring character|original casting`,
   `Which actor first portrayed the young Phil Brent in All My Children?|Richard Hatch|Nick Benedict|Matthew Anton|Jack Stauffer|Medium|Richard Hatch|Phil Brent|original actor|1970|Tara romance|Vietnam storyline|Brent family`,
   `Which actor took over the role of Phil Brent after Richard Hatch in the 1970s of All My Children?|Nick Benedict|Peter Bergman|Richard Shoberg|James Mitchell|Medium|Nick Benedict|Phil Brent|recasting|1973|Tara Martin|Brent family|casting`,
   `Who became closely associated with the role of Brooke English after her introduction in All My Children?|Julia Barr|Susan Lucci|Taylor Miller|Eileen Herlie|Medium|Julia Barr|Brooke English|1976 arrival|long running cast|Phoebe niece|casting|early career`,
   `Which actress became known for portraying Myrtle Fargate after her 1976 introduction in All My Children?|Eileen Herlie|Ruth Warrick|Francesca James|Frances Heflin|Medium|Eileen Herlie|Myrtle Lum|1976|mentor figure|community matriarch|casting|recurring role`,
   `Which actor portrayed Lincoln Linc Tyler for much of the 1970s of All My Children?|Peter White|Larry Keith|Mark LaMura|Hugh Franklin|Medium|Peter White|Lincoln Tyler|attorney|Phoebe son|Tyler family|1970s casting|character`,
   `Which actress portrayed Kitty Shea Tyler in the 1970s of All My Children?|Francesca James|Julia Barr|Eileen Letchworth|Candice Earley|Medium|Francesca James|Kitty Shea|Lincoln romance|1970s cast|boutique|Tyler family|acting role`,
   `Which actress played Donna Beck for most of her original All My Children run?|Candice Earley|Julia Barr|Eileen Herlie|Stephanie Braxton|Medium|Candice Earley|Donna Beck|1976 introduction|Chuck Tyler|character casting|1970s|storyline`,
   `Which actor played Tom Cudahy, Erica's later 1970s husband, in All My Children?|Richard Shoberg|Peter Bergman|Mark LaMura|Nick Benedict|Medium|Richard Shoberg|Tom Cudahy|former footballer|Goalpost owner|Erica romance|1977 arrival|casting`,
   `Which actress played the later 1970s role of Nina Cortlandt in All My Children?|Taylor Miller|Julia Barr|Frances Heflin|Susan Lucci|Medium|Taylor Miller|Nina Cortlandt|Palmer daughter|1979 newcomer|Cliff Warner|casting|family`,
   `Which actor portrayed Palmer Cortlandt when the character arrived in All My Children?|James Mitchell|David Canary|Hugh Franklin|Ray MacDonnell|Medium|James Mitchell|Palmer Cortlandt|1979 arrival|wealthy businessman|Cortlandt family|casting|newcomer`,
   `Which actor played Dr Cliff Warner when he joined the 1970s All My Children cast?|Peter Bergman|Peter White|Charles Frank|Richard Hatch|Medium|Peter Bergman|Cliff Warner|1979 arrival|medical doctor|Nina romance|cast|hospital`,
   `Which two affluent and middle-class families anchored All My Children at its launch?|The Tylers and the Martins|The Chandlers and the Cortlandts|The Buchanans and the Cramers|The Newmans and the Abbotts|Easy|Tyler family|Martin family|original families|1970|social contrast|Pine Valley families|premiere focus`,
   `Which two young sweethearts formed an early romance at Pine Valley High in All My Children?|Phil Brent and Tara Martin|Tom Cudahy and Brooke English|Cliff Warner and Nina Cortlandt|Adam Chandler and Erica Kane|Medium|Phil Brent|Tara Martin|high school couple|1970|young romance|teenage storyline|early plot`,
   `Which of Phil Brent's friends also loved Tara Martin in the first year of All My Children?|Chuck Tyler|Joe Martin|Nick Davis|Mark Dalton|Medium|Chuck Tyler|Tara Martin|Phil Brent|love triangle|high school|1970|early rivalry`,
   `Which influential Pine Valley woman objected to the liberal politics of her daughter-in-law Amy in All My Children?|Phoebe Tyler|Mona Kane|Ruth Brent|Myrtle Fargate|Medium|Phoebe Tyler|Amy Tyler|anti war activism|family tension|socialite|1970|political views`,
   `Who was revealed to be Phil Brent's biological father in an early All My Children secret?|Nick Davis|Ted Brent|Joe Martin|Charles Tyler|Medium|Nick Davis|Phil parentage|Amy Tyler|1970 revelation|Brent family|secret father|family identity`,
   `Who was Phil Brent's biological mother in All My Children?|Amy Tyler|Ruth Brent|Mona Kane|Phoebe Tyler|Medium|Amy Tyler|Phil Brent|secret maternity|Ruth sister|1970|birth mother|family revelation`,
   `Which character revealed the truth about Phil Brent's birth parents to him in All My Children?|Erica Kane|Tara Martin|Chuck Tyler|Mona Kane|Medium|Erica Kane|Phil Brent|birth secret|1970|truth revealed|gossip|relationship fallout`,
   `Which man who had raised Phil Brent was killed in a car accident in the early All My Children?|Ted Brent|Nick Davis|Joe Martin|Charles Tyler|Medium|Ted Brent|adoptive father|car accident|1970|Ruth husband|Phil Brent|family tragedy`,
   `What memory problem afflicted Phil Brent after learning the truth about his parents in All My Children?|Amnesia|Dementia|Face blindness|Short-term memory loss from surgery|Medium|Phil Brent|amnesia|parentage discovery|1970|Tara Martin|trauma|early storyline`,
   `What profession did Nick Davis pursue on returning to Pine Valley in All My Children?|Dance instructor|Hospital surgeon|Radio presenter|Sports journalist|Medium|Nick Davis|dance studio|1970 return|Mona Kane|Pine Valley business|performing arts|occupation`,
   `What did Ann Tyler open after coming back from New York in All My Children?|A fashion boutique|A veterinary clinic|A cinema|A publishing house|Medium|Ann Tyler|the Boutique|1971|fashion business|New York return|Phoebe daughter|local commerce`,
   `Which older man was the romantic interest disapproved of by Ann Tyler's mother in All My Children?|Nick Davis|Jeff Martin|Phil Brent|Dan Kennicott|Medium|Ann Tyler|Nick Davis|Phoebe Tyler|1971 romance|mother objection|courtship|age gap`,
   `Which medical intern did Erica Kane marry in the early 1970s of All My Children?|Jeff Martin|Joe Martin|Chuck Tyler|Cliff Warner|Medium|Erica Kane|Jeff Martin|1971 wedding|medical intern|first marriage|Martin family|romance`,
   `Who was Jeff Martin's father in All My Children?|Joe Martin|Charles Tyler|Ted Brent|Nick Davis|Easy|Jeff Martin|Joe Martin|father son|Martin family|1970s|medical family|character relations`,
   `Which medical crisis interrupted Chuck and Tara's planned wedding in the early All My Children?|Chuck's kidney failure|Tara's broken leg|Phil's appendicitis|Joe's heart attack|Medium|Chuck Tyler|kidney failure|Tara Martin|1971|wedding interrupted|hospital admission|love triangle`,
   `Which conflict caused Phil Brent to receive a military draft notice in All My Children?|Vietnam War|Korean War|Gulf War|Second World War|Medium|Phil Brent|Vietnam draft|early 1970s|military service|Tara Martin|war storyline|social issue`,
   `Which real-world war did Amy Tyler publicly oppose in early All My Children storylines?|Vietnam War|Korean War|Falklands War|Gulf War|Medium|Amy Tyler|Vietnam War|peace activism|Rosemary Prinz|1970|social issue|antiwar protest`,
   `Which All My Children actress received a landmark daytime acting Emmy in 1973 for her portrayal of an antiwar character?|Mary Fickett|Susan Lucci|Ruth Warrick|Eileen Herlie|Medium|Mary Fickett|Ruth Martin|1973 Emmy|antiwar speech|Vietnam storyline|daytime award|television milestone`,
   `Where were Phil and Tara stranded when they performed their own marriage ceremony in an early All My Children storyline?|An empty church during a snowstorm|A remote mountain cabin|An abandoned train station|A hospital chapel during a flood|Medium|Phil Brent|Tara Martin|blizzard|unofficial marriage|1972|Vietnam departure|secret union`,
   `Who offered to marry Tara after Phil was reported missing in Vietnam in All My Children?|Chuck Tyler|Nick Davis|Lincoln Tyler|Jeff Martin|Medium|Tara Martin|Chuck Tyler|Phil presumed dead|1972|pregnancy|marriage proposal|love triangle`,
   `What was the name commonly used for Tara and Phil's young son in All My Children?|Little Phillip|Little Tad|Little Jeffrey|Little Chuck|Medium|Little Phillip|Phil Brent|Tara Martin|1972 birth|hidden paternity|child|Brent family`,
   `Which fashionable workplace employed Erica after she left college in All My Children?|Ann Tyler's Boutique|The Goalpost|Pine Valley Hospital|Tempo magazine|Medium|Erica Kane|the Boutique|Ann Tyler|1972|fashion job|career beginning|college dropout`,
   `Which modelling agent became entangled with Erica Kane during the early 1970s of All My Children?|Jason Maxwell|Eddie Dorrance|Mark Dalton|Benny Sago|Medium|Jason Maxwell|Erica Kane|New York|1972|modelling agent|marital trouble|Jeff Martin`,
   `Which character was charged over the killing of Jason Maxwell before being cleared in All My Children?|Jeff Martin|Phil Brent|Tom Cudahy|Chuck Tyler|Medium|Jason Maxwell|Jeff Martin|murder charge|1973|trial|wrongly accused|Pine Valley crime`,
   `Who actually shot Jason Maxwell during a struggle in All My Children?|Mona Kane|Erica Kane|Tara Martin|Mary Kennicott|Medium|Mona Kane|Jason Maxwell|accidental shooting|1973|recovered memory|murder trial|maternal protection`,
   `What major reproductive decision did Erica Kane make without telling Jeff Martin in a 1970s All My Children storyline?|She had an abortion|She underwent fertility treatment|She adopted twins|She had a hysterectomy|Medium|Erica Kane|Jeff Martin|1973|abortion|reproductive choice|secret decision|social storyline`,
   `Who did Jeff Martin marry after divorcing Erica Kane in All My Children?|Mary Kennicott|Tara Martin|Donna Beck|Margo Flax|Medium|Jeff Martin|Mary Kennicott|1974|second marriage|nurse|Erica divorce|romance`,
   `Which older model underwent a much-discussed facelift while pursuing Paul Martin in All My Children?|Margo Flax|Phoebe Tyler|Mona Kane|Kitty Shea|Medium|Margo Flax|facelift|1974|Paul Martin|cosmetic surgery|age anxiety|groundbreaking plot`,
   `Whose adult daughter unexpectedly arrived and threatened a cover story about a facelift in All My Children?|Margo Flax's|Phoebe Tyler's|Ruth Martin's|Myrtle Fargate's|Hard|Margo Flax|Claudette|adult daughter|1974|facelift secret|family visit|romantic deception`,
   `Which woman married Paul Martin after pursuing him in the mid-1970s of All My Children?|Margo Flax|Erica Kane|Brooke English|Donna Beck|Medium|Margo Flax|Paul Martin|1974|marriage|cosmetic surgery|romance|Martin family`,
   `What loss contributed to Erica Kane's breakdown during her marriage to Phil Brent in All My Children?|A miscarriage|The death of her mother|A severe house fire|A car accident injuring Tara|Medium|Erica Kane|Phil Brent|1975|miscarriage|mental health|pregnancy loss|marriage`,
   `Which young boy did Jeff and Mary plan to adopt before Mary's death in All My Children?|Tad Gardner|Charlie Brent|Mark Dalton|Dan Kennicott|Medium|Tad Gardner|Jeff Martin|Mary Kennicott|1974|adoption plan|child welfare|Martin family`,
   `Who was killed during a violent break-in at Jeff Martin's home in All My Children?|Mary Kennicott|Mona Kane|Kitty Shea|Ann Tyler|Medium|Mary Kennicott|break in|1975|Jeff Martin|household tragedy|home invasion|victim`,
   `To whom did Jeff Martin ask that Tad Gardner be entrusted after Mary's death in All My Children?|Joe and Ruth Martin|Phoebe and Charles Tyler|Nick and Ann Davis|Phil and Erica Brent|Medium|Tad Gardner|Joe Martin|Ruth Martin|1975|adoptive care|family responsibility|Mary death`,
   `Which biological clue revealed that Phil was the father of Tara's son in All My Children?|A blood donation|A birth certificate in an attic|A letter from Vietnam|A family photograph|Medium|Phil Brent|Little Phillip|blood donation|1975|paternity discovery|Tara Martin|medical clue`,
   `Which wealthy Tyler family member caused a scene by fainting at Lincoln's wedding to Kitty in All My Children?|Phoebe Tyler|Ann Tyler|Ruth Brent|Mona Kane|Medium|Phoebe Tyler|Lincoln Tyler|Kitty Shea|1975|wedding|family opposition|dramatic faint`,
   `Who blackmailed Kitty Shea into using the Boutique for a drug operation in All My Children?|Hal Short|Nick Davis|Eddie Dorrance|Jason Maxwell|Medium|Hal Short|Kitty Shea|the Boutique|1975|drug trafficking|blackmail|former husband`,
   `Which Central American country did Tara visit for a quick divorce from Chuck in All My Children?|Costa Rica|Panama|Belize|Guatemala|Hard|Costa Rica|Tara Martin|Chuck Tyler|1976|quick divorce|Phil Brent|marriage breakup`,
   `Which teenage newcomer was rescued from an exploitative pimp in mid-1970s All My Children?|Donna Beck|Brooke English|Nina Cortlandt|Kelly Cole|Medium|Donna Beck|1976 arrival|exploitation|Chuck Tyler|teenager|hospital treatment|social issue`,
   `Which doctor took special responsibility for Donna Beck's recovery when she arrived in Pine Valley in All My Children?|Chuck Tyler|Joe Martin|Jeff Martin|Cliff Warner|Medium|Donna Beck|Chuck Tyler|injured teenager|1976|medical care|guardianship|relationship`,
   `Who defended Chuck Tyler against Donna Beck's violent pimp in All My Children?|Dr Frank Grant|Dr Joe Martin|Tom Cudahy|Lincoln Tyler|Hard|Frank Grant|Chuck Tyler|Donna Beck|pimp Tyrone|1976|karate|hospital confrontation`,
   `Which villain was Donna Beck trying to escape when she met Chuck Tyler in All My Children?|Tyrone|Ray Gardner|Billy Clyde Tuggle|Palmer Cortlandt|Medium|Donna Beck|Tyrone|1976|pimp|escape|teenage exploitation|Chuck Tyler`,
   `Who was Brooke English's aunt in All My Children?|Phoebe Tyler|Ruth Martin|Mona Kane|Myrtle Fargate|Easy|Brooke English|Phoebe Tyler|aunt niece|Tyler family|1976|family link|maternal relative`,
   `Which young mechanic followed Brooke English to Pine Valley in All My Children?|Benny Sago|Tad Gardner|Eddie Dorrance|Mark Dalton|Medium|Benny Sago|Brooke English|1976|mechanic|romantic pursuit|working class|new arrival`,
   `Which young man did Phoebe prefer as a suitor for Brooke English in All My Children?|Dan Kennicott|Benny Sago|Nick Davis|Cliff Warner|Medium|Dan Kennicott|Phoebe Tyler|Brooke English|1976|romantic matchmaking|class tension|Mary brother`,
   `Which restaurant gave Erica Kane a hostess job in the mid-1970s of All My Children?|Nick Davis's restaurant|The Cortlandt Club|The Diner|Kelly's Place|Medium|Erica Kane|Nick Davis|hostess|1976|employment|secret affair|Pine Valley dining`,
   `Who did Erica date before learning he was her paternal half-brother in All My Children?|Mark Dalton|Tom Cudahy|Eddie Dorrance|Phil Brent|Medium|Erica Kane|Mark Dalton|half siblings|1977|Mona Kane|family secret|romance ended`,
   `Which former doctor performed an emergency appendectomy on Joe Martin during a troubled period in his marriage in All My Children?|David Thornton|Jeff Martin|Chuck Tyler|Cliff Warner|Hard|David Thornton|Joe Martin|appendectomy|1976|Vietnam trauma|Ruth Martin|hidden medical training`,
   `What type of illness caused Kitty Tyler's death in All My Children?|An inoperable brain tumour|Leukaemia|A heart infection|Pneumonia|Medium|Kitty Shea Tyler|brain tumour|1977|Lincoln Tyler|terminal illness|final days|character death`,
   `Which long-running Pine Valley figure comforted Kitty in her final days in All My Children?|Myrtle Lum|Erica Kane|Donna Beck|Brooke English|Medium|Myrtle Lum|Kitty Shea|1977|comfort|deathbed|maternal figure|friendship`,
   `Which former professional football player ran the Goalpost restaurant in All My Children?|Tom Cudahy|Ted Brent|Joe Martin|Chuck Tyler|Medium|Tom Cudahy|Goalpost|restaurant owner|1977|football past|Erica Kane|career`,
   `Which abusive father returned and demanded payment in exchange for his son Tad in All My Children?|Ray Gardner|Ted Brent|Palmer Cortlandt|Nick Davis|Medium|Ray Gardner|Tad Gardner|1978|father son|extortion|child abuse|villain`,
   `Who rescued Ruth Martin after she was attacked by Ray Gardner in All My Children?|Joe Martin|Phil Brent|Nick Davis|Tom Cudahy|Medium|Ruth Martin|Joe Martin|Ray Gardner|1978|violent assault|rescue|family crisis`,
   `Which other villain helped bring Ray Gardner to justice during the 1970s All My Children?|Billy Clyde Tuggle|Palmer Cortlandt|Eddie Dorrance|Hal Short|Medium|Billy Clyde Tuggle|Ray Gardner|1978|villain rivalry|capture|Ruth Martin|crime storyline`,
   `Which couple legally adopted Tad Gardner in the late 1970s of All My Children?|Joe and Ruth Martin|Charles and Phoebe Tyler|Tom and Erica Cudahy|Phil and Tara Brent|Medium|Joe Martin|Ruth Martin|Tad Gardner|1978|legal adoption|family bond|child protection`,
   `Which illness threatened Erica Kane's life after a staged disappearance in All My Children?|Viral pneumonia|Measles|Kidney failure|Appendicitis|Medium|Erica Kane|viral pneumonia|Nick Davis|1978|hospitalisation|fake disappearance|New York`,
   `Which businessman did Erica marry after her romance with Nick Davis ended in All My Children?|Tom Cudahy|Palmer Cortlandt|Dan Kennicott|Benny Sago|Medium|Erica Kane|Tom Cudahy|1978|marriage|Goalpost|Nick Davis breakup|relationship`,
   `Where was Erica and Tom Cudahy's overseas honeymoon filmed for All My Children?|St Croix|Hawaii|Bermuda|Jamaica|Medium|St Croix|Erica Kane|Tom Cudahy|1978|location filming|honeymoon|US Virgin Islands`,
   `Which key character was first paired with Dr Cliff Warner in All My Children's late-1970s Cortlandt storyline?|Nina Cortlandt|Brooke English|Donna Beck|Kelly Cole|Medium|Cliff Warner|Nina Cortlandt|1979|romance|Palmer daughter|young couple|hospital doctor`,
   `Which wealthy newcomer was secretly associated with the name Peter Cooney in All My Children?|Palmer Cortlandt|Langley Wallingford|Tom Cudahy|Lincoln Tyler|Hard|Palmer Cortlandt|Peter Cooney|1979|identity|rich newcomer|family secrets|alias`,
   `What health condition did Palmer Cortlandt exploit to interfere with his daughter Nina's relationship in All My Children?|Diabetes|Epilepsy|Asthma|Arthritis|Medium|Nina Cortlandt|Palmer Cortlandt|diabetes|1979|controlling father|Cliff Warner|medical fear`,
   `Who was Nina Cortlandt's father in All My Children?|Palmer Cortlandt|Charles Tyler|Joe Martin|Lincoln Tyler|Easy|Nina Cortlandt|Palmer Cortlandt|father daughter|1979|Cortlandt family|family relationship|new arrival`,
   `What was the name of Palmer Cortlandt's housekeeper introduced in the late 1970s of All My Children?|Myra Murdock|Mona Kane|Mary Kennicott|Miss Harbottle|Medium|Myra Murdock|Palmer Cortlandt|housekeeper|1979|Cortlandt household|Elizabeth Lawrence|recurring role`,
   `Who played Palmer Cortlandt's housekeeper Myra Murdock in All My Children?|Elizabeth Lawrence|Ruth Warrick|Frances Heflin|Mary Fickett|Medium|Elizabeth Lawrence|Myra Murdock|Palmer housekeeper|1979|cast|Cortlandt home|character actor`,
   `Which singer became romantically involved with Lincoln Tyler in All My Children's late-1970s stories?|Kelly Cole|Margo Flax|Donna Beck|Estelle LaTour|Medium|Kelly Cole|Lincoln Tyler|1979|singer|romance|Eddie Dorrance|music career`,
   `Which manager was found dead after an argument about singer Kelly Cole in All My Children?|Eddie Dorrance|Jason Maxwell|Hal Short|Nick Davis|Medium|Eddie Dorrance|Kelly Cole|1979|murder mystery|music manager|the Chateau|Lincoln Tyler`,
   `What did Tom Cudahy discover that exposed Erica's deception over having children in All My Children?|Birth-control pills|A false pregnancy test|A hidden adoption application|Letters to a surrogate|Medium|Tom Cudahy|Erica Kane|birth control|1979|marital conflict|family planning|deception`,
   `Who took over Erica's hostess position at the Goalpost restaurant in All My Children?|Brooke English|Myrtle Fargate|Tara Martin|Nina Cortlandt|Medium|Brooke English|Goalpost|Tom Cudahy|1979|hostess job|Erica Kane|workplace change`,
   `Who was the father of the baby Brooke English chose not to carry in a late-1970s All My Children storyline?|Eddie Dorrance|Tom Cudahy|Mark Dalton|Dan Kennicott|Hard|Brooke English|Eddie Dorrance|1979|pregnancy|abortion|romantic fallout|reproductive choice`,
   `Who welcomed a son called Joey at Christmas in the late 1970s of All My Children?|Joe and Ruth Martin|Tom and Erica Cudahy|Chuck and Donna Tyler|Phil and Tara Brent|Medium|Joe Martin|Ruth Martin|Joey birth|1979|Christmas|Martin baby|family event`,
   `Which popular American comedian made a hospital patient cameo in All My Children during the 1970s?|Carol Burnett|Lucille Ball|Phyllis Diller|Joan Rivers|Medium|Carol Burnett|celebrity guest|1976|hospital patient|cameo|ABC|comedy performer`
 ];


 // Story and character gap audit, 1970–1979; original IDs retained.
 const ORIGINAL_COUNT = rows.length;
 const AUDIT_NEW_FIRST_ID = 41864;
 rows.push(
   `In All My Children, what social occasion did Phoebe Tyler ask Nick Davis to help arrange early in the series?|A charity ball|A society wedding|A garden exhibition|A tennis tournament|Medium|Phoebe Tyler|Nick Davis|society event|1970|charity ball|early Pine Valley|Tyler social life`,
   `In All My Children, which nurse and widow became romantically involved with Dr Joe Martin after Ted Brent's death?|Ruth Brent|Mary Kennicott|Nancy Grant|Margo Flax|Easy|Ruth Brent|Joe Martin|widowed nurse|1971|hospital romance|Ted Brent death|Martin marriage`,
   `In All My Children, whom did Phoebe Tyler favour as a suitor for her daughter Ann instead of Nick Davis?|Paul Martin|Jeff Martin|Tom Cudahy|Frank Grant|Medium|Phoebe Tyler|Ann Tyler|Paul Martin|1971|family disapproval|suitor preference|Nick Davis`,
   `In All My Children, what mistaken belief led Nick Davis to end his marriage to Ann Tyler?|He believed he was infertile|He believed he was already married|He thought Ann had left Pine Valley|He thought Ann was his cousin|Medium|Nick Davis|Ann Tyler|presumed infertility|1972|marriage breakdown|family plans|medical misunderstanding`,
   `In All My Children, which Martin family lawyer did Ann Tyler marry after her separation from Nick Davis?|Paul Martin|Jeff Martin|Joe Martin|David Thornton|Medium|Ann Tyler|Paul Martin|Nick Davis divorce|1973|second marriage|Martin lawyer|Tyler family`,
   `In All My Children, which young dance teacher became involved with Nick Davis after his split from Ann Tyler?|Kitty Shea|Donna Beck|Brooke English|Kelly Cole|Medium|Nick Davis|Kitty Shea|dance instruction|1972|romantic rebound|Ann Tyler|early relationship`,
   `In All My Children, what did Kitty Shea mistakenly believe after losing the baby she was expecting with Nick Davis?|That she was still pregnant|That she had given birth to twins|That Nick was the baby's doctor|That the baby had been adopted|Hard|Kitty Shea|Nick Davis|miscarriage|1973|psychological crisis|false pregnancy belief|family tragedy`,
   `In All My Children, what sort of accident left Ann Tyler seriously injured after travelling with Nick Davis?|A road collision|An aircraft crash|A riding accident|A boating accident|Medium|Ann Tyler|Nick Davis|car crash|1973|hospital recovery|relationship turning point|road journey`,
   `In All My Children, which serviceman returned alive after being reported missing in Vietnam, upsetting Tara Tyler's marriage?|Phil Brent|Chuck Tyler|Paul Martin|Mark Dalton|Easy|Phil Brent|Vietnam War|Tara Martin|1973|return from service|missing in action|marital triangle`,
   `In All My Children, which of Tara Martin's former sweethearts became Erica Kane's second husband?|Phil Brent|Chuck Tyler|Benny Sago|Dan Kennicott|Medium|Erica Kane|Phil Brent|Tara Martin|1975|second marriage|romantic triangle|soap relationships`,
   `In All My Children, where was Erica Kane treated during her breakdown after losing Phil Brent's baby?|A psychiatric hospital|A rehabilitation prison|A maternity ward|A military hospital|Medium|Erica Kane|Phil Brent|miscarriage aftermath|1975|mental health treatment|hospitalisation|marital breakdown`,
   `In All My Children, what secret about Kitty Shea's first marriage gave Hal Short leverage over her?|Her divorce had never been finalised|Her husband had inherited the Boutique|She had adopted an unknown child|She had married under a false surname|Hard|Kitty Shea|Hal Short|first marriage|1975|bigamy threat|drug ring blackmail|Boutique scandal`,
   `In All My Children, which bride was imprisoned because of her connection to the drug operation at Ann Tyler's Boutique?|Kitty Shea|Erica Kane|Tara Martin|Donna Beck|Medium|Kitty Shea|Boutique|Hal Short|1976|drug operation|arrest|Tyler marriage trouble`,
   `In All My Children, which couple finally married legally after each obtained a divorce from a different spouse?|Phil Brent and Tara Martin|Joe Martin and Ruth Brent|Linc Tyler and Kitty Shea|Paul Martin and Margo Flax|Medium|Phil Brent|Tara Martin|1976|second wedding|Chuck Tyler divorce|Erica Kane divorce|long-running romance`,
   `In All My Children, who became the legal guardian of the teenage Donna Beck after helping her escape exploitation?|Chuck Tyler|Frank Grant|Linc Tyler|Paul Martin|Medium|Donna Beck|Chuck Tyler|legal guardianship|1976|hospital recovery|teenage rescue|Tyrone storyline`,
   `In All My Children, which former military doctor developed romantic feelings for Ruth Martin during trouble with Joe?|David Thornton|Cliff Warner|Frank Grant|Tom Cudahy|Medium|Ruth Martin|David Thornton|Joe Martin|1976|marital crisis|Vietnam experience|medical career`,
   `In All My Children, who hired Myrtle Lum to pose as the long-lost mother of Kitty Shea Tyler?|Phoebe Tyler|Mona Kane|Margo Flax|Ellen Shepherd|Medium|Myrtle Lum|Kitty Shea|Phoebe Tyler|1976|false mother|family interference|maternal bond`,
   `In All My Children, who bought the Boutique from Myrtle Lum after Kitty Tyler's death?|Ellen Shepherd|Brooke English|Margo Flax|Donna Beck|Hard|Ellen Shepherd|Myrtle Lum|the Boutique|1977|business sale|Kitty Tyler death|Pine Valley shops`,
   `In All My Children, which physician was introduced as the soap's first major Black character in the 1970s?|Frank Grant|Joe Martin|Cliff Warner|David Thornton|Medium|Frank Grant|1972 debut|Black leading character|Pine Valley Hospital|medical career|cast milestone|early storylines`,
   `In All My Children, what was the name of Dr Frank Grant's first wife, who arrived in Pine Valley in 1973?|Nancy Grant|Caroline Murray|Ellen Shepherd|Mary Kennicott|Medium|Frank Grant|Nancy Grant|1973 introduction|first marriage|hospital family|Black central characters|Pine Valley relationships`,
   `In All My Children, which woman married Frank Grant after his marriage to Nancy broke down?|Caroline Murray|Ellen Shepherd|Mona Kane|Estelle LaTour|Medium|Frank Grant|Caroline Murray|Nancy Grant divorce|1970s marriage|romantic triangle|Grant family|marital change`,
   `In All My Children, who was the biological father of Nancy Grant's son Carl Blair Jr?|Frank Grant|Carl Blair Sr|David Thornton|Paul Martin|Hard|Nancy Grant|Frank Grant|Carl Blair Jr|1978 birth|hidden paternity|Caroline Murray|Grant family`,
   `In All My Children, which man married Nancy Grant before his death and gave his surname to her son?|Carl Blair|Frank Grant|Mark Dalton|Benny Sago|Hard|Nancy Grant|Carl Blair|1978|deathbed marriage|child's surname|hidden paternity|family cover story`,
   `In All My Children, which pimp was behind Donna Tyler's unwanted sterilisation?|Billy Clyde Tuggle|Tyrone|Hal Short|Eddie Dorrance|Medium|Donna Beck Tyler|Billy Clyde Tuggle|forced sterilisation|1970s|medical abuse|Chuck Tyler marriage|fertility storyline`,
   `In All My Children, what procedure did Donna Tyler undergo in an effort to have a child with Chuck?|Surgery to reverse sterilisation|A heart transplant|Kidney dialysis|A bone-marrow transplant|Medium|Donna Tyler|Chuck Tyler|sterilisation reversal|1978|fertility treatment|family planning|medical procedure`,
   `In All My Children, which former chauffeur exposed Phoebe Tyler's pretence that she still needed a wheelchair?|Benny Sago|Mark Dalton|Dan Kennicott|Jason Maxwell|Medium|Phoebe Tyler|Benny Sago|wheelchair deception|1970s|false paralysis|chauffeur|Charles Tyler sympathy`,
   `In All My Children, what kind of collision caused Donna Tyler's amnesia and renewed fear of her past?|Her car was struck by a train|She fell from a horse|A plane made an emergency landing|She crashed a motorboat|Hard|Donna Tyler|amnesia|railway crossing|late 1970s|train collision|Billy Clyde Tuggle|traumatic memory`,
   `In All My Children, which ex-convict did Nick Davis employ at his restaurant after Erica Kane changed jobs?|Claudette Montgomery|Myrtle Lum|Ellen Shepherd|Caroline Murray|Medium|Nick Davis|Claudette Montgomery|the Chateau|1970s|former prisoner|restaurant work|Erica Kane rivalry`,
   `In All My Children, what substance did Erica Kane try to plant in Claudette Montgomery's purse to violate her parole?|Marijuana|Cocaine|Heroin|Alcohol|Hard|Erica Kane|Claudette Montgomery|parole threat|late 1970s|planted evidence|Nick Davis rivalry|police intervention`,
   `In All My Children, what was singer Kelly Cole's family relationship to the late Kitty Tyler?|They were twin sisters|They were first cousins|Kelly was Kitty's stepmother|They were unrelated lookalikes|Medium|Kelly Cole|Kitty Shea Tyler|twin sisters|1970s|family revelation|Lincoln Tyler|music storyline`,
   `In All My Children, at which restaurant did Kelly Cole perform as a singer in the late 1970s?|The Chateau|The Goalpost|The Valley Inn|The Boutique|Medium|Kelly Cole|the Chateau|Nick Davis|1979|live performances|Pine Valley music|restaurant entertainment`,
   `In All My Children, what addiction gave manager Eddie Dorrance power over singer Kelly Cole?|Pills|Gambling|Alcohol|Nicotine|Medium|Kelly Cole|Eddie Dorrance|medication dependency|1979|controlling manager|singer exploitation|murder mystery`,
   `In All My Children, whose fingerprints implicated her in the death of music manager Eddie Dorrance?|Kelly Cole|Myrtle Fargate|Phoebe Tyler|Donna Beck|Hard|Eddie Dorrance|Kelly Cole|murder weapon|1979|fingerprint evidence|singer suspect|crime investigation`,
   `In All My Children, what was the first name of Ellen Shepherd's daughter, who became involved in a love triangle with Brooke English?|Devon|Bonnie|Nina|Claudette|Medium|Ellen Shepherd|Devon Shepherd|Brooke English|late 1970s|young adult drama|Dan Kennicott|family relationships`,
   `In All My Children, which young man was the father of Devon Shepherd's baby?|Wally McFadden|Dan Kennicott|Mark Dalton|Benny Sago|Hard|Devon Shepherd|Wally McFadden|late 1970s|unplanned pregnancy|Dan Kennicott rivalry|parenthood|Shepherd family`,
   `In All My Children, what name did Devon Shepherd give to her baby daughter?|Bonnie|Tara|Erica|Kelly|Hard|Devon Shepherd|Bonnie McFadden|Wally McFadden|late 1970s|childbirth|adoption reconsidered|young parenthood`,
   `In All My Children, which new business did Erica Kane persuade husband Tom Cudahy to help establish?|A disco called Erica's|A new modelling school|A ballet company|A radio station|Medium|Erica Kane|Tom Cudahy|Erica's disco|1979|new business|marital enterprise|nightlife`,
   `In All My Children, what worried Tad Martin when Ruth became pregnant with Joey?|That his adoptive parents would love the baby more|That he would have to join the army|That he would have to leave Pine Valley for college|That his father would lose his medical licence|Medium|Tad Gardner Martin|Ruth Martin|Joey Martin|1979 pregnancy|adoption anxiety|family reassurance|Martin household`,
   `In All My Children, which older Martin relative reassured Ruth during her unexpected late pregnancy?|Kate Martin|Mona Kane|Phoebe Tyler|Myrtle Fargate|Medium|Kate Martin|Ruth Martin|Joe Martin mother|1979 pregnancy|family support|Joey birth|Martin matriarch`,
   `In All My Children, which charming con man began courting Phoebe Tyler during 1979?|Langley Wallingford|Jason Maxwell|Palmer Cortlandt|Nick Davis|Medium|Langley Wallingford|Phoebe Tyler|1979 introduction|con artist|romantic plot|false scholar|Tyler family`,
   `In All My Children, which actor portrayed the newly arrived Langley Wallingford in 1979?|Louis Edmonds|Hugh Franklin|James Mitchell|Peter White|Medium|Louis Edmonds|Langley Wallingford|1979 debut|cast member|Phoebe Tyler romance|actor identification|ABC soap`,
   `In All My Children, which woman eventually became Charles Tyler's wife after his marriage to Phoebe ended?|Mona Kane|Margo Flax|Ellen Shepherd|Nancy Grant|Medium|Charles Tyler|Mona Kane|Phoebe Tyler divorce|1970s|new marriage|Erica Kane mother|Tyler family`,
 );

 const questions = rows.map((row, index) => {
   const parts = row.split('|').map(part => part.trim());
   if (parts.length !== 13 || parts.some(part => !part)) {
     throw new Error(`Pack 414: malformed row ${index + 1} (${parts.length} fields)`);
   }
   const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
   if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
     throw new Error(`Pack 414: invalid difficulty at row ${index + 1}`);
   }
   const question = stem.includes('All My Children')
     ? stem
     : `In All My Children, ${stem[0].toLowerCase()}${stem.slice(1)}`;
   const answers = [wrong1, wrong2, wrong3];
   answers.splice(index % 4, 0, correctAnswer);
   if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
     throw new Error(`Pack 414: duplicate answer option at row ${index + 1}`);
   }
   const tags = [...new Set([...commonTags, ...specificTags])];
   if (tags.length !== 13) {
     throw new Error(`Pack 414: expected 13 distinct tags at row ${index + 1}, got ${tags.length}`);
   }
   return {
     id: `tv_${index < ORIGINAL_COUNT ? FIRST_ID + index : AUDIT_NEW_FIRST_ID + index - ORIGINAL_COUNT}`,
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
