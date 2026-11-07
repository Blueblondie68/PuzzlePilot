
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

 module.exports = questions;

