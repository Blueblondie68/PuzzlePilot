
 // quiz_pack325.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: Luther, Killing Eve and Adolescence.
 // Coverage: Luther BBC series 1-5 (2010-2019) and The Fallen Sun (2023),
 // Killing Eve (all four series, 2018-2022), Adolescence (2025 four-part series).
 // Luther franchise remains open for future films. Every question has seven bespoke tags.
 // Format: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven specialist tags

 const groups = [
   {
     programme: 'Luther', era: '2010-2019 BBC television series', broadcaster: 'BBC One',
     topic: 'John Luther, his colleagues, murder investigations and five television series',
     facts: `Who played Detective Chief Inspector John Luther in the BBC crime drama?|Idris Elba|David Oyelowo|Lennie James|Adrian Lester|Easy|Idris Elba|John Luther|Lead Actor|DCI|Detective Drama|Casting|London Police
 What police rank does John Luther hold for most of the original television series?|Detective Chief Inspector|Detective Constable|Police Sergeant|Chief Superintendent|Medium|DCI John Luther|Police Rank|Detective Hierarchy|Metropolitan Police|Lead Character|Investigator|Crime Unit
 Who created and wrote the BBC television series Luther?|Neil Cross|Jed Mercurio|Chris Chibnall|Sally Wainwright|Easy|Neil Cross|Series Creator|Screenwriter|BBC Crime|Production Credits|Original Drama|Writer
 In what year did Luther first appear on BBC television?|2010|2005|2015|2020|Easy|2010 Premiere|First Series|BBC One|Broadcast Timeline|Crime Drama Launch|Idris Elba|Original Run
 How many BBC television series of Luther aired between 2010 and 2019?|Five|Three|Four|Six|Easy|Five Series|2010 To 2019|BBC Programme|Series Count|Broadcast History|Twenty Episodes|Television Run
 How many episodes make up Luther's five original BBC television series in total?|20|16|24|30|Medium|Twenty Episodes|Five Series|Episode Count|BBC Television|Programme Statistics|Original Series|2010 To 2019
 Which actress played the brilliant and dangerous Alice Morgan?|Ruth Wilson|Indira Varma|Rose Leslie|Saskia Reeves|Easy|Ruth Wilson|Alice Morgan|Character Casting|Luther Ally|Murder Suspect|Psychological Rival|Series One
 What crime is Alice Morgan suspected of when Luther first encounters her?|Murdering her parents|Robbing a bank|Kidnapping a judge|Poisoning a police officer|Medium|Alice Morgan|Parents Murder|Series One Opening|Suspect|John Luther|Psychological Battle|Family Crime
 Which actor portrayed Luther's loyal colleague DS Justin Ripley?|Warren Brown|Darren Boyd|Michael Smiley|Steven Mackintosh|Easy|Warren Brown|Justin Ripley|Detective Sergeant|Partner|Main Cast|Police Colleague|Casting
 Who played Luther's wife Zoe in the first television series?|Indira Varma|Nikki Amuka-Bird|Sienna Guillory|Laura Haddock|Medium|Indira Varma|Zoe Luther|Estranged Wife|First Series|Character Casting|Relationship Drama|Main Cast
 Which actor played Zoe's new partner, human-rights lawyer Mark North?|Paul McGann|Dermot Crowley|Steven Mackintosh|David O'Hara|Medium|Paul McGann|Mark North|Human Rights Lawyer|Zoe Relationship|Character Casting|Love Triangle|Series One
 Who portrayed Luther's first-series superior DSU Rose Teller?|Saskia Reeves|Ruth Wilson|Hermione Norris|Rose Leslie|Medium|Saskia Reeves|Rose Teller|Police Superior|Detective Superintendent|Series One|Actor And Role|Command Team
 Which actor played DCI Ian Reed, Luther's colleague with a corrupt secret?|Steven Mackintosh|Warren Brown|Michael Smiley|Dermot Crowley|Medium|Steven Mackintosh|Ian Reed|Corrupt Detective|Series One|Police Betrayal|Character Casting|Crime Plot
 Who played Martin Schenk, a senior police investigator who later supervised Luther?|Dermot Crowley|Paul McGann|Patrick Malahide|David O'Hara|Medium|Dermot Crowley|Martin Schenk|Police Supervisor|Professional Standards|Main Cast|Character Casting|Senior Detective
 What nickname is used by Luther's technology specialist Benny Silver?|Deadhead|Mouse|Ghost|Sparky|Medium|Benny Silver|Deadhead|Technology Specialist|Police Support|Nickname|Crime Team|Computer Expert
 Which actor portrayed the technology specialist Benny Silver?|Michael Smiley|Darren Boyd|Warren Brown|Paul McGann|Medium|Michael Smiley|Benny Silver|Tech Expert|Character Casting|Police Intelligence|Supporting Cast|Crime Investigations
 How many episodes were in Luther's first television series in 2010?|Six|Two|Four|Eight|Medium|Six Episodes|Series One|2010 Broadcast|Episode Count|BBC One|Programme Structure|Opening Run
 What type of criminal does Luther hunt in the second episode of series one?|A sniper targeting police officers|An art thief|A counterfeit currency dealer|A jewel smuggler|Medium|Series One Episode Two|Police Sniper|Murder Investigation|Detective Case|2010 Storyline|Armed Attacker|Manhunt
 What unusual type of killer does Luther pursue in the third episode of the first series?|A satanic occult killer|A railway saboteur|An art forger|A serial arsonist|Medium|Series One Episode Three|Occult Murderer|Kidnap Investigation|Ritual Crime|2010 Case|Detective Work|Serial Killer
 Who helps Luther when he is framed for murder in the first-series finale?|Alice Morgan|Rose Teller|Zoe Luther|Jenny Jones|Medium|Alice Morgan|Series One Finale|False Accusation|Luther On The Run|Uneasy Alliance|Murder Frame Up|2010 Episode
 In which year did Luther's second television series begin?|2011|2010|2013|2015|Medium|2011 Series Two|Broadcast Year|BBC One|Drama Return|Series Timeline|Luther Case Files|Second Run
 How many episodes were broadcast in Luther's second series?|Four|Two|Six|Eight|Medium|Series Two|Four Episodes|2011 Broadcast|Two Story Arcs|Episode Count|BBC Drama|Programme Structure
 Which actor played the masked killer Cameron Pell in Luther's second series?|Lee Ingleby|Stephen Graham|Enzo Cilenti|Darren Boyd|Hard|Lee Ingleby|Cameron Pell|Masked Killer|Mr Punch|Series Two|Casting|Serial Murderer
 What children's puppet character inspired the guise of Cameron Pell in Luther series two?|Mr Punch|Mr Tumble|Sooty|Basil Brush|Medium|Cameron Pell|Mr Punch|Masked Murderer|Series Two|Disturbing Costume|Luther Investigation|Puppet Imagery
 Which actress played Jenny Jones, the troubled young woman Luther tries to protect in series two?|Aimee-Ffion Edwards|Rose Leslie|Laura Haddock|Sienna Guillory|Medium|Aimee Ffion Edwards|Jenny Jones|Series Two|Young Woman|Luther Protector|Casting|Crime Storyline
 Who played criminal matriarch Baba in the second series of Luther?|Pam Ferris|Frances de la Tour|Saskia Reeves|Miriam Margolyes|Hard|Pam Ferris|Baba|Crime Figure|Series Two|Character Casting|Criminal Underworld|Jenny Jones
 Which actress portrayed DS Erin Gray, an officer wary of Luther's methods?|Nikki Amuka-Bird|Saskia Reeves|Indira Varma|Wunmi Mosaku|Medium|Nikki Amuka Bird|Erin Gray|Police Detective|Internal Scrutiny|Series Two|Casting|Luther Colleague
 In which year did Luther's third BBC television series air?|2013|2011|2015|2019|Medium|2013 Series Three|Broadcast Timeline|BBC One|Crime Drama|Third Series|Television Return|Luther
 How many episodes made up Luther's third BBC series?|Four|Two|Five|Six|Medium|Series Three|Four Episodes|2013|Episode Count|BBC Drama|Television Format|Programme Statistics
 Which actor played the investigator George Stark in Luther's third series?|David O'Hara|Paul McGann|Dermot Crowley|Lee Ingleby|Hard|David OHara|George Stark|Investigating Luther|Series Three|Senior Officer|Casting|Police Oversight
 Which actress played Mary Day, who becomes close to Luther in series three?|Sienna Guillory|Rose Leslie|Ruth Wilson|Saskia Reeves|Medium|Sienna Guillory|Mary Day|Romantic Relationship|Series Three|Character Casting|Luther Personal Life|New Partner
 What kind of murderer does Luther confront in the final two episodes of series three?|A vigilante killer|A jewel thief|A contract art forger|A poisoner targeting chefs|Medium|Series Three|Vigilante Killer|Episodes Three And Four|2013 Case|Moral Conflict|Murder Investigation|Justice Obsession
 Which long-serving officer is killed during Luther's third television series?|Justin Ripley|Martin Schenk|Benny Silver|Erin Gray|Medium|Justin Ripley|Series Three Death|Luther Partner|2013 Storyline|Police Loss|Emotional Consequence|Major Plot
 Which year saw the two-part fourth BBC series of Luther?|2015|2012|2016|2018|Medium|2015 Fourth Series|Two Episodes|BBC Broadcast|Programme Timeline|Luther Return|Short Series|Television Event
 Who played DS Emma Lane, Luther's new detective partner in series four?|Rose Leslie|Ruth Wilson|Sienna Guillory|Nikki Amuka-Bird|Medium|Rose Leslie|Emma Lane|Series Four|Detective Sergeant|New Partner|Actress Casting|Police Investigation
 Which actor played London gangster George Cornelius in Luther?|Patrick Malahide|Dermot Crowley|Steven Mackintosh|Paul McGann|Medium|Patrick Malahide|George Cornelius|Organised Crime|Gangster|Series Four And Five|Character Casting|Criminal Rival
 Who played DCI Theo Bloom, who works with Luther in the fourth series?|Darren Boyd|Lee Ingleby|Michael Smiley|David O'Hara|Hard|Darren Boyd|Theo Bloom|Series Four|Detective Chief Inspector|Police Team|Actor Identification|Investigators
 In what year did Luther's fifth television series first air?|2019|2015|2017|2021|Easy|2019 Series Five|BBC One|Broadcast Year|Television Return|Fifth Series|Series Timeline|Crime Drama
 Who played DS Catherine Halliday, Luther's colleague in series five?|Wunmi Mosaku|Rose Leslie|Indira Varma|Nikki Amuka-Bird|Medium|Wunmi Mosaku|Catherine Halliday|Series Five|Detective Sergeant|Police Colleague|Casting|2019 Episodes
 Which actor portrayed heart surgeon Jeremy Lake in Luther's fifth series?|Enzo Cilenti|Andy Serkis|Lee Ingleby|David O'Hara|Hard|Enzo Cilenti|Jeremy Lake|Heart Surgeon|Series Five|Serial Killer|Actor Casting|2019 Mystery
 What was Jeremy Lake's profession in the fifth series of Luther?|Heart surgeon|Barrister|Architect|University lecturer|Medium|Jeremy Lake|Heart Surgeon|Medical Profession|Serial Murderer|Series Five|2019 Case|Criminal Identity
 Which actress played psychiatrist Vivien Lake in Luther's fifth series?|Hermione Norris|Saskia Reeves|Indira Varma|Pippa Haywood|Medium|Hermione Norris|Vivien Lake|Psychiatrist|Jeremy Lake Wife|Series Five|Actress Casting|Cover Up
 What was Vivien Lake's relationship to murderer Jeremy Lake?|His wife|His sister|His cousin|His employer|Medium|Jeremy And Vivien Lake|Marriage|Criminal Couple|Series Five|2019 Investigation|Relationship|Psychiatrist
 What medical condition was affecting Jeremy Lake's inhibitions in Luther series five?|A brain tumour|A broken leg|A heart transplant|Chronic deafness|Hard|Jeremy Lake|Brain Tumour|Series Five|Inhibitions|Criminal Escalation|Medical Condition|2019 Plot
 Which returning character's reappearance complicates Luther's personal life in series five?|Alice Morgan|Rose Teller|Zoe Luther|Jenny Jones|Medium|Alice Morgan Returns|Series Five|Ruth Wilson|Complicated Relationship|2019 Return|Luther Past|Major Character`
   },
   {
     programme: 'Luther', era: '2023 film The Fallen Sun', broadcaster: 'Netflix / BBC Film',
     topic: 'Film continuation featuring John Luther and serial killer David Robey',
     facts: `Which actor played the title detective again in the film Luther: The Fallen Sun?|Idris Elba|Chiwetel Ejiofor|David Oyelowo|Daniel Kaluuya|Easy|Idris Elba|Fallen Sun Film|John Luther|Returning Actor|Film Adaptation|Leading Role|2023 Cinema
 In what year was Luther: The Fallen Sun released on Netflix?|2023|2019|2021|2025|Easy|2023 Film|Netflix Release|The Fallen Sun|Screen Continuation|Franchise Timeline|Streaming Premiere|Luther
 Which actor played the serial killer David Robey in Luther: The Fallen Sun?|Andy Serkis|Dermot Crowley|Enzo Cilenti|Matt Berry|Medium|Andy Serkis|David Robey|Film Antagonist|Cyber Blackmail|2023 Movie|Casting|Serial Murder
 Who portrayed DCI Odette Raine in Luther: The Fallen Sun?|Cynthia Erivo|Wunmi Mosaku|Ruth Wilson|Naomie Harris|Medium|Cynthia Erivo|Odette Raine|Police Investigator|2023 Film|Serious And Serial Crime|Casting|Luther Movie
 Which familiar senior police officer returned in the film Luther: The Fallen Sun?|Martin Schenk|Rose Teller|Ian Reed|Justin Ripley|Medium|Martin Schenk|Dermot Crowley|Returning Character|Fallen Sun|Retired Officer|2023 Film|Luther Colleague
 Where is John Luther at the beginning of the main hunt in Luther: The Fallen Sun?|In prison|On a cruise ship|In witness protection|At a rural retreat|Medium|Luther Imprisoned|Fallen Sun|Jail Break|Disgraced Detective|David Robey|2023 Plot|Film Opening
 Who directed the film Luther: The Fallen Sun?|Jamie Payne|Sam Mendes|Steve McQueen|Danny Boyle|Medium|Jamie Payne|Film Director|2023 Production|Netflix Feature|Luther Movie|Creative Credits|Film Making
 Who wrote the screenplay for Luther: The Fallen Sun?|Neil Cross|Jack Thorne|Jed Mercurio|Peter Morgan|Medium|Neil Cross|Fallen Sun Screenplay|Programme Creator|Film Writer|2023 Movie|Franchise Continuity|Writing Credit
 Which London landmark features in the confrontation with David Robey in The Fallen Sun?|Piccadilly Circus|Tower Bridge|Trafalgar Square|St Paul's Cathedral|Hard|Piccadilly Circus|David Robey|Fallen Sun|London Location|Police Operation|2023 Action|Film Setting
 To which country does Luther pursue David Robey near the end of The Fallen Sun?|Norway|France|Italy|Ireland|Hard|Norway|David Robey|Final Pursuit|Fallen Sun|Overseas Hideout|2023 Thriller|International Case`
   },
   {
     programme: 'Killing Eve', era: '2018-2022 complete TV series', broadcaster: 'BBC America / BBC Three',
     topic: 'Eve Polastri, Villanelle, The Twelve and the four-season spy thriller',
     facts: `Which actress played intelligence investigator Eve Polastri in Killing Eve?|Sandra Oh|Jodie Comer|Fiona Shaw|Emerald Fennell|Easy|Sandra Oh|Eve Polastri|Lead Actor|Spy Thriller|Character Casting|MI6|2018 Series
 Which actress played the assassin known as Villanelle?|Jodie Comer|Sandra Oh|Fiona Shaw|Harriet Walter|Easy|Jodie Comer|Villanelle|Assassin Role|British Actress|Lead Cast|Character Identity|Killing Eve
 What is the real name of the assassin who calls herself Villanelle?|Oksana Astankova|Anna Kovalenko|Irina Vasilieva|Dasha Duzran|Medium|Oksana Astankova|Villanelle Birth Name|Russian Assassin|Alias|Character Backstory|The Twelve|Secret Identity
 What was Eve Polastri's job at the start of the first episode?|MI5 security officer|Police constable|Private investigator|Interpol director|Easy|Eve Polastri|MI5 Desk Job|Opening Episode|Career Background|British Security|Intelligence Work|Spy Drama
 Which intelligence service recruits Eve to investigate the assassin Villanelle?|MI6|FBI|Europol|GCHQ|Easy|MI6|Eve Recruitment|Secret Unit|British Intelligence|Villanelle Hunt|Carolyn Martens|Security Services
 Who created the television adaptation of Killing Eve?|Phoebe Waller-Bridge|Sally Wainwright|Sharon Horgan|Abi Morgan|Easy|Phoebe Waller Bridge|Series Creator|First Season|Screen Adaptation|British Writer|Television Production|Spy Thriller
 Which novelist wrote the Villanelle stories on which Killing Eve was based?|Luke Jennings|Ian Fleming|John le Carré|Mick Herron|Medium|Luke Jennings|Villanelle Novellas|Source Author|Book Adaptation|Codename Villanelle|Literary Origin|Spy Fiction
 What is the title of the collection of stories that inspired Killing Eve?|Codename Villanelle|The Secret History|Slow Horses|The Night Manager|Medium|Codename Villanelle|Luke Jennings|Source Material|Novella Collection|Literary Adaptation|Villanelle Origin|Book Title
 In which year did Killing Eve premiere?|2018|2015|2020|2022|Easy|2018 Premiere|BBC America|First Season|Broadcast Year|Programme Launch|Spy Drama|Television Timeline
 How many television series of Killing Eve were produced?|Four|Two|Three|Five|Easy|Four Seasons|2018 To 2022|Programme Run|Series Count|Final Season|Spy Thriller|Broadcast History
 How many television episodes of Killing Eve were made in total?|32|24|30|40|Medium|Thirty Two Episodes|Eight Per Season|Programme Count|Complete Series|2018 To 2022|Television Statistics|BBC America
 Which actress portrayed MI6 intelligence chief Carolyn Martens?|Fiona Shaw|Harriet Walter|Gemma Whelan|Camille Cottin|Easy|Fiona Shaw|Carolyn Martens|MI6 Russia Desk|Spy Chief|Casting|Intelligence Leadership|Main Characters
 Which actor played Villanelle's handler Konstantin Vasiliev?|Kim Bodnia|Owen McDonnell|David Haig|Sean Delaney|Medium|Kim Bodnia|Konstantin Vasiliev|Handler|Russian Intelligence|Character Casting|Villanelle Contact|Secret Network
 Who played Eve's husband Niko Polastri?|Owen McDonnell|Kim Bodnia|David Haig|Darren Boyd|Medium|Owen McDonnell|Niko Polastri|Eve Husband|Marriage Storyline|Character Casting|Civilian Life|Killing Eve
 What subject does Niko Polastri teach for a living?|Mathematics|History|Biology|Geography|Medium|Niko Polastri|Maths Teacher|Profession|Eve Marriage|School Teacher|Civilian Character|Job Detail
 Which actor played Carolyn's son Kenny Stowton?|Sean Delaney|Edward Bluemel|David Haig|Owen McDonnell|Medium|Sean Delaney|Kenny Stowton|Carolyn Son|Technical Analyst|Character Casting|Bitter Pill|Intelligence Family
 Which character is the mother of analyst Kenny Stowton?|Carolyn Martens|Dasha|Hélène|Anna|Easy|Kenny Stowton|Carolyn Martens|Mother And Son|Family Relationship|MI6|Intelligence Analyst|Personal Ties
 Who portrayed Eve's colleague Bill Pargrave in the first series?|David Haig|Darren Boyd|Edward Bluemel|Sean Delaney|Medium|David Haig|Bill Pargrave|MI5 Colleague|Series One|Character Casting|Berlin Case|Eve Friend
 Which actress played Eve's assistant Elena Felton?|Kirby Howell-Baptiste|Harriet Walter|Gemma Whelan|Camille Cottin|Medium|Kirby Howell Baptiste|Elena Felton|Office Assistant|Supporting Cast|Character Casting|Series One|MI6 Team
 Which actor portrayed Eve's original MI5 boss Frank Haleton?|Darren Boyd|David Haig|Kim Bodnia|Owen McDonnell|Hard|Darren Boyd|Frank Haleton|MI5 Supervisor|Series One|Mole Investigation|Character Casting|Intelligence Service
 What is the name of the shadowy assassination organisation central to Killing Eve?|The Twelve|The Circle|The Division|The Council|Easy|The Twelve|Secret Organisation|Assassins|Conspiracy|Villanelle Employer|Spy Thriller|Central Mystery
 What was the title of Killing Eve's very first episode?|Nice Face|Smell Ya Later|God I'm Tired|Hello Losers|Medium|Nice Face|Pilot Episode|2018 Premiere|Episode Title|Series One|Opening Investigation|Killing Eve
 What small everyday object is used for a poisoned assassination in the pilot episode?|A hairpin|A teaspoon|A pencil sharpener|A cufflink|Medium|Poisoned Hairpin|Nice Face|Villanelle Method|Assassination|Series One|Unusual Weapon|First Episode
 In which city do Eve and Bill investigate the killing of a Chinese colonel in series one?|Berlin|Paris|Madrid|Prague|Medium|Berlin|Chinese Colonel|Bill Pargrave|Series One Episode Three|Overseas Investigation|European Mission|Killing Eve
 Which city do Eve and Carolyn visit when a captured female assassin is held in prison in series one?|Moscow|Rome|Amsterdam|Vienna|Medium|Moscow|Russian Prison|Take Me To The Hole|Eve And Carolyn|Series One|Foreign Intelligence|Detained Assassin
 What kind of dish does Villanelle eat when she visits Eve's home uninvited in series one?|Shepherd's pie|Fish and chips|Chicken curry|Lasagne|Medium|Shepherds Pie|Home Intrusion|Eve And Villanelle|Series One|Bathrooms Episode|Domestic Scene|Food Reference
 How does Eve injure Villanelle at the end of Killing Eve's first series?|She stabs her|She shoots her|She poisons her|She pushes her off a bridge|Medium|Villanelle Stabbed|God Im Tired|First Season Finale|Eve Decision|Knife Attack|Bedroom Confrontation|Cliffhanger
 Which writer was the lead writer of Killing Eve's second series?|Emerald Fennell|Phoebe Waller-Bridge|Suzanne Heathcote|Laura Neal|Medium|Emerald Fennell|Season Two|Lead Writer|2019 Television|Creative Team|Female Showrunner|Series Credits
 In which year did the second series of Killing Eve begin?|2019|2018|2020|2021|Easy|2019 Series Two|BBC America|Broadcast Timeline|Season Return|Spy Drama|Programme History|Release Year
 What alias does Villanelle use while infiltrating Aaron Peel's world in series two?|Billie|Anna|Janice|Geraldine|Hard|Billie Alias|Villanelle Disguise|Aaron Peel|Series Two|Undercover Operation|False Identity|Spy Work
 Who plays tech tycoon Aaron Peel in the second series of Killing Eve?|Henry Lloyd-Hughes|Edward Bluemel|David Haig|Owen McDonnell|Hard|Henry Lloyd Hughes|Aaron Peel|Series Two Antagonist|Tech Tycoon|Character Casting|2019 Storyline|Infiltration
 Who portrayed junior intelligence officer Hugo Turner in the second series?|Edward Bluemel|Sean Delaney|Darren Boyd|David Haig|Hard|Edward Bluemel|Hugo Turner|Junior MI6 Officer|Series Two|Character Casting|Spy Team|2019
 Which European city is central to the final operation in Killing Eve's second series?|Rome|Berlin|Brussels|Copenhagen|Medium|Rome|Series Two Finale|Aaron Peel|Foreign Mission|Villanelle|2019 Storyline|Italian Setting
 How does Villanelle leave Eve at the end of the second series?|She shoots Eve|She abandons Eve in prison|She poisons Eve's drink|She pushes Eve from a train|Medium|Eve Shot|Series Two Finale|Youre Mine|Villanelle Violence|Rome Operation|2019 Ending|Major Cliffhanger
 Who took over as lead writer of Killing Eve's third series?|Suzanne Heathcote|Emerald Fennell|Laura Neal|Phoebe Waller-Bridge|Medium|Suzanne Heathcote|Third Series|2020 Television|Lead Writer|Creative Change|Showrunner|Production History
 Which character's sudden death sets off a new investigation early in Killing Eve's third series?|Kenny Stowton|Niko Polastri|Konstantin Vasiliev|Hugo Turner|Medium|Kenny Stowton Death|Season Three|Bitter Pill|Carolyn Grief|The Twelve|Eve Investigation|2020 Plot
 What is the name of the online publication where Kenny works in Killing Eve's third series?|Bitter Pill|The Daily Pulse|The Morning Wire|The London Ledger|Medium|Bitter Pill|Kenny Stowton|Investigative Publication|Season Three|Journalism|The Twelve Inquiry|Office Setting
 Which actress played Villanelle's former trainer Dasha in the third series?|Harriet Walter|Fiona Shaw|Gemma Whelan|Camille Cottin|Medium|Harriet Walter|Dasha|Russian Trainer|Series Three|Assassin Mentor|Casting|Villanelle Past
 In which episode of series three does Villanelle return to her family's home in Russia?|Are You from Pinner?|Nice Face|Desperate Times|Hello Losers|Hard|Are You From Pinner|Russian Family|Season Three|Villanelle Origins|Homecoming|Episode Title|2020 Storyline
 What is the name of Konstantin's daughter in Killing Eve?|Irina|Elena|Dasha|Hélène|Medium|Irina Vasilieva|Konstantin Family|Daughter|Russian Characters|Series One Onwards|Family Conflict|Character Identity
 Which Killing Eve third-series finale features Eve and Villanelle meeting on a bridge?|Are You Leading or Am I?|Wide Awake|God I'm Tired|Nice and Neat|Medium|Are You Leading Or Am I|Bridge Scene|Season Three Finale|Eve And Villanelle|2020 Ending|Episode Title|Relationship Decision
 Which actress played Carolyn's daughter Geraldine in the third series?|Gemma Whelan|Camille Cottin|Harriet Walter|Fiona Shaw|Hard|Gemma Whelan|Geraldine|Carolyn Daughter|Series Three|Character Casting|Family Tension|2020 Episodes
 Who served as the lead writer on Killing Eve's fourth and final series?|Laura Neal|Suzanne Heathcote|Emerald Fennell|Phoebe Waller-Bridge|Medium|Laura Neal|Fourth Series|Final Showrunner|2022 Finale|Television Credits|Lead Writer|Creative Team
 Which actress played Hélène, a high-ranking figure connected with The Twelve?|Camille Cottin|Harriet Walter|Fiona Shaw|Nina Sosanya|Hard|Camille Cottin|Helene|The Twelve|French Actor|Series Three And Four|Character Casting|Organisation Leadership
 Which actress played apprentice mortician Pam in Killing Eve's final series?|Anjana Vasan|Kirby Howell-Baptiste|Gemma Whelan|Harriet Walter|Hard|Anjana Vasan|Pam|Mortuary Worker|Final Series|Assassin Recruitment|Character Casting|2022
 What was the title of the final television episode of Killing Eve?|Hello Losers|Nice Face|The Final Countdown|Are You from Pinner?|Medium|Hello Losers|Series Finale|Fourth Series|2022 Episode|Last Episode Title|Spy Thriller Ending|Programme Conclusion
 In which year did the final series of Killing Eve end?|2022|2019|2020|2024|Easy|2022 End|Four Seasons|Final Broadcast|Killing Eve Finale|Programme Timeline|Complete Television Run|BBC America
 What happens to Villanelle in the final minutes of Killing Eve?|She is fatally shot|She moves to Moscow|She becomes director of MI6|She escapes to Australia|Medium|Villanelle Death|Finale|Hello Losers|Tragic Ending|Eve Relationship|2022 Conclusion|Last Scene
 Which actress won a Primetime Emmy for her performance as Villanelle?|Jodie Comer|Sandra Oh|Fiona Shaw|Emerald Fennell|Medium|Jodie Comer|Emmy Award|Lead Actress|Villanelle Role|Television Recognition|Acting Achievement|Killing Eve
 Which star won a Golden Globe for playing Eve Polastri?|Sandra Oh|Jodie Comer|Fiona Shaw|Harriet Walter|Medium|Sandra Oh|Golden Globe|Eve Polastri|Drama Actress|Awards|Acting Achievement|Killing Eve`
   },
   {
     programme: 'Adolescence', era: '2025 original four-part series', broadcaster: 'Netflix',
     topic: 'Jamie Miller, Katie Leonard, the one-shot filming and the Miller family',
     facts: `In which year did the Netflix crime drama Adolescence first appear?|2025|2021|2023|2026|Easy|2025 Release|Netflix Premiere|British Crime Drama|Limited Series|Broadcast Year|Programme Debut|Streaming
 How many episodes are in the original 2025 series of Adolescence?|Four|Three|Six|Eight|Easy|Four Episodes|Limited Series|2025 Television|Episode Count|Netflix Format|Drama Structure|Programme Statistics
 How old is Jamie Miller when he is arrested in Adolescence?|13|11|15|17|Easy|Thirteen Years Old|Jamie Miller|Arrest|Schoolboy Suspect|Teenage Character|2025 Story|Murder Case
 Which actor made his television breakthrough playing Jamie Miller?|Owen Cooper|Stephen Graham|Ashley Walters|Mark Stanley|Easy|Owen Cooper|Jamie Miller|Young Actor|Lead Performance|Casting|Teenage Suspect|Netflix Drama
 Who plays Jamie Miller's father Eddie in Adolescence?|Stephen Graham|Ashley Walters|Mark Stanley|Joseph Gilgun|Easy|Stephen Graham|Eddie Miller|Father|Main Cast|Actor And Role|Family Drama|Netflix
 Which actress plays Jamie's mother Manda Miller?|Christine Tremarco|Faye Marsay|Jo Hartley|Erin Doherty|Medium|Christine Tremarco|Manda Miller|Mother Character|Main Cast|Actor Casting|Miller Family|Adolescence
 Who portrays Jamie's older sister Lisa Miller?|Amélie Pease|Fatima Bojang|Faye McKeever|Jo Hartley|Medium|Amelie Pease|Lisa Miller|Older Sister|Miller Family|Casting|Supporting Character|2025 Series
 Which actor plays investigating officer DI Luke Bascombe?|Ashley Walters|Stephen Graham|Mark Stanley|Darren Boyd|Easy|Ashley Walters|Luke Bascombe|Detective Inspector|Police Investigation|Actor Casting|Crime Case|Adolescence
 Who portrays Bascombe's police colleague DS Misha Frank?|Faye Marsay|Erin Doherty|Christine Tremarco|Hannah Walters|Medium|Faye Marsay|Misha Frank|Detective Sergeant|Police Team|Character Casting|Investigation|2025 Television
 Which actress plays psychologist Briony Ariston?|Erin Doherty|Faye Marsay|Christine Tremarco|Amélie Pease|Easy|Erin Doherty|Briony Ariston|Clinical Psychologist|Episode Three|Character Casting|Psychological Assessment|Drama
 Who plays the solicitor Paul Barlow during Jamie's police interview?|Mark Stanley|Ashley Walters|Stephen Graham|Owen Cooper|Medium|Mark Stanley|Paul Barlow|Solicitor|Police Interview|Legal Representation|Actor Casting|Episode One
 Who plays DI Bascombe's teenage son Adam?|Amari Bacchus|Owen Cooper|Kaine Davis|Mark Stanley|Hard|Amari Bacchus|Adam Bascombe|Detectives Son|School Investigation|Young Cast|Episode Two|Character Casting
 Which actress plays Katie's friend Jade in Adolescence?|Fatima Bojang|Amélie Pease|Faye Marsay|Christine Tremarco|Hard|Fatima Bojang|Jade|Katie Friend|School Scenes|Supporting Cast|Student Character|Episode Two
 What is the name of the schoolgirl whose murder Jamie is accused of committing?|Katie Leonard|Lisa Miller|Misha Frank|Briony Ariston|Easy|Katie Leonard|Murder Victim|Classmate|Jamie Arrest|School Tragedy|Central Case|Teenage Girl
 What kind of weapon is central to the crime investigated in Adolescence?|Knife|Handgun|Poisoned drink|Hammer|Easy|Knife Crime|Katie Leonard|Murder Weapon|Police Investigation|2025 Drama|Adolescent Violence|Central Incident
 What type of evidence do police show Jamie in episode one linking him to the killing?|CCTV footage|A handwritten confession|A recorded phone call|An anonymous letter|Medium|CCTV Evidence|Jamie Miller|Police Interview|Episode One|Murder Investigation|Video Recording|Case Proof
 Who acts as Jamie's appropriate adult during his initial police questioning?|His father Eddie|His sister Lisa|His teacher Mrs Fenumore|His friend Ryan|Medium|Eddie Miller|Appropriate Adult|Police Station|Parental Support|Episode One|Custody Interview|Family Responsibility
 In which episode do police visit Jamie's school to investigate the murder?|Episode two|Episode one|Episode three|Episode four|Medium|Episode Two|School Investigation|Luke Bascombe|Misha Frank|Student Interviews|Crime Scene Search|2025 Plot
 Which student helps DI Bascombe understand the online messages being used by pupils?|His son Adam|Jamie Miller|Lisa Miller|Briony Ariston|Medium|Adam Bascombe|Social Media Clues|Episode Two|Detective Son|Online Symbols|School Students|Investigation Breakthrough
 What filming technique was used throughout each episode of Adolescence?|A continuous single take|Stop-motion animation|A live studio audience|Split-screen documentary|Easy|Single Take|Continuous Shot|Filming Technique|Philip Barantini|Camera Movement|Drama Production|One Shot Episodes
 Who directed all four episodes of Adolescence?|Philip Barantini|Sam Miller|Jamie Payne|Harry Bradbeer|Medium|Philip Barantini|Director|One Take Filming|Creative Team|2025 Netflix|Four Episodes|Production Credits
 Which two people co-wrote Adolescence?|Stephen Graham and Jack Thorne|Neil Cross and Jed Mercurio|Phoebe Waller-Bridge and Emerald Fennell|Chris Chibnall and Sally Wainwright|Medium|Stephen Graham|Jack Thorne|Co Writers|Television Screenplay|Programme Creators|2025 Drama|Behind The Scenes
 Which 2021 film had previously brought Adolescence director Philip Barantini together with Stephen Graham?|Boiling Point|The Fallen Sun|The Last Duel|1917|Medium|Boiling Point|Philip Barantini|Stephen Graham|Previous Collaboration|One Shot Film|2021 Cinema|Production History
 What role does Briony Ariston perform during the third episode of Adolescence?|Psychological assessment of Jamie|Leading a school assembly|Arresting the suspect|Defending Jamie in court|Medium|Briony Ariston|Episode Three|Clinical Assessment|Jamie Miller|Psychologist|Interview Session|Mental Health Profession
 Whose birthday provides the setting for the fourth episode of Adolescence?|Eddie Miller's|Jamie Miller's|Lisa Miller's|Luke Bascombe's|Medium|Eddie Birthday|Episode Four|Family Gathering|Finale Setting|Miller Family|Celebration Disrupted|2025 Story
 What happened to Eddie's work van in the final episode of Adolescence?|It was vandalised with graffiti|It was stolen from his driveway|Its engine caught fire|It was impounded by police|Medium|Eddie Van|Graffiti|Episode Four|Family Harassment|Public Anger|Work Vehicle|Finale Story
 What decision does Jamie tell his family about over the telephone in the finale?|He intends to plead guilty|He wants to leave the country|He has become a police witness|He has been acquitted|Medium|Guilty Plea|Jamie Phone Call|Eddie Miller|Episode Four|Legal Decision|Finale Revelation|2025 Ending
 What item does Eddie tenderly tuck into bed in Jamie's bedroom at the end of Adolescence?|A teddy bear|A school blazer|A football|A family photograph|Medium|Teddy Bear|Jamies Bedroom|Eddie Grief|Final Scene|Father And Son|2025 Ending|Symbolic Gesture
 How was the camera briefly carried into the air at the end of Adolescence's second episode?|By a drone|By a helicopter|By a crane above the studio|By a weather balloon|Hard|Drone Camera|Episode Two Ending|Aerial Shot|One Take Transfer|Matthew Lewis|Cinematography|Camera Technique
 Which streaming service originally released the four-part series Adolescence?|Netflix|Apple TV+|Disney+|Prime Video|Easy|Netflix|Original Platform|2025 Streaming|Limited Series|Release Service|British Production|Distribution
 What personal question does Jamie insist that psychologist Briony answer near the end of their meeting?|Whether she likes him|Whether she is married|Whether she will call his father|Whether she knows his teacher|Medium|Briony Ariston|Jamie Miller|Episode Three|Psychologist Interview|Personal Approval|Emotional Conflict|Meeting Ending`
   }
 ];

 const FIRST_ID = 14922;
 let sequence = 0;

 const questions = groups.flatMap(group => group.facts.trim().split('\n').map(line => {
   const id = 'tv_' + String(FIRST_ID + sequence).padStart(5, '0');
   const parts = line.trim().split('|').map(value => value.trim());

   if (parts.length !== 13)
     throw new Error(`Wrong number of fields at ${id}: ${parts.length}`);

   const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;

   if (!question || !correctAnswer || [wrong1, wrong2, wrong3, ...specificTags].some(s => !s))
     throw new Error(`Missing field at ${id}`);

   if (!['Easy', 'Medium', 'Hard'].includes(difficulty))
     throw new Error(`Invalid difficulty at ${id}`);

   if (specificTags.length !== 7)
     throw new Error(`Wrong specialist tag count at ${id}`);

   const answers = [wrong1, wrong2, wrong3];

   if (new Set([correctAnswer, ...answers].map(a => a.toLowerCase())).size !== 4)
     throw new Error(`Duplicate answer option at ${id}`);

   answers.splice(sequence % 4, 0, correctAnswer);

   const tags = [...new Map([
     'Television',
     'Crime Drama',
     'British Television',
     'TV Drama',
     'Scripted Television',
     group.programme,
     `Programme: ${group.programme}`,
     group.era,
     group.broadcaster,
     group.topic,
     correctAnswer,
     ...specificTags
   ].map(tag => [tag.toLowerCase(), tag])).values()];

   sequence++;

   return {
     id,
     category: 'Television',
     programme: group.programme,
     question,
     answers,
     correctAnswer,
     difficulty,
     tags,
     dailyEligible: true
   };
 }));

 const EXPECTED_COUNT = 136;

 if (questions.length !== EXPECTED_COUNT)
   throw new Error(`Expected ${EXPECTED_COUNT}; got ${questions.length}`);

 if (questions[0].id !== 'tv_14922' ||
     questions[questions.length - 1].id !== 'tv_15057')
   throw new Error('Unexpected question ID range');

 if (new Set(questions.map(q => q.id)).size !== questions.length ||
     new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length)
   throw new Error('Repeated question ID or question wording');

 if (questions.some(q =>
   q.answers.length !== 4 ||
   !q.answers.includes(q.correctAnswer) ||
   q.tags.length < 14 ||
   !q.tags.includes(`Programme: ${q.programme}`) ||
   q.dailyEligible !== true
 ))
   throw new Error('Export validation failure');
