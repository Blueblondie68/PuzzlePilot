
 // quiz_pack302.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: 30 Rock - Series Seven (2012-2013) and the 2020 reunion special.
 // All 13 final-series episodes plus the later one-off special.
 // Every row has seven individually selected specialist tags.
 // Leave quiz_bank.js unchanged until the agreed end-of-session connection.
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
 module.exports = questions;
