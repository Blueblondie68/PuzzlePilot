// PuzzlePilot - The Bigggggg Quiz - Pack 438
// Auf Wiedersehen, Pet: Series 3 (2002), Series 4 (2004), and Au Revoir specials (2004).
// Completes coverage started in Pack 437. First ID tv_25901.
// WordPad-ready CommonJS: full programme ends with the December 2004 specials.
'use strict';

const FIRST_ID = 25901;
const programme = 'Auf Wiedersehen, Pet';
const commonTags = [
  'Television', 'British Television', 'British Comedy Drama',
  'Auf Wiedersehen, Pet', 'Programme: Auf Wiedersehen, Pet',
  'BBC One', 'Building Workers', '2000s Television', 'Series 3-4',
  'Au Revoir Specials'
];

// Question | correct answer | three distractors | difficulty | seven question-specific tags.
const facts = `Which broadcaster revived Auf Wiedersehen, Pet in 2002?|BBC One|ITV|Channel 4|Sky One|Easy|BBC Revival|2002|Return To Television|Third Series|Broadcasting|British Comedy Drama|Original ITV Run
What enormous structure did the reunited lads plan to dismantle in Series 3?|Middlesbrough Transporter Bridge|Tyne Bridge|Humber Bridge|Tees Barrage|Easy|Series Three|Middlesbrough|Transporter Bridge|2002|Industrial Heritage|Dismantling Project|Engineering
In which town did the gang meet up for Oz's supposed wake?|Middlesbrough|Wolverhampton|Newcastle|Bristol|Easy|Bridging The Gap|Series Three Premiere|Oz Wake|Middlesbrough|2002|Reunion|First Episode
Whose supposed death brought the original friends together at the beginning of Series 3?|Oz Osborne|Dennis Patterson|Barry Taylor|Neville Hope|Easy|Bridging The Gap|Series Three|Fake Funeral|Oz Osborne|Reunion|2002|Prank
Which former building worker arrived alive at his own wake?|Oz Osborne|Albert Moxey|Brian Busbridge|Barry Taylor|Easy|Bridging The Gap|Oz Osborne|Pretended Death|2002|Gang Reunited|Comic Surprise|Series Three
Who was the new younger member of the gang introduced in Series 3?|Wyman Norris|Rod Osborne|Paul Patterson|Eric Taylor|Easy|Wyman Norris|New Character|2002 Revival|Series Three|Wayne Family|Builders|BBC One
Which original gang member was Wyman Norris's father?|Wayne Norris|Oz Osborne|Dennis Patterson|Bomber Busbridge|Easy|Wyman Norris|Wayne Norris|Father And Son|Legacy Character|Series Three|2002|Family Background
Which actor played Wyman Norris?|Noel Clarke|Ashley Walters|Daniel Kaluuya|Andrew Lincoln|Medium|Noel Clarke|Wyman Norris|2002 Cast|Actor|BBC Revival|Wayne Norris Son|Series Three
What was Wyman Norris's profession before joining the workers?|Disc jockey|Electrician|Police officer|Quantity surveyor|Medium|Wyman Norris|DJ|Music Career|Construction Work|Series Three|2002|Job Change
How had Wayne Norris died before the events of the 2002 revival?|From a congenital heart condition|In a road traffic accident|In a workplace fire|During a boating accident|Medium|Wayne Norris|Wyman Norris|2002 Revival|Death Backstory|Heart Condition|Series Three|Original Character
What happened to Moxey's motorbike near the Transporter Bridge in Bridging the Gap?|It went into the River Tees|It was stolen outside a pub|It collided with a bus|It caught fire in a car park|Hard|Albert Moxey|Motorcycle|River Tees|Bridging The Gap|2002|Bridge Visit|Mishap
What work was Dennis doing when the lads reunited in Series 3?|Driving a minicab|Running a hotel|Working as a policeman|Managing a bookshop|Medium|Dennis Patterson|Minicab Driver|Bridging The Gap|2002|Employment|Newcastle|Series Three
What sort of business was Neville operating at the start of the revival?|A building company|A taxi firm|A nightclub|A travel agency|Medium|Neville Hope|Building Company|Self Employed|Bridging The Gap|2002|Series Three|Employment
Where was Moxey working as a cleaner at the start of the 2002 series?|A nightclub|A hospital|A university|An airport|Medium|Albert Moxey|Nightclub Cleaner|Bridging The Gap|Series Three|2002|Employment|Mickey Startup
Who was the former MP linked to the bridge redevelopment deal?|Jeffrey Grainger|Ally Fraser|Kenny Ames|Arthur Pringle|Medium|Jeffrey Grainger|Former MP|Transporter Bridge|Redevelopment|2002|Series Three|Business Deal
Which actor played the disgraced politician Jeffrey Grainger?|Bill Nighy|Bill Paterson|James Booth|Michael Elphick|Medium|Bill Nighy|Jeffrey Grainger|Actor|Series Three|2002|Guest Cast|Bridge Scheme
Where had Oz previously become acquainted with Jeffrey Grainger?|In prison|At a football match|On a ferry|At a wedding|Medium|Oz Osborne|Jeffrey Grainger|Prison Connection|Series Three|2002|Bridge Scheme|Past Dealings
Which gangster was hunting Moxey for stolen money in Series 3?|Mickey Startup|Ally Fraser|Kenny Ames|Arthur Pringle|Hard|Mickey Startup|Albert Moxey|Stolen Cash|Series Three|2002|Gangster|Bridging The Gap
Who played the criminal Mickey Startup in the 2002 revival?|Michael Angelis|Bill Nighy|Clive Russell|James Booth|Hard|Michael Angelis|Mickey Startup|Guest Actor|Series Three|2002|Crime Plot|Moxey
What did Moxey take from Mickey Startup's safe?|Money and paperwork|A passport and an airline ticket|A diamond necklace|A stolen painting|Medium|Albert Moxey|Mickey Startup|Safe|Stolen Documents|Cash|Bridging The Gap|2002
Who organised labour for the bridge project through a gangmaster?|Oz Osborne|Barry Taylor|Neville Hope|Albert Moxey|Medium|Oz Osborne|Gangmaster|Bridge Labour|2002|Series Three|Construction Deal|Yorgo
What were the national backgrounds of the rival groups of workers who clashed in Heavy Metal?|Serbian and Kosovan|French and Spanish|Irish and Scottish|Polish and Czech|Medium|Heavy Metal|Series Three|Serbian Workers|Kosovan Workers|Labour Dispute|2002|Bridge Dismantling
Who was Barry Taylor's Russian wife during the revival?|Tatiana|Hazel|Dagmar|Marjorie|Easy|Barry Taylor|Tatiana Taylor|Series Three|Russian Wife|Marriage|2002|Family
Who was secretly involved with Barry's wife Tatiana while working with Barry?|Kadi|Jeffrey Grainger|Yorgo|Mickey Startup|Hard|Barry Taylor|Tatiana|Kadi|Affair|Series Three|2002|Business Betrayal
What criminal commodity was Kadi hiding in cars connected with Barry's business?|Cocaine|Counterfeit banknotes|Stolen jewellery|Illegal tobacco|Medium|Kadi|Barry Taylor|Lada Cars|Drug Smuggling|Series Three|2002|Cocaine
What made Oz confront his attitudes after seeing his son perform at Club Tabu?|Learning that his son was gay|Discovering his son was moving abroad|Finding his son had joined the police|Realising his son was married|Medium|Oz Osborne|Rod Osborne|Club Tabu|Sexuality|Father And Son|Series Three|2002
Who offered to buy the bridge for reconstruction in the American desert?|Joe Saugus|Jeffrey Grainger|Mickey Startup|Kadi|Medium|Joe Saugus|Bridge Purchase|Arizona|Native American Character|Series Three|2002|A Bridge Too Far
Which actor played the bridge buyer Joe Saugus?|Gordon Tootoosis|Wes Studi|Graham Greene|Adam Beach|Hard|Gordon Tootoosis|Joe Saugus|Guest Actor|Series Three|2002|Native American Character|Arizona
In which American state were the lads hired to rebuild the bridge?|Arizona|Nevada|New Mexico|Utah|Easy|Arizona|Transporter Bridge|Reconstruction|Series Three|2002|United States|Joe Saugus
Across what geographical feature was the bridge to be rebuilt in the American storyline?|A desert canyon|A city harbour|A mountain pass|A railway cutting|Medium|Arizona|Desert Canyon|Transporter Bridge|A Bridge Too Far|2002|Construction|American Project
What enforcement agency detained the builders after drugs were found in their shipment?|DEA|FBI|CIA|US Marshals Service|Medium|Drug Enforcement Administration|DEA|Arizona|Another Country|Series Three|2002|Drug Case
Who was exposed to drug-smuggling charges during the American bridge job?|Barry Taylor|Dennis Patterson|Bomber Busbridge|Wyman Norris|Medium|Barry Taylor|Drug Charges|Arizona|Kadi|Series Three|Another Country|2002
Which original worker became wanted in connection with a murder on Teesside in Series 3?|Albert Moxey|Neville Hope|Oz Osborne|Barry Taylor|Medium|Albert Moxey|Teesside Murder|Police Investigation|An Inspector Calls|Series Three|2002|Crime Plot
What key obstacle held up construction in An Inspector Calls?|A missing section of the bridge|A shortage of cement|A collapsed access road|An earthquake at the site|Medium|An Inspector Calls|Series Three Finale|Missing Bridge Section|Arizona|2002|Construction Delay|Jeffrey Grainger
Who travelled from Britain to investigate Moxey in the Arizona storyline?|A Middlesbrough police detective|A London tax inspector|A Scottish customs officer|A Nottingham magistrate|Medium|Albert Moxey|British Detective|Arizona|An Inspector Calls|2002|Teesside|Murder Inquiry
Who negotiated with Grainger to help resolve the missing bridge-section dispute?|Dennis Patterson|Barry Taylor|Wyman Norris|Bomber Busbridge|Medium|Dennis Patterson|Jeffrey Grainger|Bridge Negotiation|Arizona|An Inspector Calls|Series Three|2002
Who directed the six episodes of the 2002 revival?|Paul Seed|Roger Bamford|Maurice Phillips|Sandy Johnson|Hard|Paul Seed|Director|Series Three|2002|Television Production|BBC Revival|Behind The Scenes
What happened to the lads' finished Russian construction job at the beginning of Series 4?|The mansion exploded|It was flooded by a river|It was seized in an auction|It burned in a forest fire|Easy|Britannia Waives The Rules|Series Four|Russia|Exploding Mansion|2004|Lost Payment|Building Work
What sort of man owned the Russian mansion that exploded in Britannia Waives the Rules?|A crime boss|A football manager|An opera singer|A shipping magnate|Medium|Russia|Criminal Employer|Mansion Explosion|Britannia Waives The Rules|Series Four|2004|Building Project
Which government-linked scheme offered the lads overseas maintenance jobs in Series 4?|Overseas Estates Development|International Building Agency|Foreign Property Board|Commonwealth Construction Corps|Medium|OED|Overseas Estates Development|Series Four|2004|Government Property|Embassy Work|Recruitment
What type of government property were the lads hired to refurbish in Cuba?|The British ambassador's residence|A naval dockyard|An airport terminal|A public hospital|Easy|Cuba|British Ambassador|Residence Refurbishment|Series Four|2004|Embassy Work|Havana
Which Cuban city was the main setting of the fourth series?|Havana|Santiago de Cuba|Trinidad|Camaguey|Easy|Havana|Cuba|Series Four|2004|Diplomatic Buildings|Overseas Workers|Setting
Which original gang member was secretly recruited to work for British intelligence?|Neville Hope|Dennis Patterson|Oz Osborne|Barry Taylor|Easy|Neville Hope|Undercover Work|British Intelligence|Series Four|2004|Spy Plot|Cuba
What intelligence organisation was involved in recruiting Neville for overseas work?|MI6|MI5|GCHQ|Special Branch|Medium|MI6|Neville Hope|Spy Recruitment|Britannia Waives The Rules|Series Four|2004|Covert Mission
Who helped Barry secure his release after an arrest in Russia?|His former wife Tatiana|Jeffrey Grainger|Mickey Startup|His colleague Dennis|Medium|Barry Taylor|Tatiana|Russia Arrest|Britannia Waives The Rules|Series Four|2004|Release
Why did the overseas-work agency initially refuse to accept Oz?|His recent criminal convictions|His lack of building experience|His poor health|His inability to speak Spanish|Medium|Oz Osborne|OED|Criminal Record|Britannia Waives The Rules|Series Four|2004|Job Rejection
What threat to the group's new overseas assignment did Neville help to remove?|Oz being excluded from the team|Barry being offered a promotion|Dennis taking early retirement|Moxey being sent home for illness|Medium|Neville Hope|Oz Osborne|OED Recruitment|Series Four|2004|Government Contact|Group Loyalty
In the Cuban episodes, who was the crew's initially hostile supervisor?|Trasker|Grainger|Yorgo|Arthur Pringle|Medium|Trasker|Our Boys In Havana|Series Four|2004|Site Supervisor|Workplace Conflict|Cuba
With whom did Wyman dance at a Cuban club, upsetting their supervisor?|The supervisor's wife|The British ambassador's daughter|Oz's sister|Barry's former wife|Medium|Wyman Norris|Trasker|Wife|Our Boys In Havana|Series Four|2004|Nightclub
What kind of performer did Oz fall in love with in Havana?|A ballet dancer|A jazz singer|A television presenter|A footballer|Easy|Oz Osborne|Ofelia Ortiz|Ballet|Cuba Romance|Series Four|2004|Havana
What was the name of the Cuban ballerina who became Oz's love interest?|Ofelia Ortiz|Tatiana Taylor|Pru Scott-Johns|Elena|Medium|Ofelia Ortiz|Oz Osborne|Ballerina|Havana|Series Four|2004|Romance
Which actress played the ballerina Ofelia Ortiz?|Josefina Gabrielle|Branka Katic|Caroline Harker|Zoë Eeles|Medium|Josefina Gabrielle|Ofelia Ortiz|Actress|Series Four|2004|Cuban Ballerina|Cast
What name did Neville keep repeating while trying to make contact with his handler in Cuba?|Heather|Mercury|Marjorie|Lotte|Hard|Neville Hope|Heather|Spy Contact|Our Boys In Havana|Series Four|2004|Secret Password
Which embassy employee presented himself as Neville's intelligence handler?|Tarquin Pearce|Gary Turnbull|Jeffrey Grainger|Kadi|Medium|Tarquin Pearce|Neville Hope|Embassy|Series Four|2004|Spy Handler|Cuba
Which actor portrayed the slippery embassy official Tarquin Pearce?|Alexander Hanson|Bill Nighy|Michael Angelis|Bill Paterson|Medium|Alexander Hanson|Tarquin Pearce|Actor|Series Four|2004|Embassy Official|Spy Plot
What gift from Fidel Castro were the builders sent to collect?|An antique bath|A grand piano|A vintage car|A marble statue|Easy|A Gift From Fidel|Fidel Castro|Antique Bath|Series Four|2004|Diplomatic Gift|Cuba
Who was intended to receive Castro's antique gift in A Gift from Fidel?|The British ambassador|The Cuban national museum|The Russian ambassador|The local hotel owner|Medium|A Gift From Fidel|British Ambassador|Antique Bath|Series Four|2004|Diplomatic Gift|Havana
Which worker went missing during the trip to collect Castro's gift?|Barry Taylor|Albert Moxey|Dennis Patterson|Wyman Norris|Medium|Barry Taylor|Missing Person|A Gift From Fidel|Cuban Countryside|Series Four|2004|Bath Collection
What profession did Neville's intelligence target Michael work in?|Pharmaceuticals|Shipbuilding|Banking|Hotel management|Medium|Michael|Pharmaceutical Company|Neville Hope|Moonlighting|Series Four|2004|Undercover Mission
Which football club's shirt did Neville wear to befriend Michael in Moonlighting?|Manchester United|Liverpool|Newcastle United|Arsenal|Easy|Neville Hope|Manchester United|Football Shirt|Moonlighting|Series Four|2004|Disguise
Why did Oz ask the other lads to repair a Cuban family's home in Moonlighting?|He wanted to impress Ofelia|He was promised a cash bonus|The ambassador ordered it|He was repaying a gambling debt|Medium|Oz Osborne|Ofelia Ortiz|Unofficial Building Work|Moonlighting|Series Four|2004|Family Home
Why did Cuban authorities become suspicious of Barry in Dangerous Liaisons?|His connections to Russia|His ownership of a British passport|His friendship with a footballer|His knowledge of German|Medium|Barry Taylor|Russia Links|Cuban Police|Dangerous Liaisons|Series Four|2004|Spy Suspicion
What happened to Barry after suspicions about him grew in Cuba?|He was imprisoned|He became an embassy official|He moved to Miami|He joined the Cuban police|Medium|Barry Taylor|Cuban Prison|Series Four|2004|Dangerous Liaisons|The End Of The Affair|Accusations
What did embassy officials want Oz to stop doing in Dangerous Liaisons?|Seeing Ofelia romantically|Working with Wyman|Speaking to Dennis|Visiting the British residence|Medium|Oz Osborne|Ofelia Ortiz|Romance Objection|Dangerous Liaisons|Series Four|2004|Embassy Pressure
Which woman helped Neville after he was abducted in The End of the Affair?|Pru Scott-Johns|Tatiana Taylor|Ofelia Ortiz|Elena|Medium|Pru Scott Johns|Neville Hope|Rescue|The End Of The Affair|Series Four|2004|Spy Plot
Who played Pru Scott-Johns in the 2004 series?|Caroline Harker|Julia Tobin|Branka Katic|Josefina Gabrielle|Hard|Caroline Harker|Pru Scott Johns|Actress|Series Four|2004|Guest Cast|Intelligence Plot
Which embassy character was exposed as deceptive in the final Cuban episode?|Tarquin Pearce|Gary Turnbull|Trasker|Michael|Medium|Tarquin Pearce|Deception|The End Of The Affair|Neville Hope|Series Four Finale|2004|Embassy
Which country was used for much of the filming in place of Cuba?|Dominican Republic|Jamaica|Barbados|Puerto Rico|Medium|Dominican Republic|Filming Location|Cuba Stand In|Series Four|2004|Production History|Caribbean
In which African setting did the 2004 two-part finale begin?|A British embassy under siege|A border crossing on a safari|A hospital during an evacuation|A mine in the desert|Medium|Au Revoir Part One|Central Africa|Embassy Siege|2004|Christmas Specials|Opening Scene|Riot
What caused Oz's injury during the embassy siege in Au Revoir?|Flying shrapnel from an explosion|A fall from scaffolding|A fight with a security guard|A vehicle overturning|Medium|Oz Osborne|Shrapnel Injury|Au Revoir Part One|2004|Embassy Explosion|Africa|Evacuation
In which Southeast Asian country did the men take another embassy assignment in the final specials?|Laos|Vietnam|Cambodia|Malaysia|Easy|Au Revoir|Laos|2004 Specials|Embassy Work|Vientiane|Asia|Final Adventure
In which capital did Oz rejoin the lads after his recovery?|Vientiane|Bangkok|Hanoi|Phnom Penh|Hard|Vientiane|Laos|Oz Osborne|Au Revoir Part One|2004|Return To Crew|Capital City
Which country's embassy were the lads assisting while seconded in Laos?|Australia|Canada|France|New Zealand|Medium|Australian Embassy|Laos|Secondment|Au Revoir Part One|2004|Diplomatic Site|Building Crew
What was Bomber said to be doing instead of joining the final overseas assignment?|Living with his new family in Arizona|Running a pub in Newcastle|Returning to Germany as a foreman|Working as a mechanic in London|Medium|Bomber Busbridge|Arizona|Au Revoir|2004|Absence Explained|Family Life|Original Gang
Who read out Bomber's letter to the other workers in the final specials?|Dennis Patterson|Oz Osborne|Neville Hope|Barry Taylor|Medium|Dennis Patterson|Bomber Letter|Au Revoir Part One|2004|Tribute|Missing Friend|Final Specials
What was the nationality of Moxey's new partner Elena in Au Revoir?|Australian|Canadian|American|New Zealander|Medium|Albert Moxey|Elena|Australian Girlfriend|Au Revoir|2004|Relationship|Final Specials
Where did Moxey plan to settle with Elena after the lads finished working together?|Australia|Canada|Spain|Italy|Easy|Albert Moxey|Elena|Emigration|Australia|Au Revoir|2004|Future Plans
Which transport service carried Barry and Tatiana during their renewed romance in Au Revoir?|Eastern & Oriental Express|Orient Express to Venice|Trans-Siberian Railway|Eurostar|Medium|Barry Taylor|Tatiana|Eastern And Oriental Express|Au Revoir|2004|Luxury Train|Reconciliation
What news did Tatiana tell Barry about their future in the final specials?|She was pregnant|She had bought a hotel|She was moving back to Russia alone|She had joined the diplomatic service|Medium|Tatiana Taylor|Barry Taylor|Pregnancy|Au Revoir|2004|Reconciliation|Family News
Who was kidnapped while touring a temple during the final adventure?|Barry Taylor|Neville Hope|Wyman Norris|Oz Osborne|Easy|Barry Taylor|Kidnapping|Temple|Au Revoir Part One|2004|Thailand|Hostage
What sort of group captured the lads as they searched for Barry?|Armed guerrillas|A private security company|A rival building crew|A group of smugglers posing as police|Medium|Au Revoir Part Two|Thailand|Guerrillas|Hostages|Rescue Mission|2004|Jungle
What mode of animal transport did the men use on part of their jungle journey?|Elephant|Horse|Camel|Water buffalo|Medium|Elephant Ride|Jungle Journey|Au Revoir Part Two|2004|Thailand|Search For Barry|Transport
What construction task did Dennis offer the captors in an attempt to improve their situation?|Building a wash house|Repairing a suspension bridge|Installing a hotel lift|Constructing a watchtower|Medium|Dennis Patterson|Wash House|Au Revoir Part Two|2004|Guerrilla Camp|Building Work|Escape Plan
What piece of communications equipment did the lads secretly use to call for help?|A satellite phone|A military radio|A laptop modem|A public telephone|Medium|Satellite Phone|Au Revoir Part Two|2004|Hostage Rescue|Neville Hope|Jungle Camp|Communication
Whom did Neville successfully reach when the gang contacted home for help?|His wife Brenda|His daughter Debbie|His old foreman|His friend Grainger|Easy|Neville Hope|Brenda Hope|Satellite Phone|Au Revoir Part Two|2004|Rescue Call|Family
Which apparently helpful embassy official was ultimately behind the kidnapping plot?|Tarquin Pearce|Jeffrey Grainger|Gary Turnbull|Trasker|Medium|Tarquin Pearce|Kidnapping Scheme|Au Revoir Part Two|2004|Double Cross|Embassy Spy|Villain
Which people helped rescue the gang after the kidnapping?|Australians from their earlier embassy assignment|Middlesbrough police officers|Spanish customs officials|A group of Russian builders|Medium|Australian Rescuers|Laos Assignment|Au Revoir Part Two|2004|Jungle|Hostage Recovery|Allies
Why did Dennis insist they complete the village wash house even after being freed?|He did not want to leave a job unfinished|He expected the captors to pay him|He had promised Barry a bonus|The embassy demanded proof of the work|Medium|Dennis Patterson|Wash House|Professional Pride|Au Revoir Part Two|2004|Building Crew|Final Job
Where was Wyman shown working as a DJ after the friends parted?|Ibiza|Berlin|Amsterdam|Lisbon|Medium|Wyman Norris|Ibiza|DJ|Au Revoir Ending|2004|Epilogue|Music
Which Australian city did Moxey's final scene place him in?|Brisbane|Sydney|Perth|Melbourne|Hard|Albert Moxey|Brisbane|Australia|Au Revoir Ending|2004|Elena|Epilogue
To which country did Dennis, Neville and Oz travel for a new job in the very last scene?|Germany|Spain|Russia|Cuba|Easy|Final Scene|Germany|Dennis Patterson|Neville Hope|Oz Osborne|2004|Full Circle
What form of transport carried Dennis, Neville and Oz towards Germany in the final scene?|A ferry|A private jet|A coach|A train|Medium|Ferry To Germany|Final Scene|Au Revoir|2004|Original Series Echo|Three Geordies|Journey
Which late cast member received the dedication at the end of the 2004 finale?|Pat Roach|Gary Holton|Bill Paterson|Michael Elphick|Medium|Pat Roach|Bomber Busbridge|Final Dedication|2004|Au Revoir|Cast Tribute|In Memoriam
What was the title of the two-part conclusion broadcast in December 2004?|Au Revoir|Bridging the Gap|A Bridge Too Far|The Last Brick|Easy|Au Revoir|2004 Finale|Two Part Special|Christmas Television|Series End|BBC One|Episode Title`;


