
 // quiz_pack345.js — PuzzlePilot Bigggggg Quiz
 // The Larkins (2021–2022), ITV adaptation.
 // Two regular series and the 2021 Christmas special.
 // 78 questions; IDs tv_16545–tv_16622.
 // Seven individually selected specialist tags per question.

 const facts = `
 Who played Pop Larkin in ITV's The Larkins?|Bradley Walsh|David Jason|Peter Davison|Robert Bathurst|Easy|Pop Larkin|Bradley Walsh|Lead Actor|2021 Casting|Larkin Patriarch|Reboot|Family Comedy
 Who portrayed Ma Larkin in The Larkins?|Joanna Scanlan|Pam Ferris|Amelia Bullmore|Selina Griffiths|Easy|Ma Larkin|Joanna Scanlan|Lead Actress|Family Matriarch|2021 Cast|Domestic Life|Larkin Household
 Who played Mariette Larkin in the first series?|Sabrina Bartlett|Joelle Rae|Lydia Page|Natalie Mitson|Easy|Mariette Larkin|Sabrina Bartlett|Series One|Actress|Eldest Daughter|Casting|2021
 Which actress replaced Sabrina Bartlett as Mariette for series two?|Joelle Rae|Rosie Coleman|Lola Shepelev|Davina Coleman|Medium|Joelle Rae|Mariette Recast|Series Two|2022 Casting|Returning Character|Actress|Programme Changes
 Who played Cedric 'Charley' Charlton in The Larkins?|Tok Stephen|Philip Franks|Stephen Hagan|Barney Walsh|Easy|Tok Stephen|Charley Charlton|Tax Investigator|Romantic Lead|2021 Cast|Mariette Romance|Actor
 Which actor played the village vicar?|Peter Davison|Robert Bathurst|Kriss Dosanjh|Tony Gardner|Easy|Peter Davison|Village Vicar|Clergy|2021 Cast|Church|Parish|Supporting Actor
 Who played PC Harness in The Larkins?|Barney Walsh|Bradley Walsh|Tok Stephen|Liam Middleton|Medium|Barney Walsh|PC Harness|Village Constable|Police|Cast Member|2021 Series|Law Enforcement
 Which actor portrayed the Brigadier?|Kriss Dosanjh|Peter Davison|Robert Bathurst|Stephen Hagan|Medium|Kriss Dosanjh|Brigadier|Retired Officer|Supporting Role|Casting|Village Regular|Military Character
 Who played Miss Edith Pilchester?|Amelia Bullmore|Joanna Scanlan|Selina Griffiths|Katherine Kingsley|Medium|Amelia Bullmore|Edith Pilchester|Village Resident|Charity|Actress|Supporting Character|Householder
 Which actress portrayed Miss Chand, who helps with the railway rescue?|Seeta Indrani|Natalie Mitson|Lydia Page|Lucy Allix|Medium|Seeta Indrani|Miss Chand|Schoolteacher|Railway Rescue|Supporting Actress|2021 Cast|Children
 Who played wealthy villager Johnny Delamere?|Robert Bathurst|Tony Gardner|Peter Davison|Bradley Walsh|Medium|Robert Bathurst|Johnny Delamere|Village VIP|Actor|Supporting Cast|Local Society|2021 Series
 Who played Mariette's rival suitor Tom Fisher?|Stephen Hagan|Tok Stephen|Barney Walsh|Liam Middleton|Medium|Stephen Hagan|Tom Fisher|Love Triangle|Property Developer|Series One|Mariette Suitor|Actor
 Who played Alec Norman, an antagonist of the Larkins?|Tony Gardner|Robert Bathurst|Kriss Dosanjh|Peter Davison|Medium|Tony Gardner|Alec Norman|Village Rival|Gossip|2021 Cast|Supporting Character|Local Politics
 Which actress portrayed Alec Norman's wife Norma?|Selina Griffiths|Amelia Bullmore|Joanna Scanlan|Morgana Robinson|Medium|Selina Griffiths|Norma Norman|Alec Wife|Supporting Actress|2022 Storyline|Neighbour Relations|Confession
 Which actress played Primrose Larkin?|Lydia Page|Sabrina Bartlett|Lola Shepelev|Joelle Rae|Easy|Lydia Page|Primrose Larkin|Daughter|Journalism Ambition|Family Cast|School Leaver|2021 Series
 Who played Montgomery Larkin?|Liam Middleton|Barney Walsh|Hector Bateman-Harden|Tok Stephen|Medium|Liam Middleton|Montgomery Larkin|Son|Pram Race|Young Cast|Family Character|2021 Series
 Who portrayed Victoria Larkin?|Lola Shepelev|Rosie Coleman|Davina Coleman|Lydia Page|Medium|Lola Shepelev|Victoria Larkin|Daughter|Young Actress|Larkin Children|2021 Cast|Family
 Who played Zinnia Larkin in the first series?|Davina Coleman|Rosie Coleman|Summer Miller|Sienna Miller|Medium|Davina Coleman|Zinnia Larkin|Twin Daughter|Series One Casting|Child Actor|Petunia Sister|2021
 Who played Petunia Larkin in the first series?|Rosie Coleman|Davina Coleman|Summer Miller|Lola Shepelev|Medium|Rosie Coleman|Petunia Larkin|Twin Daughter|Series One Casting|Child Actress|Zinnia Sister|2021
 Which actress played the Jerebohms' formidable Pinkie in series two?|Morgana Robinson|Selina Griffiths|Amelia Bullmore|Samantha Spiro|Medium|Morgana Robinson|Pinkie Jerebohm|New Neighbours|Second Series|Village Feud|Character Casting|2022
 Who played Cuthbert Jerebohm?|Julian Rhind-Tutt|Tony Gardner|Robert Bathurst|Peter Davison|Medium|Julian Rhind Tutt|Cuthbert Jerebohm|Pinkie Husband|Second Series|Bluff Court|Antagonist|Cast Member
 Which actor played the young Reverend Ian Candy in series two?|Maxim Ays|Tok Stephen|Stephen Hagan|Barney Walsh|Medium|Maxim Ays|Reverend Ian Candy|Primrose Romance|2022 Cast|Young Clergyman|Church|Series Two
 Which actress played Ma's visiting sister Bertha?|Samantha Spiro|Katherine Kingsley|Selina Griffiths|Amelia Bullmore|Hard|Samantha Spiro|Aunt Bertha|Ma Sister|Family Visitor|Episode Five|2021 Cast|Guest Actress
 Who played glamorous visitor Angela Snow?|Katherine Kingsley|Joelle Rae|Natalie Mitson|Seeta Indrani|Hard|Katherine Kingsley|Angela Snow|Village Gossip|Series One Finale|Visitor|Actress|Family Rumours
 Which actress played Mariette's village rival Pauline?|Natalie Mitson|Lydia Page|Sabrina Bartlett|Francesca Wilson Waterworth|Medium|Natalie Mitson|Pauline|Mariette Rival|Village Youth|Romantic Conflict|2021 Cast|Supporting Actress
 Who portrayed the Larkins' friend Libby Fothergill?|Francesca Wilson Waterworth|Joelle Rae|Lucy Allix|Lola Shepelev|Hard|Francesca Wilson Waterworth|Libby Fothergill|Young Cast|Village Friends|2021 Programme|Supporting Character|Actress
 Who wrote the 2021 adaptation The Larkins?|Simon Nye|Bob Larbey|Carla Lane|Roy Clarke|Medium|Simon Nye|Screenwriter|Adaptation|Television Scripts|Writer Credits|2021 Production|Comedy Drama
 Who directed the main television series The Larkins?|Andy de Emmony|Gareth Gwenlan|Sydney Lotterby|John Howard Davies|Medium|Andy De Emmony|Director|ITV Production|Behind Scenes|2021 To 2022|Programme Credits|Television Direction
 Who composed music for the 2021 adaptation?|Nick Green|Ronnie Hazlehurst|John Barry|Tony Hatch|Hard|Nick Green|Composer|Original Score|Music Credits|Soundtrack|2021 Drama|Production Team
 In what year did the first series of The Larkins premiere?|2021|2019|2020|2022|Easy|2021 Premiere|Broadcast Year|Series One|ITV Launch|Television Revival|Debut|Programme History
 In what year did the second and final series of The Larkins air?|2022|2021|2023|2024|Easy|2022|Series Two|Final Run|Broadcast Year|Last Series|Programme Timeline|ITV
 How many regular series of The Larkins were made?|Two|One|Three|Four|Easy|Two Series|2021 And 2022|Series Count|Production Length|British Drama|Original Run|Episodes
 How many episodes of The Larkins were broadcast including the 2021 Christmas special?|Thirteen|Twelve|Fourteen|Twenty|Medium|Thirteen Episodes|Episode Total|Christmas Special|Two Series|Broadcast Count|2021 To 2022|Series Structure
 Which broadcaster showed The Larkins in the United Kingdom?|ITV|BBC One|Channel 4|Sky One|Easy|ITV|Original Channel|Commercial Television|Broadcaster|Sunday Evening|UK Drama|2021 Premiere
 Which earlier ITV series featured David Jason and Pam Ferris as Pop and Ma?|The Darling Buds of May|Heartbeat|Wild at Heart|Home to Roost|Easy|Darling Buds Of May|David Jason|Pam Ferris|1991 Series|Previous Adaptation|Casting Comparison|Television History
 What event is being prepared in the village during the opening episode?|The May Day Fair|A harvest auction|A bonfire parade|A summer regatta|Easy|May Day Fair|Series One Premiere|Village Festival|Community Event|2021 Episode|Opening Story|Charity Auction
 Which daughter says she wants to leave home and see the world in episode one?|Mariette|Primrose|Victoria|Petunia|Easy|Mariette Larkin|Travel Plans|First Episode|Leaving Home|Family Conflict|Personal Independence|2021
 Which outsider pressures Miss Pilchester to sell her home in episode one?|Mr Rance|Tom Fisher|Alec Norman|Johnny Delamere|Medium|Mr Rance|Miss Pilchester House|Property Pressure|Series One Premiere|London Buyer|Village Dispute|Home Sale
 What expensive car does Pop buy Ma in the opening episode?|A Rolls-Royce|A Bentley|A Jaguar|An Aston Martin|Easy|Rolls Royce|Pop Gift|Ma Larkin|First Episode|Luxury Car|Village Reputation|Family Purchase
 Who accidentally creates the painting mistaken for a Turner at the May Day auction?|Montgomery Larkin|Charley Charlton|Miss Pilchester|Tom Fisher|Medium|Montgomery Painting|Turner Mix Up|May Day Auction|Alec Norman|Series One Premiere|Art Mistake|Charity Sale
 In the railway rescue episode, which job does Charley decide to resign from?|The tax office|A law firm|A veterinary practice|A local newspaper|Medium|Charley Resignation|Tax Office|Railway Rescue Episode|Series One|Career Choice|Mariette Romance|Job Change
 Which holiday guests do Pop and Ma help in Margate?|A wedding couple|A school choir|A football team|A theatre troupe|Medium|Margate Hotel|Wedding Guests|Controlling Mothers|Pop And Ma|Episode Three|Seaside Holiday|Newlyweds
 What sort of race does Montgomery prepare for in series one's second episode?|A pram race|A cycle race|A horse race|A rowing race|Medium|Village Pram Race|Montgomery Larkin|Episode Two|Local Contest|Homemade Vehicle|Village Festivities|Family Antics
 Who tries to undermine the Larkins by intervening with Charley in the second episode?|Alec Norman|Johnny Delamere|PC Harness|Miss Chand|Medium|Alec Norman|Charley Charlton|Tax Trouble|Episode Two|Village Antagonist|Interference|Series One
 Where do Pop and Ma go for a weekend break in the first series?|Margate|Brighton|Whitstable|Southend|Easy|Margate Holiday|Pop And Ma|Seaside Trip|Episode Three|Kent Coast|Hotel|Romantic Break
 What enormous household item is delivered while Charley and Mariette mind the children?|A television aerial|A new piano|A refrigerator|A garden shed|Medium|Television Aerial|Wilf Delivery|Episode Three|Home Technology|Charley And Mariette|Farm Household|Weekend Away
 Whose date with Mariette upsets Charley during the Margate episode?|Tom Fisher's|PC Harness's|Alec Norman's|Johnny Delamere's|Medium|Mariette Date|Tom Fisher|Charley Jealousy|Episode Three|Romance|Village Rivalry|Courtship
 What village service does Pop try to save from closure in the fourth episode?|The railway station|The post office|The library|The fire station|Easy|Railway Closure|Pop Campaign|Local Station|Episode Four|Village Transport|Community Rescue|2021
 Which character recruits schoolchildren to help Pop's railway rescue?|Miss Chand|Miss Pilchester|Norma Norman|Pauline|Medium|Miss Chand|Schoolchildren|Railway Campaign|Train Passengers|Series One Episode Four|Community Mobilisation|Education
 What produce does Pop plan to sell from the train's refreshment trolley?|Strawberries|Apples|Cheese|Honey|Medium|Strawberry Sales|Refreshment Trolley|Railway Rescue|Pop Enterprise|Episode Four|Train Business|Seasonal Produce
 Which station worker is exposed for pocketing money in the railway episode?|Station Master Fox|PC Harness|Alec Norman|Johnny Delamere|Medium|Station Master Fox|Missing Funds|Railway Rescue|Episode Four|Corruption|Police|Train Service
 What is the name of Ma's sister who visits in the fifth episode?|Bertha|Angela|Edith|Norma|Easy|Bertha|Ma Sister|Family Visit|Episode Five|Suburban Relatives|Household Tension|Sibling Rivalry
 What kind of development does Tom Fisher propose at Bluff Court?|Redeveloping the estate and surrounding land|Opening a local railway museum|Building a new cricket pavilion|Restoring a medieval monastery|Medium|Tom Fisher|Bluff Court|Property Development|Planning Permission|Episode Five|Threat To Village|Countryside
 What treasured tree is threatened by Tom Fisher's development plans?|Spreading Linda|Old Oak Annie|The King's Elm|The Queen's Beech|Hard|Spreading Linda|Village Tree|Bluff Court|Development Threat|Episode Five|Conservation|Local Landmark
 Which daughter brings crucial planning information to the village meeting?|Primrose|Mariette|Victoria|Zinnia|Medium|Primrose Larkin|Planning Office|Bluff Court|Village Meeting|Episode Five|Development Exposed|Family Intervention
 What make of car does Bertha drive in her race against Ma?|Jaguar|Bentley|Morris|Triumph|Medium|Bertha Jaguar|Ma Rolls Royce|Car Race|Sister Rivalry|Episode Five|Family Pride|Motor Cars
 To which country does Mariette plan to travel at the end of series one?|France|Italy|Spain|Germany|Easy|Mariette France|Travel Ambition|Series One Finale|Departure|Leaving Kent|Family Concern|Young Adult
 What kind of animal competition helps the Larkins delay Mariette's departure?|A donkey derby|A sheepdog trial|A pig race|A falconry show|Medium|Donkey Derby|Mariette Farewell|Episode Six|Village Party|Gymkhana|Family Celebration|2021 Finale
 Which glamorous visitor's arrival fuels village gossip about Pop?|Angela Snow|Pinkie Jerebohm|Mrs Charlton|Bertha|Medium|Angela Snow|Pop Larkin|Village Rumours|Finale Visitor|2021|Gossip|Social Tension
 What new family arrival do Pop and Ma announce at their series-one cocktail party?|Baby Oscar|A new grandchild|An adopted daughter|A visiting nephew|Easy|Baby Oscar|Pop And Ma|Family Announcement|Series One Finale|Cocktail Party|Newborn Son|2021
 What crime wave troubles the village in the 2021 Christmas special?|Burglaries|Car thefts|Arson attacks|Bank robberies|Easy|Christmas Burglaries|PC Harness|Village Police|Holiday Special|Local Crime|Investigation|Festive Mystery
 Whose parents arrive to meet the Larkins at Christmas?|Charley's|Tom Fisher's|Pauline's|Johnny Delamere's|Easy|Charley Parents|Family Visit|Christmas Special|Awkward Dinner|Mariette Romance|In Laws|2021
 What cuts off lighting and heating during The Larkins at Christmas?|A power cut|A broken boiler|A flood|A gas strike|Medium|Christmas Power Cut|Farm Chaos|Charley Parents|Festive Dinner|2021 Special|Electrical Failure|Holiday Emergency
 What is the surname of Pop's troublesome new neighbours in series two?|Jerebohm|Norman|Bluff-Gore|Delamere|Easy|Jerebohm Family|2022 New Neighbours|Second Series|Village Feud|Bluff Court|Antagonists|Surname
 Which grand house do the Jerebohms buy from Pop?|Bluff Court|Home Farm|Grantleigh Manor|Winkstead Hall|Medium|Bluff Court|Jerebohms Purchase|Pop Deal|Property Dispute|Series Two|Country House|Estate Sale
 What disastrous social occasion do the Jerebohms host in Bad Neighbours?|A dinner party|A christening|A charity ball|A wedding reception|Medium|Bad Neighbours|Dinner Party|Jerebohms|Series Two Premiere|Village Hosting|Social Tension|New Family
 Which newspaper does Primrose join while pursuing journalism in series two?|The Mid Kent Times|The Daily Express|The Kent Courier|The Evening Chronicle|Hard|Mid Kent Times|Primrose Larkin|Journalism Job|Local Newspaper|Second Series|Career Ambition|School Leaver
 Which clergyman attracts Primrose's romantic interest in the second series?|Reverend Ian Candy|The older vicar|The Brigadier|Johnny Delamere|Easy|Reverend Candy|Primrose Larkin|Young Romance|Second Series|Church|Love Interest|New Character
 What outdoor meal at the Larkin farm features in The Trap?|A barbecue|A picnic breakfast|A harvest supper|An afternoon tea|Easy|The Trap|Barbecue|Larkin Hospitality|Jerebohm Guests|Episode Two|Garden Gathering|2022
 Which friend of Pop arrives with a fairground in Love and Violence?|Fruity Pears|Tom Fisher|Johnny Delamere|Station Master Fox|Medium|Fruity Pears|Travelling Fairground|Love And Violence|Series Two|Pop Friend|Carnival|Episode Three
 Who tries to persuade Pop to treat his impending court case seriously?|Ma and the children|The Jerebohms|The vicar alone|Tom Fisher|Easy|Wheels Of Justice|Pop Court Case|Ma Larkin|Family Pressure|Legal Trouble|Episode Four|2022
 Who conducts Pop's defence in court in Wheels of Justice?|Pop himself|Charley Charlton|Johnny Delamere|Reverend Candy|Medium|Self Defence|Pop Larkin|Wheels Of Justice|Courtroom|Series Two|Legal Representation|Trial
 Which couple return from their European honeymoon during Wheels of Justice?|Mariette and Charley|Pop and Ma|Alec and Norma|Pinkie and Cuthbert|Medium|Mariette And Charley|Honeymoon Return|Wheels Of Justice|Series Two Episode Four|Family Homecoming|Europe|Marriage
 Where is Pop held following his court case?|Prison|A hospital|A police training college|An army barracks|Easy|Pop In Prison|Criminal Sentence|Series Two|Family Separation|Legal Consequences|Episode Five|Imprisonment
 What news does Mariette secretly give Pop while he is in prison?|She is pregnant|She is moving to Canada|She has bought a hotel|She has joined the police|Medium|Mariette Pregnancy|Pop Grandfather|Pop In Prison|Family Secret|2022|Episode Five|New Baby
 Which neighbour confesses that Pop was deliberately set up?|Norma Norman|Miss Chand|Miss Pilchester|Angela Snow|Medium|Norma Norman|Confession|Jerebohm Trap|Finale|Ma Larkin|Changed Allegiance|2022
 Who organises a sting operation to expose the plot against Pop in the finale?|Ma Larkin|Primrose Larkin|PC Harness|Mariette Charlton|Easy|Ma Sting|Vengeance|Jerebohm Plot|Final Episode|2022|Family Justice|Counter Scheme
 What is the title of the final episode broadcast in November 2022?|Vengeance|Bad Neighbours|The Trap|Love and Violence|Medium|Vengeance|Series Two Finale|November 2022|Episode Title|Programme Ending|Jerebohm Comeuppance|Last Broadcast
 `;

 const FIRST_ID = 16545;
 const EXPECTED_COUNT = 78;

 const normalise = value =>
   String(value).normalize('NFKC').trim().toLocaleLowerCase('en-GB');

 const questions = facts.trim().split('\n')
   .map(line => line.trim())
   .filter(Boolean)
   .map((line, index) => {
     const id = `tv_${FIRST_ID + index}`;
     const fields = line.split('|').map(value => value.trim());

     if (fields.length !== 13 || fields.some(value => !value)) {
       throw new Error(
         `Pack 345: incorrect fields at ${id} (${fields.length})`
       );
     }

     const [
       question, correctAnswer, wrong1, wrong2, wrong3,
       difficulty, ...specificTags
     ] = fields;

     if (
       !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
       specificTags.length !== 7 ||
       new Set(specificTags.map(normalise)).size !== 7
     ) {
       throw new Error(
         `Pack 345: invalid specialist tags or difficulty at ${id}`
       );
     }

     const answers = [wrong1, wrong2, wrong3];

     if (
       new Set([correctAnswer, ...answers].map(normalise)).size !== 4
     ) {
       throw new Error(`Pack 345: repeated answer at ${id}`);
     }

     answers.splice(index % 4, 0, correctAnswer);

     const tags = [...new Map([
       'Television',
       'British Television',
       'British Comedy Drama',
       'Period Drama',
       'Family Comedy',
       'ITV',
       '2021-2022',
       'The Larkins',
       'Programme: The Larkins',
       ...specificTags,
       correctAnswer
     ].map(tag => [normalise(tag), tag])).values()];

     return {
       id,
       category: 'Television',
       programme: 'The Larkins',
       question,
       answers,
       correctAnswer,
       difficulty,
       tags,
       dailyEligible: true
     };
   });

 // Validate the actual exported question objects.

 if (
   questions.length !== EXPECTED_COUNT ||
   questions[0].id !== 'tv_16545' ||
   questions[questions.length - 1].id !==
     `tv_${FIRST_ID + EXPECTED_COUNT - 1}`
 ) {
   throw new Error('Pack 345: incorrect count or ID range');
 }

 const seen = new Set();

 for (let i = 0; i < questions.length; i++) {
   const q = questions[i];
   const key = normalise(q.question);

   if (
     q.id !== `tv_${FIRST_ID + i}` ||
     seen.has(key) ||
     q.category !== 'Television' ||
     q.programme !== 'The Larkins' ||
     q.answers.length !== 4 ||
     new Set(q.answers.map(normalise)).size !== 4 ||
     q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
     q.tags.length < 15 ||
     q.dailyEligible !== true
   ) {
     throw new Error(
       `Pack 345: exported-object validation failed at ${q.id}`
     );
   }

   seen.add(key);
 }
