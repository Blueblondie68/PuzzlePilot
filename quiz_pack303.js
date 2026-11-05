
 // quiz_pack303.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: A Bit of Fry & Laurie (1987 pilot; 1989-1995 series)
 // Also includes the separate 2010 retrospective Fry and Laurie: Reunited.
 // Every question has seven individually chosen specialist tags.
 // quiz_bank.js stays unchanged until the end-of-session connection.
 // Row format: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven specialist tags

 const groups = [
   {
     topic: 'The programme, its creators and the 1987 pilot',
     year: '1987',
     era: '1980s',
     facts: `Which two comedians wrote and starred in A Bit of Fry & Laurie?|Stephen Fry and Hugh Laurie|Mel Smith and Griff Rhys Jones|David Mitchell and Robert Webb|Rik Mayall and Adrian Edmondson|Easy|Stephen Fry|Hugh Laurie|Comedy Partnership|Writer Performers|BBC Sketch Series|British Double Act|Programme Creators
 What sort of television programme was A Bit of Fry & Laurie?|A comedy sketch show|A police detective drama|A situation comedy set in a hotel|A panel quiz show|Easy|Television Format|Sketch Comedy|Standalone Sketches|British Humour|Comedy Performers|BBC Entertainment|Show Genre
 On which date did the original A Bit of Fry & Laurie pilot air?|26 December 1987|1 January 1986|13 January 1989|2 April 1995|Medium|Boxing Day|Pilot Broadcast|Original Airdate|BBC One|1987 Television|First Appearance|Programme Debut
 Which channel first broadcast the 1987 pilot of A Bit of Fry & Laurie?|BBC One|ITV|Channel 4|BBC Two|Easy|BBC One|Boxing Day Pilot|1987 Broadcasting|British Television|Sketch Show Launch|Pilot Channel|Christmas Scheduling
 What service is imagined being sold off in a sketch from the Fry and Laurie pilot?|The police force|The fire brigade|The National Health Service|The postal service|Easy|Privatisation Of The Police|Pilot Sketch|Public Services|Political Satire|1987 Special|Government Policy|Institutional Comedy
 Which type of television drama is mocked in the pilot's Australian Soap Opera sketch?|An Australian soap opera|A French crime thriller|An American medical drama|A British costume drama|Easy|Australian Soap Opera|Pilot Episode|Soap Spoof|Television Parody|1987 Comedy|International TV|Genre Satire
 Which miniature vehicle business appears in a sketch from the 1987 pilot?|A toy car showroom|A model railway shop|A bicycle hire firm|A go-kart garage|Easy|Toy Car Showroom|Pilot Sketch|Miniature Vehicles|Retail Spoof|1987 Broadcast|Showroom Comedy|Early Material
 What is the title of Hugh Laurie's song in the original Fry and Laurie pilot?|Mystery|America|Where Is The Lid|I'm In Love With Steffi Graf|Medium|Hugh Laurie|Mystery Song|Pilot Episode|Comedy Music|Piano Performance|1987 Special|First Musical Number
 Which comedy review-show title appears among the arts critics sketches in the pilot?|Argue the Toss|Have I Got News for You|The Late Review|Never Mind the Buzzcocks|Medium|Argue The Toss|Arts Critics|Pilot Parody|Review Programme|Media Satire|1987 Sketch|Fictional TV Show`,
   },
   {
     topic: 'Series One: 1989',
     year: '1989',
     era: '1980s',
     facts: `In which month and year did the first full series of A Bit of Fry & Laurie begin?|January 1989|March 1990|January 1992|February 1995|Easy|Series One Premiere|January 1989|BBC Two|First Full Series|Broadcast History|Television Schedule|UK Comedy
 How many episodes were shown in the first full series of A Bit of Fry & Laurie?|Six|Four|Seven|Ten|Easy|Series One|Six Episodes|1989 Run|BBC Two|Episode Count|Comedy Production|Season Length
 Which apparently psychic trick is demonstrated by a guest interviewed by Stephen in the first regular episode?|Bending spoons|Reading minds with cards|Walking through walls|Predicting the weather|Easy|Spoon Bender|Series One Episode One|Psychic Interview|Television Spoof|Stephen Fry|Paranormal Claims|1989 Sketch
 What unusual subject does Hugh Laurie perform a reading about in the opening episode of Series One?|His own short poetry|A detective novel|A football match report|A weather forecast|Easy|Hugh Laurie|Short Poetry Reading|Series One Episode One|Poem Sketch|Literary Humour|1989 Broadcast|Stage Performance
 Which two recurring businessmen make their first regular-series appearance in Series One's second episode?|Peter and John|Gordon and Stuart|Control and Alan|Jack and Neddy|Easy|Peter And John|Series One Episode Two|Recurring Characters|Businessmen|Corporate Parody|1989 Debut|Comic Duo
 Which pair of gentle intelligence officers also appear in Series One's second episode?|Control and Tony|Peter and John|Gordon and Stuart|The Bishop and the Warlord|Easy|Control And Tony|Intelligence Officers|Series One Episode Two|Spy Sketch|Espionage Parody|Recurring Duo|1989 Debut
 In which Series One sketch does Stephen pretend to have removed something from Hugh's head?|Hugh's Brain|The Missing Eye|The Lost Memory|The Headmaster|Easy|Hughs Brain|Series One Episode Three|Stephen Fry|Hugh Laurie|Brain Removal|Absurd Comedy|1989 Sketch
 What does a doctor unexpectedly recommend to a patient in a Series One sketch?|Smoking tobacco|Running a marathon|Drinking hot chocolate|Taking up golf|Easy|Doctor Tobacco|Series One Episode Three|Medical Satire|Unexpected Advice|Tobacco|Doctor Patient Sketch|1989 Comedy
 Which fictional music duo are introduced as the world's first light metal band?|The Bishop and the Warlord|The Wombles|The Pet Shop Boys|The Blues Brothers|Medium|Bishop And Warlord|Light Metal|Musical Parody|Series One Episode Four|Fictional Band|Heavy Metal Spoof|1989 Music
 What kind of ceremony provides the setting for a sketch about choosing a child's name in Series One?|A christening|A wedding|A funeral|A graduation|Easy|Christening Sketch|Child Naming|Series One Episode Five|Family Ceremony|Naming Disagreement|1989 Episode|Social Comedy
 Which country is mocked in the comedy performance Heidi and Johann Smell Just Right?|Switzerland|Germany|Norway|Belgium|Medium|Swiss Comedy|Heidi And Johann|Series One Episode Five|European Parody|Fictional Sketch|1989 Television|International Humour
 What animal features in a mock appeal in Series One's sixth episode?|A puppy|A kitten|A horse|A parrot|Easy|Puppy Appeal|Series One Episode Six|Charity Spoof|Animal Appeal|1989 Broadcast|Mock Advertisement|Sketch Comedy`,
   },
   {
     topic: 'Series Two: 1990',
     year: '1990',
     era: '1990s',
     facts: `In which year did the second series of A Bit of Fry & Laurie begin?|1990|1988|1992|1995|Easy|Series Two Premiere|1990 Broadcast|BBC Two|Second Series|Television Timeline|British Comedy|Episode Run
 Which flooring company repeatedly interrupts Series Two's second episode as a mock sponsor?|Tideyman's Carpets|Axminster Carpets|Carpetright|Allied Carpets|Medium|Tideymans Carpets|Series Two Episode Two|Fake Sponsorship|Advertising Satire|Commercial Interruptions|Carpet Company|1990 Episode
 What did Fry and Laurie wear over their mouths while protesting supposed television censorship in Series Two?|Gags|Surgical masks|Paper bags|False moustaches|Easy|Censorship Protest|Series Two Episode Three|Mouth Gags|Television Language|Forbidden Words|1990 Satire|Opening Sketch
 What do Fry and Laurie invent to get around the supposed ban on swearwords in Series Two?|New made-up swearwords|A silent film language|A secret sign language|A code of hand signals|Medium|Invented Swearwords|Series Two Episode Three|Censorship Parody|Language Play|1990 Sketch|Comic Vocabulary|Broadcast Restrictions
 Which film star do Fry and Laurie hope will notice them in the opening of a Series Two episode?|Marlon Brando|Sean Connery|Michael Caine|Robert De Niro|Medium|Marlon Brando|Series Two Episode Four|Hollywood Fame|Celebrity Attention|Opening Routine|1990 Programme|Showbusiness Joke
 What kind of shop features in Series Two's Hardware Store sketch?|A hardware shop|A bookshop|A florist|A fishmonger|Easy|Hardware Store|Series Two Episode One|Retail Comedy|Shop Sketch|1990 Broadcast|Customer Service|Everyday Setting
 Which branch of sporting television is applied absurdly to everyday life in a Series Two sketch?|Sports commentary|Football results|Horse racing odds|Olympic medal ceremonies|Easy|Sportscasters Cover Everyday Life|Series Two Episode One|Sports Broadcasting|Everyday Events|Commentary Parody|Television Sport|1990 Sketch
 Which former Yes Minister actor appears as a guest in Series Two's fifth episode?|Paul Eddington|Nigel Hawthorne|Richard Briers|John Cleese|Medium|Paul Eddington|Series Two Episode Five|Guest Actor|Yes Minister|Restaurant Sketch|British Sitcom|1990 Casting
 Which two performers guest-star in the final episode of Series Two?|Rowan Atkinson and Nigel Havers|John Cleese and Eric Idle|David Jason and Nicholas Lyndhurst|Rik Mayall and Ade Edmondson|Medium|Rowan Atkinson|Nigel Havers|Series Two Finale|Guest Stars|April 1990|British Actors|BBC Comedy
 Which phrase is central to Hugh Laurie's comic song about a missing jar top?|Where is the lid?|Where is the key?|Where is the spoon?|Where is the tea?|Easy|Where Is The Lid|Hugh Laurie|Series Two Episode Six|Jar Lid|Musical Sketch|Absurd Repetition|1990 Song
 Which type of reference book lends its name to a sketch in the second-series finale?|Yellow Pages|Oxford English Dictionary|Guinness World Records|Encyclopaedia Britannica|Easy|Yellow Pages|Series Two Episode Six|Reference Book|Business Directory|1990 Television|Sketch Title|Everyday Objects`,
   },
   {
     topic: 'Series Three: 1992',
     year: '1992',
     era: '1990s',
     facts: `Which year saw the third series of A Bit of Fry & Laurie first broadcast?|1992|1989|1990|1995|Easy|Series Three|1992 Premiere|BBC Two|Third Series|Broadcast History|Comedy Schedule|British Television
 Which former Sale of the Century presenter appears in the first episode of Series Three?|Nicholas Parsons|Bruce Forsyth|Bob Monkhouse|Jim Bowen|Medium|Nicholas Parsons|Series Three Episode One|Guest Star|Game Show Presenter|British Television|1992 Casting|Comedy Cameo
 Which song made famous by Elvis Presley does Hugh Laurie perform in Series Three's opening episode?|Love Me Tender|Jailhouse Rock|Blue Suede Shoes|Hound Dog|Medium|Love Me Tender|Elvis Presley|Hugh Laurie|Series Three Episode One|Song Performance|Comedy Music|1992 Broadcast
 Which drink is the basis of the mock cocktail called Whiskey Thunder?|Whisky|Gin|Vodka|Rum|Easy|Whiskey Thunder|Series Three Episode One|Cocktail Finale|Drink Name|Stephen Fry|Mock Mixology|1992 Sketch
 What business do two former estate agents try to run in a sketch from Series Three's second episode?|A petrol station|A cinema|A restaurant|A furniture warehouse|Easy|Petrol Attendants|Series Three Episode Two|Former Estate Agents|Petrol Station|Career Change|Business Spoof|1992 Episode
 What basic interaction becomes impossible for a businessman during a deal in Series Three?|Communicating across a language barrier|Finding a parking space|Signing a cheque|Ordering a train ticket|Medium|European Deal|Series Three Episode Two|Language Barrier|Business Meeting|Foreign Colleague|Miscommunication|1992 Sketch
 Which Beatles song receives an exaggerated high-pitched treatment in Series Three?|Hey Jude|Yesterday|Let It Be|Help!|Easy|Hey Jude|Beatles Song|Series Three Episode Three|Comic Singing|Pitch Change|Musical Parody|1992 Broadcast
 What kind of retail shop causes trouble for a customer in Series Three's third episode?|A shoe shop|A bakery|A toy shop|A record shop|Easy|Shoe Shop|Series Three Episode Three|Shopkeeper|Customer Dispute|Retail Sketch|1992 Television|Everyday Comedy
 What table condiment becomes the focus of a strained breakfast conversation in Series Three?|Marmalade|Ketchup|Mustard|Salt|Easy|Pass The Marmalade|Series Three Episode Four|Breakfast Conversation|Family Dialogue|Table Condiment|Marmalade|1992 Sketch
 Which fictional sinister item provides the title of a sketch in Series Three's fourth episode?|The Red Hat of Patferrick|The Blue Boots of Bath|The Green Glove of Grimsby|The Black Umbrella of York|Medium|Red Hat Of Patferrick|Series Three Episode Four|Horror Parody|Fictional Object|Storytelling Sketch|1992 Comedy|Strange Tale
 Which Charlotte Bronte novel is criticised by an unhappy bookshop customer in Series Three?|Jane Eyre|Shirley|Villette|The Professor|Easy|Jane Eyre|Charlotte Bronte|Series Three Episode Five|Bookshop Customer|Literary Satire|Classic Novel|1992 Broadcast
 Which long-running British word-and-number game show is parodied in Series Three?|Countdown|The Krypton Factor|Blockbusters|Catchphrase|Easy|Countdown|Series Three Episode Five|Quiz Show Parody|Words And Numbers|British Game Shows|Television Satire|1992 Episode
 Which type of aircraft do two inexperienced men try to fly in Series Three's last episode?|A light aeroplane|A helicopter|A glider|A hot-air balloon|Easy|Light Aeroplane|Series Three Episode Six|Tony Inchpractice|Flying Without Instruction|Aviation Comedy|1992 Finale|Dangerous Hobby`,
   },
   {
     topic: 'Series Four: 1995',
     year: '1995',
     era: '1990s',
     facts: `Which BBC channel aired the fourth and final full series of A Bit of Fry & Laurie?|BBC One|BBC Two|BBC Four|BBC Three|Easy|Series Four|BBC One|1995 Broadcast|Channel Move|British Sketch Comedy|Television History|Final Run
 How many episodes were broadcast in the fourth series?|Seven|Six|Eight|Ten|Easy|Series Four|Seven Episodes|1995 Run|BBC One|Episode Count|Final Series|British Television
 Which actor and satirist guests in the first episode of Series Four alongside Jane Booker?|John Bird|John Cleese|David Baddiel|Richard Wilson|Medium|John Bird|Jane Booker|Series Four Episode One|Guest Cast|British Satire|1995 Episode|Comedy Actors
 Which tennis star is celebrated in a Hugh Laurie love song from Series Four?|Steffi Graf|Martina Navratilova|Chris Evert|Monica Seles|Easy|Steffi Graf|Hugh Laurie|Series Four Episode Two|Tennis Song|Romantic Parody|Sports Celebrity|1995 Music
 Which actress from Neighbours appears in the second episode of Series Four?|Anne Charleston|Kylie Minogue|Annie Jones|Fiona Corke|Medium|Anne Charleston|Neighbours|Series Four Episode Two|Guest Actress|Australian Soap|1995 Casting|Television Crossover
 Which actress guest-stars in Series Four's third episode alongside Clive Mantle?|Imelda Staunton|Judi Dench|Julie Walters|Miriam Margolyes|Medium|Imelda Staunton|Clive Mantle|Series Four Episode Three|Guest Star|1995 Casting|British Actress|Sketch Programme
 What is the title of the clean-language game show spoof in Series Four?|Don't Be Dirty|The Clean Sweep|Never Say That|Mind Your Language|Medium|Dont Be Dirty|Series Four Episode Three|Game Show Spoof|Taboo Language|Television Parody|1995 Sketch|Wordplay
 Which Men Behaving Badly actress appears in Series Four's fourth episode?|Caroline Quentin|Leslie Ash|Debra Stephenson|Samantha Janus|Medium|Caroline Quentin|Series Four Episode Four|Guest Actress|Men Behaving Badly|1995 Casting|BBC Comedy|Sketch Show Guest
 Which American talk-show host is parodied by the excessive applause in a Series Four sketch?|Oprah Winfrey|David Letterman|Jay Leno|Larry King|Easy|Oprah Winfrey|Series Four Episode Five|Talk Show Parody|Audience Applause|American Television|1995 Sketch|Celebrity Satire
 What annual contest is parodied in Series Four's sixth episode?|Young Tory of the Year|Young Musician of the Year|Young Chef of the Year|Young Scientist of the Year|Medium|Young Tory Of The Year|Series Four Episode Six|Conservative Politics|Contest Parody|Political Satire|1995 Episode|Youth Politics
 Which playwright's Talking Heads monologues are parodied in Series Four's sixth episode?|Alan Bennett|Alan Ayckbourn|Tom Stoppard|Harold Pinter|Medium|Alan Bennett|Talking Heads|Series Four Episode Six|Monologue Parody|British Theatre|1995 Television|Dramatic Writing
 Which type of personal belief does a schoolteacher decide to establish in the final series episode?|A new religion|A new political party|A new language|A new musical genre|Easy|Religianto|Series Four Episode Seven|Schoolteacher|New Religion|Belief Satire|1995 Finale|Sketch Premise
 On what date was the last regular episode of A Bit of Fry & Laurie first broadcast?|2 April 1995|12 February 1995|13 January 1989|24 November 2010|Medium|2 April 1995|Final Episode|Series Four Episode Seven|BBC One|Original Airdate|1995 Television|Programme Finale`,
   },
   {
     topic: 'Recurring characters, style and songs',
     year: '1989-1995',
     era: '1980s and 1990s',
     facts: `What sort of business do the recurring characters Peter and John operate?|A health club|An airline|A publishing house|A bank|Easy|Peter And John|Health Club|Recurring Businessmen|Corporate Satire|Fitness Business|Uttoxeter|1980s Comedy
 In which Staffordshire town are Peter and John's business ambitions centred?|Uttoxeter|Leek|Tamworth|Lichfield|Medium|Uttoxeter|Peter And John|Staffordshire|Health Club|Regional Setting|Businessmen Sketch|British Geography
 Which woman is the former wife and rival of John in the Peter and John sketches?|Marjorie|Pearline|Diana|Hazel|Medium|Marjorie|John|Peter|Business Rival|Former Wife|Recurring Sketch|Corporate Melodrama
 Which word is repeatedly exclaimed by Peter and John during their business crises?|Dammit!|Splendid!|Crikey!|Bingo!|Easy|Dammit Catchphrase|Peter And John|Business Crisis|Overdramatic Dialogue|Recurring Sketch|Comedy Exclamation|Corporate Parody
 Which comic pair are unusually polite and naive British intelligence agents?|Control and Tony|Peter and John|Gordon and Stuart|The Bishop and the Warlord|Easy|Control|Tony Murchison|Intelligence Officers|Spy Parody|Polite Spies|Espionage Sketch|Recurring Characters
 Which recurring name belongs to a shopkeeper's apparently imaginary colleague?|Mr Dalliard|Mr Pooter|Mr Spooner|Mr Wilberforce|Medium|Mr Dalliard|Shopkeeper|Stephen Fry|Unseen Character|Recurring Sketch|Retail Comedy|Imaginary Colleague
 What type of brief filmed segment between main sketches often featured the two stars speaking to camera as passers-by?|Vox pops|News bulletins|Travel reports|Film trailers|Easy|Vox Pops|Street Interviews|Inter Sketch Segments|Television Format|Short Character Pieces|Stephen Fry|Hugh Laurie
 What drink-making ritual became a signature ending in the third series?|Comic cocktail recipes|Competitive tea brewing|Blind wine tastings|Coffee art demonstrations|Easy|Cocktail Endings|Series Three|Stephen Fry|Hugh Laurie|Mock Recipes|Closing Routine|Soupy Twist
 What phrase became associated with Stephen Fry's cocktail-making finales?|Soupy twist|Sweet dreams|Bottoms up|Happy hour|Easy|Soupy Twist|Cocktail Catchphrase|Stephen Fry|Closing Routine|Series Three|Comedy Phrase|Drink Mixing
 Which musical instrument is Hugh Laurie particularly associated with while performing comic songs on the programme?|Piano|Trumpet|Violin|Drums|Easy|Hugh Laurie|Piano|Comedy Songs|Musical Performance|Sketch Show Music|Keyboard Instrument|Live Accompaniment`,
   },
   {
     topic: 'Fry and Laurie: Reunited',
     year: '2010',
     era: '2010s',
     facts: `Which channel first showed the retrospective Fry and Laurie: Reunited in November 2010?|Gold|BBC One|ITV2|Channel 4|Medium|Gold Channel|Fry And Laurie Reunited|24 November 2010|UKTV|Retrospective Documentary|Original Broadcaster|2010 Television
 Which actress introduced Stephen Fry and Hugh Laurie to each other at Cambridge?|Emma Thompson|Dawn French|Jennifer Saunders|Victoria Wood|Easy|Emma Thompson|Cambridge University|Stephen Fry|Hugh Laurie|First Meeting|Comedy Partnership|Reunited Documentary
 What milestone did the 2010 television documentary Fry and Laurie: Reunited celebrate?|Thirty years of their partnership|Ten years of their first sketch show|Fifty years of BBC Two|Twenty years of Jeeves and Wooster|Easy|Thirty Year Partnership|Fry And Laurie Reunited|2010 Retrospective|Comedy Friendship|Career Anniversary|Gold Television|Documentary Subject`,
   },
 ];

 const FIRST_ID = 13050;
 let index = 0;
 const questions = groups.flatMap(group =>
   group.facts.trim().split('\n').map(line => {
     const parts = line.trim().split('|').map(part => part.trim());
     const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
     if (parts.length !== 13) {
       throw new Error(`Expected seven specialist tags at ${id}; got ${parts.length - 6}`);
     }
     const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
     const wrongAnswers = [wrong1, wrong2, wrong3];
     if (!question || !correctAnswer || wrongAnswers.some(answer => !answer)) {
       throw new Error(`Missing question or answer at ${id}`);
     }
     if (new Set([correctAnswer, ...wrongAnswers].map(answer => answer.toLowerCase())).size !== 4) {
       throw new Error(`Repeated answer option at ${id}`);
     }
     if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.length !== 7 || specificTags.some(tag => !tag)) {
       throw new Error(`Invalid difficulty or specialist tags at ${id}`);
     }
     const answers = [...wrongAnswers];
     answers.splice(index % 4, 0, correctAnswer);
     const tags = [...new Map([
       'British Television', 'Television', 'A Bit of Fry & Laurie',
       'Stephen Fry', 'Hugh Laurie', 'BBC', 'British Sketch Comedy',
       'Comedy Double Acts', 'Satire', group.year, group.era,
       group.topic, correctAnswer, ...specificTags,
     ].map(tag => [tag.toLowerCase(), tag])).values()];
     const item = { id, category: 'Television', question, answers, correctAnswer, difficulty, tags, dailyEligible: true };
     index++;
     return item;
   })
 );

 const EXPECTED_COUNT = 71;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_13050' || questions[questions.length - 1].id !== 'tv_13120') {
   throw new Error('Unexpected question ID range');
 }
 if (new Set(questions.map(q => q.id)).size !== questions.length ||
     new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
   throw new Error('Duplicate question IDs or wording');
 }
 if (questions.some(q => q.category !== 'Television' || q.answers.length !== 4 ||
     !q.answers.includes(q.correctAnswer) || q.tags.length < 16 ||
     q.tags.some(tag => !tag) || q.dailyEligible !== true)) {
   throw new Error('Incomplete exported question metadata');
 }
 module.exports = questions;
