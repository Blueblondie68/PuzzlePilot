
 // quiz_pack329.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: Peter Kay's Car Share (2015-2018), plus 2020 audio special.
 // Original six-episode first series, 2016 Christmas sketch, four-episode second series and two 2018 TV specials.
 // No target pack size: retain only distinct, verifiable questions.
 // Per-line format: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven bespoke tags.
 // Sources checked: British Comedy Guide cast/episode guides; Royal Television Society;
 // BBC-related 2017/2018 announcements and the 2020 audio-special credits.

 const programme = "Peter Kay's Car Share";
 const facts = `Which actor played supermarket assistant manager John Redmond in Car Share?|Peter Kay|Steve Coogan|Johnny Vegas|Jason Manford|Easy|Peter Kay|John Redmond|Lead Actor|Supermarket Assistant Manager|Car Driver|Main Character|Casting
 Who played John's colleague Kayleigh Kitson in Car Share?|Sian Gibson|Sarah Lancashire|Maxine Peake|Sally Lindsay|Easy|Sian Gibson|Kayleigh Kitson|Leading Actress|Promotions Representative|Commuting Partner|Character Casting|Main Role
 What position does John Redmond hold at the supermarket?|Assistant manager|Security guard|Checkout operator|Warehouse porter|Easy|John Redmond|Assistant Manager|Supermarket Employment|Managerial Role|Workplace Status|Staff Hierarchy|Character Job
 What is Kayleigh Kitson's job at the supermarket?|Promotions representative|Store detective|Human resources officer|Pharmacy assistant|Easy|Kayleigh Kitson|Promotions Rep|In Store Advertising|Supermarket Work|Product Campaigns|Character Job|Store Promotions
 What workplace arrangement brings John and Kayleigh together?|A company car-sharing scheme|A joint training course|An overnight stocktake|A supermarket relocation project|Easy|Car Share Scheme|Shared Commute|Workplace Arrangement|John And Kayleigh|Employee Transport|Comedy Premise|Staff Travel
 Which fictional radio station do John and Kayleigh regularly listen to?|Forever FM|Radio Danebury|Heartland FM|Northside Radio|Easy|Forever FM|Car Radio|Pop Classics|Fictional Station|Driving Soundtrack|Radio Jingles|Commuting Music
 Which car model does John drive during most of the television series?|Fiat 500L|Ford Focus|Vauxhall Astra|Renault Clio|Medium|Fiat 500L|John Car|Vehicle Model|Car Share Journeys|Main Setting|Road Comedy|Driving
 Which BBC channel originally broadcast Car Share on television?|BBC One|BBC Two|BBC Three|BBC Four|Easy|BBC One|Original Broadcaster|British Sitcom|2015 Television|Main Channel|BBC Comedy|Broadcast History
 In which year did the first television series of Car Share premiere?|2015|2013|2017|2019|Easy|2015 Premiere|First Series|Debut Year|BBC Television|Comedy Launch|Broadcast Timeline|Original Run
 Which two writers originally created the sitcom Car Share?|Paul Coleman and Tim Reid|Peter Kay and Dave Spikey|Simon Pegg and Jessica Hynes|Graham Linehan and Arthur Mathews|Medium|Paul Coleman|Tim Reid|Programme Creators|Original Concept|Comedy Development|Writing Partnership|Series Origin
 Who directed all twelve televised story episodes of Car Share?|Peter Kay|Paul Coleman|Tim Reid|Gill Isles|Medium|Peter Kay|Series Director|Television Direction|All Twelve Episodes|Production Leadership|Comedy Filming|Director Credit
 Which lead performer also co-wrote Car Share with Peter Kay and Paul Coleman?|Sian Gibson|Sally Lindsay|Maxine Peake|Lisa McGee|Medium|Sian Gibson|Co Writer|Cast And Writing|Comedy Scripts|Paul Coleman|Peter Kay|Creative Team
 Which co-creator was credited as a writer on the first series but not the second?|Tim Reid|Paul Coleman|Sian Gibson|Peter Kay|Medium|Tim Reid|Series One Writer|Writing Credits|Co Creator|First Series Only|Script Team Change|Production History
 Who produced the television episodes of Car Share?|Gill Isles|Jane Featherstone|Rebecca Hodgson|Nicola Shindler|Hard|Gill Isles|Producer|BBC Sitcom|Production Credit|Goodnight Vienna|Production Team|Behind The Scenes
 Which production company made Peter Kay's Car Share?|Goodnight Vienna Productions|Kudos|Baby Cow Productions|Hat Trick Productions|Medium|Goodnight Vienna|Production Company|Peter Kay Sitcom|BBC Commission|Production Credits|British Comedy|Studio Name
 How many episodes were in the first regular television series of Car Share?|Six|Four|Eight|Ten|Easy|Series One|Six Episodes|2015 Run|Episode Count|Original Season|BBC One|Series Structure
 How many episodes were in the second regular series of Car Share?|Four|Six|Eight|Three|Easy|Series Two|Four Episodes|2017 Run|Episode Count|Shorter Season|BBC One|Series Structure
 How many televised story episodes did Car Share have, including the two 2018 specials?|Twelve|Ten|Fourteen|Sixteen|Medium|Twelve Television Episodes|Ten Regular Episodes|Two Specials|Episode Total|2015 To 2018|Complete TV Run|Broadcast Count
 Which BBC online service offered the show's regular series as complete box sets?|BBC iPlayer|BBC Sounds|BBC Red Button|BBC Sport|Easy|BBC iPlayer|Online Premiere|Box Set Release|Digital Viewing|BBC Streaming|2015 Innovation|Distribution
 In which English region were many of Car Share's driving scenes filmed?|Greater Manchester|Cornwall|East Anglia|West Yorkshire|Medium|Greater Manchester|Filming Area|Road Locations|Northern England|Production Geography|Manchester Region|On Location
 Which town associated with Peter Kay was among Car Share's filming locations?|Bolton|Blackpool|Chester|Preston|Medium|Bolton|Peter Kay Hometown|Filming Locations|Greater Manchester|Road Scenes|Local Geography|Production Setting
 Which actor played the supermarket fishmonger Ray in the first series?|Reece Shearsmith|Mark Gatiss|Steve Pemberton|Daniel Rigby|Medium|Reece Shearsmith|Ray|Fishmonger|Series One Guest|Supermarket Colleague|Guest Actor|Casting
 Which actor portrayed the trolley collector known as Ted 2?|Danny Swarsbrick|Mick Miller|Pearce Quigley|Simon Greenall|Medium|Danny Swarsbrick|Ted 2|Trolley Collector|Supermarket Employee|Recurring Character|Supporting Actor|Casting
 Which musician played Steve in Car Share's second series?|Guy Garvey|Richard Hawley|Johnny Flynn|Tim Burgess|Medium|Guy Garvey|Steve|Second Series|Musician Actor|Guest Performer|Casting|Family Connection
 Which band is Guy Garvey, who appeared in Car Share, best known for fronting?|Elbow|Doves|James|The Charlatans|Medium|Guy Garvey|Elbow|Band Frontman|Music Career|Actor Musician|British Rock|Guest Star
 Who voiced John's boss Dave Thompson in the first series?|Simon Greenall|Reece Shearsmith|Conleth Hill|Mick Miller|Hard|Simon Greenall|Dave Thompson|Voice Performance|John Boss|First Series|Telephone Call|Supporting Cast
 Which actor portrayed Elsie, the colleague given a lift after the annual work party?|Conleth Hill|Reece Shearsmith|Pearce Quigley|Guy Garvey|Medium|Conleth Hill|Elsie|Works Party|Series Two Episode Two|Guest Performance|Journey Home|Casting
 Which performer played the cyclist involved in John's road-rage encounter?|Pearce Quigley|Steve Royle|Danny Swarsbrick|Alex Macqueen|Hard|Pearce Quigley|Cyclist|Road Rage|Series Two Opener|Guest Actor|Viral Incident|Driving Conflict
 Who played John's grandmother in the final regular episode of series two?|Loraine Calvert|Judith Barker|Patricia Hodge|Anne Reid|Hard|Loraine Calvert|John Nan|Series Two Finale|Guest Actress|Parcel Delivery|Family Member|Casting
 Which actor portrayed Tony, a friend of John's family, in series one?|Mick Miller|Conleth Hill|Danny Swarsbrick|Pearce Quigley|Hard|Mick Miller|Tony|John Family Friend|Series One Guest|Supporting Actor|Cafeteria Scene|Casting
 Which actress played supermarket colleague Rachel in the first series?|Gemma Facinelli|Sian Gibson|Judith Barker|Loraine Calvert|Hard|Gemma Facinelli|Rachel|Supermarket Colleague|Series One|Guest Actress|Supporting Character|Casting
 What forces John and Kayleigh to take a morning off in the second episode of series one?|An unfortunate incident at work|A road closure caused by flooding|A broken car windscreen|A sudden family wedding|Medium|Series One Episode Two|Unexpected Morning Off|Workplace Incident|Shared Free Time|Growing Friendship|John Redmond|Kayleigh Kitson
 Which of the two commuters is running late in the third episode of series one?|Kayleigh|John|Ted 2|Steve|Medium|Kayleigh Kitson|Running Late|Series One Episode Three|Morning Commute|John Punctuality|Journey Delay|2015 Storyline
 What new piece of equipment is installed in John's car in series one's fourth episode?|A hands-free phone kit|A satellite television|A dashboard camera|A parking sensor system|Medium|Hands Free Phone Kit|Series One Episode Four|Vehicle Upgrade|John Car|Mobile Calls|Dashboard Technology|Comedy Plot
 Whose birthday card does John forget to post in series one's fifth episode?|His grandmother's|Kayleigh's|His mother's|His boss's|Medium|John Nan|Birthday Card|Series One Episode Five|Forgotten Post|Family Obligation|Work Commute|John Redmond
 Which food promotion troubles Kayleigh in the first-series finale?|National blackcurrant jam week|A frozen-pizza promotion|A breakfast-cereal launch|A cheese-tasting weekend|Medium|Blackcurrant Jam|National Jam Week|Series One Finale|Promotions Work|Costume Campaign|Kayleigh Kitson|Supermarket Advertising
 Which Christmas compilation album does Kayleigh play in the summer-set 2016 Car Share sketch?|Now That's What I Call Christmas|Christmas Hits by the Spice Girls|A Very Special Christmas 2|The Best of Slade|Medium|Now Thats What I Call Christmas|2016 Festive Sketch|Summer Setting|Christmas Music|Kayleigh Kitson|Peter Kay Comedy Shuffle|Seasonal Songs
 Why are John and Kayleigh initially commuting separately at the start of series two?|Kayleigh has moved in with her sister|John has lost his driving licence|The supermarket has closed|Kayleigh has bought a new car|Medium|Kayleigh Sister|Change Of Address|Series Two Opener|Separate Commutes|Living Arrangements|Car Share Disruption|Relationship Distance
 What kind of event are the colleagues heading to in the second episode of series two?|Their annual work party|A family christening|A sports awards dinner|A school reunion|Medium|Works Do|Series Two Episode Two|Staff Celebration|Party Journey|Colleagues|Supermarket Social|Evening Out
 What is the dress-up theme of the work party in series two's second episode?|Fancy dress|Black tie|School uniform|Western costume only|Medium|Fancy Dress Party|Series Two Episode Two|Work Celebration|Costume Event|Annual Works Do|Social Outing|2017 Storyline
 Which character needs a lift home after the work party in series two?|Elsie|Rachel|Polly|Toni|Medium|Elsie|Lift Home|Work Party|Series Two Episode Two|Passenger|John Car|Comic Journey
 What does Kayleigh want to take in series two's third episode, despite John's initial objections?|A day off work|A night shift|A week of annual leave abroad|An unpaid training course|Medium|Kayleigh Day Off|Series Two Episode Three|Skipping Work|John Reluctance|Unplanned Outing|Supermarket Shift|Work Life
 Which Greater Manchester town does John plan to visit in series two's third episode?|Wigan|Rochdale|Stockport|Bury|Medium|Wigan|Series Two Episode Three|John Journey|Old Store Manager|Day Trip|Greater Manchester|Breakfast Visit
 Which family member does John ask to wait at his home for a parcel in series two's fourth episode?|His nan|His sister|His uncle|His father|Medium|John Nan|Parcel Delivery|Series Two Episode Four|Family Favour|Home Access|Delivery Arrangements|Final Regular Episode
 Which year saw the second regular series of Car Share broadcast on BBC One?|2017|2016|2018|2020|Easy|2017 Broadcast|Second Series|BBC One|Programme Timeline|Four Episodes|Television Return|Series Date
 What happens between John and Kayleigh at the end of the second regular series?|John rejects Kayleigh's romantic advances|The pair get married|Kayleigh accepts a job overseas|John proposes to Kayleigh|Medium|Series Two Cliffhanger|John Redmond|Kayleigh Kitson|Romantic Rejection|Unresolved Feelings|2017 Ending|Relationship Strain
 What was distinctive about the Car Share special broadcast on 7 May 2018?|It was completely improvised|It was animated|It had no dialogue|It was filmed before a live audience|Medium|Car Share Unscripted|Improvised Episode|7 May 2018|Ad Lib Comedy|John And Kayleigh|2018 Special|Production Format
 Which two performers improvised the dialogue in the 2018 Car Share Unscripted special?|Peter Kay and Sian Gibson|Peter Kay and Guy Garvey|Sian Gibson and Conleth Hill|Peter Kay and Reece Shearsmith|Medium|Peter Kay|Sian Gibson|Unscripted Cast|Improvised Dialogue|2018 Special|Main Duo|Actor Chemistry
 On what date was the final televised episode of Car Share broadcast?|28 May 2018|7 May 2018|2 May 2017|10 April 2020|Medium|28 May 2018|The Finale|Last TV Episode|BBC One|Bank Holiday|Broadcast Date|2018 Conclusion
 How is John and Kayleigh's relationship resolved in the 2018 finale?|They begin a romantic relationship|They decide never to meet again|They become business partners|They move into separate countries|Medium|The Finale|John And Kayleigh|Romantic Resolution|2018 Ending|Will They Wont They|Relationship Development|Final Episode
 In what format did Car Share release an additional special during the 2020 lockdown?|Audio only|Stop-motion animation|A live stage show|A silent film|Medium|2020 Audio Special|Lockdown Production|Sound Only|BBC iPlayer|Radio Style|Remote Recording|Coronavirus Restrictions
 On which date was the Car Share audio-only special released?|10 April 2020|28 May 2018|25 December 2019|1 June 2021|Medium|10 April 2020|Audio Release|Good Friday|2020 Special|BBC iPlayer|Release Date|Lockdown Entertainment
 Which three writers collaborated on the 2020 Car Share audio special?|Peter Kay, Sian Gibson and Paul Coleman|Peter Kay, Tim Reid and Guy Garvey|Sian Gibson, Reece Shearsmith and Steve Coogan|Paul Coleman, Tim Reid and Gill Isles|Medium|Peter Kay|Sian Gibson|Paul Coleman|2020 Audio Special|Writing Credits|Remote Collaboration|Lockdown Script
 Which BAFTA TV category did Car Share win in 2016?|Best Scripted Comedy|Best Reality Programme|Best Soap and Continuing Drama|Best Current Affairs|Medium|BAFTA 2016|Best Scripted Comedy|Award Winner|British Academy|Programme Recognition|BBC Sitcom|Television Honour
 Which BAFTA TV acting award did Peter Kay win for Car Share in 2016?|Best Male Performance in a Comedy Programme|Best Leading Actor in a Drama|Best Supporting Actor|Best Entertainment Presenter|Medium|Peter Kay|BAFTA 2016|Male Comedy Performance|Acting Award|John Redmond|British Academy|Individual Recognition`;

 const FIRST_ID = 15272;
 let sequence = 0;
 const questions = facts.trim().split('\n').map(line => {
   const id = 'tv_' + String(FIRST_ID + sequence).padStart(5, '0');
   const fields = line.trim().split('|').map(s => s.trim());
   if (fields.length !== 13) throw new Error(`Expected 13 fields for ${id}; got ${fields.length}`);
   const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...individualTags] = fields;
   if ([question, correctAnswer, wrong1, wrong2, wrong3, ...individualTags].some(x => !x))
     throw new Error(`Empty question field at ${id}`);
   if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || individualTags.length !== 7)
     throw new Error(`Invalid difficulty or individual tags at ${id}`);
   const answers = [wrong1, wrong2, wrong3];
   if (new Set([correctAnswer, ...answers].map(s => s.toLocaleLowerCase('en-GB'))).size !== 4)
     throw new Error(`Duplicate answer choices at ${id}`);
   answers.splice(sequence % 4, 0, correctAnswer);
   const tags = [...new Map([
     'Television', 'British Television', 'British Comedy', 'Sitcom', 'BBC One',
     'Peter Kay\'s Car Share', 'Programme: Peter Kay\'s Car Share',
     '2015-2020', ...individualTags, correctAnswer
   ].map(tag => [tag.toLocaleLowerCase('en-GB'), tag])).values()];
   sequence++;
   return {id, category: 'Television', programme, question, answers,
     correctAnswer, difficulty, tags, dailyEligible: true};
 });

 if (!questions.length || questions[0].id !== 'tv_15272' ||
     new Set(questions.map(q => q.id)).size !== questions.length ||
     new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length)
   throw new Error('Duplicate ID or question in Pack 329');
 if (questions.some(q => q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
     q.tags.length < 14 || !q.tags.includes("Programme: Peter Kay's Car Share") ||
     q.dailyEligible !== true))
   throw new Error('Export validation failed for Pack 329');
 module.exports = questions;
