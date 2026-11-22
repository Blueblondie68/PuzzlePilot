// PuzzlePilot - The Bigggggg Quiz - Pack 437
// Auf Wiedersehen, Pet: Series 1 (1983-84) and Series 2 (1986).
// Pack 438 will cover the later BBC series and specials.
// Follows Pack 436; first ID: tv_25796. WordPad-ready CommonJS.
// Original ITV Series 1-2; BBC Series 3-4 and specials are covered in Pack 438.
'use strict';

const FIRST_ID = 25796;
const programme = 'Auf Wiedersehen, Pet';
const commonTags = [
  'Television', 'British Television', 'British Comedy Drama', 'ITV',
  'Auf Wiedersehen, Pet', 'Programme: Auf Wiedersehen, Pet',
  'Construction Workers', '1980s Television', 'Series 1-2'
];

// Question | correct answer | three wrong answers | difficulty | seven specific tags.
const facts = `On which British television network did Auf Wiedersehen, Pet originally premiere?|ITV|BBC One|Channel 4|BBC Two|Easy|Original Broadcaster|Central Television|1983 Premiere|British Comedy Drama|First Series|Broadcast History|United Kingdom
In which year did Auf Wiedersehen, Pet first appear on television?|1983|1979|1986|1992|Easy|1983 Debut|First Broadcast|Central Television|ITV|Programme Launch|British Television|Original Run
Where did the lads seek building work in the first series of Auf Wiedersehen, Pet?|West Germany|France|The Netherlands|Belgium|Easy|West Germany|Series One|Overseas Employment|Construction Site|Dusseldorf|Expatriate Workers|1983
In which German city did the workers find jobs in the original series?|Dusseldorf|Hamburg|Cologne|Munich|Easy|Dusseldorf|Series One|West Germany|Building Site|Working Abroad|Construction|1983
How many main construction workers formed the original gang?|Seven|Five|Six|Eight|Easy|Seven Workers|Main Characters|Building Gang|Dusseldorf|Original Cast|Series One|Hut
Who played Dennis Patterson in Auf Wiedersehen, Pet?|Tim Healy|Jimmy Nail|Kevin Whately|Pat Roach|Medium|Tim Healy|Dennis Patterson|Actor|Geordie|Foreman Figure|Main Cast|1983
Who played Neville Hope in Auf Wiedersehen, Pet?|Kevin Whately|Timothy Spall|Gary Holton|Christopher Fairbank|Medium|Kevin Whately|Neville Hope|Actor|Geordie|Main Cast|Brenda Hope|1983
Which actor played Leonard 'Oz' Osborne?|Jimmy Nail|Tim Healy|Pat Roach|Bill Paterson|Easy|Jimmy Nail|Oz Osborne|Leonard Osborne|Actor|Geordie|Original Seven|1983
Who portrayed Barry Taylor, the group's electrician?|Timothy Spall|Kevin Whately|Gary Holton|Michael Elphick|Medium|Timothy Spall|Barry Taylor|Electrician|Actor|Wolverhampton|Original Seven|1983
Who played Wayne Norris in the first two series?|Gary Holton|Noel Clarke|John Bowler|Christopher Fairbank|Medium|Gary Holton|Wayne Norris|Carpenter|Actor|Original Seven|1983 To 1986|London
Which actor played Brian 'Bomber' Busbridge?|Pat Roach|Tim Healy|Frank Middlemass|Bill Paterson|Medium|Pat Roach|Bomber Busbridge|Bristol|Actor|Original Seven|Wrestler|1983
Who played Albert Moxey in the original series?|Christopher Fairbank|Timothy Spall|Kevin Whately|Tim Healy|Medium|Christopher Fairbank|Albert Moxey|Original Seven|Actor|Building Gang|1983|Liverpool
Which two writers were chiefly responsible for Auf Wiedersehen, Pet?|Dick Clement and Ian La Frenais|John Sullivan and Ray Galton|David Croft and Jimmy Perry|Richard Curtis and Ben Elton|Medium|Dick Clement|Ian La Frenais|Writers|Television Scripts|British Comedy|Series Creation|1980s
Who created the television series Auf Wiedersehen, Pet?|Franc Roddam|John Sullivan|David Croft|Roy Clarke|Hard|Franc Roddam|Series Creator|Original Producer|Central Television|Programme Origins|1983|Production
What kind of work did Barry Taylor do on the German building site?|Electrical work|Bricklaying|Carpentry|Plumbing|Easy|Barry Taylor|Electrician|Timothy Spall|Dusseldorf Site|Skilled Trade|Series One|Work
Which of the seven was the carpenter originally from London?|Wayne Norris|Neville Hope|Dennis Patterson|Bomber Busbridge|Medium|Wayne Norris|Gary Holton|Londoner|Carpenter|Series One|Original Gang|Skilled Trade
Which of the seven was a large, gentle worker from Bristol?|Bomber Busbridge|Oz Osborne|Barry Taylor|Moxey|Medium|Bomber Busbridge|Pat Roach|Bristol|Original Seven|Protective Friend|West Country|Series One
Which town did Barry return to when renovating his home at the start of Series 2?|Wolverhampton|Newcastle|Bristol|Nottingham|Medium|Barry Taylor|Wolverhampton|Series Two|House Renovation|Midlands|1986|Reunion
What was the title of the first episode of Auf Wiedersehen, Pet?|If I Were a Carpenter|The Return of the Seven|Who Won the War Anyway?|The Girls They Left Behind|Hard|If I Were a Carpenter|Pilot Broadcast|Series One|First Episode|11 November 1983|Dusseldorf Arrival|Episode Title
Why did Dennis claim Neville was a carpenter in the first episode?|Only two bricklayers were needed|Neville had lost his tools|The foreman refused to hire Geordies|Neville wanted to avoid working outside|Medium|If I Were A Carpenter|Dennis Patterson|Neville Hope|Job Shortage|Pretended Carpenter|Dusseldorf|Series One
What construction trade did Neville actually know when he was passed off as a carpenter?|Bricklaying|Roofing|Glazing|Plastering|Medium|Neville Hope|Bricklayer|False Carpentry Claim|German Building Site|Series One|First Episode|Work Skills
Which name appeared on the tattoo Neville acquired after a night out in Germany?|Lotte|Dagmar|Christa|Marjorie|Hard|Neville Hope|Lotte Tattoo|If I Were A Carpenter|Night Out|Dusseldorf|Series One|Comic Misadventure
How did Wayne travel past the others after Oz's car broke down on the autobahn?|He got a lift in a lorry|He rode a motorcycle|He caught an overnight train|He hired a taxi|Medium|Wayne Norris|Hitchhiking|Autobahn|If I Were A Carpenter|Oz Car|Series One|Germany Journey
What vehicle did Barry ride when the lads first met him?|A motorcycle|A campervan|A bicycle|A sports car|Medium|Barry Taylor|Motorbike|First Episode|Wolverhampton|Electrician|1983|Travel
What dangerous wartime object did Neville discover at the building site?|An unexploded bomb|A buried minefield|An abandoned tank|A live hand grenade|Easy|Neville Hope|Unexploded Bomb|Who Won The War Anyway|Series One|Construction Excavation|Heroic Act|Dusseldorf
What happened to Neville's job after he reported the unexploded bomb?|He was given bricklaying work|He was made site manager|He was sent home immediately|He moved to an office position|Medium|Neville Hope|Unexploded Bomb|Bricklaying Job|Who Won The War Anyway|Second Episode|German Foreman|Series One
Why did Oz initially lose his job in Who Won the War Anyway?|He fought with German workers|He refused to work on Sundays|He damaged the site crane|He faked a qualification|Medium|Oz Osborne|Dismissal|Fight|German Workers|Who Won The War Anyway|Series One|Building Site
What did the German workers do after Oz was dismissed?|They went on strike for his reinstatement|They demanded a longer lunch break|They asked to move to another site|They occupied the management offices|Medium|Oz Osborne|German Workers|Strike|Reinstatement|Who Won The War Anyway|Series One|Solidarity
What was the name of Oz's wife in the first series?|Marjorie|Vera|Brenda|Hazel|Medium|Oz Osborne|Marjorie Osborne|Marriage|The Girls They Left Behind|Series One|Family|Newcastle
What was the name of Dennis Patterson's wife during the Düsseldorf story?|Vera|Marjorie|Brenda|Dagmar|Medium|Dennis Patterson|Vera Patterson|Marriage|Series One|Family Relationship|Dusseldorf|Geordie
Where did Oz unexpectedly wake up after a drunken football trip in The Girls They Left Behind?|On a plane heading to Newcastle|In a police cell in Munich|On a ferry to Denmark|At a station in London|Medium|Oz Osborne|The Girls They Left Behind|Plane Journey|Newcastle|Football Trip|Series One|1983
What did Oz write on a letter from Marjorie before sending it back?|Not known at this address|Return to sender - deceased|Address temporarily closed|Gone away permanently|Hard|Oz Osborne|Marjorie Osborne|Returned Letter|The Girls They Left Behind|Domestic Conflict|Series One|Germany
What did the lads do with Oz's belongings when he went missing in Series 1?|Auctioned them and sent the money home|Burned them outside the hut|Shipped them to a warehouse|Gave them to the German foreman|Medium|Oz Osborne|The Girls They Left Behind|Auction|Hut Belongings|Marjorie|Dusseldorf|Series One
What recurring problem alarmed the men in the episode Suspicion?|Possessions kept disappearing from their hut|Their wages were repeatedly delayed|Someone had poisoned their food|Letters home were being intercepted|Medium|Suspicion|Series One|Missing Property|Hut|Accusations|Thief|Dusseldorf
Who was ultimately responsible for the thefts in Suspicion?|Someone from outside the hut|Barry Taylor|Neville Hope|Dennis Patterson|Medium|Suspicion|Series One|Outside Thief|Wrongful Blame|Hut|Missing Items|Mystery
Which worker had a sixteen-year-old daughter who ran away in Home Thoughts from Abroad?|Bomber Busbridge|Dennis Patterson|Barry Taylor|Wayne Norris|Medium|Bomber Busbridge|Runaway Daughter|Home Thoughts From Abroad|Bristol Family|Series One|Parental Concern|1983
To which city did Bomber return when his daughter was missing?|Bristol|Newcastle|Liverpool|London|Medium|Bomber Busbridge|Bristol|Home Thoughts From Abroad|Missing Daughter|Family Emergency|Series One|England
Where did Bomber's missing daughter turn up looking for him?|The Düsseldorf building site|A nightclub in Newcastle|A hotel in Spain|A port in Hamburg|Medium|Bomber Daughter|Home Thoughts From Abroad|Dusseldorf|Building Site|Runaway Teenager|Series One|Family Reunion
Who was accused of assaulting a German girl in The Accused?|Neville Hope|Barry Taylor|Wayne Norris|Oz Osborne|Medium|Neville Hope|The Accused|False Accusation|German Police|Series One|Taxi Journey|Assault Case
What journey had Neville shared with the woman before his arrest?|A taxi ride|A train journey|A ferry crossing|A coach tour|Medium|Neville Hope|The Accused|Taxi Ride|German Woman|Police Investigation|Series One|Dusseldorf
Who helped identify the real culprit and clear Neville in The Accused?|German colleagues from the site|The British consulate|An off-duty British policeman|The building site's accountant|Medium|Neville Hope|The Accused|German Workers|Exoneration|Assault Investigation|Series One|Solidarity
Which office worker developed a romance with Dennis in the original Düsseldorf series?|Dagmar|Hazel|Vicki|Brenda|Easy|Dagmar|Dennis Patterson|Site Office|Romance|Private Lives|Series One|Dusseldorf
Who went to a hotel with Dennis for a romantic break in Private Lives?|Dagmar|Vera|Marjorie|Christa|Medium|Dennis Patterson|Dagmar|Private Lives|Hotel Visit|Series One|Dating|Dusseldorf
Which pair met Swedish air hostesses during the episode Private Lives?|Wayne and Barry|Dennis and Neville|Oz and Bomber|Barry and Moxey|Medium|Private Lives|Wayne Norris|Barry Taylor|Swedish Air Hostesses|Hotel|Series One|Dating
What prank spoiled Dennis and Dagmar's hotel evening in Private Lives?|Oz sent Barry and Wayne to the wrong room|Neville accidentally set off a fire alarm|Bomber locked Dennis outside|Moxey switched the hotel key cards|Medium|Private Lives|Oz Osborne|Hotel Practical Joke|Dennis And Dagmar|Wrong Room|Barry And Wayne|Series One
What leisure activity took the lads into the countryside in The Fugitive?|Fishing|Horse riding|Skiing|Cycling|Medium|The Fugitive|Series One|Fishing Weekend|Countryside|British Hitchhiker|Group Outing|1984
What was the secret of the English hitchhiker the lads met in The Fugitive?|He was absent without leave from the Army|He was a missing pop singer|He had escaped from prison|He was an undercover journalist|Medium|The Fugitive|AWOL Soldier|Hitchhiker|British Army|Fishing Weekend|Series One|Military
What did the lads encourage the soldier in The Fugitive to do?|Return to his military unit|Emigrate to Australia|Apply to become a carpenter|Join the construction gang|Medium|The Fugitive|AWOL Soldier|Military Return|Hitchhiker|Group Advice|Series One|1984
What was the surname of the disruptive Irish worker who moved into the hut?|MacGowan|Pringle|Fraser|Blackburn|Medium|MacGowan|The Alien|Irish Worker|Hut Intruder|Series One|Conflict|1984
Which actor portrayed the troublesome MacGowan in The Alien?|Michael Elphick|Bill Paterson|Bryan Pringle|James Booth|Hard|Michael Elphick|MacGowan|The Alien|Guest Actor|Series One|Irish Worker|1984
What caused conflict when MacGowan stayed in the group's hut?|His violent and threatening behaviour|His insistence on early bedtimes|His refusal to speak English|His constant cooking experiments|Medium|MacGowan|The Alien|Violent Behaviour|Hut|Unwanted Guest|Series One|Dusseldorf
What was the name of the seriously ill Geordie expatriate met in Last Rites?|Hedley|Sandro|Arthur|Harry|Hard|Hedley|Last Rites|Geordie Expatriate|German Hospital|Terminal Illness|Series One|1984
What did Oz hope to smuggle back to Britain in Last Rites?|Adult video tapes|German beer barrels|Stolen jewellery|Unlicensed car parts|Medium|Oz Osborne|Last Rites|Video Smuggling|Cross Border Scheme|Hedley Coffin|Barry And Moxey|Series One
What happened to Hedley's remains, frustrating Oz's smuggling scheme?|He was cremated in Germany|He was buried at sea|His body was flown to Spain|His coffin was held by British Customs|Medium|Hedley|Last Rites|Cremation|Video Smuggling|Oz Osborne|Germany|Series One
What did Barry persuade the group to do to their hut in The Lovers?|Redecorate it with paint|Install a satellite dish|Build a brick extension|Replace its roof with glass|Medium|Barry Taylor|The Lovers|Hut Redecoration|Paint|Series One|Shared Living|1984
What false impression did Oz give a woman he liked in The Lovers?|That he was a wealthy man's son|That he was a famous footballer|That he owned the construction site|That he was a British diplomat|Medium|Oz Osborne|The Lovers|Pretended Wealth|German Woman|Romantic Misrepresentation|Series One|1984
Who came to Düsseldorf hoping to repair her marriage in Love and Other Four Letter Words?|Vera Patterson|Marjorie Osborne|Brenda Hope|Hazel Taylor|Medium|Vera Patterson|Dennis Patterson|Love And Other Four Letter Words|Marriage Reconciliation|Dusseldorf Visit|Series One|1984
Which secretary did Wayne fall in love with near the end of Series 1?|Christa|Dagmar|Vicki|Hazel|Medium|Wayne Norris|Christa|Site Office|Love And Other Four Letter Words|Series One|Romance|1984
What destroyed the lads' shared accommodation in the Series 1 finale?|A fire|A flood|A demolition crew|A gas explosion|Easy|When The Boat Goes Out|Series One Finale|Hut Fire|Dusseldorf|Last Night|1984|Living Quarters
Whose home offered the lads shelter after the hut fire in When the Boat Goes Out?|Dagmar's|Christa's|Marjorie's|Brenda's|Medium|When The Boat Goes Out|Series One|Dagmar|Hut Fire|Emergency Shelter|Dusseldorf|1984
What new financial rule helped prompt the gang to leave Germany in the Series 1 finale?|Foreign workers had to register and pay income tax|They had to buy German government bonds|All pay had to be collected in British pounds|A compulsory television licence was introduced|Medium|When The Boat Goes Out|Foreign Worker Tax|German Government|Series One Finale|Employment Costs|1984|Departure
Who sent out the call that reunited the lads at the start of Series 2?|Barry Taylor|Dennis Patterson|Oz Osborne|Neville Hope|Easy|Barry Taylor|The Return Of The Seven|Series Two Premiere|Wolverhampton|House Renovation|Reunion|1986
Why did Barry urgently want the gang's help in Series 2?|To finish his home before his wedding|To repair a fire-damaged pub|To extend his electrical workshop|To build a house for his mother|Medium|Barry Taylor|The Return Of The Seven|Wolverhampton House|Upcoming Wedding|Hazel|Series Two|1986
Who was Barry planning to marry at the start of the 1986 series?|Hazel|Marjorie|Dagmar|Brenda|Easy|Barry Taylor|Hazel|Wedding Plans|Series Two|Wolverhampton|Romance|1986
Which actress played Barry's fiancée Hazel in Series 2?|Melanie Hill|Julia Tobin|Brigitte Kahn|Caroline Hutchison|Hard|Melanie Hill|Hazel|Barry Taylor|Actress|Series Two|Wedding|1986
Which character unexpectedly appeared inside Barry's house after escaping from prison?|Moxey|Wayne|Bomber|Oz|Easy|Albert Moxey|Prison Escape|The Return Of The Seven|Barry House|Series Two|Wolverhampton|1986
Who was the criminal businessman employing Dennis in Series 2?|Ally Fraser|Arthur Pringle|Kenny Ames|Harry Blackburn|Easy|Ally Fraser|Dennis Patterson|Crime Boss|Series Two|Newcastle|Thornley Manor|1986
Which actor played the unscrupulous Ally Fraser?|Bill Paterson|James Booth|Bryan Pringle|Michael Elphick|Medium|Bill Paterson|Ally Fraser|Actor|Series Two|Gangster Employer|1986|Scotland
What was the name of the country house the group were hired to renovate?|Thornley Manor|Manderley House|Pemberley Hall|Hawthorn Lodge|Easy|Thornley Manor|Series Two|Country House|Ally Fraser|Building Renovation|Derbyshire|1986
In which English county was Thornley Manor situated in the programme?|Derbyshire|Devon|Cumbria|Kent|Medium|Thornley Manor|Derbyshire|Country Estate|A Law For The Rich|Series Two|Rural Setting|1986
What did a local resident mistake the workmen for when they first arrived at Thornley Manor?|Burglars|Tax inspectors|Film extras|Wildlife officers|Medium|A Law For The Rich|Thornley Manor|Police Report|Mistaken Burglars|Derbyshire|Series Two|1986
What was the name of the hostile pub landlord near Thornley Manor?|Arthur Pringle|Kenny Ames|Harry Blackburn|Ally Fraser|Easy|Arthur Pringle|Pub Landlord|Thornley Manor|Series Two|Local Conflict|Derbyshire|1986
Which actor played the unfriendly landlord Arthur Pringle?|Bryan Pringle|Pat Roach|Bill Paterson|James Booth|Hard|Bryan Pringle|Arthur Pringle|Pub Landlord|Actor|Series Two|Derbyshire|1986
Why did renovation work initially stop in Another Country?|Thornley Manor was a listed building|The workers' tools were stolen|A strike closed the local roads|The house had been sold overnight|Medium|Another Country|Thornley Manor|Listed Building|Renovation Halt|Series Two|Historic Property|1986
What got Wayne and the rest of the lads thrown out of the pub in Another Country?|Wayne was caught in bed with the landlord's daughter|Oz challenged the landlord to a boxing match|Neville refused to pay for dinner|Bomber broke a window during a game|Medium|Another Country|Wayne Norris|Arthur Pringle|Landlord Daughter|Pub Expulsion|Series Two|1986
Where did the workmen sleep after local hostility left them without lodgings in A Home from Home?|Inside Thornley Manor|At Barry's house|On a night ferry|At a police station|Medium|A Home From Home|Thornley Manor|Improvised Accommodation|Arthur Pringle|Series Two|Derbyshire|1986
What did the lads discover on a video recorded at Thornley Manor?|Embarrassing footage featuring Arthur Pringle|A secret plan to sell the manor|A recording of their German hut fire|A documentary about Barry's wedding|Medium|A Home From Home|Arthur Pringle|Amateur Video|Thornley Manor|Series Two|Blackmail Material|1986
What trade did newcomer Harry Blackburn practise in the episode Cowboys?|Plumbing|Bricklaying|Electrical wiring|Carpentry|Medium|Harry Blackburn|Cowboys|Plumber|Temporary Worker|Thornley Manor|Series Two|1986
What sort of music was Harry Blackburn especially enthusiastic about?|Country and Western|Disco|Heavy metal|Reggae|Medium|Harry Blackburn|Country and Western|Cowboys|Series Two|Musical Taste|Pub Visit|1986
What stage nickname did Oz use during a Country and Western pub performance?|Big Willie Osborne|Texas Oz|Lonesome Leonard|Cowboy Geordie|Hard|Oz Osborne|Big Willie Osborne|Cowboys|Country Western Performance|Series Two|1986|Singing
Why did the gang go on strike during the episode Cowboys?|To protest Ally Fraser's treatment of Dennis|To demand a longer tea break|To object to English building rules|To support a local miners' rally|Medium|Cowboys|Ally Fraser|Dennis Patterson|Workplace Strike|Workers Solidarity|Series Two|1986
What happened when Ally Fraser sent enforcers to intimidate the striking workmen?|The lads fought them off|The lads called the British Army|The enforcers took over the manor|The gang fled to Germany|Medium|Cowboys|Ally Fraser|Hired Heavies|Strike|Thornley Manor|Series Two|Physical Confrontation
Why did Customs and Excise impound Wayne's car in No Sex Please, We're Brickies?|He had no import licence for the German vehicle|The car was reported stolen|His road tax had expired in Spain|The engine had been illegally modified|Medium|Wayne Norris|Import Licence|Customs And Excise|No Sex Please Were Brickies|Series Two|German Car|1986
What prank did the gang play on Arthur Pringle before leaving Thornley Manor?|They bricked up his front door|They painted his pub bright pink|They filled his bar with sand|They hid his pub sign in a field|Easy|Arthur Pringle|Bricked Doorway|No Sex Please Were Brickies|Thornley Manor|Series Two|Revenge|1986
Where did Oz discover his wife Marjorie planned to move with their son?|Italy|Germany|Spain|Ireland|Medium|Oz Osborne|Marjorie Osborne|Italy Move|Marjorie Doesnt Live Here Anymore|Series Two|Rod Osborne|1986
What was the name of Marjorie's Italian partner in the second series?|Sandro|Kenny|Harry|Hedley|Hard|Marjorie Osborne|Sandro|Italian Partner|Oz Osborne|Series Two|New Relationship|1986
What was the name of Oz and Marjorie's son?|Rod|Gavin|Paul|Danny|Medium|Rod Osborne|Oz Osborne|Marjorie Osborne|Child|Series Two|Family Relationship|1986
To which country did Ally Fraser send the lads for the second half of Series 2?|Spain|Portugal|Greece|France|Easy|Spain|Series Two|Ally Fraser|Villa Renovation|Overseas Work|1986|Mediterranean
Why did the workmen pretend to be holidaymakers on the flight to Spain?|They were travelling to work without legal permission|They wanted to surprise Barry's fiancée|They were secretly filming a travel programme|Their employer wanted them to enter a competition|Medium|Hasta La Vista|Spain|Tourist Cover|Illegal Employment|Ally Fraser|Series Two|1986
Which group shared the plane with the lads during their journey to Spain?|Spennymoor and district senior citizens|A Newcastle football supporters club|A British army brass band|A touring theatre company|Hard|Hasta La Vista|Spennymoor|Senior Citizens|Spain Flight|Tourist Cover|Series Two|1986
In Scoop, why did the lads run into trouble at a swimming pool in Spain?|They swam in the wrong property's pool|They damaged the pool filtration system|They refused to pay the entrance charge|They argued with the lifeguard|Medium|Scoop|Spain|Wrong Swimming Pool|Ally Fraser|Police Trouble|Series Two|1986
What crime did a British journalist wrongly connect the builders with in Spain?|Bank robbery|Art theft|Kidnapping|Arms smuggling|Medium|Scoop|British Journalist|Mistaken Bank Robbers|Spanish Police|Tabloid Report|Series Two|1986
Where did the false story about the builders being criminals appear in Scoop?|British tabloid newspapers|An international sports magazine|A Spanish building trade journal|A German travel brochure|Medium|Scoop|Tabloid Publicity|Mistaken Identity|British Press|Spain|Series Two|1986
Who urged the lads to behave like tourists rather than workers in Law and Disorder?|Ally Fraser|Barry Taylor|Hazel|Arthur Pringle|Medium|Law And Disorder|Ally Fraser|Tourist Pretence|Illegal Work|Spain|Series Two|1986
Which character arrived in Spain to arrange her wedding to Barry?|Hazel|Vera|Brenda|Dagmar|Easy|Hazel|Barry Taylor|For Better Or Worse|Wedding Preparations|Spain|Series Two|1986
Where did Ally Fraser propose holding Barry and Hazel's wedding?|On Kenny Ames' yacht|At Thornley Manor|In a chapel in Newcastle|At the British embassy|Medium|Barry Taylor|Hazel|Kenny Ames|Wedding Yacht|For Better Or Worse|Series Two|1986
What illegal plan did Ally Fraser intend to conceal behind Barry's wedding?|Smuggling money into Spain|Stealing a cargo of antiques|Exporting counterfeit car parts|Selling stolen construction machinery|Medium|Ally Fraser|Smuggling Money|Wedding Cover|Kenny Ames Yacht|Series Two|For Better Or Worse|1986
Which character managed to make Ally Fraser cancel what Dennis owed him at the end of Series 2?|Dennis Patterson|Barry Taylor|Neville Hope|Moxey|Medium|Dennis Patterson|Ally Fraser|Debt Cleared|Quo Vadis Pet|Series Two Finale|1986|Gangster Plot
Which lottery did Oz win before the chaotic conclusion of Series 2?|The Spanish lottery|The German lottery|The Irish lottery|The British football pools|Easy|Oz Osborne|Spanish Lottery|Quo Vadis Pet|Series Two Finale|Spain|Windfall|1986
With whose girlfriend Vicki did Oz have an affair in the Series 2 finale?|Ally Fraser's|Barry Taylor's|Kenny Ames'|Arthur Pringle's|Medium|Oz Osborne|Vicki|Ally Fraser|Quo Vadis Pet|Series Two|Spain|1986
Where did Barry and Hazel finally marry in the Series 2 finale?|At sea on a yacht|In a church in Wolverhampton|At the German building site|At a hotel in Derbyshire|Easy|Barry And Hazel|Wedding At Sea|Quo Vadis Pet|Kenny Ames Yacht|Series Two Finale|1986|Marriage
Which North African destination was the yacht heading towards as Customs pursued it?|Tangiers|Tunis|Cairo|Casablanca|Medium|Quo Vadis Pet|Tangiers|Morocco|Yacht Pursuit|Customs Boat|Series Two Finale|1986
Which original cast member died in 1985 before the second series finished filming?|Gary Holton|Pat Roach|Tim Healy|Timothy Spall|Medium|Gary Holton|Wayne Norris|1985 Death|Production Tragedy|Series Two|Unfinished Scenes|Cast History
How did the production finish some scenes after Gary Holton's death?|Script rewrites and body doubles|A computer-generated replica|Replacing Wayne with a different named actor|Removing the entire Spanish story|Medium|Gary Holton|Series Two Production|Script Rewrites|Body Double|Wayne Norris|1985|Production Methods
To whom was the final 1986 episode dedicated?|Gary Holton and his character Wayne|The original building-site foreman|The people of Dusseldorf|The residents of Thornley Manor|Medium|Gary Holton|Wayne Norris|Final Episode Dedication|Quo Vadis Pet|Series Two|1986|In Memoriam`;