// 21 November 2026 Pack 325 audit: 136 original questions and IDs
// tv_14922–tv_15057 unchanged. Source references are in tags on additions.
// Luther TVmaze and TheTVDB episode guides; Killing Eve TVmaze episode guide;
// Adolescence Netflix and cast/awards records (Television Academy and BAFTA).
const auditAdditions = [
  {
    "id": "tv_36788",
    "category": "Television",
    "programme": "Luther",
    "question": "In Luther, what tactic does John use on television to draw out the police sniper in the first series?",
    "answers": [
      "He taunts the gunman publicly",
      "He offers to resign from the police",
      "He broadcasts a fake confession",
      "He announces a citywide curfew"
    ],
    "correctAnswer": "He taunts the gunman publicly",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Luther",
      "Luther",
      "2010–2019 BBC television run",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: He taunts the gunman publicly",
      "UK English",
      "Research: https://www.tvmaze.com/shows/670/luther/episodeguide",
      "Series One Episode Two",
      "Police Sniper",
      "Television Appearance",
      "Investigative Tactic"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36789",
    "category": "Television",
    "programme": "Luther",
    "question": "In Luther, which criminal wakes from a coma in the first series while John investigates another murderer?",
    "answers": [
      "Cameron Pell",
      "Henry Madsen",
      "Toby Kent",
      "George Cornelius"
    ],
    "correctAnswer": "Henry Madsen",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Luther",
      "Luther",
      "2010–2019 BBC television run",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Henry Madsen",
      "UK English",
      "Research: https://www.tvmaze.com/shows/670/luther/episodeguide",
      "Henry Madsen",
      "Series One Episode Four",
      "Coma Recovery",
      "Detective Past"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36790",
    "category": "Television",
    "programme": "Luther",
    "question": "In Luther, what do the kidnappers demand as payment in the first series' fifth episode?",
    "answers": [
      "Gold bullion",
      "Bearer bonds",
      "Diamonds",
      "A cryptocurrency transfer"
    ],
    "correctAnswer": "Diamonds",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Luther",
      "Luther",
      "2010–2019 BBC television run",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Diamonds",
      "UK English",
      "Research: https://www.tvmaze.com/shows/670/luther/episodeguide",
      "Series One Episode Five",
      "Art Dealer Hostage",
      "Ransom Demand",
      "Precious Stones"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36791",
    "category": "Television",
    "programme": "Luther",
    "question": "In Luther, whose abduction forces Luther into a rescue mission in series two's second episode?",
    "answers": [
      "DCI Ian Reed's",
      "DS Catherine Halliday's",
      "DC Emma Lane's",
      "DS Justin Ripley's"
    ],
    "correctAnswer": "DS Justin Ripley's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Luther",
      "Luther",
      "2010–2019 BBC television run",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: DS Justin Ripley's",
      "UK English",
      "Research: https://www.tvmaze.com/shows/670/luther/episodeguide",
      "Series Two Episode Two",
      "Cameron Pell",
      "Abducted Detective",
      "Rescue Mission"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36792",
    "category": "Television",
    "programme": "Luther",
    "question": "In Luther, from what exploitative industry is Luther trying to rescue Jenny Jones in series two?",
    "answers": [
      "Prostitution",
      "Illegal gambling",
      "Arms dealing",
      "Art forgery"
    ],
    "correctAnswer": "Prostitution",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Luther",
      "Luther",
      "2010–2019 BBC television run",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Prostitution",
      "UK English",
      "Research: https://www.tvmaze.com/shows/670/luther/episodeguide",
      "Series Two Episode One",
      "Jenny Jones",
      "Criminal Exploitation",
      "Protection"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36793",
    "category": "Television",
    "programme": "Luther",
    "question": "In Luther, what object determines the apparently random killer's actions in series two's final episode?",
    "answers": [
      "Playing cards",
      "Dice",
      "Coins",
      "A stopwatch"
    ],
    "correctAnswer": "Dice",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Luther",
      "Luther",
      "2010–2019 BBC television run",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Dice",
      "UK English",
      "Research: https://www.tvmaze.com/shows/670/luther/episodeguide",
      "Series Two Episode Four",
      "Random Killer",
      "Dice Decisions",
      "Chance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36794",
    "category": "Television",
    "programme": "Luther",
    "question": "In Luther, whose death is Luther trying to conceal from Baba during series two?",
    "answers": [
      "Martin Schenk's",
      "Justin Ripley's",
      "Toby's",
      "George Stark's"
    ],
    "correctAnswer": "Toby's",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Luther",
      "Luther",
      "2010–2019 BBC television run",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Toby's",
      "UK English",
      "Research: https://www.tvmaze.com/shows/670/luther/episodeguide",
      "Series Two Episode Four",
      "Toby Death",
      "Baba",
      "Cover Up"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36795",
    "category": "Television",
    "programme": "Luther",
    "question": "In Luther, which decade's unsolved murders are echoed by the killer investigated in the opening of series three?",
    "answers": [
      "The 1950s",
      "The 1990s",
      "The 2000s",
      "The 1980s"
    ],
    "correctAnswer": "The 1980s",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Luther",
      "Luther",
      "2010–2019 BBC television run",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: The 1980s",
      "UK English",
      "Research: https://www.tvmaze.com/shows/670/luther/episodeguide",
      "Series Three Episode One",
      "Unsolved Cold Case",
      "Fetish Murders",
      "Copycat"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36796",
    "category": "Television",
    "programme": "Luther",
    "question": "In Luther, which detective introduces Justin Ripley to DSU George Stark in series three?",
    "answers": [
      "Erin Gray",
      "Rose Teller",
      "Emma Lane",
      "Catherine Halliday"
    ],
    "correctAnswer": "Erin Gray",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Luther",
      "Luther",
      "2010–2019 BBC television run",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Erin Gray",
      "UK English",
      "Research: https://www.tvmaze.com/shows/670/luther/episodeguide",
      "Series Three Episode One",
      "Erin Gray",
      "George Stark",
      "Police Investigation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36797",
    "category": "Television",
    "programme": "Luther",
    "question": "In Luther, how do John and Mary Day first encounter one another in series three?",
    "answers": [
      "They meet during a court hearing",
      "They bump into each other in the street",
      "They work at the same police station",
      "They meet at a wedding"
    ],
    "correctAnswer": "They bump into each other in the street",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Luther",
      "Luther",
      "2010–2019 BBC television run",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: They bump into each other in the street",
      "UK English",
      "Research: https://www.tvmaze.com/shows/670/luther/episodeguide",
      "Series Three Episode One",
      "Mary Day",
      "Romantic Introduction",
      "Chance Meeting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36798",
    "category": "Television",
    "programme": "Luther",
    "question": "In Luther, what are two young men doing when they are shot by the vigilante in series three?",
    "answers": [
      "Robbing a jewellery shop",
      "Stealing a police car",
      "Attacking a young couple",
      "Breaking into a school"
    ],
    "correctAnswer": "Attacking a young couple",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Luther",
      "Luther",
      "2010–2019 BBC television run",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Attacking a young couple",
      "UK English",
      "Research: https://www.tvmaze.com/shows/670/luther/episodeguide",
      "Series Three Episode Three",
      "Vigilante Case",
      "Young Couple",
      "Street Shooting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36799",
    "category": "Television",
    "programme": "Luther",
    "question": "In Luther, which vengeful killer targets Luther and his loved ones in series three's finale?",
    "answers": [
      "Pell",
      "Robey",
      "Madsen",
      "Marwood"
    ],
    "correctAnswer": "Marwood",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Luther",
      "Luther",
      "2010–2019 BBC television run",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Marwood",
      "UK English",
      "Research: https://www.tvmaze.com/shows/670/luther/episodeguide",
      "Series Three Episode Four",
      "Marwood Vendetta",
      "Mary Day",
      "Finale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36800",
    "category": "Television",
    "programme": "Luther",
    "question": "In Luther, where has John been living while away from the police at the start of series four?",
    "answers": [
      "In a rundown rural cottage",
      "In a houseboat on the Thames",
      "In a London hotel",
      "In a flat above a pub"
    ],
    "correctAnswer": "In a rundown rural cottage",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Luther",
      "Luther",
      "2010–2019 BBC television run",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: In a rundown rural cottage",
      "UK English",
      "Research: https://www.tvmaze.com/shows/670/luther/episodeguide",
      "Series Four Episode One",
      "Leave Of Absence",
      "Rural Retreat",
      "Return To London"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36801",
    "category": "Television",
    "programme": "Luther",
    "question": "In Luther, what horrifying habit distinguishes the murderer pursued in Luther's fourth series?",
    "answers": [
      "Leaving origami figures at crime scenes",
      "Eating parts of victims' bodies",
      "Painting portraits of victims",
      "Sending coded postcards"
    ],
    "correctAnswer": "Eating parts of victims' bodies",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Luther",
      "Luther",
      "2010–2019 BBC television run",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Eating parts of victims' bodies",
      "UK English",
      "Research: https://www.tvmaze.com/shows/670/luther/episodeguide",
      "Series Four Two Episodes",
      "Cannibal Killer",
      "Serial Investigation",
      "Gruesome Evidence"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36802",
    "category": "Television",
    "programme": "Luther",
    "question": "In Luther, what does Benny's hacking uncover during Luther's fourth-series investigation?",
    "answers": [
      "A missing prisoner's passport",
      "A hidden cache of gold",
      "A list of hundreds of potential victims",
      "A record of stolen police cars"
    ],
    "correctAnswer": "A list of hundreds of potential victims",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Luther",
      "Luther",
      "2010–2019 BBC television run",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: A list of hundreds of potential victims",
      "UK English",
      "Research: https://www.tvmaze.com/shows/670/luther/episodeguide",
      "Series Four Episode Two",
      "Benny Silver",
      "Computer Hacking",
      "Potential Victims"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36803",
    "category": "Television",
    "programme": "Luther",
    "question": "In Luther, which new detective is drawn into direct danger alongside John during Luther's fourth-series finale?",
    "answers": [
      "Catherine Halliday",
      "Erin Gray",
      "Rose Teller",
      "Emma Lane"
    ],
    "correctAnswer": "Emma Lane",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Luther",
      "Luther",
      "2010–2019 BBC television run",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Emma Lane",
      "UK English",
      "Research: https://www.tvmaze.com/shows/670/luther/episodeguide",
      "Series Four Finale",
      "Emma Lane",
      "Dangerous Confrontation",
      "Police Partner"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36804",
    "category": "Television",
    "programme": "Luther",
    "question": "In Luther, which London gangster exerts pressure on John while he investigates murders in series five?",
    "answers": [
      "George Cornelius",
      "Toby Kent",
      "Cameron Pell",
      "David Robey"
    ],
    "correctAnswer": "George Cornelius",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Luther",
      "Luther",
      "2010–2019 BBC television run",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: George Cornelius",
      "UK English",
      "Research: https://www.tvmaze.com/shows/670/luther/episodeguide",
      "Series Five Episode One",
      "George Cornelius",
      "Gangster",
      "Threats"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36805",
    "category": "Television",
    "programme": "Luther",
    "question": "In Luther, who takes charge of tracking the remaining killer while Luther is occupied elsewhere in series five's finale?",
    "answers": [
      "Emma Lane",
      "Catherine Halliday",
      "Erin Gray",
      "Rose Teller"
    ],
    "correctAnswer": "Catherine Halliday",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Luther",
      "Luther",
      "2010–2019 BBC television run",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Catherine Halliday",
      "UK English",
      "Research: https://www.tvmaze.com/shows/670/luther/episodeguide",
      "Series Five Episode Four",
      "Halliday Leads Hunt",
      "Investigation",
      "Finale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36806",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, whose murder prompts Eve to protect a key witness in the opening episode?",
    "answers": [
      "A British judge's",
      "A German journalist's",
      "A Russian politician's",
      "An Italian chef's"
    ],
    "correctAnswer": "A Russian politician's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: A Russian politician's",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Nice Face",
      "Series One Opener",
      "Russian Politician",
      "Witness Protection"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36807",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, in what sort of Berlin establishment is a Chinese colonel killed in series one?",
    "answers": [
      "A railway station",
      "An opera house",
      "A hotel restaurant",
      "A fetish clinic"
    ],
    "correctAnswer": "A fetish clinic",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: A fetish clinic",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Dont I Know You",
      "Chinese Colonel",
      "Berlin Case",
      "Assassination"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36808",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, what discovery from Berlin leads Eve to undertake her first surveillance operation?",
    "answers": [
      "Evidence of a mole",
      "A hidden gold shipment",
      "A forged passport factory",
      "A missing intelligence satellite"
    ],
    "correctAnswer": "Evidence of a mole",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Evidence of a mole",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Sorry Baby",
      "First Surveillance",
      "Berlin Intel",
      "Inside Informant"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36809",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, which organisation's member is Villanelle ordered to assassinate in England in the first series?",
    "answers": [
      "The Metropolitan Fire Brigade",
      "British Intelligence",
      "The Royal Navy",
      "The British Museum"
    ],
    "correctAnswer": "British Intelligence",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: British Intelligence",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Sorry Baby",
      "Villanelle Assignment",
      "UK Intelligence",
      "Assassination Order"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36810",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, where is Villanelle secretly placed during Eve and Carolyn's visit to Moscow in series one?",
    "answers": [
      "Inside a diplomatic hotel",
      "Inside a television studio",
      "Inside a Russian prison",
      "Inside an embassy residence"
    ],
    "correctAnswer": "Inside a Russian prison",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Inside a Russian prison",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Take Me To The Hole",
      "Moscow Trip",
      "Russian Jail",
      "Secret Infiltration"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36811",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, where does the injured Villanelle seek treatment after the first-series finale?",
    "answers": [
      "A rural pharmacy",
      "A dental clinic",
      "A monastery",
      "A hospital"
    ],
    "correctAnswer": "A hospital",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: A hospital",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Series Two Opener",
      "Stab Wound",
      "Medical Care",
      "Survival"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36812",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, which character introduces Eve to her new investigative team at the start of series two?",
    "answers": [
      "Carolyn Martens",
      "Niko Polastri",
      "Dasha",
      "Hélène"
    ],
    "correctAnswer": "Carolyn Martens",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Carolyn Martens",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Nice And Neat",
      "Second Series",
      "Intelligence Team",
      "Carolyn"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36813",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, which European city does Villanelle visit for the case in Desperate Times?",
    "answers": [
      "Vienna",
      "Amsterdam",
      "Madrid",
      "Prague"
    ],
    "correctAnswer": "Amsterdam",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Amsterdam",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Desperate Times",
      "Series Two Episode Four",
      "Amsterdam Trip",
      "Assassin Mission"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36814",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, which mysterious assassin does MI6 seek information from in the episode Smell Ya Later?",
    "answers": [
      "The Jackal",
      "The Falcon",
      "The Ghost",
      "The Raven"
    ],
    "correctAnswer": "The Ghost",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: The Ghost",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Smell Ya Later",
      "Assassin Nickname",
      "MI6 Investigation",
      "Secret Information"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36815",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, which marriage comes under strain as Villanelle embeds herself in a target's world in series two?",
    "answers": [
      "Carolyn and Konstantin's",
      "Dasha and Kenny's",
      "Villanelle and Aaron's",
      "Eve and Niko's"
    ],
    "correctAnswer": "Eve and Niko's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Eve and Niko's",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "I Hope You Like Missionary",
      "Niko Polastri",
      "Marriage Trouble",
      "Series Two"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36816",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, what is the title of Killing Eve's third-series opening episode?",
    "answers": [
      "Slowly Slowly Catchy Monkey",
      "Are You from Pinner?",
      "Hello Losers",
      "Nice Face"
    ],
    "correctAnswer": "Slowly Slowly Catchy Monkey",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Slowly Slowly Catchy Monkey",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Series Three Episode One",
      "Episode Title",
      "Eve Recovery",
      "2020 Season"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36817",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, which former trainer returns to Villanelle's life early in Killing Eve's third series?",
    "answers": [
      "Carolyn",
      "Dasha",
      "Elena",
      "Geraldine"
    ],
    "correctAnswer": "Dasha",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Dasha",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Series Three Opener",
      "Dasha",
      "Former Trainer",
      "Assassin Past"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36818",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, which newspaper-style team joins Eve's investigation after Kenny's death in the third series?",
    "answers": [
      "The Daily Gazette",
      "Morning Star",
      "Bitter Pill",
      "The Observer"
    ],
    "correctAnswer": "Bitter Pill",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Bitter Pill",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Management Sucks",
      "Kenny Colleagues",
      "Investigation",
      "Online Publication"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36819",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, in what country does Villanelle visit her family during Are You from Pinner?",
    "answers": [
      "Sweden",
      "Poland",
      "Romania",
      "Russia"
    ],
    "correctAnswer": "Russia",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Russia",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Are You From Pinner",
      "Series Three",
      "Villanelle Family",
      "Homecoming"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36820",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, what kind of community does Villanelle join in the final series in her attempt to change?",
    "answers": [
      "A church community",
      "A political campaign",
      "A theatre company",
      "A sports academy"
    ],
    "correctAnswer": "A church community",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: A church community",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Just Dunk Me",
      "Series Four Opener",
      "Church",
      "Reform Attempt"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36821",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, what type of job has Carolyn been pushed into at the start of the final series?",
    "answers": [
      "A university professorship",
      "An embassy role",
      "A hospital administration post",
      "A newspaper editorship"
    ],
    "correctAnswer": "An embassy role",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: An embassy role",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Just Dunk Me",
      "Carolyn Martens",
      "Embassy Assignment",
      "MI6 Sideline"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36822",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, in which country does Carolyn encounter an old acquaintance while following the Twelve in series four?",
    "answers": [
      "France",
      "Japan",
      "Cuba",
      "Norway"
    ],
    "correctAnswer": "Cuba",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Cuba",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Its Agony And Im Ravenous",
      "Carolyn",
      "Cuba Assignment",
      "Former Acquaintance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36823",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, what organisation's senior leadership is Eve trying to identify during the final series?",
    "answers": [
      "Interpol",
      "The Red Cross",
      "The United Nations",
      "The Twelve"
    ],
    "correctAnswer": "The Twelve",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: The Twelve",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Series Four",
      "Top Tier",
      "Eve Polastri",
      "Secret Organisation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36824",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, who refuses to help Villanelle when she asks for assistance in A Rainbow in Beige Boots?",
    "answers": [
      "Eve Polastri",
      "Dasha",
      "Geraldine",
      "Elena Felton"
    ],
    "correctAnswer": "Eve Polastri",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Eve Polastri",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "A Rainbow In Beige Boots",
      "Eve Rejects Villanelle",
      "Series Four",
      "Help Request"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36825",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, what kind of people does Villanelle attempt to kill when making her violence supposedly altruistic in the final series?",
    "answers": [
      "Only retired spies",
      "Those who oppressed her",
      "Only corrupt bankers",
      "Those who rejected her cooking"
    ],
    "correctAnswer": "Those who oppressed her",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Those who oppressed her",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Dont Get Attached",
      "Series Four",
      "Villanelle Motives",
      "Revenge"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36826",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, which character does Eve decide she may need for her expanded revenge mission in Making Dead Things Look Nice?",
    "answers": [
      "Niko",
      "Bill Pargrave",
      "Villanelle",
      "Frank Haleton"
    ],
    "correctAnswer": "Villanelle",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Villanelle",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Making Dead Things Look Nice",
      "Eve Revenge",
      "Final Series",
      "Reluctant Alliance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36827",
    "category": "Television",
    "programme": "Killing Eve",
    "question": "In Killing Eve, what is the title of Killing Eve's penultimate episode?",
    "answers": [
      "Nice Face",
      "The Hungry Caterpillar",
      "The Red Door",
      "Making Dead Things Look Nice"
    ],
    "correctAnswer": "Making Dead Things Look Nice",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Killing Eve",
      "Killing Eve",
      "2018–2022 four seasons",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Making Dead Things Look Nice",
      "UK English",
      "Research: https://www.tvmaze.com/shows/22904/killing-eve/episodeguide",
      "Series Four Episode Seven",
      "Penultimate Episode",
      "Episode Title",
      "Finale Build Up"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36828",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, which actor played Jamie's schoolfriend Ryan Kowalska?",
    "answers": [
      "Kaine Davis",
      "Amari Bacchus",
      "Austin Haynes",
      "Owen Cooper"
    ],
    "correctAnswer": "Kaine Davis",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Kaine Davis",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "Ryan Kowalska",
      "Kaine Davis",
      "Supporting Cast",
      "School Investigation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36829",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, which actress played murder victim Katie Leonard?",
    "answers": [
      "Fatima Bojang",
      "Emilia Holliday",
      "Amélie Pease",
      "Erin Doherty"
    ],
    "correctAnswer": "Emilia Holliday",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Emilia Holliday",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "Katie Leonard",
      "Emilia Holliday",
      "Victim Casting",
      "School Drama"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36830",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, who portrayed the school worker Mrs Bailey?",
    "answers": [
      "Jo Hartley",
      "Faye Marsay",
      "Hannah Walters",
      "Christine Tremarco"
    ],
    "correctAnswer": "Hannah Walters",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Hannah Walters",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "Mrs Bailey",
      "Hannah Walters",
      "Supporting Actress",
      "School Staff"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36831",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, which student admits supplying the knife used in Katie's murder?",
    "answers": [
      "Adam Bascombe",
      "Fredo",
      "Jamie Miller",
      "Ryan Kowalska"
    ],
    "correctAnswer": "Ryan Kowalska",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Ryan Kowalska",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "Ryan Kowalska",
      "Murder Weapon",
      "Second Episode",
      "Police Interview"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36832",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, on what charge is Ryan arrested after admitting he supplied Jamie the knife?",
    "answers": [
      "Conspiracy to murder",
      "Perverting the course of justice",
      "Aggravated burglary",
      "Criminal damage"
    ],
    "correctAnswer": "Conspiracy to murder",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Conspiracy to murder",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "Ryan Arrest",
      "Conspiracy To Murder",
      "Episode Two",
      "Police Case"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36833",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, which social-media platform is central to the comments that intensify Jamie and Katie's conflict?",
    "answers": [
      "LinkedIn",
      "Instagram",
      "Reddit",
      "Snapchat"
    ],
    "correctAnswer": "Instagram",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Instagram",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "Instagram",
      "Teen Online Conflict",
      "Comments",
      "Episode Two"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36834",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, what online subculture label does Katie's emoji language imply about Jamie?",
    "answers": [
      "Gamer",
      "Influencer",
      "Incel",
      "Hacker"
    ],
    "correctAnswer": "Incel",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Incel",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "Incel Label",
      "Emoji Meanings",
      "Online Bullying",
      "Episode Two"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36835",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, roughly how long after Katie's murder does the psychologist meet Jamie in episode three?",
    "answers": [
      "Three days",
      "One week",
      "Two years",
      "Seven months"
    ],
    "correctAnswer": "Seven months",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Seven months",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "Seven Month Interval",
      "Episode Three",
      "Psychology Interview",
      "Timeline"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36836",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, what kind of institution hosts Jamie's assessment by Briony Ariston?",
    "answers": [
      "A secure training centre",
      "A psychiatric hospital",
      "An ordinary school classroom",
      "A family home"
    ],
    "correctAnswer": "A secure training centre",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: A secure training centre",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "Secure Training Centre",
      "Briony Ariston",
      "Episode Three",
      "Pretrial Assessment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36837",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, how old is Eddie Miller on the birthday featured in the final episode?",
    "answers": [
      "40",
      "50",
      "45",
      "60"
    ],
    "correctAnswer": "50",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: 50",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "Eddie Fiftieth Birthday",
      "Episode Four",
      "Family Drama",
      "Finale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36838",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, what kind of shop does Eddie visit while trying to remove graffiti from his van?",
    "answers": [
      "A bookshop",
      "A pharmacy",
      "A hardware shop",
      "A shoe shop"
    ],
    "correctAnswer": "A hardware shop",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: A hardware shop",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "Hardware Store",
      "Vandalised Van",
      "Episode Four",
      "Eddie Miller"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36839",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, what takeaway cuisine do the Millers agree to order as they try to salvage the birthday evening?",
    "answers": [
      "Indian",
      "Italian",
      "Thai",
      "Chinese"
    ],
    "correctAnswer": "Chinese",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Chinese",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "Chinese Takeaway",
      "Family Night",
      "Episode Four",
      "Birthday"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36840",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, who served as cinematographer on Adolescence's continuous-shot episodes?",
    "answers": [
      "Matthew Lewis",
      "Philip Barantini",
      "Aaron May",
      "Mark Herbert"
    ],
    "correctAnswer": "Matthew Lewis",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Matthew Lewis",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "Matthew Lewis",
      "Cinematography",
      "Continuous Take",
      "Production Credits"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36841",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, which duo composed the original music for Adolescence?",
    "answers": [
      "Hans Zimmer and James Newton Howard",
      "Aaron May and David Ridley",
      "John Williams and Michael Giacchino",
      "Clint Mansell and Max Richter"
    ],
    "correctAnswer": "Aaron May and David Ridley",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Aaron May and David Ridley",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "Aaron May",
      "David Ridley",
      "Music Credits",
      "Production"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36842",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, who won the 2025 Primetime Emmy for supporting actor in a limited series for Adolescence?",
    "answers": [
      "Ashley Walters",
      "Stephen Graham",
      "Owen Cooper",
      "Mark Stanley"
    ],
    "correctAnswer": "Owen Cooper",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Owen Cooper",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "2025 Emmy",
      "Supporting Actor",
      "Owen Cooper",
      "Jamie Miller"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36843",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, who won the 2025 Primetime Emmy for supporting actress in a limited series for Adolescence?",
    "answers": [
      "Christine Tremarco",
      "Faye Marsay",
      "Hannah Walters",
      "Erin Doherty"
    ],
    "correctAnswer": "Erin Doherty",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Erin Doherty",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "2025 Emmy",
      "Supporting Actress",
      "Erin Doherty",
      "Briony Ariston"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36844",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, who won the 2026 BAFTA Television Award for Leading Actor for Adolescence?",
    "answers": [
      "Stephen Graham",
      "Owen Cooper",
      "Ashley Walters",
      "Mark Stanley"
    ],
    "correctAnswer": "Stephen Graham",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Stephen Graham",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "2026 BAFTA",
      "Leading Actor",
      "Stephen Graham",
      "Eddie Miller"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36845",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, who won the 2026 BAFTA Television Award for Supporting Actress for Adolescence?",
    "answers": [
      "Erin Doherty",
      "Christine Tremarco",
      "Faye Marsay",
      "Hannah Walters"
    ],
    "correctAnswer": "Christine Tremarco",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Christine Tremarco",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "2026 BAFTA",
      "Supporting Actress",
      "Christine Tremarco",
      "Manda Miller"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36846",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, which programme category did Adolescence win at the 2026 BAFTA Television Awards?",
    "answers": [
      "International Series",
      "Comedy Entertainment Programme",
      "Limited Drama",
      "Reality and Constructed Factual"
    ],
    "correctAnswer": "Limited Drama",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Limited Drama",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "2026 BAFTA",
      "Limited Drama",
      "Programme Award",
      "British Television"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36847",
    "category": "Television",
    "programme": "Adolescence",
    "question": "In Adolescence, which director received the 2025 Primetime Emmy for directing Adolescence?",
    "answers": [
      "Matthew Lewis",
      "Jack Thorne",
      "Stephen Graham",
      "Philip Barantini"
    ],
    "correctAnswer": "Philip Barantini",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Crime Drama",
      "TV Drama",
      "Programme: Adolescence",
      "Adolescence",
      "2025 Netflix limited series",
      "Episode-level audit",
      "Specific storyline or credit",
      "Correct answer: Philip Barantini",
      "UK English",
      "Research: https://www.netflix.com/tudum/adolescence and https://en.wikipedia.org/wiki/Adolescence_(TV_series)",
      "2025 Emmy",
      "Directing",
      "Philip Barantini",
      "One Shot"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length !== 196 ||
 questions[0].id !== 'tv_14922' || questions[135].id !== 'tv_15057' ||
 auditAdditions[0].id !== 'tv_36788' ||
 auditAdditions[auditAdditions.length - 1].id !== 'tv_36847' ||
 new Set(questions.map(q=>q.id)).size !== questions.length ||
 new Set(questions.map(q=>q.question.toLowerCase().trim())).size !== questions.length ||
 questions.some(q=>q.category !== 'Television' || !q.programme ||
 q.answers.length !== 4 || new Set(q.answers.map(x=>x.toLowerCase())).size !== 4 ||
 q.answers.filter(a=>a === q.correctAnswer).length !== 1 ||
 !q.tags.includes('Programme: '+q.programme) || q.tags.length < 14 ||
 q.dailyEligible !== true) ||
 auditAdditions.some(q=>q.tags.length < 16 || !q.question.includes(q.programme))) {
 throw Error('Pack 325 audit validation failure');
}
module.exports = questions;