// Final-programme gap audit: awards (2002 Comedy Awards win, 2003 BAFTA/RTS nominations),
// 2003 Comic Relief special, cast, production credits and verified transmission dates.
// Original 94 IDs and answer data preserved.
const AUDIT_ORIGINAL_COUNT = 94;
const AUDIT_FIRST_ID = 42513;
const auditFacts = `Which award did Auf Wiedersehen, Pet win at the 2002 British Comedy Awards?|Best TV Comedy Drama|Best New TV Comedy|Best TV Comedy Actor|People's Choice Award|Medium|2002 British Comedy Awards|Best TV Comedy Drama|Award Win|BBC Revival|Programme Recognition|British Comedy|Official Winners
In which year did Auf Wiedersehen, Pet win Best TV Comedy Drama at the British Comedy Awards?|2002|1986|2003|2004|Medium|2002 Awards|British Comedy Awards|Award Win|Best TV Comedy Drama|BBC Revival|British Television|Programme Honours
For which category was Auf Wiedersehen, Pet nominated at the 2003 BAFTA Television Awards?|Drama Serial|Situation Comedy|Drama Series|Single Drama|Medium|2003 BAFTA Nomination|Drama Serial|BBC One|Television Awards|British Academy|2002 Revival|Not A Win
Which programme beat Auf Wiedersehen, Pet for the Drama Serial BAFTA in 2003?|Shackleton|Doctor Zhivago|Murder|Spooks|Medium|2003 BAFTA Awards|Shackleton|Drama Serial Winner|Nomination Result|British Academy|Awards History|BBC Competition
Which four individuals were credited on the 2003 BAFTA Drama Serial nomination for Auf Wiedersehen, Pet?|Paul Seed, Dick Clement, Ian La Frenais and Joy Spink|Paul Seed, Franc Roddam, Tim Healy and Jimmy Nail|Maurice Phillips, Kevin Whately, Noel Clarke and Joy Spink|Bill Nighy, Roger Bamford, Gary Holton and Allan McKeown|Hard|2003 BAFTA Nomination|Paul Seed|Dick Clement|Ian La Frenais|Joy Spink|Production Team|Drama Serial
For which Royal Television Society programme award was Auf Wiedersehen, Pet nominated in 2003?|Situation Comedy and Comedy Drama|Drama Series|Children's Fiction|Entertainment|Medium|2003 RTS Award|Situation Comedy and Comedy Drama|Nomination|Royal Television Society|BBC One|Awards History|Comedy Drama
Which comedy series won the 2003 RTS award in the category where Auf Wiedersehen, Pet was nominated?|Phoenix Nights|The Office|Cutting It|Clocking Off|Medium|2003 RTS Award|Phoenix Nights 2|Award Winner|Situation Comedy and Comedy Drama|Royal Television Society|Awards Result|BBC Nomination
Which 2003 Comic Relief sketch reunited characters from Auf Wiedersehen, Pet?|Miami Vice|Au Revoir|Heavy Metal|Bridging the Gap|Medium|Comic Relief 2003|Miami Vice|Charity Sketch|BBC One|Red Nose Day|Special Episode|Revival Extras
Which rock band made a surprise appearance in Auf Wiedersehen, Pet's 2003 Comic Relief sketch Miami Vice?|U2|Coldplay|Oasis|Bon Jovi|Medium|Miami Vice|Comic Relief 2003|U2|Celebrity Cameo|Miami Hotel|Red Nose Day|Music Guests
Which two members of U2 appeared in the Auf Wiedersehen, Pet Comic Relief sketch Miami Vice?|Bono and Larry Mullen Jr|Bono and The Edge|The Edge and Adam Clayton|Larry Mullen Jr and Adam Clayton|Medium|Comic Relief 2003|Miami Vice|Bono|Larry Mullen Jr|U2|Celebrity Appearances|Red Nose Day
What item did Moxey discover in Miami Vice, the Auf Wiedersehen, Pet Comic Relief sketch?|A suitcase filled with money|A stolen diamond necklace|A diplomatic passport|A lost lottery ticket|Medium|Comic Relief 2003|Miami Vice|Moxey|Suitcase of Cash|U2|Hotel Mix Up|Charity Comedy
Which actress played Barry Taylor's Russian wife Tatiana in Auf Wiedersehen, Pet's BBC revival?|Branka Katic|Emily Bruni|Caroline Harker|Jo-Anne Good|Medium|Branka Katic|Tatiana|Barry Taylor|2002 Revival|Series Three|Supporting Cast|Actress
Which actor played Barry's rival Kadi in Auf Wiedersehen, Pet Series 3?|Dragan Micanovic|Michael Angelis|Dominic Jephcott|Alexander Hanson|Medium|Dragan Micanovic|Kadi|Barry Taylor|Tatiana|Series Three|BBC Cast|Actor Identification
Who portrayed the character Colin Vanes in the BBC revival of Auf Wiedersehen, Pet?|Dominic Jephcott|Clive Russell|Bill Nighy|Noel Clarke|Medium|Dominic Jephcott|Colin Vanes|BBC Revival|Supporting Cast|2000s Television|Actor Identification|Series Credits
Which actress portrayed the Australian character Elena in Auf Wiedersehen, Pet's final specials?|Jo-Anne Good|Rachael Blake|Josefina Gabrielle|Branka Katic|Medium|Jo Anne Good|Elena|Moxey|Au Revoir|2004 Finale|Supporting Actress|Australia
Which actor played the kidnapper known as Two Dragons in the Auf Wiedersehen, Pet finale?|Pornchai Tipol|Gordon Tootoosis|Alexander Hanson|Dragan Micanovic|Medium|Pornchai Tipol|Two Dragons|Au Revoir|Kidnapping|2004 Finale|Guest Cast|Actor Identification
Who produced the 2002 BBC revival series of Auf Wiedersehen, Pet?|Joy Spink|Martin McKeand|Chrissy Skinns|Allan McKeown|Medium|Joy Spink|Series Three|2002 Revival|Producer Credit|BBC One|Production Team|Behind The Scenes
Who produced the 2004 fourth series of Auf Wiedersehen, Pet?|Chrissy Skinns|Joy Spink|Martin McKeand|Allan McKeown|Medium|Chrissy Skinns|Series Four|2004 Cuba|Producer Credit|BBC One|Production Team|Behind The Scenes
Who directed the 2004 two-part finale Au Revoir for Auf Wiedersehen, Pet?|Sandy Johnson|Paul Seed|Roger Bamford|Maurice Phillips|Medium|Sandy Johnson|Au Revoir|2004 Finale|Episode Director|BBC One|Production Credits|Special Episodes
Which two directors were credited with Auf Wiedersehen, Pet's fourth series in 2004?|Maurice Phillips and David Innes-Edwards|Paul Seed and Sandy Johnson|Roger Bamford and Baz Taylor|Franc Roddam and Joy Spink|Medium|Maurice Phillips|David Innes Edwards|2004 Series Four|Directors|Cuba Story|Production Credits|BBC One
On what date did Auf Wiedersehen, Pet begin its six-episode BBC revival?|28 April 2002|4 January 2004|11 November 1983|28 December 2004|Medium|28 April 2002|BBC One Return|Series Three|Six Episodes|First Broadcast|Revival Premiere|Programme Timeline
On what date did Auf Wiedersehen, Pet's fourth series begin on BBC One?|4 January 2004|28 April 2002|8 February 2004|28 December 2004|Medium|4 January 2004|Series Four|BBC One|Cuba Story|Premiere Date|Programme Timeline|Revival
On which dates did Auf Wiedersehen, Pet's final two-part special Au Revoir first air?|28 and 29 December 2004|24 and 25 December 2004|4 and 5 January 2004|1 and 2 June 2002|Medium|Au Revoir|28 December 2004|29 December 2004|BBC One|Christmas Special|Final Broadcast|Television History
How many regular episodes were made of Auf Wiedersehen, Pet across its four series, excluding the final specials?|38|40|36|42|Medium|Four Series|38 Regular Episodes|26 ITV Episodes|12 BBC Episodes|Two Specials Extra|Programme Totals|1983 To 2004
Which American location provided scenery for the rebuilt bridge in Auf Wiedersehen, Pet Series 3?|Lake Powell in Arizona|Lake Tahoe in Nevada|Death Valley in California|Grand Canyon Village|Medium|Lake Powell|Arizona|Bridge Reconstruction|Filming Locations|BBC Revival|2002 Series|United States
Which country provided much of the on-location filming for Auf Wiedersehen, Pet's finale set in Laos?|Thailand|Malaysia|Cambodia|Vietnam|Medium|Thailand|Au Revoir Filming|Bangkok|Chiang Mai|2004 Finale|Location Production|Southeast Asia
What month and year did Auf Wiedersehen, Pet actor Pat Roach die before the final specials were filmed?|July 2004|July 2002|December 2004|August 2005|Medium|Pat Roach|July 2004|Bomber Busbridge|In Memoriam|Final Specials|Production History|Cast Tribute`;

