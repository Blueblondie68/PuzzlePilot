
 // quiz_pack291.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: The Young Ones (BBC Two, 1982-1984)
 // Both six-episode series, the housemates, the musical guests and the 1986 charity single.
 // Each question has seven individually selected subject-specific tags.
 // Pack length follows distinct verified material, not an arbitrary target.
 // Leave quiz_bank.js unchanged until the agreed end-of-session connection.
 // Row: question | correct answer | wrong answer 1 | wrong answer 2 | wrong answer 3 | difficulty | seven specialist tags

 const groups = [
   {
     topic: 'Programme History, Housemates and Cast',
     facts: `In what year did The Young Ones first air on British television?|1982|1978|1984|1986|Easy|Original Premiere|November 1982|First Broadcast|Alternative Comedy|BBC Sitcom|Series One|Television History
 On which channel was The Young Ones originally broadcast?|BBC Two|BBC One|ITV|Channel 4|Easy|BBC Network History|Original Broadcaster|Tuesday Evening Slot|1982 Premiere|1984 Final Series|Broadcast Channel|First Run Transmission
 How many original series of The Young Ones were produced?|Two|One|Three|Four|Easy|Two Series|1982 First Run|1984 Second Run|Programme History|BBC Comedy|Original Production|Series Count
 How many original episodes of The Young Ones were broadcast?|Twelve|Eight|Sixteen|Twenty-four|Easy|Twelve Episodes|Six Per Series|Complete Run|BBC Two|Episode Count|1982 To 1984|Sitcom History
 Which actor portrayed the self-important student Rick in The Young Ones?|Rik Mayall|Adrian Edmondson|Christopher Ryan|Nigel Planer|Easy|Rik Mayall|Rick|Lead Actor|Student House|Cliff Richard Fan|Character Casting|Political Posturing
 Who played the violent punk housemate Vyvyan?|Adrian Edmondson|Rik Mayall|Alexei Sayle|Christopher Ryan|Easy|Adrian Edmondson|Vyvyan|Punk Student|Actor Casting|Mohican Hairstyle|Violent Housemate|Regular Cast
 Which actor played the long-haired hippy Neil?|Nigel Planer|Christopher Ryan|Rik Mayall|Adrian Edmondson|Easy|Nigel Planer|Neil Pye|Hippy Housemate|Actor Casting|Vegetarian Student|Student House|Regular Cast
 Who portrayed the confident housemate Mike?|Christopher Ryan|Rik Mayall|Nigel Planer|Alexei Sayle|Easy|Christopher Ryan|Mike|Suave Student|Actor Casting|Housemate Leader|Scumbag College|Regular Cast
 Which performer played members of the eccentric Balowski family?|Alexei Sayle|Stephen Fry|Robbie Coltrane|Ben Elton|Medium|Alexei Sayle|Balowski Family|Multiple Characters|Landlord|Character Actor|Surreal Comedy|Recurring Roles
 Which singer is Rick famously obsessed with?|Cliff Richard|David Bowie|Elvis Costello|Mick Jagger|Easy|Rick|Cliff Richard|Pop Idol|Fan Obsession|British Singer|Character Trait|Musical Comedy
 Which housemate owns a hamster named Special Patrol Group?|Vyvyan|Neil|Mike|Rick|Easy|Vyvyan|SPG|Special Patrol Group|Pet Hamster|Housemate Animal|Punk Student|Recurring Joke
 Which housemate is the group's gentle, vegetarian hippy?|Neil|Vyvyan|Mike|Rick|Easy|Neil Pye|Vegetarian|Hippy Character|Lentils|Alternative Lifestyle|Student House|Character Personality
 Which trio wrote the main scripts for The Young Ones?|Ben Elton, Rik Mayall and Lise Mayer|John Sullivan, David Renwick and Ben Elton|Richard Curtis, Rowan Atkinson and John Lloyd|Jennifer Saunders, Dawn French and Victoria Wood|Medium|Ben Elton|Rik Mayall|Lise Mayer|Writing Team|Programme Creators|BBC Production|Alternative Comedy
 Who produced all twelve original television episodes of The Young Ones?|Paul Jackson|Geoff Posner|John Howard Davies|Peter Brewis|Hard|Paul Jackson|Producer|BBC Production Credits|Twelve Episodes|1982 To 1984|Television Crew|Alternative Comedy`,
   },
   {
     topic: 'Series One - Demolition and Oil',
     facts: `What threatens the students' home in the first episode, Demolition?|The council plans to demolish it|A landlord plans to convert it into flats|A burst water main has destroyed it|A fire has made it uninhabitable|Easy|Demolition|Council Notice|Student Housing|Home Under Threat|Opening Episode|1982 Premiere|Local Authority
 Which housemate discovers the letter announcing the demolition?|Mike|Rick|Neil|Vyvyan|Medium|Mike|Council Letter|Demolition|Discovery|Student House|Household Crisis|First Episode
 Which housemate talks about killing himself during Demolition?|Neil|Mike|Vyvyan|Rick|Medium|Neil Pye|Demolition|Suicide Talk|Hippy Student|Opening Story|House Crisis|Dark Comedy
 What is the name of the youth television programme Rick watches in Demolition?|Nozin' Aroun'|Top of the Pops|The Tube|Saturday Superstore|Medium|Nozin Aroun|Rick|Television Parody|Demolition|Youth Culture|First Episode|Satirical Sketch
 Which band appears as the musical guest in Demolition?|Nine Below Zero|Madness|Motörhead|The Damned|Medium|Nine Below Zero|Demolition|Musical Guest|Blues Band|Series One|Television Performance|1982 Music
 What is discovered in the basement of the students' new house in Oil?|Oil|A hidden swimming pool|A gold mine|A nuclear shelter|Easy|Oil Episode|Basement|Unexpected Discovery|New House|Student Household|1982 Story|Potential Fortune
 Who proclaims himself dictator when the housemates believe they have found oil?|Mike|Neil|Rick|Vyvyan|Medium|Mike|Oil Episode|Self Appointed Dictator|Household Power|Basement Discovery|Student Hierarchy|1982 Plot
 Which two housemates are ordered to dig for oil?|Rick and Neil|Mike and Vyvyan|Rick and Mike|Vyvyan and Neil|Medium|Rick|Neil Pye|Oil Digging|Forced Labour|Mike Orders|Basement|Second Episode
 What item of footwear features in Alexei Sayle's musical number in Oil?|Dr. Martens boots|Wellington boots|Roller skates|Football boots|Medium|Dr Martens Boots|Alexei Sayle|Radical Posture|Oil Episode|Musical Interlude|Punk Fashion|1982 Performance`,
   },
   {
     topic: 'Series One - Boring, Bomb and Interesting',
     facts: `Where do the housemates go to escape their boredom in Boring?|The pub|The cinema|A football match|A library|Easy|Boring Episode|Pub Visit|Housemates|Attempted Entertainment|1982 Plot|Social Outing|Student Life
 Whose estranged mother appears during Boring?|Vyvyan's|Mike's|Neil's|Rick's|Medium|Vyvyan|Estranged Mother|Boring Episode|Family Appearance|Pub Scene|Parent Character|1982 Story
 Which band performs House of Fun in the episode Boring?|Madness|The Specials|Dexys Midnight Runners|Amazulu|Easy|Madness|House Of Fun|Boring Episode|Musical Guest|Ska Pop|1982 Performance|Series One
 What dangerous object suddenly appears in the kitchen in Bomb?|An atomic bomb|A live grenade|A barrel of gunpowder|A missile launcher|Easy|Bomb Episode|Atomic Bomb|Student Kitchen|Nuclear Threat|Surreal Plot|1982 Story|Unexploded Weapon
 Which political leader does Rick hope to blackmail using the bomb?|Margaret Thatcher|Harold Wilson|Tony Blair|Edward Heath|Medium|Rick|Margaret Thatcher|Blackmail Plan|Bomb Episode|Prime Minister|Political Satire|Nuclear Threat
 Which housemate repeatedly tries to detonate the unexploded bomb?|Vyvyan|Neil|Rick|Mike|Medium|Vyvyan|Detonation Attempt|Bomb Episode|Dangerous Behaviour|Atomic Weapon|Punk Housemate|1982 Plot
 Which group performs Jackie Wilson Said during Bomb?|Dexys Midnight Runners|Madness|The Damned|Nine Below Zero|Medium|Dexys Midnight Runners|Jackie Wilson Said|Bomb Episode|Musical Guest|1982 Performance|British Soul Pop|Series One
 What event takes over the students' home in Interesting?|A house party|A political election|A wedding reception|A university graduation|Easy|Interesting Episode|House Party|Student Gathering|Uninvited Guests|Social Chaos|1982 Story|Series One
 Which housemate struggles to find anyone to invite to the party in Interesting?|Neil|Mike|Vyvyan|Rick|Medium|Neil Pye|Interesting Episode|No Invitations|Loneliness|House Party|Guest List|Hippy Student
 Which band performs in the episode Interesting?|Rip Rig + Panic|Amazulu|Nine Below Zero|The Damned|Hard|Rip Rig And Panic|Interesting Episode|Musical Guest|Post Punk Group|1982 Performance|Party Music|Alternative Music`,
   },
   {
     topic: 'Series One - Flood',
     facts: `What natural disaster overwhelms London in the first-series finale, Flood?|Severe flooding|An earthquake|A volcanic eruption|A blizzard|Easy|Flood Episode|London Underwater|Heavy Rain|First Series Finale|Disaster Comedy|1982 Plot|Student House
 Which member of the Balowski family becomes an axe-wielding maniac during Flood?|Jerzei Balowski|Mickey Balowski|Brian Damage|Billy Balowski|Medium|Jerzei Balowski|Axe Wielding Maniac|Flood Episode|Alexei Sayle|Household Danger|Landlord|Horror Parody
 What does Vyvyan try to build during the flood?|A submarine|A hot-air balloon|A hovercraft|A helicopter|Medium|Vyvyan|Submarine|Flood Episode|Escape Scheme|Improvised Engineering|Underwater London|Series One Finale
 Which wild animals are discovered in Mike's room during Flood?|Lions|Wolves|Tigers|Bears|Medium|Lions|Mike Room|Flood Episode|Surreal Animal Scene|Household Danger|First Series Finale|1982 Story
 What kind of act replaces the usual band performance during Flood?|A lion tamer|A magician|A stand-up comedian|A ventriloquist|Medium|Lion Tamer|Flood Episode|Musical Format|Animal Performance|The Lion Sleeps Tonight|BBC Variety Rule|Series One`,
   },
   {
     topic: 'Series Two - Bambi and Cash',
     facts: `In which television quiz show do the housemates compete in Bambi?|University Challenge|Mastermind|Blockbusters|The Krypton Factor|Easy|University Challenge|Bambi Episode|Quiz Show Parody|Second Series|Student Contest|1984 Story|BBC Quiz
 What is the name of the housemates' team in the University Challenge parody?|Scumbag College|Footlights College|Gasforth College|Blackadder College|Easy|Scumbag College|Bambi Episode|University Challenge|Student Team|Campus Parody|Housemates|1984 Comedy
 Which college team opposes Scumbag College in Bambi?|Footlights College|Trinity College Dublin|Gasforth College|King's College London|Medium|Footlights College|Bambi Episode|Rival Team|University Challenge|Oxbridge Satire|Scumbag College|Quiz Contest
 Which comedian portrays quiz host Bambi in the University Challenge parody?|Griff Rhys Jones|Mel Smith|Stephen Fry|Robbie Coltrane|Medium|Griff Rhys Jones|Bamber Gascoigne Parody|Bambi Episode|Quiz Host|Guest Casting|University Challenge|1984
 Which heavy metal band performs Ace of Spades during Bambi?|Motörhead|Iron Maiden|Judas Priest|Black Sabbath|Easy|Motorhead|Ace Of Spades|Bambi Episode|Musical Guest|Heavy Metal|1984 Performance|Lemmy
 Which actor plays Lord Snot of Footlights College in Bambi?|Stephen Fry|Hugh Laurie|Tony Robinson|Griff Rhys Jones|Medium|Stephen Fry|Lord Snot|Bambi Episode|Footlights College|Guest Actor|University Challenge|1984 Cast
 Which actress plays Miss Money-Sterling on the rival quiz team in Bambi?|Emma Thompson|Jennifer Saunders|Dawn French|Lise Mayer|Medium|Emma Thompson|Miss Money Sterling|Bambi Episode|Footlights College|Guest Actress|University Challenge|1984 Cast
 Which housemate gets a job with the police when the group runs out of money in Cash?|Neil|Vyvyan|Mike|Rick|Easy|Neil Pye|Police Job|Cash Episode|Employment|Money Problems|Second Series|1984 Story
 Which housemate announces that he is pregnant in Cash?|Vyvyan|Mike|Rick|Neil|Medium|Vyvyan|Pregnancy Claim|Cash Episode|Surreal Joke|Student House|Financial Crisis|1984 Plot
 What does Vyvyan chop up to burn as fuel when the housemates have no money in Cash?|The housemates' belongings|The neighbours' garden fence|Their textbooks from the library|An abandoned piano in the street|Medium|Vyvyan|Chopped Belongings|Cash Episode|Firewood|Household Poverty|Mike Orders|Destructive Behaviour`,
   },
   {
     topic: 'Series Two - Nasty, Time and Sick',
     facts: `What machine are the housemates trying to set up to watch horror films in Nasty?|A video recorder|A satellite dish|A film projector|A games console|Easy|Video Recorder|Nasty Episode|VCR|Video Nasties|Home Entertainment|1984 Technology|Horror Comedy
 What supernatural creature causes trouble in Nasty?|A vampire|A werewolf|A ghost pirate|A zombie|Easy|Vampire|Nasty Episode|Horror Parody|Alexei Sayle|Unwanted Visitor|Graveside Flashback|1984 Plot
 Which punk rock band performs in the episode Nasty?|The Damned|Motörhead|Madness|Amazulu|Medium|The Damned|Nasty Episode|Musical Guest|Punk Band|1984 Performance|Video Nasty|Alternative Rock
 Where do the housemates attempt to dispose of the vampire in Nasty?|A grave|A canal|A rubbish skip|A railway tunnel|Medium|Vampire Burial|Nasty Episode|Graveside|Horror Parody|Housemates|Disposal Plan|1984 Story
 Which housemate wakes to find a woman in his bed at the start of Time?|Rick|Neil|Vyvyan|Mike|Easy|Rick|Time Episode|Unexpected Bedmate|Romantic Boasting|Housemate Rivalry|1984 Story|Morning Scene
 What disturbing secret does Rick's unexpected bedmate have in Time?|She is a serial killer|She is a secret police inspector|She is his distant cousin|She is a royal princess|Medium|Serial Killer|Rick|Time Episode|Woman In Bed|Dark Humour|False Romance|Dangerous Visitor
 To what historical period is the house transported in Time?|The Middle Ages|Ancient Rome|The Victorian era|The Stone Age|Medium|Middle Ages|Time Episode|Time Travel|Medieval Britain|Surreal Plot|Historical Parody|1984 Story
 Which housemate is kidnapped by a medieval knight in Time?|Neil|Mike|Rick|Vyvyan|Medium|Neil Pye|Medieval Knight|Time Episode|Kidnapping|Time Travel|Hippy Student|1984 Plot
 Who unexpectedly comes to dinner when the students are ill in Sick?|Neil's parents|Rick's grandparents|Mike's university tutors|Vyvyan's cousins|Easy|Neil Parents|Sick Episode|Family Dinner|Household Illness|Embarrassing Visit|1984 Story|Second Series
 Which BBC sitcom inspires the housemates to try becoming self-sufficient in Sick?|The Good Life|Only Fools and Horses|Butterflies|Open All Hours|Medium|The Good Life|Sick Episode|Self Sufficiency|Sitcom Reference|Garden Growing|Household Experiment|BBC Comedy
 Which band returns to The Young Ones to perform Our House in Sick?|Madness|The Damned|Motörhead|Dexys Midnight Runners|Easy|Madness|Our House|Sick Episode|Musical Guest|Second Appearance|1984 Performance|British Pop`,
   },
   {
     topic: 'Series Two Finale and Music Beyond the Series',
     facts: `What does the landlord do to the housemates in the final episode, Summer Holiday?|Evicts them|Gives them a new house|Offers them free rent|Sells them the building|Easy|Summer Holiday|Jerzei Balowski|Eviction|Final Episode|Student Housing|End Of Term|1984
 What do the students attempt to rob after being thrown out in Summer Holiday?|A bank|A jewellery shop|A post office|A supermarket|Easy|Bank Robbery|Summer Holiday|Desperate Plan|Student Housemates|Failed Exams|1984 Finale|Crime Comedy
 Which housemate is told he finished bottom in the entire world in his examinations?|Rick|Mike|Neil|Vyvyan|Medium|Rick|Exam Results|Bottom In World|Summer Holiday|Academic Failure|Final Episode|University Students
 What type of vehicle do the four students use for their final escape in Summer Holiday?|A double-decker bus|A police helicopter|A railway locomotive|A speedboat|Easy|Double Decker Bus|Summer Holiday|Final Escape|Bank Robbery|Routemaster|Road Accident|Series Ending
 Whose concert billboard does the bus smash through before plunging over a cliff?|Cliff Richard's|David Bowie's|Elton John's|Paul McCartney's|Medium|Cliff Richard|Concert Billboard|Summer Holiday|Cliff Edge|Final Crash|Rick Idol|1984 Finale
 What happens to the bus in the last moments of The Young Ones?|It explodes|It turns into a submarine|It is lifted by a helicopter|It drives into a tunnel|Easy|Bus Explosion|Summer Holiday|Final Scene|Series Ending|Cliff Accident|Surreal Finale|1984 Broadcast
 Which singer appears alongside The Young Ones on the 1986 charity single Living Doll?|Cliff Richard|Elton John|David Bowie|George Michael|Easy|Cliff Richard|Living Doll|1986 Charity Single|Comic Relief|Young Ones Cast|Music Collaboration|UK Pop
 For which charity did Cliff Richard and The Young Ones record Living Doll in 1986?|Comic Relief|Children in Need|Sport Relief|Band Aid|Easy|Comic Relief|Living Doll|Charity Fundraising|1986|Cliff Richard|BBC Comedians|Benefit Single
 What was the highest UK singles chart position reached by the 1986 Living Doll collaboration?|Number one|Number two|Number five|Number ten|Medium|UK Number One|Living Doll|Official Singles Chart|1986 Hit|Comic Relief|Cliff Richard|Music Chart`,
   },
 ];

 const FIRST_ID = 12133;
 let index = 0;
 const questions = groups.flatMap(group =>
   group.facts.trim().split('\n').map(line => {
     const parts = line.trim().split('|').map(part => part.trim());
     const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
     if (parts.length !== 13) {
       throw new Error(`Expected seven specialist tags at ${id}; received ${parts.length - 6}`);
     }
     const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
     const answers = [wrong1, wrong2, wrong3];
     if (!question || !correctAnswer || answers.some(answer => !answer)) {
       throw new Error(`Missing question or answer at ${id}`);
     }
     if (new Set([correctAnswer, ...answers].map(answer => answer.toLowerCase())).size !== 4) {
       throw new Error(`Repeated answer option at ${id}`);
     }
     if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.some(tag => !tag)) {
       throw new Error(`Invalid difficulty or specialist tag at ${id}`);
     }
     answers.splice(index % 4, 0, correctAnswer);
     const tags = [...new Map([
       'British Television', 'British Sitcom', 'Alternative Comedy', 'The Young Ones',
       'BBC Two', '1980s', '1982-1984', 'Surreal Sitcom', 'Student House Comedy',
       group.topic, correctAnswer, ...specificTags
     ].map(tag => [tag.toLowerCase(), tag])).values()];
     const item = {
       id,
       category: 'Television',
       question,
       answers,
       correctAnswer,
       difficulty,
       tags,
       dailyEligible: true
     };
     index += 1;
     return item;
   })
 );

 const EXPECTED_COUNT = 68;
 if (questions[0].id !== 'tv_12133' || questions[questions.length - 1].id !== 'tv_12200') {
   throw new Error('Unexpected question ID range');
 }
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (new Set(questions.map(q => q.id)).size !== questions.length ||
     new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
   throw new Error('Duplicate question IDs or wording');
 }
 if (questions.some(q =>
   q.category !== 'Television' || q.answers.length !== 4 ||
   !q.answers.includes(q.correctAnswer) || q.tags.length < 16 ||
   q.tags.some(tag => !tag) || q.dailyEligible !== true
 )) {
   throw new Error('Incomplete exported question metadata');
 }
 module.exports = questions;
