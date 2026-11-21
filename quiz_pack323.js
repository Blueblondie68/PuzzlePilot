
 // quiz_pack323.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: British workplace sitcoms
 // The Brittas Empire (1991-1997); The IT Crowd (2006-2013);
 // Green Wing (original television series, 2004-2007);
 // The Smoking Room (2004-2005).
 // Each row: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven individual tags
 // All exported questions carry explicit programme metadata and question-specific tags.

 const groups = [
     {
         programme: 'The Brittas Empire',
         era: '1991-1997',
         broadcaster: 'BBC One',
         topic: 'Gordon Brittas and the chaos at Whitbury New Town Leisure Centre',
         facts: `Who played leisure-centre manager Gordon Brittas in The Brittas Empire?|Chris Barrie|Richard Wilson|David Jason|John Cleese|Easy|Chris Barrie|Gordon Brittas|Lead Actor|Leisure Centre Manager|Nineties Sitcom|Character Casting|BBC Comedy
 What was the name of the leisure centre in The Brittas Empire?|Whitbury New Town Leisure Centre|Walford Leisure Centre|Walmington Sports Hall|Phoenix Fitness Centre|Easy|Whitbury New Town|Leisure Centre Name|Fictional Workplace|Council Sports Facility|Programme Setting|Gordon Brittas|Local Government
 In which year did The Brittas Empire first air on BBC One?|1991|1987|1995|2001|Easy|1991 Premiere|First Broadcast|BBC One|Nineties Comedy|Opening Series|Broadcast Timeline|British Sitcom History
 Who played Gordon Brittas's wife Helen?|Pippa Haywood|Harriet Thorpe|Judy Flynn|Julia St John|Easy|Pippa Haywood|Helen Brittas|Long Suffering Wife|Main Cast|Marriage Storyline|Actor And Role|1990s BBC
 Which actress played the efficient deputy manager Laura Lancing?|Julia St John|Jill Greenacre|Andree Bernard|Samantha Bond|Medium|Julia St John|Laura Lancing|Deputy Manager|First Five Series|Reliable Colleague|Casting|Workplace Dynamics
 Which actor played Colin Weatherby in The Brittas Empire?|Mike Burns|Tim Marriott|Russell Porter|Stephen Churchett|Medium|Mike Burns|Colin Weatherby|Deputy Manager|Caretaker Duties|Original Cast|Unfortunate Colleague|Character Casting
 Who played receptionist Carole Parkinson?|Harriet Thorpe|Pippa Haywood|Judy Flynn|Jill Greenacre|Easy|Harriet Thorpe|Carole Parkinson|Receptionist|Original Cast|Working Mother|Casting|BBC Sitcom
 Which actress played Brittas's sarcastic secretary Julie?|Judy Flynn|Andree Bernard|Julia St John|Pippa Haywood|Medium|Judy Flynn|Julie|Secretary|Sarcastic Colleague|Later Series Cast|Office Administration|Actress Identification
 Which actor played the gentle leisure-centre employee Gavin Featherly?|Tim Marriott|Russell Porter|Chris Barrie|Mike Burns|Medium|Tim Marriott|Gavin Featherly|Staff Member|Swimming Pool Duty|Tim Whistler Relationship|Character Casting|Sports Centre
 Who played Gavin's partner and fellow employee Tim Whistler?|Russell Porter|Tim Marriott|Mike Burns|Chris Barrie|Medium|Russell Porter|Tim Whistler|Gavin Featherly|Fitness Staff|Relationship|Cast Member|Leisure Centre
 Which actress played the lively staff member Linda in The Brittas Empire?|Jill Greenacre|Pippa Haywood|Harriet Thorpe|Judy Flynn|Medium|Jill Greenacre|Linda Perkin|Staff Member|Leisure Centre|Original Cast|Role Identification|BBC Comedy
 Which two writers created The Brittas Empire?|Richard Fegen and Andrew Norriss|David Croft and Jimmy Perry|Graham Linehan and Arthur Mathews|John Sullivan and Ray Galton|Medium|Richard Fegen|Andrew Norriss|Programme Creators|Sitcom Writers|Original Five Series|BBC Commission|Behind The Scenes
 How many television series of The Brittas Empire were broadcast?|Seven|Four|Five|Nine|Easy|Seven Series|1991 To 1997|Programme Run|Series Count|Broadcast History|BBC Sitcom|Episode Catalogue
 How many regular episodes of The Brittas Empire were made across its seven series?|52|24|36|70|Medium|Fifty Two Episodes|Seven Series|Episode Count|Original Run|Nineties Television|Programme Statistics|Sitcom History
 What was the title of The Brittas Empire's first episode?|Laying the Foundations|Underwater Wedding|Back from the Dead|The Trial|Medium|Laying The Foundations|First Episode|3 January 1991|New Manager Arrival|Series One|Episode Title|Workplace Chaos
 What caused the builders to stop working when Brittas arrived in the opening episode?|His interference with their work|A national builders' strike|A shortage of roof tiles|A cancelled planning permit|Medium|Builders Strike|Opening Episode|Laying The Foundations|Management Interference|Construction Site|Gordon Brittas|Leisure Centre Launch
 Which royal visitor was due to open the leisure centre in the episode Opening Day?|The Duchess of Kent|The Princess Royal|The Queen Mother|The Duchess of York|Medium|Duchess Of Kent|Opening Day|Royal Visit|1991 Episode|Official Ceremony|Leisure Centre Opening|Series One
 Which fault at the leisure centre entrance caused trouble during Opening Day?|Malfunctioning automatic doors|A missing stair lift|A collapsed revolving door|A flooded car park|Medium|Automatic Doors|Opening Day|Entrance Malfunction|Royal Visit|Building Defects|Series One|Workplace Disaster
 What unusual ceremony took place in the leisure-centre swimming pool in Underwater Wedding?|A wedding beneath the water|A diving championship|A christening|A retirement party|Easy|Underwater Wedding|Swimming Pool|1991 Series|Unusual Ceremony|Leisure Centre Event|Submerged Celebration|Episode Plot
 In Underwater Wedding, what became trapped in a grate at the bottom of the pool?|The best man's finger|The bride's shoe|A diver's oxygen hose|The celebrant's watch|Hard|Best Man Finger|Pool Grate|Underwater Wedding|Rescue Mishap|1991 Episode|Ceremony Disaster|Leisure Centre Pool
 Where did Carole famously keep her baby while working at reception?|In a desk drawer|Under the swimming pool|In the sports equipment cage|Inside the manager's car|Easy|Baby In Drawer|Carole Parkinson|Reception Desk|Working Mother|Unusual Childcare|Running Gag|Office Reception
 Which original Brittas Empire episode focused on Gordon investigating suspected workplace theft?|Stop Thief|Assassin|Temple of the Body|Safety First|Medium|Stop Thief|Series One|Staff Theft Allegation|Investigation|Gordon Brittas|Episode Title|Reception Chaos
 Which first-series episode involved someone attempting to kill Gordon Brittas?|Assassin|The Trial|The Opening Day|New Generations|Medium|Assassin|Series One Finale|Attempted Murder|Dangerous Schemes|Leisure Centre Manager|Episode Storyline|1991
 In which country was Gordon believed to have died before returning in the second-series opener?|Bulgaria|Portugal|France|Belgium|Hard|Bulgaria|Back From The Dead|Series Two Premiere|False Death Report|Training Trip|Staff Reaction|1992 Episode
 Which item of clothing prompts Brittas to investigate an apparent romance in Temple of the Body?|A bra|A necktie|A wedding dress|A pair of swimming trunks|Medium|Bra Behind Sofa|Temple Of The Body|Second Series|Suspicious Clothing|Office Investigation|Gordon Brittas|Relationship Suspicion
 What was the council particularly concerned about in An Inspector Calls?|Falling attendance at the centre|Too many library books|Rising cinema ticket prices|A shortage of lifeguards nationwide|Medium|An Inspector Calls|Local Authority|Falling Attendance|Council Inspector|Series Two|Leisure Centre Finances|Management Scrutiny
 What did Brittas diagnose the building with in the episode Set in Concrete?|Sick building syndrome|Dry rot|Asbestos poisoning|Subsidence|Hard|Sick Building Syndrome|Set In Concrete|Series Two|Building Health|Management Diagnosis|1992 Episode|Leisure Centre Problems
 Which episode involved Brittas running staff emergency drills while Helen tried coping without tranquillisers?|Safety First|Stop Thief|The Trial|Opening Day|Medium|Safety First|Staff Drills|Helen Brittas|Emergency Training|Series Two|1992 Episode|Health And Safety
 Which third-series episode put Gordon Brittas in the dock accused of murder?|The Trial|Assassin|The Disappearing Act|Exposed|Medium|The Trial|Series Three Premiere|Murder Charge|Courtroom|1993 Episode|False Accusation|Gordon Brittas
 Why did staff stop speaking to Gordon in That Creeping Feeling?|His personalised fitness programmes|His decision to close the pool|His ban on staff holidays|His refusal to buy uniforms|Hard|That Creeping Feeling|Fitness Programmes|Staff Silence|Third Series|Management Backlash|Workplace Protest|1993 Storyline
 What was Laura considering doing in the third-series episode Laura's Leaving?|Taking another job|Buying the leisure centre|Moving into reception|Becoming a professional swimmer|Medium|Lauras Leaving|Laura Lancing|Job Application|Possible Departure|Third Series|Deputy Manager|Career Decision
 What was the first name of Gordon Brittas's twin brother, introduced in Two Little Boys?|Horatio|Henry|Hugo|Harold|Hard|Horatio Brittas|Twin Brother|Two Little Boys|Family Connection|Third Series|Religious Vocation|1993 Episode
 Which actor also portrayed Brittas's twin brother Horatio?|Chris Barrie|Mike Burns|Tim Marriott|Russell Porter|Medium|Chris Barrie|Horatio Brittas|Dual Role|Twin Brother|Two Little Boys|Actor Performance|Third Series
 Which councillor repeatedly struggled to have Gordon removed from his management post?|Jack Druggett|Barry Crouse|Alan Statham|Denholm Reynholm|Medium|Jack Druggett|Local Councillor|Attempts To Dismiss|Gordon Brittas|Council Oversight|Political Character|Whitbury
 Who was Gavin Featherly's romantic partner among the leisure-centre staff?|Tim Whistler|Colin Weatherby|Gordon Brittas|Councillor Druggett|Easy|Gavin And Tim|Tim Whistler|Same Sex Relationship|Workplace Couple|Character Pair|Swimming Staff|Long Running Storyline
 Which series introduced Julie as a main regular in place of first-series character Angie?|Series two|Series three|Series five|Series seven|Hard|Julie Replaces Angie|Second Series|Cast Change|Judy Flynn|Andree Bernard|Reception Staff|Character Introduction
 Which employee was promoted to deputy manager in the fifth series of The Brittas Empire?|Gavin Featherly|Tim Whistler|Carole Parkinson|Julie|Hard|Gavin Promotion|Deputy Manager|Fifth Series|Staff Career|Tim Marriott|Management Change|Character Development
 What job did Carole take on after moving beyond reception duties?|Manager of the staff crèche|Head swimming coach|Centre accountant|Director of catering|Medium|Carole Parkinson|Creche Manager|Childcare Role|Career Reclassification|Laura Lancing|Third Series|Staff Responsibilities
 Which series-six episode featured Brittas trying to organise a staff photograph?|Snap Happy|The Trial|Laying the Foundations|Friendface|Medium|Snap Happy|Staff Photograph|Series Six|1996 Episode|Group Portrait|Organisation Problems|Episode Title
 What animal did Brittas propose swimming with in the series-six episode Mr Brittas Falls in Love?|A dolphin|A seal|A penguin|A sea lion|Hard|Dolphin Swimming|Mr Brittas Falls In Love|Series Six|Relaxation Plan|1996 Storyline|Unusual Activity|Gordon Brittas
 What did Brittas attempt to computerise in the seventh-series episode http://etc?|The leisure centre's operations|The council's rubbish collection|A hospital ward|A local school|Medium|http Etc|Computerisation|Series Seven|1997 Episode|Management Technology|Leisure Centre Systems|Efficiency Scheme
 What was the title of The Brittas Empire's final episode?|Curse of the Tiger Women|The Trial|Back from the Dead|Laying the Foundations|Medium|Curse Of The Tiger Women|Series Seven Finale|24 February 1997|Final Episode|Closing Storyline|Sitcom Ending|Broadcast History
 What twist was revealed at the end of The Brittas Empire's final episode?|Gordon's time at the centre had been a dream|The leisure centre was a film set|Gordon was an undercover inspector|All the staff had moved abroad|Medium|Dream Ending|Final Episode Twist|Curse Of The Tiger Women|Gordon Brittas|Series Seven|Fictional Reality|1997 Finale
 Where was Gordon actually travelling when he awoke in the finale of The Brittas Empire?|To his job interview|To his retirement party|To a hospital appointment|To a wedding|Hard|Job Interview|Dream Reveal|Train Journey|Final Scene|1997 Finale|Gordon Brittas|Story Reset`
     },
     {
         programme: 'The IT Crowd',
         era: '2006-2013',
         broadcaster: 'Channel 4',
         topic: 'Roy, Moss and Jen at Reynholm Industries, including the final special',
         facts: `Which actor played IT technician Roy Trenneman in The IT Crowd?|Chris O'Dowd|Richard Ayoade|Matt Berry|Chris Morris|Easy|Chris ODowd|Roy Trenneman|Irish Actor|Main Cast|IT Technician|Character Casting|Basement Office
 Who played Maurice Moss in The IT Crowd?|Richard Ayoade|Chris O'Dowd|Noel Fielding|Matt Berry|Easy|Richard Ayoade|Maurice Moss|Computer Expert|Main Cast|Socially Awkward Geek|Character Casting|Reynholm Industries
 Which actress played Jen Barber in The IT Crowd?|Katherine Parkinson|Jessica Hynes|Tamsin Greig|Olivia Colman|Easy|Katherine Parkinson|Jen Barber|Relationship Manager|Main Cast|Office Comedy|Character Casting|IT Department
 What fictional company employed Roy, Moss and Jen?|Reynholm Industries|Wernham Hogg|Whitbury Leisure Centre|Sunnyside Holdings|Easy|Reynholm Industries|Fictional Employer|IT Department|Workplace Setting|Corporate Headquarters|Roy Moss Jen|British Comedy
 Where in the Reynholm Industries building was the IT department based?|The basement|The roof terrace|The executive penthouse|The reception hall|Easy|Basement Office|IT Department Location|Workplace Hierarchy|Reynholm Industries|Office Setting|Roy And Moss|Company Building
 What was Jen Barber's official job title when she joined the IT department?|Relationship manager|Chief programmer|Network engineer|Company accountant|Medium|Relationship Manager|Jen Barber|Job Title|New Appointment|Technical Inexperience|First Episode|Office Hierarchy
 Which familiar question did Roy frequently ask callers needing IT help?|Have you tried turning it off and on again?|Would you like to speak to the accountant?|Have you tried replacing the building?|Can you hear the fire alarm?|Easy|Turn It Off And On Again|Roy Trenneman|Helpdesk Catchphrase|Technical Support|Reboot Advice|IT Department|Sitcom Quote
 Who played the original Reynholm Industries boss Denholm Reynholm?|Chris Morris|Matt Berry|Richard Ayoade|Noel Fielding|Medium|Chris Morris|Denholm Reynholm|Company Founder|Original Boss|First Two Series|Executive Character|Actor Casting
 Which actor played Douglas Reynholm, Denholm's son and successor?|Matt Berry|Chris Morris|Chris O'Dowd|Peter Serafinowicz|Easy|Matt Berry|Douglas Reynholm|Company Boss|Denholms Son|Later Series|Character Casting|Executive Office
 Who played the gothic IT department resident Richmond Avenal?|Noel Fielding|Julian Barratt|Dylan Moran|Richard Ayoade|Easy|Noel Fielding|Richmond Avenal|Goth Character|Original Cast|IT Basement|Actor Identification|The Red Door
 Who wrote and created the British sitcom The IT Crowd?|Graham Linehan|Armando Iannucci|Jesse Armstrong|Steven Moffat|Medium|Graham Linehan|Programme Creator|Sitcom Writer|2006 Commission|Channel Four Comedy|Screenwriting|Behind The Scenes
 In which year did The IT Crowd first air on Channel 4?|2006|2002|2008|2011|Easy|2006 Premiere|Channel Four|First Broadcast|Workplace Comedy|British Television|Sitcom Launch|Series One
 What was the title of The IT Crowd's first episode?|Yesterday's Jam|The Work Outing|The Red Door|The Final Countdown|Medium|Yesterdays Jam|3 February 2006|Opening Episode|Jen Arrives|Reynholm Industries|Series One|Episode Title
 Which series-one episode featured Reynholm Industries' so-called war on stress?|Calamity Jen|Yesterday's Jam|Aunt Irma Visits|The Red Door|Medium|Calamity Jen|War On Stress|Series One|Office Fire|Small Shoes|Corporate Initiative|Episode Storyline
 In which episode did Roy and Moss try an experiment using a lonely-hearts website?|50/50|The Dinner Party|The Red Door|Friendface|Hard|Fifty Fifty|Lonely Hearts Website|Series One|Online Dating|Roy And Moss|Social Experiment|2006 Episode
 Which episode introduced the mystery behind the IT department's red door?|The Red Door|Yesterday's Jam|From Hell|Bad Boys|Medium|The Red Door|Richmond Avenal|Basement Secret|Series One|Mysterious Door|IT Department|Episode Title
 Which episode involved Jen trying to avoid the unwanted attention of Bill Crouse?|The Haunting of Bill Crouse|The Dinner Party|Calamity Jen|Italian for Beginners|Medium|The Haunting Of Bill Crouse|Jen Barber|Bill Crouse|Unwanted Suitor|Series One|Misunderstanding|Episode Plot
 Which episode centred on Jen's powerful monthly mood swings?|Aunt Irma Visits|Men Without Women|The Red Door|The Final Countdown|Hard|Aunt Irma Visits|Jen Barber|Monthly Mood Swings|Series One Finale|2006 Episode|Workplace Colleagues|Episode Theme
 Which episode opened the second series with a disastrous trip to the theatre?|The Work Outing|The Dinner Party|Return of the Golden Child|The Final Countdown|Easy|The Work Outing|Theatre Trip|Second Series Premiere|2007 Episode|Jen Roy Moss|Social Disaster|Episode Title
 Which character succeeded Denholm as boss of Reynholm Industries?|Douglas Reynholm|Roy Trenneman|Maurice Moss|Richmond Avenal|Medium|Douglas Reynholm|Denholm Successor|Company Leadership|Series Two|Executive Change|Father And Son|Corporate Storyline
 Which episode involved an online site claiming to calculate people's dates of death?|Return of the Golden Child|Friendface|The Red Door|Speech|Hard|Return Of The Golden Child|Death Prediction Website|Moss|Second Series|2007 Episode|Internet Hoax|Episode Plot
 What sort of evening class did Moss attend in the episode Moss and the German?|A German cookery course|A ballroom dancing class|An Italian language course|A driving theory class|Medium|Moss And The German|German Cookery Course|Adult Education|Second Series|Moss New Hobby|2007 Episode|Cooking Class
 Who did Jen recruit at short notice when three men cancelled on her dinner party?|Roy, Moss and Richmond|Denholm, Douglas and Bill|Roy, Douglas and Bill|Moss, Denholm and Philip|Medium|The Dinner Party|Roy Moss Richmond|Last Minute Guests|Jen Barber|Second Series|Social Gathering|2007 Episode
 What item of clothing did Moss try to invent a better version of in Smoke and Mirrors?|A bra|A raincoat|A winter scarf|A pair of socks|Medium|Smoke And Mirrors|Moss Invention|Bra Design|Second Series|Jen Wardrobe Problem|2007 Episode|Product Prototype
 What new job did Douglas give Jen in the episode Men Without Women?|Personal assistant|Finance director|Head programmer|Security guard|Hard|Men Without Women|Douglas Reynholm|Jen Promotion|Personal Assistant|Series Two Finale|Office Role|2007 Episode
 What problematic tradesman did Jen encounter in the third-series opener From Hell?|A builder|A plumber|An electrician|A decorator|Medium|From Hell|Builder Trouble|Jen Barber|Series Three Opener|2008 Episode|Property Repair|Workplace Humour
 Which sport helped Roy and Moss appear more like 'proper men' in Are We Not Men?|Football|Cricket|Rugby union|Darts|Easy|Are We Not Men|Football Website|Roy And Moss|Series Three|Masculinity|Sports Knowledge|Social Bluff
 What unfortunate situation befell Roy in the episode Tramps Like Us?|He ended up living on the streets|He lost his driving licence|He was trapped in a lift|He missed a flight|Hard|Tramps Like Us|Roy Homeless|Series Three|2008 Episode|Misfortune|Workplace Fallout|Street Life
 What office award did Jen receive in the episode Speech?|Employee of the Month|Best Salesperson|Top Technician|Regional Manager of the Year|Medium|Speech|Employee Of The Month|Jen Barber|Series Three|Awards Speech|Office Rivalry|2008 Episode
 Which fictional social networking site gave its name to a third-series episode of The IT Crowd?|Friendface|MyCircle|PeopleBook|MateSpace|Easy|Friendface|Social Networking|Series Three|Old School Friends|Online Profiles|Jen Barber|2008 Episode
 What type of calendar did Reynholm Industries attempt to create in Calendar Geeks?|A nude charity-style calendar|A birdwatching calendar|A historical calendar|A recipe calendar|Medium|Calendar Geeks|Nude Calendar|Reynholm Industries|Series Three Finale|Office Photoshoot|2008 Episode|Corporate Scheme
 Which company role did Jen apply for in Jen the Fredo?|Entertainment manager|IT security chief|Head accountant|Building supervisor|Hard|Jen The Fredo|Entertainment Manager|Series Four Premiere|Career Ambition|Jen Barber|2010 Episode|Office Promotion
 Which television game show made Moss a celebrity in The IT Crowd episode The Final Countdown?|Countdown|Pointless|University Challenge|The Crystal Maze|Medium|The Final Countdown|Moss Celebrity|Countdown|Quiz Show|Series Four|2010 Episode|Game Show
 Which unusual movement did Douglas embrace in the fourth-series episode Something Happened?|Spaceology|Numerology|Druidism|Astrology|Hard|Something Happened|Spaceology|Douglas Reynholm|Series Four|New Belief System|2010 Episode|Character Storyline
 In which episode did Roy and Moss behave like juvenile delinquents at a shopping centre?|Bad Boys|The Work Outing|The Red Door|Friendface|Medium|Bad Boys|Shopping Centre|Juvenile Delinquents|Roy And Moss|Series Four|2010 Episode|Misbehaviour
 Which fourth-series episode involved Douglas's very short marriage and a courtroom case?|Reynholm vs Reynholm|Jen the Fredo|Calamity Jen|Yesterday's Jam|Hard|Reynholm Versus Reynholm|Douglas Marriage|Court Case|Series Four Finale|2010 Broadcast|Legal Trouble|Episode Title
 What was the title of The IT Crowd's 2013 one-off television special?|The Internet Is Coming|The Final Countdown|Return of the Golden Child|Calendar Geeks|Easy|The Internet Is Coming|2013 Special|Final Reunion|Channel Four|Last Television Episode|Roy Moss Jen|Programme Finale
 How many regular series of The IT Crowd were broadcast before the 2013 special?|Four|Two|Six|Eight|Medium|Four Main Series|2006 To 2010|2013 Special|Programme Run|Series Count|Broadcast History|IT Crowd Catalogue`
     },
     {
         programme: 'Green Wing',
         era: '2004-2007 original TV series',
         broadcaster: 'Channel 4',
         topic: 'Surreal hospital comedy at East Hampton Hospital Trust',
         facts: `What was the fictional hospital called in Green Wing?|East Hampton Hospital Trust|St Aidan's Hospital|Holby General|St Eligius Hospital|Easy|East Hampton Hospital|Hospital Setting|Fictional Workplace|Medical Comedy|Green Wing Location|British Sitcom|Channel Four
 Which actress played surgical registrar Caroline Todd in Green Wing?|Tamsin Greig|Pippa Haywood|Michelle Gomez|Sarah Alexander|Easy|Tamsin Greig|Caroline Todd|Surgical Registrar|Main Character|Actor Casting|Hospital Staff|Series Lead
 Who played the surgeon nicknamed Mac in Green Wing?|Julian Rhind-Tutt|Stephen Mangan|Mark Heap|Karl Theobald|Easy|Julian Rhind Tutt|Mac Macartney|Hospital Surgeon|Lead Cast|Caroline Romance|Actor Identification|Medical Staff
 Who portrayed the flirtatious anaesthetist Guy Secretan?|Stephen Mangan|Julian Rhind-Tutt|Oliver Chris|Mark Heap|Easy|Stephen Mangan|Guy Secretan|Anaesthetist|Romantic Rivalry|Main Cast|Character Casting|Hospital Comedy
 Which actor played the neurotic radiologist Alan Statham?|Mark Heap|Karl Theobald|Paterson Joseph|Stephen Mangan|Medium|Mark Heap|Alan Statham|Radiologist|Medical Imaging|Joanna Relationship|Cast Member|Surreal Comedy
 Who played hospital HR boss Joanna Clore?|Pippa Haywood|Olivia Colman|Michelle Gomez|Sally Bretton|Medium|Pippa Haywood|Joanna Clore|Human Resources|Head Of HR|Alan Statham|Main Cast|Actor And Character
 Which actress played the unpredictable staff liaison officer Sue White?|Michelle Gomez|Tamsin Greig|Sally Phillips|Olivia Colman|Medium|Michelle Gomez|Sue White|Staff Liaison|Scottish Character|Unpredictable Behaviour|Actor Casting|Hospital HR
 Who played struggling trainee doctor Martin Dear?|Karl Theobald|Oliver Chris|Stephen Mangan|Darren Boyd|Medium|Karl Theobald|Martin Dear|Junior Doctor|Joannas Son|Failed Exams|Character Casting|Hospital Staff
 Which actress played overwhelmed HR administrator Harriet Schulenburg?|Olivia Colman|Sarah Alexander|Pippa Haywood|Lucinda Raikes|Medium|Olivia Colman|Harriet Schulenburg|Human Resources|Working Mother|Admin Department|Supporting Cast|Actor Identification
 Which actor played the junior doctor Boyce, who repeatedly tormented Statham?|Oliver Chris|Mark Heap|Julian Rhind-Tutt|Paterson Joseph|Medium|Oliver Chris|Boyce|Junior House Officer|Alan Statham Rival|Pranks|Hospital Trainee|Cast Member
 Which actress played Caroline's lodger and fellow doctor Angela Hunter?|Sarah Alexander|Sally Phillips|Katie Lyons|Lucinda Raikes|Medium|Sarah Alexander|Angela Hunter|Paediatrics|Caroline Lodger|First Series|Cast Member|Hospital Registrar
 Which performer played Mac's former girlfriend Holly Hawkes in series two?|Sally Phillips|Michelle Gomez|Olivia Colman|Pippa Haywood|Hard|Sally Phillips|Holly Hawkes|Mac Ex Girlfriend|Second Series|Returning Character|Medical Romance|Cast Addition
 Who created the television comedy Green Wing?|Victoria Pile|Armando Iannucci|Sharon Horgan|Graham Linehan|Medium|Victoria Pile|Series Creator|British Comedy Writer|Channel Four|Smack The Pony Team|Creative Production|Programme Origin
 In which year did Green Wing first air on Channel 4?|2004|1999|2008|2011|Easy|2004 Debut|Channel Four|First Series|Hospital Comedy|Programme Premiere|Broadcast History|British Sitcom
 Which Green Wing episode introduced Caroline on her first day at the hospital?|Caroline's First Day|Rumours|Housewarming Party|Tests|Easy|Carolines First Day|Series One Premiere|New Registrar|Hospital Arrival|2004 Episode|Opening Storyline|Episode Title
 Who became the subject of gossip after staying overnight at Guy's flat in the episode Rumours?|Caroline Todd|Joanna Clore|Harriet Schulenburg|Sue White|Medium|Rumours|Caroline Todd|Guy Secretan|Overnight Visit|Hospital Gossip|Series One|2004 Episode
 Which character moved into Caroline's home after her search for a lodger?|Angela Hunter|Joanna Clore|Sue White|Harriet Schulenburg|Medium|Lodgers|Angela Hunter|Caroline Todd|Housemate|First Series|Living Arrangements|Episode Storyline
 How old was Joanna Clore turning in the Green Wing episode Joanna's Birthday?|48|35|40|55|Hard|Joannas Birthday|Forty Eight|Age Anxiety|HR Boss|Series One|2004 Episode|Birthday Secret
 Which character repeatedly struggled with medical examinations in Green Wing?|Martin Dear|Mac Macartney|Guy Secretan|Sue White|Medium|Martin Dear|Medical Exams|Trainee Doctor|Repeated Failures|Tests Episode|Hospital Training|Character Storyline
 What strange sport was invented and played by Guy Secretan in Green Wing?|Guyball|Bossaball|Kabaddi|Underwater hockey|Medium|Guyball|Guy Secretan|Made Up Sport|Hospital Staff|Competitions|Character Obsession|Surreal Recreation
 Which Green Wing character was revealed to be Martin Dear's mother?|Joanna Clore|Sue White|Harriet Schulenburg|Caroline Todd|Medium|Joanna Clore|Martin Dear|Mother Son Secret|Family Revelation|HR Department|Relationship Plot|Second Series
 What was Mac's condition at the beginning of Green Wing's second series after the cliff incident?|He was in a coma|He was in prison|He had moved to Canada|He had become hospital director|Medium|Mac Coma|Series Two Premiere|Cliff Accident|Hospital Patient|2006 Episode|Caroline Todd|Recovery Story
 Which character bought Alan Statham at the hospital's fundraising slave auction?|Boyce|Guy Secretan|Martin Dear|Mac Macartney|Hard|Boyce|Slave Auction|Alan Statham|Thirty Pence|Fundraising Event|Series One|Student Consultant Rivalry
 Which Green Wing character was determined to make Mac's and Caroline's relationship fail?|Sue White|Harriet Schulenburg|Kim Alabaster|Angela Hunter|Hard|Sue White|Mac Obsession|Caroline Todd|Relationship Interference|Romantic Sabotage|Series Two|Staff Liaison
 What kind of film crew arrived at the hospital in the third episode of Green Wing's second series?|Documentary crew|Wedding videographers|Music-video crew|Wildlife filmmakers|Hard|Documentary Crew|Series Two Episode Three|Angela Hunter|Hospital Filming|2006 Episode|Media Appearance|Plot Incident
 Which member of staff decided to stand in a local council election in series two?|Alan Statham|Martin Dear|Guy Secretan|Lyndon Jones|Hard|Alan Statham|Council Election|Series Two Episode Five|Political Ambition|Boyce Assistance|2006 Storyline|Local Government
 How much money did Martin Dear win on a scratchcard in Green Wing's second series?|£3,000|£30|£300|£30,000|Hard|Martin Dear|Three Thousand Pounds|Scratchcard Prize|Series Two Episode Seven|Sudden Windfall|Money Sharing|Character Plot
 Which member of the Green Wing HR staff fell out of a window near the end of series two?|Karen Ball|Harriet Schulenburg|Kim Alabaster|Joanna Clore|Hard|Karen Ball|Window Fall|Series Two Finale|Admin Department|Character Accident|2006 Storyline|Hospital Staff
 What was the name of the 2007 broadcast that concluded Green Wing's original television story?|Final Special|New Beginnings|Opening Day|Emergency Ward|Medium|Final Special|2007 Broadcast|Television Conclusion|Channel Four|Series Wrap Up|Original TV Run|Hospital Storylines
 Which pair went on the run in a stolen campervan in Green Wing's final special?|Alan and Joanna|Guy and Caroline|Martin and Harriet|Mac and Sue|Medium|Alan Statham|Joanna Clore|Stolen Campervan|Final Special|On The Run|Legal Trouble|2007 Ending
 How many original television series of Green Wing preceded its final special?|Two|Three|Four|Five|Easy|Two TV Series|2004 And 2006|Final Special|Original Television Run|Programme Structure|Channel Four|Series Count`
     },
     {
         programme: 'The Smoking Room',
         era: '2004-2005',
         broadcaster: 'BBC Three',
         topic: 'Office workers taking breaks in room B209',
         facts: `Which actor played Robin in the BBC Three sitcom The Smoking Room?|Robert Webb|David Mitchell|Jeremy Swift|Martin Freeman|Easy|Robert Webb|Robin|Lead Character|Office Smoker|Actor Identification|2004 Sitcom|BBC Three
 Which BBC channel originally showed The Smoking Room?|BBC Three|BBC One|BBC Two|BBC Four|Easy|BBC Three|Original Broadcaster|2004 Premiere|British Comedy|Digital Television|Workplace Sitcom|Broadcast History
 What was the main setting of The Smoking Room?|An office smoking room|A hospital operating theatre|A hotel kitchen|A leisure-centre reception|Easy|Office Smoking Room|Single Location|Workplace Breaks|Colleagues|Smoking Culture|Sitcom Setting|Confined Space
 What room number appeared on the office smoking room in The Smoking Room?|B209|A101|C303|D404|Medium|B209|Room Number|Office Storeroom|Workplace Setting|Smoke Break Location|Fictional Office|Location Detail
 Who wrote and created the sitcom The Smoking Room?|Brian Dooley|Graham Linehan|Armando Iannucci|Richard Fegen|Medium|Brian Dooley|Creator And Writer|BBC Three|Television Screenwriter|Workplace Comedy|Programme Credits|British Sitcom
 Which band recorded Close to Me, the song used as The Smoking Room's theme?|The Cure|Blur|Pulp|The Smiths|Medium|The Cure|Close To Me|Theme Music|Opening Titles|British Alternative Rock|Sitcom Soundtrack|Music Credit
 Who played the divorced and outspoken office worker Lilian?|Paula Wilcox|Selina Griffiths|Debbie Chazen|Siobhan Redmond|Medium|Paula Wilcox|Lilian|Divorced Colleague|Original Cast|Character Casting|Smoking Room Regular|2004 Comedy
 Which actress played Annie, who worked in the office graphics department?|Debbie Chazen|Nadine Marshall|Emma Kennedy|Paula Wilcox|Medium|Debbie Chazen|Annie|Graphics Department|Needy Colleague|Office Worker|Cast Member|Character Identification
 Who portrayed the direct and forthright office worker Sally?|Nadine Marshall|Selina Griffiths|Paula Wilcox|Debbie Chazen|Medium|Nadine Marshall|Sally|Graphics Colleague|No Nonsense Attitude|Main Cast|BBC Comedy|Character Casting
 Who played Sharon's non-smoking personal assistant Janet?|Selina Griffiths|Siobhan Redmond|Emma Kennedy|Nadine Marshall|Medium|Selina Griffiths|Janet|Personal Assistant|Non Smoker|Office Management|Actor Identification|Supporting Cast
 Which actor played nervous crossword enthusiast Barry?|Jeremy Swift|Leslie Schofield|Fraser Ayres|Robert Webb|Medium|Jeremy Swift|Barry|Crossword Habit|Office Worrier|Main Cast|Character Casting|Smoke Breaks
 Who portrayed the office security guard Len?|Leslie Schofield|Jeremy Swift|Mike Walling|Fraser Ayres|Medium|Leslie Schofield|Len|Security Guard|Cantankerous Colleague|Older Smoker|Actor Identification|BBC Three Cast
 Which actor played maintenance worker Clint?|Fraser Ayres|Robert Webb|Jeremy Swift|Leslie Schofield|Medium|Fraser Ayres|Clint|Maintenance Worker|Drinks Machine|Laid Back Colleague|Actor Identification|Office Repairs
 Who played the intimidating office boss Sharon?|Siobhan Redmond|Paula Wilcox|Emma Kennedy|Debbie Chazen|Medium|Siobhan Redmond|Sharon|Office Boss|Intimidating Manager|Janets Employer|Character Casting|Workplace Power
 Which actress played Heidi, the colleague returning from maternity leave?|Emma Kennedy|Nadine Marshall|Paula Wilcox|Selina Griffiths|Medium|Emma Kennedy|Heidi|Maternity Leave|Mother Of Dane|Domestic Stories|Returning Colleague|Actress Casting
 What television theme tune could Robin not remember in The Smoking Room's opening episode?|Little House on the Prairie|The Waltons|The A-Team|The Professionals|Medium|Little House On The Prairie|Doo Di Dum Di Da|Opening Episode|Robin|Theme Tune Puzzle|2004 Premiere|Television Nostalgia
 What activity was wrongly spelt as Pantball on company posters in a series-one episode?|Paintball|Football|Netball|Handball|Medium|Pantball|Paintball Outing|Janet Spelling Error|Company Social Event|Series One|2004 Episode|Office Posters
 What had the colleague whose death shocked the smokers in RIP recently done?|Retired|Married|Been promoted|Moved overseas|Hard|RIP|Recently Retired|Colleague Death|Mortality Discussion|Series One|2004 Episode|Office Loss
 What was Janet unable to provide for a visiting Japanese client in Light My Fire?|A light for a cigarette|An office key|A train ticket|A parking permit|Hard|Light My Fire|Japanese Client|Cigarette Lighter|Janet|Business Meeting|2004 Episode|Social Embarrassment
 Which occasion prompted the mysterious gift in The Smoking Room episode Chocolate Box?|Valentine's Day|Christmas Eve|Mother's Day|New Year's Day|Medium|Chocolate Box|Valentines Day|Anonymous Gift|Robin Disappointment|Series One|2004 Episode|Romantic Mystery
 What event were staff pressured to stage for pensioners in The Smoking Room's Christmas special?|A variety show|A sports tournament|A charity auction|A fashion parade|Medium|Christmas Special|Variety Show|Local Pensioners|Sharon|Office Cast|Festive Performance|2004 Broadcast
 What creature caused panic in the second-series opener Bzzzzzzzzz?|A bee|A mouse|A wasp|A spider|Medium|Bzzzzzzzzz|Bee Panic|Series Two Premiere|Smoking Room|2005 Episode|Unexpected Visitor|Comedy Plot
 Which weather event trapped Sharon with her colleagues in No Place Like Home?|A heavy snowstorm|A heatwave|A thunderstorm|A fog bank|Medium|No Place Like Home|Snowstorm|Office Lock In|Sharon|Series Two|2005 Episode|Weather Disruption
 What did Robin discover that stirred nostalgia in The Smoking Room episode 1987?|Old company-brochure photographs|A box of old uniforms|A collection of audio tapes|An outdated staff handbook|Medium|1987 Episode|Company Photographs|Old Brochure|Office History|Nostalgia|Robin Discovery|Series Two
 Which event was celebrated with compulsory jokes in The Smoking Room episode Pity the Fool?|April Fools' Day|Halloween|Bonfire Night|New Year's Eve|Medium|Pity The Fool|April Fools Day|Office Pranks|Head Office Scheme|Series Two|Workplace Morale|2005 Episode
 What kind of workplace event were the smokers forced to attend in Quitters?|An anti-smoking seminar|A fire safety exhibition|A team-building retreat|A computing workshop|Easy|Quitters|Anti Smoking Seminar|Sharon|Productivity Drive|Staff Attendance|Series Two|2005 Episode
 Which character made the local newspaper after saving an elderly woman from a mugger?|Sally|Annie|Janet|Lilian|Hard|Sally|Graphic Designer Hero|Saved Older Woman|Mugging|Last Night A Graphic Designer Saved My Life|Series Two|Newspaper Story
 Whose marriage proposal did Janet accept in The Smoking Room's final episode?|Noel's|Robin's|Barry's|Clint's|Hard|Janet And Noel|Significant Others|Marriage Proposal|Series Two Finale|Relationship News|Champagne Celebration|2005 Ending`
     }
 ];

 const FIRST_ID = 14627;
 let index = 0;
 const questions = groups.flatMap(group =>
     group.facts.trim().split('\n').map(line => {
         const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
         const parts = line.trim().split('|').map(part => part.trim());
         if (parts.length !== 13) {
             throw new Error(`Expected seven specialist tags at ${id}; got ${parts.length - 6}`);
         }
         const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
         const wrongAnswers = [wrong1, wrong2, wrong3];
         if (!question || !correctAnswer || wrongAnswers.some(answer => !answer)) {
             throw new Error(`Missing question or answer at ${id}`);
         }
         if (new Set([correctAnswer, ...wrongAnswers].map(a => a.toLowerCase())).size !== 4) {
             throw new Error(`Repeated answer option at ${id}`);
         }
         if (!['Easy', 'Medium', 'Hard'].includes(difficulty) ||
             specificTags.length !== 7 || specificTags.some(tag => !tag)) {
             throw new Error(`Invalid difficulty or specialist tags at ${id}`);
         }
         const answers = [...wrongAnswers];
         answers.splice(index % 4, 0, correctAnswer);
         const tags = [...new Map([
             'Television', 'British Television', 'Sitcom', 'Workplace Comedy',
             group.broadcaster, group.era, group.programme,
             `Programme: ${group.programme}`, group.topic,
             correctAnswer, ...specificTags
         ].map(tag => [tag.toLowerCase(), tag])).values()];
         const item = {
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
         index++;
         return item;
     })
 );

 const EXPECTED_COUNT = 141;
 if (questions.length !== EXPECTED_COUNT) {
     throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_14627' ||
     questions[questions.length - 1].id !== 'tv_14767') {
     throw new Error('Unexpected question ID range');
 }
 if (new Set(questions.map(q => q.id)).size !== questions.length ||
     new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
     throw new Error('Duplicate question IDs or wording');
 }
 if (questions.some(q => q.category !== 'Television' || !q.programme ||
     q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
     !q.tags.includes(`Programme: ${q.programme}`) ||
     q.tags.length < 14 || q.tags.some(tag => !tag) || q.dailyEligible !== true)) {
     throw new Error('Incomplete exported question metadata');
 }
// 21 November 2026 TV Pack 323 audit. All 141 original questions and
// original IDs tv_14627 through tv_14767 are preserved.
// Added researched episode and storyline coverage; sources are included in
// the tags of every new question and cross-checked against episode guides.
const auditAdditions = [
  {
    "id": "tv_36652",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, what musical event did Gordon organise in Mums and Dads to attract new customers?",
    "answers": [
      "A concert recital",
      "A sports day",
      "A jazz festival",
      "A talent contest"
    ],
    "correctAnswer": "A concert recital",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: A concert recital",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "Mums And Dads",
      "Series Two",
      "Customer Recruitment",
      "Music Performance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36653",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, whose baby's father did Gordon try to identify in New Generations?",
    "answers": [
      "Helen's",
      "Carole's",
      "Laura's",
      "Julie's"
    ],
    "correctAnswer": "Carole's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: Carole's",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "New Generations",
      "Carole Parkinson",
      "Series Two",
      "Workplace Mystery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36654",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, what new equipment did Gordon want to buy in Sex, Lies and Red Tape?",
    "answers": [
      "A rowing machine",
      "An ice rink",
      "A second trampoline",
      "An exercise bike"
    ],
    "correctAnswer": "A second trampoline",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: A second trampoline",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "Sex Lies And Red Tape",
      "Synchronised Trampolining",
      "Series Three",
      "Fundraising"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36655",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, which senior group was the focus of Brittas's celebrations in The Stuff of Dreams?",
    "answers": [
      "New parents",
      "Teenagers",
      "War veterans",
      "Older people"
    ],
    "correctAnswer": "Older people",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: Older people",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "The Stuff Of Dreams",
      "Elderly Week",
      "Series Three",
      "Community Activities"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36656",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, which famous runner was invited to promote Life Cycle Week in Not a Good Day ...?",
    "answers": [
      "Sebastian Coe",
      "Steve Ovett",
      "Daley Thompson",
      "Roger Bannister"
    ],
    "correctAnswer": "Sebastian Coe",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: Sebastian Coe",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "Not A Good Day",
      "Sebastian Coe",
      "Series Four",
      "Fitness Promotion"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36657",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, what family event took place in the episode The Christening?",
    "answers": [
      "Gavin's wedding",
      "The Brittas twins' christening",
      "Laura's engagement",
      "Colin's retirement"
    ],
    "correctAnswer": "The Brittas twins' christening",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: The Brittas twins' christening",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "The Christening",
      "Brittas Family",
      "Series Four",
      "Twin Children"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36658",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, what activity did Gordon plan with Helen in Biggles Tells a Lie?",
    "answers": [
      "Rock climbing",
      "Hang-gliding",
      "Sailing in a dinghy",
      "Horse riding"
    ],
    "correctAnswer": "Sailing in a dinghy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: Sailing in a dinghy",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "Biggles Tells A Lie",
      "Helen Brittas",
      "Series Four",
      "Coastal Trip"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36659",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, what European committee post did Gordon seek in Mr Brittas Changes Trains?",
    "answers": [
      "European Commissioner for Fisheries",
      "Director of the European Central Bank",
      "International tourism ambassador",
      "British representative on a leisure industry standards committee"
    ],
    "correctAnswer": "British representative on a leisure industry standards committee",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: British representative on a leisure industry standards committee",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "Mr Brittas Changes Trains",
      "Job Application",
      "Series Four",
      "European Standards"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36660",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, to which English county did Helen take the children during Playing with Fire?",
    "answers": [
      "Cornwall",
      "Devon",
      "Norfolk",
      "Kent"
    ],
    "correctAnswer": "Cornwall",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: Cornwall",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "Playing With Fire",
      "Helen And Children",
      "Series Four",
      "Family Holiday"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36661",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, what staff social event was planned in Shall We Dance?",
    "answers": [
      "Whitbury Christmas Fete",
      "Southern Area Leisure Centres Staff Gala Ball",
      "Interdepartmental Sports Day",
      "Council Summer Picnic"
    ],
    "correctAnswer": "Southern Area Leisure Centres Staff Gala Ball",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: Southern Area Leisure Centres Staff Gala Ball",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "Shall We Dance",
      "Staff Gala Ball",
      "Series Four",
      "Workplace Event"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36662",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, what pastime had Gordon designed for his colleagues in The Chop?",
    "answers": [
      "A treasure hunt",
      "A computer quiz",
      "A board game",
      "A crossword"
    ],
    "correctAnswer": "A board game",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: A board game",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "The Chop",
      "Board Game",
      "Series Four",
      "Management Ideas"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36663",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, where did Gordon work after being dismissed from Whitbury in High Noon?",
    "answers": [
      "A primary school",
      "A hotel",
      "A supermarket",
      "A local garage"
    ],
    "correctAnswer": "A local garage",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: A local garage",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "High Noon",
      "Garage Employment",
      "Series Four",
      "Dismissal"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36664",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, which BBC religious programme planned to broadcast from the leisure centre in The Old, Old Story?",
    "answers": [
      "Songs of Praise",
      "Thought for the Day",
      "Highway",
      "The Big Questions"
    ],
    "correctAnswer": "Songs of Praise",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: Songs of Praise",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "The Old Old Story",
      "Songs Of Praise",
      "Series Five",
      "BBC Broadcast"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36665",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, which sporting appointment was Gordon interviewed for in Brussels Calling?",
    "answers": [
      "Olympic medal adviser",
      "European Commissioner for Sport",
      "National swimming coach",
      "Sports Minister for Belgium"
    ],
    "correctAnswer": "European Commissioner for Sport",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: European Commissioner for Sport",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "Brussels Calling",
      "European Commissioner For Sport",
      "Series Five",
      "New Job"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36666",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, which employee was appointed trial manager for a day in The Boss?",
    "answers": [
      "Tim Whistler",
      "Colin Weatherby",
      "Gavin Featherly",
      "Carole Parkinson"
    ],
    "correctAnswer": "Gavin Featherly",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: Gavin Featherly",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "The Boss",
      "Gavin Featherly",
      "Series Five",
      "Management Test"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36667",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, what staff screening did Gordon introduce in Pregnant!?",
    "answers": [
      "Annual eyesight tests",
      "Daily blood-pressure checks",
      "Mandatory hearing tests",
      "Compulsory urine drug tests"
    ],
    "correctAnswer": "Compulsory urine drug tests",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: Compulsory urine drug tests",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "Pregnant Episode",
      "Compulsory Drug Testing",
      "Series Five",
      "Staff Screening"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36668",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, what dangerous object did Colin discover at the centre in UXB?",
    "answers": [
      "A bomb",
      "An unexploded firework",
      "A leaking gas cylinder",
      "A poisonous snake"
    ],
    "correctAnswer": "A bomb",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: A bomb",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "UXB Episode",
      "Colin Weatherby",
      "Series Five",
      "Explosive Discovery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36669",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, what emergency safety feature did Gordon insist on installing in The Last Day?",
    "answers": [
      "A roof sprinkler garden",
      "An emergency water tank",
      "A second main entrance",
      "A backup generator"
    ],
    "correctAnswer": "An emergency water tank",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: An emergency water tank",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "The Last Day",
      "Emergency Water Tank",
      "Series Five",
      "Fire Precaution"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36670",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, what type of building hosted the staff Christmas gathering in In the Beginning...?",
    "answers": [
      "A Welsh lighthouse",
      "A seaside hotel",
      "Colin's Scottish castle",
      "A German ski lodge"
    ],
    "correctAnswer": "Colin's Scottish castle",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: Colin's Scottish castle",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "In The Beginning Christmas Special",
      "Colin Castle",
      "Scottish Gathering",
      "Festive Episode"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36671",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, what mysterious object fell through the roof in Body Language?",
    "answers": [
      "A meteorite",
      "A frozen fish",
      "A giant snowball",
      "A green block of ice"
    ],
    "correctAnswer": "A green block of ice",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: A green block of ice",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "Body Language",
      "Green Block Of Ice",
      "Series Six",
      "Colin Alien Theory"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36672",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, which circus troupe was invited to perform in At the Double?",
    "answers": [
      "Ruthenian State Circus",
      "Moscow State Circus",
      "Circus of Horrors",
      "Chinese State Circus"
    ],
    "correctAnswer": "Ruthenian State Circus",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: Ruthenian State Circus",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "At The Double",
      "Ruthenian Circus",
      "Series Six",
      "Leisure Centre Visit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36673",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, what did Gordon arrange for World Peace and Hunger Day in We All Fall Down?",
    "answers": [
      "A lantern parade",
      "An eternal flame",
      "A fireworks display",
      "A balloon release"
    ],
    "correctAnswer": "An eternal flame",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: An eternal flame",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "We All Fall Down",
      "Eternal Flame",
      "Series Six",
      "Peace Event"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36674",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, what sponsored activity did Gordon organise in The Elephant's Child?",
    "answers": [
      "A marathon swim",
      "A cycle race",
      "A bungee jump",
      "A parachute jump"
    ],
    "correctAnswer": "A bungee jump",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: A bungee jump",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "Elephants Child",
      "Bungee Jump",
      "Series Seven",
      "Fundraising"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36675",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, which employee received threatening letters and police protection in Reviewing the Situation?",
    "answers": [
      "Carole",
      "Linda",
      "Laura",
      "Julie"
    ],
    "correctAnswer": "Julie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: Julie",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "Reviewing The Situation",
      "Julie Secretary",
      "Series Seven",
      "Threatening Letters"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36676",
    "category": "Television",
    "programme": "The Brittas Empire",
    "question": "In The Brittas Empire, who was missing on a staff weekend in Gavin Featherly R.I.P.?",
    "answers": [
      "Gavin Featherly",
      "Tim Whistler",
      "Colin Weatherby",
      "Gordon Brittas"
    ],
    "correctAnswer": "Gavin Featherly",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Brittas Empire",
      "Programme: The Brittas Empire",
      "1991–1997",
      "Character and episode details",
      "Correct answer: Gavin Featherly",
      "Reference: https://www.tvmaze.com/shows/6134/the-brittas-empire/episodeguide",
      "Audited November 2026",
      "Gavin Featherly RIP",
      "Staff Weekend",
      "Series Seven",
      "Disappearance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36677",
    "category": "Television",
    "programme": "The IT Crowd",
    "question": "In The IT Crowd, what item of clothing caused Jen trouble during the Calamity Jen office stress campaign?",
    "answers": [
      "Her coat",
      "Her shoes",
      "Her gloves",
      "Her scarf"
    ],
    "correctAnswer": "Her shoes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The IT Crowd",
      "Programme: The IT Crowd",
      "2006–2013",
      "Character and episode details",
      "Correct answer: Her shoes",
      "Reference: https://www.tvmaze.com/shows/539/the-it-crowd/episodeguide",
      "Audited November 2026",
      "Calamity Jen",
      "War On Stress",
      "First Series",
      "Uncomfortable Shoes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36678",
    "category": "Television",
    "programme": "The IT Crowd",
    "question": "In The IT Crowd, which colleague's new mug vanished in The Red Door?",
    "answers": [
      "Jen's",
      "Roy's",
      "Moss's",
      "Douglas's"
    ],
    "correctAnswer": "Moss's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The IT Crowd",
      "Programme: The IT Crowd",
      "2006–2013",
      "Character and episode details",
      "Correct answer: Moss's",
      "Reference: https://www.tvmaze.com/shows/539/the-it-crowd/episodeguide",
      "Audited November 2026",
      "The Red Door",
      "Missing Mug",
      "First Series",
      "Maurice Moss"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36679",
    "category": "Television",
    "programme": "The IT Crowd",
    "question": "In The IT Crowd, what false news did Moss spread about Jen in The Haunting of Bill Crouse?",
    "answers": [
      "That Jen had won the lottery",
      "That Jen was moving abroad",
      "That Jen had resigned",
      "That Jen had died"
    ],
    "correctAnswer": "That Jen had died",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The IT Crowd",
      "Programme: The IT Crowd",
      "2006–2013",
      "Character and episode details",
      "Correct answer: That Jen had died",
      "Reference: https://www.tvmaze.com/shows/539/the-it-crowd/episodeguide",
      "Audited November 2026",
      "Haunting Of Bill Crouse",
      "Jen Barber",
      "First Series",
      "Deception"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36680",
    "category": "Television",
    "programme": "The IT Crowd",
    "question": "In The IT Crowd, which dance film featured in the proposed morale-boosting activities in Aunt Irma Visits?",
    "answers": [
      "Dirty Dancing",
      "Grease",
      "Footloose",
      "Flashdance"
    ],
    "correctAnswer": "Dirty Dancing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The IT Crowd",
      "Programme: The IT Crowd",
      "2006–2013",
      "Character and episode details",
      "Correct answer: Dirty Dancing",
      "Reference: https://www.tvmaze.com/shows/539/the-it-crowd/episodeguide",
      "Audited November 2026",
      "Aunt Irma Visits",
      "DVD Film",
      "First Series",
      "Team Night"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36681",
    "category": "Television",
    "programme": "The IT Crowd",
    "question": "In The IT Crowd, what was the name of the colleague from Floor Six who invited Jen to the theatre in The Work Outing?",
    "answers": [
      "Peter",
      "Philip",
      "Daniel",
      "Simon"
    ],
    "correctAnswer": "Philip",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The IT Crowd",
      "Programme: The IT Crowd",
      "2006–2013",
      "Character and episode details",
      "Correct answer: Philip",
      "Reference: https://www.tvmaze.com/shows/539/the-it-crowd/episodeguide",
      "Audited November 2026",
      "The Work Outing",
      "Philip From Six",
      "Second Series",
      "Theatre Date"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36682",
    "category": "Television",
    "programme": "The IT Crowd",
    "question": "In The IT Crowd, what unfortunate-sounding name did Jen's boyfriend have in The Dinner Party?",
    "answers": [
      "Mike Hunt",
      "Ben Dover",
      "Peter File",
      "Dick Harper"
    ],
    "correctAnswer": "Peter File",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The IT Crowd",
      "Programme: The IT Crowd",
      "2006–2013",
      "Character and episode details",
      "Correct answer: Peter File",
      "Reference: https://www.tvmaze.com/shows/539/the-it-crowd/episodeguide",
      "Audited November 2026",
      "The Dinner Party",
      "Peter File",
      "Second Series",
      "Boyfriend Name"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36683",
    "category": "Television",
    "programme": "The IT Crowd",
    "question": "In The IT Crowd, how did Moss first encounter the cookery course advertised in Moss and the German?",
    "answers": [
      "Through a TV advert",
      "Through a leaflet at work",
      "Through a newspaper competition",
      "Through an online advertisement"
    ],
    "correctAnswer": "Through an online advertisement",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The IT Crowd",
      "Programme: The IT Crowd",
      "2006–2013",
      "Character and episode details",
      "Correct answer: Through an online advertisement",
      "Reference: https://www.tvmaze.com/shows/539/the-it-crowd/episodeguide",
      "Audited November 2026",
      "Moss And The German",
      "Online Advert",
      "Second Series",
      "Cookery Course"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36684",
    "category": "Television",
    "programme": "The IT Crowd",
    "question": "In The IT Crowd, how much money did Roy lose during the third-series episode From Hell?",
    "answers": [
      "£20",
      "£5",
      "£50",
      "£100"
    ],
    "correctAnswer": "£20",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The IT Crowd",
      "Programme: The IT Crowd",
      "2006–2013",
      "Character and episode details",
      "Correct answer: £20",
      "Reference: https://www.tvmaze.com/shows/539/the-it-crowd/episodeguide",
      "Audited November 2026",
      "From Hell",
      "Roy Trenneman",
      "Third Series",
      "Missing Money"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36685",
    "category": "Television",
    "programme": "The IT Crowd",
    "question": "In The IT Crowd, what did Jen think her prospective boyfriend resembled in Are We Not Men?",
    "answers": [
      "A football referee",
      "A magician",
      "A chef",
      "A policeman"
    ],
    "correctAnswer": "A magician",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The IT Crowd",
      "Programme: The IT Crowd",
      "2006–2013",
      "Character and episode details",
      "Correct answer: A magician",
      "Reference: https://www.tvmaze.com/shows/539/the-it-crowd/episodeguide",
      "Audited November 2026",
      "Are We Not Men",
      "Magician Lookalike",
      "Third Series",
      "Dating"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36686",
    "category": "Television",
    "programme": "The IT Crowd",
    "question": "In The IT Crowd, what was the title of the fourth-series episode in which Roy obsessed over his girlfriend's tragic family past?",
    "answers": [
      "From Hell",
      "Calendar Geeks",
      "Italian for Beginners",
      "Bad Boys"
    ],
    "correctAnswer": "Italian for Beginners",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The IT Crowd",
      "Programme: The IT Crowd",
      "2006–2013",
      "Character and episode details",
      "Correct answer: Italian for Beginners",
      "Reference: https://www.tvmaze.com/shows/539/the-it-crowd/episodeguide",
      "Audited November 2026",
      "Italian For Beginners",
      "Fourth Series",
      "Roy Girlfriend",
      "Family History"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36687",
    "category": "Television",
    "programme": "The IT Crowd",
    "question": "In The IT Crowd, what mishap helped put Roy and Jen in trouble online during The Internet Is Coming?",
    "answers": [
      "A failed office sports day",
      "An accidental television interview",
      "A prank telephone call",
      "Spilt coffee and an encounter with a homeless person"
    ],
    "correctAnswer": "Spilt coffee and an encounter with a homeless person",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The IT Crowd",
      "Programme: The IT Crowd",
      "2006–2013",
      "Character and episode details",
      "Correct answer: Spilt coffee and an encounter with a homeless person",
      "Reference: https://www.tvmaze.com/shows/539/the-it-crowd/episodeguide",
      "Audited November 2026",
      "The Internet Is Coming",
      "2013 Special",
      "Online Reputation",
      "Coffee Incident"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36688",
    "category": "Television",
    "programme": "The IT Crowd",
    "question": "In The IT Crowd, what was the name of the 2013 behind-the-scenes documentary featuring cast interviews?",
    "answers": [
      "The IT Crowd Manual",
      "Reynholm Revealed",
      "The IT Crowd Rewired",
      "The Basement Years"
    ],
    "correctAnswer": "The IT Crowd Manual",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The IT Crowd",
      "Programme: The IT Crowd",
      "2006–2013",
      "Character and episode details",
      "Correct answer: The IT Crowd Manual",
      "Reference: https://www.tvmaze.com/shows/539/the-it-crowd/episodeguide",
      "Audited November 2026",
      "IT Crowd Manual",
      "2013 Documentary",
      "Cast Interviews",
      "Behind The Scenes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36689",
    "category": "Television",
    "programme": "Green Wing",
    "question": "In Green Wing, what unusual thing did Guy eat on Caroline's first day?",
    "answers": [
      "A paperclip",
      "Coffee",
      "Toothpaste",
      "A houseplant"
    ],
    "correctAnswer": "Coffee",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "Green Wing",
      "Programme: Green Wing",
      "2004–2007",
      "Character and episode details",
      "Correct answer: Coffee",
      "Reference: https://www.comedy.co.uk/tv/green_wing/episodes/1/ and https://www.comedy.co.uk/tv/green_wing/episodes/2/",
      "Audited November 2026",
      "Carolines First Day",
      "Guy Secretan",
      "Series One",
      "Odd Eating"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36690",
    "category": "Television",
    "programme": "Green Wing",
    "question": "In Green Wing, what food did Martin complain the cleaners kept moving in Rumours?",
    "answers": [
      "His sandwiches",
      "His biscuits",
      "His yoghurt",
      "His salad"
    ],
    "correctAnswer": "His yoghurt",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "Green Wing",
      "Programme: Green Wing",
      "2004–2007",
      "Character and episode details",
      "Correct answer: His yoghurt",
      "Reference: https://www.comedy.co.uk/tv/green_wing/episodes/1/ and https://www.comedy.co.uk/tv/green_wing/episodes/2/",
      "Audited November 2026",
      "Rumours Episode",
      "Martin Dear",
      "Series One",
      "Cleaners"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36691",
    "category": "Television",
    "programme": "Green Wing",
    "question": "In Green Wing, who was Joanna trying to impress in Lodgers?",
    "answers": [
      "Gordon Brittas the manager",
      "Martin Dear the trainee",
      "Boyce the junior doctor",
      "Lyndon Jones the Head of IT"
    ],
    "correctAnswer": "Lyndon Jones the Head of IT",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "Green Wing",
      "Programme: Green Wing",
      "2004–2007",
      "Character and episode details",
      "Correct answer: Lyndon Jones the Head of IT",
      "Reference: https://www.comedy.co.uk/tv/green_wing/episodes/1/ and https://www.comedy.co.uk/tv/green_wing/episodes/2/",
      "Audited November 2026",
      "Lodgers",
      "Lyndon Jones",
      "Series One",
      "Hospital IT"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36692",
    "category": "Television",
    "programme": "Green Wing",
    "question": "In Green Wing, what did Guy create to rank the hospital's women in Joanna's Birthday?",
    "answers": [
      "A league table",
      "A quiz",
      "A talent show",
      "A spreadsheet of birthdays"
    ],
    "correctAnswer": "A league table",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "Green Wing",
      "Programme: Green Wing",
      "2004–2007",
      "Character and episode details",
      "Correct answer: A league table",
      "Reference: https://www.comedy.co.uk/tv/green_wing/episodes/1/ and https://www.comedy.co.uk/tv/green_wing/episodes/2/",
      "Audited November 2026",
      "Joannas Birthday",
      "Guy Secretan",
      "Series One",
      "Staff Ranking"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36693",
    "category": "Television",
    "programme": "Green Wing",
    "question": "In Green Wing, who took Martin clothes shopping before Caroline's Housewarming Party?",
    "answers": [
      "Joanna Clore",
      "Sue White",
      "Caroline Todd",
      "Harriet Schulenburg"
    ],
    "correctAnswer": "Sue White",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "Green Wing",
      "Programme: Green Wing",
      "2004–2007",
      "Character and episode details",
      "Correct answer: Sue White",
      "Reference: https://www.comedy.co.uk/tv/green_wing/episodes/1/ and https://www.comedy.co.uk/tv/green_wing/episodes/2/",
      "Audited November 2026",
      "Housewarming Party",
      "Sue White",
      "Series One",
      "Shopping Trip"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36694",
    "category": "Television",
    "programme": "Green Wing",
    "question": "In Green Wing, which pair had their pregnancy test results confused in Tests?",
    "answers": [
      "Caroline and Angela",
      "Sue and Karen",
      "Harriet and Joanna",
      "Rachel and Kim"
    ],
    "correctAnswer": "Harriet and Joanna",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "Green Wing",
      "Programme: Green Wing",
      "2004–2007",
      "Character and episode details",
      "Correct answer: Harriet and Joanna",
      "Reference: https://www.comedy.co.uk/tv/green_wing/episodes/1/ and https://www.comedy.co.uk/tv/green_wing/episodes/2/",
      "Audited November 2026",
      "Tests Episode",
      "Pregnancy Tests",
      "Series One",
      "Mixed Results"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36695",
    "category": "Television",
    "programme": "Green Wing",
    "question": "In Green Wing, who helped Alan Statham explore religion after his break-up in Tangled Webs?",
    "answers": [
      "A local rabbi",
      "A visiting monk",
      "The head of nursing",
      "The hospital chaplain"
    ],
    "correctAnswer": "The hospital chaplain",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "Green Wing",
      "Programme: Green Wing",
      "2004–2007",
      "Character and episode details",
      "Correct answer: The hospital chaplain",
      "Reference: https://www.comedy.co.uk/tv/green_wing/episodes/1/ and https://www.comedy.co.uk/tv/green_wing/episodes/2/",
      "Audited November 2026",
      "Tangled Webs",
      "Alan Statham",
      "Series One",
      "Hospital Chaplain"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36696",
    "category": "Television",
    "programme": "Green Wing",
    "question": "In Green Wing, to which English city had Mac accepted a job before the Slave Auction?",
    "answers": [
      "Sheffield",
      "Bristol",
      "Leeds",
      "Brighton"
    ],
    "correctAnswer": "Sheffield",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "Green Wing",
      "Programme: Green Wing",
      "2004–2007",
      "Character and episode details",
      "Correct answer: Sheffield",
      "Reference: https://www.comedy.co.uk/tv/green_wing/episodes/1/ and https://www.comedy.co.uk/tv/green_wing/episodes/2/",
      "Audited November 2026",
      "Slave Auction",
      "Mac Macartney",
      "Series One",
      "Job Relocation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36697",
    "category": "Television",
    "programme": "Green Wing",
    "question": "In Green Wing, what was the destination of the stolen ambulance carrying Guy, Mac and Martin in Emergency?",
    "answers": [
      "A ferry terminal",
      "A cliff edge",
      "An airport",
      "A football stadium"
    ],
    "correctAnswer": "A cliff edge",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "Green Wing",
      "Programme: Green Wing",
      "2004–2007",
      "Character and episode details",
      "Correct answer: A cliff edge",
      "Reference: https://www.comedy.co.uk/tv/green_wing/episodes/1/ and https://www.comedy.co.uk/tv/green_wing/episodes/2/",
      "Audited November 2026",
      "Emergency Episode",
      "Ambulance",
      "Series One",
      "Cliffhanger"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36698",
    "category": "Television",
    "programme": "Green Wing",
    "question": "In Green Wing, whose father had died when the second series began?",
    "answers": [
      "Martin's",
      "Guy's",
      "Boyce's",
      "Mac's"
    ],
    "correctAnswer": "Boyce's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "Green Wing",
      "Programme: Green Wing",
      "2004–2007",
      "Character and episode details",
      "Correct answer: Boyce's",
      "Reference: https://www.comedy.co.uk/tv/green_wing/episodes/1/ and https://www.comedy.co.uk/tv/green_wing/episodes/2/",
      "Audited November 2026",
      "Series Two Episode One",
      "Boyce",
      "Family Bereavement",
      "Hospital Staff"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36699",
    "category": "Television",
    "programme": "Green Wing",
    "question": "In Green Wing, what legal privilege did Guy have to do without after returning to work in series two?",
    "answers": [
      "His medical licence",
      "His passport",
      "His parking permit",
      "His driving licence"
    ],
    "correctAnswer": "His driving licence",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "Green Wing",
      "Programme: Green Wing",
      "2004–2007",
      "Character and episode details",
      "Correct answer: His driving licence",
      "Reference: https://www.comedy.co.uk/tv/green_wing/episodes/1/ and https://www.comedy.co.uk/tv/green_wing/episodes/2/",
      "Audited November 2026",
      "Series Two Episode Two",
      "Guy Secretan",
      "Driving Ban",
      "Return To Work"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36700",
    "category": "Television",
    "programme": "Green Wing",
    "question": "In Green Wing, which recording did Sue use to blackmail Guy and Joanna when a documentary crew visited?",
    "answers": [
      "A sex tape",
      "A recorded voicemail",
      "A staff interview",
      "A rehearsal video"
    ],
    "correctAnswer": "A sex tape",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "Green Wing",
      "Programme: Green Wing",
      "2004–2007",
      "Character and episode details",
      "Correct answer: A sex tape",
      "Reference: https://www.comedy.co.uk/tv/green_wing/episodes/1/ and https://www.comedy.co.uk/tv/green_wing/episodes/2/",
      "Audited November 2026",
      "Series Two Episode Three",
      "Sue White",
      "Blackmail Recording",
      "Guy And Joanna"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36701",
    "category": "Television",
    "programme": "Green Wing",
    "question": "In Green Wing, what game did Guy teach to local children in series two?",
    "answers": [
      "Rounders",
      "Guyball",
      "Cricket",
      "Netball"
    ],
    "correctAnswer": "Guyball",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "Green Wing",
      "Programme: Green Wing",
      "2004–2007",
      "Character and episode details",
      "Correct answer: Guyball",
      "Reference: https://www.comedy.co.uk/tv/green_wing/episodes/1/ and https://www.comedy.co.uk/tv/green_wing/episodes/2/",
      "Audited November 2026",
      "Series Two Episode Four",
      "Guyball",
      "Children",
      "Invented Game"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36702",
    "category": "Television",
    "programme": "Green Wing",
    "question": "In Green Wing, who went on a date with Harriet in series two's fifth episode?",
    "answers": [
      "Alan Statham",
      "Martin Dear",
      "Lyndon Jones",
      "Mac Macartney"
    ],
    "correctAnswer": "Lyndon Jones",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "Green Wing",
      "Programme: Green Wing",
      "2004–2007",
      "Character and episode details",
      "Correct answer: Lyndon Jones",
      "Reference: https://www.comedy.co.uk/tv/green_wing/episodes/1/ and https://www.comedy.co.uk/tv/green_wing/episodes/2/",
      "Audited November 2026",
      "Series Two Episode Five",
      "Lyndon Jones",
      "Harriet Schulenburg",
      "Office Romance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36703",
    "category": "Television",
    "programme": "Green Wing",
    "question": "In Green Wing, whose Turkish penpal visited the hospital in series two?",
    "answers": [
      "Karen's",
      "Caroline's",
      "Joanna's",
      "Kim's"
    ],
    "correctAnswer": "Kim's",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "Green Wing",
      "Programme: Green Wing",
      "2004–2007",
      "Character and episode details",
      "Correct answer: Kim's",
      "Reference: https://www.comedy.co.uk/tv/green_wing/episodes/1/ and https://www.comedy.co.uk/tv/green_wing/episodes/2/",
      "Audited November 2026",
      "Series Two Episode Six",
      "Kim Alabaster",
      "Turkish Penpal",
      "Hospital Visit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36704",
    "category": "Television",
    "programme": "Green Wing",
    "question": "In Green Wing, which child did Harriet bring to work in series two's seventh episode?",
    "answers": [
      "Her son Robbie",
      "Her daughter Alice",
      "Her niece Chloe",
      "Her nephew Jamie"
    ],
    "correctAnswer": "Her son Robbie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "Green Wing",
      "Programme: Green Wing",
      "2004–2007",
      "Character and episode details",
      "Correct answer: Her son Robbie",
      "Reference: https://www.comedy.co.uk/tv/green_wing/episodes/1/ and https://www.comedy.co.uk/tv/green_wing/episodes/2/",
      "Audited November 2026",
      "Series Two Episode Seven",
      "Robbie",
      "Harriet Schulenburg",
      "Family Visit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36705",
    "category": "Television",
    "programme": "Green Wing",
    "question": "In Green Wing, which three men all decided to propose to Caroline near the end of series two?",
    "answers": [
      "Alan Guy and Boyce",
      "Guy Mac and Martin",
      "Mac Lyndon and Guy",
      "Martin Boyce and Alan"
    ],
    "correctAnswer": "Guy Mac and Martin",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "Green Wing",
      "Programme: Green Wing",
      "2004–2007",
      "Character and episode details",
      "Correct answer: Guy Mac and Martin",
      "Reference: https://www.comedy.co.uk/tv/green_wing/episodes/1/ and https://www.comedy.co.uk/tv/green_wing/episodes/2/",
      "Audited November 2026",
      "Series Two Episode Eight",
      "Caroline Todd",
      "Marriage Proposals",
      "Romance Triangle"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36706",
    "category": "Television",
    "programme": "The Smoking Room",
    "question": "In The Smoking Room, which employee was preparing for an important interview in Doo Di Dum Di Da?",
    "answers": [
      "Robin",
      "Clint",
      "Barry",
      "Len"
    ],
    "correctAnswer": "Barry",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Smoking Room",
      "Programme: The Smoking Room",
      "2004–2005",
      "Character and episode details",
      "Correct answer: Barry",
      "Reference: https://www.comedy.co.uk/tv/the_smoking_room/episodes/1/ and https://www.comedy.co.uk/tv/the_smoking_room/episodes/2/",
      "Audited November 2026",
      "Doo Di Dum Di Da",
      "Barry",
      "Series One",
      "Job Interview"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36707",
    "category": "Television",
    "programme": "The Smoking Room",
    "question": "In The Smoking Room, whose lunch was Janet instructed to collect in Feeding Time?",
    "answers": [
      "Robin's",
      "Barry's",
      "Lilian's",
      "Sharon's"
    ],
    "correctAnswer": "Sharon's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Smoking Room",
      "Programme: The Smoking Room",
      "2004–2005",
      "Character and episode details",
      "Correct answer: Sharon's",
      "Reference: https://www.comedy.co.uk/tv/the_smoking_room/episodes/1/ and https://www.comedy.co.uk/tv/the_smoking_room/episodes/2/",
      "Audited November 2026",
      "Feeding Time",
      "Janet",
      "Series One",
      "Lunch Errand"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36708",
    "category": "Television",
    "programme": "The Smoking Room",
    "question": "In The Smoking Room, which character feared nearly every form of transport in Only Temporary?",
    "answers": [
      "Barry",
      "Len",
      "Robin",
      "Clint"
    ],
    "correctAnswer": "Barry",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Smoking Room",
      "Programme: The Smoking Room",
      "2004–2005",
      "Character and episode details",
      "Correct answer: Barry",
      "Reference: https://www.comedy.co.uk/tv/the_smoking_room/episodes/1/ and https://www.comedy.co.uk/tv/the_smoking_room/episodes/2/",
      "Audited November 2026",
      "Only Temporary",
      "Barry",
      "Series One",
      "Travel Anxiety"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36709",
    "category": "Television",
    "programme": "The Smoking Room",
    "question": "In The Smoking Room, who was hoping Ben from the post room would come to Lilian's birthday party?",
    "answers": [
      "Clint",
      "Robin",
      "Barry",
      "Len"
    ],
    "correctAnswer": "Robin",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Smoking Room",
      "Programme: The Smoking Room",
      "2004–2005",
      "Character and episode details",
      "Correct answer: Robin",
      "Reference: https://www.comedy.co.uk/tv/the_smoking_room/episodes/1/ and https://www.comedy.co.uk/tv/the_smoking_room/episodes/2/",
      "Audited November 2026",
      "Happy Birthday",
      "Robin",
      "Series One",
      "Ben From Post Room"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36710",
    "category": "Television",
    "programme": "The Smoking Room",
    "question": "In The Smoking Room, what academic exercise was Janet's nephew conducting in Bzzzzzzzzz?",
    "answers": [
      "A medical trial",
      "A physics experiment",
      "A psychological study",
      "A language survey"
    ],
    "correctAnswer": "A psychological study",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Smoking Room",
      "Programme: The Smoking Room",
      "2004–2005",
      "Character and episode details",
      "Correct answer: A psychological study",
      "Reference: https://www.comedy.co.uk/tv/the_smoking_room/episodes/1/ and https://www.comedy.co.uk/tv/the_smoking_room/episodes/2/",
      "Audited November 2026",
      "Bzzzzzzzzz",
      "Janets Nephew",
      "Series Two",
      "Psychology Study"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36711",
    "category": "Television",
    "programme": "The Smoking Room",
    "question": "In The Smoking Room, which office worker had originally been Barry's secretary according to the 1987 company photographs?",
    "answers": [
      "Lilian",
      "Annie",
      "Sally",
      "Sharon"
    ],
    "correctAnswer": "Sharon",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Smoking Room",
      "Programme: The Smoking Room",
      "2004–2005",
      "Character and episode details",
      "Correct answer: Sharon",
      "Reference: https://www.comedy.co.uk/tv/the_smoking_room/episodes/1/ and https://www.comedy.co.uk/tv/the_smoking_room/episodes/2/",
      "Audited November 2026",
      "1987 Episode",
      "Sharon",
      "Series Two",
      "Barry Secretary"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36712",
    "category": "Television",
    "programme": "The Smoking Room",
    "question": "In The Smoking Room, what had happened to the room before the episode Smashed?",
    "answers": [
      "Someone had broken in and vandalised it",
      "The ceiling collapsed",
      "The furniture was sold",
      "The heating was removed"
    ],
    "correctAnswer": "Someone had broken in and vandalised it",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Smoking Room",
      "Programme: The Smoking Room",
      "2004–2005",
      "Character and episode details",
      "Correct answer: Someone had broken in and vandalised it",
      "Reference: https://www.comedy.co.uk/tv/the_smoking_room/episodes/1/ and https://www.comedy.co.uk/tv/the_smoking_room/episodes/2/",
      "Audited November 2026",
      "Smashed Episode",
      "Vandalism",
      "Series Two",
      "Broken Room"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36713",
    "category": "Television",
    "programme": "The Smoking Room",
    "question": "In The Smoking Room, which organisation demanded morale-boosting practical jokes in Pity the Fool?",
    "answers": [
      "The local council",
      "Head office",
      "A customer board",
      "The union committee"
    ],
    "correctAnswer": "Head office",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Smoking Room",
      "Programme: The Smoking Room",
      "2004–2005",
      "Character and episode details",
      "Correct answer: Head office",
      "Reference: https://www.comedy.co.uk/tv/the_smoking_room/episodes/1/ and https://www.comedy.co.uk/tv/the_smoking_room/episodes/2/",
      "Audited November 2026",
      "Pity The Fool",
      "Head Office",
      "Series Two",
      "April Fools"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36714",
    "category": "Television",
    "programme": "The Smoking Room",
    "question": "In The Smoking Room, what management goal did Sharon hope to achieve by forcing an anti-smoking seminar in Quitters?",
    "answers": [
      "More staff holidays",
      "Lower electricity bills",
      "Higher productivity",
      "A bigger office"
    ],
    "correctAnswer": "Higher productivity",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Smoking Room",
      "Programme: The Smoking Room",
      "2004–2005",
      "Character and episode details",
      "Correct answer: Higher productivity",
      "Reference: https://www.comedy.co.uk/tv/the_smoking_room/episodes/1/ and https://www.comedy.co.uk/tv/the_smoking_room/episodes/2/",
      "Audited November 2026",
      "Quitters",
      "Sharon",
      "Series Two",
      "Productivity Drive"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36715",
    "category": "Television",
    "programme": "The Smoking Room",
    "question": "In The Smoking Room, what did Sally have to mix with vodka after her colleagues were trapped by snow?",
    "answers": [
      "Orange juice",
      "Milk",
      "Ginger ale",
      "Pasta sauce"
    ],
    "correctAnswer": "Pasta sauce",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Smoking Room",
      "Programme: The Smoking Room",
      "2004–2005",
      "Character and episode details",
      "Correct answer: Pasta sauce",
      "Reference: https://www.comedy.co.uk/tv/the_smoking_room/episodes/1/ and https://www.comedy.co.uk/tv/the_smoking_room/episodes/2/",
      "Audited November 2026",
      "No Place Like Home",
      "Snowstorm",
      "Series Two",
      "Strange Cocktail"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36716",
    "category": "Television",
    "programme": "The Smoking Room",
    "question": "In The Smoking Room, whose engagement did Robin worry was moving too quickly in Significant Others?",
    "answers": [
      "Janet's",
      "Sharon's",
      "Sally's",
      "Annie's"
    ],
    "correctAnswer": "Janet's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Workplace Comedy",
      "The Smoking Room",
      "Programme: The Smoking Room",
      "2004–2005",
      "Character and episode details",
      "Correct answer: Janet's",
      "Reference: https://www.comedy.co.uk/tv/the_smoking_room/episodes/1/ and https://www.comedy.co.uk/tv/the_smoking_room/episodes/2/",
      "Audited November 2026",
      "Significant Others",
      "Robin",
      "Series Two",
      "Marriage Proposal"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==206||
 questions[0].id!=='tv_14627'||questions[140].id!=='tv_14767'||
 auditAdditions[0].id!=='tv_36652'||auditAdditions.at(-1).id!=='tv_36716'||
 new Set(questions.map(q=>q.id)).size!==questions.length||
 new Set(questions.map(q=>q.question.trim().toLowerCase())).size!==questions.length||
 questions.some(q=>q.category!=='Television'||!q.programme||
  q.answers.length!==4||new Set(q.answers.map(a=>a.trim().toLowerCase())).size!==4||
  q.answers.filter(a=>a===q.correctAnswer).length!==1||
  !q.tags.includes('Programme: '+q.programme)||q.tags.length<14||q.dailyEligible!==true)||
 auditAdditions.some(q=>!q.question.includes(q.programme)||q.tags.length<15))
 throw Error('Pack 323 audit QA failed');
module.exports = questions;
