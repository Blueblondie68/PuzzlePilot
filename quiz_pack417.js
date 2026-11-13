
 // PuzzlePilot - Big Quiz - Pack 417
 // All My Children (2000-2009), ABC daytime soap.
 // Major cast, family histories, relationships, and storylines of the decade.
 // Follows Pack 416 (1990-1999); Pack 418 will cover 2010-2013.
 // Complete WordPad-ready CommonJS file. First ID: tv_23656.
 'use strict';

 const FIRST_ID = 23656;
 const commonTags = [
   'television', 'All My Children', 'American soap opera',
   'Pine Valley', 'ABC daytime', '2000s storylines'
 ];

 // Question | correct | three wrong choices | difficulty | seven question-specific tags.
 // Correct-answer positions rotate; each question identifies the programme.
 const rows = [
 `Which actress portrayed Bianca Montgomery during most of All My Children's 2000s?|Eden Riegel|Sarah Michelle Gellar|Lacey Chabert|Rebecca Budig|Easy|Eden Riegel|Bianca Montgomery|2000 casting|Erica Kane daughter|lead actress|2000s|performer`,
 `Which actress played Greenlee Smythe during her original 2000s run on All My Children?|Rebecca Budig|Alicia Minshew|Kelly Ripa|Marcy Walker|Easy|Rebecca Budig|Greenlee Smythe|2000 to 2005|actor casting|Leo du Pres|businesswoman|makeup entrepreneur`,
 `Which actor portrayed Leo du Pres, Greenlee Smythe's great love, in All My Children?|Josh Duhamel|Cameron Mathison|Jacob Young|Thorsten Kaye|Easy|Josh Duhamel|Leo du Pres|Greenlee Smythe|2000 to 2002|romance|actor casting|Vanessa Bennett son`,
 `Which member of the Kane family publicly came out as a lesbian in All My Children?|Bianca Montgomery|Kendall Hart|Mona Kane|Erica Kane|Easy|Bianca Montgomery|coming out|2000|Erica Kane|lesbian identity|LGBTQ storyline|mother daughter`,
 `Who was Bianca Montgomery's mother when she came out in All My Children?|Erica Kane|Brooke English|Opal Cortlandt|Liza Colby|Easy|Bianca Montgomery|Erica Kane|family acceptance|2000|sexual orientation|mother daughter|social issue`,
 `Which earlier relationship did Bianca describe having while recovering from anorexia in All My Children?|A romance with Sarah|A marriage to Maggie|A relationship with Greenlee|An engagement to Liza|Medium|Bianca Montgomery|Sarah|anorexia treatment|2000|first love|coming out|past relationship`,
 `Which woman became a romantic interest for Bianca before marrying Leo in All My Children?|Laura Kirk English|Maggie Stone|Reese Williams|Gillian Andrassy|Medium|Laura Kirk English|Bianca Montgomery|2001|unrequited love|Leo du Pres|Brooke English|romantic triangle`,
 `Which fatal shooting victim became an organ donor for Laura Kirk English in All My Children?|Gillian Andrassy|Frankie Stone|Cindy Parker|Maria Santos|Hard|Gillian Andrassy|Laura Kirk English|heart transplant|2001|Ryan Lavery|organ donation|tragic death`,
 `Which Hungarian princess married Ryan Lavery before her death from a gunshot wound in All My Children?|Gillian Andrassy|Greenlee Smythe|Annie Novak|Kendall Hart|Medium|Ryan Lavery|Gillian Andrassy|2001|wife|shooting|romantic tragedy|bereavement`,
 `Which talented young woman did Bianca grow close to before her murder in All My Children?|Frankie Stone|Reese Williams|Zoe|Annie Novak|Medium|Bianca Montgomery|Frankie Stone|2001|romantic feelings|murder|friendship|new character`,
 `Which actress played both Frankie Stone and her identical twin Maggie on All My Children?|Elizabeth Hendrickson|Eden Riegel|Rebecca Budig|Melissa Claire Egan|Medium|Elizabeth Hendrickson|Frankie Stone|Maggie Stone|dual role|2001 to 2002|actor casting|twins`,
 `Who murdered Frankie Stone in the early 2000s of All My Children?|Vanessa Bennett|Erica Kane|Greenlee Smythe|Myrtle Fargate|Medium|Vanessa Bennett|Frankie Stone|2001|killer|Bianca Montgomery|crime story|Leo mother`,
 `What was Maggie Stone's relationship to the murdered Frankie Stone in All My Children?|Identical twin sister|Mother|Cousin|Aunt|Easy|Maggie Stone|Frankie Stone|twins|2002|family connection|lookalike|Bianca friendship`,
 `Who was Leo du Pres's mother in All My Children?|Vanessa Bennett|Marian Colby|Opal Cortlandt|Krystal Carey|Medium|Leo du Pres|Vanessa Bennett|mother son|2002|criminal family|con artist|du Pres family`,
 `Which woman married Leo du Pres in All My Children?|Greenlee Smythe|Kendall Hart|Bianca Montgomery|Liza Colby|Easy|Leo du Pres|Greenlee Smythe|2002|wedding|supercouple|romance|married couple`,
 `Which sinister relative fell over a waterfall with Leo du Pres in All My Children?|Vanessa Bennett|Adam Chandler|Palmer Cortlandt|Michael Cambias|Medium|Leo du Pres|Vanessa Bennett|waterfall|2002|presumed death|mother son|dramatic departure`,
 `Which character was presumed dead after plunging over a waterfall in All My Children in 2002?|Leo du Pres|Tad Martin|Ryan Lavery|Zach Slater|Medium|Leo du Pres|2002 departure|waterfall|Vanessa Bennett|Greenlee Smythe|presumed dead|final storyline`,
 `Which woman returned alive but suffering from amnesia after a supposed plane-crash death in All My Children?|Maria Santos|Natalie Dillon|Jenny Gardner|Cindy Parker|Medium|Maria Santos|2002 return|amnesia|plane crash|Edmund Grey|Maureen Gorman|Santos family`,
 `What name did the amnesiac Maria Santos use when rediscovered in All My Children?|Maureen Gorman|Monique Jonville|Diana Cole|Cynthia Preston|Hard|Maria Santos|Maureen Gorman|alias|2002|Edmund Grey|lost memory|return from presumed death`,
 `Which actress portrayed Kendall Hart on All My Children through most of the 2000s?|Alicia Minshew|Sarah Michelle Gellar|Kelly Ripa|Eva LaRue|Easy|Alicia Minshew|Kendall Hart|2002 recast|Erica Kane|actor casting|Zach Slater|lead character`,
 `Which English actor played the secretive Aidan Devane in All My Children?|Aiden Turner|Cameron Mathison|Josh Duhamel|John Callahan|Medium|Aiden Turner|Aidan Devane|2002 debut|actor casting|private investigator|spy|Greenlee Smythe`,
 `Which family connection was discovered between Greenlee Smythe and attorney Jackson Montgomery in All My Children?|He was her biological father|He was her uncle|He was her brother|He was her grandfather|Medium|Greenlee Smythe|Jackson Montgomery|father daughter|parentage secret|2000s|Mary Smythe|family revelation`,
 `Which company became associated with Greenlee Smythe and Kendall Hart in All My Children?|Fusion Cosmetics|Sensuelle Cosmetics|Chandler Enterprises|Tempo magazine|Easy|Fusion Cosmetics|Greenlee Smythe|Kendall Hart|makeup business|early 2000s|business partnership|beauty industry`,
 `Who was Greenlee's business rival turned close friend at Fusion in All My Children?|Kendall Hart|Mona Kane|Dixie Cooney|Angie Hubbard|Medium|Greenlee Smythe|Kendall Hart|Fusion Cosmetics|friendship|rivals|2000s|cosmetics`,
 `Which actor played Michael Cambias, Bianca's assailant, in All My Children?|William deVry|Vincent Irizarry|Josh Duhamel|Thorsten Kaye|Hard|William deVry|Michael Cambias|2003|actor casting|Cambias family|villain|Bianca Montgomery`,
 `Who sexually assaulted Bianca Montgomery during a major 2003 story in All My Children?|Michael Cambias|David Hayward|Ryan Lavery|Jackson Montgomery|Medium|Michael Cambias|Bianca Montgomery|2003|sexual assault|pregnancy|villain|crime`,
 `Which woman had an important romance with Bianca Montgomery in 2003's All My Children?|Lena Kundera|Dixie Cooney|Arlene Vaughan|Maria Santos|Medium|Lena Kundera|Bianca Montgomery|2003|same sex romance|first kiss|Michael Cambias|romantic partner`,
 `Which historic on-screen milestone involved Bianca and Lena Kundera on All My Children in 2003?|A same-sex kiss on US daytime television|The first televised soap divorce|A double wedding in space|A live television birth|Medium|Bianca Montgomery|Lena Kundera|2003|daytime same sex kiss|television milestone|representation|romance`,
 `Who killed Michael Cambias in self-defence in All My Children?|Bianca Montgomery|Erica Kane|Kendall Hart|Greenlee Smythe|Medium|Michael Cambias|Bianca Montgomery|self defence|2003|murder mystery|assault aftermath|crime`,
 `Which character pretended to be pregnant to protect Bianca after Michael Cambias's death in All My Children?|Kendall Hart|Liza Colby|Greenlee Smythe|Maggie Stone|Hard|Kendall Hart|Bianca Montgomery|false pregnancy|2003|family loyalty|Michael Cambias|cover story`,
 `Who was revealed to be the biological father of Bianca Montgomery's daughter Miranda in All My Children?|Michael Cambias|Ryan Lavery|Zach Slater|Leo du Pres|Medium|Miranda Montgomery|Michael Cambias|Bianca Montgomery|2004 birth|paternity|sexual assault|family secret`,
 `Which actress played Babe Carey when she first arrived on All My Children?|Alexa Havins|Amanda Baker|Bobbie Eakes|Chrishell Stause|Easy|Alexa Havins|Babe Carey|2003 arrival|actor casting|JR Chandler|Krystal daughter|new character`,
 `Who was Babe Carey's mother in All My Children?|Krystal Carey|Erica Kane|Marian Colby|Myrtle Fargate|Easy|Babe Carey|Krystal Carey|mother daughter|2003 introduction|family relationship|Chandler mansion|Carey family`,
 `Which actress played Krystal Carey during her 2000s stories in All My Children?|Bobbie Eakes|Julia Barr|Jill Larson|Eileen Herlie|Medium|Bobbie Eakes|Krystal Carey|2003 debut|actor casting|Babe mother|Adam Chandler|family story`,
 `Which actor took over the adult role of JR Chandler in 2003 on All My Children?|Jacob Young|Justin Bruening|Cameron Mathison|Josh Duhamel|Medium|Jacob Young|JR Chandler|2003 recast|Adam Chandler son|actor casting|Babe Carey|Chandler family`,
 `Which character was Babe Carey's main husband during the early-2000s baby-switch plot in All My Children?|JR Chandler|Zach Slater|Ryan Lavery|Jamie Martin|Easy|Babe Carey|JR Chandler|2004|baby switch|marriage|Little Adam|Chandler family`,
 `Who portrayed JR Chandler's half-brother Jamie Martin during the 2000s of All My Children?|Justin Bruening|Jacob Young|Thorsten Kaye|Aiden Turner|Medium|Justin Bruening|Jamie Martin|2003 to 2007|actor casting|Tad Martin son|Babe Carey|Martin family`,
 `Which One Life to Live character arranged the infamous baby switch involving Bianca and Babe on All My Children?|Paul Cramer|Kevin Buchanan|John McBain|Todd Manning|Easy|Paul Cramer|baby switch|2004|One Life to Live crossover|Bianca Montgomery|Babe Carey|helicopter`,
 `What was the name of Bianca Montgomery's baby girl born during the 2004 All My Children storm?|Miranda|Colby|Emma|Maddie|Easy|Miranda Montgomery|Bianca Montgomery|2004|storm delivery|baby daughter|Paul Cramer|newborn`,
 `What name did Babe and JR give the baby girl they raised in All My Children, unaware she was Bianca's?|Bess|Miranda|Colby|Kathy|Medium|Bess Chandler|Miranda Montgomery|2004|false identity|Babe Carey|JR Chandler|baby switch`,
 `Which child's biological mother was Babe Carey in All My Children's 2004 baby-switch story?|Little Adam|Miranda Montgomery|Emma Lavery|Spike Lavery|Hard|Little Adam|Babe Carey|2004|baby boy|JR Chandler|Kelly Cramer|baby switch`,
 `Who raised Babe's baby boy for a time in a crossover with One Life to Live during All My Children?|Kelly Cramer and Kevin Buchanan|Erica Kane and Jackson Montgomery|Dorian Lord and David Vickers|Kendall Hart and Ryan Lavery|Medium|Kelly Cramer|Kevin Buchanan|baby switch|2004|Little Adam|Llanview|One Life to Live`,
 `Which Christmas miracle reunited Bianca with her baby in All My Children?|Erica placed Miranda in Bianca's arms as Bianca lay unconscious|A police helicopter landed at Wildwind|Babe found the child at a hospital nursery|Maggie located the baby overseas|Medium|Bianca Montgomery|Miranda Montgomery|2004 Christmas|Erica Kane|coma recovery|reunion|baby switch`,
 `Who was Bianca's close friend and later romantic partner who moved to Paris with her in All My Children?|Maggie Stone|Greenlee Smythe|Krystal Carey|Liza Colby|Medium|Maggie Stone|Bianca Montgomery|2005|Paris move|romance|Miranda Montgomery|Frankie twin`,
 `Into which wealthy family was Zach Slater born in All My Children?|The Cambias family|The Chandler family|The Cortlandt family|The Martin family|Medium|Zach Slater|Alexander Cambias Jr|2004 debut|family lineage|secret identity|casino owner|wealthy relatives`,
 `Which actor portrayed Zach Slater in All My Children?|Thorsten Kaye|John Callahan|Josh Duhamel|Aiden Turner|Medium|Thorsten Kaye|Zach Slater|2004 to 2009|actor casting|Kendall Hart|Cambias family|lead actor`,
 `Which was Zach Slater's real family identity in All My Children?|Alexander Cambias Jr|Leo du Pres|JR Chandler|Ross Chandler|Hard|Zach Slater|Alexander Cambias Jr|2000s|secret parentage|Cambias family|false name|business empire`,
 `Which woman did Zach Slater marry after their complicated courtship in All My Children?|Kendall Hart|Greenlee Smythe|Maria Santos|Bianca Montgomery|Medium|Zach Slater|Kendall Hart|2005|marriage|romantic partners|Cambias fortune|wedding`,
 `In which US state did Erica Kane and Jackson Montgomery marry in All My Children in 2005?|Florida|California|New York|Hawaii|Easy|Erica Kane|Jackson Montgomery|2005|Florida wedding|marriage|long romance|family celebration`,
 `Which character played by Kelli Giddish posed as Dixie Cooney in All My Children?|Di Henry|Annie Novak|Amanda Dillon|Liza Colby|Hard|Kelli Giddish|Di Henry|2005|Dixie impostor|nanny|actor casting|Chandler household`,
 `Which actress returned to portray Dixie Cooney in 2006 on All My Children?|Cady McClain|Marcy Walker|Julia Barr|Kelly Ripa|Medium|Cady McClain|Dixie Cooney|2006 return|Tad Martin|actor casting|Martin family|reappearance`,
 `Which family hired the woman impersonating Dixie as a nanny in All My Children?|The Chandlers|The Martins|The Cortlandts|The Maricks|Medium|Di Henry|Dixie identity|2005|impostor plot|JR Chandler|Chandler nanny|false return`,
 `Which younger Lavery brother was responsible for Edmund Grey's murder in All My Children?|Jonathan Lavery|Ryan Lavery|Braden Lavery|Aidan Devane|Medium|Jonathan Lavery|Edmund Grey|2005|murder|brain tumour|Ryan Lavery|Wildwind`,
 `Which medical condition helped explain Jonathan Lavery's violent actions in All My Children?|A brain tumour|Leukaemia|Diabetes|A stroke|Medium|Jonathan Lavery|brain tumour|2005|Edmund Grey|violent behaviour|surgery|medical explanation`,
 `Who was the abusive boyfriend Maggie Stone left before reuniting with Bianca in All My Children?|Jonathan Lavery|Zach Slater|JR Chandler|Jamie Martin|Medium|Maggie Stone|Jonathan Lavery|2005|abusive relationship|Bianca Montgomery|romantic breakup|Paris`,
 `Which actor played the young Ethan Cambias in All My Children?|James Scott|Jacob Young|Colin Egglesfield|Cameron Mathison|Hard|James Scott|Ethan Cambias|2004 arrival|actor casting|Zach Slater|Kendall Hart|Cambias fortune`,
 `Which party was the setting of Janet Dillon's deadly 2006 explosion in All My Children?|The Mardi Gras Ball|The Pine Valley Spring Dance|The Chandler Christmas Gala|The Fusion anniversary lunch|Medium|Mardi Gras Ball|Janet Dillon|2006|explosion|Ethan Cambias|Pine Valley tragedy|bombing`,
 `Who planted the bomb that exploded at the Mardi Gras Ball in All My Children?|Janet Dillon|Annie Novak|Erica Kane|Krystal Carey|Medium|Janet Dillon|Mardi Gras Ball|2006|bombing|explosion|Amanda Dillon|criminal plot`,
 `Which young Cambias heir died following the Mardi Gras Ball disaster in All My Children?|Ethan Cambias|Zach Slater|Ryan Lavery|JR Chandler|Medium|Ethan Cambias|Mardi Gras Ball|2006|death|explosion|Zach Slater son|Simone Torres`,
 `Which longtime character did Janet Dillon murder and conceal in a freezer in All My Children?|Trevor Dillon|Jackson Montgomery|Adam Chandler|Palmer Cortlandt|Medium|Trevor Dillon|Janet Dillon|2006|freezer|murder|Amanda Dillon|body discovery`,
 `Which baby was born to Kendall Hart and Ryan Lavery in All My Children?|Spike|Ian|Jamie|Colby|Medium|Spike Lavery|Kendall Hart|Ryan Lavery|2006 birth|emergency delivery|father son|parentage`,
 `Which child was born to Kendall Hart and Zach Slater in All My Children?|Ian|Spike|Miranda|Little Adam|Medium|Ian Slater|Kendall Hart|Zach Slater|2007 premature birth|family|newborn|parents`,
 `Which woman was revealed to be Adam Chandler's daughter after arriving in disguise in 2006's All My Children?|Colby Chandler|Kendall Hart|Annie Novak|Amanda Dillon|Hard|Colby Chandler|Adam Chandler|2006 return|rebellious teenager|secret identity|daughter|Chandler family`,
 `Who was the doctor later revealed to have saved Erica Kane's supposedly aborted son in All My Children?|Greg Madden|Joe Martin|David Hayward|Cliff Warner|Medium|Greg Madden|Josh Madden|Erica Kane|2006 retcon|abortion story|father|doctor`,
 `Which character was revealed as Erica Kane's grown son through a controversial 2006 retcon in All My Children?|Josh Madden|JR Chandler|Spike Lavery|Jamie Martin|Medium|Josh Madden|Erica Kane|2006|retconned child|Greg Madden|family secret|son`,
 `Which actor portrayed Josh Madden in the mid-2000s of All My Children?|Colin Egglesfield|Jacob Young|James Scott|Justin Bruening|Medium|Colin Egglesfield|Josh Madden|2005 to 2009|actor casting|Erica Kane son|Cambias|performer`,
 `Which pop star appeared as herself in a 2006 All My Children episode?|Rihanna|Beyonce|Madonna|Adele|Medium|Rihanna|guest appearance|2006|celebrity cameo|popular music|Fusion event|ABC television`,
 `What was the name of the nightclub opened by Fusion's businesswomen in All My Children?|Confusion|The Goalpost|Foxy's|The Steam Pit|Hard|Confusion nightclub|Fusion Cosmetics|2006|grand opening|Erica Kane|Josh Madden reveal|business venture`,
 `Which actor played musician Zarf, later known as Zoe, in All My Children?|Jeffrey Carlson|Josh Duhamel|James Scott|Vincent Irizarry|Medium|Jeffrey Carlson|Zarf|Zoe|2006 to 2007|actor casting|transgender character|musician`,
 `What name did rock star Zarf adopt as she came out as transgender in All My Children?|Zoe|Babe|Reese|Maggie|Medium|Zoe|Zarf|transgender coming out|2007|Bianca Montgomery|musician|identity`,
 `Who was the first victim of the Satin Slayer in All My Children?|Simone Torres|Dixie Cooney|Babe Carey|Greenlee Smythe|Medium|Simone Torres|Satin Slayer|2006|first murder|Fusion Cosmetics|serial killer|victim`,
 `Which actress played Simone Torres, a victim of the Satin Slayer, on All My Children?|Terri Ivens|Rebecca Budig|Marcy Walker|Bobbie Eakes|Medium|Terri Ivens|Simone Torres|2006|actor casting|Fusion Cosmetics|murder victim|Satin Slayer`,
 `Which other Lavery sibling was killed during the Satin Slayer storyline in All My Children?|Erin Lavery|Ryan Lavery|Jonathan Lavery|Braden Lavery|Hard|Erin Lavery|Satin Slayer|2006|sister|Ryan Lavery|victim|serial killer`,
 `Which businessman was revealed to be the Satin Slayer in All My Children?|Alexander Cambias Sr|Adam Chandler|Palmer Cortlandt|Zach Slater|Medium|Alexander Cambias Sr|Satin Slayer|2007|serial killer reveal|Zach Slater father|family secrets|criminal`,
 `What food was poisoned in the storyline that killed Dixie Cooney in All My Children?|Peanut-butter and banana pancakes|Wedding cake|A bowl of soup|Chocolate truffles|Medium|Dixie Cooney|poisoned pancakes|2007|Satin Slayer|Babe Carey|fatal meal|tragedy`,
 `For whom was the poisoned meal that killed Dixie originally intended in All My Children?|Babe Carey|Erica Kane|Greenlee Smythe|Kendall Hart|Medium|Dixie Cooney|Babe Carey|poisoning|2007|mistaken target|family tragedy|Satin Slayer`,
 `Which character gave birth to Tad Martin's daughter Jenny in All My Children?|Krystal Carey|Dixie Cooney|Brooke English|Liza Colby|Medium|Krystal Carey|Tad Martin|Jenny Martin|2007|baby daughter|parentage secret|Carey family`,
 `Whom did Adam Chandler briefly kidnap and attempt to sell after learning of Krystal's deception in All My Children?|Baby Jenny Martin|Miranda Montgomery|Emma Lavery|Spike Lavery|Medium|Adam Chandler|Jenny Martin|2007|kidnapping|Krystal Carey|black market|revenge`,
 `Which troubled woman was Ryan Lavery's second major wife in the latter 2000s of All My Children?|Annie Novak|Bianca Montgomery|Marian Colby|Natalie Dillon|Easy|Annie Novak|Ryan Lavery|2007 marriage|Emma Lavery|romance|mental health|Lavery family`,
 `Which actress played Annie Novak Lavery on All My Children?|Melissa Claire Egan|Rebecca Budig|Alicia Minshew|Leven Rambin|Easy|Melissa Claire Egan|Annie Novak|2006 debut|actor casting|Ryan Lavery|Emma mother|Lavery marriage`,
 `Which little girl was revealed as Ryan Lavery's biological daughter in All My Children?|Emma|Miranda|Bianca|Amanda|Medium|Emma Lavery|Ryan Lavery|Annie Novak|2007|sperm donation|paternity reveal|father daughter`,
 `Which actress portrayed the original Greenlee Smythe when she returned in 2008 to All My Children?|Rebecca Budig|Sabine Singh|Eden Riegel|Alicia Minshew|Medium|Rebecca Budig|Greenlee Smythe|2008 return|actor comeback|recasting|romance|soap comeback`,
 `Which actress temporarily portrayed Greenlee Smythe before Rebecca Budig's 2008 return to All My Children?|Sabine Singh|Julia Barr|Chrishell Stause|Bobbie Eakes|Medium|Sabine Singh|Greenlee Smythe|2007 to 2008|temporary recast|actor casting|role change|return`,
 `Which two former supercouple characters reunited at a train station in All My Children in 2008?|Jesse and Angie Hubbard|Tad and Dixie Martin|Leo and Greenlee|Cliff and Nina Warner|Easy|Jesse Hubbard|Angie Hubbard|2008|train station reunion|believed dead|supercouple|romance`,
 `Who had been believed dead for almost two decades before returning to Angie in All My Children?|Jesse Hubbard|Greg Nelson|Edmund Grey|Palmer Cortlandt|Medium|Jesse Hubbard|Angie Hubbard|2008 return|1988 shooting|resurrection|family reunion|police officer`,
 `Which actress returned as Angie Hubbard in 2008's All My Children?|Debbi Morgan|Eden Riegel|Julia Barr|Marcy Walker|Easy|Debbi Morgan|Angie Hubbard|2008 return|actor casting|Jesse Hubbard|reunion|physician`,
 `Which actor returned as Jesse Hubbard in 2008's All My Children?|Darnell Williams|Keith Hamilton Cobb|Michael E Knight|David Canary|Easy|Darnell Williams|Jesse Hubbard|2008 return|actor casting|Angie Hubbard|supercouple|police officer`,
 `Which returning character married Angie Hubbard again in 2008 on All My Children?|Jesse Hubbard|Frankie Hubbard|Ryan Lavery|David Hayward|Easy|Jesse Hubbard|Angie Hubbard|2008 remarriage|ceremony|supercouple|romantic return|family`,
 `Which actress portrayed Cassandra Foster, Angie's adopted daughter, during the 2008 return storyline in All My Children?|Yaya DaCosta|Leven Rambin|Eden Riegel|Amanda Baker|Hard|Yaya DaCosta|Cassandra Foster|2008|actor casting|Angie Hubbard|adopted daughter|family`,
 `Which daughter of Jesse Hubbard and Rebecca Fowler entered his life in 2008's All My Children?|Natalia Fowler|Cassandra Foster|Emma Lavery|Colby Chandler|Hard|Natalia Fowler|Jesse Hubbard|Rebecca Fowler|2008|paternity|daughter|family secret`,
 `Which natural disaster caused the death of Babe Carey in All My Children in 2008?|A tornado|A flood|An earthquake|A blizzard|Easy|Babe Carey|2008 tornado|death|JR Chandler|Krystal Carey|natural disaster|hospital chapel`,
 `Which actress took over as Babe Carey in 2007 before the character's death in All My Children?|Amanda Baker|Alexa Havins|Bobbie Eakes|Kelly Ripa|Medium|Amanda Baker|Babe Carey|2007 recast|2008 death|actor casting|JR Chandler|later portrayal`,
 `Which special milestone did All My Children celebrate in November 2008?|Its 10000th episode|Its 5000th episode|Its 25th anniversary|Its first live broadcast|Easy|10000th episode|November 2008|soap milestone|Agnes Nixon|celebration|broadcast history|retrospective`,
 `Which late All My Children actress was honoured with a tribute episode in December 2008?|Eileen Herlie|Ruth Warrick|Mary Fickett|Frances Heflin|Medium|Eileen Herlie|Myrtle Fargate|December 2008|tribute episode|deceased performer|cast history|memorial`,
 `Which All My Children character married Reese Williams in a televised same-sex wedding in 2009?|Bianca Montgomery|Kendall Hart|Greenlee Smythe|Marian Colby|Easy|Bianca Montgomery|Reese Williams|February 2009|same sex marriage|lesbian storyline|wedding|representation`,
 `What was Reese Williams's profession when she became involved with Bianca in All My Children?|Architect|Cardiologist|Journalist|Fashion model|Medium|Reese Williams|Bianca Montgomery|2009|occupation|architect|same sex wedding|romance`,
 `Which actress portrayed architect Reese Williams on All My Children?|Tamara Braun|Eden Riegel|Rebecca Budig|Melissa Claire Egan|Medium|Tamara Braun|Reese Williams|2008 to 2009|actor casting|Bianca Montgomery|architect|wedding`,
 `Which daughter did Bianca and Reese welcome through a sperm donation from Zach in All My Children?|Gabrielle|Miranda|Emma|Colby|Medium|Gabrielle Montgomery|Bianca Montgomery|Reese Williams|Zach Slater|2008 birth|donor|family`,
 `Which character provided the sperm donation for Bianca and Reese's second child in All My Children?|Zach Slater|Ryan Lavery|David Hayward|JR Chandler|Medium|Zach Slater|Bianca Montgomery|Reese Williams|Gabrielle|2008|sperm donation|family tension`,
 `Which character needed a heart transplant after Josh Madden was shot in 2009's All My Children?|Kendall Hart|Erica Kane|Bianca Montgomery|Annie Novak|Medium|Kendall Hart|Josh Madden|2009|heart transplant|Zach Slater|David Hayward|organ donation`,
 `Whose heart was donated to save Kendall's life after a shooting in All My Children?|Josh Madden's|David Hayward's|Ian Slater's|Stuart Chandler's|Medium|Josh Madden|Kendall Hart|2009|organ transplant|Zach Slater|Erica Kane|medical tragedy`,
 `Which character was shot and believed killed in a 2009 All My Children plot, though later revealed alive?|Stuart Chandler|Adam Chandler|Zach Slater|Ryan Lavery|Medium|Stuart Chandler|2009|shooting|presumed dead|Adam twin|later resurrection|Chandler mansion`,
 `Which actress returned to the role of Liza Colby in 2009's All My Children?|Jamie Luner|Marcy Walker|Jennifer Bassey|Kelly Ripa|Medium|Jamie Luner|Liza Colby|2009 recast|actor casting|Colby Chandler|return|lawyer`,
 `What was the name Liza Colby gave the baby boy she claimed as her son in All My Children in 2009?|Stuart|Adam|Jamie|Ian|Hard|Liza Colby|baby Stuart|2009|Jake Martin|Amanda Dillon|false birth|family secret`,
 `Which woman was the biological mother of the baby Liza Colby passed off as hers in 2009's All My Children?|Amanda Dillon|Babe Carey|Annie Novak|Krystal Carey|Medium|Amanda Dillon|Liza Colby|2009|baby switch|Jake Martin|birth mother|child`,
 `Who was revealed to be the father of Amanda Dillon's baby in All My Children in 2009?|David Hayward|Jake Martin|JR Chandler|Tad Martin|Medium|Amanda Dillon|David Hayward|2009|baby parentage|Liza Colby|Jake Martin|paternity`,
 `Which character was believed killed in a motorcycle crash before making a later return in All My Children?|Greenlee Smythe|Bianca Montgomery|Erica Kane|Liza Colby|Medium|Greenlee Smythe|motorcycle crash|February 2009|river ravine|Ryan Lavery|presumed dead|later comeback`,
 `Which actress played Annie Lavery during her 2009 relationship with Adam Chandler in All My Children?|Melissa Claire Egan|Tamara Braun|Eden Riegel|Alicia Minshew|Medium|Melissa Claire Egan|Annie Lavery|2009|Adam Chandler|actor casting|marital turmoil|romance`,
 `Which family name belonged to both wealthy twin brothers Adam and Stuart in All My Children?|Chandler|Cortlandt|Martin|Marick|Easy|Adam Chandler|Stuart Chandler|twins|wealthy family|2009|family name|business dynasty`,
 `Which former head writer returned on an interim basis to guide All My Children late in 2009?|Lorraine Broderick|Megan McTavish|Agnes Nixon|Gloria Monty|Hard|Lorraine Broderick|2009|interim head writer|Charles Pratt Jr|production change|creative team|soap writers`
 ];

 const questions = rows.map((row, index) => {
   const parts = row.split('|').map(part => part.trim());
   if (parts.length !== 13 || parts.some(part => !part)) {
     throw new Error(`Pack 417: malformed row ${index + 1} (${parts.length} fields)`);
   }
   const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
   if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
     throw new Error(`Pack 417: invalid difficulty at row ${index + 1}`);
   }
   const question = stem.includes('All My Children')
     ? stem
     : `In All My Children, ${stem[0].toLowerCase()}${stem.slice(1)}`;
   const answers = [wrong1, wrong2, wrong3];
   answers.splice(index % 4, 0, correctAnswer);
   if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
     throw new Error(`Pack 417: duplicate answer option at row ${index + 1}`);
   }
   const tags = [...new Set([...commonTags, ...specificTags])];
   if (tags.length !== 13 || new Set(tags.map(tag => tag.toLowerCase())).size !== 13) {
     throw new Error(`Pack 417: expected 13 distinct tags at row ${index + 1}`);
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