let sequence = 0;
const questions = [...facts.trim().split('\n'), ...auditFacts.trim().split('\n')].map(line => {
  const id = 'tv_' + String(sequence < AUDIT_ORIGINAL_COUNT ? FIRST_ID + sequence : AUDIT_FIRST_ID + sequence - AUDIT_ORIGINAL_COUNT).padStart(5, '0');
  const fields = line.trim().split('|').map(value => value.trim());
  if (fields.length !== 13)
    throw new Error(`Expected 13 fields in ${id}; got ${fields.length}`);
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
  if ([question, correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(value => !value))
    throw new Error(`Blank data in ${id}`);
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.length !== 7)
    throw new Error(`Invalid difficulty or tag count in ${id}`);
  if (new Set([correctAnswer, wrong1, wrong2, wrong3].map(v => v.toLowerCase())).size !== 4)
    throw new Error(`Duplicate answer options in ${id}`);
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(sequence % 4, 0, correctAnswer);
  const tags = [...new Map([...commonTags, correctAnswer, ...specificTags]
    .map(tag => [tag.toLowerCase(), tag])).values()];
  const contextualQuestion = question.includes(programme)
    ? question
    : question.startsWith('In which ')
      ? 'In Auf Wiedersehen, Pet, which ' + question.slice(9)
      : question.startsWith('In ')
        ? 'In Auf Wiedersehen, Pet episode ' + question.slice(3)
        : 'In Auf Wiedersehen, Pet, ' + question[0].toLowerCase() + question.slice(1);
  sequence++;
  return { id, category: 'Television', programme, question: contextualQuestion, answers,
    correctAnswer, difficulty, tags, dailyEligible: true };
});

if (!questions.length || questions[0].id !== 'tv_25901' ||
    new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length ||
    questions.some(q => q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
      q.tags.length < 15 || !q.tags.includes('Programme: Auf Wiedersehen, Pet') ||
      q.dailyEligible !== true))
  throw new Error('Pack 438 exported question validation failed');

module.exports = questions;