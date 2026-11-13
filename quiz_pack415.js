
 // PuzzlePilot - Big Quiz - Pack 415
 // All My Children: 1980-1989 (ABC daytime soap).
 // Major families, actors, relationships and decade-defining storylines.
 // The 1970s are in Pack 414; the 1990s will follow in Pack 416.
 // Complete WordPad-ready CommonJS file. First ID: tv_23414.
 'use strict';

 const FIRST_ID = 23414;
 const commonTags = [
   'television', 'All My Children', 'American soap opera',
   'Pine Valley', 'ABC daytime', '1980s storylines'
 ];

 // Question | correct | three incorrect | difficulty | seven question-specific tags.
 // Answer positions alternate automatically. Each exported question names the programme.
 const rows = [
   `Which actress portrayed Jenny Gardner during All My Children's early-1980s supercouple era?|Kim Delaney|Marcy Walker|Taylor Miller|Cady McClain|Easy|Kim Delaney|Jenny Gardner|1981 debut|Greg Nelson|actor casting|young romance|Gardner family`,
   `Which actor portrayed Greg Nelson in All My Children's famous 1980s romance with Jenny?|Laurence Lau|Michael E Knight|Darnell Williams|Peter Bergman|Easy|Laurence Lau|Greg Nelson|Jenny Gardner|supercouple|actor casting|1981 debut|Nelson family`,
   `Which actor became especially associated with the grown-up Tad Martin in All My Children?|Michael E. Knight|Richard Hatch|David Canary|Peter White|Easy|Michael E Knight|Tad Martin|1980s recast|adopted Martin son|actor casting|Tad the Cad|romantic lead`,
   `Which actress originated the scheming Liza Colby in All My Children during the 1980s?|Marcy Walker|Jennifer Bassey|Julia Barr|Susan Lucci|Easy|Marcy Walker|Liza Colby|original actress|teenage rival|1981 arrival|Jenny Gardner|actor casting`,
   `Who played Jesse Hubbard in the 1980s of All My Children?|Darnell Williams|Michael E Knight|David Canary|Richard Shoberg|Easy|Darnell Williams|Jesse Hubbard|1981 arrival|Angie Baxter|supercouple|actor casting|police officer`,
   `Which actress played Angie Baxter Hubbard during All My Children's 1980s?|Debbi Morgan|Kim Delaney|Dorothy Lyman|Marcy Walker|Easy|Debbi Morgan|Angie Baxter|Jesse Hubbard|1982 arrival|doctor|actor casting|Hubbard family`,
   `Which actor played both Adam Chandler and his twin brother Stuart in All My Children?|David Canary|James Mitchell|Ray MacDonnell|Louis Edmonds|Easy|David Canary|Adam Chandler|Stuart Chandler|identical twins|dual role|1983 arrival|actor casting`,
   `Which actress played the first 1980s version of Opal Gardner in All My Children?|Dorothy Lyman|Jill Larson|Jennifer Bassey|Gillian Spencer|Medium|Dorothy Lyman|Opal Gardner|1981 arrival|Jenny mother|Tad mother|original casting|early 1980s`,
   `Which actress took over the role of Opal Gardner when she returned in 1989 on All My Children?|Jill Larson|Dorothy Lyman|Ruth Warrick|Eileen Herlie|Medium|Jill Larson|Opal Gardner|1989 return|recasting|Glamorama owner|Gardner family|actor casting`,
   `Which actress played Marian Colby, Liza's mother, in the 1980s of All My Children?|Jennifer Bassey|Marcy Walker|Gillian Spencer|Mary Fickett|Medium|Jennifer Bassey|Marian Colby|Liza mother|Tad affair|Zach Grayson|1980s actor|casting`,
   `Which actor played Cliff Warner during his tumultuous 1980s relationship with Nina in All My Children?|Peter Bergman|James Mitchell|Michael E Knight|David Canary|Medium|Peter Bergman|Cliff Warner|Nina Cortlandt|surgeon|1980s romance|actor casting|marriage`,
   `Which actress played Nina Cortlandt in most of the 1980s on All My Children?|Taylor Miller|Kim Delaney|Cady McClain|Julia Barr|Medium|Taylor Miller|Nina Cortlandt|Palmer daughter|Cliff Warner|romantic story|actor casting|1980s`,
   `What was the name of Erica Kane's disco that struggled for business in early-1980s All My Children?|Erica's|The Goalpost|Foxy's|The Chateau|Medium|Ericas disco|nightclub|1980|Erica Kane|business closure|entertainment venue|venue name`,
   `Which rival nightclub drew customers away from Erica Kane's disco in All My Children?|The Steam Pit|The Goalpost|The Glamorama|The Chandler Club|Medium|Steam Pit|Erica nightclub|1980|competition|business failure|nightlife|rival business`,
   `Which restriction contributed to the closure of Erica Kane's disco in All My Children?|No music after midnight|No dancing on Sundays|No serving food after eight|No live bands on weekdays|Medium|disco closure|city rezoning|1980|Erica Kane|midnight music restriction|nightclub regulation|business failure`,
   `Which cosmetics tycoon offered Erica Kane a top modelling job as her marriage to Tom collapsed in All My Children?|Brandon Kingsley|Kent Bogard|Adam Chandler|Palmer Cortlandt|Medium|Brandon Kingsley|Sensuelle Cosmetics|Erica Kane|1980|modelling contract|business relationship|Tom Cudahy`,
   `Who did Tom Cudahy plan to marry after his divorce from Erica Kane in All My Children?|Brooke English|Liza Colby|Donna Beck|Jenny Gardner|Medium|Tom Cudahy|Brooke English|1980|post divorce romance|Erica Kane|relationship|planned wedding`,
   `Which woman had a child with Cliff Warner, complicating his marriage to Nina in All My Children?|Sybil Thorne|Daisy Cortlandt|Donna Beck|Marian Colby|Medium|Sybil Thorne|Cliff Warner|pregnancy|1981 birth|Nina Cortlandt|love triangle|child`,
   `Who was revealed as Eddie Dorrance's murderer, saving Kelly Cole from a death sentence in All My Children?|Claudette Montgomery|Myrtle Fargate|Phoebe Tyler|Brooke English|Medium|Claudette Montgomery|Eddie Dorrance|Kelly Cole|1980|murder confession|Lincoln Tyler|death row`,
   `What job did an amnesiac Palmer Cortlandt take after being robbed in All My Children?|Busboy at Foxy's|Driver at a taxi depot|Cleaner at Pine Valley Hospital|Barman at the Goalpost|Medium|Palmer Cortlandt|amnesia|Foxys bar|1981|busboy|mugging|wealthy businessman`,
   `Which character was revealed to be Nina Cortlandt's supposedly dead mother in All My Children?|Daisy Cortlandt|Phoebe Tyler|Mona Kane|Opal Gardner|Medium|Daisy Cortlandt|Nina mother|1981|family secret|Cortlandt family|return from presumed death|reunion`,
   `What name did Daisy Cortlandt use while befriending her daughter Nina in All My Children?|Monique Jonville|Claudette Montgomery|Margo Flax|Cynthia Preston|Hard|Monique Jonville|Daisy Cortlandt|alias|1981|Nina Cortlandt|concealed identity|mother daughter`,
   `Who actually killed nurse Sybil Thorne in All My Children, after Cliff Warner was accused?|Sean Cudahy|Palmer Cortlandt|Greg Nelson|Tad Martin|Medium|Sybil Thorne|Sean Cudahy|murder|1981|Cliff Warner|wrongful accusation|courtroom confession`,
   `Which young woman was killed by a bomb meant for her politician husband in 1981's All My Children?|Ann Tyler|Jenny Gardner|Donna Beck|Kitty Shea|Medium|Ann Tyler|bomb explosion|1981|political target|Paul Martin|Tyler family|character death`,
   `Who was the woman Brooke English had believed was her mother before learning of her drug-cartel role in All My Children?|Peg English|Daisy Cortlandt|Myrtle Fargate|Opal Gardner|Medium|Peg English|Brooke English|Cobra|1981|drug cartel|family secret|mother identity`,
   `What was the codename used by the drug-cartel leader linked to Brooke's mother in All My Children?|Cobra|Scorpion|Viper|Falcon|Hard|Cobra|Peg English|drug cartel|1981|Brooke English|criminal organization|secret identity`,
   `Which mother arrived in Pine Valley with daughter Jenny Gardner in the early 1980s of All My Children?|Opal Gardner|Mona Kane|Marian Colby|Daisy Cortlandt|Easy|Opal Gardner|Jenny Gardner|1981 arrival|mother daughter|Gardner family|family arrival|new characters`,
   `Which young man from a prosperous family became Jenny Gardner's great love in All My Children?|Greg Nelson|Tad Martin|Jesse Hubbard|Cliff Warner|Easy|Jenny Gardner|Greg Nelson|1981|young romance|class difference|supercouple|Nelson family`,
   `Which man's wife Sara refused to divorce him during his romance with Erica in All My Children?|Brandon Kingsley|Kent Bogard|Tom Cudahy|Adam Chandler|Medium|Brandon Kingsley|Sara Kingsley|Erica Kane|1981|married tycoon|Sensuelle Cosmetics|love triangle`,
   `Which family name belonged to the wealthy cosmetics businessmen Lars and Kent in All My Children?|Bogard|Cortlandt|Chandler|Kingsley|Medium|Lars Bogard|Kent Bogard|cosmetics empire|1982|Erica Kane|family business|father son`,
   `Which wealthy man married Donna Beck before the birth of her son in the early 1980s of All My Children?|Palmer Cortlandt|Adam Chandler|Tom Cudahy|Langley Wallingford|Medium|Donna Beck|Palmer Cortlandt|1982|marriage|Cortlandt Manor|pregnancy|Chuck Tyler`,
   `Which former husband of Donna was the biological father of her baby conceived during a Swiss holiday in All My Children?|Chuck Tyler|Palmer Cortlandt|Benny Sago|Tom Cudahy|Medium|Chuck Tyler|Donna Beck|Switzerland|1982|paternity|Palmer Cortlandt|son birth`,
   `What earlier accident had left Palmer Cortlandt unable to father children in All My Children?|A polo accident|A car crash|A plane crash|A horse-racing fall|Hard|Palmer Cortlandt|sterility|polo accident|1982|Donna pregnancy|paternity secret|medical backstory`,
   `Which character falsely accused Jesse Hubbard of rape in the early 1980s of All My Children?|Liza Colby|Jenny Gardner|Tara Martin|Brooke English|Medium|Liza Colby|Jesse Hubbard|false accusation|1982|Jenny Gardner|teenage rivalry|injustice`,
   `In which city did Jenny Gardner and Jesse Hubbard spend a memorable summer after leaving Pine Valley in All My Children?|New York City|Chicago|Los Angeles|Boston|Easy|Jenny Gardner|Jesse Hubbard|New York summer|1982|runaways|friendship|young adult storyline`,
   `What relationship linked Jesse Hubbard to Dr Frank Grant in All My Children?|Jesse was Frank's nephew|Jesse was Frank's brother|Jesse was Frank's son|Jesse was Frank's cousin|Medium|Jesse Hubbard|Frank Grant|uncle nephew|1982|family connection|Grant family|streetwise youth`,
   `Which imprisoned man was revealed as Jenny Gardner's father after Liza confronted her in All My Children?|Ray Gardner|Joe Martin|Palmer Cortlandt|Nick Davis|Medium|Jenny Gardner|Ray Gardner|biological father|1982|Liza Colby|Ruth Martin assault|family revelation`,
   `Which young woman became Jenny Gardner's rival for Greg Nelson's affection in All My Children?|Liza Colby|Nina Cortlandt|Donna Beck|Kelly Cole|Easy|Liza Colby|Jenny Gardner|Greg Nelson|romantic rivalry|1982|scheming teenager|supercouple`,
   `What name did the newcomer who claimed to be Erica Kane's half-sister use in All My Children?|Silver Kane|Skye Chandler|Dixie Cooney|Daisy Cortlandt|Medium|Silver Kane|Erica Kane|claimed half sister|1982|impostor|Kent Bogard|family secret`,
   `Which Cortlandt Electronics colleague had an affair with Nina Warner in All My Children?|Steve Jacobi|Cliff Warner|Matt Connelly|Ross Chandler|Medium|Steve Jacobi|Nina Cortlandt|1982|workplace affair|Cortlandt Electronics|Cliff Warner|marriage crisis`,
   `Which student became involved with married professor Mark Dalton in All My Children?|Pamela Kingsley|Jenny Gardner|Liza Colby|Cecily Davidson|Medium|Pamela Kingsley|Mark Dalton|1982|student affair|Ellen Dalton|university scandal|music professor`,
   `Which member of the Gardner family died while removing a bomb from the Martins' house in All My Children?|Ray Gardner|Tad Martin|Opal Gardner|Greg Nelson|Medium|Ray Gardner|New Years bomb|1983|Martin household|Jenny Gardner|self sacrifice|character death`,
   `Which character's presence in the Martin house made Ray Gardner carry his own bomb away in All My Children?|Jenny Gardner|Liza Colby|Erica Kane|Nina Cortlandt|Medium|Jenny Gardner|Ray Gardner|1983|bomb plot|daughter|Martin home|family protection`,
   `Which writer was Erica Kane's lover before being sent on a Tibet assignment in All My Children?|Mike Roy|Jeremy Hunter|Brandon Kingsley|Travis Montgomery|Medium|Mike Roy|Erica Kane|Tibet assignment|1984|Adam Chandler scheme|writer|romance`,
   `Which man died when a gun discharged during a confrontation with Erica in All My Children?|Kent Bogard|Lars Bogard|Brandon Kingsley|Mark Dalton|Medium|Kent Bogard|Erica Kane|Silver Kane|1983|hotel room|accidental shooting|murder investigation`,
   `How did Erica Kane disguise herself to attend Kent Bogard's memorial service in All My Children?|As a nun|As a police officer|As a nurse|As a flight attendant|Hard|Erica Kane|nun disguise|Kent Bogard|1983|memorial service|fugitive|criminal charges`,
   `Who identified the purported Silver Kane as an impostor in All My Children?|Tad Martin|Joe Martin|Greg Nelson|Nick Davis|Medium|Tad Martin|Silver Kane|1983|impostor exposed|Erica cleared|photograph|criminal investigation`,
   `What was the real identity of the first Silver Kane impostor in All My Children?|Connie Wilkes|Cynthia Preston|Margo Flax|Marian Colby|Hard|Connie Wilkes|Silver Kane|1983|false sister|California grifter|Erica Kane|secret identity`,
   `Which beauty campaign did Erica lose after the Kent Bogard scandal in All My Children?|An American Beauty|Sensuelle Star|Glamorama Girl|Faces of Pine Valley|Hard|An American Beauty|Erica Kane|Lars Bogard|1983|cosmetics campaign|publicity scandal|lost contract`,
   `Which woman was caught with Steve Jacobi by her husband Cliff in All My Children?|Nina Cortlandt|Angie Hubbard|Erica Kane|Brooke English|Medium|Nina Cortlandt|Steve Jacobi|Cliff Warner|1983|marital infidelity|apartment discovery|divorce`,
   `Which man tried to marry Jenny Gardner after Greg Nelson believed their romance was finished in All My Children?|Tony Barclay|Jesse Hubbard|Tad Martin|Cliff Warner|Medium|Tony Barclay|Jenny Gardner|Greg Nelson|1984|wedding interrupted|love triangle|romantic rival`,
   `Which member of Greg Nelson's family hid a love letter Jenny had sent him in All My Children?|His mother Enid|His father Joe|His sister Liza|His aunt Phoebe|Medium|Enid Nelson|Greg Nelson|Jenny Gardner|hidden love letter|1984|family interference|romance`,
   `What temporary physical disability caused Greg Nelson to push Jenny away in All My Children?|Paralysis|Blindness|Deafness|Amnesia|Medium|Greg Nelson|paralysis|1984|Jenny Gardner|romantic sacrifice|injury recovery|separation`,
   `What happened when Greg arrived at Jenny's planned wedding to Tony Barclay in All My Children?|He stopped the ceremony|He fainted before speaking|He announced he was engaged to Liza|He left without seeing Jenny|Medium|Greg Nelson|Tony Barclay|Jenny Gardner|1984|wedding interruption|reconciliation|church scene`,
   `On which romantic holiday did Greg Nelson and Jenny Gardner marry in All My Children?|Valentine's Day|Christmas Day|New Year's Day|Independence Day|Medium|Greg Nelson|Jenny Gardner|Valentines Day|1984|wedding|supercouple|romance`,
   `What type of vehicle was sabotaged in the plot that killed Jenny Gardner in All My Children?|A jet ski|A helicopter|A speedboat|A motorbike|Medium|Jenny Gardner|jet ski|Tony Barclay|1984|fatal explosion|Greg Nelson|tragic death`,
   `Who originally intended to kill Greg Nelson by sabotaging a jet ski in All My Children?|Tony Barclay|Tad Martin|Adam Chandler|Ray Gardner|Medium|Tony Barclay|Greg Nelson|Jenny Gardner|1984|jet ski sabotage|revenge|murder plot`,
   `Which wealthy businessman secretly engineered Mike Roy's overseas writing assignment in All My Children?|Adam Chandler|Palmer Cortlandt|Brandon Kingsley|Langley Wallingford|Medium|Adam Chandler|Mike Roy|1984|Tibet assignment|Erica Kane|romantic manipulation|wealthy rival`,
   `Which secret family member was hidden in the west wing of Adam Chandler's mansion in All My Children?|His twin Stuart|His father Palmer|His son JR|His uncle Langley|Easy|Stuart Chandler|Adam Chandler|identical twin|1984|west wing|Chandler mansion|family secret`,
   `Which twin brother of Adam Chandler was known for his gentler and artistic personality in All My Children?|Stuart Chandler|Ross Chandler|Palmer Cortlandt|Travis Montgomery|Easy|Stuart Chandler|Adam twin|kindness|artist|1984 arrival|character contrast|Chandler family`,
   `Which woman paid Tad Martin to date her daughter Dottie in All My Children?|Edna Sago|Phoebe Tyler|Opal Gardner|Myrtle Fargate|Medium|Edna Sago|Tad Martin|Dottie Thornton|1984|paid dating|parental scheme|secret arrangement`,
   `Which young woman married Tad while he remained in love with Hillary in All My Children?|Dottie Thornton|Liza Colby|Jenny Gardner|Cecily Davidson|Medium|Dottie Thornton|Tad Martin|1984|Hillary Wilson|marriage|romantic conflict|pregnancy`,
   `Which woman did Tad Martin love during his troubled marriage to Dottie in All My Children?|Hillary Wilson|Jenny Gardner|Nina Cortlandt|Donna Beck|Medium|Hillary Wilson|Tad Martin|Dottie Thornton|1984|college student|romantic triangle|Langley daughter`,
   `Which rich socialite's daughter Hillary came to Pine Valley in All My Children?|Langley Wallingford's|Palmer Cortlandt's|Adam Chandler's|Joe Martin's|Medium|Hillary Wilson|Langley Wallingford|father daughter|1984|Phoebe Tyler|Wallingford family|relationship`,
   `What false event did Adam Chandler stage to test Erica's feelings in All My Children?|His own death|His kidnapping|A corporate bankruptcy|His twin's marriage|Medium|Adam Chandler|faked death|Erica Kane|1985|Mike Roy|marriage test|deception`,
   `Which magazine hired Erica Kane as editor in the mid-1980s of All My Children?|Tempo|Glamour|Vogue|The Bulletin|Medium|Tempo magazine|Erica Kane|editor|1985|publishing career|Jeremy Hunter|fashion media`,
   `Which murder led to Daisy Cortlandt's wrongful conviction in All My Children?|Zach Grayson's|Kent Bogard's|Eddie Dorrance's|Sybil Thorne's|Medium|Zach Grayson|Daisy Cortlandt|1985|false conviction|criminal trial|murder mystery|Marian Colby`,
   `Who was eventually revealed as Zach Grayson's killer in All My Children?|Marian Colby|Donna Beck|Daisy Cortlandt|Nina Cortlandt|Medium|Marian Colby|Zach Grayson|1985|murder confession|Daisy cleared|Liza mother|criminal case`,
   `What distinctive clue helped Donna recall the identity of Zach Grayson's killer in All My Children?|An upside-down initial on a handbag|A torn theatre ticket|A silver bracelet|A missing diamond earring|Hard|Donna Beck|handbag initial|M looks like W|1985|Marian Colby|Zach Grayson|recovered memory`,
   `Which woman tried to shoot Donna Beck at Donna's wedding to Benny in All My Children?|Nina Cortlandt|Brooke English|Liza Colby|Myrtle Fargate|Medium|Nina Cortlandt|Donna Beck|Benny Sago|1985|wedding shooting|mental crisis|failed attack`,
   `Which man with a religious vow became romantically involved with Erica Kane after arriving from Tibet in All My Children?|Jeremy Hunter|Mike Roy|Travis Montgomery|Kent Bogard|Medium|Jeremy Hunter|Erica Kane|Tibet|1985|vow of celibacy|Tempo magazine|romance`,
   `What religious commitment prevented Jeremy Hunter from initially pursuing Erica physically in All My Children?|A vow of celibacy|A vow of silence|A pledge of poverty only|A ban on travelling|Medium|Jeremy Hunter|vow of celibacy|Tibetan monk|1985|Erica Kane|romantic obstacle|religious commitment`,
   `Which medical lecturer sexually harassed Angie Hubbard while she studied medicine in All My Children?|Dr John Voight|Dr Joe Martin|Dr Cliff Warner|Dr Frank Grant|Medium|John Voight|Angie Hubbard|1985|medical student|sexual harassment|faculty misconduct|dismissal`,
   `Which beloved member of the Martin family died peacefully in her sleep in All My Children in the mid-1980s?|Kate Martin|Ruth Martin|Tara Martin|Mary Kennicott|Medium|Kate Martin|1985|family matriarch|Joe Martin mother|natural death|memorial|Martin family`,
   `Which Tibetan religious leader released Jeremy Hunter from his celibacy vow in All My Children?|Kantu|Lars Bogard|Alex Hunter|Brandon Kingsley|Hard|Kantu|Jeremy Hunter|1986|Tibetan leader|religious vow|Erica Kane|permission`,
   `Which woman falsely claimed Jeremy Hunter had fathered her baby in All My Children?|Natalie Hunter|Erica Kane|Silver Kane|Daisy Cortlandt|Medium|Natalie Hunter|Jeremy Hunter|1986|false paternity|Alex Hunter|marriage manipulation|pregnancy`,
   `Who was the actual father of Natalie's baby during her early involvement with Jeremy Hunter in All My Children?|Alex Hunter|Jeremy Hunter|Palmer Cortlandt|Mike Roy|Medium|Natalie Hunter|Alex Hunter|1986|pregnancy|Jeremy Hunter|paternity deception|family conflict`,
   `Which doctor died after being hit by a drunken driver, leaving Cliff Warner devastated in All My Children?|Amy Stone|Angie Hubbard|Ruth Martin|Ellen Dalton|Medium|Amy Stone|Cliff Warner|1986|drunk driver|fiancee|hospital surgery|tragic death`,
   `Where were Tad Martin and Robin McCall trapped on the morning of his wedding to Hillary in All My Children?|A bank vault|A locked railway carriage|A lift at a hotel|A disused cellar|Medium|Tad Martin|Robin McCall|1986|bank robbery|vault|Hillary Wilson|wedding delay`,
   `Which young woman did Tad Martin finally marry at the Wallingford mansion in All My Children?|Hillary Wilson|Liza Colby|Dottie Thornton|Jenny Gardner|Medium|Tad Martin|Hillary Wilson|1986|Wallingford mansion|wedding|bank hold up|romantic milestone`,
   `Who was the swindler who tricked Phoebe Tyler into marriage during a Caribbean trip in All My Children?|Wade Mathews|Billy Clyde Tuggle|Sean Cudahy|Ray Gardner|Medium|Wade Mathews|Phoebe Tyler|1986|Caribbean wedding|con man|Langley Wallingford|elder abuse`,
   `What disguise did con man Wade Mathews use while attempting to leave Pine Valley in All My Children?|Women's clothing|A policeman's uniform|A priest's robe|A surgeon's coat|Hard|Wade Mathews|Phoebe Tyler|1986|escape disguise|fraud|police pursuit|criminal plot`,
   `Which woman married Matt Connelly after believing her former husband Cliff Warner had died in All My Children?|Nina Cortlandt|Brooke English|Erica Kane|Natalie Hunter|Medium|Nina Cortlandt|Matt Connelly|1987|Cliff Warner|presumed death|hasty marriage|romantic confusion`,
   `Where was Cliff Warner believed killed while delivering medical supplies in All My Children?|A war-torn South American country|A remote Himalayan village|A European capital|A Pacific island|Medium|Cliff Warner|medical relief|1987|South America|false death report|hostage|Nina Cortlandt`,
   `Which woman claimed Jesse Hubbard fathered her baby before admitting she was lying in All My Children?|Yvonne Caldwell|Cindy Parker|Angie Baxter|Dixie Cooney|Medium|Yvonne Caldwell|Jesse Hubbard|1987|false paternity|Angie Hubbard|former girlfriend|pregnancy claim`,
   `Which secret operation did Jesse Hubbard infiltrate during his work in All My Children?|An illegal baby-selling ring|A counterfeit art business|A bank robbery gang|A drug-smuggling airline|Medium|Jesse Hubbard|undercover|baby selling ring|1987|police investigation|Les Baxter|criminal network`,
   `Who turned out to be the head of the baby-selling ring investigated by Jesse in All My Children?|Les Baxter|Adam Chandler|Palmer Cortlandt|Ray Gardner|Medium|Les Baxter|Mr Big|1987|baby trafficking|Jesse Hubbard|Angie father|criminal investigation`,
   `What family relationship connected Les Baxter and Angie Hubbard in All My Children?|Father and daughter|Uncle and niece|Brother and sister|Grandfather and granddaughter|Medium|Les Baxter|Angie Hubbard|father daughter|1987|baby selling ring|Jesse Hubbard|family conflict`,
   `Which musician in Erica Kane's family entered rehabilitation for cocaine addiction in All My Children?|Mark Dalton|Mike Roy|Tom Cudahy|Nick Davis|Medium|Mark Dalton|cocaine addiction|1987|intervention|Erica Kane|rehabilitation|family support`,
   `Which young widow arrived in Pine Valley with her son Scott and fell in love with Stuart Chandler in All My Children?|Cindy Parker|Marian Colby|Dixie Cooney|Natalie Hunter|Medium|Cindy Parker|Scott Parker|1987|Stuart Chandler|single mother|new arrival|artist romance`,
   `What role did Stuart Chandler have in Scott's life when he first met Cindy Parker in All My Children?|Scott's art teacher|Scott's doctor|Scott's football coach|Scott's legal guardian|Medium|Stuart Chandler|Scott Parker|art teacher|1987|Cindy Parker|new relationship|painting`,
   `Which politician became romantically involved with Erica Kane in the late 1980s of All My Children?|Travis Montgomery|Adam Chandler|Palmer Cortlandt|Tom Cudahy|Medium|Travis Montgomery|Erica Kane|1987|senatorial candidate|romance|Bianca father|political career`,
   `Which woman gave birth to Bianca Montgomery in All My Children?|Erica Kane|Brooke English|Angie Hubbard|Dixie Cooney|Easy|Erica Kane|Bianca Montgomery|1988|mother daughter|Travis Montgomery|birth storyline|Kane family`,
   `Which condition complicated Erica's pregnancy before Bianca's birth in All My Children?|Toxemia|Diabetes|Measles|Appendicitis|Medium|Erica Kane|Bianca birth|toxemia|1988|pregnancy complication|Travis Montgomery|hospital`,
   `Which man was Bianca's father in the late-1980s All My Children?|Travis Montgomery|Adam Chandler|Mike Roy|Jeremy Hunter|Medium|Bianca Montgomery|Travis Montgomery|Erica Kane|1988|father daughter|political candidate|family`,
   `Which character was diagnosed with AIDS after arriving in Pine Valley in All My Children?|Cindy Parker|Dixie Cooney|Marian Colby|Jenny Gardner|Medium|Cindy Parker|AIDS storyline|1988|Stuart Chandler|Angie Hubbard|HIV stigma|social issue`,
   `Who stood by Cindy Parker and married her despite widespread prejudice in All My Children?|Stuart Chandler|Adam Chandler|Jesse Hubbard|Cliff Warner|Medium|Stuart Chandler|Cindy Parker|1988|wedding|AIDS stigma|Scott Parker|compassion`,
   `Which character helped Cindy escape from an arson attack by a hate group in All My Children?|Skye Chandler|Erica Kane|Nina Cortlandt|Myrtle Fargate|Medium|Skye Chandler|Cindy Parker|1988|arson rescue|vigilantes|AIDS prejudice|hospital coma`,
   `Who was revealed to have helped organize the vigilante fire against Cindy in All My Children?|Skye Chandler|Angie Hubbard|Erica Kane|Dixie Cooney|Hard|Skye Chandler|Cindy Parker|1988|vigilante fire|Tom Cudahy|AIDS stigma|guilty conscience`,
   `Which character was believed killed by a bullet intended for John Remington in All My Children?|Jesse Hubbard|Tad Martin|Adam Chandler|Cliff Warner|Medium|Jesse Hubbard|John Remington|1988|shooting|Angie Hubbard|presumed death|police officer`,
   `Which West Virginia town was home to Dixie Cooney before she arrived in All My Children?|Pigeon Hollow|Pine Valley|Harmony Falls|Oak Haven|Medium|Pigeon Hollow|Dixie Cooney|West Virginia|1988|Will Cooney|family origins|new arrival`,
   `Which sibling accompanied Dixie Cooney to search for their wealthy relative in All My Children?|Will Cooney|Tad Martin|JR Chandler|Sean Cudahy|Medium|Will Cooney|Dixie Cooney|1988|siblings|Pigeon Hollow|Palmer Cortlandt|family search`,
   `Which wealthy Pine Valley man was secretly Dixie Cooney's uncle in All My Children?|Palmer Cortlandt|Adam Chandler|Langley Wallingford|Joe Martin|Medium|Dixie Cooney|Palmer Cortlandt|uncle niece|Pete Cooney|1988|Cortlandt Manor|family secret`,
   `What job did Palmer Cortlandt give Dixie Cooney when she first came to his home in All My Children?|A maid|A governess|A bookkeeper|An estate manager|Medium|Dixie Cooney|Palmer Cortlandt|Cortlandt Manor|1988|household work|employment|family secrecy`,
   `How much ransom did Travis Montgomery's fraudulent kidnapping plan originally seek in All My Children?|Fifteen million dollars|One hundred thousand dollars|One million dollars|Fifty million dollars|Hard|Travis Montgomery|fake kidnapping|1988|15 million dollars|insurance scheme|Steven Andrews|Bianca Montgomery`,
   `Which accomplice later kidnapped Bianca after Travis's original plan went wrong in All My Children?|Steven Andrews|John Remington|Jeremy Hunter|Trevor Dillon|Medium|Steven Andrews|Travis Montgomery|Bianca kidnapping|1988|ransom demand|betrayal|family danger`,
   `Which real half-sister of Erica Kane was killed when Natalie Hunter's gun discharged in All My Children?|Silver Kane|Cindy Parker|Skye Chandler|Nina Cortlandt|Medium|Silver Kane|Natalie Hunter|1988|accidental shooting|Jeremy Hunter|real half sister|murder coverup`,
   `Which businessman helped Natalie dispose of Silver Kane's body in All My Children?|Palmer Cortlandt|Adam Chandler|Cliff Warner|Tom Cudahy|Medium|Palmer Cortlandt|Natalie Hunter|Silver Kane|1988|body concealment|pond|blackmail`,
   `Which doctor was briefly engaged to Angie Hubbard before leaving Pine Valley with Nina in All My Children?|Cliff Warner|Joe Martin|Frank Grant|Jeff Martin|Medium|Angie Hubbard|Cliff Warner|1989|engagement|Nina Cortlandt|abandoned wedding|interracial couple`,
   `Which child's paternity reunited Cliff Warner and Nina Cortlandt in the late 1980s of All My Children?|Michael|Bianca|Scott|Jimmy|Medium|Michael Warner|Cliff Warner|Nina Cortlandt|1989|Matt Connelly|paternity discovery|family reunion`,
   `Which city did Cliff and Nina relocate to after marrying again in All My Children?|Denver|Boston|Seattle|Miami|Medium|Cliff Warner|Nina Cortlandt|1989|fourth marriage|Denver|romantic reunion|series departure`,
   `Which woman did Adam Chandler marry before having a child with Dixie Cooney in All My Children?|Brooke English|Erica Kane|Nina Cortlandt|Angie Hubbard|Medium|Adam Chandler|Brooke English|1989|marriage|Dixie Cooney|nanny|family conflict`,
   `Which young woman worked as a nanny in Adam Chandler's household and became pregnant by him in All My Children?|Dixie Cooney|Liza Colby|Cecily Davidson|Jenny Gardner|Medium|Dixie Cooney|Adam Chandler|Brooke English|1989|nanny|secret affair|pregnancy`,
   `What name was given to Dixie Cooney and Adam Chandler's baby boy in All My Children?|Adam Chandler Jr.|Tad Martin Jr.|Michael Warner|Scott Chandler|Easy|Adam Junior|Dixie Cooney|Adam Chandler|1989|baby son|JR Chandler|paternity`,
   `What was Adam Chandler's plan for Dixie after their marriage in All My Children?|Have her committed to a mental institution|Send her to run the London office|Make her a television host|Force her to join the army|Medium|Adam Chandler|Dixie Cooney|1989|institution plot|JR custody|marriage manipulation|cruel scheme`,
   `Who helped Dixie escape Adam's attempt to have her institutionalized in All My Children?|Tad Martin|Cliff Warner|Travis Montgomery|Jesse Hubbard|Medium|Tad Martin|Dixie Cooney|1989|rescue|Adam Chandler|hospital escape|romantic alliance`,
   `Which character married Tad Martin after divorcing Adam Chandler in All My Children?|Dixie Cooney|Brooke English|Angie Hubbard|Liza Colby|Easy|Dixie Cooney|Tad Martin|1989|Caribbean divorce|Adam Chandler|new marriage|supercouple`,
   `Which woman died of AIDS in 1989, leaving Stuart Chandler to raise her son in All My Children?|Cindy Chandler|Marian Colby|Skye Chandler|Natalie Hunter|Medium|Cindy Parker Chandler|1989|AIDS death|Stuart Chandler|Scott Parker|family loss|social issue`,
   `What memorial project did Stuart Chandler dedicate in Cindy's memory in All My Children?|An AIDS quilt|A hospital wing|A school scholarship|A statue in the town square|Medium|Stuart Chandler|Cindy Parker|AIDS quilt|1989|memorial|HIV awareness|grief`,
   `Which serious illness caused Travis Montgomery to leave Pine Valley for surgery in All My Children?|A brain tumour|Kidney failure|Pneumonia|A heart infection|Medium|Travis Montgomery|brain tumour|1989|secret operation|Erica Kane|health crisis|temporary departure`,
   `Which woman went into labour during her wedding to Tom Cudahy in All My Children?|Barbara Montgomery|Brooke English|Skye Chandler|Angie Hubbard|Medium|Barbara Montgomery|Tom Cudahy|1989|wedding|labour|Molly birth|Travis Montgomery`,
   `What was the name of Barbara Montgomery's daughter born at her wedding to Tom in All My Children?|Molly|Bianca|Cecily|Jenny|Medium|Molly Montgomery|Barbara Montgomery|Tom Cudahy|1989|wedding birth|Travis father|child`,
   `Which illness did Barbara's daughter Molly later develop in All My Children?|Leukaemia|Cystic fibrosis|Measles|Diabetes|Medium|Molly Montgomery|leukaemia|1989|Barbara Montgomery|child illness|hospital treatment|family storyline`,
   `Which character abandoned plans to marry Sean Cudahy and instead wed Nico Kelly in All My Children?|Cecily Davidson|Liza Colby|Nina Cortlandt|Dottie Thornton|Medium|Cecily Davidson|Sean Cudahy|Nico Kelly|1989|wedding revenge|romantic triangle|wealthy heiress`,
   `Which man married Cecily Davidson in an arrangement that developed into genuine love in All My Children?|Nico Kelly|Sean Cudahy|Jesse Hubbard|Greg Nelson|Medium|Nico Kelly|Cecily Davidson|1989|trust fund|marriage of convenience|romantic couple|character`,
   `Which profession did Erica Kane's long-lost father appear to practise when she found him at a circus in All My Children?|Clown|Lion tamer|Trapeze artist|Ringmaster|Medium|Eric Kane|Barney the clown|1989|Erica Kane|circus|father reunion|hidden identity`,
   `What was the real name of the father Erica Kane found alive after recognising a circus clown in All My Children?|Eric Kane|Kent Bogard|Lars Bogard|Nick Davis|Medium|Eric Kane|Barney the clown|1989|Erica father|Texas circus|family reunion|parent identity`,
   `Which detective and former mercenary arrived in Pine Valley with ties to Jeremy Hunter in All My Children?|Trevor Dillon|John Remington|Jesse Hubbard|Cliff Warner|Medium|Trevor Dillon|Jeremy Hunter|1989|detective|former mercenary|Natalie Hunter|new arrival`,
   `Which producer became executive producer of All My Children in 1989?|Felicia Minei Behr|Gloria Monty|Agnes Nixon|Jill Farren Phelps|Hard|Felicia Minei Behr|executive producer|1989|production change|Ryan's Hope|daytime television|behind the scenes`
 ];

 const questions = rows.map((row, index) => {
   const parts = row.split('|').map(part => part.trim());
   if (parts.length !== 13 || parts.some(part => !part)) {
     throw new Error(`Pack 415: malformed row ${index + 1} (${parts.length} fields)`);
   }
   const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
   if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
     throw new Error(`Pack 415: invalid difficulty at row ${index + 1}`);
   }
   const question = stem.includes('All My Children')
     ? stem
     : `In All My Children, ${stem[0].toLowerCase()}${stem.slice(1)}`;
   const answers = [wrong1, wrong2, wrong3];
   answers.splice(index % 4, 0, correctAnswer);
   if (new Set(answers.map(a => a.toLowerCase())).size !== 4) {
     throw new Error(`Pack 415: duplicate answer option at row ${index + 1}`);
   }
   const tags = [...new Set([...commonTags, ...specificTags])];
   if (tags.length !== 13) {
     throw new Error(`Pack 415: expected 13 distinct tags at row ${index + 1}, got ${tags.length}`);
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