// Focused original ITV series audit: BAFTA nominations, music, first broadcasts, cast, and Educating Oz.
// Retain all original question IDs, answers, and tags.
const AUDIT_ORIGINAL_COUNT = 105;
const AUDIT_FIRST_ID = 42489;
const auditFacts = `In which two years was Auf Wiedersehen, Pet nominated for the BAFTA Drama Series or Serial award?|1984 and 1985|1983 and 1984|1985 and 1986|1986 and 1987|Medium|1984 BAFTA Nomination|1985 BAFTA Nomination|Drama Series or Serial|British Academy|ITV Era|Awards History|Martin McKeand
Which BAFTA television category nominated Auf Wiedersehen, Pet in both 1984 and 1985?|Drama Series or Serial|Comedy Series|Light Entertainment|Single Drama|Medium|Drama Series or Serial|BAFTA Television|1984 Nomination|1985 Nomination|Programme Recognition|British Drama|Awards Category
Who was the credited producer for the 1984 and 1985 BAFTA drama nominations of Auf Wiedersehen, Pet?|Martin McKeand|Franc Roddam|Allan McKeown|Roger Bamford|Medium|Martin McKeand|Producer|1984 BAFTA|1985 BAFTA|Drama Series Nomination|Behind The Scenes|Programme Credits
Which musical award was Auf Wiedersehen, Pet nominated for at the 1984 BAFTAs?|Original Television Music|Best Original Song in a Film|Best Music Video|Best Soundtrack Album|Medium|1984 BAFTA|Original Television Music|Theme Score|David Mackay|Music Nomination|British Academy|Programme Honours
Which music creator received Auf Wiedersehen, Pet's 1984 BAFTA nomination for Original Television Music?|David Mackay|Joe Fagin|Ian La Frenais|George Fenton|Medium|David Mackay|Original Television Music|1984 BAFTA Nominee|Composer|Programme Theme|Music Recognition|Award Credit
Which sound professional received a 1984 BAFTA craft nomination for Auf Wiedersehen, Pet?|Henry Bird|David Mackay|Roy Simper|Rodney Taylor|Medium|Henry Bird|Sound Supervisor|1984 BAFTA Craft|Technical Nomination|Production Sound|British Academy|Television Crew
Which cameraman received a 1984 BAFTA craft nomination for Auf Wiedersehen, Pet?|Roy Simper|Henry Bird|Rodney Taylor|Roger England|Medium|Roy Simper|Video Cameraman|1984 BAFTA Craft|Technical Nomination|Production Camera|British Academy|Crew Recognition
Who sang the opening and closing theme songs of Auf Wiedersehen, Pet's first two ITV series?|Joe Fagin|Jimmy Nail|Gary Holton|Tim Healy|Medium|Joe Fagin|Theme Music|1983 Series|1986 Series|Vocal Performer|Opening Credits|Closing Credits
Which Joe Fagin song opened the first series of Auf Wiedersehen, Pet?|Breakin' Away|Get It Right|Back with the Boys Again|That's Livin' Alright|Medium|Breakin Away|Joe Fagin|1983 Opening Theme|David Mackay|Ian La Frenais|Series One|Music Credits
Which Joe Fagin song accompanied the closing credits of the first series of Auf Wiedersehen, Pet?|That's Livin' Alright|Breakin' Away|Get It Right|Back with the Boys Again|Medium|Thats Livin Alright|Joe Fagin|1983 Closing Theme|End Credits|Series One|Programme Music|ITV
Which song replaced Breakin' Away as the opening theme of Auf Wiedersehen, Pet Series 2?|Get It Right|That's Livin' Alright|Back with the Boys Again|Breakin' Away|Medium|Get It Right|1986 Opening Theme|Joe Fagin|David Mackay|Ian La Frenais|Series Two|Title Music
What song played during the closing credits of Auf Wiedersehen, Pet Series 2?|Back with the Boys Again|Get It Right|Breakin' Away|That's Livin' Alright|Medium|Back With The Boys Again|Joe Fagin|1986 Closing Theme|Series Two|Music Credits|End Titles|Television Soundtrack
On what date did the first episode of Auf Wiedersehen, Pet air on ITV?|11 November 1983|10 February 1984|21 February 1986|16 May 1986|Medium|11 November 1983|First Broadcast|ITV Premiere|Series One|Episode One|If I Were A Carpenter|British Television
On what date did the second ITV series of Auf Wiedersehen, Pet begin?|21 February 1986|16 May 1986|11 November 1983|10 February 1984|Medium|21 February 1986|Series Two Premiere|ITV|Broadcast History|The Return Of The Seven|1980s Drama|Programme Timeline
How many episodes were broadcast in each of the first two series of Auf Wiedersehen, Pet?|13|6|8|10|Medium|Thirteen Episodes|Series One|Series Two|1983 To 1986|Episode Count|ITV Broadcast|Programme Structure
What was the title of the last episode of Auf Wiedersehen, Pet Series 2?|Quo Vadis Pet|When the Boat Goes Out|Law and Disorder|The Return of the Seven|Medium|Quo Vadis Pet|1986 Series Finale|Episode Thirteen|ITV|Gary Holton Tribute|Final Original Series Episode|Programme Ending
Which German city stood in for Düsseldorf in some location footage of Auf Wiedersehen, Pet's first series?|Hamburg|Berlin|Munich|Bonn|Medium|Hamburg|Dusseldorf Stand In|German Filming|Series One|Location Production|1980s Television|Behind The Scenes
Which English studio housed the specially constructed German building site for Auf Wiedersehen, Pet?|Elstree Studios|Pinewood Studios|Ealing Studios|Shepperton Studios|Medium|Elstree Studios|Replica Building Site|Hertfordshire|First Series|Studio Production|German Hut|Filming Location
What was the initially proposed production format for Auf Wiedersehen, Pet before Central Television ordered thirteen episodes?|A two-hour television film|A daily soap opera|A thirty-minute sketch series|A weekly live variety show|Medium|Two Hour Film|Original Concept|Central Television|Franc Roddam|Commission History|Thirteen Episodes|Production Development
Who portrayed Dennis Patterson's wife Vera in the first series of Auf Wiedersehen, Pet?|Caroline Hutchison|Julia Tobin|Brigitte Kahn|Lysette Anthony|Medium|Caroline Hutchison|Vera Patterson|Dennis Patterson|Series One|Supporting Cast|1983 Drama|Actress Identification
Which actress portrayed the German secretary Dagmar in Auf Wiedersehen, Pet Series 1?|Brigitte Kahn|Caroline Hutchison|Julia Tobin|Melanie Hill|Medium|Brigitte Kahn|Dagmar|Dennis Patterson|Series One|German Romance|Supporting Cast|Actress Identification
Who played Neville Hope's wife Brenda in the early series of Auf Wiedersehen, Pet?|Julia Tobin|Caroline Hutchison|Brigitte Kahn|Lysette Anthony|Medium|Julia Tobin|Brenda Hope|Neville Hope|Series One And Two|Supporting Cast|Actress Identification|Family Story
Which public-health issue was addressed in the Auf Wiedersehen, Pet spin-off Educating Oz?|HIV and AIDS awareness|Smoking and lung cancer|Road traffic safety|Alcohol poisoning|Medium|Educating Oz|HIV AIDS Awareness|Tyne Tees Television|Public Information Film|1986 Spin Off|Health Education|Television Special
Which two original characters appeared in the Auf Wiedersehen, Pet educational spin-off Educating Oz?|Dennis and Oz|Barry and Neville|Moxey and Bomber|Wayne and Ally|Medium|Educating Oz|Dennis Patterson|Oz Osborne|Tim Healy|Jimmy Nail|Public Information Film|1986 Special`;