// 21 November 2026: storyline audit of The Larkins (2021–2022).
// Preserve 78 original questions and their IDs tv_16545–tv_16622.
// New questions cover all twelve regular episodes and the Christmas special.
// Keep this adaptation separate from The Darling Buds of May (1991–93).
const auditAdditions = [
  {
    "id": "tv_38015",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, which military figure becomes Master of Hounds after Alec Norman loses the villagers' support?",
    "answers": [
      "The Brigadier",
      "PC Harness",
      "Johnny Delamere",
      "The Vicar"
    ],
    "correctAnswer": "The Brigadier",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E1 In Which We Meet The Larkin Family",
      "Episode storyline",
      "Character development",
      "Correct: The Brigadier",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Hunt committee",
      "Alec disgraced",
      "Village auction"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38016",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, who catches Primrose's eye at the travelling fair before Mariette helps her find him?",
    "answers": [
      "Ian Candy",
      "Eddie",
      "Tom Fisher",
      "Kenny"
    ],
    "correctAnswer": "Eddie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E1 In Which We Meet The Larkin Family",
      "Episode storyline",
      "Character development",
      "Correct: Eddie",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Primrose first crush",
      "Fairground boy",
      "Mariette helps"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38017",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, how does Pop block the sale of Miss Pilchester's cottage to a wealthy outsider?",
    "answers": [
      "He buys the cottage himself",
      "He arranges an emergency listed-building order",
      "He controls access to the cottage across surrounding land",
      "He persuades the bank to reject the buyer"
    ],
    "correctAnswer": "He controls access to the cottage across surrounding land",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E1 In Which We Meet The Larkin Family",
      "Episode storyline",
      "Character development",
      "Correct: He controls access to the cottage across surrounding land",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Edith cottage",
      "Road access",
      "Property deal"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38018",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, which food does Ma make resemble a more expensive bird for a meal?",
    "answers": [
      "Chicken made to look like turkey",
      "Pork made to look like venison",
      "Duck made to look like pheasant",
      "Ham made to look like goose"
    ],
    "correctAnswer": "Ham made to look like goose",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E1 In Which We Meet The Larkin Family",
      "Episode storyline",
      "Character development",
      "Correct: Ham made to look like goose",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Ma kitchen",
      "Fake goose",
      "Inventive dinner"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38019",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, where does visiting tax inspector Charley end up sleeping after missing the last train?",
    "answers": [
      "On the snooker table",
      "In the chicken shed",
      "Inside the greenhouse",
      "On the back seat of Pop's Rolls-Royce"
    ],
    "correctAnswer": "On the snooker table",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E2 In Which The Larkins Woo Charley The Tax Man",
      "Episode storyline",
      "Character development",
      "Correct: On the snooker table",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Charley overnight",
      "Missed train",
      "Larkin hospitality"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38020",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, who outbids Pop for the run-down Bluff Court estate?",
    "answers": [
      "Alec Norman",
      "Tom Fisher",
      "Johnny Delamere",
      "The Brigadier"
    ],
    "correctAnswer": "Tom Fisher",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E2 In Which The Larkins Woo Charley The Tax Man",
      "Episode storyline",
      "Character development",
      "Correct: Tom Fisher",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Bluff Court deal",
      "Rival buyer",
      "Property ambitions"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38021",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what device helps Montgomery's pram do well in the race?",
    "answers": [
      "A small petrol engine",
      "Bicycle pedals",
      "A flywheel fitted with Victoria's help",
      "A hidden electric motor"
    ],
    "correctAnswer": "A flywheel fitted with Victoria's help",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E2 In Which The Larkins Woo Charley The Tax Man",
      "Episode storyline",
      "Character development",
      "Correct: A flywheel fitted with Victoria's help",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Pram race",
      "Victoria invention",
      "Montgomery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38022",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, how does Pop make Alec Norman back off after Alec reports him to Charley?",
    "answers": [
      "He offers Alec free farming equipment",
      "He arranges a meeting with the Vicar",
      "He threatens to sell Alec's house",
      "He hints that Alec's own tax affairs need investigating"
    ],
    "correctAnswer": "He hints that Alec's own tax affairs need investigating",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E2 In Which The Larkins Woo Charley The Tax Man",
      "Episode storyline",
      "Character development",
      "Correct: He hints that Alec's own tax affairs need investigating",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Alec Norman",
      "Tax retaliation",
      "Pop negotiation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38023",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what does the local doctor accept in exchange for a sick note to cover Charley's absence from work?",
    "answers": [
      "A gift of meat",
      "A bottle of champagne",
      "A new coat",
      "A box of strawberries"
    ],
    "correctAnswer": "A gift of meat",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E3 In Which Pop And Ma Go On Holiday",
      "Episode storyline",
      "Character development",
      "Correct: A gift of meat",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Doctor sick note",
      "Meat barter",
      "Charley leave"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38024",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what happens to Ma's hand-knitted swimming costume at the seaside?",
    "answers": [
      "It shrinks before she reaches the beach",
      "It begins to unravel in the water",
      "She loses it from the hotel balcony",
      "A dog runs away with it"
    ],
    "correctAnswer": "It begins to unravel in the water",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E3 In Which Pop And Ma Go On Holiday",
      "Episode storyline",
      "Character development",
      "Correct: It begins to unravel in the water",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Ma swimming",
      "Margate beach",
      "Wardrobe mishap"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38025",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, how does Pauline deliberately spoil Mariette's date with Tom Fisher?",
    "answers": [
      "She hides the restaurant menu",
      "She switches off the dining room lights",
      "She spills wine on Mariette's dress",
      "She tells Tom that Charley has arrived"
    ],
    "correctAnswer": "She spills wine on Mariette's dress",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E3 In Which Pop And Ma Go On Holiday",
      "Episode storyline",
      "Character development",
      "Correct: She spills wine on Mariette's dress",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Pauline rivalry",
      "Restaurant",
      "Mariette date"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38026",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what unexpected situation is the young wedding couple facing when Pop and Ma meet them at their hotel?",
    "answers": [
      "They are secretly already married",
      "They have lost their rings at sea",
      "Their wedding venue has been sold",
      "The bride is pregnant and the marriage is being pressured"
    ],
    "correctAnswer": "The bride is pregnant and the marriage is being pressured",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E3 In Which Pop And Ma Go On Holiday",
      "Episode storyline",
      "Character development",
      "Correct: The bride is pregnant and the marriage is being pressured",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Young Kenny",
      "Duchess daughter",
      "Margate wedding"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38027",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what does Mariette ultimately do with the oversized television aerial after Pop and Ma return?",
    "answers": [
      "She disposes of it at a profit",
      "She gives it to the church",
      "She uses it to fix the radio",
      "She hides it in a barn"
    ],
    "correctAnswer": "She disposes of it at a profit",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E3 In Which Pop And Ma Go On Holiday",
      "Episode storyline",
      "Character development",
      "Correct: She disposes of it at a profit",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Television aerial",
      "Mariette enterprise",
      "Farm sitting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38028",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, why do Miss Chand and the village children repeatedly travel on the branch line?",
    "answers": [
      "To deliver letters to the council",
      "To boost passenger figures before a closure decision",
      "To rehearse a school play",
      "To inspect railway bridges"
    ],
    "correctAnswer": "To boost passenger figures before a closure decision",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E4 In Which The Larkins Rescue The Railway Station",
      "Episode storyline",
      "Character development",
      "Correct: To boost passenger figures before a closure decision",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "School pupils",
      "Train passengers",
      "Railway rescue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38029",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, which crop does Mariette give Pauline to pick after Pauline flirts with Charley?",
    "answers": [
      "Potatoes",
      "Apples",
      "Rhubarb",
      "Cauliflower"
    ],
    "correctAnswer": "Rhubarb",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E4 In Which The Larkins Rescue The Railway Station",
      "Episode storyline",
      "Character development",
      "Correct: Rhubarb",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Pauline punishment",
      "Fruit picking",
      "Mariette jealousy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38030",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what does Pop find suspicious after studying the railway branch's financial records?",
    "answers": [
      "The line is receiving a secret grant",
      "The station owns several empty warehouses",
      "The railway has too many engine drivers",
      "The reported takings are lower than the money collected"
    ],
    "correctAnswer": "The reported takings are lower than the money collected",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E4 In Which The Larkins Rescue The Railway Station",
      "Episode storyline",
      "Character development",
      "Correct: The reported takings are lower than the money collected",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Railway accounts",
      "Missing money",
      "Stationmaster"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38031",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what is the name of Bertha's dull and long-winded husband?",
    "answers": [
      "Howard",
      "Harold",
      "Hugh",
      "Harry"
    ],
    "correctAnswer": "Howard",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E5 In Which Ma's Sister Bertha Comes To Visit",
      "Episode storyline",
      "Character development",
      "Correct: Howard",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Bertha family",
      "Bromley visitors",
      "Boring husband"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38032",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, how does Victoria interfere with Tom Fisher's plans to take Mariette for a country drive?",
    "answers": [
      "She hides his driving licence",
      "She sabotages his sports car",
      "She puts the wrong fuel in Ma's Rolls-Royce",
      "She persuades the Vicar to block the road"
    ],
    "correctAnswer": "She sabotages his sports car",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E5 In Which Ma's Sister Bertha Comes To Visit",
      "Episode storyline",
      "Character development",
      "Correct: She sabotages his sports car",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Victoria sabotage",
      "Tom roadster",
      "Mariette"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38033",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what musical instrument does Charley hope to use in a grand romantic gesture to Mariette?",
    "answers": [
      "A saxophone",
      "A violin",
      "A sitar",
      "A trumpet"
    ],
    "correctAnswer": "A sitar",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E5 In Which Ma's Sister Bertha Comes To Visit",
      "Episode storyline",
      "Character development",
      "Correct: A sitar",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Charley romance",
      "Sitar",
      "Red roses"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38034",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what additional construction does Primrose uncover behind Tom Fisher's hotel plan?",
    "answers": [
      "A marina and fishing port",
      "An aerodrome and hangars",
      "A sports stadium and car park",
      "A road and housing estate"
    ],
    "correctAnswer": "A road and housing estate",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E5 In Which Ma's Sister Bertha Comes To Visit",
      "Episode storyline",
      "Character development",
      "Correct: A road and housing estate",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Tom redevelopment",
      "Town planning",
      "Primrose exposes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38035",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, which official's casting vote seems pivotal when the parish council splits over Tom's plans?",
    "answers": [
      "The Vicar's",
      "The Brigadier's",
      "Miss Chand's",
      "PC Harness's"
    ],
    "correctAnswer": "The Vicar's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E5 In Which Ma's Sister Bertha Comes To Visit",
      "Episode storyline",
      "Character development",
      "Correct: The Vicar's",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Parish council",
      "Swing vote",
      "Bribery"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38036",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, who has been caring for baby Oscar before the Larkins announce their plans for him?",
    "answers": [
      "Mariette's childhood friend",
      "A distant cousin whose daughter left him",
      "Charley's parents in London",
      "The village doctor"
    ],
    "correctAnswer": "A distant cousin whose daughter left him",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E6 In Which The Larkins Are Determined To Convince Mariette To Stay",
      "Episode storyline",
      "Character development",
      "Correct: A distant cousin whose daughter left him",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Baby Oscar",
      "Abandoned infant",
      "Temporary care"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38037",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what false rumour does Norma spread after seeing Ma bottle-feed Oscar?",
    "answers": [
      "That the Larkins are opening an orphanage",
      "That Oscar has been kidnapped",
      "That Pop or Mariette has an illegitimate baby",
      "That Ma is starting a nursery business"
    ],
    "correctAnswer": "That Pop or Mariette has an illegitimate baby",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E6 In Which The Larkins Are Determined To Convince Mariette To Stay",
      "Episode storyline",
      "Character development",
      "Correct: That Pop or Mariette has an illegitimate baby",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Norma gossip",
      "Baby scandal",
      "Village rumours"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38038",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what does Charley attempt for the first time after Tom Fisher challenges him at the gymkhana?",
    "answers": [
      "Driving a racing car",
      "Shooting clay pigeons",
      "Flying a glider",
      "Riding a horse bareback"
    ],
    "correctAnswer": "Riding a horse bareback",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E6 In Which The Larkins Are Determined To Convince Mariette To Stay",
      "Episode storyline",
      "Character development",
      "Correct: Riding a horse bareback",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Charley challenge",
      "Horse riding",
      "Tom rival"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38039",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, who accompanies Mariette when she finally leaves Littlechurch for Paris?",
    "answers": [
      "Charley",
      "Tom Fisher",
      "Primrose",
      "Pauline"
    ],
    "correctAnswer": "Charley",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S1E6 In Which The Larkins Are Determined To Convince Mariette To Stay",
      "Episode storyline",
      "Character development",
      "Correct: Charley",
      "Source: https://hebates.com/writing/the-larkins/episode-guide-s1",
      "Mariette departure",
      "Paris train",
      "Love choice"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38040",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, which former prisoner is unfairly suspected of the village Christmas burglaries?",
    "answers": [
      "Tom Fisher",
      "Ambrose Nunn",
      "Alec Norman",
      "Arthur Devoy"
    ],
    "correctAnswer": "Ambrose Nunn",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: 2021 Christmas The Larkins At Christmas",
      "Episode storyline",
      "Character development",
      "Correct: Ambrose Nunn",
      "Source: https://www.comedy.co.uk/tv/the_larkins_2021/episodes/2021/1/",
      "Village burglaries",
      "False suspicion",
      "Ex convict"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38041",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, where is the village nativity relocated after a power cut?",
    "answers": [
      "The railway station",
      "Bluff Court",
      "The Larkins' barn",
      "Miss Pilchester's cottage"
    ],
    "correctAnswer": "The Larkins' barn",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: 2021 Christmas The Larkins At Christmas",
      "Episode storyline",
      "Character development",
      "Correct: The Larkins' barn",
      "Source: https://www.comedy.co.uk/tv/the_larkins_2021/episodes/2021/1/",
      "Christmas nativity",
      "Power cut",
      "Farm barn"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38042",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, who restores the generator so the Larkin barn has power for Christmas celebrations?",
    "answers": [
      "Montgomery",
      "Charley",
      "The Brigadier",
      "Victoria"
    ],
    "correctAnswer": "Victoria",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: 2021 Christmas The Larkins At Christmas",
      "Episode storyline",
      "Character development",
      "Correct: Victoria",
      "Source: https://www.comedy.co.uk/tv/the_larkins_2021/episodes/2021/1/",
      "Generator repair",
      "Village blackout",
      "Nativity rescue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38043",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, which shared interest helps Ma and Mrs Charlton overcome their awkward first meeting?",
    "answers": [
      "Cooking",
      "Horse riding",
      "Classical music",
      "Gardening"
    ],
    "correctAnswer": "Cooking",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: 2021 Christmas The Larkins At Christmas",
      "Episode storyline",
      "Character development",
      "Correct: Cooking",
      "Source: https://www.comedy.co.uk/tv/the_larkins_2021/episodes/2021/1/",
      "Charley mother",
      "Family reconciliation",
      "Christmas dinner"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38044",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what relationship news do Mariette and Charley reveal the morning after the village nativity?",
    "answers": [
      "They have bought a farm in France",
      "They are engaged",
      "They are expecting twins",
      "They are moving to America"
    ],
    "correctAnswer": "They are engaged",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: 2021 Christmas The Larkins At Christmas",
      "Episode storyline",
      "Character development",
      "Correct: They are engaged",
      "Source: https://www.comedy.co.uk/tv/the_larkins_2021/episodes/2021/1/",
      "Engagement",
      "Christmas news",
      "Mr Charlton approval"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38045",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, how much more does Pop receive when selling Bluff Court to the Jerebohms compared with his purchase price?",
    "answers": [
      "Exactly the same sum",
      "One quarter as much",
      "Almost twice as much",
      "Ten times as much"
    ],
    "correctAnswer": "Almost twice as much",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E1 Bad Neighbours",
      "Episode storyline",
      "Character development",
      "Correct: Almost twice as much",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Bluff Court sale",
      "Pop negotiation",
      "New neighbours"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38046",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what do the Jerebohms demand after deciding they regret buying Bluff Court?",
    "answers": [
      "A second house at no charge",
      "A position on the parish council",
      "A five-year farming contract",
      "A substantial refund"
    ],
    "correctAnswer": "A substantial refund",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E1 Bad Neighbours",
      "Episode storyline",
      "Character development",
      "Correct: A substantial refund",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Buyers remorse",
      "Jerebohms",
      "Pop refuses"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38047",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what disruptive pastime do the Jerebohms begin to make their neighbours miserable?",
    "answers": [
      "Shooting",
      "Motor racing",
      "Late-night fireworks",
      "Running a noisy sawmill"
    ],
    "correctAnswer": "Shooting",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E1 Bad Neighbours",
      "Episode storyline",
      "Character development",
      "Correct: Shooting",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Jerebohm nuisance",
      "Gunfire",
      "Neighbour feud"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38048",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, who sends Reverend Ian Candy to help the existing village Vicar?",
    "answers": [
      "The Bishop of London",
      "The Dean",
      "The Archbishop of Canterbury",
      "The Brigadier"
    ],
    "correctAnswer": "The Dean",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E1 Bad Neighbours",
      "Episode storyline",
      "Character development",
      "Correct: The Dean",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Reverend Candy",
      "New appointment",
      "Parish"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38049",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, who helps Primrose obtain a trainee position at the Mid Kent Times after she is initially rejected?",
    "answers": [
      "Pop Larkin",
      "Reverend Candy",
      "Ma Larkin",
      "The Brigadier"
    ],
    "correctAnswer": "Ma Larkin",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E2 The Trap",
      "Episode storyline",
      "Character development",
      "Correct: Ma Larkin",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Primrose career",
      "Newspaper editor",
      "Ma intervention"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38050",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what story does Pinkie tell Pop to persuade him to visit Bluff Court with money?",
    "answers": [
      "She has won a lottery prize",
      "Her daughter is missing in the woods",
      "She wants to buy his swimming pool",
      "She fears her violent husband and needs help escaping"
    ],
    "correctAnswer": "She fears her violent husband and needs help escaping",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E2 The Trap",
      "Episode storyline",
      "Character development",
      "Correct: She fears her violent husband and needs help escaping",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Pinkie trap",
      "Fake distress",
      "Borrowing money"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38051",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what scene awaits Pop when he breaks into Bluff Court to help the apparently distressed Pinkie?",
    "answers": [
      "An emptied safe beside a large amount of cash",
      "A police officer waiting with a warrant",
      "A fire in the sitting room",
      "A locked bedroom with no one inside"
    ],
    "correctAnswer": "An emptied safe beside a large amount of cash",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E2 The Trap",
      "Episode storyline",
      "Character development",
      "Correct: An emptied safe beside a large amount of cash",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Burglary setup",
      "Empty safe",
      "Pop framed"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38052",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what is Pop accused of after he responds to Pinkie's apparent cries for help?",
    "answers": [
      "Assaulting Cuthbert",
      "Burgling Bluff Court",
      "Stealing a tractor",
      "Damaging the local railway"
    ],
    "correctAnswer": "Burgling Bluff Court",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E2 The Trap",
      "Episode storyline",
      "Character development",
      "Correct: Burgling Bluff Court",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Pop arrested",
      "Jerebohm plot",
      "Bluff Court"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38053",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, how does Ma arrange time alone for Primrose and Reverend Candy?",
    "answers": [
      "She books them a weekend in France",
      "She asks them to run the village fair",
      "She invites him to supper and sends the others away",
      "She puts them in charge of baby Oscar"
    ],
    "correctAnswer": "She invites him to supper and sends the others away",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E3 Love And Violence",
      "Episode storyline",
      "Character development",
      "Correct: She invites him to supper and sends the others away",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Ma matchmaking",
      "Reverend Candy",
      "Primrose"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38054",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what does Pop do when Fruity Pears says he may close his struggling fairground?",
    "answers": [
      "Offers to sell all the rides for scrap",
      "Asks the council to take over",
      "Converts it into a car park",
      "Buys the fairground and employs Fruity to operate it"
    ],
    "correctAnswer": "Buys the fairground and employs Fruity to operate it",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E3 Love And Violence",
      "Episode storyline",
      "Character development",
      "Correct: Buys the fairground and employs Fruity to operate it",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Fruity business",
      "Fairground rescued",
      "Pop investment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38055",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, how does Primrose escape being stuck making tea throughout her first newspaper job?",
    "answers": [
      "She builds a self-service tea station",
      "She persuades Pop to send a cook",
      "She refuses to enter the kitchen",
      "She secretly sells drinks outside"
    ],
    "correctAnswer": "She builds a self-service tea station",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E3 Love And Violence",
      "Episode storyline",
      "Character development",
      "Correct: She builds a self-service tea station",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Journalism trainee",
      "Office tea",
      "Primrose ingenuity"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38056",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what animal features in a roadside confrontation involving the Larkin and Jerebohm children?",
    "answers": [
      "A donkey",
      "A bull",
      "A sheepdog",
      "A goat"
    ],
    "correctAnswer": "A bull",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E3 Love And Violence",
      "Episode storyline",
      "Character development",
      "Correct: A bull",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Children feud",
      "Country lane",
      "Jerebohm encounter"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38057",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, under what kind of name does Primrose write about Pop's court case for the newspaper?",
    "answers": [
      "Her married name",
      "Her editor's name",
      "A pseudonym",
      "The name of the judge"
    ],
    "correctAnswer": "A pseudonym",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E4 Wheels Of Justice",
      "Episode storyline",
      "Character development",
      "Correct: A pseudonym",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Primrose reporter",
      "Court coverage",
      "Secrecy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38058",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, who gives evidence against Pop by lying under oath alongside Pinkie Jerebohm?",
    "answers": [
      "The Brigadier",
      "Miss Pilchester",
      "Angela Snow",
      "Alec Norman"
    ],
    "correctAnswer": "Alec Norman",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E4 Wheels Of Justice",
      "Episode storyline",
      "Character development",
      "Correct: Alec Norman",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "False testimony",
      "Court case",
      "Norman"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38059",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, which two villagers testify in Pop's defence but fail to convince the court?",
    "answers": [
      "Miss Pilchester and the Brigadier",
      "The Vicar and Reverend Candy",
      "The Normans and Johnny Delamere",
      "Mariette and Charley"
    ],
    "correctAnswer": "Miss Pilchester and the Brigadier",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E4 Wheels Of Justice",
      "Episode storyline",
      "Character development",
      "Correct: Miss Pilchester and the Brigadier",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Defence witnesses",
      "Magistrates",
      "Pop"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38060",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what sentence is handed down to Pop after the trial?",
    "answers": [
      "Six weeks of community service",
      "One year in prison",
      "A suspended fine",
      "Five years in prison"
    ],
    "correctAnswer": "One year in prison",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E4 Wheels Of Justice",
      "Episode storyline",
      "Character development",
      "Correct: One year in prison",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Pop convicted",
      "Court result",
      "Sentence"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38061",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what past offence does Primrose discover in Cuthbert Jerebohm's background?",
    "answers": [
      "Arson",
      "Smuggling",
      "Fraud",
      "Assaulting a police officer"
    ],
    "correctAnswer": "Fraud",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E5 Pop In Prison",
      "Episode storyline",
      "Character development",
      "Correct: Fraud",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Primrose investigation",
      "Cuthbert past",
      "Conviction"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38062",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what fact about Pinkie's earlier marriage comes to light during Primrose's investigation?",
    "answers": [
      "Her former husband was the Vicar",
      "She had never been legally married",
      "She had been widowed twice",
      "A husband divorced her on grounds of cruelty"
    ],
    "correctAnswer": "A husband divorced her on grounds of cruelty",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E5 Pop In Prison",
      "Episode storyline",
      "Character development",
      "Correct: A husband divorced her on grounds of cruelty",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Pinkie background",
      "Divorce",
      "Cruelty"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38063",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, whose retired barrister father offers legal help to Ma after Pop is imprisoned?",
    "answers": [
      "Angela Snow's",
      "Edith Pilchester's",
      "Mariette's",
      "Norma Norman's"
    ],
    "correctAnswer": "Angela Snow's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E5 Pop In Prison",
      "Episode storyline",
      "Character development",
      "Correct: Angela Snow's",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Retired QC",
      "Sir John Furlington Snow",
      "Appeal"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38064",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, which Jerebohm employee gives evidence supporting Pop's innocence?",
    "answers": [
      "The housekeeper",
      "Berndt the chauffeur",
      "The gamekeeper",
      "The gardener"
    ],
    "correctAnswer": "Berndt the chauffeur",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E5 Pop In Prison",
      "Episode storyline",
      "Character development",
      "Correct: Berndt the chauffeur",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Berndt chauffeur",
      "Mariette appeal",
      "Evidence"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38065",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what does Ma discover has happened to the magistrate considering Pop's appeal?",
    "answers": [
      "He has been promoted to the High Court",
      "He has emigrated to France",
      "Pinkie has bribed and blackmailed him",
      "He has been dismissed for stealing"
    ],
    "correctAnswer": "Pinkie has bribed and blackmailed him",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E5 Pop In Prison",
      "Episode storyline",
      "Character development",
      "Correct: Pinkie has bribed and blackmailed him",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Magistrate Sprague",
      "Corruption",
      "Appeal rejected"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38066",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, where is a hidden microphone placed so Pinkie's incriminating remarks can be recorded?",
    "answers": [
      "Under a dining table",
      "Behind a picture frame",
      "Inside a biscuit tin",
      "In a plant pot"
    ],
    "correctAnswer": "In a plant pot",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E6 Vengeance",
      "Episode storyline",
      "Character development",
      "Correct: In a plant pot",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Hidden recording",
      "Norma tea",
      "Evidence"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38067",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, which relationship does Norma reveal was concealed during Pop's original trial?",
    "answers": [
      "Alec and the magistrate are fellow Freemasons",
      "Pinkie is related to Pop",
      "The Vicar is married to Pinkie's sister",
      "Cuthbert is Charley's uncle"
    ],
    "correctAnswer": "Alec and the magistrate are fellow Freemasons",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E6 Vengeance",
      "Episode storyline",
      "Character development",
      "Correct: Alec and the magistrate are fellow Freemasons",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Freemason link",
      "Trial misconduct",
      "Alec"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38068",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, which church official threatens to transfer the old Vicar to another parish?",
    "answers": [
      "Reverend Candy",
      "The Dean",
      "The Archbishop of York",
      "The Bishop's secretary"
    ],
    "correctAnswer": "The Dean",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E6 Vengeance",
      "Episode storyline",
      "Character development",
      "Correct: The Dean",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Vicar discipline",
      "Parish transfer",
      "Dean"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38069",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, how does Reverend Candy respond when the Vicar tries to make him leave the parish?",
    "answers": [
      "He resigns and moves to London",
      "He immediately accepts a new parish",
      "He refuses after talking with Primrose",
      "He applies to become a schoolteacher"
    ],
    "correctAnswer": "He refuses after talking with Primrose",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E6 Vengeance",
      "Episode storyline",
      "Character development",
      "Correct: He refuses after talking with Primrose",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Candy stands firm",
      "Primrose support",
      "Vicar tension"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38070",
    "category": "Television",
    "programme": "The Larkins",
    "question": "In The Larkins, what price does Pop demand the Jerebohms accept to sell Bluff Court back to him?",
    "answers": [
      "The full price he originally received",
      "Double their purchase price",
      "No payment at all",
      "A knockdown price"
    ],
    "correctAnswer": "A knockdown price",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy Drama",
      "ITV",
      "Period Drama",
      "2021-2022",
      "The Larkins",
      "Programme: The Larkins",
      "Episode: S2E6 Vengeance",
      "Episode storyline",
      "Character development",
      "Correct: A knockdown price",
      "Source: https://en.wikipedia.org/wiki/The_Larkins_(2021_TV_series)",
      "Bluff Court recovered",
      "Jerebohms expelled",
      "Pop bargain"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length !== 134 ||
 questions[0].id !== 'tv_16545' || questions[77].id !== 'tv_16622' ||
 auditAdditions[0].id !== 'tv_38015' ||
 auditAdditions[auditAdditions.length-1].id !== 'tv_38070' ||
 new Set(questions.map(q=>q.id)).size !== questions.length ||
 new Set(questions.map(q=>normalise(q.question))).size !== questions.length ||
 questions.some(q=>q.answers.length!==4||new Set(q.answers.map(normalise)).size!==4||
 q.answers.filter(a=>a===q.correctAnswer).length!==1||q.programme!=='The Larkins'||
 !q.tags.includes('Programme: The Larkins')||q.tags.length<15||q.dailyEligible!==true)||
 auditAdditions.some(q=>!q.question.startsWith('In The Larkins, ')||
 !q.tags.some(t=>t.startsWith('Source: https://'))))
 throw Error('Pack 345 storyline audit failed');
module.exports = questions;
