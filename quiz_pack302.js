
 // quiz_pack302.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: 30 Rock - Series Seven (2012-2013) and the 2020 reunion special.
 // All 13 final-series episodes plus the later one-off special.
 // Every row has seven individually selected specialist tags.
 // quiz_bank.js already connects this pack in its live range of 1–558.
 // Row format: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven tags

 const groups = [
   {
     topic: 'The Beginning of the End and Governor Dunston',
     year: '2012',
     facts: `What is Jack deliberately trying to do to NBC's programme schedule in The Beginning of the End?|Make it fail|Turn it into a sports channel|Replace it with films|Fill it with live concerts|Easy|Jack Donaghy|Beginning Of The End|NBC Schedule|Deliberate Failure|Kabletown|Corporate Scheme|Season Premiere
 Which Kabletown chief does Jack hope to persuade to sell NBC?|Hank Hooper|Don Geiss|Devon Banks|Milton Greene|Easy|Hank Hooper|Jack Donaghy|Kabletown CEO|NBC Sale|Beginning Of The End|Executive Decision|Corporate Strategy
 For whose wedding is Jenna preparing when Series Seven opens?|Her own wedding to Paul|Liz's wedding to Criss|Tracy's wedding to Angie|Jack's wedding to Avery|Easy|Jenna Maroney|Paul Lastname|Beginning Of The End|Wedding Planning|Future Bride|Relationship|2012 Story
 Whom does Jenna ask to be her maid of honour in The Beginning of the End?|Liz Lemon|Cerie Xerox|Angie Jordan|Hazel Wassername|Easy|Jenna Maroney|Liz Lemon|Maid Of Honour|Beginning Of The End|Wedding Duties|Friendship|Bridal Party
 Why does Hazel invite Tracy to dinner with Kenneth in The Beginning of the End?|To help her acting ambitions|To arrange a charity donation|To ask him for a loan|To recruit him as a page|Medium|Hazel Wassername|Tracy Jordan|Kenneth Parcell|Dinner Invitation|Acting Ambition|Beginning Of The End|Hidden Motive
 Which politician shares an uncanny resemblance to Tracy in Governor Dunston?|Governor Dunston|Senator Geiss|Mayor Banks|Congressman Hooper|Easy|Governor Dunston|Tracy Jordan|Political Doppelganger|Election Satire|Governor Dunston Episode|Jack Donaghy|2012 Campaign
 Why does Jack initially prohibit political sketches about Governor Dunston?|They might improve TGS ratings|They might offend Kenneth's family|He dislikes impersonations|They would require a new set|Medium|Jack Donaghy|Political Satire|Governor Dunston|TGS Ratings|NBC Sabotage|Liz Lemon|Election Comedy
 Which actress plays Kenneth's mother Pearline in Governor Dunston?|Catherine O'Hara|Elaine Stritch|Megan Mullally|Anita Gillette|Medium|Catherine O Hara|Pearline Parcell|Kenneth Mother|Governor Dunston|Guest Actress|Family Visit|2012 Casting
 Which Breaking Bad actor plays Kenneth's stepfather Ron in Governor Dunston?|Bryan Cranston|Aaron Paul|Dean Norris|Jonathan Banks|Medium|Bryan Cranston|Ron|Kenneth Stepfather|Governor Dunston|Guest Actor|Family Visit|2012 Appearance
 What does Jenna hope Kenneth's visiting family will buy after her summer single disappoints?|Physical music recordings|Tickets to a Broadway show|Her wedding photographs|Shares in Kabletown|Medium|Jenna Maroney|Kenneth Family|Record Sales|Governor Dunston|Summer Dance Single|Music Fans|2012 Story`,
   },
   {
     topic: 'Stride of Pride, Unwindulax and the Election',
     year: '2012',
     facts: `What claim by Tracy does Liz challenge in Stride of Pride?|That women are not funny|That television is dying|That actors write their own lines|That NBC should cancel TGS|Easy|Tracy Jordan|Liz Lemon|Women In Comedy|Stride Of Pride|Workplace Debate|Humour|2012 Episode
 What age does a magazine incorrectly attribute to Jenna in Stride of Pride?|56|42|65|38|Medium|Jenna Maroney|Fifty Six|Magazine Article|Stride Of Pride|Celebrity Age|Publicity|Age Anxiety
 Which actor's film The Great Escape inspires Jack's unusual dating strategy in Stride of Pride?|Steve McQueen|Clint Eastwood|Paul Newman|Robert Redford|Medium|The Great Escape|Steve McQueen|Jack Donaghy|Stride Of Pride|Dating Strategy|Cinema Reference|Romantic Experiment
 What does Jack discover about his girlfriend Zarina in Stride of Pride?|She is also dating several people|She works for Devon Banks|She is secretly married to Pete|She is leaving for Canada|Medium|Zarina|Jack Donaghy|Stride Of Pride|Multiple Partners|Dating Reversal|Relationship Strategy|2012 Plot
 Whom does Jack bring to a Republican fundraiser in Unwindulax?|Liz Lemon|Jenna Maroney|Avery Jessup|Colleen Donaghy|Easy|Jack Donaghy|Liz Lemon|Republican Fundraiser|Unwindulax|Political Event|Donation Strategy|2012 Campaign
 Which kind of music earns Jenna a new group of laid-back fans in Unwindulax?|Tropical party music|Heavy metal|Country ballads|Classical opera|Easy|Jenna Maroney|Tropical Single|Unwindulax|Relaxed Fans|Music Release|Jimmy Buffett Parody|2012 Episode
 How does Liz retaliate after Jack uses her at the fundraiser in Unwindulax?|She uses TGS to support Democratic voting|She resigns from NBC|She runs for mayor|She invites Devon Banks to the studio|Medium|Liz Lemon|Jack Donaghy|Democratic Party|Unwindulax|Political Retaliation|TGS Broadcast|2012 Election
 What makes Jenna unusually influential in There's No I in America?|Her followers are crucial swing voters|She is running for president|She owns a television network|She has become a senator|Easy|Jenna Maroney|Swing Voters|Theres No I In America|Election Influence|Fan Base|Presidential Politics|2012 Story
 Who stage a debate to win Jenna's political support?|Liz and Jack|Tracy and Kenneth|Pete and Frank|Criss and Dennis|Easy|Liz Lemon|Jack Donaghy|Political Debate|Jenna Maroney|Theres No I In America|Swing Voters|Campaign Rivalry
 Who turns to Tracy for help understanding how to vote in There's No I in America?|Kenneth Parcell|Pete Hornberger|Jenna Maroney|Frank Rossitano|Easy|Kenneth Parcell|Tracy Jordan|Voting Advice|Theres No I In America|First Election|Political Education|2012 Story
 Which presidential election forms the backdrop to Unwindulax and There's No I in America?|The 2012 US election|The 2000 US election|The 2008 US election|The 2016 US election|Easy|2012 Presidential Election|Unwindulax|Theres No I In America|Election Year|American Politics|Political Satire|NBC Comedy`,
   },
   {
     topic: 'Aunt Phatso, a Wedding and My Whole Life Is Thunder',
     year: '2012',
     facts: `In Aunt Phatso vs. Jack Donaghy, who uses a character based on Jack as a movie villain?|Tracy Jordan|Jenna Maroney|Danny Baker|Kenneth Parcell|Easy|Tracy Jordan|Jack Donaghy|Aunt Phatso Film|Movie Villain|Defamation Dispute|2012 Episode|Film Within Show
 What does Jack consider bringing against Tracy over the Aunt Phatso film?|A defamation lawsuit|A copyright claim for music|A breach of lease action|A divorce petition|Medium|Jack Donaghy|Tracy Jordan|Defamation|Aunt Phatso Vs Jack Donaghy|Legal Threat|Film Character|Reputation
 What operation leaves Liz temporarily needing help in Aunt Phatso vs. Jack Donaghy?|Foot surgery|Eye surgery|A hip replacement|A tonsillectomy|Easy|Liz Lemon|Foot Surgery|Aunt Phatso Vs Jack Donaghy|Recovery|Hazel Wassername|Temporary Assistant|2012 Story
 Which ambitious page offers to cover Liz's duties while she recovers?|Hazel Wassername|Cerie Xerox|Kenneth Parcell|Jonathan|Easy|Hazel Wassername|Liz Lemon|Temporary Cover|Aunt Phatso Vs Jack Donaghy|TGS Ambition|Staff Manipulation|2012 Episode
 Which former boyfriend's adoption success influences Liz and Criss in Mazel Tov, Dummies!?|Dennis Duffy|Floyd DeBarber|Carol Burnett|Drew Baird|Easy|Dennis Duffy|Liz Lemon|Criss Chros|Mazel Tov Dummies|Adoption|Former Boyfriend|2012 Story
 What do Liz and Criss decide to do in Mazel Tov, Dummies!?|Get married|Move to Los Angeles|Join the TGS cast|Open a restaurant|Easy|Liz Lemon|Criss Chros|Wedding Decision|Mazel Tov Dummies|Adoption Plans|Relationship Milestone|2012 Episode
 Why does Tracy become frightened about growing old in Mazel Tov, Dummies!?|His doctor says he is in excellent health|He loses an award|His film studio closes|His wife announces a divorce|Medium|Tracy Jordan|Leo Spaceman|Excellent Health|Mazel Tov Dummies|Ageing Anxiety|Medical Prognosis|2012 Plot
 Which singer appears as himself in Mazel Tov, Dummies!?|Tony Bennett|Elton John|Lionel Richie|Michael Buble|Medium|Tony Bennett|Mazel Tov Dummies|Singer Cameo|Guest Appearance|2012 Episode|Music Legend|Wedding Era
 Who tries to overshadow Liz's marriage by arranging a surprise wedding in My Whole Life Is Thunder?|Jenna Maroney|Angie Jordan|Avery Jessup|Cerie Xerox|Easy|Jenna Maroney|Liz Lemon|Paul Lastname|My Whole Life Is Thunder|Wedding Rivalry|Jealousy|2012 Story
 Which Brady Bunch actress appears to lift Kenneth's spirits in My Whole Life Is Thunder?|Florence Henderson|Maureen McCormick|Eve Plumb|Susan Olsen|Medium|Florence Henderson|Kenneth Parcell|Brady Bunch|Tracy Jordan|My Whole Life Is Thunder|Guest Cameo|2012 Episode
 Whose early Christmas visit causes Jack anxiety in My Whole Life Is Thunder?|His mother Colleen's|His daughter Liddy's|His father Milton's|His brother Eddie's|Easy|Colleen Donaghy|Jack Donaghy|My Whole Life Is Thunder|Christmas Visit|Family Tension|Mother Son Relationship|2012 Episode`,
   },
   {
     topic: 'Game Over, Florida and the End of TGS',
     year: '2013',
     facts: `Which young relative of Hank Hooper does Jack regard as a rival for Kabletown's future in Game Over?|Kaylie Hooper|Kathy Geiss|Cerie Xerox|Hazel Wassername|Easy|Kaylie Hooper|Hank Hooper|Jack Donaghy|Game Over|Corporate Succession|Young Rival|2013 Episode
 Which old corporate opponent joins Jack's effort against Kaylie in Game Over?|Devon Banks|Don Geiss|Floyd DeBarber|Gavin Volure|Easy|Devon Banks|Jack Donaghy|Kaylie Hooper|Game Over|Corporate Alliance|Former Rival|2013 Story
 Which actress plays the difficult star in Tracy's Harriet Tubman film in Game Over?|Octavia Spencer|Viola Davis|Regina King|Angela Bassett|Medium|Octavia Spencer|Tracy Jordan|Harriet Tubman Film|Game Over|Guest Actress|Film Direction|2013 Episode
 Which historical figure is the subject of Tracy's biographical film in Game Over?|Harriet Tubman|Rosa Parks|Sojourner Truth|Ida B Wells|Easy|Harriet Tubman|Tracy Jordan|Game Over|Biographical Film|American History|Film Project|2013 Story
 What adoption advice does Bev give Liz in Game Over?|Consider adopting an older child|Stop applying to adopt|Move to Canada immediately|Use a celebrity adoption agency|Medium|Bev|Liz Lemon|Game Over|Older Child Adoption|Adoption Waiting List|Family Planning|2013 Episode
 To which US state do Jack and Liz travel in Florida?|Florida|Georgia|Texas|Ohio|Easy|Jack Donaghy|Liz Lemon|Florida Episode|Colleen Estate|Travel|Family Affairs|2013 Story
 What do Jack and Liz learn about his late mother Colleen in Florida?|She had a relationship with her nurse|She had secretly bought NBC|She had moved to Canada|She was a former film star|Medium|Colleen Donaghy|Florida Episode|Jack Donaghy|Private Relationship|Family Secret|Nurse|2013 Story
 Which former TGS employee files a lawsuit that threatens the programme in Florida?|Hazel Wassername|Josh Girard|Danny Baker|Cerie Xerox|Easy|Hazel Wassername|TGS Lawsuit|Florida Episode|Former Employee|Legal Trouble|Kenneth Parcell|2013 Story
 Which allegation forms the basis of Hazel's lawsuit in Florida?|Sexual harassment|Unpaid royalties|Copyright infringement|Property damage|Medium|Hazel Wassername|Sexual Harassment Lawsuit|Florida Episode|TGS|Workplace Allegation|Legal Liability|2013 Plot
 Who temporarily take charge of TGS while Liz is in Florida?|Tracy and Jenna|Frank and Toofer|Kenneth and Pete|Jack and Jonathan|Easy|Tracy Jordan|Jenna Maroney|TGS Management|Florida Episode|Liz Absence|Workplace Leadership|2013 Episode`,
   },
   {
     topic: 'A Goon\'s Deed, Hogcock and Last Lunch',
     year: '2013',
     facts: `Which married couple learn their adopted children will soon arrive in A Goon's Deed in a Weary World?|Liz and Criss|Jack and Avery|Tracy and Angie|Jenna and Paul|Easy|Liz Lemon|Criss Chros|Adopted Children|A Goons Deed In A Weary World|Family Arrival|2013 Episode|New Parents
 What threatens the future of TGS in A Goon's Deed in a Weary World?|Cancellation after a lawsuit|A studio fire|A national actors' strike|A rival network's purchase|Easy|TGS Cancellation|Hazel Lawsuit|A Goons Deed In A Weary World|Liz Lemon|Show At Risk|NBC|2013 Story
 Who tries to make sure Jack chooses the right new NBC president?|Kenneth Parcell|Devon Banks|Tracy Jordan|Pete Hornberger|Easy|Kenneth Parcell|Jack Donaghy|NBC President|A Goons Deed In A Weary World|Leadership Selection|Network Loyalty|2013 Episode
 Whose relationship priorities are divided between arriving children and rescuing TGS?|Liz Lemon's|Jenna Maroney's|Angie Jordan's|Avery Jessup's|Easy|Liz Lemon|Adoption|TGS Crisis|A Goons Deed In A Weary World|Work Family Balance|Criss Chros|2013 Story
 What position does Kenneth eventually attain at NBC?|President of NBC|Head of TGS writing|Chief financial officer|Director of wardrobe|Easy|Kenneth Parcell|NBC President|Career Promotion|Hogcock|Jack Donaghy|Network Leadership|2013 Finale
 What does Liz struggle to adjust to in Hogcock!?|Being a stay-at-home mother|Working for Devon Banks|Living in Florida|Hosting a breakfast show|Easy|Liz Lemon|Stay At Home Mother|Hogcock|Parenthood|Career Identity|TGS Cancellation|2013 Episode
 Who finds he is no longer required to run Tracy's errands after his promotion?|Kenneth Parcell|Frank Rossitano|Pete Hornberger|Jonathan|Easy|Kenneth Parcell|Tracy Jordan|Hogcock|NBC Presidency|Personal Assistant|New Responsibilities|2013 Story
 What does Jack begin to question despite his corporate success in Hogcock!?|Whether he is happy|Whether his father is alive|Whether he should buy a yacht|Whether he can act in TGS|Easy|Jack Donaghy|Hogcock|Personal Happiness|Corporate Success|Kabletown|Life Reassessment|2013 Episode
 What is the title of the final regular episode of 30 Rock?|Last Lunch|Hiatus|The Aftermath|Final Curtain|Easy|Last Lunch|Series Finale|Episode Title|30 Rock Ending|NBC|January 2013|TGS Farewell
 Who is due to choose the writers' meal in the finale Last Lunch?|J. D. Lutz|Frank Rossitano|Toofer Spurlock|Pete Hornberger|Medium|J D Lutz|Last Lunch|Writers Meal|Staff Tradition|Revenge Plan|TGS Crew|2013 Finale
 Why does Tracy try to prevent the final TGS episode being produced in Last Lunch?|He would receive a payout if it never aired|He is auditioning for another show|He has lost his costumes|He is planning an overseas trip|Medium|Tracy Jordan|Last Lunch|Contract Payout|TGS Production|Financial Incentive|Final Episode|2013 Plot
 Who tries to get Jenna to show genuine feeling during the last TGS show?|Kenneth Parcell|Devon Banks|Floyd DeBarber|Dennis Duffy|Easy|Kenneth Parcell|Jenna Maroney|Last Lunch|Final Performance|Emotional Farewell|NBC President|2013 Finale
 On which date did 30 Rock's final two regular episodes first air in the US?|31 January 2013|4 October 2012|16 July 2020|31 December 2013|Medium|31 January 2013|Hogcock|Last Lunch|Original Airdate|NBC Broadcast|Finale Date|2013 Television
 How many regular episodes were broadcast in 30 Rock's seventh series?|13|22|15|23|Easy|Series Seven|Thirteen Episodes|Final Season|NBC Broadcast|Episode Count|2012 2013|Sitcom History`,
   },
   {
     topic: '30 Rock: A One-Time Special',
     year: '2020',
     facts: `In which year did 30 Rock return for a one-off reunion special?|2020|2015|2017|2023|Easy|One Time Special|2020 Reunion|NBCUniversal|Television Return|Special Broadcast|Original Cast|Reunion Year
 Which former NBC page is now organising the major presentation in the 2020 special?|Kenneth Parcell|Jonathan|Cerie Xerox|Josh Girard|Easy|Kenneth Parcell|One Time Special|NBC Presentation|TGS Reunion|2020 Special|Network Leadership|Advertising Event
 What does Kenneth need the former TGS group to help him prepare in the reunion special?|A presentation to advertisers|A charity concert|A new daily news bulletin|A sports awards ceremony|Easy|Advertiser Presentation|Kenneth Parcell|One Time Special|TGS Reunion|NBCUniversal Upfront|Network Promotion|2020 Plot
 On which US television network did the one-off 30 Rock special premiere on 16 July 2020?|NBC|ABC|CBS|Fox|Easy|NBC|16 July 2020|One Time Special|Television Premiere|NBCUniversal|2020 Broadcast|Reunion Event
 Which streaming service featured the special as part of NBCUniversal's 2020 promotional plans?|Peacock|Netflix|Paramount Plus|Apple TV Plus|Medium|Peacock|NBCUniversal|One Time Special|2020 Streaming|Upfront Presentation|Network Launch|Reunion Broadcast
 Why was the 2020 reunion filmed with cast members working remotely?|The COVID-19 pandemic|A Hollywood writers' strike|A studio building renovation|An overseas film shoot|Easy|COVID 19 Pandemic|Remote Filming|One Time Special|2020 Production|Cast Reunion|NBCUniversal|Television Production`,
   },
 ];

 const FIRST_ID = 12988;
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
       throw new Error(`Repeated answer at ${id}`);
     }
     if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.length !== 7 || specificTags.some(tag => !tag)) {
       throw new Error(`Invalid difficulty or specialist tags at ${id}`);
     }
     const answers = [...wrongAnswers];
     answers.splice(index % 4, 0, correctAnswer);
     const tags = [...new Map([
       'American Television', 'American Sitcom', '30 Rock', 'NBC',
       group.year === '2020' ? '2020 Reunion Special' : '2012-2013',
       group.year, group.year === '2020' ? '2020s' : '2010s',
       group.year === '2020' ? 'Television Reunion' : 'Season Seven',
       'Workplace Comedy', 'Sketch Comedy', 'Comedy Series',
       group.topic, correctAnswer, ...specificTags
     ].map(tag => [tag.toLowerCase(), tag])).values()];
     const item = { id, category: 'Television', question, answers, correctAnswer, difficulty, tags, dailyEligible: true };
     index++;
     return item;
   })
 );

 const EXPECTED_COUNT = 62;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_12988' || questions[questions.length - 1].id !== 'tv_13049') {
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