let sequence = 0;
const questions = [...facts.trim().split('\n'), ...auditFacts.trim().split('\n')].map(line => {
  const id = 'tv_' + String(sequence < AUDIT_ORIGINAL_COUNT ? FIRST_ID + sequence : AUDIT_FIRST_ID + sequence - AUDIT_ORIGINAL_COUNT).padStart(5, '0');
  const fields = line.trim().split('|').map(value => value.trim());
  if (fields.length !== 13)
    throw new Error(`Expected 13 fields for ${id}; found ${fields.length}`);
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
  if ([question, correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(value => !value))
    throw new Error(`Empty question, option or tag in ${id}`);
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.length !== 7)
    throw new Error(`Invalid difficulty or number of specific tags in ${id}`);
  if (new Set([correctAnswer, wrong1, wrong2, wrong3].map(a => a.toLowerCase())).size !== 4)
    throw new Error(`Repeated answer option in ${id}`);
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(sequence % 4, 0, correctAnswer);
  const tags = [...new Map([...commonTags, correctAnswer, ...specificTags]
    .map(tag => [tag.toLowerCase(), tag])).values()];
  const contextualQuestion = question.includes(programme)
    ? question
    : 'In Auf Wiedersehen, Pet, ' + question[0].toLowerCase() + question.slice(1);
  sequence++;
  return {
    id, category: 'Television', programme, question: contextualQuestion, answers,
    correctAnswer, difficulty, tags, dailyEligible: true
  };
});

if (!questions.length || questions[0].id !== 'tv_25796' ||
    new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length ||
    questions.some(q => q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
      q.tags.length < 14 || !q.tags.includes('Programme: Auf Wiedersehen, Pet') ||
      q.dailyEligible !== true))
  throw new Error('Pack 437 exported question validation failed');

module.exports = questions;