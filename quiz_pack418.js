
 // PuzzlePilot - Big Quiz - Pack 418
 // All My Children: 2010-2011 ABC finale and 2013 online revival.
 // Completes the concluded television programme through 2 September 2013.
 // Follows Packs 414-417 (1970-2009). Full WordPad-ready CommonJS.
 // First ID: tv_23766.
 'use strict';

 const FIRST_ID = 23766;
 const commonTags = [
   'television', 'All My Children', 'American soap opera',
   'Pine Valley', 'ABC daytime', '2010 to 2013'
 ];

 // Question | correct answer | three distractors | difficulty | seven specific tags.
 // The exported answers rotate positions A, B, C and D.
 const rows = [
 `Which anniversary did All My Children celebrate at the start of 2010?|Its 40th|Its 25th|Its 50th|Its 30th|Easy|40th anniversary|2010|1970 premiere|programme history|celebration|January|soap milestone`,
 `Which returning character hosted the documentary-style anniversary episode of All My Children?|Hayley Santos|Erica Kane|Myrtle Fargate|Liza Colby|Medium|Hayley Santos|Kelly Ripa|documentary episode|2010 anniversary|returning character|on screen host|television special`,
 `Which actress returned to All My Children as Hayley Santos for its anniversary episode?|Kelly Ripa|Susan Lucci|Marcy Walker|Julia Barr|Easy|Kelly Ripa|Hayley Santos|2010 return|celebration|original cast|anniversary appearance|performer`,
 `Which veteran All My Children couple retired to Florida during the 40th-anniversary period?|Joe and Ruth Martin|Adam and Brooke Chandler|Jesse and Angie Hubbard|Palmer and Opal Cortlandt|Medium|Joe Martin|Ruth Martin|Florida retirement|2010|original family|medical couple|farewell`,
 `Which actor who played Palmer Cortlandt was honoured by All My Children after his death in 2010?|James Mitchell|David Canary|Ray MacDonnell|Hugh Franklin|Easy|James Mitchell|Palmer Cortlandt|2010 death|memorial|actor tribute|longtime star|Cortlandt family`,
 `Which character's funeral brought the Cortlandt family together in All My Children in 2010?|Palmer Cortlandt|Adam Chandler|Stuart Chandler|Dimitri Marick|Easy|Palmer Cortlandt|funeral|2010|Opal|Nina|Daisy|family farewell`,
 `Which actress returned as Nina Warner for the All My Children tribute to Palmer?|Taylor Miller|Kim Delaney|Eden Riegel|Rebecca Budig|Medium|Taylor Miller|Nina Warner|Palmer daughter|2010 return|memorial episode|guest actress|Cortlandt family`,
 `Which actress returned as Daisy Cortlandt for Palmer's All My Children memorial?|Gillian Spencer|Jill Larson|Ruth Warrick|Marcy Walker|Hard|Gillian Spencer|Daisy Cortlandt|2010|Palmer ex wife|funeral episode|casting return|family remembrance`,
 `Which actress returned as Brooke English before Adam Chandler left All My Children in 2010?|Julia Barr|Eden Riegel|Jennifer Bassey|Cady McClain|Easy|Julia Barr|Brooke English|2010 comeback|Adam Chandler|cast departure|reunion|ABC drama`,
 `Which longtime All My Children actor retired from his dual role as Adam and Stuart Chandler in 2010?|David Canary|Michael E Knight|John Callahan|James Kiberd|Easy|David Canary|Adam Chandler|Stuart Chandler|2010 retirement|dual role|casting history|longtime performer`,
 `With which woman did Adam Chandler leave Pine Valley in All My Children in 2010?|Brooke English|Erica Kane|Krystal Carey|Liza Colby|Medium|Adam Chandler|Brooke English|2010 exit|retirement storyline|romantic reunion|Chandler family|farewell`,
 `Which new male relative inherited a role in Cortlandt Electronics after Palmer's death in All My Children?|Caleb Cooney|David Hayward|Jake Martin|Aidan Devane|Medium|Caleb Cooney|Caleb Cortlandt|2010 arrival|Palmer will|business inheritance|mountain man|Cortlandt Electronics`,
 `What was Caleb Cooney's family connection to Palmer Cortlandt in All My Children?|He was Palmer's nephew|He was Palmer's brother|He was Palmer's son|He was Palmer's grandson|Medium|Caleb Cooney|Palmer Cortlandt|uncle nephew|2010|family inheritance|Cortlandt clan|secret relative`,
 `Where did Erica Kane encounter the reclusive Caleb Cooney after a plane crash in All My Children?|In the mountains|On a cruise ship|At a seaside hotel|In a city nightclub|Medium|Erica Kane|Caleb Cooney|mountain rescue|2010|aircraft sabotage|remote refuge|injured traveller`,
 `Who was behind the tampering with Erica Kane's plane in All My Children in 2010?|David Hayward|Caleb Cooney|Jackson Montgomery|Palmer Cortlandt|Medium|David Hayward|Erica Kane|2010|plane crash|sabotage|Fusion Cosmetics|criminal scheme`,
 `Which actor played Caleb Cooney when he arrived in All My Children in 2010?|Michael Nouri|David Canary|Walt Willey|Thorsten Kaye|Hard|Michael Nouri|Caleb Cooney|2010 casting|Cortlandt inheritance|newcomer|mountain recluse|performer`,
 `Which company did Palmer's will require Caleb and Erica to help manage in All My Children?|Cortlandt Electronics|Chandler Enterprises|Fusion Cosmetics|Tempo magazine|Medium|Cortlandt Electronics|Caleb Cooney|Erica Kane|2010|business inheritance|Palmer will|corporate dispute`,
 `Which character returned alive after a motorcycle crash, then married David Hayward in All My Children?|Greenlee Smythe|Gillian Andrassy|Maria Santos|Dixie Cooney|Easy|Greenlee Smythe|David Hayward|2010|presumed death|unexpected marriage|Ryan Lavery|romantic rivalry`,
 `Who married Greenlee Smythe while she was still publicly believed dead by many residents of All My Children?|David Hayward|Ryan Lavery|Leo du Pres|Zach Slater|Medium|Greenlee Smythe|David Hayward|2010|secret wedding|Ryan Lavery|revenge marriage|resurrection`,
 `Whose relationship with Greenlee Smythe was David Hayward desperate to prevent in All My Children?|Ryan Lavery's|JR Chandler's|Tad Martin's|Jake Martin's|Medium|David Hayward|Greenlee Smythe|Ryan Lavery|2010 jealousy|love triangle|marital manipulation|romance`,
 `Which doctor staged his own death in All My Children in 2010 to frame a romantic rival?|David Hayward|Jake Martin|Joe Martin|Griffin Castillo|Easy|David Hayward|staged murder|2010|Ryan Lavery|Greenlee Smythe|false death|criminal deception`,
 `Whose murder was Greenlee Smythe convicted of immediately before the supposed victim appeared alive in All My Children?|David Hayward's|Zach Slater's|Adam Chandler's|Palmer Cortlandt's|Medium|Greenlee Smythe|David Hayward|2010 trial|wrongful conviction|courtroom shock|life sentence|faked death`,
 `Where did David Hayward make his dramatic return after faking his death in All My Children?|In a courtroom|At a hospital wedding|In a nightclub|At a funeral service|Medium|David Hayward|2010|courtroom appearance|Greenlee trial|fake death revealed|criminal case|dramatic return`,
 `Which of Kendall Hart's husbands was presumed killed in a plane crash in All My Children in 2010?|Zach Slater|Ryan Lavery|JR Chandler|Aidan Devane|Easy|Zach Slater|Kendall Hart|2010 plane crash|presumed death|Cambias family|bereavement|Project Orpheus`,
 `Which actor played Zach Slater when he was believed killed in a plane crash in All My Children?|Thorsten Kaye|Cameron Mathison|Josh Duhamel|Vincent Irizarry|Medium|Thorsten Kaye|Zach Slater|2010|actor casting|aircraft crash|later return|Kendall husband`,
 `Which Pine Valley police chief's daughter Natalia developed a relationship with officer Brot Monroe in All My Children?|Jesse Hubbard's|Tad Martin's|David Hayward's|Jake Martin's|Medium|Natalia Fowler|Jesse Hubbard|Brot Monroe|2010 to 2011|police officer|romance|father daughter`,
 `Which military veteran and police officer became romantically involved with Natalia Fowler in All My Children?|Brot Monroe|Ryan Lavery|Caleb Cooney|Griffin Castillo|Medium|Brot Monroe|Natalia Fowler|2010|police romance|war veteran|Jesse Hubbard|relationship`,
 `Which actress portrayed Marissa Tasker after the role was recast in late 2010 on All My Children?|Sarah Glendening|Brittany Allen|Alexa Havins|Amanda Baker|Hard|Sarah Glendening|Marissa Tasker|2010 recast|JR Chandler|actor casting|Bianca Montgomery|young adult`,
 `Which actor returned as Scott Chandler after a 2010 recasting on All My Children?|Daniel Cosgrove|Adam Mayfield|David Canary|Eric Nelsen|Hard|Daniel Cosgrove|Scott Chandler|2010 return|recast|Chandler family|actor change|businessman`,
 `Which actress portrayed Cara Castillo when she returned to All My Children in late 2010?|Lindsay Hartley|Melissa Claire Egan|Cady McClain|Eva LaRue|Medium|Lindsay Hartley|Cara Castillo|2010 return|doctor|actor casting|Jake Martin|Castillo family`,
 `Which actress played Erica Kane's lookalike Jane Campbell in All My Children in 2011?|Susan Lucci|Marcy Walker|Rebecca Budig|Robin Mattson|Easy|Susan Lucci|Jane Campbell|Erica Kane|2011 dual role|doppelganger|actor performance|impersonation`,
 `Which character kidnapped Erica Kane and impersonated her in All My Children in 2011?|Jane Campbell|Janet Green|Annie Novak|Liza Colby|Easy|Jane Campbell|Erica Kane|2011|kidnapping|plastic surgery|impostor|celebrity obsession`,
 `What had Jane Campbell done to resemble Erica Kane in the late All My Children story?|Undergone plastic surgery|Dyed her hair a different colour|Taken acting lessons only|Worn a carnival mask|Medium|Jane Campbell|Erica Kane|2011|facial surgery|lookalike plot|identity theft|double role`,
 `What event was interrupted by Erica Kane's abduction in All My Children in 2011?|Her planned wedding to Jackson|Her book launch|A christening for Colby|A funeral for Palmer|Medium|Erica Kane|Jackson Montgomery|2011|wedding day|Jane Campbell|kidnapping|fiance`,
 `Which character agreed to a marriage of convenience to protect Cara Castillo from deportation in All My Children?|Tad Martin|David Hayward|Joe Martin|Cliff Warner|Medium|Tad Martin|Cara Castillo|2011|immigration marriage|false relationship|deportation|Martin family`,
 `Why did Tad Martin agree to marry Cara Castillo in All My Children in 2011?|To prevent her deportation|To inherit Cortlandt Electronics|To win a custody dispute|To escape a murder charge|Medium|Tad Martin|Cara Castillo|immigration law|2011|marriage of convenience|citizenship fears|protective scheme`,
 `Which doctor was Cara Castillo's brother in All My Children?|Griffin Castillo|Jake Martin|David Hayward|Frankie Hubbard|Medium|Griffin Castillo|Cara Castillo|siblings|2011|medical family|Pine Valley Hospital|family connection`,
 `Which actress played Dr Angie Hubbard when the character lost and later regained her eyesight in All My Children?|Debbi Morgan|Eva LaRue|Jill Larson|Julia Barr|Easy|Debbi Morgan|Angie Hubbard|2011|blindness story|actress|Jesse Hubbard|medical crisis`,
 `Which sense did Angie Hubbard lose during a serious medical storyline in All My Children?|Sight|Hearing|Taste|Smell|Easy|Angie Hubbard|blindness|2010 to 2011|health crisis|doctor|Jesse Hubbard|medical drama`,
 `What tragic outcome did Jesse conceal when Angie Hubbard gave birth in All My Children?|Their daughter was stillborn|They had triplets|Their son was adopted|The hospital lost the birth records|Medium|Jesse Hubbard|Angie Hubbard|Ellie Hubbard|2011|stillbirth|hidden tragedy|infant loss`,
 `Which baby did Jesse Hubbard substitute after his and Angie's daughter was stillborn in All My Children?|Lucy|Miranda|Bianca|Emma|Medium|Lucy|Jesse Hubbard|2011|baby substitution|Ellie Hubbard|Angie blindness|secret parentage`,
 `What name did Jesse and Angie give their stillborn baby daughter in All My Children?|Ellie|Gabrielle|Molly|Jenny|Medium|Ellie Hubbard|Angie Hubbard|Jesse Hubbard|2011|stillborn daughter|family grief|child name`,
 `Who was the biological mother of the infant Lucy whom Angie initially believed was hers in All My Children?|Maya Mercado|Cara Castillo|Marissa Tasker|Krystal Carey|Medium|Maya Mercado|Lucy|2011|birth mother|Hubbard family|baby swap|adoption`,
 `Which police officer assisted Jesse Hubbard in the secret involving infant Lucy in All My Children?|Brot Monroe|Ryan Lavery|Aidan Devane|Caleb Cooney|Hard|Brot Monroe|Jesse Hubbard|2011|Lucy|stillbirth coverup|police colleague|Natalia Fowler`,
 `Which doctor ultimately regained her vision near the end of the ABC run of All My Children?|Angie Hubbard|Maria Santos|Cara Castillo|Erica Kane|Medium|Angie Hubbard|vision restored|2011|eye operation|Jesse Hubbard|medical recovery|family celebration`,
 `What was the name of David Hayward's project associated with bringing supposedly dead characters back in All My Children?|Project Orpheus|Project Phoenix|Project Fusion|Project Atlas|Easy|Project Orpheus|David Hayward|2011|experimental treatment|restored patients|medical mystery|resurrections`,
 `Which character was revealed alive through David Hayward's secret treatment after a fatal poisoning in All My Children?|Dixie Cooney|Jenny Gardner|Myrtle Fargate|Cindy Parker|Easy|Dixie Cooney|Project Orpheus|2011 return|poisoned pancakes|Tad Martin|medical revival|resurrection`,
 `Who was reunited with Dixie Cooney when her supposed death was reversed in All My Children?|Tad Martin|Zach Slater|Jackson Montgomery|JR's uncle Stuart|Medium|Dixie Cooney|Tad Martin|2011|Project Orpheus|return from dead|romance|Martin family`,
 `Which of Kendall's husbands returned alive after David Hayward's experimental treatments in All My Children?|Zach Slater|Ryan Lavery|Michael Cambias|Leo du Pres|Easy|Zach Slater|Kendall Hart|2011 comeback|Project Orpheus|plane crash|romantic reunion|Cambias heir`,
 `Which of Adam Chandler's relatives returned alive at the very end of All My Children's ABC run?|His twin Stuart|His father Palmer|His son JR|His brother Ross|Medium|Stuart Chandler|Adam Chandler|twin brothers|2011|Project Orpheus|surprise reunion|family return`,
 `Which businessman reappeared in the closing week of the original ABC run of All My Children with Brooke English?|Adam Chandler|Palmer Cortlandt|Caleb Cooney|Dimitri Marick|Medium|Adam Chandler|Brooke English|2011|final week|homecoming|Stuart Chandler|Chandler family`,
 `Which actress returned as Brooke English for All My Children's 2011 television finale?|Julia Barr|Rebecca Budig|Marcy Walker|Eden Riegel|Medium|Julia Barr|Brooke English|2011|ABC finale|returning cast|Adam Chandler|farewell episode`,
 `Which character refused Jackson Montgomery's proposal in the closing episode of All My Children?|Erica Kane|Brooke English|Greenlee Smythe|Liza Colby|Medium|Erica Kane|Jackson Montgomery|2011 finale|marriage refusal|romantic decision|last episode|Susan Lucci`,
 `What publication project was Erica Kane promoting towards the end of All My Children's ABC run?|Her memoir|A veterinary handbook|A magazine for teenagers|A travel atlas|Medium|Erica Kane|memoir|2011|book publicity|Jackson Montgomery|media career|final storyline`,
 `Which person entered the Chandler home armed at the close of All My Children's ABC finale?|JR Chandler|David Hayward|Zach Slater|Caleb Cooney|Easy|JR Chandler|2011 finale|gun|Chandler mansion|cliffhanger|party|violent confrontation`,
 `Where did the final gunshot cliffhanger occur in the ABC version of All My Children?|At the Chandler mansion|At Pine Valley Hospital|At the Fusion offices|At Wildwind stables|Medium|Chandler mansion|2011|gunshot|Stuart welcome home|JR Chandler|ABC cliffhanger|final scene`,
 `Which US network ended its original television broadcast of All My Children in 2011?|ABC|CBS|NBC|The CW|Easy|ABC network|2011 cancellation|original series|broadcast rights|daytime soap|1970 to 2011|television ending`,
 `In which year did the original television run of All My Children conclude?|2011|2009|2013|2015|Easy|2011|ABC finale|September|end of original run|1970 premiere|soap cancellation|broadcast chronology`,
 `Which month saw the last All My Children episode broadcast on ABC?|September|April|December|June|Medium|September 2011|final ABC episode|23 September|network history|last broadcast|daytime television|closing week`,
 `Which other ABC daytime soap was cancelled alongside All My Children in the 2011 announcement?|One Life to Live|General Hospital|The Young and the Restless|Days of Our Lives|Easy|One Life to Live|ABC cancellation|2011|soap industry|joint announcement|daytime television|broadcast changes`,
 `Who created the soap opera All My Children, which left ABC in 2011?|Agnes Nixon|Gloria Monty|William J Bell|Irna Phillips|Easy|Agnes Nixon|creator|ABC finale|2011|soap history|writer|show origins`,
 `Which production company brought All My Children back as an online drama in 2013?|Prospect Park|HBO|Netflix|BBC Studios|Easy|Prospect Park|2013|online revival|production company|The Online Network|internet soap|distribution`,
 `What was the online network brand for the revived All My Children in 2013?|The OnLine Network|Paramount Plus|SOAPnet|Peacock|Medium|The OnLine Network|TOLN|Prospect Park|2013|streaming brand|web soap|new production`,
 `On which streaming platform were the 2013 All My Children revival episodes first available in the United States?|Hulu|Netflix|Disney Plus|BritBox|Easy|Hulu|2013|online distribution|streaming television|reboot launch|Prospect Park|episodes`,
 `Which month did new episodes of All My Children return online in 2013?|April|January|July|November|Medium|April 2013|29 April|web revival debut|new episodes|online premiere|Hulu|return`,
 `How many in-universe years did All My Children jump forward for its 2013 revival?|Five|Two|Ten|Fifteen|Medium|five year jump|2013|2011 cliffhanger|story time|future setting|new generation|continuity`,
 `Which actor played JR Chandler in the 2013 online revival of All My Children?|Ryan Bittle|Jacob Young|Eric Nelsen|Cameron Mathison|Easy|Ryan Bittle|JR Chandler|2013 recast|actor casting|Chandler family|post coma|return`,
 `Which actor portrayed the teenage AJ Chandler in the 2013 All My Children revival?|Eric Nelsen|Robert Scott Wilson|Ryan Bittle|Jacob Young|Medium|Eric Nelsen|AJ Chandler|2013|teenage cast|actor casting|JR son|Chandler family`,
 `Who portrayed the older Miranda Montgomery in the 2013 All My Children revival?|Denyse Tontz|Eden Riegel|Jordan Lane Price|Sal Stowers|Medium|Denyse Tontz|Miranda Montgomery|2013|teenage role|actor casting|Bianca daughter|school storyline`,
 `Which teenager was Miranda Montgomery's close friend and romantic interest in the 2013 All My Children revival?|AJ Chandler|Pete Cortlandt|JR Chandler|Carter Anders|Easy|Miranda Montgomery|AJ Chandler|2013|teenage friendship|school romance|Chandler family|young generation`,
 `Which actress played Cassandra Foster in the 2013 online version of All My Children?|Sal Stowers|Yaya DaCosta|Debbi Morgan|Paula Garces|Medium|Sal Stowers|Cassandra Foster|2013 recast|actor casting|Angie daughter|missing person|Hubbard family`,
 `Which serious crime became central to Cassandra Foster's storyline in the 2013 revival of All My Children?|Human trafficking|Art forgery|Bank fraud|International piracy|Medium|Cassandra Foster|human trafficking|2013|kidnapping|Angie Hubbard|organized crime|social issue`,
 `Who was Cassandra Foster's adoptive mother in the 2013 All My Children revival?|Angie Hubbard|Bianca Montgomery|Opal Cortlandt|Brooke English|Easy|Cassandra Foster|Angie Hubbard|mother daughter|2013|kidnapping|Hubbard family|adoption`,
 `Which actor reprised Jesse Hubbard during the 2013 return of All My Children?|Darnell Williams|Vincent Irizarry|Ray MacDonnell|Michael E Knight|Easy|Darnell Williams|Jesse Hubbard|2013|returning actor|Angie Hubbard|police chief|missing daughter`,
 `Which actress returned as Angie Hubbard for the 2013 online All My Children?|Debbi Morgan|Eden Riegel|Julia Barr|Jill Larson|Easy|Debbi Morgan|Angie Hubbard|2013 revival|cast return|Cassandra Foster|physician|Hubbard family`,
 `Which character was revealed in the 2013 All My Children revival to have died from JR's 2011 gunshot?|Marissa Tasker|Erica Kane|Brooke English|Dixie Martin|Medium|Marissa Tasker|2011 cliffhanger solved|2013 revelation|JR Chandler|Bianca partner|shooting victim|murder`,
 `Who fired the shot that fatally wounded Marissa Tasker, as revealed in the 2013 All My Children revival?|JR Chandler|David Hayward|Zach Slater|Jesse Hubbard|Medium|JR Chandler|Marissa Tasker|2013|2011 finale|gunshot|Chandler mansion|crime`,
 `Which doctor was imprisoned after shooting JR in the aftermath of the 2011 Chandler party in All My Children?|David Hayward|Jake Martin|Griffin Castillo|Joe Martin|Medium|David Hayward|JR Chandler|2013|five year sentence|Marissa Tasker|revenge shooting|prison`,
 `How did JR Chandler spend much of the five-year gap before the 2013 All My Children revival?|In a coma|Travelling Europe|Serving as mayor|Living at Wildwind|Medium|JR Chandler|coma|2011 shooting|five year time jump|2013 recovery|David Hayward|family trauma`,
 `Which All My Children character was Marissa Tasker's partner at the time of her death?|Bianca Montgomery|Greenlee Smythe|Liza Colby|Annie Novak|Medium|Marissa Tasker|Bianca Montgomery|2011|2013 revelation|relationship|bereavement|same sex romance`,
 `Which returning doctor was granted parole in the 2013 revival of All My Children?|David Hayward|Griffin Castillo|Tad Martin|Cliff Warner|Medium|David Hayward|2013|prison release|Vincent Irizarry|Cara Castillo|JR Chandler|legal freedom`,
 `Which actress portrayed Cara Castillo in the 2013 All My Children revival?|Lindsay Hartley|Eva LaRue|Eden Riegel|Rebecca Budig|Medium|Lindsay Hartley|Cara Castillo|2013|returning cast|physician|David Hayward|performer`,
 `Who was the father of Cara Castillo's secret son Oliver in the revived All My Children?|David Hayward|Jake Martin|Griffin Castillo|JR Chandler|Medium|Cara Castillo|Oliver Castillo|David Hayward|2013|secret paternity|medical storyline|father son`,
 `Which actress played detective Lea Marquez in the 2013 online episodes of All My Children?|Paula Garces|Sal Stowers|Denyse Tontz|Jordan Lane Price|Hard|Paula Garces|Lea Marquez|2013 debut|actor casting|detective|Zach Slater|police investigation`,
 `Which returning businessman worked with detective Lea Marquez on Cassandra Foster's case in the revived All My Children?|Zach Slater|Adam Chandler|Palmer Cortlandt|JR Chandler|Medium|Zach Slater|Lea Marquez|2013|Cassandra kidnapping|investigation|casino business|detective partnership`,
 `Which actor reprised Zach Slater during the 2013 internet revival of All My Children?|Thorsten Kaye|Josh Duhamel|Cameron Mathison|Vincent Irizarry|Medium|Thorsten Kaye|Zach Slater|2013|casting return|Lea Marquez|Cambias family|casino businessman`,
 `Which young Cortlandt heir returned in the 2013 online edition of All My Children?|Pete Cortlandt|JR Chandler|Ryan Lavery|Jamie Martin|Medium|Pete Cortlandt|2013 revival|Opal son|technology business|Cortlandt Electronics|younger cast|family legacy`,
 `Which actor portrayed Pete Cortlandt in the 2013 All My Children revival?|Robert Scott Wilson|Eric Nelsen|Ryan Bittle|Michael Nader|Easy|Robert Scott Wilson|Pete Cortlandt|2013|recasting|actor|Opal son|revival cast`,
 `Which woman became Pete Cortlandt's romantic interest in the 2013 All My Children online revival?|Celia Fitzgerald|Colby Chandler|Cassandra Foster|Bianca Montgomery|Medium|Pete Cortlandt|Celia Fitzgerald|2013|romance|technology heir|new character|young couple`,
 `Which actress played Celia Fitzgerald in the 2013 All My Children revival?|Jordan Lane Price|Denyse Tontz|Brooke Newton|Sal Stowers|Medium|Jordan Lane Price|Celia Fitzgerald|2013 casting|young actress|Pete Cortlandt|new character|student`,
 `What business did Pete Cortlandt consider reviving on his 2013 return in All My Children?|Cortlandt Electronics|Fusion Cosmetics|The Goalpost|The Chateau|Medium|Pete Cortlandt|Cortlandt Electronics|2013|family business|Palmer legacy|company revival|Opal Cortlandt`,
 `Who played Brooke English when the character returned to the 2013 All My Children revival?|Julia Barr|Susan Lucci|Cady McClain|Marcy Walker|Easy|Julia Barr|Brooke English|2013|reprising role|returning cast|Adam Chandler|television journalist`,
 `Which actress portrayed Bianca Montgomery again in the 2013 online All My Children?|Eden Riegel|Denyse Tontz|Sarah Michelle Gellar|Alicia Minshew|Easy|Eden Riegel|Bianca Montgomery|2013|returning actress|Miranda mother|Marissa Tasker|casting`,
 `Which actress played Opal Cortlandt in the 2013 revival of All My Children?|Jill Larson|Dorothy Lyman|Ruth Warrick|Jennifer Bassey|Medium|Jill Larson|Opal Cortlandt|2013 comeback|Pete mother|actor casting|Cortlandt Electronics|matriarch`,
 `Which actress played the recast Colby Chandler in the online revival of All My Children?|Brooke Newton|Leven Rambin|Natalie Hall|Jordan Lane Price|Hard|Brooke Newton|Colby Chandler|2013|new actress|Chandler daughter|young adult|recast`,
 `Which actor returned as Dimitri Marick for the 2013 online run of All My Children?|Michael Nader|John Callahan|James Mitchell|Walt Willey|Medium|Michael Nader|Dimitri Marick|2013 return|Wildwind|casting history|Marick family|businessman`,
 `Which newspaper or media brand was revived as a television venture in the 2013 All My Children revival?|Talk Tempo|The Sun|The Intruder|The Pine Valley Herald|Hard|Talk Tempo|Dimitri Marick|Brooke English|2013|media production|business venture|journalism`,
 `Which real actor returned as villain Billy Clyde Tuggle for the 2013 online All My Children?|Matthew Cowles|Darnell Williams|David Canary|James Kiberd|Hard|Matthew Cowles|Billy Clyde Tuggle|2013 revival|villain return|actor casting|criminal past|original soap`,
 `What type of institution was the Miranda Montgomery Center featured in 2013's All My Children?|A centre for women and children|A military academy|A law school|An animal shelter|Medium|Miranda Montgomery Center|2013|women and children|charitable organization|Celia Fitzgerald|Brooke English|community support`,
 `Which TV channel later screened the 2013 online All My Children revival for a limited engagement?|Oprah Winfrey Network|CBS|BBC One|The CW|Hard|Oprah Winfrey Network|OWN|2013|cable screening|online episodes|rebroadcast|distribution`,
 `Which soap opera was revived online alongside All My Children in 2013?|One Life to Live|General Hospital|As the World Turns|Passions|Easy|One Life to Live|2013|Prospect Park|twin revival|ABC heritage|online soap|television history`,
 `In which month did the last new 2013 online episode of All My Children become available?|September|May|December|January|Medium|September 2013|2 September|final revival episode|online ending|broadcast chronology|Hulu|web television`,
 `What was the title of the final 2013 online episode of All My Children?|A Knight to Remember|The Revolutionary Road Home|The Nightmare Begins|Second Chances|Hard|A Knight to Remember|2013 finale|episode title|2 September|web revival|season ending|final installment`,
 `How many episodes were released in the 2013 online revival of All My Children, according to its listed episode guide?|Forty-three|Twenty|One hundred|Sixty-five|Medium|43 episodes|2013|online season|TV episode guide|The OnLine Network|Hulu|revival length`,
 `Which year saw All My Children cease producing new episodes after its short-lived online return?|2013|2011|2015|2018|Easy|2013 ending|online revival|Prospect Park|final production|September finale|programme completion|soap chronology`
 ];

 const questions = rows.map((row, index) => {
   const parts = row.split('|').map(part => part.trim());
   if (parts.length !== 13 || parts.some(part => !part)) {
     throw new Error(`Pack 418: malformed row ${index + 1} (${parts.length} fields)`);
   }
   const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
   if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
     throw new Error(`Pack 418: invalid difficulty at row ${index + 1}`);
   }
   const question = stem.includes('All My Children')
     ? stem
     : `In All My Children, ${stem[0].toLowerCase()}${stem.slice(1)}`;
   const answers = [wrong1, wrong2, wrong3];
   answers.splice(index % 4, 0, correctAnswer);
   if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
     throw new Error(`Pack 418: duplicate answer option at row ${index + 1}`);
   }
   const tags = [...new Set([...commonTags, ...specificTags])];
   if (tags.length !== 13 || new Set(tags.map(tag => tag.toLowerCase())).size !== 13) {
     throw new Error(`Pack 418: expected 13 distinct tags at row ${index + 1}`);
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
