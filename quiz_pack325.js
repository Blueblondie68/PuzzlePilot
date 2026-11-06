
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

 module.exports = questions;
