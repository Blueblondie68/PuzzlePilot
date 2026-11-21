
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
// 21 November 2026 — Pack 329 storyline audit: the 55 original questions
// and IDs tv_15272–tv_15326 remain intact. Additions fill gaps across
// all ten regular episodes, the 2016 sketch, both 2018 specials, and the
// 2020 audio episode. Source for episode details is tagged per question.
const auditAdditions = [
  {
    "id": "tv_36968",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what navigation device initially makes John struggle to find Kayleigh's house?",
    "answers": [
      "His satnav",
      "A paper road atlas",
      "A taxi radio",
      "A handwritten route card"
    ],
    "correctAnswer": "His satnav",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 1",
      "Series episode storyline",
      "Correct answer: His satnav",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "First Pickup",
      "Satnav Problems",
      "First Meeting",
      "Commute"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36969",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what does Kayleigh accidentally spill over John's clothes during their first shared journey?",
    "answers": [
      "A hot cup of coffee",
      "A bottle of urine",
      "A pot of yoghurt",
      "A carton of orange juice"
    ],
    "correctAnswer": "A bottle of urine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 1",
      "Series episode storyline",
      "Correct answer: A bottle of urine",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "First Day Disaster",
      "Urine Spill",
      "John Redmond",
      "Awkward Start"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36970",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what false rumour does John have to correct after Diane from non-foods spreads it?",
    "answers": [
      "That he is leaving the supermarket",
      "That he has won the lottery",
      "That he is gay",
      "That he owns the supermarket"
    ],
    "correctAnswer": "That he is gay",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 1",
      "Series episode storyline",
      "Correct answer: That he is gay",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Diane Non Foods",
      "False Rumour",
      "John Personal Life",
      "Opening Episode"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36971",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what happens to longtime trolley collector Old Ted before the second episode?",
    "answers": [
      "He wins a holiday",
      "He retires to Spain",
      "He is promoted to manager",
      "He dies"
    ],
    "correctAnswer": "He dies",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 2",
      "Series episode storyline",
      "Correct answer: He dies",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Old Ted",
      "Trolley Collector",
      "Staff Bereavement",
      "Morning Off"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36972",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, which elderly neighbour of Kayleigh's goes walking with her and a dog?",
    "answers": [
      "Ken",
      "Tony",
      "Ian",
      "Dave"
    ],
    "correctAnswer": "Ken",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 2",
      "Series episode storyline",
      "Correct answer: Ken",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Ken Neighbour",
      "Dog Walking",
      "Kayleigh Friend",
      "Second Episode"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36973",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what innocent meaning does Kayleigh mistakenly give to the word dogging?",
    "answers": [
      "Playing with a dog in the park",
      "Taking a dog for a walk",
      "Working in a pet shop",
      "Training guard dogs"
    ],
    "correctAnswer": "Taking a dog for a walk",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 2",
      "Series episode storyline",
      "Correct answer: Taking a dog for a walk",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Dogging Misunderstanding",
      "Ken Neighbour",
      "Second Episode",
      "Wordplay"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36974",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, which online dating website helps Kayleigh arrange a lunchtime date in the third episode?",
    "answers": [
      "LoveMatch",
      "SoulConnect",
      "Heartsearchers",
      "DateNight"
    ],
    "correctAnswer": "Heartsearchers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 3",
      "Series episode storyline",
      "Correct answer: Heartsearchers",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Heartsearchers",
      "Kayleigh Online Date",
      "Lunch Meeting",
      "Third Episode"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36975",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what is revealed about Kayleigh's date Jap Si when she has learned Japanese to impress him?",
    "answers": [
      "He is her supermarket boss",
      "He is John's cousin",
      "He lives in America",
      "He is not Japanese"
    ],
    "correctAnswer": "He is not Japanese",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 3",
      "Series episode storyline",
      "Correct answer: He is not Japanese",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Jap Si",
      "Date Surprise",
      "Japanese Language",
      "Third Episode"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36976",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what is the first name of the former fiancée whose engagement John broke off?",
    "answers": [
      "Charlotte",
      "Rachel",
      "Mandy",
      "Elsie"
    ],
    "correctAnswer": "Charlotte",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 3",
      "Series episode storyline",
      "Correct answer: Charlotte",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Charlotte",
      "John Ex Fiancee",
      "Commitment Problems",
      "Romantic Backstory"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36977",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, which pop superstar had Kayleigh seen in concert the night before the fourth episode?",
    "answers": [
      "Madonna",
      "Beyoncé",
      "Kylie Minogue",
      "Lady Gaga"
    ],
    "correctAnswer": "Beyoncé",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 4",
      "Series episode storyline",
      "Correct answer: Beyoncé",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Beyonce Concert",
      "Kayleigh Excitement",
      "Fourth Episode",
      "Pop Star"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36978",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what food does a furious builder rub on John's windscreen after a road-rage incident?",
    "answers": [
      "A meat pie",
      "A sausage roll",
      "An egg sandwich",
      "A cheese toastie"
    ],
    "correctAnswer": "An egg sandwich",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 4",
      "Series episode storyline",
      "Correct answer: An egg sandwich",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Egg Sandwich",
      "Builder",
      "Road Rage",
      "Car Windscreen"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36979",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what fear does Kayleigh reveal when they visit a car wash?",
    "answers": [
      "Fear of heights",
      "Fear of spiders",
      "Fear of crowds",
      "Fear of water"
    ],
    "correctAnswer": "Fear of water",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 4",
      "Series episode storyline",
      "Correct answer: Fear of water",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Car Wash",
      "Water Phobia",
      "Panic Attack",
      "John Helps"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36980",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, which Hanson hit accompanies Kayleigh's aquatic fantasy sequence?",
    "answers": [
      "MMMBop",
      "Penny & Me",
      "Where's the Love",
      "I Will Come to You"
    ],
    "correctAnswer": "MMMBop",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 4",
      "Series episode storyline",
      "Correct answer: MMMBop",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "MMMBop",
      "Hanson",
      "Underwater Fantasy",
      "Car Wash"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36981",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, how does John injure himself while trying to post his grandmother's birthday card?",
    "answers": [
      "He traps his hand in a car door",
      "He falls and hurts his arm",
      "He slips down a supermarket staircase",
      "He burns himself on a hot drink"
    ],
    "correctAnswer": "He falls and hurts his arm",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 5",
      "Series episode storyline",
      "Correct answer: He falls and hurts his arm",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Nana Rose",
      "Birthday Card",
      "Arm Injury",
      "Postbox Fall"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36982",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, which two young relatives does Kayleigh give a school lift to in the fifth episode?",
    "answers": [
      "Lucy and Daniel",
      "Mia and Jack",
      "Chloe and Alfie",
      "Hannah and Oliver"
    ],
    "correctAnswer": "Chloe and Alfie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 5",
      "Series episode storyline",
      "Correct answer: Chloe and Alfie",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Chloe And Alfie",
      "Kayleigh Family",
      "School Run",
      "Fifth Episode"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36983",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, who has to take over the driving when John is hurt in the fifth episode?",
    "answers": [
      "Rachel",
      "Mandy",
      "Nana Rose",
      "Kayleigh"
    ],
    "correctAnswer": "Kayleigh",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 5",
      "Series episode storyline",
      "Correct answer: Kayleigh",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Kayleigh Drives",
      "John Injured Arm",
      "Role Reversal",
      "Fifth Episode"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36984",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what mistake with the car's fuel brings the fifth episode's journey to a halt?",
    "answers": [
      "Kayleigh puts petrol into a diesel car",
      "John runs the tank dry",
      "Kayleigh puts diesel into a petrol car",
      "John fills the windscreen washer with fuel"
    ],
    "correctAnswer": "Kayleigh puts petrol into a diesel car",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 5",
      "Series episode storyline",
      "Correct answer: Kayleigh puts petrol into a diesel car",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Wrong Fuel",
      "Diesel Car",
      "Petrol Mistake",
      "Breakdown"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36985",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, which relative is Kayleigh preparing to move in with at the end of the first series?",
    "answers": [
      "Her brother Kieran",
      "Her sister Mandy",
      "Her aunt Rose",
      "Her grandmother Elsie"
    ],
    "correctAnswer": "Her sister Mandy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 6",
      "Series episode storyline",
      "Correct answer: Her sister Mandy",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Mandy",
      "Moving Home",
      "Last Car Share",
      "First Series Finale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36986",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what fruit costume must Kayleigh wear to promote jam in the first-series finale?",
    "answers": [
      "A strawberry",
      "An orange",
      "A blackcurrant",
      "A pineapple"
    ],
    "correctAnswer": "A blackcurrant",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 6",
      "Series episode storyline",
      "Correct answer: A blackcurrant",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Blackcurrant Costume",
      "National Jam Week",
      "Supermarket Promotion",
      "Series One Finale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36987",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what light-up gift does John give Kayleigh on their last journey of the first series?",
    "answers": [
      "A bedside clock",
      "A novelty torch",
      "A Christmas tree",
      "A heart-shaped lamp"
    ],
    "correctAnswer": "A heart-shaped lamp",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 6",
      "Series episode storyline",
      "Correct answer: A heart-shaped lamp",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Heart Lamp",
      "Farewell Gift",
      "John To Kayleigh",
      "Episode Six"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36988",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, which compilation album does Kayleigh give John before moving away?",
    "answers": [
      "Now That's What I Call Music! 48",
      "Now That's What I Call Music! 80",
      "The Very Best of Radio 1",
      "The Greatest Hits of the 1990s"
    ],
    "correctAnswer": "Now That's What I Call Music! 48",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 1 episode 6",
      "Series episode storyline",
      "Correct answer: Now That's What I Call Music! 48",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Now 48",
      "Goodbye Present",
      "Music Collection",
      "Series One Finale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36989",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, which BBC Christmas programme first showed the extra summertime car-journey sketch in 2016?",
    "answers": [
      "The One Show Christmas Special",
      "Peter Kay's Christmas Comedy Shuffle",
      "Children in Need Rocks",
      "Comic Relief's Red Nose Day"
    ],
    "correctAnswer": "Peter Kay's Christmas Comedy Shuffle",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "2016 Christmas sketch",
      "Series episode storyline",
      "Correct answer: Peter Kay's Christmas Comedy Shuffle",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Christmas Comedy Shuffle",
      "2016 Short",
      "Extra Scene",
      "Christmas Eve"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36990",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what two types of public transport does Kayleigh use after moving to her sister's house?",
    "answers": [
      "Tram and ferry",
      "Taxi and coach",
      "Bus and train",
      "Metro and bicycle"
    ],
    "correctAnswer": "Bus and train",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 2 episode 1",
      "Series episode storyline",
      "Correct answer: Bus and train",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Mandy New Home",
      "Separate Commutes",
      "Series Two Opening",
      "Public Transport"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36991",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what happens to a video of John arguing with a cyclist in the second-series opener?",
    "answers": [
      "It is screened at the staff Christmas party",
      "It is used in a driving test",
      "It becomes a Forever FM advert",
      "It goes viral online"
    ],
    "correctAnswer": "It goes viral online",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 2 episode 1",
      "Series episode storyline",
      "Correct answer: It goes viral online",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Cyclist Altercation",
      "Viral Video",
      "Road Rage",
      "Series Two Opening"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36992",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what hobby does Kayleigh's brother-in-law Steve enthusiastically discuss with John?",
    "answers": [
      "Motorbikes",
      "Fishing",
      "Model railways",
      "Birdwatching"
    ],
    "correctAnswer": "Motorbikes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 2 episode 1",
      "Series episode storyline",
      "Correct answer: Motorbikes",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Steve",
      "Guy Garvey",
      "Motorbike Enthusiast",
      "Series Two Opening"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36993",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, how much extra time does John say the renewed car-share arrangement will add to his journey?",
    "answers": [
      "Five minutes",
      "45 minutes",
      "15 minutes",
      "Two hours"
    ],
    "correctAnswer": "45 minutes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 2 episode 1",
      "Series episode storyline",
      "Correct answer: 45 minutes",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Longer Commute",
      "45 Minutes",
      "John Sacrifice",
      "Renewed Car Share"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36994",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, which wizard is John dressed as for the supermarket's fancy-dress party?",
    "answers": [
      "Gandalf",
      "Merlin",
      "Harry Potter",
      "Dumbledore"
    ],
    "correctAnswer": "Harry Potter",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 2 episode 2",
      "Series episode storyline",
      "Correct answer: Harry Potter",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "John Costume",
      "Harry Potter",
      "Works Party",
      "Series Two Episode Two"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36995",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, which Harry Potter character is Kayleigh dressed as for the same party?",
    "answers": [
      "Hermione Granger",
      "Dobby",
      "Professor McGonagall",
      "Hagrid"
    ],
    "correctAnswer": "Hagrid",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 2 episode 2",
      "Series episode storyline",
      "Correct answer: Hagrid",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Kayleigh Costume",
      "Hagrid",
      "Works Party",
      "Fancy Dress"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36996",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, which blue cartoon character is Elsie dressed as on the journey home?",
    "answers": [
      "Smurfette",
      "Bluey",
      "Sonic the Hedgehog",
      "Stitch"
    ],
    "correctAnswer": "Smurfette",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 2 episode 2",
      "Series episode storyline",
      "Correct answer: Smurfette",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Elsie Costume",
      "Smurfette",
      "Work Party",
      "Fancy Dress"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36997",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what item has Elsie left in the car, interrupting John and Kayleigh's romantic moment?",
    "answers": [
      "Her handbag",
      "Her inhaler",
      "Her mobile phone",
      "Her purse"
    ],
    "correctAnswer": "Her inhaler",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 2 episode 2",
      "Series episode storyline",
      "Correct answer: Her inhaler",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Elsie Inhaler",
      "Interrupted Romance",
      "Return Journey",
      "After Party"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36998",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what is the nickname of John's friend Ian Litchfield, the manager of the Wigan supermarket?",
    "answers": [
      "Big Ian",
      "Chippy",
      "Litchy",
      "Lifty"
    ],
    "correctAnswer": "Litchy",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 2 episode 3",
      "Series episode storyline",
      "Correct answer: Litchy",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Ian Litchfield",
      "Litchy",
      "Wigan Manager",
      "Day Off"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36999",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, where do John and Kayleigh go after delivering paperwork in Wigan and skipping work?",
    "answers": [
      "Blackpool Pleasure Beach",
      "Chester Zoo",
      "Alton Towers",
      "Seaview Safari Park"
    ],
    "correctAnswer": "Seaview Safari Park",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 2 episode 3",
      "Series episode storyline",
      "Correct answer: Seaview Safari Park",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Seaview Safari Park",
      "Unexpected Day Out",
      "Third Episode",
      "Playing Truant"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37000",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what animals climb all over John's car during their unplanned day at the safari park?",
    "answers": [
      "Monkeys",
      "Lions",
      "Giraffes",
      "Peacocks"
    ],
    "correctAnswer": "Monkeys",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 2 episode 3",
      "Series episode storyline",
      "Correct answer: Monkeys",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Safari Park",
      "Monkeys",
      "Car Climbing Frame",
      "Third Episode"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37001",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what closes before John can return a troublesome baby animal at the end of the safari-park trip?",
    "answers": [
      "The supermarket",
      "The safari park",
      "The local police station",
      "The car wash"
    ],
    "correctAnswer": "The safari park",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 2 episode 3",
      "Series episode storyline",
      "Correct answer: The safari park",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Safari Park Closing",
      "Baby Monkey",
      "Unplanned Passenger",
      "Rescue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37002",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what problem prevents Kayleigh leaving her sister's house as John arrives to collect her?",
    "answers": [
      "Her car has a puncture",
      "The road is flooded",
      "She cannot find her house key",
      "She is waiting for a plumber"
    ],
    "correctAnswer": "She cannot find her house key",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 2 episode 4",
      "Series episode storyline",
      "Correct answer: She cannot find her house key",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Missing House Key",
      "Mandy House",
      "John Helps",
      "Series Two Finale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37003",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what kind of public transport does Kayleigh leave John's car to take after declaring her love?",
    "answers": [
      "A bus",
      "A tram",
      "A train",
      "A taxi"
    ],
    "correctAnswer": "A taxi",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 2 episode 4",
      "Series episode storyline",
      "Correct answer: A taxi",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Kayleigh Leaves Car",
      "Taxi",
      "Love Declaration",
      "Series Two Finale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37004",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what does Kayleigh miss hearing on Forever FM after leaving John's car?",
    "answers": [
      "A romantic dedication John arranged for her",
      "A competition result",
      "A traffic report about their street",
      "A surprise celebrity interview"
    ],
    "correctAnswer": "A romantic dedication John arranged for her",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "Series 2 episode 4",
      "Series episode storyline",
      "Correct answer: A romantic dedication John arranged for her",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Forever FM Dedication",
      "Missed Message",
      "John Redmond",
      "Romantic Misunderstanding"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37005",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, where does the improvised Car Share special fit chronologically within the story?",
    "answers": [
      "After the final 2018 episode",
      "Before the end of series two",
      "Before their first meeting",
      "After the 2020 audio special"
    ],
    "correctAnswer": "Before the end of series two",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "2018 finale specials",
      "Series episode storyline",
      "Correct answer: Before the end of series two",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Car Share Unscripted",
      "Story Chronology",
      "2018 Broadcast",
      "Production Order"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37006",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what personal detail does Kayleigh reveal about her first boyfriend in the improvised special?",
    "answers": [
      "He was a supermarket manager",
      "He was a schoolteacher",
      "His name was Danny",
      "He worked for Forever FM"
    ],
    "correctAnswer": "His name was Danny",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "2018 finale specials",
      "Series episode storyline",
      "Correct answer: His name was Danny",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Unscripted Special",
      "First Boyfriend Danny",
      "Kayleigh Past",
      "Improvised Dialogue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37007",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what music-playing gift does John send Kayleigh at the start of the 2018 finale?",
    "answers": [
      "A new car radio",
      "A vinyl record player",
      "A karaoke microphone",
      "A Walkman with his own recorded song"
    ],
    "correctAnswer": "A Walkman with his own recorded song",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "2018 finale specials",
      "Series episode storyline",
      "Correct answer: A Walkman with his own recorded song",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Walkman",
      "John Original Song",
      "Apology Gift",
      "2018 Finale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37008",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, which Take That hit is parodied in John's music-video fantasy during the finale?",
    "answers": [
      "Back for Good",
      "Pray",
      "Relight My Fire",
      "Never Forget"
    ],
    "correctAnswer": "Back for Good",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "2018 finale specials",
      "Series episode storyline",
      "Correct answer: Back for Good",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Back For Good",
      "Take That",
      "Fantasy Music Video",
      "2018 Finale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37009",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what animal does Kayleigh stop traffic to rescue near the end of the 2018 finale?",
    "answers": [
      "A fox",
      "A hedgehog",
      "A badger",
      "A swan"
    ],
    "correctAnswer": "A hedgehog",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "2018 finale specials",
      "Series episode storyline",
      "Correct answer: A hedgehog",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Hedgehog Rescue",
      "Traffic Collision",
      "2018 Finale",
      "Animal In Road"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37010",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, what happens to John's car door during the final traffic incident?",
    "answers": [
      "It becomes jammed after a puncture",
      "It falls off at the supermarket",
      "A passing van knocks it off",
      "It is deliberately removed by a mechanic"
    ],
    "correctAnswer": "A passing van knocks it off",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "2018 finale specials",
      "Series episode storyline",
      "Correct answer: A passing van knocks it off",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Car Door Knocked Off",
      "Passing Van",
      "Final Incident",
      "2018 Finale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37011",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, how do John and Kayleigh travel home together after losing the car in the finale?",
    "answers": [
      "On a train",
      "In a taxi",
      "On a tandem bicycle",
      "On a bus"
    ],
    "correctAnswer": "On a bus",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "2018 finale specials",
      "Series episode storyline",
      "Correct answer: On a bus",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Final Bus Journey",
      "John And Kayleigh",
      "2018 Finale",
      "Happy Ending"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37012",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, which old-fashioned comedian is among the subjects John and Kayleigh reminisce about in the audio special?",
    "answers": [
      "Benny Hill",
      "Tommy Cooper",
      "Eric Morecambe",
      "Norman Wisdom"
    ],
    "correctAnswer": "Benny Hill",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "2020 audio special",
      "Series episode storyline",
      "Correct answer: Benny Hill",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Benny Hill",
      "Reminiscences",
      "Audio Episode",
      "2020 Special"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37013",
    "category": "Television",
    "programme": "Peter Kay's Car Share",
    "question": "In Peter Kay's Car Share, how does the 2020 audio-only journey end differently from the television episodes?",
    "answers": [
      "It ends with the pair at a wedding",
      "It ends when they arrive at work",
      "It ends at a ferry terminal",
      "It ends with a night-time return trip"
    ],
    "correctAnswer": "It ends when they arrive at work",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "BBC One",
      "Peter Kay's Car Share",
      "Programme: Peter Kay's Car Share",
      "2015–2020",
      "2020 audio special",
      "Series episode storyline",
      "Correct answer: It ends when they arrive at work",
      "Source: https://en.wikipedia.org/wiki/Peter_Kay%27s_Car_Share",
      "UK English",
      "Audio Special",
      "Arrival At Work",
      "One Way Journey",
      "2020"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if (questions.length !== 101 ||
 questions[0].id !== 'tv_15272' || questions[54].id !== 'tv_15326' ||
 auditAdditions[0].id !== 'tv_36968' ||
 auditAdditions[auditAdditions.length-1].id !== 'tv_37013' ||
 new Set(questions.map(q=>q.id)).size !== questions.length ||
 new Set(questions.map(q=>q.question.toLowerCase().trim())).size !== questions.length ||
 questions.some(q=>q.category !== 'Television' ||
 q.programme !== "Peter Kay's Car Share" ||
 q.answers.length !== 4 ||
 new Set(q.answers.map(a=>a.toLowerCase().trim())).size !== 4 ||
 q.answers.filter(a=>a===q.correctAnswer).length !== 1 ||
 !q.tags.includes("Programme: Peter Kay's Car Share") ||
 q.tags.length < 14 || q.dailyEligible !== true) ||
 auditAdditions.some(q=>!q.question.includes("Peter Kay's Car Share")||q.tags.length<16))
 throw new Error('Pack 329 post-audit QA failed');
module.exports = questions;