// 21 November 2026: final-season and 2020 reunion audit.
// Original IDs tv_12988–tv_13049 preserved; new IDs tv_35884–tv_35917.
// Research: https://en.wikipedia.org/wiki/30_Rock_season_7
// https://en.wikipedia.org/wiki/Hogcock!_and_Last_Lunch
// https://en.wikipedia.org/wiki/30_Rock:_A_One-Time_Special
// https://www.tvline.com/recaps/30-rock-series-finale-recap-402304/
const auditAdditions = [
  {
    "id": "tv_35884",
    "category": "Television",
    "question": "What kind of party does Liz deliberately make a disaster to avoid being Jenna's maid of honour in 30 Rock?",
    "answers": [
      "A hen party",
      "A birthday party",
      "A retirement party",
      "A launch party"
    ],
    "correctAnswer": "A hen party",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: The Beginning of the End",
      "Fact focus: Liz sabotages Jenna's party",
      "Character or guest: Jenna Maroney",
      "Storyline: Tanking strategy",
      "Correct answer: A hen party",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: What kind of party does Liz deliberately make a disaster to avoid being Jenna's maid of honour in 30 Rock?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35885",
    "category": "Television",
    "question": "Which actress portrays Zarina, one of Jack's girlfriends in the 30 Rock episode Stride of Pride?",
    "answers": [
      "Elizabeth Banks",
      "Nina Arianda",
      "Julianne Moore",
      "Edie Falco"
    ],
    "correctAnswer": "Nina Arianda",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Stride of Pride",
      "Fact focus: Zarina casting",
      "Character or guest: Zarina",
      "Storyline: Jack's dating strategy",
      "Correct answer: Nina Arianda",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Which actress portrays Zarina, one of Jack's girlfriends in the 30 Rock episode Stride of Pride?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35886",
    "category": "Television",
    "question": "Which Olympic swimmer cameos as himself in 30 Rock's Stride of Pride?",
    "answers": [
      "Michael Phelps",
      "Ian Thorpe",
      "Ryan Lochte",
      "Adam Peaty"
    ],
    "correctAnswer": "Ryan Lochte",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Stride of Pride",
      "Fact focus: Olympic athlete cameo",
      "Character or guest: Ryan Lochte",
      "Storyline: Season seven guest",
      "Correct answer: Ryan Lochte",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Which Olympic swimmer cameos as himself in 30 Rock's Stride of Pride?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35887",
    "category": "Television",
    "question": "Which actress plays the visor-wearing visitor in the 30 Rock episode Unwindulax?",
    "answers": [
      "Molly Shannon",
      "Rachel Dratch",
      "Tina Fey",
      "Amy Sedaris"
    ],
    "correctAnswer": "Amy Sedaris",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Unwindulax",
      "Fact focus: Visor Lady casting",
      "Character or guest: Amy Sedaris",
      "Storyline: Tropical fan storyline",
      "Correct answer: Amy Sedaris",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Which actress plays the visor-wearing visitor in the 30 Rock episode Unwindulax?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35888",
    "category": "Television",
    "question": "Which actor plays Roger in the 30 Rock episode Unwindulax?",
    "answers": [
      "Gary Cole",
      "Will Arnett",
      "Tim Meadows",
      "Rob Corddry"
    ],
    "correctAnswer": "Gary Cole",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Unwindulax",
      "Fact focus: Roger guest casting",
      "Character or guest: Gary Cole",
      "Storyline: Election subplot",
      "Correct answer: Gary Cole",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Which actor plays Roger in the 30 Rock episode Unwindulax?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35889",
    "category": "Television",
    "question": "Which Oscar-nominated actor appears as himself in the 30 Rock episode Unwindulax?",
    "answers": [
      "Jamie Foxx",
      "Don Cheadle",
      "Forest Whitaker",
      "Terrence Howard"
    ],
    "correctAnswer": "Don Cheadle",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Unwindulax",
      "Fact focus: Actor cameo",
      "Character or guest: Don Cheadle",
      "Storyline: Political fundraiser",
      "Correct answer: Don Cheadle",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Which Oscar-nominated actor appears as himself in the 30 Rock episode Unwindulax?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35890",
    "category": "Television",
    "question": "What bizarre claim does a stranger make about Jenna in 30 Rock's Mazel Tov, Dummies!?",
    "answers": [
      "He is her long-lost brother",
      "He owns her first record",
      "He won her in an old competition",
      "He wrote her debut film"
    ],
    "correctAnswer": "He won her in an old competition",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Mazel Tov, Dummies!",
      "Fact focus: Jenna's bizarre claim",
      "Character or guest: Jenna Maroney",
      "Storyline: Stranger and contest",
      "Correct answer: He won her in an old competition",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: What bizarre claim does a stranger make about Jenna in 30 Rock's Mazel Tov, Dummies!?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35891",
    "category": "Television",
    "question": "At what type of awards ceremony does Jenna try to stage her own wedding in 30 Rock?",
    "answers": [
      "The Golden Globes",
      "A college graduation",
      "A film festival",
      "An awards ceremony honouring women"
    ],
    "correctAnswer": "An awards ceremony honouring women",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: My Whole Life Is Thunder",
      "Fact focus: Jenna upstages Liz",
      "Character or guest: Jenna Maroney",
      "Storyline: Paul L'astnamé wedding",
      "Correct answer: An awards ceremony honouring women",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: At what type of awards ceremony does Jenna try to stage her own wedding in 30 Rock?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35892",
    "category": "Television",
    "question": "How does Jack attempt to avoid his mother's criticism during her visit in 30 Rock?",
    "answers": [
      "He resolves to do absolutely nothing",
      "He pretends to be on holiday",
      "He gives away all his possessions",
      "He hires an actor to play himself"
    ],
    "correctAnswer": "He resolves to do absolutely nothing",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: My Whole Life Is Thunder",
      "Fact focus: Jack tries not to disappoint Colleen",
      "Character or guest: Jack Donaghy",
      "Storyline: Colleen Donaghy visit",
      "Correct answer: He resolves to do absolutely nothing",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: How does Jack attempt to avoid his mother's criticism during her visit in 30 Rock?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35893",
    "category": "Television",
    "question": "Which actress plays Bonnie in the 30 Rock episode My Whole Life Is Thunder?",
    "answers": [
      "Jan Hooks",
      "Andrea Martin",
      "Megan Mullally",
      "Judith Light"
    ],
    "correctAnswer": "Andrea Martin",
    "difficulty": "Hard",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: My Whole Life Is Thunder",
      "Fact focus: Bonnie guest casting",
      "Character or guest: Andrea Martin",
      "Storyline: Christmas episode",
      "Correct answer: Andrea Martin",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Which actress plays Bonnie in the 30 Rock episode My Whole Life Is Thunder?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35894",
    "category": "Television",
    "question": "What female alias does private detective Lenny Wosniak use in 30 Rock's Game Over?",
    "answers": [
      "Alice Ripley",
      "Gretchen Thomas",
      "Jan Foster",
      "Zarina"
    ],
    "correctAnswer": "Jan Foster",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Game Over",
      "Fact focus: Detective's disguise",
      "Character or guest: Lenny Wosniak",
      "Storyline: Jack seeks information about Kaylie",
      "Correct answer: Jan Foster",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: What female alias does private detective Lenny Wosniak use in 30 Rock's Game Over?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35895",
    "category": "Television",
    "question": "How long is the waiting list for Liz to adopt a newborn in the 30 Rock episode Game Over?",
    "answers": [
      "Six months",
      "One year",
      "Ten years",
      "Four years"
    ],
    "correctAnswer": "Four years",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Game Over",
      "Fact focus: Adoption waiting list",
      "Character or guest: Liz Lemon",
      "Storyline: Bev's advice",
      "Correct answer: Four years",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: How long is the waiting list for Liz to adopt a newborn in the 30 Rock episode Game Over?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35896",
    "category": "Television",
    "question": "Which actor portrays a lawyer named Martin Lutherking in 30 Rock's Florida?",
    "answers": [
      "Tim Meadows",
      "Chris Parnell",
      "Tracy Morgan",
      "Rob Riggle"
    ],
    "correctAnswer": "Tim Meadows",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Florida",
      "Fact focus: Hazel's lawyer guest casting",
      "Character or guest: Martin Lutherking",
      "Storyline: Sexual-harassment lawsuit",
      "Correct answer: Tim Meadows",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Which actor portrays a lawyer named Martin Lutherking in 30 Rock's Florida?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35897",
    "category": "Television",
    "question": "What are the first names of the twins Liz and Criss adopt near the end of 30 Rock?",
    "answers": [
      "Tom and Jane",
      "Terry and Janet",
      "Jack and Jenna",
      "Max and Melanie"
    ],
    "correctAnswer": "Terry and Janet",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: A Goon's Deed in a Weary World",
      "Fact focus: Adopted twins' names",
      "Character or guest: Liz and Criss",
      "Storyline: Season-seven penultimate episode",
      "Correct answer: Terry and Janet",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: What are the first names of the twins Liz and Criss adopt near the end of 30 Rock?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35898",
    "category": "Television",
    "question": "Which musician directed the 30 Rock episode A Goon's Deed in a Weary World?",
    "answers": [
      "Jon Brion",
      "Randy Newman",
      "Jeff Richmond",
      "Alex Wurman"
    ],
    "correctAnswer": "Jeff Richmond",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: A Goon's Deed in a Weary World",
      "Fact focus: Penultimate episode director",
      "Character or guest: Jeff Richmond",
      "Storyline: Season-seven production",
      "Correct answer: Jeff Richmond",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Which musician directed the 30 Rock episode A Goon's Deed in a Weary World?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35899",
    "category": "Television",
    "question": "Which sandwich chain does Lutz insist on choosing for the final staff lunch in 30 Rock?",
    "answers": [
      "Subway",
      "Pret A Manger",
      "Quiznos",
      "Blimpie"
    ],
    "correctAnswer": "Blimpie",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Hogcock! and Last Lunch",
      "Fact focus: Lutz's revenge lunch",
      "Character or guest: J. D. Lutz",
      "Storyline: Final TGS meal",
      "Correct answer: Blimpie",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Which sandwich chain does Lutz insist on choosing for the final staff lunch in 30 Rock?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35900",
    "category": "Television",
    "question": "Which fictional musical supplies Jenna's emotional final performance on TGS in 30 Rock?",
    "answers": [
      "The Rural Juror",
      "Mystic Pizza",
      "The Girlie Show",
      "Jackie Jormp-Jomp"
    ],
    "correctAnswer": "The Rural Juror",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Hogcock! and Last Lunch",
      "Fact focus: Jenna's farewell song",
      "Character or guest: Jenna Maroney",
      "Storyline: TGS curtain call",
      "Correct answer: The Rural Juror",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Which fictional musical supplies Jenna's emotional final performance on TGS in 30 Rock?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35901",
    "category": "Television",
    "question": "What drastic step does Pete take to escape his old life during the 30 Rock epilogue?",
    "answers": [
      "He moves to a monastery",
      "He fakes his own death",
      "He joins the army",
      "He becomes a ship's captain"
    ],
    "correctAnswer": "He fakes his own death",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Hogcock! and Last Lunch",
      "Fact focus: Pete disappears",
      "Character or guest: Pete Hornberger",
      "Storyline: One-year-later epilogue",
      "Correct answer: He fakes his own death",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: What drastic step does Pete take to escape his old life during the 30 Rock epilogue?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35902",
    "category": "Television",
    "question": "Who tracks Pete down after he fakes his death in the 30 Rock finale?",
    "answers": [
      "Liz Lemon",
      "Jenna Maroney",
      "His wife Paula",
      "His boss Kenneth"
    ],
    "correctAnswer": "His wife Paula",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Hogcock! and Last Lunch",
      "Fact focus: Pete's escape thwarted",
      "Character or guest: Paula Hornberger",
      "Storyline: One-year-later epilogue",
      "Correct answer: His wife Paula",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Who tracks Pete down after he fakes his death in the 30 Rock finale?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35903",
    "category": "Television",
    "question": "Which fictional sitcom is Liz producing in the one-year-later epilogue of 30 Rock?",
    "answers": [
      "The Girlie Show",
      "Queen of Jordan",
      "MILF Island",
      "Grizz & Herz"
    ],
    "correctAnswer": "Grizz & Herz",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Hogcock! and Last Lunch",
      "Fact focus: Liz's next television job",
      "Character or guest: Grizz",
      "Storyline: Series finale epilogue",
      "Correct answer: Grizz & Herz",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Which fictional sitcom is Liz producing in the one-year-later epilogue of 30 Rock?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35904",
    "category": "Television",
    "question": "What transparent household appliance does Jack come up with in the 30 Rock series finale?",
    "answers": [
      "A see-through dishwasher",
      "A glass-fronted microwave oven",
      "A transparent refrigerator",
      "A glass washing machine"
    ],
    "correctAnswer": "A see-through dishwasher",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Hogcock! and Last Lunch",
      "Fact focus: Jack's business invention",
      "Character or guest: Jack Donaghy",
      "Storyline: Finale career breakthrough",
      "Correct answer: A see-through dishwasher",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: What transparent household appliance does Jack come up with in the 30 Rock series finale?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35905",
    "category": "Television",
    "question": "Which corporation is Jack running in the 30 Rock finale's one-year-later epilogue?",
    "answers": [
      "Kabletown",
      "General Electric",
      "Apple",
      "NBCUniversal"
    ],
    "correctAnswer": "General Electric",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Hogcock! and Last Lunch",
      "Fact focus: Jack's final corporate job",
      "Character or guest: Jack Donaghy",
      "Storyline: Epilogue future",
      "Correct answer: General Electric",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Which corporation is Jack running in the 30 Rock finale's one-year-later epilogue?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35906",
    "category": "Television",
    "question": "What object is immortal Kenneth holding in the far-future closing scene of 30 Rock?",
    "answers": [
      "A golden television award",
      "An old page uniform",
      "A snow globe",
      "A porcelain coffee mug"
    ],
    "correctAnswer": "A snow globe",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Hogcock! and Last Lunch",
      "Fact focus: Far-future scene",
      "Character or guest: Kenneth Parcell",
      "Storyline: Rockefeller Center model",
      "Correct answer: A snow globe",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: What object is immortal Kenneth holding in the far-future closing scene of 30 Rock?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35907",
    "category": "Television",
    "question": "Whose descendant pitches Kenneth a television programme in the far-future ending of 30 Rock?",
    "answers": [
      "Tracy Jordan's grandson",
      "Jack Donaghy's great-nephew",
      "Jenna Maroney's niece",
      "Liz Lemon's great-granddaughter"
    ],
    "correctAnswer": "Liz Lemon's great-granddaughter",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Hogcock! and Last Lunch",
      "Fact focus: Far-future pitch",
      "Character or guest: Kenneth Parcell",
      "Storyline: Final shot",
      "Correct answer: Liz Lemon's great-granddaughter",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Whose descendant pitches Kenneth a television programme in the far-future ending of 30 Rock?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35908",
    "category": "Television",
    "question": "Which US political figure appears as herself in the 30 Rock series finale?",
    "answers": [
      "Nancy Pelosi",
      "Hillary Clinton",
      "Kamala Harris",
      "Condoleezza Rice"
    ],
    "correctAnswer": "Nancy Pelosi",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Hogcock! and Last Lunch",
      "Fact focus: Finale political cameo",
      "Character or guest: Nancy Pelosi",
      "Storyline: Guest performer",
      "Correct answer: Nancy Pelosi",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Which US political figure appears as herself in the 30 Rock series finale?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35909",
    "category": "Television",
    "question": "Who co-wrote 30 Rock's final episode Last Lunch with Tina Fey?",
    "answers": [
      "Robert Carlock",
      "Tracey Wigfield",
      "Liz Meriwether",
      "Mindy Kaling"
    ],
    "correctAnswer": "Tracey Wigfield",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: Hogcock! and Last Lunch",
      "Fact focus: Final episode writing credit",
      "Character or guest: Tracey Wigfield",
      "Storyline: Season seven script",
      "Correct answer: Tracey Wigfield",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Who co-wrote 30 Rock's final episode Last Lunch with Tina Fey?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35910",
    "category": "Television",
    "question": "What was Kenneth's real reason for pretending to offer a TGS reboot in the 30 Rock reunion special?",
    "answers": [
      "To replace Liz as showrunner",
      "To audition a new comedian",
      "To confront the cast about ignoring his video calls",
      "To raise money for NBC's building"
    ],
    "correctAnswer": "To confront the cast about ignoring his video calls",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: A One-Time Special (2020)",
      "Fact focus: Kenneth's false reboot offer",
      "Character or guest: Kenneth Parcell",
      "Storyline: Zoom calls ignored",
      "Correct answer: To confront the cast about ignoring his video calls",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: What was Kenneth's real reason for pretending to offer a TGS reboot in the 30 Rock reunion special?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35911",
    "category": "Television",
    "question": "Which video-call service had Kenneth tried to use to reunite his former colleagues before the 30 Rock special?",
    "answers": [
      "Skype",
      "Microsoft Teams",
      "FaceTime",
      "Zoom"
    ],
    "correctAnswer": "Zoom",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: A One-Time Special (2020)",
      "Fact focus: Kenneth's unanswered invitations",
      "Character or guest: Kenneth Parcell",
      "Storyline: 2020 virtual reunion",
      "Correct answer: Zoom",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Which video-call service had Kenneth tried to use to reunite his former colleagues before the 30 Rock special?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35912",
    "category": "Television",
    "question": "What is the name of the fictional women-focused streaming service Jack is asked to lead in the 30 Rock reunion?",
    "answers": [
      "Peahen",
      "Peacock",
      "Hulu",
      "TGS Plus"
    ],
    "correctAnswer": "Peahen",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: A One-Time Special (2020)",
      "Fact focus: Jack's return to media",
      "Character or guest: Jack Donaghy",
      "Storyline: 2020 special ending",
      "Correct answer: Peahen",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: What is the name of the fictional women-focused streaming service Jack is asked to lead in the 30 Rock reunion?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35913",
    "category": "Television",
    "question": "What new writing assignment does Liz receive from Kenneth at the end of the 30 Rock reunion?",
    "answers": [
      "A film adaptation of The Rural Juror",
      "A new television pilot",
      "A biography of Tracy Jordan",
      "An NBC news programme"
    ],
    "correctAnswer": "A new television pilot",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: A One-Time Special (2020)",
      "Fact focus: Liz's next assignment",
      "Character or guest: Liz Lemon",
      "Storyline: Kenneth's offer",
      "Correct answer: A new television pilot",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: What new writing assignment does Liz receive from Kenneth at the end of the 30 Rock reunion?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35914",
    "category": "Television",
    "question": "Who directed the 2020 30 Rock reunion special?",
    "answers": [
      "Beth McCarthy-Miller",
      "Don Scardino",
      "Oz Rodriguez",
      "Steve Buscemi"
    ],
    "correctAnswer": "Oz Rodriguez",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: A One-Time Special (2020)",
      "Fact focus: Special director",
      "Character or guest: Oz Rodriguez",
      "Storyline: Remote production",
      "Correct answer: Oz Rodriguez",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Who directed the 2020 30 Rock reunion special?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35915",
    "category": "Television",
    "question": "What new interest is former TGS producer Pete pursuing in the 2020 30 Rock reunion?",
    "answers": [
      "Professional tennis",
      "Painting",
      "Competitive cycling",
      "Rock music"
    ],
    "correctAnswer": "Rock music",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: A One-Time Special (2020)",
      "Fact focus: Pete's post-TGS interest",
      "Character or guest: Pete Hornberger",
      "Storyline: One-time special character update",
      "Correct answer: Rock music",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: What new interest is former TGS producer Pete pursuing in the 2020 30 Rock reunion?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35916",
    "category": "Television",
    "question": "Which country is Tracy Jordan living in during the 30 Rock reunion special?",
    "answers": [
      "Canada",
      "Mexico",
      "France",
      "Jamaica"
    ],
    "correctAnswer": "Canada",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: A One-Time Special (2020)",
      "Fact focus: Tracy's 2020 location",
      "Character or guest: Tracy Jordan",
      "Storyline: Virtual video call",
      "Correct answer: Canada",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Which country is Tracy Jordan living in during the 30 Rock reunion special?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35917",
    "category": "Television",
    "question": "Why did numerous NBC affiliates refuse to carry the 2020 30 Rock reunion special?",
    "answers": [
      "It featured scenes from an unaired drama",
      "It heavily promoted the Peacock streaming service",
      "The writers had withdrawn permission",
      "The episode was broadcast without subtitles"
    ],
    "correctAnswer": "It heavily promoted the Peacock streaming service",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "American Television",
      "American Sitcom",
      "NBC",
      "Television Comedy",
      "30 Rock Series Seven",
      "2012-2013",
      "Workplace Satire",
      "Episode or special: A One-Time Special (2020)",
      "Fact focus: Network-affiliate carriage dispute",
      "Character or guest: Peacock",
      "Storyline: NBCUniversal promotional special",
      "Correct answer: It heavily promoted the Peacock streaming service",
      "Tina Fey Comedy",
      "Final Season and Reunion",
      "Season 7 13-Episode Run",
      "TV Audit November 2026",
      "Cast, story and episode details",
      "Question: Why did numerous NBC affiliates refuse to carry the 2020 30 Rock reunion special?",
      "Verified film and television credit"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==96||
  new Set(questions.map(q=>q.id)).size!==questions.length||
  new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||
  questions.some(q=>q.answers.length!==4||
   new Set(q.answers.map(a=>a.toLowerCase())).size!==4||
   q.answers.filter(a=>a===q.correctAnswer).length!==1||
   q.tags.length<16||!q.tags.includes("30 Rock")||q.dailyEligible!==true))
  throw Error('Pack 302 audit verification failed');

 module.exports = questions;
