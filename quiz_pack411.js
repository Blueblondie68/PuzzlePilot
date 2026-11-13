
 // PuzzlePilot - Big Quiz - Pack 411
 // Airline (ITV fly-on-the-wall documentary, 1998-2007).
 // Covers the Britannia Airways opening, easyJet years, airport staff and documented stories.
 // Completed programme: 2007. First ID tv_23012. Full WordPad-ready CommonJS.
 'use strict';

 const FIRST_ID = 23012;
 const commonTags = [
   'television', 'Airline ITV', 'fly on the wall',
   'airport documentary', 'British factual TV', 'aviation'
 ];

 // Format: question | correct | wrong 1 | wrong 2 | wrong 3 | difficulty | seven precise tags.
 // Dates in tags rather than question wording unless needed for the question.
 const rows = [
   `On which British television network was the documentary Airline originally shown?|ITV|BBC One|Channel 4|Channel 5|Easy|original broadcaster|ITV1|1998 debut|network|British documentary|transmission|programme history`,
   `What type of documentary filming is used in the ITV series Airline?|Fly-on-the-wall observation|Historical reconstruction|Studio panel discussion|Wildlife time-lapse|Easy|observational series|real staff|passenger encounters|unscripted television|documentary format|real events|camera crew`,
   `In which year did the ITV documentary Airline first air?|1998|1995|2001|2004|Medium|1998|premiere year|original run|launch|Britannia Airways|series one|broadcast chronology`,
   `Which airline was followed in the first series of ITV's Airline?|Britannia Airways|easyJet|Ryanair|British Airways|Easy|Britannia Airways|first series|1998|charter airline|opening programmes|airline switch|early episodes`,
   `At which airport was the first series of Airline filmed with Britannia Airways?|Manchester Airport|Luton Airport|Bristol Airport|Gatwick Airport|Medium|Manchester Airport|Britannia Airways|1997 filming|series one|North West England|charter flights|original location`,
   `Which low-cost carrier became the main subject of Airline from its second series?|easyJet|Ryanair|Flybe|Jet2|Easy|easyJet|second series|1999|budget airline|programme transition|passengers|ground staff`,
   `In which year did the first easyJet-focused series of Airline air?|1999|1997|2002|2005|Medium|1999|easyJet debut|second series|January|filming transition|budget carrier|chronology`,
   `Which production company made the ITV documentary Airline?|London Weekend Television|Granada Yorkshire Television|Thames Television|Hat Trick Productions|Medium|London Weekend Television|LWT|production company|ITV factual|programme production|company history|1998`,
   `Who narrated the original Britannia Airways series of Airline?|Charlie Higson|Tony Robinson|Stephen Fry|John Nettles|Medium|Charlie Higson|first series|1998|voiceover|Britannia Airways|narrator credits|comedian`,
   `Which actor and presenter narrated many of the easyJet-era series of Airline?|Tony Robinson|Michael Palin|Alan Titchmarsh|Richard Wilson|Easy|Tony Robinson|narration|easyJet era|series two and three|later seasons|voiceover artist|presenter`,
   `Which narrator provided the voiceover for the middle series of Airline, between Tony Robinson's runs?|Veronika Hyks|Liza Tarbuck|Sue Barker|Julia Bradbury|Hard|Veronika Hyks|narrator|series four to six|voiceover|2000 to 2002|credits|presenter`,
   `Which song provides the opening theme for the ITV documentary Airline?|Come Fly with Me|Leaving on a Jet Plane|Fly Me to the Moon|Up, Up and Away|Easy|Come Fly with Me|opening theme|theme music|song title|intro|programme identity|music`,
   `Which singer recorded the version of Come Fly with Me used for Airline's opening theme?|Tina May|Ella Fitzgerald|Cleo Laine|Petula Clark|Hard|Tina May|theme performer|jazz vocalist|Come Fly with Me|opening credits|soundtrack|song recording`,
   `Which director was credited with making the ITV documentary Airline?|Richard Cowles|Peter Kosminsky|Michael Apted|Paul Greengrass|Hard|Richard Cowles|director|production credits|factual television|programme making|filmmaker|LWT`,
   `Which businessman, the founder of easyJet, appeared in ITV's Airline?|Stelios Haji-Ioannou|Richard Branson|Michael O'Leary|Willie Walsh|Easy|Stelios Haji Ioannou|easyJet founder|entrepreneur|airline leadership|business|company history|on screen`,
   `Which ground-handling company employed many of the staff featured in the early easyJet years of Airline?|Reed Aviation|Swissport|Menzies Aviation|Servisair|Medium|Reed Aviation|handling agents|early easyJet|check in staff|uniforms|airport operations|employment`,
   `Which ground-handling company's uniforms appeared on former Reed Aviation staff in a later series of Airline?|Aviance|Flybe|TUI|Aer Lingus|Hard|Aviance|Reed Aviation successor|series seven|ground handling|staff uniforms|2003|airport employer`,
   `Which pair of airports became the main focus of the easyJet years of Airline?|Luton and Liverpool|Heathrow and Cardiff|Birmingham and Exeter|Glasgow and Norwich|Easy|London Luton|Liverpool Airport|principal locations|easyJet|ground crew|regional bases|1999 onwards`,
   `Which Northern Ireland airport became a recurring location in later series of Airline?|Belfast|Derry|Newry|Enniskillen|Medium|Belfast Airport|Northern Ireland|later series|easyJet operations|regional location|ground staff|airport expansion`,
   `Which South West England airport became another regular setting in Airline?|Bristol Airport|Exeter Airport|Newquay Airport|Bournemouth Airport|Medium|Bristol Airport|South West England|later seasons|ground staff|easyJet base|regional airport|filming`,
   `Which North East England airport also featured in the later years of Airline?|Newcastle Airport|Leeds Bradford Airport|Durham Tees Valley Airport|Humberside Airport|Medium|Newcastle Airport|North East England|later series|easyJet staff|terminal stories|regional base|filming locations`,
   `Which US airline was followed by the American adaptation of Airline?|Southwest Airlines|Delta Air Lines|United Airlines|JetBlue|Medium|Southwest Airlines|American remake|US adaptation|budget airline|international format|airline TV|spin off`,
   `In which year did the original ITV run of Airline come to an end?|2007|2002|2010|2013|Medium|2007|final broadcast|January 19|series ten|programme ending|transmission|ITV history`,
   `Which special Airline programme focused on festive airport operations in 1999?|Airline at Christmas|Airline in the Snow|Airline Holiday Special|Airline Goes Abroad|Medium|Airline at Christmas|1999|festive programme|special episode|airport operations|Luton terminal|Christmas television`,
   `Which series of Airline was the first to feature the new terminal at Luton Airport?|Series four|Series two|Series six|Series nine|Medium|series four|Luton new terminal|2000|airport renovation|filming location|terminal history|programme chronology`,
   `The seventh series of Airline followed easyJet's integration with which airline?|Go Fly|British Midland|Monarch Airlines|Virgin Atlantic|Medium|Go Fly|easyJet merger|series seven|2003|former Go staff|new uniforms|airline expansion`,
   `Which Airline regular was best known for handling passengers' complaints at easyJet check-in?|Jane Boulton|Janey Stock|Katrina Leeder|Sarah Tier|Easy|Jane Boulton|troubleshooter|customer complaints|Luton|check in supervisor|regular contributor|passenger disputes`,
   `Which Airline regular worked as a check-in assistant and shared her cancer-treatment journey on camera?|Katrina Leeder|Leanne Cheung|Sarah Tier|Helen Skeggs|Medium|Katrina Leeder|check in assistant|1999|personal storyline|cancer treatment|Luton staff|wedding`,
   `Which Airline regular later became an assistant manager at Luton and was frequently seen dealing with delays?|Leo Jones|Kevin Reardon|James McBride|Bob Brain|Easy|Leo Jones|assistant manager|Luton Airport|customer service|disruption|airport operations|later series`,
   `Which Airline regular worked in aircraft dispatch at Liverpool in the early easyJet series?|Kevin Reardon|Tony Underwood|Graham Fraser|Brett Holland|Medium|Kevin Reardon|dispatcher|Liverpool Airport|aircraft dispatch|early easyJet|ground operations|1999`,
   `Who was the Luton manager featured during Airline's third and fourth series?|Graham Fraser|Leo Jones|Richard Oates|Chris Pell|Medium|Graham Fraser|Luton manager|series three and four|staff leadership|2000|wedding storyline|easyJet`,
   `Which Airline regular was a supervisor at Liverpool Airport?|Leanne Cheung|Jane Boulton|Debbie Hopkins|Machell Riley|Medium|Leanne Cheung|Liverpool supervisor|check in staff|passenger issues|regional crew|easyJet|recurring contributor`,
   `Which pilot appeared frequently in Airline's earlier easyJet series?|James McBride|Chris Pell|Pete Klack|Tony Rex|Medium|James McBride|easyJet captain|aerobatics|flight crew|series three|pilot stories|recurring staff`,
   `Which cabin crew member of easyJet was featured in the third and fourth series of Airline?|Janey Stock|Pat Baines|Cathy Duffy|Debbie Hopkins|Medium|Janey Stock|cabin crew|purser|series three and four|flight attendant|Bluey the dog|on board staff`,
   `Which Britannia Airways steward in the opening series of Airline was nicknamed BJ?|Brian John Aldridge|Brett Holland|Bob Brain|James McBride|Hard|Brian John Aldridge|BJ|Britannia steward|series one|flight crew|1998|nickname`,
   `Which pair of trainee cabin crew members featured in Airline's original Britannia Airways episodes?|Aaron and Jason|Leo and Brett|James and Kevin|Graham and Alan|Medium|Aaron Smith|Jason Ravengard|cabin crew training|Britannia Airways|series one|recruits|1998`,
   `In the first series of Airline, a twelve-year-old passenger was left behind when her passport caused problems before a flight to where?|Ibiza|Malta|Crete|Paris|Medium|Ibiza|passport mix up|young traveller|Cathy|Britannia Airways|series one|travel documents`,
   `In the first series of Airline, Pat Baines hoped to retrain for which job?|Flight attendant|Air traffic controller|Aircraft engineer|Travel journalist|Medium|Pat Baines|career ambitions|stewardess training|Britannia Airways|series one|staff development|cabin crew`,
   `Which national football team arrived on a flight featured in the final episode of Airline's first series?|England|Scotland|Wales|Republic of Ireland|Medium|England football team|World Cup qualification|Britannia Airways|series one finale|1998|team arrival|football`,
   `Which unexpected live creatures caused trouble for easyJet staff in Airline's first easyJet episode?|Lobsters and dogs|Snakes and parrots|Sheep and horses|Rabbits and lizards|Medium|lobsters|dogs|animal transport|series two premiere|1999|passenger luggage|live animals`,
   `In an early easyJet episode of Airline, motorway delays threatened the travel plans of passengers flying to which French city?|Nice|Lyon|Paris|Bordeaux|Medium|Nice|motorway collision|fifty travellers|Jane Boulton|series two|delayed arrival|France`,
   `Which occasion did Airline follow as Katrina Leeder juggled medical treatment and family plans?|Her wedding|Her graduation|Her retirement party|Her driving test|Medium|Katrina Leeder|wedding|1999|cancer treatment|personal life|series two|Julian`,
   `Which famous RAF aerobatic team was expected at Liverpool Airport in an early easyJet episode of Airline?|The Red Arrows|The Black Eagles|The Blue Angels|The Patrouille de France|Medium|Red Arrows|Royal Air Force|Liverpool airport|series two|1999|air display team|aviation visitors`,
   `In Airline's early easyJet episodes, Katrina and her husband Julian finally left for what delayed trip?|Their honeymoon|A ski competition|A business conference|A family christening|Medium|Katrina Leeder|Julian|honeymoon|series two finale|1999|wedding aftermath|personal journey`,
   `Which pop star from Duran Duran delighted Jane Boulton by appearing at Luton in Airline?|Simon Le Bon|George Michael|Rick Astley|Midge Ure|Medium|Simon Le Bon|Duran Duran|Jane Boulton|celebrity passenger|Luton|1999|series three`,
   `In an episode of Airline, which small pet named Pee Pee was refused permission to fly to Greece?|A hamster|A rabbit|A budgerigar|A guinea pig|Medium|Pee Pee|hamster|animal restrictions|Greece flight|series three|1999|pet travel`,
   `In Airline's third series, Captain James McBride travelled to northern France hoping to witness what astronomical event?|A solar eclipse|A meteor shower|A lunar eclipse|A comet landing|Hard|James McBride|solar eclipse|northern France|1999|aerobatic pilot|series three|off duty journey`,
   `In the fourth series of Airline, trainee Georgie Hobbs hoped to qualify for which role at easyJet?|Pilot|Cabin purser|Baggage handler|Check-in manager|Medium|Georgie Hobbs|pilot training|female pilots|Amsterdam flight|2000|career progression|series four`,
   `Which animals did a passenger try to take through security en route to Majorca in Airline's fourth series?|Tortoises|Ferrets|Pigeons|Tropical fish|Medium|tortoises|Majorca|airport security|animal travel|series four|2000|unusual luggage`,
   `Contestants from which ITV dating programme were seen practising questions with Airline's Liverpool check-in staff?|Blind Date|Take Me Out|Dinner Date|First Dates|Medium|Blind Date|contestants|Liverpool check in|ITV dating show|series four|2000|television crossover`,
   `An Airline passenger boarded for Palma in Majorca when she had actually meant to travel to which Italian city?|Parma|Pisa|Padua|Perugia|Hard|Parma|Palma|destination mix up|series four|2000|Italian city|wrong flight`,
   `Which behind-the-scenes airport job did Jane Boulton try out after tiring of check-in in Airline?|Aircraft dispatcher|Security screener|Flight instructor|Control tower operator|Medium|Jane Boulton|dispatch work|career change|series five|2001|aircraft turnaround|ground operations`,
   `Which former England rugby union player began an airline career featured in Airline?|Tony Underwood|Will Greenwood|Martin Johnson|Jason Robinson|Medium|Tony Underwood|rugby union|former England player|pilot career|series five|2001|sports crossover`,
   `Which former Coronation Street actress was filmed heading home to Marbella during Airline's fifth series?|Beverley Callard|Helen Worth|Julie Goodyear|Sue Nicholls|Medium|Beverley Callard|Coronation Street|Marbella|celebrity passenger|series five|2001|soap actor`,
   `Which British rock band serenaded airport workers in an episode of Airline's fifth series?|Marillion|Slade|Status Quo|The Moody Blues|Medium|Marillion|rock group|airport serenade|series five|2001|musical cameo|celebrity travellers`,
   `Which European city gained easyJet-operated check-in desks in the fifth series of Airline?|Geneva|Rome|Vienna|Madrid|Medium|Geneva|Swiss airport|easyJet check in|series five|2001|international operations|expansion`,
   `Which real-world crisis was followed through its effect on easyJet at Luton in Airline's sixth series?|The September 11 attacks|The Icelandic volcanic ash cloud|The 2008 financial crash|The 2010 snowstorm|Medium|September 11 2001|security changes|flight cancellations|Luton Airport|series six|2002 broadcast|aviation disruption`,
   `In Airline's sixth series, Luton duty manager Alan Derbyshire prepared to receive which life-changing medical gift from his wife Gill?|A kidney|A liver|A cornea|Bone marrow|Medium|Alan Derbyshire|Gill Derbyshire|kidney donation|organ transplant|series six|2002|personal story`,
   `Which male dance group gave Airline check-in staff an impromptu show during the sixth series?|The Dreamboys|Diversity|BalletBoyz|The Chippendales UK|Hard|Dreamboys|male performers|check in entertainment|series six|2002|staff surprise|celebrity act`,
   `Which Spanish festival, famous for throwing tomatoes, featured in Airline's sixth series?|La Tomatina|Las Fallas|San Fermin|Feria de Abril|Medium|La Tomatina|tomato throwing|Valencia region|student travellers|series six|2002|festival`,
   `Which former footballer and actor signed autographs at Luton while travelling to a charity golf event in Airline?|Vinnie Jones|Ian Wright|Alan Shearer|Gary Lineker|Medium|Vinnie Jones|autograph requests|Luton Airport|charity golf|series six|2002|celebrity guest`,
   `In Airline's sixth series, Jane Boulton helped a passenger display a proposal message on an object of what type?|A large banner|A hot-air balloon|A skywriting aircraft|A giant cake|Hard|Jane Boulton|marriage proposal|forty foot banner|series six|2002|fear of heights|romantic gesture`,
   `Which air-traffic control centre experienced a computer crash that stranded thousands of passengers in Airline?|Swanwick|Prestwick|Shanwick|West Drayton|Hard|Swanwick|air traffic control|computer failure|series six|2002|flight disruption|Leo Jones`,
   `Which airport's new John Lennon terminal was officially opened by the Queen in an Airline episode?|Liverpool Airport|Luton Airport|Bristol Airport|Newcastle Airport|Medium|Liverpool John Lennon Airport|royal opening|Queen Elizabeth II|new terminal|series six|2002|airport history`,
   `Which entrepreneur's farewell press conference in Airline's seventh series was attended by Richard Branson?|Stelios Haji-Ioannou|Michael O'Leary|Freddie Laker|John Hays|Hard|Stelios Haji Ioannou|Richard Branson|press conference|easyJet leadership|series seven|2003|publicity`,
   `What animal was a traveller caught carrying in her handbag at Liverpool John Lennon Airport in Airline?|A cat|A snake|A parrot|A rabbit|Medium|cat in handbag|Liverpool John Lennon Airport|pet transport|series seven|2003|baggage rule|animal travel`,
   `Which member of Girls Aloud was Leo Jones excited to see at the airport in Airline?|Nadine Coyle|Cheryl Tweedy|Sarah Harding|Kimberley Walsh|Medium|Nadine Coyle|Girls Aloud|Leo Jones|celebrity encounter|series seven|2003|Luton terminal`,
   `Which music legend was impersonated by a passenger flying from Liverpool to Malaga in Airline?|Elvis Presley|Freddie Mercury|David Bowie|Cliff Richard|Medium|Elvis impersonator|Liverpool Airport|Malaga|in flight performance|series seven|2003|celebrity tribute`,
   `In Airline's seventh series, dispatcher Chris Hall prepared for a charity dive into a tank containing what animals?|Sharks|Dolphins|Seals|Stingrays|Medium|Chris Hall|shark tank|charity fundraiser|series seven|2003|daredevil stunt|dispatcher`,
   `In Airline's eighth series, Leo Jones tried to save which unusual creatures at Luton Airport?|Three tropical fish|Two pet snakes|Four racing pigeons|A family of tortoises|Medium|Leo Jones|tropical fish|animal welfare|Luton Airport|series eight|2004|unusual case`,
   `In Airline's eighth series, two visiting ministers at Liverpool hoped to catch a flight to which Northern Ireland city?|Belfast|Derry|Lisburn|Bangor|Medium|Pentecostal ministers|Liverpool Airport|Belfast flight|missed boarding|series eight|2004|religious travellers`,
   `In Airline's eighth series, Captain Chris Pell and his wife Debbie hosted children visiting from which country?|Belarus|Estonia|Poland|Ukraine|Medium|Chris Pell|Debbie Pell|Belarus|Chernobyl aftermath|charity hosting|series eight|2004`,
   `Which Greek city was the destination of an overbooked flight that troubled Jane Peach in Airline's eighth series?|Athens|Thessaloniki|Heraklion|Patras|Medium|Jane Peach|Athens|overbooked flight|Liverpool airport|series eight|2004|passenger allocation`,
   `Which event did Newcastle airport staff organise for charity in Airline's eighth series?|A fashion show|A sponsored marathon|A baking competition|A car rally|Medium|charity fashion show|Helen Bramley|Newcastle Airport|staff fundraiser|series eight|2004|community event`,
   `Which former England goalkeeper challenged travellers to score goals to win free flights in Airline?|Peter Shilton|David Seaman|Ray Clemence|Joe Hart|Medium|Peter Shilton|football challenge|free flights|series nine|2005|promotion|celebrity guest`,
   `Which former Coronation Street actress flew to Paris for a charity event during Airline's ninth series?|Nikki Sanderson|Beverley Callard|Sally Dynevor|Kym Marsh|Medium|Nikki Sanderson|Coronation Street|charity trip|Paris|series nine|2005|performer appearance`,
   `In Airline's ninth series, lookalikes of Kylie Minogue, Britney Spears and Naomi Campbell flew to which city?|Prague|Barcelona|Nice|Milan|Medium|Prague|celebrity lookalikes|Gatwick Airport|Kylie Minogue|Britney Spears|Naomi Campbell|2005`,
   `Which band performed its Christmas hit Merry Xmas Everybody at Luton Airport in Airline?|Slade|Wizzard|Mud|The Darkness|Medium|Slade|Merry Xmas Everybody|Luton Airport|Christmas song|series nine|2005|music cameo`,
   `Which former EastEnders actor appeared at Luton on his way to Malaga in Airline's ninth series?|Mike Reid|Ross Kemp|Shane Richie|Steve McFadden|Medium|Mike Reid|EastEnders|Malaga|Luton Airport|series nine|2005|celebrity passenger`,
   `The ninth series of Airline followed a one-man Olympic skiing team representing which African country?|Ghana|Kenya|Morocco|Senegal|Hard|Ghana|Olympic skiing|one man team|series nine|2005|winter sport|unusual passenger`,
   `In Airline's ninth series, Katrina returned to meet staff with what family news?|She had twin daughters|She had become a pilot|She had emigrated to Canada|She had opened a hotel|Medium|Katrina Batham|twin girls|Leo Jones|cancer recovery|series nine|2005|family update`,
   `Which festive items was a passenger told she could not carry aboard a flight in Airline's final series?|Christmas crackers|Paper snowflakes|Christmas cards|Tinsel garlands|Medium|Christmas crackers|cabin baggage|Leo Jones|series ten|2006|aircraft rules|seasonal dispute`,
   `In Airline's final series, a wartime veteran travelled to pay respects at which Italian battlefield memorial?|Monte Cassino|Anzio|Salerno|Caporetto|Hard|Monte Cassino|Second World War|veteran pilgrimage|Italy|series ten|2006|remembrance`,
   `In Airline's final series, students flying from Bristol to Inverness struggled to protect what sports equipment?|Bicycles|Skis|Surfboards|Golf clubs|Medium|bicycles|Bristol Airport|Inverness flight|sports equipment|series ten|2006|packing luggage`,
   `Which animals did Belarusian children visit to see in Inverness with Airline pilot Chris Pell?|Dolphins|Penguins|Whales|Otters|Medium|Chris Pell|Belarusian children|Inverness|dolphins|charity outing|series ten|2006`,
   `Actors from which Channel 4 soap were seen heading for Sardinia in Airline's final series?|Hollyoaks|Brookside|EastEnders|Doctors|Medium|Hollyoaks|actors travel|Sardinia|Luton Airport|series ten|2006|celebrity travellers`,
   `Which performance group entertained passengers awaiting a flight to Berlin in the final series of Airline?|The Poetry Vandals|The Ukulele Orchestra|The Reduced Shakespeare Company|The Flying Pickets|Hard|Poetry Vandals|Berlin flight|spoken word performance|airport entertainment|series ten|2006|performers`,
   `In the final series of Airline, rumours said Bristol employee Sarah Borland had auditioned for which talent show?|The X Factor|Pop Idol|Britain's Got Talent|Fame Academy|Medium|Sarah Borland|The X Factor|singing audition|Bristol Airport|series ten|2007|staff gossip`,
   `In the last televised episode of Airline, a couple was removed from a flight because their baby appeared to have which illness?|Chickenpox|Measles|Mumps|Whooping cough|Medium|chickenpox|infant passenger|Bristol to Inverness|illness restrictions|series ten finale|2007|health concern`,
   `In the final episode of Airline, a visiting DJ arrived in Belfast and discovered which items had gone missing?|Bags containing his records|His passport and tickets|His mobile phone and laptop|His stage costume and shoes|Medium|DJ records|missing baggage|Belfast Airport|music performance|series ten finale|2007|lost luggage`
 ];

 const questions = rows.map((row, index) => {
   const parts = row.split('|').map(part => part.trim());
   if (parts.length !== 13 || parts.some(part => !part)) {
     throw new Error(`Pack 411: malformed row ${index + 1} (${parts.length} fields)`);
   }
   const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
   if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
     throw new Error(`Pack 411: invalid difficulty at row ${index + 1}`);
   }
   const question = stem.includes('Airline')
     ? stem
     : `In the ITV documentary Airline, ${stem[0].toLowerCase()}${stem.slice(1)}`;
   const answers = [wrong1, wrong2, wrong3];
   answers.splice(index % 4, 0, correctAnswer);
   if (new Set(answers.map(a => a.toLowerCase())).size !== 4) {
     throw new Error(`Pack 411: duplicate answer option at row ${index + 1}`);
   }
   const tags = [...new Set([...commonTags, ...specificTags])];
   if (tags.length !== 13) {
     throw new Error(`Pack 411: expected 13 distinct tags at row ${index + 1}, got ${tags.length}`);
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
